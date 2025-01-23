import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import '../src/index.css';

export { render };

async function render(pageContext) {
  const { pageProps } = pageContext;
  console.log('Hydrating app on client');
  
  ReactDOM.hydrate(
    <BrowserRouter>
      <App {...pageProps} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}