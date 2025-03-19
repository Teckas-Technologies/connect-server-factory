
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import SearchFilters from '@/components/SearchFilters';
import ServerGrid from '@/components/ServerGrid';
import { servers, categories } from '@/lib/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredServers, setFilteredServers] = useState(servers);
  const [activeTab, setActiveTab] = useState<string>("all");
  
  // Get category and sort from URL params
  const categoryParam = searchParams.get('category');
  const sortParam = searchParams.get('sort') || 'popular';
  
  useEffect(() => {
    // Apply filtering based on URL params
    let result = [...servers];
    
    if (categoryParam) {
      result = result.filter(server => server.category === categoryParam);
      setActiveTab(categoryParam);
    } else {
      setActiveTab("all");
    }
    
    // Apply sorting
    switch (sortParam) {
      case 'latest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'stars':
        result.sort((a, b) => b.stars - a.stars);
        break;
      default: // 'popular'
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    
    setFilteredServers(result);
  }, [categoryParam, sortParam]);
  
  const handleTabChange = (value: string) => {
    if (value === "all") {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };
  
  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === '') {
      setFilteredServers(servers);
      return;
    }
    
    const searchLower = searchTerm.toLowerCase();
    
    const result = servers.filter(server => 
      server.name.toLowerCase().includes(searchLower) ||
      server.description.toLowerCase().includes(searchLower) ||
      server.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
      server.sdkType.some(sdk => sdk.toLowerCase().includes(searchLower))
    );
    
    setFilteredServers(result);
  };

  return (
    <PageTransition>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Browse MCP Servers & Clients</h1>
            <p className="text-muted-foreground">
              Discover and explore a wide range of MCP servers and clients for your next project.
            </p>
          </div>
          
          <SearchFilters onSearch={handleSearch} />
          
          <Tabs 
            value={activeTab} 
            onValueChange={handleTabChange} 
            className="mb-8"
          >
            <div className="border-b mb-4">
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger 
                  value="all" 
                  className="py-2 px-4 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                >
                  All
                </TabsTrigger>
                {categories.slice(0, 7).map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="py-2 px-4 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-0">
              {filteredServers.length > 0 ? (
                <ServerGrid 
                  servers={filteredServers}
                  columns={3}
                />
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">No results found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Browse;
