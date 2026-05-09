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
  FileText,
  UploadCloud
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

export default function BuildYourOwnBrandPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [propertyImage, setPropertyImage] = useState<{ name: string; content: string } | null>(null);
  const formRef = useRef<HTMLElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("Property image change detected:", file?.name);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("Property image reader loaded");
        setPropertyImage({ name: file.name, content: reader.result as string });
        toast.success("Property image attached.");
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setPropertyImage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const fullName = formData.get("fullName") as string;
      const email = formData.get("email") as string;
      const mobile = formData.get("mobile") as string;
      const brand = formData.get("brand") as string;
      const status = formData.get("status") as string;
      const city = formData.get("city") as string;
      const rooms = formData.get("rooms") as string;
      const description = formData.get("description") as string;

      const result = await submitInquiry({
        fullName,
        email,
        phone: mobile,
        subject: `Corporate Brand Mandate: ${brand} (${status})`,
        message: `Asset Details:
- Brand Interest: ${brand}
- Property Status: ${status}
- Location: ${city}
- No. of Rooms: ${rooms}
- Preferred Model: Build Your Own Brand
- Brief: ${description}`,
        source: 'build_your_brand_page'
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
            className="mb-12"
          >
            <Link href="/services/brand-partnership-solutions" className="inline-flex items-center text-mustard hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Back to Partnerships</span>
            </Link>
          </motion.div>
 
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
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
            <motion.p variants={itemVariants} className="text-white/60 text-lg md:text-2xl max-w-2xl leading-relaxed font-light mb-12">
              Breaking the franchise chain to build a unique, high-yield independent identity that captures the future of luxury travel.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button
                onClick={() => setShowBooking(true)}
                className="inline-flex items-center gap-4 bg-mustard text-black px-12 py-6 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 rounded-none group"
              >
                Inquire About Your Brand <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
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
              className="mt-12 pt-8 border-t border-black/5"
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION & STRATEGIC BRIEF FORM - LIGHT MODE */}
      <section ref={formRef} className="py-20 md:py-24 bg-[#FAF9F6] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center lg:items-start">
            <div className="lg:w-1/2 space-y-10 lg:pt-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-center lg:text-left"
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-mustard">The Commencement</h4>
                <h2 className="text-5xl md:text-[6vw] font-serif leading-tight text-black">
                  Ready to grow <br />
                  <span className="italic text-mustard">beyond the brand?</span>
                </h2>
                <p className="text-black/40 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  Step into the future of hospitality mastery. Initialize your confidential institutional brief and let us architect your legacy.
                </p>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 md:p-14 bg-white border border-black shadow-[0_50px_100px_rgba(0,0,0,0.04)] relative"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-mustard" />
                <div className="mb-10 text-center lg:text-left">
                  <h3 className="text-2xl font-serif text-black italic mb-2">Initialize Your Brief</h3>
                  <div className="w-12 h-[2px] bg-mustard mb-4 mx-auto lg:mx-0" />
                  <p className="text-black/30 text-[9px] font-black uppercase tracking-[0.3em]">Confidential Strategic Inquiry</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 text-black">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Engagement Model (Swapped from Brands) */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Engagement Model</label>
                      <div className="relative">
                        <select 
                          name="brand"
                          required
                          className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black appearance-none cursor-pointer"
                        >
                          <option value="">-- Engagement Model --</option>
                          <option value="Management Contract">Management Contract</option>
                          <option value="Franchise Agreement">Franchise Agreement</option>
                          <option value="Revenue Share">Revenue Share</option>
                          <option value="Revenue Share with MG">Revenue Share with MG</option>
                          <option value="Lease">Lease</option>
                          <option value="Hybrid Model">Hybrid Model</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                          <ArrowRight className="w-4 h-4 text-black rotate-90" />
                        </div>
                      </div>
                    </div>

                    {/* Property Status */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Property Status</label>
                      <div className="relative">
                        <select 
                          name="status"
                          required
                          className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black appearance-none cursor-pointer"
                        >
                          <option value="">-- Property status --</option>
                          <option value="Operational">Operational</option>
                          <option value="Under Construction">Under Construction</option>
                          <option value="Planning Stage">Planning Stage / Land Only</option>
                          <option value="Seeking Acquisition">Seeking Acquisition</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                          <ArrowRight className="w-4 h-4 text-black rotate-90" />
                        </div>
                      </div>
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">City</label>
                      <input 
                        name="city"
                        required
                        type="text" 
                        placeholder="E.G. Mumbai / Dubai"
                        className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10"
                      />
                    </div>

                    {/* Your Name */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Your Name</label>
                      <input 
                        name="fullName"
                        required
                        type="text" 
                        placeholder="E.G. John Doe"
                        className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Corporate Email</label>
                      <input 
                        name="email"
                        required
                        type="email" 
                        placeholder="E.G. info@hotel.com"
                        className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10"
                      />
                    </div>

                    {/* Mobile */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Mobile Number</label>
                      <input 
                        name="mobile"
                        required
                        type="tel" 
                        placeholder="+91 / +971 ..."
                        className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10"
                      />
                    </div>

                    {/* No. of rooms */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">No. of Rooms</label>
                      <input 
                        name="rooms"
                        required
                        type="number" 
                        placeholder="E.G. 50"
                        className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Description / Vision</label>
                    <textarea 
                      name="description"
                      rows={3}
                      placeholder="TELL US ABOUT YOUR PROJECT VISION..."
                      className="w-full bg-black/[0.02] border border-black/10 p-6 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10 resize-none rounded-2xl italic"
                    />
                  </div>

                  {/* Property Image */}
                  <div className="space-y-4 pt-4">
                    <div className="relative group">
                      {!propertyImage ? (
                        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-black/5 rounded-3xl hover:border-mustard/20 transition-all bg-black/[0.01]">
                          <label className="text-[9px] font-black tracking-[0.4em] text-mustard cursor-pointer hover:text-black transition-colors flex flex-col items-center gap-4">
                            <UploadCloud size={24} className="opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                            <span>SELECT PROPERTY IMAGE</span>
                            <input 
                              name="propertyImage" 
                              type="file" 
                              onChange={handleFileChange}
                              className="hidden" 
                            />
                          </label>
                          <p className="text-[8px] text-black/20 mt-2 uppercase tracking-widest">Maximum 20MB • JPG, PNG, WEBP</p>
                        </div>
                      ) : (
                        <div className="p-6 border border-mustard/30 bg-mustard/5 rounded-3xl flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4 min-w-0">
                            <div className="w-12 h-12 rounded-xl bg-mustard/20 flex items-center justify-center text-mustard shadow-inner">
                              <FileText size={20} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[11px] font-bold text-black truncate uppercase tracking-widest">{propertyImage.name}</p>
                              <p className="text-[8px] font-black text-mustard/60 uppercase tracking-widest">Image attached</p>
                            </div>
                          </div>
                          <button 
                            type="button"
                            onClick={removeImage}
                            className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-red-500 hover:bg-red-50 transition-all shadow-sm"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-[#080808] text-white py-6 font-bold text-[10px] tracking-[0.5em] uppercase hover:bg-mustard hover:text-black transition-all duration-500 flex items-center justify-center gap-4 group"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "SUBMIT STRATEGIC BRIEF"} {!isSubmitting && <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
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
