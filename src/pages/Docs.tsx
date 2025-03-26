import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";
const Docs = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
      <Button
          variant="ghost"
          size="sm"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold mb-4">Documentation</h1>
        <p className="text-muted-foreground mb-8">
          Learn how to use MCP and integrate it into your projects
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Learn the basics of MCP and how to set up your first project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Installation Guide</li>
                <li>• Basic Configuration</li>
                <li>• First Steps</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>
                Detailed documentation of MCP's API and features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Core API</li>
                <li>• Server Integration</li>
                <li>• Client Integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>
                Learn how to use MCP effectively in your projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Security Guidelines</li>
                <li>• Performance Optimization</li>
                <li>• Error Handling</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Examples</CardTitle>
              <CardDescription>
                Real-world examples and use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Basic Implementation</li>
                <li>• Advanced Features</li>
                <li>• Integration Examples</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Docs; 