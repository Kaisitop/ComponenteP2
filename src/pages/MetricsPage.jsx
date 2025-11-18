import React from "react";
import MetricsPanel from "../components/Dashboard/MetricsPanel";

const MetricsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Métricas</h1>
      <MetricsPanel />
    </div>
  );
};

export default MetricsPage;
