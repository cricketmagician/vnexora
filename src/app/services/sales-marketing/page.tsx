"use client";

import { useState, useRef, forwardRef } from "react";
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
  UserCheck,
  TrendingUp,
  Award,
  Layers,
  PieChart,
  ArrowUpRight,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";
import { ShaderBackground } from "@/components/ui/hero-shader";

// Shared Section Component with ForwardRef
const Section = forwardRef<HTMLElement, { 
  children: React.ReactNode; 
  className?: string; 
  spacing?: "sm" | "md" | "lg";
  id?: string;
}>(({ children, className, spacing = "md", id }, ref) => {
  const spacingClass = {
    sm: "py-12 md:py-20",
    md: "py-24 md:py-32",
    lg: "py-32 md:py-48"
  }[spacing];

  return (
    <section ref={ref} id={id} className={cn(spacingClass, className)}>
      {children}
    </section>
  );
});

Section.displayName = "Section";

export default function BrandingPromotionHub() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    propertyName: "",
    contactPrincipal: "",
    email: "",
    occupancy: "Sub 40% (Growth Mode)",
    bookingMix: ""
  });
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `
Property/Group: ${formData.propertyName}
Contact Principal: ${formData.contactPrincipal}
Current Occupancy: ${formData.occupancy}
Direct Booking Mix: ${formData.bookingMix}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: formData.contactPrincipal,
        email: formData.email,
        subject: `Sales & Marketing Mandate: ${formData.propertyName}`,
        message: fullMessage,
        source: 'sales_marketing_page'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Growth mandate transmitted. Our strategy desk will reach out.");
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
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-[#CFA052] selection:text-black font-sans overflow-x-hidden">
      
      {/* 1. PREMIUM CENTERED HERO — The Global Dominance Narrative */}
      <ShaderBackground className="h-screen flex items-center justify-center">
        {/* Navigation Link (Floating) */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/services" className="inline-flex items-center text-[#CFA052]/60 hover:text-[#CFA052] transition-all group px-4 py-2 rounded-full border border-[#CFA052]/20 bg-black/40 backdrop-blur-md">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em]">Global Portfolios</span>
            </Link>
          </motion.div>
        </div>

        <div className="container relative z-20 mx-auto px-6 flex flex-col items-center text-center">
          <div className="max-w-5xl">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight font-sans">
                Performance Marketing Agency for <br />
                <span className="font-serif italic font-light text-gold-gradient drop-shadow-[0_0_30px_rgba(207,160,82,0.3)] text-3xl md:text-5xl lg:text-7xl block mt-4">
                  Hospitality, Real Estate, & Luxury.
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="max-w-3xl mx-auto mb-16"
            >
              <p className="text-white/50 font-sans font-light text-lg md:text-xl leading-relaxed tracking-tight">
                Architecting high-converting digital narratives that ensure your assets dominate search results and global market share through institutional-grade prestige.
              </p>
            </motion.div>

            {/* Primary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
            >
              <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto px-12 py-6 bg-[#CFA052] text-black font-sans font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:scale-105 transition-all shadow-[0_20px_50px_rgba(207,160,82,0.2)] flex items-center justify-center gap-4 group rounded-sm"
              >
                Launch Growth Mandate
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
              
              <Link
                href="#ecosystem"
                className="w-full sm:w-auto px-12 py-6 border border-[#CFA052]/30 text-[#CFA052] font-sans font-black text-[11px] uppercase tracking-[0.4em] hover:bg-[#CFA052]/10 transition-all flex items-center justify-center gap-4 group rounded-sm backdrop-blur-sm"
              >
                View Capabilities
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>

            {/* Partner Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap items-center justify-center gap-12 pt-10 border-t border-white/10"
            >
              <div className="flex flex-col items-center gap-3">
                <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em]">Institutional Partner</span>
                <div className="flex items-center gap-2 grayscale brightness-[2] opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
                  <Globe className="w-5 h-5 text-[#4285F4]" />
                  <span className="text-sm font-bold text-white tracking-tight">Google <span className="font-light text-white/60">Partner</span></span>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em]">Digital Infrastructure</span>
                <div className="flex items-center gap-2 grayscale brightness-[2] opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
                  <PieChart className="w-5 h-5 text-[#0668E1]" />
                  <span className="text-sm font-bold text-white tracking-tight">Meta <span className="font-light text-white/60">Business Partner</span></span>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-center gap-3">
                <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em]">Managed Portfolios</span>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border border-black bg-stone-900 flex items-center justify-center text-[8px] text-[#CFA052] font-black overflow-hidden ring-1 ring-[#CFA052]/20">
                      {i === 4 ? "+40" : i}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-10 right-10 z-20 flex flex-col items-end gap-6 text-white/20 font-black text-[9px] uppercase tracking-[1em] vertical-rl h-40 hidden lg:flex">
          <div className="w-[1px] flex-1 bg-gradient-to-t from-[#CFA052] to-transparent animate-pulse" />
          Prestige Hub
        </div>

        {/* Scroll Hint */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-[#CFA052]/40"
        >
          <div className="w-5 h-8 rounded-full border border-[#CFA052]/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#CFA052] rounded-full" />
          </div>
        </motion.div>
      </ShaderBackground>

      {/* 2. THE BRAND ECOSYSTEM — The 4-Pillar Infrastructure */}
      <Section id="ecosystem" spacing="lg" className="bg-[#FAF9F6] relative overflow-hidden">
        {/* Subtle Decorative Image (Floating Room) */}
        <div className="absolute top-[15%] -right-[15%] w-[600px] h-[400px] opacity-10 pointer-events-none rotate-12 hidden xl:block">
           <Image src="/images/services/services_day_hero.png" alt="" fill className="object-cover rounded-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase mb-10 block italic">Capabilities</span>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-[1.1] mb-8 italic">
                360° Vision. <br />
                <span className="font-sans not-italic font-bold tracking-tighter">Exponential</span> Results.
              </h2>
              <p className="text-lg text-stone-500 font-light leading-relaxed tracking-tight italic max-w-lg">
                "Generic marketing is a commodity. At Vnexora, we treat branding as high-stakes architecture—forming structures of desire."
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-4 lg:justify-end pb-4 border-b border-stone-200 w-full">
              {["Direct-First Booking", "OTA Dominance", "SEO Narrative", "Social Prestige"].map((tag) => (
                <div key={tag} className="px-6 py-2 bg-stone-100 rounded-full text-[9px] font-black uppercase tracking-widest text-stone-400">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: "Digital Performance", 
                desc: "Harnessing Meta-Search, Luxury SEO, and Ads to ensure your property dominates search volumes.",
                image: "/images/services/luxury_hotel_seo_ads_dashboard.png",
                accent: "Performance"
              },
              { 
                title: "Cinematic Identity", 
                desc: "Deploying cinematography, signature tone-of-voice, and bespoke visual systems that define the soul.",
                image: "/images/services/luxury_hospitality_cinematography.png",
                accent: "Identity"
              },
              { 
                title: "Global Influence", 
                desc: "Strategic placement in elite travel networks and collaborations with global high-profile influencers.",
                image: "/images/services/luxury_influencer_lobby_shot.png",
                accent: "Reach"
              },
              { 
                title: "Yield Optimisation", 
                desc: "Meticulous commission audits and channel management pushing for exponential direct results.",
                image: "/images/services/luxury_revenue_management_system_dashboard.png",
                accent: "Yield"
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="group relative h-[480px] overflow-hidden bg-stone-100 flex flex-col justify-end p-10 lg:p-12 hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.12)] transition-all duration-700"
              >
                {/* Background Pillar Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={pillar.image} 
                    alt={pillar.title} 
                    fill 
                    className="object-cover brightness-[0.6] group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
                </div>

                <div className="relative z-10 flex flex-col items-start gap-4">
                  <div className="px-5 py-2 bg-[#CFA052] text-black text-[9px] font-black uppercase tracking-[0.4em] transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
                    {pillar.accent} Pillar
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-sans font-bold tracking-tighter uppercase text-white mb-2 group-hover:text-[#CFA052] transition-colors duration-500">{pillar.title}</h3>
                  <p className="text-white/60 font-light text-base leading-relaxed max-w-sm italic transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    {pillar.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.5em] text-[#CFA052] opacity-0 group-hover:opacity-100 transition-all duration-1000 transform translate-y-8 group-hover:translate-y-0">
                    Explore Strategy <ArrowRight size={14} />
                  </div>
                </div>

                {/* Glass Border Highlight */}
                <div className="absolute inset-4 border border-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. REVENUE SHOWCASE — The ADR & Growth Narrative */}
      <section className="relative min-h-screen bg-black overflow-hidden py-40">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/services/luxury_marketing_performance_stats.png"
            alt="Growth Metrics"
            fill
            className="object-cover brightness-[0.4] saturate-0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

        <div className="container relative z-20 mx-auto px-6 max-w-7xl h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/10 w-fit mb-12">
                 <span className="text-[10px] font-black text-[#CFA052] tracking-[0.5em] uppercase">Clinical Results</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-12">
                Yield <br />
                <span className="font-serif italic font-light italic">Acceleration.</span>
              </h2>
              <div className="space-y-10 max-w-lg">
                {[
                  { label: "RevPAR Lift", val: "+28%", desc: "Average increase within the first 6 months of Vnexora management." },
                  { label: "Direct Booking", val: "65%", desc: "Targeted direct booking mix for elite properties, drastically cutting commissions." },
                  { label: "ADR Optimization", val: "+$140", desc: "Average daily rate appreciation through prestige brand positioning." }
                ].map((stat, i) => (
                  <div key={i} className="flex items-start gap-8 group">
                    <div className="text-5xl font-serif text-[#CFA052] font-light italic opacity-80 group-hover:opacity-100 transition-opacity">{stat.val}</div>
                    <div>
                      <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-2">{stat.label}</h4>
                      <p className="text-white/30 text-sm font-light leading-relaxed italic">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center justify-end">
               {/* Visual Metric Block */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                 className="relative w-[500px] h-[600px] bg-white/5 backdrop-blur-[100px] border border-white/10 p-16 overflow-hidden rounded-[3rem]"
               >
                  <div className="h-full border-l-2 border-[#CFA052]/20 pl-12 flex flex-col justify-between">
                    <div>
                      <Layers className="text-[#CFA052] w-12 h-12 mb-10" />
                      <h3 className="text-4xl text-white font-medium tracking-tight mb-8">The <br/><span className="italic font-serif font-light">Institutional</span> Edge.</h3>
                      <p className="text-white/40 text-lg leading-relaxed italic font-light">
                        Our branding methodology transforms bricks and mortar into digital dominance, ensuring your asset is not just booked, but revered.
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-[1px] bg-[#CFA052]/40" />
                      <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 whitespace-nowrap italic">Vnexora Growth Desk</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#CFA052]/10 rounded-full blur-[100px]" />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE VNEXORA FLYWHEEL — The Strategy Cycle */}
      <Section spacing="lg" className="bg-[#FAF9F6]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-32">
             <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase mb-10 block italic">The Methodology</span>
             <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-stone-900 leading-[0.9] mb-12">
               Engineered <br /><span className="font-serif italic font-light">Evolution.</span>
             </h2>
             <p className="text-xl text-stone-400 font-light max-w-2xl mx-auto italic leading-relaxed">
               A clinical 4-stage deployment architecture that ensures every branding mandate translates into a financial milestone.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-0">
             {[
               { stage: "01. Audit", title: "Discovery & Yield Audit", desc: "Clinical analysis of current booking mix, commission leakage, and brand perception gaps." },
               { stage: "02. Position", title: "Prestige Architecture", desc: "Crafting the unique 'Pulse' — a bespoke identity that commands elite global demographics." },
               { stage: "03. Deploy", title: "Omnichannel Supremacy", desc: "Simultaneous rollout across Performance Meta-Search, AI Concierge, and Social Narrative Hubs." },
               { stage: "04. Grow", title: "Exponential Scaling", desc: "Weekly revenue performance audits and influencer amplification to sustain and scale ADR." }
             ].map((item, idx) => (
               <div key={idx} className="p-12 bg-white border border-stone-100 hover:border-[#CFA052]/20 transition-all group">
                  <span className="text-[11px] font-black text-[#CFA052] mb-10 block italic">{item.stage}</span>
                  <h4 className="text-2xl font-bold tracking-tighter uppercase text-stone-900 mb-6 group-hover:text-[#CFA052] transition-colors">{item.title}</h4>
                  <div className="w-12 h-[2px] bg-stone-100 group-hover:bg-[#CFA052] transition-all mb-8 group-hover:w-full duration-700" />
                  <p className="text-stone-400 text-base font-light italic leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* 5. MANDATE ENROLLMENT — Focused Inquiry */}
      <Section spacing="lg" ref={formRef} className="relative bg-[#050505] overflow-hidden pt-40 pb-56">
        <div className="absolute inset-0 opacity-10 blur-3xl pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#CFA052]/20 rounded-full" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
             <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase mb-10 block italic">Mandate Desk</span>
                  <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[0.95] mb-12">
                    Submit Your <br />
                    <span className="font-serif italic font-light italic">Strategic Request.</span>
                  </h2>
                  <div className="space-y-10 max-w-md">
                    <p className="text-white/40 text-xl font-light leading-relaxed italic">
                      Enrolling a mandate with Vnexora establishes an institutional partnership focused on aggressive yield growth and market dominance.
                    </p>
                    <div className="flex items-center gap-10 py-10 border-t border-white/10">
                       <div>
                          <p className="text-[11px] font-black text-white uppercase tracking-widest mb-1">Response Time</p>
                          <p className="text-xl font-serif text-[#CFA052] italic font-light">Under 18 Hours</p>
                       </div>
                       <div>
                          <p className="text-[11px] font-black text-white uppercase tracking-widest mb-1">Mandate Tiers</p>
                          <p className="text-xl font-serif text-[#CFA052] italic font-light">Bespoke & Full-Suite</p>
                       </div>
                    </div>
                  </div>
                </motion.div>
             </div>

             <div className="bg-[#FAF9F6] p-12 md:p-20 relative overflow-hidden group">
                {/* Visual form border */}
                <div className="absolute inset-0 border-[1.5rem] border-white/50 pointer-events-none" />
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
                    <div className="space-y-4 group">
                      <label className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-400 group-focus-within:text-[#CFA052] transition-colors">Property / Group Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.propertyName}
                        onChange={(e) => setFormData({...formData, propertyName: e.target.value})}
                        className="w-full bg-transparent border-b-2 border-stone-200 py-4 focus:outline-none focus:border-[#CFA052] transition-colors text-xl font-medium tracking-tight text-stone-900 group-hover:border-stone-300" 
                        placeholder="E.G. Taj / Oberoi / Mandate" 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4 group">
                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-400 group-focus-within:text-[#CFA052] transition-colors">Contact Principal</label>
                        <input 
                          required 
                          type="text" 
                          value={formData.contactPrincipal}
                          onChange={(e) => setFormData({...formData, contactPrincipal: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-stone-200 py-4 focus:outline-none focus:border-[#CFA052] transition-colors text-base font-medium text-stone-900" 
                          placeholder="Your Name" 
                        />
                      </div>
                      <div className="space-y-4 group">
                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-400 group-focus-within:text-[#CFA052] transition-colors">Official Email</label>
                        <input 
                          required 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-stone-200 py-4 focus:outline-none focus:border-[#CFA052] transition-colors text-base font-medium text-stone-900" 
                          placeholder="principal@hotel-group.com" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4 group">
                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-400">Current Occupancy</label>
                        <select 
                          value={formData.occupancy}
                          onChange={(e) => setFormData({...formData, occupancy: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-stone-200 py-4 outline-none text-base font-medium text-stone-900 cursor-pointer appearance-none"
                        >
                          <option>Sub 40% (Growth Mode)</option>
                          <option>40% - 70% (Stabilized)</option>
                          <option>70%+ (Optimization Phase)</option>
                        </select>
                      </div>
                      <div className="space-y-4 group">
                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-400 group-focus-within:text-[#CFA052] transition-colors">Direct Booking Mix</label>
                        <input 
                          type="text" 
                          value={formData.bookingMix}
                          onChange={(e) => setFormData({...formData, bookingMix: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-stone-200 py-4 focus:outline-none focus:border-[#CFA052] transition-colors text-base font-medium text-stone-900" 
                          placeholder="E.G. 20% Direct" 
                        />
                      </div>
                    </div>

                    <div className="pt-10">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-8 bg-[#050505] text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#CFA052] hover:text-black transition-all duration-700 flex items-center justify-center gap-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] disabled:opacity-50"
                      >
                        {isSubmitting ? "TRANSMITTING..." : "Transmit Mandate Inquiry"}
                        {!isSubmitting && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />}
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-20"
                  >
                    <div className="w-20 h-20 bg-[#050505] rounded-full flex items-center justify-center mb-8 shadow-2xl">
                       <Check className="text-[#CFA052] w-10 h-10" />
                    </div>
                    <h3 className="text-4xl font-serif italic text-stone-900 mb-4 text-center">Transmission <br />Success.</h3>
                    <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.3em] text-center mb-10">A Growth Strategist will contact the Principal shortly.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 hover:text-[#CFA052] transition-colors">Submit New Mandate</button>
                  </motion.div>
                )}
             </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
