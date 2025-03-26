import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import Index from '@/pages/Index';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import ServerDetail from '@/pages/ServerDetail';
import Browse from '@/pages/Browse';
import Submit from '@/pages/Submit';
import Docs from '@/pages/Docs';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';
import NotFound from '@/pages/NotFound';
import AuthCallback from '@/pages/AuthCallback';
import EnvTest from '@/components/EnvTest';
import { SearchFocusProvider } from './contexts/SearchFocusContext';
const App = () => {
  return (
    <>
      <EnvTest />
      <Router>
        <AuthProvider>
        <SearchFocusProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/server/:id" element={<ServerDetail />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </SearchFocusProvider>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
