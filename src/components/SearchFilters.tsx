
import React, { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';

interface SearchFiltersProps {
  onSearch?: (searchTerm: string) => void;
  onFilter?: (filters: any) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchTerm);
  };
  
  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };
  
  const clearAllFilters = () => {
    setActiveFilters([]);
  };
  
  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          className="pl-10 pr-20 h-12 w-full" 
          placeholder="Search for servers, clients, or categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <Tabs defaultValue="category">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="category">Category</TabsTrigger>
                    <TabsTrigger value="type">Type</TabsTrigger>
                    <TabsTrigger value="sdk">SDK</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="category" className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 my-2">
                      {['Database', 'AI', 'Security', 'Cloud', 'Performance'].map((category) => (
                        <div key={category} className="flex items-start space-x-2">
                          <Checkbox id={`category-${category}`} onCheckedChange={() => addFilter(category)} />
                          <label
                            htmlFor={`category-${category}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="type" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="type-server" onCheckedChange={() => addFilter('Server')} />
                        <label
                          htmlFor="type-server"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Server
                        </label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="type-client" onCheckedChange={() => addFilter('Client')} />
                        <label
                          htmlFor="type-client"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Client
                        </label>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sdk" className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 my-2">
                      {['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust'].map((sdk) => (
                        <div key={sdk} className="flex items-start space-x-2">
                          <Checkbox id={`sdk-${sdk}`} onCheckedChange={() => addFilter(sdk)} />
                          <label
                            htmlFor={`sdk-${sdk}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {sdk}
                          </label>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Minimum Rating</h4>
                    <Slider defaultValue={[3.5]} min={0} max={5} step={0.5} />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0</span>
                      <span>5</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Sort By</h4>
                    <Select defaultValue="popular">
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <Button 
                    className="w-full"
                    onClick={() => onFilter?.(activeFilters)}
                  >
                    Apply Filters
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={clearAllFilters}
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Button type="submit" variant="default" size="sm" className="h-8">
            Search
          </Button>
        </div>
      </form>
      
      {activeFilters.length > 0 && (
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {activeFilters.map(filter => (
            <Badge key={filter} variant="secondary" className="flex items-center gap-1">
              {filter}
              <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter(filter)} />
            </Badge>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-sm h-7 px-2" 
            onClick={clearAllFilters}
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
