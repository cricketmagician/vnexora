"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

interface ArchitectureContactFormProps {
  source: string;
  title?: string;
  subtitle?: string;
  accentTitle?: string;
}

export default function ArchitectureContactForm({
  source,
  title = "Start your project",
  accentTitle = "requirement",
  subtitle = "Professional planning is the foundation of every successful project. Specify your requirements below."
}: ArchitectureContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    totalArea: "",
    constructionBudget: "",
    consultantFees: "",
    startDate: "",
    projectStage: "",
    additionalInfo: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mandateBrief = `
PROPOSED PROJECT TYPE: ${formData.projectType}
TOTAL PROJECT AREA: ${formData.totalArea}
CONSTRUCTION BUDGET: ${formData.constructionBudget} Lakhs
ARCHITECT/CONSULTANT FEES: ${formData.consultantFees} Lakhs
START TIMELINE: ${formData.startDate}
CURRENT STAGE: ${formData.projectStage}

LOCATION & ADDITIONAL INFO:
${formData.additionalInfo}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: `Institutional Mandate: ${formData.projectType}`,
        message: mandateBrief,
        source: source
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Mandate brief transmitted successfully.");
      } else {
        toast.error(result.message || "Failed to transmit brief.");
      }
    } catch (error) {
      toast.error("A technical error occurred during transmission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-[#E3B448]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-[#E3B448]" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-black">Mandate Received.</h2>
            <p className="text-black/60 font-light">
              Your detailed project requirements have been transmitted to the Vnexora Private Strategic Desk. 
              Our experts will review the brief and contact you shortly.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">
      {/* ── Full-bleed split background ─────────────────── */}
      <div className="absolute inset-0 flex">
        {/* Left: Rich amber-gold gradient */}
        <div className="w-full lg:w-[42%] bg-[#1A0F00] flex-shrink-0" />
        {/* Right: Clean off-white */}
        <div className="hidden lg:block flex-1 bg-[#FAFAF8]" />
      </div>

      {/* Decorative pattern on left */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[42%] overflow-hidden pointer-events-none">
        {/* Gold diagonal lines */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #E3B448 0px,
            #E3B448 1px,
            transparent 1px,
            transparent 40px
          )`
        }} />
        {/* Gold orb glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E3B448]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#EAB308]/10 blur-[80px] rounded-full" />
      </div>

      {/* ── Content grid ────────────────────────────────── */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* ════════ LEFT PANEL ════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 px-8 md:px-16 lg:px-20 py-24 md:py-32 flex flex-col justify-center min-h-[700px]"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-[1px] bg-[#E3B448]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#E3B448]">
                Professional Project Inquiry
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-6"
            >
              {title}{" "}
              <span className="italic text-[#E3B448] block">{accentTitle}</span>
            </motion.h2>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] w-16 bg-gradient-to-r from-[#E3B448] to-transparent origin-left mb-8"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-sm mb-16"
            >
              "{subtitle}"
            </motion.p>

            {/* Contact Items */}
            <div className="space-y-8 border-t border-white/10 pt-10">
              {[
                {
                  icon: Mail,
                  label: "Executive Desk",
                  value: "connect@vnexora.com",
                  delay: 0.5
                },
                {
                  icon: Phone,
                  label: "Priority Lines",
                  value: "+91 83181 95911",
                  delay: 0.6
                },
                {
                  icon: MapPin,
                  label: "Strategic Offices",
                  value: "Varanasi · London · Dubai · Boston",
                  delay: 0.7
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  className="flex items-center gap-5 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E3B448] group-hover:border-[#E3B448] transition-all duration-500">
                    <item.icon className="w-4 h-4 text-[#E3B448] group-hover:text-black transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 mb-0.5">{item.label}</p>
                    <p className="text-sm text-white/80 font-light tracking-wide">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ════════ RIGHT PANEL — FORM ════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 px-8 md:px-16 lg:px-20 py-24 md:py-32 bg-[#FAFAF8]"
          >
            {/* Form header */}
            <div className="mb-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E3B448] mb-3">Project Brief</p>
              <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-tight">
                Project Consultation <span className="italic text-[#E3B448]">Brief</span>
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PremiumInput label="First Name" required value={formData.firstName}
                  onChange={(v) => setFormData({ ...formData, firstName: v })} />
                <PremiumInput label="Last Name" required value={formData.lastName}
                  onChange={(v) => setFormData({ ...formData, lastName: v })} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PremiumInput label="Email Address" type="email" required value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })} />
                <PremiumInput label="Phone Number" required value={formData.phone}
                  onChange={(v) => setFormData({ ...formData, phone: v })} />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PremiumSelect
                  label="Type of Proposed Project"
                  required
                  options={["Resort / Hotel", "Apartment / Residential", "Institutional / Educational", "Industrial / Logistics", "Commercial / Retail", "Luxury Villas", "Master Planning", "Interior Decor Mandate", "Technical Refurbishment"]}
                  value={formData.projectType}
                  onChange={(v) => setFormData({ ...formData, projectType: v })}
                />
                <PremiumSelect
                  label="Total Area"
                  required
                  options={["Upto 6,000 Sq. ft.", "6,000 - 10,000 Sq. ft.", "10,000 - 20,000 Sq. ft.", "20,000 - 40,000 Sq. ft.", "40,000 - 1,00,000 Sq. ft.", "1,00,000 Sq. ft and Above"]}
                  value={formData.totalArea}
                  onChange={(v) => setFormData({ ...formData, totalArea: v })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PremiumInput label="Construction Budget (in Lakhs)" type="number" required placeholder="e.g. 150"
                  value={formData.constructionBudget}
                  onChange={(v) => setFormData({ ...formData, constructionBudget: v })} />
                <PremiumInput label="Consulting Fees (in Lakhs)" type="number" required placeholder="e.g. 25"
                  value={formData.consultantFees}
                  onChange={(v) => setFormData({ ...formData, consultantFees: v })} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PremiumSelect
                  label="Planned Start Date"
                  required
                  options={["Less than 3 Months", "3 - 6 Months", "6 - 12 Months", "More than a Year"]}
                  value={formData.startDate}
                  onChange={(v) => setFormData({ ...formData, startDate: v })}
                />
                <PremiumSelect
                  label="Current Stage"
                  required
                  options={["Conceptual / Dreaming", "Ready to Build", "Operational Refinement", "Other"]}
                  value={formData.projectStage}
                  onChange={(v) => setFormData({ ...formData, projectStage: v })}
                />
              </div>

              {/* Textarea */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/50">
                  City & Additional Information
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the location and specific requirements..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="w-full bg-white border border-[#1A1A1A]/10 rounded-xl px-5 py-4 text-sm font-light text-[#1A1A1A] placeholder:text-black/20 outline-none focus:border-[#E3B448] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.08)] transition-all duration-300 resize-none"
                />
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-gradient-to-r from-[#E3B448]/30 via-[#E3B448]/10 to-transparent" />

              {/* CTA */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group w-full relative overflow-hidden py-5 px-10 bg-[#1A0F00] text-white text-[11px] font-bold uppercase tracking-[0.4em] rounded-2xl shadow-[0_20px_60px_rgba(212,175,55,0.15)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 flex items-center justify-center gap-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E3B448] to-[#B8960C] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-500 flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Transmitting Brief…
                    </>
                  ) : (
                    "Submit Requirement Brief"
                  )}
                </span>
              </motion.button>

              <p className="text-center text-[10px] text-black/30 tracking-wider uppercase">
                Confidential · NDA Protected · Board-Level Review
              </p>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PREMIUM INPUT
   ═══════════════════════════════════════════════ */
function PremiumInput({
  label, type = "text", required, value, onChange, placeholder
}: {
  label: string; type?: string; required?: boolean;
  value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/50">
        {label} {required && <span className="text-[#E3B448]">*</span>}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-[#1A1A1A]/10 rounded-xl px-5 py-4 text-sm font-light text-[#1A1A1A] placeholder:text-black/20 outline-none focus:border-[#E3B448] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.08)] transition-all duration-300"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PREMIUM SELECT
   ═══════════════════════════════════════════════ */
function PremiumSelect({
  label, required, options, value, onChange
}: {
  label: string; required?: boolean; options: string[];
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/50">
        {label} {required && <span className="text-[#E3B448]">*</span>}
      </label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-[#1A1A1A]/10 rounded-xl px-5 py-4 text-sm font-light text-[#1A1A1A]/70 outline-none focus:border-[#E3B448] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.08)] transition-all duration-300 appearance-none cursor-pointer"
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
