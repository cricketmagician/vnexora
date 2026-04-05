"use client";

import { useState, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  ArrowLeft,
  Gem,
  Hexagon,
  ShieldCheck,
  Check
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ResidentialPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mandateType, setMandateType] = useState<"Buy" | "Sell" | "Lease">("Buy");
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (type: "Buy" | "Sell" | "Lease") => {
    setMandateType(type);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
            Legacy Residential Portfolios for <br />
            <span className="font-bold uppercase tracking-tight">Luxury Living</span>
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
              src="/Users/nihalkumar/.gemini/antigravity/brain/d8eb8cb0-780e-4ed2-9658-3d7040cb22ea/luxury_residential_modern_villa_dusk_1775369945052.png"
              alt="Luxury Residential Estates"
              fill
              className="object-cover"
              priority
            />
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-10 left-10 text-white/90">
              <p className="text-[10px] md:text-xs font-sans font-bold tracking-[0.3em] uppercase">Vnexora Residential, Elite Asset Portfolio</p>
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
              From waterfront villas to heritage penthouses, Vnexora manages the acquisition and disposition of the world&apos;s most prestigious addresses. We represent UHNW individuals and family offices with absolute privacy and structural precision.
            </p>
          </motion.div>

          {/* Mandate Entrance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { id: "Buy", title: "Acquire", icon: <Gem className="w-8 h-8" />, desc: "Concierge sourcing for off-market luxury units and legacy estates." },
              { id: "Sell", title: "Dispose", icon: <Hexagon className="w-8 h-8" />, desc: "Divestment strategies reaching our private global networth network." },
              { id: "Lease", title: "Lease", icon: <ShieldCheck className="w-8 h-8" />, desc: "Managing luxury rental portfolios for diplomats and executives." }
            ].map((mandate) => (
              <motion.div
                 key={mandate.id}
                 whileHover={{ y: -5 }}
                 className="p-10 bg-white border border-stone-200 hover:border-[#CFA052] transition-all cursor-pointer group flex flex-col items-center text-center"
                 onClick={() => scrollToForm(mandate.id as any)}
              >
                <div className="w-16 h-16 bg-stone-100 flex items-center justify-center mb-8 border border-stone-100 group-hover:bg-[#CFA052] group-hover:text-black transition-all">
                  {mandate.icon}
                </div>
                <h3 className="text-lg font-sans font-bold tracking-[0.2em] uppercase mb-4">{mandate.title}</h3>
                <p className="text-stone-500 font-sans font-light text-sm mb-8 leading-relaxed">{mandate.desc}</p>
                <span className="text-[10px] font-sans font-black text-[#CFA052] tracking-[0.3em] uppercase flex items-center">
                  Consultation <ArrowRight className="w-3 h-3 ml-2" />
                </span>
              </motion.div>
            ))}
          </div>

          {/* Specialized Inquiry Form */}
          <div ref={formRef} className="bg-white border border-stone-200 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] scroll-mt-32">
            {!isSubmitted ? (
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 p-12 lg:p-20 bg-[#050505] text-white flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-black text-[#CFA052] tracking-[0.4em] uppercase mb-10 block">Residential Advisory</span>
                    <h2 className="text-4xl font-sans font-medium mb-8 leading-[1.1]">Strategic <br /><span className="font-bold italic">Consultation</span></h2>
                    <div className="space-y-6">
                      {["UHNW Global Network Access", "Full Structural Concierge", "Discreet Off-Market Pipeline"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-white/40 text-xs font-sans font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                   <div className="mt-16 pt-8 border-t border-white/5 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#CFA052] animate-pulse" />
                      <span className="text-[9px] uppercase font-sans font-bold tracking-[0.2em] text-white/30">AES-256 Encrypted Desk Active</span>
                   </div>
                </div>

                <div className="lg:col-span-3 p-12 lg:p-20">
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-3 group">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Full Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="Alexander Thorne" />
                    </div>
                    
                    <div className="space-y-6">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Mandate Type</label>
                      <div className="flex gap-3">
                        {["Buy", "Sell", "Lease"].map((type) => (
                          <button 
                            key={type} 
                            type="button" 
                            onClick={() => setMandateType(type as any)}
                            className={cn(
                              "flex-1 py-4 border rounded-none text-[10px] font-sans font-black uppercase tracking-widest transition-all",
                              mandateType === type 
                                ? "bg-stone-900 text-white border-stone-900" 
                                : "border-stone-200 text-stone-400 hover:border-stone-300"
                            )}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 group">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Target Valuation</label>
                      <input type="text" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="E.G. $5M - $25M+" />
                    </div>

                    <button type="submit" className="w-full h-20 bg-stone-900 text-white font-sans font-black tracking-[0.4em] uppercase text-xs hover:bg-[#CFA052] hover:text-black transition-all flex items-center justify-center gap-4">
                      <span>Log Mandate</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-32 text-center">
                <div className="w-24 h-24 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <Check className="w-12 h-12 text-[#CFA052]" />
                </div>
                <h3 className="text-3xl font-sans font-bold text-stone-900 mb-4 tracking-tight">Transmitted.</h3>
                <p className="text-stone-400 max-w-xs mx-auto leading-relaxed mb-10 font-sans font-light">An advisory representative will initiate contact through private channels within 24 hours.</p>
                <button onClick={() => setIsSubmitted(false)} className="px-12 py-5 bg-stone-900 text-white text-[10px] font-sans font-bold tracking-[0.4em] uppercase hover:bg-stone-100 hover:text-black transition-all">New Entry</button>
              </motion.div>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}
