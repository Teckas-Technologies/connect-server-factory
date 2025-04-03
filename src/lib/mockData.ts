
import { Database, KeySquare, Lock, Cloud, Zap, Message, ChartBar, Coins, Brain, FileJson, Search, Code, Layers, Gauge, Workflow } from 'lucide-react';
import { ServerClient, Category, Review, FeatureRequest, ServerRemix } from './types';

export const categories: Category[] = [
  {
    id: 'database',
    name: 'Database',
    description: 'Tools for data storage, retrieval, and management',
    icon: Database
  },
  {
    id: 'ai',
    name: 'AI',
    description: 'Artificial intelligence and machine learning tools',
    icon: Brain
  },
  {
    id: 'security',
    name: 'Security',
    description: 'Authentication, authorization, and security tools',
    icon: Lock
  },
  {
    id: 'cloud',
    name: 'Cloud',
    description: 'Cloud services and infrastructure tools',
    icon: Cloud
  },
  {
    id: 'performance',
    name: 'Performance',
    description: 'Tools for monitoring, optimization, and performance',
    icon: Gauge
  },
  {
    id: 'messaging',
    name: 'Messaging',
    description: 'Tools for communication and messaging',
    icon: Message
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description: 'Data analysis and reporting tools',
    icon: ChartBar
  },
  {
    id: 'search',
    name: 'Search',
    description: 'Tools for search and discovery',
    icon: Search
  },
  {
    id: 'api',
    name: 'API',
    description: 'API development and integration tools',
    icon: Code
  },
  {
    id: 'integration',
    name: 'Integration',
    description: 'Tools for connecting different systems',
    icon: Workflow
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Financial services and payment tools',
    icon: Coins
  },
  {
    id: 'utilities',
    name: 'Utilities',
    description: 'General-purpose utility tools',
    icon: FileJson
  },
  {
    id: 'orchestration',
    name: 'Orchestration',
    description: 'Tools for workflow and process management',
    icon: Layers
  },
  {
    id: 'auth',
    name: 'Authentication',
    description: 'Authentication and user management tools',
    icon: KeySquare
  }
];

