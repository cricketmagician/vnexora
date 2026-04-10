"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquareText } from "lucide-react";

export default function StickySayHello() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-10 right-10 z-[100] group"
    >
      <Link href="/who-we-are" className="relative block">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-[#CFA052]/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
        
        <div className="relative flex items-center gap-5 px-10 py-6 bg-[#0A0A0A] hover:bg-[#CFA052] text-white hover:text-black border border-white/10 hover:border-[#CFA052] rounded-full transition-all duration-700 shadow-2xl backdrop-blur-3xl overflow-hidden">
           {/* Scanline Effect */}
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
           
           <span className="text-[11px] font-black uppercase tracking-[0.5em]">Say Hello — Vnexora</span>
           <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-black/10 flex items-center justify-center transition-colors">
              <MessageSquareText size={14} className="group-hover:rotate-[15deg] transition-transform" />
           </div>
        </div>
      </Link>
    </motion.div>
  );
}
