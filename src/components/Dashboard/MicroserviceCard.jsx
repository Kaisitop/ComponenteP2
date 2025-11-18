import React from "react";

const statusConfig = {
  online: {
    color: "bg-emerald-500",
    glow: "shadow-emerald-500/50",
    text: "Online",
    textColor: "text-emerald-400",
    border: "border-emerald-500/30",
  },
  offline: {
    color: "bg-red-500",
    glow: "shadow-red-500/50",
    text: "Offline",
    textColor: "text-red-400",
    border: "border-red-500/30",
  },
  warning: {
    color: "bg-amber-500",
    glow: "shadow-amber-500/50",
    text: "Warning",
    textColor: "text-amber-400",
    border: "border-amber-500/30",
  },
};

const MicroserviceCard = ({ microservice }) => {
  const status = statusConfig[microservice.status] || statusConfig.warning;

  return (
    <div className="group bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-xl hover:shadow-2xl hover:border-slate-600/50 transition-all duration-300 rounded-2xl overflow-hidden">
      
      {/* Status Bar */}
      <div className={`h-1 bg-gradient-to-r ${
        microservice.status === 'online' 
          ? 'from-emerald-500 to-emerald-400' 
          : microservice.status === 'offline'
          ? 'from-red-500 to-red-400'
          : 'from-amber-500 to-amber-400'
      }`}></div>

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 bg-slate-700/50 rounded-lg">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                {microservice.name}
              </h2>
            </div>
            <p className="text-xs text-slate-400 capitalize font-medium ml-9">
              {microservice.type}
            </p>
          </div>

          {/* Status Badge */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/50 border ${status.border}`}>
            <span className={`w-2 h-2 rounded-full ${status.color} ${status.glow} shadow-lg animate-pulse`}></span>
            <span className={`text-xs font-semibold ${status.textColor}`}>
              {status.text}
            </span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {/* CPU */}
          <div className="bg-slate-900/40 rounded-lg p-2.5 border border-slate-700/30 hover:border-slate-600/50 transition-colors">
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <span className="text-xs text-slate-400 font-medium">CPU</span>
            </div>
            <p className="text-sm font-bold text-white">
              {microservice.cpu}
              <span className="text-xs text-slate-400 ml-0.5">%</span>
            </p>
          </div>

          {/* Memory */}
          <div className="bg-slate-900/40 rounded-lg p-2.5 border border-slate-700/30 hover:border-slate-600/50 transition-colors">
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-xs text-slate-400 font-medium">RAM</span>
            </div>
            <p className="text-sm font-bold text-white">
              {microservice.memory}
              <span className="text-xs text-slate-400 ml-0.5">MB</span>
            </p>
          </div>

          {/* Latency */}
          <div className="bg-slate-900/40 rounded-lg p-2.5 border border-slate-700/30 hover:border-slate-600/50 transition-colors">
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs text-slate-400 font-medium">LAT</span>
            </div>
            <p className="text-sm font-bold text-white">
              {microservice.latency}
              <span className="text-xs text-slate-400 ml-0.5">ms</span>
            </p>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="mt-4 space-y-2">
          {/* CPU Progress */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">CPU Usage</span>
              <span className="text-slate-300 font-medium">{microservice.cpu}%</span>
            </div>
            <div className="h-1.5 bg-slate-900/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${microservice.cpu}%` }}
              ></div>
            </div>
          </div>

          {/* Memory Progress */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Memory Usage</span>
              <span className="text-slate-300 font-medium">{microservice.memory}MB</span>
            </div>
            <div className="h-1.5 bg-slate-900/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${(microservice.memory / 512) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroserviceCard;