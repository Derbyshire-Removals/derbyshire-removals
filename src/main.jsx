import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const container = document.getElementById("root");

if (container.hasChildNodes()) {
  // If we're hydrating server-rendered content
  ReactDOM.hydrateRoot(
    container,
    <HashRouter>
      <App />
    </HashRouter>
  );
} else {
  // Regular client-side rendering
  ReactDOM.createRoot(container).render(
    <HashRouter>
      <App />
    </HashRouter>
  );
}