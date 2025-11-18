import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MetricsPanel = () => {
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Ventas",
        data: [12, 19, 13, 15, 22, 30],
        borderWidth: 3,
        borderColor: "#3b82f6", // azul tailwind
        tension: 0.45,
        pointRadius: 4,
        pointBackgroundColor: "#1d4ed8",
        pointBorderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#334155", font: { size: 12, weight: "600" } },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        titleColor: "#fff",
        bodyColor: "#e2e8f0",
        borderColor: "#475569",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: "#475569" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#475569" },
        grid: { color: "#e2e8f0" },
      },
    },
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl rounded-2xl p-6 flex flex-col gap-6 transition-all hover:shadow-2xl">
      {/* Header */}
      <header className="space-y-1">
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">
          Métricas Mensuales
        </h2>
        <p className="text-sm text-slate-500">
          Visualización de tendencias de ventas
        </p>
      </header>

      {/* Chart */}
      <div className="h-64 pt-2">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MetricsPanel;
