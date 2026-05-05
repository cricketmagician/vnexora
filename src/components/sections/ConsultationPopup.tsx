"use client";

import React, { useState, useRef, useEffect } from "react";
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
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";
import { useConsultation } from "@/context/ConsultationContext";

// --- REUSABLE COMPONENTS (Mini versions for the popup) ---

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

export const ConsultationPopup = () => {
  const { isOpen, closeConsultation } = useConsultation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Contact Details
    fullName: "",
    hotelName: "",
    whatsapp: "",
    email: "",
    city: "",
    country: "India",
    
    // Property Information
    propertyType: "",
    roomsCount: "",
    occupancy: "",
    avgRate: "",

    // Focus & Challenges
    focus: [] as string[],
    challenges: [] as string[],

    // Schedule & Notes
    prefTime: "",
    bestTimeToContact: "",
    additionalNotes: ""
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

  const propertyTypeOptions = [
    { id: "hotel", label: "Hotel" },
    { id: "resort", label: "Resort" },
    { id: "boutique", label: "Boutique Hotel" },
    { id: "villa", label: "Villa" },
    { id: "apartment", label: "Serviced Apartment" },
    { id: "other", label: "Other" }
  ];

  const focusOptions = [
    { id: "profitability", label: "Boost Profitability" },
    { id: "bookings", label: "Increase Direct Bookings" },
    { id: "rev_opt", label: "Revenue Optimization" },
    { id: "ota_dep", label: "Reduce OTA Dependency" },
    { id: "cost_control", label: "Cost Control" },
    { id: "loyalty", label: "Improve Guest Loyalty" },
    { id: "decisions", label: "Better Business Decisions" },
    { id: "ai", label: "AI & Automation" },
    { id: "competitors", label: "Stay Ahead of Competitors" },
    { id: "other", label: "Other" }
  ];

  const challengeOptions = [
    { id: "low_occ", label: "Low Occupancy" },
    { id: "low_rev", label: "Low Revenue" },
    { id: "high_costs", label: "High Costs" },
    { id: "poor_reviews", label: "Poor Reviews" },
    { id: "weak_brand", label: "Weak Branding" },
    { id: "no_strategy", label: "No Clear Strategy" },
    { id: "manual_ops", label: "Manual Operations" }
  ];

  const scheduleOptions = [
    { id: "today", label: "Today" },
    { id: "tomorrow", label: "Tomorrow" },
    { id: "this_week", label: "This Week" },
    { id: "next_week", label: "Next Week" }
  ];

  const contactTimeOptions = [
    { id: "morning", label: "Morning" },
    { id: "afternoon", label: "Afternoon" },
    { id: "evening", label: "Evening" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(prev => prev + 1);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.whatsapp,
        subject: `20-Min Consultation Request: ${formData.hotelName}`,
        message: `
          20-Min Consultation Request Data:
          -----------------------------------
          CONTACT DETAILS
          Hotel/Company: ${formData.hotelName}
          WhatsApp: ${formData.whatsapp}
          City/Country: ${formData.city}, ${formData.country}

          PROPERTY INFORMATION
          Property Type: ${formData.propertyType}
          Rooms/Keys: ${formData.roomsCount}
          Occupancy: ${formData.occupancy}%
          Avg. Room Rate: ${formData.avgRate}

          CONSULTATION FOCUS
          Focus Areas: ${formData.focus.join(", ")}

          CURRENT CHALLENGES
          Challenges: ${formData.challenges.join(", ")}

          SCHEDULE & NOTES
          Pref. Consult Time: ${formData.prefTime}
          Best Time to Contact: ${formData.bestTimeToContact}
          Notes: ${formData.additionalNotes}
        `,
        source: 'consultation_popup'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Consultation request submitted.");
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
            onClick={closeConsultation}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full md:w-[95vw] md:h-[90vh] bg-white shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={closeConsultation}
              className="absolute top-10 right-10 z-[120] text-black/20 hover:text-mustard transition-all p-3 hover:rotate-90"
            >
              <X size={36} strokeWidth={1} />
            </button>
 
            {/* Sidebar Branding - Cinematic Expansive */}
            <div className="md:w-[45%] relative overflow-hidden bg-[#0A0A0A] hidden md:block">
               <img 
                 src="/images/sections/partnership/consultation_desk.png" 
                 alt="Vnexora Consultation" 
                 className="absolute inset-0 w-full h-full object-cover brightness-[0.8] scale-105"
               />
               <div className="absolute inset-0 bg-black/40 z-10" />

               {/* Integrated Sidebar Info */}
               <div className="absolute inset-y-0 right-0 w-[55%] bg-[#0A0A0A]/95 z-20 p-16 flex flex-col justify-between border-l border-white/5 shadow-[-50px_0_100px_rgba(0,0,0,0.5)]">
                  <div className="space-y-12 mt-12">
                     <div className="w-12 h-px bg-mustard mb-8" />
                     <h2 className="text-6xl font-serif text-white leading-[1.05] tracking-tighter">
                        Executive <br /> <span className="text-mustard italic font-light">Consultation.</span>
                     </h2>
                     <p className="text-white/40 text-[11px] leading-relaxed tracking-[0.3em] font-black uppercase max-w-[200px]">
                        20-Minute Strategic <br /> Performance Review.
                     </p>
                     
                     <div className="space-y-10 pt-10">
                        {[1, 2, 3].map((i) => (
                           <div key={i} className="flex items-center gap-8 group cursor-default">
                              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-mustard transition-colors duration-500">
                                 <div className="w-2 h-2 bg-mustard rounded-full shadow-[0_0_15px_rgba(227,180,72,0.8)]" />
                              </div>
                              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent group-hover:from-mustard/30 transition-all duration-700" />
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-8">
                     <div className="space-y-3">
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.6em] italic">Step 0{step} / 03</p>
                        <h3 className="text-white text-2xl font-serif tracking-tight uppercase leading-none">Consultation Brief</h3>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form Area */}
            <div className="flex-1 bg-white p-12 md:p-32 overflow-y-auto overscroll-contain flex flex-col justify-center" data-lenis-prevent>
               {isSubmitted ? (
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="h-full flex flex-col items-center justify-center text-center space-y-12"
                 >
                    <div className="w-32 h-32 bg-mustard/5 rounded-full flex items-center justify-center border border-mustard/10 shadow-[0_30px_60px_rgba(227,180,72,0.1)]">
                       <CheckCircle2 size={56} className="text-mustard" strokeWidth={1} />
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-5xl font-serif text-black tracking-tighter uppercase">Logged.</h3>
                       <p className="text-black/40 text-[16px] font-medium max-w-sm mx-auto leading-relaxed italic">
                          Our strategic desk will contact you shortly to confirm your 20-min consultation slot.
                       </p>
                    </div>
                    <button 
                      onClick={closeConsultation}
                      className="bg-black text-white px-20 py-7 font-black text-[11px] tracking-[0.6em] uppercase hover:bg-mustard hover:text-black transition-all shadow-[0_40px_80px_rgba(0,0,0,0.2)]"
                    >
                      Return to Interface
                    </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8">
                   <AnimatePresence mode="wait">
                     {step === 1 && (
                       <motion.div
                         key="pop-step1"
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         className="space-y-8"
                       >
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <InputField label="Full Name" value={formData.fullName} onChange={v => setFormData({...formData, fullName: v})} placeholder="JOHN DOE" required />
                            <InputField label="Hotel / Company Name" value={formData.hotelName} onChange={v => setFormData({...formData, hotelName: v})} placeholder="THE GRAND" required />
                            <InputField label="WhatsApp Number" type="tel" value={formData.whatsapp} onChange={v => setFormData({...formData, whatsapp: v})} placeholder="+91 ..." required />
                            <InputField label="Email Address" type="email" value={formData.email} onChange={v => setFormData({...formData, email: v})} placeholder="CEO@CORP.COM" required />
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <InputField label="City" value={formData.city} onChange={v => setFormData({...formData, city: v})} placeholder="E.G. VARANASI" required />
                            <InputField label="Country" value={formData.country} onChange={v => setFormData({...formData, country: v})} placeholder="INDIA" />
                         </div>
                       </motion.div>
                     )}

                     {step === 2 && (
                       <motion.div
                         key="pop-step2"
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         className="space-y-8"
                       >
                         <CustomSelect 
                            required
                            label="Property Type" 
                            options={propertyTypeOptions} 
                            value={formData.propertyType} 
                            onChange={v => setFormData({...formData, propertyType: v})} 
                         />
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <InputField label="Rooms / Keys" type="number" value={formData.roomsCount} onChange={v => setFormData({...formData, roomsCount: v})} placeholder="50" required />
                            <InputField label="Occupancy %" type="number" value={formData.occupancy} onChange={v => setFormData({...formData, occupancy: v})} placeholder="60" />
                            <InputField label="Avg Rate (Optional)" type="number" value={formData.avgRate} onChange={v => setFormData({...formData, avgRate: v})} placeholder="5000" />
                         </div>
                         <MultiSelect 
                            label="Consultation Focus" 
                            options={focusOptions} 
                            selectedValues={formData.focus} 
                            onChange={v => setFormData({...formData, focus: v})} 
                         />
                       </motion.div>
                     )}

                     {step === 3 && (
                       <motion.div
                         key="pop-step3"
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         className="space-y-8"
                       >
                         <MultiSelect 
                            label="Current Challenges" 
                            options={challengeOptions} 
                            selectedValues={formData.challenges} 
                            onChange={v => setFormData({...formData, challenges: v})} 
                         />
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <CustomSelect 
                               required
                               label="Pref. Consultation Time" 
                               options={scheduleOptions} 
                               value={formData.prefTime} 
                               onChange={v => setFormData({...formData, prefTime: v})} 
                            />
                            <CustomSelect 
                               label="Best Time to Contact" 
                               options={contactTimeOptions} 
                               value={formData.bestTimeToContact} 
                               onChange={v => setFormData({...formData, bestTimeToContact: v})} 
                            />
                         </div>
                         <div className="group">
                            <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-2 block ml-1">Additional Notes</label>
                            <textarea 
                              className="w-full bg-white border-b border-black/10 py-3 px-1 outline-none focus:border-mustard transition-colors text-xs font-bold tracking-widest uppercase placeholder:text-black/10 min-h-[60px] resize-none"
                              placeholder="BRIEFLY DESCRIBE YOUR CHALLENGES..."
                              value={formData.additionalNotes}
                              onChange={e => setFormData({...formData, additionalNotes: e.target.value})}
                            />
                         </div>
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
                        className="flex items-center gap-10 bg-black text-white px-24 py-8 font-black text-[12px] tracking-[0.7em] uppercase hover:bg-mustard hover:text-black transition-all group shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
                      >
                        {isSubmitting ? "PROCESSING..." : (step === 3 ? "Book My 20-Min Consult" : "Next Step")}
                        {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform duration-700" />}
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
