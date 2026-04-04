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
  Check,
  ArrowRight,
  Globe,
  Search,
  ShieldCheck,
  Target,
  Key,
  TrendingUp,
  LayoutDashboard,
  Store,
  Handshake,
  Scaling,
  PieChart
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/* ═══════════════════════════════════════════
   DESIGN TOKENS: "COMMERCIAL MIDNIGHT"
   Primary: #CFA052 (Mustard Gold)
   Background: #050505 (Deep Black)
   Form: bg-white/5 (Glass)
   Text: #FFFFFF (Pure Ivory)
   ═══════════════════════════════════════════ */

const GOLD = "#CFA052";

const FloatingBadge = ({ icon: Icon, label, value, delay = 0 }: { icon: any; label: string; value: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-5 group hover:border-[#CFA052]/30 transition-all duration-500"
  >
    <div className="w-12 h-12 rounded-xl bg-[#CFA052]/10 flex items-center justify-center text-[#CFA052] group-hover:bg-[#CFA052] group-hover:text-black transition-all duration-500">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1">{label}</p>
      <p className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>{value}</p>
    </div>
  </motion.div>
);

export default function CommercialSpacePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const services = [
    {
      title: "Institutional Acquisition",
      desc: "Precision sourcing for commercial assets with high-yield potential and institutional-grade legal vetting.",
      icon: Search,
      tags: ["Off-Market", "Due Diligence", "ROI Focused"],
      action: "Log Buy Mandate"
    },
    {
      title: "Asset Disposition",
      desc: "Discreet and professional divestment strategies for your commercial portfolio, reaching global family offices.",
      icon: Handshake,
      tags: ["Valuation", "Global Reach", "Discreet"],
      action: "Register for Sale"
    },
    {
      title: "Strategic Leasing",
      desc: "Optimizing vacancy through global tenant networks and long-term lease structures for yield stability.",
      icon: Key,
      tags: ["Multi-Tenant", "Retail", "HQ Office"],
      action: "Lease Management"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-white selection:bg-[#CFA052]/30 overflow-x-hidden">
      <Navbar />

      {/* ══════════ HERO SECTION: CINEMATIC ══════════ */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/hero_city_night.png" 
            alt="Commercial Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-[#CFA052] mb-8 block">
              Strategic Commercial Advisories
            </span>
            <h1 className="text-[clamp(45px,10vw,110px)] font-bold text-white mb-10 leading-[0.95] tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>
              Institutional <span className="italic font-light opacity-80 text-[#CFA052]">Commercial Assets</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed tracking-wide mb-12">
              Bespoke solutions for the acquisition, disposition, and leasing of premium office, retail, and industrial portfolios.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
               <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-10 py-5 bg-[#CFA052] text-black text-[10px] font-bold uppercase tracking-[0.3em] rounded-full shadow-2xl shadow-[#CFA052]/20 border border-transparent hover:bg-white transition-all duration-500"
               >
                 Inquire Now
               </motion.button>
               <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-10 py-5 bg-white/5 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full border border-white/10 hover:bg-white/10 transition-all duration-500"
               >
                 View Portfolio
               </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ SERVICES TRIAD: 3 FOCUS AREAS ══════════ */}
      <section className="py-32 px-6 relative z-10 bg-[#050505]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="group relative bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 hover:border-[#CFA052]/20 transition-all duration-500 overflow-hidden"
              >
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CFA052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#CFA052] mb-8 group-hover:bg-[#CFA052] group-hover:text-black transition-all duration-700">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {service.title}
                  </h3>
                  <p className="text-white/40 font-light leading-relaxed mb-8 h-20">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[9px] uppercase tracking-[0.1em] font-bold text-white/30 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-3 text-[#CFA052] text-[10px] font-bold uppercase tracking-[0.3em] group/btn">
                    {service.action}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ STATS & PERFORMANCE ══════════ */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FloatingBadge icon={TradingUp} label="Current Portfolio Cap" value="$ 850M +" delay={0.1} />
            <FloatingBadge icon={Globe} label="Global Market Access" value="12+ Countries" delay={0.2} />
            <FloatingBadge icon={PieChart} label="Average Asset Yield" value="8.4 % ARR" delay={0.3} />
            <FloatingBadge icon={Scaling} label="Transactions Managed" value="1.2M Sq. Ft." delay={0.4} />
          </div>
        </div>
      </section>

      {/* ══════════ SPECIALIZED INQUIRY FORM ══════════ */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-white/5 backdrop-blur-[60px] rounded-[4rem] border border-white/10 overflow-hidden shadow-[0_50px_120px_-20px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left Side: Branding / Trust */}
              <div className="p-12 lg:p-24 bg-[#0A0A0A] border-r border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#CFA052] tracking-[0.5em] uppercase mb-10 block">Consultation</span>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Log Your Commercial <span className="italic font-light opacity-60">Mandate</span>
                  </h2>
                  <p className="text-white/40 font-light leading-relaxed mb-12">
                    Our advisors specialize in high-ticket commercial assets across Grade-A office, premium retail, and data center developments.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: ShieldCheck, text: "Strict Confidentiality Guaranteed" },
                      { icon: Target, text: "Precision Asset Sourcing" },
                      { icon: LayoutDashboard, text: "Structural Due Diligence" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-white/60 text-sm font-light">
                        <div className="w-8 h-8 rounded-lg bg-[#CFA052]/10 flex items-center justify-center text-[#CFA052]">
                          <item.icon size={16} />
                        </div>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#CFA052] animate-pulse" />
                      <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/30">Advisory Desk is currently Active</span>
                   </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-12 lg:p-20">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 gap-8">
                      {/* Name */}
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#CFA052]/60 ml-1">Asset Manager Name</label>
                        <input required type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10" placeholder="Johnathan Miller" />
                      </div>
                      
                      {/* Contact */}
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#CFA052]/60 ml-1">Corporate Contact</label>
                        <input required type="tel" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10" placeholder="+91 000 000 0000" />
                      </div>

                      {/* Mandate Type */}
                      <div className="space-y-3">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#CFA052]/60 ml-1">Requirement Type</label>
                        <div className="flex gap-3">
                          {["Buy", "Sell", "Lease"].map(type => (
                            <button key={type} type="button" className="flex-1 py-3 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-[#CFA052]/40 transition-all text-white/40 hover:text-white bg-white/5">{type}</button>
                          ))}
                        </div>
                      </div>

                      {/* Square Footage */}
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#CFA052]/60 ml-1">Target Surface Area (Sq. Ft.)</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10" placeholder="50,000 - 250,000" />
                      </div>

                      {/* Location */}
                      <div className="space-y-3 group">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#CFA052]/60 ml-1">Preferred Location(s)</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10" placeholder="Mumbai, BKC, Gurugram" />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-6 bg-[#CFA052] text-black rounded-2xl font-bold tracking-[0.4em] uppercase text-[10px] shadow-2xl hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 group"
                    >
                      <span>Transmit Mandate</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#CFA052]/40 shadow-2xl">
                      <Check className="w-10 h-10 text-[#CFA052]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 italic" style={{ fontFamily: 'var(--font-playfair)' }}>Transmitted.</h3>
                    <p className="text-white/40 mb-10 max-w-xs mx-auto font-light leading-relaxed">
                      Our commercial desk will analyze your request and reach out via corporate secure channels.
                    </p>
                    <Link href="/">
                      <button className="px-10 py-4 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                        Exit Desk
                      </button>
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
