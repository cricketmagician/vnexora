"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  ArrowRight, 
  Shield, 
  Globe, 
  Users, 
  Trophy, 
  Handshake, 
  Zap,
  Users2,
  Megaphone,
  UserPlus2,
  TrendingUp,
  Hotel,
  Cpu,
  Monitor,
  Paintbrush,
  Key,
  Store,
  Home,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

const inquiryPillars = [
  {
    title: "Business & Partnerships",
    options: [
      { id: "brand_collab", label: "Brand collaboration", icon: Users2 },
      { id: "branding_promo", label: "Branding and Promotion", icon: Megaphone },
      { id: "talent_staffing", label: "Talent and Staffing", icon: UserPlus2 },
      { id: "biz_dev", label: "Business development and growth", icon: TrendingUp },
    ]
  },
  {
    title: "Management & Design",
    options: [
      { id: "hotel_ops", label: "Hotel operations", icon: Hotel },
      { id: "ai_guest", label: "AI Guest Management Platform", icon: Cpu },
      { id: "tech_support", label: "Web / App / AI / Tech Support", icon: Monitor },
      { id: "arch_interior", label: "Architecture & Interior", icon: Paintbrush },
    ]
  },
  {
    title: "Real Estate & Investment",
    options: [
      { id: "buy_sell_hotel", label: "Buy/Sell Hotels & Resorts", icon: Key },
      { id: "comm_space", label: "Commercial Space Lease/Sale", icon: Store },
      { id: "residential", label: "Residential Buy/Sell", icon: Home },
      { id: "partner_us", label: "Partner with Us", icon: Handshake },
    ]
  }
];

const secondaryOptions = [
  { id: "general", label: "General Inquiry", icon: MessageSquare },
  { id: "career", label: "Career Inquiry", icon: UserPlus2 },
];

