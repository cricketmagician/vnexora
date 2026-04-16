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
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    challenge: "Rising competition in your market",
    referral: "Social Media",
    message: ""
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
Full Name: ${formData.firstName} ${formData.lastName}
Hotel Address: ${formData.address}
Challenge: ${formData.challenge}
Referral: ${formData.referral}
Message: ${formData.message}
    `.trim();

    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject: `Strategic Growth Brief: ${formData.challenge}`,
        message: fullMessage,
        source: 'property_development_portal'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Request submitted successfully.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Transmission error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main ref={containerRef} className="bg-white text-black selection:bg-mustard selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-black">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/services/property_development.png" 
            alt="Accelerate Growth" 
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
            <h4 className="text-[10px] font-black uppercase tracking-[0.8em] text-mustard">Vnexora Technical Services</h4>
            <h1 className="text-6xl md:text-[8vw] font-serif leading-[0.85] text-white tracking-tighter">
              Accelerate Growth. <br />
              <span className="italic text-mustard">Maximize Revenue.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-white/60 leading-relaxed italic">
              "Low bookings? Missed opportunities? We turn underperforming hotels into high-revenue assets with smart, results-driven sales solutions—built for both independent hotels and growing chains."
            </p>
            <div className="pt-8">
              <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-mustard text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-2xl"
              >
                Start Your Journey →
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
                Your Hotel's Success <br />
                Starts With a <br />
                <span className="text-mustard italic font-light">Solid Plan</span>
              </h2>
              
              <div className="space-y-6 text-black/70 text-lg md:text-xl font-light leading-relaxed">
                <p className="font-semibold text-black">Are you struggling to start your hotel project?</p>
                <p>
                  Building a hotel is hard. Without the right experts, you can face big delays and spend more money than you planned. Owners often have too much to handle, and managing a project shouldn't be another stress.
                </p>
                <p>
                  That's where <span className="font-bold text-black uppercase tracking-wider">VNEXORA Consulting</span> comes in.
                </p>
                <p>
                  We help you manage everything—from the first design to the final opening. We handle the hard work so you can focus on your business and profits.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {[
                { icon: <Zap className="w-8 h-8 text-mustard" />, title: "Need Better Market Data?", desc: "Don't guess. We provide real data to help you understand if your hotel idea will work." },
                { icon: <Building2 className="w-8 h-8 text-mustard" />, title: "No Time to Manage?", desc: "Managing a project is a full-time job. We act as your project team so you don't have to." },
                { icon: <Target className="w-8 h-8 text-mustard" />, title: "Losing Money on Design?", desc: "Small design mistakes can cost lakhs. We make sure everything is built correctly." },
                { icon: <Compass className="w-8 h-8 text-mustard" />, title: "Slow Project Speed?", desc: "Paperwork and vendors can cause months of delay. We speed up the whole process." },
                { icon: <ShieldCheck className="w-8 h-8 text-mustard" />, title: "Technical Problems?", desc: "We ensure your hotel meets all quality standards so you don't face issues later." }
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

              <div className="pt-10">
                <button 
                  onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-12 py-5 bg-mustard text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 shadow-2xl rounded-full"
                >
                  FREE CONSULTATION →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE IMPACT */}
      <section className="relative py-32 md:py-56 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/luxury_hotel_architectural_shadows.png" 
            alt="Success" 
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
              Hotel owners who work <br />
              <span className="text-mustard">with VNEXORA</span> see:
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              {[
                "Much lower setup and running costs",
                "Your hotel opens much faster",
                "Perfect design that matches your brand",
                "Best vendors and materials for your project"
              ].map((point, i) => (
                <motion.div key={i} className="flex items-center justify-center gap-6 group">
                  <Check className="text-mustard w-8 h-8 md:w-10 md:h-10 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-xl md:text-4xl font-serif italic text-white/90">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="py-20 border-y border-white/10 space-y-8">
              <p className="text-xl md:text-3xl font-serif italic font-light leading-relaxed text-white/80 max-w-4xl mx-auto">
                “VNEXORA's advice was a game-changer for us. They saved us months of rework and made sure our hotel was ready to earn money ahead of time.”
              </p>
              <div className="space-y-2">
                <p className="text-base font-bold uppercase tracking-widest text-mustard">Hotel Owner & Investor</p>
                <p className="text-xs font-light text-white/40 uppercase tracking-[0.4em]">Leading Hospitality Group</p>
              </div>
            </div>

            <div className="pt-8">
               <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-16 py-6 bg-mustard text-black text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all duration-700 rounded-full shadow-2xl"
              >
                Talk to Our Experts Today →
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
              <h3 className="text-xl md:text-2xl font-serif italic text-white/90">Work Smarter. <br/>Grow Faster.</h3>
              <div className="w-16 h-px bg-white/30" />
            </div>
            <div className="space-y-10">
              {[
                { title: "Custom Support for You", desc: "Solutions built for your specific property, whether it's a new hotel or an old one that needs a fresh start." },
                { title: "Get Your Hotel Running Faster", desc: "We take an active role to make sure your project stays on track and opens on time." },
                { title: "Better Operations", desc: "We fix gaps in your planning and help you run a smoother, more profitable business." },
                { title: "Don't Miss Any Opportunities", desc: "We track every detail so nothing gets missed, ensuring you don't lose any money during setup." }
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
                    <span className="font-bold not-italic block mb-2 underline">The Final Result</span>
                    "A successful hotel that opens on time, earns more money, and runs perfectly."
                  </p>
               </div>
               <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} className="px-12 py-5 border-2 border-white text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-mustard transition-all duration-500">I WANT A FREE CALl →</button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-[55%] bg-[#F5F1E9] p-12 md:p-24 lg:p-32 flex flex-col justify-center text-black">
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-16">
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight tracking-tight">How We Help</h2>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-serif italic text-black/60">Everything You Need <br/>to Start Your Hotel</h3>
              <div className="w-16 h-1 bg-mustard" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { icon: <Layers className="w-8 h-8 text-mustard" />, title: "End-to-End Management", desc: "From finding the right land to the final opening, we handle the whole project for you." },
                { icon: <Users2 className="w-8 h-8 text-mustard" />, title: "Expert Support", desc: "You get a dedicated project manager who focuses only on making your hotel successful." },
                { icon: <TrendingUp className="w-8 h-8 text-mustard" />, title: "More Profits", desc: "We help you reduce waste and find ways to earn more from every room and service." },
                { icon: <BarChart3 className="w-8 h-8 text-mustard" />, title: "Flexible Solutions", desc: "Whether you need a little help or a full team, we have plans that fit your budget." },
                { icon: <Handshake className="w-8 h-8 text-mustard" />, title: "We Save You Time", desc: "You focus on other things while we make sure your hotel is being built correctly." },
                { icon: <Search className="w-8 h-8 text-mustard" />, title: "Real Expertise", desc: "Backed by 20+ years of experience in the Indian hotel industry, we know what works." }
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

      {/* 5. HOW TO GET STARTED */}
      <section className="relative py-32 md:py-48 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/institutional/boardroom-analysis.png" alt="Planning" fill className="object-cover opacity-30 brightness-[0.4] grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="text-center mb-24">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-7xl font-sans font-bold text-white tracking-tight">
              Getting Started is <span className="text-mustard italic font-serif font-light">Simple!</span>
            </motion.h2>
          </div>
          <div className="space-y-6">
            {[
              { num: "1", title: "Free Call With Our Team", desc: "Let's talk about your project and what you want to achieve." },
              { num: "2", title: "A Custom Plan for You", desc: "We create a simple, step-by-step strategy for your hotel." },
              { num: "3", title: "We Get to Work", desc: "Our experts start managing your project and handling the hard work." },
              { num: "4", title: "Build and Grow", desc: "We keep checking results to make sure your hotel is a success." }
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
              "Your success is our only goal. Let us handle the hard parts so you can enjoy being a hotel owner."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. FREE CONSULTATION FORM — TOP-ALIGNED */}
      <section ref={formRef} className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 bg-[#080808] p-12 md:p-24 lg:p-32 pt-12 md:pt-16 lg:pt-20 flex flex-col justify-start text-white">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              A Successful Hotel <br /> Needs a <br /> <span className="italic text-mustard">Solid Start</span>
            </h2>
            <div className="w-20 h-1 bg-mustard" />
            <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/70 italic text-white/70">
              <p>"No hotel succeeds without a solid project plan—but handling everything alone can be overwhelming."</p>
              <p className="not-italic font-bold text-white text-3xl text-white">We are here to help.</p>
              <p>We help you with everything: from finding the right partners to managing the construction and final launch. We provide all the professional support your project needs.</p>
              <p className="text-mustard font-sans not-italic font-black uppercase text-xs tracking-[0.3em] pt-8">You can lead it—or let us run it for you.</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 bg-[#F5F1E9] p-12 md:p-24 lg:p-32 pt-12 md:pt-16 lg:pt-20 flex flex-col justify-start text-black">
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
                    <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Last Name</label>
                    <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Email address*</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Email Address" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Phone</label>
                    <input type="tel" required value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="+91 / +971" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Hotel Address</label>
                  <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Hotel Name & Address" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Current challenges</label>
                    <select value={formData.challenge} onChange={(e) => setFormData({...formData, challenge: e.target.value})} className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black appearance-none">
                      <option>Rising competition in your market</option>
                      <option>Overdependence on OTAs for base business</option>
                      <option>Challenges in hiring skilled sales</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">How did you hear about us?</label>
                    <select value={formData.referral} onChange={(e) => setFormData({...formData, referral: e.target.value})} className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black appearance-none">
                      <option>Social Media</option>
                      <option>Referral</option>
                      <option>Search Engine</option>
                      <option>Industry Event</option>
                    </select>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.challenge === "Other" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 overflow-hidden"
                    >
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Please specify your challenge</label>
                      <input 
                        required 
                        className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" 
                        placeholder="Type your challenge here..." 
                        value={formData.message} 
                        onChange={(e) => setFormData({...formData, message: e.target.value})} 
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Message</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black resize-none" placeholder="Message" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-mustard text-black text-xs font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 shadow-xl disabled:opacity-50">
                  {isSubmitting ? "TRANSMITTING..." : "AVAIL FREE CONSULTATION"}
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center mx-auto mb-8"><CheckCircle2 className="text-black" /></div>
                <h3 className="text-3xl font-serif italic text-black mb-4">Request Received.</h3>
                <p className="text-black/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">Our experts will call you soon to discuss your hotel project.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-12 text-[10px] font-black uppercase tracking-widest hover:text-mustard transition-colors text-black">Submit New Request</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden group bg-black">
         <Image src="/images/services/sales_marketing_hero.png" alt="Sales and Marketing" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-[5s]" />
         <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-transparent to-black" />
         <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-12">
               <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[1em] text-mustard block opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:tracking-[1.2em]">Next Strategy</span>
                  <div className="w-12 h-px bg-mustard/30 mx-auto" />
               </div>
               <Link href="/services/sales-marketing" className="block group/link">
                  <h2 className="text-6xl md:text-[8vw] font-serif italic text-white tracking-tighter leading-none transition-all duration-1000 group-hover:text-mustard group-hover:scale-[1.02]">Sales & <br className="md:hidden" /> Marketing.</h2>
                  <p className="mt-12 text-white/30 text-base md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-40 group-hover/link:opacity-100 transition-all duration-1000 transform translate-y-4 group-hover/link:translate-y-0 italic lowercase">"Now that your hotel is built, let's help you fill the rooms and grow your revenue."</p>
               </Link>
            </motion.div>
         </div>
      </footer>
    </main>
  );
}
