"use client";

import React, { useRef, useState } from "react";
import { 
  motion, 
  useScroll, 
  useTransform 
} from "framer-motion";
import { 
  ArrowRight, 
  Cpu, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Lock,
  ChevronRight,
  TrendingUp,
  Users2,
  Cloud,
  Zap,
  ArrowUpRight,
  Database,
  UtensilsCrossed,
  Sparkles,
  Gift,
  CalendarDays,
  LayoutDashboard,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function ProMaxTechHub() {
  const formRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-mustard/30 selection:text-white overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO SECTION (BRANDING STYLE - NO GRADIENT) */}
      <div className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-black">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hotel_guests_enjoying.png"
            alt="Digital Hospitality Excellence"
            fill
            className="object-cover brightness-[0.4] saturate-[1.1] scale-105"
            priority
          />
          {/* Neural Mesh Overlay */}
          <div className="absolute inset-0 bg-[url('/images/services/property_development.png')] opacity-[0.05] grayscale invert mix-blend-overlay pointer-events-none" />
        </motion.div>
        
        {/* Solid Readability Overlay (No Gradient) */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="container relative z-20 mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link href="/" className="inline-flex items-center text-mustard/80 hover:text-mustard transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-3 transition-transform group-hover:-translate-x-2" />
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em]">Back to Portfolio</span>
            </Link>
          </motion.div>

          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-[10px] font-black tracking-[0.6em] text-mustard uppercase mb-8 block font-sans">Institutional Hub | Technology & AI</span>
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-sans font-medium text-white leading-[0.9] tracking-tighter mb-8">
                Architecting <br />
                <span className="font-serif italic font-light text-mustard">Hospitality ROI.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 border-t border-white/10 pt-12"
            >
              <p className="text-white/60 font-sans font-light text-lg md:text-xl max-w-xl leading-relaxed tracking-tight">
                Vnexora engineers the direct revenue ecosystems and operational grids that define modern legacy portfolios through intelligence.
              </p>
              <Button 
                onClick={scrollToForm}
                className="w-fit px-10 py-5 bg-mustard text-black font-sans font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl rounded-none"
              >
                Log Your Mandate
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator (No Gradient) */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-10 z-20 hidden md:block"
        >
          <div className="w-[1px] h-20 bg-mustard/40" />
        </motion.div>
      </div>

      {/* 2. THE REVENUE RECLAIM (WEB VALUE - LIGHT) */}
      <Section spacing="lg" className="bg-[#FAF9F6] relative z-20">
         <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
               <div className="order-2 lg:order-1 max-w-2xl">
                  <span className="text-[11px] font-black tracking-[0.5em] text-mustard uppercase mb-10 block font-sans">The Direct Booking Mandate</span>
                  <h2 className="text-4xl md:text-7xl font-serif text-[#050505] leading-[0.95] mb-10 tracking-tighter">
                     Reclaim 100% of <br /> 
                     <span className="italic font-light text-mustard">Your Guest Narrative.</span>
                  </h2>
                  <p className="text-stone-500 text-xl md:text-2xl font-light leading-relaxed mb-14 italic border-l-4 border-mustard/30 pl-10">
                    "Websites should be revenue engines, not cost centers. We build the digital authority that bypasses OTAs, eliminating the 15-25% commission tax."
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <div className="p-8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-stone-100 rounded-3xl transition-transform hover:-translate-y-2 duration-500">
                        <TrendingUp className="w-6 h-6 text-mustard mb-6" />
                        <h4 className="text-[12px] font-black tracking-[0.1em] uppercase text-[#050505] mb-3">0% Commission Ecosystem</h4>
                        <p className="text-stone-400 text-sm font-light leading-relaxed">Direct conversion architecture that turns anonymous traffic into high-value loyalty members instantly.</p>
                     </div>
                     <div className="p-8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-stone-100 rounded-3xl transition-transform hover:-translate-y-2 duration-500">
                        <Users2 className="w-6 h-6 text-mustard mb-6" />
                        <h4 className="text-[12px] font-black tracking-[0.1em] uppercase text-[#050505] mb-3">Guest Data Ownership</h4>
                        <p className="text-stone-400 text-sm font-light leading-relaxed">Stop letting OTAs own your guest relationships. Capture, analyze, and retain the lifeblood of your asset.</p>
                     </div>
                  </div>
               </div>

               <div className="order-1 lg:order-2">
                  <div className="relative aspect-[3/4] md:aspect-square rounded-[5rem] overflow-hidden shadow-[0_100px_150px_rgba(0,0,0,0.08)] border-[12px] border-white group">
                     <Image 
                       src="/images/services/property_development.png" 
                       alt="Luxury Digital Infrastructure"
                       fill
                       className="object-cover group-hover:scale-105 transition-transform duration-[4s] saturate-[1.2]"
                     />
                     <div className="absolute inset-0 bg-stone-900/60 opacity-80" />
                     <div className="absolute bottom-16 left-16 right-16 text-white">
                        <div className="text-[10px] font-black tracking-[0.5em] uppercase mb-4 text-mustard">Direct Profit Lift</div>
                        <div className="text-7xl md:text-8xl font-serif leading-none italic">+40%</div>
                        <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em] mt-6 leading-relaxed">Historical Average Revenue Recovery <br /> Across Vnexora Digital Migrations.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* 3. THE REVENUE UPLIFT (APP VALUE - LIGHT) */}
      <Section spacing="lg" className="bg-white relative z-20">
         <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
               <div className="relative order-1">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-square md:aspect-[4/5] rounded-[5rem] overflow-hidden shadow-[0_100px_150px_rgba(0,0,0,0.12)] border-[1px] border-stone-100 group"
                  >
                     <Image 
                       src="/images/luxury_guest_tablet_app_view_1775418764173.png" 
                       alt="Native Mobile Guest Hub"
                       fill
                       className="object-cover transition-transform duration-[10s] group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />
                  </motion.div>
                  {/* Floating Analytics Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-16 -right-12 bg-[#050505] p-12 shadow-[0_50px_100px_rgba(0,0,0,0.3)] rounded-[3rem] md:w-[380px] hidden md:block"
                  >
                     <p className="text-[11px] font-black tracking-[0.5em] text-mustard uppercase mb-6 italic">In-Stay Expenditure</p>
                     <div className="flex items-end gap-5">
                        <span className="text-6xl font-serif text-white italic">+30%</span>
                        <div className="h-14 w-[1px] bg-white/20" />
                        <span className="text-[10px] font-bold text-white/40 uppercase leading-snug mb-2 tracking-widest">Automatic F&B <br /> & SPA Upsells</span>
                     </div>
                  </motion.div>
               </div>

               <div className="order-2 max-w-2xl lg:pl-10">
                  <span className="text-[11px] font-black tracking-[0.5em] text-mustard uppercase mb-10 block font-sans">The Mobile Concierge hub</span>
                  <h2 className="text-4xl md:text-7xl font-serif text-[#050505] leading-[0.95] mb-10 tracking-tighter">
                     A Concierge In <br /> 
                     <span className="italic font-light text-mustard">Every Pocket.</span>
                  </h2>
                  <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                    Our native iOS & Android suites transform guest devices into 24/7 revenue engines. Drive real-time service requests, Spa bookings, and F&B orders without adding staff overhead.
                  </p>
                  
                  <div className="space-y-12 mb-16">
                     {[
                        { title: "One-Touch F&B", desc: "Digital dining menus with intelligent kitchen orchestration.", icon: UtensilsCrossed },
                        { title: "Smart Logic Booking", desc: "Instant Spa and Activity booking with dynamic availability sync.", icon: Sparkles },
                        { title: "Digital Key Integration", desc: "Secure room access via Apple/Google Wallet institutional protocols.", icon: Smartphone }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-8 group">
                           <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center flex-shrink-0 group-hover:bg-mustard group-hover:bg-opacity-10 transition-colors duration-500">
                             <item.icon className="w-6 h-6 text-stone-300 group-hover:text-mustard transition-colors duration-500" />
                           </div>
                           <div>
                              <h4 className="text-[12px] font-black tracking-[0.1em] uppercase text-[#050505] mb-3">{item.title}</h4>
                              <p className="text-stone-400 text-sm font-light leading-relaxed max-w-md">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <Button className="rounded-full bg-[#050505] text-white hover:bg-mustard hover:text-black px-12 py-8 text-[11px] font-black tracking-[0.5em] transition-all duration-700 shadow-2xl group flex items-center gap-4">
                     PRODUCT SHOWCASE <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Button>
               </div>
            </div>
         </div>
      </Section>

      {/* 4. THE FUNCTIONAL MODULES (OPERATIONAL GRID - LIGHT) */}
      <section className="bg-white py-40 border-t border-stone-100 overflow-hidden">
          <div className="container mx-auto px-6 max-w-[1400px]">
             <div className="text-center mb-32 max-w-4xl mx-auto">
                <span className="text-[10px] font-black tracking-[0.6em] text-mustard uppercase mb-10 block font-sans">Comprehensive Operational Modules</span>
                <h2 className="text-4xl md:text-[6rem] font-serif text-[#050505] mb-12 tracking-tighter leading-none italic">Institutional Support. <br /> <span className="font-light not-italic text-stone-300">Across Every Vertical.</span></h2>
                <div className="w-32 h-[1px] bg-mustard mx-auto" />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  { 
                    title: "F&B ORCHESTRATION", 
                    desc: "Full kitchen display systems (KDS), mobile table ordering, and vendor inventory logic.",
                    icon: UtensilsCrossed, 
                    img: "/images/services/brand_partnerships.png" 
                  },
                  { 
                    title: "HOUSEKEEPING HUB", 
                    desc: "Real-time room status tracking, staff performance analytics, and automated maintenance triggers.",
                    icon: LayoutDashboard, 
                    img: "/images/hospitality_staff_dashboard_modern_operations_1775419597105.png" 
                  },
                  { 
                    title: "LOYALTY ECOSYSTEM", 
                    desc: "Dynamic tier-based rewards, guest CRM profiling, and multi-channel campaign automation.",
                    icon: Gift, 
                    img: "/images/services/hotel_brand_collage.png" 
                  },
                  { 
                    title: "BANQUET & EVENTS", 
                    desc: "Group booking logistics, B-to-B event orchestration, and luxury wedding mandate tools.",
                    icon: CalendarDays, 
                    img: "/images/hr/luxury_wedding_banquet_banner_grand_mandap_palace_lawn_royal_floral_decor_indian_wedding_elite_hospitality_night_shot_1775184233662.png" 
                  },
                  { 
                    title: "GUEST FEEDBACK", 
                    desc: "Sentiment analysis and real-time issue remediation before guest check-out occurs.",
                    icon: Users2, 
                    img: "/images/hotel_guests_enjoying.png" 
                  },
                  { 
                    title: "YIELD LOGIC", 
                    desc: "AI-driven dynamic pricing synchronizing nightly rates across the global distribution grid.",
                    icon: TrendingUp, 
                    img: "/images/hospitality_tech_dashboard_mockup_1775418101371.png" 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                     <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-8 shadow-xl">
                        <Image src={item.img} alt={item.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                        <div className="absolute inset-0 bg-[#050505]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                           <item.icon className="w-12 h-12 text-mustard" />
                        </div>
                     </div>
                     <h4 className="text-[12px] font-black tracking-[0.2em] text-[#050505] mb-4 uppercase">{item.title}</h4>
                     <p className="text-stone-400 text-sm font-light leading-relaxed italic">{item.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
      </section>

      {/* 5. THE AI NEURAL GRID (INNOVATION SECTION - DARK) */}
      <section className="relative py-48 overflow-hidden bg-[#050505]">
          {/* Neural Background */}
          <div className="absolute inset-0 opacity-[0.03] z-0 grayscale invert pointer-events-none">
             <Image src="/images/services/property_development.png" alt="" fill className="object-cover" />
          </div>

          <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
             <div className="max-w-5xl mb-40">
                <span className="text-[10px] font-black tracking-[0.6em] text-mustard uppercase mb-10 block font-sans">Neural Yield Optimization</span>
                <h2 className="text-5xl md:text-[8rem] font-serif text-white tracking-tighter leading-[0.8] mb-12 italic">
                   Anticipate the <br /> 
                   <span className="font-light not-italic text-mustard">Exceptional.</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                   <p className="text-white/40 text-xl font-light leading-relaxed max-w-xl italic border-l border-mustard/20 pl-12 py-4">
                      Vnexora Deployments don't just respond; they predict. Using proprietary deep-learning models to forecast occupancy and guest sentiment with 99.2% fidelity.
                   </p>
                   <div className="flex gap-4 items-center px-12 py-8 border border-white/5 bg-white/[0.02] rounded-3xl">
                      <div className="w-3 h-3 rounded-full bg-mustard animate-pulse" />
                      <span className="text-[10px] font-black tracking-widest text-white/50 uppercase italic">Active Neural Prediction Mode</span>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 space-y-8">
                   <div className="p-16 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[4rem] group hover:bg-white/[0.05] hover:border-mustard/20 transition-all duration-700">
                      <Cpu className="text-mustard w-12 h-12 mb-10 opacity-30 group-hover:opacity-100 transition-all duration-700" />
                      <h4 className="text-3xl font-serif text-white mb-6 uppercase tracking-tight italic">Yield Intelligence</h4>
                      <p className="text-white/30 text-sm font-light leading-relaxed">Dynamic pricing engines synchronizing across the global grid to capture every cent of potential ADR margin.</p>
                   </div>
                   <div className="p-16 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[4rem] group hover:bg-white/[0.05] hover:border-mustard/20 transition-all duration-700">
                      <Zap className="text-mustard w-12 h-12 mb-10 opacity-30 group-hover:opacity-100 transition-all duration-700" />
                      <h4 className="text-3xl font-serif text-white mb-6 uppercase tracking-tight italic">Neural Service</h4>
                      <p className="text-white/30 text-sm font-light leading-relaxed">Multilingual staff-replacement bots handling 85% of guest requests with institutional concierge etiquette.</p>
                   </div>
                </div>

                <div className="md:col-span-7">
                   <div className="relative aspect-[16/10] rounded-[5rem] overflow-hidden border border-white/10 group shadow-[0_100px_150px_rgba(0,0,0,0.5)]">
                      <Image 
                        src="/images/hospitality_tech_dashboard_mockup_1775418101371.png" 
                        alt="AI Performance Matrix"
                        fill
                        className="object-cover saturate-[1.5] brightness-75 group-hover:scale-105 transition-transform duration-[12s]"
                      />
                      <div className="absolute inset-0 bg-stone-900/60 opacity-90" />
                      <div className="absolute bottom-16 left-16 p-12 bg-black/70 backdrop-blur-3xl border border-white/5 rounded-[3rem] w-[420px]">
                         <p className="text-[11px] font-black tracking-[0.5em] text-mustard uppercase mb-6 italic">Neural Grid Health</p>
                         <div className="text-5xl font-serif text-white tracking-tighter">99.9% Integrity</div>
                         <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mt-6 leading-loose">Automated ADR Guardrails & <br /> Sentiment Monitoring Engaged Portfolio-Wide.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
      </section>

      {/* 6. THE INSTITUTIONAL TECH CONCIERGE (SUPPORT - DARK) */}
      <section className="bg-[#050505] py-48 relative border-t border-white/5">
          <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
             <div className="text-center mb-32 max-w-4xl mx-auto">
                <span className="text-[11px] font-black tracking-[0.6em] text-mustard uppercase mb-10 block font-sans">Institutional Reliability</span>
                <h2 className="text-4xl md:text-[7rem] font-serif text-white mb-10 tracking-tighter leading-none uppercase">Support That <br /> <span className="italic font-light text-mustard">Never Sleeps.</span></h2>
                <p className="text-white/30 font-light text-sm md:text-lg tracking-[0.3em] uppercase italic">A dedicated technical mandate for the global luxury grid.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "PMS/CRS MIGRATION", icon: Database, desc: "Seamless legacy migrations with zero operational downtime guaranteed across the transition mandate." },
                  { title: "TECHNICAL CONCIERGE", icon: Globe, desc: "24/7 dedicated hospitality tech analysts available for your global property executive teams." },
                  { title: "CLOUD INFRASTRUCTURE", icon: Cloud, desc: "Institutional-grade secure hosting for HNW guest data and inventory with 99.99% uptime mandate." },
                  { title: "SECURITY & COMPLIANCE", icon: ShieldCheck, desc: "AES-256 encrypted protocols, multi-layer firewalls, and deep SOC-2 compliance for elite portfolios." }
                ].map((item, i) => (
                  <div key={i} className="p-16 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 rounded-[3rem] group">
                     <item.icon className="w-10 h-10 text-mustard/20 group-hover:text-mustard transition-colors duration-700 mb-10" />
                     <h4 className="text-[12px] font-black tracking-[0.3em] text-white/95 mb-6 uppercase font-sans">{item.title}</h4>
                     <p className="text-white/20 text-[13px] font-light leading-relaxed italic group-hover:text-white/40 transition-colors duration-700">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
      </section>

      {/* 7. STRATEGIC ROI AUDIT (BOOKING FORM - DARK) */}
      <section ref={formRef} className="relative py-48 overflow-hidden bg-[#FAF9F6]">
         <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
            <div className="bg-white/[0.02] backdrop-blur-[100px] p-10 md:p-20 shadow-[0_80px_160px_rgba(0,0,0,0.5)] rounded-[4rem] border border-white/10 relative overflow-hidden group max-w-5xl mx-auto">
               {/* Background Glow */}
               <div className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] bg-mustard/[0.03] rounded-full blur-[120px] pointer-events-none" />

               <div className="mb-20 text-center relative z-10">
                  <h3 className="text-[11px] font-black tracking-[0.8em] text-mustard uppercase mb-8 font-sans">Growth Mandate: Q3-Q4 2026</h3>
                  <h2 className="text-4xl md:text-[7rem] font-serif text-white leading-[0.9] tracking-tighter mb-10">Initiate Your <br /> <span className="italic font-light text-mustard">Digital Evolution.</span></h2>
                  <p className="text-white/40 text-sm md:text-xl font-light tracking-[0.1em] uppercase italic max-w-3xl mx-auto">
                     Request a strategic ROI audit to identify commission leakage <br className="hidden md:block" /> and unlock your asset's institutional yield.
                  </p>
               </div>

               <form className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 max-w-4xl mx-auto">
                  <div className="space-y-4">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] text-mustard/50 font-sans">Portfolio focus</label>
                     <div className="relative group/select">
                        <select className="w-full bg-white/[0.03] border-b border-white/10 py-5 px-4 text-white font-serif text-xl focus:outline-none focus:border-mustard transition-all appearance-none italic rounded-t-xl group-hover/select:bg-white/[0.05]">
                           <option className="bg-[#0b0c10]">Direct Booking Ecosystem (Web)</option>
                           <option className="bg-[#0b0c10]">High-Yield Mobile Hub (App)</option>
                           <option className="bg-[#0b0c10]">AI Yield & Sentiment Grid</option>
                           <option className="bg-[#0b0c10]">Full-Spectrum Support Mandate</option>
                           <option className="bg-[#0b0c10]">Multi-Module Operational Suite</option>
                        </select>
                        <ChevronRight className="w-5 h-5 text-mustard absolute right-4 top-1/2 -translate-y-1/2 rotate-90 opacity-40 group-hover/select:opacity-100 transition-opacity" />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] text-mustard/50 font-sans">Asset Profile (Annual Rev)</label>
                     <input type="text" placeholder="E.G. $5M+ ARR" className="w-full bg-white/[0.03] border-b border-white/10 py-5 px-4 text-white font-serif text-xl focus:outline-none focus:border-mustard transition-all placeholder:text-white/10 italic rounded-t-xl hover:bg-white/[0.05]" />
                  </div>
                  
                  <div className="col-span-2 space-y-4 mt-6">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] text-mustard/50 font-sans">Expansion Mandate details</label>
                     <textarea rows={4} placeholder="DESCRIBE YOUR CURRENT COMMISSION LEAKAGE, TECH INFRASTRUCTURE, OR GROWTH TARGETS..." className="w-full bg-white/[0.02] border border-white/5 p-8 text-white font-serif font-light text-lg focus:outline-none focus:border-mustard transition-all placeholder:text-white/5 resize-none rounded-[2.5rem] italic hover:bg-white/[0.04]" />
                  </div>

                  <div className="col-span-2 pt-12">
                     <Button className="w-full h-24 bg-mustard text-black hover:bg-white transition-all duration-700 text-[12px] font-black tracking-[0.6em] rounded-full uppercase shadow-[0_20px_40px_rgba(212,175,55,0.15)] relative overflow-hidden group/btn">
                        <span className="relative z-20">REQUEST ROI AUDIT REPORT</span>
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover/btn:h-full transition-all duration-700 ease-[0.22, 1, 0.36, 1]" />
                     </Button>
                     <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 opacity-20 group-hover:opacity-40 transition-opacity">
                        <span className="text-[9px] font-black tracking-[0.3em] text-white flex items-center gap-3">
                           <Lock className="w-3.5 h-3.5 text-mustard" /> VNEXORA SECURE GATEWAY
                        </span>
                        <div className="w-[1px] h-3 bg-white/20 hidden md:block" />
                        <span className="text-[9px] font-black tracking-[0.3em] text-white italic uppercase">Protocol: AES-256 // SOC-2 COMPLIANT</span>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </section>

      {/* ADDITIONAL PADDING FOR FOOTER PUSH */}
      <div className="pb-60 bg-[#FAF9F6]" />
    </main>
  );
}
