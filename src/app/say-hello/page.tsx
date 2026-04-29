"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { JoinOurTeamForm } from "@/components/sections/JoinOurTeamForm";
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
  MessageSquare,
  UploadCloud,
  FileText
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
      { id: "biz_dev", label: "Revenue growth and profit", icon: TrendingUp },
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
  const [resumeFile, setResumeFile] = useState<{ content: string; filename: string } | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Institutional threshold exceeded. Max file size: 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setResumeFile({
        content: reader.result as string,
        filename: file.name,
      });
      toast.success("Institutional dossier attached.");
    };
    reader.readAsDataURL(file);
  };

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
        source: 'say_hello_portal',
        attachments: resumeFile ? [resumeFile] : undefined
      });

      if (result.success) {
        toast.success("Engagement mandate received. We will respond shortly.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
        setResumeFile(null);
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
      <section className="py-32 bg-[#070B0A] relative overflow-hidden">
        {/* Cinematic Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/backgrounds/say_hello_bg.png" 
            alt="Institutional Backdrop" 
            fill 
            className="object-cover opacity-[0.15] blur-sm grayscale-[0.8] mix-blend-screen" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B0A] via-transparent to-[#070B0A]" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
              <div className="space-y-4">
                 <h4 className="text-[11px] font-black text-mustard uppercase tracking-[0.6em]">Mandate Selection</h4>
                 <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight max-w-2xl">
                    How may we <br /><span className="text-gold-gradient italic font-light">steward your path?</span>
                 </h3>
              </div>
              <p className="text-white/40 text-sm font-light max-w-xs leading-relaxed italic">
                 "Alignment is the first step toward institutional excellence. Select your area of interest to initiate our strategic dialogue."
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-24">
              {inquiryPillars.map((pillar) => (
                <div key={pillar.title} className="space-y-10 group/pillar">
                   <div className="h-14 flex items-center mb-10 relative">
                      <div className="absolute -left-4 w-1 h-full bg-mustard scale-y-0 group-hover/pillar:scale-y-100 transition-transform duration-700 origin-bottom" />
                      <div className="flex flex-col gap-1">
                         <h5 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] text-gold-gradient">
                            {pillar.title}
                         </h5>
                         <div className="w-12 h-px bg-mustard/30 group-hover/pillar:w-full transition-all duration-700" />
                      </div>
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
                              "group flex items-center gap-6 p-5 transition-all duration-700 text-left border rounded-xl relative overflow-hidden",
                              isActive 
                              ? "bg-[#8B0000] border-mustard/50 shadow-[0_20px_60px_rgba(139,0,0,0.4)] -translate-y-1 scale-[1.02]" 
                              : "liquid-glass border-white/10 text-white/70 hover:text-white hover:border-mustard/30"
                            )}
                          >
                             <div className={cn(
                               "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-700 relative z-10",
                               isActive ? "bg-white/10 text-white shadow-inner" : "bg-white/5 text-mustard group-hover:bg-mustard/20 group-hover:text-mustard"
                             )}>
                                <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                             </div>
                             <span className={cn(
                               "text-[12px] font-bold uppercase tracking-[0.15em] transition-colors duration-700 relative z-10",
                               isActive ? "text-white" : "text-white/60 group-hover:text-white"
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
           <div className="flex flex-wrap items-center justify-center gap-8 pt-16 border-t border-white/5 relative z-10">
              {secondaryOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedCat(option)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-500 group relative overflow-hidden",
                    selectedCat.id === option.id 
                      ? "bg-mustard border-mustard shadow-[0_0_20px_rgba(207,160,82,0.3)]" 
                      : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                  )}
                >
                   <span className={cn(
                     "text-[9px] font-black uppercase tracking-[0.4em] transition-colors duration-500",
                     selectedCat.id === option.id ? "text-black" : "text-white/40 group-hover:text-white"
                   )}>
                      {option.label}
                   </span>
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* ── DYNAMIC ENGAGEMENT FORM ── */}
      <section className="py-32 md:pb-56 bg-[#EFEDE8] relative">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {selectedCat.id === 'career' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="shadow-2xl rounded-3xl overflow-hidden"
              >
                <JoinOurTeamForm />
              </motion.div>
            ) : (
              <>
                <motion.div
                  key={selectedCat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-24 flex flex-col items-start gap-4"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-px bg-[#8B0000]/60" />
                    <h4 className="text-[10px] font-bold text-[#8B0000] uppercase tracking-[0.6em]">Initial Mandate</h4>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-serif text-black leading-[0.9] tracking-tighter">
                    {selectedCat.label.split(' ').map((word, i) => (
                      <span key={i} className="block">{word === 'Inquiry' ? <span className="italic font-light opacity-80">Inquiry</span> : word}</span>
                    ))}
                  </h3>
                </motion.div>

                <form className="max-w-6xl space-y-16" onSubmit={handleSubmit}>
                  {/* Identity Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      <div className="group space-y-3">
                          <label className="text-[11px] font-bold text-black/40 uppercase tracking-[0.4em] group-focus-within:text-[#8B0000] transition-colors">First Name (required)</label>
                          <input 
                            required
                            type="text" 
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="w-full bg-transparent border-b border-black/10 py-5 focus:outline-none focus:border-[#8B0000] transition-all duration-700 font-serif text-2xl text-black placeholder:text-black/10" 
                            placeholder="Institution / Individual"
                          />
                      </div>
                      <div className="group space-y-3">
                          <label className="text-[11px] font-bold text-black/40 uppercase tracking-[0.4em] group-focus-within:text-[#8B0000] transition-colors">Last Name (required)</label>
                          <input 
                            required
                            type="text" 
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="w-full bg-transparent border-b border-black/10 py-5 focus:outline-none focus:border-[#8B0000] transition-all duration-700 font-serif text-2xl text-black placeholder:text-black/10" 
                            placeholder="Corporate Entity / Surname"
                          />
                      </div>
                    </div>

                    {/* Contact Grid */}
                    <div className="grid grid-cols-1 gap-12 border-t border-black/5 pt-12">
                      <div className="group space-y-3">
                          <label className="text-[11px] font-bold text-black/40 uppercase tracking-[0.4em] group-focus-within:text-[#8B0000] transition-colors">Email Address (required)</label>
                          <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-transparent border-b border-black/10 py-5 focus:outline-none focus:border-[#8B0000] transition-all duration-700 font-serif text-2xl text-black placeholder:text-black/10" 
                            placeholder="direct@corporate.com"
                          />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                          <div className="group space-y-3">
                            <label className="text-[11px] font-bold text-black/40 uppercase tracking-[0.4em] group-focus-within:text-[#8B0000] transition-colors">Phone Number</label>
                            <input 
                              type="tel" 
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full bg-transparent border-b border-black/10 py-5 focus:outline-none focus:border-[#8B0000] transition-all duration-700 font-serif text-2xl text-black placeholder:text-black/10" 
                              placeholder="+91 --- --- ----"
                            />
                          </div>
                          <div className="group space-y-3">
                            <label className="text-[11px] font-bold text-black/40 uppercase tracking-[0.4em] group-focus-within:text-[#8B0000] transition-colors">Company / Organization</label>
                            <input 
                              type="text" 
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full bg-transparent border-b border-black/10 py-5 focus:outline-none focus:border-[#8B0000] transition-all duration-700 font-serif text-2xl text-black placeholder:text-black/10" 
                              placeholder="Institutional Identity"
                            />
                          </div>
                      </div>
                    </div>

                    {/* Intent Field */}
                    <div className="group space-y-3 border-t border-black/5 pt-12">
                      <label className="text-[11px] font-bold text-black/40 uppercase tracking-[0.4em] group-focus-within:text-[#8B0000] transition-colors">Strategic Intent (required)</label>
                      <textarea 
                        required
                        rows={1}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({...formData, message: e.target.value});
                          e.target.style.height = 'auto';
                          e.target.style.height = e.target.scrollHeight + 'px';
                        }}
                        placeholder="Describe your institutional objectives..."
                        className="w-full bg-transparent border-b border-black/10 py-5 focus:outline-none focus:border-[#8B0000] transition-all duration-700 font-serif text-2xl text-black placeholder:text-black/10 resize-none overflow-hidden" 
                      />
                    </div>

                  {/* Submission Footer */}
                  <div className="pt-16 flex flex-col md:flex-row items-center gap-10 border-t border-black/5">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative flex items-center justify-center gap-8 px-16 py-6 bg-[#8B0000] text-white rounded-full transition-all duration-500 hover:bg-black active:scale-95 disabled:opacity-50 overflow-hidden min-w-[300px]"
                      >
                        <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.4em]">
                          {isSubmitting ? "Transmitting..." : "Submit Mandate"}
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                      </button>

                      <div className="flex items-center gap-4 opacity-30">
                        <div className="w-px h-12 bg-black" />
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] max-w-[180px] leading-relaxed text-black">
                          Secure institutional transmission protocol active.
                        </p>
                      </div>
                  </div>
                </form>
              </>
            )}
          </div>
      </section>

    </main>
  );
}
