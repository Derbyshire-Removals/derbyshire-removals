import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import '../src/index.css';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'documentProps'];

async function render(pageContext) {
  const { Page, pageProps, documentProps } = pageContext;
  
  const pageHtml = renderToString(
    <StaticRouter location={pageContext.urlPathname}>
      <Page {...pageProps} />
    </StaticRouter>
  );

  const { title, description } = documentProps || {};

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta name="description" content="${description}" />
        ${dangerouslySkipEscape(getAnalyticsScript())}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some custom data to be passed to the client
      pageProps
    }
  };
}

function getAnalyticsScript() {
  return `
    if (window.location.hostname === 'derbyshireremovals.com') {
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-TGVG5CNLD4';
      document.head.appendChild(gtagScript);

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-TGVG5CNLD4');
    } else {
      console.log('Google Analytics disabled in development');
    }
  `;
}