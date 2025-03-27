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
  github?: string;
  website?:string;
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
    description: 'Retrieval from AWS Knowledge Base using Bedrock Agent Runtime',
    type: 'server',
    category: 'server',
    sdkType: ['typescript','javascript','python','docerfile'],
    stars: 24600 ,
    rating: 4.6,
    reviewCount: 40,
    tags: ['aws', 'retrieval'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server',
    createdAt: '2024-03-25',
    author: {
      name: 'AWS Team',
      avatar: '/aws-avatar.svg'
    },
    featured: true
  },
  {
    id: '2',
    name: 'Brave Search',
    description: 'Web and local search using Brave\'s Search API',
    type: 'client',
    category: 'ai',
    sdkType: ['typescript','javascript','python','docerfile'],
    stars: 24600 ,
    rating: 4.3,
    reviewCount: 32,
    tags: ['search', 'brave'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search',
    createdAt: '2024-03-25',
    author: {
      name: 'Brave Team',
      avatar: '/brave-avatar.svg'
    },
    featured: false
  },
  {
    id: '3',
    name: 'EverArt',
    description: 'AI image generation using various models',
    type: 'client',
    category: 'ai',
    sdkType: ['typescript','javascript','python','docerfile'],
    stars: 24600 ,
    rating: 4.8,
    reviewCount: 50,
    tags: ['ai', 'image-generation'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/everart',
    createdAt: '2024-03-25',
    author: {
      name: 'EverArt Devs',
      avatar: '/everart-avatar.svg'
    },
    featured: true
  },
  {
    id: '4',
    name: 'Everything',
    description: 'Reference / test server with prompts, resources, and tools',
    type: 'server',
    category: 'sdk',
    sdkType: ['typescript','javascript','python','docerfile'],
    stars: 24600 ,
    rating: 4.5,
    reviewCount: 28,
    tags: ['test-server', 'tools'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/everything',
    createdAt: '2024-03-25',
    author: {
      name: 'Everything Team',
      avatar: '/everything-avatar.svg'
    },
    featured: false
  },
  {
    id: '5',
    name: 'Fetch',
    description: 'Web content fetching and conversion for efficient LLM usage',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript','javascript','python','docerfile'],
    stars: 24600 ,
    rating: 4.7,
    reviewCount: 35,
    tags: ['fetching', 'llm'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/fetch',
    createdAt: '2024-03-25',
    author: {
      name: 'Fetch AI',
      avatar: '/fetch-avatar.svg'
    },
    featured: false
  },
  {
    id: '6',
    name: 'Filesystem',
    description: 'Secure file operations with configurable access controls',
    type: 'server',
    category: 'database',
    sdkType: ['typescript','javascript','python','docerfile'],
    stars: 24600 ,
    rating: 4.4,
    reviewCount: 22,
    tags: ['filesystem', 'security'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem',
    createdAt: '2024-03-25',
    author: {
      name: 'Filesystem Team',
      avatar: '/filesystem-avatar.svg'
    },
    featured: false
  },
  {
    id: '7',
    name: 'Git',
    description: 'Tools to read, search, and manipulate Git repositories',
    type: 'client',
    category: 'database',
    sdkType: ['typescript','javascript','python','docerfile'],
    stars: 24600 ,
    rating: 4.8,
    reviewCount: 48,
    tags: ['git', 'repository'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/git',
    createdAt: '2024-03-25',
    author: {
      name: 'Git Maintainers',
      avatar: '/git-avatar.svg'
    },
    featured: true
  },
  {
    id: '8',
    name: 'GitHub',
    description: 'Repository management, file operations, and GitHub API integration',
    type: 'server',
    category: 'server',
    sdkType: ['typescript','javascript','python','docerfile'],
    stars: 24600 ,
    rating: 4.9,
    reviewCount: 55,
    tags: ['github', 'api'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab',
    createdAt: '2024-03-25',
    author: {
      name: 'GitHub Team',
      avatar: '/github-avatar.svg'
    },
    featured: true
  },
  {
    id: '9',
    name: 'Google Drive',
    description: 'File access and search capabilities for Google Drive',
    type: 'client',
    category: 'server',
    sdkType: ['typescript','javascript','python','docerfile'],
    stars: 24600 ,
    rating: 4.5,
    reviewCount: 30,
    tags: ['google', 'drive'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive',
    createdAt: '2024-03-25',
    author: {
      name: 'Google Team',
      avatar: '/google-avatar.svg'
    },
    featured: false
  },
  {
    id: '10',
    name: 'Google Maps',
    description: 'Location services, directions, and place details',
    type: 'client',
    category: 'sdk',
    sdkType: ['typescript','javascript','python','docerfile'],
    stars: 24600 ,
    rating: 4.7,
    reviewCount: 38,
    tags: ['maps', 'location'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps',
    createdAt: '2024-03-25',
    author: {
      name: 'Google Maps Team',
      avatar: '/maps-avatar.svg'
    },
    featured: false
  },
  {
    id: '11',
    name: 'Memory',
    description: 'Knowledge graph-based persistent memory system',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 300,
    rating: 4.8,
    reviewCount: 50,
    tags: ['memory', 'knowledge-graph'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/memory',
    createdAt: '2024-03-25',
    author: {
      name: 'Memory AI',
      avatar: '/memory-avatar.svg'
    },
    featured: true
  },
  {
    id: '12',
    name: 'PostgreSQL',
    description: 'Read-only database access with schema inspection',
    type: 'server',
    category: 'database',
    sdkType: ['sql'],
    stars: 270,
    rating: 4.7,
    reviewCount: 38,
    tags: ['database', 'postgres'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/postgres',
    createdAt: '2024-03-25',
    author: {
      name: 'PostgreSQL Team',
      avatar: '/postgres-avatar.svg'
    },
    featured: false
  },
  {
    id: '13',
    name: 'Puppeteer',
    description: 'Browser automation and web scraping',
    type: 'client',
    category: 'sdk',
    sdkType: ['javascript'],
    stars: 320,
    rating: 4.9,
    reviewCount: 60,
    tags: ['automation', 'scraping'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer',
    createdAt: '2024-03-25',
    author: {
      name: 'Puppeteer Team',
      avatar: '/puppeteer-avatar.svg'
    },
    featured: true
  },
  {
    id: '14',
    name: 'Redis',
    description: 'Interact with Redis key-value stores',
    type: 'server',
    category: 'database',
    sdkType: ['go'],
    stars: 290,
    rating: 4.8,
    reviewCount: 48,
    tags: ['redis', 'key-value'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/redis',
    createdAt: '2024-03-25',
    author: {
      name: 'Redis Team',
      avatar: '/redis-avatar.svg'
    },
    featured: true
  },
  {
    id: '15',
    name: 'Sentry',
    description: 'Retrieving and analyzing issues from Sentry.io',
    type: 'server',
    category: 'server',
    sdkType: ['typescript'],
    stars: 240,
    rating: 4.5,
    reviewCount: 33,
    tags: ['error-monitoring', 'sentry'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sentry',
    createdAt: '2024-03-25',
    author: {
      name: 'Sentry Team',
      avatar: '/sentry-avatar.svg'
    },
    featured: false
  },
  {
    id: '16',
    name: 'Sequential Thinking',
    description: 'Dynamic and reflective problem-solving through thought sequences',
    type: 'client',
    category: 'ai',
    sdkType: ['python'],
    stars: 280,
    rating: 4.7,
    reviewCount: 40,
    tags: ['ai', 'problem-solving'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking',
    createdAt: '2024-03-25',
    author: {
      name: 'AI Thinkers',
      avatar: '/sequential-avatar.svg'
    },
    featured: false
  },
  {
    id: '17',
    name: 'Slack',
    description: 'Channel management and messaging capabilities',
    type: 'client',
    category: 'sdk',
    sdkType: ['typescript'],
    stars: 310,
    rating: 4.8,
    reviewCount: 55,
    tags: ['messaging', 'slack'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/slack',
    createdAt: '2024-03-25',
    author: {
      name: 'Slack Team',
      avatar: '/slack-avatar.svg'
    },
    featured: true
  },
  {
    id: '18',
    name: 'Sqlite',
    description: 'Database interaction and business intelligence capabilities',
    type: 'server',
    category: 'database',
    sdkType: ['sql'],
    stars: 260,
    rating: 4.6,
    reviewCount: 36,
    tags: ['sqlite', 'database'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite',
    createdAt: '2024-03-25',
    author: {
      name: 'SQLite Team',
      avatar: '/sqlite-avatar.svg'
    },
    featured: false
  },
  {
    id: '19',
    name: 'Time',
    description: 'Time and timezone conversion capabilities',
    type: 'client',
    category: 'sdk',
    sdkType: ['python'],
    stars: 255,
    rating: 4.5,
    reviewCount: 34,
    tags: ['time', 'timezone'],
    github: 'https://github.com/modelcontextprotocol/servers/tree/main/src/time',
    createdAt: '2024-03-25',
    author: {
      name: 'Time Devs',
      avatar: '/time-avatar.svg'
    },
    featured: false
  },
  {
    id: '20',
    name: 'Adfin',
    description: 'The only platform you need to get paid - all payments in one place, invoicing and accounting reconciliations with Adfin.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 320,
    rating: 4.7,
    reviewCount: 50,
    tags: ['payments', 'invoicing', 'accounting', 'cloud'],
    github: 'https://github.com/Adfin-Engineering/mcp-server-adfin',
    createdAt: '2023-11-10',
    author: {
      name: 'Adfin Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '21',
    name: 'AgentQL',
    description: 'Enable AI agents to get structured data from unstructured web with AgentQL.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 415,
    rating: 4.8,
    reviewCount: 66,
    tags: ['ai', 'data', 'web', 'agents'],
    github: 'https://github.com/tinyfish-io/agentql-mcp',
    createdAt: '2023-10-18',
    author: {
      name: 'AgentQL Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '22',
    name: 'AgentRPC',
    description: 'Connect to any function, any language, across network boundaries using AgentRPC.',
    type: 'server',
    category: 'sdk',
    sdkType: ['typescript', 'javascript', 'python'],
    stars: 388,
    rating: 4.6,
    reviewCount: 54,
    tags: ['rpc', 'network', 'function', 'sdk'],
    github: 'https://github.com/agentrpc/agentrpc',
    createdAt: '2023-09-20',
    author: {
      name: 'AgentRPC Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '23',
    name: 'Apify',
    description: 'Use 3,000+ pre-built cloud tools to extract data from websites, e-commerce, social media, search engines, maps, and more.',
    type: 'server',
    category: 'client',
    sdkType: ['javascript'],
    stars: 512,
    rating: 4.9,
    reviewCount: 80,
    tags: ['web', 'data', 'automation'],
    github: 'https://github.com/apify/actors-mcp-server',
    createdAt: '2023-08-12',
    author: {
      name: 'Apify Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '24',
    name: 'Audiense Insights',
    description: 'Marketing insights and audience analysis from Audiense reports, covering demographic, cultural, influencer, and content engagement analysis.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 270,
    rating: 4.5,
    reviewCount: 42,
    tags: ['marketing', 'insights', 'audience'],
    github: 'https://github.com/AudienseCo/mcp-audiense-insights',
    createdAt: '2023-07-05',
    author: {
      name: 'Audiense Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '25',
    name: 'Axiom',
    description: 'Query and analyze your Axiom logs, traces, and all other event data in natural language.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 355,
    rating: 4.7,
    reviewCount: 60,
    tags: ['logs', 'analytics', 'query'],
    github: 'https://github.com/axiomhq/mcp-server-axiom',
    createdAt: '2023-06-15',
    author: {
      name: 'Axiom Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '26',
    name: 'Bankless Onchain',
    description: 'Query Onchain data, like ERC20 tokens, transaction history, smart contract state.',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 290,
    rating: 4.6,
    reviewCount: 48,
    tags: ['onchain', 'blockchain', 'erc20'],
    github: 'https://github.com/Bankless/onchain-mcp',
    createdAt: '2023-05-10',
    author: {
      name: 'Bankless Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '27',
    name: 'Box',
    description: 'Interact with the Intelligent Content Management platform through Box AI.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 330,
    rating: 4.5,
    reviewCount: 52,
    tags: ['box', 'content', 'ai'],
    github: 'https://github.com/box-community/mcp-server-box',
    createdAt: '2023-04-08',
    author: {
      name: 'Box Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '28',
    name: 'Browserbase',
    description: 'Automate browser interactions in the cloud (e.g. web navigation, data extraction, form filling, and more).',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 375,
    rating: 4.7,
    reviewCount: 58,
    tags: ['browser', 'automation', 'data'],
    github: 'https://github.com/browserbase/mcp-server-browserbase',
    createdAt: '2023-03-12',
    author: {
      name: 'Browserbase Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '30',
    name: 'Chroma (Semantic Search)',
    description: 'Embeddings, vector search, document storage, and full-text search with the open-source AI application database.',
    type: 'server',
    category: 'database',
    sdkType: ['python'],
    stars: 500,
    rating: 4.9,
    reviewCount: 76,
    tags: ['embeddings', 'vector search', 'ai'],
    github: 'https://github.com/chroma-core/chroma-mcp',
    createdAt: '2023-02-01',
    author: {
      name: 'Chroma Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '31',
    name: 'Chronulus AI',
    description: 'Predict anything with Chronulus AI forecasting and prediction agents.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'python'],
    stars: 210,
    rating: 4.6,
    reviewCount: 48,
    tags: ['forecasting', 'prediction', 'ai', 'agents'],
    github: 'https://github.com/ChronulusAI/chronulus-mcp',
    createdAt: '2024-05-10',
    author: {
      name: 'Chronulus Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '32',
    name: 'ClickHouse',
    description: 'Query your ClickHouse database server.',
    type: 'server',
    category: 'database',
    sdkType: ['typescript', 'go'],
    stars: 980,
    rating: 4.9,
    reviewCount: 132,
    tags: ['database', 'query', 'clickhouse'],
    github: 'https://github.com/ClickHouse/mcp-clickhouse',
    createdAt: '2021-01-20',
    author: {
      name: 'ClickHouse Inc.',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '33',
    name: 'Cloudflare',
    description: 'Deploy, configure & interrogate your resources on the Cloudflare developer platform (e.g. Workers/KV/R2/D1)',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 760,
    rating: 4.7,
    reviewCount: 89,
    tags: ['cloud', 'deployment', 'cloudflare', 'workers'],
    github: 'https://github.com/cloudflare/mcp-server-cloudflare',
    createdAt: '2022-03-12',
    author: {
      name: 'Cloudflare',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '34',
    name: 'Comet Opik',
    description: 'Query and analyze your Opik logs, traces, prompts and all other telemetry data from your LLMs in natural language.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 312,
    rating: 4.5,
    reviewCount: 36,
    tags: ['llm', 'logs', 'telemetry', 'tracing'],
    github: 'https://github.com/comet-ml/opik-mcp',
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
    id: '35',
    name: 'Dart',
    description: 'Interact with task, doc, and project data in Dart, an AI-native project management tool.',
    type: 'server',
    category: 'client',
    sdkType: ['javascript'],
    stars: 275,
    rating: 4.4,
    reviewCount: 30,
    tags: ['project-management', 'ai', 'tasks'],
    github: 'https://github.com/its-dart/dart-mcp-server',
    createdAt: '2023-02-20',
    author: {
      name: 'Dart Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '36',
    name: 'DevHub',
    description: 'Manage and utilize website content within the DevHub CMS platform.',
    type: 'server',
    category: 'sdk',
    sdkType: ['typescript'],
    stars: 190,
    rating: 4.3,
    reviewCount: 24,
    tags: ['cms', 'content-management', 'web'],
    github: 'https://github.com/devhub/devhub-cms-mcp',
    createdAt: '2022-06-15',
    author: {
      name: 'DevHub',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '37',
    name: 'E2B',
    description: 'Run code in secure sandboxes hosted by E2B',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 500,
    rating: 4.9,
    reviewCount: 120,
    tags: ['sandbox', 'secure', 'code execution'],
    github: 'https://github.com/e2b-dev/mcp-server',
    createdAt: '2024-01-15',
    author: {
      name: 'E2B Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '38',
    name: 'EduBase',
    description: 'Interact with EduBase, a comprehensive e-learning platform with advanced quizzing, exam management, and content organization capabilities',
    type: 'server',
    category: 'client',
    sdkType: ['typescript'],
    stars: 350,
    rating: 4.7,
    reviewCount: 80,
    tags: ['education', 'elearning', 'quiz'],
    github: 'https://github.com/EduBase/MCP',
    createdAt: '2023-11-10',
    author: {
      name: 'EduBase Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '39',
    name: 'eSignatures',
    description: 'Contract and template management for drafting, reviewing, and sending binding contracts.',
    type: 'server',
    category: 'security',
    sdkType: ['typescript'],
    stars: 420,
    rating: 4.8,
    reviewCount: 95,
    tags: ['contracts', 'signatures', 'legal'],
    github: 'https://github.com/esignaturescom/mcp-server-esignatures',
    createdAt: '2023-12-01',
    author: {
      name: 'eSignatures Inc.',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '40',
    name: 'Fewsats',
    description: 'Enable AI Agents to purchase anything in a secure way using Fewsats',
    type: 'server',
    category: 'security',
    sdkType: ['typescript', 'javascript'],
    stars: 390,
    rating: 4.6,
    reviewCount: 75,
    tags: ['payment', 'secure', 'ai'],
    github: 'https://github.com/Fewsats/fewsats-mcp',
    createdAt: '2023-12-05',
    author: {
      name: 'Fewsats',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '41',
    name: 'Fibery',
    description: 'Perform queries and entity operations in your Fibery workspace.',
    type: 'server',
    category: 'database',
    sdkType: ['typescript'],
    stars: 410,
    rating: 4.7,
    reviewCount: 85,
    tags: ['workspace', 'query', 'operations'],
    github: 'https://github.com/Fibery-inc/fibery-mcp-server',
    createdAt: '2023-11-12',
    author: {
      name: 'Fibery Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '42',
    name: 'Financial Datasets',
    description: 'Stock market API made for AI agents',
    type: 'server',
    category: 'ai',
    sdkType: ['javascript'],
    stars: 530,
    rating: 4.8,
    reviewCount: 110,
    tags: ['stock', 'market', 'api'],
    github: 'https://github.com/financial-datasets/mcp-server',
    createdAt: '2024-01-01',
    author: {
      name: 'Financial API Inc.',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  // {
  //   id: '43',
  //   name: 'Firecrawl',
  //   description: 'Extract web data with Firecrawl',
  //   type: 'server',
  //   category: 'performance',
  //   sdkType: ['typescript'],
  //   stars: 480,
  //   rating: 4.7,
  //   reviewCount: 90,
  //   tags: ['web', 'crawl', 'extract'],
  //   github: 'https://github.com/mendableai/firecrawl-mcp-server',
  //   createdAt: '2023-12-20',
  //   author: {
  //     name: 'Firecrawl',
  //     avatar: '/placeholder.svg'
  //   },
  //   featured: false
  // },
  {
    id: '44',
    name: 'Fireproof',
    description: 'Immutable ledger database with live synchronization',
    type: 'server',
    category: 'database',
    sdkType: ['typescript', 'javascript'],
    stars: 460,
    rating: 4.8,
    reviewCount: 100,
    tags: ['ledger', 'immutable', 'database'],
    github: 'https://github.com/fireproof-storage/mcp-database-server',
    createdAt: '2023-12-25',
    author: {
      name: 'Fireproof Inc.',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '45',
    name: 'Gitee',
    description: 'Gitee API integration, repository, issue, and pull request management, and more.',
    type: 'server',
    category: 'client',
    sdkType: ['javascript'],
    stars: 520,
    rating: 4.7,
    reviewCount: 105,
    tags: ['repo', 'issues', 'git'],
    github: 'https://github.com/oschina/mcp-gitee',
    createdAt: '2024-01-10',
    author: {
      name: 'Gitee Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '46',
    name: 'Grafana',
    description: 'Search dashboards, investigate incidents and query datasources in your Grafana instance',
    type: 'server',
    category: 'performance',
    sdkType: ['typescript'],
    stars: 850,
    rating: 4.9,
    reviewCount: 200,
    tags: ['dashboards', 'metrics', 'monitoring'],
    github: 'https://github.com/grafana/mcp-grafana',
    createdAt: '2023-09-10',
    author: {
      name: 'Grafana Labs',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '47',
    name: 'Graphlit',
    description: 'Ingest anything from Slack to Gmail to podcast feeds, in addition to web crawling, into a searchable Graphlit project.',
    type: 'server',
    category: 'ai',
    sdkType: ['javascript'],
    stars: 640,
    rating: 4.8,
    reviewCount: 140,
    tags: ['data ingestion', 'search', 'web crawling'],
    github: 'https://github.com/graphlit/graphlit-mcp-server',
    createdAt: '2024-01-20',
    author: {
      name: 'Graphlit',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '48',
    name: 'Hologres',
    description: 'Connect to a Hologres instance, get table metadata, query and analyze data.',
    type: 'server',
    category: 'database',
    sdkType: ['typescript'],
    stars: 720,
    rating: 4.7,
    reviewCount: 160,
    tags: ['database', 'query', 'analytics'],
    github: 'https://github.com/aliyun/alibabacloud-hologres-mcp-server',
    createdAt: '2023-10-05',
    author: {
      name: 'Hologres Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '49',
    name: 'Hyperbrowser',
    description: 'Next-gen platform empowering AI agents and enabling scalable browser automation.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 780,
    rating: 4.9,
    reviewCount: 175,
    tags: ['automation', 'ai', 'browser'],
    github: 'https://github.com/hyperbrowserai/mcp',
    createdAt: '2024-02-01',
    author: {
      name: 'Hyperbrowser',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '50',
    name: 'IBM wxflows',
    description: 'Tool platform by IBM to build, test and deploy tools for any data source',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript'],
    stars: 910,
    rating: 4.8,
    reviewCount: 210,
    tags: ['deployment', 'tools', 'data'],
    github: 'https://github.com/IBM/wxflows',
    createdAt: '2023-08-15',
    author: {
      name: 'IBM',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '51',
    name: 'ForeverVM',
    description: 'Run Python in a code sandbox.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript'],
    stars: 670,
    rating: 4.7,
    reviewCount: 130,
    tags: ['sandbox', 'python', 'execution'],
    github: 'https://github.com/jamsocket/forevervm',
    createdAt: '2023-12-18',
    author: {
      name: 'ForeverVM',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '52',
    name: 'Inbox Zero',
    description: 'AI personal assistant for email Inbox Zero',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 560,
    rating: 4.6,
    reviewCount: 115,
    tags: ['email', 'ai', 'assistant'],
    github: 'https://github.com/elie222/inbox-zero',
    createdAt: '2023-11-05',
    author: {
      name: 'Inbox Zero Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '53',
    name: 'Inkeep',
    description: 'RAG Search over your content powered by Inkeep',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 600,
    rating: 4.8,
    reviewCount: 125,
    tags: ['search', 'rag', 'content'],
    github: 'https://github.com/inkeep/mcp-server-python',
    createdAt: '2024-01-05',
    author: {
      name: 'Inkeep',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '54',
    name: 'Integration App',
    description: 'Interact with any other SaaS applications on behalf of your customers.',
    type: 'server',
    category: 'sdk',
    sdkType: ['javascript'],
    stars: 730,
    rating: 4.7,
    reviewCount: 150,
    tags: ['saas', 'integration', 'sdk'],
    github: 'https://github.com/integration-app/mcp-server',
    createdAt: '2023-12-10',
    author: {
      name: 'Integration Inc.',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '55',
    name: 'JetBrains',
    description: 'Work on your code with JetBrains IDEs',
    type: 'server',
    category: 'sdk',
    sdkType: ['typescript'],
    stars: 950,
    rating: 5.0,
    reviewCount: 250,
    tags: ['ide', 'development', 'tools'],
    github: 'https://github.com/JetBrains/mcp-jetbrains',
    createdAt: '2023-07-25',
    author: {
      name: 'JetBrains',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '56',
    name: 'Kagi Search',
    description: 'Search the web using Kagi\'s search API',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 680,
    rating: 4.8,
    reviewCount: 140,
    tags: ['search', 'web', 'api'],
    github: 'https://github.com/kagisearch/kagimcp',
    createdAt: '2024-01-12',
    author: {
      name: 'Kagi',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '57',
    name: 'Logfire',
    description: 'Access OpenTelemetry traces and metrics through Logfire.',
    type: 'server',
    category: 'performance',
    sdkType: ['typescript'],
    stars: 770,
    rating: 4.9,
    reviewCount: 165,
    tags: ['tracing', 'metrics', 'monitoring'],
    github: 'https://github.com/pydantic/logfire-mcp',
    createdAt: '2023-12-28',
    author: {
      name: 'Logfire',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '58',
    name: 'Langfuse Prompt Management',
    description: 'Open-source tool for collaborative editing, versioning, evaluating, and releasing prompts.',
    type: 'server',
    category: 'ai',
    sdkType: ['javascript'],
    stars: 800,
    rating: 4.8,
    reviewCount: 175,
    tags: ['prompts', 'ai', 'versioning'],
    github: 'https://github.com/langfuse/mcp-server-langfuse',
    createdAt: '2023-11-30',
    author: {
      name: 'Langfuse',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '59',
    name: 'Lingo.dev',
    description: 'Make your AI agent speak every language on the planet, using Lingo.dev Localization Engine.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 690,
    rating: 4.7,
    reviewCount: 130,
    tags: ['localization', 'ai', 'languages'],
    github: 'https://github.com/lingodotdev/lingo.dev',
    createdAt: '2024-01-08',
    author: {
      name: 'Lingo.dev',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '60',
    name: 'Make',
    description: 'Turn your Make scenarios into callable tools for AI assistants.',
    type: 'server',
    category: 'sdk',
    sdkType: ['javascript'],
    stars: 750,
    rating: 4.8,
    reviewCount: 155,
    tags: ['ai', 'scenarios', 'automation'],
    github: 'https://github.com/integromat/make-mcp-server',
    createdAt: '2023-12-22',
    author: {
      name: 'Make',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '61',
    name: 'Meilisearch',
    description: 'Interact & query with Meilisearch (Full-text & semantic search API)',
    type: 'server',
    category: 'database',
    sdkType: ['typescript'],
    stars: 820,
    rating: 4.9,
    reviewCount: 180,
    tags: ['search', 'database', 'api'],
    github: 'https://github.com/meilisearch/meilisearch-mcp',
    createdAt: '2024-01-01',
    author: {
      name: 'Meilisearch',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '62',
    name: 'Metoro',
    description: 'Query and interact with kubernetes environments monitored by Metoro',
    type: 'server',
    category: 'server',
    sdkType: ['typescript'],
    stars: 320,
    rating: 4.5,
    reviewCount: 30,
    tags: ['kubernetes', 'monitoring'],
    github: 'https://github.com/metoro-io/metoro-mcp-server',
    createdAt: '2023-06-12',
    author: {
      name: 'Metoro Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '63',
    name: 'Milvus',
    description: 'Search, Query and interact with data in your Milvus Vector Database.',
    type: 'server',
    category: 'database',
    sdkType: ['go', 'python'],
    stars: 290,
    rating: 4.7,
    reviewCount: 28,
    tags: ['vector', 'database', 'search'],
    github: 'https://github.com/zilliztech/mcp-server-milvus',
    createdAt: '2023-05-20',
    author: {
      name: 'Milvus Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '64',
    name: 'MotherDuck',
    description: 'Query and analyze data with MotherDuck and local DuckDB',
    type: 'server',
    category: 'database',
    sdkType: ['typescript'],
    stars: 350,
    rating: 4.8,
    reviewCount: 40,
    tags: ['duckdb', 'analytics', 'query'],
    github: 'https://github.com/motherduckdb/mcp-server-motherduck',
    createdAt: '2023-08-10',
    author: {
      name: 'MotherDuck Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '65',
    name: 'Needle',
    description: 'Production-ready RAG out of the box to search and retrieve data from your own documents.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 410,
    rating: 4.9,
    reviewCount: 55,
    tags: ['rag', 'search', 'documents'],
    github: 'https://github.com/needle-ai/needle-mcp',
    createdAt: '2023-09-01',
    author: {
      name: 'Needle AI',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '66',
    name: 'Neo4j',
    description: 'Neo4j graph database server (schema + read/write-cypher) and separate graph database backed memory',
    type: 'server',
    category: 'database',
    sdkType: ['java', 'python'],
    stars: 500,
    rating: 4.7,
    reviewCount: 60,
    tags: ['graph', 'database', 'cypher'],
    github: 'https://github.com/neo4j-contrib/mcp-neo4j',
    createdAt: '2023-07-18',
    author: {
      name: 'Neo4j Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '67',
    name: 'Neon',
    description: 'Interact with the Neon serverless Postgres platform',
    type: 'server',
    category: 'database',
    sdkType: ['typescript', 'go'],
    stars: 330,
    rating: 4.6,
    reviewCount: 36,
    tags: ['postgres', 'serverless', 'database'],
    github: 'https://github.com/neondatabase-labs/mcp-server-neon',
    createdAt: '2023-06-01',
    author: {
      name: 'Neon',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '68',
    name: 'Octagon',
    description: 'Deliver real-time investment research with extensive private and public market data.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 285,
    rating: 4.4,
    reviewCount: 22,
    tags: ['finance', 'research', 'market-data'],
    github: 'https://github.com/OctagonAI/octagon-mcp-server',
    createdAt: '2023-05-11',
    author: {
      name: 'Octagon AI',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '69',
    name: 'Oxylabs',
    description: 'Scrape websites with Oxylabs Web API, supporting dynamic rendering and parsing for structured data extraction.',
    type: 'server',
    category: 'client',
    sdkType: ['python'],
    stars: 410,
    rating: 4.8,
    reviewCount: 50,
    tags: ['scraping', 'api', 'web'],
    github: 'https://github.com/oxylabs/oxylabs-mcp',
    createdAt: '2023-08-30',
    author: {
      name: 'Oxylabs',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '70',
    name: 'Qdrant',
    description: 'Implement semantic memory layer on top of the Qdrant vector search engine',
    type: 'server',
    category: 'database',
    sdkType: ['rust', 'python'],
    stars: 470,
    rating: 4.9,
    reviewCount: 62,
    tags: ['vector', 'semantic', 'search'],
    github: 'https://github.com/qdrant/mcp-server-qdrant',
    createdAt: '2023-07-05',
    author: {
      name: 'Qdrant Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '71',
    name: 'Ramp',
    description: 'Interact with Ramp\'s Developer API to run analysis on your spend and gain insights leveraging LLMs',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'javascript'],
    stars: 210,
    rating: 4.6,
    reviewCount: 33,
    tags: ['finance', 'analytics', 'llm', 'spend'],
    github: 'https://github.com/ramp-public/ramp-mcp',
    createdAt: '2023-10-01',
    author: {
      name: 'Ramp Devs',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '72',
    name: 'Raygun',
    description: 'Interact with your crash reporting and real using monitoring data on your Raygun account',
    type: 'server',
    category: 'performance',
    sdkType: ['python', 'typescript'],
    stars: 320,
    rating: 4.7,
    reviewCount: 45,
    tags: ['monitoring', 'crash-reporting', 'performance'],
    github: 'https://github.com/MindscapeHQ/mcp-server-raygun',
    createdAt: '2023-09-20',
    author: {
      name: 'Raygun',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '73',
    name: 'Rember',
    description: 'Create spaced repetition flashcards in Rember to remember anything you learn in your chats',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 150,
    rating: 4.5,
    reviewCount: 28,
    tags: ['flashcards', 'learning', 'memory'],
    github: 'https://github.com/rember/rember-mcp',
    createdAt: '2023-08-10',
    author: {
      name: 'Rember Devs',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  // {
  //   id: 'riza',
  //   name: 'Riza logo Riza',
  //   description: 'Arbitrary code execution and tool-use platform for LLMs by Riza',
  //   type: 'server',
  //   category: 'ai',
  //   sdkType: ['python'],
  //   stars: 295,
  //   rating: 4.9,
  //   reviewCount: 39,
  //   tags: ['llm', 'code-execution', 'tools'],
  //   github: '',
  //   createdAt: '2023-07-25',
  //   author: {
  //     name: 'Riza',
  //     avatar: '/placeholder.svg'
  //   },
  //   featured: true
  // },
  {
    id: '74',
    name: 'Search1API',
    description: 'One API for Search, Crawling, and Sitemaps',
    type: 'server',
    category: 'client',
    sdkType: ['javascript'],
    stars: 180,
    rating: 4.4,
    reviewCount: 22,
    tags: ['search', 'crawl', 'sitemap'],
    github: 'https://github.com/fatwang2/search1api-mcp',
    createdAt: '2023-06-30',
    author: {
      name: 'Search1API',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '75',
    name: 'ScreenshotOne',
    description: 'Render website screenshots with ScreenshotOne',
    type: 'server',
    category: 'cloud',
    sdkType: ['javascript', 'python'],
    stars: 260,
    rating: 4.7,
    reviewCount: 36,
    tags: ['screenshot', 'render', 'automation'],
    github: 'https://github.com/screenshotone/mcp',
    createdAt: '2023-08-15',
    author: {
      name: 'ScreenshotOne',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '76',
    name: 'StarRocks',
    description: 'Interact with StarRocks',
    type: 'server',
    category: 'database',
    sdkType: ['go', 'python'],
    stars: 410,
    rating: 4.8,
    reviewCount: 55,
    tags: ['database', 'analytics', 'starrocks'],
    github: 'https://github.com/StarRocks/mcp-server-starrocks',
    createdAt: '2023-07-01',
    author: {
      name: 'StarRocks Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '77',
    name: 'Stripe',
    description: 'Interact with Stripe API',
    type: 'server',
    category: 'client',
    sdkType: ['typescript', 'python'],
    stars: 500,
    rating: 4.9,
    reviewCount: 80,
    tags: ['payments', 'api', 'finance'],
    github: 'https://github.com/stripe/agent-toolkit',
    createdAt: '2023-06-20',
    author: {
      name: 'Stripe',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '78',
    name: 'Tavily',
    description: 'Search engine for AI agents (search + extract) powered by Tavily',
    type: 'server',
    category: 'ai',
    sdkType: ['javascript'],
    stars: 170,
    rating: 4.5,
    reviewCount: 30,
    tags: ['search', 'ai', 'agents'],
    github: 'https://github.com/tavily-ai/tavily-mcp',
    createdAt: '2023-07-28',
    author: {
      name: 'Tavily',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '79',
    name: 'Tinybird',
    description: 'Interact with Tinybird serverless ClickHouse platform',
    type: 'server',
    category: 'cloud',
    sdkType: ['python', 'typescript'],
    stars: 285,
    rating: 4.6,
    reviewCount: 31,
    tags: ['analytics', 'cloud', 'clickhouse'],
    github: 'https://github.com/tinybirdco/mcp-tinybird',
    createdAt: '2023-08-22',
    author: {
      name: 'Tinybird',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '80',
    name: 'UnifAI',
    description: 'Dynamically search and call tools using UnifAI Network',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 240,
    rating: 4.5,
    reviewCount: 29,
    tags: ['network', 'ai', 'tools'],
    github: 'https://github.com/unifai-network/unifai-mcp-server',
    createdAt: '2023-07-10',
    author: {
      name: 'UnifAI',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '81',
    name: 'Vectorize',
    description: 'Vectorize MCP server for advanced retrieval, Private Deep Research, Anything-to-Markdown file extraction and text chunking.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 310,
    rating: 4.8,
    reviewCount: 41,
    tags: ['vector', 'retrieval', 'markdown'],
    github: 'https://github.com/vectorize-io/vectorize-mcp-server',
    createdAt: '2023-08-18',
    author: {
      name: 'Vectorize',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '82',
    name: 'Verodat',
    description: 'Interact with Verodat AI Ready Data platform',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript'],
    stars: 200,
    rating: 4.3,
    reviewCount: 25,
    tags: ['data', 'platform', 'ai'],
    github: 'https://github.com/Verodat/verodat-mcp-server',
    createdAt: '2023-09-05',
    author: {
      name: 'Verodat',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '83',
    name: 'VeyraX',
    description: 'Single tool to control all 100+ API integrations, and UI components',
    type: 'server',
    category: 'client',
    sdkType: ['typescript'],
    stars: 230,
    rating: 4.5,
    reviewCount: 27,
    tags: ['api', 'integration', 'ui'],
    github: 'https://github.com/VeyraX/veyrax-mcp',
    createdAt: '2023-08-05',
    author: {
      name: 'VeyraX',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '84',
    name: 'ZenML',
    description: 'Interact with your MLOps and LLMOps pipelines through your ZenML MCP server',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 375,
    rating: 4.7,
    reviewCount: 37,
    tags: ['mlops', 'llmops', 'pipeline'],
    github: 'https://github.com/zenml-io/mcp-zenml',
    createdAt: '2023-09-15',
    author: {
      name: 'ZenML',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '85',
    name: 'Ableton Live',
    description: 'An MCP server to control Ableton Live.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 120,
    rating: 4.5,
    reviewCount: 20,
    tags: ['ableton', 'music', 'automation'],
    github: 'https://github.com/Simon-Kansara/ableton-live-mcp-server',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '86',
    name: 'Airbnb',
    description: 'Provides tools to search Airbnb and get listing details.',
    type: 'server',
    category: 'ai',
    sdkType: ['python','typescript'],
    stars: 98,
    rating: 4.4,
    reviewCount: 15,
    tags: ['airbnb', 'search', 'travel'],
    github: 'https://github.com/openbnb-org/mcp-server-airbnb',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '87',
    name: 'Algorand',
    description: 'A comprehensive MCP server for tooling interactions (40+) and resource accessibility (60+) plus many useful prompts for interacting with the Algorand blockchain.',
    type: 'server',
    category: 'ai',
    sdkType: ['python','javascript'],
    stars: 150,
    rating: 4.7,
    reviewCount: 30,
    tags: ['algorand', 'blockchain', 'crypto'],
    github: 'https://github.com/GoPlausible/algorand-mcp',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '88',
    name: 'Airflow',
    description: 'A MCP Server that connects to Apache Airflow using official python client.',
    type: 'server',
    category: 'cloud',
    sdkType: ['python'],
    stars: 110,
    rating: 4.5,
    reviewCount: 18,
    tags: ['airflow', 'workflow', 'orchestration'],
    github: 'https://github.com/yangkyeongmo/mcp-server-apache-airflow',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '89',
    name: 'Airtable Access',
    description: 'Read and write access to Airtable databases, with schema inspection.',
    type: 'server',
    category: 'database',
    sdkType: ['javascript','typescript'],
    stars: 130,
    rating: 4.6,
    reviewCount: 22,
    tags: ['airtable', 'database', 'schema'],
    github: 'https://github.com/domdomegg/airtable-mcp-server',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '90',
    name: 'Airtable MCP',
    description: 'Airtable Model Context Protocol Server.',
    type: 'server',
    category: 'database',
    sdkType: ['typescript','javascript'],
    stars: 125,
    rating: 4.5,
    reviewCount: 19,
    tags: ['airtable', 'mcp', 'data'],
    github: 'https://github.com/felores/airtable-mcp',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '91',
    name: 'AlphaVantage',
    description: 'MCP server for stock market data API AlphaVantage.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 140,
    rating: 4.7,
    reviewCount: 24,
    tags: ['stock', 'finance', 'api'],
    github: 'https://github.com/calvernaz/alphavantage',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '92',
    name: 'Anki',
    description: 'An MCP server for interacting with your Anki decks and cards.',
    type: 'server',
    category: 'ai',
    sdkType: ['javascript'],
    stars: 115,
    rating: 4.6,
    reviewCount: 21,
    tags: ['anki', 'flashcards', 'learning'],
    github: 'https://github.com/scorzeth/anki-mcp-server',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '93',
    name: 'Any Chat Completions',
    description: 'Interact with any OpenAI SDK Compatible Chat Completions API like OpenAI, Perplexity, Groq, xAI and many more.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 160,
    rating: 4.8,
    reviewCount: 28,
    tags: ['chat', 'llm', 'completions'],
    github: 'https://github.com/pyroprompts/any-chat-completions-mcp',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '94',
    name: 'ArangoDB',
    description: 'MCP Server that provides database interaction capabilities through ArangoDB.',
    type: 'server',
    category: 'database',
    sdkType: ['javascript','typescript'],
    stars: 100,
    rating: 4.5,
    reviewCount: 17,
    tags: ['arangodb', 'database'],
    github: 'https://github.com/ravenwits/mcp-server-arangodb',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '95',
    name: 'Atlassian',
    description: 'Interact with Atlassian Cloud products (Confluence and Jira) including searching/reading Confluence spaces/pages, accessing Jira issues, and project metadata.',
    type: 'server',
    category: 'cloud',
    sdkType: ['python'],
    stars: 135,
    rating: 4.6,
    reviewCount: 23,
    tags: ['jira', 'confluence', 'atlassian'],
    github: 'https://github.com/sooperset/mcp-atlassian',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '96',
    name: 'AWS',
    description: 'Perform operations on your AWS resources using an LLM.',
    type: 'server',
    category: 'cloud',
    sdkType: ['python'],
    stars: 170,
    rating: 4.9,
    reviewCount: 35,
    tags: ['aws', 'cloud', 'llm'],
    github: 'https://github.com/rishikavikondala/mcp-server-aws',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '97',
    name: 'AWS Athena',
    description: 'A MCP server for AWS Athena to run SQL queries on Glue Catalog.',
    type: 'server',
    category: 'cloud',
    sdkType: ['javacript','typescript'],
    stars: 130,
    rating: 4.7,
    reviewCount: 26,
    tags: ['athena', 'aws', 'sql'],
    github: 'https://github.com/lishenxydlgzs/aws-athena-mcp',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '98',
    name: 'AWS Cost Explorer',
    description: 'Optimize your AWS spend (including Amazon Bedrock spend) with this MCP server by examining spend across regions, services, instance types and foundation models (demo video).',
    type: 'server',
    category: 'performance',
    sdkType: ['python'],
    stars: 140,
    rating: 4.8,
    reviewCount: 27,
    tags: ['aws', 'cost', 'optimization'],
    github: 'https://github.com/aarora79/aws-cost-explorer-mcp-server',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '99',
    name: 'AWS Resources Operations',
    description: 'Run generated python code to securely query or modify any AWS resources supported by boto3.',
    type: 'server',
    category: 'cloud',
    sdkType: ['python'],
    stars: 125,
    rating: 4.7,
    reviewCount: 22,
    tags: ['aws', 'boto3', 'resources'],
    github: 'https://github.com/baryhuang/mcp-server-aws-resources-python',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '100',
    name: 'AWS S3',
    description: 'A sample MCP server for AWS S3 that flexibly fetches objects from S3 such as PDF documents.',
    type: 'server',
    category: 'cloud',
    sdkType: ['python'],
    stars: 115,
    rating: 4.6,
    reviewCount: 19,
    tags: ['aws', 's3', 'storage'],
    github: 'https://github.com/aws-samples/sample-mcp-server-s3',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '101',
    name: 'Azure ADX',
    description: 'Query and analyze Azure Data Explorer databases.',
    type: 'server',
    category: 'cloud',
    sdkType: ['python'],
    stars: 110,
    rating: 4.5,
    reviewCount: 18,
    tags: ['azure', 'adx', 'data'],
    github: 'https://github.com/pab1it0/adx-mcp-server',
    createdAt: '2025-03-21',
    author: {
      name: 'MCP Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: "102",
    name: "Base Free USDC Transfer",
    description: "Send USDC on Base for free using Claude AI! Built with Coinbase CDP.",
    type: "server",
    category: "finance",
    sdkType: ["javascript"],
    stars: 5,
    rating: 4.9,
    reviewCount: 10,
    tags: ["usdc", "coinbase", "base", "finance"],
    github: "https://github.com/magnetai/mcp-free-usdc-transfer",
    createdAt: "2025-01-15",
    author: {
      name: "GoPlausible",
      avatar: "/avatars/goplausible.png"
    },
    featured: true
  },
  {
    id: "103",
    name: "Basic Memory",
    description: "Local-first knowledge management system that builds a semantic graph from Markdown files, enabling persistent memory across conversations with LLMs.",
    type: "server",
    category: "productivity",
    sdkType: ["python"],
    stars: 4,
    rating: 4.5,
    reviewCount: 8,
    tags: ["knowledge management", "semantic graph", "markdown", "llm"],
    github: "https://github.com/basicmachines-co/basic-memory",
    createdAt: "2025-02-10",
    author: {
      name: "GoPlausible",
      avatar: "/avatars/goplausible.png"
    },
    featured: false
  },
  {
    id: "104",
    name: "BigQuery (by LucasHild)",
    description: "This server enables LLMs to inspect database schemas and execute queries on BigQuery.",
    type: "server",
    category: "database",
    sdkType: ["javascript"],
    stars: 5,
    rating: 4.7,
    reviewCount: 12,
    tags: ["bigquery", "database", "llm", "queries"],
    github: "https://github.com/GoPlausible/modelcontextprotocol-servers",
    createdAt: "2025-03-05",
    author: {
      name: "LucasHild",
      avatar: "/avatars/lucashild.png"
    },
    featured: true
  },
  {
    id: "105",
    name: "BigQuery (by ergut)",
    description: "Server implementation for Google BigQuery integration that enables direct BigQuery database access and querying capabilities.",
    type: "server",
    category: "database",
    sdkType: ["python"],
    stars: 5,
    rating: 4.8,
    reviewCount: 15,
    tags: ["bigquery", "database", "google", "queries"],
    github: "https://github.com/LucasHild/mcp-server-bigquery",
    createdAt: "2024-12-03",
    author: {
      name: "Salih Ergüt",
      avatar: "/avatars/ergut.png"
    },
    featured: true
  },
  {
    id: "106",
    name: "Bing Web Search API (by hanchunglee)",
    description: "Server implementation for Microsoft Bing Web Search API.",
    type: "server",
    category: "search",
    sdkType: ["python"],
    stars: 4,
    rating: 4.3,
    reviewCount: 9,
    tags: ["bing", "web search", "microsoft", "api"],
    github: "https://github.com/leehanchung/bing-search-mcp",
    createdAt: "2025-01-20",
    author: {
      name: "hanchunglee",
      avatar: "/avatars/hanchunglee.png"
    },
    featured: false
  },
  {
    id: "107",
    name: "Bitable MCP (by lloydzhou)",
    description: "MCP server provides access to Lark Bitable through the Model Context Protocol. It allows users to interact with Bitable tables using predefined tools.",
    type: "server",
    category: "productivity",
    sdkType: ["python"],
    stars: 4,
    rating: 4.4,
    reviewCount: 7,
    tags: ["bitable", "lark", "tables", "tools"],
    github: "https://github.com/lloydzhou/bitable-mcp",
    createdAt: "2025-02-15",
    author: {
      name: "lloydzhou",
      avatar: "/avatars/lloydzhou.png"
    },
    featured: false
  },
  {
    id: "108",
    name: "Blender (by ahujasid)",
    description: "Blender integration allowing prompt-enabled 3D scene creation, modeling, and manipulation.",
    type: "server",
    category: "graphics",
    sdkType: ["python"],
    stars: 5,
    rating: 4.9,
    reviewCount: 11,
    tags: ["blender", "3d modeling", "graphics", "integration"],
    github: "https://github.com/ahujasid/blender-mcp",
    createdAt: "2025-01-25",
    author: {
      name: "ahujasid",
      avatar: "/avatars/ahujasid.png"
    },
    featured: true
  },
  {
    id: "109",
    name: "CFBD API",
    description: "An MCP server for the College Football Data API.",
    type: "server",
    category: "sports",
    sdkType: ["python"],
    stars: 4,
    rating: 4.2,
    reviewCount: 6,
    tags: ["college football", "data", "sports", "api"],
    github: "https://github.com/lenwood/cfbd-mcp-server",
    createdAt: "2025-02-05",
    author: {
      name: "GoPlausible",
      avatar: "/avatars/goplausible.png"
    },
    featured: false
  },
  {
    id: '110',
    name: 'ChatMCP',
    description: 'An Open Source Cross-platform GUI Desktop application compatible with Linux, macOS, and Windows, enabling seamless interaction with MCP servers across dynamically selectable LLMs, by AIQL',
    type: 'server',
    category: 'system-and-utilities',
    sdkType: ['HTML','javascript'],
    stars: 120,
    rating: 4.7,
    reviewCount: 25,
    tags: ['gui', 'desktop', 'cross-platform', 'llm'],
    github: 'https://github.com/AI-QL/chat-mcp',
    createdAt: '2024-02-10',
    author: {
      name: 'AIQLabs',
      avatar: '/avatars/aiqlabs.png'
    },
    featured: false
  },
  {
    id: '111',
    name: 'ChatSum',
    description: 'Query and Summarize chat messages with LLM. by mcpso',
    type: 'server',
    category: 'communication',
    sdkType: ['typescript','javascript'],
    stars: 85,
    rating: 4.5,
    reviewCount: 18,
    tags: ['chat', 'summarization', 'llm'],
    github: 'https://github.com/chatmcp/mcp-server-chatsum',
    createdAt: '2023-11-22',
    author: {
      name: 'mcpso',
      avatar: '/avatars/mcpso.png'
    },
    featured: false
  },
  {
    id: '112',
    name: 'Chroma (AI Application DB)',
    description: 'Vector database server for semantic document search and metadata filtering, built on Chroma',
    type: 'server',
    category: 'ai-and-memory',
    sdkType: ['python'],
    stars: 200,
    rating: 4.9,
    reviewCount: 40,
    tags: ['vector-database', 'semantic-search', 'metadata-filtering'],
    github: 'https://github.com/privetin/chroma',
    createdAt: '2023-09-15',
    author: {
      name: 'Chroma Team',
      avatar: '/avatars/chroma.png'
    },
    featured: true
  },
  {
    id: '113',
    name: 'ClaudePost',
    description: 'ClaudePost enables seamless email management for Gmail, offering secure features like email search, reading, and sending.',
    type: 'server',
    category: 'communication',
    sdkType: ['python'],
    stars: 95,
    rating: 4.6,
    reviewCount: 22,
    tags: ['email', 'gmail', 'management'],
    github: 'https://github.com/ZilongXue/claude-post',
    createdAt: '2023-12-05',
    author: {
      name: 'Claude AI',
      avatar: '/avatars/claudeai.png'
    },
    featured: false
  },
  {
    id: '114',
    name: 'Cloudinary',
    description: 'Cloudinary Model Context Protocol Server to upload media to Cloudinary and get back the media link and details.',
    type: 'server',
    category: 'media',
    sdkType: ['javascript'],
    stars: 110,
    rating: 4.8,
    reviewCount: 30,
    tags: ['media', 'upload', 'cloudinary'],
    github: 'https://github.com/felores/cloudinary-mcp-server',
    createdAt: '2023-10-20',
    author: {
      name: 'Cloudinary',
      avatar: '/avatars/cloudinary.png'
    },
    featured: true
  },
  {
    id: '115',
    name: 'code-assistant',
    description: 'A coding assistant MCP server that allows exploring a code-base and making changes to code. Should be used with trusted repos only (insufficient protection against prompt injections).',
    type: 'server',
    category: 'development-tools',
    sdkType: ['rust'],
    stars: 75,
    rating: 4.3,
    reviewCount: 15,
    tags: ['coding', 'assistant', 'code-base'],
    github: 'https://github.com/stippi/code-assistant',
    createdAt: '2024-01-12',
    author: {
      name: 'Dev Assistant',
      avatar: '/avatars/devassistant.png'
    },
    featured: false
  },
  {
    id: '116',
    name: 'code-executor',
    description: 'An MCP server that allows LLMs to execute Python code within a specified Conda environment.',
    type: 'server',
    category: 'system-and-utilities',
    sdkType: ['javascript'],
    stars: 130,
    rating: 4.7,
    reviewCount: 28,
    tags: ['code-execution', 'python', 'conda'],
    github: 'https://github.com/bazinga012/mcp_code_executor',
    createdAt: '2023-08-30',
    author: {
      name: 'LLM Tools',
      avatar: '/avatars/llmtools.png'
    },
    featured: true
  },
  {
    id: '117',
    name: 'code-sandbox-mcp',
    description: 'An MCP server to create secure code sandbox environments for executing code within Docker containers.',
    type: 'server',
    category: 'system-and-utilities',
    sdkType: ['go','shell'],
    stars: 90,
    rating: 4.5,
    reviewCount: 20,
    tags: ['code-sandbox', 'docker', 'secure-execution'],
    github: 'https://github.com/Automata-Labs-team/code-sandbox-mcp',
    createdAt: '2023-11-10',
    author: {
      name: 'Sandboxing',
      avatar: '/avatars/sandboxing.png'
    },
    featured: false
  },
  {
    id: '118',
    name: 'cognee-mcp',
    description: 'GraphRAG memory server with customizable ingestion, data processing, and search.',
    type: 'server',
    category: 'ai-and-memory',
    sdkType: ['python'],
    stars: 115,
    rating: 4.6,
    reviewCount: 26,
    tags: ['memory', 'graphrag', 'data-processing'],
    github: 'https://github.com/topoteretes/cognee/tree/main/cognee-mcp',
    createdAt: '2023-09-25',
    author: {
      name: 'Cognee',
      avatar: '/avatars/cognee.png'
    },
    featured: true
  },
  {
    id: '119',
    name: 'Coin API MCP',
    description: 'Provides access to CoinMarketCap cryptocurrency data.',
    type: 'server',
    category: 'server',
    sdkType: ['typescript'],
    stars: 180,
    rating: 4.5,
    reviewCount: 32,
    tags: ['crypto', 'market-data'],
    github: 'https://github.com/longmans/coin_api_mcp',
    createdAt: '2024-03-25',
    author: {
      name: 'Crypto Team',
      avatar: '/crypto-avatar.svg'
    },
    featured: false
  },
  {
    id: '120',
    name: 'Contentful MCP',
    description: 'Read, update, delete, publish content in your Contentful space(s) from this MCP Server.',
    type: 'server',
    category: 'server',
    sdkType: ['typescript'],
    stars: 210,
    rating: 4.7,
    reviewCount: 28,
    tags: ['cms', 'content'],
    github: 'https://github.com/ivo-toby/contentful-mcp',
    createdAt: '2024-03-26',
    author: {
      name: 'Contentful Team',
      avatar: '/contentful-avatar.svg'
    },
    featured: false
  },
  {
    id: '121',
    name: 'Crypto Fear & Greed MCP',
    description: 'Providing real-time and historical Crypto Fear & Greed Index data.',
    type: 'server',
    category: 'server',
    sdkType: ['typescript'],
    stars: 170,
    rating: 4.4,
    reviewCount: 25,
    tags: ['crypto', 'analytics'],
    github: 'https://github.com/kukapay/crypto-feargreed-mcp',
    createdAt: '2024-03-27',
    author: {
      name: 'Crypto Metrics Team',
      avatar: '/crypto-metrics-avatar.svg'
    },
    featured: false
  },
  {
    id: '122',
    name: 'CryptoPanic MCP Server',
    description: 'Providing latest cryptocurrency news to AI agents, powered by CryptoPanic.',
    type: 'server',
    category: 'server',
    sdkType: ['typescript'],
    stars: 160,
    rating: 4.3,
    reviewCount: 22,
    tags: ['crypto', 'news'],
    github: 'https://github.com/kukapay/cryptopanic-mcp-server',
    createdAt: '2024-03-28',
    author: {
      name: 'Crypto News Team',
      avatar: '/crypto-news-avatar.svg'
    },
    featured: false
  },
  {
    id: '123',
    name: 'Dappier',
    description: 'Connect LLMs to real-time, rights-cleared, proprietary data from trusted sources.',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 300,
    rating: 4.8,
    reviewCount: 45,
    tags: ['ai', 'real-time-data'],
    github: 'https://github.com/DappierAI/dappier-mcp',
    createdAt: '2024-03-29',
    author: {
      name: 'Dappier Team',
      avatar: '/dappier-avatar.svg'
    },
    featured: false
  },
  {
    id: '124',
    name: 'Data Exploration',
    description: 'MCP server for autonomous data exploration on .csv-based datasets.',
    type: 'server',
    category: 'database',
    sdkType: ['python'],
    stars: 220,
    rating: 4.6,
    reviewCount: 30,
    tags: ['data-analysis', 'csv'],
    github: 'https://github.com/reading-plus-ai/mcp-server-data-exploration',
    createdAt: '2024-03-30',
    author: {
      name: 'Data Science Team',
      avatar: '/data-avatar.svg'
    },
    featured: false
  },
  {
    id: '125',
    name: 'Dataset Viewer',
    description: 'Browse and analyze Hugging Face datasets with search, filtering, and export.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 190,
    rating: 4.5,
    reviewCount: 26,
    tags: ['huggingface', 'datasets'],
    github: 'https://github.com/privetin/dataset-viewer',
    createdAt: '2024-03-31',
    author: {
      name: 'Hugging Face Team',
      avatar: '/hf-avatar.svg'
    },
    featured: false
  },
  {
    id: '126',
    name: 'DBHub',
    description: 'Universal database MCP server connecting to MySQL, PostgreSQL, SQLite, and more.',
    type: 'server',
    category: 'database',
    sdkType: ['go'],
    stars: 260,
    rating: 4.7,
    reviewCount: 35,
    tags: ['database', 'orm'],
    github: 'https://github.com/kpsunil97/devrev-mcp-server',
    createdAt: '2024-04-01',
    author: {
      name: 'Database Team',
      avatar: '/dbhub-avatar.svg'
    },
    featured: false
  },
  {
    id:  '127',
    name: 'DeepSeek MCP Server',
    description: 'Model Context Protocol server integrating DeepSeek\'s advanced language models, in addition to other useful API endpoints',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript', 'python'],
    stars: 450,
    rating: 4.8,
    reviewCount: 60,
    tags: ['ai', 'ml', 'deepseek'],
    github: 'https://github.com/DMontgomery40/deepseek-mcp-server',
    createdAt: '2024-06-15',
    author: {
      name: 'DeepSeek Team',
      avatar: '/deepseek-avatar.svg'
    },
    featured: false
  },
  {
    id: '128',
    name: 'Deepseek_R1',
    description: 'A Model Context Protocol (MCP) server implementation connecting Claude Desktop with DeepSeek\'s language models (R1/V3)',
    type: 'server',
    category: 'ai',
    sdkType: ['typescript'],
    stars: 400,
    rating: 4.7,
    reviewCount: 55,
    tags: ['ai', 'ml', 'deepseek'],
    github: 'https://github.com/66julienmartin/MCP-server-Deepseek_R1',
    createdAt: '2024-06-20',
    author: {
      name: 'DeepSeek Team',
      avatar: '/deepseek-avatar.svg'
    },
    featured: false
  },
  {
    id: '129',
    name: 'deepseek-thinker-mcp',
    description: 'A MCP (Model Context Protocol) provider Deepseek reasoning content to MCP-enabled AI Clients, like Claude Desktop. Supports access to Deepseek\'s thought processes from the Deepseek API service or from a local Ollama server.',
    type: 'server',
    category: 'ai',
    sdkType: ['python', 'typescript'],
    stars: 380,
    rating: 4.6,
    reviewCount: 50,
    tags: ['ai', 'ml', 'deepseek'],
    github: 'https://github.com/ruixingshi/deepseek-thinker-mcp',
    createdAt: '2024-06-22',
    author: {
      name: 'DeepSeek Team',
      avatar: '/deepseek-avatar.svg'
    },
    featured: false
  },
  {
    id: '130',
    name: 'Descope',
    description: 'An MCP server to integrate with Descope to search audit logs, manage users, and more.',
    type: 'server',
    category: 'server',
    sdkType: ['javascript'],
    stars: 350,
    rating: 4.5,
    reviewCount: 40,
    tags: ['auth', 'audit', 'security'],
    github: 'https://github.com/descope-sample-apps/descope-mcp-server-stdio',
    createdAt: '2024-06-10',
    author: {
      name: 'Descope Team',
      avatar: '/descope-avatar.svg'
    },
    featured: false
  },
  {
    id: '131',
    name: 'DevRev',
    description: 'An MCP server to integrate with DevRev APIs to search through your DevRev Knowledge Graph where objects can be imported from different sources.',
    type: 'server',
    category: 'server',
    sdkType: ['go', 'typescript'],
    stars: 370,
    rating: 4.6,
    reviewCount: 42,
    tags: ['knowledge-graph', 'api', 'devrev'],
    github: 'https://github.com/kpsunil97/devrev-mcp-server',
    createdAt: '2024-06-18',
    author: {
      name: 'DevRev Team',
      avatar: '/devrev-avatar.svg'
    },
    featured: false
  },
  {
    id: '132',
    name: 'Dicom',
    description: 'An MCP server to query and retrieve medical images and for parsing and reading dicom-encapsulated documents (PDF, etc.).',
    type: 'server',
    category: 'server',
    sdkType: ['python'],
    stars: 410,
    rating: 4.7,
    reviewCount: 50,
    tags: ['medical', 'images', 'healthcare'],
    github: 'https://github.com/ChristianHinge/dicom-mcp',
    createdAt: '2024-06-14',
    author: {
      name: 'Dicom Team',
      avatar: '/dicom-avatar.svg'
    },
    featured: false
  },
  {
    id: '133',
    name: 'Dify',
    description: 'A simple implementation of an MCP server for Dify workflows.',
    type: 'server',
    category: 'server',
    sdkType: ['typescript'],
    stars: 330,
    rating: 4.4,
    reviewCount: 38,
    tags: ['workflow', 'automation'],
    github: 'https://github.com/YanxingLiu/dify-mcp-server',
    createdAt: '2024-06-12',
    author: {
      name: 'Dify Team',
      avatar: '/dify-avatar.svg'
    },
    featured: false
  },
  {
    id: '134',
    name: 'Discord',
    description: 'An MCP server to connect to Discord guilds through a bot and read and write messages in channels.',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'python'],
    stars: 500,
    rating: 4.9,
    reviewCount: 70,
    tags: ['discord', 'bot', 'chat'],
    github: 'https://github.com/v-3/discordmcp',
    createdAt: '2024-06-08',
    author: {
      name: 'Discord Team',
      avatar: '/discord-avatar.svg'
    },
    featured: false
  },
  {
    id: '135',
    name: 'Discourse',
    description: 'An MCP server to search Discourse posts on a Discourse forum.',
    type: 'server',
    category: 'server',
    sdkType: ['go'],
    stars: 300,
    rating: 4.3,
    reviewCount: 35,
    tags: ['forum', 'search'],
    github: 'https://github.com/AshDevFr/discourse-mcp-server',
    createdAt: '2024-06-05',
    author: {
      name: 'Discourse Team',
      avatar: '/discourse-avatar.svg'
    },
    featured: false
  },
  {
    id: '136',
    name: 'Docker',
    description: 'Integrate with Docker to manage containers, images, volumes, and networks.',
    type: 'server',
    category: 'server',
    sdkType: ['go', 'typescript'],
    stars: 450,
    rating: 4.8,
    reviewCount: 65,
    tags: ['containers', 'devops'],
    github: 'https://github.com/ckreiling/mcp-server-docker',
    createdAt: '2024-06-07',
    author: {
      name: 'Docker Team',
      avatar: '/docker-avatar.svg'
    },
    featured: false
  },
  {
    id: "137",
    name: "Drupal",
    description: "Server for interacting with Drupal using STDIO transport layer.",
    type: "server",
    category: "server",
    sdkType: ["php", "typescript"],
    stars: 320,
    rating: 4.4,
    reviewCount: 36,
    tags: ["cms", "web", "drupal"],
    github: "https://github.com/Omedia/mcp-server-drupal",
    createdAt: "2024-06-11",
    author: {
      name: "Drupal Team",
      avatar: "/drupal-avatar.svg"
    },
    featured: false
  },
  {
    id: "138",
    name: "Dune Analytics MCP",
    description: "A MCP server that bridges Dune Analytics data to AI agents.",
    type: "server",
    category: "server",
    sdkType: ["python", "typescript"],
    stars: 390,
    rating: 4.6,
    reviewCount: 48,
    tags: ["analytics", "blockchain", "data"],
    github: "https://github.com/kukapay/dune-analytics-mcp",
    createdAt: "2024-06-13",
    author: {
      name: "Dune Analytics Team",
      avatar: "/dune-analytics-avatar.svg"
    },
    featured: false
  },  
  {
    id: '139',
    name: 'Elasticsearch',
    description: 'MCP server implementation that provides Elasticsearch interaction.',
    type: 'server',
    category: 'server',
    sdkType: ['java', 'typescript'],
    stars: 420,
    rating: 4.7,
    reviewCount: 60,
    tags: ['search', 'database'],
    github: 'https://github.com/cr7258/elasticsearch-mcp-server',
    createdAt: '2024-06-09',
    author: {
      name: 'Elasticsearch Team',
      avatar: '/elasticsearch-avatar.svg'
    },
    featured: false
  },
  {
    id: '140',
    name: 'ElevenLabs',
    description: 'A server that integrates with ElevenLabs text-to-speech API capable of generating full voiceovers with multiple voices.',
    type: 'server',
    category: 'ai',
    sdkType: ['python'],
    stars: 480,
    rating: 4.9,
    reviewCount: 75,
    tags: ['text-to-speech', 'ai'],
    github: 'https://github.com/mamertofabian/elevenlabs-mcp-server',
    createdAt: '2024-06-06',
    author: {
      name: 'ElevenLabs Team',
      avatar: '/elevenlabs-avatar.svg'
    },
    featured: false
  },
  {
    id: "141",
    name: "Ergo Blockchain MCP",
    description: "An MCP server to integrate Ergo Blockchain Node and Explorer APIs for checking address balances, analyzing transactions, viewing transaction history, performing forensic analysis of addresses, searching for tokens, and monitoring network status.",
    type: "server",
    category: "server",
    sdkType: ["python", "typescript"],
    stars: 340,
    rating: 4.5,
    reviewCount: 42,
    tags: ["blockchain", "crypto", "forensics"],
    github: "https://github.com/marctheshark3/ergo-mcp",
    createdAt: "2024-07-01",
    author: {
      name: "Ergo Team",
      avatar: "/ergo-avatar.svg"
    },
    featured: false
  },
  {
    id: "142",
    name: "Eunomia",
    description: "Extension of the Eunomia framework that connects Eunomia instruments with MCP servers.",
    type: "server",
    category: "server",
    sdkType: ["go", "rust"],
    stars: 280,
    rating: 4.3,
    reviewCount: 37,
    tags: ["framework", "instrumentation"],
    github: "https://github.com/whataboutyou-ai/eunomia-MCP-server",
    createdAt: "2024-06-25",
    author: {
      name: "Eunomia Team",
      avatar: "/eunomia-avatar.svg"
    },
    featured: false
  },
  {
    id: "143",
    name: "EVM MCP Server",
    description: "Comprehensive blockchain services for 30+ EVM networks, supporting native tokens, ERC20, NFTs, smart contracts, transactions, and ENS resolution.",
    type: "server",
    category: "server",
    sdkType: ["solidity", "typescript"],
    stars: 410,
    rating: 4.7,
    reviewCount: 50,
    tags: ["blockchain", "evm", "nfts"],
    github: "https://github.com/mcpdotdirect/evm-mcp-server",
    createdAt: "2024-07-02",
    author: {
      name: "EVM Team",
      avatar: "/evm-avatar.svg"
    },
    featured: true
  },
  {
    id: "144",
    name: "Everything Search",
    description: "Fast file searching capabilities across Windows (using Everything SDK), macOS (using mdfind command), and Linux (using locate/plocate command).",
    type: "server",
    category: "server",
    sdkType: ["c++", "rust"],
    stars: 310,
    rating: 4.6,
    reviewCount: 39,
    tags: ["search", "file-management"],
    github: "https://github.com/mamertofabian/mcp-everything-search",
    createdAt: "2024-07-03",
    author: {
      name: "Search Team",
      avatar: "/everything-avatar.svg"
    },
    featured: false
  },
  {
    id: "145",
    name: "Excel",
    description: "Excel manipulation including data reading/writing, worksheet management, formatting, charts, and pivot table.",
    type: "server",
    category: "server",
    sdkType: ["python", "c#"],
    stars: 295,
    rating: 4.4,
    reviewCount: 34,
    tags: ["spreadsheet", "automation"],
    github: "https://github.com/haris-musa/excel-mcp-server",
    createdAt: "2024-07-04",
    author: {
      name: "Excel Automation",
      avatar: "/excel-avatar.svg"
    },
    featured: false
  },
  {
    id: "146",
    name: "Fantasy PL",
    description: "Give your coding agent direct access to up-to-date Fantasy Premier League data.",
    type: "server",
    category: "server",
    sdkType: ["python", "typescript"],
    stars: 270,
    rating: 4.3,
    reviewCount: 31,
    tags: ["sports", "fantasy"],
    github: "https://github.com/rishijatia/fantasy-pl-mcp",
    createdAt: "2024-07-05",
    author: {
      name: "Fantasy Sports Team",
      avatar: "/fantasy-avatar.svg"
    },
    featured: false
  },
  {
    id: "147",
    name: "fastn.ai – Unified API MCP Server",
    description: "A remote, dynamic MCP server with a unified API that connects to 1,000+ tools, actions, and workflows, featuring built-in authentication and monitoring.",
    type: "server",
    category: "server",
    sdkType: ["python", "typescript"],
    stars: 450,
    rating: 4.8,
    reviewCount: 55,
    tags: ["automation", "api"],
    github: "https://github.com/fastnai/mcp-fastn",
    createdAt: "2024-07-06",
    author: {
      name: "fastn.ai Team",
      avatar: "/fastn-avatar.svg"
    },
    featured: true
  },
  {
    id: "148",
    name: "Fetch",
    description: "A server that flexibly fetches HTML, JSON, Markdown, or plaintext.",
    type: "server",
    category: "server",
    sdkType: ["javascript", "python"],
    stars: 280,
    rating: 4.2,
    reviewCount: 30,
    tags: ["fetch", "data"],
    github: "https://github.com/zcaceres/fetch-mcp",
    createdAt: "2024-07-07",
    author: {
      name: "Fetch Team",
      avatar: "/fetch-avatar.svg"
    },
    featured: false
  },
  {
    id: "149",
    name: "Fingertip",
    description: "MCP server for Fingertip.com to search and create new sites.",
    type: "server",
    category: "server",
    sdkType: ["go", "typescript"],
    stars: 260,
    rating: 4.1,
    reviewCount: 29,
    tags: ["search", "site-management"],
    github: "https://github.com/fingertip-com/fingertip-mcp",
    createdAt: "2024-07-08",
    author: {
      name: "Fingertip Team",
      avatar: "/fingertip-avatar.svg"
    },
    featured: false
  },
  {
    id: "150",
    name: "Figma",
    description: "Give your coding agent direct access to Figma file data, helping it one-shot design implementation.",
    type: "server",
    category: "server",
    sdkType: ["typescript", "graphql"],
    stars: 330,
    rating: 4.6,
    reviewCount: 40,
    tags: ["design", "ui"],
    github: "https://github.com/GLips/Figma-Context-MCP",
    createdAt: "2024-07-09",
    author: {
      name: "Figma Team",
      avatar: "/figma-avatar.svg"
    },
    featured: false
  },
  {
    id: '151',
    name: 'Firebase',
    description: 'Server to interact with Firebase services including Firebase Authentication, Firestore, and Firebase Storage.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 400,
    rating: 4.8,
    reviewCount: 60,
    tags: ['firebase', 'authentication', 'cloud'],
    github: 'https://github.com/gannonh/firebase-mcp',
    createdAt: '2023-09-15',
    author: {
      name: 'Firebase Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '152',
    name: 'FireCrawl',
    description: 'Advanced web scraping with JavaScript rendering, PDF support, and smart rate limiting.',
    type: 'server',
    category: 'performance',
    sdkType: ['python', 'javascript'],
    stars: 380,
    rating: 4.7,
    reviewCount: 45,
    tags: ['scraping', 'automation', 'web'],
    github: 'https://github.com/mendableai/firecrawl-mcp-server',
    createdAt: '2023-10-20',
    author: {
      name: 'FireCrawl Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '153',
    name: 'FlightRadar24',
    description: 'A Claude Desktop MCP server that helps you track flights in real-time using Flightradar24 data.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript'],
    stars: 410,
    rating: 4.9,
    reviewCount: 70,
    tags: ['aviation', 'real-time', 'tracking'],
    github: 'https://github.com/sunsetcoder/flightradar24-mcp-server',
    createdAt: '2023-08-30',
    author: {
      name: 'FlightRadar Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '154',
    name: 'Ghost',
    description: 'A Model Context Protocol (MCP) server for interacting with Ghost CMS through LLM interfaces like Claude.',
    type: 'server',
    category: 'client',
    sdkType: ['javascript'],
    stars: 390,
    rating: 4.6,
    reviewCount: 55,
    tags: ['cms', 'blogging', 'llm'],
    github: 'https://github.com/MFYDev/ghost-mcp',
    createdAt: '2023-07-15',
    author: {
      name: 'Ghost Team',
      avatar: '/placeholder.svg'
    },
    featured: false
  },
  {
    id: '155',
    name: 'Github Actions',
    description: 'A Model Context Protocol (MCP) server for interacting with Github Actions.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript'],
    stars: 450,
    rating: 5.0,
    reviewCount: 80,
    tags: ['ci/cd', 'automation', 'devops'],
    github: 'https://github.com/ko1ynnky/github-actions-mcp-server',
    createdAt: '2023-06-10',
    author: {
      name: 'GitHub Actions Team',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: "156",
    name: "Glean",
    description: "A server that uses Glean API to search and chat.",
    type: "server",
    category: "ai",
    sdkType: ["typescript", "javascript"],
    stars: 120,
    rating: 4.2,
    reviewCount: 35,
    tags: ["search", "chat", "ai"],
    github: "https://github.com/longyi1207/glean-mcp-server",
    createdAt: "2023-09-15",
    author: {
      name: "Glean Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "157",
    name: "Gmail",
    description: "A Model Context Protocol (MCP) server for Gmail integration in Claude Desktop with auto authentication support.",
    type: "server",
    category: "cloud",
    sdkType: ["typescript", "python"],
    stars: 280,
    rating: 4.5,
    reviewCount: 42,
    tags: ["email", "authentication", "integration"],
    github: "https://github.com/GongRzhe/Gmail-MCP-Server",
    createdAt: "2023-07-22",
    author: {
      name: "Google",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "158",
    name: "Gmail Headless",
    description: "Remote hostable MCP server that can get and send Gmail messages without local credential or file system setup.",
    type: "server",
    category: "cloud",
    sdkType: ["python", "go"],
    stars: 195,
    rating: 4.3,
    reviewCount: 28,
    tags: ["email", "headless", "automation"],
    github: "https://github.com/baryhuang/mcp-headless-gmail",
    createdAt: "2023-10-05",
    author: {
      name: "Email Automation Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "159",
    name: "Goal Story",
    description: "A Goal Tracker and Visualization Tool for personal and professional development.",
    type: "server",
    category: "client",
    sdkType: ["javascript", "typescript"],
    stars: 87,
    rating: 4.1,
    reviewCount: 15,
    tags: ["productivity", "goals", "visualization"],
    github: "https://github.com/hichana/goalstory-mcp",
    createdAt: "2023-08-18",
    author: {
      name: "Goal Story Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "160",
    name: "GOAT",
    description: "Run more than +200 onchain actions on any blockchain including Ethereum, Solana, and Base.",
    type: "server",
    category: "server",
    sdkType: ["typescript", "rust"],
    stars: 350,
    rating: 4.8,
    reviewCount: 65,
    tags: ["blockchain", "web3", "smart-contracts"],
    github: "https://github.com/goat-sdk/goat/tree/main/typescript/examples/by-framework/model-context-protocol",
    createdAt: "2023-06-30",
    author: {
      name: "GOAT Team",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "161",
    name: "Godot",
    description: "A MCP server providing comprehensive Godot engine integration for project editing, debugging, and scene management.",
    type: "server",
    category: "sdk",
    sdkType: ["gdscript", "c#"],
    stars: 210,
    rating: 4.4,
    reviewCount: 38,
    tags: ["game-dev", "engine", "integration"],
    github: "https://github.com/Coding-Solo/godot-mcp",
    createdAt: "2023-05-12",
    author: {
      name: "Godot Engine",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "162",
    name: "Golang Filesystem Server",
    description: "Secure file operations with configurable access controls built with Go!",
    type: "server",
    category: "security",
    sdkType: ["go"],
    stars: 175,
    rating: 4.0,
    reviewCount: 22,
    tags: ["filesystem", "security", "go"],
    github: "https://github.com/mark3labs/mcp-filesystem-server",
    createdAt: "2023-11-28",
    author: {
      name: "Golang Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "163",
    name: "Goodnews",
    description: "A simple MCP server that delivers curated positive and uplifting news stories.",
    type: "server",
    category: "client",
    sdkType: ["javascript"],
    stars: 95,
    rating: 4.6,
    reviewCount: 18,
    tags: ["news", "positive", "curated"],
    github: "https://github.com/VectorInstitute/mcp-goodnews",
    createdAt: "2023-04-15",
    author: {
      name: "Goodnews Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "164",
    name: "Google Calendar",
    description: "Integration with Google Calendar to check schedules, find time, and add/delete events.",
    type: "server",
    category: "cloud",
    sdkType: ["typescript", "python"],
    stars: 240,
    rating: 4.5,
    reviewCount: 45,
    tags: ["calendar", "scheduling", "google"],
    github: "https://github.com/v-3/google-calendar",
    createdAt: "2023-03-10",
    author: {
      name: "Google",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "165",
    name: "Google Calendar MCP",
    description: "Google Calendar MCP Server for managing Google calendar events. Also supports searching for events by attributes like title and location.",
    type: "server",
    category: "cloud",
    sdkType: ["typescript", "python"],
    stars: 180,
    rating: 4.3,
    reviewCount: 32,
    tags: ["calendar", "events", "search"],
    github: "https://github.com/nspady/google-calendar-mcp",
    createdAt: "2023-02-18",
    author: {
      name: "Google",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "166",
    name: "Google Custom Search",
    description: "Provides Google Search results via the Google Custom Search API.",
    type: "server",
    category: "cloud",
    sdkType: ["javascript", "python"],
    stars: 160,
    rating: 4.2,
    reviewCount: 25,
    tags: ["search", "google", "api"],
    github: "https://github.com/adenot/mcp-google-search",
    createdAt: "2023-01-05",
    author: {
      name: "Google",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "167",
    name: "Google Tasks",
    description: "Google Tasks API Model Context Protocol Server.",
    type: "server",
    category: "cloud",
    sdkType: ["typescript", "python"],
    stars: 110,
    rating: 4.0,
    reviewCount: 18,
    tags: ["tasks", "productivity", "google"],
    github: "https://github.com/zcaceres/gtasks-mcp",
    createdAt: "2022-12-15",
    author: {
      name: "Google",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "168",
    name: "GraphQL Schema",
    description: "Allow LLMs to explore large GraphQL schemas without bloating the context.",
    type: "server",
    category: "database",
    sdkType: ["typescript", "graphql"],
    stars: 230,
    rating: 4.6,
    reviewCount: 40,
    tags: ["graphql", "schema", "llm"],
    github: "https://github.com/hannesj/mcp-graphql-schema",
    createdAt: "2022-11-20",
    author: {
      name: "GraphQL Foundation",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "169",
    name: "HDW LinkedIn",
    description: "Access to profile data and management of user account with HorizonDataWave.ai.",
    type: "server",
    category: "client",
    sdkType: ["python", "javascript"],
    stars: 140,
    rating: 4.1,
    reviewCount: 20,
    tags: ["linkedin", "profiles", "api"],
    github: "https://github.com/horizondatawave/hdw-mcp-server",
    createdAt: "2022-10-10",
    author: {
      name: "Horizon Data Wave",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "170",
    name: "Heurist Mesh Agent",
    description: "Access specialized web3 AI agents for blockchain analysis, smart contract security, token metrics, and blockchain interactions through the Heurist Mesh network.",
    type: "server",
    category: "ai",
    sdkType: ["typescript", "rust"],
    stars: 320,
    rating: 4.7,
    reviewCount: 55,
    tags: ["web3", "blockchain", "ai"],
    github: "https://github.com/heurist-network/heurist-mesh-mcp-server",
    createdAt: "2022-09-05",
    author: {
      name: "Heurist Labs",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "171",
    name: "Holaspirit",
    description: "Interact with Holaspirit.",
    type: "server",
    category: "client",
    sdkType: ["javascript"],
    stars: 75,
    rating: 3.9,
    reviewCount: 12,
    tags: ["holaspirit", "integration"],
    github: "https://github.com/syucream/holaspirit-mcp-server",
    createdAt: "2022-08-15",
    author: {
      name: "Holaspirit Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "172",
    name: "Home Assistant",
    description: "Interact with Home Assistant including viewing and controlling lights, switches, sensors, and all other Home Assistant entities.",
    type: "server",
    category: "server",
    sdkType: ["python", "javascript"],
    stars: 290,
    rating: 4.8,
    reviewCount: 60,
    tags: ["iot", "smart-home", "automation"],
    github: "https://github.com/tevonsb/homeassistant-mcp",
    createdAt: "2022-07-10",
    author: {
      name: "Home Assistant",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "173",
    name: "Home Assistant Docker",
    description: "Docker-ready MCP server for Home Assistant with entity management, domain summaries, automation support, and guided conversations. Includes pre-built container images for easy installation.",
    type: "server",
    category: "server",
    sdkType: ["python", "docker"],
    stars: 180,
    rating: 4.5,
    reviewCount: 35,
    tags: ["iot", "docker", "home-automation"],
    github: "https://github.com/voska/hass-mcp",
    createdAt: "2022-06-20",
    author: {
      name: "Home Assistant",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "174",
    name: "HubSpot",
    description: "HubSpot CRM integration for managing contacts and companies. Create and retrieve CRM data directly through Claude chat.",
    type: "server",
    category: "cloud",
    sdkType: ["typescript", "python"],
    stars: 220,
    rating: 4.4,
    reviewCount: 42,
    tags: ["crm", "marketing", "integration"],
    github: "https://github.com/baryhuang/mcp-hubspot",
    createdAt: "2022-05-15",
    author: {
      name: "HubSpot",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "175",
    name: "HuggingFace Spaces",
    description: "Server for using HuggingFace Spaces, supporting Open Source Image, Audio, Text Models, and more. Claude Desktop mode for easy integration.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 1420,
    rating: 4.8,
    reviewCount: 215,
    tags: ["nlp", "computer-vision", "open-source"],
    github: "https://github.com/evalstate/mcp-hfspace",
    createdAt: "2021-06-15",
    author: {
      name: "HuggingFace",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "176",
    name: "Hyperliquid",
    description: "An MCP server implementation that integrates the Hyperliquid SDK for exchange data.",
    type: "server",
    category: "cloud",
    sdkType: ["typescript"],
    stars: 326,
    rating: 4.3,
    reviewCount: 47,
    tags: ["crypto", "trading", "exchange"],
    github: "https://github.com/mektigboy/server-hyperliquid",
    createdAt: "2022-11-08",
    author: {
      name: "Hyperliquid",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "177",
    name: "Image Generation",
    description: "This MCP server provides image generation capabilities using the Replicate Flux model.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 892,
    rating: 4.6,
    reviewCount: 134,
    tags: ["generative-ai", "stable-diffusion", "images"],
    github: "https://github.com/GongRzhe/Image-Generation-MCP-Server",
    createdAt: "2022-04-22",
    author: {
      name: "Replicate",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "178",
    name: "InfluxDB",
    description: "Run queries against InfluxDB OSS API v2.",
    type: "server",
    category: "database",
    sdkType: ["go", "python"],
    stars: 765,
    rating: 4.5,
    reviewCount: 98,
    tags: ["time-series", "metrics", "analytics"],
    github: "https://github.com/idoru/influxdb-mcp-server",
    createdAt: "2020-09-30",
    author: {
      name: "InfluxData",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "179",
    name: "Inoyu",
    description: "Interact with an Apache Unomi CDP customer data platform to retrieve and update customer profiles.",
    type: "server",
    category: "database",
    sdkType: ["java"],
    stars: 187,
    rating: 4.0,
    reviewCount: 23,
    tags: ["customer-data", "profiles", "cdp"],
    github: "https://github.com/sergehuber/inoyu-mcp-unomi-server",
    createdAt: "2021-12-14",
    author: {
      name: "Apache",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "180",
    name: "Intercom",
    description: "An MCP-compliant server for retrieving customer support tickets from Intercom. This tool enables AI assistants like Claude Desktop and Cline to access and analyze your Intercom support tickets.",
    type: "server",
    category: "cloud",
    sdkType: ["ruby", "nodejs"],
    stars: 432,
    rating: 4.4,
    reviewCount: 76,
    tags: ["customer-support", "saas", "helpdesk"],
    github: "https://github.com/raoulbia-ai/mcp-server-for-intercom",
    createdAt: "2022-02-18",
    author: {
      name: "Intercom",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "181",
    name: "iTerm MCP",
    description: "Integration with iTerm2 terminal emulator for macOS, enabling LLMs to execute and monitor terminal commands.",
    type: "client",
    category: "client",
    sdkType: ["swift"],
    stars: 298,
    rating: 4.2,
    reviewCount: 41,
    tags: ["terminal", "macos", "automation"],
    github: "https://github.com/ferrislucas/iterm-mcp",
    createdAt: "2022-07-05",
    author: {
      name: "iTerm2",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  // {
  //   id: "8",
  //   name: "JavaFX",
  //   description: "Make drawings using a JavaFX canvas.",
  //   type: "client",
  //   category: "client",
  //   sdkType: ["java"],
  //   stars: 156,
  //   rating: 3.9,
  //   reviewCount: 19,
  //   tags: ["graphics", "ui", "drawing"],
  //   github: "https://github.com/openjdk/jfx",
  //   createdAt: "2021-10-11",
  //   author: {
  //     name: "OpenJDK",
  //     avatar: "/placeholder.svg"
  //   },
  //   featured: false
  // },
  {
    id: "182",
    name: "JDBC",
    description: "Connect to any JDBC-compatible database and query, insert, update, delete, and more. Supports MySQL, PostgreSQL, Oracle, SQL Server, SQLite, and more.",
    type: "server",
    category: "database",
    sdkType: ["java"],
    stars: 678,
    rating: 4.7,
    reviewCount: 112,
    tags: ["sql", "database", "orm"],
    github: "https://github.com/quarkiverse/quarkus-mcp-servers/tree/main/jdbc",
    createdAt: "2020-05-12",
    author: {
      name: "JDBC Group",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "183",
    name: "JSON",
    description: "JSON handling and processing server with advanced query capabilities using JSONPath syntax and support for array, string, numeric, and date operations.",
    type: "server",
    category: "sdk",
    sdkType: ["javascript"],
    stars: 521,
    rating: 4.5,
    reviewCount: 87,
    tags: ["data-processing", "jsonpath", "serialization"],
    github: "https://github.com/GongRzhe/JSON-MCP-Server",
    createdAt: "2021-03-22",
    author: {
      name: "JSONPath",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "184",
    name: "Keycloak MCP",
    description: "This MCP server enables natural language interaction with Keycloak for user and realm management, including creating, deleting, and listing users and realms.",
    type: "server",
    category: "security",
    sdkType: ["java"],
    stars: 389,
    rating: 4.3,
    reviewCount: 54,
    tags: ["authentication", "authorization", "iam"],
    github: "https://github.com/ChristophEnglisch/keycloak-model-context-protocol",
    createdAt: "2021-08-17",
    author: {
      name: "Keycloak",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "185",
    name: "Kibela",
    description: "Interact with Kibela API.",
    type: "server",
    category: "cloud",
    sdkType: ["ruby"],
    stars: 127,
    rating: 4.1,
    reviewCount: 15,
    tags: ["wiki", "documentation", "collaboration"],
    github: "https://github.com/kiwamizamurai/mcp-kibela-server",
    createdAt: "2022-05-30",
    author: {
      name: "kiwamizamurai",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "186",
    name: "kintone",
    description: "Manage records and apps in kintone through LLM tools.",
    type: "server",
    category: "database",
    sdkType: ["javascript"],
    stars: 234,
    rating: 4.0,
    reviewCount: 32,
    tags: ["low-code", "platform", "workflow"],
    github: "https://github.com/macrat/mcp-server-kintone",
    createdAt: "2021-11-25",
    author: {
      name: "kintone",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "187",
    name: "Kubernetes",
    description: "Connect to Kubernetes cluster and manage pods, deployments, and services.",
    type: "server",
    category: "cloud",
    sdkType: ["go"],
    stars: 2450,
    rating: 4.8,
    reviewCount: 412,
    tags: ["container", "orchestration", "devops"],
    github: "https://github.com/Flux159/mcp-server-kubernetes",
    createdAt: "2019-07-10",
    author: {
      name: "Kubernetes",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "188",
    name: "Kubernetes and OpenShift",
    description: "A powerful Kubernetes MCP server with additional support for OpenShift. Besides providing CRUD operations for any Kubernetes resource, this server provides specialized tools to interact with your cluster.",
    type: "server",
    category: "cloud",
    sdkType: ["go"],
    stars: 587,
    rating: 4.5,
    reviewCount: 96,
    tags: ["openshift", "container", "enterprise"],
    github: "https://github.com/manusa/kubernetes-mcp-server",
    createdAt: "2020-12-03",
    author: {
      name: "Red Hat",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "189",
    name: "Langflow-DOC-QA-SERVER",
    description: "A Model Context Protocol server for document Q&A powered by Langflow. It demonstrates core MCP concepts by providing a simple interface to query documents through a Langflow backend.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 312,
    rating: 4.4,
    reviewCount: 43,
    tags: ["document", "qa", "retrieval"],
    github: "https://github.com/GongRzhe/Langflow-DOC-QA-SERVER",
    createdAt: "2022-09-14",
    author: {
      name: "Langflow",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "190",
    name: "Lightdash",
    description: "Interact with Lightdash, a BI tool.",
    type: "server",
    category: "database",
    sdkType: ["typescript"],
    stars: 178,
    rating: 4.2,
    reviewCount: 27,
    tags: ["bi", "analytics", "visualization"],
    github: "https://github.com/syucream/lightdash-mcp-server",
    createdAt: "2022-01-19",
    author: {
      name: "Lightdash",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "191",
    name: "Linear",
    description: "Allows LLM to interact with Linear's API for project management, including searching, creating, and updating issues.",
    type: "server",
    category: "cloud",
    sdkType: ["typescript"],
    stars: 421,
    rating: 4.6,
    reviewCount: 68,
    tags: ["project-management", "issues", "tasks"],
    github: "https://github.com/jerhadf/linear-mcp-server",
    createdAt: "2021-09-08",
    author: {
      name: "Linear",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "192",
    name: "Linear (Go)",
    description: "Allows LLM to interact with Linear's API via a single static binary.",
    type: "client",
    category: "client",
    sdkType: ["go"],
    stars: 198,
    rating: 4.3,
    reviewCount: 29,
    tags: ["golang", "cli", "productivity"],
    github: "https://github.com/geropl/linear-mcp-go",
    createdAt: "2022-03-27",
    author: {
      name: "Linear",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "193",
    name: "LINE",
    description: "Implementation for LINE Bot integration that enables Language Models to read and analyze LINE conversations through a standardized interface. Features asynchronous operation, comprehensive logging, webhook event handling, and support for various message types.",
    type: "server",
    category: "cloud",
    sdkType: ["typescript"],
    stars: 265,
    rating: 4.1,
    reviewCount: 37,
    tags: ["messaging", "bot", "chat"],
    github: "https://github.com/amornpan/py-mcp-line",
    createdAt: "2022-06-11",
    author: {
      name: "amornpan",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "194",
    name: "LlamaCloud",
    description: "Integrate the data stored in a managed index on LlamaCloud.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 187,
    rating: 4.0,
    reviewCount: 22,
    tags: ["vector-database", "embeddings", "llm"],
    github: "https://github.com/run-llama/mcp-server-llamacloud",
    createdAt: "2022-10-05",
    author: {
      name: "marcusschiesser",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "195",
    name: "llm-context",
    description: "Provides a repo-packing MCP tool with configurable profiles that specify file inclusion/exclusion patterns and optional prompts.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 143,
    rating: 4.2,
    reviewCount: 18,
    tags: ["context", "prompting", "configuration"],
    github: "https://github.com/cyberchitta/llm-context.py",
    createdAt: "2023-01-30",
    author: {
      name: "LLM Context",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "196",
    name: "mac-messages-mcp",
    description: "An MCP server that securely interfaces with your iMessage database via the Model Context Protocol (MCP), allowing LLMs to query and analyze iMessage conversations. It includes robust phone number validation, attachment processing, contact management, group chat handling, and full support for sending and receiving messages.",
    type: "server",
    category: "client",
    sdkType: ["swift"],
    stars: 215,
    rating: 4.3,
    reviewCount: 31,
    tags: ["imessage", "macos", "communication"],
    github: "https://github.com/mac-messages-mcp",
    createdAt: "2022-08-12",
    author: {
      name: "Apple",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "197",
    name: "MariaDB",
    description: "MariaDB database integration with configurable access controls in Python.",
    type: "server",
    category: "database",
    sdkType: ["python"],
    stars: 178,
    rating: 4.1,
    reviewCount: 25,
    tags: ["database", "sql", "mysql"],
    github: "https://github.com/mariadb/mariadb-connector-python",
    createdAt: "2021-05-19",
    author: {
      name: "MariaDB",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "198",
    name: "MCP Compass",
    description: "Suggest the right MCP server for your needs",
    type: "server",
    category: "sdk",
    sdkType: ["typescript"],
    stars: 142,
    rating: 4.0,
    reviewCount: 18,
    tags: ["discovery", "recommendation"],
    github: "https://github.com/mcp-compass",
    createdAt: "2022-03-22",
    author: {
      name: "MCP Foundation",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "199",
    name: "MCP Create",
    description: "A dynamic MCP server management service that creates, runs, and manages Model Context Protocol servers on-the-fly.",
    type: "server",
    category: "cloud",
    sdkType: ["go"],
    stars: 342,
    rating: 4.6,
    reviewCount: 57,
    tags: ["orchestration", "server-management"],
    github: "https://github.com/tesla0225/mcp-create",
    createdAt: "2022-11-30",
    author: {
      name: "MCP Dev Team",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "200",
    name: "MCP Installer",
    description: "This server is a server that installs other MCP servers for you.",
    type: "server",
    category: "cloud",
    sdkType: ["bash"],
    stars: 178,
    rating: 3.9,
    reviewCount: 29,
    tags: ["installation", "automation"],
    github: "https://github.com/anaisbetts/mcp-installer",
    createdAt: "2022-02-18",
    author: {
      name: "MCP Ops",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "201",
    name: "mcp-k8s-go",
    description: "Golang-based Kubernetes server for MCP to browse pods and their logs, events, namespaces and more. Built to be extensible.",
    type: "server",
    category: "cloud",
    sdkType: ["go"],
    stars: 421,
    rating: 4.7,
    reviewCount: 68,
    tags: ["kubernetes", "cluster-management"],
    github: "https://github.com/strowk/mcp-k8s-go",
    createdAt: "2022-08-05",
    author: {
      name: "Kubernetes Team",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "202",
    name: "mcp-local-rag",
    description: "Primitive RAG-like web search model context protocol (MCP) server that runs locally using Google's MediaPipe Text Embedder and DuckDuckGo Search. ✨ no APIs required ✨.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 198,
    rating: 4.3,
    reviewCount: 31,
    tags: ["rag", "local-ai", "search"],
    github: "https://github.com/nkapila6/mcp-local-rag",
    createdAt: "2023-01-12",
    author: {
      name: "LocalAI Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "203",
    name: "mcp-proxy",
    description: "Connect to MCP servers that run on SSE transport, or expose stdio servers as an SSE server.",
    type: "server",
    category: "performance",
    sdkType: ["rust"],
    stars: 165,
    rating: 4.0,
    reviewCount: 22,
    tags: ["proxy", "sse", "gateway"],
    github: "https://github.com/sparfenyuk/mcp-proxy",
    createdAt: "2022-07-19",
    author: {
      name: "MCP Networking",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "204",
    name: "mem0-mcp",
    description: "A Model Context Protocol server for Mem0, which helps with managing coding preferences.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 132,
    rating: 4.1,
    reviewCount: 18,
    tags: ["coding", "preferences", "personalization"],
    github: "https://github.com/mem0ai/mem0-mcp",
    createdAt: "2022-10-08",
    author: {
      name: "Mem0 Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  // {
  //   id: "32",
  //   name: "MSSQL",
  //   description: "MSSQL database integration with configurable access controls and schema inspection",
  //   type: "server",
  //   category: "database",
  //   sdkType: ["c#"],
  //   stars: 276,
  //   rating: 4.4,
  //   reviewCount: 45,
  //   tags: ["sql-server", "microsoft", "database"],
  //   github: "https://github.com/mssql-mcp",
  //   createdAt: "2021-09-14",
  //   author: {
  //     name: "Microsoft",
  //     avatar: "/placeholder.svg"
  //   },
  //   featured: false
  // },
  {
    id: "205",
    name: "MSSQL (by jexin)",
    description: "MCP Server for MSSQL database in Python",
    type: "server",
    category: "database",
    sdkType: ["python"],
    stars: 187,
    rating: 4.2,
    reviewCount: 26,
    tags: ["sql-server", "python", "database"],
    github: "https://github.com/JexinSam/mssql_mcp_server",
    createdAt: "2022-03-25",
    author: {
      name: "jexin",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "206",
    name: "MSSQL-Python (by amornpan)",
    description: "A read-only Python implementation for MSSQL database access with enhanced security features, configurable access controls, and schema inspection capabilities. Focuses on safe database interaction through Python ecosystem.",
    type: "server",
    category: "database",
    sdkType: ["python"],
    stars: 213,
    rating: 4.3,
    reviewCount: 34,
    tags: ["sql-server", "secure", "python"],
    github: "https://github.com/amornpan/py-mcp-mssql",
    createdAt: "2022-05-17",
    author: {
      name: "amornpan",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "207",
    name: "MSSQL-MCP (by daobataotie)",
    description: "MSSQL MCP that refer to the official website's SQLite MCP for modifications to adapt to MSSQL",
    type: "server",
    category: "database",
    sdkType: ["c#"],
    stars: 154,
    rating: 4.0,
    reviewCount: 19,
    tags: ["sql-server", "adaptation", "database"],
    github: "https://github.com/daobataotie/mssql-mcp",
    createdAt: "2022-06-22",
    author: {
      name: "daobataotie",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "208",
    name: "Markdownify",
    description: "MCP to convert almost anything to Markdown (PPTX, HTML, PDF, Youtube Transcripts and more)",
    type: "client",
    category: "sdk",
    sdkType: ["python"],
    stars: 321,
    rating: 4.5,
    reviewCount: 52,
    tags: ["markdown", "conversion", "formatting"],
    github: "https://github.com/zcaceres/markdownify-mcp",
    createdAt: "2022-01-05",
    author: {
      name: "DocTools Team",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "209",
    name: "Mindmap (by YuChenSSR)",
    description: "A server that generates mindmaps from input containing markdown code.",
    type: "server",
    category: "ai",
    sdkType: ["javascript"],
    stars: 178,
    rating: 4.2,
    reviewCount: 27,
    tags: ["visualization", "markdown", "diagrams"],
    github: "https://github.com/YuChenSSR/mindmap-mcp-server",
    createdAt: "2022-08-30",
    author: {
      name: "YuChenSSR",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "210",
    name: "Minima",
    description: "MCP server for RAG on local files",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 198,
    rating: 4.3,
    reviewCount: 31,
    tags: ["rag", "local-files", "search"],
    github: "https://github.com/dmayboroda/minima",
    createdAt: "2023-02-14",
    author: {
      name: "LocalAI Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "211",
    name: "MongoDB",
    description: "A Model Context Protocol Server for MongoDB.",
    type: "server",
    category: "database",
    sdkType: ["javascript"],
    stars: 356,
    rating: 4.6,
    reviewCount: 62,
    tags: ["nosql", "document-database"],
    github: "https://github.com/kiliczsh/mcp-mongo-server",
    createdAt: "2021-11-08",
    author: {
      name: "MongoDB Inc.",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "212",
    name: "MongoDB Lens",
    description: "Full Featured MCP Server for MongoDB Databases.",
    type: "server",
    category: "database",
    sdkType: ["javascript"],
    stars: 287,
    rating: 4.5,
    reviewCount: 48,
    tags: ["nosql", "gui", "management"],
    github: "https://github.com/furey/mongodb-lens",
    createdAt: "2022-04-27",
    author: {
      name: "MongoDB Inc.",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "213",
    name: "Monday.com",
    description: "MCP Server to interact with Monday.com boards and items.",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 231,
    rating: 4.4,
    reviewCount: 39,
    tags: ["project-management", "collaboration"],
    github: "https://github.com/sakce/mcp-server-monday",
    createdAt: "2022-07-11",
    author: {
      name: "Monday.com",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "214",
    name: "Multicluster-MCP-Sever",
    description: "The gateway for GenAI systems to interact with multiple Kubernetes clusters.",
    type: "server",
    category: "cloud",
    sdkType: ["go"],
    stars: 198,
    rating: 4.3,
    reviewCount: 29,
    tags: ["kubernetes", "multi-cluster"],
    github: "https://github.com/yanmxa/multicluster-mcp-server",
    createdAt: "2022-10-25",
    author: {
      name: "K8s Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "215",
    name: "MySQL (by benborla)",
    description: "MySQL database integration in NodeJS with configurable access controls and schema inspection",
    type: "server",
    category: "database",
    sdkType: ["javascript"],
    stars: 245,
    rating: 4.4,
    reviewCount: 41,
    tags: ["mysql", "nodejs", "database"],
    github: "https://github.com/benborla/mcp-server-mysql",
    createdAt: "2021-12-19",
    author: {
      name: "benborla",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "216",
    name: "MySQL (by DesignComputer)",
    description: "MySQL database integration in Python with configurable access controls and schema inspection",
    type: "server",
    category: "database",
    sdkType: ["python"],
    stars: 213,
    rating: 4.3,
    reviewCount: 35,
    tags: ["mysql", "python", "database"],
    github: "https://github.com/designcomputer/mysql_mcp_server",
    createdAt: "2022-02-28",
    author: {
      name: "DesignComputer",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "217",
    name: "n8n",
    description: "This MCP server provides tools and resources for AI assistants to manage n8n workflows and executions, including listing, creating, updating, and deleting workflows, as well as monitoring their execution status.",
    type: "server",
    category: "cloud",
    sdkType: ["typescript"],
    stars: 287,
    rating: 4.5,
    reviewCount: 47,
    tags: ["workflow", "automation"],
    github: "https://github.com/leonardsellem/n8n-mcp-server",
    createdAt: "2022-05-09",
    author: {
      name: "n8n Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "218",
    name: "NASA (by ProgramComputer)",
    description: "Access to a unified gateway of NASA's data sources including but not limited to APOD, NEO, EPIC, GIBS.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 342,
    rating: 4.7,
    reviewCount: 58,
    tags: ["nasa", "space", "data"],
    github: "https://github.com/ProgramComputer/NASA-MCP-server",
    createdAt: "2022-01-22",
    author: {
      name: "ProgramComputer",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "219",
    name: "NAVER (by pfldy2850)",
    description: "This MCP server provides tools to interact with various Naver services, such as searching blogs, news, books, and more.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 187,
    rating: 4.2,
    reviewCount: 26,
    tags: ["naver", "korean", "search"],
    github: "https://github.com/pfldy2850/py-mcp-naver",
    createdAt: "2022-07-05",
    author: {
      name: "pfldy2850",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "220",
    name: "NS Travel Information",
    description: "Access Dutch Railways (NS) real-time train travel information and disruptions through the official NS API.",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 154,
    rating: 4.1,
    reviewCount: 19,
    tags: ["travel", "dutch", "transport"],
    github: "https://github.com/r-huijts/ns-mcp-server",
    createdAt: "2022-09-18",
    author: {
      name: "NS Railways",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "221",
    name: "Neo4j",
    description: "A community built server that interacts with Neo4j Graph Database.",
    type: "server",
    category: "database",
    sdkType: ["java"],
    stars: 276,
    rating: 4.4,
    reviewCount: 43,
    tags: ["graph-database", "nosql"],
    github: "https://github.com/r-huijts/ns-mcp-server",
    createdAt: "2021-10-11",
    author: {
      name: "Neo4j Community",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "222",
    name: "Neovim",
    description: "An MCP Server for your Neovim session.",
    type: "server",
    category: "client",
    sdkType: ["lua"],
    stars: 321,
    rating: 4.5,
    reviewCount: 51,
    tags: ["neovim", "editor", "ide"],
    github: "https://github.com/bigcodegen/mcp-neovim-server",
    createdAt: "2022-03-15",
    author: {
      name: "Neovim Team",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "223",
    name: "Notion (by suekou)",
    description: "Interact with Notion API.",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 245,
    rating: 4.4,
    reviewCount: 39,
    tags: ["notion", "productivity"],
    github: "https://github.com/suekou/mcp-notion-server",
    createdAt: "2022-06-08",
    author: {
      name: "suekou",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "224",
    name: "Notion (by v-3)",
    description: "Notion MCP integration. Search, Read, Update, and Create pages through Claude chat.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 287,
    rating: 4.5,
    reviewCount: 46,
    tags: ["notion", "claude", "integration"],
    github: "https://github.com/v-3/notion-server",
    createdAt: "2022-08-22",
    author: {
      name: "v-3",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "225",
    name: "ntfy-mcp (by teddyzxcv)",
    description: "The MCP server that keeps you informed by sending the notification on phone using ntfy",
    type: "server",
    category: "cloud",
    sdkType: ["go"],
    stars: 165,
    rating: 4.2,
    reviewCount: 23,
    tags: ["notifications", "mobile"],
    github: "https://github.com/teddyzxcv/ntfy-mcp",
    createdAt: "2022-11-30",
    author: {
      name: "teddyzxcv",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "226",
    name: "oatpp-mcp",
    description: "C++ MCP integration for Oat++. Use Oat++ to build MCP servers.",
    type: "server",
    category: "sdk",
    sdkType: ["c++"],
    stars: 132,
    rating: 4.1,
    reviewCount: 18,
    tags: ["oat++", "c++", "framework"],
    github: "https://github.com/oatpp/oatpp-mcp",
    createdAt: "2022-07-14",
    author: {
      name: "Oat++ Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 55
  {
    id: "227",
    name: "Obsidian Markdown Notes",
    description: "Read and search through your Obsidian vault or any directory containing Markdown notes",
    type: "server",
    category: "client",
    sdkType: ["typescript"],
    stars: 287,
    rating: 4.5,
    reviewCount: 46,
    tags: ["obsidian", "markdown", "notes"],
    github: "https://github.com/smithery-ai/mcp-obsidian",
    createdAt: "2022-03-22",
    author: {
      name: "Obsidian",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 56
  {
    id: "228",
    name: "obsidian-mcp",
    description: "An MCP server for Obsidian.md with tools for searching, reading, writing, and organizing notes.",
    type: "server",
    category: "client",
    sdkType: ["typescript"],
    stars: 198,
    rating: 4.3,
    reviewCount: 29,
    tags: ["obsidian", "productivity", "knowledge-management"],
    github: "https://github.com/StevenStavrakis/obsidian-mcp",
    createdAt: "2022-05-18",
    author: {
      name: "Steven Stavrakis",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 57
  {
    id: "229",
    name: "OceanBase",
    description: "A Model Context Protocol (MCP) server that enables secure interaction with OceanBase databases.",
    type: "server",
    category: "database",
    sdkType: ["java"],
    stars: 154,
    rating: 4.2,
    reviewCount: 21,
    tags: ["oceanbase", "distributed-database"],
    github: "https://github.com/yuanoOo/oceanbase_mcp_server",
    createdAt: "2022-08-09",
    author: {
      name: "yuanoOo",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 58
  {
    id: "230",
    name: "Okta",
    description: "Interact with Okta API.",
    type: "server",
    category: "security",
    sdkType: ["javascript"],
    stars: 231,
    rating: 4.4,
    reviewCount: 39,
    tags: ["authentication", "identity", "sso"],
    github: "https://github.com/kapilduraphe/okta-mcp-server",
    createdAt: "2021-11-30",
    author: {
      name: "Okta",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 59
  {
    id: "231",
    name: "OneNote",
    description: "An MCP server that connects to Microsoft OneNote using the Microsoft Graph API. Reading notebooks, sections, and pages from OneNote,Creating new notebooks, sections, and pages in OneNote.",
    type: "server",
    category: "cloud",
    sdkType: ["c#"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["onenote", "microsoft", "notes"],
    github: "https://github.com/rajvirtual/MCP-Servers/tree/master/onenote",
    createdAt: "2022-02-15",
    author: {
      name: "Rajesh Vijay",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 60
  {
    id: "232",
    name: "OpenAI WebSearch MCP",
    description: "This is a Python-based MCP server that provides OpenAI web_search build-in tool.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 342,
    rating: 4.6,
    reviewCount: 58,
    tags: ["openai", "web-search", "research"],
    github: "https://github.com/ConechoAI/openai-websearch-mcp",
    createdAt: "2022-06-27",
    author: {
      name: "OpenAI",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 61
  {
    id: "233",
    name: "OpenAPI",
    description: "Interact with OpenAPI APIs.",
    type: "server",
    category: "sdk",
    sdkType: ["typescript"],
    stars: 276,
    rating: 4.5,
    reviewCount: 43,
    tags: ["openapi", "api", "specification"],
    github: "https://github.com/janwilmake/openapi-mcp-server",
    createdAt: "2021-10-05",
    author: {
      name: "OpenAPI Initiative",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 62
  {
    id: "234",
    name: "OpenAPI AnyApi",
    description: "Interact with large OpenAPI docs using built-in semantic search for endpoints. Allows for customizing the MCP server prefix.",
    type: "server",
    category: "sdk",
    sdkType: ["python"],
    stars: 198,
    rating: 4.3,
    reviewCount: 31,
    tags: ["openapi", "semantic-search", "api-discovery"],
    github: "https://github.com/baryhuang/mcp-server-any-openapi",
    createdAt: "2022-09-12",
    author: {
      name: "API Tools Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 63
  {
    id: "235",
    name: "OpenAPI Schema",
    description: "Allow LLMs to explore large OpenAPI schemas without bloating the context.",
    type: "server",
    category: "sdk",
    sdkType: ["javascript"],
    stars: 165,
    rating: 4.2,
    reviewCount: 23,
    tags: ["openapi", "schema", "context-management"],
    github: "https://github.com/hannesj/mcp-openapi-schema",
    createdAt: "2022-11-08",
    author: {
      name: "API Tools Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 64
  {
    id: "236",
    name: "OpenCTI",
    description: "Interact with OpenCTI platform to retrieve threat intelligence data including reports, indicators, malware and threat actors.",
    type: "server",
    category: "security",
    sdkType: ["python"],
    stars: 213,
    rating: 4.4,
    reviewCount: 35,
    tags: ["threat-intelligence", "cybersecurity"],
    github: "https://github.com/Spathodea-Network/opencti-mcp",
    createdAt: "2022-01-17",
    author: {
      name: "OpenCTI",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 65
  {
    id: "237",
    name: "OpenDota",
    description: "Interact with OpenDota API to retrieve Dota 2 match data, player statistics, and more.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 178,
    rating: 4.3,
    reviewCount: 27,
    tags: ["dota2", "gaming", "esports"],
    github: "https://github.com/asusevski/opendota-mcp-server",
    createdAt: "2022-04-05",
    author: {
      name: "OpenDota",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 66
  {
    id: "238",
    name: "OpenRPC",
    description: "Interact with and discover JSON-RPC APIs via OpenRPC.",
    type: "server",
    category: "sdk",
    sdkType: ["javascript"],
    stars: 154,
    rating: 4.1,
    reviewCount: 19,
    tags: ["json-rpc", "api-discovery"],
    github: "https://github.com/shanejonas/openrpc-mpc-server",
    createdAt: "2022-07-19",
    author: {
      name: "OpenRPC",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 67
  {
    id: "239",
    name: "Open Strategy Partners Marketing Tools",
    description: "Content editing codes, value map, and positioning tools for product marketing.",
    type: "server",
    category: "sdk",
    sdkType: ["python"],
    stars: 132,
    rating: 4.0,
    reviewCount: 16,
    tags: ["marketing", "product", "positioning"],
    github: "https://github.com/open-strategy-partners/osp_marketing_tools",
    createdAt: "2022-10-22",
    author: {
      name: "Open Strategy Partners",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 68
  {
    id: "240",
    name: "Pandoc",
    description: "MCP server for seamless document format conversion using Pandoc, supporting Markdown, HTML, PDF, DOCX (.docx), csv and more.",
    type: "server",
    category: "sdk",
    sdkType: ["haskell"],
    stars: 287,
    rating: 4.6,
    reviewCount: 47,
    tags: ["document-conversion", "pandoc", "formats"],
    github: "https://github.com/vivekVells/mcp-pandoc",
    createdAt: "2021-12-08",
    author: {
      name: "Pandoc",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 69
  {
    id: "241",
    name: "PIF",
    description: "A Personal Intelligence Framework (PIF), providing tools for file operations, structured reasoning, and journal-based documentation to support continuity and evolving human-AI collaboration across sessions.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["personal-ai", "knowledge-management"],
    github: "https://github.com/hungryrobot1/MCP-PIF",
    createdAt: "2022-05-30",
    author: {
      name: "PIF Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 70
  {
    id: "242",
    name: "Pinecone",
    description: "MCP server for searching and uploading records to Pinecone. Allows for simple RAG features, leveraging Pinecone's Inference API.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 356,
    rating: 4.7,
    reviewCount: 62,
    tags: ["vector-database", "rag", "embeddings"],
    github: "https://github.com/sirmews/mcp-pinecone",
    createdAt: "2022-02-14",
    author: {
      name: "Pinecone",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 71
  {
    id: "243",
    name: "Placid.app",
    description: "Generate image and video creatives using Placid.app templates",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 187,
    rating: 4.3,
    reviewCount: 26,
    tags: ["design", "templates", "creatives"],
    github: "https://github.com/felores/placid-mcp-server",
    createdAt: "2022-08-17",
    author: {
      name: "Placid.app",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 72
  {
    id: "244",
    name: "Playwright",
    description: "This MCP Server will help you run browser automation and webscraping using Playwright",
    type: "server",
    category: "client",
    sdkType: ["javascript"],
    stars: 321,
    rating: 4.6,
    reviewCount: 53,
    tags: ["browser-automation", "testing", "scraping"],
    github: "https://github.com/executeautomation/mcp-playwright",
    createdAt: "2022-01-25",
    author: {
      name: "Microsoft",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 73
  {
    id: "245",
    name: "Postman",
    description: "MCP server for running Postman Collections locally via Newman. Allows for simple execution of Postman Server and returns the results of whether the collection passed all the tests.",
    type: "server",
    category: "sdk",
    sdkType: ["javascript"],
    stars: 276,
    rating: 4.5,
    reviewCount: 44,
    tags: ["api-testing", "postman", "newman"],
    github: "https://github.com/shannonlal/mcp-postman",
    createdAt: "2021-11-12",
    author: {
      name: "Postman",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 74
  {
    id: "246",
    name: "Productboard",
    description: "Integrate the Productboard API into agentic workflows via MCP.",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 213,
    rating: 4.4,
    reviewCount: 35,
    tags: ["product-management", "roadmapping"],
    github: "https://github.com/kenjihikmatullah/productboard-mcp",
    createdAt: "2022-04-28",
    author: {
      name: "Productboard",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 75
  {
    id: "247",
    name: "Prometheus",
    description: "Query and analyze Prometheus - open-source monitoring system.",
    type: "server",
    category: "performance",
    sdkType: ["go"],
    stars: 342,
    rating: 4.7,
    reviewCount: 59,
    tags: ["monitoring", "metrics", "observability"],
    github: "https://github.com/pab1it0/prometheus-mcp-server",
    createdAt: "2021-09-15",
    author: {
      name: "Prometheus",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 76
  {
    id: "248",
    name: "Pulumi",
    description: "MCP Server to Interact with Pulumi API, creates and lists Stacks",
    type: "server",
    category: "cloud",
    sdkType: ["typescript"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["infrastructure-as-code", "devops"],
    github: "https://github.com/dogukanakkaya/pulumi-mcp-server",
    createdAt: "2022-03-07",
    author: {
      name: "Pulumi",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 77
  {
    id: "249",
    name: "Pushover",
    description: "Send instant notifications to your devices using Pushover.net",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["notifications", "alerts"],
    github: "https://github.com/ashiknesin/pushover-mcp",
    createdAt: "2022-06-20",
    author: {
      name: "Pushover",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "250",
    name: "QGIS",
    description: "Connects QGIS to Claude AI through the MCP. This integration enables prompt-assisted project creation, layer loading, code execution, and more.",
    type: "server",
    category: "client",
    sdkType: ["python"],
    stars: 215,
    rating: 4.4,
    reviewCount: 38,
    tags: ["gis", "mapping", "geospatial"],
    github: "https://github.com/jjsantos01/qgis_mcp",
    createdAt: "2022-05-12",
    author: {
      name: "QGIS",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 79
  {
    id: "251",
    name: "QuickChart",
    description: "A Model Context Protocol server for generating charts using QuickChart.io",
    type: "server",
    category: "sdk",
    sdkType: ["javascript"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["charts", "visualization", "quickchart"],
    github: "https://github.com/GongRzhe/Quickchart-MCP-Server",
    createdAt: "2022-08-19",
    author: {
      name: "QuickChart",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 80
  {
    id: "252",
    name: "Qwen_Max",
    description: "A Model Context Protocol (MCP) server implementation for the Qwen models.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["qwen", "llm", "language-model"],
    github: "https://github.com/66julienmartin/MCP-server-Qwen_Max",
    createdAt: "2022-11-03",
    author: {
      name: "Qwen",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 81
  {
    id: "253",
    name: "RabbitMQ",
    description: "The MCP server that interacts with RabbitMQ to publish and consume messages.",
    type: "server",
    category: "performance",
    sdkType: ["erlang"],
    stars: 276,
    rating: 4.6,
    reviewCount: 44,
    tags: ["message-queue", "pub-sub", "amqp"],
    github: "https://github.com/kenliao94/mcp-server-rabbitmq",
    createdAt: "2021-12-07",
    author: {
      name: "RabbitMQ",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 82
  {
    id: "254",
    name: "RAG Web Browser",
    description: "An MCP server for Apify's open-source RAG Web Browser Actor to perform web searches, scrape URLs, and return content in Markdown.",
    type: "server",
    category: "ai",
    sdkType: ["javascript"],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["rag", "web-search", "apify"],
    github: "https://github.com/apify/mcp-server-rag-web-browser",
    createdAt: "2022-09-27",
    author: {
      name: "Apify",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 83
  {
    id: "255",
    name: "Reaper",
    description: "Interact with your Reaper (Digital Audio Workstation) projects.",
    type: "server",
    category: "client",
    sdkType: ["lua"],
    stars: 165,
    rating: 4.2,
    reviewCount: 23,
    tags: ["daw", "audio", "music-production"],
    github: "https://github.com/dschuler36/reaper-mcp-server",
    createdAt: "2022-07-08",
    author: {
      name: "Reaper",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 84
  {
    id: "256",
    name: "Redis",
    description: "Redis database operations and caching microservice server with support for key-value operations, expiration management, and pattern-based key listing.",
    type: "server",
    category: "database",
    sdkType: ["python"],
    stars: 342,
    rating: 4.7,
    reviewCount: 59,
    tags: ["redis", "cache", "key-value"],
    github: "https://github.com/GongRzhe/REDIS-MCP-Server",
    createdAt: "2021-10-14",
    author: {
      name: "Redis",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 85
  {
    id: "257",
    name: "Redis MCP server",
    description: "Interact with Redis Server, AWS Memory DB, etc for caching or other use-cases where in-memory and key-value based storage is appropriate",
    type: "server",
    category: "database",
    sdkType: ["python"],
    stars: 287,
    rating: 4.5,
    reviewCount: 47,
    tags: ["redis", "aws", "memory-db"],
    github: "https://github.com/prajwalnayak7/mcp-server-redis",
    createdAt: "2022-02-21",
    author: {
      name: "Redis",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 86
  {
    id: "258",
    name: "Rememberizer AI",
    description: "An MCP server designed for interacting with the Rememberizer data source, facilitating enhanced knowledge retrieval.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 213,
    rating: 4.3,
    reviewCount: 35,
    tags: ["knowledge-retrieval", "memory-augmentation"],
    github: "https://github.com/skydeckai/mcp-server-rememberizer",
    createdAt: "2022-06-15",
    author: {
      name: "Rememberizer",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 87
  {
    id: "259",
    name: "Replicate",
    description: "Search, run and manage machine learning models on Replicate through a simple tool-based interface. Browse models, create predictions, track their status, and handle generated images.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 356,
    rating: 4.7,
    reviewCount: 62,
    tags: ["ml-models", "inference", "replicate"],
    github: "https://github.com/deepfates/mcp-replicate",
    createdAt: "2022-01-18",
    author: {
      name: "Replicate",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 88
  {
    id: "260",
    name: "Rquest",
    description: "An MCP server providing realistic browser-like HTTP request capabilities with accurate TLS/JA3/JA4 fingerprints for bypassing anti-bot measures.",
    type: "server",
    category: "performance",
    sdkType: ["python"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["http-requests", "web-scraping", "fingerprinting"],
    github: "https://github.com/xxxbrian/mcp-rquest",
    createdAt: "2022-04-09",
    author: {
      name: "Rquest",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 89
  {
    id: "261",
    name: "Rijksmuseum",
    description: "Interface with the Rijksmuseum API to search artworks, retrieve artwork details, access image tiles, and explore user collections.",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["art", "museum", "cultural-data"],
    github: "https://github.com/r-huijts/rijksmuseum-mcp",
    createdAt: "2022-08-22",
    author: {
      name: "Rijksmuseum",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 90
  {
    id: "262",
    name: "Salesforce MCP",
    description: "Interact with Salesforce Data and Metadata",
    type: "server",
    category: "cloud",
    sdkType: ["apex"],
    stars: 321,
    rating: 4.6,
    reviewCount: 53,
    tags: ["crm", "salesforce", "enterprise"],
    github: "https://github.com/smn2gnt/MCP-Salesforce",
    createdAt: "2021-11-25",
    author: {
      name: "Salesforce",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 91
  {
    id: "263",
    name: "Scholarly",
    description: "A MCP server to search for scholarly and academic articles.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["academic", "research", "papers"],
    github: "https://github.com/adityak74/mcp-scholarly",
    createdAt: "2022-03-14",
    author: {
      name: "Scholarly",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 92
  {
    id: "264",
    name: "scrapling-fetch",
    description: "Access text content from bot-protected websites. Fetches HTML/markdown from sites with anti-automation measures using Scrapling.",
    type: "server",
    category: "performance",
    sdkType: ["python"],
    stars: 165,
    rating: 4.2,
    reviewCount: 23,
    tags: ["scraping", "anti-bot", "web-extraction"],
    github: "https://github.com/cyberchitta/scrapling-fetch-mcp",
    createdAt: "2022-07-17",
    author: {
      name: "Scrapling",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 93
  {
    id: "265",
    name: "SearXNG",
    description: "A Model Context Protocol Server for SearXNG",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["search-engine", "privacy", "metasearch"],
    github: "https://github.com/ihor-sokoliuk/mcp-searxng",
    createdAt: "2022-02-28",
    author: {
      name: "SearXNG",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 94
  {
    id: "266",
    name: "ServiceNow",
    description: "A MCP server to interact with a ServiceNow instance",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 276,
    rating: 4.6,
    reviewCount: 44,
    tags: ["servicenow", "itsm", "enterprise"],
    github: "https://github.com/osomai/servicenow-mcp",
    createdAt: "2021-12-15",
    author: {
      name: "ServiceNow",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 95
  {
    id: "267",
    name: "Siri Shortcuts",
    description: "MCP to interact with Siri Shortcuts on macOS. Exposes all Shortcuts as MCP tools.",
    type: "client",
    category: "client",
    sdkType: ["swift"],
    stars: 198,
    rating: 4.3,
    reviewCount: 29,
    tags: ["siri", "shortcuts", "automation"],
    github: "https://github.com/osomai/servicenow-mcp",
    createdAt: "2022-05-24",
    author: {
      name: "Apple",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 96
  {
    id: "268",
    name: "Snowflake",
    description: "This MCP server enables LLMs to interact with Snowflake databases, allowing for secure and controlled data operations.",
    type: "server",
    category: "database",
    sdkType: ["sql"],
    stars: 321,
    rating: 4.6,
    reviewCount: 53,
    tags: ["data-warehouse", "cloud-database"],
    github: "https://github.com/isaacwasserman/mcp-snowflake-server",
    createdAt: "2022-01-07",
    author: {
      name: "Snowflake",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 97
  {
    id: "269",
    name: "Solana Agent Kit",
    description: "This MCP server enables LLMs to interact with the Solana blockchain with help of Solana Agent Kit by SendAI, allowing for 40+ protocol actions and growing",
    type: "server",
    category: "cloud",
    sdkType: ["rust"],
    stars: 287,
    rating: 4.5,
    reviewCount: 47,
    tags: ["solana", "blockchain", "web3"],
    github: "https://github.com/sendaifun/solana-agent-kit/tree/main/examples/agent-kit-mcp-server",
    createdAt: "2022-04-12",
    author: {
      name: "SendAI",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 98
  {
    id: "270",
    name: "Spotify",
    description: "This MCP allows an LLM to play and use Spotify.",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 356,
    rating: 4.7,
    reviewCount: 62,
    tags: ["music", "streaming", "entertainment"],
    github: "https://github.com/varunneal/spotify-mcp",
    createdAt: "2021-11-03",
    author: {
      name: "Spotify",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 99
  {
    id: "271",
    name: "Starwind UI",
    description: "This MCP provides relevant commands, documentation, and other information to allow LLMs to take full advantage of Starwind UI's open source Astro components.",
    type: "server",
    category: "client",
    sdkType: ["typescript"],
    stars: 213,
    rating: 4.4,
    reviewCount: 35,
    tags: ["ui-components", "astro", "frontend"],
    github: "https://github.com/Boston343/starwind-ui-mcp/",
    createdAt: "2022-07-26",
    author: {
      name: "Starwind UI",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 100
  {
    id: "272",
    name: "Stripe",
    description: "This MCP allows integration with Stripe for handling payments, customers, and refunds.",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 389,
    rating: 4.7,
    reviewCount: 67,
    tags: ["payments", "ecommerce", "fintech"],
    github: "https://github.com/atharvagupta2003/mcp-stripe",
    createdAt: "2021-09-28",
    author: {
      name: "Stripe",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "273",
    name: "TMDB",
    description: "This MCP server integrates with The Movie Database (TMDB) API to provide movie information, search capabilities, and recommendations.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 287,
    rating: 4.5,
    reviewCount: 46,
    tags: ["movies", "entertainment", "api"],
    github: "https://github.com/Laksh-star/mcp-server-tmdb",
    createdAt: "2022-03-18",
    author: {
      name: "TMDB",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 102
  {
    id: "274",
    name: "Tavily search",
    description: "An MCP server for Tavily's search & news API, with explicit site inclusions/exclusions",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 213,
    rating: 4.4,
    reviewCount: 35,
    tags: ["search", "news", "api"],
    github: "https://github.com/RamXX/mcp-tavily",
    createdAt: "2022-08-11",
    author: {
      name: "Tavily",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 103
  {
    id: "275",
    name: "Terminal-Control",
    description: "A MCP server that enables secure terminal command execution, directory navigation, and file system operations through a standardized interface.",
    type: "server",
    category: "client",
    sdkType: ["rust"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["terminal", "cli", "shell"],
    github: "https://github.com/GongRzhe/terminal-controller-mcp",
    createdAt: "2022-05-22",
    author: {
      name: "CLI Tools Team",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 104
  {
    id: "276",
    name: "Ticketmaster",
    description: "Search for events, venues, and attractions through the Ticketmaster Discovery API",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["events", "ticketing", "entertainment"],
    github: "https://github.com/delorenj/mcp-server-ticketmaster",
    createdAt: "2022-07-15",
    author: {
      name: "Ticketmaster",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 105
  {
    id: "277",
    name: "Todoist",
    description: "Interact with Todoist to manage your tasks.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 276,
    rating: 4.6,
    reviewCount: 44,
    tags: ["productivity", "tasks", "todo"],
    github: "https://github.com/abhiz123/todoist-mcp-server",
    createdAt: "2021-12-09",
    author: {
      name: "Todoist",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 106
  {
    id: "278",
    name: "Typesense",
    description: "A Model Context Protocol (MCP) server implementation that provides AI models with access to Typesense search capabilities. This server enables LLMs to discover, search, and analyze data stored in Typesense collections.",
    type: "server",
    category: "database",
    sdkType: ["javascript"],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["search", "typesense", "full-text"],
    github: "https://github.com/suhail-ak-s/mcp-typesense-server",
    createdAt: "2022-04-25",
    author: {
      name: "Typesense",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 107
  {
    id: "279",
    name: "Travel Planner",
    description: "Travel planning and itinerary management server integrating with Google Maps API for location search, place details, and route calculations.",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["travel", "maps", "itinerary"],
    github: "https://github.com/GongRzhe/TRAVEL-PLANNER-MCP-Server",
    createdAt: "2022-09-08",
    author: {
      name: "Travel Tools",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 108
  {
    id: "280",
    name: "Unity Catalog",
    description: "An MCP server that enables LLMs to interact with Unity Catalog AI, supporting CRUD operations on Unity Catalog Functions and executing them as MCP tools.",
    type: "server",
    category: "ai",
    sdkType: ["c#"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["unity", "catalog", "ai"],
    github: "https://github.com/ognis1205/mcp-server-unitycatalog",
    createdAt: "2022-06-14",
    author: {
      name: "Unity",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 109
  {
    id: "281",
    name: "Unity3d Game Engine",
    description: "An MCP server that enables LLMs to interact with Unity3d Game Engine, supporting access to a variety of the Unit's Editor engine tools (e.g. Console Logs, Test Runner logs, Editor functions, hierarchy state, etc) and executing them as MCP tools or gather them as resources.",
    type: "server",
    category: "client",
    sdkType: ["c#"],
    stars: 287,
    rating: 4.6,
    reviewCount: 47,
    tags: ["unity", "game-dev", "engine"],
    github: "https://github.com/CoderGamester/mcp-unity",
    createdAt: "2022-02-17",
    author: {
      name: "Unity",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 110
  {
    id: "282",
    name: "Unity Integration (Advanced)",
    description: "Advanced Unity3d Game Engine MCP which supports Execution of Any Editor Related Code Directly Inside of Unity, Fetch Logs, Get Editor State and Allow File Access of the Project making it much more useful in Script Editing or asset creation.",
    type: "server",
    category: "client",
    sdkType: ["c#"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["unity", "advanced", "game-dev"],
    github: "https://github.com/quazaai/UnityMCPIntegration",
    createdAt: "2022-05-30",
    author: {
      name: "Unity",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 111
  {
    id: "283",
    name: "Vega-Lite",
    description: "Generate visualizations from fetched data using the VegaLite format and renderer.",
    type: "server",
    category: "sdk",
    sdkType: ["javascript"],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["visualization", "charts", "vega"],
    github: "https://github.com/isaacwasserman/mcp-vegalite-server",
    createdAt: "2022-08-03",
    author: {
      name: "Vega",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 112
  {
    id: "284",
    name: "Video Editor",
    description: "A Model Context Protocol Server to add, edit, and search videos with Video Jungle.",
    type: "server",
    category: "client",
    sdkType: ["python"],
    stars: 165,
    rating: 4.2,
    reviewCount: 23,
    tags: ["video", "editing", "media"],
    github: "https://github.com/burningion/video-editing-mcp",
    createdAt: "2022-10-19",
    author: {
      name: "Video Jungle",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 113
  {
    id: "285",
    name: "Virtual location",
    description: "Integrates Google Map, Google Street View, PixAI, Stability.ai, ComfyUI API and Bluesky to provide a virtual location simulation in LLM (written in Effect.ts)",
    type: "server",
    category: "ai",
    sdkType: ["typescript"],
    stars: 213,
    rating: 4.4,
    reviewCount: 35,
    tags: ["maps", "street-view", "virtual"],
    github: "https://github.com/mfukushim/map-traveler-mcp",
    createdAt: "2022-07-12",
    author: {
      name: "GeoAI Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 114
  {
    id: "286",
    name: "VolcEngine TOS",
    description: "A sample MCP server for VolcEngine TOS that flexibly get objects from TOS.",
    type: "server",
    category: "cloud",
    sdkType: ["go"],
    stars: 154,
    rating: 4.1,
    reviewCount: 19,
    tags: ["storage", "volcengine", "cloud"],
    github: "https://github.com/dinghuazhou/sample-mcp-server-tos",
    createdAt: "2022-09-26",
    author: {
      name: "VolcEngine",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 115
  {
    id: "287",
    name: "Wanaku MCP Router",
    description: "The Wanaku MCP Router is a SSE-based MCP server that provides an extensible routing engine that allows integrating your enterprise systems with AI agents.",
    type: "server",
    category: "performance",
    sdkType: ["rust"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["router", "enterprise", "sse"],
    github: "https://github.com/wanaku-ai/wanaku/",
    createdAt: "2022-04-07",
    author: {
      name: "Wanaku",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 116
  {
    id: "288",
    name: "Webflow",
    description: "Interfact with the Webflow APIs",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["webflow", "cms", "website-builder"],
    github: "https://github.com/kapilduraphe/webflow-mcp-server",
    createdAt: "2022-01-29",
    author: {
      name: "Webflow",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 117
  {
    id: "289",
    name: "whale-tracker-mcp",
    description: "A mcp server for tracking cryptocurrency whale transactions.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["crypto", "blockchain", "tracking"],
    github: "https://github.com/kukapay/whale-tracker-mcp",
    createdAt: "2022-06-23",
    author: {
      name: "Crypto Trackers",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 118
  {
    id: "290",
    name: "Whois MCP",
    description: "MCP server that performs whois lookup against domain, IP, ASN and TLD.",
    type: "server",
    category: "security",
    sdkType: ["python"],
    stars: 165,
    rating: 4.2,
    reviewCount: 23,
    tags: ["whois", "domain", "networking"],
    github: "https://github.com/bharathvaj-ganesan/whois-mcp",
    createdAt: "2022-09-14",
    author: {
      name: "Networking Tools",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 119
  {
    id: "291",
    name: "WildFly MCP",
    description: "WildFly MCP server that enables LLM to interact with running WildFly servers (retrieve metrics, logs, invoke operations, ...).",
    type: "server",
    category: "server",
    sdkType: ["java"],
    stars: 154,
    rating: 4.1,
    reviewCount: 19,
    tags: ["wildfly", "java-ee", "server"],
    github: "https://github.com/wildfly-extras/wildfly-mcp",
    createdAt: "2022-08-08",
    author: {
      name: "WildFly",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 120
  {
    id: "292",
    name: "Windows CLI",
    description: "MCP server for secure command-line interactions on Windows systems, enabling controlled access to PowerShell, CMD, and Git Bash shells.",
    type: "server",
    category: "client",
    sdkType: ["powershell"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["windows", "cli", "powershell"],
    github: "https://github.com/SimonB97/win-cli-mcp-server",
    createdAt: "2022-03-21",
    author: {
      name: "Windows Tools",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 121
  {
    id: "293",
    name: "World Bank data API",
    description: "A server that fetches data indicators available with the World Bank as part of their data API",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["worldbank", "economics", "data"],
    github: "https://github.com/anshumax/world_bank_mcp_server",
    createdAt: "2022-07-05",
    author: {
      name: "World Bank",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 122
  {
    id: "294",
    name: "X (Twitter) (by EnesCinr)",
    description: "Interact with twitter API. Post tweets and search for tweets by query.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 276,
    rating: 4.6,
    reviewCount: 44,
    tags: ["twitter", "social", "api"],
    github: "https://github.com/EnesCinr/twitter-mcp",
    createdAt: "2021-12-12",
    author: {
      name: "EnesCinr",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 123
  {
    id: "295",
    name: "X (Twitter) (by vidhupv)",
    description: "Create, manage and publish X/Twitter posts directly through Claude chat.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["twitter", "claude", "social"],
    github: "https://github.com/vidhupv/x-mcp",
    createdAt: "2022-05-19",
    author: {
      name: "vidhupv",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 124
  {
    id: "296",
    name: "xcodebuild",
    description: "🍎 Build iOS Xcode workspace/project and feed back errors to llm.",
    type: "server",
    category: "client",
    sdkType: ["swift"],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["xcode", "ios", "build"],
    github: "https://github.com/ShenghaiWang/xcodebuild",
    createdAt: "2022-08-25",
    author: {
      name: "Apple",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 125
  {
    id: "297",
    name: "Xero-mcp-server",
    description: "Enabling clients to interact with Xero system for streamlined accounting, invoicing, and business operations.",
    type: "server",
    category: "cloud",
    sdkType: ["javascript"],
    stars: 213,
    rating: 4.4,
    reviewCount: 35,
    tags: ["xero", "accounting", "business"],
    github: "https://github.com/john-zhang-dev/xero-mcp",
    createdAt: "2022-02-28",
    author: {
      name: "Xero",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 126
  {
    id: "298",
    name: "xiyan_mcp_server",
    description: "An MCP server that supports fetching data from a database using natural language queries, powered by XiyanSQL as the text-to-SQL LLM.",
    type: "server",
    category: "ai",
    sdkType: ["python"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["text-to-sql", "nlp", "database"],
    github: "https://github.com/XGenerationLab/xiyan_mcp_server",
    createdAt: "2022-06-17",
    author: {
      name: "XiyanSQL",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 127
  {
    id: "299",
    name: "XMind",
    description: "Read and search through your XMind directory containing XMind files.",
    type: "server",
    category: "client",
    sdkType: ["java"],
    stars: 165,
    rating: 4.2,
    reviewCount: 23,
    tags: ["xmind", "mindmap", "visualization"],
    github: "https://github.com/apeyroux/mcp-xmind",
    createdAt: "2022-09-30",
    author: {
      name: "XMind",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 128
  {
    id: "300",
    name: "YouTube",
    description: "Comprehensive YouTube API integration for video management, Shorts creation, and analytics.",
    type: "server",
    category: "cloud",
    sdkType: ["python"],
    stars: 356,
    rating: 4.7,
    reviewCount: 62,
    tags: ["youtube", "video", "analytics"],
    github: "https://github.com/ZubeidHendricks/youtube-mcp-server",
    createdAt: "2021-11-21",
    author: {
      name: "Google",
      avatar: "/placeholder.svg"
    },
    featured: true
  },
  {
    id: "301",
    name: "EasyMCP",
    description: "TypeScript framework that makes it easier to build MCP servers",
    type: "server",
    category: "server",
    sdkType: ["typescript"],
    stars: 342,
    rating: 4.7,
    reviewCount: 58,
    tags: ["typescript", "framework", "server"],
    github: "https://github.com/zcaceres/easy-mcp/",
    createdAt: "2022-04-15",
    author: {
      name: "MCP Core Team",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 130 - Server Framework
  {
    id: "302",
    name: "FastAPI to MCP auto generator",
    description: "A zero-configuration tool for automatically exposing FastAPI endpoints as MCP tools by Tadata",
    type: "server",
    category: "server",
    sdkType: ["python"],
    stars: 287,
    rating: 4.6,
    reviewCount: 47,
    tags: ["fastapi", "auto-generator", "python"],
    github: "https://github.com/tadata-org/fastapi_mcp",
    createdAt: "2022-07-22",
    author: {
      name: "Tadata",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 131 - Server Framework
  {
    id: "303",
    name: "FastMCP",
    description: "TypeScript framework for building high-performance MCP servers",
    type: "server",
    category: "server",
    sdkType: ["typescript"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["typescript", "fast", "server"],
    github: "https://github.com/punkpeye/fastmcp",
    createdAt: "2022-03-10",
    author: {
      name: "MCP Performance Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 132 - Server Framework
  {
    id: "304",
    name: "Foxy Contexts",
    description: "A library to build MCP servers in Golang by strowk",
    type: "server",
    category: "server",
    sdkType: ["go"],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["golang", "library", "server"],
    github: "https://github.com/strowk/foxy-contexts",
    createdAt: "2022-06-18",
    author: {
      name: "strowk",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 133 - Server Framework
  {
    id: "305",
    name: "MCP-Framework",
    description: "Build MCP servers with elegance and speed in Typescript. Comes with a CLI to create your project with mcp create app. Get started with your first server in under 5 minutes by Alex Andru",
    type: "server",
    category: "server",
    sdkType: ["typescript"],
    stars: 356,
    rating: 4.8,
    reviewCount: 63,
    tags: ["typescript", "cli", "boilerplate"],
    github: "https://github.com/QuantGeekDev/mcp-framework",
    createdAt: "2022-01-25",
    author: {
      name: "Alex Andru",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 134 - Server Framework
  {
    id: "306",
    name: "Quarkus MCP Server SDK",
    description: "Java framework for building MCP servers with Quarkus",
    type: "server",
    category: "server",
    sdkType: ["java"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["quarkus", "java", "enterprise"],
    github: "http://github.com/quarkiverse/quarkus-mcp-server",
    createdAt: "2022-05-14",
    author: {
      name: "Quarkus Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 135 - Server Framework
  {
    id: "307",
    name: "Template MCP Server",
    description: "A CLI tool to create a new Model Context Protocol server project with TypeScript support, dual transport options, and an extensible structure",
    type: "server",
    category: "server",
    sdkType: ["typescript"],
    stars: 245,
    rating: 4.5,
    reviewCount: 41,
    tags: ["template", "cli", "boilerplate"],
    github: "https://github.com/mcpdotdirect/template-mcp-server",
    createdAt: "2022-02-28",
    author: {
      name: "MCP Core Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 136 - Client Framework
  {
    id: "308",
    name: "codemirror-mcp",
    description: "CodeMirror extension that implements the Model Context Protocol (MCP) for resource mentions and prompt commands",
    type: "client",
    category: "client",
    sdkType: ["typescript"],
    stars: 213,
    rating: 4.4,
    reviewCount: 35,
    tags: ["codemirror", "editor", "extension"],
    github: "https://github.com/marimo-team/codemirror-mcp",
    createdAt: "2022-08-07",
    author: {
      name: "Editor Tools Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },
  {
    id: "309",
    name: "AiMCP",
    description: "A collection of MCP clients & servers to find the right mcp tools by Hekmon",
    type: "client",
    category: "community",
    sdkType: [],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["directory", "collection", "discovery"],
    github: "https://github.com/hekmon/aimcp",
    createdAt: "2022-05-12",
    author: {
      name: "Hekmon",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 138 - Community Resource
  {
    id: "310",
    name: "Awesome Crypto MCP Servers",
    description: "A curated list of MCP servers by Luke Fan",
    type: "client",
    category: "cloud",
    sdkType: [],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["awesome-list", "crypto", "curated"],
    github: "https://github.com/badkk/awesome-crypto-mcp-servers",
    createdAt: "2022-03-18",
    author: {
      name: "Luke Fan",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 139 - Community Resource
  {
    id: "311",
    name: "Awesome MCP Servers",
    description: "A curated list of MCP servers by Stephen Akinyemi",
    type: "client",
    category: "community",
    sdkType: [],
    stars: 287,
    rating: 4.6,
    reviewCount: 47,
    tags: ["awesome-list", "curated", "directory"],
    github: "https://github.com/appcypher/awesome-mcp-servers",
    createdAt: "2022-02-05",
    author: {
      name: "Stephen Akinyemi",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 140 - Community Resource (Website)
  {
    id: "312",
    name: "Awesome MCP Servers by punkpeye",
    description: "A curated list of MCP servers by Frank Fiegel",
    type: "client",
    category: "community",
    sdkType: [],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["website", "awesome-list", "curated"],
    github: "https://github.com/punkpeye/awesome-mcp-servers",
    createdAt: "2022-04-22",
    author: {
      name: "Frank Fiegel",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 141 - Community Resource (Website)
  {
    id: "313",
    name: "Awesome MCP Servers by wong2",
    description: "A curated list of MCP servers by wong2",
    type: "client",
    category: "community",
    sdkType: [],
    stars: 213,
    rating: 4.4,
    reviewCount: 35,
    tags: ["website", "awesome-list", "curated"],
    github: "https://github.com/wong2/awesome-mcp-servers",
    createdAt: "2022-06-15",
    author: {
      name: "wong2",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // {
  //   id: "142",
  //   name: "Discord Server",
  //   description: "A community discord server dedicated to MCP by Frank Fiegel",
  //   type: "community",
  //   category: "community",
  //   sdkType: [],
  //   stars: 0,
  //   rating: 0,
  //   reviewCount: 0,
  //   tags: ["discord", "community", "chat"],
  //   github: "",
  //   website: "https://discord.gg/mcp-fiegel",
  //   createdAt: "2022-01-10",
  //   author: {
  //     name: "Frank Fiegel",
  //     avatar: "/placeholder.svg"
  //   },
  //   featured: true
  // },

  // {
  //   id: "143",
  //   name: "Discord Server (ModelContextProtocol)",
  //   description: "Connect with developers, share insights, and collaborate on projects in an active Discord community dedicated to the Model Context Protocol by Alex Andru",
  //   type: "community",
  //   category: "community",
  //   sdkType: [],
  //   stars: 0,
  //   rating: 0,
  //   reviewCount: 0,
  //   tags: ["discord", "community", "collaboration"],
  //   github: "",
  //   website: "https://discord.gg/modelcontextprotocol",
  //   createdAt: "2022-03-05",
  //   author: {
  //     name: "Alex Andru",
  //     avatar: "/placeholder.svg"
  //   },
  //   featured: true
  // },


  // {
  //   id: "144",
  //   name: "MCP Badges",
  //   description: "Quickly highlight your MCP project with clear, eye-catching badges, by Ironben",
  //   type: "resource",
  //   category: "community",
  //   sdkType: [],
  //   stars: 132,
  //   rating: 4.2,
  //   reviewCount: 18,
  //   tags: ["badges", "marketing", "branding"],
  //   github: "https://github.com/ironben/mcp-badges",
  //   createdAt: "2022-07-19",
  //   author: {
  //     name: "Ironben",
  //     avatar: "/placeholder.svg"
  //   },
  //   featured: false
  // },

  // {
  //   id: "145",
  //   name: "MCP Servers Hub",
  //   description: "A curated list of MCP servers by apappascs",
  //   type: "resource",
  //   category: "community",
  //   sdkType: [],
  //   stars: 0,
  //   rating: 0,
  //   reviewCount: 0,
  //   tags: ["website", "directory", "curated"],
  //   github: "",
  //   website: "https://mcp-hub.apappascs.com",
  //   createdAt: "2022-05-30",
  //   author: {
  //     name: "apappascs",
  //     avatar: "/placeholder.svg"
  //   },
  //   featured: false
  // },


  // {
  //   id: "146",
  //   name: "MCP X Community",
  //   description: "A X community for MCP by Xiaoyi",
  //   type: "community",
  //   category: "community",
  //   sdkType: [],
  //   stars: 0,
  //   rating: 0,
  //   reviewCount: 0,
  //   tags: ["twitter", "community", "discussion"],
  //   github: "",
  //   website: "https://x.com/mcp_community",
  //   createdAt: "2022-08-12",
  //   author: {
  //     name: "Xiaoyi",
  //     avatar: "/placeholder.svg"
  //   },
  //   featured: false
  // },

  // Tool 147 - Tool
  {
    id: "314",
    name: "mcp-cli",
    description: "A CLI inspector for the Model Context Protocol by wong2",
    type: "client",
    category: "client",
    sdkType: ["python"],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["cli", "inspector", "debugging"],
    github: "https://github.com/wong2/mcp-cli",
    createdAt: "2022-02-28",
    author: {
      name: "wong2",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 148 - Tool
  {
    id: "315",
    name: "mcp-get",
    description: "Command line tool for installing and managing MCP servers by Michael Latman",
    type: "client",
    category: "client",
    sdkType: ["bash"],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["cli", "package-manager", "installer"],
    github: "https://github.com/michaellatman/mcp-get",
    website: "https://mcp-get.com/",
    createdAt: "2022-04-17",
    author: {
      name: "Michael Latman",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 149 - Tool
  {
    id: "316",
    name: "mcp-guardian",
    description: "GUI application + tools for proxying / managing control of MCP servers by EQTY Lab",
    type: "client",
    category: "client",
    sdkType: ["typescript"],
    stars: 165,
    rating: 4.2,
    reviewCount: 23,
    tags: ["gui", "management", "security"],
    github: "https://github.com/eqtylab/mcp-guardian",
    createdAt: "2022-09-05",
    author: {
      name: "EQTY Lab",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 150 - Tool
  {
    id: "317",
    name: "mcp-manager",
    description: "Simple Web UI to install and manage MCP servers for Claude Desktop by Zue",
    type: "client",
    category: "client",
    sdkType: ["javascript"],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["webui", "management", "claude"],
    github: "https://github.com/zueai/mcp-manager",
    createdAt: "2022-07-08",
    author: {
      name: "Zue",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 151 - Tool
  {
    id: "318",
    name: "MCPHub",
    description: "An Open Source MacOS & Windows GUI Desktop app for discovering, installing and managing MCP servers by Jeamee",
    type: "client",
    category: "client",
    sdkType: ["electron"],
    stars: 276,
    rating: 4.6,
    reviewCount: 44,
    tags: ["desktop", "gui", "management"],
    github: "https://github.com/Jeamee/MCPHub-Desktop",
    createdAt: "2022-03-25",
    author: {
      name: "Jeamee",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 152 - Tool
  // {
  //   id: "319",
  //   name: "mcp.run",
  //   description: "A hosted registry and control plane to install & run secure + portable MCP Servers",
  //   type: "client",
  //   category: "cloud",
  //   sdkType: ["typescript"],
  //   stars: 321,
  //   rating: 4.7,
  //   reviewCount: 53,
  //   tags: ["hosted", "registry", "control-plane"],
  //   github: "",
  //   website: "https://mcp.run/",
  //   createdAt: "2022-01-15",
  //   author: {
  //     name: "MCP Core Team",
  //     avatar: "/placeholder.svg"
  //   },
  //   featured: true
  // },

  // Tool 153 - Tool
  {
    id: "320",
    name: "mcp-dockmaster",
    description: "An Open-Sourced UI to install and manage MCP servers for Windows, Linux and MacOS",
    type: "client",
    category: "client",
    sdkType: ["electron"],
    stars: 213,
    rating: 4.4,
    reviewCount: 35,
    tags: ["cross-platform", "gui", "management"],
    github: "https://github.com/dcSpark/mcp-dockmaster",
    website: "https://mcp-dockmaster.com/",
    createdAt: "2022-06-22",
    author: {
      name: "MCP Tools Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 154 - Resource
  {
    id: "321",
    name: "mkinf",
    description: "An Open Source registry of hosted MCP Servers to accelerate AI agent workflows",
    type: "client",
    category: "client",
    sdkType: [],
    stars: 187,
    rating: 4.3,
    reviewCount: 27,
    tags: ["registry", "hosted", "ai-agents"],
    github: "https://github.com/mkinf-io/mkinf",
    website: "https://mkinf.io/",
    createdAt: "2022-05-08",
    author: {
      name: "MKINF Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 155 - Community Resource
  {
    id: "322",
    name: "Open-Sourced MCP Servers Directory",
    description: "A curated list of MCP servers by mcpso",
    type: "client",
    category: "client",
    sdkType: [],
    stars: 154,
    rating: 4.2,
    reviewCount: 21,
    tags: ["directory", "curated", "opensource"],
    github: "https://github.com/chatmcp/mcp-directory",
    createdAt: "2022-08-30",
    author: {
      name: "mcpso",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 156 - Resource
  {
    id: "323",
    name: "OpenTools",
    description: "An open registry for finding, installing, and building with MCP servers by opentoolsteam",
    type: "client",
    category: "client",
    sdkType: [],
    stars: 231,
    rating: 4.5,
    reviewCount: 39,
    tags: ["registry", "tools", "discovery"],
    github: "https://github.com/opentoolsteam/cli",
    website: "https://opentools.com/",
    createdAt: "2022-04-05",
    author: {
      name: "opentoolsteam",
      avatar: "/placeholder.svg"
    },
    featured: true
  },

  // Tool 157 - Community Resource
  {
    id: "324",
    name: "PulseMCP (API)",
    description: "Community hub & weekly newsletter for discovering MCP servers, clients, articles, and news by Tadas Antanavicius, Mike Coughlin, and Ravina Patel",
    type: "client",
    category: "client",
    sdkType: [],
    stars: 198,
    rating: 4.4,
    reviewCount: 31,
    tags: ["newsletter", "api", "community"],
    github: "https://github.com/pulsemcp/api",
    website: "https://www.pulsemcp.com/",
    createdAt: "2022-07-14",
    author: {
      name: "PulseMCP Team",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 158 - Community
  {
    id: "325",
    name: "r/mcp",
    description: "A Reddit community dedicated to MCP by Frank Fiegel",
    type: "client",
    category: "client",
    sdkType: [],
    stars: 0,
    rating: 0,
    reviewCount: 0,
    tags: ["reddit", "community", "discussion"],
    github: "https://github.com/punkpeye/awesome-mcp-servers",
    website: "https://www.reddit.com/r/mcp/",
    createdAt: "2022-02-12",
    author: {
      name: "Frank Fiegel",
      avatar: "/placeholder.svg"
    },
    featured: false
  },

  // Tool 159 - Community
  // {
  //   id: "326",
  //   name: "r/modelcontextprotocol",
  //   description: "A Model Context Protocol community Reddit page - discuss ideas, get answers to your questions, network with like-minded people, and showcase your projects! by Alex Andru",
  //   type: "client",
  //   category: "client",
  //   sdkType: [],
  //   stars: 0,
  //   rating: 0,
  //   reviewCount: 0,
  //   tags: ["reddit", "community", "discussion"],
  //   github: "",
  //   website: "https://www.reddit.com/r/modelcontextprotocol/",
  //   createdAt: "2022-05-19",
  //   author: {
  //     name: "Alex Andru",
  //     avatar: "/placeholder.svg"
  //   },
  //   featured: false
  // },

  // Tool 160 - Resource
  // {
  //   id: "160",
  //   name: "Smithery",
  //   description: "A registry of MCP servers to find the right tools for your LLM agents by Henry Mao",
  //   type: "resource",
  //   category: "community",
  //   sdkType: [],
  //   stars: 213,
  //   rating: 4.4,
  //   reviewCount: 35,
  //   tags: ["registry", "llm", "agents"],
  //   github: "https://github.com/henrymao/smithery",
  //   createdAt: "2022-09-22",
  //   author: {
  //     name: "Henry Mao",
  //     avatar: "/placeholder.svg"
  //   },
  //   featured: false
  // },

  // Tool 161 - Tool
  {
    id: "327",
    name: "Toolbase",
    description: "Desktop application that manages tools and MCP servers with just a few clicks - no coding required by gching",
    type: "client",
    category: "client",
    sdkType: ["typescript","javascript"],
    stars: 67,
    rating: 4.5,
    reviewCount: 41,
    tags: ["desktop", "gui", "no-code"],
    github: "https://github.com/Toolbase-AI/toolbase",
    createdAt: "2024-12-19",
    author: {
      name: "gching",
      avatar: "/placeholder.svg"
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