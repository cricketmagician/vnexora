"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Building, 
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
  Gem,
  Hexagon,
  Waves
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/* ═══════════════════════════════════════════
   DESIGN TOKENS: "RESIDENTIAL LUXE"
   Primary: #CFA052 (Mustard Gold)
   Background: #050505 (Midnight)
   Form: #FAF9F6 (Ivory)
   ═══════════════════════════════════════════ */

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-3 mb-6">
    <div className="w-10 h-[1px] bg-[#CFA052]" />
    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#CFA052]">{children}</span>
  </div>
);

const ResidentialPortfolio = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const stats = [
    { label: "Elite Inventory", value: "450+ Estates", icon: Gem },
    { label: "Transaction Volume", value: "$ 1.2B+", icon: TrendingUp },
    { label: "Global HNW Network", value: "15,000+", icon: Globe },
    { label: "Off-Market Share", value: "65%", icon: ShieldCheck }
  ];

  return (
    <section ref={scrollRef} className="py-40 px-6 bg-[#050505] overflow-hidden relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-24 text-center lg:text-left">
          <div className="lg:w-1/2">
            <SectionTag>Curated Excellence</SectionTag>
            <h2 className="text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Luxury <br />
              <span className="text-[#CFA052] italic font-light">Living.</span> <br />
              Defined.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-md">
              From waterfront villas to heritage penthouses, we manage the acquisition and disposition of the world&apos;s most prestigious addresses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] backdrop-blur-3xl group hover:border-[#CFA052]/30 transition-all duration-500"
            >
              <stat.icon className="text-[#CFA052] w-8 h-8 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-black mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          <motion.div style={{ y: y1 }} className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10">
            <Image src="/images/hero/hero_9.png" alt="Luxury Interior" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12">
               <p className="text-[#CFA052] text-[10px] font-black tracking-[0.3em] uppercase mb-4">Aesthetic Vision</p>
               <h3 className="text-4xl font-bold text-white italic" style={{ fontFamily: 'var(--font-playfair)' }}>Legacy Estates</h3>
            </div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 mt-20">
            <Image src="/images/hero/hero_6.png" alt="Modern Architecture" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12">
               <p className="text-[#CFA052] text-[10px] font-black tracking-[0.3em] uppercase mb-4">Structural Prowess</p>
               <h3 className="text-4xl font-bold text-white italic" style={{ fontFamily: 'var(--font-playfair)' }}>Global Horizon</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function ResidentialPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mandateType, setMandateType] = useState<"Buy" | "Sell" | "Lease">("Buy");
  const formRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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

  const services = [
    {
      type: "BUY",
      title: "Bespoke Acquisition",
      desc: "Our exclusive concierge sources off-market luxury units, performing deep legal and structural due diligence for legacy investments.",
      icon: Gem,
      tags: ["Off-Market", "White-Glove", "HNW Focused"],
      action: "Initiate Search"
    },
    {
      type: "SELL",
      title: "Asset Liquidation",
      desc: "Precision marketing for your premium residential assets, leveraging our global network of private investors and family offices.",
      icon: TrendingUp,
      tags: ["Ultra-Luxury", "Global Target", "Discretion"],
      action: "List Property"
    },
    {
      type: "LEASE",
      title: "Leasing Strategy",
      desc: "Management of luxury rental portfolios and high-yield residential leasing for global executives and diplomatic missions.",
      icon: Key,
      tags: ["High-Yield", "Expats", "Full Management"],
      action: "Lease Assets"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-white selection:bg-[#CFA052]/30 overflow-x-hidden">
      <Navbar />

      {/* ══════════ HERO SECTION ══════════ */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/hero_8.png" 
            alt="Luxury Residential"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#CFA052] mb-8 block">
              Residential Assets & Advisory
            </span>
            <h1 className="text-[clamp(40px,8vw,90px)] font-bold text-white mb-8 leading-[1]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Legacy Residential <span className="italic font-light text-[#CFA052]">Portfolios</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto font-light leading-relaxed mb-12">
              Strategic mandates for the acquisition and disposition of high-net-worth residential estates globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               {[
                 { label: "Acquire (Buy)", type: "Buy" },
                 { label: "Dispose (Sell)", type: "Sell" },
                 { label: "Lease Assets", type: "Lease" }
               ].map((btn) => (
                 <button 
                  key={btn.type}
                  onClick={() => scrollToForm(btn.type as any)}
                  className={cn(
                    "px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all duration-500",
                    btn.type === "Buy" 
                      ? "bg-[#CFA052] text-black hover:bg-white" 
                      : "bg-white/5 border border-white/20 text-white hover:bg-[#CFA052] hover:text-black hover:border-[#CFA052]"
                  )}
                 >
                   {btn.label}
                 </button>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ SERVICES DUALITY ══════════ */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 hover:border-[#CFA052]/30 transition-all duration-700"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#CFA052]/10 flex items-center justify-center text-[#CFA052] mb-10 group-hover:bg-[#CFA052] group-hover:text-black transition-all">
                  <service.icon size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>{service.title}</h3>
                <p className="text-white/40 font-light leading-relaxed mb-10 text-lg">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-12">
                   {service.tags.map(tag => (
                     <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-[#CFA052]">
                       {tag}
                     </span>
                   ))}
                </div>
                <button 
                  onClick={() => scrollToForm(service.type as any)}
                  className="flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-[0.4em] group/btn"
                >
                  {service.action}
                  <ArrowRight className="w-5 h-5 text-[#CFA052] group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ResidentialPortfolio />

      {/* ══════════ INQUIRY FORM ══════════ */}
      <section ref={formRef} className="py-40 px-6 bg-[#080808]">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-[#FAF9F6] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              
              <div className="lg:col-span-2 bg-[#0A0A0A] p-12 lg:p-20 flex flex-col justify-between">
                <div>
                   <SectionTag>Exclusive Desk</SectionTag>
                   <h2 className="text-4xl font-bold text-white mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
                     Strategic <br />
                     <span className="text-[#CFA052] italic">Residential</span> <br />
                     Consultation.
                   </h2>
                   <p className="text-white/40 font-light leading-relaxed mb-12">
                     Register your intent to acquire or dispose of luxury assets. Our residential advisors handle the most sensitive transactions with total discretion.
                   </p>
                   <div className="space-y-4">
                      {["UHNW Network Access", "Legal Concierge", "Off-Market Access"].map(item => (
                        <div key={item} className="flex items-center gap-3 text-white/60 text-xs font-light">
                          <Hexagon className="text-[#CFA052] w-4 h-4" />
                          {item}
                        </div>
                      ))}
                   </div>
                </div>
                <div className="mt-20 flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                      <ShieldCheck className="text-[#CFA052] w-6 h-6" />
                   </div>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">AES-256 Encrypted Transmissions</p>
                </div>
              </div>

              <div className="lg:col-span-3 p-12 lg:p-20">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 gap-12">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.4em] font-black text-[#CFA052]">Representative Name</label>
                        <input required type="text" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-[#CFA052] text-xl font-medium text-stone-900 placeholder:text-stone-300" placeholder="Alexander Thorne" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.4em] font-black text-[#CFA052]">Direct Channel</label>
                        <input required type="tel" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-[#CFA052] text-xl font-medium text-stone-900 placeholder:text-stone-300" placeholder="+44 700 000 000" />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[9px] uppercase tracking-[0.4em] font-black text-[#CFA052]">Mandate Nature</label>
                        <div className="flex flex-wrap gap-4">
                          {["Buy", "Sell", "Lease"].map((type) => (
                            <button 
                              key={type} 
                              type="button" 
                              onClick={() => setMandateType(type as any)}
                              className={cn(
                                "flex-1 min-w-[120px] py-5 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all duration-500 border",
                                mandateType === type 
                                  ? "bg-stone-900 text-white border-stone-900 shadow-xl scale-[1.02]" 
                                  : "bg-stone-50 text-stone-400 border-stone-200 hover:border-stone-400"
                              )}
                            >
                              {type} Mandate
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.4em] font-black text-[#CFA052]">Targeted Valuation</label>
                        <input type="text" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-[#CFA052] text-xl font-medium text-stone-900 placeholder:text-stone-300" placeholder="$10M - $50M+" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-6 bg-[#CFA052] text-black rounded-[2rem] font-black tracking-[0.4em] uppercase text-[11px] shadow-2xl hover:bg-stone-900 hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group"
                    >
                      <span>Submit Mandate</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </form>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                    <div className="w-24 h-24 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-10">
                      <Check className="text-[#CFA052] w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Mandate Logged.</h3>
                    <p className="text-stone-500 mb-10 max-w-xs mx-auto font-medium">An elite advisory representative will initiate contact through secure channels within 24 hours.</p>
                    <Link href="/">
                      <button className="px-12 py-5 bg-stone-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#CFA052] hover:text-black transition-all">Return Home</button>
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
