"use client";

import { useRef, useState, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
} from "framer-motion";
import { 
  Compass,
  Check,
  ChevronLeft,
  Lock,
  Globe,
  Gem,
  ArrowRight,
  ChevronRight,
  Hexagon,
  Building2
} from "lucide-react";
import RoadmapCarousel from "@/components/sections/RoadmapCarousel";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

// --- Components ---

const Section = forwardRef<HTMLElement, { 
  children: React.ReactNode; 
  className?: string; 
  spacing?: "none" | "sm" | "md" | "lg" 
}>(({ children, className, spacing = "md" }, ref) => {
  const spacingClass = {
    none: "",
    sm: "py-12 md:py-24",
    md: "py-24 md:py-40",
    lg: "py-40 md:py-64"
  }[spacing];

  return (
    <section ref={ref} className={cn(spacingClass, className)}>
      {children}
    </section>
  );
});
Section.displayName = "Section";

export default function ResidentialPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const { scrollYProgress: portfolioProgress } = useScroll({
    target: portfolioRef,
    offset: ["start end", "end start"]
  });

  const xTranslate = useTransform(portfolioProgress, [0, 1], ["0%", "-60%"]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: "Residential Asset Mandate",
        source: 'residential_service_page'
      });
      if (result.success) {
        setIsSubmitted(true);
        toast.success("Institutional mandate briefed. Our private desk will reach out.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Process error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image 
            src="/images/services/luxury_residential_buy_sell_hero.png" 
            alt="Luxury Penthouse" 
            fill 
            className="object-cover brightness-50" 
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="space-y-8"
          >
            <span className="text-[10px] font-black tracking-[0.8em] text-[#CFA052] uppercase block">Institutional Residential</span>
            <h1 className="text-6xl md:text-[140px] font-serif italic text-white leading-[0.85] tracking-tighter">
              Private <br />
              <span className="not-italic font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Portfolio.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-light max-w-xl mx-auto tracking-widest uppercase">
              Exclusive Buy-Side & Sell-Side Mandates for Global Family Offices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE ALPHA STRATEGY */}
      <Section spacing="lg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#CFA052]" />
                  <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block">Elite Acquisition</span>
               </div>
               <h2 className="text-5xl md:text-8xl font-serif italic leading-[0.95] text-stone-900">
                 UHNW Alpha <br />
                 <span className="not-italic font-black text-stone-200 uppercase tracking-tighter">Acquisition.</span>
               </h2>
              <p className="text-2xl text-stone-500 font-light leading-relaxed max-w-xl italic">
                Our residential desk represents UHNW individuals and family offices with absolute privacy. From off-market heritage penthouses to private coastal estates.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-20 border-t border-stone-200">
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-stone-50 border border-stone-200 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform">
                    <Lock size={20} className="text-[#CFA052]" />
                  </div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900">Institutional Privacy</h4>
                  <p className="text-stone-400 font-light text-base leading-relaxed">Encrypted communications and non-disclosure protocols for every asset mandate.</p>
                </div>
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-stone-50 border border-stone-200 flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform">
                    <Globe size={20} className="text-[#CFA052]" />
                  </div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900">Global Hub Access</h4>
                  <p className="text-stone-400 font-light text-base leading-relaxed">Direct pipeline to premium inventory in London, Dubai, and Delhi/NCR hubs.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden group shadow-[0_60px_100px_rgba(0,0,0,0.12)] rounded-[3rem]"
            >
              <Image 
                src="/images/services/luxury_residential_portfolio_horizontal.png" 
                alt="Penthouse View" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-12 left-12">
                 <div className="px-8 py-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#CFA052] animate-pulse" />
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white">Portfolio Node_P7</span>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* 3. THE LEGACY PORTFOLIO — Manual Carousel */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-6 mb-20">
            <span className="text-[10px] font-black tracking-[0.8em] text-[#CFA052] uppercase block mb-6">Asset Showcase</span>
            <h2 className="text-5xl md:text-8xl font-serif italic text-white tracking-tighter leading-none mb-8">Legacy Portfolio.</h2>
            <p className="max-w-2xl text-white/30 text-xs font-light tracking-[0.2em] uppercase leading-loose border-l border-[#CFA052]/40 pl-8">
               Exclusive Acquisition pipeline for private family offices and institutional funds.
            </p>
        </div>

        <div className="container mx-auto px-6">
          <RoadmapCarousel 
            nodes={[
              { title: "Coastal Estates", category: "Waterfront", icon: Globe, img: "/Users/nihalkumar/.gemini/antigravity/brain/14332204-a1ae-4723-9864-42766a28797d/genuine_boardroom_analysis_luxury_1775815387721.png" },
              { title: "Heritage Penthouses", category: "City Core", icon: Building2, img: "/Users/nihalkumar/.gemini/antigravity/brain/14332204-a1ae-4723-9864-42766a28797d/genuine_drafting_table_luxury_1775815338434.png" },
              { title: "Private Islands", category: "Ultima", icon: Gem, img: "/Users/nihalkumar/.gemini/antigravity/brain/14332204-a1ae-4723-9864-42766a28797d/genuine_boardroom_analysis_luxury_1775815387721.png" },
              { title: "Residential Tech", category: "Smart Living", icon: Hexagon, img: "/Users/nihalkumar/.gemini/antigravity/brain/14332204-a1ae-4723-9864-42766a28797d/genuine_concierge_key_luxury_1775815482165.png" }
            ]}
          />
        </div>
      </section>

      {/* 4. ASSET MANDATE — Inquiry Form */}
      <Section spacing="lg" className="bg-[#FAF9F6] text-black relative z-30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32 items-center">
            
            <div className="lg:w-1/2 space-y-16">
               <div className="space-y-4">
                  <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block">Engagement</span>
                  <h2 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[0.95] tracking-tighter">
                    The <span className="italic font-light">Mandate.</span>
                  </h2>
               </div>
               <p className="text-2xl text-stone-400 font-light leading-relaxed max-w-sm italic">
                  Initiate a discrete consultation for asset acquisition or portfolio disposition.
               </p>
               
               <div className="flex flex-col gap-8 pt-12 border-t border-stone-200">
                 {[
                   "Off-Market Global Pipeline Access",
                   "Structural & Tax Optimization Coordination",
                   "Discreet Asset Disposition Strategies",
                   "UHNW Asset Management Consultation"
                 ].map((tag) => (
                    <div key={tag} className="flex items-center gap-6 text-xs font-bold uppercase tracking-[0.3em] text-stone-900 group">
                       <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center group-hover:bg-[#CFA052] group-hover:rotate-12 transition-all">
                          <ChevronRight size={14} className="group-hover:text-black text-stone-400" />
                       </div>
                       {tag}
                    </div>
                 ))}
               </div>
            </div>

            <div className="lg:w-1/2 w-full">
              {!isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#050505] p-12 md:p-20 text-white relative overflow-hidden rounded-[3rem] shadow-[0_60px_100px_rgba(0,0,0,0.4)]"
                >
                    {/* Decorative Atmospheric Blur */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#CFA052]/10 blur-[120px] rounded-full" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-16">
                         <Gem size={20} className="text-[#CFA052]" />
                         <h3 className="text-2xl md:text-3xl font-serif italic">Residential Intake Portal</h3>
                      </div>

                      <form className="space-y-12" onSubmit={handleSubmit}>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="text-[9px] uppercase tracking-[0.4em] font-black text-[#CFA052] mb-2 block">Full Name</label>
                            <input 
                              required 
                              type="text" 
                              value={formData.fullName}
                              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                              className="w-full bg-transparent py-4 text-xl font-serif italic text-white focus:outline-none placeholder:text-white/10" 
                              placeholder="Your full legal name" 
                            />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                               <label className="text-[9px] uppercase tracking-[0.4em] font-black text-[#CFA052] mb-2 block">Email Address</label>
                               <input 
                                  required 
                                  type="email" 
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                  className="w-full bg-transparent py-4 text-lg font-serif italic text-white focus:outline-none placeholder:text-white/10" 
                                  placeholder="official@institution.com" 
                                />
                            </div>
                            <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                               <label className="text-[9px] uppercase tracking-[0.4em] font-black text-[#CFA052] mb-2 block">Contact Line</label>
                               <input 
                                  required 
                                  type="tel" 
                                  value={formData.phone}
                                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                  className="w-full bg-transparent py-4 text-lg font-serif italic text-white focus:outline-none placeholder:text-white/10" 
                                  placeholder="+91 XXXX XXX XXX" 
                                />
                            </div>
                         </div>

                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="text-[9px] uppercase tracking-[0.4em] font-black text-[#CFA052] mb-2 block">Brief Mandate Message</label>
                            <textarea 
                              required
                              rows={2} 
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                              className="w-full bg-transparent py-4 text-lg font-serif italic text-white focus:outline-none placeholder:text-white/10 resize-none" 
                              placeholder="Briefly describe your acquisition or disposition goals..." 
                            />
                         </div>

                         <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full h-20 bg-[#CFA052] text-black font-sans font-black tracking-[0.5em] uppercase text-xs hover:bg-white transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
                          >
                             <span>{isSubmitting ? "TRANSMITTING..." : "Initiate Consultation"}</span>
                             {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />}
                         </button>
                      </form>
                    </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-stone-900 p-24 text-center rounded-[3rem] shadow-2xl"
                >
                   <div className="w-24 h-24 bg-[#CFA052] rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="text-black w-12 h-12" />
                   </div>
                   <h3 className="text-3xl font-serif italic text-white mb-4">Mandate Received.</h3>
                   <p className="text-white/40 font-light leading-relaxed mb-10">Your institutional residential request has been logged. An advisor from our Private Desk will initiate contact shortly.</p>
                   <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-12 py-4 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
                   >
                     New Mandate
                   </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </Section>
      {/* ── CINEMATIC FOOTER TRANSITION ── */}
      <footer className="relative h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden group bg-black">
         <Image 
            src="/Users/nihalkumar/.gemini/antigravity/brain/14332204-a1ae-4723-9864-42766a28797d/genuine_boardroom_analysis_luxury_1775815387721.png"
            alt="Commercial Assets"
            fill
            className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-[5s]"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-black" />
         
         <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="space-y-12"
            >
               <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[1em] text-[#CFA052] block opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:tracking-[1.2em]">Institutional Continuity</span>
                  <div className="w-12 h-px bg-[#CFA052]/30 mx-auto" />
               </div>
               
               <Link href="/services/commercial-space-buy-sell-lease" className="block group/link">
                  <h2 className="text-6xl md:text-[8vw] font-serif italic text-white tracking-tighter leading-none transition-all duration-1000 group-hover:text-[#CFA052] group-hover:scale-[1.02]">
                     Commercial <br className="md:hidden" /> Assets.
                  </h2>
                  <p className="mt-12 text-white/30 text-base md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-40 group-hover/link:opacity-100 transition-all duration-1000 transform translate-y-4 group-hover/link:translate-y-0 italic lowercase">
                     "Mandate orchestration for Grade-A institutional commercial inventory and high-yield assets."
                  </p>
               </Link>
               
               <div className="pt-12">
                  <motion.div 
                     animate={{ y: [0, 10, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="w-px h-12 bg-gradient-to-b from-[#CFA052] to-transparent mx-auto"
                  />
               </div>
            </motion.div>
         </div>
      </footer>
    </main>
  );
}
