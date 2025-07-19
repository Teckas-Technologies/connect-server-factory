import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SearchFilters from "@/components/SearchFilters";
import ServerGrid from "@/components/ServerGrid";
import { servers, categories } from "@/lib/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RepoData {
  id: string;
  stars: number;
  createdAt: string;
}

const extractRepoDetails = (githubUrl: string) => {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  return match ? { owner: match[1], repo: match[2] } : null;
};

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredServers, setFilteredServers] = useState(servers);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [repoData, setRepoData] = useState<RepoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Get category and sort from URL params
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const categoryParam = searchParams.get("category");
  const sortParam = searchParams.get("sort") || "recent";

  // Fetch GitHub data for all servers
  useEffect(() => {
    const fetchRepoData = async () => {
      setIsLoading(true);
      const headers = {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      };

      try {
        const fetchedData = await Promise.all(
          servers
            .filter((server) => server.github)
            .map(async (server) => {
              const details = extractRepoDetails(server.github);
              if (!details) return null;

              try {
                const res = await fetch(
                  `https://api.github.com/repos/${details.owner}/${details.repo}`,
                  { headers }
                );
                const data = await res.json();
                return {
                  id: server.id,
                  stars: data.stargazers_count || 0,
                  createdAt: data.created_at,
                };
              } catch (error) {
                console.error("Error fetching GitHub data:", error);
                return {
                  id: server.id,
                  stars: 0,
                  createdAt: new Date().toISOString(),
                };
              }
            })
        );

        setRepoData(fetchedData.filter(Boolean) as RepoData[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepoData();
  }, []);

  // Filter and sort servers based on all criteria
  useEffect(() => {
    if (isLoading) return;

    let result = [...servers];

    // Category filter
    if (categoryParam) {
      const category = categories.find((cat) => cat.id === categoryParam);
      if (category) {
        result = result.filter((server) => server.category === categoryParam);
      }
    }

    // Search query
    if (searchQuery) {
      result = result.filter(
        (server) =>
          server.name.toLowerCase().includes(searchQuery) ||
          server.description.toLowerCase().includes(searchQuery) ||
          server.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
      );
    }

    // Checkbox filters
    const filterParam = searchParams.get("filters");
    if (filterParam) {
      const filters = filterParam.split(",");
      result = result.filter((server) => {
        return filters.some((filter) => {
          return (
            server.category.toLowerCase() === filter ||
            server.type.toLowerCase() === filter
          );
        });
      });
    }

    // Minimum rating filter
    const minRatingParam = searchParams.get("minRating");
    if (minRatingParam) {
      const minRating = parseFloat(minRatingParam);
      result = result.filter((server) => {
        const repo = repoData.find((r) => r.id === server.id);
        return repo ? repo.stars >= minRating : false;
      });
    }

    // Sorting
    if (sortParam && repoData.length > 0) {
      result = result.sort((a, b) => {
        const repoA = repoData.find((r) => r.id === a.id);
        const repoB = repoData.find((r) => r.id === b.id);

        if (!repoA || !repoB) return 0;

        switch (sortParam) {
          case "rating":
            return repoB.stars - repoA.stars;
          case "recent":
            return (
              new Date(repoB.createdAt).getTime() -
              new Date(repoA.createdAt).getTime()
            );
          default:
            return 0;
        }
      });
    }

    setFilteredServers(result);
  }, [
    categoryParam,
    searchQuery,
    searchParams,
    sortParam,
    repoData,
    isLoading,
  ]);

  useEffect(() => {
    if (categoryParam) {
      setActiveTab(categoryParam);
    } else {
      setActiveTab("all"); // Default tab when no category is set
    }
  }, [categoryParam]);

  const handleTabChange = (value: string) => {
    setActiveTab(value); // Update the state

    if (value === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", value);
    }

    setSearchParams(searchParams);
  };

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      searchParams.delete("search"); // Clear search param when empty
    } else {
      const matchedCategory = categories.find(
        (cat) => cat.name.toLowerCase() === searchTerm.trim().toLowerCase()
      );

      if (matchedCategory) {
        searchParams.set("category", matchedCategory.id);
        searchParams.delete("search");
        setActiveTab(matchedCategory.id);
      } else {
        searchParams.set("search", searchTerm.trim());
        searchParams.delete("category");
        setActiveTab("all");
      }
    }
    setSearchParams(searchParams);
  };

  const handleFilter = (filters: string[]) => {
    if (filters.length > 0) {
      // Convert all filters to lowercase before setting them in the URL
      const lowercaseFilters = filters.map((filter) => filter.toLowerCase());
      searchParams.set("filters", lowercaseFilters.join(","));
    } else {
      searchParams.delete("filters");
    }
    setSearchParams(searchParams);
  };

  const handleSort = (sort: string) => {
    if (sort) {
      searchParams.set("sort", sort);
    } else {
      searchParams.delete("sort");
    }
    setSearchParams(searchParams);
  };

  return (
    <PageTransition>
      <Navbar />

      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {categoryParam
                ? `Browse ${
                    categories.find((c) => c.id === categoryParam)?.name || ""
                  } Servers`
                : searchQuery
                ? `Search Results for "${searchQuery}"`
                : "Browse MCP Servers & Clients"}
            </h1>
            <p className="text-muted-foreground">
              {filteredServers.length}{" "}
              {filteredServers.length === 1 ? "result" : "results"} found
            </p>
          </div>

          <SearchFilters
            onSearch={handleSearch}
            onFilter={handleFilter}
            onSort={handleSort}
            initialValue=""
          />

          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="mb-8"
          >
            <div className="border-b mb-4 overflow-x-auto md:overflow-visible">
              <TabsList className="bg-transparent p-0 h-auto flex md:block space-x-2 md:space-x-0">
                <TabsTrigger
                  value="all"
                  className="py-2 px-4 rounded-none whitespace-nowrap data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                >
                  All
                </TabsTrigger>
                {categories.slice(0, 8).map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="py-2 px-4 rounded-none whitespace-nowrap data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              {filteredServers.length > 0 ? (
                <ServerGrid servers={filteredServers} columns={3} />
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">No results found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Browse;
