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

        // First check if we have a session already
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        console.log('Current session:', currentSession ? 'exists' : 'none');

        if (currentSession) {
          console.log('Already have a session, redirecting to home');
          window.location.href = '/';
          return;
        }

        // Check for hash fragment (implicit flow)
        const hashParams = new URLSearchParams(window.location.hash.replace('#', ''));
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');

        if (accessToken) {
          console.log('Found access token in hash, setting session...');
          const { data: { session }, error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken || undefined
          });

          if (sessionError) {
            console.error('Error setting session:', sessionError);
            throw sessionError;
          }

          if (session) {
            console.log('Session established from hash');
            window.location.href = '/';
            return;
          }
        }

        // If no hash tokens, try code exchange
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (!code) {
          console.error('No authentication data found');
          throw new Error('No authentication data found');
        }

        console.log('Found code, attempting exchange...');
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
        console.log('User:', data.session.user.email);
        window.location.href = '/';
      } catch (error) {
        console.error('=== Auth Callback Error ===');
        console.error('Error type:', error.constructor.name);
        console.error('Error message:', error.message);
        console.error('Stack:', error.stack);
        console.error('==========================');
        
        // Add a delay to ensure logs are visible
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