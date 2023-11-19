import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CommissionerProvider } from "./pages/CommissionerHome/hooks/CommissionerContext";
import { DocumentDisplayProvider } from "./pages/DocumentsDisplayContainer/hooks/DocumentDisplayContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CommissionerProvider>
        <DocumentDisplayProvider>
          <App />
        </DocumentDisplayProvider>
      </CommissionerProvider>
    </Router>
  </React.StrictMode>
);
