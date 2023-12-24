import { createRoot } from "react-dom/client";
import React from "react";
import App from "./app.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento raiz não encontrado no DOM.");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
