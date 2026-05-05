"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePartner } from "@/context/PartnerContext";
import { ArrowRight } from "lucide-react";

export const StrategicPartnerCTA = () => {
  const { openPartner } = usePartner();

  return (
    <div 
      onClick={openPartner}
      className="relative block w-full h-[60vh] md:h-[80vh] cursor-pointer overflow-hidden group"
    >
      {/* Background Image - Edge to Edge */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/sections/partnership/institutional_boardroom.png" 
          alt="Partner with Vnexora" 
          className="w-full h-full object-cover object-center brightness-75 group-hover:brightness-50 transition-all duration-700"
        />
      </motion.div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <span className="text-mustard text-[10px] md:text-[12px] font-black tracking-[0.5em] uppercase">Strategic Alliance</span>
          <h2 className="text-4xl md:text-7xl font-serif text-white max-w-4xl leading-tight">
            Elevate Your <span className="italic text-mustard">Hospitality</span> Asset to Institutional Standards.
          </h2>
          
          <div className="pt-8">
            <div className="inline-flex items-center gap-6 bg-white text-black px-12 py-5 rounded-full font-sans font-black text-[10px] tracking-[0.4em] uppercase hover:bg-mustard hover:scale-105 transition-all duration-500 group/btn shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
               Partner With Us
               <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
    </div>
  );
};
