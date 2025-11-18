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
      const updatedData = microservicesData.map(ms => {
        if (ms.status === "online") {
          // Solo actualiza métricas si está online
          return {
            ...ms,
            cpu: Math.floor(Math.random() * 100),
            memory: ms.memory + Math.floor(Math.random() * 50),
            latency: Math.floor(Math.random() * 200)
          };
        } else {
          // Si está offline, no se generan métricas aleatorias
          return {
            ...ms,
            cpu: 0,
            memory: 0,
            latency: 0
          };
        }
      });
      setMicroservices(updatedData);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { microservices };
};
