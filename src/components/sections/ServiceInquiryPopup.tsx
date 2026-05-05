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
    hotelName: "",
    whatsapp: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fullName: "", hotelName: "", whatsapp: "", email: "", message: "" });
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
        subject: `Service Inquiry: ${selectedService || 'General Inquiry'}`,
        message: `
          Service Inquiry from Home Page Card
          -----------------------------------
          Name: ${formData.fullName}
          Hotel: ${formData.hotelName}
          WhatsApp: ${formData.whatsapp}
          Email: ${formData.email}
          Service: ${selectedService || 'General'}
          Message: ${formData.message}
        `,
        source: 'home_service_card_popup'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Inquiry submitted successfully.");
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeServiceInquiry}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
          >
            <button 
              onClick={closeServiceInquiry}
              className="absolute top-6 right-6 z-[120] text-black/20 hover:text-mustard transition-colors"
            >
              <X size={24} />
            </button>

            <div className="md:w-1/3 relative overflow-hidden bg-[#0A0A0A] hidden md:block">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
               <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="w-10 h-px bg-mustard mb-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-mustard block mb-2">Enquiry</span>
                  <p className="text-white text-[12px] font-bold tracking-widest uppercase">{selectedService || 'Service Solution'}</p>
               </div>
            </div>

            <div className="flex-1 bg-white p-8 md:p-12 overflow-y-auto overscroll-contain">
               {isSubmitted ? (
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="h-full flex flex-col items-center justify-center text-center space-y-8 py-10"
                 >
                    <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center shadow-2xl shadow-mustard/20">
                       <CheckCircle2 size={24} className="text-black" />
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-3xl font-serif text-black">Inquiry Logged.</h3>
                       <p className="text-black/40 text-sm">
                          Our strategic desk will initiate contact within 24 hours.
                       </p>
                    </div>
                    <button 
                      onClick={closeServiceInquiry}
                      className="bg-black text-white px-10 py-4 font-bold text-[9px] tracking-[0.4em] uppercase hover:bg-mustard hover:text-black transition-all"
                    >
                      Close
                    </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="space-y-2">
                      <h2 className="text-2xl font-serif text-black">Strategic Inquiry.</h2>
                      <p className="text-black/30 text-[10px] font-bold uppercase tracking-widest">Connect with our hospitality advisory desk.</p>
                   </div>

                   <div className="space-y-6">
                      <InputField label="Full Name" value={formData.fullName} onChange={v => setFormData({...formData, fullName: v})} placeholder="NAME" required />
                      <InputField label="Hotel / Brand Name" value={formData.hotelName} onChange={v => setFormData({...formData, hotelName: v})} placeholder="COMPANY" required />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <InputField label="WhatsApp" type="tel" value={formData.whatsapp} onChange={v => setFormData({...formData, whatsapp: v})} placeholder="+91 ..." required />
                         <InputField label="Email" type="email" value={formData.email} onChange={v => setFormData({...formData, email: v})} placeholder="EMAIL@CORP.COM" required />
                      </div>
                      <div className="group">
                        <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-2 block ml-1">Message (Optional)</label>
                        <textarea 
                          className="w-full bg-white border-b border-black/10 py-3 px-1 outline-none focus:border-mustard transition-colors text-xs font-bold tracking-widest uppercase placeholder:text-black/10 min-h-[60px] resize-none"
                          placeholder="HOW CAN WE HELP?"
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                        />
                      </div>
                   </div>

                   <div className="pt-6">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-4 bg-black text-white px-10 py-4 font-bold text-[9px] tracking-[0.4em] uppercase hover:bg-mustard hover:text-black transition-all group"
                      >
                        {isSubmitting ? "TRANSMITTING..." : "Submit Inquiry"}
                        {!isSubmitting && <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />}
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
