import React from "react";

const AlertsPanel = ({ microservices }) => {
  const alerts = microservices.flatMap(ms =>
    ms.alerts.map(alert => ({ service: ms.name, message: alert }))
  );

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl p-6 transition hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-5 text-gray-800 tracking-tight">
        🔥 System Alerts
      </h2>

      {alerts.length === 0 ? (
        <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 font-medium text-center">
          No alerts — all microservices are stable.
        </div>
      ) : (
        <ul className="space-y-3">
          {alerts.map((alert, idx) => (
            <li
              key={idx}
              className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 shadow-sm"
            >
              <div className="w-3 h-3 bg-red-500 rounded-full mt-1 animate-pulse"></div>

              <div>
                <span className="font-semibold text-red-700">{alert.service}</span>
                <p className="text-red-600">{alert.message}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlertsPanel;
