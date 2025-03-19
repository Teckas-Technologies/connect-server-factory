
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Decorative grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] -z-10" 
        style={{ 
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Discover MCP Servers & Clients
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up text-balance">
            The <span className="text-gradient">Ultimate Marketplace</span> for MCP Ecosystem
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-100 text-balance">
            Browse, discover, and integrate the best MCP servers and clients for your projects. 
            Find everything you need in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-200">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                className="pl-10 h-12 rounded-full w-full" 
                placeholder="Search for servers, clients, or categories..."
              />
            </div>
            <Button asChild size="lg" className="rounded-full px-6">
              <Link to="/browse">
                Browse All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground animate-fade-in animation-delay-300">
            <span className="font-medium">Popular:</span>{' '}
            <Link to="/browse?category=database" className="text-primary hover:underline mx-1">Database</Link> •
            <Link to="/browse?category=ai" className="text-primary hover:underline mx-1">AI Tools</Link> •
            <Link to="/browse?category=server" className="text-primary hover:underline mx-1">MCP Servers</Link> •
            <Link to="/browse?sdk=typescript" className="text-primary hover:underline mx-1">TypeScript</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
