"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, CheckCircle2, ShieldCheck, Clock, Calendar, MapPin, Video, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string; // 'video' | 'office' | 'site'
  subject?: string | null;
}

export const BookingModal = ({ isOpen, onClose, type, subject }: BookingModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Custom Popover States
  const [openPopover, setOpenPopover] = useState<'date' | 'time' | null>(null);
  
  // Initialize with tomorrow's date
  const tomorrow = new Date(Date.now() + 86400000);
  const [currentDateView, setCurrentDateView] = useState(new Date(tomorrow));
  
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    platform: "Google Meet",
    office: "Varanasi",
    date: tomorrow.toISOString().split('T')[0],
    time: "11:00",
  });

  const offices = [
    { name: "Varanasi", desc: "BHU Campus Innovation Hub" }
  ];

  const platforms = ["Google Meet", "Zoom", "WhatsApp"];

  // Calendar Logic
  const generateDays = () => {
    const year = currentDateView.getFullYear();
    const month = currentDateView.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) {
        const d = new Date(year, month, i);
        // adjust for timezone offset so ISOString outputs the correct local day
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
        days.push(d);
    }
    return days;
  };

  // Time Logic
  const availableTimes: string[] = [];
  for (let h = 9; h <= 18; h++) {
    availableTimes.push(`${String(h).padStart(2, '0')}:00`);
    availableTimes.push(`${String(h).padStart(2, '0')}:30`);
  }

  const handleLocateMe = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          if (data && data.display_name) {
            setFormData(prev => ({ ...prev, address: data.display_name }));
          } else {
            setFormData(prev => ({ ...prev, address: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` }));
          }
        } catch (e) {
          setFormData(prev => ({ ...prev, address: `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}` }));
        }
        setIsLocating(false);
      }, () => {
        alert("Please allow location access to use this feature.");
        setIsLocating(false);
      });
    } else {
      alert("Geolocation is not supported by your browser");
      setIsLocating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const bookingMessage = `Requested ${type.toUpperCase()} session on ${formData.date} at ${formData.time}. 
Details: ${formData.platform || formData.office || formData.address || 'Standard Appointment'}`;

    try {
      const result = await submitInquiry({
        fullName: formData.name,
        email: formData.contact.includes('@') ? formData.contact : `${formData.contact}@placeholder.com`, // Basic fallback
        phone: formData.contact.match(/[0-9]{7,}/) ? formData.contact : undefined,
        subject: subject || `${type.toUpperCase()} Session Booking`,
        message: bookingMessage,
        source: 'booking_modal'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Institutional session reserved. We will confirm shortly.");
      } else {
        setError(result.message);
        toast.error(result.message);
      }
    } catch (err) {
      const msg = "An institutional processing error occurred.";
      setError(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate Google Calendar URL for the success screen
  const generateCalendarUrl = () => {
    let loc = "";
    if (type === "video") loc = formData.platform;
    else if (type === "office") loc = `Vnexora ${formData.office} Office`;
    else loc = formData.address || "Client Property";

    const eventTitle = encodeURIComponent(`Vnexora ${type === 'site' ? 'Site' : type === 'office' ? 'Office' : 'Video'} Visit: ${formData.name}`);
    const eventDetails = encodeURIComponent(`Client Contact: ${formData.contact}\n\nWe look forward to meeting you.`);
    const eventLocation = encodeURIComponent(loc);

    const startDateStr = formData.date.replace(/-/g, '');
    const startTimeStr = formData.time.replace(/:/g, '') + '00';

    const [hours, minutes] = formData.time.split(':');
    const endHours = String((parseInt(hours) + 1) % 24).padStart(2, '0');
    const endTimeStr = endHours + minutes + '00';

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDateStr}T${startTimeStr}/${startDateStr}T${endTimeStr}&details=${eventDetails}&location=${eventLocation}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 text-left"
          onWheel={(e) => { e.stopPropagation(); }}
          onTouchMove={(e) => { e.stopPropagation(); }}
        >
          {/* UNDERSTATED OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A0A0A]/60 backdrop-blur-sm"
          />

          {/* QUIET LUXURY MODAL CONTAINER - Smaller Form Factor and Hug Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            className="relative w-full max-w-3xl bg-[#E8DCCB] shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] flex flex-col md:flex-row border border-white/20 max-h-[90vh]"
          >
            {/* SUBTLE GRAIN TEXTURE OVERLAY */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com/patterns/p6-mini.png')]" />

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#5B1C1C]/40 hover:text-[#5B1C1C] transition-colors z-50"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {!isSubmitted ? (
              <>
                {/* LEFT: FORM PANEL */}
                <div className="relative z-10 flex-1 p-6 md:p-10 overflow-y-auto scrollbar-none" onClick={() => { if(openPopover) setOpenPopover(null) }}>
                  <div className="mb-6">
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[#A67C52] text-[10px] font-bold tracking-[0.4em] uppercase block mb-3"
                    >
                      {subject ? subject : (type === "video" ? "Video Consultation" : type === "office" ? "Office Visit" : "Site Visit Request")}
                    </motion.span>
                    <h2 className="text-3xl font-serif text-[#5B1C1C] leading-[1.1] mb-2">
                       {type === "video" ? "Strategy Session." : "Elevate Your Asset."}
                    </h2>
                    <p className="text-[#5B1C1C]/60 text-xs font-light leading-relaxed max-w-[280px]">
                      {type === "video" ? "Schedule a digital consultation with our advisors." : "Connect with our advisory team to unlock hidden potential."}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 max-w-[320px]">
                    <div className="group">
                      <label className="text-[9px] uppercase tracking-widest font-bold text-[#5B1C1C]/40 mb-2 block ml-1 transition-colors group-focus-within:text-[#A67C52]">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/40 border border-[#5B1C1C]/10 rounded-xl px-4 py-3 text-[#5B1C1C] focus:bg-white focus:border-[#A67C52] outline-none transition-all text-sm placeholder:text-[#5B1C1C]/20 font-light shadow-sm"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    
                    <div className="group">
                      <label className="text-[9px] uppercase tracking-widest font-bold text-[#5B1C1C]/40 mb-2 block ml-1 transition-colors group-focus-within:text-[#A67C52]">
                        Contact Details
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/40 border border-[#5B1C1C]/10 rounded-xl px-4 py-3 text-[#5B1C1C] focus:bg-white focus:border-[#A67C52] outline-none transition-all text-sm placeholder:text-[#5B1C1C]/20 font-light shadow-sm"
                        placeholder="Email or WhatsApp"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      />
                    </div>

                    {/* DYNAMIC FIELD: PLATFORM, ADDRESS, OR OFFICE SELECTOR */}
                    {type === "video" && (
                        <div className="group pt-1">
                          <label className="text-[9px] uppercase tracking-widest font-bold text-[#5B1C1C]/40 mb-3 block ml-1 transition-colors group-focus-within:text-[#A67C52]">
                            Meeting Platform
                          </label>
                          <div className="flex gap-2">
                            {platforms.map(p => (
                                <button
                                    key={p}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, platform: p })}
                                    className={cn(
                                        "flex-1 py-3 text-[9px] uppercase font-bold tracking-widest rounded-xl border transition-all duration-300",
                                        formData.platform === p ? "bg-[#A67C52] text-[#E8DCCB] border-[#A67C52] shadow-md shadow-[#A67C52]/20" : "bg-white/30 border-[#5B1C1C]/5 text-[#5B1C1C]/60 hover:bg-white/50"
                                    )}
                                >
                                    {p.split(' ')[0]}
                                </button>
                            ))}
                          </div>
                        </div>
                    )}

                    {type === "office" && (
                         <div className="group pt-1">
                            <label className="text-[9px] uppercase tracking-widest font-bold text-[#5B1C1C]/40 mb-3 block ml-1 transition-colors group-focus-within:text-[#A67C52]">
                                Visit Location
                            </label>
                             <div className="flex flex-col gap-2">
                                <div className="w-full px-4 py-3 text-left rounded-xl border bg-[#A67C52] text-[#E8DCCB] border-[#A67C52] shadow-md flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold tracking-widest">Varanasi Innovation Hub</span>
                                        <span className="text-[8px] font-light opacity-80 whitespace-nowrap">BHU Campus, Varanasi - 221005</span>
                                    </div>
                                    <CheckCircle2 size={12}/>
                                </div>
                             </div>
                         </div>
                    )}

                    {type === "site" && (
                        <div className="group relative pt-1">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-[#5B1C1C]/40 mb-2 block ml-1 transition-colors group-focus-within:text-[#A67C52]">
                            Property Address
                        </label>
                        <div className="relative">
                            <textarea
                            required
                            rows={2}
                            className="w-full bg-white/40 border border-[#5B1C1C]/10 rounded-xl px-4 py-3 text-[#5B1C1C] focus:bg-white focus:border-[#A67C52] outline-none transition-all text-sm placeholder:text-[#5B1C1C]/20 font-light shadow-sm resize-none pr-10 scrollbar-none"
                            placeholder="Enter location or tap to locate"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                            <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); handleLocateMe(); }}
                            disabled={isLocating}
                            className="absolute right-3 top-3 text-[#5B1C1C]/40 hover:text-[#A67C52] transition-colors disabled:opacity-50"
                            title="Use Current Location"
                            >
                            {isLocating ? <MapPin size={16} className="animate-pulse text-[#A67C52]" /> : <MapPin size={16} />}
                            </button>
                        </div>
                        </div>
                    )}

                    <div className="flex gap-4 pt-1 pb-2">
                       {/* DATE PICKER POPOVER TRIGGER */}
                      <div className="group flex-1 relative">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-[#5B1C1C]/40 mb-2 block ml-1 transition-colors group-focus-within:text-[#A67C52]">
                          Date
                        </label>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setOpenPopover(openPopover === 'date' ? null : 'date'); }}
                          className="w-full bg-white/40 border border-[#5B1C1C]/10 rounded-xl px-4 py-3 text-[#5B1C1C] focus:bg-white focus:border-[#A67C52] outline-none transition-all text-sm font-light shadow-sm text-left flex justify-between items-center"
                        >
                          {new Date(formData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          <Calendar size={13} className="text-[#A67C52] opacity-80" />
                        </button>
                        
                        {/* CUSTOM DATE POPOVER - OPENS UPWARD TO PREVENT BOTTOM CLIPPING */}
                        <AnimatePresence>
                          {openPopover === 'date' && (
                            <motion.div
                              onClick={(e) => e.stopPropagation()}
                              onWheel={(e) => e.stopPropagation()}
                              onTouchMove={(e) => e.stopPropagation()}
                              initial={{ opacity: 0, scale: 0.95, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute bottom-full mb-3 left-0 bg-[#F6F1EB] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-[#5B1C1C]/10 w-[270px] z-[150] overflow-hidden overscroll-contain"
                            >
                              <div className="p-3 bg-[#5B1C1C] text-[#E8DCCB] flex justify-between items-center">
                                <button type="button" onClick={() => setCurrentDateView(new Date(currentDateView.setMonth(currentDateView.getMonth() - 1)))} className="p-1 hover:bg-white/10 rounded-lg transition-colors"><ChevronLeft size={16}/></button>
                                <span className="font-serif text-xs tracking-wide">
                                  {currentDateView.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                </span>
                                <button type="button" onClick={() => setCurrentDateView(new Date(currentDateView.setMonth(currentDateView.getMonth() + 1)))} className="p-1 hover:bg-white/10 rounded-lg transition-colors"><ChevronRight size={16}/></button>
                              </div>
                              <div className="p-4 bg-white/50 backdrop-blur-md">
                                <div className="grid grid-cols-7 gap-1 mb-2 text-center text-[9px] font-bold tracking-widest text-[#5B1C1C]/40">
                                  {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d}>{d}</div>)}
                                </div>
                                <div className="grid grid-cols-7 gap-1">
                                  {generateDays().map((d, i) => {
                                    if (!d) return <div key={`empty-${i}`} />
                                    const dateStr = d.toISOString().split('T')[0];
                                    const isSelected = formData.date === dateStr;
                                    const isPast = d < new Date(new Date().setHours(0,0,0,0));
                                    
                                    return (
                                      <button
                                        key={dateStr}
                                        type="button"
                                        disabled={isPast}
                                        onClick={() => { setFormData({ ...formData, date: dateStr }); setOpenPopover(null); }}
                                        className={cn(
                                          "w-7 h-7 flex items-center justify-center rounded-full text-xs transition-all mx-auto",
                                          isSelected ? "bg-[#A67C52] text-[#E8DCCB] font-bold shadow-md" : 
                                          isPast ? "opacity-30 cursor-not-allowed text-[#5B1C1C]/50" : "text-[#5B1C1C] hover:bg-[#A67C52]/10"
                                        )}
                                      >
                                        {d.getDate()}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* TIME PICKER POPOVER TRIGGER */}
                      <div className="group flex-1 relative">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-[#5B1C1C]/40 mb-2 block ml-1 transition-colors group-focus-within:text-[#A67C52]">
                          Time
                        </label>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setOpenPopover(openPopover === 'time' ? null : 'time'); }}
                          className="w-full bg-white/40 border border-[#5B1C1C]/10 rounded-xl px-4 py-3 text-[#5B1C1C] focus:bg-white focus:border-[#A67C52] outline-none transition-all text-sm font-light shadow-sm text-left flex justify-between items-center"
                        >
                          {(() => {
                            const [h, m] = formData.time.split(':');
                            let hNum = parseInt(h);
                            const ampm = hNum >= 12 ? 'PM' : 'AM';
                            hNum = hNum % 12 || 12;
                            return `${hNum}:${m} ${ampm}`;
                          })()}
                          <Clock size={13} className="text-[#A67C52] opacity-80" />
                        </button>
                        
                        {/* CUSTOM TIME POPOVER - OPENS UPWARD TO PREVENT BOTTOM CLIPPING */}
                        <AnimatePresence>
                          {openPopover === 'time' && (
                            <motion.div
                              onClick={(e) => e.stopPropagation()}
                              onWheel={(e) => e.stopPropagation()}
                              onTouchMove={(e) => e.stopPropagation()}
                              initial={{ opacity: 0, scale: 0.95, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute bottom-full left-0 mb-3 bg-[#F6F1EB] rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-[#5B1C1C]/10 w-[160px] z-[150] max-h-[220px] overflow-y-auto overscroll-contain p-2 scrollbar-thin scrollbar-thumb-[#5B1C1C]/10"
                            >
                              <div className="flex flex-col gap-1 pr-1">
                                {availableTimes.map((t) => {
                                  const [h, m] = t.split(':');
                                  let hNum = parseInt(h);
                                  const ampm = hNum >= 12 ? 'PM' : 'AM';
                                  hNum = hNum % 12 || 12;
                                  const display = `${hNum}:${m} ${ampm}`;
                                  
                                  const isSelected = formData.time === t;
                                  return (
                                    <button
                                      key={t}
                                      type="button"
                                      onClick={() => { setFormData({ ...formData, time: t }); setOpenPopover(null); }}
                                      className={cn(
                                        "px-4 py-3 text-sm rounded-xl text-left transition-colors font-light relative",
                                        isSelected ? "bg-[#A67C52] text-[#E8DCCB] font-bold shadow-sm" : "text-[#5B1C1C] hover:bg-[#5B1C1C]/5"
                                      )}
                                    >
                                      {display}
                                    </button>
                                  )
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="pt-2">
                      {error && <p className="text-red-800 bg-red-100 p-3 rounded-lg text-[10px] uppercase font-bold tracking-widest mb-4 border border-red-200">{error}</p>}
                      <button
                        disabled={isSubmitting}
                        className={cn(
                          "w-full bg-[#A67C52] text-[#E8DCCB] hover:bg-[#8B6745] rounded-xl py-4 flex items-center justify-center gap-3 group transition-all duration-500 shadow-md hover:shadow-[#A67C52]/20 hover:-translate-y-0.5",
                          isSubmitting && "opacity-70 cursor-not-allowed"
                        )}
                      >
                        <span className="text-[10px] tracking-[0.2em] font-bold uppercase">
                          {isSubmitting ? "Coordinating..." : "Schedule Session"}
                        </span>
                        {!isSubmitting && <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                      </button>
                    </div>

                    <p className="text-[9px] text-[#5B1C1C]/30 text-center font-light uppercase tracking-widest mt-4">
                      Confidential. No obligation.
                    </p>
                  </form>
                </div>

                {/* RIGHT: TRUST PANEL (Adaptive) */}
                <div className="relative z-10 w-full md:w-[260px] bg-[#5B1C1C] p-8 md:p-10 text-[#E8DCCB] flex flex-col justify-between border-l border-white/5 pointer-events-none overflow-hidden">
                  {/* BESPOKE WATERMARK (IMG_5397) - Refined Scale, Opacity & Position */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] pointer-events-none z-0 overflow-hidden">
                    <Image 
                      src="/images/watermark.png" 
                      alt="Vnexora Watermark" 
                      fill
                      className="object-contain rotate-[-5deg] scale-110 translate-y-12 brightness-110"
                    />
                  </div>

                  <div className="space-y-8 relative z-10">
                    {/* BIRD LOGO BRANDING */}
                    <div className="relative w-12 h-12 mb-2">
                        <Image 
                        src="/images/vnexora-bird-full.png"
                        alt="Vnexora Bird Logo"
                        fill
                        className="object-contain brightness-125"
                        />
                    </div>

                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A67C52] border border-white/10">
                        {type === 'video' ? <Video size={20}/> : type === 'office' ? <Building size={20}/> : <MapPin size={20} />}
                      </div>
                      <h4 className="text-xl font-serif italic font-medium tracking-tight">Vnexora Trust</h4>
                      <p className="text-[13px] text-[#E8DCCB]/80 leading-relaxed font-medium">
                        {type === 'video' ? "Seamless global connectivity for boutique hotel owners seeking immediate asset review." : "Direct access to our executive desks for institutional-grade development advisories."}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 text-[#A67C52]">
                          <ShieldCheck size={14} />
                        </div>
                        <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#E8DCCB]">Discreet</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 text-[#A67C52]">
                          <Clock size={14} />
                        </div>
                        <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#E8DCCB]">24/7 Ops</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/5 relative">
                    <div className="absolute inset-x-[-12px] bottom-[-12px] top-4 bg-[#A67C52]/5 rounded-2xl pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#A67C52]">Verification</p>
                        <ShieldCheck size={10} className="text-[#A67C52] animate-pulse" />
                      </div>
                      <p className="text-[12px] text-[#E8DCCB] leading-relaxed font-semibold italic">
                        Trusted by 200+ properties.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative z-10 w-full p-12 md:p-16 flex flex-col items-center text-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-[#5B1C1C] rounded-full flex items-center justify-center mb-6 border border-[#A67C52]/30 shadow-xl"
                >
                  <CheckCircle2 size={24} className="text-[#A67C52]" />
                </motion.div>
                
                <h2 className="text-3xl font-serif text-[#5B1C1C] mb-3">
                  Reserved.
                </h2>
                
                <p className="text-[#5B1C1C]/60 text-sm max-w-sm leading-relaxed mb-8 font-light">
                  Your Vnexora session is confirmed for <strong className="font-bold text-[#5B1C1C]">{new Date(formData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric'})} at {(() => {
                            const [h, m] = formData.time.split(':');
                            let hNum = parseInt(h);
                            const ampm = hNum >= 12 ? 'PM' : 'AM';
                            hNum = hNum % 12 || 12;
                            return `${hNum}:${m} ${ampm}`;
                          })()}</strong>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[320px]">
                  <a 
                    href={generateCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#A67C52] text-[#E8DCCB] px-6 py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#8B6745] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Auto Sync
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 bg-[#5B1C1C] text-[#E8DCCB] px-6 py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#3D1414] transition-all shadow-md"
                  >
                    Return
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
