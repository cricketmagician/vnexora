"use client";

import { useRef, useState, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
} from "framer-motion";
import { 
  ArrowLeft, 
  Handshake, 
  Globe, 
  TrendingUp,
  ChevronRight,
  Plus,
  ArrowRight,
  Check,
  Building2,
  Users2
} from "lucide-react";
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

// --- Partner With Us Page ---

export default function PartnerWithUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    entityName: "",
    partnershipType: "Institutional Investment",
    objective: "",
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
Organization/Entity: ${formData.entityName}
Partnership Type: ${formData.partnershipType}
Collaborative Objective: ${formData.objective}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: formData.entityName || "Partnership Lead",
        email: formData.email,
        subject: `Partnership Inquiry: ${formData.partnershipType}`,
        message: fullMessage,
        source: 'partner_with_us_page'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Partnership briefcase received. Our directorate will reach out.");
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
            src="/images/services/brand_collab_hero.png" 
            alt="Partnership Hero" 
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
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Ecosystem Showcase</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              style={{ y: heroTranslateY }}
            >
              <h1 className="text-7xl md:text-[140px] font-serif italic text-white/95 leading-[0.9] tracking-tighter mb-12">
                Strategic<br />
                Institutional <span className="font-sans not-italic text-outline-silver text-transparent">Nexus</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-white/50 leading-relaxed tracking-tight italic">
                "Scaling the next echelon of hospitality through collaborative capital, operational excellence, and brand synergy."
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#CFA052]/60">Explore Opportunities</span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#CFA052] to-transparent animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE VISION — Large Vertical Scrolling Split */}
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
                src="/images/services/luxury_hotel_interior_hero.png" 
                alt="Architecture and Design" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[3s]" 
              />
              <div className="absolute inset-0 border-[20px] border-white/20 m-8" />
            </motion.div>

            <div className="space-y-12">
              <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block">01 / Synergy</span>
              <h2 className="text-5xl md:text-8xl font-serif italic leading-[1] text-stone-900">
                Collective <br />
                Ascension.
              </h2>
              <p className="text-2xl text-stone-500 font-light leading-relaxed max-w-xl">
                We partner with owners, developers, and global brands to redefine the hospitality landscape. Our ecosystem provides the technical, operational, and financial framework required for exponential growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-stone-200">
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900 mb-4 flex items-center gap-3">
                    <Globe size={16} className="text-[#CFA052]" />
                    Global Reach
                  </h4>
                  <p className="text-stone-400 font-light text-base">Connecting local assets with international distribution networks.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-stone-900 mb-4 flex items-center gap-3">
                    <TrendingUp size={16} className="text-[#CFA052]" />
                    Yield Optimization
                  </h4>
                  <p className="text-stone-400 font-light text-base">Implementing proprietary AI and management systems for elite ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. HORIZONTAL PARTNERSHIP GALLERY */}
      <section ref={horizontalRef} className="h-[250vh] bg-[#050505] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="container mx-auto px-6 mb-20 pointer-events-none z-20">
             <motion.h2 
               style={{ opacity: useTransform(horizontalProgress, [0.35, 0.45], [0, 1]) }}
               className="text-8xl md:text-[180px] font-serif italic text-white/5 leading-none uppercase tracking-tighter"
             >
               PARTNERSHIP VERTICALS
             </motion.h2>
          </div>

          <motion.div 
             style={{ x: xTranslate }}
             className="flex gap-12 px-[10vw]"
          >
            {[
              { title: "Joint Ventures", category: "Investment", img: "/images/services/hotels-resorts-buy-sell.png", icon: Handshake },
              { title: "Brand Licensing", category: "Synergy", img: "/images/services/brand_collab_hero.png", icon: Globe },
              { title: "Third-Party Management", category: "Ops", img: "/images/services/hotel-operations-management.png", icon: Building2 },
              { title: "Development Advisory", category: "Growth", img: "/images/services/property-development-consulting.png", icon: Users2 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="w-[85vw] md:w-[600px] shrink-0 aspect-[4/5] relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5"
              >
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[4s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                   <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#CFA052] mb-4">{item.category}</span>
                   <h3 className="text-4xl font-serif italic text-white flex items-center gap-4">
                     <item.icon className="w-8 h-8 opacity-50" />
                     {item.title}
                   </h3>
                </div>
                {/* Floating UI Elements */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/5 backdrop-blur-[20px] rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <Plus size={20} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. PARTNERSHIP BRIEFING — Specialized Inquiry */}
      <Section spacing="lg" className="bg-white text-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2 space-y-12">
               <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase block italic">Directorate</span>
               <h2 className="text-4xl md:text-7xl font-serif text-stone-900 leading-tight italic">
                 Initiate Your <br />
                 <span className="not-italic font-sans font-bold uppercase tracking-tight">Venture</span> Profile.
               </h2>
               <p className="text-xl text-stone-400 font-light leading-relaxed max-w-sm italic">
                 Our board evaluates select institutional and brand partnerships quarterly.
               </p>
               <div className="flex flex-col gap-6 pt-12">
                 {["Equity Participation", "Brand Integration", "Management Mandate", "Technical Partnership"].map((tag) => (
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
                   className="bg-[#050505] p-12 md:p-16 lg:p-20 text-white relative overflow-hidden rounded-[2rem]"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#CFA052]/10 blur-[100px] rounded-full" />
                    
                    <div className="relative z-10">
                      <h3 className="text-3xl font-serif italic mb-12">Partnership Briefcase</h3>
                      <form className="space-y-8" onSubmit={handleSubmit}>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Organization / Entity Name</label>
                            <input 
                               required 
                               type="text" 
                               value={formData.entityName}
                               onChange={(e) => setFormData({...formData, entityName: e.target.value})}
                               className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10" 
                               placeholder="GLOBAL HOSPITALITY GROUP" 
                            />
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Corporate Email</label>
                            <input 
                               required 
                               type="email" 
                               value={formData.email}
                               onChange={(e) => setFormData({...formData, email: e.target.value})}
                               className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10" 
                               placeholder="DIRECTOR@ENTITY.COM" 
                            />
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Partnership Tier</label>
                            <select 
                               value={formData.partnershipType}
                               onChange={(e) => setFormData({...formData, partnershipType: e.target.value})}
                               className="w-full bg-transparent p-4 text-lg font-light focus:outline-none appearance-none uppercase tracking-widest text-white/80"
                            >
                               <option className="bg-[#050505]">Institutional Investment</option>
                               <option className="bg-[#050505]">Management Mandate</option>
                               <option className="bg-[#050505]">Brand Integration</option>
                               <option className="bg-[#050505]">PropTech Collaboration</option>
                            </select>
                         </div>
                         <div className="group border-b border-white/10 focus-within:border-[#CFA052] transition-colors duration-500">
                            <label className="block text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 ml-1 group-focus-within:text-[#CFA052] transition-colors">Nexus Objective</label>
                            <textarea 
                               required
                               value={formData.objective}
                               onChange={(e) => setFormData({...formData, objective: e.target.value})}
                               className="w-full bg-transparent p-4 text-lg font-light focus:outline-none placeholder:text-white/10 h-32 resize-none" 
                               placeholder="DESCRIBE THE SYNERGY..." 
                            />
                         </div>

                         <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#CFA052] transition-all duration-700 mt-8 disabled:opacity-50"
                         >
                            {isSubmitting ? "TRANSMITTING BRIEF..." : "Submit Profile to Board"}
                         </button>
                      </form>
                    </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-20 text-center bg-stone-100 rounded-[2rem] border border-stone-200 shadow-xl">
                   <div className="w-20 h-20 bg-[#CFA052] rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="text-white w-10 h-10" />
                   </div>
                   <h3 className="text-3xl font-serif italic text-stone-900 mb-4">Briefcase Received.</h3>
                   <p className="text-stone-400 font-light max-w-xs mx-auto mb-10">Our directorate board will evaluation the venture synergy and contact you via secure channels.</p>
                   <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 hover:text-[#CFA052] transition-colors">New Partnership Inquiry</button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </Section>

      <footer className="py-20 border-t border-white/5 text-center px-6">
         <Link href="/services" className="text-4xl md:text-9xl font-serif italic text-white/10 hover:text-[#CFA052]/40 transition-[color] uppercase tracking-tighter duration-1000">
            Ecosystem Registry
         </Link>
      </footer>
    </main>
  );
}
