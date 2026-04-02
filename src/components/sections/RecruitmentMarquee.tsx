"use client";
import React from "react";
import { motion } from "framer-motion";

const marqueeItems = [
  "5-STAR HOTELS",
  "BOUTIQUE RESORTS",
  "MICHELIN STAR RESTAURANTS",
  "PRIVATE MEMBERS CLUBS",
  "SPA & WELLNESS RETREATS",
  "ICONIC GLOBAL CHAINS",
  "LUXURY ESTATE MANAGEMENT"
];

export const RecruitmentMarquee = () => {
  return (
    <div className="bg-mustard py-6 md:py-8 overflow-hidden relative z-20 border-y border-forest/10 shadow-2xl">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1035], 
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 md:gap-16 mx-4 md:mx-8">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-forest">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-forest/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
