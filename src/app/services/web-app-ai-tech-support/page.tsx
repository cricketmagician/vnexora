"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
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
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function DigitalTransformationHub() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-mustard/30 selection:text-white overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO - THE INSTITUTIONAL ARCHITECT */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
        {/* Background Animation Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hotel_guests_enjoying.png" 
            alt="Digital Hospitality Experience"
            fill
            className="object-cover opacity-[0.3] scale-105 saturate-[1.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#FAF9F6]" />
        </div>

        <div className="container relative z-20 px-6 text-center max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
             <span className="text-[10px] font-black tracking-[0.6em] text-mustard uppercase mb-8 block">Electronic Concierge | Neural Assets</span>
             <h1 className="text-4xl md:text-8xl font-serif text-white tracking-tighter leading-[0.9] mb-10 max-w-5xl mx-auto">
                Beyond Automation. <br />
                <span className="italic font-light text-mustard/90">Institutional Digital Legacies.</span>
             </h1>
             <p className="text-white/40 text-sm md:text-xl font-light tracking-[0.1em] uppercase max-w-3xl mx-auto italic mb-12">
                Vnexora crafts the digital spine for the world's most <br className="hidden md:block"/> prestigious hospitality portfolios.
             </p>
             
             <div className="flex flex-wrap justify-center gap-6">
                <Button onClick={scrollToForm} size="lg" className="rounded-full bg-mustard text-black hover:bg-white px-10 py-6 text-xs font-black tracking-widest shadow-2xl shadow-mustard/20 group">
                   REQUEST STRATEGIC AUDIT <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
                <button className="flex items-center gap-4 text-white/60 hover:text-white transition-all text-[10px] font-black tracking-[0.4em] px-8">
                   CASE STUDIES <ArrowUpRight className="w-3 h-3 text-mustard" />
                </button>
             </div>
          </motion.div>
        </div>

        {/* Visual Anchor Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAF9F6] to-transparent z-10" />
      </section>

      {/* 2. THE WEBSITE MANDATE (VALUE SECTION - LIGHT) */}
      <Section spacing="lg" className="bg-[#FAF9F6] relative z-20">
         <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1">
                  <span className="text-[10px] font-black tracking-[0.5em] text-mustard uppercase mb-8 block font-sans">The Direct Booking Mandate</span>
                  <h2 className="text-4xl md:text-6xl font-serif text-[#050505] leading-tight mb-8 tracking-tighter">
                     Reclaim 100% of <br /> 
                     <span className="italic font-light text-mustard">Your Guest Transaction.</span>
                  </h2>
                  <p className="text-stone-500 text-lg md:text-2xl font-light leading-relaxed mb-12 italic border-l-4 border-mustard/20 pl-8">
                    "Every transaction lost to an OTA is a narrative lost to a competitor. We build the architecture that keeps your revenue, and your guest, entirely yours."
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <div className="flex items-center gap-4 text-[#050505]">
                           <div className="w-10 h-10 bg-mustard/10 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-mustard" />
                           </div>
                           <h4 className="text-[11px] font-black tracking-[0.1em] uppercase">0% Commission Ecosystem</h4>
                        </div>
                        <p className="text-stone-400 text-sm font-light leading-relaxed">Stop paying 15-25% to third-party platforms. Our high-conversion branding hubs pay for themselves in months.</p>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-4 text-[#050505]">
                           <div className="w-10 h-10 bg-mustard/10 rounded-full flex items-center justify-center">
                              <Users2 className="w-4 h-4 text-mustard" />
                           </div>
                           <h4 className="text-[11px] font-black tracking-[0.1em] uppercase">Guest Data Ownership</h4>
                        </div>
                        <p className="text-stone-400 text-sm font-light leading-relaxed">Re-market directly to your most valuable guests using proprietary CRM integrations instead of waiting for OTA data leaks.</p>
                     </div>
                  </div>
               </div>

               <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl group border-8 border-white">
                     <Image 
                       src="/images/services/property_development.png" 
                       alt="Luxury Digital Interface"
                       fill
                       className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                     />
                     <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-[#050505]/80 to-transparent">
                        <div className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-4">Direct Revenue Lift</div>
                        <div className="text-4xl font-serif text-mustard">+40%</div>
                        <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-2">Historical Average In Direct-Conversion</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* 3. THE MOBILE CONCIERGE ADVANTAGE (VALUE SECTION - LIGHT) */}
      <Section spacing="lg" className="bg-white relative z-20">
         <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative order-1">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-square rounded-[3rem] overflow-hidden border border-stone-100 shadow-2xl"
                  >
                     <Image 
                       src="/images/luxury_guest_tablet_app_view_1775418764173.png" 
                       alt="Mobile Concierge App"
                       fill
                       className="object-cover"
                     />
                     <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all" />
                  </motion.div>
                  {/* Floating Analytics Card */}
                  <div className="absolute -bottom-10 -right-10 bg-white p-10 shadow-[0_50px_100px_rgba(0,0,0,0.08)] rounded-[2rem] border border-stone-50 md:w-[320px] hidden md:block">
                     <p className="text-[10px] font-black tracking-widest text-mustard uppercase mb-4 italic">Guest Spend Increase</p>
                     <div className="flex items-end gap-3">
                        <span className="text-5xl font-serif text-[#050505]">+30%</span>
                        <div className="h-10 w-[2px] bg-mustard/20" />
                        <span className="text-[9px] font-bold text-stone-300 uppercase leading-tight mb-2">In-Stay F&B <br /> & SPA Revenue</span>
                     </div>
                  </div>
               </div>

               <div className="order-2">
                  <span className="text-[10px] font-black tracking-[0.5em] text-mustard uppercase mb-8 block font-sans">The Mobile Experience Advantage</span>
                  <h2 className="text-4xl md:text-6xl font-serif text-[#050505] leading-tight mb-8 tracking-tighter">
                     A Concierge In <br /> 
                     <span className="italic font-light text-mustard">Every Pocket.</span>
                  </h2>
                  <p className="text-stone-500 text-lg font-light leading-relaxed mb-10 max-w-xl">
                    Apps are no longer operational tools—they are revenue engines. Vnexora builds native iOS & Android experiences that cross-sell your amenities 24/7 without adding a single staff member to the payroll.
                  </p>
                  
                  <ul className="space-y-6">
                     {[
                        "Contactless Check-In/Out directly from the guest's own device.",
                        "One-touch SPA and F&B upselling via push-intelligence.",
                        "Digital Room Keys integrated into institutional wallet protocols.",
                        "Direct guest chat with AI-human hybrid support desk."
                     ].map((benefit, i) => (
                        <li key={i} className="flex items-start gap-4 text-stone-600 font-light text-sm italic">
                           <div className="w-1.5 h-1.5 rounded-full bg-mustard mt-1.5 flex-shrink-0" />
                           {benefit}
                        </li>
                     ))}
                  </ul>

                  <Button className="mt-12 rounded-full bg-[#050505] text-white hover:bg-mustard hover:text-black px-10 py-6 text-[10px] font-black tracking-[0.4em] transition-all duration-500 shadow-xl overflow-hidden group">
                     REQUEST APP SHOWCASE <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Button>
               </div>
            </div>
         </div>
      </Section>

      {/* 4. THE AI NEURAL GRID (INNOVATION SECTION - DARK) */}
      <section className="relative py-40 overflow-hidden bg-[#050505]">
          {/* Neural Background */}
          <div className="absolute inset-0 opacity-[0.05] z-0 grayscale invert pointer-events-none">
             <Image src="/images/services/property_development.png" alt="" fill className="object-cover" />
          </div>

          <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
             <div className="max-w-4xl mb-32">
                <span className="text-[10px] font-black tracking-[0.6em] text-mustard uppercase mb-8 block font-sans">Anticipatory Intelligence</span>
                <h2 className="text-4xl md:text-8xl font-serif text-white tracking-tighter leading-[0.9] mb-10">
                   The Future is <br /> 
                   <span className="italic font-light text-mustard">Anticipated.</span>
                </h2>
                <p className="text-white/40 text-lg md:text-2xl font-light leading-relaxed max-w-2xl italic border-l border-mustard/20 pl-10">
                   Vnexora's AI doesn't just respond; it predicts. From forecasting occupancy revenue with 98% accuracy to analyzing guest sentiment before the bad review even happens.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 space-y-8">
                   <div className="p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] group hover:bg-white/10 transition-all duration-700">
                      <Cpu className="text-mustard w-10 h-10 mb-8 opacity-40 group-hover:opacity-100 transition-all" />
                      <h4 className="text-2xl font-serif text-white mb-4 uppercase">Yield Intelligence</h4>
                      <p className="text-white/30 text-sm font-light leading-relaxed">Hyper-dynamic pricing engines that sync across all channels to maximize margin in real-time.</p>
                   </div>
                   <div className="p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] group hover:bg-white/10 transition-all duration-700">
                      <Zap className="text-mustard w-10 h-10 mb-8 opacity-40 group-hover:opacity-100 transition-all" />
                      <h4 className="text-2xl font-serif text-white mb-4 uppercase">Neural Concierge</h4>
                      <p className="text-white/30 text-sm font-light leading-relaxed">24/7 AI staff that handles 80% of routine guest inquiries with human-like precision and elite linguistic tone.</p>
                   </div>
                </div>

                <div className="md:col-span-7">
                   <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
                      <Image 
                        src="/images/hospitality_tech_dashboard_mockup_1775418101371.png" 
                        alt="AI Yield Dashboard"
                        fill
                        className="object-cover saturate-[1.2] brightness-75 group-hover:scale-105 transition-transform duration-[10s]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-10 left-10 p-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl max-w-[340px]">
                         <p className="text-[10px] font-black tracking-widest text-mustard uppercase mb-4">Neural Health Engine</p>
                         <div className="text-3xl font-serif text-white">99.8% Stability</div>
                         <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-4">Automated Yield Management Protocols Active</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
      </section>

      {/* 5. FULL SPECTRUM SUPPORT (INSTITUTIONAL GRID - DARK) */}
      <section className="bg-[#050505] py-40 relative">
          <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
             <div className="text-center mb-20 max-w-3xl mx-auto">
                <span className="text-[10px] font-black tracking-[0.5em] text-mustard uppercase mb-8 block font-sans">Institutional Reliability</span>
                <h2 className="text-3xl md:text-6xl font-serif text-white mb-6">Support That <span className="italic font-light text-mustard">Never Sleeps.</span></h2>
                <p className="text-white/30 font-light text-sm tracking-widest uppercase">Comprehensive technical mandate for the global hospitality grid.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "PMS/CRS MIGRATION", icon: Database, desc: "Seamless legacy migrations with zero operational downtime guaranteed." },
                  { title: "24/7 TECHNICAL CONCIERGE", icon: Globe, desc: "Dedicated on-call hospitality tech experts for your property staff." },
                  { title: "CLOUD INFRASTRUCTURE", icon: Cloud, desc: "Institutional-grade secure hosting for HNW guest data and inventory." },
                  { title: "SECURITY & COMPLIANCE", icon: ShieldCheck, desc: "AES-256 Encrypted guest protocols and multi-layer firewall mandates." }
                ].map((item, i) => (
                  <div key={i} className="p-10 border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-all duration-500 rounded-2xl">
                     <item.icon className="w-8 h-8 text-mustard/40 mb-8" />
                     <h4 className="text-[11px] font-black tracking-[0.2em] text-white/90 mb-4 uppercase">{item.title}</h4>
                     <p className="text-white/20 text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
      </section>

      {/* 6. ROI STRATEGIC AUDIT FORM (DARK GLASS) */}
      <section ref={formRef} className="relative py-40 overflow-hidden bg-[#FAF9F6] border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="bg-[#050505] p-8 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.4)] rounded-[4rem] relative overflow-hidden group">
               {/* Background Glow */}
               <div className="absolute -top-[50%] -right-[20%] w-[800px] h-[800px] bg-mustard/[0.03] rounded-full blur-[120px] pointer-events-none" />

               <div className="mb-20 text-center relative z-10">
                  <h3 className="text-[10px] font-black tracking-[0.6em] text-mustard uppercase mb-8">Asset Growth Mandate</h3>
                  <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.9] tracking-tighter mb-10">Initiate Your <br /> <span className="italic font-light text-mustard">Digital Evolution.</span></h2>
                  <p className="text-white/40 text-sm md:text-lg font-light tracking-[0.1em] uppercase italic">
                     Request a strategic ROI audit to identify commission leakage <br className="hidden md:block" /> and unlock your asset's digital yield.
                  </p>
               </div>

               <form className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-4">
                     <label className="text-[9px] font-black uppercase tracking-[0.4em] text-mustard/60">Property Focus</label>
                     <div className="relative">
                        <select className="w-full bg-transparent border-b border-white/10 py-5 text-white font-serif text-xl focus:outline-none focus:border-mustard transition-colors appearance-none">
                           <option className="bg-stone-900">Direct Booking Hub (Web)</option>
                           <option className="bg-stone-900">Mobile Guest Concierge (App)</option>
                           <option className="bg-stone-900">AI Neural Integration</option>
                           <option className="bg-stone-900">Institutional Tech Support</option>
                        </select>
                        <ChevronRight className="w-4 h-4 text-mustard absolute right-0 top-1/2 -translate-y-1/2 rotate-90" />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <label className="text-[9px] font-black uppercase tracking-[0.4em] text-mustard/60">Estimated Key Count</label>
                     <input type="text" placeholder="E.G. 120 KEYS" className="w-full bg-transparent border-b border-white/10 py-5 text-white font-serif text-xl focus:outline-none focus:border-mustard transition-colors placeholder:text-white/10" />
                  </div>
                  
                  <div className="col-span-2 space-y-4 mt-8">
                     <label className="text-[9px] font-black uppercase tracking-[0.4em] text-mustard/60">Growth Objectives</label>
                     <textarea rows={4} placeholder="DESCRIBE YOUR CURRENT COMMISSION LEAKAGE OR TECH CHALLENGES..." className="w-full bg-white/5 border border-white/10 p-8 text-white font-sans font-light focus:outline-none focus:border-mustard transition-colors placeholder:text-white/5 resize-none rounded-3xl" />
                  </div>

                  <div className="col-span-2 pt-10">
                     <Button className="w-full h-24 bg-mustard text-black hover:bg-white transition-all duration-700 text-[11px] font-black tracking-[0.6em] rounded-full uppercase shadow-2xl relative overflow-hidden group">
                        <span className="relative z-10">REQUEST ROI AUDIT REPORT</span>
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover:h-full transition-all duration-500" />
                     </Button>
                     <p className="mt-10 text-center text-white/20 text-[10px] font-black tracking-widest flex items-center justify-center gap-4">
                        <Lock className="w-3 h-3 text-mustard" /> VNEXORA SECURE GATEWAY ACTIVE // AES-256
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </section>

      {/* ADDITIONAL PADDING FOR FOOTER PUSH */}
      <div className="pb-40" />
    </main>
  );
}
