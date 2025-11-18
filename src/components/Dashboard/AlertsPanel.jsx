import React from "react";

const AlertsPanel = ({ microservices }) => {
  const alerts = microservices.flatMap(ms =>
    ms.alerts.map(alert => ({ service: ms.name, message: alert, status: ms.status }))
  );

  const getAlertStyle = (status) => {
    if (status === "offline") return {
      bg: "bg-red-900/20",
      border: "border-red-500/30",
      dot: "bg-red-500",
      dotShadow: "shadow-red-500/50",
      textTitle: "text-red-400",
      textMessage: "text-red-300/90",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    };
    return {
      bg: "bg-amber-900/20",
      border: "border-amber-500/30",
      dot: "bg-amber-500",
      dotShadow: "shadow-amber-500/50",
      textTitle: "text-amber-400",
      textMessage: "text-amber-300/90",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    };
  };

  // Contar alertas por tipo
  const criticalCount = alerts.filter(a => a.status === "offline").length;
  const warningCount = alerts.filter(a => a.status === "warning").length;

  return (
    <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl overflow-hidden transition-all hover:border-slate-600/50">
      
      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/60 to-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              System Alerts
            </h2>
          </div>
          
          {alerts.length > 0 && (
            <div className="flex items-center gap-2">
              {criticalCount > 0 && (
                <span className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-bold text-red-400">
                  {criticalCount} Critical
                </span>
              )}
              {warningCount > 0 && (
                <span className="px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs font-bold text-amber-400">
                  {warningCount} Warning
                </span>
              )}
            </div>
          )}
        </div>
        <p className="text-sm text-slate-400 mt-1">
          Real-time monitoring notifications
        </p>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 max-h-96 overflow-y-auto custom-scrollbar">
        {alerts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 px-4">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-emerald-400 font-semibold text-center mb-1">
              All Systems Operational
            </p>
            <p className="text-slate-400 text-sm text-center">
              No alerts — all microservices are stable
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {alerts.map((alert, idx) => {
              const style = getAlertStyle(alert.status);
              return (
                <li
                  key={idx}
                  className={`p-4 ${style.bg} border ${style.border} rounded-xl backdrop-blur-sm transition-all hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-3">
                    {/* Status Indicator */}
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-2.5 h-2.5 ${style.dot} rounded-full ${style.dotShadow} shadow-lg animate-pulse`}></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={style.textTitle}>
                          {style.icon}
                        </div>
                        <span className={`font-bold text-sm ${style.textTitle}`}>
                          {alert.service}
                        </span>
                        <span className="text-slate-500 text-xs">
                          • Just now
                        </span>
                      </div>
                      <p className={`text-sm ${style.textMessage} leading-relaxed`}>
                        {alert.message}
                      </p>
                    </div>

                    {/* Action Button */}
                    <button className="flex-shrink-0 p-1.5 hover:bg-slate-700/30 rounded-lg transition-colors">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Footer */}
      {alerts.length > 0 && (
        <div className="p-4 border-t border-slate-700/50 bg-slate-900/20">
          <button className="w-full py-2 px-4 bg-slate-700/50 hover:bg-slate-700/70 text-slate-300 rounded-lg text-sm font-medium transition-all hover:scale-[1.02]">
            View All Alerts ({alerts.length})
          </button>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(71, 85, 105, 0.7);
        }
      `}</style>
    </div>
  );
};

export default AlertsPanel;