export default function SayHelloPage() {
  const [selectedCat, setSelectedCat] = useState({ id: "general", label: "General Inquiry" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone || undefined,
        subject: selectedCat.label,
        message: formData.message || `No message provided. Interest: ${selectedCat.label}`,
        source: 'say_hello_portal'
      });

      if (result.success) {
        toast.success("Engagement mandate received. We will respond shortly.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Transmission error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black selection:bg-[#8B0000] selection:text-white font-serif pt-20">
      
      {/* ── CINEMATIC HERO (SPLIT) ── */}
      <section className="relative h-[65vh] flex flex-col md:flex-row overflow-hidden">
        {/* Left: Image */}
        <div className="md:w-1/2 relative h-1/2 md:h-full">
          <Image 
            src="/images/hero/ultimate_luxury.png" 
            alt="Vnexora Concierge" 
            fill 
            className="object-cover brightness-75 scale-105" 
          />
        </div>
        
        {/* Right: Solid Identity Block */}
        <div className="md:w-1/2 bg-[#8B0000] flex flex-col justify-center px-12 md:px-24">
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2 }}
             className="space-y-6"
           >
              <div className="flex items-center gap-4 text-white/60">
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Say Hello</span>
                <div className="w-12 h-px bg-white/20" />
              </div>
              <h1 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-tighter leading-none">
                Vnexora <br />
                Hospitality <br />
                Group
              </h1>
           </motion.div>
        </div>

        {/* Floating Scroll Down */}
        <div className="absolute top-1/2 right-12 md:top-auto md:bottom-20 -translate-y-1/2 md:translate-y-0">
           <div className="flex flex-col items-center gap-6">
              <div className="w-px h-16 bg-white/20" />
              <ArrowRight className="w-4 h-4 text-white rotate-90" />
           </div>
        </div>
      </section>

      {/* ── NARRATIVE HEADER ── */}
      <section className="py-24 md:py-32 border-b border-black/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-5xl md:text-8xl font-serif text-black leading-none">
                Reach Out & <br />
                <span className="relative">
                  Say Hello.
                  <motion.svg 
                    className="absolute -bottom-4 left-0 w-full h-4"
                    viewBox="0 0 400 20"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  >
                    <path 
                      d="M 5 15 Q 100 5 200 15 Q 300 25 395 15" 
                      fill="transparent" 
                      stroke="#8B0000" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                    />
                  </motion.svg>
                </span>
              </h2>
            </motion.div>

            <div className="space-y-8 pb-4">
               <div>
                  <h4 className="text-[11px] font-black text-[#8B0000] uppercase tracking-[0.4em] mb-4">Main Office</h4>
                  <p className="text-lg md:text-xl font-serif leading-relaxed text-black/70">
                    Vnexora Hospitality Group <br />
                    5th Floor, CDC Building, AIC <br />
                    BHU Campus, Varanasi - 221005 <br />
                    <a href="tel:918318195911" className="text-[#8B0000] border-b border-[#8B0000]/20 pb-1 mt-4 inline-block hover:border-[#8B0000] transition-all">(+91) 83181-95911</a>
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGH-FIDELITY INQUIRY SELECTOR ── */}
      <section className="py-32 bg-[#FAF9F6] relative overflow-hidden">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
              <div className="space-y-4">
                 <h4 className="text-[11px] font-black text-[#8B0000] uppercase tracking-[0.6em]">Mandate Selection</h4>
                 <h3 className="text-4xl md:text-6xl font-serif text-black leading-tight max-w-2xl">
                    How may we <br /><span className="italic font-light">steward your path?</span>
                 </h3>
              </div>
              <p className="text-black/40 text-sm font-light max-w-xs leading-relaxed italic">
                 "Alignment is the first step toward institutional excellence. Select your area of interest to initiate our strategic dialogue."
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-24">
              {inquiryPillars.map((pillar) => (
                <div key={pillar.title} className="space-y-10">
                   <div className="inline-block bg-[#CFA052] px-6 py-2 mb-10">
                      <h5 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] text-black">
                         {pillar.title}
                      </h5>
                   </div>
                   <div className="flex flex-col gap-4">
                      {pillar.options.map((option) => {
                        const Icon = option.icon;
                        const isActive = selectedCat.id === option.id;
                        return (
                          <button
                            key={option.id}
                            onClick={() => setSelectedCat(option)}
                            className={cn(
                              "group flex items-center gap-6 p-6 transition-all duration-700 text-left border rounded-xl",
                              isActive 
                              ? "bg-[#CFA052] border-[#CFA052] text-black shadow-2xl -translate-y-1" 
                              : "bg-black border-white/10 text-white hover:bg-zinc-900"
                            )}
                          >
                             <div className={cn(
                               "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-700",
                               isActive ? "bg-black text-white" : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white"
                             )}>
                                <Icon size={20} />
                             </div>
                             <span className={cn(
                               "text-[13px] font-bold uppercase tracking-[0.1em] transition-colors duration-700",
                               isActive ? "text-black" : "text-white/40 group-hover:text-white"
                             )}>
                                {option.label}
                             </span>
                          </button>
                        );
                      })}
                   </div>
                </div>
              ))}
           </div>

           {/* Secondary / Global Options */}
           <div className="flex flex-wrap items-center justify-center gap-12 pt-12 border-t border-black/5">
              {secondaryOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedCat(option)}
                  className={cn(
                    "flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-700 hover:scale-105",
                    selectedCat.id === option.id ? "text-[#8B0000]" : "text-black/30 hover:text-black"
                  )}
                >
                   <div className={cn(
                     "w-1.5 h-1.5 rounded-full transition-all duration-700",
                     selectedCat.id === option.id ? "bg-[#8B0000] scale-150" : "bg-black/10"
                   )} />
                   {option.label}
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* ── DYNAMIC ENGAGEMENT FORM ── */}
      <section className="py-32 md:pb-56">
        <div className="container mx-auto px-6 max-w-7xl">
           <motion.div
             key={selectedCat.id}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="mb-20"
           >
              <h3 className="text-4xl md:text-6xl font-serif text-black">{selectedCat.label}</h3>
           </motion.div>

           <form className="max-w-6xl space-y-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-4">
                    <label className="text-sm font-bold text-black uppercase tracking-widest">First Name (required)</label>
                    <input 
                      required
                      type="text" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-white border border-black/10 p-6 focus:outline-none focus:border-[#8B0000] transition-colors" 
                    />
                 </div>
                 <div className="space-y-4">
                    <label className="text-sm font-bold text-black uppercase tracking-widest">Last Name (required)</label>
                    <input 
                      required
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-white border border-black/10 p-6 focus:outline-none focus:border-[#8B0000] transition-colors" 
                    />
                 </div>
              </div>

              <div className="space-y-4">
                 <label className="text-sm font-bold text-black uppercase tracking-widest">Email Address (required)</label>
                 <input 
                   required
                   type="email" 
                   value={formData.email}
                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                   className="w-full bg-white border border-black/10 p-6 focus:outline-none focus:border-[#8B0000] transition-colors" 
                 />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-4">
                    <label className="text-sm font-bold text-black uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white border border-black/10 p-6 focus:outline-none focus:border-[#8B0000] transition-colors" 
                    />
                 </div>
                 <div className="space-y-4">
                    <label className="text-sm font-bold text-black uppercase tracking-widest">Company Name</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-white border border-black/10 p-6 focus:outline-none focus:border-[#8B0000] transition-colors" 
                    />
                 </div>
              </div>

              <div className="space-y-4">
                 <label className="text-sm font-bold text-black uppercase tracking-widest">How can we help? (required)</label>
                 <textarea 
                   required
                   rows={6}
                   value={formData.message}
                   onChange={(e) => setFormData({...formData, message: e.target.value})}
                   placeholder="Tell us about your institutional goals..."
                   className="w-full bg-white border border-black/10 p-6 focus:outline-none focus:border-[#8B0000] transition-colors resize-none" 
                 />
              </div>

              <div className="pt-12 flex justify-end">
                 <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#8B0000] text-white px-16 py-8 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-black transition-all duration-500 shadow-2xl relative"
                 >
                    {isSubmitting ? "TRANSMITTING..." : "Say Hello"}
                 </button>
              </div>
           </form>
        </div>
      </section>

    </main>
  );
}
