
import React from 'react';
import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';

// This function is called for every page to generate the HTML
export function render(pageContext) {
  const { urlPathname, documentProps } = pageContext;
  const title = documentProps?.title || 'Derbyshire Removals';
  const description = documentProps?.description || 'Professional removal services in Derbyshire';

  // Render the React app
  const pageHtml = renderToString(
    <StaticRouter location={urlPathname}>
      <App />
    </StaticRouter>
  );

  // Create the HTML document
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // The page context is passed to the browser
      // to be eventually hydrated by the client
      urlPathname,
      documentProps
    }
  };
}

// We pass these to the frontend
export const passToClient = ['pageProps', 'documentProps', 'urlPathname'];
