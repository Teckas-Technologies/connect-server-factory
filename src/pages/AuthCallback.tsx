import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log('=== Auth Callback Started ===');
        const currentUrl = window.location.href;
        console.log('Current URL:', currentUrl);
        
        // Get the code from the URL
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        
        if (!code) {
          console.error('No code found in URL');
          throw new Error('No code found in URL');
        }

        console.log('Found code:', code);

        // Try to get the current session first
        try {
          const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession();
          console.log('Current session check:', sessionError ? 'Error' : (currentSession ? 'Has session' : 'No session'));
          if (sessionError) {
            console.error('Session check error:', sessionError);
          }
        } catch (sessionError) {
          console.error('Failed to check current session:', sessionError);
        }

        // Exchange the code
        console.log('Attempting code exchange...');
        try {
          const { data, error } = await supabase.auth.exchangeCodeForSession(code);
          
          if (error) {
            console.error('Code exchange error:', error);
            throw error;
          }

          if (!data?.session) {
            console.error('No session in exchange response');
            throw new Error('No session received');
          }

          console.log('Session established successfully');
          console.log('Session info:', {
            userId: data.session.user.id,
            expiresAt: data.session.expires_at
          });
          
          // Force a full page reload to ensure fresh state
          window.location.href = '/';
          return;
        } catch (exchangeError) {
          console.error('Code exchange failed:', exchangeError);
          throw exchangeError;
        }
      } catch (error) {
        console.error('=== Auth Callback Error ===');
        console.error('Error type:', error.constructor.name);
        console.error('Error message:', error.message);
        console.error('Full error:', error);
        console.error('==========================');
        
        // Add a small delay to ensure logs are visible
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigate('/signin', { replace: true });
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Completing sign in...</h2>
        <p className="text-muted-foreground">Please wait while we redirect you.</p>
        <div className="mt-4 text-sm text-muted-foreground animate-pulse">
          Setting up your session...
        </div>
      </div>
    </div>
  );
};

export default AuthCallback; 