import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { HeadProvider } from "./lib/seo";
import "./index.css";

const container = document.getElementById("root")!;

const app = (
  <StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </StrictMode>
);

// Pages are prerendered at build time (scripts/prerender.mjs); hydrate them.
if (container.firstElementChild && !container.hasAttribute("data-fallback")) hydrateRoot(container, app);
else {
  container.innerHTML = "";
  createRoot(container).render(app);
}
