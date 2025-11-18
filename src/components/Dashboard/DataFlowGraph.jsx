import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const getNodeColor = (status) => {
  if (status === "online") return {
    bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    border: "#059669",
    shadow: "0 8px 20px rgba(16, 185, 129, 0.3)"
  };
  if (status === "offline") return {
    bg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    border: "#dc2626",
    shadow: "0 8px 20px rgba(239, 68, 68, 0.3)"
  };
  return {
    bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    border: "#d97706",
    shadow: "0 8px 20px rgba(245, 158, 11, 0.3)"
  };
};

const DataFlowGraph = ({ microservices }) => {
  const nodes = microservices.map((ms, i) => {
    const colors = getNodeColor(ms.status);
    
    return {
      id: ms.id.toString(),
      position: { 
        x: (i % 3) * 280 + 40, 
        y: Math.floor(i / 3) * 180 + 40 
      },
      data: { 
        label: (
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              <span className="font-bold text-white text-sm">{ms.name}</span>
            </div>
            <span className="text-xs text-white/80 capitalize">{ms.type}</span>
            <div className="flex gap-2 mt-1 text-xs text-white/90">
              <span>CPU: {ms.cpu}%</span>
              <span>•</span>
              <span>{ms.latency}ms</span>
            </div>
          </div>
        )
      },
      style: {
        padding: "16px 20px",
        borderRadius: "16px",
        background: colors.bg,
        border: `2px solid ${colors.border}`,
        color: "#ffffff",
        fontWeight: 600,
        boxShadow: colors.shadow,
        minWidth: 200,
        backdropFilter: "blur(10px)",
      },
    };
  });

  // Crear conexiones inteligentes
  const edges = [];
  microservices.forEach((ms, i) => {
    if (i < microservices.length - 1) {
      // Conexión al siguiente
      edges.push({
        id: `e${i}-${i + 1}`,
        source: ms.id.toString(),
        target: microservices[i + 1].id.toString(),
        type: 'smoothstep',
        style: {
          strokeWidth: 3,
          stroke: "#3b82f6",
        },
        animated: true,
        markerEnd: {
          type: 'arrowclosed',
          color: '#3b82f6',
        },
      });
    }
    
    // Agregar algunas conexiones cruzadas para hacer el grafo más interesante
    if (i > 0 && i % 3 === 0 && i < microservices.length - 2) {
      edges.push({
        id: `cross-${i}`,
        source: ms.id.toString(),
        target: microservices[i + 2].id.toString(),
        type: 'smoothstep',
        style: {
          strokeWidth: 2,
          stroke: "#8b5cf6",
          strokeDasharray: '5,5',
        },
        animated: false,
        markerEnd: {
          type: 'arrowclosed',
          color: '#8b5cf6',
        },
      });
    }
  });

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden bg-slate-950/50 border border-slate-700/50 shadow-2xl backdrop-blur-xl">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{
          padding: 0.2,
          minZoom: 0.5,
          maxZoom: 1.5,
        }}
        defaultEdgeOptions={{
          type: 'smoothstep',
        }}
        proOptions={{ hideAttribution: true }}
      >
        <Background 
          color="#475569"
          gap={16}
          size={1}
          className="opacity-30"
          variant="dots"
        />
        <Controls
          className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 shadow-xl"
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            padding: "6px",
            button: {
              backgroundColor: "transparent",
              borderBottom: "1px solid rgba(71, 85, 105, 0.3)",
            }
          }}
        />
      </ReactFlow>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-xl p-3 shadow-xl">
        <p className="text-xs font-semibold text-slate-300 mb-2">Status Legend</p>
        <div className="flex flex-col gap-1.5 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30"></div>
            <span className="text-slate-300">Online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30"></div>
            <span className="text-slate-300">Warning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30"></div>
            <span className="text-slate-300">Offline</span>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-slate-700/50">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-blue-500"></div>
            <span className="text-slate-400 text-xs">Primary Flow</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-4 h-0.5 bg-purple-500" style={{backgroundImage: "repeating-linear-gradient(90deg, #8b5cf6 0px, #8b5cf6 5px, transparent 5px, transparent 10px)"}}></div>
            <span className="text-slate-400 text-xs">Secondary</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFlowGraph;