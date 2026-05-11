"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe } from "lucide-react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

export const MembershipJoinSection = () => {
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
        subject: `Membership Inline Application`,
        message: `
Country: ${formData.country}
City: ${formData.city}
Category: ${formData.needs}
Company: ${formData.company}
Message: ${formData.message}
        `,
        source: 'membership_inline_section'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Application received.");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Error submitting application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-portal" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          {/* Left Side: Content & Image */}
          <div className="lg:w-2/5 flex flex-col justify-between space-y-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-[#CFA052]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#CFA052]">Application Portal</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif italic text-white leading-tight"
              >
                Ready to lead the <br />
                <span className="text-[#CFA052]">industry?</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-white/50 font-light italic leading-relaxed"
              >
                Submit your application today and join the most powerful voice in global hospitality. Our executive desk reviews every application with the utmost discretion.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group"
            >
              <NextImage 
                src="/images/membership/footer-team.png" 
                alt="Vnexora Executive Team" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                  <p className="text-white text-sm font-light italic mb-2">"We don't just represent hospitality; we define its future."</p>
                  <p className="text-[#CFA052] text-[10px] font-black uppercase tracking-widest">— Vnexora Executive Desk</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-3/5 bg-black/80 backdrop-blur-3xl rounded-[4rem] p-8 md:p-16 border border-white/10 shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-white/80 ml-1">First Name *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white focus:bg-white/[0.08] focus:border-[#CFA052] outline-none transition-all placeholder:text-white/10"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-white/80 ml-1">Last Name *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white focus:bg-white/[0.08] focus:border-[#CFA052] outline-none transition-all placeholder:text-white/10"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-white/80 ml-1">Email *</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white focus:bg-white/[0.08] focus:border-[#CFA052] outline-none transition-all placeholder:text-white/10"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-white/80 ml-1">Country *</label>
                    <select
                      required
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-8 py-5 text-white focus:bg-white/[0.08] focus:border-[#CFA052] outline-none transition-all appearance-none cursor-pointer"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    >
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-white/80 ml-1">City *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white focus:bg-white/[0.08] focus:border-[#CFA052] outline-none transition-all placeholder:text-white/10"
                      placeholder="e.g. London"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-white/80 ml-1">Phone *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white focus:bg-white/[0.08] focus:border-[#CFA052] outline-none transition-all placeholder:text-white/10"
                      placeholder="+1 234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-white/80 ml-1">Company *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white focus:bg-white/[0.08] focus:border-[#CFA052] outline-none transition-all placeholder:text-white/10"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-white/80 ml-1">Category *</label>
                    <select
                      required
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-8 py-5 text-white focus:bg-white/[0.08] focus:border-[#CFA052] outline-none transition-all appearance-none cursor-pointer"
                      value={formData.needs}
                      onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                    >
                      <option value="" disabled>Select Category</option>
                      {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-white/80 ml-1">How can we help? (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-6 text-white focus:bg-white/[0.08] focus:border-[#CFA052] outline-none transition-all resize-none placeholder:text-white/10"
                    placeholder="Tell us more about your business..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full bg-[#CFA052] text-black py-7 rounded-3xl text-[12px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-700 flex items-center justify-center gap-6 shadow-2xl shadow-[#CFA052]/20 group disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-24 h-24 bg-[#CFA052]/10 rounded-full flex items-center justify-center mb-10 border border-[#CFA052]/30">
                  <CheckCircle2 size={48} className="text-[#CFA052]" />
                </div>
                <h3 className="text-4xl font-serif italic text-white mb-6">Application Received.</h3>
                <p className="text-white/40 font-light text-lg max-w-sm mx-auto leading-relaxed">
                  Your application to join Vnexora has been securely transmitted. Our executive desk will review and reach out shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#CFA052]/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </section>
  );
};
