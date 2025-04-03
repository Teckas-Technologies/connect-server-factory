
import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Search as SearchIcon,
  Upload,
  Code,
  Server,
  Sparkles,
  MessageSquare,
  Tag,
  ThumbsUp,
  Users,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ServerGrid from "@/components/ServerGrid";
import ThirdPartyServers from "@/components/ThirdPartyServers";
import CommunityServers from "@/components/CommunityServers";
import { getFeaturedServers, categories, servers } from "@/lib/mockData";

const Index = () => {
  const featuredServers = getFeaturedServers();
  // Get most recent servers
  const recentServers = [...servers]
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, 6);
  
  return (
    <PageTransition>
      <Navbar />
      
      <Hero />
      
      {/* How it works section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Ultimate MCP Server Network
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover, deploy, and connect the best MCP servers in one place.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon className="size-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Discover Servers</h3>
              <p className="text-muted-foreground">
                Find the perfect MCP servers and tools for your needs with semantic search and detailed reviews.
              </p>
            </div>
            
            <div className="text-center">
              <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="size-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Submit Servers</h3>
              <p className="text-muted-foreground">
                Share your MCP servers with the community and optionally have them hosted on our network.
              </p>
            </div>
            
            <div className="text-center">
              <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="size-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Remixes</h3>
              <p className="text-muted-foreground">
                Combine multiple MCP servers to create powerful custom solutions that solve your specific needs.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link to="/browse">
                Explore All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured servers section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Servers</h2>
              <p className="text-xl text-muted-foreground">
                Popular and recommended MCP servers from our network
              </p>
            </div>
            
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/browse">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <ServerGrid 
            servers={featuredServers}
            columns={3}
          />
          
          <div className="mt-8 md:hidden text-center">
            <Button variant="outline" asChild>
              <Link to="/browse">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-xl text-muted-foreground">
                Explore MCP servers by their primary function or use case
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/browse">
                Explore All Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to discover, deploy, and manage MCP servers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-smooth">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Server className="size-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Network Hosting</h3>
              <p className="text-muted-foreground">
                Submit your servers to be hosted directly on our reliable network infrastructure for maximum uptime and performance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-smooth">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <ThumbsUp className="size-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ratings &amp; Reviews</h3>
              <p className="text-muted-foreground">
                Detailed ratings and reviews help you choose the best servers for your needs based on community feedback.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-smooth">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <SearchIcon className="size-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Semantic Search</h3>
              <p className="text-muted-foreground">
                Find exactly what you need with our powerful semantic search that understands context and meaning, not just keywords.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-smooth">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <MessageSquare className="size-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Feature Requests</h3>
              <p className="text-muted-foreground">
                Request new functionality and vote on features you'd like to see added to the MCP network.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-smooth">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Sparkles className="size-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Server Remixes</h3>
              <p className="text-muted-foreground">
                Create powerful combinations of servers to build custom solutions that perfectly fit your requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-smooth">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Code className="size-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Integration</h3>
              <p className="text-muted-foreground">
                Simple APIs and SDKs make it easy to integrate MCP servers into your applications with minimal code.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent servers */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recently Added</h2>
              <p className="text-xl text-muted-foreground">
                The newest MCP servers added to our network
              </p>
            </div>
            
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/browse">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <ServerGrid 
            servers={recentServers}
            columns={3}
          />
          
          <div className="mt-8 md:hidden text-center">
            <Button variant="outline" asChild>
              <Link to="/browse">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Add Your Server?
          </h2>
          <p className="text-xl opacity-90 mb-8 md:px-12">
            Join the MCP Network and share your server with thousands of developers and organizations looking for the right tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/browse">
                Explore Servers
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/submit">
                Submit Your Server
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Third-party and community servers */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <ThirdPartyServers />
          <CommunityServers />
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Index;
