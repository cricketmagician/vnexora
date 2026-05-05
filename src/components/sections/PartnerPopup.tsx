"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  CheckCircle2, 
  ChevronDown, 
  Plus, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";
import { usePartner } from "@/context/PartnerContext";

// --- REUSABLE COMPONENTS ---

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

const CustomSelect = ({ 
  label, 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option",
  required = false
}: { 
  label: string; 
  options: {id: string, label: string}[]; 
  value: string; 
  onChange: (val: string) => void;
  placeholder?: string;
  required?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.id === value);

  return (
    <div className="relative group mb-6">
      <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-2 block ml-1 transition-colors group-focus-within:text-mustard">
        {label} {required && <span className="text-mustard">*</span>}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full bg-white border-b border-black/10 py-3 px-1 flex items-center justify-between cursor-pointer transition-all hover:border-mustard/50",
          isOpen && "border-mustard"
        )}
      >
        <span className={cn(
          "text-xs font-bold tracking-widest uppercase",
          selectedOption ? "text-black" : "text-black/20"
        )}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={12} className={cn("text-mustard transition-transform duration-300", isOpen && "rotate-180")} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            data-lenis-prevent
            className="absolute z-[110] left-0 right-0 mt-1 bg-white border border-black/5 shadow-2xl max-h-[200px] overflow-y-auto overscroll-contain"
          >
            {options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => {
                  onChange(opt.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer transition-colors border-b border-black/5 last:border-0",
                  value === opt.id ? "bg-mustard text-black" : "text-black/60 hover:bg-black/5 hover:text-black"
                )}
              >
                {opt.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MultiSelect = ({ 
  label, 
  options, 
  selectedValues, 
  onChange,
  required = false
}: { 
  label: string; 
  options: {id: string, label: string}[]; 
  selectedValues: string[]; 
  onChange: (vals: string[]) => void;
  required?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleValue = (val: string) => {
    if (selectedValues.includes(val)) {
      onChange(selectedValues.filter(v => v !== val));
    } else {
      onChange([...selectedValues, val]);
    }
  };

  return (
    <div className="relative group mb-6">
      <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-2 block ml-1 transition-colors group-focus-within:text-mustard">
        {label} {required && <span className="text-mustard">*</span>}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full bg-white border-b border-black/10 py-3 px-1 flex flex-wrap gap-2 items-center justify-between cursor-pointer transition-all hover:border-mustard/50",
          isOpen && "border-mustard"
        )}
      >
        <div className="flex flex-wrap gap-2">
          {selectedValues.length > 0 ? (
            selectedValues.map(v => {
              const opt = options.find(o => o.id === v);
              return (
                <span key={v} className="bg-mustard/10 text-mustard text-[8px] font-black tracking-widest px-2 py-1 uppercase rounded-none flex items-center gap-1">
                  {opt?.label}
                  <X size={8} onClick={(e) => { e.stopPropagation(); toggleValue(v); }} className="cursor-pointer" />
                </span>
              );
            })
          ) : (
            <span className="text-xs font-bold tracking-widest uppercase text-black/20">Select Multiple</span>
          )}
        </div>
        <Plus size={12} className={cn("text-mustard transition-transform duration-300", isOpen && "rotate-45")} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            data-lenis-prevent
            className="absolute z-[110] left-0 right-0 mt-1 bg-white border border-black/5 shadow-2xl max-h-[200px] overflow-y-auto overscroll-contain"
          >
            {options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => toggleValue(opt.id)}
                className={cn(
                  "px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer transition-colors border-b border-black/5 last:border-0 flex items-center justify-between",
                  selectedValues.includes(opt.id) ? "bg-black text-mustard" : "text-black/60 hover:bg-black/5 hover:text-black"
                )}
              >
                {opt.label}
                {selectedValues.includes(opt.id) && <CheckCircle2 size={10} />}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN POPUP COMPONENT ---

export const PartnerPopup = () => {
  const { isOpen, closePartner } = usePartner();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Contact Details
    fullName: "",
    brandName: "",
    designation: "",
    whatsapp: "",
    email: "",
    city: "",
    country: "India",

    // Step 2: You Are & Interest
    youAre: "",
    interest: [] as string[],

    // Step 3: Asset Details & Looking For
    assetName: "",
    assetLocation: "",
    assetType: "",
    currentStage: "",
    lookingFor: [] as string[],

    // Step 4: Proposal & Schedule
    proposal: "",
    additionalNotes: "",
    prefTime: ""
  });

  // Reset state when popup closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setIsSubmitted(false);
      }, 500);
    }
  }, [isOpen]);

  const youAreOptions = [
    { id: "hotel_owner", label: "Hotel Owner" },
    { id: "resort_owner", label: "Resort Owner" },
    { id: "investor", label: "Investor" },
    { id: "developer", label: "Developer" },
    { id: "land_owner", label: "Land Owner" },
    { id: "hospitality_brand", label: "Hospitality Brand" },
    { id: "consultant", label: "Consultant" },
    { id: "vendor", label: "Vendor / Supplier" },
    { id: "other", label: "Other" }
  ];

  const interestOptions = [
    { id: "mgmt_partnership", label: "Hotel Management Partnership" },
    { id: "lease_partnership", label: "Lease Partnership" },
    { id: "brand_tieup", label: "Franchise / Brand Tie-Up" },
    { id: "rev_sharing", label: "Revenue Sharing Model" },
    { id: "mg_rev", label: "MG + Revenue Sharing" },
    { id: "jv", label: "Joint Venture (JV)" },
    { id: "strategic_inv", label: "Strategic Investment" },
    { id: "asset_acq", label: "Asset Acquisition / Sale" },
    { id: "tech_ai", label: "Technology / AI Partnership" },
    { id: "sales_dist", label: "Sales & Distribution Partnership" },
    { id: "procurement", label: "Vendor / Procurement Partnership" },
    { id: "other", label: "Other (Specify)" }
  ];

  const stageOptions = [
    { id: "idea", label: "Idea / Pre-Planning" },
    { id: "operational", label: "Operational" },
    { id: "expansion", label: "Expansion" }
  ];

  const lookingForOptions = [
    { id: "returns", label: "Better Returns" },
    { id: "expansion", label: "Brand Expansion" },
    { id: "prof_mgmt", label: "Professional Management" },
    { id: "growth", label: "Faster Growth" },
    { id: "funding", label: "Funding Support" },
    { id: "occupancy", label: "Stronger Occupancy" },
    { id: "revenue", label: "Revenue Growth" },
    { id: "cost_opt", label: "Cost Optimization" },
    { id: "market_entry", label: "Market Entry Support" },
    { id: "other", label: "Other" }
  ];

  const scheduleOptions = [
    { id: "morning", label: "Morning" },
    { id: "afternoon", label: "Afternoon" },
    { id: "evening", label: "Evening" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(prev => prev + 1);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.whatsapp,
        subject: `Partnership Inquiry: ${formData.brandName}`,
        message: `
          VNEXORA PARTNERSHIP FORM DATA:
          -----------------------------------
          CONTACT DETAILS
          Name: ${formData.fullName}
          Company/Brand: ${formData.brandName}
          Designation: ${formData.designation}
          WhatsApp: ${formData.whatsapp}
          Email: ${formData.email}
          City: ${formData.city}
          Country: ${formData.country}

          PERSONA & INTEREST
          You Are: ${formData.youAre}
          Partnership Interest: ${formData.interest.join(", ")}

          BUSINESS / ASSET DETAILS
          Asset Name: ${formData.assetName}
          Location: ${formData.assetLocation}
          Asset Type: ${formData.assetType}
          Current Stage: ${formData.currentStage}
          Looking For: ${formData.lookingFor.join(", ")}

          PROPOSAL & NOTES
          Proposal Summary: ${formData.proposal}
          Additional Notes: ${formData.additionalNotes}
          Pref. Contact Time: ${formData.prefTime}
        `,
        source: 'partner_popup'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Partnership request submitted.");
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
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePartner}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-white shadow-[0_50px_100px_rgba(0,0,0,0.4)] flex flex-col md:flex-row overflow-hidden rounded-[2.5rem]"
          >
            {/* Close Button */}
            <button 
              onClick={closePartner}
              className="absolute top-6 right-6 z-[120] text-black/20 hover:text-mustard transition-all p-2 hover:rotate-90"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
 
            {/* Sidebar Branding - High Fidelity Compact */}
            <div className="md:w-[35%] relative overflow-hidden bg-[#0A0A0A] hidden md:block">
               <img 
                 src="/images/sections/partnership/institutional_boardroom.png" 
                 alt="Vnexora Partnership" 
                 className="absolute inset-0 w-full h-full object-cover brightness-[0.7] scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
               
               <div className="absolute bottom-10 left-10 right-10 z-20">
                  <div className="w-10 h-px bg-mustard mb-6" />
                  <p className="text-white/40 text-[9px] leading-relaxed tracking-[0.4em] font-black uppercase mb-2">Step 0{step} / 04</p>
                  <h3 className="text-white text-xl font-serif tracking-tight uppercase leading-none mb-6">Partner With Us</h3>
                  <div className="flex gap-2">
                     {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`h-[2px] flex-1 ${i <= step ? 'bg-mustard shadow-[0_0_10px_rgba(227,180,72,0.5)]' : 'bg-white/10'}`} />
                     ))}
                  </div>
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
                       <h3 className="text-3xl font-serif text-black tracking-tight uppercase">Inquiry Received.</h3>
                       <p className="text-black/40 text-[14px] font-medium max-w-xs mx-auto leading-relaxed italic">
                          Our strategic partnership desk will review your proposal and get in touch shortly.
                       </p>
                    </div>
                    <button 
                      onClick={closePartner}
                      className="bg-black text-white px-12 py-5 font-black text-[10px] tracking-[0.5em] uppercase hover:bg-mustard hover:text-black transition-all shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                    >
                      Close Interface
                    </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="space-y-2 border-b border-black/5 pb-6">
                      <h2 className="text-2xl font-serif text-black">Partner with VNEXORA.</h2>
                      <p className="text-black/30 text-[10px] font-bold uppercase tracking-widest">Build Growth. Unlock Value. Scale with VNEXORA.</p>
                   </div>

                   <AnimatePresence mode="wait">
                     {step === 1 && (
                       <motion.div
                         key="part-step1"
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         className="space-y-8"
                       >
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <InputField label="Full Name" value={formData.fullName} onChange={v => setFormData({...formData, fullName: v})} placeholder="JOHN DOE" required />
                            <InputField label="Company / Brand Name" value={formData.brandName} onChange={v => setFormData({...formData, brandName: v})} placeholder="THE GRAND ESTATE" required />
                            <InputField label="Designation" value={formData.designation} onChange={v => setFormData({...formData, designation: v})} placeholder="CEO / OWNER" />
                            <InputField label="WhatsApp Number" type="tel" value={formData.whatsapp} onChange={v => setFormData({...formData, whatsapp: v})} placeholder="+91 ..." required />
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <InputField label="Email Address" type="email" value={formData.email} onChange={v => setFormData({...formData, email: v})} placeholder="HELLO@CORP.COM" required />
                            <div className="grid grid-cols-2 gap-4">
                               <InputField label="City" value={formData.city} onChange={v => setFormData({...formData, city: v})} placeholder="VARANASI" required />
                               <InputField label="Country" value={formData.country} onChange={v => setFormData({...formData, country: v})} placeholder="INDIA" />
                            </div>
                         </div>
                       </motion.div>
                     )}

                     {step === 2 && (
                       <motion.div
                         key="part-step2"
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         className="space-y-8"
                       >
                         <CustomSelect 
                            required
                            label="You Are" 
                            options={youAreOptions} 
                            value={formData.youAre} 
                            onChange={v => setFormData({...formData, youAre: v})} 
                         />
                         <MultiSelect 
                            required
                            label="Partnership Interest" 
                            options={interestOptions} 
                            selectedValues={formData.interest} 
                            onChange={v => setFormData({...formData, interest: v})} 
                         />
                       </motion.div>
                     )}

                     {step === 3 && (
                       <motion.div
                         key="part-step3"
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         className="space-y-8"
                       >
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <InputField label="Property / Company Name" value={formData.assetName} onChange={v => setFormData({...formData, assetName: v})} placeholder="THE ROYAL SUITES" required />
                            <InputField label="Location / City" value={formData.assetLocation} onChange={v => setFormData({...formData, assetLocation: v})} placeholder="GOA, INDIA" required />
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <InputField label="Existing Business / Asset Type" value={formData.assetType} onChange={v => setFormData({...formData, assetType: v})} placeholder="HOTEL / LAND / BRAND" />
                            <CustomSelect 
                                label="Current Stage" 
                                options={stageOptions} 
                                value={formData.currentStage} 
                                onChange={v => setFormData({...formData, currentStage: v})} 
                            />
                         </div>
                         <MultiSelect 
                            required
                            label="What Are You Looking For?" 
                            options={lookingForOptions} 
                            selectedValues={formData.lookingFor} 
                            onChange={v => setFormData({...formData, lookingFor: v})} 
                         />
                       </motion.div>
                     )}

                     {step === 4 && (
                       <motion.div
                         key="part-step4"
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         className="space-y-8"
                       >
                         <div className="group">
                            <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-2 block ml-1">Brief Proposal Summary</label>
                            <textarea 
                              className="w-full bg-white border-b border-black/10 py-3 px-1 outline-none focus:border-mustard transition-colors text-xs font-bold tracking-widest uppercase placeholder:text-black/10 min-h-[60px] resize-none"
                              placeholder="SUMMARY OF THE OPPORTUNITY..."
                              value={formData.proposal}
                              onChange={e => setFormData({...formData, proposal: e.target.value})}
                            />
                         </div>
                         <div className="group">
                            <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-2 block ml-1">Additional Notes</label>
                            <textarea 
                              className="w-full bg-white border-b border-black/10 py-3 px-1 outline-none focus:border-mustard transition-colors text-xs font-bold tracking-widest uppercase placeholder:text-black/10 min-h-[60px] resize-none"
                              placeholder="ANY OTHER DETAILS..."
                              value={formData.additionalNotes}
                              onChange={e => setFormData({...formData, additionalNotes: e.target.value})}
                            />
                         </div>
                         <CustomSelect 
                            label="Preferred Contact Time" 
                            options={scheduleOptions} 
                            value={formData.prefTime} 
                            onChange={v => setFormData({...formData, prefTime: v})} 
                         />
                       </motion.div>
                     )}
                   </AnimatePresence>

                   <div className="pt-10 flex items-center justify-between border-t border-black/5">
                      {step > 1 ? (
                        <button 
                          type="button"
                          onClick={() => setStep(prev => prev - 1)}
                          className="text-[9px] font-black uppercase tracking-[0.3em] text-black/20 hover:text-black transition-colors"
                        >
                          Back
                        </button>
                      ) : <div />}

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-6 bg-black text-white px-12 py-5 font-black text-[10px] tracking-[0.5em] uppercase hover:bg-mustard hover:text-black transition-all group shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                      >
                        {isSubmitting ? "PROCESSING..." : (step === 4 ? "Partner with VNEXORA" : "Next Step")}
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
