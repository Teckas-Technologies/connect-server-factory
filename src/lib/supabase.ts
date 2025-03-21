import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = 'https://xbkglfkyuxslvyuduyym.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug environment variables
console.log('=== Supabase Configuration ===');
console.log('URL:', supabaseUrl);
console.log('Raw key:', supabaseAnonKey); // Temporarily log the full key for debugging
console.log('============================');

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create the client with environment variables
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    debug: true,
    storage: window.localStorage,
    storageKey: 'supabase.auth.token'
  }
});

// Test the client configuration immediately
const testConnection = async () => {
  try {
    const { error } = await supabase.auth.getSession();
    if (error) {
      console.error('Supabase connection test failed:', error);
    } else {
      console.log('Supabase connection test successful');
    }
  } catch (error) {
    console.error('Supabase connection test error:', error);
  }
};

testConnection();

// Export a function to get the current session
export const getCurrentSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Get session error:', error);
      throw error;
    }
    return session;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
}; 