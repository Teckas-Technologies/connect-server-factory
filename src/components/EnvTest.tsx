import { useEffect } from 'react';

export const EnvTest = () => {
  useEffect(() => {
    console.log('=== Environment Test ===');
    console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
    console.log('SUPABASE_KEY exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
    console.log('=====================');
  }, []);

  return null;
};

export default EnvTest; 