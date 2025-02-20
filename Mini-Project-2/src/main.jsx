import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import {ErrorBoundary} from "react-error-boundary"
import AppRoutes from "./Routes/AppRoutes.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <ErrorBoundary> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ErrorBoundary> */}
  </StrictMode>
);
