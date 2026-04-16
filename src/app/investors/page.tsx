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
  id?: string;
  spacing?: "none" | "sm" | "md" | "lg" 
}>(({ children, className, id, spacing = "md" }, ref) => {
  const spacingClass = {
    none: "",
    sm: "py-12 md:py-24",
    md: "py-24 md:py-40",
    lg: "py-40 md:py-64"
  }[spacing];

  return (
    <section ref={ref} id={id} className={cn(spacingClass, className)}>
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
    <main className="min-h-screen bg-white selection:bg-[#A67C52] selection:text-white pt-32 pb-20">
      
      {/* ── SINGLE HIGH-FIDELITY MANDATE PORTAL ── */}
      <Section id="mandate-portal" spacing="none" className="bg-white text-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center min-h-[70vh]">
            
            <div className="lg:w-1/2 space-y-12">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1.2 }}
                 className="space-y-8"
               >
                 <span className="text-[10px] font-black text-[#A67C52] tracking-[0.6em] uppercase block italic underline underline-offset-8 decoration-[#A67C52]/30">Institutional Division</span>
                 <h1 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tighter italic">
                   Architecture <br />
                   <span className="not-italic font-black uppercase tracking-tight text-stone-200">of Capital.</span>
                 </h1>
                 <p className="text-xl text-stone-400 font-light leading-relaxed max-w-sm italic">
                   Vnexora partners with institutional funds and private equity to deploy capital into high-alpha hospitality assets.
                 </p>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="space-y-8 pt-12 border-t border-stone-100"
                >
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
               </motion.div>
            </div>

            <div className="lg:w-1/2 w-full">
              {!isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#050505] p-12 md:p-20 text-white relative overflow-hidden rounded-none shadow-[0_60px_150px_rgba(0,0,0,0.15)]"
                >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A67C52]/5 blur-[120px] rounded-full" />
                    
                    <div className="relative z-10">
                      <div className="mb-12">
                        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#A67C52] block mb-4">Mandate Selector</span>
                        <div className="flex p-1 bg-white/5 rounded-full border border-white/10 mb-8 max-w-sm">
                          {[
                            { id: "new", label: "New Entry" },
                            { id: "scale", label: "Portfolio Scaling" }
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setFormData({...formData, investmentScale: opt.label})}
                              className={cn(
                                "flex-1 py-3 text-[9px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-500",
                                formData.investmentScale === opt.label 
                                  ? "bg-[#A67C52] text-white shadow-lg" 
                                  : "text-white/30 hover:text-white"
                              )}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
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
                          className="group relative w-full py-8 bg-white text-black text-[10px] font-black uppercase tracking-[0.6em] hover:bg-[#A67C52] hover:text-white transition-all duration-700 mt-8 rounded-none overflow-hidden shadow-2xl disabled:opacity-50"
                         >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10 transition-all duration-700 group-hover:h-full group-hover:bg-[#A67C52]" />
                            <span className="relative z-10">{isSubmitting ? "INITIATING DEPLOYMENT..." : "Engage Investment Desk"}</span>
                         </button>
                      </form>
                    </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-20 text-center bg-[#050505] rounded-none border border-white/5 shadow-2xl">
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
    </main>
  );
}
