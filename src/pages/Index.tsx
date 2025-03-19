
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServerGrid from '@/components/ServerGrid';
import ServerCard from '@/components/ServerCard';
import CategoryCard from '@/components/CategoryCard';
import ServerTable from '@/components/ServerTable';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { 
  categories, 
  getFeaturedServers, 
  getLatestServers, 
  getTopRatedServers 
} from '@/lib/mockData';
import { cn } from '@/lib/utils';

// Example MCP servers data
const mcpServers = [
  {
    name: "AWS KB Retrieval",
    description: "Retrieval from AWS Knowledge Base using Bedrock Agent Runtime",
    category: "Reference Servers",
    type: "reference",
    tags: ["AWS", "Knowledge Base", "Bedrock"]
  },
  {
    name: "Brave Search",
    description: "Web and local search using Brave's Search API",
    category: "Reference Servers",
    type: "reference",
    tags: ["Search", "Web Search", "API"]
  },
  {
    name: "EverArt",
    description: "AI image generation using various models",
    category: "Reference Servers",
    type: "reference",
    tags: ["AI", "Image Generation", "Creative"]
  },
  {
    name: "Filesystem",
    description: "Secure file operations with configurable access controls",
    category: "Reference Servers",
    type: "reference",
    tags: ["Files", "Security", "Storage"]
  },
  {
    name: "21st.dev Magic",
    description: "Create crafted UI components inspired by the best 21st.dev design engineers",
    category: "Official Integrations",
    type: "official",
    tags: ["UI", "Components", "Design"]
  },
  {
    name: "AgentQL",
    description: "Enable AI agents to get structured data from unstructured web with AgentQL",
    category: "Official Integrations",
    type: "official", 
    tags: ["Web", "Data", "Structured"]
  },
  {
    name: "Apify",
    description: "Actors MCP Server: Use 3,000+ pre-built cloud tools to extract data from websites",
    category: "Official Integrations",
    type: "official",
    tags: ["Extraction", "Web", "Cloud"]
  },
  {
    name: "Ableton Live",
    description: "An MCP server to control Ableton Live",
    category: "Community Servers",
    type: "community",
    tags: ["Music", "Audio", "DAW"]
  },
  {
    name: "Airbnb",
    description: "Provides tools to search Airbnb and get listing details",
    category: "Community Servers",
    type: "community",
    tags: ["Travel", "Accommodation", "Search"]
  }
];

const Index = () => {
  const featuredServers = getFeaturedServers();
  const latestServers = getLatestServers().slice(0, 4);
  const topRatedServers = getTopRatedServers().slice(0, 3);
  
  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.reveal-animation').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8');
      el.classList.remove('animate-slide-up');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <PageTransition>
      <Navbar />
      
      <main>
        <Hero />
        
        {/* MCP Server List */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto reveal-animation">
            <h2 className="text-3xl font-bold mb-3">Model Context Protocol Servers</h2>
            <p className="text-muted-foreground max-w-2xl mb-10">
              Browse our collection of MCP servers categorized by type - reference implementations, official integrations, and community servers.
            </p>
            
            <ServerTable 
              servers={mcpServers} 
              className="mb-8" 
            />
            
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/browse?category=mcp">
                  View All MCP Servers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Browse by category */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 reveal-animation">
              <div>
                <h2 className="text-3xl font-bold mb-3">Browse by Category</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Explore our collection of MCP servers and clients organized by category to find exactly what you need.
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
        
        {/* Featured servers/clients */}
        {featuredServers.length > 0 && (
          <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto reveal-animation">
              <h2 className="text-3xl font-bold mb-3">Featured Servers & Clients</h2>
              <p className="text-muted-foreground max-w-2xl mb-10">
                Discover our handpicked selection of the best MCP servers and clients available in the marketplace.
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
                <div className="flex items-end justify-between mb-8">
                  <h2 className="text-2xl font-bold">Latest Additions</h2>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/browse?sort=latest" className="text-primary">
                      View all
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {latestServers.map((server) => (
                    <div 
                      key={server.id} 
                      className={cn(
                        "flex p-4 rounded-lg border border-border/40 bg-white shadow-sm",
                        "hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                      )}
                    >
                      <div className="flex-1 mr-4">
                        <h3 className="font-medium mb-1">{server.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{server.description}</p>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <span>{new Date(server.createdAt).toLocaleDateString()}</span>
                          <span className="mx-2">•</span>
                          <span>{server.type === 'server' ? 'Server' : 'Client'}</span>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="self-center flex-shrink-0">
                        <Link to={`/server/${server.id}`}>
                          Details
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="reveal-animation">
                <div className="flex items-end justify-between mb-8">
                  <h2 className="text-2xl font-bold">Top Rated</h2>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/browse?sort=rating" className="text-primary">
                      View all
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
                
                <div className="grid gap-6">
                  {topRatedServers.map((server) => (
                    <ServerCard key={server.id} server={server} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <h2 className="text-3xl font-bold mb-4">Have an MCP Server or Client?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share your creation with the community. Submit your MCP server or client to the marketplace and reach thousands of developers.
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
