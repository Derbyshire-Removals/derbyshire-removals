import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Only create root if we're not hydrating
if (!document.getElementById('root').hasChildNodes()) {
  console.log('Creating new root for client-side rendering');
  ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.log('Skipping client-side render as content exists (handled by vite-plugin-ssr)');
}