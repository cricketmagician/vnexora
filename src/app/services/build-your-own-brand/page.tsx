"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Target, 
  Zap, 
  ShieldCheck, 
  Eye,
  Compass,
  PenTool,
  Globe,
  X,
  Calendar,
  Video,
  FileText
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useState } from "react";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

export default function BuildYourOwnBrandPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-mustard/30">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/brain/97ab0031-9250-4673-8b18-bd44ce14cde1/independent_hotel_brand_hero_1776326615_1776322395798.png"
          alt="Luxury Independent Hotel Lobby"
          fill
          className="object-cover brightness-[0.35] scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <Link href="/services/brand-partnership-solutions" className="inline-flex items-center text-mustard hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Back to Partnerships</span>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-mustard" />
              <span className="text-mustard font-bold text-xs md:text-sm tracking-[0.5em] uppercase">
                Strategic Path 02
              </span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.95] mb-8 tracking-tighter">
              Build Your <br />
              <span className="italic font-light">Legacy.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-white/60 text-lg md:text-2xl max-w-2xl leading-relaxed font-light mb-12">
              Breaking the franchise chain to build a unique, high-yield independent identity that captures the future of global travel.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button
                onClick={() => setShowBooking(true)}
                className="inline-flex items-center gap-4 bg-mustard text-black px-12 py-6 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 rounded-none group"
              >
                Inquire About Your Brand <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stat Overlay */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-20 right-10 hidden lg:block border-l border-mustard/30 pl-8"
        >
          <div className="text-4xl font-serif italic text-white mb-1">32%</div>
          <div className="text-[9px] tracking-[0.3em] uppercase text-white/40 leading-relaxed">
            Revenue uplift in <br />
            independent conversions
          </div>
        </motion.div>
      </section>

      {/* 2. THE PHILOSOPHY SECTION */}
      <Section spacing="lg" className="bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                  Escape the <br />
                  <span className="italic text-mustard">Standardized Room.</span>
                </h2>
                <div className="w-20 h-1 bg-mustard" />
              </motion.div>
              
              <div className="space-y-8 text-white/60 text-lg font-light leading-relaxed">
                <p>
                  Global franchises offer predictability, but they often sacrifice **storytelling, local flavor, and owner equity**. An independent brand isn't just a hotel—it's an asset with its own soul.
                </p>
                <p>
                  At Vnexora, we provide the institutional-grade backbone (Sales, Operations, Distribution) but wrap it in a custom-built identity that you own, 100%. No royalty fees. No brand-standards interference. Just performance.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/services/hotel-audit-1.png"
                  alt="Minimalist Luxury Asset"
                  fill
                  className="object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-mustard p-10 hidden md:block">
                <p className="text-black font-serif italic text-2xl leading-tight">
                  "Authenticity is the <br />new Luxury."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. THE FRAMEWORK GRID */}
      <section className="py-24 bg-white text-black overflow-hidden relative">
        {/* Large Decorative Text */}
        <div className="absolute -top-10 -right-20 text-[20vw] font-serif italic opacity-[0.03] select-none pointer-events-none">
          Legacy
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 space-y-4">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-black/20 block">The Vnexora Process</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-[0.9] text-black italic">
                Strategic <br />
                <span className="not-italic font-black uppercase">Pillars of Success.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Eye,
                  title: "Brand Identity",
                  desc: "Logos, naming, color theory, and the core 'guest promise' that sets you apart from chains."
                },
                {
                  icon: PenTool,
                  title: "Design Language",
                  desc: "Curation of interiors, uniforms, and tactile elements that speak your brand's unique language."
                },
                {
                  icon: Globe,
                  title: "Global Distribution",
                  desc: "Institutional integration with OTAs and GDS without the franchise fee structure."
                },
                {
                  icon: ShieldCheck,
                  title: "Operational Shield",
                  desc: "Vnexora-managed operations ensuring 5-star standards under your own flagship name."
                }
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-10 border border-black/5 hover:bg-black hover:text-white transition-all duration-700 h-[350px] flex flex-col"
                >
                  <div className="w-12 h-12 bg-black/5 flex items-center justify-center mb-10 group-hover:bg-mustard group-hover:text-black transition-all">
                    <pillar.icon size={20} />
                  </div>
                  <h3 className="text-2xl font-serif mb-6">{pillar.title}</h3>
                  <p className="text-sm font-light opacity-50 group-hover:opacity-70 leading-relaxed">
                    {pillar.desc}
                  </p>
                  <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-bold uppercase tracking-widest border-b border-mustard pb-1">Mastery 0{idx+1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mustard to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-mustard">The Commencement</h4>
            <h2 className="text-5xl md:text-8xl font-serif leading-tight">
              Ready to grow <br />
              <span className="italic text-mustard">beyond the brand?</span>
            </h2>
          </motion.div>
          
          <button
            onClick={() => setShowBooking(true)}
            className="inline-flex items-center gap-6 border border-white/20 px-16 py-8 hover:bg-mustard hover:text-black hover:border-mustard transition-all duration-700 group"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">Initialize Your Brand Brief</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* MODAL SYSTEM */}
      <AnimatePresence>
        {showBooking && (/* Standard Booking Modal - Can be extracted to a component later if needed */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBooking(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#080808] border border-white/[0.07] rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CFA052] to-transparent" />
              <div className="flex items-start justify-between p-10 pb-6">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.6em] text-[#CFA052] mb-3">Institutional Briefing</div>
                  <h3 className="text-3xl font-serif italic text-white leading-tight">Begin Your Personal<br />Brand Evolution.</h3>
                </div>
                <button onClick={() => setShowBooking(false)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all">
                  <X size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pb-8">
                {[
                  { icon: Calendar, label: "CEO Meeting", desc: "Private consultation with our directorate for full-scale brand architecture.", cta: "Book Session", href: "mailto:contact@vnexora.com", highlight: true },
                  { icon: Video, label: "Brand Discovery", desc: "A virtual deep-dive into your asset potential and competitive identity.", cta: "Schedule Call", href: "#", highlight: false },
                  { icon: FileText, label: "Technical Brief", desc: "Submit your asset details for a clinical brand feasibility audit.", cta: "Send Brief", href: "#", highlight: false },
                ].map((opt, i) => (
                  <div key={i} className={`p-8 rounded-2xl flex flex-col gap-6 cursor-pointer transition-all border ${opt.highlight ? "bg-mustard border-mustard text-black" : "bg-white/[0.03] border-white/10 hover:border-mustard/30"}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${opt.highlight ? "bg-black/10" : "bg-mustard/10 text-mustard"}`}>
                      <opt.icon size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest mb-2">{opt.label}</div>
                      <p className="text-xs opacity-60 leading-relaxed">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