export const servers: ServerClient[] = [
  {
    id: '1',
    name: 'DatabaseMCP',
    description: 'High-performance database server for MCP',
    longDescription: 'A high-performance database server optimized for MCP applications. Supports multiple data models and provides advanced query capabilities.',
    category: 'database',
    type: 'server',
    tags: ['database', 'storage', 'sql', 'nosql'],
    author: {
      id: 'user1',
      name: 'Database Systems Inc.',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Carol'
    },
    github: 'https://github.com/anthropics/mcp',
    website: 'https://example.com/databasemcp',
    documentation: 'https://docs.example.com/databasemcp',
    version: '1.2.0',
    created_at: '2023-05-15T10:30:00Z',
    updated_at: '2023-11-20T14:45:00Z',
    featured: true,
    verified: true,
    hosted: true,
    stars: 1250,
    downloads: 15000,
    deployment_url: 'https://api.databasemcp.network/v1'
  },
  {
    id: '2',
    name: 'SecureMCP',
    description: 'Security-focused MCP server with advanced auth features',
    longDescription: 'A security-focused MCP server that provides advanced authentication and authorization features. Supports OAuth, API keys, and fine-grained access control.',
    category: 'security',
    type: 'server',
    tags: ['security', 'auth', 'encryption', 'oauth'],
    author: {
      id: 'user2',
      name: 'SecureWorks',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Bob'
    },
    github: 'https://github.com/secureworks/securemcp',
    website: 'https://securemcp.io',
    documentation: 'https://docs.securemcp.io',
    version: '2.0.1',
    created_at: '2023-03-10T08:15:00Z',
    updated_at: '2023-12-05T16:20:00Z',
    featured: false,
    verified: true,
    hosted: true,
    stars: 876,
    downloads: 9300
  },
  {
    id: '3',
    name: 'CloudMCP',
    description: 'Cloud-native MCP server for distributed applications',
    longDescription: 'A cloud-native MCP server designed for building distributed applications. Provides seamless integration with major cloud providers and supports auto-scaling.',
    category: 'cloud',
    type: 'server',
    tags: ['cloud', 'kubernetes', 'docker', 'aws', 'azure', 'gcp'],
    author: {
      id: 'user3',
      name: 'CloudTech Solutions',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Alice'
    },
    github: 'https://github.com/cloudtech/cloudmcp',
    website: 'https://cloudmcp.tech',
    documentation: 'https://docs.cloudmcp.tech',
    version: '1.5.3',
    created_at: '2023-06-22T12:40:00Z',
    updated_at: '2023-11-18T09:30:00Z',
    featured: true,
    verified: true,
    hosted: true,
    stars: 2100,
    downloads: 18500
  },
  {
    id: '4',
    name: 'PerformanceMCP',
    description: 'High-performance MCP server with optimized throughput',
    longDescription: 'A high-performance MCP server optimized for maximum throughput and minimal latency. Includes advanced caching mechanisms and connection pooling.',
    category: 'performance',
    type: 'server',
    tags: ['performance', 'optimization', 'caching', 'monitoring'],
    author: {
      id: 'user4',
      name: 'OptimizeTech',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=David'
    },
    github: 'https://github.com/optimizetech/performancemcp',
    website: 'https://performancemcp.dev',
    documentation: 'https://docs.performancemcp.dev',
    version: '3.1.0',
    created_at: '2023-04-05T15:20:00Z',
    updated_at: '2023-12-01T11:10:00Z',
    featured: false,
    verified: true,
    hosted: true,
    stars: 945,
    downloads: 8200
  },
  {
    id: '5',
    name: 'AIMCP',
    description: 'AI-powered MCP server with advanced analytics',
    longDescription: 'An AI-powered MCP server that provides advanced analytics and machine learning capabilities. Supports multiple ML frameworks and provides pre-trained models.',
    category: 'ai',
    type: 'server',
    tags: ['ai', 'ml', 'analytics', 'neural-networks', 'prediction'],
    author: {
      id: 'user5',
      name: 'AI Systems Corp',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Emma'
    },
    github: 'https://github.com/aisystems/aimcp',
    website: 'https://aimcp.ai',
    documentation: 'https://docs.aimcp.ai',
    version: '2.3.2',
    created_at: '2023-07-12T09:45:00Z',
    updated_at: '2023-11-28T14:15:00Z',
    featured: true,
    verified: true,
    hosted: false,
    stars: 3200,
    downloads: 22000
  },
  {
    id: '6',
    name: 'MessagingMCP',
    description: 'Real-time messaging MCP server with WebSocket support',
    longDescription: 'A real-time messaging MCP server with built-in WebSocket support. Provides features like presence detection, typing indicators, and message history.',
    category: 'messaging',
    type: 'server',
    tags: ['messaging', 'real-time', 'websocket', 'chat', 'notification'],
    author: {
      id: 'user6',
      name: 'MessageWorks Inc.',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Frank'
    },
    github: 'https://github.com/messageworks/messagingmcp',
    website: 'https://messagingmcp.io',
    documentation: 'https://docs.messagingmcp.io',
    version: '1.8.5',
    created_at: '2023-02-28T11:30:00Z',
    updated_at: '2023-10-15T16:50:00Z',
    featured: false,
    verified: true,
    hosted: true,
    stars: 1560,
    downloads: 12800
  },
  {
    id: '7',
    name: 'AnalyticsMCP',
    description: 'Comprehensive analytics MCP server for data insights',
    longDescription: 'A comprehensive analytics MCP server that provides data insights and visualization capabilities. Supports multiple data sources and custom dashboards.',
    category: 'analytics',
    type: 'server',
    tags: ['analytics', 'data-visualization', 'dashboards', 'reporting'],
    author: {
      id: 'user7',
      name: 'DataViz Solutions',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Grace'
    },
    github: 'https://github.com/dataviz/analyticsmcp',
    website: 'https://analyticsmcp.data',
    documentation: 'https://docs.analyticsmcp.data',
    version: '2.1.0',
    created_at: '2023-08-18T13:20:00Z',
    updated_at: '2023-12-07T10:05:00Z',
    featured: false,
    verified: true,
    hosted: false,
    stars: 890,
    downloads: 7500
  },
  {
    id: '8',
    name: 'SearchMCP',
    description: 'Advanced search MCP server with full-text and semantic capabilities',
    longDescription: 'An advanced search MCP server that provides full-text and semantic search capabilities. Supports faceted search, filters, and relevance scoring.',
    category: 'search',
    type: 'server',
    tags: ['search', 'full-text', 'semantic', 'indexing', 'relevance'],
    author: {
      id: 'user8',
      name: 'SearchTech LLC',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Henry'
    },
    github: 'https://github.com/searchtech/searchmcp',
    website: 'https://searchmcp.tech',
    documentation: 'https://docs.searchmcp.tech',
    version: '1.4.0',
    created_at: '2023-09-05T14:10:00Z',
    updated_at: '2023-11-22T09:45:00Z',
    featured: true,
    verified: true,
    hosted: true,
    stars: 1720,
    downloads: 14200
  },
  {
    id: '9',
    name: 'APIMCP',
    description: 'API gateway MCP server with rate limiting and auth',
    longDescription: 'An API gateway MCP server that provides rate limiting, authentication, and authorization features. Supports API keys, OAuth, and custom plugins.',
    category: 'api',
    type: 'server',
    tags: ['api', 'gateway', 'rate-limiting', 'auth', 'proxy'],
    author: {
      id: 'user9',
      name: 'API Platform Inc.',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Ivy'
    },
    github: 'https://github.com/apiplatform/apimcp',
    website: 'https://apimcp.dev',
    documentation: 'https://docs.apimcp.dev',
    version: '3.0.0',
    created_at: '2023-05-30T10:50:00Z',
    updated_at: '2023-12-10T15:30:00Z',
    featured: false,
    verified: true,
    hosted: true,
    stars: 1890,
    downloads: 16300
  },
  {
    id: '10',
    name: 'IntegrationMCP',
    description: 'Integration MCP server for connecting different systems',
    longDescription: 'An integration MCP server designed for connecting different systems. Provides connectors for popular services and allows custom integration workflows.',
    category: 'integration',
    type: 'server',
    tags: ['integration', 'connector', 'workflow', 'automation'],
    author: {
      id: 'user10',
      name: 'IntegrationWorks',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Jack'
    },
    github: 'https://github.com/integrationworks/integrationmcp',
    website: 'https://integrationmcp.io',
    documentation: 'https://docs.integrationmcp.io',
    version: '2.2.1',
    created_at: '2023-04-15T11:40:00Z',
    updated_at: '2023-11-05T13:25:00Z',
    featured: false,
    verified: false,
    hosted: false,
    stars: 750,
    downloads: 6300
  },
  {
    id: '11',
    name: 'FinanceMCP',
    description: 'Financial services MCP server with payment processing',
    longDescription: 'A financial services MCP server that provides payment processing and accounting features. Supports multiple payment gateways and currencies.',
    category: 'finance',
    type: 'server',
    tags: ['finance', 'payment', 'accounting', 'invoicing'],
    author: {
      id: 'user11',
      name: 'FinTech Solutions',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Kate'
    },
    github: 'https://github.com/fintechsolutions/financemcp',
    website: 'https://financemcp.fintech',
    documentation: 'https://docs.financemcp.fintech',
    version: '1.6.2',
    created_at: '2023-07-25T09:15:00Z',
    updated_at: '2023-12-03T14:10:00Z',
    featured: false,
    verified: true,
    hosted: true,
    stars: 920,
    downloads: 8100
  },
  {
    id: '12',
    name: 'UtilityMCP',
    description: 'General-purpose utility MCP server with common tools',
    longDescription: 'A general-purpose utility MCP server that provides common tools and functions. Includes date/time utilities, string manipulation, and data conversion.',
    category: 'utilities',
    type: 'server',
    tags: ['utility', 'tool', 'helper', 'common'],
    author: {
      id: 'user12',
      name: 'UtilTech',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Leo'
    },
    github: 'https://github.com/utiltech/utilitymcp',
    website: 'https://utilitymcp.tech',
    documentation: 'https://docs.utilitymcp.tech',
    version: '2.0.0',
    created_at: '2023-03-20T15:50:00Z',
    updated_at: '2023-10-28T11:30:00Z',
    featured: false,
    verified: false,
    hosted: false,
    stars: 680,
    downloads: 5600
  }
];

