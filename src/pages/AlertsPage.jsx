import React from "react";
import AlertsPanel from "../components/Dashboard/AlertsPanel";
import { useMicroservices } from "../hooks/useMicroservices";

const AlertsPage = () => {
  const { microservices } = useMicroservices();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Alertas</h1>
      <AlertsPanel microservices={microservices} />
    </div>
  );
};

export default AlertsPage;
