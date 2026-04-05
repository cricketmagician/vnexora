"use client";

import { Section } from "@/components/ui/Section";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandPartnershipPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Editorial Hero Header (Dark) */}
      <div className="bg-[#050505] pt-32 pb-16 md:pt-40 md:pb-24 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="inline-flex items-center text-[#CFA052]/80 hover:text-[#CFA052] mb-12 transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em]">Back to Showcase</span>
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium text-white leading-tight tracking-tight max-w-5xl mx-auto"
          >
            Brand Partnership Solutions for <br />
            <span className="font-bold uppercase tracking-tight">Global Affiliation</span>
          </motion.h1>
        </div>
      </div>

      {/* Featured Visual Block (Crescent Style) */}
      <Section spacing="none" className="bg-[#050505] pb-20 overflow-visible">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative w-full max-w-6xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
          >
            <Image 
              src="/Users/nihalkumar/.gemini/antigravity/brain/d8eb8cb0-780e-4ed2-9658-3d7040cb22ea/brand_partnerships_luxury_lobby_1775369317137.png"
              alt="Brand Partnership Solutions"
              fill
              className="object-cover"
              priority
            />
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-10 left-10 text-white/90">
              <p className="text-[10px] md:text-xs font-sans font-bold tracking-[0.3em] uppercase">Vnexora Global, Institutional Partnerships</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Content Section (Light Body) */}
      <Section spacing="lg" className="bg-[#FAF9F6] pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <p className="text-xl md:text-3xl text-zinc-800 font-sans font-light leading-relaxed tracking-tight">
              At Vnexora, we bridge the gap between visionary hotel owners and leading national and international hospitality brands. Our expertise lies in facilitating mutually beneficial brand affiliations that elevate property positioning and guest experiences.
            </p>
          </motion.div>

          {/* Partnership Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
              <h3 className="text-zinc-400 font-sans font-bold text-[10px] tracking-[0.4em] uppercase mb-4">Affiliation Models</h3>
              <ul className="space-y-6">
                {[
                  "Global Management Contracts",
                  "Strategic Lease Agreements",
                  "Revenue-Sharing Partnerships",
                  "Tailored Hybrid Models"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start text-zinc-700">
                    <CheckCircle2 className="w-5 h-5 text-[#CFA052] mr-4 shrink-0 mt-0.5" />
                    <span className="leading-snug font-sans font-light text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
              <h3 className="text-zinc-400 font-sans font-bold text-[10px] tracking-[0.4em] uppercase mb-4">Strategic Goals</h3>
              <ul className="space-y-6">
                {[
                  "International Brand Scaling",
                  "Market Position Optimization",
                  "Brand Story Alignment",
                  "Long-Term Asset Appreciation"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start text-zinc-700">
                    <CheckCircle2 className="w-5 h-5 text-[#CFA052] mr-4 shrink-0 mt-0.5" />
                    <span className="leading-snug font-sans font-light text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <Link 
              href="/contact"
              className="inline-block px-12 py-6 rounded-full bg-transparent border border-zinc-800 text-zinc-800 font-sans font-bold text-xs tracking-[0.4em] uppercase hover:bg-zinc-800 hover:text-white transition-all duration-500"
            >
              Elevate Your Hotel
            </Link>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
