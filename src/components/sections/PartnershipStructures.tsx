"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Key, 
  Layout 
} from "lucide-react";
import { cn } from "@/lib/utils";

const structures = [
  {
    title: "Management Contract",
    description: "Delegate operational oversight to secure efficiency.",
    icon: Briefcase
  },
  {
    title: "Franchise Agreement",
    description: "Leverage brand identity to enhance market presence.",
    icon: FileText
  },
  {
    title: "Revenue Share",
    description: "Share profits in alignment with business performance.",
    icon: TrendingUp
  },
  {
    title: "Revenue Share with MG",
    description: "Ensure baseline earnings alongside revenue sharing.",
    icon: ShieldCheck
  },
  {
    title: "Lease",
    description: "Secure long-term occupancy with steady returns.",
    icon: Key
  },
  {
    title: "Hybrid Model",
    description: "Combine contract elements for tailored solutions.",
    icon: Layout
  }
];

const StructureCard = ({ structure }: { structure: typeof structures[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-10 h-[350px] border border-black/5 bg-black cursor-pointer overflow-hidden group transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
    >
      {/* Circle Hover Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 6, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              left: mousePos.x,
              top: mousePos.y,
              width: "140px",
              height: "140px",
              marginLeft: "-70px",
              marginTop: "-70px",
              backgroundColor: "#5B0F2D", // Dark Maroon
              borderRadius: "100%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col h-full">
        <div className={cn(
          "w-12 h-12 rounded-none border mb-8 flex items-center justify-center transition-all duration-500",
          isHovered ? "bg-white/20 border-white/40 text-white" : "bg-white/10 border-white/20 text-white"
        )}>
          <structure.icon size={20} strokeWidth={1.5} />
        </div>

        <h3 className={cn(
          "text-2xl font-serif mb-4 transition-colors duration-500 leading-tight",
          isHovered ? "text-white" : "text-white"
        )}>
          {structure.title}
        </h3>

        <p className={cn(
          "text-base leading-relaxed transition-colors duration-500 font-light",
          isHovered ? "text-white/90" : "text-white/60"
        )}>
          {structure.description}
        </p>
      </div>
    </motion.div>
  );
};

export const PartnershipStructures = () => {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-black/20 block italic">Operational Flexibility</span>
              <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                Strategic Hotel–Brand <br />
                <span className="italic font-light">Partnership Models by VNEXORA</span>
              </h2>
            </div>
            <p className="max-w-md text-black/40 text-sm font-light leading-relaxed italic border-l border-black/5 pl-8">
              "We provide precisely engineered partnership models designed to protect owner equity while maximizing operational velocity."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {structures.map((structure, idx) => (
              <StructureCard key={idx} structure={structure} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
