
import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { navItems } from './nav-items';
import CookieConsent from './components/CookieConsent';
import { Helmet } from 'react-helmet';

function App() {
  const location = useLocation();

  // Update page title and meta description based on current route
  useEffect(() => {
    const currentRoute = navItems.find(item => item.to === location.pathname);
    if (currentRoute) {
      document.title = `${currentRoute.title} - Derbyshire Removals`;
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {location.pathname === '/' && (
          <>
            <title>Derbyshire Removals - Professional Moving Services Since 1988</title>
            <meta 
              name="description" 
              content="Trusted removal services across East & West Midlands, including Derby, Matlock, Chesterfield, Ashbourne, Nottingham, Birmingham, Leicester, and surrounding areas." 
            />
          </>
        )}
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
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
