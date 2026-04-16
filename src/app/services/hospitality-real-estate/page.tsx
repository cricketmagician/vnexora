"use client";

import { useRef, useState, forwardRef } from "react";
import { 
  motion, 
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
    relation: "",
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    stage: "",
    propertyLocation: "",
    goal: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `
RELATION TO SECTOR: ${formData.relation}
PROCESS STAGE: ${formData.stage}
---
NAME: ${formData.firstName} ${formData.lastName}
COMPANY: ${formData.companyName || "N/A"}
EMAIL: ${formData.email}
PHONE: ${formData.phone}
---
PROPERTY LOCATION: ${formData.propertyLocation}
MAIN GOAL: ${formData.goal}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        subject: `Real Estate Advisory Inquiry: ${formData.relation} (Stage: ${formData.stage})`,
        message: fullMessage,
        source: 'hospitality_real_estate_advisory'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Strategic inquiry received. Our advisory desk will reach out.");
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
    <main className="min-h-screen bg-white selection:bg-[#A67C52] selection:text-white pt-32 pb-20">
      
      {/* ── SINGLE HIGH-FIDELITY REAL ESTATE PORTAL ── */}
      <Section id="asset-inquiry" spacing="none" className="bg-white text-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start min-h-[80vh]">
            
            <div className="lg:w-1/2 space-y-16 py-8">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1.2 }}
                 className="space-y-10"
               >
                 <div className="space-y-4">
                    <h1 className="text-8xl md:text-[10rem] font-serif tracking-tight text-stone-900 leading-[0.8] relative">
                      Real <br />
                      <span className="pl-4">Estate</span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-serif text-[#8B0000] leading-tight max-w-md">
                      Ideal for investors seeking plots or buildings with hospitality potential.
                    </p>
                 </div>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="space-y-16 pt-8"
                >
                 {[
                   { 
                     n: "Stage 1", 
                     t: "Investment Objectives & Potential Analysis", 
                     d: "We begin by analyzing the investor's goals and needs, shaping a preliminary study of the possibilities and development potential based on the available investment budget. This includes outlining scenarios for either a hotel or a branded real estate development."
                   },
                   { 
                     n: "Stage 2", 
                     t: "Hospitality Property Search Brief", 
                     d: "Once the investor's needs have been thoroughly assessed, we create a detailed property search brief. This includes all key specifications such as land size, building capacity, licensing potential, estimated acquisition cost"
                   },
                   { 
                     n: "Stage 3", 
                     t: "Real Estate Research & One-to-One Introductions", 
                     d: "We conduct a personalized search within our network of partner real estate agencies to identify the most suitable properties based on the defined criteria. We then facilitate one-to-one introductions between the investor and the agencies representing those properties."
                   }
                 ].map((item) => (
                    <div key={item.n} className="space-y-4 max-w-xl">
                       <div className="space-y-1">
                          <span className="text-xl md:text-2xl font-serif font-bold text-stone-900">{item.n}</span>
                          <h3 className="text-2xl md:text-3xl font-serif text-stone-900 leading-tight">{item.t}</h3>
                       </div>
                       <p className="text-lg text-stone-600 font-light leading-relaxed">
                          {item.d}
                       </p>
                    </div>
                 ))}
               </motion.div>
            </div>

            <div className="lg:w-1/2 w-full lg:sticky lg:top-32">
              {!isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-12 lg:p-20 text-black relative rounded-none shadow-none border-l border-stone-100"
                >
                    <div className="relative z-10">
                      <form className="space-y-16" onSubmit={handleSubmit}>
                         
                         {/* ── RELATION TO SECTOR ── */}
                         <div className="space-y-8">
                            <label className="text-lg md:text-xl font-serif text-stone-900 leading-tight block">What is your relation to the hospitality real estate sector?</label>
                            <div className="grid grid-cols-1 gap-4">
                               {[
                                 "Private Investor", 
                                 "Real Estate Agent", 
                                 "Investment Company / Hospitality Fund", 
                                 "Architect / Consultant", 
                                 "Other"
                               ].map((option) => (
                                 <label key={option} className="flex items-center gap-4 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                       <input 
                                         required
                                         type="radio" 
                                         name="relation" 
                                         value={option}
                                         checked={formData.relation === option}
                                         onChange={(e) => setFormData({...formData, relation: e.target.value})}
                                         className="peer appearance-none w-5 h-5 border border-black rounded-none checked:bg-black transition-all"
                                       />
                                       <Check size={12} className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" />
                                    </div>
                                    <span className="text-base font-light text-stone-600 group-hover:text-black transition-colors">{option}</span>
                                 </label>
                               ))}
                            </div>
                         </div>

                         {/* ── PERSONAL & COMPANY DETAILS ── */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-1">
                               <label className="text-sm font-serif text-stone-900">First name *</label>
                               <input 
                                 required 
                                 type="text" 
                                 value={formData.firstName}
                                 onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                 className="w-full border-b border-black bg-transparent py-4 text-stone-900 text-lg focus:outline-none placeholder:text-stone-200 transition-all font-serif" 
                               />
                            </div>
                            <div className="space-y-1">
                               <label className="text-sm font-serif text-stone-900">Last name *</label>
                               <input 
                                 required 
                                 type="text" 
                                 value={formData.lastName}
                                 onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                 className="w-full border-b border-black bg-transparent py-4 text-stone-900 text-lg focus:outline-none placeholder:text-stone-200 transition-all font-serif" 
                               />
                            </div>
                         </div>

                         <div className="space-y-1">
                            <label className="text-sm font-serif text-stone-900">Company Name</label>
                            <input 
                              type="text" 
                              value={formData.companyName}
                              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                              className="w-full border-b border-black bg-transparent py-4 text-stone-900 text-lg focus:outline-none placeholder:text-stone-200 transition-all font-serif" 
                            />
                         </div>

                         <div className="space-y-1">
                            <label className="text-sm font-serif text-stone-900">Email *</label>
                            <input 
                              required 
                              type="email" 
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full border-b border-black bg-transparent py-4 text-stone-900 text-lg focus:outline-none placeholder:text-stone-200 transition-all font-serif" 
                            />
                         </div>

                         <div className="space-y-1">
                            <label className="text-sm font-serif text-stone-900">Phone</label>
                            <div className="flex items-center gap-4 border-b border-black">
                               <span className="text-lg">🇮🇳</span>
                               <input 
                                 required 
                                 type="tel" 
                                 value={formData.phone}
                                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                 className="w-full bg-transparent py-4 text-stone-900 text-lg focus:outline-none placeholder:text-stone-200 transition-all font-serif" 
                               />
                            </div>
                         </div>

                         {/* ── PROJECT PROGRESS ── */}
                         <div className="space-y-8">
                            <label className="text-lg md:text-xl font-serif text-stone-900 leading-tight block">Where are you currently in the process?</label>
                            <div className="grid grid-cols-1 gap-4">
                               {[
                                 "I'm looking for land or a property for a hospitality investment", 
                                 "I own a property suitable for hospitality development", 
                                 "Other"
                               ].map((option) => (
                                 <label key={option} className="flex items-center gap-4 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                       <input 
                                         required
                                         type="radio" 
                                         name="stage" 
                                         value={option}
                                         checked={formData.stage === option}
                                         onChange={(e) => setFormData({...formData, stage: e.target.value})}
                                         className="peer appearance-none w-5 h-5 border border-black rounded-none checked:bg-black transition-all"
                                       />
                                       <Check size={12} className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" />
                                    </div>
                                    <span className="text-base font-light text-stone-600 group-hover:text-black transition-colors font-serif italic">{option}</span>
                                 </label>
                               ))}
                            </div>
                         </div>

                         <div className="space-y-1">
                            <label className="text-sm font-serif text-stone-900">Property Location</label>
                            <input 
                              type="text" 
                              value={formData.propertyLocation}
                              onChange={(e) => setFormData({...formData, propertyLocation: e.target.value})}
                              className="w-full border-b border-black bg-transparent py-4 text-stone-900 text-lg focus:outline-none placeholder:text-stone-200 transition-all font-serif" 
                            />
                         </div>

                         <div className="space-y-4">
                            <label className="text-sm font-serif text-stone-900">What is your main goal for collaborating with VNEXORA?</label>
                            <textarea 
                              required
                              value={formData.goal}
                              onChange={(e) => setFormData({...formData, goal: e.target.value})}
                              className="w-full border-b border-black bg-transparent py-4 text-stone-900 text-lg focus:outline-none placeholder:text-stone-200 h-24 resize-none transition-all font-serif" 
                            />
                         </div>

                         <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-4">
                               <input type="checkbox" className="w-4 h-4 mt-1 border border-black rounded-none" required />
                               <p className="text-xs text-stone-400 leading-relaxed italic">
                                 I have been informed about the <span className="underline cursor-pointer">Privacy Policy</span>
                               </p>
                            </div>
                            <div className="flex items-start gap-4">
                               <input type="checkbox" className="w-4 h-4 mt-1 border border-black rounded-none" required />
                               <p className="text-xs text-stone-400 leading-relaxed italic">
                                 I accept the <span className="underline cursor-pointer">Terms of use</span>
                               </p>
                            </div>
                         </div>

                         <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-6 bg-[#8B0000] text-white text-xs font-black uppercase tracking-[0.6em] hover:bg-black transition-all duration-700 mt-8 rounded-none"
                         >
                            {isSubmitting ? "TRANSMITTING..." : "Submit Inquiry"}
                         </button>
                      </form>
                    </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-20 text-center bg-white rounded-none border border-stone-100 shadow-none">
                   <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="text-white w-10 h-10" />
                   </div>
                   <h3 className="text-3xl font-serif italic text-black mb-4">Briefed.</h3>
                   <p className="text-stone-400 font-light max-w-xs mx-auto mb-10 italic">Your development mandate has been established. Our technical desk will initiate analysis within 24 hours.</p>
                   <button onClick={() => setIsSubmitted(false)} className="text-xs font-black uppercase tracking-[0.4em] text-black hover:underline transition-colors">Start New Briefing</button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </Section>

      {/* ── PREMIUM CREDENTIALS SECTION ── */}
      <Section className="bg-[#FAF9F6] border-t border-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="space-y-12"
               >
                 <div className="space-y-6">
                    <h4 className="text-xs font-black tracking-[0.6em] uppercase text-stone-900 font-serif italic">Who We Serve</h4>
                    <p className="text-xl text-stone-400 font-light italic leading-relaxed max-w-lg">
                      VNEXORA provides institutional-grade intelligence to:
                    </p>
                 </div>
                 
                 <div className="flex flex-wrap gap-x-12 gap-y-6">
                    {["PRIVATE INVESTORS", "INVESTMENT FIRMS", "HOSPITALITY FUNDS", "REAL ESTATE PROFESSIONALS"].map(spec => (
                      <div key={spec} className="flex items-center gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52]" />
                         <span className="text-xs font-black uppercase tracking-widest text-stone-800">{spec}</span>
                      </div>
                    ))}
                 </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="space-y-12"
               >
                 <h2 className="text-3xl md:text-5xl font-serif italic text-[#A67C52] leading-tight">
                    POWERING PROFITABLE <br />
                    <span className="not-italic font-black text-stone-900 uppercase">HOSPITALITY INVESTMENTS.</span>
                 </h2>
                 
                 <div className="pt-12 border-t border-stone-200 space-y-8">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#A67C52] shadow-sm">
                          <Check size={20} />
                       </div>
                       <h5 className="text-sm font-black uppercase tracking-[0.4em] text-stone-900 underline underline-offset-8 decoration-[#A67C52]/20">GET IN TOUCH</h5>
                    </div>

                    <div className="pl-18 space-y-6">
                       <div className="group flex items-center gap-6">
                          <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-500">
                             <Check size={14} />
                          </div>
                          <p className="text-lg text-stone-500 font-light">
                             WhatsApp: <span className="text-stone-900 font-bold tracking-tight"> +91-7980829403</span>
                          </p>
                       </div>
                       <div className="group flex items-center gap-6">
                          <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-500">
                             <Check size={14} />
                          </div>
                          <p className="text-lg text-stone-400 font-light italic">
                             Fill out the enquiry form, and our experts will contact you promptly.
                          </p>
                       </div>
                    </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
