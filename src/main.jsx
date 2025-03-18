import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { TranslationContextProvider } from "./context/TranslationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <TranslationContextProvider>

      <App />
      </TranslationContextProvider>
    </I18nextProvider>
  </StrictMode>
);
