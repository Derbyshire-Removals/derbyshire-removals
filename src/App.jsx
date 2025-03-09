
import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { navItems } from './nav-items';
import CookieConsent from './components/CookieConsent';

function App() {
  const location = useLocation();
  
  // Handle route changes for analytics and scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Log page view for analytics when in browser environment
    if (typeof window !== 'undefined') {
      console.log(`Page viewed: ${location.pathname}`);
    }
  }, [location]);

  return (
    <>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          {navItems.map((item, index) => (
            <Route key={index} path={item.to} element={item.page} />
          ))}
        </Routes>
      </Suspense>
      <CookieConsent />
    </>
  );
}

export default App;
