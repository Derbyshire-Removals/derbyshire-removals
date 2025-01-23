import React from 'react';
import Index from '../../src/pages/Index';

// Export everything at the top
export { Page, onBeforeRender, passToClient };

// Define constants
const passToClient = ['pageProps'];

// Component definition
function Page(pageProps) {
  console.log('Rendering Index page component');
  return <Index {...pageProps} />;
}

// Static generation function
async function onBeforeRender() {
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