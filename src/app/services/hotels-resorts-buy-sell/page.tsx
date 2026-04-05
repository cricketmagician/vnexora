"use client";

import React, { useState, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  ArrowLeft,
  Search,
  Handshake,
  Key,
  ShieldCheck,
  Lock,
  Building2,
  Target,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HotelsBuySellPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const mandates = [
    { 
      id: "buy", 
      title: "BUY HOTEL", 
      icon: Search, 
      desc: "Acquire high-performing hospitality assets globally.",
      href: "/buy-hotel"
    },
    { 
      id: "sell", 
      title: "SELL YOUR PROPERTY", 
      icon: Building2, 
      desc: "Discrete divestment of your hospitality portfolio.",
      href: "/sell-hotel"
    },
    { 
      id: "lease", 
      title: "LEASE MANDATE", 
      icon: Target, 
      desc: "Strategic leasing and operator asset management.",
      href: null
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#CFA052]/30">
      {/* ══════════ SUPER PREMIUM CINEMATIC HERO ══════════ */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#050505]">
        {/* Film Grain Texture Overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
        
        {/* Immersive Background with Slow Zoom */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/services/hotel_brokerage.png"
            alt="Exclusive Asset Brokerage"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/20 to-[#050505]" />
        </motion.div>

        {/* Back Navigation (Persistent & Elegant) */}
        <div className="container mx-auto px-4 md:px-20 absolute top-32 md:top-40 left-0 right-0 z-30 pointer-events-none">
          <Link href="/" className="inline-flex items-center text-white/40 hover:text-[#CFA052] transition-all group pointer-events-auto">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em]">Back to Showcase</span>
          </Link>
        </div>

        {/* Hero Content with Staggered Reveal */}
        <div className="container relative z-20 px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-4 px-6 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-12 shadow-[0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5"
            >
              {["BUY", "SELL", "LEASE"].map((tag, i) => (
                <React.Fragment key={tag}>
                  <span className="text-[9px] font-black tracking-[0.4em] text-[#CFA052] uppercase">{tag}</span>
                  {i < 2 && <div className="w-[1px] h-2.5 bg-white/10" />}
                </React.Fragment>
              ))}
            </motion.div>
            <motion.span 
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-white/40 mb-10 block"
            >
               Institutional Assets | Global Transaction Hub
            </motion.span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tighter mb-10 overflow-hidden">
              {["Exclusive", "Asset", "Brokerage."].map((word, i) => (
                <motion.span 
                  key={i}
                  className="inline-block mr-[0.3em] last:mr-0 last:text-[#CFA052]/90 last:italic last:font-light"
                  variants={{ hidden: { y: 200 }, visible: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.2, duration: 1 } } }}
              className="text-white/30 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto tracking-tight italic"
            >
              Discrete transactions for the world's most <br className="hidden md:block" /> prestigious private hospitality portfolios.
            </motion.p>
          </motion.div>
        </div>

        {/* Visual Anchor Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
      </section>

      {/* Content Section (Deep Black Content) */}
      <Section spacing="lg" className="bg-[#050505] pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Mandate Entrance Grid - MOVED TO TOP */}
          <div className="mb-20 text-center">
             <span className="text-[10px] font-bold font-sans tracking-[0.4em] text-[#CFA052] uppercase mb-4 block underline underline-offset-8 decoration-white/10">Select Your Mandate</span>
             <h2 className="text-3xl md:text-6xl font-serif text-white mb-12">How May We <span className="italic font-light text-[#CFA052]">Serve You?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {mandates.map((mandate) => (
              <motion.div
                 key={mandate.id}
                 whileHover={{ y: -10, borderColor: "#CFA052", boxShadow: "0 40px 100px -20px rgba(207,160,82,0.15)" }}
                 className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all cursor-pointer group flex flex-col items-center text-center rounded-2xl relative overflow-hidden"
                 onClick={() => {
                   if (mandate.href) {
                     router.push(mandate.href);
                   } else {
                     scrollToForm();
                   }
                 }}
              >
                <div className="w-20 h-20 bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:bg-[#CFA052] group-hover:text-black transition-all rounded-full">
                  <mandate.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-sans font-black tracking-[0.3em] uppercase mb-6 text-white transition-colors">{mandate.title}</h3>
                <p className="text-white/40 font-sans font-light text-sm mb-10 leading-relaxed min-h-[60px]">{mandate.desc}</p>
                <div className="h-[1px] w-12 bg-white/10 mb-8 transition-all group-hover:w-24 group-hover:bg-[#CFA052]" />
                <span className="text-[10px] font-sans font-black text-[#CFA052] tracking-[0.4em] uppercase flex items-center">
                  {mandate.href ? "OPEN PLATFORM" : "INQUIRE NOW"} <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Background Accent */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#CFA052]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-32"
          >
            <p className="text-xl md:text-3xl text-white/50 font-sans font-light leading-relaxed tracking-tight max-w-3xl mx-auto italic">
              Vnexora connects global institutional investors with premium off-market hospitality assets. Our transaction lifecycle is built on absolute discretion and unparalleled market positioning.
            </p>
          </motion.div>

          {/* Inquiry Form Area */}
          <div ref={formRef} className="bg-white border border-stone-200 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] scroll-mt-32">
            <div className="bg-[#050505] py-10 px-8 text-center border-b border-stone-200">
               <h3 className="text-white text-[11px] font-sans font-black tracking-[0.4em] uppercase">Hospitality Lease Mandate</h3>
            </div>

              <div className="p-8 md:p-16">
                <motion.form 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Full Name</label>
                    <input required type="text" placeholder="GIOVANNI ROSSI" className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-300" />
                  </div>
                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Corporate Email</label>
                    <input required type="email" placeholder="G.ROSSI@ESTATE.COM" className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-300" />
                  </div>

                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Target Region</label>
                    <input type="text" placeholder="E.G. DUBAI, UNITED ARAB EMIRATES" className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-300" />
                  </div>

                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Lease Term (Years)</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium focus:outline-none focus:border-[#CFA052] transition-colors appearance-none pr-10">
                        <option>5 - 10 Years</option>
                        <option>10 - 20 Years</option>
                        <option>20+ Years / Perpetual</option>
                        <option>Custom Strategic Term</option>
                      </select>
                      <ChevronRight className="w-4 h-4 text-[#CFA052] absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2 col-span-2">
                     <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Asset Details & Requirements</label>
                     <input type="text" placeholder="MINIMUM KEYS, OPERATIONAL CATEGORY (LUXURY/BOUTIQUE), ETC..." className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-300" />
                  </div>

                  <div className="space-y-2 col-span-2">
                    <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Strategic Intent</label>
                    <textarea rows={4} placeholder="DESCRIBE YOUR LEASING GOALS OR OPERATOR REQUIREMENTS..." className="w-full bg-transparent border border-stone-100 p-6 text-stone-900 font-sans font-light focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-200 resize-none"></textarea>
                  </div>

                  <div className="col-span-2 pt-10">
                    <Button 
                      type="submit"
                      className="w-full h-20 bg-[#CFA052] text-black font-sans font-black tracking-[0.4em] text-xs hover:bg-[#050505] hover:text-white transition-all rounded-none uppercase"
                    >
                      Submit Lease Inquiry
                    </Button>
                    <p className="mt-6 text-center text-stone-400 text-[9px] font-sans font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                       <Lock className="w-3 h-3 text-[#CFA052]" /> Discrete AES-256 Encrypted Protocols Active
                    </p>
                  </div>
                </motion.form>
              </div>
          </div>

          {/* Institutional Advantage Section */}
          <div className="mt-40 grid lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1">
                <ShieldCheck className="w-12 h-12 text-[#CFA052] mb-8" />
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight tracking-tight">The Off-Market <br /><span className="italic font-light text-[#CFA052]">Advantage</span></h2>
                <p className="text-lg text-white/40 font-sans font-light leading-relaxed mb-10 italic">
                   Vnexora handles your asset with surgical precision. Our most prestigious inventory—including trophy assets in Prime European and Middle Eastern markets—is never listed publicly. Access is only granted to vetted inquiries within our private institutional network.
                </p>
                <ul className="space-y-4">
                  {["100% Confidential Transactions", "Direct Institutional Pipeline", "Vetted High-Net-Worth Acquirers"].map((item, i) => (
                    <li key={i} className="flex items-center text-white/60 font-sans font-medium text-sm tracking-widest uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052] mr-4 shadow-[0_0_10px_rgba(207,160,82,0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="relative aspect-square md:aspect-[4/5] bg-stone-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 order-1 lg:order-2 group">
                <Image 
                  src="/images/services/hotel_brokerage.png"
                  alt="Confidential Transaction"
                  fill
                  className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl max-w-[240px]">
                   <p className="text-[10px] font-black tracking-widest text-[#CFA052] uppercase mb-2">Institutional Node Verified</p>
                   <p className="text-xs text-white/60 font-light leading-relaxed">Discrete asset divestment platform accessed via direct Vnexora mandate.</p>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
