"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Shield, Globe, Users, Trophy, Handshake, Zap } from "lucide-react";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

const categories = [
  { id: "equity", label: "Equity Partnership" },
  { id: "management", label: "Management Partnership" },
  { id: "branding", label: "Branding & Development Inquiry" },
  { id: "consulting", label: "Consulting Inquiry" },
  { id: "general", label: "General Inquiry" },
  { id: "career", label: "Career Inquiry", highlight: true }
];

export default function SayHelloPage() {
  const [selectedCat, setSelectedCat] = useState(categories[4]); // General as default
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: `${selectedCat.label}: ${formData.company}`,
        message: `Inquiry Type: ${selectedCat.label}\nCompany: ${formData.company}`,
        source: 'say_hello_page'
      });

      if (result.success) {
        toast.success("Engagement mandate received. We will respond shortly.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "" });
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

      {/* ── INQUIRY SELECTOR ── */}
      <section className="py-24 bg-[#FCFCFC]">
        <div className="container mx-auto px-6 max-w-7xl">
           <h3 className="text-2xl md:text-3xl font-serif text-black mb-16 italic">Please select your inquiry type below:</h3>
           
           <div className="flex flex-wrap items-center gap-x-8 gap-y-12">
              {categories.map((cat, i) => (
                <div key={cat.id} className="flex items-center group">
                  <button 
                    onClick={() => setSelectedCat(cat)}
                    className={`text-xl md:text-2xl font-serif transition-all duration-300 ${
                      selectedCat.id === cat.id 
                      ? "text-[#8B0000] italic scale-105" 
                      : "text-black/40 hover:text-black"
                    }`}
                  >
                    {cat.label}
                  </button>
                  {i < categories.length - 1 && (
                    <div className="w-12 h-px bg-black/10 mx-6 md:mx-10 scale-x-150" />
                  )}
                  {cat.highlight && selectedCat.id === cat.id && (
                    <div className="w-12 h-px bg-[#8B0000]/40 mx-6 md:mx-10 scale-x-150" />
                  )}
                </div>
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
