"use client";

import { useState, useRef } from "react";
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
  const [activeForm, setActiveForm] = useState<"buy" | "sell" | "lease">("buy");
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollToForm = (type: "buy" | "sell" | "lease") => {
    setActiveForm(type);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
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
            Exclusive Asset Brokerage for <br />
            <span className="font-bold uppercase tracking-tight">Discrete Transactions</span>
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
              src="/images/services/hotel_brokerage.png"
              alt="Luxury Hotel Brokerage"
              fill
              className="object-cover"
              priority
            />
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-10 left-10 text-white/90">
              <p className="text-[10px] md:text-xs font-sans font-bold tracking-[0.3em] uppercase">Vnexora Hospitality Mandates, Discrete Brokerage</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Content Section (Light Body) */}
      <Section spacing="lg" className="bg-[#FAF9F6] pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Mandate Entrance Grid - MOVED TO TOP */}
          <div className="mb-20 text-center">
             <span className="text-[10px] font-bold font-sans tracking-[0.4em] text-[#CFA052] uppercase mb-4 block">Select Your Mandate</span>
             <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-12">How May We <span className="italic font-light">Serve You?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {mandates.map((mandate) => (
              <motion.div
                 key={mandate.id}
                 whileHover={{ y: -10, borderColor: "#CFA052" }}
                 className="p-12 bg-white border border-stone-200 shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all cursor-pointer group flex flex-col items-center text-center rounded-sm"
                 onClick={() => {
                   if (mandate.href) {
                     router.push(mandate.href);
                   } else {
                     scrollToForm(mandate.id as any);
                   }
                 }}
              >
                <div className="w-20 h-20 bg-stone-50 flex items-center justify-center mb-10 border border-stone-100 group-hover:bg-[#CFA052] group-hover:text-black transition-all rounded-full">
                  <mandate.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-sans font-black tracking-[0.3em] uppercase mb-6 group-hover:text-[#CFA052] transition-colors">{mandate.title}</h3>
                <p className="text-stone-500 font-sans font-light text-sm mb-10 leading-relaxed min-h-[60px]">{mandate.desc}</p>
                <div className="h-[1px] w-12 bg-[#B68D40]/20 mb-8 transition-all group-hover:w-24 group-hover:bg-[#CFA052]" />
                <span className="text-[10px] font-sans font-black text-[#CFA052] tracking-[0.4em] uppercase flex items-center">
                  {mandate.href ? "VIEW PLATFORM" : "INITIALIZE"} <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
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
            <p className="text-xl md:text-3xl text-zinc-800 font-sans font-light leading-relaxed tracking-tight max-w-3xl mx-auto">
              Vnexora connects global institutional investors with premium off-market hospitality assets. Our transaction lifecycle is built on absolute discretion and unparalleled market positioning.
            </p>
          </motion.div>

          {/* Inquiry Form Area */}
          <div ref={formRef} className="bg-white border border-stone-200 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] scroll-mt-32">
            <div className="flex border-b border-stone-200">
              {(["buy", "sell", "lease"] as const).map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveForm(tab)}
                  className={`flex-1 py-10 text-[11px] font-sans font-black tracking-[0.4em] uppercase transition-all ${
                    activeForm === tab ? "bg-[#050505] text-white" : "text-stone-400 bg-stone-50 hover:bg-stone-100"
                  }`}
                >
                  {tab === "buy" ? "BUY MANDATE" : tab === "sell" ? "SELL MANDATE" : "LEASE MANDATE"}
                </button>
              ))}
            </div>

            <div className="p-8 md:p-16">
              <AnimatePresence mode="wait">
                <motion.form 
                  key={activeForm}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
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

                  {activeForm === "buy" ? (
                    <>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Target Asset Type</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium focus:outline-none focus:border-[#CFA052] transition-colors appearance-none pr-10">
                            <option>Boutique Urban Hotel</option>
                            <option>Coastal Luxury Resort</option>
                            <option>Historic Landmark Asset</option>
                            <option>Development Site</option>
                          </select>
                          <ChevronRight className="w-4 h-4 text-[#CFA052] absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Investment Budget</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium focus:outline-none focus:border-[#CFA052] transition-colors appearance-none pr-10">
                            <option>$10M - $25M</option>
                            <option>$25M - $50M</option>
                            <option>$50M - $100M+</option>
                            <option>Confidential / Undisclosed</option>
                          </select>
                          <ChevronRight className="w-4 h-4 text-[#CFA052] absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                    </>
                  ) : activeForm === "sell" ? (
                    <>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Asset Location</label>
                        <input type="text" placeholder="E.G. ROME, ITALY" className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-300" />
                      </div>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Valuation Target</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium focus:outline-none focus:border-[#CFA052] transition-colors appearance-none pr-10">
                            <option>Under $20M</option>
                            <option>$20M - $50M</option>
                            <option>$50M - $100M</option>
                            <option>$100M+</option>
                          </select>
                          <ChevronRight className="w-4 h-4 text-[#CFA052] absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-2 col-span-2">
                       <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Asset Details</label>
                       <input type="text" placeholder="PROPERTY SIZE, KEYS, AND CURRENT OPERATOR..." className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-300" />
                    </div>
                  )}

                  <div className="space-y-2 col-span-2">
                    <label className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#CFA052] font-black">Strategic Intent</label>
                    <textarea rows={4} placeholder="DESCRIBE YOUR GOALS OR PARAMETERS..." className="w-full bg-transparent border border-stone-100 p-6 text-stone-900 font-sans font-light focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-200 resize-none"></textarea>
                  </div>

                  <div className="col-span-2 pt-10">
                    <Button 
                      type="submit"
                      className="w-full h-20 bg-[#CFA052] text-black font-sans font-black tracking-[0.4em] text-xs hover:bg-[#050505] hover:text-white transition-all rounded-none uppercase"
                    >
                      Submit Secure Inquiry
                    </Button>
                    <p className="mt-6 text-center text-stone-400 text-[9px] font-sans font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                       <Lock className="w-3 h-3 text-[#CFA052]" /> Discrete AES-256 Encrypted Protocols Active
                    </p>
                  </div>
                </motion.form>
              </AnimatePresence>
            </div>
          </div>

          {/* Institutional Advantage Section */}
          <div className="mt-40 grid lg:grid-cols-2 gap-24 items-center">
             <div>
                <ShieldCheck className="w-12 h-12 text-[#CFA052] mb-8" />
                <h2 className="text-4xl font-sans font-medium text-zinc-900 mb-8 leading-tight tracking-tight">The Off-Market <br /><span className="font-bold">Advantage</span></h2>
                <p className="text-lg text-zinc-600 font-sans font-light leading-relaxed mb-10">
                   Vnexora handles your asset with surgical precision. Our most prestigious inventory—including trophy assets in Prime European and Middle Eastern markets—is never listed publicly. Access is only granted to vetted inquiries within our private institutional network.
                </p>
                <ul className="space-y-4">
                  {["100% Confidential Transactions", "Direct Institutional Pipeline", "Vetted High-Net-Worth Acquirers"].map((item, i) => (
                    <li key={i} className="flex items-center text-zinc-800 font-sans font-medium text-sm tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052] mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="relative aspect-square md:aspect-[4/5] bg-stone-200 overflow-hidden shadow-2xl">
                <Image 
                  src="/Users/nihalkumar/.gemini/antigravity/brain/d8eb8cb0-780e-4ed2-9658-3d7040cb22ea/brand_partnership_deal_revised_1775302299012.png"
                  alt="Confidential Transaction"
                  fill
                  className="object-cover"
                />
             </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
