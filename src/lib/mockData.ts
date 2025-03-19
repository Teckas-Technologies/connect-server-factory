
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
    name: 'TypeMCP Server',
    description: 'A high-performance TypeScript MCP server with built-in validation and type safety.',
    type: 'server',
    category: 'server',
    sdkType: ['typescript', 'javascript'],
    stars: 432,
    rating: 4.8,
    reviewCount: 64,
    tags: ['typescript', 'performance', 'validation'],
    github: 'https://github.com/example/typemcp-server',
    createdAt: '2023-09-15',
    author: {
      name: 'TypeMCP Team',
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
