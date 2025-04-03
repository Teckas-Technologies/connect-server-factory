
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  ArrowLeft, 
  Github, 
  Globe, 
  FileText, 
  Download, 
  Heart,
  Server as ServerIcon,
  Users,
  Calendar,
  CheckCircle,
  Copy,
  Tag
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServerReviews from '@/components/ServerReviews';
import ServerGrid from '@/components/ServerGrid';
import { getServerById, servers, categories } from '@/lib/mockData';
import { calculateAverageRating, formatDate } from '@/lib/utils';
import { getServerReviews } from '@/lib/mockData';

const ServerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [server, setServer] = useState(getServerById(id || ''));
  const [repoData, setRepoData] = useState<{
    stars: number;
    forks: number;
    createdAt: string;
    updatedAt: string;
    languages: string[];
  }>({
    stars: 0,
    forks: 0,
    createdAt: '',
    updatedAt: '',
    languages: []
  });
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  const reviews = id ? getServerReviews(id) : [];
  const averageRating = calculateAverageRating(reviews);
  
  const relatedServers = server 
    ? servers.filter(s => 
        s.id !== server.id && (
          s.category === server.category || 
          s.tags.some(tag => server.tags.includes(tag))
        )
      ).slice(0, 4)
    : [];
  
  const category = server ? categories.find(c => c.id === server.category) : undefined;
  
  useEffect(() => {
    if (server?.github) {
      // In a real application, this would fetch actual repository data
      // For the demo, we'll set mock values based on the server data
      setRepoData({
        stars: server.stars || Math.floor(Math.random() * 2000) + 100,
        forks: Math.floor(Math.random() * 500) + 10,
        createdAt: server.created_at,
        updatedAt: server.updated_at,
        languages: ['TypeScript', 'JavaScript', 'Python'].sort(() => Math.random() - 0.5).slice(0, 2)
      });
    }
  }, [server]);
  
  if (!server) {
    return (
      <PageTransition>
        <Navbar />
        <main className="min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Server not found</h2>
            <p className="text-muted-foreground mb-8">
              The server you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/browse">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Browse
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </PageTransition>
    );
  }
  
  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    
    toast({
      title: isFavorited ? "Removed from favorites" : "Added to favorites",
      description: isFavorited 
        ? "The server has been removed from your favorites" 
        : "The server has been added to your favorites"
    });
  };
  
  const handleCopyEndpoint = () => {
    if (server.deployment_url) {
      navigator.clipboard.writeText(server.deployment_url);
      
      toast({
        title: "Endpoint copied",
        description: "The server endpoint has been copied to your clipboard"
      });
    }
  };
  
  return (
    <PageTransition>
      <Navbar />
      
      <main className="min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="pl-0">
            <Link to="/browse">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge>
                  {server.type === 'server' ? 'Server' : 'Client'}
                </Badge>
                
                {server.verified && (
                  <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
                
                {server.featured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{server.name}</h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                {server.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {server.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                {server.github && (
                  <Button variant="outline" asChild>
                    <a href={server.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                
                {server.website && (
                  <Button variant="outline" asChild>
                    <a href={server.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Website
                    </a>
                  </Button>
                )}
                
                {server.documentation && (
                  <Button variant="outline" asChild>
                    <a href={server.documentation} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      Documentation
                    </a>
                  </Button>
                )}
                
                <Button onClick={handleFavorite} variant={isFavorited ? "default" : "outline"}>
                  <Heart className={`mr-2 h-4 w-4 ${isFavorited ? 'fill-primary-foreground' : ''}`} />
                  {isFavorited ? "Favorited" : "Favorite"}
                </Button>
              </div>
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="integration">Integration</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6 pt-6">
                {server.longDescription && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-semibold mb-4">About</h2>
                    <p className="text-base">{server.longDescription}</p>
                  </div>
                )}
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Features</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary p-2 rounded-md mt-1">
                        <ServerIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">MCP Protocol Compliant</h3>
                        <p className="text-muted-foreground">
                          Fully compliant with the Model Context Protocol standard for seamless integration.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary p-2 rounded-md mt-1">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{server.hosted ? 'Hosted Solution' : 'Self-Hosted Option'}</h3>
                        <p className="text-muted-foreground">
                          {server.hosted 
                            ? 'Fully managed and hosted on the MCP Network for reliability and performance.' 
                            : 'Flexible self-hosted deployment options for maximum control.'}
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary p-2 rounded-md mt-1">
                        <Tag className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{server.category === 'ai' ? 'AI-Powered Capabilities' : `${category?.name} Specialized`}</h3>
                        <p className="text-muted-foreground">
                          {server.category === 'ai' 
                            ? 'Advanced AI features for intelligent data processing and analysis.' 
                            : `Specialized ${category?.name.toLowerCase()} features optimized for ${category?.name.toLowerCase()} workloads.`}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {relatedServers.length > 0 && (
                  <div className="pt-6">
                    <h2 className="text-2xl font-semibold mb-6">Related Servers</h2>
                    <ServerGrid 
                      servers={relatedServers}
                      columns={2}
                    />
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="reviews" className="pt-6">
                <ServerReviews server={server} />
              </TabsContent>
              
              <TabsContent value="integration" className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Integration Guide</h2>
                
                <div className="space-y-6">
                  {server.hosted && server.deployment_url && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium">Endpoint</h3>
                      <div className="flex items-center gap-2">
                        <div className="bg-muted p-3 rounded-md flex-1 font-mono text-sm truncate">
                          {server.deployment_url}
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline" size="icon" onClick={handleCopyEndpoint}>
                                <Copy className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Copy endpoint</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Installation</h3>
                    <div className="bg-muted p-4 rounded-md">
                      <pre className="font-mono text-sm whitespace-pre-wrap">
                        npm install {server.name.toLowerCase().replace(/\s+/g, '-')}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Basic Usage</h3>
                    <div className="bg-muted p-4 rounded-md">
                      <pre className="font-mono text-sm whitespace-pre-wrap">
{`import { ${server.name} } from '${server.name.toLowerCase().replace(/\s+/g, '-')}';

// Initialize the client
const client = new ${server.name}({
  endpoint: '${server.deployment_url || 'https://api.example.com/v1'}',
  apiKey: 'YOUR_API_KEY'
});

// Make a request
const response = await client.process({
  input: "Your input data here",
  options: {
    // Additional options
  }
});

console.log(response);`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Environment Variables</h3>
                    <div className="bg-muted p-4 rounded-md">
                      <pre className="font-mono text-sm whitespace-pre-wrap">
{`# .env file
${server.name.toUpperCase().replace(/\s+/g, '_')}_API_KEY=your_api_key_here
${server.name.toUpperCase().replace(/\s+/g, '_')}_ENDPOINT=${server.deployment_url || 'https://api.example.com/v1'}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="border rounded-xl p-6 bg-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Server Info</h3>
                <Badge variant={server.type === 'server' ? "default" : "secondary"}>
                  {server.type === 'server' ? 'Server' : 'Client'}
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="text-muted-foreground">Author</div>
                  <div className="font-medium">{server.author.name}</div>
                </div>
                
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="text-muted-foreground">Category</div>
                  <div className="font-medium">{category?.name || server.category}</div>
                </div>
                
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="text-muted-foreground">Version</div>
                  <div className="font-medium">{server.version || '1.0.0'}</div>
                </div>
                
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="text-muted-foreground">Created</div>
                  <div className="font-medium">{formatDate(server.created_at)}</div>
                </div>
                
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="text-muted-foreground">Last Updated</div>
                  <div className="font-medium">{formatDate(server.updated_at)}</div>
                </div>
                
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="text-muted-foreground">License</div>
                  <div className="font-medium">MIT</div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
            
            <div className="border rounded-xl p-6 bg-card">
              <h3 className="font-semibold text-lg mb-4">Statistics</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-xl md:text-2xl font-bold">{server.stars || repoData.stars}</div>
                  <div className="text-muted-foreground text-sm">Stars</div>
                </div>
                
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-xl md:text-2xl font-bold">{repoData.forks}</div>
                  <div className="text-muted-foreground text-sm">Forks</div>
                </div>
                
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-xl md:text-2xl font-bold">{server.downloads || Math.floor(Math.random() * 10000) + 1000}</div>
                  <div className="text-muted-foreground text-sm">Downloads</div>
                </div>
                
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-xl md:text-2xl font-bold flex items-center justify-center">
                    {averageRating.toFixed(1)}
                    <Star className="h-5 w-5 text-yellow-400 ml-1" />
                  </div>
                  <div className="text-muted-foreground text-sm">Rating ({reviews.length})</div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="text-muted-foreground text-sm mb-2">Languages</div>
                <div className="flex flex-wrap gap-2">
                  {repoData.languages.map(lang => (
                    <Badge key={lang} variant="outline">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default ServerDetail;
