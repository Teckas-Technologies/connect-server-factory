
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Slack, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col justify-between md:flex-row gap-6 ">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-medium mb-4">
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
                MCP
              </div>
              <span className="text-lg font-medium">
                Marketplace
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              The ultimate marketplace for MCP servers and clients. Discover, integrate, and build with the best tools in the ecosystem.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="size-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="size-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Slack className="size-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col justify-between md:flex-row">
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-3">
                <li><Link to="/browse" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Browse All</Link></li>
                {/* <li><Link to="/featured" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Featured</Link></li> */}
                <li><Link to="/submit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Submit Server/Client</Link></li>
                <li><Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              </ul>
            </div>
            
            {/* <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/docs/guides" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Guides</Link></li>
                <li><Link to="/docs/tutorials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tutorials</Link></li>
                <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div> */}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/60">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MCP Marketplace. All rights reserved.
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
