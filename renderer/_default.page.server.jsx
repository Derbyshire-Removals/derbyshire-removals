import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import App from '../src/App';
import '../src/index.css';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'documentProps'];

async function render(pageContext) {
  const { pageProps, documentProps } = pageContext;
  
  const pageHtml = renderToString(
    <StaticRouter location={pageContext.urlPathname}>
      <App />
    </StaticRouter>
  );

  const { title, description } = documentProps || {};
  console.log('Rendering page with title:', title);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      pageProps
    }
  };
}