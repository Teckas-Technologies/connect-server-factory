import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowUpRight, Heart } from 'lucide-react';
import { type ServerClient } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ServerCardProps {
  server: ServerClient;
  featured?: boolean;
  className?: string;
}

const ServerCard: React.FC<ServerCardProps> = ({ server, featured = false, className }) => {
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl border border-border/40 bg-white transition-smooth duration-300",
        featured ? "shadow-md hover:shadow-lg" : "shadow-sm hover:shadow-md",
        featured ? "-translate-y-1 hover:-translate-y-2" : "hover:-translate-y-1",
        className
      )}
    >
      <div className="relative p-6">
        {/* {featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-primary/90 hover:bg-primary">Featured</Badge>
          </div>
        )} */}
        
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors-smooth">
              {server.name}
            </h3>
            <div className="flex items-center mt-1 text-sm text-muted-foreground">
              <span className="font-medium">{server.author.name}</span>
              <span className="inline-block mx-2">•</span>
              <span>{server.type === 'server' ? 'Server' : 'Client'}</span>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
            <Heart className="size-[18px]" />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
          {server.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {server.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="secondary" className="font-normal text-xs">
              {tag}
            </Badge>
          ))}
          {server.tags.length > 3 && (
            <Badge variant="outline" className="text-xs font-normal">
              +{server.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm">
            <div className="flex items-center mr-4">
              <Star className="size-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{server.rating.toFixed(1)}</span>
              <span className="text-muted-foreground ml-1">({server.reviewCount})</span>
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium">{server.stars}</span> stars
            </div>
          </div>
          
          <Button asChild variant="outline" size="sm" className="gap-1">
            <Link to={`/server/${server.id}`}>
              Details
              <ArrowUpRight className="size-3" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServerCard;
