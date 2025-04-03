
import React from 'react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServerSubmissionForm from '@/components/ServerSubmissionForm';

const Submit = () => {
  return (
    <PageTransition>
      <Navbar />
      
      <main className="min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Submit Your MCP Server</h1>
          <p className="text-muted-foreground text-lg">
            Share your MCP server or client with the community and have it hosted on our network
          </p>
        </div>
        
        <ServerSubmissionForm />
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Submit;
