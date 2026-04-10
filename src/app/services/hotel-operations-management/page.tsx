"use client";

import { useRef, useState, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
} from "framer-motion";
import { 
  Activity,
  ChevronLeft
} from "lucide-react";
import RoadmapCarousel from "@/components/sections/RoadmapCarousel";
import Image from "next/image";
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

export default function HotelOperationsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    assetDetails: "",
    managementType: "Full Management Mandate",
    commercialGoal: "",
    email: "",
    fullName: ""
  });

  const { scrollYProgress: portfolioProgress } = useScroll({
    target: portfolioRef,
    offset: ["start end", "end start"]
  });

  const xTranslate = useTransform(portfolioProgress, [0, 1], ["0%", "-50%"]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `
Asset Details: ${formData.assetDetails}
Management Type: ${formData.managementType}
Commercial Goal: ${formData.commercialGoal}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: formData.fullName || "Institutional Representative",
        email: formData.email,
        subject: `Operations Mandate: ${formData.managementType}`,
        message: fullMessage,
        source: 'hotel_operations_page'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Operations mandate briefed. Our technical desk will reach out.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Institutional processing error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-mustard selection:text-white">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image 
            src="/images/services/luxury_hotel_horizon_hero.png" 
            alt="Luxury Hotel Horizon" 
            fill 
            className="object-cover brightness-50" 
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="space-y-8"
          >
            <span className="text-[10px] font-black tracking-[0.8em] text-[#CFA052] uppercase block">Institutional Operations</span>
            <h1 className="text-6xl md:text-[140px] font-serif italic text-white leading-[0.85] tracking-tighter">
              Performance <br />
              <span className="not-italic font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 uppercase">Evolved.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-light max-w-xl mx-auto tracking-widest uppercase italic">
              Where Precision Engineering meets Hospitality Excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE NEURAL CORE */}
      <Section spacing="lg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#CFA052]" />
                  <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block">Systemic Advantage</span>
               </div>
               <h2 className="text-5xl md:text-8xl font-serif italic leading-[0.95] text-stone-900">
                 The Neural <br />
                 <span className="not-italic font-black text-stone-200 uppercase tracking-tighter">Ops Center.</span>
               </h2>
              <p className="text-2xl text-stone-500 font-light leading-relaxed max-w-xl italic">
                We don't just manage hotels; we engineer ecosystems. Our proprietary "Vnexora Neural Center" provides real-time P&L visibility and guest-sentiment alpha.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20 border-t border-stone-200">
                 <div className="space-y-6">
                    <Zap size={24} className="text-[#CFA052]" />
                    <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900">Alpha Yield</h4>
                    <p className="text-stone-400 font-light text-base leading-relaxed">Dynamic revenue algorithms that predict demand velocity before the market shifts.</p>
                 </div>
                 <div className="space-y-6">
                    <Database size={24} className="text-[#CFA052]" />
                    <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900">Deep Audit</h4>
                    <p className="text-stone-400 font-light text-base leading-relaxed">360-degree technical and operational audits to eliminate cost-leakage at every node.</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden group shadow-[0_60px_120px_rgba(0,0,0,0.15)] bg-slate-100"
            >
              <Image 
                src="/images/services/luxury_hotel_service_excellence_horizontal.png" 
                alt="Operational Excellence" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-12 left-12">
                 <div className="px-6 py-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#CFA052] animate-pulse" />
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white">Ops_Node_Alpha</span>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* 3. PERFORMANCE HORIZON — Manual Carousel */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-6 mb-20 text-center">
            <span className="text-[10px] font-black tracking-[0.8em] text-[#CFA052] uppercase block mb-6">Performance Roadmap</span>
            <h2 className="text-5xl md:text-8xl font-serif italic text-white tracking-tighter">Ops Nodes.</h2>
        </div>

        <div className="container mx-auto px-6">
          <RoadmapCarousel 
            nodes={[
              { title: "Institutional Intake", category: "Audit & Setup", icon: Search, img: "/images/services/luxury_hotel_service_excellence_horizontal.png" },
              { title: "Neural Oversight", category: "P&L Intelligence", icon: Database, img: "/images/services/hospitality_staff_dashboard_modern_operations.png" },
              { title: "Yield Performance", category: "Revenue Optimization", icon: Target, img: "/images/services/luxury_marketing_performance_stats.png" },
              { title: "Quality Preservation", category: "Technical Services", icon: ShieldCheck, img: "/images/services/luxury_hotel_architectural_shadows.png" }
            ]}
          />
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
              {!isSubmitted ? (
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
                      <form className="space-y-8" onSubmit={handleSubmit}>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Representative Name</label>
                            <input 
                              required 
                              type="text" 
                              value={formData.fullName}
                              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10" 
                              placeholder="YOUR NAME" 
                            />
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Official Email</label>
                            <input 
                              required 
                              type="email" 
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10" 
                              placeholder="EMAIL@INSTITUTION.COM" 
                            />
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Asset Details (Keys & Location)</label>
                            <input 
                              required 
                              type="text" 
                              value={formData.assetDetails}
                              onChange={(e) => setFormData({...formData, assetDetails: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10" 
                              placeholder="120 KEYS — LONDON / DUBAI" 
                            />
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Management Type</label>
                            <select 
                              value={formData.managementType}
                              onChange={(e) => setFormData({...formData, managementType: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none appearance-none uppercase tracking-widest text-white/80"
                            >
                               <option className="bg-[#050505]">Full Management Mandate</option>
                               <option className="bg-[#050505]">Operations Audit Only</option>
                               <option className="bg-[#050505]">Joint Management (Hybrid)</option>
                            </select>
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Commercial Goal (e.g. ADR Target)</label>
                            <textarea 
                              required
                              value={formData.commercialGoal}
                              onChange={(e) => setFormData({...formData, commercialGoal: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10 h-32 resize-none" 
                              placeholder="REACH $450 ADR BY Q4..." 
                            />
                         </div>

                         <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#CFA052] transition-all duration-700 mt-8 shadow-2xl shadow-white/5 disabled:opacity-50"
                         >
                            {isSubmitting ? "INITIATING DEPLOYMENT..." : "Engage Management Team"}
                         </button>
                      </form>
                    </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-20 text-center bg-stone-900 rounded-none border border-white/5">
                   <div className="w-20 h-20 bg-[#CFA052] rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="text-black w-10 h-10" />
                   </div>
                   <h3 className="text-3xl font-serif italic text-white mb-4">Mandated.</h3>
                   <p className="text-white/40 font-light max-w-xs mx-auto mb-10">Your operational mandate has been established. Technical analysis commences in 12 hours.</p>
                   <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 hover:text-[#CFA052] transition-colors">Log New Asset</button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </Section>
    </main>
  );
}
