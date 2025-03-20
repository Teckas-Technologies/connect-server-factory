import { Search, Database, Server, Globe, Cpu, Code, Shield, Cloud, Zap, MessageSquare } from 'lucide-react';

export interface ServerClient {
  id: string;
  name: string;
  description: string;
  type: 'server' | 'client';
  category: string;
  sdkType: string[];
  stars: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  github: string;
  createdAt: string;
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: any;
  count: number;
}

export const categories: Category[] = [
  {
    id: 'database',
    name: 'Database',
    description: 'Database connectivity and ORM tools',
    icon: Database,
    count: 14
  },
  {
    id: 'server',
    name: 'Servers',
    description: 'MCP server implementations',
    icon: Server,
    count: 21
  },
  {
    id: 'client',
    name: 'Clients',
    description: 'MCP client implementations',
    icon: Globe,
    count: 18
  },
  {
    id: 'ai',
    name: 'AI & ML',
    description: 'Machine learning and AI interfaces',
    icon: Cpu,
    count: 9
  },
  {
    id: 'sdk',
    name: 'SDKs',
    description: 'Software development kits',
    icon: Code,
    count: 12
  },
  {
    id: 'security',
    name: 'Security',
    description: 'Authentication and security tools',
    icon: Shield,
    count: 7
  },
  {
    id: 'cloud',
    name: 'Cloud',
    description: 'Cloud deployment services',
    icon: Cloud,
    count: 11
  },
  {
    id: 'performance',
    name: 'Performance',
    description: 'Performance optimization tools',
    icon: Zap,
    count: 5
  }
];

