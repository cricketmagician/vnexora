"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronDown, 
  Plus, 
  X,
  Upload,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Send,
  FileText,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

// --- CUSTOM SELECT COMPONENTS ---

interface SelectOption {
  id: string;
  label: string;
}

const CustomSelect = ({ 
  label, 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option",
  required = false
}: { 
  label: string; 
  options: SelectOption[]; 
  value: string; 
  onChange: (val: string) => void;
  placeholder?: string;
  required?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.id === value);

  return (
    <div className="relative group mb-8" ref={containerRef}>
      <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 block ml-1 transition-colors group-focus-within:text-mustard">
        {label} {required && <span className="text-mustard">*</span>}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full bg-white border-b border-black/10 py-4 px-1 flex items-center justify-between cursor-pointer transition-all hover:border-mustard/50",
          isOpen && "border-mustard"
        )}
      >
        <span className={cn(
          "text-xs font-bold tracking-widest uppercase",
          selectedOption ? "text-black" : "text-black/20"
        )}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={14} className={cn("text-mustard transition-transform duration-300", isOpen && "rotate-180")} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            data-lenis-prevent
            className="absolute z-[100] left-0 right-0 mt-2 bg-white border border-black/5 shadow-2xl max-h-[300px] overflow-y-auto overscroll-contain"
          >
            {options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => {
                  onChange(opt.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer transition-colors border-b border-black/5 last:border-0",
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
  options: SelectOption[]; 
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
    <div className="relative group mb-8">
      <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 block ml-1 transition-colors group-focus-within:text-mustard">
        {label} {required && <span className="text-mustard">*</span>}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full bg-white border-b border-black/10 py-4 px-1 flex flex-wrap gap-2 items-center justify-between cursor-pointer transition-all hover:border-mustard/50",
          isOpen && "border-mustard"
        )}
      >
        <div className="flex flex-wrap gap-2">
          {selectedValues.length > 0 ? (
            selectedValues.map(v => {
              const opt = options.find(o => o.id === v);
              return (
                <span key={v} className="bg-mustard/10 text-mustard text-[9px] font-black tracking-widest px-3 py-1.5 uppercase rounded-none flex items-center gap-2">
                  {opt?.label}
                  <X size={10} onClick={(e) => { e.stopPropagation(); toggleValue(v); }} className="cursor-pointer" />
                </span>
              );
            })
          ) : (
            <span className="text-xs font-bold tracking-widest uppercase text-black/20">Select Multiple Options</span>
          )}
        </div>
        <Plus size={14} className={cn("text-mustard transition-transform duration-300", isOpen && "rotate-45")} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            data-lenis-prevent
            className="absolute z-[100] left-0 right-0 mt-2 bg-white border border-black/5 shadow-2xl max-h-[300px] overflow-y-auto overscroll-contain"
          >
            {options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => toggleValue(opt.id)}
                className={cn(
                  "px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer transition-colors border-b border-black/5 last:border-0 flex items-center justify-between",
                  selectedValues.includes(opt.id) ? "bg-black text-mustard" : "text-black/60 hover:bg-black/5 hover:text-black"
                )}
              >
                {opt.label}
                {selectedValues.includes(opt.id) && <CheckCircle2 size={12} />}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- FORM COMPONENT ---

export const ServiceEnquiryForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Primary Enquiry Section
    fullName: "",
    companyName: "",
    whatsapp: "",
    altContact: "",
    email: "",
    city: "",
    country: "India",
    youAre: "",
    serviceNeeded: [] as string[],
    propertyName: "",
    assetType: "",
    propertyLocation: "",
    googlePin: "",
    cityProperty: "",
    state: "",
    countryProperty: "India",
    keysCount: "",

    // Detailed Enquiry Section
    projectStage: "",
    plotArea: "",
    constArea: "",
    floorsCount: "",
    banquetCap: "",
    restCap: "",
    parkingCap: "",
    currentChallenges: [] as string[],
    budgetRange: "",
    timeline: "",
    additionalNotes: "",
    preferredContactTime: ""
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 2));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const youAreOptions = [
    { id: "hotel_owner", label: "Hotel Owner" },
    { id: "resort_owner", label: "Resort Owner" },
    { id: "investor", label: "Investor" },
    { id: "land_owner", label: "Land Owner" },
    { id: "developer", label: "Developer" },
    { id: "brand_rep", label: "Brand Representative" },
    { id: "consultant", label: "Consultant" },
    { id: "other", label: "Other" }
  ];

  const serviceOptions = [
    { id: "hotel_mgmt", label: "Hotel Management Services" },
    { id: "franchise", label: "Brand Partnership / Franchise" },
    { id: "lease", label: "Lease Structuring" },
    { id: "rev_opt", label: "Revenue Optimization" },
    { id: "pre_opening", label: "Pre-Opening Services" },
    { id: "renovation", label: "Construction & Renovation Advisory" },
    { id: "sales_marketing", label: "Sales & Marketing Support" },
    { id: "ai_tech", label: "AI & Technology Integration" },
    { id: "acquisition", label: "Asset Acquisition / Sale" },
    { id: "other", label: "Other (Specify)....." }
  ];

  const assetOptions = [
    { id: "hotel", label: "Hotel" },
    { id: "resort", label: "Resort" },
    { id: "villa", label: "Villa" },
    { id: "boutique", label: "Boutique Hotel" },
    { id: "apartment", label: "Serviced Apartment" },
    { id: "restaurant", label: "Restaurant" },
    { id: "other", label: "Other" }
  ];

  const stageOptions = [
    { id: "idea", label: "Idea Stage" },
    { id: "land", label: "Land Finalized" },
    { id: "construction", label: "Under Construction" },
    { id: "interior", label: "Interior Phase" },
    { id: "launch", label: "Ready to Launch" },
    { id: "operational", label: "Operational" },
    { id: "distressed", label: "Distressed Asset" },
    { id: "expansion", label: "Expansion" }
  ];

  const challengeOptions = [
    { id: "low_occ", label: "Low Occupancy" },
    { id: "low_rev", label: "Low Revenue" },
    { id: "poor_reviews", label: "Poor Reviews" },
    { id: "ota_dep", label: "OTA Dependency" },
    { id: "weak_brand", label: "Weak Branding" },
    { id: "staff_issues", label: "Staff Issues" },
    { id: "cost_leakage", label: "Cost Leakage" },
    { id: "delayed_launch", label: "Delayed Launch" },
    { id: "better_roi", label: "Need Better ROI" },
    { id: "other", label: "Other" }
  ];

  const timelineOptions = [
    { id: "immediate", label: "Immediate" },
    { id: "30days", label: "Within 30 Days" },
    { id: "2-3months", label: "2-3 Months" },
    { id: "6+months", label: "6+ Months" }
  ];

  const contactTimeOptions = [
    { id: "morning", label: "Morning" },
    { id: "afternoon", label: "Afternoon" },
    { id: "evening", label: "Evening" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      nextStep();
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.whatsapp,
        subject: `Service Enquiry: ${formData.serviceNeeded.join(", ")}`,
        message: `
          Our Services Enquiry Form Data:
          -----------------------------------
          PRIMARY ENQUIRY SECTION
          Full Name: ${formData.fullName}
          Company: ${formData.companyName}
          WhatsApp: ${formData.whatsapp}
          Alt Contact: ${formData.altContact}
          Email: ${formData.email}
          City/Country: ${formData.city}, ${formData.country}
          You Are: ${formData.youAre}
          Service Needed: ${formData.serviceNeeded.join(", ")}
          Property Name: ${formData.propertyName}
          Asset Type: ${formData.assetType}
          Location: ${formData.propertyLocation}
          Google Pin: ${formData.googlePin}
          City of Property: ${formData.cityProperty}, ${formData.state}, ${formData.countryProperty}
          Number of Keys: ${formData.keysCount}

          DETAILED ENQUIRY SECTION
          Project Stage: ${formData.projectStage}
          Plot Area: ${formData.plotArea}
          Const. Area: ${formData.constArea}
          Floors: ${formData.floorsCount}
          Banquet Cap: ${formData.banquetCap}
          Restaurant Cap: ${formData.restCap}
          Parking Cap: ${formData.parkingCap}
          Current Challenges: ${formData.currentChallenges.join(", ")}
          Budget Range: ${formData.budgetRange}
          Timeline: ${formData.timeline}
          Additional Notes: ${formData.additionalNotes}
          Preferred Contact Time: ${formData.preferredContactTime}
        `,
        source: 'services_enquiry_form'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Service enquiry submitted successfully.");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-12 md:p-20 text-center border border-black/5"
      >
        <div className="w-20 h-20 bg-mustard rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-mustard/20">
          <CheckCircle2 size={32} className="text-black" />
        </div>
        <h2 className="text-4xl font-serif text-black mb-6">Consultation Requested.</h2>
        <p className="text-black/40 font-light max-w-md mx-auto mb-12">
          Your service enquiry has been logged. Our strategic desk will review your requirements and provide a professional consultation within 24-48 hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="bg-black text-white px-12 py-5 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-mustard transition-colors"
        >
          New Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white border border-black/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.04)]">
      {/* Progress Bar */}
      <div className="h-1 w-full bg-black/5">
        <motion.div 
          initial={{ width: "50%" }}
          animate={{ width: `${(step / 2) * 100}%` }}
          className="h-full bg-mustard"
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Info */}
        <div className="lg:w-1/3 relative overflow-hidden bg-[#0A0A0A] min-h-[300px] lg:min-h-full">
          <img 
            src="/images/about/kit1.jpeg" 
            alt="Vnexora Support" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 z-10">
            <div className="w-10 h-px bg-mustard mb-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-mustard block mb-2">Step 0{step} / 02</span>
            <p className="text-white text-[12px] font-bold tracking-widest uppercase">
              {step === 1 ? "Primary Enquiry" : "Detailed Enquiry"}
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="lg:w-2/3 p-10 md:p-16 lg:p-24 bg-white min-h-[600px] flex flex-col">
          <form onSubmit={handleSubmit} className="flex-grow">
            <AnimatePresence mode="wait">
              {/* STEP 1: PRIMARY */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <InputField label="Full Name" value={formData.fullName} onChange={v => setFormData({...formData, fullName: v})} placeholder="E.G. JOHN DOE" required />
                    <InputField label="Company Name / Ownership" value={formData.companyName} onChange={v => setFormData({...formData, companyName: v})} placeholder="E.G. LUXE GROUP" />
                    <InputField label="WhatsApp Number" type="tel" value={formData.whatsapp} onChange={v => setFormData({...formData, whatsapp: v})} placeholder="+91 ..." required />
                    <InputField label="Alt. Contact Number" type="tel" value={formData.altContact} onChange={v => setFormData({...formData, altContact: v})} placeholder="+91 ..." />
                    <InputField label="Email Address" type="email" value={formData.email} onChange={v => setFormData({...formData, email: v})} placeholder="CEO@LUXE.COM" required />
                    <InputField label="City" value={formData.city} onChange={v => setFormData({...formData, city: v})} placeholder="E.G. VARANASI" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 pt-8 border-t border-black/5">
                    <CustomSelect 
                      required
                      label="You Are" 
                      options={youAreOptions} 
                      value={formData.youAre} 
                      onChange={v => setFormData({...formData, youAre: v})} 
                    />
                    <MultiSelect 
                      required
                      label="Service You Need" 
                      options={serviceOptions} 
                      selectedValues={formData.serviceNeeded} 
                      onChange={v => setFormData({...formData, serviceNeeded: v})} 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <InputField label="Property Name" value={formData.propertyName} onChange={v => setFormData({...formData, propertyName: v})} placeholder="E.G. THE GRAND" />
                    <CustomSelect 
                      required
                      label="Asset Type" 
                      options={assetOptions} 
                      value={formData.assetType} 
                      onChange={v => setFormData({...formData, assetType: v})} 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <InputField label="Property Location" value={formData.propertyLocation} onChange={v => setFormData({...formData, propertyLocation: v})} placeholder="FULL ADDRESS" required />
                    <InputField label="Google Maps Link / Pin" value={formData.googlePin} onChange={v => setFormData({...formData, googlePin: v})} placeholder="PASTE LINK HERE" />
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DETAILED */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <CustomSelect 
                      required
                      label="Project Stage" 
                      options={stageOptions} 
                      value={formData.projectStage} 
                      onChange={v => setFormData({...formData, projectStage: v})} 
                    />
                    <InputField label="Number of Keys / Rooms" type="number" value={formData.keysCount} onChange={v => setFormData({...formData, keysCount: v})} placeholder="50" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-black/5">
                    <InputField label="Plot Area (Sq Ft)" type="number" value={formData.plotArea} onChange={v => setFormData({...formData, plotArea: v})} placeholder="10000" />
                    <InputField label="Const. Area (Sq Ft)" type="number" value={formData.constArea} onChange={v => setFormData({...formData, constArea: v})} placeholder="25000" />
                    <InputField label="Number of Floors" type="number" value={formData.floorsCount} onChange={v => setFormData({...formData, floorsCount: v})} placeholder="4" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <InputField label="Banquet Capacity" type="number" value={formData.banquetCap} onChange={v => setFormData({...formData, banquetCap: v})} placeholder="200" />
                    <InputField label="Restaurant Capacity" type="number" value={formData.restCap} onChange={v => setFormData({...formData, restCap: v})} placeholder="60" />
                    <InputField label="Parking Capacity" type="number" value={formData.parkingCap} onChange={v => setFormData({...formData, parkingCap: v})} placeholder="20" />
                  </div>

                  <div className="pt-8 border-t border-black/5">
                    <MultiSelect 
                      label="Current Challenges" 
                      options={challengeOptions} 
                      selectedValues={formData.currentChallenges} 
                      onChange={v => setFormData({...formData, currentChallenges: v})} 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <InputField label="Budget / Investment Range" value={formData.budgetRange} onChange={v => setFormData({...formData, budgetRange: v})} placeholder="E.G. 2-5 CR" />
                    <CustomSelect 
                      label="Timeline" 
                      options={timelineOptions} 
                      value={formData.timeline} 
                      onChange={v => setFormData({...formData, timeline: v})} 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <CustomSelect 
                      label="Preferred Contact Time" 
                      options={contactTimeOptions} 
                      value={formData.preferredContactTime} 
                      onChange={v => setFormData({...formData, preferredContactTime: v})} 
                    />
                    <div className="group relative">
                      <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 block ml-1">Upload Files (Floor Plans / Financials)</label>
                      <div className="w-full bg-white border-b border-black/10 py-4 px-1 flex items-center justify-between cursor-pointer hover:border-mustard transition-colors">
                        <span className="text-xs font-bold tracking-widest uppercase text-black/20 italic">No files selected</span>
                        <Upload size={14} className="text-mustard" />
                      </div>
                    </div>
                  </div>

                  <div className="group pt-4">
                    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 block ml-1">Additional Notes / Vision</label>
                    <textarea 
                      className="w-full bg-white border-b border-black/10 py-4 px-1 outline-none focus:border-mustard transition-colors text-xs font-bold tracking-widest uppercase placeholder:text-black/10 min-h-[80px] resize-none"
                      placeholder="DESCRIBE YOUR SPECIFIC REQUIREMENTS"
                      value={formData.additionalNotes}
                      onChange={e => setFormData({...formData, additionalNotes: e.target.value})}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-20 pt-10 border-t border-black/5 flex items-center justify-between">
              {step > 1 ? (
                <button 
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-4 text-black/40 hover:text-black transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Previous</span>
                </button>
              ) : <div />}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-6 bg-black text-white px-12 py-5 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-mustard hover:text-black transition-all group"
              >
                {isSubmitting ? "Processing..." : (step === 2 ? "Request Professional Consultation" : "Next Step")}
                {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

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
    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 block ml-1 transition-colors group-focus-within:text-mustard">
      {label} {required && <span className="text-mustard">*</span>}
    </label>
    <input 
      required={required}
      type={type}
      className="w-full bg-white border-b border-black/10 py-4 px-1 outline-none focus:border-mustard transition-colors text-xs font-bold tracking-widest uppercase placeholder:text-black/10"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);
