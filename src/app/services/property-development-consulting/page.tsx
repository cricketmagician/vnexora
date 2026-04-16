"use client";

import { useRef, useState, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  AnimatePresence
} from "framer-motion";
import { 
  Building2,
  ArrowRight,
  ArrowLeft,
  BarChart3,
  Layout,
  Compass,
  ShieldCheck,
  Gem,
  Factory,
  ChevronRight,
  Check,
  X,
  FileText,
  Target,
  Zap
} from "lucide-react";
import RoadmapCarousel from "@/components/sections/RoadmapCarousel";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

// --- Custom Section Component ---
const Section = forwardRef<HTMLElement, { 
  children: React.ReactNode; 
  className?: string; 
  spacing?: "none" | "sm" | "md" | "lg" 
}>(({ children, className, spacing = "md" }, ref) => {
  const spacingClass = {
    none: "py-0",
    sm: "py-12 md:py-20",
    md: "py-24 md:py-32",
    lg: "py-32 md:py-48"
  }[spacing];

  return (
    <section ref={ref} className={cn(spacingClass, className)}>
      {children}
    </section>
  );
});
Section.displayName = "Section";

export default function PropertyDevelopmentPortal() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    identity: "",
    email: "",
    phase: "Ideation / Greenfield",
    valuation: "",
    scope: "",
    mobile: ""
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0.4]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `
Developer Identity: ${formData.identity}
Project Phase: ${formData.phase}
Project Valuation: ${formData.valuation}
Mobile: ${formData.mobile}
Mandate Scope: ${formData.scope}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: formData.identity,
        email: formData.email,
        subject: `Development Mandate: ${formData.phase}`,
        message: fullMessage,
        source: 'property_development_portal'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Mandate transmitted to the directorate.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Transmission error. Please consult directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main ref={containerRef} className="bg-white text-black selection:bg-mustard selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-black">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/services/property_development.png" 
            alt="Hotel Development" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-8"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.8em] text-mustard">Development Mandate</h4>
            <h1 className="text-6xl md:text-[9vw] font-serif leading-[0.85] text-white tracking-tighter">
              Architect Your <br />
              <span className="italic">Legacy.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-white/50 leading-relaxed italic">
              "We don't just build properties; we conceptualize hospitality assets engineered for institutional yield and generational value."
            </p>
            <div className="pt-8">
              <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-mustard text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500"
              >
                Initialize Your Mandate
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM — "ARE THESE HURDLES COSTING YOU?" */}
      <Section className="bg-[#FAF9F6] border-y border-black/5" spacing="lg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-mustard">The Friction points</h4>
              <h2 className="text-4xl md:text-7xl font-serif italic text-black leading-tight">
                Is your development vision <br />
                <span className="not-italic font-black uppercase tracking-tighter">Stalling in transition?</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              {[
                { 
                  title: "Feasibility Gaps", 
                  desc: "Is your financial roadmap based on generic data rather than clinical market intelligence?" 
                },
                { 
                  title: "Design Friction", 
                  desc: "Are architectural visions clashing with operational realities and brand standard technicalities?" 
                },
                { 
                  title: "Timeline Decay", 
                  desc: "Are regulatory roadblocks and vendor misalignment pushing your launch date into the red?" 
                },
                { 
                  title: "Pre-Opening Chaos", 
                  desc: "Lack of a professional pre-opening desk leads to day-one operational failures and lost revenue." 
                }
              ].map((problem, idx) => (
                <div key={idx} className="p-10 border border-black/5 bg-white space-y-4 hover:border-mustard/20 transition-all duration-500">
                  <h3 className="text-sm font-black uppercase tracking-widest text-black">{problem.title}</h3>
                  <p className="text-black/40 font-light leading-relaxed italic">{problem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 3. THE SOLUTION — THE VNEXORA BRIDGE */}
      <Section spacing="lg" className="bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-12"
            >
              <h4 className="text-[10px] font-black text-mustard tracking-[0.6em] uppercase block">Institutional Bridge</h4>
              <h2 className="text-5xl md:text-8xl font-serif italic leading-[0.95] text-black">
                Strategic <br />
                <span className="not-italic font-black text-stone-200 uppercase tracking-tighter">Precision.</span>
              </h2>
              <p className="text-xl text-black/60 font-light leading-relaxed max-w-xl italic">
                The VNEXORA Development Desk eliminates the gap between 'Land' and 'Legacy'. We provide the high-fidelity oversight required to navigate complex pre-opening management and asset creation.
              </p>
              
              <div className="space-y-8 pt-10 border-t border-black/5">
                {[
                  "Owner Representation & Technical Advisory",
                  "Operator Selection & Franchise Mediation",
                  "Procurement & Supply Chain Management",
                  "End-to-End Project Lifecycle Oversight"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="p-2 bg-mustard/10 rounded-full">
                      <Check size={14} className="text-mustard" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-black">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-black/5">
              <Image 
                src="/images/services/luxury_hotel_architectural_shadows.png" 
                alt="Development precision" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 4. PROOF POINTS — "VNEXORA REAL ESTATE EFFICIENCY" */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mustard/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-24">
            <h4 className="text-[10px] font-black uppercase tracking-[0.8em] text-mustard">Efficiency metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { label: "PRE-OPENING SAVINGS", value: "25%", desc: "Direct reduction in overhead through optimized procurement." },
                { label: "TIMELINE ACCELERATION", value: "20%", desc: "Faster pathway to market entry via regulatory mastery." },
                { label: "BRAND COMPLIANCE", value: "100%", desc: "Guaranteed architectural and operational alignment." }
              ].map((stat, i) => (
                <div key={i} className="space-y-6">
                  <div className="text-6xl md:text-8xl font-serif italic text-mustard leading-none">{stat.value}</div>
                  <div className="w-12 h-[1px] bg-white/20 mx-auto" />
                  <h5 className="text-[10px] font-black tracking-widest uppercase">{stat.label}</h5>
                  <p className="text-white/30 text-xs font-light lowercase leading-relaxed italic">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROADMAP — THE DEVELOPMENT NODES */}
      <section className="py-32 md:py-48 bg-[#FAF9F6]">
        <div className="container mx-auto px-6 mb-24">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-mustard">The Roadmap</span>
            <h2 className="text-5xl md:text-8xl font-serif italic text-black tracking-tighter leading-none">Development Nodes.</h2>
          </div>
        </div>
        <div className="container mx-auto px-6 overflow-hidden">
          <RoadmapCarousel 
            nodes={[
              { title: "Concept & Visioning", category: "Ideation", icon: Gem, img: "/images/institutional/drafting-table.png" },
              { title: "Highest & Best Use", category: "Analysis", icon: BarChart3, img: "/images/institutional/boardroom-analysis.png" },
              { title: "Design Review", category: "Technical", icon: Layout, img: "/images/institutional/material-closeup.png" },
              { title: "Pre-Opening Alpha", category: "Execution", icon: Factory, img: "/images/institutional/concierge-key.png" },
              { title: "Procurement Desk", category: "Logistics", icon: Building2, img: "/images/institutional/material-closeup.png" }
            ]}
          />
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <Section spacing="lg" className="bg-white">
        <div className="container mx-auto px-6 border-t border-black/5 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              {[
                {
                  quote: "VNEXORA's technical advisory has been a game-changer for our portfolio. Their insights into brand standards saved us months of rework.",
                  author: "Executive Director",
                  firm: "Hospitality Real Estate Fund"
                },
                {
                  quote: "From land acquisition to the first guest arrival, their developmental precision ensured our asset reached positive ROI ahead of schedule.",
                  author: "Asset Owner",
                  firm: "Luxury Resort Development"
                }
              ].map((t, i) => (
                <div key={i} className="space-y-8">
                  <p className="text-2xl md:text-3xl font-serif italic text-black leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-px bg-mustard" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-black">{t.author} / <span className="text-black/40">{t.firm}</span></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square bg-[#FAF9F6] border border-black/5 flex items-center justify-center p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Building2 size={300} strokeWidth={0.5} />
                </div>
                <h3 className="text-4xl font-serif text-black/10 leading-snug">
                  "Excellence is not an act, <br /> but a developmental habit."
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. STRATEGIC BRIEF FORM */}
      <Section ref={formRef} className="py-32 md:py-48 bg-[#FAF9F6] relative overflow-hidden">
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
                <h2 className="text-5xl md:text-7xl font-serif leading-tight text-black">
                  Ready to grow <br />
                  <span className="italic text-mustard">beyond the brand?</span>
                </h2>
                <p className="text-black/40 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  Step into the future of hospitality mastery. Initialize your confidential institutional development brief and let us architect your legacy.
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

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8 text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                        <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Full Name / Identity</label>
                        <input 
                          name="identity"
                          required
                          value={formData.identity}
                          onChange={(e) => setFormData({...formData, identity: e.target.value})}
                          className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10"
                          placeholder="John Doe / Institution"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Project Phase</label>
                        <select 
                          value={formData.phase}
                          onChange={(e) => setFormData({...formData, phase: e.target.value})}
                          className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black appearance-none"
                        >
                          <option>Ideation / Greenfield</option>
                          <option>Under Construction</option>
                          <option>Repositioning / Renovation</option>
                          <option>Asset Disposal</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Email Address</label>
                        <input 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10"
                          placeholder="j.doe@institution.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Mobile Number</label>
                        <input 
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                          className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10"
                          placeholder="+91 / +971 ..."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Development Vision / Scope</label>
                      <textarea 
                        required
                        value={formData.scope}
                        onChange={(e) => setFormData({...formData, scope: e.target.value})}
                        rows={4}
                        className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10 resize-none"
                        placeholder="Describe your asset and how we can architect its success..."
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-[#080808] text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-mustard hover:text-black transition-all duration-700 shadow-2xl disabled:opacity-50"
                    >
                      {isSubmitting ? "TRANSMITTING..." : "Transmit Strategic Brief"}
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="text-black" />
                    </div>
                    <h3 className="text-2xl font-serif italic text-black mb-4">Mandate Transmitted.</h3>
                    <p className="text-black/40 text-[11px] font-light uppercase tracking-widest leading-relaxed">
                      A senior partner will evaluate your brief and initiate private consultation within 24 hours.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-8 text-[9px] font-black uppercase tracking-widest hover:text-mustard transition-colors">Submit New Entry</button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── CINEMATIC FOOTER TRANSITION ── */}
      <footer className="relative h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden group bg-black">
         <Image 
            src="/images/institutional/hr-human-capital.png"
            alt="Human Capital Alignment"
            fill
            className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-[5s]"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-transparent to-black" />
         
         <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="space-y-12"
            >
               <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[1em] text-mustard block opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:tracking-[1.2em]">Institutional Continuity</span>
                  <div className="w-12 h-px bg-mustard/30 mx-auto" />
               </div>
               
               <Link href="/services/human-resource-talent-development" className="block group/link">
                  <h2 className="text-6xl md:text-[8vw] font-serif italic text-white tracking-tighter leading-none transition-all duration-1000 group-hover:text-mustard group-hover:scale-[1.02]">
                     Institutional <br className="md:hidden" /> Human Capital.
                  </h2>
                  <p className="mt-12 text-white/30 text-base md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-40 group-hover/link:opacity-100 transition-all duration-1000 transform translate-y-4 group-hover/link:translate-y-0 italic lowercase">
                     "Architecting high-performance human ecosystems through clinical talent alignment."
                  </p>
               </Link>
               
               <div className="pt-12">
                  <motion.div 
                     animate={{ y: [0, 10, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="w-px h-12 bg-gradient-to-b from-mustard to-transparent mx-auto"
                  />
               </div>
            </motion.div>
         </div>
      </footer>
    </main>
  );
}
