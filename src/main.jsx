
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Use hydrate if the app was pre-rendered, otherwise use render
const rootElement = document.getElementById("root");

// Check if the app was pre-rendered
const hasPreRenderedContent = rootElement.hasChildNodes();

ReactDOM.createRoot(rootElement)[hasPreRenderedContent ? "hydrate" : "render"](
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
