"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const PartnerCTA = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mustard/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-mustard text-[10px] font-black tracking-[0.5em] uppercase block"
            >
              Institutional Growth
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-white leading-tight"
            >
              Partner with <span className="italic">VNEXORA.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed"
            >
              Join hands with India's fastest growing hospitality asset management firm. 
              We offer clinical operational models, institutional branding, and 
              unmatched revenue velocity for hotel owners.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/services/brand-partnership-solutions"
              className="inline-flex items-center gap-6 group"
            >
              <span className="bg-mustard text-black px-10 py-5 font-bold text-[10px] tracking-[0.4em] uppercase group-hover:bg-white transition-all duration-500 shadow-2xl shadow-mustard/10">
                Partner With Us
              </span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-mustard transition-colors duration-500">
                <ArrowRight size={16} className="text-white group-hover:text-mustard transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
