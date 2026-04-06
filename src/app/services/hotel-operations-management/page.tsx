"use client";

import { useRef, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
} from "framer-motion";
import { 
  ArrowLeft, 
  Sparkles, 
  Layers, 
  ChevronRight,
  Plus,
  ShieldCheck,
  Zap,
  Activity,
  LineChart
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

// --- Operations Hub ---

export default function HotelOperationsHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Operational Cycle Scroll Setup
  const { scrollYProgress: cycleProgress } = useScroll({
    target: cycleRef,
    offset: ["start end", "end start"]
  });

  const xTranslate = useTransform(cycleProgress, [0.4, 0.6], ["0%", "-50%"]);

  return (
    <main ref={containerRef} className="bg-[#050505] text-white selection:bg-[#CFA052] selection:text-black font-sans">
      
      {/* 1. CINEMATIC MANAGED EXCELLENCE HERO */}
      <section className="relative h-[110vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/services/luxury_hotel_operations_hero.png" 
            alt="Operations Hero" 
            fill 
            className="object-cover brightness-[0.4]"
            priority
          />
          {/* Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <Link href="/services" className="group inline-flex items-center gap-3 px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-500">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Institutional Expertise</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              style={{ y: heroTranslateY }}
            >
              <h1 className="text-7xl md:text-[140px] font-serif italic text-white/95 leading-[0.9] tracking-tighter mb-12">
                Managed<br />
                Excellence <span className="font-sans not-italic text-outline-silver text-transparent">& Scale</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-white/50 leading-relaxed tracking-tight italic">
                "Infrastructure is invisible until it fails. We build operational robustness into the very foundations of luxury assets."
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#CFA052]/60">Operational Review</span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#CFA052] to-transparent animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE INFRASTRUCTURE — Pro Max UI Split */}
      <Section spacing="lg" className="bg-[#FAF9F6] text-black pt-56">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block">Asset Oversight</span>
              <h2 className="text-5xl md:text-8xl font-serif italic leading-[1] text-stone-900">
                Invisible <br />
                Precision.
              </h2>
              <p className="text-2xl text-stone-500 font-light leading-relaxed max-w-xl">
                Operational success is the silent engine of profitability. At Vnexora, our management programs are proactive, data-driven, and institutional-grade.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-stone-200">
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900 mb-4 flex items-center gap-3">
                    <ShieldCheck size={16} className="text-[#CFA052]" />
                    Third-Party Management
                  </h4>
                  <p className="text-stone-400 font-light text-base leading-relaxed">Independent oversight for global brands, ensuring owner interests are prioritized through clinical management standards.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900 mb-4 flex items-center gap-3">
                    <LineChart size={16} className="text-[#CFA052]" />
                    P&L Intelligence
                  </h4>
                  <p className="text-stone-400 font-light text-base leading-relaxed">Deep-tissue financial auditing and GOP optimization driven by our proprietary neural performance core.</p>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.1)] rounded-[2.5rem]"
            >
              <Image 
                src="/images/services/luxury_hotel_service_excellence_horizontal.png" 
                alt="Service Excellence" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[4s]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                 <div className="px-6 py-2 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full">
                    <span className="text-[9px] font-black tracking-widest uppercase text-white">Institutional Standards</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 3. THE OPERATIONAL CYCLE — Horizontal Scroll */}
      <section ref={cycleRef} className="h-[250vh] bg-[#050505] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="container mx-auto px-6 mb-20 pointer-events-none z-20">
             <motion.h2 
               style={{ opacity: useTransform(cycleProgress, [0.35, 0.45], [0, 1]) }}
               className="text-8xl md:text-[180px] font-serif italic text-white/5 leading-none uppercase tracking-tighter"
             >
               OPERATIONS CYCLE
             </motion.h2>
          </div>

          <motion.div 
             style={{ x: xTranslate }}
             className="flex gap-12 px-[10vw]"
          >
            {[
              { title: "Institutional Intake", category: "Audit & Setup", img: "/images/services/luxury_hotel_service_excellence_horizontal.png" },
              { title: "Neural Oversight", category: "P&L Intelligence", img: "/images/services/hospitality_staff_dashboard_modern_operations.png" },
              { title: "Yield Performance", category: "Revenue Optimization", img: "/images/services/luxury_marketing_performance_stats.png" },
              { title: "Quality Preservation", category: "Technical Services", img: "/images/services/luxury_hotel_architectural_shadows.png" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="w-[85vw] md:w-[600px] shrink-0 aspect-[16/10] relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-[#0A0A0A] border border-white/5"
              >
                <Image src={item.img} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-[1px] bg-mustard/40" />
                      <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#CFA052]">{item.category}</span>
                   </div>
                   <h3 className="text-4xl font-serif italic text-white leading-tight">{item.title}</h3>
                </div>
                {/* Floating Action */}
                <div className="absolute top-12 right-12 w-14 h-14 bg-white/5 backdrop-blur-[20px] rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <Activity size={24} className="text-[#CFA052]" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. TECHNICAL MANDATE — Inquiry Form */}
      <Section spacing="lg" className="bg-white text-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2 space-y-12">
               <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block italic underline underline-offset-8">Mandates</span>
               <h2 className="text-4xl md:text-7xl font-serif text-stone-900 leading-tight italic">
                 Deploy <br />
                 <span className="not-italic font-sans font-bold uppercase tracking-tight">Institutional</span> Management.
               </h2>
               <p className="text-xl text-stone-400 font-light leading-relaxed max-w-sm italic">
                 Secure your asset's performance for the next cycle. Request a professional audit.
               </p>
               <div className="flex flex-col gap-6 pt-12">
                 {[
                   "End-to-end Management Contract",
                   "Asset Performance Audit",
                   "Preventive Maintenance Survey",
                   "Commercial Yield Strategy"
                 ].map((tag) => (
                    <div key={tag} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-stone-800 border-b border-stone-100 pb-4">
                       <ChevronRight size={14} className="text-[#CFA052]" />
                       {tag}
                    </div>
                 ))}
               </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#050505] p-12 md:p-16 lg:p-20 text-white relative overflow-hidden rounded-[0px]"
              >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#CFA052]/10 blur-[100px] rounded-full" />
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-serif italic mb-12">Operations Intake Portal</h3>
                    <form className="space-y-8" action="#" method="POST">
                       <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                          <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Asset Details (Keys & Location)</label>
                          <input type="text" className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10" placeholder="120 KEYS — LONDON / DUBAI" />
                       </div>
                       <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                          <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Management Type</label>
                          <select className="w-full bg-transparent p-4 text-lg font-light focus:outline-none appearance-none uppercase tracking-widest text-white/80">
                             <option className="bg-[#050505]">Full Management Mandate</option>
                             <option className="bg-[#050505]">Operations Audit Only</option>
                             <option className="bg-[#050505]">Joint Management (Hybrid)</option>
                          </select>
                       </div>
                       <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                          <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Commercial Goal (e.g. ADR Target)</label>
                          <textarea className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10 h-32 resize-none" placeholder="REACH $450 ADR BY Q4..." />
                       </div>

                       <button className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#CFA052] transition-all duration-700 mt-8 shadow-2xl shadow-white/5">
                          Engage Management Team
                       </button>
                    </form>
                  </div>
              </motion.div>
            </div>

          </div>
        </div>
      </Section>

      <footer className="py-20 border-t border-white/5 text-center px-6">
         <Link href="/services/sales-marketing" className="text-4xl md:text-9xl font-serif italic text-white/10 hover:text-[#CFA052]/40 transition-[color] uppercase tracking-tighter duration-1000">
            Next: Growth
         </Link>
      </footer>
    </main>
  );
}
