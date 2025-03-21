import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Submit = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-blue-50 to-white">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Sign in to Submit</CardTitle>
            <CardDescription>
              Please sign in to submit your MCP server or client
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/signin')} className="w-full">
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Submit Your Project</h1>
        <p className="text-muted-foreground mb-8">
          Share your MCP server or client with the community. Fill out the form below to get started.
        </p>
        {/* Add submission form here */}
      </div>
    </div>
  );
};

export default Submit; 