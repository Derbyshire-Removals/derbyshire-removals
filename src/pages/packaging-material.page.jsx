
import React from 'react';
import PackagingMaterialPage from './PackagingMaterial';

export function Page() {
  return <PackagingMaterialPage />;
}

// This tells vite-plugin-ssr that we have a page here
export const documentProps = {
  title: 'Professional Packing Materials Derby | Derbyshire Removals',
  description: 'High-quality packing materials available in Derby. Boxes, bubble wrap, tape, and more for secure packing. Competitive prices and eco-friendly options available.'
};
