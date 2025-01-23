import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import '../src/index.css';

export { render };

async function render(pageContext) {
  const { pageProps } = pageContext;
  console.log('Client-side hydration starting');
  
  const root = document.getElementById('root');
  if (!root) {
    console.error('Root element not found');
    return;
  }

  if (root.hasChildNodes()) {
    console.log('Hydrating existing content');
    ReactDOM.hydrate(
      <BrowserRouter>
        <App {...pageProps} />
      </BrowserRouter>,
      root
    );
  } else {
    console.log('Creating new root for client-side rendering');
    ReactDOM.createRoot(root).render(
      <BrowserRouter>
        <App {...pageProps} />
      </BrowserRouter>
    );
  }
  
  console.log('Client-side rendering/hydration complete');
}