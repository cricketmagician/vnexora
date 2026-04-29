"use client";

import React from "react";
import { JoinOurTeamForm } from "@/components/sections/JoinOurTeamForm";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-20 space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-mustard text-[10px] font-black tracking-[0.6em] uppercase block"
              >
                Careers at Vnexora
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif text-black tracking-tight"
              >
                Scale with <span className="italic">Us.</span>
              </motion.h1>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <JoinOurTeamForm />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
