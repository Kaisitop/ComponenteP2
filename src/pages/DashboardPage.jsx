import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
