import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/app.css";
import "./styles/reset.css";
import { App } from "@/app";

const node = document.getElementById("root");
if (!node) throw new Error("Root element does not exist");

const root = createRoot(node);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
