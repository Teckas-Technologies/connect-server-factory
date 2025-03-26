import React, { useEffect, useState } from "react";
import { ArrowRight, Star, Clock, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServerGrid from "@/components/ServerGrid";
import ServerCard from "@/components/ServerCard";
import CategoryCard from "@/components/CategoryCard";
import ServerTable from "@/components/ServerTable";
import ThirdPartyServers from "@/components/ThirdPartyServers";
import CommunityServers from "@/components/CommunityServers";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import {
  categories,
  getFeaturedServers,
  getLatestServers,
  getTopRatedServers,
  communityServers,
} from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { servers } from "@/lib/mockData";
// Example MCP servers data
const mcpServers = [
  {
    name: "AWS KB Retrieval",
    description:
      "Retrieval from AWS Knowledge Base using Bedrock Agent Runtime",
    category: "Reference Servers",
    type: "reference" as const,
    tags: ["AWS", "Knowledge Base", "Bedrock"],
  },
  {
    name: "Brave Search",
    description: "Web and local search using Brave's Search API",
    category: "Reference Servers",
    type: "reference" as const,
    tags: ["Search", "Web Search", "API"],
  },
  {
    name: "EverArt",
    description: "AI image generation using various models",
    category: "Reference Servers",
    type: "reference" as const,
    tags: ["AI", "Image Generation", "Creative"],
  },
  {
    name: "Filesystem",
    description: "Secure file operations with configurable access controls",
    category: "Reference Servers",
    type: "reference" as const,
    tags: ["Files", "Security", "Storage"],
  },
  {
    name: "21st.dev Magic",
    description:
      "Create crafted UI components inspired by the best 21st.dev design engineers",
    category: "Official Integrations",
    type: "official" as const,
    tags: ["UI", "Components", "Design"],
  },
  {
    name: "AgentQL",
    description:
      "Enable AI agents to get structured data from unstructured web with AgentQL",
    category: "Official Integrations",
    type: "official" as const,
    tags: ["Web", "Data", "Structured"],
  },
  {
    name: "Apify",
    description:
      "Actors MCP Server: Use 3,000+ pre-built cloud tools to extract data from websites",
    category: "Official Integrations",
    type: "official" as const,
    tags: ["Extraction", "Web", "Cloud"],
  },
  {
    name: "Ableton Live",
    description: "An MCP server to control Ableton Live",
    category: "Community Servers",
    type: "community" as const,
    tags: ["Music", "Audio", "DAW"],
  },
  {
    name: "Airbnb",
    description: "Provides tools to search Airbnb and get listing details",
    category: "Community Servers",
    type: "community" as const,
    tags: ["Travel", "Accommodation", "Search"],
  },
];
interface RepoData {
  id: string;
  name: string;
  description: string;
  type: "server" | "client";
  stars: number;
  createdAt: string;
  github: string;
}

// Extract owner and repo from GitHub URL
const extractRepoDetails = (githubUrl: string) => {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  return match ? { owner: match[1], repo: match[2] } : null;
};
const Index = () => {
  const featuredServers = getFeaturedServers();
  const latestServers = getLatestServers().slice(0, 4);
  const topRatedServers = getTopRatedServers().slice(0, 3);

  const [repoData, setRepoData] = useState<RepoData[]>([]);

  useEffect(() => {
    const fetchRepoData = async () => {
      const headers = {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      };

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
                ...server,
                stars: data.stargazers_count || 0,
                createdAt: data.created_at, // Store it as an ISO string
              };
            } catch (error) {
              console.error("Error fetching GitHub data:", error);
              return { ...server, stars: 0, createdAt: "Unknown" };
            }
          })
      );

      setRepoData(fetchedData.filter(Boolean) as RepoData[]);
    };

    fetchRepoData();
  }, []);

  const topRated = [...repoData].sort((a, b) => b.stars - a.stars).slice(0, 3);
  const latest = [...repoData]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 4);
  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-animation").forEach((el) => {
      el.classList.add("opacity-0", "translate-y-8");
      el.classList.remove("animate-slide-up");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <PageTransition>
      <Navbar />

      <main>
        <Hero />

        {/* Popular Categories */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 reveal-animation">
              <div>
                <h2 className="text-3xl font-bold mb-3">Popular Categories</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Explore our collection of MCP servers and clients organized by
                  category to find exactly what you need.
                </p>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0">
                <Link to="/browse">
                  View All Categories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-animation">
              {categories.slice(0, 8).map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Servers */}
        {featuredServers.length > 0 && (
          <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto reveal-animation">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-3xl font-bold">
                  Featured Servers & Clients
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mb-10">
                Discover our handpicked selection of the best MCP servers and
                clients available in the marketplace.
              </p>

              <ServerGrid servers={featuredServers} columns={3} />
            </div>
          </section>
        )}

        {/* Latest + Top Rated */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="reveal-animation">
                <div className="flex items-center gap-2 mb-8">
                  <Clock className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">Latest Additions</h2>
                </div>
                <div className="space-y-4">
                  {latest.map((server) => (
                    <div
                      key={server.id}
                      className={cn(
                        "flex p-4 rounded-lg border bg-white shadow-sm hover:shadow-md transition-smooth duration-300 hover:-translate-y-1"
                      )}
                    >
                      <div className="flex-1 mr-4">
                        <h3 className="font-medium mb-1">{server.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {server.description}
                        </p>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <span>
                            {new Date(server.createdAt).toLocaleString()}
                          </span>

                          <span className="mx-2">•</span>
                          <span>
                            {server.type === "server" ? "Server" : "Client"}
                          </span>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="self-center flex-shrink-0"
                      >
                        <Link to={`/server/${server.id}`}>Details</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal-animation">
                <div className="flex items-center gap-2 mb-8">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">Top Rated</h2>
                </div>
                <div className="grid gap-6">
                  {topRated.map((server) => (
                    <ServerCard key={server.id} server={server} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Servers */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto reveal-animation">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-primary" />
              <h2 className="text-3xl font-bold">Community Servers</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mb-10">
              Explore servers created and maintained by the MCP community.
            </p>

            <CommunityServers servers={communityServers.slice(0, 6)} />

            {/* <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/browse?type=community">
                  View All Community Servers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div> */}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <div className="inline-block mb-6">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Join the Community
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Have an MCP Server or Client?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share your creation with the community. Submit your MCP server or
              client to the marketplace and reach thousands of developers.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/submit">
                Submit Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Index;
