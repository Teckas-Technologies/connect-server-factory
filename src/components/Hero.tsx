import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Star, Users, Server, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ServerClient } from "@/lib/types";
import { getFeaturedServers } from "@/lib/mockData";
import { useSearchFocus } from "@/contexts/SearchFocusContext";
import { servers, categories } from "@/lib/mockData";
const Hero: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const featuredServer = getFeaturedServers()[0];
  const inputRef = useSearchFocus();
  const handleBrowseClick = () => {
    const query = searchValue.trim().toLowerCase();

    if (query) {
      // Check if the query matches any category
      const matchedCategory = categories.find(
        (cat) => cat.name.toLowerCase() === query
      );

      if (matchedCategory) {
        // If it matches a category, navigate with category instead of search
        window.location.href = `/browse?category=${matchedCategory.id}`;
      } else {
        // Otherwise, perform a normal search
        window.location.href = `/browse?search=${encodeURIComponent(query)}`;
      }
    } else {
      window.location.href = `/browse`;
    }
  };

  const [repoData, setRepoData] = useState<{
    stars: number;
    createdAt: string;
    languages: string[];
  }>({
    stars: 0,
    createdAt: "",
    languages: [],
  });
  const extractRepoDetails = (githubUrl: string) => {
    console.log("Extracting repo details from URL:", githubUrl);
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      console.log(
        "Extracted owner-----------------",
        match[1],
        "Extracted repo---------",
        match[2]
      );
      return { owner: match[1], repo: match[2] };
    }
    console.warn("Failed to extract repo details from:", githubUrl);
    return { owner: "", repo: "" };
  };
  useEffect(() => {
    if (featuredServer.github) {
      const { owner, repo } = extractRepoDetails(featuredServer.github);
      if (owner && repo) {
        console.log(`Fetching repo data from GitHub: ${owner}/${repo}`);

        const headers = {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        };

        // Fetch repository details
        fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers })
          .then((res) => res.json())
          .then((data) => {
            setRepoData((prev) => ({
              ...prev,
              stars: data.stargazers_count || 0,
              createdAt: new Date(data.created_at).toLocaleDateString(),
            }));
          })
          .catch((error) =>
            console.error("Error fetching repo details:", error)
          );

        // Fetch repository languages
        fetch(`https://api.github.com/repos/${owner}/${repo}/languages`, {
          headers,
        })
          .then((res) => res.json())
          .then((data) => {
            setRepoData((prev) => ({
              ...prev,
              languages: Object.keys(data),
            }));
          })
          .catch((error) => console.error("Error fetching languages:", error));
      }
    }
  }, [featuredServer.github]);

  return (
    <section className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] -z-10"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="text-left">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Discover MCP Servers & Clients
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up text-balance">
              The <span className="text-gradient">Ultimate Marketplace</span>{" "}
              for MCP Ecosystem
            </h1>

            <p className="text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl animate-slide-up animation-delay-100 text-balance">
              Browse, discover, and integrate the best MCP servers and clients
              for your projects. Find everything you need in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12 animate-slide-up animation-delay-200">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  ref={inputRef}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="pl-10 h-12 rounded-full w-full"
                  placeholder="Search for servers, clients, or categories..."
                />
              </div>
              <Button
                asChild
                size="lg"
                className="rounded-full px-6"
                onClick={handleBrowseClick}
              >
                <Link to="/browse">
                  {searchValue.trim() === "" ? "Browse All" : "Browse"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-slide-up animation-delay-300">
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm text-muted-foreground">Servers</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold">10k+</div>
                  <div className="text-sm text-muted-foreground">Users</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Featured server */}
          {featuredServer && (
            <div className="relative animate-slide-up animation-delay-200">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-lg border border-border/40">
                <div className="flex items-center gap-2 mb-4">
                  <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Featured Server</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {featuredServer.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {featuredServer.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">
                      {repoData.stars}
                    </span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link to={`/server/${featuredServer.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
