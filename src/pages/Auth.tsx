
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AuthForms from '@/components/AuthForms';
import PageTransition from '@/components/PageTransition';

const Auth = () => {
  return (
    <PageTransition>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex min-h-[calc(100vh-200px)]">
            <div className="flex-1 hidden lg:block bg-primary/5 rounded-l-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="max-w-lg">
                  <div className="text-lg font-medium mb-2">MCP Marketplace</div>
                  <h1 className="text-3xl font-bold mb-4">Join the MCP community</h1>
                  <p className="text-muted-foreground mb-6">
                    Access your account to discover, rate, and submit MCP servers and clients. 
                    Collaborate with other developers and take your projects to the next level.
                  </p>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-0.5">
                        <div className="size-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-medium text-xs">1</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Discover MCP Servers & Clients</h3>
                        <p className="text-muted-foreground">
                          Browse and search through a comprehensive marketplace of MCP implementations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-0.5">
                        <div className="size-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-medium text-xs">2</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Share Your Creations</h3>
                        <p className="text-muted-foreground">
                          Submit your own MCP servers and clients to the marketplace for others to use.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-0.5">
                        <div className="size-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-medium text-xs">3</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Connect With Community</h3>
                        <p className="text-muted-foreground">
                          Rate, review, and discuss MCP implementations with other developers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-white rounded-xl lg:rounded-l-none rounded-r-xl flex items-center justify-center p-6">
              <AuthForms />
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Auth;
