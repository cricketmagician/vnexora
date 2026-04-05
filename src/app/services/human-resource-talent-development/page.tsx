"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Users2, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HumanResourcesTeaserPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-[#CFA052] selection:text-white">
      <Navbar />

      {/* 1. Cinematic Teaser Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-[#050505]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/services/hr_talent.png"
            alt="Human Capital & Talent"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#FAF9F6]" />
        </motion.div>

        <div className="container relative z-10 px-8 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#CFA052] mb-6 block">Personnel & Culture</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white leading-[0.9] tracking-tighter mb-8">
              Human <br /> 
              <span className="italic font-light text-[#CFA052]">Capital.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-xl leading-relaxed italic">
              "The strength of a legendary establishment lies in the caliber of its people."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Philosophy (Editorial) */}
      <Section spacing="lg" className="pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
              Elite Staffing for <br />
              <span className="italic font-light">Global Standards.</span>
            </h2>
            <p className="text-xl md:text-2xl text-stone-600 font-sans font-light leading-relaxed tracking-tight">
              Vnexora structures and manages human capital ecosystems for the world's most prestigious hospitality brands. We don't just recruit; we define service cultures that drive performance and guest loyalty.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
               {[
                 { icon: <Users2 className="w-6 h-6" />, title: "Leadership", desc: "Executive search for visionary hotel managers." },
                 { icon: <ShieldCheck className="w-6 h-6" />, title: "Discretion", desc: "Confidential placements for private estates." },
                 { icon: <Zap className="w-6 h-6" />, title: "Agility", desc: "Pre-opening staffing at unparalleled speed." }
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-[#CFA052]">
                      {item.icon}
                    </div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900">{item.title}</h4>
                    <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 3. The "TAKE ME THERE" Gateway (High Impact) */}
      <Section spacing="none" className="pb-40">
        <div className="container mx-auto px-4 md:px-8">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative group cursor-pointer"
           >
              <Link href="/services/human-resource-talent-development/luxury-hospitality-recruitment">
                <div className="relative h-[600px] md:h-[500px] bg-[#050505] rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-center gap-12 p-8 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.2)]">
                   {/* Background Image Effect */}
                   <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
                      <Image 
                        src="/images/hr/palace_hotels_banner_luxurious_indian_heritage_resort_udaipur_style_at_dusk_with_warm_lighting_wide_shot_high_resolution_cinematic_photography_1775184031949.png"
                        alt="Elite Recruitment Platform"
                        fill
                        className="object-cover"
                      />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

                   {/* Content */}
                   <div className="relative z-10 flex-1 text-center md:text-left space-y-6">
                      <span className="text-[10px] font-bold text-[#CFA052] uppercase tracking-[0.6em]">Specialized Hub</span>
                      <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tighter leading-none mb-6">
                        Elite <br className="hidden md:block" />
                        <span className="italic font-light">Recruitment Platform</span>
                      </h3>
                      <p className="text-white/40 text-sm md:text-lg font-light leading-relaxed max-w-md">
                         Access our proprietary talent database, specialized recruitment specialisms, and luxury onboarding journeys.
                      </p>
                   </div>

                   {/* The "TAKE ME THERE" Button Box */}
                   <div className="relative z-10 w-full md:w-auto flex flex-col items-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 flex flex-col items-center justify-center group-hover:bg-[#CFA052] group-hover:border-[#CFA052] transition-all duration-700 group-hover:scale-110 shadow-2xl">
                         <span className="text-[10px] font-black text-[#CFA052] group-hover:text-black tracking-[0.3em] uppercase mb-1">Enter</span>
                         <ArrowRight className="w-6 h-6 text-[#CFA052] group-hover:text-black transition-transform group-hover:translate-x-2" />
                      </div>
                      <div className="mt-8 text-center">
                        <span className="text-[12px] font-sans font-black italic text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700">TAKE ME THERE</span>
                      </div>
                   </div>
                </div>
              </Link>
           </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
