import React from "react";
import MicroserviceCard from "./MicroserviceCard";
import MetricsPanel from "./MetricsPanel";
import AlertsPanel from "./AlertsPanel";
import DataFlowGraph from "./DataFlowGraph";
import { useMicroservices } from "../../hooks/useMicroservices";

const Dashboard = () => {
  const { microservices } = useMicroservices();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        
        {/* Header Section */}
        <header className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg shadow-blue-500/30">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7h16M4 7l4-4m12 4l-4-4M8 11h8M8 15h8" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                IoT Microservices
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-emerald-400 font-medium">Live</span>
                </div>
                <span className="text-slate-400 text-sm">·</span>
                <span className="text-slate-400 text-sm">Real-time Orchestration Platform</span>
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 sm:p-4">
              <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-1">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Active Services</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white">{microservices.length}</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 sm:p-4">
              <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-1">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Uptime</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-emerald-400">99.8%</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 sm:p-4">
              <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-1">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Total Requests</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-blue-400">1.2M</p>
            </div>
          </div>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Microservices Grid - 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {microservices.map(ms => (
              <MicroserviceCard key={ms.id} microservice={ms} />
            ))}
          </div>

          {/* Sidebar - Metrics & Alerts */}
          <div className="lg:col-span-1 space-y-6">
            <MetricsPanel microservices={microservices} />
            <AlertsPanel microservices={microservices} />
          </div>
        </div>

        {/* Data Flow Section */}
        <section className="mt-8 sm:mt-10">
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
            {/* Section Header */}
            <div className="p-4 sm:p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/60 to-slate-800/30">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Data Flow Architecture
              </h2>
              <p className="text-slate-400 text-sm">
                Interactive map of microservice communication and dependencies
              </p>
            </div>
            
            {/* Graph Container */}
            <div className="p-4 sm:p-6 bg-slate-900/30">
              <div className="rounded-xl overflow-hidden border border-slate-700/50 shadow-inner bg-slate-950/50">
                <DataFlowGraph microservices={microservices} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-slate-500 text-sm">
          <p>IoT Microservices Platform · Powered by Real-time Monitoring</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;