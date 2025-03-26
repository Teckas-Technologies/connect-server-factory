import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-blue-50 to-white">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Sign in to Submit
            </CardTitle>
            <CardDescription>
              Please sign in to submit your MCP server or client
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/signin")} className="w-full">
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-3xl mx-auto">
      <Button
          variant="ghost"
          size="sm"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        {/* Coming Soon Banner with Smooth Marquee */}
        <div className="overflow-hidden whitespace-nowrap bg-blue-100 text-blue-800 font-medium text-sm py-2 px-4 rounded mb-6 shadow">
          <div className="inline-block animate-marquee">
            🚧 Coming Soon — Submission functionality will be available shortly!
            Stay tuned. 🚀
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Submit Your Project
        </h1>
        <p className="text-gray-600 mb-8">
          Share your MCP server or client with the community. Fill out the form
          below to get started.
        </p>

        {/* Add submission form here */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-center text-gray-500 font-medium">Form coming soon...</p>
        </div>
      </div>

      {/* Custom Marquee Animation */}
      <style>
        {`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    `}
      </style>
    </div>
  );
};

export default Submit;
