import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// Páginas separadas
import DashboardPage from "./pages/DashboardPage";
import MetricsPage from "./pages/MetricsPage";
import MicroservicesPage from "./pages/MicroservicesPage";
import AlertsPage from "./pages/AlertsPage";
import GraphPage from "./pages/GraphPage";


function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-24 px-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/metrics" element={<MetricsPage />} />
          <Route path="/microservices" element={<MicroservicesPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/graph" element={<GraphPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
