
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // When using Lovable preview, this component will render
    // but in production, Next.js will handle routing
    console.log('App mounted in Lovable preview');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Derbyshire Removals</h1>
      <p className="mb-6">
        This is a Next.js project being viewed in Lovable. The full site will be available when deployed.
      </p>
      <p>
        For development purposes, you can run the Next.js dev server separately with <code>npm run dev</code>.
      </p>
    </div>
  );
};

export default App;
