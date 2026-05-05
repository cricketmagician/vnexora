"use client";

import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import React from "react";

import { useServiceInquiry } from "@/context/ServiceInquiryContext";

export const HospitalitySolutions = () => {
  const { openServiceInquiry } = useServiceInquiry();

  return (
    <Section spacing="none" className="bg-[#050505] py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#E3B448]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#E3B448]/5 blur-[120px] rounded-full" />
        
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
            className="text-[12px] md:text-[14px] font-sans font-bold text-[#E3B448] tracking-[0.4em] uppercase mb-6"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-serif text-[#FAF9F6] tracking-tight leading-tight mb-8"
          >
            WHAT WE <span className="text-[#E3B448] italic font-light">DO</span>
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
            className="inline-block px-6 md:px-10 py-5 rounded-2xl border border-[#E3B448]/20 bg-[#E3B448]/5 backdrop-blur-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          >
            <p className="text-[#E3B448] font-sans font-medium tracking-wider text-sm md:text-base italic">
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
              <div 
                onClick={() => openServiceInquiry(service.title, service.image)}
                className="h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-[#E3B448]/40 transition-all duration-700 relative flex flex-col justify-end group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] cursor-pointer"
              >
                
                {/* Full Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 brightness-[0.7] group-hover:brightness-[0.4]"
                  />
                  {/* Dynamic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Animated Accent Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E3B448]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                {/* Content Area */}
                <div className="relative z-10 p-8 md:p-12 space-y-6">
                  <div>
                     <div className="flex items-center gap-3 mb-4 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: 32 }}
                          className="h-[1px] bg-[#E3B448]/60" 
                        />
                        <span className="text-[10px] font-sans font-black text-[#E3B448] tracking-[0.4em] uppercase">
                          {service.label || "Expertise"}
                        </span>
                     </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 tracking-tight transition-all duration-500 group-hover:text-[#E3B448]">
                      {service.title}
                    </h3>
                    
                    {/* Hover Content: Revealed on hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out overflow-hidden">
                      <div className="min-h-0">
                        <p className="text-white/80 text-sm md:text-base leading-relaxed font-light mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                          {service.shortDescription}
                        </p>
                        
                        {/* High-fidelity Highlights in card */}
                        {service.highlights && (
                          <div className="space-y-3 mt-6">
                            {service.highlights.slice(0, 3).map((highlight, hIndex) => (
                              <div 
                                key={hIndex} 
                                className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700"
                                style={{ transitionDelay: `${200 + hIndex * 50}ms` }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#E3B448]" />
                                <span className="text-white/60 text-xs font-light">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                          <button
                            onClick={() => openServiceInquiry(service.title, service.image)}
                            className="flex items-center gap-3 text-[#E3B448] text-xs font-black uppercase tracking-widest hover:gap-5 transition-all"
                          >
                            Inquire Now <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
          <button 
            onClick={() => openServiceInquiry("Hospitality Solutions")}
            className="inline-block px-12 py-6 rounded-full bg-transparent border border-[#E3B448] text-[#E3B448] font-sans font-bold text-xs tracking-[0.4em] uppercase hover:bg-[#E3B448] hover:text-[#050505] transition-all duration-500 hover:shadow-[0_20px_80px_rgba(212,175,55,0.15)]"
          >
            Inquire About Our Solutions
          </button>
        </motion.div>
      </div>
    </Section>
  );
};
