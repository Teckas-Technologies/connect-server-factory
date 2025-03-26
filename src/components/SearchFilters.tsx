import React, { useState, useEffect, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useSearchFocus } from "@/contexts/SearchFocusContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { servers } from "@/lib/mockData";
interface SearchFiltersProps {
  onSearch?: (searchTerm: string) => void;
  onFilter?: (filters: any) => void;
  onSort?: (sort: string) => void;
  initialValue?: string;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  onSearch,
  onFilter,
  onSort,
  initialValue = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sortBy, setSortBy] = useState("recent");
  const inputRef = useSearchFocus();
  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchTerm.trim()); // Always send trimmed value
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    // If input is being cleared, trigger search update immediately
    if (value === "") {
      onSearch?.("");
    }
  };

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  // In the handleFilterToggle function
  const handleFilterToggle = (filter: string, checked: boolean) => {
    const lowercaseFilter = filter.toLowerCase(); // Convert to lowercase
    if (checked) {
      if (!activeFilters.includes(lowercaseFilter)) {
        setActiveFilters([...activeFilters, lowercaseFilter]);
      }
    } else {
      setActiveFilters(activeFilters.filter((f) => f !== lowercaseFilter));
    }
  };

  // In the removeFilter function
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter.toLowerCase()));
  };

  // In the applyFilters function
  const applyFilters = () => {
    // Convert activeFilters to lowercase before passing to onFilter
    const lowercaseFilters = activeFilters.map((f) => f.toLowerCase());
    onFilter?.(lowercaseFilters);
    onSort?.(sortBy.toLowerCase()); // Also lowercase sort if needed

    setIsSheetOpen(false);
  };
  const clearAllFilters = () => {
    setActiveFilters([]);
    setSortBy("recent"); // Changed from "popular" to "recent"
    onFilter?.([]);
    onSort?.("recent"); // Changed from "popular" to "recent"
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          ref={inputRef}
          className="pl-10 pr-20 h-12 w-full placeholder:text-ellipsis placeholder:overflow-hidden placeholder:whitespace-nowrap placeholder:max-w-[80%] sm:placeholder:max-w-full"
          placeholder="Search for servers, clients, or categories..."
          value={searchTerm}
          onChange={handleInputChange} // Updated handler
        />
        
        {/* Clear button (X) - only shown when there's text */}
        {searchTerm && (
          <button
            type="button"
            className="absolute right-14 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={() => {
              setSearchTerm("");
              onSearch?.("");
            }}
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
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
                      {[
                        "Database",
                        "AI",
                        "Security",
                        "Cloud",
                        "Performance",
                      ].map((category) => (
                        <div
                          key={category}
                          className="flex items-start space-x-2"
                        >
                          <Checkbox
                            id={`category-${category}`}
                            checked={activeFilters.includes(
                              category.toLowerCase()
                            )}
                            onCheckedChange={(checked) =>
                              handleFilterToggle(category, checked as boolean)
                            }
                          />
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
                        <Checkbox
                          id="type-server"
                          onCheckedChange={() => addFilter("Server")}
                        />
                        <label
                          htmlFor="type-server"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Server
                        </label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="type-client"
                          onCheckedChange={() => addFilter("Client")}
                        />
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
                      {["TypeScript", "JavaScript", "Python", "Go", "Rust"].map(
                        (sdk) => (
                          <div key={sdk} className="flex items-start space-x-2">
                            <Checkbox
                              id={`sdk-${sdk}`}
                              onCheckedChange={() => addFilter(sdk)}
                            />
                            <label
                              htmlFor={`sdk-${sdk}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {sdk}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Sort By</h4>
                    <Select
                      value={sortBy}
                      onValueChange={(value) => {
                        setSortBy(value);
                        onSort?.(value);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="recent">Most Recent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Button
                    className="w-full"
                    onClick={applyFilters}
                    // Disabled when no filters
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

          {activeFilters.map((filter) => (
            <Badge
              key={filter}
              variant="secondary"
              className="flex items-center gap-1 text-xs"
            >
              {/* Convert back to proper case for display */}
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => {
                  removeFilter(filter);
                  onFilter?.(activeFilters.filter((f) => f !== filter));
                }}
              />
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
