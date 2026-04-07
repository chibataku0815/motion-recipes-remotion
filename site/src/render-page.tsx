import type { ReactElement } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

export const renderPage = (node: ReactElement) => {
  const root = document.getElementById("app");

  if (!root) {
    throw new Error("Missing #app root");
  }

  createRoot(root).render(node);
};
