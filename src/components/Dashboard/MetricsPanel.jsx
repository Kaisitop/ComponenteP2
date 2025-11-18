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
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MetricsPanel = ({ microservices = [] }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Response Time (ms)",
        data: [12, 19, 13, 15, 22, 30],
        borderWidth: 3,
        borderColor: "#60a5fa",
        backgroundColor: "rgba(96, 165, 250, 0.15)",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: "#60a5fa",
        pointBorderColor: "#1e40af",
        pointBorderWidth: 3,
        pointHoverBackgroundColor: "#93c5fd",
        pointHoverBorderColor: "#60a5fa",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          color: "#e0e7ff",
          font: { size: 11, weight: "600", family: "system-ui" },
          usePointStyle: true,
          pointStyle: "circle",
          padding: 15,
          boxWidth: 8,
          boxHeight: 8,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(30, 58, 138, 0.98)",
        titleColor: "#e0e7ff",
        bodyColor: "#bfdbfe",
        borderColor: "#60a5fa",
        borderWidth: 2,
        padding: 14,
        cornerRadius: 10,
        displayColors: true,
        titleFont: { size: 14, weight: "700" },
        bodyFont: { size: 13, weight: "500" },
        callbacks: {
          label: function(context) {
            return ` ${context.parsed.y} ms`;
          }
        }
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#93c5fd",
          font: { size: 11, weight: "600" },
          padding: 10,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#93c5fd",
          font: { size: 11, weight: "600" },
          padding: 12,
          callback: function(value) {
            return value + ' ms';
          }
        },
        grid: {
          color: "rgba(96, 165, 250, 0.1)",
          drawBorder: false,
          lineWidth: 1.5,
        },
        border: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  // Calcular estadísticas
  const avgValue = data.datasets[0].data.reduce((a, b) => a + b, 0) / data.datasets[0].data.length;
  const maxValue = Math.max(...data.datasets[0].data);
  const minValue = Math.min(...data.datasets[0].data);

  return (
    <div className="bg-gradient-to-br from-blue-950/40 to-slate-900/40 backdrop-blur-xl border border-blue-800/30 shadow-2xl shadow-blue-900/20 rounded-2xl overflow-hidden transition-all hover:border-blue-700/40 hover:shadow-blue-800/30">
      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-blue-800/30 bg-gradient-to-r from-blue-900/40 to-slate-900/40">
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 bg-blue-500/20 rounded-lg border border-blue-400/30">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-blue-100 tracking-tight">
            Performance Metrics
          </h2>
        </div>
        <p className="text-sm text-blue-300/70">
          Monthly response time trends
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 p-5 sm:p-6 border-b border-blue-800/20 bg-gradient-to-br from-blue-950/20 to-slate-950/20">
        <div className="text-center bg-blue-900/20 backdrop-blur-sm rounded-xl p-3 border border-blue-800/20">
          <p className="text-xs text-blue-300/70 mb-1.5 font-semibold uppercase tracking-wide">Average</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-200">
            {avgValue.toFixed(1)}
            <span className="text-xs text-blue-400/70 ml-1">ms</span>
          </p>
        </div>
        <div className="text-center bg-amber-900/20 backdrop-blur-sm rounded-xl p-3 border border-amber-800/20">
          <p className="text-xs text-amber-300/70 mb-1.5 font-semibold uppercase tracking-wide">Peak</p>
          <p className="text-xl sm:text-2xl font-bold text-amber-300">
            {maxValue}
            <span className="text-xs text-amber-400/70 ml-1">ms</span>
          </p>
        </div>
        <div className="text-center bg-emerald-900/20 backdrop-blur-sm rounded-xl p-3 border border-emerald-800/20">
          <p className="text-xs text-emerald-300/70 mb-1.5 font-semibold uppercase tracking-wide">Min</p>
          <p className="text-xl sm:text-2xl font-bold text-emerald-300">
            {minValue}
            <span className="text-xs text-emerald-400/70 ml-1">ms</span>
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="p-5 sm:p-6 bg-gradient-to-br from-blue-950/10 to-slate-950/10">
        <div className="h-56 sm:h-64 bg-blue-950/20 rounded-xl p-4 border border-blue-900/20">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;