"use client";

import { useRef, useState, forwardRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  AnimatePresence
} from "framer-motion";
import { 
  Target,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Check,
  Zap,
  Users2,
  PieChart,
  Layers,
  Sparkles,
  Search,
  CheckCircle2,
  Handshake
} from "lucide-react";
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

export default function SalesMarketingPortal() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    identity: "",
    email: "",
    occupancy: "Sub 40% (Growth Mode)",
    valuation: "",
    message: "",
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
Institution/Property: ${formData.identity}
Current Occupancy: ${formData.occupancy}
Mobile: ${formData.mobile}
Strategic Intent: ${formData.message}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: formData.identity,
        email: formData.email,
        subject: `Sales Mandate: ${formData.occupancy}`,
        message: fullMessage,
        source: 'sales_marketing_portal'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Sales mandate transmitted to the strategy desk.");
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
            src="/images/services/luxury_hotel_seo_ads_dashboard.png" 
            alt="Sales Dominance" 
            fill 
            className="object-cover opacity-60 grayscale-[0.5]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-[8vw] font-black uppercase leading-[0.85] text-white tracking-tighter">
                Accelerate <span className="text-mustard">Growth.</span> <br />
                Maximize <span className="text-mustard">Revenue.</span>
              </h1>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed">
                "Low bookings? Missed opportunities? <br />
                <span className="text-white/60 not-italic font-sans text-lg md:text-xl font-light">
                  We turn underperforming hotels into high-revenue assets with smart, results-driven sales solutions—built for both independent hotels and growing chains.
                </span>"
              </p>
              
              <p className="text-mustard font-black text-[10px] uppercase tracking-[0.5em] pt-4">
                No heavy teams. No unnecessary costs. <br />
                <span className="text-white/40 tracking-[0.2em] font-light">Just sharper positioning, stronger conversions, and consistent revenue growth.</span>
              </p>
            </div>

            <div className="pt-8 space-y-6">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Ready to unlock your hotel’s full potential?</p>
              <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-16 py-6 border border-mustard text-mustard text-[11px] font-black uppercase tracking-[0.5em] hover:bg-mustard hover:text-black transition-all duration-700 shadow-2xl"
              >
                Get Your Free Consultation →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE STRATEGIC FOUNDATION — THE PROBLEM & THE GAP */}
      <section className="py-24 md:py-40 bg-[#F5F1E9] text-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            
            {/* Left: The Problem */}
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] text-black tracking-tight">
                The Friction <br />
                <span className="text-mustard italic font-light lowercase">Costing your asset.</span>
              </h2>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40">The Problem</h4>
                  <p className="text-2xl md:text-4xl font-serif italic text-black leading-snug">
                    "Rooms stay empty. <br />
                    Opportunities get missed. <br />
                    Revenue leaks daily."
                  </p>
                </div>
                
                <div className="w-12 h-px bg-mustard" />
                
                <p className="text-black/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  Generic marketing is a commodity. Without a clinical sales strategy, you're leaving money on the table—leaving GMs and owners wearing too many hats.
                </p>
              </div>
            </div>

            {/* Right: The Gap */}
            <div className="space-y-16">
               <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-mustard">The Critical Gaps</h4>
               <div className="space-y-12">
                  {[
                    { title: "No Focused Sales System", icon: <Target className="w-8 h-8 text-mustard" />, desc: "Lack of a professional desk dedicated to high-intent revenue capture." },
                    { title: "No Consistent Follow-ups", icon: <Layers className="w-8 h-8 text-mustard" />, desc: "Leads perish in unmanaged inboxes and siloed communications." },
                    { title: "No Conversion Strategy", icon: <TrendingUp className="w-8 h-8 text-mustard" />, desc: "High traffic with low yield—failing to transform interest into occupied rooms." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-black text-black uppercase tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-black/50 font-light leading-relaxed italic">{item.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
               
               <div className="p-10 border border-black/5 bg-white space-y-4">
                  <p className="text-xl font-serif italic text-black">
                    "These challenges <span className="font-bold not-italic">cost you revenue</span>—but you don’t have to face them alone."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE INSTITUTIONAL IMPACT — WHAT YOU GET */}
      <section className="relative py-32 md:py-56 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/luxury_hospitality_cinematography.png" 
            alt="Institutional Success" 
            fill 
            className="object-cover opacity-50 brightness-50 grayscale"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-bold leading-tight tracking-tighter uppercase">
              WHAT YOU GET with <br />
              <span className="text-mustard">Vnexora Sales Solutions</span>
            </h2>

            {/* Success Points */}
            <div className="space-y-8 max-w-3xl mx-auto">
              {[
                "Consistent occupancy",
                "Stronger client pipeline",
                "Higher conversion rates",
                "Measurable profit growth"
              ].map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center justify-center gap-6 group"
                >
                  <Check className="text-mustard w-8 h-8 md:w-10 md:h-10 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-xl md:text-5xl font-serif italic text-white/90">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-3 pt-4">
              {[0, 1, 2].map(i => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-mustard' : 'bg-white/20'}`} />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="pt-12">
               <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-16 py-6 bg-mustard text-black text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all duration-700 rounded-full shadow-2xl"
              >
                I WANT FREE CONSULTATION →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE BENEFITS & OFFERINGS — REPLICATING RELIANCE SPLIT MODEL */}
      <section className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Benefits (Mustard) */}
        <div className="lg:w-[45%] bg-mustard p-12 md:p-24 lg:p-32 flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">Benefits</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-serif italic text-white/90">Powering Performance. <br/>Delivering Results.</h3>
              <div className="w-16 h-px bg-white/30" />
            </div>

            <div className="space-y-10">
              {[
                { title: "Tailored Sales Support", desc: "Flexible solutions designed to fit your property—whether you need a short-term push or a long-term sales engine." },
                { title: "Accelerated Business Generation", desc: "A proactive approach that drives consistent enquiries, stronger pipelines, and increased bookings." },
                { title: "Operational Efficiency", desc: "Streamlined sales processes that eliminate gaps, reduce delays, and improve conversion rates." },
                { title: "Opportunity Maximization", desc: "Every lead tracked, every enquiry followed—ensuring no revenue potential is left untapped." }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-sm font-black uppercase tracking-widest">{item.title}</h4>
                  <p className="text-white/70 font-light text-base leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 space-y-8">
               <div className="p-8 border border-white/20 bg-white/5 italic">
                  <p className="text-lg md:text-xl font-light leading-relaxed">
                    <span className="font-bold not-italic block mb-2 underline">The Outcome</span>
                    "Stronger occupancy, improved RevPAR, and a high-performing, revenue-focused sales ecosystem."
                  </p>
               </div>
               <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 border-2 border-white text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-mustard transition-all duration-500"
              >
                I WANT FREE CONSULTATION →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: Offerings (Beige) */}
        <div className="lg:w-[55%] bg-[#F5F1E9] p-12 md:p-24 lg:p-32 flex flex-col justify-center text-black">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight tracking-tight">Our Offerings</h2>
            
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-serif italic text-black/60">A Complete Sales Engine <br/>for Your Hotel</h3>
              <div className="w-16 h-1 bg-mustard" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { icon: <Layers className="w-8 h-8 text-mustard" />, title: "End-to-End Management", desc: "From market intelligence and lead generation to client conversion and confirmed bookings." },
                { icon: <Users2 className="w-8 h-8 text-mustard" />, title: "Dedicated Specialists", desc: "An experienced sales professional focused solely on driving your hotel’s occupancy." },
                { icon: <TrendingUp className="w-8 h-8 text-mustard" />, title: "Optimised Revenue", desc: "Minimise unsold inventory. Maximise every booking opportunity through clinical precision." },
                { icon: <BarChart3 className="w-8 h-8 text-mustard" />, title: "Scalable Solutions", desc: "Short-term acceleration or long-term strategy—tailored to your property’s needs." },
                { icon: <Handshake className="w-8 h-8 text-mustard" />, title: "Sales-Led Approach", desc: "While you deliver guest experiences, we ensure a steady flow of business and occupancy." },
                { icon: <Search className="w-8 h-8 text-mustard" />, title: "Data Driven Expertise", desc: "Backed by 20+ years of combined hospitality experience and proven frameworks." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                   <div className="shrink-0 pt-1">{item.icon}</div>
                   <div className="space-y-2">
                      <h4 className="text-sm font-black uppercase tracking-tight leading-tight">{item.title}</h4>
                      <p className="text-black/50 text-xs font-light leading-relaxed italic">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-black/5">
               <div className="space-y-4">
                  <span className="text-[10px] font-black text-mustard uppercase tracking-[0.5em]">The Result</span>
                  <p className="text-3xl md:text-4xl font-serif italic text-black">
                     "Stronger pipelines. <br />
                     Higher conversions. <br />
                     Sustainable revenue growth."
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. STRATEGIC ONBOARDING — REPLICATING RELIANCE GETTING STARTED SECTION */}
      <section className="relative py-32 md:py-48 bg-black overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/institutional/boardroom-analysis.png" 
            alt="Strategic Planning" 
            fill 
            className="object-cover opacity-30 brightness-[0.4] grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-sans font-bold text-white tracking-tight"
            >
              Getting Started is <span className="text-mustard italic font-serif font-light">Easy!</span>
            </motion.h2>
          </div>

          <div className="space-y-6">
            {[
              { num: "1", title: "Schedule a Free Consultation", desc: "Let’s discuss your current sales challenges and goals." },
              { num: "2", title: "Customized Sales Strategy", desc: "We create a tailored plan for your hotel." },
              { num: "3", title: "Implementation & Execution", desc: "Your dedicated sales solutions leader takes full charge of your sales operations." },
              { num: "4", title: "Continuous Optimization", desc: "We track performance and refine strategies to ensure ongoing success." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group"
              >
                <div className="w-24 h-24 shrink-0 bg-mustard flex items-center justify-center text-white text-5xl font-black shadow-[0_20px_40px_rgba(207,160,82,0.3)] group-hover:scale-105 transition-transform">
                  {step.num}
                </div>
                <div className="flex-1 text-center md:text-left py-6 border-b border-white/10 group-hover:border-mustard/40 transition-colors w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                    {step.title} <span className="font-light text-white/40 normal-case">— {step.desc}</span>
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Mission Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white group hover:border-mustard transition-colors">
              <Sparkles className="w-8 h-8 group-hover:text-mustard transition-colors" />
            </div>
            <p className="text-xl md:text-2xl font-serif italic text-white/80 max-w-2xl leading-relaxed">
              "Your success is our mission. Let us <span className="text-mustard font-sans not-italic font-black uppercase text-sm tracking-widest mx-2">take sales off your plate</span> so you can focus on running your hotel."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. FINAL CONSULTATION SPLIT — REPLICATING RELIANCE SPLIT FORM */}
      <section ref={formRef} className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column: Narrative (Dark) */}
        <div className="lg:w-1/2 bg-[#080808] p-12 md:p-24 lg:p-32 flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Sales: The Engine <br />
              Behind Every <br />
              <span className="italic text-mustard">Successful Hotel</span>
            </h2>
            
            <div className="w-20 h-1 bg-mustard" />

            <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/70 italic">
              <p>
                "No hotel scales without a strong sales strategy—yet building one can feel complex and time-consuming."
              </p>
              <p className="not-italic font-bold text-white text-3xl">That’s where we step in.</p>
              <p>
                From driving bookings and strengthening your market presence to equipping your team with proven sales techniques, we deliver end-to-end sales solutions designed for results.
              </p>
              <p className="text-mustard font-sans not-italic font-black uppercase text-xs tracking-[0.3em] pt-8">
                You can lead it—or let us run it for you.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Free Consultation (Beige) */}
        <div className="lg:w-1/2 bg-[#F5F1E9] p-12 md:p-24 lg:p-32 flex flex-col justify-center text-black">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter">Free Consultation</h2>
              <div className="w-12 h-px bg-black/20" />
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">First Name</label>
                    <input 
                      required
                      value={formData.identity.split(' ')[0] || ''}
                      onChange={(e) => setFormData({...formData, identity: `${e.target.value} ${formData.identity.split(' ')[1] || ''}`})}
                      className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Last Name</label>
                    <input 
                      required
                      onChange={(e) => setFormData({...formData, identity: `${formData.identity.split(' ')[0] || ''} ${e.target.value}`})}
                      className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light"
                      placeholder="Your last name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Email Address*</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Phone</label>
                    <input 
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light"
                      placeholder="+91 / +971"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Hotel Address / Name</label>
                  <input 
                    required
                    className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light"
                    placeholder="Where is your property located?"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Current Challenges</label>
                    <select 
                      value={formData.occupancy}
                      onChange={(e) => setFormData({...formData, occupancy: e.target.value})}
                      className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light appearance-none"
                    >
                      <option>Low Occupancy</option>
                      <option>Poor Direct Bookings</option>
                      <option>High Commission Costs</option>
                      <option>Team Training Needs</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">How did you hear about us?</label>
                    <select className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light appearance-none">
                      <option>Social Media</option>
                      <option>Referral</option>
                      <option>Search Engine</option>
                      <option>Industry Event</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light resize-none"
                    placeholder="Tell us about your goals..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-mustard text-black text-xs font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? "TRANSMITTING..." : "AVAIL FREE CONSULTATION"}
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="text-black" />
                </div>
                <h3 className="text-3xl font-serif italic text-black mb-4">Mandate Transmitted.</h3>
                <p className="text-black/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                  A senior sales partner will evaluate your brief and initiate private consultation within 24 hours.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="mt-12 text-[10px] font-black uppercase tracking-widest hover:text-mustard transition-colors">Submit New Entry</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
