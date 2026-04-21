"use client";

import React, { useRef, useState } from "react";
import { 
  motion, 
  AnimatePresence,
  useScroll, 
  useTransform 
} from "framer-motion";
import { 
  ArrowRight, 
  Cpu, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Lock,
  ChevronRight,
  TrendingUp,
  Users2,
  Cloud,
  Zap,
  ArrowUpRight,
  Database,
  UtensilsCrossed,
  Sparkles,
  Gift,
  CalendarDays,
  LayoutDashboard,
  ArrowLeft,
  X,
  Calendar,
  Video,
  FileText,
  Search,
  Monitor,
  Network,
  Briefcase,
  GraduationCap,
  Diamond,
  Car,
  HeartPulse,
  Building2,
  ShoppingCart,
  ConciergeBell
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";
import { cn } from "@/lib/utils";
import { ClassyHero } from "@/components/ui/classy-hero";

export default function WebAndAppTechPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const fullName = formData.get("fullName") as string;
      const email = formData.get("email") as string;
      const model = formData.get("model") as string;

      const result = await submitInquiry({
        fullName,
        email,
        phone: "",
        subject: `Institutional Tech Mandate: ${model}`,
        message: `Strategic Category: ${model}. Details: Tech expansion mandate for hotel portfolio.`,
        source: 'tech_support_page'
      });

      if (result.success) {
        toast.success("Strategic brief successfully transmitted.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Transmission error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-mustard/30 overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <ClassyHero />

      {/* 1.5 AI-INTEGRATED TECH PRESENCE — Reference Build */}
      <section className="relative bg-[#050505] pt-32 pb-24 overflow-hidden">
        {/* Subtle Separator */}
        <div className="container mx-auto px-6 mb-24">
          <div className="w-full h-px bg-white/10" />
        </div>

        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Block: Visual & Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter leading-[0.95] mb-12">
                Website Design & <br />
                Development Services.
              </h2>
              <p className="text-stone-400 text-base md:text-lg font-light leading-relaxed max-w-xl mb-12">
                Vnexora provides institutional-grade digital ecosystems, merging high-stakes architectural design with clinical performance. Since our inception, we have engineered thousands of high-yield platforms tailored to the world's most prestigious hospitality groups across London, Dubai, and the US.
              </p>
              <Button 
                onClick={scrollToForm}
                className="bg-white text-black hover:bg-stone-200 px-10 py-7 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all transform hover:scale-105"
              >
                Share Your Mandate
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-video flex items-center justify-center"
            >
              <Image 
                src="/images/sections/tech_websites.png" 
                alt="Vnexora Tech Ecosystem" 
                width={700} 
                height={500} 
                className="object-contain relative z-10"
              />
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-mustard/5 blur-[120px] rounded-full pointer-events-none" />
            </motion.div>
          </div>

          {/* Detailed Narrative Grid (Staggered Reference Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-24 max-w-7xl mx-auto">
            <div className="space-y-24">
              <div className="space-y-8">
                <p className="text-stone-400 text-[15px] font-light leading-relaxed italic">
                  At Vnexora, the platforms we build drive institutional conversion. We optimize our technical architecture to ensure the ultimate user experience for your elite guest demographics. As a primary touchpoint for every potential lead, a user's experience navigating your portal is the clinical difference between acquisition or abandonment.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tighter leading-[0.95]">
                  We create platforms that <br />
                  are fully integrated with <br />
                  <span className="text-mustard font-serif italic font-light italic">AI and ChatGPT.</span>
                </h3>
                <p className="text-stone-400 text-[15px] font-light leading-relaxed">
                  While we work with a multitude of high-stakes platforms, we specialize in engineering deep-integrated AI workflows on top of Next.js and Framer architectures. On the back of this, we have successfully synchronized these portals with custom AI concierge systems and generative LLM layers.
                </p>
              </motion.div>
            </div>

            <div className="space-y-24 lg:pt-12">
              <p className="text-stone-400 text-[15px] font-light leading-relaxed">
                Our approach also ensures that your portal is hyper-responsive and institutional-grade, with a functional layout and seamlessly integrated yield-generation features. We showcase your content and capture your brand's essence as we work with you to create a high-fidelity digital reflection of your business's prestige.
              </p>

              <div className="space-y-12">
                <p className="text-stone-400 text-[15px] font-light leading-relaxed">
                  Vnexora engineers portals that balance functional optimization and high-impact marketing effortlessly, ensuring you extract the maximum yield from the technical mandates you invest in. Your portfolio deserves a digital flagship that marries both elite aesthetics and clinical performance.
                </p>
                <p className="text-stone-400 text-[15px] font-light leading-relaxed border-l border-white/10 pl-8 italic">
                  Whether you are seeking a first-of-kind brand launch or revitalizing an existing institutional asset, our engineering and development teams will deploy the mandate with precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.6 GLOBAL TECH SERVICES GRID — Reference Build */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter">
              Our Web Design & <br />
              <span className="font-serif italic font-light text-mustard">Development Portfolios.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Driven Ecosystem Design",
                desc: "Merging generative AI architectures with conversion-optimized UI to command industry narratives.",
                icon: <Cpu size={24} />
              },
              {
                title: "Custom Full-Stack Engineering",
                desc: "High-performance Next.js and React development for the world's most demanding hospitality brands.",
                icon: <Zap size={24} />
              },
              {
                title: "Institutional Booking Engines",
                desc: "Bespoke direct-revenue portals engineered to eliminate third-party commission leakage permanently.",
                icon: <Globe size={24} />
              },
              {
                title: "Elite Support & Maintenance",
                desc: "24/7 technical guardianship and security mandates ensuring zero-downtime for global portfolios.",
                icon: <ShieldCheck size={24} />
              },
              {
                title: "Yield Architecture (CRO)",
                desc: "Clinical performance analysis and narrative refactoring to maximize guest acquisition metrics.",
                icon: <TrendingUp size={24} />
              },
              {
                title: "Digital Strategy & Advisory",
                desc: "Full-lifecycle technical roadmaps and institutional growth consulting for hospitality leaders.",
                icon: <LayoutDashboard size={24} />
              }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-12 bg-white/[0.03] border border-white/10 rounded-[2rem] h-[320px] flex flex-col justify-between transition-all duration-500 hover:bg-mustard hover:scale-[1.02] cursor-default"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mustard group-hover:text-black group-hover:bg-black/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-black tracking-tighter leading-tight transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed group-hover:text-black/80 transition-colors">
                    {service.desc}
                  </p>
                </div>

                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:text-black group-hover:border-black/20 transition-all group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.7 STRATEGIC INVESTMENT ARCHITECT — Reference Build */}
      <section className="bg-black py-24 border-t border-white/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-mustard/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -ml-64" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter leading-[0.95] max-w-xl">
                Are you interested in finding out the <br />
                <span className="font-serif italic font-light text-mustard">cost of designing</span> and developing your website?
              </h2>
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <Link href="/website-calculator" className="inline-block">
                  <Button 
                    className="bg-white text-black hover:bg-stone-200 px-12 py-8 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all transform hover:scale-105"
                  >
                    Try Our Website Calculator
                  </Button>
                </Link>
                <div className="flex items-center gap-4 text-white/40 pt-4 sm:pt-0">
                  <div className="w-12 h-px bg-white/20" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Instant Proposal Engine</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ 
                y: [0, -20, 0],
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative group max-w-md">
                 {/* Asset Glow */}
                 <div className="absolute inset-0 bg-mustard/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 <Image 
                   src="/images/sections/cost_mandate.png" 
                   alt="Strategic Investment Mandate" 
                   width={500} 
                   height={400} 
                   className="object-contain relative z-10 brightness-110"
                 />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1.8 WEBSITE DESIGN & DEVELOPMENT PROCESS — Reference Build */}
      <section className="bg-black py-24 pb-48 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter">
              Our Website Design & <br className="hidden md:block" /> Development Process
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-0 lg:overflow-visible overflow-x-hidden">
            {[
              {
                title: "Design",
                items: [
                  "Define project goals and perform market analysis to understand user needs",
                  "Gather data, refine ideas, and create practical designs focusing on user experience",
                  "Conduct tests to ensure efficiency and compatibility"
                ]
              },
              {
                title: "Development",
                items: [
                  "Implement CMS for easy updates and integrate CRM for better customer interaction",
                  "Prioritize scalability and streamlined communication"
                ]
              },
              {
                title: "Enhancement",
                items: [
                  "Analyze performance to maintain speed and user satisfaction",
                  "Optimize code and address issues to ensure smooth operation"
                ]
              },
              {
                title: "Post-Launch Review",
                items: [
                  "Optimize for SEO to boost visibility",
                  "Perform comprehensive testing for ongoing excellence"
                ]
              }
            ].map((step, index, arr) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={cn(
                  "flex-1 flex flex-col relative",
                  index > 0 && "lg:-ml-8", // Negative margin for horizontal overlap
                  // Responsive margin-top staggering using Tailwind variants
                  index === 1 && "lg:mt-[48px]",
                  index === 2 && "lg:mt-[96px]",
                  index === 3 && "lg:mt-[144px]"
                )}
                style={{ zIndex: 10 - index }}
              >
                {/* 3D Arrow Head */}
                <div 
                  className="h-24 bg-[#CFA052] flex items-center justify-start pl-8 pr-12 relative overflow-hidden"
                  style={{ 
                    clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 50%, calc(100% - 32px) 100%, 0 100%)"
                  }}
                >
                  <span className="font-bold text-xl text-black tracking-tight">{step.title}</span>
                  
                  {/* The Dark Fold Projection for 3D effect */}
                  {index < arr.length - 1 && (
                     <div 
                       className="absolute right-0 bottom-0 w-[32px] h-[50%] bg-[#A67B38]" 
                     />
                  )}
                </div>

                {/* List Items Container */}
                <div className="pt-10 space-y-8 flex-1 pl-4 lg:pr-10">
                  {step.items.map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-[#CFA052] text-xs font-bold bg-white/[0.03] shrink-0 font-serif">
                        {i + 1}
                      </div>
                      <p className="text-[15px] font-normal text-stone-300 leading-relaxed pt-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom spacer to account for the pushed down columns */}
          <div className="h-0 lg:h-[144px]" />
        </div>
      </section>

      {/* 1.9 INDUSTRY EXPERIENCE — Reference Build */}
      <section className="bg-black py-32 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-[40px] font-medium text-white tracking-tight">
              We have extensive experience in the following industries
            </h2>
          </motion.div>

          {/* Staggered Honeycomb Grid Layout */}
          <div className="flex flex-col gap-10 lg:gap-14 items-center">
            {/* Top Row: 3 Items */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 w-full">
              {[
                { name: "B2B Marketing", icon: <Briefcase size={30} strokeWidth={1} /> },
                { name: "Education", icon: <GraduationCap size={30} strokeWidth={1} /> },
                { name: "Luxury Brands", icon: <Diamond size={30} strokeWidth={1} /> }
              ].map((industry, index) => (
                <motion.div 
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-5 min-w-[250px] p-5 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] hover:backdrop-blur-xl transition-all duration-500 hover:shadow-2xl cursor-default"
                >
                  <div className="w-[68px] h-[68px] rounded-[16px] bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#CFA052] shrink-0 shadow-lg shadow-black/50 group-hover:scale-110 group-hover:bg-[#CFA052]/10 transition-all duration-500">
                    {industry.icon}
                  </div>
                  <span className="text-stone-200 font-light text-[17px] tracking-wide group-hover:text-white transition-colors">{industry.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Middle Row: 2 Items (Naturally staggered between Top and Bottom rows) */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 w-full">
              {[
                { name: "Automotive", icon: <Car size={30} strokeWidth={1} /> },
                { name: "Healthcare", icon: <HeartPulse size={30} strokeWidth={1} /> }
              ].map((industry, index) => (
                <motion.div 
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="group flex items-center gap-5 min-w-[250px] p-5 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] hover:backdrop-blur-xl transition-all duration-500 hover:shadow-2xl cursor-default"
                >
                  <div className="w-[68px] h-[68px] rounded-[16px] bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#CFA052] shrink-0 shadow-lg shadow-black/50 group-hover:scale-110 group-hover:bg-[#CFA052]/10 transition-all duration-500">
                    {industry.icon}
                  </div>
                  <span className="text-stone-200 font-light text-[17px] tracking-wide group-hover:text-white transition-colors">{industry.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row: 3 Items */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 w-full">
              {[
                { name: "Hospitality", icon: <ConciergeBell size={30} strokeWidth={1} /> },
                { name: "Real Estate", icon: <Building2 size={30} strokeWidth={1} /> },
                { name: "E-commerce", icon: <ShoppingCart size={30} strokeWidth={1} /> }
              ].map((industry, index) => (
                <motion.div 
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="group flex items-center gap-5 min-w-[250px] p-5 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] hover:backdrop-blur-xl transition-all duration-500 hover:shadow-2xl cursor-default"
                >
                  <div className="w-[68px] h-[68px] rounded-[16px] bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#CFA052] shrink-0 shadow-lg shadow-black/50 group-hover:scale-110 group-hover:bg-[#CFA052]/10 transition-all duration-500">
                    {industry.icon}
                  </div>
                  <span className="text-stone-200 font-light text-[17px] tracking-wide group-hover:text-white transition-colors">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE STRATEGIC PILLARS - THE REVENUE ENGINE */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-end mb-32">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-mustard" />
                  <span className="text-mustard font-bold text-[10px] tracking-[0.5em] uppercase">Service Spectrum</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight">
                  Every Dimension of <br />
                  <span className="italic font-light">Hospitality Technology.</span>
                </h2>
              </div>
              <p className="text-black/40 text-sm md:text-base font-light leading-relaxed max-w-md border-l border-black/5 pl-8 italic">
                "We don't provide tech support; we provide tech dominance. Eliminating commission leakage and maximizing guest narrative control across every digital entry point."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Category 1: Digital Flagships */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-12 lg:p-16 bg-black group overflow-hidden h-[500px] flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 group-hover:bg-mustard/10 transition-colors duration-700" />
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-mustard">
                      <Globe size={20} />
                    </div>
                    <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">01 / Direct Revenue</span>
                  </div>
                  <h3 className="text-4xl font-serif italic text-white leading-[1.1]">The Digital <br /> Flagship (Web)</h3>
                  <div className="space-y-4">
                    <p className="text-white/60 text-sm font-light leading-relaxed">High-performance booking engines that bypass OTA commissions by 100%.</p>
                    <ul className="space-y-2">
                      {["Conversion-Optimized UI", "SEO Mastery Mandate", "Direct Booker Loyalty Sync"].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-mustard/80">
                          <ArrowRight size={10} /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Category 2: Guest Ecosystems */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative p-12 lg:p-16 bg-black group overflow-hidden h-[500px] flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 group-hover:bg-mustard/10 transition-colors duration-700" />
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-mustard">
                      <Smartphone size={20} />
                    </div>
                    <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">02 / Experience</span>
                  </div>
                  <h3 className="text-4xl font-serif italic text-white leading-[1.1]">Guest Mobility <br /> Ecosystem (App)</h3>
                  <div className="space-y-4">
                    <p className="text-white/60 text-sm font-light leading-relaxed">Native iOS & Android hubs that drive +30% in-stay spend via pocketside concierge.</p>
                    <ul className="space-y-2">
                      {["Digital Key Integration", "Mobile F&B Orchestration", "Predictive Guest Services"].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-mustard/80">
                          <ArrowRight size={10} /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Category 3: Neural Intelligence */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative p-12 lg:p-16 bg-black group overflow-hidden h-[500px] flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 group-hover:bg-mustard/10 transition-colors duration-700" />
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-mustard">
                      <Cpu size={20} />
                    </div>
                    <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">03 / Yield</span>
                  </div>
                  <h3 className="text-4xl font-serif italic text-white leading-[1.1]">Neural & AI <br /> Intelligence</h3>
                  <div className="space-y-4">
                    <p className="text-white/60 text-sm font-light leading-relaxed">Proprietary logic models for revenue forecasting and institutional sentiment analysis.</p>
                    <ul className="space-y-2">
                      {["AI Multilingual Concierge", "Dynamic Yield Guardrails", "Sentiment Prediction Engines"].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-mustard/80">
                          <ArrowRight size={10} /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Category 4: Operational Continuum */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative p-12 lg:p-16 bg-black group overflow-hidden h-[500px] flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 group-hover:bg-mustard/10 transition-colors duration-700" />
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-mustard">
                      <Network size={20} />
                    </div>
                    <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">04 / Continuity</span>
                  </div>
                  <h3 className="text-4xl font-serif italic text-white leading-[1.1]">Institutional <br /> Tech Support</h3>
                  <div className="space-y-4">
                    <p className="text-white/60 text-sm font-light leading-relaxed">24/7 technical mandates and seamless legacy system migrations portfolio-wide.</p>
                    <ul className="space-y-2">
                      {["PMS Master System Audit", "Cybersecurity Mandates", "Core Infrastructure Management"].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-mustard/80">
                          <ArrowRight size={10} /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL SERVICE LISTING - THE TECHNICAL MANDATE */}
      <section className="py-24 md:py-48 bg-white border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-24">
            <span className="text-[11px] font-black tracking-[0.5em] text-mustard uppercase mb-8 block">Global Tech Vertical</span>
            <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight italic">Every Vertical. <br /><span className="not-italic font-light text-black/20">Secured & Optimized.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { title: "Direct Booking Ecosystem", desc: "Native API integration with PMS for seamless, conversion-focused direct booking narrative.", icon: Monitor },
              { title: "Property Management Systems", desc: "Strategic overhaul and deployment of cloud-based PMS like Opera, IDS, and Mews.", icon: Database },
              { title: "Cybersecurity & Firewalls", desc: "Institutional-grade AES-256 encryption and SOC-2 compliant guest data protection.", icon: ShieldCheck },
              { title: "Digital Marketing & Ads", desc: "Data-driven performance marketing focused solely on high-margin direct guest acquisition.", icon: TrendingUp },
              { title: "Housekeeping Analytics", desc: "Real-time housekeeping optimization grids and staff performance tracking dashboards.", icon: LayoutDashboard },
              { title: "Global Distribution (GDS)", desc: "Synchronized distribution across Sabre, Amadeus, and 450+ global travel portals.", icon: Network }
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6 group"
              >
                <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center text-black/20 group-hover:bg-mustard/10 group-hover:text-mustard transition-all duration-500">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-[12px] font-black tracking-[0.2em] text-black uppercase">{service.title}</h4>
                  <p className="text-base text-black/40 font-light leading-relaxed italic">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION & STRATEGIC BRIEF FORM */}
      <section ref={formRef} className="py-32 md:py-48 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mustard to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-center lg:text-left"
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-mustard">The Technical Mandate</h4>
                <h2 className="text-5xl md:text-[6vw] font-serif leading-tight text-white">
                  Ready to optimize <br />
                  <span className="italic text-mustard">your digital stack?</span>
                </h2>
                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  Whether you are scaling a single asset or a global portfolio, initialize your confidential tech brief and let us architect your digital yield.
                </p>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 md:p-14 bg-white/[0.02] border border-white/10 backdrop-blur-sm relative"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-mustard" />
                <div className="mb-10 text-center lg:text-left">
                  <h3 className="text-2xl font-serif text-white italic mb-2">Initialize Your Brief</h3>
                  <div className="w-12 h-[2px] bg-mustard mb-4 mx-auto lg:mx-0" />
                  <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em]">Confidential Tech Mandate</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black tracking-widest text-white/20 uppercase">Full Name</label>
                      <input 
                        name="fullName"
                        required
                        type="text" 
                        placeholder="E.G. John Doe"
                        className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-white placeholder:text-white/5"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black tracking-widest text-white/20 uppercase">Corporate Email</label>
                      <input 
                        name="email"
                        required
                        type="email" 
                        placeholder="john@hotel.com"
                        className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-white placeholder:text-white/5"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[9px] font-black tracking-widest text-white/20 uppercase">Primary Interest</label>
                    <div className="relative">
                      <select 
                        name="model"
                        required
                        className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-mustard transition-all text-xs font-light text-white appearance-none cursor-pointer"
                      >
                        <option className="bg-[#080808]" value="">Select Focus Area</option>
                        <option className="bg-[#080808]" value="Full Digital Transformation">Full Digital Transformation</option>
                        <option className="bg-[#080808]" value="Direct Booking Ecosystem">Direct Booking Ecosystem</option>
                        <option className="bg-[#080808]" value="Native Mobile Guest App">Native Mobile Guest App</option>
                        <option className="bg-[#080808]" value="Neural Intelligence & AI">Neural Intelligence & AI</option>
                        <option className="bg-[#080808]" value="PMS/POS Strategic Overhaul">PMS/POS Strategic Overhaul</option>
                        <option className="bg-[#080808]" value="24/7 Institutional Support">24/7 Institutional Support</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowRight className="w-4 h-4 text-white/20 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-mustard text-black py-6 font-bold text-[10px] tracking-[0.5em] uppercase hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 group disabled:opacity-50"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "SUBMIT TECH BRIEF"} {!isSubmitting && <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL SYSTEM */}
      <AnimatePresence>
        {showBooking && (/* Standard Booking Modal */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBooking(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#080808] border border-white/[0.07] rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CFA052] to-transparent" />
              <div className="flex items-start justify-between p-10 pb-6">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.6em] text-[#CFA052] mb-3">Institutional Briefing</div>
                  <h3 className="text-3xl font-serif italic text-white leading-tight">Begin Your Digital<br />Portfolio Evolution.</h3>
                </div>
                <button onClick={() => setShowBooking(false)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all">
                  <X size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pb-8">
                {[
                  { icon: Calendar, label: "Strategist Session", desc: "Private consultation for full-scale digital architecture and yield legacy.", cta: "Book Session", href: "mailto:contact@vnexora.com", highlight: true },
                  { icon: Video, label: "Tech Deep-Dive", desc: "A virtual audit of your current stack, OTA leakage, and potential ADR lifters.", cta: "Schedule Call", href: "#", highlight: false },
                  { icon: FileText, label: "System Brief", desc: "Submit your current PMS/POS data for a clinical migration feasibility audit.", cta: "Send Brief", href: "#", highlight: false },
                ].map((opt, i) => (
                  <div key={i} className={`p-8 rounded-2xl flex flex-col gap-6 cursor-pointer transition-all border ${opt.highlight ? "bg-mustard border-mustard text-black" : "bg-white/[0.03] border-white/10 hover:border-mustard/30"}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${opt.highlight ? "bg-black/10" : "bg-mustard/10 text-mustard"}`}>
                      <opt.icon size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest mb-2">{opt.label}</div>
                      <p className="text-xs opacity-60 leading-relaxed">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
