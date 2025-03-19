
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { getServerById } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock setup instructions data - in a real app, this would come from an API or database
const serverSetupInstructions: Record<string, {
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
  "1": { // AWS KB Retrieval
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
  "2": { // Brave Search
    description: "An MCP server implementation for web and local search using Brave's Search API.",
    features: [
      "Web search: Search the web using Brave's Search API",
      "Local search: Perform local searches within your content"
    ],
    tools: [
      {
        name: "brave_search",
        description: "Perform web searches using Brave's Search API.",
        inputs: [
          { name: "query", type: "string", description: "The search query." },
          { name: "count", type: "number", description: "Number of results to retrieve (default: 5).", optional: true }
        ]
      }
    ],
    configuration: "## Setting up Brave Search API\n\n- Sign up for Brave Search API at https://brave.com/search/api/\n- Obtain your API key from the developer dashboard\n- Configure environment variables as shown in the examples below",
    usageExamples: {
      npx: `{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-brave-search"
      ],
      "env": {
        "BRAVE_API_KEY": "YOUR_BRAVE_API_KEY_HERE"
      }
    }
  }
}`
    },
    license: "This MCP server is licensed under the MIT License."
  }
  // Additional servers can be added here following the same pattern
};

const ServerSetup = () => {
  const { id } = useParams<{ id: string }>();
  const server = getServerById(id || '');
  const setupData = id ? serverSetupInstructions[id] : undefined;
  
  if (!server) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Server Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/browse">Browse All Servers</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <PageTransition>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-6"
            asChild
          >
            <Link to={`/server/${id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Server Details
            </Link>
          </Button>
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{server.name} Setup Guide</h1>
            <p className="text-muted-foreground">
              {setupData?.description || server.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {setupData ? (
                <>
                  {/* Features */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {setupData.features.map((feature, index) => (
                          <li key={index} className="text-muted-foreground">{feature}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  {/* Tools */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Tools</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {setupData.tools.map((tool, toolIndex) => (
                        <div key={toolIndex}>
                          <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                          <p className="mb-3 text-muted-foreground">{tool.description}</p>
                          
                          <div className="mb-2 font-medium">Inputs:</div>
                          <ul className="list-disc pl-5 mb-4 space-y-2">
                            {tool.inputs.map((input, inputIndex) => (
                              <li key={inputIndex} className="text-muted-foreground">
                                <span className="font-medium">{input.name}</span> ({input.type}
                                {input.optional ? ', optional' : ''}): {input.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  
                  {/* Configuration */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none dark:prose-invert">
                        <div dangerouslySetInnerHTML={{ __html: setupData.configuration.replace(/\n/g, '<br/>').replace(/##\s(.+)/g, '<h3>$1</h3>') }} />
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Usage Examples */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Usage with Claude Desktop</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue={Object.keys(setupData.usageExamples)[0]}>
                        <TabsList className="mb-4">
                          {setupData.usageExamples.docker && (
                            <TabsTrigger value="docker">Docker</TabsTrigger>
                          )}
                          {setupData.usageExamples.npx && (
                            <TabsTrigger value="npx">NPX</TabsTrigger>
                          )}
                          {setupData.usageExamples.pip && (
                            <TabsTrigger value="pip">PIP</TabsTrigger>
                          )}
                        </TabsList>
                        
                        {setupData.usageExamples.docker && (
                          <TabsContent value="docker">
                            <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-auto">
                              <pre className="whitespace-pre-wrap">{setupData.usageExamples.docker}</pre>
                            </div>
                          </TabsContent>
                        )}
                        
                        {setupData.usageExamples.npx && (
                          <TabsContent value="npx">
                            <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-auto">
                              <pre className="whitespace-pre-wrap">{setupData.usageExamples.npx}</pre>
                            </div>
                          </TabsContent>
                        )}
                        
                        {setupData.usageExamples.pip && (
                          <TabsContent value="pip">
                            <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-auto">
                              <pre className="whitespace-pre-wrap">{setupData.usageExamples.pip}</pre>
                            </div>
                          </TabsContent>
                        )}
                      </Tabs>
                    </CardContent>
                  </Card>
                  
                  {/* License */}
                  <Card>
                    <CardHeader>
                      <CardTitle>License</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{setupData.license}</p>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center p-8">
                      <h3 className="text-lg font-medium mb-2">Setup instructions not available</h3>
                      <p className="text-muted-foreground mb-4">
                        Detailed setup instructions for this server are still being developed.
                        Please check back later or contact the server author for more information.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link to={`/server/${id}`} className="text-primary hover:underline">
                        Server Overview
                      </Link>
                    </li>
                    {server.github && (
                      <li>
                        <a href={server.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          GitHub Repository
                        </a>
                      </li>
                    )}
                    <li>
                      <Link to="/browse" className="text-primary hover:underline">
                        Browse All Servers
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Having trouble setting up this MCP server? Visit the official documentation
                    or join the community for assistance.
                  </p>
                  <Button variant="outline" className="w-full mb-2" asChild>
                    <a href="https://modelcontextprotocol.io/docs" target="_blank" rel="noopener noreferrer">
                      Official Documentation
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://discord.gg/mcp-community" target="_blank" rel="noopener noreferrer">
                      Join MCP Community
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default ServerSetup;
