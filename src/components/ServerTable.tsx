
import React, { useState } from 'react';
import { Search, Filter, SortAsc, SortDesc } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface ServerEntry {
  id?: string;
  name: string;
  description: string;
  category: string;
  url?: string;
  type: 'reference' | 'official' | 'community' | 'framework' | 'resource';
  tags?: string[];
}

interface ServerTableProps {
  servers: ServerEntry[];
  title?: string;
  description?: string;
  className?: string;
}

const ServerTable: React.FC<ServerTableProps> = ({
  servers,
  title,
  description,
  className,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [sortField, setSortField] = useState<'name' | 'category'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Filter servers by search term and category
  const filteredServers = servers.filter((server) => {
    const matchesSearch = searchTerm === '' || 
      server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      server.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (server.tags && server.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = categoryFilter === null || server.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Sort servers
  const sortedServers = [...filteredServers].sort((a, b) => {
    const aValue = a[sortField].toLowerCase();
    const bValue = b[sortField].toLowerCase();
    
    if (sortDirection === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  // Get unique categories for filter
  const categories = Array.from(new Set(servers.map(server => server.category)));

  // Toggle sort direction when clicking on same field
  const handleSort = (field: 'name' | 'category') => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className={className}>
      {(title || description) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-semibold mb-2">{title}</h2>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search servers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={categoryFilter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setCategoryFilter(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={categoryFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoryFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead 
                className="cursor-pointer" 
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center">
                  Name
                  {sortField === 'name' && (
                    sortDirection === 'asc' ? 
                      <SortAsc className="ml-1 h-4 w-4" /> : 
                      <SortDesc className="ml-1 h-4 w-4" />
                  )}
                </div>
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort('category')}
              >
                <div className="flex items-center">
                  Category
                  {sortField === 'category' && (
                    sortDirection === 'asc' ? 
                      <SortAsc className="ml-1 h-4 w-4" /> : 
                      <SortDesc className="ml-1 h-4 w-4" />
                  )}
                </div>
              </TableHead>
              <TableHead>Tags</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedServers.length > 0 ? (
              sortedServers.map((server, index) => (
                <TableRow key={server.id || `${server.name}-${index}`}>
                  <TableCell className="font-medium">{server.name}</TableCell>
                  <TableCell className="max-w-xs">
                    <p className="truncate">{server.description}</p>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        server.type === 'reference' ? "default" :
                        server.type === 'official' ? "secondary" :
                        server.type === 'community' ? "outline" :
                        "destructive"
                      }
                    >
                      {server.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {server.tags && server.tags.slice(0, 2).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {server.tags && server.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{server.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {server.url ? (
                      <Button asChild variant="outline" size="sm">
                        <a href={server.url} target="_blank" rel="noopener noreferrer">
                          View
                        </a>
                      </Button>
                    ) : server.id ? (
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/server/${server.id}`}>
                          Details
                        </Link>
                      </Button>
                    ) : null}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No servers found matching your criteria.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ServerTable;
