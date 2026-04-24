"use client";

import React, { useState } from "react";
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
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      "Improve asset value through stronger brand association."
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
      className="relative p-10 h-[420px] border border-black/5 bg-black cursor-pointer overflow-hidden group transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
    >
      {/* Circle Hover Effect */}
      <AnimatePresence>
        {isHovered && (
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
              backgroundColor: "#D4AF37", // Gold Accent
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
          "text-2xl font-serif mb-6 transition-colors duration-500 leading-tight",
          isHovered ? "text-white" : "text-white"
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
                  opacity: isHovered ? 1 : 0.4, 
                  x: isHovered ? 0 : -5,
                  transition: { delay: isHovered ? idx * 0.1 : 0 }
                }}
                className={cn(
                  "text-[13px] leading-relaxed transition-colors duration-500 flex items-start gap-3",
                  isHovered ? "text-white/90" : "text-white/30"
                )}
              >
                <div className={cn(
                  "w-1 h-1 rounded-full mt-2 shrink-0 transition-colors duration-500",
                  isHovered ? "bg-white" : "bg-white/20"
                )} />
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <Link href="/contact" className="group/cta flex items-center justify-between">
            <span className={cn(
              "text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500",
              isHovered ? "text-white" : "text-white/40"
            )}>
              Enquire About This Model
            </span>
            <div className={cn(
              "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500",
              isHovered ? "bg-white border-white text-black translate-x-1" : "border-white/20 text-white"
            )}>
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
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
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                <span className="text-[#D4AF37]">Strategic Hotel–Brand Partnership</span> <br />
                <span className="italic font-light text-black">Models by VNEXORA</span>
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
