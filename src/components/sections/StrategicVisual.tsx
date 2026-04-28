"use client";

import React from "react";
import { motion } from "framer-motion";

export const StrategicVisual = () => {
  return (
    <section className="w-full bg-black overflow-hidden border-y border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="w-full group overflow-visible"
      >
        <div className="relative w-screen left-1/2 -translate-x-1/2 bg-black min-h-[70vh] md:min-h-[85vh] flex items-center shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E3B448]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5B0F2D]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="w-full relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full overflow-hidden group"
            >
              <img 
                src="/images/image567.jpeg" 
                alt="Vnexora Strategic Visual" 
                className="w-full h-auto transition-transform duration-[10s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Scanning Light Effect */}
              <motion.div 
                animate={{ top: ["-100%", "100%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[20%] bg-gradient-to-b from-transparent via-[#E3B448]/10 to-transparent pointer-events-none z-10"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
