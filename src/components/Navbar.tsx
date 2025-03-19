
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
      scrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-medium">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
            MCP
          </div>
          <span className={cn(
            "text-lg font-medium transition-opacity",
            scrolled ? "opacity-100" : "opacity-90"
          )}>
            Marketplace
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link to="/" className={cn("nav-link", isActive('/') && "nav-link-active")}>
              Home
            </Link>
            <Link to="/browse" className={cn("nav-link", isActive('/browse') && "nav-link-active")}>
              Browse
            </Link>
            <Link to="/submit" className={cn("nav-link", isActive('/submit') && "nav-link-active")}>
              Submit
            </Link>
            <Link to="/docs" className={cn("nav-link", isActive('/docs') && "nav-link-active")}>
              Documentation
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Search className="size-4" />
            </Button>
            <Button asChild variant="default" size="sm" className="px-4 rounded-full">
              <Link to="/auth">
                <User className="size-4 mr-2" />
                Sign In
              </Link>
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 top-[57px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-6 gap-4">
          <Link to="/" className={cn(
            "py-3 px-4 rounded-md font-medium transition-colors",
            isActive('/') ? "bg-primary/10 text-primary" : "hover:bg-muted"
          )}>
            Home
          </Link>
          <Link to="/browse" className={cn(
            "py-3 px-4 rounded-md font-medium transition-colors",
            isActive('/browse') ? "bg-primary/10 text-primary" : "hover:bg-muted"
          )}>
            Browse
          </Link>
          <Link to="/submit" className={cn(
            "py-3 px-4 rounded-md font-medium transition-colors",
            isActive('/submit') ? "bg-primary/10 text-primary" : "hover:bg-muted"
          )}>
            Submit
          </Link>
          <Link to="/docs" className={cn(
            "py-3 px-4 rounded-md font-medium transition-colors",
            isActive('/docs') ? "bg-primary/10 text-primary" : "hover:bg-muted"
          )}>
            Documentation
          </Link>
          <div className="border-t my-2"></div>
          <Button asChild variant="default" className="mt-2">
            <Link to="/auth">Sign In</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
