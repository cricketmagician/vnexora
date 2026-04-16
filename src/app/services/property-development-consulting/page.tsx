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
  Zap,
  Layers,
  Users2,
  TrendingUp,
  Search,
  Handshake,
  CheckCircle2,
  Sparkles
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
    mobile: "",
    occupancy: "Ideation"
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
            <h4 className="text-[10px] font-black uppercase tracking-[0.8em] text-mustard">Concept to Arrival Oversight</h4>
            <h1 className="text-6xl md:text-[8vw] font-serif leading-[0.85] text-white tracking-tighter">
              Institutional <br />
              Development. <br />
              <span className="italic text-mustard">Engineered for ROI.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-white/60 leading-relaxed italic">
              "We provide professional technical services and owner representation to ensure your hotel development reaches operational launch faster, with total brand compliance and maximized asset value."
            </p>
            <div className="pt-8">
              <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-mustard text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-2xl"
              >
                Start Your Development Audit →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE STRATEGIC FOUNDATION */}
      <section className="py-24 md:py-32 bg-[#F5F1E9] text-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] text-black tracking-tight">
                Your Asset’s Success <br />
                Starts with an Institutional <br />
                <span className="text-mustard italic font-light">Development Strategy</span>
              </h2>
              
              <div className="space-y-6 text-black/70 text-lg md:text-xl font-light leading-relaxed">
                <p className="font-semibold text-black">Are you struggling to bring your hospitality vision to life?</p>
                <p>
                  Without a dedicated development arm, you're risking capital and asset longevity. Owners and investors are already wearing too many hats—development oversight shouldn't be another burden.
                </p>
                <p>
                  That's where <span className="font-bold text-black uppercase tracking-wider">VNEXORA Development Consulting</span> comes in.
                </p>
                <p>
                  We bridge the gap, provides a clinical development desk to drive asset creation, optimize pre-opening cycles, and maximize institutional yield.
                </p>
              </div>

              <div className="pt-10">
                <button 
                  onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-12 py-5 bg-mustard text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 shadow-2xl"
                >
                  Initialize Your Mandate →
                </button>
              </div>
            </div>

            <div className="space-y-12">
              {[
                { icon: <Zap className="w-8 h-8 text-mustard" />, title: "Feasibility Gaps", desc: "Struggling with unreliable data and unverified market entry strategies?" },
                { icon: <Building2 className="w-8 h-8 text-mustard" />, title: "No Development Desk", desc: "Without professional technical oversight, crucial project risks are overlooked." },
                { icon: <Target className="w-8 h-8 text-mustard" />, title: "Yield Leakage", desc: "Design flaws and procurement inefficiencies mean lost financial potential." },
                { icon: <Compass className="w-8 h-8 text-mustard" />, title: "Slow Project Cycles", desc: "Navigating regulatory and vendor complexity takes time you don't have." },
                { icon: <ShieldCheck className="w-8 h-8 text-mustard" />, title: "Technical Debt", desc: "GMs and owners lack the technical services depth to audit architectural compliance." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-black">
                      {item.title} <span className="text-black/30 font-light mx-2">—</span> 
                      <span className="font-light text-black/60">{item.desc}</span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE INSTITUTIONAL IMPACT */}
      <section className="relative py-32 md:py-56 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/luxury_hotel_architectural_shadows.png" 
            alt="Institutional Success" 
            fill 
            className="object-cover opacity-50 brightness-50"
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
              Asset owners that utilize <br />
              <span className="text-mustard">VNEXORA Development Mandates</span> see:
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              {[
                "Significant reduction in pre-opening overheads",
                "Accelerated timeline to operational launch",
                "Total architectural & brand compliance",
                "Optimized procurement & vendor alignment"
              ].map((point, i) => (
                <motion.div key={i} className="flex items-center justify-center gap-6 group">
                  <Check className="text-mustard w-8 h-8 md:w-10 md:h-10 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-xl md:text-4xl font-serif italic text-white/90">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="py-20 border-y border-white/10 space-y-8">
              <p className="text-xl md:text-3xl font-serif italic font-light leading-relaxed text-white/80 max-w-4xl mx-auto">
                “VNEXORA's technical advisory has been a game-changer for our portfolio. Their insights into brand standards saved us months of rework and guaranteed our asset reached ROI ahead of schedule.”
              </p>
              <div className="space-y-2">
                <p className="text-base font-bold uppercase tracking-widest text-mustard">Executive Director</p>
                <p className="text-xs font-light text-white/40 uppercase tracking-[0.4em]">Global Hospitality Real Estate Fund</p>
              </div>
            </div>

            <div className="pt-8">
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

      {/* 4. THE BENEFITS & OFFERINGS */}
      <section className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-[45%] bg-mustard p-12 md:p-24 lg:p-32 flex flex-col justify-center text-white">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
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
               <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} className="px-12 py-5 border-2 border-white text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-mustard transition-all duration-500">I WANT FREE CONSULTATION →</button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-[55%] bg-[#F5F1E9] p-12 md:p-24 lg:p-32 flex flex-col justify-center text-black">
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-16">
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight tracking-tight">Our Offerings</h2>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-serif italic text-black/60">A Complete Sales Engine <br/>for Your Hotel</h3>
              <div className="w-16 h-1 bg-mustard" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { icon: <Layers className="w-8 h-8 text-mustard" />, title: "End-to-End Sales Management", desc: "From market intelligence and lead generation to client conversion and confirmed bookings—we manage the entire sales lifecycle." },
                { icon: <Users2 className="w-8 h-8 text-mustard" />, title: "Dedicated Revenue Specialist", desc: "An experienced sales professional focused solely on driving your hotel’s occupancy and revenue growth." },
                { icon: <TrendingUp className="w-8 h-8 text-mustard" />, title: "Optimised Revenue Performance", desc: "Minimise unsold inventory. Maximise every booking opportunity." },
                { icon: <BarChart3 className="w-8 h-8 text-mustard" />, title: "Flexible, Scalable Solutions", desc: "Short-term acceleration or long-term strategy—tailored to your property’s needs." },
                { icon: <Handshake className="w-8 h-8 text-mustard" />, title: "Sales-Led Approach", desc: "While you deliver guest experiences, we ensure a steady flow of business and consistent occupancy." },
                { icon: <Search className="w-8 h-8 text-mustard" />, title: "Driven by Data & Expertise", desc: "Backed by 20+ years of combined hospitality experience, proven sales frameworks, and results across independent hotels and established brands." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start text-black">
                   <div className="shrink-0 pt-1">{item.icon}</div>
                   <div className="space-y-2">
                      <h4 className="text-sm font-black uppercase tracking-tight leading-tight">{item.title}</h4>
                      <p className="text-black/50 text-xs font-light leading-relaxed italic">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. STRATEGIC ONBOARDING */}
      <section className="relative py-32 md:py-48 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/institutional/boardroom-analysis.png" alt="Strategic Planning" fill className="object-cover opacity-30 brightness-[0.4] grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="text-center mb-24">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-7xl font-sans font-bold text-white tracking-tight">
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
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
                <div className="w-24 h-24 shrink-0 bg-mustard flex items-center justify-center text-white text-5xl font-black shadow-[0_20px_40px_rgba(207,160,82,0.3)] group-hover:scale-105 transition-transform">{step.num}</div>
                <div className="flex-1 text-center md:text-left py-6 border-b border-white/10 group-hover:border-mustard/40 transition-colors w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                    {step.title} <span className="font-light text-white/40 normal-case">— {step.desc}</span>
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white group hover:border-mustard transition-colors text-white">
              <Sparkles className="w-8 h-8 group-hover:text-mustard transition-colors text-white" />
            </div>
            <p className="text-xl md:text-2xl font-serif italic text-white/80 max-w-2xl leading-relaxed">
              "Your success is our mission. Let us <span className="text-mustard font-sans not-italic font-black uppercase text-sm tracking-widest mx-2">take sales off your plate</span> so you can focus on running your hotel."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. FINAL CONSULTATION SPLIT */}
      <section ref={formRef} className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 bg-[#080808] p-12 md:p-24 lg:p-32 flex flex-col justify-center text-white">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Sales: The Engine <br /> Behind Every <br /> <span className="italic text-mustard">Successful Hotel</span>
            </h2>
            <div className="w-20 h-1 bg-mustard" />
            <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/70 italic text-white/70">
              <p>"No hotel scales without a strong sales strategy—yet building one can feel complex and time-consuming."</p>
              <p className="not-italic font-bold text-white text-3xl">That’s where we step in.</p>
              <p>From driving bookings and strengthening your market presence to equipping your team with proven sales techniques, we deliver end-to-end sales solutions designed for results.</p>
              <p className="text-mustard font-sans not-italic font-black uppercase text-xs tracking-[0.3em] pt-8">You can lead it—or let us run it for you.</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 bg-[#F5F1E9] p-12 md:p-24 lg:p-32 flex flex-col justify-center text-black">
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-black">Free Consultation</h2>
              <div className="w-12 h-px bg-black/20" />
            </div>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">First Name</label>
                    <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Last Name</label>
                    <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Your last name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Email Address*</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Phone</label>
                    <input type="tel" required value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="+91 / +971" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Hotel Address / Name</label>
                  <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Where is your property located?" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-mustard text-black text-xs font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 shadow-xl disabled:opacity-50">
                  {isSubmitting ? "TRANSMITTING..." : "AVAIL FREE CONSULTATION"}
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center mx-auto mb-8"><CheckCircle2 className="text-black" /></div>
                <h3 className="text-3xl font-serif italic text-black mb-4">Mandate Transmitted.</h3>
                <p className="text-black/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">A senior sales partner will evaluate your brief and initiate private consultation within 24 hours.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-12 text-[10px] font-black uppercase tracking-widest hover:text-mustard transition-colors text-black">Submit New Entry</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden group bg-black">
         <Image src="/images/institutional/hr-human-capital.png" alt="Human Capital Alignment" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-[5s]" />
         <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-transparent to-black" />
         <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-12">
               <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[1em] text-mustard block opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:tracking-[1.2em]">Institutional Continuity</span>
                  <div className="w-12 h-px bg-mustard/30 mx-auto" />
               </div>
               <Link href="/services/human-resource-talent-development" className="block group/link">
                  <h2 className="text-6xl md:text-[8vw] font-serif italic text-white tracking-tighter leading-none transition-all duration-1000 group-hover:text-mustard group-hover:scale-[1.02]">Institutional <br className="md:hidden" /> Human Capital.</h2>
                  <p className="mt-12 text-white/30 text-base md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-40 group-hover/link:opacity-100 transition-all duration-1000 transform translate-y-4 group-hover/link:translate-y-0 italic lowercase">"Architecting high-performance human ecosystems through clinical talent alignment."</p>
               </Link>
            </motion.div>
         </div>
      </footer>
    </main>
  );
}
