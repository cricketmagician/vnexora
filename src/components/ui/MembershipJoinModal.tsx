"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, CheckCircle2, ShieldCheck, Globe, User, Mail, Phone, Building, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
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
    phone: "",
    needs: "",
    company: "",
    message: ""
  });

  const countries = [
    "INDIA", "UNITED ARAB EMIRATES", "UNITED KINGDOM", "UNITED STATES", "SINGAPORE", "MALAYSIA", "SAUDI ARABIA", "QATAR"
  ];

  const needsOptions = [
    "Operator Membership",
    "Supplier Partnership",
    "Affiliate Collaboration",
    "Advisory Services",
    "Investment Opportunities"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: `Membership Inquiry: ${category}`,
        message: `
Category: ${category}
Country: ${formData.country}
Needs: ${formData.needs}
Company: ${formData.company}
Additional Details: ${formData.message || "None provided"}
        `,
        source: 'membership_join_modal'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Your application has been received. Our team will contact you shortly.");
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0F0F0F] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-start bg-gradient-to-br from-white/[0.02] to-transparent">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[#CFA052]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#CFA052]">Membership</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-serif italic text-white">Join the <span className="text-[#CFA052]">Network.</span></h2>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 md:p-12 overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-white/10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">First Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    {/* Last Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Last Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Your Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="john@acme.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Country */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Select Country *</label>
                      <select
                        required
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all appearance-none cursor-pointer"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      >
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Your Phone *</label>
                      <input
                        required
                        type="text"
                        placeholder="1234567890"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Needs */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Tell Us What You Need *</label>
                      <select
                        required
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all appearance-none cursor-pointer"
                        value={formData.needs}
                        onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                      >
                        <option value="" disabled>Select - - - - -</option>
                        {needsOptions.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Your Company *</label>
                      <input
                        required
                        type="text"
                        placeholder="Acme Ltd."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">What Can We Do For You? (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Any Specifics?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#CFA052] outline-none transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-[#CFA052] text-black py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Submit Application"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-[#CFA052]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#CFA052]/30"
                  >
                    <CheckCircle2 size={40} className="text-[#CFA052]" />
                  </motion.div>
                  <h3 className="text-3xl font-serif italic text-white mb-4">Application Received.</h3>
                  <p className="text-white/50 font-light mb-12 max-w-sm mx-auto">
                    Your interest in joining Vnexora has been recorded. Our team will review your application and contact you within 24-48 hours.
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-12 py-5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
                  >
                    Close Portal
                  </button>
                </div>
              )}
            </div>

            {/* Footer Trust */}
            <div className="p-8 bg-black/40 border-t border-white/5 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 opacity-30">
                <ShieldCheck size={14} className="text-[#CFA052]" />
                <span className="text-[9px] uppercase font-bold tracking-widest text-white">Discreet Processing</span>
              </div>
              <div className="flex items-center gap-2 opacity-30">
                <Globe size={14} className="text-[#CFA052]" />
                <span className="text-[9px] uppercase font-bold tracking-widest text-white">Global Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
