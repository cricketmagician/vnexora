"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Key, 
  Layout,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePartner } from "@/context/PartnerContext";

const structures = [
  {
    title: "Management Contract",
    points: [
      "Professional operational oversight and management.",
      "Increase visibility and guest trust.",
      "Access proven systems and standards.",
      "Retain ownership with stronger performance."
    ],
    icon: Briefcase
  },
  {
    title: "Franchise Model",
    points: [
      "Use an established brand name and identity.",
      "Benefit from wider sales and reservation networks.",
      "Gain access to marketing tools and brand support.",
      "Improve asset value through stronger brand."
    ],
    icon: FileText
  },
  {
    title: "Lease Model",
    points: [
      "Secure fixed and predictable income.",
      "Reduce operational involvement.",
      "Lower ownership risk.",
      "Ideal for passive asset returns."
    ],
    icon: Key
  },
  {
    title: "Hybrid Model",
    points: [
      "Combine fixed income with growth upside.",
      "Balance security and profitability.",
      "Flexible commercial structure.",
      "Tailored to owner objectives."
    ],
    icon: Layout
  },
  {
    title: "Revenue Share Model",
    points: [
      "Earn based on actual performance.",
      "Higher upside in strong markets.",
      "Align owner and operator interests.",
      "Transparent growth-linked returns."
    ],
    icon: TrendingUp
  },
  {
    title: "Revenue Share + MG",
    points: [
      "Receive assured minimum income.",
      "Benefit from additional upside growth.",
      "Reduce downside risk.",
      "Best mix of safety and opportunity."
    ],
    icon: ShieldCheck
  }
];

const StructureCard = ({ structure }: { structure: typeof structures[0] }) => {
  const { openPartner } = usePartner();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px), (hover: none)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={openPartner}
      className="relative p-8 md:p-10 h-auto min-h-[420px] md:h-[420px] border border-[#E3B448]/20 md:border-white/5 bg-gradient-to-b from-[#161616] to-[#0a0a0a] md:bg-none md:bg-white/5 cursor-pointer overflow-hidden group transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:border-[#E3B448]/30 rounded-2xl shadow-[0_15px_35px_-15px_rgba(227,180,72,0.15)] md:shadow-none"
    >
      {/* Circle Hover Effect */}
      <AnimatePresence>
        {!isMobile && isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 8, opacity: 1 }}
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
              backgroundColor: "#E3B448", // Gold Accent
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
          isHovered 
            ? "bg-white/20 border-white/40 text-white" 
            : "bg-[#E3B448]/10 border-[#E3B448]/30 text-[#E3B448] md:bg-white/10 md:border-white/20 md:text-white"
        )}>
          <structure.icon size={20} strokeWidth={1.5} />
        </div>

        <h3 className={cn(
          "text-2xl font-serif mb-6 transition-colors duration-500 leading-tight",
          isHovered ? "text-black" : "text-white"
        )}>
          {structure.title}
        </h3>

        <div className="flex-grow">
          <ul className="space-y-4">
            {structure.points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: (isMobile || isHovered) ? 1 : 0.4, 
                  x: (isMobile || isHovered) ? 0 : -5,
                  transition: { delay: (isMobile || isHovered) ? idx * 0.05 : 0 }
                }}
                className={cn(
                  "text-[13px] leading-relaxed transition-colors duration-500 flex items-start gap-3",
                  isHovered 
                    ? "text-black/90 font-medium" 
                    : "text-white/70 md:text-white/30"
                )}
              >
                <div className={cn(
                  "w-1 h-1 rounded-full mt-2 shrink-0 transition-colors duration-500",
                  isHovered 
                    ? "bg-black" 
                    : "bg-[#E3B448] md:bg-white/20"
                )} />
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="group/cta flex items-center justify-between">
            <span className={cn(
              "text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500",
              isHovered ? "text-black" : "text-[#E3B448]/90 md:text-white/40"
            )}>
              Enquire About This Model
            </span>
            <div className={cn(
              "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500",
              isHovered 
                ? "bg-black border-black text-white translate-x-1" 
                : "border-[#E3B448]/30 text-[#E3B448] md:border-white/20 md:text-white"
            )}>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const PartnershipStructures = ({ targetLink = "#contact" }: { targetLink?: string }) => {
  return (
    <section className="pt-10 md:pt-16 pb-24 md:pb-40 bg-[#050505] overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E3B448]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E3B448]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/20 block italic">Operational Flexibility</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                <span className="text-[#E3B448]">Strategic Hotel–Brand Partnership</span> <br />
                <span className="italic font-light text-white">Models by VNEXORA</span>
              </h2>
            </div>
            <p className="max-w-md text-white/40 text-sm font-light leading-relaxed italic border-l border-white/10 pl-8">
              "We provide precisely engineered partnership models designed to protect owner equity while maximizing operational velocity."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {structures.map((structure, idx) => (
              <StructureCard key={idx} structure={structure} targetLink={targetLink} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
