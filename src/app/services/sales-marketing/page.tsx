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
  CheckCircle2
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

      {/* 5. SALES MANDATE BRIEFING FORM */}
      <Section ref={formRef} className="py-32 md:py-48 bg-[#FAF9F6] relative overflow-hidden text-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center lg:items-start text-black">
            <div className="lg:w-1/2 space-y-10 lg:pt-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 text-center lg:text-left"
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-mustard">Sales Mandate</h4>
                <h2 className="text-5xl md:text-7xl font-serif leading-tight text-black">
                  Accelerate your <br />
                  <span className="italic text-mustard">yield journey.</span>
                </h2>
                <p className="text-black/40 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  Initialize your confidential sales brief. Let our strategy desk architect your direct-booking dominance and profit growth.
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
                  <p className="text-black/30 text-[9px] font-black uppercase tracking-[0.3em]">Confidential Growth Mandate</p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8 text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                        <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Property / Group Name</label>
                        <input 
                          name="identity"
                          required
                          value={formData.identity}
                          onChange={(e) => setFormData({...formData, identity: e.target.value})}
                          className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10"
                          placeholder="Taj / Oberoi / Mandate"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Current Occupancy</label>
                        <select 
                          value={formData.occupancy}
                          onChange={(e) => setFormData({...formData, occupancy: e.target.value})}
                          className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black appearance-none"
                        >
                          <option>Sub 40% (Growth Mode)</option>
                          <option>40% - 70% (Stabilized)</option>
                          <option>70%+ (Optimization Phase)</option>
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
                          placeholder="principal@hotel-group.com"
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
                      <label className="text-[9px] font-black tracking-widest text-black/40 uppercase">Sales Objectives / Intent</label>
                      <textarea 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-black placeholder:text-black/10 resize-none"
                        placeholder="Describe your revenue targets and current sales friction..."
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-black text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-mustard hover:text-black transition-all duration-700 shadow-2xl disabled:opacity-50"
                    >
                      {isSubmitting ? "TRANSMITTING..." : "Transmit Strategic Brief"}
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20 text-black"
                  >
                    <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="text-black" />
                    </div>
                    <h3 className="text-2xl font-serif italic text-black mb-4">Brief Transmitted.</h3>
                    <p className="text-black/40 text-[11px] font-light uppercase tracking-widest leading-relaxed">
                      A Growth Strategist will evaluate your brief and initiate private consultation within 24 hours.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-8 text-[9px] font-black uppercase tracking-widest text-black/40 hover:text-mustard transition-colors">Submit New Entry</button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
