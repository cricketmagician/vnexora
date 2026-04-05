"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Cpu, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Database, 
  Code2, 
  Lock,
  ChevronRight,
  Monitor
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function DigitalTransformationPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const techServicePillars = [
    {
      title: "Bespoke Mobile Suites",
      desc: "Pure-native iOS & Android guest concierges that replace physical touchpoints with high-fidelity digital interactions.",
      icon: Smartphone,
      tags: ["NATIVE iOS", "ANDROID", "WALLET INTEGRATION"]
    },
    {
      title: "AI Neural Guest Intelligence",
      desc: "Deep-learning 24/7 concierges and sentiment-driven revenue engines that forecast demand with surgical precision.",
      icon: Cpu,
      tags: ["LLM CONCIERGE", "PREDICTIVE ANALYTICS", "SENTIMENT"]
    },
    {
      title: "Direct Web Ecosystems",
      desc: "High-conversion, institutional-grade booking platforms that prioritize brand storytelling over generic OTA layouts.",
      icon: Globe,
      tags: ["NEXT.JS", "HEADLESS CMS", "STRIPE ENCRYPTED"]
    }
  ];

  const integrationLogos = [
    "Opera Cloud", "Siteminder", "Amadeus", "Stripe", "Symphony", "Sabre", "SynXis", "HotSOS"
  ];

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-mustard/30 selection:text-white overflow-hidden">
      
      {/* 1. CINEMATIC TECH HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Animation Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/hotel_brokerage.png" 
            alt="Digital Infrastructure"
            fill
            className="object-cover opacity-[0.15] scale-110 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        </div>

        {/* Floating Code Backdrop */}
        <div className="absolute inset-x-0 top-0 h-full z-10 pointer-events-none opacity-20 mask-gradient">
           <div className="container mx-auto px-10 pt-40">
             <div className="font-mono text-[10px] text-mustard/40 leading-relaxed uppercase space-y-1">
                <p>VNEXORA DIGITAL CORE // INITIALIZING PROTOCOLS</p>
                <p>AUTH_TOKEN: 0x82f...912 // AES-256 ENCRYPTION ACTIVE</p>
                <p>NEURAL_ENGINE: STABLE // GUEST_SENTIMENT_SYNC: 99.9%</p>
                <p>SCANNING ASSET_INFRASTRUCTURE: HOSPITALITY_PRO_MAX</p>
             </div>
           </div>
        </div>

        <div className="container relative z-20 px-6 text-center max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
             {/* THE GENERATED MOCKUP TABLET */}
             <div className="relative w-full max-w-4xl mx-auto mb-20 group">
                <div className="absolute -inset-10 bg-mustard/5 blur-[120px] rounded-full group-hover:bg-mustard/10 transition-all duration-1000" />
                <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                   <Image 
                     src="/images/hospitality_tech_dashboard_mockup.png"
                     alt="Vnexora Tech Ecosystem"
                     fill
                     className="object-cover saturate-[1.2] group-hover:scale-105 transition-transform duration-[10s]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                {/* Floating Tags around Device */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl hidden lg:block shadow-2xl"
                >
                   <p className="text-[10px] font-black tracking-widest text-mustard uppercase mb-2">AI SENTIMENT</p>
                   <div className="flex gap-2">
                      <div className="w-12 h-1 bg-mustard/20 rounded-full overflow-hidden">
                        <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 2, repeat: Infinity }} className="w-full h-full bg-mustard" />
                      </div>
                      <span className="text-[8px] text-white/40 font-bold">98% CALIBRATED</span>
                   </div>
                </motion.div>
             </div>

             {/* Hero Typography */}
             <div className="max-w-4xl mx-auto">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-[0.9] mb-10"
                >
                  The Digital <span className="italic font-light text-mustard">Spine.</span>
                </motion.h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                   <div className="h-[1px] w-12 bg-mustard/30 hidden md:block" />
                   <p className="text-white/40 text-sm md:text-lg font-light tracking-[0.2em] uppercase max-w-xl italic">
                     Bespoke Software suites & neural guest concierges for the world's most prestigious portfolios.
                   </p>
                   <div className="h-[1px] w-12 bg-mustard/30 hidden md:block" />
                </div>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <Button onClick={scrollToForm} size="lg" className="rounded-full bg-mustard text-black hover:bg-white px-10 py-6 text-xs font-black tracking-widest shadow-2xl shadow-mustard/20">
                    REQUEST SYSTEM AUDIT
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full border-white/10 text-white hover:bg-white/5 px-10 py-6 text-xs font-black tracking-widest">
                    EXPLORE ARCHITECTURE
                  </Button>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-mustard/40 to-transparent" />
        </motion.div>
      </section>

      {/* 2. THE PILLARS OF TRANSFORMATION */}
      <Section spacing="lg">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {techServicePillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="group relative p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all duration-700 hover:-translate-y-4"
                >
                   <div className="mb-12 inline-flex p-5 bg-mustard/10 rounded-3xl text-mustard group-hover:bg-mustard group-hover:text-black transition-all duration-500 shadow-xl shadow-mustard/5">
                      <pillar.icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-2xl font-serif text-white mb-6 uppercase tracking-tight">{pillar.title}</h3>
                   <p className="text-white/40 text-sm font-light leading-relaxed mb-10 min-h-[60px]">
                      {pillar.desc}
                   </p>
                   
                   <div className="flex flex-wrap gap-2 mt-auto">
                      {pillar.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-black tracking-[0.2em] text-white/20 border border-white/5 px-3 py-1 rounded-full group-hover:text-mustard group-hover:border-mustard/30 transition-all">
                           {tag}
                        </span>
                      ))}
                   </div>

                   {/* Background Glow */}
                   <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-mustard/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
             ))}
          </div>
        </div>
      </Section>

      {/* 3. THE AI NEURAL CORE - HIGH FIDELITY LAYOUT */}
      <section className="relative py-40 overflow-hidden bg-forest/20">
         <div className="container mx-auto px-6 max-w-[1400px] grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
               <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-black/80 p-12">
                  <div className="absolute inset-0 opacity-20 bg-[url('/images/services/property_development_consulting.png')] bg-cover mix-blend-overlay" />
                  
                  {/* AI Visualizer Concept */}
                  <div className="h-full w-full border border-mustard/20 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                     <motion.div 
                       animate={{ rotate: 360 }}
                       transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                       className="absolute w-[600px] h-[600px] border border-mustard/5 rounded-full"
                     />
                     <motion.div 
                       animate={{ rotate: -360 }}
                       transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                       className="absolute w-[450px] h-[450px] border border-mustard/10 rounded-full dash-array"
                     />
                     <div className="relative z-10 text-center">
                        <Cpu className="w-16 h-16 text-mustard mx-auto mb-8 animate-pulse shadow-[0_0_50px_rgba(207,160,82,0.5)]" />
                        <h4 className="text-[10px] font-black tracking-[0.4em] text-mustard uppercase">AI Sentiment Status</h4>
                        <div className="text-5xl font-serif text-white mt-4 tracking-tighter">99.8%</div>
                        <p className="text-[8px] text-white/30 font-bold uppercase tracking-[0.2em] mt-2">Neural Engine Stability</p>
                     </div>
                  </div>
               </div>
            </div>

            <div>
               <span className="text-[10px] font-black tracking-[0.5em] text-mustard uppercase mb-8 block">Intelligence Layer</span>
               <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-10 tracking-tight">The Future isn't Programmed. It's <span className="italic font-light text-mustard">Learned.</span></h2>
               <p className="text-lg text-white/40 font-light leading-relaxed mb-12 italic">
                 Vnexora implements proprietary AI models trained specifically for high-net-worth hospitality environments. From predicting guest arrival moods to automated room-preference mapping before the guest even lands.
               </p>
               
               <div className="grid grid-cols-2 gap-8">
                  <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                     <div className="text-3xl font-serif text-mustard mb-2">24/7</div>
                     <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Active Concierge</p>
                  </div>
                  <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                     <div className="text-3xl font-serif text-mustard mb-2">-35%</div>
                     <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">OpEx Reduction</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. TECH STACK MARQUEE */}
      <section className="py-24 border-y border-white/5 bg-[#050505]">
          <div className="container mx-auto px-6 mb-12 flex items-center justify-center gap-6">
             <div className="h-[1px] w-12 bg-white/10" />
             <span className="text-[10px] font-black tracking-[0.6em] text-white/20 uppercase">Institutional Stack Integrations</span>
             <div className="h-[1px] w-12 bg-white/10" />
          </div>
          <div className="flex overflow-hidden whitespace-nowrap">
             <div className="flex gap-20 animate-marquee items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                {[...integrationLogos, ...integrationLogos].map((logo, i) => (
                  <span key={i} className="text-2xl md:text-4xl font-serif text-white italic tracking-tighter px-10">
                    {logo}
                  </span>
                ))}
             </div>
          </div>
      </section>

      {/* 5. THE SYSTEM AUDIT FORM */}
      <section ref={formRef} className="relative py-40 overflow-hidden">
         <div className="absolute inset-0 bg-forest/10" />
         
         <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="bg-white p-8 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.5)] rounded-[4rem] relative overflow-hidden group">
               {/* Aesthetic Side Logo */}
               <div className="absolute top-10 right-10 opacity-[0.03] scale-150 rotate-12 pointer-events-none group-hover:rotate-45 transition-transform duration-[3s]">
                  <Monitor size={120} />
               </div>

               <div className="mb-16 text-center">
                  <h3 className="text-[10px] font-black tracking-[0.6em] text-mustard uppercase mb-6">Strategic Technology Mandate</h3>
                  <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight tracking-tighter">Initiate Your <span className="italic font-light text-mustard">Digital Evolution</span></h2>
               </div>

               <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <label className="text-[9px] font-black uppercase tracking-[0.4em] text-mustard">Mandate Type</label>
                     <div className="relative">
                        <select className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-mustard transition-colors appearance-none">
                           <option>Full Digital Core Transformation</option>
                           <option>Bespoke App Suite (iOS/Android)</option>
                           <option>AI Guest Intelligence Integration</option>
                           <option>Secure Cloud Infrastructure</option>
                        </select>
                        <ChevronRight className="w-4 h-4 text-mustard absolute right-0 top-1/2 -translate-y-1/2 rotate-90" />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <label className="text-[9px] font-black uppercase tracking-[0.4em] text-mustard">Corporate Office</label>
                     <input type="text" placeholder="GIOVANNI ROSSI, PRINCIPAL" className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-mustard transition-colors placeholder:text-stone-200" />
                  </div>
                  
                  <div className="col-span-2 space-y-4 mt-8">
                     <label className="text-[9px] font-black uppercase tracking-[0.4em] text-mustard">Infrastructure Requirements</label>
                     <textarea rows={4} placeholder="DESCRIBE YOUR CURRENT TECH STACK CHALLENGES OR AI ASPIRATIONS..." className="w-full bg-stone-50 border border-stone-100 p-8 text-stone-900 font-sans font-light focus:outline-none focus:border-mustard transition-colors placeholder:text-stone-300 resize-none rounded-3xl" />
                  </div>

                  <div className="col-span-2 pt-10">
                     <Button className="w-full h-24 bg-black text-white hover:bg-mustard hover:text-black transition-all duration-700 text-xs font-black tracking-[0.6em] rounded-full uppercase shadow-2xl">
                        Request System Deployment
                     </Button>
                     <p className="mt-8 text-center text-stone-400 text-[10px] font-black tracking-widest flex items-center justify-center gap-4">
                        <Lock className="w-3 h-3 text-mustard" /> VNEXORA SECURE GATEWAY // AES-256 ENCRYPTED
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </section>

      {/* FOOTER PUSH */}
      <div className="pb-40" />

      <style jsx global>{`
        .mask-gradient {
          mask-image: linear-gradient(to bottom, black, transparent);
        }
        .dash-array {
          stroke-dasharray: 10 5;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
