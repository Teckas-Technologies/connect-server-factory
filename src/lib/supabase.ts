import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


// Debug configuration
console.log('=== Supabase Configuration ===');
console.log('URL:', supabaseUrl);
console.log('Key length:', supabaseAnonKey.length);
console.log('============================');

// Create the client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
    storageKey: 'supabase.auth.token',
    flowType: 'implicit'
  }
});

// Test auth configuration
const testAuth = async () => {
  try {
    console.log('=== Testing Auth Configuration ===');
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Auth configuration error:', error);
    } else {
      console.log('Auth configuration successful');
      console.log('Current session:', data.session ? 'Active' : 'None');
    }
    console.log('===============================');
  } catch (error) {
    console.error('Auth test error:', error);
  }
};

// Run auth test
testAuth();

// Export session getter
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