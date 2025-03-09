import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// This function is called on the browser to hydrate the page
export function render(pageContext) {
  const { urlPathname } = pageContext;
  const root = document.getElementById('root');

  // If the page was rendered on the server, hydrate it
  if (root.innerHTML.trim()) {
    ReactDOM.hydrateRoot(
      root,
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  } else {
    // Otherwise, create a new root
    ReactDOM.createRoot(root).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
