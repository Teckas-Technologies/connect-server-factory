import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const updateUserState = (session: any) => {
    if (session?.user) {
      console.log('Setting user state:', {
        id: session.user.id,
        email: session.user.email,
        metadata: session.user.user_metadata
      });
      
      const userData = {
        id: session.user.id,
        email: session.user.email!,
        name: session.user.user_metadata.full_name || 
              session.user.user_metadata.name || 
              session.user.user_metadata.user_name ||
              session.user.email!.split('@')[0],
        avatar_url: session.user.user_metadata.avatar_url,
      };

      console.log('Updated user data:', userData);
      setUser(userData);
      setLoading(false);
    } else {
      console.log('Clearing user state');
      setUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const setupAuth = async () => {
      try {
        // Check for existing session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;
        
        console.log('Initial session check:', session ? 'Session found' : 'No session');
        if (session) {
          console.log('Initial session details:', {
            user: session.user,
            expires_at: session.expires_at
          });
        }
        updateUserState(session);

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
          console.log('Auth state changed:', event, session ? 'Session exists' : 'No session');
          if (session) {
            console.log('New session details:', {
              user: session.user,
              expires_at: session.expires_at
            });
          }
          updateUserState(session);

          // If signed in, ensure we're not on the signin page
          if (session && window.location.pathname === '/signin') {
            window.location.href = '/';
          }
        });

        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Auth setup error:', error);
        setLoading(false);
      }
    };

    setupAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during sign in');
      throw err;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      setError(null);
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during sign up');
      throw err;
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      // Clear any local state
      setUser(null);
      // Force reload to clear everything
      window.location.href = '/signin';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during sign out');
      throw err;
    }
  };

  const signInWithGithub = async () => {
    try {
      setError(null);
      console.log('Starting GitHub sign in...');
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: 'https://xbkglfkyuxslvyuduyym.supabase.co/auth/v1/callback',
          skipBrowserRedirect: false
        }
      });

      if (error) {
        console.error('GitHub OAuth error:', error);
        throw error;
      }

      console.log('OAuth flow initiated:', data);
    } catch (err) {
      console.error('GitHub sign in error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during GitHub sign in');
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        signIn,
        signUp,
        signOut,
        signInWithGithub,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 