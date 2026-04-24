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

    // Format the Mandate Brief for the server action
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
    <section className="relative py-24 md:py-40 bg-white border-t border-black/10 overflow-hidden">
      {/* Left Side Background — Institutional Yellow */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-5/12 bg-[#EAB308] z-0" />
      
      {/* Editorial Textures */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/10 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Context */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/40 leading-relaxed font-sans"
              >
                Professional Project Inquiry
              </motion.p>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
                {title}{" "}
                <span className="italic font-light text-black/90 block md:inline">{accentTitle}</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-white/30" 
              />
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed font-sans italic max-w-md">
                "{subtitle}"
              </p>
            </div>

            <div className="space-y-10 pt-10 border-t border-white/20">
               {/* Executive Email */}
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}
                 className="flex items-start gap-4 group cursor-pointer"
               >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white group-hover:text-mustard transition-all duration-500">
                     <Mail className="w-5 h-5" />
                  </div>
                  <div>
                     <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-1">Executive Desk</h4>
                     <p className="text-lg text-white font-serif tracking-wide">connect@vnexora.com</p>
                  </div>
               </motion.div>

               {/* Priority Phone */}
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.7 }}
                 className="flex items-start gap-4 group cursor-pointer"
               >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white group-hover:text-mustard transition-all duration-500">
                     <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                     <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-1">Priority Lines</h4>
                     <p className="text-lg text-white font-serif tracking-wide">+91 83181 95911</p>
                     <p className="text-lg text-white font-serif tracking-wide">+91 79808 29403</p>
                  </div>
               </motion.div>

               {/* Global Hubs */}
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8 }}
                 className="flex items-start gap-4 group"
               >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white group-hover:text-mustard transition-all duration-500">
                     <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                     <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-1">Strategic Office Hubs</h4>
                     <p className="text-sm text-white/90 font-light leading-relaxed">Varanasi • London • Dubai • Boston</p>
                  </div>
               </motion.div>
            </div>
          </motion.div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 rounded-[2.5rem] shadow-[0_60px_120px_rgba(0,0,0,0.2)] border border-black/5 relative z-10">
            <h3 className="text-2xl font-serif font-bold text-black mb-10">Project Consultation Brief</h3>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="First Name"
                  required
                  value={formData.firstName}
                  onChange={(val: string) => setFormData({ ...formData, firstName: val })}
                />
                <FormInput
                  label="Last Name"
                  required
                  value={formData.lastName}
                  onChange={(val: string) => setFormData({ ...formData, lastName: val })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="Email Address"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(val: string) => setFormData({ ...formData, email: val })}
                />
                <FormInput
                  label="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(val: string) => setFormData({ ...formData, phone: val })}
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
                  onChange={(val: string) => setFormData({ ...formData, projectType: val })}
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
                  onChange={(val: string) => setFormData({ ...formData, totalArea: val })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="Proposed Construction Budget (in Lakhs)"
                  type="number"
                  required
                  placeholder="e.g. 150"
                  value={formData.constructionBudget}
                  onChange={(val: string) => setFormData({ ...formData, constructionBudget: val })}
                />
                <FormInput
                  label="Architect / Consulting Fees (in Lakhs)"
                  type="number"
                  required
                  placeholder="e.g. 25"
                  value={formData.consultantFees}
                  onChange={(val: string) => setFormData({ ...formData, consultantFees: val })}
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
                  onChange={(val: string) => setFormData({ ...formData, startDate: val })}
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
                  onChange={(val: string) => setFormData({ ...formData, projectStage: val })}
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
                       Transmitting Brief...
                     </>
                   ) : (
                     "SUBMIT REQUIREMENT BRIEF"
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

interface FormInputProps {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

function FormInput({ label, type = "text", required, value, onChange, placeholder }: FormInputProps) {
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

interface FormSelectProps {
  label: string;
  required?: boolean;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

function FormSelect({ label, required, options, value, onChange }: FormSelectProps) {
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
