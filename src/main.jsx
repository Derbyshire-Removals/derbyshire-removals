
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Check if the app is being hydrated (client-side rendering after SSR)
const root = document.getElementById("root");

// Determine if we're hydrating or creating a new root
if (root.hasChildNodes()) {
  // Hydrate the app if it was pre-rendered
  ReactDOM.hydrateRoot(
    root,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  // Create a new root for client-side only rendering
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
