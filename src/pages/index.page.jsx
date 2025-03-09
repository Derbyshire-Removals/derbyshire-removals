
import React from 'react';
import { useSSRContext } from 'react';
import IndexPage from './Index';

export function Page() {
  return <IndexPage />;
}

// This tells vite-plugin-ssr that we have a page here
export const documentProps = {
  title: 'Derbyshire Removals - Professional Moving Services Since 1988',
  description: 'Trusted removal services across East & West Midlands. Family-run business since 1988 offering home removals, office relocations, packing & storage solutions. Free quotes available.'
};
