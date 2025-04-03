
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, ArrowUpRight, Heart } from "lucide-react";
import { type ServerClient } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServerCardProps {
  server: ServerClient;
  featured?: boolean;
  className?: string;
}

const ServerCard: React.FC<ServerCardProps> = ({
  server,
  featured = false,
  className,
}) => {
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
    if (server.github) {
      const { owner, repo } = extractRepoDetails(server.github);
      if (owner && repo) {
        console.log(`Fetching repo data from GitHub: ${owner}/${repo}`);

        const headers = {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        };

        // Fetch repository details
        fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers })
          .then((res) => {
            console.log(`Repo API response status: ${res.status}`);
            return res.json();
          })
          .then((data) => {
            console.log("Repo API response:", data);
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
          .then((res) => {
            console.log(`Languages API response status: ${res.status}`);
            return res.json();
          })
          .then((data) => {
            console.log("Languages API response:", data);
            setRepoData((prev) => ({
              ...prev,
              languages: Object.keys(data),
            }));
          })
          .catch((error) => console.error("Error fetching languages:", error));
      }
    }
  }, [server.github]);

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl border border-border/40 bg-white transition-smooth duration-300",
        featured ? "shadow-md hover:shadow-lg" : "shadow-sm hover:shadow-md",
        featured
          ? "-translate-y-1 hover:-translate-y-2"
          : "hover:-translate-y-1",
        className
      )}
    >
      <div className="relative p-6">
        {/* {featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-primary/90 hover:bg-primary">Featured</Badge>
          </div>
        )} */}

        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors-smooth">
              {server.name}
            </h3>
            <div className="flex items-center mt-1 text-sm text-muted-foreground">
              <span className="font-medium">{server.author.name}</span>
              <span className="inline-block mx-2">•</span>
              <span>{server.type === "server" ? "Server" : "Client"}</span>
            </div>
          </div>
          {featured && (
         <Button variant="ghost" size="icon"   className="cursor-default hover:bg-transparent hover:text-primary focus-visible:ring-0">
         <Badge variant="default" className="bg-primary/90 hover:bg-primary/90 focus:bg-primary/90 active:bg-primary/90">
           Featured
         </Badge>
       </Button>
       
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
          {server.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {server.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-normal text-xs"
            >
              {tag}
            </Badge>
          ))}
          {server.tags.length > 3 && (
            <Badge variant="outline" className="text-xs font-normal">
              +{server.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm">
            <div className="flex items-center mr-4">
              <Star className="size-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{repoData.stars} Stars</span>
            </div>
          </div>

          <Button asChild variant="outline" size="sm" className="gap-1">
            <Link to={`/server/${server.id}`}>
              Details
              <ArrowUpRight className="size-3" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServerCard;
