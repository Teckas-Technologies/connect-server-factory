import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThirdPartyServerProps {
  name: string;
  description: string;
  github: string;
  logo?: string;
}

const ThirdPartyServer: React.FC<ThirdPartyServerProps> = ({ 
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

interface ThirdPartyServersProps {
  className?: string;
}

// List of selected third-party integrations from the README
const thirdPartyIntegrations: ThirdPartyServerProps[] = [
  {
    name: "21st.dev Magic",
    description: "Create crafted UI components inspired by the best 21st.dev design engineers.",
    github: "https://github.com/21st-dev/magic-mcp",
    logo: "https://www.21st.dev/favicon.ico"
  },
  {
    name: "AgentQL",
    description: "Enable AI agents to get structured data from unstructured web with AgentQL.",
    github: "https://github.com/tinyfish-io/agentql-mcp",
    logo: "https://www.agentql.com/favicon/favicon.png"
  },
  {
    name: "AgentRPC",
    description: "Connect to any function, any language, across network boundaries.",
    github: "https://github.com/agentrpc/agentrpc",
    logo: "https://agentrpc.com/favicon.ico"
  },
  {
    name: "Apify",
    description: "Use 3,000+ pre-built cloud tools to extract data from websites, e-commerce, social media, search engines, maps, and more.",
    github: "https://github.com/apify/actors-mcp-server",
    logo: "https://apify.com/favicon.ico"
  },
  {
    name: "Audiense Insights",
    description: "Marketing insights and audience analysis from Audiense reports.",
    github: "https://github.com/AudienseCo/mcp-audiense-insights",
    logo: "https://resources.audiense.com/hubfs/favicon-1.png"
  },
  {
    name: "Exa",
    description: "Search Engine made for AIs by Exa.",
    github: "https://github.com/exa-labs/exa-mcp-server",
    logo: "https://exa.ai/images/favicon-32x32.png"
  },
  {
    name: "Perplexity",
    description: "An MCP server that connects to Perplexity's Sonar API, enabling real-time web-wide research.",
    github: "https://github.com/ppl-ai/modelcontextprotocol",
    logo: "https://www.perplexity.ai/favicon.ico"
  },
  {
    name: "Firecrawl",
    description: "Extract web data with Firecrawl.",
    github: "https://github.com/mendableai/firecrawl-mcp-server",
    logo: "https://firecrawl.dev/favicon.ico"
  }
];

const ThirdPartyServers: React.FC<ThirdPartyServersProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Official Integrations</h2>
        <p className="text-muted-foreground">
          These MCP servers are maintained by companies building production-ready integrations for their platforms.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {thirdPartyIntegrations.map((integration, index) => (
          <ThirdPartyServer 
            key={index}
            name={integration.name}
            description={integration.description}
            github={integration.github}
            logo={integration.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdPartyServers;
