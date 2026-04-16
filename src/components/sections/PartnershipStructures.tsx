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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col p-10 bg-white border border-black/5 overflow-hidden group cursor-pointer h-full min-h-[300px] shadow-sm transition-shadow duration-500 hover:shadow-xl"
    >
      {/* Circle Hover Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 4, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            style={{
              position: "absolute",
              left: mousePos.x,
              top: mousePos.y,
              width: "100px",
              height: "100px",
              marginLeft: "-50px",
              marginTop: "-50px",
              backgroundColor: "#CFA052", // Vnexora Gold
              borderRadius: "100%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col h-full">
        <div className={cn(
          "w-12 h-12 rounded-none border mb-10 flex items-center justify-center transition-all duration-500",
          isHovered ? "bg-white/20 border-white/40 text-black" : "bg-white border-black/10 text-black"
        )}>
          <structure.icon size={20} strokeWidth={1.5} />
        </div>

        <h3 className={cn(
          "text-2xl font-serif mb-6 transition-colors duration-500 leading-tight",
          isHovered ? "text-black" : "text-black"
        )}>
          {structure.title}
        </h3>

        <p className={cn(
          "text-base leading-relaxed transition-colors duration-500 font-light",
          isHovered ? "text-black/80" : "text-black/40"
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
                Institutional <br />
                <span className="italic font-light">Engagement Structures.</span>
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
