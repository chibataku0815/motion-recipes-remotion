import type { ReactElement } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import "./styles.css";
import { LocaleProvider } from "./i18n";
import { ThemeProvider } from "./theme";

export const renderPage = (node: ReactElement) => {
  const root = document.getElementById("app");

  if (!root) {
    throw new Error("Missing #app root");
  }

  createRoot(root).render(
    <ThemeProvider>
      <LocaleProvider>{node}</LocaleProvider>
    </ThemeProvider>,
  );
};
