"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show on home page
  if (pathname === "/") return null;

  return (
    <div className="fixed top-32 left-4 md:left-12 z-[100] pointer-events-none">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -4 }}
        onClick={() => router.back()}
        className="pointer-events-auto flex items-center gap-3 text-white/40 hover:text-[#CFA052] transition-all group bg-black/20 backdrop-blur-md p-2 pr-4 rounded-full border border-white/10 hover:border-[#CFA052]/30"
      >
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#CFA052]/50 transition-all bg-black/40">
          <ArrowLeft className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Back</span>
      </motion.button>
    </div>
  );
};
