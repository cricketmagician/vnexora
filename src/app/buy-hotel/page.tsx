"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  CircleDollarSign,
  User,
  Mail,
  Phone,
  Info,
  Check,
  ArrowRight,
  Globe,
  Search,
  ShieldCheck,
  Target
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/* ═══════════════════════════════════════════
   DESIGN TOKENS: "ACQUISITION LUXURY"
   Primary: #CFA052 (Mustard Gold)
   Background: #050505 (Deep Black)
   Form: bg-white/5 (Glass)
   Text: #FFFFFF (Pure Ivory)
   ═══════════════════════════════════════════ */

const GOLD = "#CFA052";

const FloatingImage = ({ src, alt, className, delay = 0, yOffset = 20 }: { src: string; alt: string; className: string; delay?: number; yOffset?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: yOffset, scale: 0.95 }}
    whileInView={{ 
      opacity: 0.6, 
      y: 0, 
      scale: 1,
      transition: { duration: 1.2, delay, ease: "easeOut" }
    }}
    whileHover={{ opacity: 1, scale: 1.05, transition: { duration: 0.4 } }}
    className={cn("absolute rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-0 hidden md:block", className)}
  >
    <Image src={src} alt={alt} fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
  </motion.div>
);

export default function BuyHotelPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-white selection:bg-[#CFA052]/30 overflow-x-hidden">
      <Navbar />

      {/* ══════════ HERO SECTION: ACQUISITION ══════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity }} className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/hero_city_day.png" 
            alt="Global Asset Acquisition"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-[#CFA052] mb-8 block">
              Global Asset Acquisition
            </span>
            <h1 className="text-[clamp(40px,8vw,100px)] font-bold text-white mb-10 leading-[1.05] tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>
              Acquire Your <span className="italic font-light opacity-80">Hospitality Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              Tap into our exclusive off-market database of premium hospitality assets across global luxury markets.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16"
            >
               <div className="w-[1px] h-20 bg-gradient-to-b from-[#CFA052] to-transparent mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ FORM SECTION: WHITE GLASS ══════════ */}
      <section className="py-32 px-6 relative z-20">
        
        {/* Floating Background Images */}
        <FloatingImage 
          src="/images/hero/hero_6.png" 
          alt="Modern Hotel" 
          className="top-[10%] left-[-5%] w-[350px] aspect-[4/5] rotate-[-6deg] opacity-40" 
          delay={0.2}
        />
        <FloatingImage 
          src="/images/hero/hero_bar.png" 
          alt="Luxury Bar" 
          className="top-[40%] right-[-8%] w-[400px] aspect-square rotate-[4deg] opacity-40" 
          delay={0.4}
        />
        <FloatingImage 
          src="/images/hero/hero_city_night.png" 
          alt="Investment Opportunity" 
          className="bottom-[10%] left-[-8%] w-[450px] aspect-video rotate-[-3deg] opacity-40" 
          delay={0.6}
        />

        <div className="max-w-[1000px] mx-auto relative h-full">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/10 backdrop-blur-[40px] rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden ring-1 ring-white/10"
          >
            <div className="p-8 md:p-20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16 border-b border-white/10 pb-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-br from-[#CFA052] to-[#B68D40] flex items-center justify-center shadow-xl shadow-[#CFA052]/20">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Acquisition Mandate</h2>
                    <p className="text-sm text-white/40 mt-1 uppercase tracking-[0.2em] font-bold">Confidential requirement brief</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/30 text-xs tracking-widest uppercase font-bold px-6 py-3 border border-white/10 rounded-full bg-white/5">
                  <Target className="w-4 h-4 text-[#CFA052]" /> Precision Sourcing
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {/* Input Group */}
                    {[
                      { label: "Investor / Company Name", icon: User, placeholder: "e.g. Sterling Capital Group", type: "text" },
                      { label: "Corporate Email Address", icon: Mail, placeholder: "investment@sterling.com", type: "email" },
                      { label: "Private Contact Number", icon: Phone, placeholder: "+91 9999 000 000", type: "tel" },
                      { label: "Target Location(s) / Region", icon: MapPin, placeholder: "Mumbai, Singapore, Bali", type: "text" },
                      { label: "Indicative Investment Budget", icon: CircleDollarSign, placeholder: "$ 25M - $ 150M", type: "text" },
                      { label: "Preferred Asset Category", icon: Building2, placeholder: "Luxury Resort / Boutique", type: "text" },
                    ].map((field, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="space-y-3 group"
                      >
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                          <field.icon className="w-3 h-3" /> {field.label}
                        </label>
                        <div className="relative">
                          <input 
                            type={field.type} 
                            required
                            placeholder={field.placeholder}
                            className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10"
                          />
                          <div className="absolute bottom-0 left-0 h-[1px] bg-[#CFA052] w-0 group-hover:w-full transition-all duration-500" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Criteria Message */}
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                       Specific Investment Criteria / Portofilo Strategy
                    </label>
                    <textarea 
                      placeholder="Specify ROI expectations, preferred brands, operational status (vacant/managed), or any critical deal-breakers..."
                      className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] p-8 focus:outline-none focus:border-[#CFA052] transition-all text-white font-light placeholder:text-white/10 min-h-[180px] resize-none leading-relaxed"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-8 bg-[#CFA052] text-black rounded-full font-bold tracking-[0.4em] uppercase text-[10px] shadow-2xl hover:bg-white transition-all duration-500 mt-12 flex items-center justify-center gap-4 group"
                  >
                    <span>Log Acquisition Mandate</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-32"
                >
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-[#CFA052]/40 shadow-2xl">
                    <Check className="w-12 h-12 text-[#CFA052]" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Mandate Logged</h3>
                  <p className="text-white/40 mb-12 max-w-sm mx-auto font-light leading-relaxed">
                    Our acquisition team will now scan for matching off-market opportunities. Discretion is guaranteed.
                  </p>
                  <Link href="/">
                    <button className="px-16 py-5 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                      Exit Experience
                    </button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ DATA & TRUST SECTION ══════════ */}
      <section className="py-40 bg-black relative">
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
            {[
              { icon: Globe, title: "Global conduit", desc: "Access to verified hospitality inventory across India and the GCC region." },
              { icon: ShieldCheck, title: "Data Vetting", desc: "Every opportunity is rigorously vetted for legal and financial health." },
              { icon: Target, title: "Strategic Fit", desc: "Ensuring acquisitions align perfectly with your long-term portfolio growth." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="space-y-8 group"
              >
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto border border-white/10 group-hover:border-[#CFA052]/40 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-[#CFA052]" />
                </div>
                <h4 className="text-white font-bold text-lg uppercase tracking-[0.3em]">{feature.title}</h4>
                <p className="text-white/30 text-sm font-light leading-relaxed max-w-xs mx-auto">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
