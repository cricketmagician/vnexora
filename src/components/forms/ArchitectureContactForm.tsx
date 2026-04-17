"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin } from "lucide-react";
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
  accentTitle = "mandate",
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

    // Format the Mandate Brief for the server action
    const mandateBrief = `
PROPOSED PROJECT TYPE: ${formData.projectType}
TOTAL PROJECT AREA: ${formData.totalArea}
CONSTRUCTION BUDGET: ${formData.constructionBudget}
ARCHITECT/CONSULTANT FEES: ${formData.consultantFees}
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
            <div className="w-20 h-20 bg-mustard/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-mustard" />
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
    <section className="py-20 md:py-32 bg-white border-t border-black/5">
      <div className="container mx-auto px-6 md:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Context */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 leading-relaxed font-sans">
                Professional Inquiry
              </p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-black leading-tight">
                {title}{" "}
                <span className="italic font-light text-mustard block md:inline">{accentTitle}</span>
              </h2>
              <div className="w-20 h-1 bg-mustard/20" />
              <p className="text-xl text-black/50 font-light leading-relaxed font-sans italic">
                "{subtitle}"
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-black/5">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                     <Mail className="w-5 h-5 text-black/60" />
                  </div>
                  <div>
                     <h4 className="text-[11px] font-bold uppercase tracking-widest text-black/80">Executive Desk</h4>
                     <p className="text-sm text-black/50 font-light">contact@vnexora.com</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                     <MapPin className="w-5 h-5 text-black/60" />
                  </div>
                  <div>
                     <h4 className="text-[11px] font-bold uppercase tracking-widest text-black/80">Strategic Office</h4>
                     <p className="text-sm text-black/50 font-light">Pondicherry • Dubai • Mumbai</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 bg-[#FBFBFB] p-8 md:p-12 rounded-sm shadow-sm border border-black/5">
            <h3 className="text-2xl font-serif font-bold text-black mb-10">Technical Mandate Brief</h3>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="First Name"
                  required
                  value={formData.firstName}
                  onChange={(val) => setFormData({ ...formData, firstName: val })}
                />
                <FormInput
                  label="Last Name"
                  required
                  value={formData.lastName}
                  onChange={(val) => setFormData({ ...formData, lastName: val })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="Email Address"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(val) => setFormData({ ...formData, email: val })}
                />
                <FormInput
                  label="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(val) => setFormData({ ...formData, phone: val })}
                />
              </div>

              {/* Project Selects (Auroma Style) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormSelect
                  label="Type of Proposed Project"
                  required
                  options={[
                    "Resort / Hotel",
                    "Apartment / Residential",
                    "Institutional / Educational",
                    "Industrial / Logistics",
                    "Commercial / Retail",
                    "Luxury Villas",
                    "Master Planning",
                    "Interior Decor Mandate",
                    "Technical Refurbishment"
                  ]}
                  value={formData.projectType}
                  onChange={(val) => setFormData({ ...formData, projectType: val })}
                />
                <FormSelect
                  label="Total Area of Proposed Project"
                  required
                  options={[
                    "Upto 6,000 Sq. ft.",
                    "6,000 - 10,000 Sq. ft.",
                    "10,000 - 20,000 Sq. ft.",
                    "20,000 - 40,000 Sq. ft.",
                    "40,000 - 1,00,000 Sq. ft.",
                    "1,00,000 Sq. ft and Above"
                  ]}
                  value={formData.totalArea}
                  onChange={(val) => setFormData({ ...formData, totalArea: val })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormSelect
                  label="Total Construction Budget"
                  required
                  options={[
                    "Upto 1.5 Crore",
                    "1.5 - 3 Crore",
                    "3 - 5 Crore",
                    "5 - 10 Crore",
                    "10 - 25 Crore",
                    "25 Crore +"
                  ]}
                  value={formData.constructionBudget}
                  onChange={(val) => setFormData({ ...formData, constructionBudget: val })}
                />
                <FormSelect
                  label="Budget for Architect / Consulting"
                  required
                  options={[
                    "Upto 15 Lakhs",
                    "15 - 25 Lakhs",
                    "25 - 50 Lakhs",
                    "50 Lakhs - 1 Crore",
                    "1 Crore +"
                  ]}
                  value={formData.consultantFees}
                  onChange={(val) => setFormData({ ...formData, consultantFees: val })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormSelect
                  label="Planned Start Date"
                  required
                  options={[
                    "Less than 3 Months",
                    "3 - 6 Months",
                    "6 - 12 Months",
                    "More than a Year"
                  ]}
                  value={formData.startDate}
                  onChange={(val) => setFormData({ ...formData, startDate: val })}
                />
                <FormSelect
                  label="Current Stage of Project"
                  required
                  options={[
                    "I am still dreaming / Conceptual",
                    "I know exactly what I want / Ready to build",
                    "Operational Refinement",
                    "Other"
                  ]}
                  value={formData.projectStage}
                  onChange={(val) => setFormData({ ...formData, projectStage: val })}
                />
              </div>

              {/* Textarea */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold uppercase tracking-widest text-black/60 font-sans">
                  City of Proposed Project & Additional Information
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black resize-none"
                  placeholder="Tell us about the location and any specific requirements..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                />
              </div>

              <div className="pt-6">
                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full py-6 bg-black text-white text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-mustard hover:text-black transition-all duration-700 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
                 >
                   {isSubmitting ? (
                     <>
                       <Loader2 className="w-4 h-4 animate-spin" />
                       Transmitting Mandate...
                     </>
                   ) : (
                     "SUBMIT MANDATE BRIEF"
                   )}
                 </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   HELPER COMPONENTS
   ═══════════════════════════════════════════════════════ */

function FormInput({ label, type = "text", required, value, onChange, placeholder }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-bold uppercase tracking-widest text-black/60 font-sans">
        {label} {required && <span className="text-mustard">*</span>}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black placeholder:text-black/20"
      />
    </div>
  );
}

function FormSelect({ label, required, options, value, onChange }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-bold uppercase tracking-widest text-black/60 font-sans">
        {label} {required && <span className="text-mustard">*</span>}
      </label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black/70 appearance-none cursor-pointer"
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt: string, i: number) => (
          <option key={i} value={opt} className="text-sm py-2">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
