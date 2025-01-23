import React from 'react';
import Index from '../../src/pages/Index';

export { Page };

function Page(pageProps) {
  console.log('Rendering Index page');
  return <Index {...pageProps} />;
}

// Pre-render every page at build time
export const passToClient = ['pageProps'];

export async function onBeforeRender() {
  console.log('Pre-rendering index page');
  return {
    pageContext: {
      pageProps: {},
      documentProps: {
        title: 'Derbyshire Removals - Professional Moving Services Since 1988',
        description: 'Trusted removal services across East & West Midlands. Family-run business since 1988 offering home removals, office relocations, packing & storage solutions.'
      }
    }
  };
}