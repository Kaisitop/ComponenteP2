import React from "react";
import MicroserviceCard from "./MicroserviceCard";
import { useMicroservices } from "../../hooks/useMicroservices";

const MicroservicesPage = () => {
  const { microservices } = useMicroservices();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Microservicios</h1>

      {microservices.length === 0 ? (
        <p className="text-gray-500">No hay microservicios disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {microservices.map((ms) => (
            <MicroserviceCard key={ms.id} microservice={ms} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MicroservicesPage;
