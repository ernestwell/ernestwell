import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./auth.jsx"; // Ensure correct path

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider> {/* Wrap the entire app */}
      <App />
    </AuthProvider>
  </StrictMode>
);
