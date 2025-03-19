
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
    name: 'PythonMCP',
    description: 'A Python implementation of the MCP protocol with async support and extensive documentation.',
    type: 'server',
    category: 'server',
    sdkType: ['python'],
    stars: 378,
    rating: 4.7,
    reviewCount: 58,
    tags: ['python', 'async', 'documentation'],
    github: 'https://github.com/example/pythonmcp',
    createdAt: '2023-08-02',
    author: {
      name: 'PythonMCP Org',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '3',
    name: 'MCPdb',
    description: 'Database connector for MCP with support for PostgreSQL, MySQL, and MongoDB.',
    type: 'client',
    category: 'database',
    sdkType: ['typescript', 'python'],
    stars: 289,
    rating: 4.5,
    reviewCount: 42,
    tags: ['database', 'postgresql', 'mysql', 'mongodb'],
    github: 'https://github.com/example/mcpdb',
    createdAt: '2023-10-05',
    author: {
      name: 'Database Tools Inc',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '4',
    name: 'ReactMCP',
    description: 'A React client library for MCP with hooks and components for easy integration.',
    type: 'client',
    category: 'client',
    sdkType: ['javascript', 'typescript'],
    stars: 512,
    rating: 4.9,
    reviewCount: 76,
    tags: ['react', 'hooks', 'frontend'],
    github: 'https://github.com/example/reactmcp',
    createdAt: '2023-11-20',
    author: {
      name: 'React MCP Devs',
      avatar: '/placeholder.svg'
    },
    featured: true
  },
  {
    id: '5',
    name: 'MCP AI Bridge',
    description: 'Connect MCP servers to machine learning models with ease.',
    type: 'server',
    category: 'ai',
    sdkType: ['python', 'typescript'],
    stars: 346,
    rating: 4.6,
    reviewCount: 39,
    tags: ['ai', 'machine-learning', 'tensorflow'],
    github: 'https://github.com/example/mcp-ai-bridge',
    createdAt: '2023-12-01',
    author: {
      name: 'AI Tools Group',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '6',
    name: 'GoMCP',
    description: 'High-performance Go implementation of MCP protocol with zero dependencies.',
    type: 'server',
    category: 'server',
    sdkType: ['go'],
    stars: 409,
    rating: 4.7,
    reviewCount: 52,
    tags: ['go', 'performance', 'lightweight'],
    github: 'https://github.com/example/gomcp',
    createdAt: '2023-07-12',
    author: {
      name: 'GoMCP Team',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '7',
    name: 'MCP Auth',
    description: 'Authentication and authorization solution for MCP servers with JWT support.',
    type: 'client',
    category: 'security',
    sdkType: ['typescript', 'javascript', 'python'],
    stars: 287,
    rating: 4.4,
    reviewCount: 34,
    tags: ['authentication', 'jwt', 'security'],
    github: 'https://github.com/example/mcp-auth',
    createdAt: '2023-10-18',
    author: {
      name: 'Security Systems',
      avatar: '/placeholder.svg'
    }
  },
  {
    id: '8',
    name: 'MCP Cloud',
    description: 'Deploy MCP servers to major cloud providers with a single command.',
    type: 'server',
    category: 'cloud',
    sdkType: ['typescript', 'javascript'],
    stars: 321,
    rating: 4.6,
    reviewCount: 48,
    tags: ['cloud', 'aws', 'azure', 'gcp'],
    github: 'https://github.com/example/mcp-cloud',
    createdAt: '2023-11-05',
    author: {
      name: 'Cloud Deployment Team',
      avatar: '/placeholder.svg'
    }
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
  }
  // Additional servers can be added here following the same pattern
};
