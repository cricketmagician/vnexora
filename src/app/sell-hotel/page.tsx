"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/* ═══════════════════════════════════════════
   DESIGN TOKENS
   Primary: #CFA052 (Mustard Gold)
   Background: #FAFAF8 (Cream/Ivory)
   Text: #1A1A2E (Deep Ink)
═══════════════════════════════════════════ */

const GOLD = "#CFA052";
const DARK = "#1A1A2E";

export default function SellHotelPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    // In a real app, you'd send data to an API here
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] selection:bg-[#CFA052]/30">
      <Navbar />

      {/* ══════════ HERO SECTION ══════════ */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/luxury_hotel_sell_hero.png" // Using the generated image path
            alt="Luxury Hospitality Asset"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#FAFAF8]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#CFA052] mb-6 block">
              Elite Asset Divestment
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Sell Your <span className="italic">Hospitality Asset</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              List your property with the world's most exclusive network of hotel investors and high-net-worth buyers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════ FORM SECTION ══════════ */}
      <section className="py-24 px-6 relative -mt-32 z-20">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-3xl rounded-[3rem] shadow-[0_100px_80px_rgba(0,0,0,0.05)] border border-[#CFA052]/10 overflow-hidden"
          >
            <div className="p-10 md:p-16">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-[#CFA052]/10 flex items-center justify-center">
                  <Info className="w-6 h-6 text-[#CFA052]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'var(--font-playfair)' }}>Inquiry Details</h2>
                  <p className="text-sm text-[#1A1A2E]/40">Confidential property submission</p>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Personal Info Group */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A2E]/40 flex items-center gap-2">
                        <User className="w-3 h-3 text-[#CFA052]" /> Full Name
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Alexander Knight"
                        className="w-full bg-transparent border-b-2 border-[#1A1A2E]/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-[#1A1A2E] placeholder:text-[#1A1A2E]/20"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A2E]/40 flex items-center gap-2">
                        <Mail className="w-3 h-3 text-[#CFA052]" /> Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="alexander@knightgroup.com"
                        className="w-full bg-transparent border-b-2 border-[#1A1A2E]/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-[#1A1A2E] placeholder:text-[#1A1A2E]/20"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A2E]/40 flex items-center gap-2">
                        <Phone className="w-3 h-3 text-[#CFA052]" /> WhatsApp / Phone
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+44 7911 123456"
                        className="w-full bg-transparent border-b-2 border-[#1A1A2E]/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-[#1A1A2E] placeholder:text-[#1A1A2E]/20"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A2E]/40 flex items-center gap-2">
                        <Building2 className="w-3 h-3 text-[#CFA052]" /> Hotel Name
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Royal Windsor Plaza"
                        className="w-full bg-transparent border-b-2 border-[#1A1A2E]/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-[#1A1A2E] placeholder:text-[#1A1A2E]/20"
                      />
                    </div>
                  </div>

                  {/* Asset Info Group */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A2E]/40 flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-[#CFA052]" /> Location
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Dubai, UAE"
                        className="w-full bg-transparent border-b-2 border-[#1A1A2E]/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-[#1A1A2E] placeholder:text-[#1A1A2E]/20"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A2E]/40 flex items-center gap-2">
                        <BedDouble className="w-3 h-3 text-[#CFA052]" /> Key Count
                      </label>
                      <input 
                        type="number" 
                        required
                        placeholder="250"
                        className="w-full bg-transparent border-b-2 border-[#1A1A2E]/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-[#1A1A2E] placeholder:text-[#1A1A2E]/20"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A2E]/40 flex items-center gap-2">
                        <CircleDollarSign className="w-3 h-3 text-[#CFA052]" /> Asking Price
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="$ 25,000,000"
                        className="w-full bg-transparent border-b-2 border-[#1A1A2E]/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-[#1A1A2E] placeholder:text-[#1A1A2E]/20"
                      />
                    </div>
                  </div>

                  {/* Photo Upload Area */}
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A2E]/40 flex items-center gap-2">
                      <Camera className="w-3 h-3 text-[#CFA052]" /> Property Portfolio (Photos)
                    </label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="group cursor-pointer p-12 border-2 border-dashed border-[#1A1A2E]/10 rounded-[2rem] hover:border-[#CFA052]/50 hover:bg-[#CFA052]/5 transition-all duration-500 flex flex-col items-center gap-4 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#1A1A2E]/5 group-hover:bg-[#CFA052]/20 flex items-center justify-center transition-colors">
                        <Upload className="w-8 h-8 text-[#1A1A2E]/20 group-hover:text-[#CFA052] transition-colors" />
                      </div>
                      <div>
                        <p className="text-[#1A1A2E] font-bold">Drag & drop your property images</p>
                        <p className="text-xs text-[#1A1A2E]/40 mt-1">Maximum 10 high-resolution photos (Max 20MB each)</p>
                      </div>
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden" 
                      />
                    </div>

                    {/* File Preview */}
                    <AnimatePresence>
                      {files.length > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-wrap gap-3 pt-4"
                        >
                          {files.map((file, index) => (
                            <motion.div 
                              key={index}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="group relative px-4 py-2 bg-[#CFA052]/10 rounded-full border border-[#CFA052]/20 flex items-center gap-3"
                            >
                              <span className="text-[10px] font-bold text-[#CFA052] truncate max-w-[150px]">{file.name}</span>
                              <button 
                                type="button" 
                                onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                                className="w-4 h-4 rounded-full bg-[#CFA052]/20 flex items-center justify-center hover:bg-[#CFA052] hover:text-white transition-all"
                              >
                                <X className="w-2.5 h-2.5" />
                              </button>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message / Details */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A2E]/40 flex items-center gap-2">
                       Message / Key Highlights
                    </label>
                    <textarea 
                      placeholder="Share any special features or specific requirements regarding the sale..."
                      className="w-full bg-transparent border-b-2 border-[#1A1A2E]/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-[#1A1A2E] placeholder:text-[#1A1A2E]/20 min-h-[120px] resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-6 bg-[#1A1A2E] text-white rounded-full font-bold tracking-[0.3em] uppercase text-xs shadow-2xl shadow-black/20 hover:bg-[#CFA052] transition-colors mt-8"
                  >
                    Submit Inquiry
                  </motion.button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-[#CFA052] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#CFA052]/30">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Inquiry Received</h3>
                  <p className="text-[#1A1A2E]/50 mb-10 max-w-sm mx-auto">
                    Your property details have been submitted securely. An elite investment specialist will contact you within 24 hours.
                  </p>
                  <Link href="/">
                    <button className="px-10 py-4 border-2 border-[#1A1A2E]/10 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#1A1A2E] hover:text-white transition-all">
                      Return to Home
                    </button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ BENEFITS SECTION ══════════ */}
      <section className="py-24 bg-[#1A1A2E]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                <Check className="w-6 h-6 text-[#CFA052]" />
              </div>
              <h4 className="text-white font-bold text-lg uppercase tracking-widest">Global Reach</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed">Access to a curated database of 500+ private equity groups and family offices.</p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                <Check className="w-6 h-6 text-[#CFA052]" />
              </div>
              <h4 className="text-white font-bold text-lg uppercase tracking-widest">Discreet Process</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed">Highly confidential divestment strategy protecting your brand legacy.</p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                <Check className="w-6 h-6 text-[#CFA052]" />
              </div>
              <h4 className="text-white font-bold text-lg uppercase tracking-widest">Expert Valuation</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed">Comprehensive asset analysis to ensure you achieve the highest market value.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