// Generate mock reviews
export const reviews: Review[] = [
  {
    id: 'r1',
    server_id: '1',
    user_id: 'user101',
    user: {
      name: 'John Smith',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=John'
    },
    rating: 5,
    comment: 'Excellent database server with great performance and reliability.',
    created_at: '2023-11-10T14:30:00Z'
  },
  {
    id: 'r2',
    server_id: '1',
    user_id: 'user102',
    user: {
      name: 'Sarah Johnson',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=Sarah'
    },
    rating: 4,
    comment: 'Good features but the documentation could be improved.',
    created_at: '2023-10-25T09:15:00Z'
  },
  {
    id: 'r3',
    server_id: '3',
    user_id: 'user103',
    user: {
      name: 'Michael Brown',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=Michael'
    },
    rating: 5,
    comment: 'The cloud integration capabilities are amazing. Works perfectly with our AWS infrastructure.',
    created_at: '2023-11-15T16:45:00Z'
  },
  {
    id: 'r4',
    server_id: '5',
    user_id: 'user104',
    user: {
      name: 'Emily Davis',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=Emily'
    },
    rating: 5,
    comment: 'The AI capabilities of this server are cutting edge. Very impressed with the model performance.',
    created_at: '2023-11-20T10:30:00Z'
  },
  {
    id: 'r5',
    server_id: '5',
    user_id: 'user105',
    user: {
      name: 'David Wilson',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=David'
    },
    rating: 3,
    comment: 'Good AI features but needs more pre-trained models and better documentation.',
    created_at: '2023-10-30T11:20:00Z'
  }
];

