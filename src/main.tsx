import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

import "./styles/app.css";
import "./styles/reset.css";

const node = document.getElementById("root");
if (!node) throw new Error("Root element does not exist");

const root = createRoot(node);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
