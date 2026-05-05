"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";
import { useServiceInquiry } from "@/context/ServiceInquiryContext";

const InputField = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  type = "text",
  required = false
}: { 
  label: string; 
  value: string; 
  onChange: (v: string) => void; 
  placeholder?: string;
  type?: string;
  required?: boolean;
}) => (
  <div className="group relative">
    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-2 block ml-1 transition-colors group-focus-within:text-mustard">
      {label} {required && <span className="text-mustard">*</span>}
    </label>
    <input 
      required={required}
      type={type}
      className="w-full bg-white border-b border-black/10 py-3 px-1 outline-none focus:border-mustard transition-colors text-xs font-bold tracking-widest uppercase placeholder:text-black/10"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

export const ServiceInquiryPopup = () => {
  const { isOpen, selectedService, closeServiceInquiry } = useServiceInquiry();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    designation: "",
    whatsapp: "",
    email: "",
    city: "",
    country: "INDIA",
    message: ""
  });

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ 
          fullName: "", 
          company: "", 
          designation: "", 
          whatsapp: "", 
          email: "", 
          city: "", 
          country: "INDIA", 
          message: "" 
        });
      }, 500);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.whatsapp,
        subject: `Strategic Inquiry: ${formData.company}`,
        message: `
          Consultation Brief Inquiry
          ---------------------------
          Name: ${formData.fullName}
          Company: ${formData.company}
          Designation: ${formData.designation}
          WhatsApp: ${formData.whatsapp}
          Email: ${formData.email}
          Location: ${formData.city}, ${formData.country}
          Interest: ${selectedService || 'General Inquiry'}
          Message: ${formData.message}
        `,
        source: 'consultation_brief_modal'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Strategic inquiry transmitted.");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeServiceInquiry}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full md:w-[95vw] md:h-[90vh] bg-white shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden"
          >
            <button 
              onClick={closeServiceInquiry}
              className="absolute top-10 right-10 z-[120] text-black/20 hover:text-mustard transition-all p-3 hover:rotate-90"
            >
              <X size={36} strokeWidth={1} />
            </button>

            {/* Left: Cinematic Visual - Expansive Sidebar */}
            <div className="md:w-[45%] relative overflow-hidden bg-[#0A0A0A] hidden md:block">
               <img 
                 src="/images/sections/partnership/institutional_advisor.png" 
                 alt="Vnexora Strategic" 
                 className="absolute inset-0 w-full h-full object-cover object-top brightness-[0.8] scale-105"
               />
               
               {/* Dark Semi-transparent Overlay - Exactly as requested */}
               <div className="absolute inset-0 bg-black/40 z-10" />

               {/* Integrated Sidebar Info */}
               <div className="absolute inset-y-0 right-0 w-[55%] bg-[#0A0A0A]/95 z-20 p-16 flex flex-col justify-between border-l border-white/5 shadow-[-50px_0_100px_rgba(0,0,0,0.5)]">
                  <div className="space-y-12 mt-12">
                     <div className="w-12 h-px bg-mustard mb-8" />
                     <h2 className="text-6xl font-serif text-white leading-[1.05] tracking-tighter">
                        We're <br /> <span className="text-mustard italic font-light">Helping.</span>
                     </h2>
                     <p className="text-white/40 text-[11px] leading-relaxed tracking-[0.3em] font-black uppercase max-w-[200px]">
                        Architecting Institutional <br /> Excellence since 2021.
                     </p>
                     
                     <div className="space-y-10 pt-10">
                        {[1, 2, 3, 4].map((i) => (
                           <div key={i} className="flex items-center gap-8 group cursor-default">
                              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-mustard transition-colors duration-500">
                                 <div className="w-2 h-2 bg-mustard rounded-full shadow-[0_0_15px_rgba(227,180,72,0.8)]" />
                              </div>
                              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent group-hover:from-mustard/30 transition-all duration-700" />
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-8">
                     <div className="space-y-3">
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.6em] italic">Step 01 / 01</p>
                        <h3 className="text-white text-2xl font-serif tracking-tight uppercase leading-none">Consultation Brief</h3>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: Premium High-Fidelity Form Area */}
            <div className="flex-1 bg-white p-12 md:p-32 overflow-y-auto overscroll-contain flex flex-col justify-center">
               {isSubmitted ? (
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="h-full flex flex-col items-center justify-center text-center space-y-12"
                 >
                    <div className="w-32 h-32 bg-mustard/5 rounded-full flex items-center justify-center border border-mustard/10 shadow-[0_30px_60px_rgba(227,180,72,0.1)]">
                       <CheckCircle2 size={56} className="text-mustard" strokeWidth={1} />
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-5xl font-serif text-black tracking-tighter uppercase">Logged.</h3>
                       <p className="text-black/40 text-[16px] font-medium max-w-sm mx-auto leading-relaxed italic">
                          Your strategic brief has been successfully logged with our executive advisory desk.
                       </p>
                    </div>
                    <button 
                      onClick={closeServiceInquiry}
                      className="bg-black text-white px-20 py-7 font-black text-[11px] tracking-[0.6em] uppercase hover:bg-mustard hover:text-black transition-all shadow-[0_40px_80px_rgba(0,0,0,0.2)]"
                    >
                      Return to Interface
                    </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-24 max-w-4xl mx-auto w-full">
                   <div className="space-y-6">
                      <h2 className="text-5xl md:text-6xl font-serif text-black tracking-tighter uppercase leading-tight">Partner with <span className="italic font-light text-mustard">VNEXORA.</span></h2>
                      <p className="text-black/30 text-[12px] font-black uppercase tracking-[0.4em]">Build Growth. Unlock Value. Scale with Vnexora.</p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
                      <InputField label="Full Name" value={formData.fullName} onChange={v => setFormData({...formData, fullName: v})} placeholder="JOHN DOE" required />
                      <InputField label="Hotel / Company" value={formData.company} onChange={v => setFormData({...formData, company: v})} placeholder="THE GRAND ESTATE" required />
                      
                      <InputField label="Designation" value={formData.designation} onChange={v => setFormData({...formData, designation: v})} placeholder="CEO / OWNER" required />
                      <InputField label="WhatsApp Number" type="tel" value={formData.whatsapp} onChange={v => setFormData({...formData, whatsapp: v})} placeholder="+91 ..." required />
                      
                      <InputField label="Email Address" type="email" value={formData.email} onChange={v => setFormData({...formData, email: v})} placeholder="HELLO@CORP.COM" required />
                      <InputField label="City" value={formData.city} onChange={v => setFormData({...formData, city: v})} placeholder="E.G. VARANASI" required />
                      
                      <div className="group relative">
                        <label className="text-[12px] font-black tracking-[0.4em] uppercase text-black/30 mb-4 block ml-1 transition-colors group-focus-within:text-mustard">Country</label>
                        <div className="py-5 px-1 border-b border-black/10 text-[15px] font-black tracking-[0.3em] uppercase text-black/80">
                           INDIA
                        </div>
                      </div>
                   </div>

                   <div className="pt-10 flex justify-end">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center gap-10 bg-black text-white px-24 py-8 font-black text-[12px] tracking-[0.7em] uppercase hover:bg-mustard hover:text-black transition-all group shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
                      >
                        {isSubmitting ? "TRANSMITTING..." : "Next Step"}
                        {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform duration-700" />}
                      </button>
                   </div>
                 </form>
               )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
