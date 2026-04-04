"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Camera, 
  Upload, 
  Check, 
  ArrowRight, 
  Building2, 
  MapPin, 
  BedDouble, 
  CircleDollarSign,
  User,
  Mail,
  Phone,
  Info,
  X,
  ShieldCheck,
  Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/* ═══════════════════════════════════════════
   DESIGN TOKENS: "MIDNIGHT LUXURY"
   Primary: #CFA052 (Mustard Gold)
   Background: #050505 (Deep Black)
   Form: bg-white/5 (Glass)
   Text: #FFFFFF (Pure Ivory)
   Accent: #D4AF37 (Metallic Gold)
   ═══════════════════════════════════════════ */

const FloatingImage = ({ src, alt, className, delay = 0, yOffset = 20 }: { src: string; alt: string; className: string; delay?: number; yOffset?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: yOffset, scale: 0.95 }}
    whileInView={{ 
      opacity: 0.6, 
      y: 0, 
      scale: 1,
      transition: { duration: 1.2, delay, ease: "easeOut" }
    }}
    whileHover={{ opacity: 1, scale: 1.05, transition: { duration: 0.4 } }}
    className={cn("absolute rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-0 hidden md:block", className)}
  >
    <Image src={src} alt={alt} fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
  </motion.div>
);

export default function SellHotelPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-white selection:bg-[#CFA052]/30 overflow-x-hidden">
      <Navbar />

      {/* ══════════ HERO SECTION: IMMERSIVE DARK ══════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity }} className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/hero_checkin.png" 
            alt="Luxury Hospitality Asset"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-[#CFA052] mb-8 block">
              Elite Asset Divestment
            </span>
            <h1 className="text-[clamp(40px,8vw,100px)] font-bold text-white mb-10 leading-[1.05] tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>
              Sell Your <span className="italic font-light opacity-80">Hospitality Asset</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              Connect with the world's most exclusive network of private investors and high-net-worth buyers through discrete, data-driven excellence.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16"
            >
               <div className="w-[1px] h-20 bg-gradient-to-b from-[#CFA052] to-transparent mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ FORM SECTION: WHITE GLASS ══════════ */}
      <section className="py-32 px-6 relative z-20">
        
        {/* Floating Background Images for "Images bhi" request */}
        <FloatingImage 
          src="/images/hero/hero_bar.png" 
          alt="Luxury Interior" 
          className="top-[10%] left-[-5%] w-[350px] aspect-[4/5] rotate-[-6deg] opacity-40" 
          delay={0.2}
        />
        <FloatingImage 
          src="/images/hero/hero_poolside.png" 
          alt="Elite Spa" 
          className="top-[40%] right-[-8%] w-[400px] aspect-square rotate-[4deg] opacity-40" 
          delay={0.4}
        />
        <FloatingImage 
          src="/images/hero/hero_6.png" 
          alt="Modern Architecture" 
          className="bottom-[10%] left-[-8%] w-[450px] aspect-video rotate-[-3deg] opacity-40" 
          delay={0.6}
        />

        <div className="max-w-[1000px] mx-auto relative h-full">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/10 backdrop-blur-[40px] rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden ring-1 ring-white/10"
          >
            <div className="p-8 md:p-20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16 border-b border-white/10 pb-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-br from-[#CFA052] to-[#B68D40] flex items-center justify-center shadow-xl shadow-[#CFA052]/20">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Divestment Portfolio</h2>
                    <p className="text-sm text-white/40 mt-1 uppercase tracking-[0.2em] font-bold">Confidential property submission</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/30 text-xs tracking-widest uppercase font-bold px-6 py-3 border border-white/10 rounded-full bg-white/5">
                  <Globe className="w-4 h-4 text-[#CFA052]" /> Global Acquisition Network
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="space-y-3 group">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                        <User className="w-3 h-3" /> Asset Owner Name
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Richard Sterling"
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] bg-[#CFA052] w-0 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>

                    <div className="space-y-3 group">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                        <Mail className="w-3 h-3" /> Corporate Email Address
                      </label>
                      <div className="relative">
                        <input 
                          type="email" 
                          required
                          placeholder="sterling@hospitality.com"
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] bg-[#CFA052] w-0 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>

                    <div className="space-y-3 group">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                        <Phone className="w-3 h-3" /> Private Contact Number
                      </label>
                      <div className="relative">
                        <input 
                          type="tel" 
                          required
                          placeholder="+91 9999 000 000"
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] bg-[#CFA052] w-0 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>

                    <div className="space-y-3 group">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                        <Building2 className="w-3 h-3" /> Asset Name
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          required
                          placeholder="Grand Imperial Residency"
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] bg-[#CFA052] w-0 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>

                    <div className="space-y-3 group">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                        <MapPin className="w-3 h-3" /> Asset Location (City/Country)
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          required
                          placeholder="New Delhi, India"
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] bg-[#CFA052] w-0 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>

                    <div className="space-y-3 group">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                        <BedDouble className="w-3 h-3" /> Inventory (Keys/Units)
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          required
                          placeholder="180 Keys"
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] bg-[#CFA052] w-0 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>

                    <div className="space-y-3 group">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                        <CircleDollarSign className="w-3 h-3" /> Indicative Asking Price
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          required
                          placeholder="$ 50,000,000"
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#CFA052] transition-all text-lg font-light text-white placeholder:text-white/10"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] bg-[#CFA052] w-0 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Photo Upload Area */}
                  <div className="space-y-6">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                      <Camera className="w-4 h-4" /> Confidential Asset Gallery (Photos)
                    </label>
                    <motion.div 
                      whileHover={{ scale: 1.005 }}
                      onClick={() => fileInputRef.current?.click()}
                      className="group cursor-pointer p-16 border-2 border-dashed border-white/10 rounded-[3rem] hover:border-[#CFA052]/40 hover:bg-white/[0.02] transition-all duration-700 flex flex-col items-center gap-6 text-center shadow-inner"
                    >
                      <div className="w-20 h-20 rounded-full bg-white/5 group-hover:bg-[#CFA052]/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                        <Upload className="w-10 h-10 text-white/20 group-hover:text-white transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-xl text-white font-light tracking-wide">Securely upload high-resolution property assets</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Maximum 10 files • JPG/PNG/WEBP • Up to 50MB total</p>
                      </div>
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden" 
                      />
                    </motion.div>

                    {/* File Preview */}
                    <AnimatePresence>
                      {files.length > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-wrap gap-4 pt-6"
                        >
                          {files.map((file, index) => (
                            <motion.div 
                              key={index}
                              initial={{ scale: 0.8, opacity: 0, y: 10 }}
                              animate={{ scale: 1, opacity: 1, y: 0 }}
                              className="group relative px-6 py-3 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-[#CFA052]/40 transition-all"
                            >
                              <span className="text-xs font-light text-white/80 truncate max-w-[180px]">{file.name}</span>
                              <button 
                                type="button" 
                                onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 transition-all"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message Area */}
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/80 flex items-center gap-3">
                       Detailed Asset Highlights / Private Notes
                    </label>
                    <textarea 
                      placeholder="Discuss heritage, unique architectural details, occupancy data, or reason for divestment..."
                      className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] p-8 focus:outline-none focus:border-[#CFA052] transition-all text-white font-light placeholder:text-white/10 min-h-[180px] resize-none leading-relaxed"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-8 bg-[#CFA052] text-black rounded-full font-bold tracking-[0.4em] uppercase text-[10px] shadow-2xl hover:bg-white transition-all duration-500 mt-12 flex items-center justify-center gap-4 group"
                  >
                    <span>Authorize Secure Submission</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-32"
                >
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-[#CFA052]/40 shadow-2xl">
                    <Check className="w-12 h-12 text-[#CFA052]" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Securely Logged</h3>
                  <p className="text-white/40 mb-12 max-w-sm mx-auto font-light leading-relaxed">
                    Your portfolio is currently being reviewed by our private divestment team. Discretion is guaranteed.
                  </p>
                  <Link href="/">
                    <button className="px-16 py-5 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                      Exit Experience
                    </button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ DATA & TRUST SECTION ══════════ */}
      <section className="py-40 bg-black relative">
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
            {[
              { icon: Globe, title: "Global Network", desc: "Direct conduit to 550+ family offices and sovereign wealth funds globally." },
              { icon: ShieldCheck, title: "Discrete Vetting", desc: "Aggressive confidentiality protocols protecting your market reputation." },
              { icon: CircleDollarSign, title: "Optimized ROI", desc: "Ensuring your hospitality legacy is divested at the absolute peak of its valuation." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="space-y-8 group"
              >
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto border border-white/10 group-hover:border-[#CFA052]/40 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-[#CFA052]" />
                </div>
                <h4 className="text-white font-bold text-lg uppercase tracking-[0.3em]">{feature.title}</h4>
                <p className="text-white/30 text-sm font-light leading-relaxed max-w-xs mx-auto">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
