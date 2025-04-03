
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, Database, Server, ArrowDownWideNarrow, ArrowUpWideNarrow, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchFilters from '@/components/SearchFilters';
import ServerGrid from '@/components/ServerGrid';
import FeatureRequests from '@/components/FeatureRequests';
import ServerRemixBuilder from '@/components/ServerRemixBuilder';
import { servers, categories } from '@/lib/mockData';
import { semanticSearch, precomputeEmbeddings } from '@/lib/semanticSearch';
import { ServerClient } from '@/lib/types';

const Browse = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search));
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(searchParams.get('category'));
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('recent');
  const [page, setPage] = useState<string>('servers');
  const [serversWithEmbeddings, setServersWithEmbeddings] = useState<ServerClient[]>([]);
  const [filteredServers, setFilteredServers] = useState<ServerClient[]>([]);
  
  // Initialize with embeddings
  useEffect(() => {
    const enhancedServers = precomputeEmbeddings(servers);
    setServersWithEmbeddings(enhancedServers);
  }, []);
  
  useEffect(() => {
    // Parse search parameters whenever the location changes
    const params = new URLSearchParams(location.search);
    setSearchParams(params);
    
    const search = params.get('search');
    const category = params.get('category');
    
    if (search) setSearchValue(search);
    if (category) setActiveCategoryId(category);
  }, [location]);
  
  useEffect(() => {
    let results: ServerClient[] = [...serversWithEmbeddings];
    
    // Apply category filter
    if (activeCategoryId) {
      results = results.filter(server => server.category === activeCategoryId);
    }
    
    // Apply tag/type filters
    if (activeFilters.length > 0) {
      results = results.filter(server => {
        // Check if server matches ANY of the active filters
        return activeFilters.some(filter => {
          const lowerFilter = filter.toLowerCase();
          return (
            server.tags.some(tag => tag.toLowerCase() === lowerFilter) ||
            server.type.toLowerCase() === lowerFilter ||
            server.category.toLowerCase() === lowerFilter
          );
        });
      });
    }
    
    // Apply text search
    if (searchValue) {
      // Use semantic search when there's a search term
      results = semanticSearch(searchValue, results);
    }
    
    // Apply sorting
    if (sortBy === 'recent') {
      results = [...results].sort((a, b) => 
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    } else if (sortBy === 'rating') {
      // For demo purposes, using stars as a proxy for rating
      results = [...results].sort((a, b) => (b.stars || 0) - (a.stars || 0));
    }
    
    setFilteredServers(results);
  }, [serversWithEmbeddings, searchValue, activeCategoryId, activeFilters, sortBy]);
  
  const handleSearch = (value: string) => {
    setSearchValue(value);
    
    // Update URL params
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }
    
    // Use History API to update URL without reload
    window.history.replaceState(null, '', `?${newParams.toString()}`);
  };
  
  const handleFilter = (filters: string[]) => {
    setActiveFilters(filters);
  };
  
  const handleSort = (sortValue: string) => {
    setSortBy(sortValue);
  };
  
  const selectCategory = (categoryId: string | null) => {
    setActiveCategoryId(categoryId);
    
    // Update URL params
    const newParams = new URLSearchParams(searchParams);
    if (categoryId) {
      newParams.set('category', categoryId);
    } else {
      newParams.delete('category');
    }
    
    // Use History API to update URL without reload
    window.history.replaceState(null, '', `?${newParams.toString()}`);
  };
  
  return (
    <PageTransition>
      <Navbar />
      
      <main className="min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse the MCP Network</h1>
          <p className="text-muted-foreground md:text-lg">
            Discover and integrate MCP servers and clients for your projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-1">
                <Button 
                  variant={activeCategoryId === null ? "default" : "ghost"}
                  className="justify-start w-full" 
                  size="sm"
                  onClick={() => selectCategory(null)}
                >
                  <Database className="mr-2 h-4 w-4" />
                  All Categories
                </Button>
                
                {categories.map(category => (
                  <Button 
                    key={category.id}
                    variant={activeCategoryId === category.id ? "default" : "ghost"}
                    className="justify-start w-full" 
                    size="sm"
                    onClick={() => selectCategory(category.id)}
                  >
                    <category.icon className="mr-2 h-4 w-4" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Type</h3>
              <div className="space-y-1">
                <Button 
                  variant={activeFilters.includes('server') ? "default" : "ghost"}
                  className="justify-start w-full" 
                  size="sm"
                  onClick={() => {
                    const newFilters = activeFilters.includes('server')
                      ? activeFilters.filter(f => f !== 'server')
                      : [...activeFilters, 'server'];
                    handleFilter(newFilters);
                  }}
                >
                  <Server className="mr-2 h-4 w-4" />
                  Servers
                </Button>
                <Button 
                  variant={activeFilters.includes('client') ? "default" : "ghost"}
                  className="justify-start w-full" 
                  size="sm"
                  onClick={() => {
                    const newFilters = activeFilters.includes('client')
                      ? activeFilters.filter(f => f !== 'client')
                      : [...activeFilters, 'client'];
                    handleFilter(newFilters);
                  }}
                >
                  <User className="mr-2 h-4 w-4" />
                  Clients
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Sort</h3>
              <div className="space-y-1">
                <Button 
                  variant={sortBy === 'recent' ? "default" : "ghost"}
                  className="justify-start w-full" 
                  size="sm"
                  onClick={() => handleSort('recent')}
                >
                  <ArrowUpWideNarrow className="mr-2 h-4 w-4" />
                  Most Recent
                </Button>
                <Button 
                  variant={sortBy === 'rating' ? "default" : "ghost"}
                  className="justify-start w-full" 
                  size="sm"
                  onClick={() => handleSort('rating')}
                >
                  <ArrowDownWideNarrow className="mr-2 h-4 w-4" />
                  Highest Rated
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div>
            <SearchFilters 
              onSearch={handleSearch} 
              onFilter={handleFilter}
              onSort={handleSort}
              initialValue={searchValue}
            />
            
            <Tabs defaultValue="servers" value={page} onValueChange={setPage} className="mt-6">
              <TabsList>
                <TabsTrigger value="servers">Servers</TabsTrigger>
                <TabsTrigger value="remixes">Remixes</TabsTrigger>
                <TabsTrigger value="requests">Feature Requests</TabsTrigger>
              </TabsList>
              
              <TabsContent value="servers" className="mt-6">
                <ServerGrid 
                  servers={filteredServers}
                  columns={3}
                />
                
                {filteredServers.length === 0 && (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium mb-2">No servers found</h3>
                    <p className="text-muted-foreground mb-8">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button 
                      onClick={() => {
                        handleSearch('');
                        handleFilter([]);
                        selectCategory(null);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="remixes" className="mt-6">
                <ServerRemixBuilder />
              </TabsContent>
              
              <TabsContent value="requests" className="mt-6">
                <FeatureRequests />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Browse;
