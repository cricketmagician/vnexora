"use client";

import React, { useState, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  ArrowLeft,
  Search,
  Handshake,
  Key,
  ShieldCheck,
  Lock,
  Building2,
  Target,
  ArrowUpRight,
  Check,
  Camera,
  X,
  Plus,
  Paperclip
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

export default function HotelsBuySellPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    targetRegion: "",
    leaseTerm: "5 - 10 Years",
    assetDetails: "",
    strategicIntent: ""
  });

  const [selectedFiles, setSelectedFiles] = useState<{ file: File; preview: string; base64: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newFiles = await Promise.all(
      files.map(async (file) => {
        return new Promise<{ file: File; preview: string; base64: string }>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve({
              file,
              preview: URL.createObjectURL(file),
              base64: reader.result as string
            });
          };
          reader.readAsDataURL(file);
        });
      })
    );

    setSelectedFiles(prev => [...prev, ...newFiles].slice(0, 5)); // Limit to 5 files
    if (e.target) e.target.value = ""; // Reset input
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `
Target Region: ${formData.targetRegion}
Lease Term: ${formData.leaseTerm}
Asset Details: ${formData.assetDetails}
Strategic Intent: ${formData.strategicIntent}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        subject: `Hotels Buy/Sell/Lease Mandate: ${formData.targetRegion}`,
        message: fullMessage,
        source: 'hotels_buy_sell_page',
        attachments: selectedFiles.map(f => ({
          filename: f.file.name,
          content: f.base64
        }))
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Institutional mandate briefed. Discreet analysis initiated.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Institutional processing error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const mandates = [
    { 
      id: "buy", 
      title: "BUY HOTEL", 
      icon: Search, 
      desc: "Acquire high-performing hospitality assets globally.",
      href: "/buy-hotel"
    },
    { 
      id: "sell", 
      title: "SELL YOUR PROPERTY", 
      icon: Building2, 
      desc: "Discrete divestment of your hospitality portfolio.",
      href: "/sell-hotel"
    },
    { 
      id: "lease", 
      title: "LEASE MANDATE", 
      icon: Target, 
      desc: "Strategic leasing and operator asset management.",
      href: null
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#CFA052]/30">
      {/* ══════════ SUPER PREMIUM CINEMATIC HERO ══════════ */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
        
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/services/hotel_brokerage.png"
            alt="Exclusive Asset Brokerage"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/20 to-[#050505]" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-20 absolute top-32 md:top-40 left-0 right-0 z-30 pointer-events-none">
          <Link href="/" className="inline-flex items-center text-white/40 hover:text-[#CFA052] transition-all group pointer-events-auto">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em]">Back to Showcase</span>
          </Link>
        </div>

        <div className="container relative z-20 px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-5xl mx-auto"
          >
            <motion.span 
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-white/40 mb-10 block"
            >
               Institutional Assets | Global Transaction Hub
            </motion.span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tighter mb-12 overflow-hidden">
              {["Exclusive", "Asset", "Brokerage."].map((word, i) => (
                <motion.span 
                   key={i}
                  className="inline-block mr-[0.3em] last:mr-0 last:text-[#CFA052]/90 last:italic last:font-light"
                  variants={{ hidden: { y: 200 }, visible: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-6 px-10 py-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full mb-14 shadow-[0_30px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10 mx-auto"
            >
              {["BUY", "SELL", "LEASE"].map((tag, i) => (
                <React.Fragment key={tag}>
                  <span className="text-[11px] md:text-xs font-black tracking-[0.5em] text-[#CFA052] uppercase">{tag}</span>
                  {i < 2 && <div className="w-[1px] h-4 bg-white/10" />}
                </React.Fragment>
              ))}
            </motion.div>

            <motion.p 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.2, duration: 1 } } }}
              className="text-white/30 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto tracking-tight italic"
            >
              Discrete transactions for the world's most <br className="hidden md:block" /> prestigious private hospitality portfolios.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
      </section>

      {/* 2. MANDATE GRID — Yield Alpha */}
      <Section spacing="lg" className="bg-[#050505] pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mb-24 text-center">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="flex items-center justify-center gap-4 mb-6"
             >
               <div className="w-12 h-[1px] bg-[#CFA052]/30" />
               <span className="text-[10px] font-bold font-sans tracking-[0.5em] text-[#CFA052] uppercase">Mandate Cycle</span>
               <div className="w-12 h-[1px] bg-[#CFA052]/30" />
             </motion.div>
             <h2 className="text-4xl md:text-7xl font-serif text-white mb-12 tracking-tighter">Institutional <span className="italic font-light text-[#CFA052]">Yield Alpha.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-48">
            {mandates.map((mandate, idx) => (
              <motion.div
                 key={mandate.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.1, duration: 0.8 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -15, scale: 1.02 }}
                 className="group relative p-12 bg-white/[0.03] backdrop-blur-3xl border border-white/5 hover:border-[#CFA052]/40 transition-all duration-700 cursor-pointer rounded-[2.5rem] overflow-hidden flex flex-col items-center text-center shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
                 onClick={() => mandate.href ? router.push(mandate.href) : scrollToForm()}
              >
                {/* 3D Depth Layer */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #CFA052 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                
                <div className="w-24 h-24 bg-white/[0.02] border border-white/10 flex items-center justify-center mb-10 group-hover:bg-[#CFA052] group-hover:text-black transition-all duration-700 rounded-3xl rotate-[5deg] group-hover:rotate-0 shadow-2xl">
                  <mandate.icon className="w-10 h-10 transition-transform group-hover:scale-110" />
                </div>
                
                <h3 className="text-2xl font-sans font-black tracking-[0.3em] uppercase mb-6 text-white group-hover:text-[#CFA052] transition-colors">{mandate.title}</h3>
                <p className="text-white/40 font-sans font-light text-[15px] mb-12 leading-relaxed h-16">{mandate.desc}</p>
                
                <div className="mt-auto flex items-center gap-4 text-[#CFA052] group-hover:gap-6 transition-all">
                  <span className="text-[10px] font-black tracking-[0.5em] uppercase">
                    {mandate.href ? "OPEN PLATFORM" : "INQUIRE NOW"}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>

                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CFA052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>

          {/* 3. TRANSACTION FORM — Premium Light Institutional Theme */}
          <div ref={formRef} className="max-w-4xl mx-auto scroll-mt-32">
            {!isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#FCFAF7] border border-black/5 rounded-[3rem] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.1)] relative"
              >
                <div className="bg-white/50 py-12 px-10 text-center border-b border-black/5 relative z-10">
                   <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#CFA052] animate-pulse" />
                      <span className="text-black/40 text-[10px] font-black tracking-[0.6em] uppercase">Confidential Mandate Brief</span>
                   </div>
                   <h3 className="text-3xl md:text-5xl font-serif text-black italic tracking-tighter">Lease <span className="not-italic text-[#CFA052]">Direct.</span></h3>
                </div>

                <div className="p-10 md:p-20 relative z-10">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-12" onSubmit={handleSubmit}>
                    <div className="space-y-4 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Investor / Entity Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="NAME OF MANDATE HOLDER" 
                        className="w-full bg-transparent border-b border-black/10 py-5 text-black font-medium text-xl focus:outline-none focus:border-[#CFA052] transition-all placeholder:text-black/10" 
                      />
                    </div>
                    <div className="space-y-4 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Official Email</label>
                      <input 
                        required 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="OFFICIAL@TRANS-GLOBAL.COM" 
                        className="w-full bg-transparent border-b border-black/10 py-5 text-black font-medium text-xl focus:outline-none focus:border-[#CFA052] transition-all placeholder:text-black/10" 
                      />
                    </div>

                    <div className="space-y-4 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Target Geography</label>
                      <input 
                        type="text" 
                        required
                        value={formData.targetRegion}
                        onChange={(e) => setFormData({...formData, targetRegion: e.target.value})}
                        placeholder="REGION / CITY" 
                        className="w-full bg-transparent border-b border-black/10 py-5 text-black font-medium text-xl focus:outline-none focus:border-[#CFA052] transition-all placeholder:text-black/10" 
                      />
                    </div>

                    <div className="space-y-4 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Lease Structure</label>
                      <div className="relative">
                        <select 
                          value={formData.leaseTerm}
                          onChange={(e) => setFormData({...formData, leaseTerm: e.target.value})}
                          className="w-full bg-transparent border-b border-black/10 py-5 text-black font-medium text-lg focus:outline-none focus:border-[#CFA052] transition-all appearance-none pr-10 cursor-pointer"
                        >
                          <option>5 - 10 Years</option>
                          <option>10 - 20 Years</option>
                          <option>20+ Years / Perpetual</option>
                          <option>Custom Strategic Term</option>
                        </select>
                        <ChevronRight className="w-4 h-4 text-[#CFA052] absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-4 col-span-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Asset Brief (Keys, Grade, Location)</label>
                       <input 
                        type="text" 
                        required
                        value={formData.assetDetails}
                        onChange={(e) => setFormData({...formData, assetDetails: e.target.value})}
                        placeholder="DESCRIBE THE ASSET OR REQUIREMENTS..." 
                        className="w-full bg-transparent border-b border-black/10 py-5 text-black font-medium text-xl focus:outline-none focus:border-[#CFA052] transition-all placeholder:text-black/10" 
                      />
                    </div>

                    <div className="space-y-4 col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Mandate Specifics</label>
                      <textarea 
                        rows={4} 
                        required
                        value={formData.strategicIntent}
                        onChange={(e) => setFormData({...formData, strategicIntent: e.target.value})}
                        placeholder="DETAILED STRATEGIC REQUIREMENTS..." 
                        className="w-full bg-black/[0.02] border border-black/10 p-8 text-black font-light focus:outline-none focus:border-[#CFA052] transition-all placeholder:text-black/5 resize-none rounded-2xl"
                      ></textarea>
                    </div>

                    {/* PHOTO UPLOAD — Light Styled */}
                    <div className="col-span-2 space-y-6">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 block">
                        Mandate Attachments (Teasers / Financials)
                      </label>
                      
                      <div className="flex flex-wrap gap-6">
                        {selectedFiles.map((file, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative group w-28 h-28 rounded-2xl overflow-hidden border border-black/10 bg-black/[0.02]"
                          >
                            <img src={file.preview} alt="Preview" className="w-full h-full object-cover opacity-80" />
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="absolute inset-0 flex items-center justify-center bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={20} />
                            </button>
                          </motion.div>
                        ))}

                        {selectedFiles.length < 5 && (
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-28 h-28 rounded-2xl border-2 border-dashed border-black/10 flex flex-col items-center justify-center gap-3 text-black/20 hover:border-[#CFA052] hover:text-[#CFA052] hover:bg-[#CFA052]/5 transition-all group"
                          >
                            <Plus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                            <span className="text-[8px] font-black tracking-widest uppercase">Add Asset</span>
                          </button>
                        )}
                      </div>

                      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" multiple className="hidden" />
                    </div>

                    <div className="col-span-2 pt-12">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-24 bg-[#0A0A0A] text-white font-black tracking-[0.5em] text-[11px] hover:bg-[#CFA052] hover:text-black transition-all rounded-2xl uppercase disabled:opacity-50 shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                      >
                        {isSubmitting ? "ENCRYPTING DATA..." : "Initiate Mandate Request"}
                      </button>
                      <div className="mt-8 flex items-center justify-center gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                         <p className="text-black/20 text-[9px] font-bold uppercase tracking-[0.4em]">
                           Secure AES-256 Encrypted Institutional Channel
                         </p>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#FCFAF7] border border-black/5 rounded-[3rem] p-32 text-center shadow-[0_80px_160px_rgba(0,0,0,0.1)]">
                 <div className="w-24 h-24 bg-[#CFA052] rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(207,160,82,0.4)]">
                    <Check className="w-12 h-12 text-black" />
                 </div>
                 <h3 className="text-4xl md:text-6xl font-serif text-black mb-6 tracking-tighter italic">Mandated.</h3>
                 <p className="text-black/40 max-w-sm mx-auto leading-relaxed mb-12 font-sans font-light tracking-wide uppercase text-xs">Your strategic brief has been received. Analysis initiated at Vnexora HQ.</p>
                 <button onClick={() => setIsSubmitted(false)} className="px-14 py-6 border border-black/10 text-black text-[10px] font-bold tracking-[0.6em] uppercase hover:bg-[#0A0A0A] hover:text-white transition-all rounded-xl">New Brief</button>
              </motion.div>
            )}
          </div>

          {/* 4. THE OFF-MARKET ADVANTAGE — Institutional Edge */}
          <div className="mt-64 grid lg:grid-cols-2 gap-32 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
             >
                <div className="w-16 h-16 bg-[#CFA052]/10 border border-[#CFA052]/20 flex items-center justify-center rounded-2xl mb-10 shadow-2xl">
                  <ShieldCheck className="w-8 h-8 text-[#CFA052]" />
                </div>
                <h2 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[0.9] tracking-tighter">The Private <br /><span className="italic font-light text-[#CFA052]">Inventory.</span></h2>
                <p className="text-xl text-white/40 font-sans font-light leading-relaxed mb-12 italic tracking-tight">
                   The world’s most prestigious assets never reach the public market. Vnexora provides direct access to off-market trophy assets across Global Hospitality Hubs.
                </p>
                <div className="space-y-6">
                  {["DISCRETE DIVESTMENT PROTOCOLS", "DIRECT INSTITUTIONAL PIPELINE", "VETTED GLOBAL UHNW NETWORK"].map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center text-white/60 font-sans font-black text-[10px] tracking-[0.4em] uppercase"
                    >
                      <div className="w-8 h-px bg-[#CFA052] mr-6" />
                      {item}
                    </motion.div>
                  ))}
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative group"
             >
                <div className="absolute inset-0 bg-[#CFA052]/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-1000" />
                <div className="relative aspect-[4/5] bg-[#0A0A0A] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5 ring-1 ring-white/10">
                  <Image 
                    src="/images/services/hotel_brokerage.png"
                    alt="Institutional Asset"
                    fill
                    className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-[3s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  
                  {/* Floating ID Card */}
                  <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                     <p className="text-[10px] font-black tracking-[0.5em] text-[#CFA052] uppercase mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052]" />
                        Node Secured
                     </p>
                     <p className="text-sm text-white/70 font-light leading-relaxed">
                       Direct institutional mandate required for access to the Vnexora Private Vault of hospitality assets.
                     </p>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </Section>
    </main>
  );
}
