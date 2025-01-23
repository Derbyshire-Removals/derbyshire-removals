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

  ReactDOM.hydrate(
    <BrowserRouter>
      <App {...pageProps} />
    </BrowserRouter>,
    root
  );
  
  console.log('Client-side hydration complete');
}