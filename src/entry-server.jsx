
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

// This is used by vite-plugin-ssr to pre-render pages
export function render(pageContext) {
  const { urlPathname } = pageContext;
  
  const html = renderToString(
    <StaticRouter location={urlPathname}>
      <App />
    </StaticRouter>
  );
  
  return { documentHtml: html };
}

// Provide a default rendering function for pages
export const passToClient = ['pageProps', 'urlPathname'];
