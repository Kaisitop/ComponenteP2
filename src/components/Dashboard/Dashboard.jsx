import React from "react";
import MicroserviceCard from "./MicroserviceCard";
import MetricsPanel from "./MetricsPanel";
import AlertsPanel from "./AlertsPanel";
import DataFlowGraph from "./DataFlowGraph";
import { useMicroservices } from "../../hooks/useMicroservices";

const Dashboard = () => {
  const { microservices } = useMicroservices();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          IoT Microservices Dashboard
        </h1>
        <p className="text-gray-600 mt-1 text-lg">
          Real-time orchestration · Observability · System Health
        </p>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Microservice Cards - ocupa 3 columnas */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {microservices.map(ms => (
            <MicroserviceCard key={ms.id} microservice={ms} />
          ))}
        </div>

        {/* Right column: Metrics + Alerts */}
        <div className="lg:col-span-1 space-y-6">
          <MetricsPanel microservices={microservices} />
          <AlertsPanel microservices={microservices} />
        </div>
      </div>

      {/* Graph Section */}
      <section className="mt-10 bg-white/70 backdrop-blur-xl border border-gray-300 shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Flow Map</h2>
        <p className="text-gray-600 mb-4">Visual representation of microservice interactions</p>
        
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-inner">
          <DataFlowGraph microservices={microservices} />
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
