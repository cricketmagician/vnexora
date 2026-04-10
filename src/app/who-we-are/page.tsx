"use client";

import WhoWeAreGrid from "@/components/sections/WhoWeAreGrid";
import { motion } from "framer-motion";

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Editorial Header */}
      <section className="pt-40 pb-20 text-center border-b border-slate-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-4">
               <div className="w-10 h-px bg-[#CFA052]" />
               <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#CFA052]">Vnexora Institution</span>
               <div className="w-10 h-px bg-[#CFA052]" />
            </div>
            
            <h1 className="text-5xl md:text-[6rem] font-serif text-[#0A0A0A] tracking-tighter leading-none">
              Who We <span className="italic font-light text-[#CFA052]">Are.</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl font-serif italic max-w-2xl mx-auto pt-8">
              "We don't just optimize hospitality assets; we architect institutional legacies through precision intelligence and quiet luxury."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <WhoWeAreGrid />

      {/* Institutional Footer Seal */}
      <section className="py-32 flex flex-col items-center gap-8 opacity-20">
         <div className="w-px h-24 bg-gradient-to-b from-[#1A1A1A] to-transparent" />
         <span className="text-[10px] font-black uppercase tracking-[1em]">Vnexora Charter 2026</span>
      </section>
    </main>
  );
}
