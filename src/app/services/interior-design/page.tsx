"use client";

import { useRef, useState, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
} from "framer-motion";
import { 
  Plus,
  ChevronLeft,
  ArrowLeft,
  Sparkles,
  Layers,
  ChevronRight,
  Check
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
    none: "py-0",
    sm: "py-12 md:py-20",
    md: "py-24 md:py-32",
    lg: "py-32 md:py-56"
  }[spacing];

  return (
    <section ref={ref} className={cn(spacingClass, className)}>
      {children}
    </section>
  );
});

Section.displayName = "Section";

// --- Interior Design Hub ---

export default function InteriorDesignHub() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    propertyName: "",
    visionScale: "High-End Restoration",
    coreObjective: "",
    email: ""
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Horizontal Scroll Setup
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start end", "end start"]
  });

  const xTranslate = useTransform(horizontalProgress, [0.4, 0.6], ["0%", "-50%"]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `
Property/Developer: ${formData.propertyName}
Vision Scale: ${formData.visionScale}
Core Design Objective: ${formData.coreObjective}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: formData.propertyName || "Design Lead",
        email: formData.email,
        subject: `Interior Design Mandate: ${formData.visionScale}`,
        message: fullMessage,
        source: 'interior_design_page'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Design mandate briefed. Our studio will reach out.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Institutional processing error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main ref={containerRef} className="bg-[#050505] text-white selection:bg-[#CFA052] selection:text-black font-sans">
      
      {/* 1. CINEMATIC PARALLAX HERO */}
      <section className="relative h-[110vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/services/luxury_hotel_interior_hero.png" 
            alt="Interior Hero" 
            fill 
            className="object-cover brightness-[0.4]"
            priority
          />
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <Link href="/services" className="group inline-flex items-center gap-3 px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-500">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Services Showcase</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              style={{ y: heroTranslateY }}
            >
              <h1 className="text-7xl md:text-[140px] font-serif italic text-white/95 leading-[0.9] tracking-tighter mb-12">
                Atmospheric<br />
                Concept <span className="font-sans not-italic text-outline-silver text-transparent">Design</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-white/50 leading-relaxed tracking-tight italic">
                "We don't just furnish spaces; we architect the DNA of sensory experiences. Where light meets shadow, and materiality meets soul."
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#CFA052]/60">Scroll to Explore</span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#CFA052] to-transparent animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY — Large Vertical Scrolling Split */}
      <Section spacing="lg" className="bg-[#FAF9F6] text-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden group shadow-2xl"
            >
              <Image 
                src="/images/services/luxury_hotel_architectural_shadows.png" 
                alt="Architectural Play" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[3s]" 
              />
              <div className="absolute inset-0 border-[20px] border-white/20 m-8" />
            </motion.div>

            <div className="space-y-12">
              <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block">01 / The Narrative</span>
              <h2 className="text-5xl md:text-8xl font-serif italic leading-[1] text-stone-900">
                Beyond <br />
                The Visual.
              </h2>
              <p className="text-2xl text-stone-500 font-light leading-relaxed max-w-xl">
                Luxury isn't about excess; it's about the tension between space and object. Our design-build division translates your brand's unique narrative into high-fidelity physical environments.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-stone-200">
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900 mb-4 flex items-center gap-3">
                    <Sparkles size={16} className="text-[#CFA052]" />
                    Tactile Depth
                  </h4>
                  <p className="text-stone-400 font-light text-base">Selecting materials that age with grace and invite human touch.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900 mb-4 flex items-center gap-3">
                    <Layers size={16} className="text-[#CFA052]" />
                    Layered Light
                  </h4>
                  <p className="text-stone-400 font-light text-base">Sculpting shadows to create intimacy and architectural focus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. HORIZONTAL MATERIAL GALLERY — Manual Carousel */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-6 mb-20">
            <span className="text-[10px] font-black tracking-[0.8em] text-[#CFA052] uppercase block mb-6">Material Journey</span>
            <h2 className="text-5xl md:text-8xl font-serif italic text-white tracking-tighter">DNA of Luxury.</h2>
        </div>

        <div className="container mx-auto px-6">
          <RoadmapCarousel 
            nodes={[
              { title: "Nero Marquina", category: "Materiality", icon: Sparkles, img: "/images/institutional/material-closeup.png" },
              { title: "Mustard Gold", category: "Accentuation", icon: Layers, img: "/images/institutional/material-closeup.png" },
              { title: "Fluted Oak", category: "Depth", icon: Layers, img: "/images/institutional/material-closeup.png" },
              { title: "Velvet Dusk", category: "Sensation", icon: Sparkles, img: "/images/institutional/material-closeup.png" }
            ]}
          />
        </div>
      </section>

      {/* 4. DESIGN MANDATE — Specialized Inquiry */}
      <Section spacing="lg" className="bg-white text-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2 space-y-12">
               <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block italic">Collaborations</span>
               <h2 className="text-4xl md:text-7xl font-serif text-stone-900 leading-tight italic">
                 Start Your <br />
                 <span className="not-italic font-sans font-bold uppercase tracking-tight">Design</span> Mandate.
               </h2>
               <p className="text-xl text-stone-400 font-light leading-relaxed max-w-sm italic">
                 Every great property begins with a single atmospheric concept. Let's define yours.
               </p>
               <div className="flex flex-col gap-6 pt-12">
                 {["New Asset Concept", "Luxury Restoration", "Brand Refinement", "Technical Design Audit"].map((tag) => (
                    <div key={tag} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-stone-800 border-b border-stone-100 pb-4">
                       <ChevronRight size={14} className="text-[#CFA052]" />
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
                  className="bg-[#050505] p-12 md:p-16 lg:p-20 text-white relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#CFA052]/10 blur-[100px] rounded-full" />
                    
                    <div className="relative z-10">
                      <h3 className="text-3xl font-serif italic mb-12">The Inception Form</h3>
                      <form className="space-y-8" onSubmit={handleSubmit}>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Property Name / Developer</label>
                            <input 
                              required 
                              type="text" 
                              value={formData.propertyName}
                              onChange={(e) => setFormData({...formData, propertyName: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10" 
                              placeholder="LE LOUVRE PALACE" 
                            />
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Official Email</label>
                            <input 
                              required 
                              type="email" 
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10" 
                              placeholder="EMAIL@INSTITUTION.COM" 
                            />
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Vision Scale</label>
                            <select 
                              value={formData.visionScale}
                              onChange={(e) => setFormData({...formData, visionScale: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none appearance-none uppercase tracking-widest text-white/80"
                            >
                               <option className="bg-[#050505]">High-End Restoration</option>
                               <option className="bg-[#050505]">New Design-Build</option>
                               <option className="bg-[#050505]">Technical Fit-Out</option>
                            </select>
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Core Objective</label>
                            <textarea 
                              required
                              value={formData.coreObjective}
                              onChange={(e) => setFormData({...formData, coreObjective: e.target.value})}
                              className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10 h-32 resize-none" 
                              placeholder="DESCRIBE THE MOOD..." 
                            />
                         </div>

                         <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#CFA052] transition-all duration-700 mt-8 disabled:opacity-50"
                         >
                            {isSubmitting ? "ENLISTING TEAM..." : "Enlist Design Team"}
                         </button>
                      </form>
                    </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-20 text-center bg-stone-100 rounded-none border border-stone-200">
                   <div className="w-20 h-20 bg-[#CFA052] rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="text-white w-10 h-10" />
                   </div>
                   <h3 className="text-3xl font-serif italic text-stone-900 mb-4">Briefed.</h3>
                   <p className="text-stone-400 font-light max-w-xs mx-auto mb-10">Your design mandate has been received. Our creative studio will initiate the inception call shortly.</p>
                   <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 hover:text-[#CFA052] transition-colors">New Design Brief</button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </Section>

      {/* ── CINEMATIC FOOTER TRANSITION ── */}
      <footer className="relative h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden group bg-black">
         <Image 
            src="/images/institutional/concierge-key.png"
            alt="Operational Excellence"
            fill
            className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-[5s]"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-black" />
         
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
               
               <Link href="/services/hotel-operations-management" className="block group/link">
                  <h2 className="text-6xl md:text-[8vw] font-serif italic text-black transition-all duration-1000 group-hover:text-[#CFA052] group-hover:scale-[1.02]">
                     Operational <br className="md:hidden" /> Excellence.
                  </h2>
                  <p className="mt-12 text-black/30 text-base md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-40 group-hover/link:opacity-100 transition-all duration-1000 transform translate-y-4 group-hover/link:translate-y-0 italic lowercase">
                     "Translating physical narratives into seamless operational ecosystems."
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
