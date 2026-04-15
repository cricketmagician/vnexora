"use client";

import { useRef, useState, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  AnimatePresence
} from "framer-motion";
import { 
  Building2, 
  ChevronRight, 
  Check, 
  TrendingUp, 
  Search, 
  MapPin, 
  BarChart3, 
  Cpu, 
  Target,
  ArrowUpRight,
  Handshake
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

const Section = forwardRef<HTMLElement, { 
  children: React.ReactNode; 
  className?: string; 
  spacing?: "none" | "sm" | "md" | "lg" 
}>(({ children, className, spacing = "md" }, ref) => {
  const spacingClass = {
    none: "",
    sm: "py-12 md:py-24",
    md: "py-24 md:py-40",
    lg: "py-40 md:py-64"
  }[spacing];

  return (
    <section ref={ref} className={cn(spacingClass, className)}>
      {children}
    </section>
  );
});
Section.displayName = "Section";

export default function InvestorsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    investmentScale: "Scale Up ($5M - $20M)",
    focusArea: "New Development Concept",
    message: ""
  });

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `
Investment Scale: ${formData.investmentScale}
Focus Area: ${formData.focusArea}
Message: ${formData.message}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        subject: `New Investor Inquiry: ${formData.focusArea}`,
        message: fullMessage,
        source: 'investors_portal'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Institutional mandate briefed. Our investment desk will reach out.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Institutional processing error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      title: "Investment Intelligence",
      icon: Search,
      desc: "Deep-dive feasibility studies and predictive ROI modeling for new-market entry.",
      tags: ["Feasibility", "Predictive Analytics", "Valuation"]
    },
    {
      title: "Real Estate Matching",
      icon: MapPin,
      desc: "Architecting property acquisition and site selection through a global network of partners.",
      tags: ["Site Selection", "Asset Matching", "Due Diligence"]
    },
    {
      title: "Conceptual DNA",
      icon: Target,
      desc: "Designing unique, market-driven hotel concepts that command premium ADR from day one.",
      tags: ["Concept Design", "Branding", "Positioning"]
    }
  ];

  const valueProps = [
    {
      title: "Alpha Yield",
      metric: "+18%",
      desc: "Average revenue uptick via AI-optimized pricing strategies."
    },
    {
      title: "Tech Leverage",
      metric: "mangoH",
      desc: "Proprietary AI guest-service ecosystem built for asset owners."
    },
    {
      title: "Risk Mitigation",
      metric: "Institutional",
      desc: "End-to-end operational audits to minimize cost leakage."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-[#A67C52] selection:text-white">
      
      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-[95vh] flex items-center justify-center bg-black overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" 
            alt="Institutional Hospitality Architecture" 
            fill 
            className="object-cover brightness-40 saturate-[0.8]" 
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/60" />
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <span className="text-[10px] font-black tracking-[0.8em] text-[#A67C52] uppercase block mb-12">
              Investor Mandate
            </span>
            <h1 className="text-5xl md:text-[120px] font-serif italic text-white leading-[0.9] tracking-tighter mb-12">
              Designing <br />
              <span className="not-italic font-black text-transparent bg-clip-text bg-linear-to-r from-white via-white/80 to-white/40 uppercase">Architecture of Profit.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/40 font-light max-w-2xl mx-auto tracking-widest uppercase italic leading-relaxed">
              Vnexora partners with institutional capital to conceptualize, acquire, and optimize high-value hospitality assets.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-20"
            >
              <button 
                onClick={() => document.getElementById('mandate-portal')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-12 py-5 bg-[#A67C52] text-white overflow-hidden rounded-full shadow-[0_20px_50px_rgba(166,124,82,0.3)] hover:scale-105 transition-all duration-700"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4">
                  Engage Mandate <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
        >
          <span className="text-[8px] uppercase tracking-[0.5em] text-white rotate-90 origin-left ml-2">Scroll</span>
          <div className="w-[1px] h-12 bg-white" />
        </motion.div>
      </section>

      {/* ── INTELLIGENCE PILLARS ── */}
      <Section spacing="lg" className="bg-[#FAF9F6]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-12 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.03)] border border-black/[0.03] hover:shadow-[0_40px_120px_rgba(166,124,82,0.1)] transition-all duration-700"
              >
                <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#A67C52] mb-12 group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-700">
                  <service.icon size={28} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-6 italic">{service.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed mb-10 text-lg">{service.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-stone-300 border border-stone-100 px-4 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── MANGO H SYNERGY (THE ALPHA LAYER) ── */}
      <Section spacing="lg" className="bg-[#020617] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#A67C52]/5 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[px] bg-[#A67C52] translate-y-[0.5px]" />
                  <span className="text-[10px] font-black text-[#A67C52] tracking-[0.5em] uppercase">The Tech Advantage</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-serif italic leading-[0.95]">
                  The Neural <br />
                  <span className="not-italic font-black text-white/10 uppercase tracking-tighter">Alpha Engine.</span>
                </h2>
                <p className="text-2xl text-white/40 font-light leading-relaxed italic max-w-xl">
                  By integrating the mangoH AI ecosystem into our assets, we unlock unprecedented operational efficiency and ADR growth that standard management models cannot reach.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
                {valueProps.map((prop, i) => (
                  <motion.div
                    key={prop.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="space-y-4"
                  >
                    <span className="text-4xl font-serif text-[#A67C52]">{prop.metric}</span>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-2">{prop.title}</h4>
                    <p className="text-sm font-light text-white/30 leading-relaxed">{prop.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square md:aspect-[4/5] rounded-[4rem] overflow-hidden group shadow-[0_60px_150px_rgba(0,0,0,0.5)] bg-white/5 border border-white/10"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Boardroom Performance" 
                  fill 
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-[8s] ease-out brightness-50 contrast-125" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="px-8 py-6 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#A67C52] animate-pulse" />
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40">Portfolio_Visibility_Live</span>
                      </div>
                      <p className="text-white text-lg font-serif italic">Real-time P&L intelligence and predictive ADR velocity tracking across all institutional assets.</p>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── INVESTOR INTAKE FORM ── */}
      <Section id="mandate-portal" spacing="lg" className="bg-white text-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
            
            <div className="lg:w-[40%] space-y-12 lg:sticky lg:top-32">
               <span className="text-[10px] font-black text-[#A67C52] tracking-[0.6em] uppercase block italic underline underline-offset-8 decoration-[#A67C52]/30">Deployment</span>
               <h2 className="text-4xl md:text-7xl font-serif text-stone-900 leading-tight italic">
                 Secure your <br />
                 <span className="not-italic font-black uppercase tracking-tight text-stone-200">Institutional</span> Mandate.
               </h2>
               <p className="text-xl text-stone-400 font-light leading-relaxed max-w-sm italic">
                 Vnexora's investment desk manages specialized mandates for portfolio expansion and conceptual design.
               </p>
               
               <div className="space-y-8 pt-12">
                 {[
                   { t: "Asset Acquisition Matching", i: MapPin },
                   { t: "Greenfield Hospitality Concepts", i: Building2 },
                   { t: "Predictive Feasibility Reports", i: BarChart3 },
                   { t: "Institutional Joint Ventures", i: Handshake }
                 ].map((item) => (
                    <div key={item.t} className="flex items-center gap-6 group">
                       <div className="p-3 rounded-full bg-[#FAF9F6] text-[#A67C52] group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-500">
                          <item.i size={16} />
                       </div>
                       <span className="text-[11px] font-bold uppercase tracking-widest text-stone-800 transition-colors group-hover:text-[#A67C52]">{item.t}</span>
                    </div>
                 ))}
               </div>
            </div>

            <div className="lg:w-[60%] w-full" id="mandate-portal">
              {!isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#020617] p-12 md:p-20 text-white relative overflow-hidden rounded-[4rem] shadow-[0_60px_150px_rgba(0,0,0,0.15)]"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A67C52]/5 blur-[120px] rounded-full" />
                    
                    <div className="relative z-10">
                      <div className="mb-16">
                        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#A67C52] block mb-4">Phase_01</span>
                        <h3 className="text-4xl font-serif italic mb-2">Institutional Intake</h3>
                        <p className="text-white/30 font-light italic">Establish your investment profile to access our pipeline.</p>
                      </div>

                      <form className="space-y-12" onSubmit={handleSubmit}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="group border-b border-white/10 focus-within:border-[#A67C52] transition-colors duration-500">
                               <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-4 group-focus-within:text-[#A67C52] transition-colors">Investor Name / Firm</label>
                               <input 
                                 required 
                                 type="text" 
                                 value={formData.fullName}
                                 onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                 className="w-full bg-transparent p-2 pb-6 text-xl font-light focus:outline-none placeholder:text-white/5" 
                                 placeholder="NAME" 
                               />
                            </div>
                            <div className="group border-b border-white/10 focus-within:border-[#A67C52] transition-colors duration-500">
                               <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-4 group-focus-within:text-[#A67C52] transition-colors">Official Email</label>
                               <input 
                                 required 
                                 type="email" 
                                 value={formData.email}
                                 onChange={(e) => setFormData({...formData, email: e.target.value})}
                                 className="w-full bg-transparent p-2 pb-6 text-xl font-light focus:outline-none placeholder:text-white/5" 
                                 placeholder="EMAIL@AGENT.COM" 
                               />
                            </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="group border-b border-white/10 focus-within:border-[#A67C52] transition-colors duration-500">
                               <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-4 group-focus-within:text-[#A67C52] transition-colors">Investment Scale</label>
                               <select 
                                 value={formData.investmentScale}
                                 onChange={(e) => setFormData({...formData, investmentScale: e.target.value})}
                                 className="w-full bg-transparent p-2 pb-6 text-xl font-light focus:outline-none appearance-none tracking-widest text-white/80"
                               >
                                  <option className="bg-[#020617]">Seed / Concept Stage</option>
                                  <option className="bg-[#020617]">Scale Up ($5M - $20M)</option>
                                  <option className="bg-[#020617]">Institutional ($50M+)</option>
                               </select>
                            </div>
                            <div className="group border-b border-white/10 focus-within:border-[#A67C52] transition-colors duration-500">
                               <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-4 group-focus-within:text-[#A67C52] transition-colors">Strategic Focus</label>
                               <select 
                                 value={formData.focusArea}
                                 onChange={(e) => setFormData({...formData, focusArea: e.target.value})}
                                 className="w-full bg-transparent p-2 pb-6 text-xl font-light focus:outline-none appearance-none tracking-widest text-white/80"
                               >
                                  <option className="bg-[#020617]">New Development Concept</option>
                                  <option className="bg-[#020617]">Asset Acquisition/Repositioning</option>
                                  <option className="bg-[#020617]">Portfolio AI Digitalization</option>
                               </select>
                            </div>
                         </div>

                         <div className="group border-b border-white/10 focus-within:border-[#A67C52] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-4 group-focus-within:text-[#A67C52] transition-colors">Strategic Mandate Detail</label>
                            <textarea 
                              required
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                              className="w-full bg-transparent p-2 pb-6 text-xl font-light focus:outline-none placeholder:text-white/5 h-32 resize-none" 
                              placeholder="DESCRIBE YOUR OBJECTIVES..." 
                            />
                         </div>

                         <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full py-8 bg-white text-black text-[10px] font-black uppercase tracking-[0.6em] hover:bg-[#A67C52] hover:text-white transition-all duration-700 mt-8 rounded-full overflow-hidden shadow-2xl disabled:opacity-50"
                         >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10 transition-all duration-700 group-hover:h-full group-hover:bg-[#A67C52]" />
                            <span className="relative z-10">{isSubmitting ? "INITIATING DEPLOYMENT..." : "Engage Investment Desk"}</span>
                         </button>
                      </form>
                    </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-20 text-center bg-[#020617] rounded-[4rem] border border-white/5 shadow-2xl">
                   <div className="w-24 h-24 bg-[#A67C52] rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_50px_rgba(166,124,82,0.5)]">
                      <Check className="text-white w-12 h-12" />
                   </div>
                   <h3 className="text-4xl font-serif italic text-white mb-6 tracking-tighter">Mandate Certified.</h3>
                   <p className="text-white/30 font-light max-w-xs mx-auto mb-12 italic leading-relaxed">Your institutional request has been queued. Our lead investment partner will contact you within 24 hours.</p>
                   <button onClick={() => setIsSubmitted(false)} className="text-[11px] font-black uppercase tracking-[0.5em] text-[#A67C52] hover:text-white transition-colors">Open New Briefing</button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </Section>

      {/* ── CINEMATIC FOOTER TRANSITION ── */}
      <footer className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden group bg-black">
         <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Real Estate Skyline"
            fill
            className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-1000 group-hover:scale-110 transition-transform duration-[10s] saturate-0 contrast-125"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-transparent to-black" />
         
         <div className="relative z-10 text-center px-6 max-w-5xl translate-y-[-10vh]">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="space-y-16"
            >
               <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[1em] text-[#A67C52] block opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:tracking-[1.4em]">Asset Liquidity</span>
                  <div className="w-16 h-px bg-[#A67C52]/30 mx-auto" />
               </div>
               
               <Link href="/services/hotels-resorts-buy-sell" className="block group/link">
                  <h2 className="text-6xl md:text-[8vw] font-serif italic text-white tracking-tighter leading-none transition-all duration-1000 group-hover:text-[#A67C52] group-hover:scale-[1.05]">
                     Exit <br className="md:hidden" /> Strategies.
                  </h2>
                  <p className="mt-12 text-white/30 text-base md:text-2xl font-light tracking-widest max-w-2xl mx-auto opacity-0 group-hover/link:opacity-100 transition-all duration-1000 transform translate-y-8 group-hover/link:translate-y-0 italic uppercase">
                     Explore our exclusive portfolio of hospitality assets for institutional acquisition.
                  </p>
               </Link>
            </motion.div>
         </div>
      </footer>
    </main>
  );
}
