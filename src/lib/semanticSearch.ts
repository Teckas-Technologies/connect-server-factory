
// Simple vector operations for semantic search without external dependencies

// Convert text to a mock vector embedding
export function textToEmbedding(text: string): number[] {
  // This is a simplified mock implementation
  // In a real implementation, you'd use a proper embedding model
  const hash = simpleHash(text.toLowerCase());
  const dimension = 8; // Small dimension for demonstration
  
  // Generate a deterministic vector based on the hash
  const vector: number[] = [];
  for (let i = 0; i < dimension; i++) {
    // Use different bit shifts to get different values
    vector.push((hash >> (i * 3)) & 0xFF);
  }
  
  // Normalize the vector
  const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
  return vector.map(val => val / magnitude);
}

// Calculate cosine similarity between two vectors
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same dimension');
  }
  
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    magnitudeA += a[i] * a[i];
    magnitudeB += b[i] * b[i];
  }
  
  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);
  
  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0;
  }
  
  return dotProduct / (magnitudeA * magnitudeB);
}

// Simple hash function for text
function simpleHash(text: string): number {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Search servers by semantic similarity
export function semanticSearch(query: string, servers: any[], threshold = 0.5): any[] {
  const queryEmbedding = textToEmbedding(query);
  
  // For each server, calculate the similarity with the query
  const results = servers.map(server => {
    // In a real application, you'd have pre-computed embeddings
    // Here we generate on-the-fly for demonstration
    const serverText = `${server.name} ${server.description} ${server.tags.join(' ')}`;
    const serverEmbedding = server.embeddings || textToEmbedding(serverText);
    
    const similarity = cosineSimilarity(queryEmbedding, serverEmbedding);
    
    return {
      server,
      similarity
    };
  });
  
  // Filter by threshold and sort by similarity (highest first)
  return results
    .filter(result => result.similarity >= threshold)
    .sort((a, b) => b.similarity - a.similarity)
    .map(result => ({
      ...result.server,
      relevanceScore: result.similarity
    }));
}

// Pre-compute embeddings for all servers
export function precomputeEmbeddings(servers: any[]): any[] {
  return servers.map(server => {
    const serverText = `${server.name} ${server.description} ${server.tags.join(' ')}`;
    const embeddings = textToEmbedding(serverText);
    
    return {
      ...server,
      embeddings
    };
  });
}
