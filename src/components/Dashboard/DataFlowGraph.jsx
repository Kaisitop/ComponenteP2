import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const DataFlowGraph = ({ microservices }) => {
  const nodes = microservices.map((ms, i) => ({
    id: ms.id.toString(),
    position: { x: i * 200, y: 80 },
    data: { label: ms.name },
    style: {
      padding: 12,
      borderRadius: 12,
      background: "rgba(255,255,255,0.8)",
      border: "1px solid #d1d5db", // gray-300
      fontWeight: 600,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    },
  }));

  // Conexiones simples automáticas
  const edges = microservices.slice(1).map((ms, i) => ({
    id: `e${i}-${i + 1}`,
    source: microservices[i].id.toString(),
    target: ms.id.toString(),
    style: {
      strokeWidth: 2.2,
      stroke: "#6366f1", // indigo-500
    },
    animated: true,
  }));

  return (
    <div className="w-full h-[420px] rounded-2xl border border-gray-300 shadow-lg overflow-hidden bg-white/60 backdrop-blur-md">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background 
          color="#cbd5e1"      /* slate-300 */
          gap={20}
          className="opacity-40"
        />
        <Controls
          className="bg-white/80 backdrop-blur border border-gray-300 rounded-lg shadow"
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            padding: 4,
          }}
        />
      </ReactFlow>
    </div>
  );
};

export default DataFlowGraph;