// Generate mock feature requests
export const featureRequests: FeatureRequest[] = [
  {
    id: 'fr1',
    title: 'Multi-model database support',
    description: 'Add support for multiple database models within a single server instance, including document, graph, and key-value stores.',
    category: 'database',
    user_id: 'user201',
    user: {
      name: 'Alex Thompson',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=Alex'
    },
    status: 'planned',
    votes: 156,
    created_at: '2023-09-15T10:20:00Z',
    updated_at: '2023-11-20T14:30:00Z',
    tags: ['database', 'models', 'storage']
  },
  {
    id: 'fr2',
    title: 'Zero-knowledge proof authentication',
    description: 'Implement zero-knowledge proof authentication mechanisms for enhanced privacy and security.',
    category: 'security',
    user_id: 'user202',
    user: {
      name: 'Rachel Green',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=Rachel'
    },
    status: 'under-review',
    votes: 89,
    created_at: '2023-10-05T15:45:00Z',
    updated_at: '2023-11-10T09:15:00Z',
    tags: ['security', 'authentication', 'privacy', 'zero-knowledge']
  },
  {
    id: 'fr3',
    title: 'Edge computing capabilities',
    description: 'Add support for edge computing to reduce latency and improve performance for distributed applications.',
    category: 'cloud',
    user_id: 'user203',
    user: {
      name: 'Carlos Rodriguez',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=Carlos'
    },
    status: 'in-progress',
    votes: 211,
    created_at: '2023-08-20T11:30:00Z',
    updated_at: '2023-11-25T16:40:00Z',
    tags: ['cloud', 'edge', 'performance', 'latency']
  },
  {
    id: 'fr4',
    title: 'Custom LLM fine-tuning',
    description: 'Provide tools for fine-tuning large language models with custom datasets.',
    category: 'ai',
    user_id: 'user204',
    user: {
      name: 'Priya Patel',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=Priya'
    },
    status: 'pending',
    votes: 178,
    created_at: '2023-11-01T09:50:00Z',
    updated_at: '2023-11-01T09:50:00Z',
    tags: ['ai', 'llm', 'fine-tuning', 'ml']
  },
  {
    id: 'fr5',
    title: 'Real-time communication with QUIC protocol',
    description: 'Implement QUIC protocol support for faster and more reliable real-time communication.',
    category: 'messaging',
    user_id: 'user205',
    user: {
      name: 'Thomas Lee',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=Thomas'
    },
    status: 'completed',
    votes: 132,
    created_at: '2023-07-10T14:15:00Z',
    updated_at: '2023-10-15T11:30:00Z',
    tags: ['messaging', 'real-time', 'quic', 'protocol']
  }
];

// Generate mock server remixes
export const serverRemixes: ServerRemix[] = [
  {
    id: 'sr1',
    name: 'AI Database Analytics',
    description: 'A powerful remix combining AI analytics with high-performance database capabilities.',
    creator_id: 'user301',
    creator: {
      name: 'Maria Garcia',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=Maria'
    },
    servers: ['1', '5', '7'], // IDs of DatabaseMCP, AIMCP, and AnalyticsMCP
    configuration: {
      integration_points: {
        'database_to_ai': {
          enabled: true,
          data_sync_interval: 300 // seconds
        },
        'ai_to_analytics': {
          enabled: true,
          prediction_models: ['regression', 'classification']
        }
      },
      auth: {
        shared_credentials: true
      }
    },
    created_at: '2023-10-10T15:20:00Z',
    updated_at: '2023-11-25T09:45:00Z',
    public: true,
    featured: true
  },
  {
    id: 'sr2',
    name: 'Secure Cloud Messaging',
    description: 'A secure messaging platform with cloud scalability and advanced security features.',
    creator_id: 'user302',
    creator: {
      name: 'James Wilson',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=James'
    },
    servers: ['2', '3', '6'], // IDs of SecureMCP, CloudMCP, and MessagingMCP
    configuration: {
      security: {
        end_to_end_encryption: true,
        message_expiration: 86400 // seconds (24 hours)
      },
      cloud: {
        auto_scaling: true,
        region: 'multi'
      },
      messaging: {
        offline_delivery: true,
        max_message_size: 10485760 // 10MB
      }
    },
    created_at: '2023-09-15T11:30:00Z',
    updated_at: '2023-11-20T14:10:00Z',
    public: true,
    featured: false
  },
  {
    id: 'sr3',
    name: 'API Search Integration',
    description: 'A comprehensive API gateway with advanced search capabilities.',
    creator_id: 'user303',
    creator: {
      name: 'Sophia Chen',
      avatar_url: 'https://api.dicebear.com/7.x/personas/svg?seed=Sophia'
    },
    servers: ['8', '9', '10'], // IDs of SearchMCP, APIMCP, and IntegrationMCP
    configuration: {
      api: {
        rate_limiting: {
          enabled: true,
          requests_per_minute: 100
        },
        auth: {
          methods: ['api_key', 'oauth2']
        }
      },
      search: {
        index_update_interval: 600, // seconds
        semantic_search: true
      },
      integration: {
        connectors: ['rest', 'graphql', 'grpc']
      }
    },
    created_at: '2023-11-05T09:40:00Z',
    updated_at: '2023-12-01T16:15:00Z',
    public: true,
    featured: false
  }
];

// Helper functions for the mock data
export const getFeaturedServers = (): ServerClient[] => {
  return servers.filter(server => server.featured);
};

export const getServerById = (id: string): ServerClient | undefined => {
  return servers.find(server => server.id === id);
};

export const getServersByCategory = (categoryId: string): ServerClient[] => {
  return servers.filter(server => server.category === categoryId);
};

export const getServerReviews = (serverId: string): Review[] => {
  return reviews.filter(review => review.server_id === serverId);
};

export const getFeatureRequestsByCategory = (categoryId: string): FeatureRequest[] => {
  return featureRequests.filter(request => request.category === categoryId);
};

export const getServerRemixById = (id: string): ServerRemix | undefined => {
  return serverRemixes.find(remix => remix.id === id);
};

export const getServersInRemix = (remix: ServerRemix): ServerClient[] => {
  return servers.filter(server => remix.servers.includes(server.id));
};
