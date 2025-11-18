import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800 tracking-tight">IoT Dashboard</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-blue-600 transition-all">Dashboard</Link></li>
        <li><Link to="/metrics" className="hover:text-blue-600 transition-all">Métricas</Link></li>
        <li><Link to="/microservices" className="hover:text-blue-600 transition-all">Microservicios</Link></li>
        <li><Link to="/alerts" className="hover:text-blue-600 transition-all">Alertas</Link></li>
        <li><Link to="/graph" className="hover:text-blue-600 transition-all">Flujo de Datos</Link></li>
      </ul>
    </nav>
  );
}
