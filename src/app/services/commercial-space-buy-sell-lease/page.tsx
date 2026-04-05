"use client";

import { useState, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  ArrowLeft,
  Building2,
  Handshake,
  Search,
  Key,
  ShieldCheck,
  Target,
  Check
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CommercialSpacePage() {
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
      {/* PREMIUM HERO SECTION */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505] font-sans">
        {/* Cinematic Background with Slow Zoom */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/services/commercial_space.png"
            alt="Institutional Commercial Assets"
            fill
            className="object-cover brightness-[0.5] saturate-[0.9]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60" />
        </motion.div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            {/* Glass Breadcrumb */}
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/60 hover:text-mustard hover:border-mustard/30 transition-all duration-500 mb-12 group"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Back to Showcase</span>
            </Link>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 drop-shadow-2xl">
              Institutional <span className="italic font-light">Commercial Assets</span> <br />
              <span className="text-3xl md:text-4xl lg:text-5xl uppercase font-bold tracking-[0.2em] text-mustard block mt-4 drop-shadow-lg">At Global Scale</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto italic mb-16 drop-shadow-lg">
              Redefining skyline transactions through strategic institutional buy, sell, and lease mandates.
            </p>

            {/* Premium CTA Mandate Entrance */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { id: "Buy", label: "Buy Mandate" },
                { id: "Sell", label: "Sell Mandate" },
                { id: "Lease", label: "Lease Mandate" }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => scrollToForm(m.id as any)}
                  className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-mustard hover:text-black hover:border-mustard transition-all duration-500 min-w-[200px]"
                >
                  {m.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <span className="text-[9px] uppercase font-bold tracking-[0.6em] text-white">Explore Assets</span>
          <motion.div 
            animate={{ height: [24, 48, 24] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] bg-gradient-to-b from-mustard to-transparent" 
          />
        </div>
      </section>

      {/* Content Section (Light Body) */}
      <Section spacing="lg" className="relative bg-[#FAF9F6] pt-24 pb-32 overflow-hidden">
        
        {/* Artistic Background Elements (Rotated Images) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07] overflow-hidden">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [-2, -3, -2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] -left-[10%] w-[500px] h-[300px] grayscale brightness-50"
          >
            <Image src="/images/services/property_development.png" alt="" fill className="object-cover" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [1, 2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] -right-[5%] w-[450px] h-[350px] grayscale brightness-50"
          >
            <Image src="/images/services/hotel_brokerage.png" alt="" fill className="object-cover" />
          </motion.div>

          <motion.div 
            animate={{ x: [0, 15, 0], rotate: [0.5, 1, 0.5] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] right-[15%] w-[300px] h-[200px] grayscale brightness-50"
          >
            <Image src="/images/services/commercial_space.png" alt="" fill className="object-cover" />
          </motion.div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <p className="text-xl md:text-3xl text-zinc-800 font-serif font-light italic leading-relaxed tracking-tight max-w-4xl mx-auto">
              From Grade-A corporate hubs to strategic retail corridors, Vnexora orchestrates transactions that define skylines. We represent institutional portfolios across global financial centers.
            </p>
          </motion.div>

          {/* Mandate Entrance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { id: "Buy", title: "Institutional Buy", icon: <Search className="w-8 h-8" />, desc: "Precision sourcing for commercial assets with high-yield potential." },
              { id: "Sell", title: "Asset Disposition", icon: <Handshake className="w-8 h-8" />, desc: "Divestment strategies reaching global institutional family offices." },
              { id: "Lease", title: "Strategic Lease", icon: <Key className="w-8 h-8" />, desc: "Optimizing vacancy through global long-term lease structures." }
            ].map((mandate) => (
              <motion.div
                 key={mandate.id}
                 whileHover={{ y: -5 }}
                 className="p-10 bg-white/40 backdrop-blur-sm border border-stone-200 hover:border-[#CFA052] transition-all cursor-pointer group flex flex-col items-center text-center"
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
          <div ref={formRef} className="bg-white/70 backdrop-blur-md border border-stone-200 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] scroll-mt-32">
            {!isSubmitted ? (
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 lg:p-20 bg-[#050505] text-white flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle BG Image for Form Left Side */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Image src="/images/services/commercial_space.png" alt="" fill className="object-cover scale-150 -rotate-12" />
                  </div>
                  
                  <div className="relative z-10">
                    <span className="text-[9px] font-black text-[#CFA052] tracking-[0.5em] uppercase mb-10 block">Consultation Entry</span>
                    <h2 className="text-4xl font-serif text-white leading-tight italic mb-8">Log Your Private <br /><span className="font-bold font-sans not-italic">Commercial Mandate</span></h2>
                    <div className="space-y-6">
                      {[
                        { icon: ShieldCheck, text: "Institutional Confidentiality" },
                        { icon: Target, text: "Precision Asset Alignment" },
                        { icon: Building2, text: "Structural Due Diligence" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-white/40 text-sm font-sans font-light">
                          <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-[#CFA052]">
                            <item.icon size={16} />
                          </div>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                   <div className="mt-16 pt-8 border-t border-white/5 flex items-center gap-2 relative z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052] animate-pulse" />
                      <span className="text-[9px] uppercase font-sans font-bold tracking-[0.2em] text-white/30">Advisory Desk Online</span>
                   </div>
                </div>

                <div className="p-12 lg:p-20">
                  <form onSubmit={handleSubmit} className="space-y-12">
                    {/* 1. STAKEHOLDER IDENTITY */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Representative Name</label>
                        <input required type="text" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-base font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="Johnathan Miller" />
                      </div>
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Institutional Entity</label>
                        <input required type="text" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-base font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="E.G. Goldman Sachs / Family Office" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Official Email</label>
                        <input required type="email" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-base font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="miller@institution.com" />
                      </div>
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Direct Contact</label>
                        <input required type="tel" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-base font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="+1 (000) 000-0000" />
                      </div>
                    </div>
                    
                    {/* 2. ASSET CLASSIFICATION */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Property Sector</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-base font-sans font-medium text-stone-900 appearance-none cursor-pointer">
                            <option>Premium Office</option>
                            <option>Institutional Retail</option>
                            <option>Logistics / Industrial</option>
                            <option>Mixed-Use Asset</option>
                            <option>Land / Development</option>
                          </select>
                          <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CFA052] rotate-90" />
                        </div>
                      </div>
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Total Area Capacity</label>
                        <input required type="text" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-base font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="E.G. 50,000 SQ. FT." />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Valuation Bracket</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-base font-sans font-medium text-stone-900 appearance-none cursor-pointer">
                            <option>Under $10M</option>
                            <option>$10M - $50M</option>
                            <option>$50M - $200M</option>
                            <option>$200M - $500M</option>
                            <option>$500M +</option>
                          </select>
                          <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CFA052] rotate-90" />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Mandate Sector</label>
                        <div className="flex gap-2">
                          {["Buy", "Sell", "Lease"].map((type) => (
                            <button 
                              key={type} 
                              type="button" 
                              onClick={() => setMandateType(type as any)}
                              className={cn(
                                "flex-1 py-3 border rounded-none text-[9px] font-sans font-black uppercase tracking-widest transition-all",
                                mandateType === type 
                                  ? "bg-[#CFA052] text-black border-[#CFA052]" 
                                  : "border-stone-200 text-stone-400 hover:border-[#CFA052]/40"
                              )}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 group">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Strategic Project Brief</label>
                      <textarea rows={2} className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-base font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="SUMMARY OF MANDATE GOALS..."></textarea>
                    </div>

                    <button type="submit" className="w-full h-20 bg-stone-900 text-white font-sans font-black tracking-[0.4em] uppercase text-xs hover:bg-[#CFA052] hover:text-black transition-all flex items-center justify-center gap-4 group">
                      <span>Transmit Mandate</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-32 text-center">
                <div className="w-24 h-24 bg-[#050505] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <Check className="w-12 h-12 text-[#CFA052]" />
                </div>
                <h3 className="text-3xl font-sans font-bold text-stone-900 mb-4 tracking-tight">Transmitted.</h3>
                <p className="text-stone-400 max-w-xs mx-auto leading-relaxed mb-10 font-sans font-light">Your mandate has been logged at our global advisory desk for analysis.</p>
                <button onClick={() => setIsSubmitted(false)} className="px-12 py-5 bg-stone-900 text-white text-[10px] font-sans font-bold tracking-[0.4em] uppercase hover:bg-[#CFA052] hover:text-black transition-all">New Entry</button>
              </motion.div>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}
