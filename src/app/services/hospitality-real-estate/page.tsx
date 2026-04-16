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
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-[#A67C52] selection:text-white">
      
      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-[90vh] flex items-center justify-center bg-black overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1541339907198-e08756edd811?q=80&w=2070&auto=format&fit=crop" 
            alt="Hospitality Real Estate Development" 
            fill 
            className="object-cover brightness-50 saturate-[0.8]" 
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#FAF9F6]" />
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.8em] text-[#A67C52] uppercase block mb-12">Asset Development</span>
            <h1 className="text-5xl md:text-[120px] font-serif italic text-white leading-[0.85] tracking-tighter mb-12">
              Architecting <br />
              <span className="not-italic font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 uppercase">Hospitality Assets.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/50 font-light max-w-2xl mx-auto tracking-widest uppercase italic leading-relaxed">
              Vnexora provides specialized consulting to ensure that every square meter of your hospitality development is engineered for maximum ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STRATEGIC PILLARS ── */}
      <Section spacing="lg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-[#A67C52]" />
                <span className="text-[10px] font-black text-[#A67C52] tracking-[0.6em] uppercase">Development Strategy</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-serif italic text-stone-900 leading-[0.95]">
                Optimizing <br />
                <span className="not-italic font-black text-stone-200 uppercase tracking-tighter">Spatial Yield.</span>
              </h2>
              <p className="text-xl text-stone-500 font-light leading-relaxed max-w-xl italic">
                From conceptual typology to financial feasibility, we bridge the gap between architectural vision and investment performance.
              </p>
              
              <div className="space-y-8 pt-8">
                {pillars.map((pillar, i) => (
                  <div key={pillar.title} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#A67C52] shadow-xl group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-500 flex-shrink-0">
                      <pillar.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900 mb-2">{pillar.title}</h4>
                      <p className="text-stone-400 font-light text-base leading-relaxed max-w-sm">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-[0_60px_120px_rgba(0,0,0,0.1)] bg-stone-100"
            >
              <Image 
                src="https://images.unsplash.com/photo-1541339907198-e08756edd811?q=80&w=2070&auto=format&fit=crop" 
                alt="Development Excellence" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[8s] ease-out brightness-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10">
                 <div className="px-6 py-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#A67C52] animate-pulse" />
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white">Project_Insight_Node</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── FEASIBILITY & BANKABILITY ── */}
      <section className="py-24 md:py-40 bg-[#050505] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#A67C52]/5 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.8em] text-[#A67C52] uppercase block mb-8">Financial Engineering</span>
            <h2 className="text-5xl md:text-8xl font-serif italic tracking-tighter mb-12">Bankable Concepts.</h2>
            <p className="text-xl text-white/40 font-light leading-relaxed tracking-widest uppercase italic">
              "We transform hospitality dreams into audited investment realities."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "Dynamic P&L Simulation", d: "Rigorous financial modeling based on real-world operational data.", i: BarChart3 },
              { t: "Institutional ROI Projection", d: "Predictive analytics to determine exit value and stabilized yield.", i: TrendingUp },
              { t: "Development Audit", d: "360-degree review of construction costs vs. brand standards.", i: Check }
            ].map((item, i) => (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-12 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-700"
              >
                <item.i className="text-[#A67C52] mb-8" size={32} strokeWidth={1} />
                <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-white mb-6 italic">{item.t}</h4>
                <p className="text-white/40 font-light text-base leading-relaxed italic lowercase">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSET INQUIRY FORM ── */}
      <Section id="asset-inquiry" spacing="lg" className="bg-white text-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
            
            <div className="lg:w-1/2 space-y-12">
               <span className="text-[10px] font-black text-[#A67C52] tracking-[0.6em] uppercase block italic underline underline-offset-8 decoration-[#A67C52]/20">Asset Intake</span>
               <h2 className="text-4xl md:text-7xl font-serif text-stone-900 leading-tight italic">
                 Deploy your <br />
                 <span className="not-italic font-black uppercase tracking-tight text-stone-200">Real Estate</span> Vision.
               </h2>
               <p className="text-xl text-stone-400 font-light leading-relaxed max-w-sm italic">
                 Vnexora partners with developers to create high-performing hospitality assets. Request a strategic audit.
               </p>
               <div className="flex flex-col gap-6 pt-12 border-t border-stone-100">
                 {[
                   "Concept-to-Owner Lifecycle",
                   "Strategic Real Estate Matching",
                   "Institutional Feasibility Study",
                   "Operational Brand Implementation"
                 ].map((tag) => (
                    <div key={tag} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-stone-800">
                       <ChevronRight size={14} className="text-[#A67C52]" />
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

      {/* ── CINEMATIC FOOTER TRANSITION ── */}
      <footer className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden group bg-black">
         <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
            alt="Capital Synergy"
            fill
            className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-110 transition-transform duration-[8s] saturate-0 contrast-125"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-transparent to-black" />
         
         <div className="relative z-10 text-center px-6 max-w-5xl translate-y-[-5vh]">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="space-y-12"
            >
               <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[1em] text-[#A67C52] block opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:tracking-[1.2em]">Institutional Synergy</span>
                  <div className="w-12 h-px bg-[#A67C52]/30 mx-auto" />
               </div>
               
               <Link href="/investors" className="block group/link">
                  <h2 className="text-6xl md:text-[8vw] font-serif italic text-white tracking-tighter leading-none transition-all duration-1000 group-hover:text-[#A67C52] group-hover:scale-[1.02]">
                     Capital <br className="md:hidden" /> Mandates.
                  </h2>
                  <p className="mt-12 text-white/30 text-base md:text-2xl font-light tracking-widest max-w-2xl mx-auto opacity-0 group-hover/link:opacity-100 transition-all duration-1000 transform translate-y-4 group-hover/link:translate-y-0 italic uppercase">
                     Explore our network of institutional capital partners for your hospitality assets.
                  </p>
               </Link>
            </motion.div>
         </div>
      </footer>
    </main>
  );
}
