"use client";

import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import React from "react";

export const HospitalitySolutions = () => {
  return (
    <Section spacing="none" className="bg-[#050505] py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#CFA052]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#CFA052]/5 blur-[120px] rounded-full" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] md:text-[14px] font-sans font-bold text-[#CFA052] tracking-[0.4em] uppercase mb-6"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-serif text-[#FAF9F6] tracking-tight leading-tight mb-8"
          >
            WHAT WE <span className="text-[#CFA052] italic font-light">DO</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#FAF9F6]/60 font-sans tracking-wide max-w-2xl mx-auto mb-12"
          >
            End-to-End Hospitality Solutions Designed for Performance, Profitability & Scale
          </motion.p>
          
          {/* Power Positioning Line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 md:px-10 py-5 rounded-2xl border border-[#CFA052]/20 bg-[#CFA052]/5 backdrop-blur-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          >
            <p className="text-[#CFA052] font-sans font-medium tracking-wider text-sm md:text-base italic">
              “We Don’t Just Support Hotels — We Structure, Operate & Scale Profitable Hospitality Assets.”
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full perspective-1000"
            >
              <div className="h-full p-8 md:p-10 rounded-[40px] bg-[#0A0A0A]/40 border border-white/10 hover:border-[#CFA052]/40 transition-all duration-700 flex flex-col justify-between overflow-hidden backdrop-blur-[40px] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] group-hover:bg-[#0A0A0A]/60">
                
                {/* Dynamic Background Image - Frosted & Overlaid */}
                <div className="absolute inset-0 z-0 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-1000">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-transparent to-black" />
                </div>

                {/* Animated Accent Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#CFA052]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                {/* Content Overlay */}
                <div className="relative z-10">
                  <div className="mb-8">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-[1px] bg-[#CFA052]/30" />
                        <span className="text-[10px] font-sans font-black text-[#CFA052] tracking-[0.4em] uppercase">
                          {service.label || "Expertise"}
                        </span>
                     </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-[#FAF9F6] mb-5 tracking-tight group-hover:text-[#CFA052] transition-colors duration-500 leading-[1.1]">
                      {service.title}
                    </h3>
                    <p className="text-[#FAF9F6]/40 text-sm md:text-base leading-relaxed mb-8 group-hover:text-[#FAF9F6]/70 transition-colors duration-500 font-light">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* High-fidelity Highlights */}
                  {service.highlights && (
                    <div className="space-y-4 mb-14">
                      {service.highlights.map((highlight, hIndex) => (
                        <motion.div 
                          key={hIndex} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + hIndex * 0.1 }}
                          className="flex items-center gap-4 group/item"
                        >
                          <div className="w-6 h-6 rounded-lg bg-[#CFA052]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#CFA052] group-hover/item:rotate-[15deg] transition-all duration-300">
                            <CheckCircle2 className="w-3 h-3 text-[#CFA052] group-hover/item:text-black" />
                          </div>
                          <span className="text-[#FAF9F6]/50 text-xs md:text-[14px] font-light leading-snug group-hover/item:text-[#FAF9F6] transition-colors duration-300">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA Desk - Premium Alignment */}
                <div className="relative z-10 mt-auto pt-8 border-t border-white/5 group-hover:border-[#CFA052]/20 transition-colors duration-700">
                  <Link
                    href="/contact"
                    className="flex items-center justify-between group/btn"
                  >
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#CFA052]/60 group-hover/btn:text-[#CFA052] transition-colors">Direct Inquiry</span>
                       <span className="text-sm font-serif text-[#FAF9F6] italic">Connect with an Advisor</span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-[#CFA052] group-hover/btn:border-[#CFA052] shadow-2xl group-hover/btn:shadow-[#CFA052]/20 transition-all duration-500">
                      <ArrowRight size={18} className="text-[#CFA052] group-hover/btn:text-[#050505] group-hover/btn:translate-x-1 transition-all duration-500" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 text-center"
        >
          <Link 
            href="/contact"
            className="inline-block px-12 py-6 rounded-full bg-transparent border border-[#CFA052] text-[#CFA052] font-sans font-bold text-xs tracking-[0.4em] uppercase hover:bg-[#CFA052] hover:text-[#050505] transition-all duration-500 hover:shadow-[0_20px_80px_rgba(207,160,82,0.15)]"
          >
            Inquire About Our Solutions
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};
