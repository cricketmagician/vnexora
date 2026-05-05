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
  const { isOpen, selectedService, selectedImage, closeServiceInquiry } = useServiceInquiry();
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
        subject: `Strategic Partnership: ${formData.company}`,
        message: `
          Strategic Partnership Inquiry
          ---------------------------
          Name: ${formData.fullName}
          Company: ${formData.company}
          Designation: ${formData.designation}
          WhatsApp: ${formData.whatsapp}
          Email: ${formData.email}
          Location: ${formData.city}, ${formData.country}
          Interest: ${selectedService || 'General Partnership'}
          Message: ${formData.message}
        `,
        source: 'strategic_partnership_modal'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Partnership inquiry transmitted.");
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeServiceInquiry}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-[95vw] lg:max-w-7xl bg-white shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden md:h-[800px] max-h-screen"
          >
            <button 
              onClick={closeServiceInquiry}
              className="absolute top-8 right-8 z-[120] text-black/20 hover:text-mustard transition-colors p-2"
            >
              <X size={32} strokeWidth={1} />
            </button>

            {/* Left: Cinematic Visual */}
            <div className="md:w-[40%] relative overflow-hidden bg-[#0A0A0A] hidden md:block border-r border-black/5">
               <img 
                 src={selectedImage || "/images/sections/partnership/partner_cta.png"} 
                 alt="Vnexora Partner" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
               <div className="absolute inset-0 flex flex-col justify-end p-16 z-20">
                  <div className="w-16 h-px bg-mustard mb-8" />
                  <span className="text-[11px] font-black uppercase tracking-[0.6em] text-mustard block mb-4 italic">Step 01 / 01</span>
                  <h3 className="text-white text-3xl font-serif tracking-tight leading-tight uppercase">PARTNER WITH US</h3>
                  <p className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase mt-6">VNEXORA STRATEGIC DESK</p>
               </div>
            </div>

            {/* Right: Premium Form */}
            <div className="flex-1 bg-white p-8 md:p-20 overflow-y-auto overscroll-contain flex flex-col justify-center">
               {isSubmitted ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="h-full flex flex-col items-center justify-center text-center space-y-10"
                 >
                    <div className="w-24 h-24 bg-mustard/10 rounded-full flex items-center justify-center border border-mustard/20">
                       <CheckCircle2 size={40} className="text-mustard" strokeWidth={1} />
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-4xl font-serif text-black tracking-tight">Strategy Logged.</h3>
                       <p className="text-black/40 text-[13px] font-medium max-w-sm mx-auto leading-relaxed">
                          Your strategic interest has been transmitted. Our lead intelligence desk will initiate contact shortly.
                       </p>
                    </div>
                    <button 
                      onClick={closeServiceInquiry}
                      className="bg-black text-white px-14 py-5 font-bold text-[10px] tracking-[0.5em] uppercase hover:bg-mustard hover:text-black transition-all shadow-xl"
                    >
                      Return to Interface
                    </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-12 max-w-3xl mx-auto w-full">
                   <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl font-serif text-black tracking-tight uppercase">Partner with VNEXORA.</h2>
                      <p className="text-black/30 text-[11px] font-black uppercase tracking-[0.4em]">Build Growth. Unlock Value. Scale with Vnexora.</p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      <InputField label="Full Name" value={formData.fullName} onChange={v => setFormData({...formData, fullName: v})} placeholder="JOHN DOE" required />
                      <InputField label="Company / Brand Name" value={formData.company} onChange={v => setFormData({...formData, company: v})} placeholder="THE GRAND ESTATE" required />
                      
                      <InputField label="Designation" value={formData.designation} onChange={v => setFormData({...formData, designation: v})} placeholder="CEO / OWNER" required />
                      <InputField label="WhatsApp Number" type="tel" value={formData.whatsapp} onChange={v => setFormData({...formData, whatsapp: v})} placeholder="+91 ..." required />
                      
                      <InputField label="Email Address" type="email" value={formData.email} onChange={v => setFormData({...formData, email: v})} placeholder="HELLO@CORP.COM" required />
                      
                      <div className="grid grid-cols-2 gap-6">
                         <InputField label="City" value={formData.city} onChange={v => setFormData({...formData, city: v})} placeholder="VARANASI" required />
                         <div className="group relative">
                            <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-2 block ml-1">Country</label>
                            <div className="py-3 px-1 border-b border-black/10 text-xs font-black tracking-widest uppercase text-black/80">
                               INDIA
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="pt-10">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto ml-auto flex items-center justify-center gap-6 bg-black text-white px-16 py-6 font-bold text-[10px] tracking-[0.5em] uppercase hover:bg-mustard hover:text-black transition-all group shadow-2xl"
                      >
                        {isSubmitting ? "TRANSMITTING..." : "Next Step"}
                        {!isSubmitting && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
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
