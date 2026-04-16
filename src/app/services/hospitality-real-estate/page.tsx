"use client";

import { useRef, useState, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
} from "framer-motion";
import { 
  Building, 
  Search, 
  MapPin, 
  Target, 
  Check, 
  ArrowUpRight,
  ChevronRight,
  TrendingUp,
  Layout,
  BarChart3
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

export default function HospitalityRealEstatePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    assetType: "New Hotel Development",
    projectStage: "Concept & Planning",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `
Asset Type: ${formData.assetType}
Project Stage: ${formData.projectStage}
Message: ${formData.message}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        subject: `Real Estate Mandate: ${formData.assetType}`,
        message: fullMessage,
        source: 'hospitality_real_estate_page'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Real Estate mandate briefed. our development desk will reach out.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Institutional processing error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const pillars = [
    {
      title: "Strategic Typology",
      icon: Layout,
      desc: "Defining the most profitable room mix and space allocation to optimize revenue per square meter."
    },
    {
      title: "Market Intelligence",
      icon: Search,
      desc: "Deep-dive demand analysis and location assessment to ensure project viability and bankability."
    },
    {
      title: "Real Estate Matching",
      icon: MapPin,
      desc: "Connecting investors with a curated network of premier hotel sites and acquisition opportunities."
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-[#A67C52] selection:text-white pt-32 pb-20">
      
      {/* ── SINGLE HIGH-FIDELITY REAL ESTATE PORTAL ── */}
      <Section id="asset-inquiry" spacing="none" className="bg-white text-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start min-h-[80vh]">
            
            <div className="lg:w-1/2 space-y-12 py-8">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1.2 }}
                 className="space-y-6"
               >
                 <span className="text-[10px] font-black text-[#A67C52] tracking-[0.6em] uppercase block italic underline underline-offset-8 decoration-[#A67C52]/30">FOR NEW & UNDER-RENOVATION HOTELS</span>
                 <h1 className="text-4xl md:text-7xl font-serif text-stone-900 leading-[1.1] tracking-tighter italic">
                   Planning to Invest <br />
                   <span className="not-italic font-black uppercase tracking-tight text-stone-200">in a Hotel?</span>
                 </h1>
                 <div className="space-y-2">
                    <p className="text-2xl font-serif italic text-stone-800">Start with Strategy. Build for Success.</p>
                    <p className="text-xl font-bold tracking-tight text-[#A67C52] uppercase">Plan Smart. Build Profitably.</p>
                 </div>
                 <p className="text-lg text-stone-400 font-light leading-relaxed italic border-l-2 border-stone-100 pl-8">
                   Before you design, fund, or construct your hotel, ensure every decision is guided by expert insight. At VNEXORA Luxury Estate Private Limited, we provide strategic clarity to transform your vision into a profitable and future-ready hospitality asset.
                 </p>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="space-y-12 pt-12"
                >
                 <span className="text-[9px] font-black tracking-[0.4em] uppercase text-stone-400">CONNECT WITH US TO UNDERSTAND:</span>
                 
                 {[
                   { 
                     n: "01", 
                     t: "HOTEL CONCEPT & STRATEGIC POSITIONING", 
                     s: "Define your vision before you design.",
                     d: "Establish a distinctive, market-aligned concept before initiating architectural planning to ensure long-term success and competitive advantage."
                   },
                   { 
                     n: "02", 
                     t: "PROFITABILITY & PERFORMANCE DRIVERS", 
                     s: "Maximize returns. Optimize performance.",
                     d: "Identify the key factors that determine your hotel's profitability, operational efficiency, and sustainable growth."
                   },
                   { 
                     n: "03", 
                     t: "FUNDING READINESS & INVESTMENT INSIGHTS", 
                     s: "Invest with clarity and confidence.",
                     d: "Gain essential insights before proceeding with hotel financing, investor partnerships, and funding programs."
                   }
                 ].map((item) => (
                    <div key={item.n} className="group space-y-4">
                       <div className="flex items-center gap-6">
                          <span className="text-2xl font-serif italic text-[#A67C52] opacity-40 group-hover:opacity-100 transition-opacity">{item.n}.</span>
                          <h3 className="text-xs font-black uppercase tracking-widest text-stone-900">{item.t}</h3>
                       </div>
                       <div className="pl-14 space-y-2">
                          <p className="text-sm font-bold italic text-stone-600">{item.s}</p>
                          <p className="text-sm font-light text-stone-400 leading-relaxed max-w-md">{item.d}</p>
                       </div>
                    </div>
                 ))}
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="pt-12 border-t border-stone-100 space-y-8"
               >
                 <div className="space-y-4">
                    <h4 className="text-[10px] font-black tracking-[0.5em] uppercase text-stone-900">WHY VNEXORA?</h4>
                    <p className="text-sm text-stone-400 italic">VNEXORA is a premium hospitality advisory brand specializing in:</p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                       {["Hotel Investments", "Concept Development", "Strategic Planning"].map(s => (
                          <div key={s} className="flex items-center gap-3">
                             <div className="w-1 h-1 rounded-full bg-[#A67C52]" />
                             <span className="text-[11px] font-bold uppercase tracking-widest text-stone-800">{s}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-4">
                    <p className="text-xs font-black tracking-[0.4em] text-[#A67C52] uppercase">POWERING PROFITABLE HOTELS.</p>
                    <div className="space-y-2">
                       <p className="text-sm font-bold text-stone-900 uppercase tracking-widest flex items-center gap-3">
                          <span className="p-1.5 rounded-full bg-stone-50"><Check size={12} className="text-[#A67C52]" /></span>
                          GET IN TOUCH
                       </p>
                       <div className="pl-9 space-y-1">
                          <p className="text-sm text-stone-400">📞 WhatsApp: <span className="text-stone-900 font-bold">+91-7980829403</span></p>
                          <p className="text-sm text-stone-400">🌐 Fill out the enquiry form, and our experts will contact you promptly.</p>
                       </div>
                    </div>
                 </div>
               </motion.div>
            </div>

            <div className="lg:w-1/2 w-full lg:sticky lg:top-32">
              {!isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#050505] p-12 md:p-20 text-white relative overflow-hidden rounded-none shadow-[0_60px_120px_rgba(0,0,0,0.15)]"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#A67C52]/10 blur-[100px] rounded-full" />
                    
                    <div className="relative z-10">
                      <div className="mb-12">
                        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#A67C52] block mb-4">Mandate Selector</span>
                        <div className="flex p-1 bg-white/5 rounded-full border border-white/10 mb-8 max-w-sm">
                          {[
                            { id: "source", label: "Asset Sourcing" },
                            { id: "dev", label: "Asset Development" }
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setFormData({...formData, assetType: opt.label})}
                              className={cn(
                                "flex-1 py-3 text-[9px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-500",
                                formData.assetType === opt.label 
                                  ? "bg-[#A67C52] text-white shadow-lg" 
                                  : "text-white/30 hover:text-white"
                              )}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                        <h3 className="text-3xl font-serif italic mb-2">Asset Mandate Inbox</h3>
                        <p className="text-white/30 font-light italic">Define your real estate intent for strategic matching.</p>
                      </div>

                      <form className="space-y-10" onSubmit={handleSubmit}>
                         <div className="group border-b border-white/10 focus-within:border-[#A67C52] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#A67C52] transition-colors">Developer Name</label>
                            <input 
                              required 
                              type="text" 
                              value={formData.fullName}
                              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/5" 
                              placeholder="YOUR NAME" 
                            />
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#A67C52] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#A67C52] transition-colors">Official Email</label>
                            <input 
                              required 
                              type="email" 
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/5" 
                              placeholder="EMAIL@PROJECT.COM" 
                            />
                         </div>

                         <div className="group border-b border-white/10 focus-within:border-[#A67C52] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#A67C52] transition-colors">Strategic Intent</label>
                            <textarea 
                              required
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/5 h-32 resize-none" 
                              placeholder="DESCRIBE YOUR VISION..." 
                            />
                         </div>

                         <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#A67C52] hover:text-white transition-all duration-700 mt-8 rounded-none overflow-hidden relative group"
                         >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10 transition-all duration-700 group-hover:h-full group-hover:bg-[#A67C52]" />
                            <span className="relative z-10">{isSubmitting ? "TRANSMITTING..." : "Engage Development Desk"}</span>
                         </button>
                      </form>
                    </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-20 text-center bg-[#050505] rounded-none border border-white/5 shadow-2xl">
                   <div className="w-20 h-20 bg-[#A67C52] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(166,124,82,0.4)]">
                      <Check className="text-white w-10 h-10" />
                   </div>
                   <h3 className="text-3xl font-serif italic text-white mb-4">Briefed.</h3>
                   <p className="text-white/30 font-light max-w-xs mx-auto mb-10 italic">Your development mandate has been established. Our technical desk will initiate analysis within 24 hours.</p>
                   <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67C52] hover:text-white transition-colors">Start New Briefing</button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </Section>
    </main>
  );
}
