import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider, Frame } from "@shopify/polaris";
import Dashboard from "./routes/Dashboard";
import Settings from "./routes/Settings";
import Help from "./routes/Help";
import Billing from "./routes/Billing";
import "@shopify/polaris/build/esm/styles.css";
import "./index.css";
import { TariffProvider } from "./contexts/TariffContext";

function AppLayout() {
  return (
    <Frame>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </Frame>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <TariffProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </TariffProvider>
    </AppProvider>
  </React.StrictMode>
);
