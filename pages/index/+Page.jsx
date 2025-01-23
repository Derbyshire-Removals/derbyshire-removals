import React from 'react';
import Index from '../../src/pages/Index';

export function Page() {
  console.log('Rendering Index page component');
  return <Index />;
}

// This will be called at build time to generate the static page
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