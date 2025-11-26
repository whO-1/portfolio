import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="system">
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
