import { useState, useEffect } from "react";
import microservicesData from "../data/mockMicroservices.json";

export const useMicroservices = () => {
  const [microservices, setMicroservices] = useState([]);

  useEffect(() => {
    // Simula fetching desde un backend
    const fetchData = () => {
      setMicroservices(microservicesData);
    };
    fetchData();

    // Refresca métricas cada 5 segundos (simulado)
    const interval = setInterval(() => {
      const updatedData = microservicesData.map(ms => ({
        ...ms,
        cpu: Math.floor(Math.random() * 100),
        memory: ms.memory + Math.floor(Math.random() * 50),
        latency: Math.floor(Math.random() * 200)
      }));
      setMicroservices(updatedData);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { microservices };
};
