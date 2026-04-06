"use client";

import { useRef, useState, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
} from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight,
  ChevronRight,
  Plus,
  ShieldCheck,
  Gem,
  Hexagon,
  Globe,
  Lock,
  Compass
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Components ---

const Section = forwardRef<HTMLElement, { 
  children: React.ReactNode; 
  className?: string; 
  spacing?: "none" | "sm" | "md" | "lg" 
}>(({ children, className, spacing = "md" }, ref) => {
  const spacingClass = {
    none: "py-0",
    sm: "py-12 md:py-20",
    md: "py-24 md:py-32",
    lg: "py-32 md:py-56"
  }[spacing];

  return (
    <section ref={ref} className={cn(spacingClass, className)}>
      {children}
    </section>
  );
});

Section.displayName = "Section";

// --- Residential Hub ---

export default function ResidentialHub() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0.4]);
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.15], [0, -80]);

  // Portfolio Scroll Setup
  const { scrollYProgress: portfolioProgress } = useScroll({
    target: portfolioRef,
    offset: ["start end", "end start"]
  });

  const xTranslate = useTransform(portfolioProgress, [0.35, 0.6], ["0%", "-50%"]);

  return (
    <main ref={containerRef} className="bg-[#050505] text-white selection:bg-[#CFA052] selection:text-black font-sans overflow-x-hidden">
      
      {/* 1. CINEMATIC RESIDENTIAL MANDATE HERO */}
      <section className="relative h-[110vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/services/luxury_residential_buy_sell_hero.png" 
            alt="Residential Hero" 
            fill 
            className="object-cover brightness-[0.5]"
            priority
          />
          {/* Parallax Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <Link href="/services" className="group inline-flex items-center gap-4 px-8 py-3 border border-white/10 rounded-full backdrop-blur-3xl bg-white/5 hover:bg-white/10 transition-all duration-500 shadow-2xl">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#CFA052]" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/80">Asset Pipeline</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              style={{ y: heroTranslateY }}
              className="relative"
            >
              <h1 className="text-7xl md:text-[150px] font-serif italic text-white leading-[0.85] tracking-tighter mb-16 relative">
                 Residential <br />
                 <span className="font-sans not-italic font-black text-outline-silver text-transparent">MANDATE.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-white/50 leading-relaxed italic border-l border-[#CFA052]/30 pl-10 text-left">
                "We don't just find homes; we secure legacy addresses for those who define the skyline."
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
            >
              <span className="text-[10px] font-black tracking-[0.6em] uppercase text-[#CFA052]/60">Portfolio Immersion</span>
              <div className="w-[1px] h-24 bg-gradient-to-b from-[#CFA052] to-transparent animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE DISCRETION — Pro Max UI Split */}
      <Section spacing="lg" className="bg-[#FAF9F6] text-black overflow-hidden relative">
         {/* Decorative Blur Background Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#CFA052]/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            
            <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-16"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#CFA052]" />
                  <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block">Elite Acquisition</span>
               </div>
               <h2 className="text-5xl md:text-8xl font-serif italic leading-[0.95] text-stone-900">
                 UHNW Alpha <br />
                 <span className="not-italic font-black text-stone-200 uppercase tracking-tighter">Acquisition.</span>
               </h2>
              <p className="text-2xl text-stone-500 font-light leading-relaxed max-w-xl italic">
                Our residential desk represents UHNW individuals and family offices with absolute privacy. From off-market heritage penthouses to private coastal estates.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-20 border-t border-stone-200">
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-stone-50 border border-stone-200 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform">
                    <Lock size={20} className="text-[#CFA052]" />
                  </div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900">Institutional Privacy</h4>
                  <p className="text-stone-400 font-light text-base leading-relaxed">Encrypted communications and non-disclosure protocols for every asset mandate.</p>
                </div>
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-stone-50 border border-stone-200 flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform">
                    <Globe size={20} className="text-[#CFA052]" />
                  </div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900">Global Hub Access</h4>
                  <p className="text-stone-400 font-light text-base leading-relaxed">Direct pipeline to premium inventory in London, Dubai, and Delhi/NCR hubs.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden group shadow-[0_60px_100px_rgba(0,0,0,0.12)] rounded-[3rem]"
            >
              <Image 
                src="/images/services/luxury_residential_portfolio_horizontal.png" 
                alt="Penthouse View" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-12 left-12">
                 <div className="px-8 py-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#CFA052] animate-pulse" />
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white">Portfolio Node_P7</span>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* 3. THE LEGACY PORTFOLIO — Horizontal Scroll */}
      <section ref={portfolioRef} className="h-[250vh] bg-[#050505] relative pt-32">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="container mx-auto px-6 mb-20 pointer-events-none z-20">
             <motion.h2 
               style={{ opacity: useTransform(portfolioProgress, [0.35, 0.45], [0, 1]) }}
               className="text-8xl md:text-[200px] font-serif italic text-white/5 leading-none uppercase tracking-tighter"
             >
               LEGACY PORTFOLIO
             </motion.h2>
          </div>

          <motion.div 
             style={{ x: xTranslate }}
             className="flex gap-12 px-[10vw]"
          >
            {[
              { title: "Coastal Estates", category: "Waterfront", img: "/images/services/luxury_residential_buy_sell_hero.png" },
              { title: "Heritage Penthouses", category: "City Core", img: "/images/services/luxury_residential_portfolio_horizontal.png" },
              { title: "Private Islands", category: "Ultima", img: "/images/services/luxury_hotel_horizon_hero.png" },
              { title: "Residential Tech", category: "Smart Living", img: "/images/services/hospitality_staff_dashboard_modern_operations.png" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="w-[85vw] md:w-[700px] shrink-0 aspect-[16/10] relative overflow-hidden group shadow-[0_80px_160px_rgba(0,0,0,0.6)] bg-[#0A0A0A] border border-white/5"
              >
                <Image src={item.img} alt={item.title} fill className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent p-16 flex flex-col justify-end">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-[1px] bg-[#CFA052]/40" />
                      <span className="text-[10px] font-black tracking-[0.6em] uppercase text-[#CFA052]">{item.category}</span>
                   </div>
                   <h3 className="text-5xl font-serif italic text-white leading-tight">{item.title}</h3>
                </div>
                {/* Interaction Overlay */}
                <div className="absolute top-12 right-12 w-16 h-16 bg-white/5 backdrop-blur-[30px] rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0">
                  <Compass size={28} className="text-[#CFA052]" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. ASSET MANDATE — Inquiry Form */}
      <Section spacing="lg" className="bg-[#FAF9F6] text-black relative z-30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32 items-center">
            
            <div className="lg:w-1/2 space-y-16">
               <div className="space-y-4">
                  <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block">Engagement</span>
                  <h2 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[0.95] tracking-tighter">
                    The <span className="italic font-light">Mandate.</span>
                  </h2>
               </div>
               <p className="text-2xl text-stone-400 font-light leading-relaxed max-w-sm italic">
                  Initiate a discrete consultation for asset acquisition or portfolio disposition.
               </p>
               
               <div className="flex flex-col gap-8 pt-12 border-t border-stone-200">
                 {[
                   "Off-Market Global Pipeline Access",
                   "Structural & Tax Optimization Coordination",
                   "Discreet Asset Disposition Strategies",
                   "UHNW Asset Management Consultation"
                 ].map((tag) => (
                    <div key={tag} className="flex items-center gap-6 text-xs font-bold uppercase tracking-[0.3em] text-stone-900 group">
                       <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center group-hover:bg-[#CFA052] group-hover:rotate-12 transition-all">
                          <ChevronRight size={14} className="group-hover:text-black text-stone-400" />
                       </div>
                       {tag}
                    </div>
                 ))}
               </div>
            </div>

            <div className="lg:w-1/2 w-full">
              {!isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#050505] p-12 md:p-20 text-white relative overflow-hidden rounded-[3rem] shadow-[0_60px_100px_rgba(0,0,0,0.4)]"
                >
                    {/* Decorative Atmospheric Blur */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#CFA052]/10 blur-[120px] rounded-full" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-16">
                         <Gem size={20} className="text-[#CFA052]" />
                         <h3 className="text-2xl md:text-3xl font-serif italic">Residentail Intake Portal</h3>
                      </div>

                      <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[9px] font-black uppercase tracking-[0.5em] text-white/40 mb-4 ml-1 group-focus-within:text-[#CFA052] transition-colors italic">Principal Identity (Confidential)</label>
                            <input required type="text" className="w-full bg-transparent p-4 text-xl font-light focus:outline-none placeholder:text-white/10" placeholder="SURNAME / FAMILY OFFICE" />
                         </div>
                         
                         <div className="grid grid-cols-2 gap-12">
                            <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                               <label className="block text-[9px] font-black uppercase tracking-[0.5em] text-white/40 mb-4 ml-1 group-focus-within:text-[#CFA052] transition-colors">Target Velocity</label>
                               <select className="w-full bg-transparent p-4 text-sm font-bold uppercase tracking-widest focus:outline-none appearance-none cursor-pointer">
                                  <option className="bg-[#050505]">Acquisition (Buy)</option>
                                  <option className="bg-[#050505]">Disposition (Sell)</option>
                                  <option className="bg-[#050505]">Strategic Lease</option>
                               </select>
                            </div>
                            <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                               <label className="block text-[9px] font-black uppercase tracking-[0.5em] text-white/40 mb-4 ml-1 group-focus-within:text-[#CFA052] transition-colors">Asset Valuation Hub</label>
                               <input type="text" className="w-full bg-transparent p-4 text-sm font-bold uppercase tracking-widest focus:outline-none placeholder:text-white/10" placeholder="$10M - $50M+" />
                            </div>
                         </div>

                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[9px] font-black uppercase tracking-[0.5em] text-white/40 mb-4 ml-1 group-focus-within:text-[#CFA052] transition-colors italic">Mandate Scope (e.g. Waterfront, London W1)</label>
                            <textarea className="w-full bg-transparent p-4 text-base font-light focus:outline-none placeholder:text-white/10 h-32 resize-none" placeholder="DESCRIBE ASSET REQUIREMENTS OR DISPOSITION GOALS..." />
                         </div>

                         <button className="w-full py-8 bg-[#CFA052] text-black text-[11px] font-black uppercase tracking-[0.7em] hover:bg-white transition-all duration-700 mt-12 shadow-2xl relative overflow-hidden group/submit">
                            <span className="relative z-10">Transmit Mandate</span>
                            <div className="absolute inset-0 bg-white -translate-x-full group-hover/submit:translate-x-0 transition-transform duration-700" />
                         </button>
                      </form>
                    </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#050505] p-24 text-center rounded-[3rem] border border-[#CFA052]/30 shadow-[0_80px_160px_rgba(207,160,82,0.15)]"
                >
                   <div className="w-24 h-24 rounded-full bg-[#CFA052]/10 border border-[#CFA052]/40 flex items-center justify-center mx-auto mb-12 animate-bounce">
                      <ShieldCheck size={40} className="text-[#CFA052]" />
                   </div>
                   <h3 className="text-4xl font-serif italic text-white mb-6">Transmitted.</h3>
                   <p className="text-white/40 text-lg font-light leading-relaxed mb-12 italic">
                      An advisory representative will initiate contact through private channels within 24 hours.
                   </p>
                   <button onClick={() => setIsSubmitted(false)} className="px-12 py-5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">New Mandate Entry</button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </Section>

      <footer className="py-24 border-t border-white/5 text-center px-6">
         <Link href="/services/commercial-space-buy-sell-lease" className="text-4xl md:text-[10vw] font-serif italic text-white/5 hover:text-[#CFA052]/40 transition-[color] uppercase tracking-tighter duration-1000">
            Next: Commercial Hub
         </Link>
      </footer>
    </main>
  );
}
