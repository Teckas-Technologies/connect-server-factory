import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), '');
  
  // Log environment loading in development
  if (mode === 'development') {
    console.log('Loading environment variables for mode:', mode);
    console.log('Supabase URL exists:', !!env.VITE_SUPABASE_URL);
    console.log('Supabase key exists:', !!env.VITE_SUPABASE_ANON_KEY);
  }

  return {
    base: "./",
    server: {
      host: "::",
      port: 8080,
      historyApiFallback: true
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Make env variables available
    define: {
      __SUPABASE_URL__: JSON.stringify(env.VITE_SUPABASE_URL),
      __SUPABASE_KEY__: JSON.stringify(env.VITE_SUPABASE_ANON_KEY),
    }
  };
});
