
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const page = pageRef.current;
    if (page) {
      page.style.opacity = '0';
      page.style.transform = 'translateY(8px)';
      
      // Trigger animation after a tiny delay to ensure DOM is ready
      setTimeout(() => {
        page.style.transition = 'opacity 400ms ease, transform 400ms ease';
        page.style.opacity = '1';
        page.style.transform = 'translateY(0)';
      }, 10);
    }
    
    return () => {
      if (page) {
        page.style.opacity = '0';
        page.style.transform = 'translateY(-8px)';
      }
    };
  }, [location.pathname]);
  
  return (
    <div ref={pageRef} className="w-full min-h-screen">
      {children}
    </div>
  );
};

export default PageTransition;
