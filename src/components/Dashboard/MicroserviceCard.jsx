import React from "react";

const statusColor = (status) => {
  if (status === "online") return "bg-green-500";
  if (status === "offline") return "bg-red-500";
  return "bg-yellow-500";
};

const MicroserviceCard = ({ microservice }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-5 flex flex-col justify-between">
      
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          {microservice.name}
        </h2>
        <p className="text-sm text-gray-500 capitalize">
          {microservice.type}
        </p>
      </div>

      {/* Footer Metrics */}
      <div className="mt-5 flex justify-between items-center">
        {/* Estado con animación */}
        <span
          className={`w-3 h-3 rounded-full ${statusColor(
            microservice.status
          )} shadow-md animate-pulse`}
        ></span>

        {/* Métricas */}
        <div className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
          CPU: {microservice.cpu}% &nbsp;|&nbsp; 
          Mem: {microservice.memory}MB &nbsp;|&nbsp;
          Lat: {microservice.latency}ms
        </div>
      </div>
    </div>
  );
};

export default MicroserviceCard;
