import React, { useState } from "react";
import MicroserviceCard from "../components/Dashboard/MicroserviceCard";
import { useMicroservices } from "../hooks/useMicroservices";

const MicroservicesPage = () => {
  const { microservices } = useMicroservices();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar microservicios
  const filteredMicroservices = microservices.filter(ms => {
    const matchesFilter = filter === "all" || ms.status === filter;
    const matchesSearch = ms.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ms.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Contar por estado
  const statusCounts = {
    all: microservices.length,
    online: microservices.filter(ms => ms.status === "online").length,
    offline: microservices.filter(ms => ms.status === "offline").length,
    warning: microservices.filter(ms => ms.status === "warning").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        
        {/* Header Section */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg shadow-blue-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Microservices
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                  Manage and monitor all services
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-72">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
          </div>

          {/* Filter Tabs & Stats */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                filter === "all"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-slate-600/50"
              }`}
            >
              All
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                {statusCounts.all}
              </span>
            </button>

            <button
              onClick={() => setFilter("online")}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                filter === "online"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                  : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-slate-600/50"
              }`}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
              Online
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                {statusCounts.online}
              </span>
            </button>

            <button
              onClick={() => setFilter("warning")}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                filter === "warning"
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                  : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-slate-600/50"
              }`}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-2"></span>
              Warning
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                {statusCounts.warning}
              </span>
            </button>

            <button
              onClick={() => setFilter("offline")}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                filter === "offline"
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                  : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-slate-600/50"
              }`}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-red-400 mr-2"></span>
              Offline
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                {statusCounts.offline}
              </span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        {filteredMicroservices.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-12 text-center max-w-md">
              <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
              <p className="text-slate-400">
                {searchTerm 
                  ? `No services match "${searchTerm}"`
                  : "No microservices available at the moment"}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredMicroservices.map((ms) => (
              <MicroserviceCard key={ms.id} microservice={ms} />
            ))}
          </div>
        )}

        {/* Footer Info */}
        {filteredMicroservices.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Showing {filteredMicroservices.length} of {microservices.length} services
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MicroservicesPage;