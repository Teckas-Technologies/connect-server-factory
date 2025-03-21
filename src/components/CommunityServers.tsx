import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { communityServers } from '@/lib/communityServers';

interface CommunityServerProps {
  name: string;
  description: string;
  github: string;
  logo?: string;
}

const CommunityServer: React.FC<CommunityServerProps> = ({ 
  name, 
  description, 
  github, 
  logo 
}) => {
  return (
    <Card className="transition-smooth duration-300 hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          {logo && (
            <div className="flex-shrink-0">
              <div className="w-8 h-8 overflow-hidden">
                <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-900 truncate">{name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2 mt-1">{description}</p>
          </div>
          <div className="flex-shrink-0">
            <Button variant="outline" size="sm" asChild>
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                GitHub
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface CommunityServersProps {
  className?: string;
  servers?: CommunityServerProps[];
}

const CommunityServers: React.FC<CommunityServersProps> = ({ className, servers = communityServers }) => {
  return (
    <div className={className}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Community Servers</h2>
        <p className="text-muted-foreground">
          These MCP servers are developed and maintained by the community, showcasing various applications of MCP across different domains.
        </p>
        <p className="text-muted-foreground text-sm mt-1 italic">
          Note: Community servers are untested and should be used at your own risk. They are not affiliated with or endorsed by Anthropic.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {servers.map((server, index) => (
          <CommunityServer 
            key={index}
            name={server.name}
            description={server.description}
            github={server.github}
            logo={server.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityServers;
