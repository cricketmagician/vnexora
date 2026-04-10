"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight, MessageCircle, ArrowRight, Building2, Shield, User, Zap, Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

const categories = [
  { id: "partnership", label: "Management Partnership", icon: Shield, desc: "Alignment of interest for institutional asset growth." },
  { id: "branding", label: "Branding & Development", icon: Building2, desc: "Architecting legacies through visual & operational identity." },
  { id: "consulting", label: "Consulting Inquiry", icon: Zap, desc: "Asset diagnostics and strategic yield optimization." },
  { id: "career", label: "Career Inquiry", icon: User, desc: "Join our collective of institutional hospitality experts." },
  { id: "general", label: "General Inquiry", icon: Globe, desc: "Global boutique concierge & miscellaneous inquiries." }
];

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    propertyLocation: "",
    propertyKeys: "",
    position: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.whatsapp,
        subject: `${selectedCategory.label} via Contact Page`,
        message: `Category: ${selectedCategory.label}\n\n${formData.propertyLocation ? `Location: ${formData.propertyLocation}\n` : ""}${formData.propertyKeys ? `Keys: ${formData.propertyKeys}\n` : ""}${formData.position ? `Position: ${formData.position}\n` : ""}\nMessage: ${formData.message}`,
        source: 'contact_page'
      });

      if (result.success) {
        toast.success("Institutional message delivered. Our concierge will respond shortly.");
        setFormData({ firstName: "", lastName: "", email: "", whatsapp: "", propertyLocation: "", propertyKeys: "", position: "", message: "" });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An institutional processing error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-mustard selection:text-white pt-12 pb-24">

      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] mt-12 md:mt-20 mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row max-w-7xl mx-auto border border-black/5"
        >
          {/* LEFT: Branding & Image (35%) */}
          <div className="lg:w-[35%] relative bg-[#050505] p-10 md:p-16 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0">
              <Image 
                src="/images/hero/ultimate_luxury.png" 
                alt="Contact Vnexora" 
                fill 
                className="object-cover opacity-50 mix-blend-luminosity scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
             
            <div className="relative z-10 flex flex-col h-full py-8">
              <div className="flex items-center gap-3 mb-12 scale-110 origin-left">
                <div className="relative w-8 h-8">
                  <Image src="/images/vnexora-bird-full.png" alt="Vnexora" fill className="object-contain brightness-125" />
                </div>
                <span className="text-white text-lg font-serif tracking-[0.2em] uppercase">Vnexora</span>
              </div>

              <div className="space-y-4 mb-20">
                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  Institutional <br/><span className="italic text-mustard">Concierge.</span>
                </h2>
                <p className="text-white/50 font-light text-sm md:text-base max-w-xs leading-relaxed">
                  Precision stewardship for the world&apos;s most discerning hospitality assets.
                </p>
              </div>
               
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-mustard border border-white/10 group-hover:bg-mustard group-hover:text-black transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-[9px] font-black tracking-widest uppercase mb-1">Mandate Inquiries</span>
                    <a href="mailto:connect@vnexora.com" className="text-sm text-white/90 font-light">connect@vnexora.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-mustard border border-white/10 group-hover:bg-mustard group-hover:text-black transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-[9px] font-black tracking-widest uppercase mb-1">Executive Line</span>
                    <a href="tel:+918318195911" className="text-sm text-white/90 font-light">+91 83181 95911</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Form (65%) */}
          <div className="lg:w-[65%] p-10 md:p-20 bg-white flex flex-col relative overflow-hidden">
            
            <div className="relative z-10 max-w-4xl w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-16"
              >
                <span className="text-mustard text-[10px] font-black uppercase tracking-[0.5em] block mb-4">Engagement Select</span>
                <h3 className="text-2xl md:text-3xl font-serif text-forest tracking-tight">I am looking for...</h3>
              </motion.div>

              {/* Category Selector */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex flex-col items-start p-6 rounded-3xl border transition-all duration-500 text-left cursor-pointer group ${
                      selectedCategory.id === cat.id 
                      ? "bg-forest border-forest text-white shadow-2xl shadow-forest/20" 
                      : "bg-white border-black/5 text-slate-400 hover:border-mustard/40 hover:bg-mustard/[0.02]"
                    }`}
                  >
                    <cat.icon className={`w-5 h-5 mb-4 ${selectedCategory.id === cat.id ? "text-mustard" : "text-slate-300 group-hover:text-mustard"}`} />
                    <span className={`text-[11px] font-black uppercase tracking-widest mb-1 ${selectedCategory.id === cat.id ? "text-white" : "text-forest"}`}>
                      {cat.label}
                    </span>
                    <p className={`text-[10px] font-light leading-relaxed ${selectedCategory.id === cat.id ? "text-white/50" : "text-slate-400"}`}>
                      {cat.desc}
                    </p>
                  </button>
                ))}
              </div>

              {/* Form Area */}
              <AnimatePresence mode="wait">
                <motion.form 
                  key={selectedCategory.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-10" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input type="text" id="firstName" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="peer w-full border-b border-black/10 bg-transparent py-3 text-forest placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light" placeholder="First Name" />
                      <label htmlFor="firstName" className="absolute left-0 -top-4 text-[10px] text-slate-400 font-black uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-light peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-mustard">First Name</label>
                    </div>
                    <div className="relative group">
                      <input type="text" id="lastName" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="peer w-full border-b border-black/10 bg-transparent py-3 text-forest placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light" placeholder="Last Name" />
                      <label htmlFor="lastName" className="absolute left-0 -top-4 text-[10px] text-slate-400 font-black uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-light peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-mustard">Last Name</label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="peer w-full border-b border-black/10 bg-transparent py-3 text-forest placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light" placeholder="Email" />
                      <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] text-slate-400 font-black uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-light peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-mustard">Email Address</label>
                    </div>
                    <div className="relative group">
                      <input type="tel" id="whatsapp" required value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} className="peer w-full border-b border-black/10 bg-transparent py-3 text-forest placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light" placeholder="WhatsApp" />
                      <label htmlFor="whatsapp" className="absolute left-0 -top-4 text-[10px] text-slate-400 font-black uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-light peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-mustard">WhatsApp (+91)</label>
                    </div>
                  </div>

                  {/* Dynamic Fields */}
                  {selectedCategory.id === "partnership" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative group">
                        <input type="text" id="propLoc" value={formData.propertyLocation} onChange={(e) => setFormData({...formData, propertyLocation: e.target.value})} className="peer w-full border-b border-black/10 bg-transparent py-3 text-forest placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light" placeholder="Location" />
                        <label htmlFor="propLoc" className="absolute left-0 -top-4 text-[10px] text-slate-400 font-black uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-light peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-mustard">Property Location</label>
                      </div>
                      <div className="relative group">
                        <input type="text" id="propKeys" value={formData.propertyKeys} onChange={(e) => setFormData({...formData, propertyKeys: e.target.value})} className="peer w-full border-b border-black/10 bg-transparent py-3 text-forest placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light" placeholder="Keys" />
                        <label htmlFor="propKeys" className="absolute left-0 -top-4 text-[10px] text-slate-400 font-black uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-light peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-mustard">Asset Size (Number of Keys)</label>
                      </div>
                    </div>
                  )}

                  {selectedCategory.id === "career" && (
                    <div className="relative group">
                      <input type="text" id="pos" value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className="peer w-full border-b border-black/10 bg-transparent py-3 text-forest placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light" placeholder="Position" />
                      <label htmlFor="pos" className="absolute left-0 -top-4 text-[10px] text-slate-400 font-black uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-light peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-mustard">Position Interested In</label>
                    </div>
                  )}

                  <div className="relative group pt-4">
                    <textarea id="message" rows={3} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="peer w-full border-b border-black/10 bg-transparent py-3 text-forest placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light resize-none" placeholder="Message" />
                    <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] text-slate-400 font-black uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-light peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-mustard">Briefly describe your inquiry</label>
                  </div>

                  <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-black/5">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                       Mandate Processing: 24h
                    </p>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group bg-forest text-white px-14 py-6 rounded-full font-black tracking-[0.3em] uppercase text-[10px] transition-all duration-500 hover:shadow-2xl hover:shadow-forest/30 flex items-center gap-6 disabled:opacity-50"
                    >
                      {isSubmitting ? "Delivering..." : "Submit Mandate"}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.form>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

    </main>
  );
}