export const servers: ServerClient[] = [
  {
    id: '1',
    name: 'AWS KB Retrieval',
    description: 'An MCP server implementation for retrieving information from the AWS Knowledge Base using the Bedrock Agent Runtime.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 432,
    rating: 4.8,
    reviewCount: 64,
    tags: ['aws', 'rag', 'kb', 'bedrock', 'agent'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server',
    createdAt: '2023-09-15',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '2',
    name: 'Brave Search',
    description: 'Web and local search using Brave\'s Search API',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 378,
    rating: 4.7,
    reviewCount: 58,
    tags: ['search', 'web', 'local', 'brave'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search',
    createdAt: '2023-08-02',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '3',
    name: 'EverArt',
    description: 'AI image generation using various models',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 289,
    rating: 4.5,
    reviewCount: 42,
    tags: ['ai', 'image-generation', 'art'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/everart',
    createdAt: '2023-10-05',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '4',
    name: 'Everything',
    description: 'Reference / test server with prompts, resources, and tools',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 210,
    rating: 4.3,
    reviewCount: 35,
    tags: ['reference', 'test', 'prompts', 'tools'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/everything',
    createdAt: '2023-07-10',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '5',
    name: 'Fetch',
    description: 'Web content fetching and conversion for efficient LLM usage',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 345,
    rating: 4.6,
    reviewCount: 50,
    tags: ['web', 'fetch', 'content', 'conversion'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/fetch',
    createdAt: '2023-09-12',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '6',
    name: 'Filesystem',
    description: 'Secure file operations with configurable access controls',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 276,
    rating: 4.4,
    reviewCount: 38,
    tags: ['filesystem', 'files', 'security', 'access-control'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem',
    createdAt: '2023-08-15',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '7',
    name: 'Git',
    description: 'Tools to read, search, and manipulate Git repositories',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 401,
    rating: 4.7,
    reviewCount: 62,
    tags: ['git', 'repository', 'version-control'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/git',
    createdAt: '2023-11-05',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '8',
    name: 'GitHub',
    description: 'Repository management, file operations, and GitHub API integration',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 450,
    rating: 4.8,
    reviewCount: 70,
    tags: ['github', 'repository', 'api', 'integration'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/github',
    createdAt: '2023-10-20',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '9',
    name: 'GitLab',
    description: 'GitLab API, enabling project management',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 310,
    rating: 4.5,
    reviewCount: 45,
    tags: ['gitlab', 'repository', 'api', 'project-management'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab',
    createdAt: '2023-11-15',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '10',
    name: 'Google Drive',
    description: 'File access and search capabilities for Google Drive',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 385,
    rating: 4.6,
    reviewCount: 56,
    tags: ['google', 'drive', 'files', 'search'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive',
    createdAt: '2023-12-01',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '11',
    name: 'Google Maps',
    description: 'Location services, directions, and place details',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 325,
    rating: 4.5,
    reviewCount: 48,
    tags: ['google', 'maps', 'location', 'directions'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps',
    createdAt: '2023-11-28',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '12',
    name: 'Memory',
    description: 'Knowledge graph-based persistent memory system',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 420,
    rating: 4.7,
    reviewCount: 63,
    tags: ['memory', 'knowledge-graph', 'persistence'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/memory',
    createdAt: '2023-10-10',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '13',
    name: 'PostgreSQL',
    description: 'Read-only database access with schema inspection',
    type: 'server',
    category: 'database',
    sdkType: ['typescript', 'javascript'],
    stars: 356,
    rating: 4.6,
    reviewCount: 52,
    tags: ['postgresql', 'database', 'schema'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/postgres',
    createdAt: '2023-09-25',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '14',
    name: 'Puppeteer',
    description: 'Browser automation and web scraping',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 392,
    rating: 4.7,
    reviewCount: 58,
    tags: ['puppeteer', 'browser', 'automation', 'scraping'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer',
    createdAt: '2023-10-15',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '15',
    name: 'Redis',
    description: 'Interact with Redis key-value stores',
    type: 'server',
    category: 'database',
    sdkType: ['typescript', 'javascript'],
    stars: 295,
    rating: 4.5,
    reviewCount: 42,
    tags: ['redis', 'database', 'key-value'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/redis',
    createdAt: '2023-11-10',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '16',
    name: 'Sentry',
    description: 'Retrieving and analyzing issues from Sentry.io',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 275,
    rating: 4.4,
    reviewCount: 38,
    tags: ['sentry', 'error-tracking', 'analysis'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sentry',
    createdAt: '2023-12-05',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '17',
    name: 'Sequential Thinking',
    description: 'Dynamic and reflective problem-solving through thought sequences',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 340,
    rating: 4.6,
    reviewCount: 50,
    tags: ['thinking', 'problem-solving', 'reasoning'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking',
    createdAt: '2023-11-20',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '18',
    name: 'Slack',
    description: 'Channel management and messaging capabilities',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 315,
    rating: 4.5,
    reviewCount: 46,
    tags: ['slack', 'messaging', 'channels'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/slack',
    createdAt: '2023-10-25',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '19',
    name: 'Sqlite',
    description: 'Database interaction and business intelligence capabilities',
    type: 'server',
    category: 'database',
    sdkType: ['typescript', 'javascript'],
    stars: 280,
    rating: 4.4,
    reviewCount: 40,
    tags: ['sqlite', 'database', 'business-intelligence'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite',
    createdAt: '2023-11-25',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '20',
    name: 'Time',
    description: 'Time and timezone conversion capabilities',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 250,
    rating: 4.3,
    reviewCount: 36,
    tags: ['time', 'timezone', 'conversion'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/time',
    createdAt: '2023-08-20',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    }
  },
  // Third party servers
  {
    id: '21',
    name: '21st.dev Magic',
    description: 'Create crafted UI components inspired by the best 21st.dev design engineers.',
    type: 'server',
    category: 'client',
    sdkType: ['typescript', 'javascript'],
    stars: 330,
    rating: 4.6,
    reviewCount: 48,
    tags: ['ui', 'components', 'design'],
    github: 'https://github.com/21st-dev/magic-mcp',
    createdAt: '2024-01-05',
    author: {
      name: '21st.dev',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '22',
    name: 'AgentQL',
    description: 'Enable AI agents to get structured data from unstructured web with AgentQL.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 365,
    rating: 4.6,
    reviewCount: 53,
    tags: ['ai', 'structured-data', 'web'],
    github: 'https://github.com/tinyfish-io/agentql-mcp',
    createdAt: '2024-01-10',
    author: {
      name: 'AgentQL',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '23',
    name: 'Perplexity',
    description: 'An MCP server that connects to Perplexity\'s Sonar API, enabling real-time web-wide research in conversational AI.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 485,
    rating: 4.9,
    reviewCount: 72,
    tags: ['perplexity', 'sonar', 'research', 'conversational-ai'],
    github: 'https://github.com/ppl-ai/modelcontextprotocol',
    createdAt: '2024-02-15',
    author: {
      name: 'Perplexity',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '24',
    name: 'Firecrawl',
    description: 'Extract web data with Firecrawl',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 320,
    rating: 4.5,
    reviewCount: 47,
    tags: ['web', 'data-extraction', 'crawling'],
    github: 'https://github.com/mendableai/firecrawl-mcp-server',
    createdAt: '2024-01-20',
    author: {
      name: 'Mendable AI',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '25',
    name: 'Exa',
    description: 'Search Engine made for AIs by Exa',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 410,
    rating: 4.7,
    reviewCount: 61,
    tags: ['search', 'ai', 'engine'],
    github: 'https://github.com/exa-labs/exa-mcp-server',
    createdAt: '2024-02-05',
    author: {
      name: 'Exa Labs',
      avatar: '/placeholder.svg'
    },
    featured: true
  }
];

// Helper functions
export const getFeaturedServers = () => servers.filter(server => server.featured);
export const getLatestServers = () => [...servers].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
export const getTopRatedServers = () => [...servers].sort((a, b) => b.rating - a.rating);
export const getServersByCategory = (categoryId: string) => servers.filter(server => server.category === categoryId);
export const getServerById = (id: string) => servers.find(server => server.id === id);

// Now, let's update or add the serverSetupInstructions data
export const serverSetupInstructions: Record<string, {
  description: string;
  features: string[];
  tools: Array<{ name: string; description: string; inputs: Array<{ name: string; type: string; description: string; optional?: boolean; }> }>;
  configuration: string;
  usageExamples: { 
    docker?: string;
    npx?: string;
    pip?: string;
  };
  license: string;
}> = {
  "1": { 
    description: "An MCP server implementation for retrieving information from the AWS Knowledge Base using the Bedrock Agent Runtime.",
    features: [
      "RAG (Retrieval-Augmented Generation): Retrieve context from the AWS Knowledge Base based on a query and a Knowledge Base ID.",
      "Supports multiple results retrieval: Option to retrieve a customizable number of results."
    ],
    tools: [
      {
        name: "retrieve_from_aws_kb",
        description: "Perform retrieval operations using the AWS Knowledge Base.",
        inputs: [
          { name: "query", type: "string", description: "The search query for retrieval." },
          { name: "knowledgeBaseId", type: "string", description: "The ID of the AWS Knowledge Base." },
          { name: "n", type: "number", description: "Number of results to retrieve (default: 3).", optional: true }
        ]
      }
    ],
    configuration: "## Setting up AWS Credentials\n\n- Obtain AWS access key ID, secret access key, and region from the AWS Management Console.\n- Ensure these credentials have appropriate permissions for Bedrock Agent Runtime operations.",
    usageExamples: {
      docker: `{
  "mcpServers": {
    "aws-kb-retrieval": {
      "command": "docker",
      "args": [ "run", "-i", "--rm", "-e", "AWS_ACCESS_KEY_ID", "-e", "AWS_SECRET_ACCESS_KEY", "-e", "AWS_REGION", "mcp/aws-kb-retrieval-server" ],
      "env": {
        "AWS_ACCESS_KEY_ID": "YOUR_ACCESS_KEY_HERE",
        "AWS_SECRET_ACCESS_KEY": "YOUR_SECRET_ACCESS_KEY_HERE",
        "AWS_REGION": "YOUR_AWS_REGION_HERE"
      }
    }
  }
}`,
      npx: `{
  "mcpServers": {
    "aws-kb-retrieval": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-aws-kb-retrieval"
      ],
      "env": {
        "AWS_ACCESS_KEY_ID": "YOUR_ACCESS_KEY_HERE",
        "AWS_SECRET_ACCESS_KEY": "YOUR_SECRET_ACCESS_KEY_HERE",
        "AWS_REGION": "YOUR_AWS_REGION_HERE"
      }
    }
  }
}`
    },
    license: "This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository."
  },
  "2": { 
    description: "An MCP server implementation that integrates the Brave Search API, providing both web and local search capabilities.",
    features: [
      "Web Search: General queries, news, articles, with pagination and freshness controls",
      "Local Search: Find businesses, restaurants, and services with detailed information",
      "Flexible Filtering: Control result types, safety levels, and content freshness",
      "Smart Fallbacks: Local search automatically falls back to web when no results are found"
    ],
    tools: [
      {
        name: "brave_web_search",
        description: "Execute web searches with pagination and filtering.",
        inputs: [
          { name: "query", type: "string", description: "Search terms." },
          { name: "count", type: "number", description: "Results per page (max 20).", optional: true },
          { name: "offset", type: "number", description: "Pagination offset (max 9).", optional: true }
        ]
      },
      {
        name: "brave_local_search",
        description: "Search for local businesses and services. Automatically falls back to web search if no local results found.",
        inputs: [
          { name: "query", type: "string", description: "Local search terms." },
          { name: "count", type: "number", description: "Number of results (max 20).", optional: true }
        ]
      }
    ],
    configuration: "## Getting an API Key\n\n- Sign up for a Brave Search API account\n- Choose a plan (Free tier available with 2,000 queries/month)\n- Generate your API key from the developer dashboard",
    usageExamples: {
      docker: `{
  "mcpServers": {
    "brave-search": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "BRAVE_API_KEY",
        "mcp/brave-search"
      ],
      "env": {
        "BRAVE_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}`,
      npx: `{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-brave-search"
      ],
      "env": {
        "BRAVE_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}`
    },
    license: "This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository."
  },
  "23": {
    description: "An MCP server that connects to Perplexity's Sonar API, enabling real-time web-wide research in conversational AI.",
    features: [
      "Web Search: Perform web searches with high accuracy and relevance",
      "Real-time Results: Get up-to-date information from across the web",
      "Conversational Format: Results formatted for seamless integration into AI conversations",
      "Comprehensive Coverage: Access information from a wide range of sources"
    ],
    tools: [
      {
        name: "perplexity_search",
        description: "Search the web using Perplexity's Sonar API.",
        inputs: [
          { name: "query", type: "string", description: "The search query." },
          { name: "max_results", type: "number", description: "Maximum number of results to return (default: 5).", optional: true },
          { name: "search_depth", type: "string", description: "Depth of search (basic, medium, deep).", optional: true }
        ]
      }
    ],
    configuration: "## Getting a Perplexity API Key\n\n- Sign up for a Perplexity developer account\n- Navigate to your dashboard to generate an API key\n- Store your API key securely",
    usageExamples: {
      docker: `{
  "mcpServers": {
    "perplexity": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PERPLEXITY_API_KEY",
        "mcp/perplexity"
      ],
      "env": {
        "PERPLEXITY_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}`,
      npx: `{
  "mcpServers": {
    "perplexity": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-perplexity"
      ],
      "env": {
        "PERPLEXITY_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}`
    },
    license: "This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository."
  },
  "24": {
    description: "Extract web data with Firecrawl - a powerful web crawling and extraction service for AI agents.",
    features: [
      "Web Crawling: Crawl websites and extract structured data",
      "Content Conversion: Convert web pages to clean, AI-friendly formats",
      "Rate Limiting: Smart throttling to avoid overloading target websites",
      "JavaScript Rendering: Process JavaScript-heavy websites accurately"
    ],
    tools: [
      {
        name: "firecrawl_extract",
        description: "Extract data from a specific URL.",
        inputs: [
          { name: "url", type: "string", description: "The URL to extract data from." },
          { name: "format", type: "string", description: "Output format (markdown, html, text).", optional: true },
          { name: "depth", type: "number", description: "Crawl depth (1-3).", optional: true }
        ]
      },
      {
        name: "firecrawl_search",
        description: "Search within a website domain.",
        inputs: [
          { name: "domain", type: "string", description: "The website domain to search within." },
          { name: "query", type: "string", description: "Search query." },
          { name: "max_results", type: "number", description: "Maximum number of results to return.", optional: true }
        ]
      }
    ],
    configuration: "## Setting up Firecrawl\n\n- Sign up for a Firecrawl account at firecrawl.dev\n- Navigate to the API section to generate your API key\n- Set your API key as an environment variable as shown in the examples",
    usageExamples: {
      docker: `{
  "mcpServers": {
    "firecrawl": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "FIRECRAWL_API_KEY",
        "mcp/firecrawl"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}`,
      npx: `{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-firecrawl"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}`
    },
    license: "This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository."
  }
  // Additional servers can be added here following the same pattern
};

// Add interface for Third Party Servers used in the ThirdPartyServers component
export interface ThirdPartyServerProps {
  name: string;
  description: string;
  github: string;
  logo?: string;
}

// Updated community servers list with all the ones provided
export const communityServers: ThirdPartyServerProps[] = [
  {
    name: "Ableton Live",
    description: "An MCP server to control Ableton Live.",
    github: "https://github.com/Simon-Kansara/ableton-live-mcp-server",
    logo: "https://cdn-resources.ableton.com/resources/filer_public/2021/06/25/favicon.ico"
  },
  {
    name: "Airbnb",
    description: "Provides tools to search Airbnb and get listing details.",
    github: "https://github.com/openbnb-org/mcp-server-airbnb",
    logo: "https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
  },
  {
    name: "Algorand",
    description: "A comprehensive MCP server for tooling interactions (40+) and resource accessibility (60+) plus many useful prompts for interacting with the Algorand blockchain.",
    github: "https://github.com/GoPlausible/algorand-mcp",
    logo: "https://algorand.com/favicon.ico"
  },
  {
    name: "Airflow",
    description: "A MCP Server that connects to Apache Airflow using official python client.",
    github: "https://github.com/yangkyeongmo/mcp-server-apache-airflow",
    logo: "https://airflow.apache.org/favicon.ico"
  },
  {
    name: "Airtable",
    description: "Read and write access to Airtable databases, with schema inspection.",
    github: "https://github.com/domdomegg/airtable-mcp-server",
