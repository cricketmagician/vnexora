"use client";
// Force rebuild for production synchronization - v2.1


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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeServiceInquiry}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-white shadow-[0_50px_100px_rgba(0,0,0,0.4)] flex flex-col md:flex-row overflow-hidden rounded-[2.5rem]"
          >
            {/* Close Button */}
            <button 
              onClick={closeServiceInquiry}
              className="absolute top-6 right-6 z-[120] text-black/20 hover:text-mustard transition-all p-2 hover:rotate-90"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
 
            {/* Sidebar Branding - High Fidelity Compact */}
            <div className="md:w-[35%] relative overflow-hidden bg-[#0A0A0A] hidden md:block">
               <img 
                 src="/images/sections/partnership/institutional_boardroom.png" 
                 alt="Vnexora Strategic" 
                 className="absolute inset-0 w-full h-full object-cover brightness-[0.7] scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
               
               <div className="absolute bottom-10 left-10 right-10 z-20">
                  <div className="w-10 h-px bg-mustard mb-6" />
                  <p className="text-white/40 text-[9px] leading-relaxed tracking-[0.4em] font-black uppercase mb-2">Step 01 / 01</p>
                  <h3 className="text-white text-xl font-serif tracking-tight uppercase leading-none mb-4">Strategic Brief</h3>
                  <p className="text-white/40 text-[10px] leading-relaxed font-light italic">
                    Architecting Institutional <br /> Excellence since 2021.
                  </p>
               </div>
            </div>

            {/* Form Area */}
            <div className="flex-1 bg-white p-8 md:p-12 lg:p-14 overflow-y-auto overscroll-contain" data-lenis-prevent>
               {isSubmitted ? (
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="h-full flex flex-col items-center justify-center text-center space-y-8 py-10"
                 >
                    <div className="w-20 h-20 bg-mustard/5 rounded-full flex items-center justify-center border border-mustard/10 shadow-[0_20px_40px_rgba(227,180,72,0.1)]">
                       <CheckCircle2 size={32} className="text-mustard" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-3xl font-serif text-black tracking-tight uppercase">Brief Logged.</h3>
                       <p className="text-black/40 text-[14px] font-medium max-w-xs mx-auto leading-relaxed italic">
                          Your strategic inquiry has been successfully transmitted to our executive advisory desk.
                       </p>
                    </div>
                    <button 
                      onClick={closeServiceInquiry}
                      className="bg-black text-white px-12 py-5 font-black text-[10px] tracking-[0.5em] uppercase hover:bg-mustard hover:text-black transition-all shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                    >
                      Return to Interface
                    </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-2">
                       <h2 className="text-3xl font-serif text-black tracking-tight uppercase">Partner with <span className="italic font-light text-mustard">VNEXORA.</span></h2>
                       <p className="text-black/30 text-[9px] font-black uppercase tracking-[0.4em]">
                         {selectedService || "Strategic Growth Brief"}
                       </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                       <InputField label="Full Name" value={formData.fullName} onChange={v => setFormData({...formData, fullName: v})} placeholder="JOHN DOE" required />
                       <InputField label="Hotel / Company" value={formData.company} onChange={v => setFormData({...formData, company: v})} placeholder="THE GRAND ESTATE" required />
                       
                       <InputField label="Designation" value={formData.designation} onChange={v => setFormData({...formData, designation: v})} placeholder="CEO / OWNER" required />
                       <InputField label="WhatsApp Number" type="tel" value={formData.whatsapp} onChange={v => setFormData({...formData, whatsapp: v})} placeholder="+91 ..." required />
                       
                       <InputField label="Email Address" type="email" value={formData.email} onChange={v => setFormData({...formData, email: v})} placeholder="HELLO@CORP.COM" required />
                       <InputField label="City" value={formData.city} onChange={v => setFormData({...formData, city: v})} placeholder="E.G. VARANASI" required />
                    </div>

                    <div className="pt-6 flex justify-end">
                       <button 
                         type="submit"
                         disabled={isSubmitting}
                         className="flex items-center gap-6 bg-black text-white px-12 py-5 font-black text-[10px] tracking-[0.5em] uppercase hover:bg-mustard hover:text-black transition-all group shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                       >
                         {isSubmitting ? "TRANSMITTING..." : "Send Strategic Brief"}
                         {!isSubmitting && <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-700" />}
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
