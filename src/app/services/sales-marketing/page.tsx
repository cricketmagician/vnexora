"use client";

import { useState, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { 
  motion, 
  useScroll, 
  useTransform 
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Building2, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Search, 
  Globe, 
  BarChart3,
  ChevronRight,
  UserCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function BrandingPromotionPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mandateType, setMandateType] = useState<"Branding" | "Performance" | "Full-Suite">("Branding");
  const formRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const scrollToForm = (type?: "Branding" | "Performance" | "Full-Suite") => {
    if (type) setMandateType(type);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-[#CFA052] selection:text-black">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <div className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-black">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/services/hospitality_branding_hero.png"
            alt="Vnexora Hospitality Branding"
            fill
            className="object-cover brightness-[0.4] saturate-[1.1] scale-105"
            priority
          />
        </motion.div>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />
        
        <div className="container relative z-20 mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link href="/" className="inline-flex items-center text-[#CFA052]/80 hover:text-[#CFA052] transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-3 transition-transform group-hover:-translate-x-2" />
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em]">Back to Portfolio</span>
            </Link>
          </motion.div>

          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-sans font-medium text-white leading-[0.9] tracking-tighter mb-8">
                Architecting <br />
                <span className="font-serif italic font-light">Prestige & Presence.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 border-t border-white/10 pt-12"
            >
              <p className="text-white/60 font-sans font-light text-lg md:text-xl max-w-xl leading-relaxed tracking-tight">
                Vnexora engineers world-class branding and promotion mandates for hospitality assets that demand institutional-grade visibility.
              </p>
              <button 
                onClick={() => scrollToForm()}
                className="w-fit px-10 py-5 bg-[#CFA052] text-black font-sans font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl"
              >
                Log Your Mandate
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#CFA052] to-transparent" />
        </motion.div>
      </div>

      {/* 2. THE BRAND PHILOSOPHY (VITAL STATEMENT) */}
      <Section spacing="lg" className="relative bg-[#FAF9F6] pt-32 pb-40 overflow-hidden">
        
        {/* Artistic Background Elements (Rotated Images) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.12] overflow-hidden">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [-2, -3, -2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] -left-[10%] w-[500px] h-[300px] saturate-[1.2] brightness-110"
          >
            <Image src="/images/services/luxury_rooms.png" alt="" fill className="object-cover rounded-2xl shadow-2xl" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [1, 2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] -right-[5%] w-[450px] h-[350px] saturate-[1.2] brightness-110"
          >
            <Image src="/images/hotel_guests_enjoying.png" alt="" fill className="object-cover rounded-2xl shadow-2xl" />
          </motion.div>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[9px] font-black text-[#CFA052] tracking-[0.5em] uppercase mb-8 block">Brand Vision</span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-900 leading-[1.1] mb-12">
                Luxury is no <br />longer about being <br /><span className="font-sans not-italic font-bold">found.</span> It's about <br />being <span className="text-[#CFA052]">remembered.</span>
              </h2>
              <p className="text-xl text-zinc-600 font-sans font-light leading-relaxed max-w-lg mb-12">
                In a digital landscape crowded with generic hospitality offerings, Vnexora crafts distinct narratives that elevate properties from commodities to destinations.
              </p>
              <div className="flex items-center gap-4 py-8 border-t border-zinc-200">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 border-2 border-white rounded-full bg-stone-200 overflow-hidden relative">
                       <Image src={i === 1 ? "/images/team/member1.png" : i === 2 ? "/images/team/member2.png" : "/images/team/member3.png"} alt="Expert" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900">40% Increase</p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-sans font-light">Average Direct Booking Growth</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-12">
               {[
                 { 
                   title: "Strategic Brand Identity", 
                   desc: "Defining the unique 'Pulse' of your property through elite visual systems and narrative-driven positioning.",
                   icon: Target 
                 },
                 { 
                   title: "AI-Powered Guest Journeys", 
                   desc: "Utilizing custom AI concierge systems to convert high-intent digital traffic into loyal guests.",
                   icon: Sparkles 
                 },
                 { 
                   title: "Institutional PR & Social", 
                   desc: "Deep-tier media placements and elite influencer collaborations in the global luxury network.",
                   icon: Globe 
                 }
               ].map((item, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: idx * 0.2 }}
                   className="p-10 bg-white/95 backdrop-blur-xl border border-stone-100 hover:border-[#CFA052] transition-all group"
                 >
                   <div className="w-12 h-12 bg-stone-50 flex items-center justify-center mb-6 group-hover:bg-[#CFA052] group-hover:text-black transition-all">
                     <item.icon size={20} />
                   </div>
                   <h3 className="text-lg font-sans font-bold tracking-tight uppercase mb-4">{item.title}</h3>
                   <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 3. AI & DIGITAL ECOSYSTEM (THE FIELMENTE INFLUENCE) */}
      <Section spacing="lg" className="bg-[#050505] py-40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-[9px] font-black text-[#CFA052] tracking-[0.5em] uppercase mb-8 block">Future-Proof Support</span>
             <h2 className="text-4xl md:text-6xl font-sans font-medium text-white mb-8">The Digital <span className="font-serif italic font-light">Ecosystem.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { title: "SEO Performance", label: "01", icon: <Search size={22} />, desc: "Ranking in ChatGPT, Gemini, and AI Search results." },
               { title: "AI Concierge", label: "02", icon: <Zap size={22} />, desc: "24/7 automated elite booking & guest support desk." },
               { title: "Revenue Audit", label: "03", icon: <BarChart3 size={22} />, desc: "Weekly RevPAR & OTA commission optimization." },
               { title: "Mobile Dominance", label: "04", icon: <Building2 size={22} />, desc: "Conversion-first web ecosystems for luxury travelers." }
             ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-12 border border-white/5 bg-white/5 hover:border-[#CFA052]/40 transition-all flex flex-col justify-between h-[350px]"
                >
                  <div>
                    <span className="text-[12px] font-sans font-black text-white/20 mb-8 block">{feature.label}</span>
                    <div className="text-[#CFA052] mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-sans font-bold text-white mb-4 uppercase tracking-tighter">{feature.title}</h3>
                    <p className="text-white/40 text-sm font-sans font-light leading-relaxed">{feature.desc}</p>
                  </div>
                  <ArrowUpRight className="text-white/20 group-hover:text-[#CFA052] transition-colors" />
                </motion.div>
             ))}
          </div>
        </div>
      </Section>

      {/* 4. AUDIT INQUIRY FORM SECTION */}
      <Section spacing="lg" className="relative bg-[#FAF9F6] pt-24 pb-32 overflow-hidden">
        
        {/* Subtle Background Collage */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.9] overflow-hidden">
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [1, 2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[5%] w-[400px] h-[300px] hidden lg:block"
          >
            <Image src="/images/services/sales_marketing.png" alt="" fill className="object-cover rounded-2xl shadow-2xl" />
          </motion.div>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
           {/* Specialized Inquiry Form */}
          <div ref={formRef} className="bg-white/95 backdrop-blur-2xl border border-stone-100 overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,0,0,0.15)] scroll-mt-32">
            {!isSubmitted ? (
               <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Form Left Side (Branding Message) */}
                  <div className="p-12 lg:p-20 bg-[#050505] text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <Image src="/images/services/hospitality_branding_hero.png" alt="" fill className="object-cover scale-150 rotate-12" />
                    </div>
                    
                    <div className="relative z-10">
                      <span className="text-[9px] font-black text-[#CFA052] tracking-[0.5em] uppercase mb-10 block">Request Audit</span>
                      <h2 className="text-4xl font-serif text-white leading-tight italic mb-8">Evolve Your <br /><span className="font-bold font-sans not-italic uppercase tracking-tight">Hospitality Brand</span></h2>
                      <div className="space-y-6">
                        {[
                          { icon: ShieldCheck, text: "Strict Brand Governance" },
                          { icon: BarChart3, text: "Measurable Revenue Benchmarks" },
                          { icon: UserCheck, text: "Direct Stakeholder Access" }
                        ].map((item, idx) => (
                           <div key={idx} className="flex items-center gap-4 text-white/40 text-sm font-sans font-light">
                             <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-[#CFA052]">
                               <item.icon size={16} />
                             </div>
                             {item.text}
                           </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-16 pt-8 border-t border-white/5 flex items-center gap-2 relative z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052] animate-pulse" />
                      <span className="text-[9px] uppercase font-sans font-bold tracking-[0.2em] text-white/30">Strategic Desk Available</span>
                    </div>
                  </div>

                  {/* Form Right Side (Inputs) */}
                  <div className="p-12 lg:p-20 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3 group">
                          <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Representative Name</label>
                          <input required type="text" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-sm font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="E.G. Alok Yadav" />
                        </div>
                        <div className="space-y-3 group">
                          <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Property / Entity</label>
                          <input required type="text" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-sm font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="E.G. Taj / Oberoi / Boutique Resort" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3 group">
                          <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Official Email</label>
                          <input required type="email" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-sm font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="representative@hotel.com" />
                        </div>
                        <div className="space-y-3 group">
                          <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Direct Contact</label>
                          <input required type="tel" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-sm font-sans font-medium text-stone-900 placeholder:text-stone-300" placeholder="+91 XXXX XXX XXX" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3 group">
                          <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Primary Mandate</label>
                          <div className="relative">
                            <select className="w-full bg-white/50 backdrop-blur-md border-b border-stone-200 py-3 focus:outline-none focus:border-[#CFA052] transition-all text-sm font-sans font-semibold text-stone-900 appearance-none cursor-pointer tracking-tight">
                              <option>Brand Identity Architecture</option>
                              <option>Performance Marketing (Ads & SEO)</option>
                              <option>AI Reservation Integration</option>
                              <option>Full-Suite Strategic Support</option>
                            </select>
                            <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CFA052] rotate-90 pointer-events-none" />
                          </div>
                        </div>
                        <div className="space-y-6">
                           <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-black text-[#CFA052]">Request Type</label>
                           <div className="flex gap-2">
                             {["Audit", "Proposal", "Consult"].map((type) => (
                               <button 
                                 key={type} 
                                 type="button" 
                                 onClick={() => {}}
                                 className={cn(
                                   "flex-1 py-3 border border-stone-200 rounded-none text-[9px] font-sans font-black uppercase tracking-widest transition-all text-stone-400 hover:border-[#CFA052]/40"
                                 )}
                               >
                                 {type}
                               </button>
                             ))}
                           </div>
                        </div>
                      </div>

                      <div className="pt-8">
                        <button 
                          type="submit"
                          className="w-full bg-[#050505] text-white py-6 flex items-center justify-center gap-4 group hover:bg-[#CFA052] hover:text-black transition-all duration-500 shadow-2xl"
                        >
                          <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em]">Transmit Inquiry</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </form>
                  </div>
               </div>
            ) : (
                <div className="p-24 text-center bg-[#050505]">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-20 h-20 bg-[#CFA052] flex items-center justify-center mb-8">
                      <ShieldCheck size={40} className="text-black" />
                    </div>
                    <h2 className="text-4xl text-white font-serif italic mb-4">Mandate Received.</h2>
                    <p className="text-white/40 font-sans tracking-widest text-[10px] uppercase">A Strategic Advisor will follow up within 24 hours.</p>
                  </motion.div>
                </div>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}

// Helper icons missing from standard imports
const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="22" 
    height="22" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);
