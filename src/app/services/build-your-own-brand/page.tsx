"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Target, 
  Zap, 
  ShieldCheck, 
  Eye,
  Compass,
  PenTool,
  Globe,
  X,
  Calendar,
  Video,
  FileText
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useState } from "react";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

export default function BuildYourOwnBrandPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const fullName = formData.get("fullName") as string;
      const email = formData.get("email") as string;
      const model = formData.get("model") as string;

      const result = await submitInquiry({
        fullName,
        email,
        phone: "",
        subject: `Build Your Brand Inquiry: ${model}`,
        message: `Preferred Engagement Model: ${model}`,
        source: 'build_your_brand_hero'
      });

      if (result.success) {
        toast.success("Engagement brief successfully transmitted.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Transmission error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-mustard/30">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/services/build-your-brand-hero.png"
          alt="Luxury Independent Hotel Lobby"
          fill
          className="object-cover brightness-[0.35] scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12 lg:mb-20"
          >
            <Link href="/services/brand-partnership-solutions" className="inline-flex items-center text-mustard hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Back to Partnerships</span>
            </Link>
          </motion.div>
 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-mustard" />
                <span className="text-mustard font-bold text-xs md:text-sm tracking-[0.5em] uppercase">
                  Strategic Path 02
                </span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] mb-8 tracking-tighter">
                Build Your <br />
                <span className="italic font-light">Legacy.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-white/60 text-lg md:text-2xl max-w-xl leading-relaxed font-light">
                Breaking the franchise chain to build a unique, high-yield independent identity that captures the future of luxury travel.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative p-10 bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-2 h-2 bg-mustard" />
              <div className="mb-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-mustard mb-2">Initialize Your Brief</h3>
                <p className="text-white/40 text-xs font-light">Confidential institutional inquiry</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[8px] font-black tracking-widest text-white/30 uppercase pl-1">Full Name</label>
                  <input 
                    name="fullName"
                    required
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 outline-none focus:border-mustard transition-all text-xs font-light text-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[8px] font-black tracking-widest text-white/30 uppercase pl-1">Corporate Email</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="Enter email address"
                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 outline-none focus:border-mustard transition-all text-xs font-light text-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[8px] font-black tracking-widest text-white/30 uppercase pl-1">Preferred Model</label>
                  <div className="relative">
                    <select 
                      name="model"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 outline-none focus:border-mustard transition-all text-xs font-light text-white appearance-none cursor-pointer"
                    >
                      <option className="bg-[#080808]" value="">Select Model</option>
                      <option className="bg-[#080808]" value="Management Contract">Management Contract</option>
                      <option className="bg-[#080808]" value="Franchise Agreement">Franchise Agreement</option>
                      <option className="bg-[#080808]" value="Revenue Share">Revenue Share</option>
                      <option className="bg-[#080808]" value="Revenue Share with MG">Revenue Share with MG</option>
                      <option className="bg-[#080808]" value="Lease">Lease</option>
                      <option className="bg-[#080808]" value="Hybrid Model">Hybrid Model</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="w-3 h-3 text-white/20 rotate-90" />
                    </div>
                  </div>
                </div>
                
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-mustard text-black py-5 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white transition-all duration-500 group flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? "TRANSMITTING..." : "SUBMIT BRIEF"} {!isSubmitting && <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Floating Stat Overlay */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-20 right-10 hidden lg:block border-l border-mustard/30 pl-8"
        >
          <div className="text-4xl font-serif italic text-white mb-1">32%</div>
          <div className="text-[9px] tracking-[0.3em] uppercase text-white/40 leading-relaxed">
            Revenue uplift in <br />
            independent conversions
          </div>
        </motion.div>
      </section>

      {/* 2. END-TO-END BRAND CREATION SERVICES */}
      <section className="py-24 md:py-40 bg-white text-black overflow-hidden relative border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mb-20 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-mustard" />
                  <span className="text-mustard font-bold text-xs tracking-[0.4em] uppercase">How can we help you?</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black leading-[1.1]">
                  Our <span className="italic font-light">End-to-End Brand Creation</span> Services for hotels, resorts, clubhouses, wellness centres and more...
                </h2>
                <p className="text-xl text-black/60 font-light leading-relaxed max-w-2xl">
                  We don't just build hotels — we build brands that last. Our integrated solutions cover:
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {[
                {
                  title: "Concept Development & Brand Positioning",
                  desc: "Shape a unique brand identity that resonates with your target market — luxury, boutique, wellness, or lifestyle."
                },
                {
                  title: "Feasibility Study & Financial Viability",
                  desc: "Market demand analysis, ROI projections, and investor-ready reports so you make decisions backed by data."
                },
                {
                  title: "Technical Services & Design Assistance",
                  desc: "Work with your architects to ensure layouts are operationally brilliant — back-of-house planning, F&B flow, compliance, and guest journey mapping."
                },
                {
                  title: "Pre-Opening & Launch",
                  desc: "Recruitment, staff training, SOPs, kitchen commissioning, and branding roll-out — we make you guest-ready from Day One."
                },
                {
                  title: "Branding & Marketing",
                  desc: "Visual identity creation, digital presence, performance marketing, and PR campaigns to position your hotel as a must-visit destination."
                },
                {
                  title: "White-Label Operations & Asset Management",
                  desc: "End-to-end operations under Vnexora's management, performance monitoring, and revenue optimization to protect your investment."
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-6 group"
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-mustard transition-colors duration-500 min-h-[3.5rem] flex items-center">
                      {service.title}
                    </h3>
                    <div className="w-8 h-[1px] bg-black/10 group-hover:w-16 group-hover:bg-mustard transition-all duration-700" />
                  </div>
                  <p className="text-base text-black/50 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 pt-12 border-t border-black/5"
            >
              <button
                onClick={() => setShowBooking(true)}
                className="inline-flex items-center gap-3 text-mustard font-bold text-xs tracking-[0.3em] uppercase hover:gap-6 transition-all"
              >
                Enquire Now <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mustard to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-mustard">The Commencement</h4>
            <h2 className="text-5xl md:text-8xl font-serif leading-tight">
              Ready to grow <br />
              <span className="italic text-mustard">beyond the brand?</span>
            </h2>
          </motion.div>
          
          <button
            onClick={() => setShowBooking(true)}
            className="inline-flex items-center gap-6 border border-white/20 px-16 py-8 hover:bg-mustard hover:text-black hover:border-mustard transition-all duration-700 group"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">Initialize Your Brand Brief</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* MODAL SYSTEM */}
      <AnimatePresence>
        {showBooking && (/* Standard Booking Modal - Can be extracted to a component later if needed */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBooking(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#080808] border border-white/[0.07] rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CFA052] to-transparent" />
              <div className="flex items-start justify-between p-10 pb-6">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.6em] text-[#CFA052] mb-3">Institutional Briefing</div>
                  <h3 className="text-3xl font-serif italic text-white leading-tight">Begin Your Personal<br />Brand Evolution.</h3>
                </div>
                <button onClick={() => setShowBooking(false)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all">
                  <X size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pb-8">
                {[
                  { icon: Calendar, label: "CEO Meeting", desc: "Private consultation with our directorate for full-scale brand architecture.", cta: "Book Session", href: "mailto:contact@vnexora.com", highlight: true },
                  { icon: Video, label: "Brand Discovery", desc: "A virtual deep-dive into your asset potential and competitive identity.", cta: "Schedule Call", href: "#", highlight: false },
                  { icon: FileText, label: "Technical Brief", desc: "Submit your asset details for a clinical brand feasibility audit.", cta: "Send Brief", href: "#", highlight: false },
                ].map((opt, i) => (
                  <div key={i} className={`p-8 rounded-2xl flex flex-col gap-6 cursor-pointer transition-all border ${opt.highlight ? "bg-mustard border-mustard text-black" : "bg-white/[0.03] border-white/10 hover:border-mustard/30"}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${opt.highlight ? "bg-black/10" : "bg-mustard/10 text-mustard"}`}>
                      <opt.icon size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest mb-2">{opt.label}</div>
                      <p className="text-xs opacity-60 leading-relaxed">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
