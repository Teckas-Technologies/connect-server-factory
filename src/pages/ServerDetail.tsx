import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import {
  ArrowLeft,
  Star,
  Github,
  Eye,
  Share2,
  Heart,
  MessageSquare,
  Calendar,
  Tag,
  Code,
  Copy,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getServerById, getTopRatedServers } from "@/lib/mockData";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServerGrid from "@/components/ServerGrid";
import { useState, useRef } from "react";

const ServerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const server = getServerById(id || "");
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [repoData, setRepoData] = useState<{
    stars: number;
    createdAt: string;
    languages: string[];
    readme: string;
  }>({
    stars: 0,
    createdAt: "",
    languages: [],
    readme: "",
  });
  const popupRef = useRef<HTMLDivElement>(null);
  const pageUrl = window.location.href;
  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
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

        // Fetch repository README
        fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
          headers,
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.content) {
              const decodedReadme = atob(data.content);
              setRepoData((prev) => ({
                ...prev,
                readme: decodedReadme,
              }));
            }
          })
          .catch((error) => console.error("Error fetching README:", error));
      }
    }
  }, [server.github]);
  if (!server) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Server Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/browse">Browse All Servers</Link>
          </Button>
        </div>
      </div>
    );
  }

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

  // Mock star rating
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // Sample code snippets
  const typescriptSnippet = `import { create${
    server.name
  } } from "${server.name.toLowerCase()}";

const client = create${server.name}({
  apiKey: process.env.API_KEY,
  options: { /* your configuration */ }
});

// Example usage
const response = await client.connect();
console.log(response);`;

  const pythonSnippet = `from ${server.name.toLowerCase()} import create_client

client = create_client(
    api_key=os.environ.get("API_KEY"),
    options={ # your configuration
        "timeout": 30,
        "retry": True
    }
)

# Example usage
response = client.connect()
print(response)`;

  // Related servers
  const relatedServers = getTopRatedServers()
    .filter((s) => s.id !== server.id)
    .slice(0, 3);

  return (
    <PageTransition>
      <Navbar />

      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white border border-border/40 rounded-xl shadow-sm p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{server.name}</h1>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>By {server.author.name}</span>
                      <span className="mx-2">•</span>
                      <span className="capitalize">{server.type}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 relative">
                    {/* <Button variant="outline" size="icon">
          <Heart className="h-5 w-5" />
        </Button> */}

                    <div className="relative">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setShowSharePopup((prev) => !prev)}
                      >
                        <Share2 className="h-5 w-5" />
                      </Button>

                      {showSharePopup && (
                        <div
                          ref={popupRef}
                          className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-md p-3 z-10"
                        >
                          <p className="text-sm font-medium text-[#2563EB] mb-2 break-all">
                            {pageUrl}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCopy}
                            className="w-full flex items-center justify-center"
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            {copied ? "Copied!" : "Copy Link"}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {server.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {server.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>
                      <strong className="text-foreground">
                        {repoData.stars} Stars
                      </strong>{" "}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Added {repoData.createdAt || "N/A"}{" "}
                      {/* Changed to toLocaleString() */}
                    </span>
                  </div>
                </div>

                {/* <div className="mt-6 pt-6 border-t">
                  <Button asChild className="w-full sm:w-auto">
                    <Link to={`/server/${server.id}/setup`}>
                      <Terminal className="mr-2 h-4 w-4" />
                      View Setup Instructions
                    </Link>
                  </Button>
                </div> */}
              </div>

              <div className="bg-white border border-border/40 rounded-xl shadow-sm overflow-hidden">
                <Tabs defaultValue="overview">
                  <TabsList className="w-full justify-start px-6 pt-4 bg-transparent">
                    <TabsTrigger value="overview" className="text-sm">
                      Overview
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="overview"
                    className="p-6 md:p-8 space-y-6"
                  >
                    {repoData.readme ? (
                      <div className="markdown-body">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          rehypePlugins={[rehypeRaw]}
                        >
                          {repoData.readme}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      "No README available"
                    )}
                  </TabsContent>

                  <TabsContent
                    value="examples"
                    className="p-6 md:p-8 space-y-6"
                  >
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Integration Examples
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Use these code examples to quickly integrate{" "}
                        {server.name} into your project.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-md font-medium">TypeScript</h3>
                            <Button variant="ghost" size="sm">
                              <Copy className="h-4 w-4 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-auto">
                            <pre className="font-mono text-sm">
                              <code>{typescriptSnippet}</code>
                            </pre>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-md font-medium">Python</h3>
                            <Button variant="ghost" size="sm">
                              <Copy className="h-4 w-4 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-auto">
                            <pre className="font-mono text-sm">
                              <code>{pythonSnippet}</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Configuration Options
                      </h3>
                      <div className="border rounded-md overflow-hidden">
                        <table className="min-w-full divide-y divide-border">
                          <thead className="bg-muted/50">
                            <tr>
                              <th className="px-4 py-3 text-left text-sm font-medium">
                                Option
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium">
                                Type
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium">
                                Default
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium">
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-border">
                            <tr>
                              <td className="px-4 py-3 text-sm font-medium">
                                timeout
                              </td>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                number
                              </td>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                30
                              </td>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                Request timeout in seconds
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm font-medium">
                                retry
                              </td>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                boolean
                              </td>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                true
                              </td>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                Enable automatic retry on failure
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm font-medium">
                                maxRetries
                              </td>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                number
                              </td>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                3
                              </td>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                Maximum number of retry attempts
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">
                        Reviews & Ratings
                      </h2>
                      <Button>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Write Review
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-6 pb-6 border-b">
                        <div className="flex-shrink-0">
                          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                            JD
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">John Doe</h3>
                            <span className="text-xs text-muted-foreground">
                              3 days ago
                            </span>
                          </div>
                          <div className="flex items-center mb-3">
                            <StarRating rating={5} />
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">
                            This is an excellent implementation of MCP. The
                            documentation is clear and comprehensive, and the
                            API is intuitive and easy to use. I was able to
                            integrate it into my project in just a few minutes.
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                              <Star className="h-3 w-3" />
                              Helpful (12)
                            </button>
                            <button className="hover:text-foreground transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6 pb-6 border-b">
                        <div className="flex-shrink-0">
                          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                            AS
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">Alice Smith</h3>
                            <span className="text-xs text-muted-foreground">
                              1 week ago
                            </span>
                          </div>
                          <div className="flex items-center mb-3">
                            <StarRating rating={4} />
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">
                            Very good implementation, but I encountered a few
                            issues with the error handling. Otherwise, it's a
                            solid choice for MCP integration.
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                              <Star className="h-3 w-3" />
                              Helpful (7)
                            </button>
                            <button className="hover:text-foreground transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                            RM
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">Robert Miller</h3>
                            <span className="text-xs text-muted-foreground">
                              2 weeks ago
                            </span>
                          </div>
                          <div className="flex items-center mb-3">
                            <StarRating rating={5} />
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">
                            I've tried several MCP implementations, and this is
                            by far the best one. The performance is outstanding,
                            and the API is well-designed and consistent.
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                              <Star className="h-3 w-3" />
                              Helpful (15)
                            </button>
                            <button className="hover:text-foreground transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full mt-6">
                      Load More Reviews
                    </Button>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white border border-border/40 rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Server Info</h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Category
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="capitalize">{server.category}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      SDK Support
                    </div>
                    {repoData.languages?.length > 0 && (
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        <span>{repoData.languages.join(", ")}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      GitHub
                    </div>
                    <a
                      href={server.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Repository</span>
                    </a>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Added
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{repoData.createdAt || "N/A"}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  {/* <Button className="w-full">Add to Favorites</Button> */}
                  <Button
                    variant="outline"
                    className="w-full mt-2"
                    onClick={() => {
                      if (server?.github) {
                        window.open(`${server.github}/issues/new`, "_blank");
                      } else {
                        alert("GitHub URL not available for this server.");
                      }
                    }}
                  >
                    Report Issue
                  </Button>
                </div>
              </div>

              {/* <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Related Servers</h3>
                <div className="space-y-4">
                  {relatedServers.map((relatedServer) => (
                    <Link
                      key={relatedServer.id}
                      to={`/server/${relatedServer.id}`}
                      className="block p-4 bg-white rounded-lg border border-border/40 hover:shadow-md transition-all hover:-translate-y-1"
                    >
                      <h4 className="font-medium mb-1">{relatedServer.name}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {relatedServer.description}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{relatedServer.rating.toFixed(1)}</span>
                        </div>
                        <span className="mx-2">•</span>
                        <span className="capitalize">{relatedServer.type}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default ServerDetail;
