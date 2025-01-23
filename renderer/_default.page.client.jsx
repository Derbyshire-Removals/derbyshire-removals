import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import '../src/index.css';

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrate(
    <HashRouter>
      <Page {...pageProps} />
    </HashRouter>,
    document.getElementById('root')
  );
}