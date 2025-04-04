import React, { useEffect, useState } from 'react';
import { ServerClient } from '@/lib/mockData';
import ServerCard from './ServerCard';
import { cn } from '@/lib/utils';

interface ServerGridProps {
  servers: ServerClient[];
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

const ServerGrid: React.FC<ServerGridProps> = ({ 
  servers, 
  title, 
  description,
  columns = 3,
  className
}) => {
  const [displayedServers, setDisplayedServers] = useState<ServerClient[]>([]);

  useEffect(() => {
    const updateServers = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setDisplayedServers(servers.slice(0, 8)); // Show only 2 servers on mobile
      } else if (screenWidth < 1024) {
        setDisplayedServers(servers.slice(0, 10)); // Show 4 servers on tablets
      } else {
        setDisplayedServers(servers); // Show all servers on larger screens
      }
    };

    updateServers();
    window.addEventListener("resize", updateServers);
    return () => window.removeEventListener("resize", updateServers);
  }, [servers]);

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={cn("w-full", className)}>
      {(title || description) && (
        <div className="mb-8">
          {title && <h2 className="text-2xl font-semibold mb-2">{title}</h2>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      
      <div className={cn("grid gap-6", gridCols[columns])}>
        {displayedServers.map((server) => (
          <ServerCard 
            key={server.id} 
            server={server} 
            featured={server.featured}
          />
        ))}
      </div>
    </div>
  );
};

export default ServerGrid;
