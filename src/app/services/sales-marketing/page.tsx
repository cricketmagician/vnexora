"use client";

import { useState, useRef, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate
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
  Check,
  X,
  Send,
  MessageCircle,
  Plus,
  Minus,
  Briefcase,
  GraduationCap,
  CarFront,
  HeartPulse,
  Hotel,
  Building,
  Utensils,
  Gem,
  Bed,
  ShoppingBag,
  Users,
  Fingerprint,
  Instagram,
  Palette,
  Video,
  Layout
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

function ServiceInquiryModal({ isOpen, onClose, subject }: { isOpen: boolean, onClose: () => void, subject: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", property: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitInquiry({
        fullName: formData.name,
        email: formData.email,
        subject: `Institutional Inquiry: ${subject}`,
        message: `Property/Group: ${formData.property}\n\nObjectives: ${formData.message}`,
        source: 'sales_marketing_flip_card'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Mandate transmitted successfully.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Standard processing error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-stone-900 border border-[#CFA052]/30 p-8 md:p-14 rounded-[2.5rem] overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#CFA052]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <button onClick={onClose} className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-20">
              <X size={24} strokeWidth={1} />
            </button>

            {!isSubmitted ? (
               <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                 <div>
                   <span className="text-[10px] font-black text-[#CFA052] tracking-[0.5em] uppercase mb-4 block">Institutional Access</span>
                   <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter leading-[0.95] mb-6">
                     Speak to us <br />
                     regarding <span className="font-serif italic font-light italic text-[#CFA052]">{subject}.</span>
                   </h2>
                   <p className="text-white/40 text-[13px] font-light italic leading-relaxed">
                     Our executive strategy desk will acknowledge your inquiry <br className="hidden md:block"/> within 18 business hours.
                   </p>
                 </div>

                 <div className="space-y-6">
                   <div className="group">
                     <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-[#CFA052] transition-colors mb-2 block">Principal Name</label>
                     <input 
                       required 
                       type="text" 
                       value={formData.name}
                       onChange={(e) => setFormData({...formData, name: e.target.value})}
                       className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-lg text-white font-light placeholder:text-white/10" 
                       placeholder="Full Name" 
                     />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="group">
                       <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-[#CFA052] transition-colors mb-2 block">Corporate Email</label>
                       <input 
                         required 
                         type="email" 
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                         className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-base text-white font-light placeholder:text-white/10" 
                         placeholder="principal@hotel-group.com" 
                       />
                     </div>
                     <div className="group">
                       <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-[#CFA052] transition-colors mb-2 block">Property / Group</label>
                       <input 
                         required 
                         type="text" 
                         value={formData.property}
                         onChange={(e) => setFormData({...formData, property: e.target.value})}
                         className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-base text-white font-light placeholder:text-white/10" 
                         placeholder="Name of Asset" 
                       />
                     </div>
                   </div>
                   <div className="group">
                     <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-[#CFA052] transition-colors mb-2 block">Mandate Brief</label>
                     <textarea 
                       required 
                       rows={2}
                       value={formData.message}
                       onChange={(e) => setFormData({...formData, message: e.target.value})}
                       className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#CFA052] transition-colors text-base text-white font-light resize-none placeholder:text-white/10 scrollbar-none" 
                       placeholder="Initial objectives or specific challenges..." 
                     />
                   </div>
                 </div>

                 <button 
                   disabled={isSubmitting}
                   className="w-full py-6 bg-[#CFA052] text-black font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-4 group rounded-sm shadow-[0_20px_50px_rgba(207,160,82,0.1)]"
                 >
                   {isSubmitting ? "Transmitting mandate..." : "Initiate Consultation"}
                   <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                 </button>
               </form>
            ) : (
               <div className="relative z-10 text-center py-12">
                 <div className="w-24 h-24 bg-[#CFA052]/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-[#CFA052]/20 shadow-[0_0_50px_rgba(207,160,82,0.1)]">
                   <Check size={40} strokeWidth={1} className="text-[#CFA052]" />
                 </div>
                 <h2 className="text-4xl font-medium text-white mb-6 tracking-tighter leading-none italic font-serif">Request Sent.</h2>
                 <p className="text-white/40 text-sm max-w-xs mx-auto italic font-light leading-relaxed mb-12">
                   Your clinical inquiry has been received. <br />
                   Our strategy principal will contact you directly to discuss the mandate.
                 </p>
                 <button 
                   onClick={onClose} 
                   className="px-10 py-4 border border-[#CFA052]/30 text-[#CFA052] text-[10px] font-black uppercase tracking-[0.6em] rounded-sm hover:bg-[#CFA052] hover:text-black transition-all"
                 >
                   Return to Asset
                 </button>
               </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function LiquidCard({ 
  children, 
  className = "", 
  variant = "white" 
}: { 
  children: React.ReactNode; 
  className?: string;
  variant?: "white" | "mustard" | "dark-glass";
}) {
  const isMustard = variant === "mustard";
  const isDarkGlass = variant === "dark-glass";
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative p-8 rounded-[2.5rem] border overflow-hidden transition-all duration-300 cursor-default h-full flex flex-col",
        isMustard 
          ? "bg-[#050505] border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
          : isDarkGlass
          ? "bg-white/[0.03] backdrop-blur-3xl border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] shadow-2xl"
          : "bg-white/90 backdrop-blur-2xl border-stone-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      {/* Dynamic Spotlight Effect for Black and Glass Cards */}
      {(isMustard || isDarkGlass) && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                ${isMustard ? 'rgba(207, 160, 82, 0.15)' : 'rgba(255, 255, 255, 0.08)'},
                transparent 80%
              )
            `,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
}

function DigitalMarketingServices() {
  const strategyTags = [
    "ROI Architecture",
    "Market Dominance",
    "Prestige Enhancement",
    "Direct-First Booking",
    "OTA Dominance",
    "SEO Narrative"
  ];

  const services = [
    {
      title: "SEO & Local Search",
      desc: "Rank higher in Google for industry-specific keywords such as 'luxury hospitality marketing' or 'institutional real estate SEO'.",
      icon: Search
    },
    {
      title: "Social Media Marketing",
      desc: "Build strong community engagement and elite brand narratives across Instagram, TikTok, and LinkedIn.",
      icon: Instagram
    },
    {
      title: "Paid Ads & PPC",
      desc: "Performance-driven ad campaigns for Google and Meta that maximize direct bookings and high-yield leads.",
      icon: Target
    },
    {
      title: "Branding & Creative Production",
      desc: "From couture brand identity to cinematic visual campaigns, we craft stories that command prestige.",
      icon: Palette
    },
    {
      title: "Content Marketing",
      desc: "High-authority editorial, blogs, and storytelling specifically architectural for the luxury segment.",
      icon: Video
    },
    {
      title: "Web Design & Conversion",
      desc: "Premium, conversion-centric web architecture that transforms visitors into institutional mandates.",
      icon: Layout
    }
  ];

  return (
    <Section className="bg-[#050505] py-24 border-t border-white/5 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#CFA052]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 mb-24 items-center">
          <div className="lg:w-3/5">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#CFA052] font-black text-[10px] uppercase tracking-[0.5em] mb-8 block"
            >
              Modern Capabilities
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[0.9] mb-10"
            >
              Digital <span className="font-serif italic font-light text-[#CFA052]">Marketing.</span> <br />
              Premium <span className="font-serif italic font-light text-[#CFA052]">Services.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-stone-400 text-lg font-light italic max-w-lg leading-relaxed border-l-2 border-[#CFA052]/30 pl-8"
            >
              "Generic marketing is a commodity. We engineer high-stakes digital narratives—forming structures of institutional desire."
            </motion.p>
          </div>
          
          <div className="lg:w-2/5 relative h-[300px] hidden lg:block">
             <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-3xl rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#CFA052]/20 via-transparent to-black/40" />
                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
             </div>
             <div className="absolute inset-0 p-8 flex flex-wrap gap-3 items-center justify-center">
                {strategyTags.map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    animate={{ 
                       y: [0, -6, 0],
                       x: [0, 4, 0]
                    }}
                    transition={{ 
                       duration: 4 + i, 
                       repeat: Infinity, 
                       delay: i * 0.2 
                    }}
                    className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
                  >
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#CFA052]">{tag}</span>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <LiquidCard variant="dark-glass">
                <div className="w-10 h-10 bg-white/5 rounded-xl shadow-sm flex items-center justify-center text-[#CFA052] mb-8 border border-white/5">
                  <service.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 tracking-tight uppercase">{service.title}</h3>
                <p className="text-stone-400 text-sm font-light leading-relaxed italic">{service.desc}</p>
              </LiquidCard>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
           <Link href="/services" className="px-8 py-4 bg-black text-white font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-[#CFA052] transition-all group overflow-hidden relative">
             <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
             View All Services <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>
      </div>
    </Section>
  );
}


function WorkTogetherCTA({ scrollToForm }: { scrollToForm: () => void }) {
  return (
    <Section className="bg-black py-24 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-medium text-white mb-8 tracking-tighter"
            >
              Let's <br /> <span className="font-serif italic font-light italic text-[#CFA052]">Work Together.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-lg md:text-xl font-light leading-relaxed italic"
            >
              Vnexora helps you realize the full potential of your brand's digital marketing. Contact us to learn how our customized institutional strategies can improve your visibility, growth, and sales.
            </motion.p>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={scrollToForm}
            className="px-12 py-6 bg-white text-black font-black text-[11px] uppercase tracking-[0.4em] hover:bg-[#CFA052] transition-all rounded-sm whitespace-nowrap"
          >
            Request a proposal
          </motion.button>
        </div>
      </div>
    </Section>
  );
}

function IndustryExperienceGrid() {
  const industries = [
    { name: "Restaurant", icon: Utensils },
    { name: "Hospitality", icon: Hotel },
    { name: "Real Estate", icon: Building2 },
    { name: "Luxury", icon: Gem },
    { name: "Hotel", icon: Bed },
    { name: "Creators", icon: Video },
  ];

  return (
    <Section className="bg-[#050505] py-40 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CFA052]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium text-white tracking-tighter"
          >
            We have extensive experience in the <br /> <span className="font-serif italic font-light italic text-[#CFA052]">following industries.</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-5 bg-white/[0.03] backdrop-blur-3xl border border-white/10 px-10 py-6 rounded-3xl group hover:bg-[#CFA052]/10 hover:border-[#CFA052]/40 transition-all duration-700 cursor-default shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#CFA052] group-hover:bg-[#CFA052] group-hover:text-black group-hover:scale-110 transition-all duration-700">
                <item.icon size={20} />
              </div>
              <span className="text-base font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-[0.2em]">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}


function WhyChooseUs() {
  const badges = [
    "Google Ads Dominance",
    "Meta Performance Edge",
    "Hospitality Market Excellence",
    "Reputation Leadership",
    "Secure Results Systems"
  ];

  const props = [
    { 
      title: "Google Ads Dominance", 
      desc: "Commanding high-intent search traffic with elite, high-yield Google Ads architecture.",
      icon: Search
    },
    { 
      title: "Meta Performance Edge", 
      desc: "Unlocking exponential growth and social prestige across Instagram and Facebook ecosystems.",
      icon: Instagram
    },
    { 
      title: "Hospitality Market Excellence", 
      desc: "Institutional expertise tailored specifically for the global luxury hospitality segment.",
      icon: Hotel
    },
    { 
      title: "Reputation Leadership", 
      desc: "Protecting and elevating your brand's digital narrative and institutional prestige.",
      icon: ShieldCheck
    },
    { 
      title: "Secure Results Systems", 
      desc: "Data-driven operational grids ensuring sustained, scalable, and verifiable ROI.",
      icon: BarChart3
    }
  ];  return (
    <Section className="bg-[#FAF9F6] py-32 overflow-hidden border-t border-stone-200/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-[0.9] mb-8"
          >
            Why Choose Vnexora <br /> <span className="font-serif italic font-light italic text-[#CFA052] block mt-4">for Marketing?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg md:text-xl font-light italic max-w-2xl mx-auto mb-20 leading-relaxed"
          >
            A clinical synthesis of industry heritage and institutional growth architecture designed to sustain market leadership.
          </motion.p>
 
          <div className="flex flex-wrap justify-center gap-4 mb-24 cursor-default">
            {badges.map((badge, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ 
                   y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                   opacity: { delay: i * 0.1 },
                   scale: { delay: i * 0.1 }
                }}
                viewport={{ once: true }}
                className="px-8 py-4 bg-white/40 backdrop-blur-xl rounded-full flex items-center gap-3 border border-[#CFA052]/20 hover:border-[#CFA052]/60 hover:bg-[#CFA052]/5 transition-all duration-500 group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
              >
                <div className="w-5 h-5 rounded-full bg-[#CFA052]/10 flex items-center justify-center group-hover:bg-[#CFA052] group-hover:text-white transition-all duration-500">
                  <CheckCircle2 size={10} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 group-hover:text-stone-900 transition-colors">{badge}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <LiquidCard variant="mustard">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-8">
                   <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#CFA052] mb-4 uppercase">{item.title}</h3>
                <p className="text-white/80 font-light leading-relaxed italic line-clamp-3">
                  {item.desc}
                </p>
              </LiquidCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default function BrandingPromotionHub() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
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
      <ShaderBackground className="h-screen flex items-start justify-center pt-40">
        <div className="container relative z-20 mx-auto px-6 flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-base md:text-lg font-sans font-black text-white/40 uppercase tracking-[0.6em] leading-relaxed mb-6">
                Elite Digital Marketing Solutions for
              </h1>
              <p className="font-handwritten text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_10px_40px_rgba(207,160,82,0.4)] drop-shadow-2xl lowercase mb-12 leading-[1.1] tracking-tight">
                hotels, resorts, restaurants, <br />
                real estate & luxury brands
              </p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-sm md:text-base font-sans font-medium text-white/60 uppercase tracking-[0.3em] max-w-4xl mx-auto leading-loose mb-16"
              >
                Our elite digital marketing solutions take your brand to the top of Google—driving lasting visibility, higher profits, and powerful business growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <button 
                  onClick={scrollToForm}
                  className="px-12 py-6 bg-[#CFA052] text-black font-sans font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:scale-105 transition-all shadow-[0_20px_50px_rgba(207,160,82,0.3)] flex items-center justify-center gap-4 group rounded-sm mx-auto"
                >
                  Request for proposal
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ShaderBackground>
      
      <DigitalMarketingServices />

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { 
                title: "Restaurant Marketing Services", 
                desc: "Clinical branding and revenue architecture for Michelin-tier dining and elite hospitality groups.",
                image: "/images/services/luxury_hotel_spa_wellness.png",
                accent: "Gastronomy"
              },
              { 
                title: "Hospitality Marketing Services", 
                desc: "Strategic positioning and global reach for diversified hospitality portfolios and resorts.",
                image: "/images/services/luxury_hospitality_cinematography.png",
                accent: "Institutional"
              },
              { 
                title: "Real Estate Marketing Services", 
                desc: "Asset-level narrative architecture for ultra-luxury developments and high-yield properties.",
                image: "/images/services/luxury_hotel_member_club.png",
                accent: "Asset"
              },
              { 
                title: "Luxury Marketing Services", 
                desc: "Elite positioning for ultra-high-net-worth brands across the global luxury ecosystem.",
                image: "/images/services/luxury_influencer_lobby_shot.png",
                accent: "Prestige"
              },
              { 
                title: "Hotel Marketing Services", 
                desc: "Direct-first booking strategies and ADR-focused growth for independent boutique hotels.",
                image: "/images/services/luxury_hospitality_cinematography.png",
                accent: "Yield"
              },
              { 
                title: "Creators Services", 
                desc: "Deploying high-impact creator collaborations and cinematic storytelling to amplify reach.",
                image: "/images/services/luxury_hospitality_cinematography.png",
                accent: "Influence"
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="group h-[480px] [perspective:1000px]"
              >
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 h-full w-full rounded-[2.5rem] overflow-hidden bg-stone-100 [backface-visibility:hidden]">
                    {/* Background Pillar Image */}
                    <Image 
                      src={pillar.image} 
                      alt={pillar.title} 
                      fill 
                      className="object-cover brightness-100 group-hover:scale-110 transition-all duration-1000 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-12 z-10">
                      <h3 className="text-3xl lg:text-4xl font-sans font-bold tracking-tighter uppercase text-white drop-shadow-xl group-hover:translate-z-20 transition-all duration-700">
                        {pillar.title}
                      </h3>
                      <div className="w-12 h-[2px] bg-[#CFA052] mt-4 transform origin-left group-hover:scale-x-[3] transition-transform duration-700" />
                    </div>

                    {/* Pop-out overlay element */}
                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <span className="text-[8px] font-black text-white uppercase tracking-[0.4em] italic">{pillar.accent}</span>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-[#CFA052] p-10 lg:p-12 flex flex-col justify-center items-start text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-6 block opacity-60">Strategic Depth</span>
                    <h4 className="text-3xl font-sans font-black tracking-tighter uppercase mb-6 leading-tight">
                      {pillar.title} <br /> Architecture.
                    </h4>
                    <p className="text-black/80 font-medium text-base leading-relaxed mb-10 italic">
                      {pillar.desc}
                    </p>
                    <div 
                      onClick={() => {
                        setSelectedService(pillar.title);
                        setIsModalOpen(true);
                      }}
                      className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] border-b-2 border-black/20 pb-2 hover:border-black transition-all cursor-pointer group/btn"
                    >
                      Speak to us <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Glass Shadow/Pop-out effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(207,160,82,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <WhyChooseUs />
      <WorkTogetherCTA scrollToForm={scrollToForm} />
      <IndustryExperienceGrid />

      {/* 4. THE VNEXORA FLYWHEEL — The Strategy Cycle */}
      <section className="relative w-full h-[45vh] min-h-[400px] overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <Image 
          src="/images/sections/engineered_evolution.png" 
          alt="Engineered Evolution" 
          fill 
          priority
          className="object-cover brightness-[0.35] grayscale-[0.2]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
             >
               <span className="text-[10px] font-black text-[#CFA052] tracking-[0.6em] uppercase mb-8 block italic">The Methodology</span>
               <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                 Engineered <br /><span className="font-serif italic font-light text-[#CFA052]">Evolution.</span>
               </h2>
             </motion.div>
        </div>
      </section>

      <Section spacing="lg" className="bg-[#050505] relative overflow-hidden pt-24 pb-32">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CFA052]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-xl text-stone-400 font-light max-w-2xl mx-auto italic leading-relaxed"
             >
               A clinical 4-stage deployment architecture that ensures every branding mandate translates into a financial milestone.
             </motion.p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-0">
             {[
               { stage: "01. Audit", title: "Discovery & Yield Audit", desc: "Clinical analysis of current booking mix, commission leakage, and brand perception gaps." },
               { stage: "02. Position", title: "Prestige Architecture", desc: "Crafting the unique 'Pulse' — a bespoke identity that commands elite global demographics." },
               { stage: "03. Deploy", title: "Omnichannel Supremacy", desc: "Simultaneous rollout across Performance Meta-Search, AI Concierge, and Social Narrative Hubs." },
               { stage: "04. Grow", title: "Exponential Scaling", desc: "Weekly revenue performance audits and influencer amplification to sustain and scale ADR." }
             ].map((item, idx) => (
               <div key={idx} className="p-12 bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-[#CFA052]/40 transition-all duration-700 group relative overflow-hidden rounded-[2rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CFA052]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="text-[11px] font-black text-[#CFA052] mb-10 block italic relative z-10">{item.stage}</span>
                  <h4 className="text-2xl font-bold tracking-tighter uppercase text-white mb-6 group-hover:text-[#CFA052] transition-colors relative z-10">{item.title}</h4>
                  <div className="w-12 h-[2px] bg-white/10 group-hover:bg-[#CFA052] transition-all mb-8 group-hover:w-full duration-700 relative z-10" />
                  <p className="text-stone-400 text-base font-light italic leading-relaxed relative z-10 group-hover:text-stone-300 transition-colors">{item.desc}</p>
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
      <ServiceInquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        subject={selectedService}
      />
    </main>
  );
}
