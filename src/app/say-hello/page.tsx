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
    fullName: "",
    companyName: "",
    email: "",
    whatsapp: "",
    city: "",
    country: "India",
    enquiryCategory: "Business Enquiry",
    subject: "",
    message: "",
    preferredContactMethod: "WhatsApp"
  });
  
  const [files, setFiles] = useState<{
    proposal: { content: string; filename: string } | null;
    resume: { content: string; filename: string } | null;
    photos: { content: string; filename: string } | null;
    documents: { content: string; filename: string } | null;
  }>({
    proposal: null,
    resume: null,
    photos: null,
    documents: null
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, key: keyof typeof files) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size threshold exceeded (10MB).");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFiles(prev => ({
        ...prev,
        [key]: {
          content: reader.result as string,
          filename: file.name,
        }
      }));
      toast.success(`${key.charAt(0).toUpperCase() + key.slice(1)} attached.`);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const allAttachments = Object.values(files).filter(f => f !== null) as { content: string; filename: string }[];
      
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.whatsapp,
        subject: formData.subject || `${formData.enquiryCategory}: ${formData.fullName}`,
        message: `
          Enquiry Category: ${formData.enquiryCategory}
          Company: ${formData.companyName}
          Location: ${formData.city}, ${formData.country}
          Preferred Contact: ${formData.preferredContactMethod}
          
          Subject: ${formData.subject}
          Message: ${formData.message}
        `,
        source: 'general_enquiry_form',
        attachments: allAttachments.length > 0 ? allAttachments : undefined
      });

      if (result.success) {
        toast.success("Enquiry submitted successfully. We will reach out shortly.");
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          whatsapp: "",
          city: "",
          country: "India",
          enquiryCategory: "Business Enquiry",
          subject: "",
          message: "",
          preferredContactMethod: "WhatsApp"
        });
        setFiles({ proposal: null, resume: null, photos: null, documents: null });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
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
                  className="mb-12 flex flex-col items-start gap-4"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-px bg-[#8B0000]/60" />
                    <h4 className="text-[10px] font-bold text-[#8B0000] uppercase tracking-[0.6em]">Initial Mandate</h4>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-serif text-black leading-[0.9] tracking-tighter">
                    {selectedCat.label}
                  </h3>
                </motion.div>

                <div className="bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[800px] rounded-3xl">
                  {/* Left Branding Sidebar */}
                  <div className="lg:w-1/3 bg-[#0A0A0A] relative min-h-[300px] lg:min-h-auto overflow-hidden">
                    <Image 
                      src="/images/about/kit1.jpeg" 
                      alt="Vnexora Enquiry" 
                      fill
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-12 left-12 right-12 z-10 space-y-4">
                      <div className="w-12 h-[2px] bg-mustard" />
                      <h2 className="text-3xl font-serif text-white leading-tight uppercase">
                        Strategic <br />
                        <span className="italic">Dialogue.</span>
                      </h2>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">
                        Initiate your institutional mandate with the VNEXORA concierge.
                      </p>
                    </div>
                  </div>

                  {/* Right Form Content */}
                  <div className="lg:w-2/3 p-8 md:p-12 lg:p-16 bg-white">
                    <form className="space-y-12" onSubmit={handleSubmit}>
                      {/* Section 1: Contact Details */}
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                          <span className="text-mustard font-black text-[9px] tracking-[0.5em] uppercase">Contact Details</span>
                          <div className="h-px w-8 bg-black/5" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                          <InputField 
                            label="Full Name" 
                            required 
                            value={formData.fullName} 
                            onChange={v => setFormData({...formData, fullName: v})} 
                            placeholder="INSTITUTIONAL / INDIVIDUAL" 
                          />
                          <InputField 
                            label="Company Name" 
                            value={formData.companyName} 
                            onChange={v => setFormData({...formData, companyName: v})} 
                            placeholder="CORPORATE ENTITY" 
                          />
                          <InputField 
                            label="WhatsApp Number" 
                            required 
                            type="tel"
                            value={formData.whatsapp} 
                            onChange={v => setFormData({...formData, whatsapp: v})} 
                            placeholder="+91 --- --- ----" 
                          />
                          <InputField 
                            label="Email Address" 
                            required 
                            type="email"
                            value={formData.email} 
                            onChange={v => setFormData({...formData, email: v})} 
                            placeholder="DIRECT@CORPORATE.COM" 
                          />
                          <InputField 
                            label="City" 
                            required 
                            value={formData.city} 
                            onChange={v => setFormData({...formData, city: v})} 
                            placeholder="E.G. VARANASI" 
                          />
                          <InputField 
                            label="Country" 
                            required 
                            value={formData.country} 
                            onChange={v => setFormData({...formData, country: v})} 
                            placeholder="INDIA" 
                          />
                        </div>
                      </div>

                      {/* Section 2: Enquiry Category */}
                      <div className="space-y-8 pt-8 border-t border-black/5">
                        <div className="flex items-center gap-4">
                          <span className="text-mustard font-black text-[9px] tracking-[0.5em] uppercase">Enquiry Category</span>
                          <div className="h-px w-8 bg-black/5" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            "Business Enquiry",
                            "Hotel / Resort Enquiry",
                            "Investment Opportunity",
                            "Partnership Proposal",
                            "Careers / Internship",
                            "Vendor / Supplier",
                            "Media / Collaboration",
                            "Other"
                          ].map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => setFormData({...formData, enquiryCategory: cat})}
                              className={cn(
                                "px-4 py-3 border text-[10px] font-bold uppercase tracking-widest transition-all text-left",
                                formData.enquiryCategory === cat 
                                  ? "bg-black text-white border-black" 
                                  : "bg-white text-black/40 border-black/10 hover:border-black/30 hover:text-black"
                              )}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Section 3: Subject & Message */}
                      <div className="space-y-8 pt-8 border-t border-black/5">
                        <InputField 
                          label="Subject" 
                          required 
                          value={formData.subject} 
                          onChange={v => setFormData({...formData, subject: v})} 
                          placeholder="ENTER ENQUIRY SUBJECT" 
                        />
                        <div className="space-y-3">
                          <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 block ml-1">Message (required)</label>
                          <textarea 
                            required
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            placeholder="WRITE YOUR ENQUIRY / REQUIREMENT..."
                            className="w-full bg-white border-b border-black/10 py-3 px-1 outline-none focus:border-mustard transition-colors text-xs font-bold tracking-widest uppercase min-h-[100px] resize-none" 
                          />
                        </div>
                      </div>

                      {/* Section 4: Uploads */}
                      <div className="space-y-8 pt-8 border-t border-black/5">
                        <div className="flex items-center gap-4">
                          <span className="text-mustard font-black text-[9px] tracking-[0.5em] uppercase">Upload Files (Optional)</span>
                          <div className="h-px w-8 bg-black/5" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FileUploadButton label="Proposal" onFileChange={(e) => handleFileChange(e, 'proposal')} hasFile={!!files.proposal} />
                          <FileUploadButton label="Resume" onFileChange={(e) => handleFileChange(e, 'resume')} hasFile={!!files.resume} />
                          <FileUploadButton label="Photos" onFileChange={(e) => handleFileChange(e, 'photos')} hasFile={!!files.photos} />
                          <FileUploadButton label="Documents" onFileChange={(e) => handleFileChange(e, 'documents')} hasFile={!!files.documents} />
                        </div>
                      </div>

                      {/* Section 5: Preferred Contact */}
                      <div className="space-y-8 pt-8 border-t border-black/5">
                        <div className="flex items-center gap-4">
                          <span className="text-mustard font-black text-[9px] tracking-[0.5em] uppercase">Preferred Contact</span>
                          <div className="h-px w-8 bg-black/5" />
                        </div>
                        <div className="flex flex-wrap gap-8">
                          {["Call", "WhatsApp", "Email"].map((method) => (
                            <label key={method} className="flex items-center gap-3 cursor-pointer group">
                              <input 
                                type="radio" 
                                name="contactMethod" 
                                value={method} 
                                checked={formData.preferredContactMethod === method}
                                onChange={() => setFormData({...formData, preferredContactMethod: method})}
                                className="w-5 h-5 accent-mustard"
                              />
                              <span className={cn(
                                "text-[10px] font-bold uppercase tracking-widest transition-colors",
                                formData.preferredContactMethod === method ? "text-black" : "text-black/40 group-hover:text-black/60"
                              )}>{method}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Submission Footer */}
                      <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-black/5">
                          <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-black text-white px-12 py-5 font-bold text-[10px] tracking-[0.5em] uppercase hover:bg-mustard hover:text-black transition-all disabled:opacity-50 min-w-[240px] flex items-center justify-center gap-4"
                          >
                            <span>{isSubmitting ? "Transmitting..." : "Submit Enquiry"}</span>
                            {!isSubmitting && <ArrowRight size={14} />}
                          </button>

                          <div className="flex items-center gap-8">
                            <div className="flex flex-col items-end gap-1 text-right">
                              <span className="text-[9px] font-black text-black/20 uppercase tracking-[0.3em]">Confidential</span>
                              <span className="text-[9px] font-black text-black/20 uppercase tracking-[0.3em]">Fast Response</span>
                            </div>
                            <div className="w-px h-10 bg-black/5" />
                            <div className="text-[9px] font-black text-mustard uppercase tracking-[0.4em]">Powered by VNEXORA</div>
                          </div>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
      </section>

    </main>
  );
}

function InputField({ 
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
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 block ml-1">
        {label} {required && <span className="text-mustard">*</span>}
      </label>
      <input 
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border-b border-black/10 py-3 px-1 outline-none focus:border-mustard transition-colors text-sm font-bold tracking-widest uppercase placeholder:text-black/10" 
        placeholder={placeholder}
      />
    </div>
  );
}

function FileUploadButton({ label, onFileChange, hasFile }: { label: string; onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void; hasFile: boolean }) {
  return (
    <div className="relative group">
      <input 
        type="file" 
        onChange={onFileChange}
        className="absolute inset-0 opacity-0 cursor-pointer z-10"
      />
      <div className={cn(
        "w-full px-5 py-4 border transition-all duration-500 flex items-center justify-between",
        hasFile 
          ? "bg-black text-white border-black" 
          : "bg-white text-black/40 border-black/10 group-hover:border-black/30 group-hover:text-black"
      )}>
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
        {hasFile ? <FileText size={14} className="text-mustard" /> : <UploadCloud size={14} className="opacity-40" />}
      </div>
    </div>
  );
}
