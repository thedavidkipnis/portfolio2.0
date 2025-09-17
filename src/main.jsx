import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { ContentProvider } from "./context/ContentProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ContentProvider>
      <App />
    </ContentProvider>
  </ThemeProvider>,
);
