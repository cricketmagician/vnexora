"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  ChevronDown, 
  Plus, 
  X,
  Upload,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Briefcase,
  Layers,
  Zap,
  TrendingUp,
  FileText,
  ShieldCheck,
  Send
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
  placeholder = "Select an option" 
}: { 
  label: string; 
  options: SelectOption[]; 
  value: string; 
  onChange: (val: string) => void;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.id === value);

  return (
    <div className="relative group mb-8" ref={containerRef}>
      <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 block ml-1 transition-colors group-focus-within:text-mustard">
        {label}
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
  onChange 
}: { 
  label: string; 
  options: SelectOption[]; 
  selectedValues: string[]; 
  onChange: (vals: string[]) => void;
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
        {label}
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

export const BrandPartnershipForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Contact & Asset
    fullName: "",
    companyName: "",
    whatsapp: "",
    altContact: "",
    email: "",
    cityResidence: "",
    assetType: "",
    propertyName: "",
    fullAddress: "",
    googlePin: "",
    cityProperty: "",
    state: "",
    country: "India",
    
    // Step 2: Commercial Logic & Specs
    projectStatus: "",
    partnershipInterest: [] as string[],
    roomsCount: "",
    plotArea: "",
    constArea: "",
    floorsCount: "",
    parkingCap: "",
    banquetCap: "",
    restCap: "",
    
    // Step 3: Operations, Legal & Final
    amenities: [] as string[],
    monthlyRev: "",
    expectedLease: "",
    occupancy: "",
    existingBrand: "",
    ownershipType: "",
    isTitleClear: "",
    approvals: "",
    vision: "",
    timeline: "",
    bestTime: "",
    message: ""
  });

  const [attachedFiles, setAttachedFiles] = useState<{ name: string; content: string }[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        setAttachedFiles(prev => [...prev, { name: file.name, content: reader.result as string }]);
      };
      reader.readAsDataURL(file);
    });
    toast.success(`${files.length} file(s) attached.`);
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const assetOptions = [
    { id: "hotel", label: "Hotel" },
    { id: "resort", label: "Resort" },
    { id: "boutique", label: "Boutique Hotel" },
    { id: "commercial", label: "Commercial Asset" },
    { id: "development", label: "New Development" },
    { id: "other", label: "Other" }
  ];

  const statusOptions = [
    { id: "greenfield", label: "Greenfield" },
    { id: "bts", label: "Build to Suit (BTS)" },
    { id: "interior", label: "Interior Phase" },
    { id: "operational", label: "Operational" },
    { id: "renovation", label: "Renovation" }
  ];

  const interestOptions = [
    { id: "lease", label: "Lease Agreement" },
    { id: "management", label: "Management Contract" },
    { id: "revenue_share", label: "Revenue Sharing" },
    { id: "mg_revenue", label: "MG + Revenue Sharing" },
    { id: "franchise", label: "Franchise" },
    { id: "hybrid", label: "Hybrid" },
    { id: "jv", label: "Joint Venture (JV)" },
    { id: "sale", label: "Sale" },
    { id: "other", label: "Other" }
  ];

  const amenityOptions = [
    { id: "restaurant", label: "Restaurant" },
    { id: "banquet", label: "Banquet" },
    { id: "pool", label: "Swimming Pool" },
    { id: "spa", label: "Spa" },
    { id: "gym", label: "Gym" },
    { id: "conference", label: "Conference Room" },
    { id: "rooftop", label: "Rooftop" },
    { id: "staff", label: "Staff Accommodation" },
    { id: "parking", label: "Parking" },
    { id: "other", label: "Other" }
  ];

  const ownershipOptions = [
    { id: "individual", label: "Individual" },
    { id: "multiple_partner", label: "Multiple Partner" },
    { id: "pvt_ltd", label: "Pvt Ltd" },
    { id: "other", label: "Other" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.whatsapp,
        subject: `Partnership Enquiry: ${formData.propertyName || formData.assetType}`,
        message: `
          Brand Partnership Enquiry Form Data:
          -----------------------------------
          CONTACT DETAILS
          Company: ${formData.companyName}
          Alt Contact: ${formData.altContact}
          City of Residence: ${formData.cityResidence}

          ASSET INFORMATION
          Asset Type: ${formData.assetType}
          Property Name: ${formData.propertyName}
          Address: ${formData.fullAddress}
          Google Pin: ${formData.googlePin}
          City: ${formData.cityProperty}, ${formData.state}, ${formData.country}

          PROJECT STATUS & INTEREST
          Status: ${formData.projectStatus}
          Interest: ${formData.partnershipInterest.join(", ")}

          PROPERTY SPECIFICATIONS
          Rooms: ${formData.roomsCount}
          Plot Area: ${formData.plotArea}
          Const. Area: ${formData.constArea}
          Floors: ${formData.floorsCount}
          Parking: ${formData.parkingCap}
          Banquet: ${formData.banquetCap}
          Restaurant: ${formData.restCap}

          AMENITIES & FINANCIALS
          Amenities: ${formData.amenities.join(", ")}
          Monthly Rev: ${formData.monthlyRev}
          Expected Lease: ${formData.expectedLease}
          Occupancy: ${formData.occupancy}%
          Brand: ${formData.existingBrand}

          LEGAL & ADDITIONAL
          Ownership: ${formData.ownershipType}
          Title Clear: ${formData.isTitleClear}
          Approvals: ${formData.approvals}
          Vision: ${formData.vision}
          Timeline: ${formData.timeline}
          Best Time to Contact: ${formData.bestTime}
          Message: ${formData.message}
        `,
        source: 'brand_partnership_form'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Partnership enquiry submitted successfully.");
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
        <h2 className="text-4xl font-serif text-black mb-6">Enquiry Logged.</h2>
        <p className="text-black/40 font-light max-w-md mx-auto mb-12">
          Your Brand Partnership enquiry has been received. Our strategic desk will review the assets and contact you within 48 business hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="bg-black text-white px-12 py-5 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-mustard transition-colors"
        >
          New Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white border border-black/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.04)]">
      {/* Progress Bar */}
      <div className="h-1 w-full bg-black/5">
        <motion.div 
          initial={{ width: "33.33%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
          className="h-full bg-mustard"
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Info */}
        <div className="lg:w-1/3 relative overflow-hidden bg-[#0A0A0A] min-h-[300px] lg:min-h-full">
          <img 
            src="/images/forms/brand_partnership_sidebar_v2.png" 
            alt="Vnexora Partnership" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 z-10 p-12 flex flex-col justify-between">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif italic text-white/90 leading-tight">
                  "Strategic brilliance <br /> meets operational <br /> excellence."
                </h3>
                <div className="w-12 h-[1px] bg-mustard/40" />
              </div>

              <div className="space-y-8">
                {[
                  { title: "Institutional Grade", desc: "Access global brand networks and institutional capital." },
                  { title: "Yield Engineering", desc: "Maximize ADR and RevPAR through data-driven strategies." },
                  { title: "Market Dominance", desc: "Transform your asset into a high-performance market leader." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="space-y-2"
                  >
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-mustard">{item.title}</span>
                    <p className="text-[11px] text-white/40 font-light leading-relaxed italic">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="w-10 h-px bg-mustard mb-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-mustard block mb-2">Step 0{step} / 03</span>
              <p className="text-white text-[12px] font-bold tracking-widest uppercase">
                {step === 1 && "Identity & Asset"}
                {step === 2 && "Logic & Specs"}
                {step === 3 && "Operations & Legal"}
              </p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="lg:w-2/3 p-10 md:p-16 lg:p-24 bg-white min-h-[600px] flex flex-col">
          <form onSubmit={handleSubmit} className="flex-grow">
            <AnimatePresence mode="wait">
              {/* STEP 1: CONTACT & ASSET */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <InputField label="Full Name" value={formData.fullName} onChange={v => setFormData({...formData, fullName: v})} placeholder="JOHN DOE" required />
                    <InputField label="Company / Ownership" value={formData.companyName} onChange={v => setFormData({...formData, companyName: v})} placeholder="CORP INC." />
                    <InputField label="WhatsApp Number" type="tel" value={formData.whatsapp} onChange={v => setFormData({...formData, whatsapp: v})} placeholder="+91 ..." required />
                    <InputField label="Email Address" type="email" value={formData.email} onChange={v => setFormData({...formData, email: v})} placeholder="CEO@CORP.COM" required />
                  </div>

                  <div className="pt-8 border-t border-black/5">
                    <CustomSelect 
                      label="Asset Type" 
                      options={assetOptions} 
                      value={formData.assetType} 
                      onChange={v => setFormData({...formData, assetType: v})} 
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-10">
                      <InputField label="Property Name" value={formData.propertyName} onChange={v => setFormData({...formData, propertyName: v})} placeholder="GRAND VISTA" required />
                      <InputField label="City" value={formData.cityProperty} onChange={v => setFormData({...formData, cityProperty: v})} placeholder="VARANASI" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-10">
                      <InputField label="Full Address" value={formData.fullAddress} onChange={v => setFormData({...formData, fullAddress: v})} placeholder="STREET, AREA, ETC." />
                      <InputField label="Google Maps Link / Pin" value={formData.googlePin} onChange={v => setFormData({...formData, googlePin: v})} placeholder="PASTE LINK HERE" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: LOGIC & SPECS */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <CustomSelect 
                      label="Project Status" 
                      options={statusOptions} 
                      value={formData.projectStatus} 
                      onChange={v => setFormData({...formData, projectStatus: v})} 
                    />
                    <MultiSelect 
                      label="Partnership Interest" 
                      options={interestOptions} 
                      selectedValues={formData.partnershipInterest} 
                      onChange={v => setFormData({...formData, partnershipInterest: v})} 
                    />
                  </div>
                  
                  <div className="pt-8 border-t border-black/5 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                    <InputField label="Keys / Rooms" type="number" value={formData.roomsCount} onChange={v => setFormData({...formData, roomsCount: v})} placeholder="50" />
                    <InputField label="Plot Area (Sq Ft)" type="number" value={formData.plotArea} onChange={v => setFormData({...formData, plotArea: v})} placeholder="10000" />
                    <InputField label="Floors" type="number" value={formData.floorsCount} onChange={v => setFormData({...formData, floorsCount: v})} placeholder="4" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <InputField label="Banquet Capacity (Pax)" type="number" value={formData.banquetCap} onChange={v => setFormData({...formData, banquetCap: v})} placeholder="200" />
                    <InputField label="Restaurant Capacity (Pax)" type="number" value={formData.restCap} onChange={v => setFormData({...formData, restCap: v})} placeholder="60" />
                  </div>
                </motion.div>
              )}

              {/* STEP 3: OPERATIONS & LEGAL */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <MultiSelect 
                    label="Amenities" 
                    options={amenityOptions} 
                    selectedValues={formData.amenities} 
                    onChange={v => setFormData({...formData, amenities: v})} 
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <InputField label="Monthly Revenue (in Lacs)" type="number" value={formData.monthlyRev} onChange={v => setFormData({...formData, monthlyRev: v})} placeholder="E.G. 15.00" />
                    <InputField label="Expected Lease / MG (in Lacs)" type="number" value={formData.expectedLease} onChange={v => setFormData({...formData, expectedLease: v})} placeholder="E.G. 5.00" />
                  </div>

                  <div className="pt-8 border-t border-black/5 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <CustomSelect 
                      label="Is Title Clear?" 
                      options={[{id: "yes", label: "Yes"}, {id: "no", label: "No"}]} 
                      value={formData.isTitleClear} 
                      onChange={v => setFormData({...formData, isTitleClear: v})} 
                    />
                    <CustomSelect 
                      label="Ownership Type" 
                      options={ownershipOptions} 
                      value={formData.ownershipType} 
                      onChange={v => setFormData({...formData, ownershipType: v})} 
                    />
                  </div>

                  <div className="group pt-8 border-t border-black/5">
                    <label className="text-[11px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 block ml-1">Asset Teasers / Financials (Uploads)</label>
                    <div className="space-y-4">
                      <div className="relative">
                        <input 
                          type="file" 
                          multiple
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                        />
                        <div className="w-full bg-white border-b border-black/10 py-4 px-1 flex items-center justify-between group-hover:border-mustard transition-colors">
                          <span className="text-sm font-bold tracking-widest uppercase text-black/20 italic">
                            {attachedFiles.length > 0 ? `${attachedFiles.length} files selected` : "Select Files for Mandate"}
                          </span>
                          <Upload size={16} className="text-mustard" />
                        </div>
                      </div>

                      {attachedFiles.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {attachedFiles.map((file, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-black/[0.02] border border-black/5 px-4 py-2 rounded-lg">
                              <FileText size={14} className="text-mustard" />
                              <span className="text-[10px] font-bold text-black/60 truncate max-w-[120px] uppercase tracking-wider">{file.name}</span>
                              <button type="button" onClick={() => removeFile(idx)} className="text-red-500 hover:text-red-700 transition-colors">
                                <X size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-[11px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 block ml-1">Additional Message</label>
                    <textarea 
                      className="w-full bg-white border-b border-black/10 py-4 px-1 outline-none focus:border-mustard transition-colors text-sm font-bold tracking-widest uppercase placeholder:text-black/10 min-h-[60px] resize-none"
                      placeholder="TELL US MORE ABOUT YOUR PROPERTY..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
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
                {isSubmitting ? "Processing..." : (step === 3 ? "Submit Request" : "Next Step")}
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
    <label className="text-[11px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 block ml-1 transition-colors group-focus-within:text-mustard">
      {label} {required && <span className="text-mustard">*</span>}
    </label>
    <input 
      required={required}
      type={type}
      className="w-full bg-white border-b border-black/10 py-4 px-1 outline-none focus:border-mustard transition-colors text-sm font-bold tracking-widest uppercase placeholder:text-black/10"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

