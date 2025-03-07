import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { navItems } from './nav-items';
import CookieConsent from './components/CookieConsent';

function App() {
  const location = useLocation();

  return (
    <>
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