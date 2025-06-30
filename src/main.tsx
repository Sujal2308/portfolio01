import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";

import { DotPattern } from "./components/magicui/dot-pattern.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DotPattern
        width={30}
        height={30}
        className="opacity-50 dark:opacity-20"
      />
      <App />
    </ThemeProvider>
  </StrictMode>
);
