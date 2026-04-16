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
  Compass,
  ShieldCheck,
  Layout,
  Cpu,
  Layers,
  Users2,
  TrendingUp,
  Search,
  Handshake,
  CheckCircle2,
  Sparkles,
  DraftingCompass,
  Zap,
  HardHat,
  Lightbulb,
  Maximize2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

export default function HotelArchitecturePortal() {
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
    challenge: "Hotel Architecture & Planning",
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
        subject: `Architecture Mandate Inquiry: ${formData.challenge}`,
        message: fullMessage,
        source: 'hotel_architecture_portal'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Design inquiry submitted successfully.");
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
      
      {/* 1. HERO SECTION — PIXEL PERFECT REPLICA AESTHETIC */}
      <section className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-black">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/services/hotel_architecture_hero.png" 
            alt="Hotel Architecture" 
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
            <h4 className="text-[10px] font-black uppercase tracking-[0.8em] text-mustard">Vnexora Architecture & Design</h4>
            <h1 className="text-6xl md:text-[8vw] font-serif leading-[0.85] text-white tracking-tighter">
              Great Hotels Start <br />
              <span className="italic text-mustard">With Architecture.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-white/60 leading-relaxed italic">
              "We provide a complete, single-source solution for hotel design and planning. From the first sketch to the final technical execution, we ensure your building is both beautiful and functional."
            </p>
            <div className="pt-8">
              <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-mustard text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-2xl"
              >
                Let's Plan Your Success →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE HOLISTIC METHODOLOGY — OVERLAPPING LAYOUT */}
      <section className="py-24 md:py-48 bg-[#F5F1E9] text-black overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative z-10 space-y-12">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-mustard">The APPIA Logic</span>
                <h2 className="text-4xl md:text-7xl font-serif font-bold leading-[1.1] text-black tracking-tight">
                  Design. Engineering. <br />
                  <span className="text-mustard italic font-light">One Source.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-black/70 text-lg md:text-xl font-light leading-relaxed">
                <p className="font-semibold text-black italic">"We don't just design buildings; we architect feelings and operational efficiency."</p>
                <p>
                  A hotel is more than just architecture. It's a complex machine that must work perfectly 24/7. Our holistic approach combines architectural vision with technical planning and interior atmosphere.
                </p>
                <p>
                  By acting as your single point of contact, we eliminate the gaps between architects, designers, and engineers. This saves you months of rework and ensures a seamless project delivery.
                </p>
              </div>

              <div className="pt-8">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black">
                      <DraftingCompass className="w-5 h-5" />
                   </div>
                   <p className="text-sm font-black uppercase tracking-widest text-black/40">Technical Authority in Hospitality</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] md:aspect-square group">
                <Image 
                  src="/images/services/technical_architecture_blueprint.png" 
                  alt="Technical Planning" 
                  fill 
                  className="object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-mustard hidden lg:flex items-center justify-center p-8 text-white z-20 shadow-2xl">
                    <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">Pixel Perfect <br/> Technical <br/>Execution</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 5 PILLARS OF DEVELOPMENT — CLINICAL GRID */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5">
            {[
              { 
                num: "01", 
                title: "Needs Analysis & Consultation", 
                icon: <Search className="w-6 h-6" />,
                desc: "We start by listening. Every great hotel begins with a clinical understanding of the project's goals, budget, and feasibility."
              },
              { 
                num: "02", 
                title: "Architecture & Planning", 
                icon: <Building2 className="w-6 h-6" />,
                desc: "From drafts to execution plans. We manage floor layouts, approval management, and all communication with authorities."
              },
              { 
                num: "03", 
                title: "Interior Architecture", 
                icon: <Lightbulb className="w-6 h-6" />,
                desc: "Design with atmosphere. We create lighting, material, and room concepts that make your guests feel at home instantly."
              },
              { 
                num: "04", 
                title: "Technical Building Services (TBS)", 
                icon: <Cpu className="w-6 h-6" />,
                desc: "Efficiency is invisible. We plan and manage the systems—HVAC and smart automation—that keep your hotel running."
              },
              { 
                num: "05", 
                title: "Project Management", 
                icon: <HardHat className="w-6 h-6" />,
                desc: "Your single point of contact. We coordinate every vendor to ensure construction stays on time and within budget."
              },
              { 
                num: "06", 
                title: "Sustainability & ROI", 
                icon: <Zap className="w-6 h-6" />,
                desc: "Built to last. We integrate modern materials and smart building techniques to reduce costs and protect the planet."
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 md:p-16 space-y-8 hover:bg-[#F5F1E9] transition-colors duration-500 group">
                <div className="flex justify-between items-start">
                   <span className="text-4xl font-serif italic text-black/10 group-hover:text-mustard/30 transition-colors">{pillar.num}</span>
                   <div className="text-mustard">{pillar.icon}</div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black">{pillar.title}</h3>
                  <p className="text-black/50 text-sm font-light leading-relaxed italic">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISUALIZATION SECTION — CINEMATIC IMPACT */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center bg-black overflow-hidden">
        <Image 
          src="/images/services/hotel_interior_rendering.png" 
          alt="Interior Design" 
          fill 
          className="object-cover opacity-60 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl space-y-10">
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-none tracking-tighter">
              Bespoke <br />
              <span className="text-mustard italic">Interiors.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-light italic leading-relaxed">
              "We create atmospheric, practical, and guest-centric interiors. Every detail—from lighting to material selection—is designed to reflect your brand identity."
            </p>
            <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} className="px-12 py-5 border-2 border-white text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-mustard hover:border-mustard transition-all duration-500">View Our Concepts →</button>
          </motion.div>
        </div>
      </section>

      {/* 5. PROCESS SECTION — SIMPLE 4-STEP */}
      <section className="py-24 md:py-48 bg-[#F5F1E9] text-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-7xl font-sans font-bold text-black tracking-tight uppercase">
              How We <span className="text-mustard italic font-serif font-light">Work</span>
            </h2>
            <div className="w-12 h-px bg-mustard mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: "01", title: "Free Call", desc: "First, we talk about your project and vision." },
              { num: "02", title: "Custom Plan", desc: "We create a clear, step-by-step strategy." },
              { num: "03", title: "Execution", desc: "Our experts start the technical and design work." },
              { num: "04", title: "Success", desc: "Your hotel is delivered on time, perfectly built." }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }} className="space-y-6">
                <div className="text-6xl font-serif italic text-mustard/20">{step.num}</div>
                <div className="space-y-2 pt-4 border-t border-black/5">
                  <h3 className="text-lg font-black uppercase tracking-widest">{step.title}</h3>
                  <p className="text-black/50 text-xs font-light leading-relaxed italic">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FREE CONSULTATION FORM — REPLICA OF THE PERFORMANCE FORM */}
      <section ref={formRef} className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 bg-[#080808] p-12 md:p-24 lg:p-32 pt-12 md:pt-16 lg:pt-20 flex flex-col justify-start text-white">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight uppercase">
              Architecting <br /> Your <br /> <span className="italic text-mustard">Legacy</span>
            </h2>
            <div className="w-20 h-1 bg-mustard" />
            <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/70 italic">
              <p>"Architecture is the silent language of luxury. Don't leave your project to chance—let the experts plan your success."</p>
              <p className="not-italic font-bold text-white text-3xl">Talk to us today.</p>
              <p>Whether it's a new build or a complex renovation, we provide the technical depth and design expertise to deliver a pixel-perfect result.</p>
              <p className="text-mustard font-sans not-italic font-black uppercase text-xs tracking-[0.3em] pt-8">Professional Technical Oversight at every stage.</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 bg-[#F5F1E9] p-12 md:p-24 lg:p-32 pt-12 md:pt-16 lg:pt-20 flex flex-col justify-start text-black">
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-black">Technical Inquiry</h2>
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
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Project Location</label>
                  <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Location & Scope" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Inquiry Type</label>
                    <select value={formData.challenge} onChange={(e) => setFormData({...formData, challenge: e.target.value})} className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black appearance-none">
                      <option>Hotel Architecture & Planning</option>
                      <option>Full Turnkey Construction</option>
                      <option>Atmospheric Interior Design</option>
                      <option>Technical Building Services</option>
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
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Please specify your mandate</label>
                      <input 
                        required 
                        className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" 
                        placeholder="Type your mandate details here..." 
                        value={formData.message} 
                        onChange={(e) => setFormData({...formData, message: e.target.value})} 
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Project Message</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black resize-none" placeholder="Message" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-mustard text-black text-xs font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 shadow-xl disabled:opacity-50">
                  {isSubmitting ? "TRANSMITTING..." : "AVAIL FREE CONSULTATION"}
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center mx-auto mb-8"><CheckCircle2 className="text-black" /></div>
                <h3 className="text-3xl font-serif italic text-black mb-4">Brief Received.</h3>
                <p className="text-black/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">Our technical team will call you soon to discuss your architectural vision.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-12 text-[10px] font-black uppercase tracking-widest hover:text-mustard transition-colors text-black">Submit New Inquiry</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FOOTER — DYNAMIC NEXT SERVICE */}
      <footer className="relative h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden group bg-black">
         <Image src="/images/services/interior-design.png" alt="Interior Design" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-[5s]" />
         <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-transparent to-black" />
         <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-12">
               <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[1em] text-mustard block opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:tracking-[1.2em]">Next Strategy</span>
                  <div className="w-12 h-px bg-mustard/30 mx-auto" />
               </div>
               <Link href="/services/interior-decor" className="block group/link">
                  <h2 className="text-6xl md:text-[8vw] font-serif italic text-white tracking-tighter leading-none transition-all duration-1000 group-hover:text-mustard group-hover:scale-[1.02]">Interior <br className="md:hidden" /> Decor.</h2>
                  <p className="mt-12 text-white/30 text-base md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-40 group-hover/link:opacity-100 transition-all duration-1000 transform translate-y-4 group-hover/link:translate-y-0 italic lowercase">"Elevate the feeling of your spaces with bespoke interior styling."</p>
               </Link>
            </motion.div>
         </div>
      </footer>
    </main>
  );
}
