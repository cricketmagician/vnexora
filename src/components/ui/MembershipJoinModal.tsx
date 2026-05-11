"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, Globe, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

interface MembershipJoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

export const MembershipJoinModal = ({ isOpen, onClose, category = "General Membership" }: MembershipJoinModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "INDIA",
    city: "",
    phone: "",
    needs: "",
    company: "",
    message: ""
  });

  // ROBUST SCROLL LOCK
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const countries = ["INDIA", "UNITED ARAB EMIRATES", "UNITED KINGDOM", "UNITED STATES", "SINGAPORE"];
  const categories = ["Operator", "Supplier", "Affiliate", "Investor"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: `Membership Modal Inquiry: ${category}`,
        message: `
Category: ${category}
User Category Choice: ${formData.needs}
Country: ${formData.country}
City: ${formData.city}
Company: ${formData.company}
Message: ${formData.message}
        `,
        source: 'membership_join_modal'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Application received.");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* MODAL BODY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0F0F0F] rounded-[2rem] sm:rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col h-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Header - Fixed */}
            <div className="p-6 sm:p-10 border-b border-white/5 flex justify-between items-center bg-[#0F0F0F] shrink-0">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#CFA052]">Application Portal</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif italic text-white leading-none">Join the <span className="text-[#CFA052]">Network.</span></h2>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content - Scrollable */}
            <div className="p-6 sm:p-10 overflow-y-auto flex-1 min-h-0 overscroll-contain scrollbar-thin scrollbar-thumb-white/10 text-left">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 pb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">First Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all text-sm"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Last Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all text-sm"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Your Official Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="john@acme.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Country *</label>
                      <select
                        required
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all appearance-none cursor-pointer text-sm"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      >
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">City *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Dubai"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all text-sm"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Phone *</label>
                      <input
                        required
                        type="text"
                        placeholder="1234567890"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all text-sm"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Choose Category *</label>
                      <select
                        required
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all appearance-none cursor-pointer text-sm"
                        value={formData.needs}
                        onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                      >
                        <option value="" disabled>Select - - - - -</option>
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Your Company *</label>
                      <input
                        required
                        type="text"
                        placeholder="Acme Ltd."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all text-sm"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">What Can We Do For You? (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Any Specifics?"
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all resize-none text-sm placeholder:text-white/10"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-[#CFA052] text-black py-5 sm:py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 group shadow-xl shadow-[#CFA052]/10"
                  >
                    {isSubmitting ? "Processing..." : "Submit Application"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              ) : (
                <div className="py-12 sm:py-20 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-[#CFA052]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#CFA052]/30 shadow-2xl shadow-[#CFA052]/10"
                  >
                    <CheckCircle2 size={40} className="text-[#CFA052]" />
                  </motion.div>
                  <h3 className="text-3xl font-serif italic text-white mb-4">Application Received.</h3>
                  <p className="text-white/40 font-light mb-12 max-w-sm mx-auto leading-relaxed">
                    Your interest has been recorded. Our team will review your credentials and contact you within 24 hours.
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-12 py-5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
                  >
                    Return to Portal
                  </button>
                </div>
              )}
            </div>

            {/* Footer Trust - Fixed */}
            <div className="p-6 sm:p-8 bg-black/40 border-t border-white/5 flex items-center justify-center gap-6 sm:gap-10 shrink-0 z-20">
              <div className="flex items-center gap-2 opacity-30">
                <ShieldCheck size={14} className="text-[#CFA052]" />
                <span className="text-[9px] uppercase font-bold tracking-widest text-white">Discreet</span>
              </div>
              <div className="flex items-center gap-2 opacity-30">
                <Globe size={14} className="text-[#CFA052]" />
                <span className="text-[9px] uppercase font-bold tracking-widest text-white">Global access</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
