/**
 * frontend/src/main.jsx
 * Punto de entrada de la aplicación que renderiza el componente raíz.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
