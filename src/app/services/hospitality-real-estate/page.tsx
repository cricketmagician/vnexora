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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    area: "",
    country: "",
    investmentAmount: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `
Name: ${formData.firstName} ${formData.lastName}
Area: ${formData.area}
Country: ${formData.country}
Phone: ${formData.phone}
Investment Amount (Cr): ${formData.investmentAmount}
Message: ${formData.message}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        subject: `New Asset Planning Inquiry from ${formData.country}`,
        message: fullMessage,
        source: 'hospitality_real_estate_page'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Meeting request received. our development desk will reach out.");
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
                 <span className="text-[10px] font-black text-[#A67C52] tracking-[0.6em] uppercase block italic underline underline-offset-8 decoration-[#A67C52]/30">Hospitality Real Estate Advisory</span>
                 <h1 className="text-4xl md:text-7xl font-serif text-stone-900 leading-[1.1] tracking-tighter italic">
                   Where Vision <br />
                   <span className="not-italic font-black uppercase tracking-tight text-stone-200">Meets Profit.</span>
                 </h1>
                 <div className="space-y-2">
                    <p className="text-2xl font-serif italic text-stone-800">Where Vision Meets Profitable Investment</p>
                    <p className="text-xl font-bold tracking-tight text-[#A67C52] uppercase italic">Strategic. Exclusive. Profitable.</p>
                 </div>
                 <p className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed italic border-l-2 border-stone-100 pl-8">
                   Ideal for investors seeking plots or buildings with hospitality potential. We bridge the gap between architectural vision and investment returns.
                 </p>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="space-y-12 pt-12"
                >
                 <span className="text-[9px] font-black tracking-[0.4em] uppercase text-stone-400">OUR STRATEGIC APPROACH:</span>
                 
                 {[
                   { 
                     n: "01", 
                     t: "INVESTMENT OBJECTIVES & POTENTIAL ANALYSIS", 
                     s: "Evaluate. Analyze. Optimize.",
                     d: "We assess your goals and budget to unlock the most viable hospitality development opportunities within our curated pipeline."
                   },
                   { 
                     n: "02", 
                     t: "HOSPITALITY PROPERTY SEARCH BRIEF", 
                     s: "Precision in every parameter.",
                     d: "A precise, tailored brief defining land size, development scope, licensing feasibility, and estimated acquisition costs."
                   },
                   { 
                     n: "03", 
                     t: "REAL ESTATE RESEARCH & EXCLUSIVE INTRODUCTIONS", 
                     s: "Access to the unreachable.",
                     d: "Access to premium opportunities through our trusted network, with seamless one-to-one investor introductions to high-value assets."
                   }
                 ].map((item) => (
                    <div key={item.n} className="group space-y-4">
                       <div className="flex items-center gap-6">
                          <span className="text-3xl md:text-4xl font-serif italic text-[#A67C52] opacity-40 group-hover:opacity-100 transition-opacity">{item.n}.</span>
                          <h3 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-stone-900">{item.t}</h3>
                       </div>
                       <div className="pl-16 space-y-3">
                          <p className="text-lg md:text-xl font-bold italic text-stone-700">{item.s}</p>
                          <p className="text-base md:text-lg text-stone-400 font-light leading-relaxed max-w-xl">{item.d}</p>
                       </div>
                    </div>
                 ))}
               </motion.div>

            </div>

            <div className="lg:w-1/2 w-full lg:sticky lg:top-32">
              {!isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#050505] p-12 md:p-14 text-white relative overflow-hidden rounded-none shadow-[0_60px_120px_rgba(0,0,0,0.15)]"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#A67C52]/10 blur-[100px] rounded-full" />
                    
                    <div className="relative z-10">
                      <div className="mb-10 text-center lg:text-left">
                        <h3 className="text-4xl md:text-5xl font-serif italic mb-2 tracking-tight">Book an Online Meeting</h3>
                      </div>

                      <form className="space-y-8" onSubmit={handleSubmit}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                               <label className="text-[11px] font-bold uppercase tracking-widest text-white/90">First Name *</label>
                               <input 
                                 required 
                                 type="text" 
                                 value={formData.firstName}
                                 onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                 className="w-full bg-white px-4 py-3 text-stone-900 text-sm focus:outline-none placeholder:text-stone-300" 
                                 placeholder="Enter your first name.." 
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[11px] font-bold uppercase tracking-widest text-white/90">Last Name *</label>
                               <input 
                                 required 
                                 type="text" 
                                 value={formData.lastName}
                                 onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                 className="w-full bg-white px-4 py-3 text-stone-900 text-sm focus:outline-none placeholder:text-stone-300" 
                                 placeholder="Enter your last name.." 
                               />
                            </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                               <label className="text-[11px] font-bold uppercase tracking-widest text-white/90">Area in sqft *</label>
                               <input 
                                 required 
                                 type="text" 
                                 value={formData.area}
                                 onChange={(e) => setFormData({...formData, area: e.target.value})}
                                 className="w-full bg-white px-4 py-3 text-stone-900 text-sm focus:outline-none placeholder:text-stone-300" 
                                 placeholder="Enter the investment area in sqft.." 
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[11px] font-bold uppercase tracking-widest text-white/90">Country *</label>
                               <input 
                                 required 
                                 type="text" 
                                 value={formData.country}
                                 onChange={(e) => setFormData({...formData, country: e.target.value})}
                                 className="w-full bg-white px-4 py-3 text-stone-900 text-sm focus:outline-none placeholder:text-stone-300" 
                                 placeholder="Enter your country.." 
                               />
                            </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                               <label className="text-[11px] font-bold uppercase tracking-widest text-white/90">Email *</label>
                               <input 
                                 required 
                                 type="email" 
                                 value={formData.email}
                                 onChange={(e) => setFormData({...formData, email: e.target.value})}
                                 className="w-full bg-white px-4 py-3 text-stone-900 text-sm focus:outline-none placeholder:text-stone-300" 
                                 placeholder="Enter your email address.." 
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[11px] font-bold uppercase tracking-widest text-white/90">Phone *</label>
                               <input 
                                 required 
                                 type="tel" 
                                 value={formData.phone}
                                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                 className="w-full bg-white px-4 py-3 text-stone-900 text-sm focus:outline-none placeholder:text-stone-300" 
                                 placeholder="Enter your telephone number.." 
                               />
                            </div>
                         </div>

                         <div className="space-y-2">
                            <label className="text-[11px] font-bold uppercase tracking-widest text-white/90">Investment Amount in Cr *</label>
                            <input 
                              required 
                              type="text" 
                              value={formData.investmentAmount}
                              onChange={(e) => setFormData({...formData, investmentAmount: e.target.value})}
                              className="w-full bg-white px-4 py-3 text-stone-900 text-sm focus:outline-none placeholder:text-stone-300" 
                              placeholder="e.g. 50 Cr" 
                            />
                         </div>

                         <div className="space-y-2">
                            <label className="text-[11px] font-bold uppercase tracking-widest text-white/90">Message</label>
                            <textarea 
                              required
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                              className="w-full bg-white px-4 py-3 text-stone-900 text-sm focus:outline-none placeholder:text-stone-300 h-24 resize-none" 
                              placeholder="Type your message here..." 
                            />
                         </div>

                         <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-4">
                               <input type="checkbox" className="mt-1" required />
                               <p className="text-[10px] text-white/40 leading-relaxed italic">
                                 I have been informed about the <span className="underline cursor-pointer">Privacy Policy</span>
                               </p>
                            </div>
                            <div className="flex items-start gap-4">
                               <input type="checkbox" className="mt-1" required />
                               <p className="text-[10px] text-white/40 leading-relaxed italic">
                                 I accept the <span className="underline cursor-pointer">Terms of use</span>
                               </p>
                            </div>
                         </div>

                         <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-[#8B0000] text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-stone-800 transition-all duration-700 mt-8 rounded-none relative group"
                         >
                            <span className="relative z-10">{isSubmitting ? "TRANSMITTING..." : "Submit"}</span>
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
