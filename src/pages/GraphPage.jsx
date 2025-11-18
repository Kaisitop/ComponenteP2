import React from "react";
import DataFlowGraph from "../components/Dashboard/DataFlowGraph";
import { useMicroservices } from "../hooks/useMicroservices";

const GraphPage = () => {
  const { microservices } = useMicroservices();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Flujo de Datos</h1>
      <div className="bg-white/70 backdrop-blur-xl border border-gray-300 shadow-xl rounded-2xl p-6">
        <DataFlowGraph microservices={microservices} />
      </div>
    </div>
  );
};

export default GraphPage;
