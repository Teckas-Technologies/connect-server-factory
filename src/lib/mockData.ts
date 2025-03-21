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
  },
  {
    id: '1',
    name: 'Adfin',
    description: 'The only platform you need to get paid - all payments in one place, invoicing and accounting reconciliations with Adfin.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 320,
    rating: 4.7,
    reviewCount: 50,
    tags: ['payments', 'invoicing', 'accounting', 'cloud'],
    github: 'https://github.com/Adfin-Engineering/mcp-server-adfin.git',
    createdAt: '2023-11-10',
    author: {
      name: 'Adfin Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '2',
    name: 'AgentQL',
    description: 'Enable AI agents to get structured data from unstructured web with AgentQL.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 415,
    rating: 4.8,
    reviewCount: 66,
    tags: ['ai', 'data', 'web', 'agents'],
    github: 'https://github.com/tinyfish-io/agentql-mcp.git',
    createdAt: '2023-10-18',
    author: {
      name: 'AgentQL Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '3',
    name: 'AgentRPC',
    description: 'Connect to any function, any language, across network boundaries using AgentRPC.',
    type: 'server',
    category: 'sdk',
    sdkType: ['typescript', 'javascript', 'python'],
    stars: 388,
    rating: 4.6,
    reviewCount: 54,
    tags: ['rpc', 'network', 'function', 'sdk'],
    github: 'https://github.com/agentrpc/agentrpc.git',
    createdAt: '2023-09-20',
    author: {
      name: 'AgentRPC Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '4',
    name: 'Apify',
    description: 'Use 3,000+ pre-built cloud tools to extract data from websites, e-commerce, social media, search engines, maps, and more.',
    type: 'server',
    category: 'client',
    sdkType: ['javascript'],
    stars: 512,
    rating: 4.9,
    reviewCount: 80,
    tags: ['web', 'data', 'automation'],
    github: 'https://github.com/apify/actors-mcp-server.git',
    createdAt: '2023-08-12',
    author: {
      name: 'Apify Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '5',
    name: 'Audiense Insights',
    description: 'Marketing insights and audience analysis from Audiense reports, covering demographic, cultural, influencer, and content engagement analysis.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 270,
    rating: 4.5,
    reviewCount: 42,
    tags: ['marketing', 'insights', 'audience'],
    github: 'https://github.com/AudienseCo/mcp-audiense-insights.git',
    createdAt: '2023-07-05',
    author: {
      name: 'Audiense Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '6',
    name: 'Axiom',
    description: 'Query and analyze your Axiom logs, traces, and all other event data in natural language.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 355,
    rating: 4.7,
    reviewCount: 60,
    tags: ['logs', 'analytics', 'query'],
    github: 'https://github.com/axiomhq/mcp-server-axiom.git',
    createdAt: '2023-06-15',
    author: {
      name: 'Axiom Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '7',
    name: 'Bankless Onchain',
    description: 'Query Onchain data, like ERC20 tokens, transaction history, smart contract state.',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 290,
    rating: 4.6,
    reviewCount: 48,
    tags: ['onchain', 'blockchain', 'erc20'],
    github: 'https://github.com/Bankless/onchain-mcp.git',
    createdAt: '2023-05-10',
    author: {
      name: 'Bankless Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '8',
    name: 'Box',
    description: 'Interact with the Intelligent Content Management platform through Box AI.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 330,
    rating: 4.5,
    reviewCount: 52,
    tags: ['box', 'content', 'ai'],
    github: 'https://github.com/box-community/mcp-server-box.git',
    createdAt: '2023-04-08',
    author: {
      name: 'Box Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '9',
    name: 'Browserbase',
    description: 'Automate browser interactions in the cloud (e.g. web navigation, data extraction, form filling, and more).',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 375,
    rating: 4.7,
    reviewCount: 58,
    tags: ['browser', 'automation', 'data'],
    github: 'https://github.com/browserbase/mcp-server-browserbase.git',
    createdAt: '2023-03-12',
    author: {
      name: 'Browserbase Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '10',
    name: 'Chroma',
    description: 'Embeddings, vector search, document storage, and full-text search with the open-source AI application database.',
    type: 'server',
    category: 'database',
    sdkType: ['python'],
    stars: 500,
    rating: 4.9,
    reviewCount: 76,
    tags: ['embeddings', 'vector search', 'ai'],
    github: 'https://github.com/chroma-core/chroma-mcp.git',
    createdAt: '2023-02-01',
    author: {
      name: 'Chroma Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'chronulus-ai',
    name: 'Chronulus AI',
    description: 'Predict anything with Chronulus AI forecasting and prediction agents.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'python'],
    stars: 210,
    rating: 4.6,
    reviewCount: 48,
    tags: ['forecasting', 'prediction', 'ai', 'agents'],
    github: 'https://github.com/ChronulusAI/chronulus-mcp.git',
    createdAt: '2024-05-10',
    author: {
      name: 'Chronulus Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'clickhouse',
    name: 'ClickHouse',
    description: 'Query your ClickHouse database server.',
    type: 'server',
    category: 'database',
    sdkType: ['typescript', 'go'],
    stars: 980,
    rating: 4.9,
    reviewCount: 132,
    tags: ['database', 'query', 'clickhouse'],
    github: 'https://github.com/ClickHouse/mcp-clickhouse.git',
    createdAt: '2021-01-20',
    author: {
      name: 'ClickHouse Inc.',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    description: 'Deploy, configure & interrogate your resources on the Cloudflare developer platform (e.g. Workers/KV/R2/D1)',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 760,
    rating: 4.7,
    reviewCount: 89,
    tags: ['cloud', 'deployment', 'cloudflare', 'workers'],
    github: 'https://github.com/cloudflare/mcp-server-cloudflare.git',
    createdAt: '2022-03-12',
    author: {
      name: 'Cloudflare',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'comet-opik',
    name: 'Comet Opik',
    description: 'Query and analyze your Opik logs, traces, prompts and all other telemetry data from your LLMs in natural language.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 312,
    rating: 4.5,
    reviewCount: 36,
    tags: ['llm', 'logs', 'telemetry', 'tracing'],
    github: 'https://github.com/comet-ml/opik-mcp.git',
    createdAt: '2023-07-19',
    author: {
      name: 'Comet ML',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  // {
  //   id: 'convex',
  //   name: 'Convex',
  //   description: 'Introspect and query your apps deployed to Convex.',
  //   type: 'server',
  //   category: 'database',
  //   sdkType: ['typescript'],
  //   stars: 450,
  //   rating: 4.7,
  //   reviewCount: 51,
  //   tags: ['database', 'query', 'convex', 'apps'],
  //   github: 'https://github.com/get-convex/convex',
  //   createdAt: '2022-11-05',
  //   author: {
  //     name: 'Convex',
  //     avatar: '/placeholder.svg'
  //   },
  //   featured: false
  // },
  {
    id: 'dart',
    name: 'Dart',
    description: 'Interact with task, doc, and project data in Dart, an AI-native project management tool.',
    type: 'server',
    category: 'client',
    sdkType: ['javascript'],
    stars: 275,
    rating: 4.4,
    reviewCount: 30,
    tags: ['project-management', 'ai', 'tasks'],
    github: 'https://github.com/its-dart/dart-mcp-server.git',
    createdAt: '2023-02-20',
    author: {
      name: 'Dart Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'devhub',
    name: 'DevHub',
    description: 'Manage and utilize website content within the DevHub CMS platform.',
    type: 'server',
    category: 'sdk',
    sdkType: ['typescript'],
    stars: 190,
    rating: 4.3,
    reviewCount: 24,
    tags: ['cms', 'content-management', 'web'],
    github: 'https://github.com/devhub/devhub-cms-mcp.git',
    createdAt: '2022-06-15',
    author: {
      name: 'DevHub',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'e2b',
    name: 'E2B',
    description: 'Run code in secure sandboxes hosted by E2B',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 500,
    rating: 4.9,
    reviewCount: 120,
    tags: ['sandbox', 'secure', 'code execution'],
    github: 'https://github.com/e2b-dev/mcp-server.git',
    createdAt: '2024-01-15',
    author: {
      name: 'E2B Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'edubase',
    name: 'EduBase',
    description: 'Interact with EduBase, a comprehensive e-learning platform with advanced quizzing, exam management, and content organization capabilities',
    type: 'server',
    category: 'client',
    sdkType: ['typescript'],
    stars: 350,
    rating: 4.7,
    reviewCount: 80,
    tags: ['education', 'elearning', 'quiz'],
    github: 'https://github.com/EduBase/MCP.git',
    createdAt: '2023-11-10',
    author: {
      name: 'EduBase Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'esignatures',
    name: 'eSignatures',
    description: 'Contract and template management for drafting, reviewing, and sending binding contracts.',
    type: 'server',
    category: 'security',
    sdkType: ['typescript'],
    stars: 420,
    rating: 4.8,
    reviewCount: 95,
    tags: ['contracts', 'signatures', 'legal'],
    github: 'https://github.com/esignaturescom/mcp-server-esignatures.git',
    createdAt: '2023-12-01',
    author: {
      name: 'eSignatures Inc.',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'fewsats',
    name: 'Fewsats',
    description: 'Enable AI Agents to purchase anything in a secure way using Fewsats',
    type: 'server',
    category: 'security',
    sdkType: ['typescript', 'javascript'],
    stars: 390,
    rating: 4.6,
    reviewCount: 75,
    tags: ['payment', 'secure', 'ai'],
    github: 'https://github.com/Fewsats/fewsats-mcp.git',
    createdAt: '2023-12-05',
    author: {
      name: 'Fewsats',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'fibery',
    name: 'Fibery',
    description: 'Perform queries and entity operations in your Fibery workspace.',
    type: 'server',
    category: 'database',
    sdkType: ['typescript'],
    stars: 410,
    rating: 4.7,
    reviewCount: 85,
    tags: ['workspace', 'query', 'operations'],
    github: 'https://github.com/Fibery-inc/fibery-mcp-server.git',
    createdAt: '2023-11-12',
    author: {
      name: 'Fibery Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'financial-datasets',
    name: 'Financial Datasets',
    description: 'Stock market API made for AI agents',
    type: 'server',
    category: 'ai',
    sdkType: ['javascript'],
    stars: 530,
    rating: 4.8,
    reviewCount: 110,
    tags: ['stock', 'market', 'api'],
    github: 'https://github.com/financial-datasets/mcp-server.git',
    createdAt: '2024-01-01',
    author: {
      name: 'Financial API Inc.',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'firecrawl',
    name: 'Firecrawl',
    description: 'Extract web data with Firecrawl',
    type: 'server',
    category: 'performance',
    sdkType: ['typescript'],
    stars: 480,
    rating: 4.7,
    reviewCount: 90,
    tags: ['web', 'crawl', 'extract'],
    github: 'https://github.com/mendableai/firecrawl-mcp-server.git',
    createdAt: '2023-12-20',
    author: {
      name: 'Firecrawl',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'fireproof',
    name: 'Fireproof',
    description: 'Immutable ledger database with live synchronization',
    type: 'server',
    category: 'database',
    sdkType: ['typescript', 'javascript'],
    stars: 460,
    rating: 4.8,
    reviewCount: 100,
    tags: ['ledger', 'immutable', 'database'],
    github: 'https://github.com/fireproof-storage/mcp-database-server.git',
    createdAt: '2023-12-25',
    author: {
      name: 'Fireproof Inc.',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'gitee',
    name: 'Gitee',
    description: 'Gitee API integration, repository, issue, and pull request management, and more.',
    type: 'server',
    category: 'client',
    sdkType: ['javascript'],
    stars: 520,
    rating: 4.7,
    reviewCount: 105,
    tags: ['repo', 'issues', 'git'],
    github: 'https://github.com/oschina/mcp-gitee.git',
    createdAt: '2024-01-10',
    author: {
      name: 'Gitee Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'grafana',
    name: 'Grafana',
    description: 'Search dashboards, investigate incidents and query datasources in your Grafana instance',
    type: 'server',
    category: 'performance',
    sdkType: ['typescript'],
    stars: 850,
    rating: 4.9,
    reviewCount: 200,
    tags: ['dashboards', 'metrics', 'monitoring'],
    github: 'https://github.com/grafana/mcp-grafana.git',
    createdAt: '2023-09-10',
    author: {
      name: 'Grafana Labs',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'graphlit',
    name: 'Graphlit',
    description: 'Ingest anything from Slack to Gmail to podcast feeds, in addition to web crawling, into a searchable Graphlit project.',
    type: 'server',
    category: 'ai',
    sdkType: ['javascript'],
    stars: 640,
    rating: 4.8,
    reviewCount: 140,
    tags: ['data ingestion', 'search', 'web crawling'],
    github: 'https://github.com/graphlit/graphlit-mcp-server.git',
    createdAt: '2024-01-20',
    author: {
      name: 'Graphlit',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'hologres',
    name: 'Hologres',
    description: 'Connect to a Hologres instance, get table metadata, query and analyze data.',
    type: 'server',
    category: 'database',
    sdkType: ['typescript'],
    stars: 720,
    rating: 4.7,
    reviewCount: 160,
    tags: ['database', 'query', 'analytics'],
    github: 'https://github.com/aliyun/alibabacloud-hologres-mcp-server.git',
    createdAt: '2023-10-05',
    author: {
      name: 'Hologres Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'hyperbrowser',
    name: 'Hyperbrowser',
    description: 'Next-gen platform empowering AI agents and enabling scalable browser automation.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 780,
    rating: 4.9,
    reviewCount: 175,
    tags: ['automation', 'ai', 'browser'],
    github: 'https://github.com/hyperbrowserai/mcp.git',
    createdAt: '2024-02-01',
    author: {
      name: 'Hyperbrowser',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'ibm-wxflows',
    name: 'IBM wxflows',
    description: 'Tool platform by IBM to build, test and deploy tools for any data source',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript'],
    stars: 910,
    rating: 4.8,
    reviewCount: 210,
    tags: ['deployment', 'tools', 'data'],
    github: 'https://github.com/IBM/wxflows.git',
    createdAt: '2023-08-15',
    author: {
      name: 'IBM',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'forevervm',
    name: 'ForeverVM',
    description: 'Run Python in a code sandbox.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript'],
    stars: 670,
    rating: 4.7,
    reviewCount: 130,
    tags: ['sandbox', 'python', 'execution'],
    github: 'https://github.com/jamsocket/forevervm.git',
    createdAt: '2023-12-18',
    author: {
      name: 'ForeverVM',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'inbox-zero',
    name: 'Inbox Zero',
    description: 'AI personal assistant for email Inbox Zero',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 560,
    rating: 4.6,
    reviewCount: 115,
    tags: ['email', 'ai', 'assistant'],
    github: 'https://github.com/elie222/inbox-zero.git',
    createdAt: '2023-11-05',
    author: {
      name: 'Inbox Zero Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'inkeep',
    name: 'Inkeep',
    description: 'RAG Search over your content powered by Inkeep',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 600,
    rating: 4.8,
    reviewCount: 125,
    tags: ['search', 'rag', 'content'],
    github: 'https://github.com/inkeep/mcp-server-python.git',
    createdAt: '2024-01-05',
    author: {
      name: 'Inkeep',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'integration-app',
    name: 'Integration App',
    description: 'Interact with any other SaaS applications on behalf of your customers.',
    type: 'server',
    category: 'sdk',
    sdkType: ['javascript'],
    stars: 730,
    rating: 4.7,
    reviewCount: 150,
    tags: ['saas', 'integration', 'sdk'],
    github: 'https://github.com/integration-app/mcp-server.git',
    createdAt: '2023-12-10',
    author: {
      name: 'Integration Inc.',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'jetbrains',
    name: 'JetBrains',
    description: 'Work on your code with JetBrains IDEs',
    type: 'server',
    category: 'sdk',
    sdkType: ['typescript'],
    stars: 950,
    rating: 5.0,
    reviewCount: 250,
    tags: ['ide', 'development', 'tools'],
    github: 'https://github.com/JetBrains/mcp-jetbrains.git',
    createdAt: '2023-07-25',
    author: {
      name: 'JetBrains',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'kagi-search',
    name: 'Kagi Search',
    description: 'Search the web using Kagi\'s search API',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 680,
    rating: 4.8,
    reviewCount: 140,
    tags: ['search', 'web', 'api'],
    github: 'https://github.com/kagisearch/kagimcp.git',
    createdAt: '2024-01-12',
    author: {
      name: 'Kagi',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'logfire',
    name: 'Logfire',
    description: 'Access OpenTelemetry traces and metrics through Logfire.',
    type: 'server',
    category: 'performance',
    sdkType: ['typescript'],
    stars: 770,
    rating: 4.9,
    reviewCount: 165,
    tags: ['tracing', 'metrics', 'monitoring'],
    github: 'https://github.com/pydantic/logfire-mcp.git',
    createdAt: '2023-12-28',
    author: {
      name: 'Logfire',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'langfuse',
    name: 'Langfuse Prompt Management',
    description: 'Open-source tool for collaborative editing, versioning, evaluating, and releasing prompts.',
    type: 'server',
    category: 'ai',
    sdkType: ['javascript'],
    stars: 800,
    rating: 4.8,
    reviewCount: 175,
    tags: ['prompts', 'ai', 'versioning'],
    github: 'https://github.com/langfuse/mcp-server-langfuse.git',
    createdAt: '2023-11-30',
    author: {
      name: 'Langfuse',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'lingo-dev',
    name: 'Lingo.dev',
    description: 'Make your AI agent speak every language on the planet, using Lingo.dev Localization Engine.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 690,
    rating: 4.7,
    reviewCount: 130,
    tags: ['localization', 'ai', 'languages'],
    github: 'https://github.com/lingodotdev/lingo.dev.git',
    createdAt: '2024-01-08',
    author: {
      name: 'Lingo.dev',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'make',
    name: 'Make',
    description: 'Turn your Make scenarios into callable tools for AI assistants.',
    type: 'server',
    category: 'sdk',
    sdkType: ['javascript'],
    stars: 750,
    rating: 4.8,
    reviewCount: 155,
    tags: ['ai', 'scenarios', 'automation'],
    github: 'https://github.com/integromat/make-mcp-server.git',
    createdAt: '2023-12-22',
    author: {
      name: 'Make',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'meilisearch',
    name: 'Meilisearch',
    description: 'Interact & query with Meilisearch (Full-text & semantic search API)',
    type: 'server',
    category: 'database',
    sdkType: ['typescript'],
    stars: 820,
    rating: 4.9,
    reviewCount: 180,
    tags: ['search', 'database', 'api'],
    github: 'https://github.com/meilisearch/meilisearch-mcp.git',
    createdAt: '2024-01-01',
    author: {
      name: 'Meilisearch',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'metoro',
    name: 'Metoro',
    description: 'Query and interact with kubernetes environments monitored by Metoro',
    type: 'server',
    category: 'server',
    sdkType: ['typescript'],
    stars: 320,
    rating: 4.5,
    reviewCount: 30,
    tags: ['kubernetes', 'monitoring'],
    github: 'https://github.com/metoro-io/metoro-mcp-server.git',
    createdAt: '2023-06-12',
    author: {
      name: 'Metoro Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'milvus',
    name: 'Milvus',
    description: 'Search, Query and interact with data in your Milvus Vector Database.',
    type: 'server',
    category: 'database',
    sdkType: ['go', 'python'],
    stars: 290,
    rating: 4.7,
    reviewCount: 28,
    tags: ['vector', 'database', 'search'],
    github: 'https://github.com/zilliztech/mcp-server-milvus.git',
    createdAt: '2023-05-20',
    author: {
      name: 'Milvus Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'motherduck',
    name: 'MotherDuck',
    description: 'Query and analyze data with MotherDuck and local DuckDB',
    type: 'server',
    category: 'database',
    sdkType: ['typescript'],
    stars: 350,
    rating: 4.8,
    reviewCount: 40,
    tags: ['duckdb', 'analytics', 'query'],
    github: 'https://github.com/motherduckdb/mcp-server-motherduck.git',
    createdAt: '2023-08-10',
    author: {
      name: 'MotherDuck Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'needle',
    name: 'Needle',
    description: 'Production-ready RAG out of the box to search and retrieve data from your own documents.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 410,
    rating: 4.9,
    reviewCount: 55,
    tags: ['rag', 'search', 'documents'],
    github: 'https://github.com/needle-ai/needle-mcp.git',
    createdAt: '2023-09-01',
    author: {
      name: 'Needle AI',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'neo4j',
    name: 'Neo4j',
    description: 'Neo4j graph database server (schema + read/write-cypher) and separate graph database backed memory',
    type: 'server',
    category: 'database',
    sdkType: ['java', 'python'],
    stars: 500,
    rating: 4.7,
    reviewCount: 60,
    tags: ['graph', 'database', 'cypher'],
    github: 'https://github.com/neo4j-contrib/mcp-neo4j.git',
    createdAt: '2023-07-18',
    author: {
      name: 'Neo4j Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Interact with the Neon serverless Postgres platform',
    type: 'server',
    category: 'database',
    sdkType: ['typescript', 'go'],
    stars: 330,
    rating: 4.6,
    reviewCount: 36,
    tags: ['postgres', 'serverless', 'database'],
    github: 'https://github.com/neondatabase-labs/mcp-server-neon.git',
    createdAt: '2023-06-01',
    author: {
      name: 'Neon',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'octagon',
    name: 'Octagon',
    description: 'Deliver real-time investment research with extensive private and public market data.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 285,
    rating: 4.4,
    reviewCount: 22,
    tags: ['finance', 'research', 'market-data'],
    github: 'https://github.com/OctagonAI/octagon-mcp-server.git',
    createdAt: '2023-05-11',
    author: {
      name: 'Octagon AI',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'oxylabs',
    name: 'Oxylabs',
    description: 'Scrape websites with Oxylabs Web API, supporting dynamic rendering and parsing for structured data extraction.',
    type: 'server',
    category: 'client',
    sdkType: ['python'],
    stars: 410,
    rating: 4.8,
    reviewCount: 50,
    tags: ['scraping', 'api', 'web'],
    github: 'https://github.com/oxylabs/oxylabs-mcp.git',
    createdAt: '2023-08-30',
    author: {
      name: 'Oxylabs',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'qdrant',
    name: 'Qdrant',
    description: 'Implement semantic memory layer on top of the Qdrant vector search engine',
    type: 'server',
    category: 'database',
    sdkType: ['rust', 'python'],
    stars: 470,
    rating: 4.9,
    reviewCount: 62,
    tags: ['vector', 'semantic', 'search'],
    github: 'https://github.com/qdrant/mcp-server-qdrant.git',
    createdAt: '2023-07-05',
    author: {
      name: 'Qdrant Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'ramp',
    name: 'Ramp',
    description: 'Interact with Ramp\'s Developer API to run analysis on your spend and gain insights leveraging LLMs',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 210,
    rating: 4.6,
    reviewCount: 33,
    tags: ['finance', 'analytics', 'llm', 'spend'],
    github: 'https://github.com/ramp-public/ramp-mcp.git',
    createdAt: '2023-10-01',
    author: {
      name: 'Ramp Devs',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'raygun',
    name: 'Raygun',
    description: 'Interact with your crash reporting and real using monitoring data on your Raygun account',
    type: 'server',
    category: 'performance',
    sdkType: ['python', 'typescript'],
    stars: 320,
    rating: 4.7,
    reviewCount: 45,
    tags: ['monitoring', 'crash-reporting', 'performance'],
    github: 'https://github.com/MindscapeHQ/mcp-server-raygun.git',
    createdAt: '2023-09-20',
    author: {
      name: 'Raygun',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'rember',
    name: 'Rember',
    description: 'Create spaced repetition flashcards in Rember to remember anything you learn in your chats',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 150,
    rating: 4.5,
    reviewCount: 28,
    tags: ['flashcards', 'learning', 'memory'],
    github: 'https://github.com/rember/rember-mcp.git',
    createdAt: '2023-08-10',
    author: {
      name: 'Rember Devs',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'riza',
    name: 'Riza logo Riza',
    description: 'Arbitrary code execution and tool-use platform for LLMs by Riza',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 295,
    rating: 4.9,
    reviewCount: 39,
    tags: ['llm', 'code-execution', 'tools'],
    github: '',
    createdAt: '2023-07-25',
    author: {
      name: 'Riza',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'search1api',
    name: 'Search1API',
    description: 'One API for Search, Crawling, and Sitemaps',
    type: 'server',
    category: 'client',
    sdkType: ['javascript'],
    stars: 180,
    rating: 4.4,
    reviewCount: 22,
    tags: ['search', 'crawl', 'sitemap'],
    github: 'https://github.com/fatwang2/search1api-mcp.git',
    createdAt: '2023-06-30',
    author: {
      name: 'Search1API',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'screenshotone',
    name: 'ScreenshotOne',
    description: 'Render website screenshots with ScreenshotOne',
    type: 'server',
    category: 'cloud',
    sdkType: ['javascript', 'python'],
    stars: 260,
    rating: 4.7,
    reviewCount: 36,
    tags: ['screenshot', 'render', 'automation'],
    github: 'https://github.com/screenshotone/mcp.git',
    createdAt: '2023-08-15',
    author: {
      name: 'ScreenshotOne',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'starrocks',
    name: 'StarRocks',
    description: 'Interact with StarRocks',
    type: 'server',
    category: 'database',
    sdkType: ['go', 'python'],
    stars: 410,
    rating: 4.8,
    reviewCount: 55,
    tags: ['database', 'analytics', 'starrocks'],
    github: 'https://github.com/StarRocks/mcp-server-starrocks.git',
    createdAt: '2023-07-01',
    author: {
      name: 'StarRocks Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Interact with Stripe API',
    type: 'server',
    category: 'client',
    sdkType: ['typescript', 'python'],
    stars: 500,
    rating: 4.9,
    reviewCount: 80,
    tags: ['payments', 'api', 'finance'],
    github: 'https://github.com/stripe/agent-toolkit.git',
    createdAt: '2023-06-20',
    author: {
      name: 'Stripe',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'tavily',
    name: 'Tavily',
    description: 'Search engine for AI agents (search + extract) powered by Tavily',
    type: 'server',
    category: 'ai',
    sdkType: ['javascript'],
    stars: 170,
    rating: 4.5,
    reviewCount: 30,
    tags: ['search', 'ai', 'agents'],
    github: 'https://github.com/tavily-ai/tavily-mcp.git',
    createdAt: '2023-07-28',
    author: {
      name: 'Tavily',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'tinybird',
    name: 'Tinybird',
    description: 'Interact with Tinybird serverless ClickHouse platform',
    type: 'server',
    category: 'cloud',
    sdkType: ['python', 'typescript'],
    stars: 285,
    rating: 4.6,
    reviewCount: 31,
    tags: ['analytics', 'cloud', 'clickhouse'],
    github: 'https://github.com/tinybirdco/mcp-tinybird.git',
    createdAt: '2023-08-22',
    author: {
      name: 'Tinybird',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'unifai',
    name: 'UnifAI',
    description: 'Dynamically search and call tools using UnifAI Network',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 240,
    rating: 4.5,
    reviewCount: 29,
    tags: ['network', 'ai', 'tools'],
    github: 'https://github.com/unifai-network/unifai-mcp-server.git',
    createdAt: '2023-07-10',
    author: {
      name: 'UnifAI',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'vectorize',
    name: 'Vectorize',
    description: 'Vectorize MCP server for advanced retrieval, Private Deep Research, Anything-to-Markdown file extraction and text chunking.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 310,
    rating: 4.8,
    reviewCount: 41,
    tags: ['vector', 'retrieval', 'markdown'],
    github: 'https://github.com/vectorize-io/vectorize-mcp-server.git',
    createdAt: '2023-08-18',
    author: {
      name: 'Vectorize',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: 'verodat',
    name: 'Verodat',
    description: 'Interact with Verodat AI Ready Data platform',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript'],
    stars: 200,
    rating: 4.3,
    reviewCount: 25,
    tags: ['data', 'platform', 'ai'],
    github: 'https://github.com/Verodat/verodat-mcp-server.git',
    createdAt: '2023-09-05',
    author: {
      name: 'Verodat',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'veyrax',
    name: 'VeyraX',
    description: 'Single tool to control all 100+ API integrations, and UI components',
    type: 'server',
    category: 'client',
    sdkType: ['typescript'],
    stars: 230,
    rating: 4.5,
    reviewCount: 27,
    tags: ['api', 'integration', 'ui'],
    github: 'https://github.com/VeyraX/veyrax-mcp.git',
    createdAt: '2023-08-05',
    author: {
      name: 'VeyraX',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: 'zenml',
    name: 'ZenML',
    description: 'Interact with your MLOps and LLMOps pipelines through your ZenML MCP server',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 375,
    rating: 4.7,
    reviewCount: 37,
    tags: ['mlops', 'llmops', 'pipeline'],
    github: 'https://github.com/zenml-io/mcp-zenml.git',
    createdAt: '2023-09-15',
    author: {
      name: 'ZenML',
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
]