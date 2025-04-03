
export interface User {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
  bio?: string;
  created_at: string;
  role: 'user' | 'admin' | 'moderator';
}

export interface ServerClient {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  category: string; 
  type: 'server' | 'client';
  tags: string[];
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  github?: string;
  website?: string;
  documentation?: string;
  version?: string;
  created_at: string;
  updated_at: string;
  featured?: boolean;
  verified?: boolean;
  hosted: boolean;
  stars?: number;
  downloads?: number;
  deployment_url?: string;
  embeddings?: number[];
}

export interface Review {
  id: string;
  server_id: string;
  user_id: string;
  user: {
    name: string;
    avatar_url?: string;
  };
  rating: number;
  comment: string;
  created_at: string;
}

export interface FeatureRequest {
  id: string;
  title: string;
  description: string;
  category: string;
  user_id: string;
  user: {
    name: string;
    avatar_url?: string;
  };
  status: 'pending' | 'under-review' | 'planned' | 'in-progress' | 'completed' | 'declined';
  votes: number;
  created_at: string;
  updated_at: string;
  tags: string[];
}

export interface ServerRemix {
  id: string;
  name: string;
  description: string;
  creator_id: string;
  creator: {
    name: string;
    avatar_url?: string;
  };
  servers: string[]; // Array of server IDs that are part of this remix
  configuration: Record<string, any>; // Configuration settings for the remix
  created_at: string;
  updated_at: string;
  public: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: any;
}

export interface ServerConfiguration {
  envVars?: Record<string, string>;
  apiLimits?: {
    rateLimit: number;
    dailyLimit: number;
  };
  authorization?: {
    type: 'api_key' | 'oauth' | 'none';
    scopes?: string[];
  };
  timeout?: number;
}

export interface APIResponse<T> {
  data?: T;
  error?: string;
  meta?: {
    page?: number;
    total?: number;
    limit?: number;
  }
}
