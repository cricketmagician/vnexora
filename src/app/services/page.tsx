"use client";

import { useState, useEffect, useRef } from "react";
import { SectionTransition } from "@/components/ui/SectionTransition";

import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, QrCode, Headphones, Key, 
  BarChart3, LineChart, Zap, Coins, Settings, Globe2, Users,
  CheckCircle2, XCircle, ArrowRight, ChevronLeft, ChevronRight,
  Building2, Layout, BarChart, BadgeCheck, Globe, ShieldCheck, Microscope, Bot, Activity, MapPin
} from "lucide-react";

// Lucide Icon Mapping for Services
const ServiceIcons: Record<string, any> = {
  "Development": Building2,
  "Architecture": Layout,
  "Financials": BarChart,
  "Strategy": Globe,
  "Partnerships": BadgeCheck,
  "Launch": Zap,
  "Operations": ShieldCheck,
  "Revenue": Users,
  "Audit": Microscope,
  "AI & Tech": Bot,
};

const ServiceTiltCard = ({ service, idx }: { service: { icon: React.ReactNode; title: string; desc: string; image: string }; idx: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const glareX = useTransform(xSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(ySpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", flex: "0 0 380px" }}
      className="group"
    >
      <div
        className="relative h-[420px] rounded-[2.5rem] overflow-hidden border border-white/20 flex flex-col bg-white/10 backdrop-blur-[60px] transition-all duration-700 group-hover:border-[#CFA052]/40 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Technical Background Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(207,160,82,0.15) 1px, transparent 0)', backgroundSize: '15px 15px' }} />
        
        {/* Vertical Intelligence Label */}
        <div className="absolute left-8 top-10 bottom-10 flex flex-col items-center justify-between z-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#CFA052] [writing-mode:vertical-lr] rotate-180 opacity-60">Intelligence</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#CFA052]/30 to-transparent" />
          <span className="text-[14px] font-mono text-[#CFA052]/40">P-0{idx + 1}</span>
        </div>

        {/* Focal Image Box — Holographic Projection */}
        <div className="absolute top-12 left-20 right-8 h-[160px] z-10 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl shadow-black">
          {/* Accent Frame */}
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t border-r border-[#CFA052]/40 z-20" />
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-all duration-1000 group-hover:scale-110 opacity-[0.7] group-hover:opacity-[1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Structural Content */}
        <div className="mt-auto p-12 pl-24 relative z-20 flex flex-col gap-4" style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#CFA052] animate-pulse shadow-[0_0_15px_rgba(207,160,82,1)]" />
            <h3 className="text-base md:text-lg font-black uppercase tracking-[0.3em] text-[#E8DCCB] group-hover:text-white transition-colors">
              {service.title}
            </h3>
          </div>
          <p className="text-[#E8DCCB]/80 text-sm md:text-base font-medium leading-relaxed tracking-wide group-hover:text-white transition-colors line-clamp-3">
            {service.desc}
          </p>
        </div>

        {/* Glare highlight */}
        <motion.div
          className="absolute inset-0 z-[3] pointer-events-none"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(207,160,82,0.2), transparent 70%)`
            ),
          }}
        />
      </div>
    </motion.div>
  );
};

const HomeInspiredServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div
      id={service.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full perspective-1000 scroll-mt-24"
    >
      <div className="h-full p-8 md:p-10 rounded-[40px] bg-[#0A0A0A]/40 border border-white/10 hover:border-[#CFA052]/40 transition-all duration-700 flex flex-col justify-between overflow-hidden backdrop-blur-[40px] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] group-hover:bg-[#0A0A0A]/60">
        
        {/* Dynamic Background Image - Blur Effect (Reverted to "Blurr Image" style) */}
        <div className="absolute inset-0 z-0 opacity-[0.3] group-hover:opacity-[0.6] transition-all duration-1000">
          <Image 
            src={service.image} 
            alt={service.title}
            fill
            className="object-cover scale-110 group-hover:scale-100 blur-[10px] group-hover:blur-none transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#050505]/20 to-black" />
        </div>

        {/* Animated Accent Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#CFA052]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        {/* Content Overlay */}
        <div className="relative z-10">
          <div className="mb-8">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-[#CFA052]/30" />
                <span className="text-[10px] font-sans font-black text-[#CFA052] tracking-[0.4em] uppercase">
                  {service.label || "Expertise"}
                </span>
             </div>
            <h3 className="text-2xl md:text-3xl font-serif text-[#FAF9F6] mb-5 tracking-tight group-hover:text-[#CFA052] transition-colors duration-500 leading-[1.1]">
              {service.title}
            </h3>
            <p className="text-[#FAF9F6]/40 text-sm md:text-base leading-relaxed mb-8 group-hover:text-[#FAF9F6]/70 transition-colors duration-500 font-light">
              {service.shortDescription}
            </p>
          </div>

          {/* High-fidelity Highlights */}
          {service.highlights && (
            <div className="space-y-4 mb-14">
              {service.highlights.map((highlight: string, hIndex: number) => (
                <motion.div 
                  key={hIndex} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + hIndex * 0.1 }}
                  className="flex items-center gap-4 group/item"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#CFA052]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#CFA052] group-hover/item:rotate-[15deg] transition-all duration-300">
                    <CheckCircle2 className="w-3 h-3 text-[#CFA052] group-hover/item:text-black" />
                  </div>
                  <span className="text-[#FAF9F6]/50 text-xs md:text-[14px] font-light leading-snug group-hover/item:text-[#FAF9F6] transition-colors duration-300">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Desk - Premium Alignment */}
        <div className="relative z-10 mt-auto pt-8 border-t border-white/5 group-hover:border-[#CFA052]/20 transition-colors duration-700">
          <Link
            href={`/services/${service.slug}`}
            className="flex items-center justify-between group/btn"
          >
            <div className="flex flex-col">
               <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#CFA052]/60 group-hover/btn:text-[#CFA052] transition-colors">Experience</span>
               <span className="text-sm font-serif text-[#FAF9F6] italic">TAKE ME THERE</span>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-[#CFA052] group-hover/btn:border-[#CFA052] shadow-2xl transition-all duration-500">
              <ArrowRight size={18} className="text-[#CFA052] group-hover/btn:text-[#050505] group-hover/btn:translate-x-1 transition-all duration-500" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'pre' | 'post'>('pre');
  const scrollRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const xOffset = useSpring(useTransform(mouseX, [0, 2000], [-30, 30]), { stiffness: 50, damping: 30 });
  const yOffset = useSpring(useTransform(mouseY, [0, 1000], [-30, 30]), { stiffness: 50, damping: 30 });
  
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - (clientWidth * 0.8) : scrollLeft + (clientWidth * 0.8);
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const aiServices = [
    {
      icon: <Sparkles />,
      title: "AI Guest mangoH",
      desc: "Deliver personalized, real-time guest interactions automatically.",
      image: "/images/services/ai_tech.png"
    },
    {
      icon: <QrCode />,
      title: "QR-Based Smart Interface",
      desc: "Access all hotel services instantly without apps or delays.",
      image: "/images/services/ai_booking.png"
    },
    {
      icon: <Headphones />,
      title: "24/7 AI Guest Support",
      desc: "Handle requests, complaints, and queries instantly.",
      image: "/images/services/ai_concierge.png"
    },
    {
      icon: <Key />,
      title: "Digital Check-in & Keys",
      desc: "Contactless entry and seamless arrival experience.",
      image: "/images/services/ai_tech.png"
    },
    {
      icon: <BarChart3 />,
      title: "Guest Analytics & Insights",
      desc: "Understand guest behavior to improve service and retention.",
      image: "/images/services/ai_analytics.png"
    },
    {
      icon: <LineChart />,
      title: "Dynamic Pricing Engine",
      desc: "AI-driven price optimization based on real-time demand.",
      image: "/images/services/ai_analytics.png"
    },
    {
      icon: <Zap />,
      title: "OTA Instant Sync",
      desc: "Zero-latency synchronization across all booking channels.",
      image: "/images/services/ai_booking.png"
    },
    {
      icon: <Coins />,
      title: "Smart Yield Optimizer",
      desc: "Maximize revenue per available room automatically.",
      image: "/images/services/ai_analytics.png"
    },
    {
      icon: <Users />,
      title: "AI For Group Bookings",
      desc: "Handle requests, complaints, and queries instantly.",
      image: "/images/services/ai_booking.png"
    }
  ];

  const features = ["No app required", "Works on any device", "Real-time automation", "Easy integration"];

  const comparison = [
    { label: "Front Desk", traditional: "Slow, manual check-in lines", ai: "Instant, QR-based digital arrival" },
    { label: "Guest Support", traditional: "Limited hours, slow response", ai: "24/7 instant multilingual AI" },
    { label: "Pricing", traditional: "Reactive, based on history", ai: "Predictive, real-time optimization" },
    { label: "Housekeeping", traditional: "Unoptimized manual routes", ai: "AI-prioritized high-impact cleaning" },
  ];

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#FAF9F6] text-[#1A1A1A] overflow-x-hidden selection:bg-[#CFA052] selection:text-white font-sans"
    >

      {/* 1. HERO SECTION — Premium Editorial Mandate */}
      <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        
        {/* Layer 1: Immersion Backdrop */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: useTransform(xOffset, x => x * -0.5), y: useTransform(yOffset, y => y * -0.5) }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/services/hero_bg_new.png"
            alt="Vnexora Institutional Horizon"
            className="w-full h-full object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#050505]" />
        </motion.div>

        {/* Ambient Editorial Texture */}
        <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none select-none">
          <div className="h-full w-full bg-[radial-gradient(#CFA052_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        {/* Institutional Status Bar */}
        <div className="absolute top-32 left-0 w-full px-8 md:px-20 lg:px-28 z-30 pointer-events-none">
           <div className="flex items-center justify-between border-t border-white/10 pt-8">
              <div className="flex items-center gap-5">
                 <div className="w-2 h-2 rounded-full bg-[#CFA052] animate-pulse shadow-[0_0_10px_rgba(207,160,82,0.8)]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.7em] text-white/40">Network Status: Live</span>
              </div>
              <div className="flex items-center gap-16">
                 <div className="flex flex-col items-end gap-1">
                    <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#CFA052]">Institutional Asset Control</span>
                    <span className="text-sm font-light text-white/50">550+ Keys Optimized</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="container mx-auto px-8 md:px-20 lg:px-28 relative z-20 mt-20 text-center md:text-left">
          <div className="max-w-6xl mx-auto">
            
            <motion.div 
               style={{ x: xOffset, y: yOffset }}
               className="space-y-14"
            >
               <div className="space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center md:justify-start items-center gap-4"
                  >
                    <div className="w-10 h-px bg-[#CFA052]/40" />
                    <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#CFA052]">Expertise & Intelligence</span>
                  </motion.div>

                  <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-serif text-white tracking-tighter leading-[0.85] mb-4">
                     Our <br className="hidden md:block" />
                     <span className="italic font-light text-[#CFA052]">Services.</span>
                  </h1>
               </div>
               
               <div className="max-w-xl md:max-w-2xl space-y-12 mx-auto md:mx-0">
                  <p className="text-[#E8DCCB]/70 text-xl md:text-2xl font-light leading-relaxed font-sans tracking-tight border-l border-[#CFA052]/30 pl-10">
                    "From advisory to clinical execution—we architect institutional-grade hospitality systems with precision intelligence."
                  </p>
                  
                  {/* Premium Action Segment */}
                  <div className="pt-6 flex flex-col md:flex-row items-center gap-10">
                    <Link href="/contact" className="group/btn relative inline-block">
                       <div className="absolute inset-0 bg-[#CFA052]/20 blur-[30px] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                       <button className="px-14 py-8 bg-white text-black text-[11px] font-black uppercase tracking-[0.6em] rounded-full flex items-center gap-10 group-hover:bg-[#CFA052] group-hover:text-black transition-all duration-700 relative z-10">
                          Engage The Mandate
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-3 transition-transform duration-700" />
                       </button>
                    </Link>

                    <div className="hidden lg:flex items-center gap-6 opacity-30">
                       <div className="w-16 h-px bg-white" />
                       <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">EST. 2024</span>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8 group"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.8em] text-white/20 group-hover:text-[#CFA052] transition-colors">Explore Expertise</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/10 to-transparent group-hover:from-[#CFA052]/40 transition-colors duration-1000" />
        </motion.div>
      </section>

      {/* 2. WHAT WE DO — Homepage Inspired Version */}
      <SectionTransition>
        <section className="bg-[#050505] py-24 md:py-32 relative overflow-hidden text-center">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#CFA052]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#CFA052]/5 blur-[120px] rounded-full" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[12px] md:text-[14px] font-sans font-bold text-[#CFA052] tracking-[0.4em] uppercase mb-6"
              >
                Capabilities
              </motion.p>
              
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } }
                }}
                className="text-4xl md:text-7xl font-serif text-[#FAF9F6] tracking-tight leading-tight mb-8 flex flex-wrap justify-center gap-x-4 md:gap-x-6"
              >
                {["WHAT", "WE"].map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                   variants={{
                      hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                   }}
                   className="text-[#CFA052] italic font-light"
                >
                  DO
                </motion.span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-[#FAF9F6]/60 font-sans tracking-wide max-w-2xl mx-auto mb-12"
              >
                End-to-End Hospitality Solutions Designed for Performance, Profitability & Scale
              </motion.p>
              
              {/* Power Positioning Line */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block px-10 py-5 rounded-2xl border border-[#CFA052]/20 bg-[#CFA052]/5 backdrop-blur-[10px] mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
              >
                <p className="text-[#CFA052] font-sans font-medium tracking-wider text-sm md:text-base italic">
                  “We Don’t Just Support Hotels — We Structure, Operate & Scale Profitable Hospitality Assets.”
                </p>
              </motion.div>
            </div>

            {/* New 3-Column Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
              {services.map((service: any, index: number) => (
                <HomeInspiredServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>

            {/* Global CTA */}
            <div className="mt-24 text-center">
              <Link 
                href="/contact"
                className="inline-block px-12 py-6 rounded-full bg-transparent border border-[#CFA052] text-[#CFA052] font-sans font-bold text-xs tracking-[0.4em] uppercase hover:bg-[#CFA052] hover:text-[#050505] transition-all duration-500 hover:shadow-[0_20px_80px_rgba(207,160,82,0.15)]"
              >
                Inquire About Our Solutions
              </Link>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* 3. CAPABILITIES GRID — Holographic Architectural Cards */}
      <SectionTransition>
        <section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
          <div className="max-w-[1400px] mx-auto px-8 md:px-20 lg:px-28 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-[#CFA052]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-[#CFA052]">The Vnexora Edge</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-light text-white leading-[1.1]">
                Proprietary <span className="text-[#CFA052] italic">AI Ecosystem</span>
              </h2>
            </div>
            
            {/* Scroll Navigation Arrows */}
            <div className="flex items-center gap-4 pb-2">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-[#CFA052]/20 flex items-center justify-center text-[#CFA052] hover:bg-[#CFA052] hover:text-white transition-all duration-500 group/nav"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-5 h-5 group-hover/nav:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-[#CFA052]/20 flex items-center justify-center text-[#CFA052] hover:bg-[#CFA052] hover:text-white transition-all duration-500 group/nav"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-5 h-5 group-hover/nav:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
 
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-12 px-8 md:px-20 lg:px-28"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {aiServices.map((service: any, idx: number) => (
              <ServiceTiltCard key={idx} service={service} idx={idx} />
            ))}
          </div>
        </section>
      </SectionTransition>

      {/* 4. PERFORMANCE SECTION (Compact & Beautiful) */}
      <SectionTransition>
        <section className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-t border-[#CFA052]/5 overflow-hidden">
          <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-[45%] relative aspect-[14/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#CFA052]/10"
            >
              <Image 
                src="/images/hero/ultimate_luxury.png"
                alt="High Performance Hotel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/30 via-transparent to-transparent" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[55%] flex flex-col pt-4 lg:pt-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#CFA052]">Assets</span>
                <div className="h-[1px] w-12 bg-[#CFA052]/20" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-light leading-[1.1] mb-10 text-[#1A1A1A]">
                Built for <span className="text-[#CFA052] italic">High-Performance</span> Assets
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all border border-[#CFA052]/10">
                      <CheckCircle2 className="text-[#CFA052] w-5 h-5" />
                    </div>
                    <p className="text-lg font-light text-[#1A1A1A]/70 group-hover:text-[#1A1A1A] transition-colors tracking-tight whitespace-nowrap">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </SectionTransition>

      {/* 5. COMPARISON SECTION — Restored Premium Layout */}
      <SectionTransition>
        <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(207,160,82,0.06),transparent_60%)] pointer-events-none" />

          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#CFA052]/40" />
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#CFA052]">The Difference</span>
                <div className="w-8 h-[1px] bg-[#CFA052]/40" />
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif font-light text-[#E8DCCB]"
              >
                Traditional Hotel{" "}
                <span className="text-white/20 font-sans text-xl italic mx-2">vs</span>{" "}
                <span className="text-[#CFA052] italic">AI-Powered</span>
              </motion.h2>
            </div>

            <div className="flex flex-col gap-4">
              {comparison.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.7 }}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-0 group/row"
                >
                  <div className="flex items-center justify-end gap-4 bg-white/[0.03] border border-white/5 px-6 md:px-8 py-5 rounded-l-2xl group hover:bg-white/[0.05] transition-all">
                    <span className="text-sm md:text-base font-light italic text-white/40 group-hover:text-white/60 text-right">
                      {row.traditional}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                      <XCircle className="w-4 h-4 text-red-400/60" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-16 md:w-24 px-2">
                    <div className="h-full w-[1px] bg-[#CFA052]/10 self-stretch" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/20 py-2 text-center">
                      {row.label}
                    </span>
                    <div className="h-full w-[1px] bg-[#CFA052]/10 self-stretch" />
                  </div>

                  <div className="flex items-center gap-4 bg-[#CFA052]/5 border border-[#CFA052]/15 px-6 md:px-8 py-5 rounded-r-2xl group hover:bg-[#CFA052]/10 transition-all">
                    <div className="w-7 h-7 rounded-full bg-[#CFA052]/15 flex items-center justify-center flex-shrink-0 border border-[#CFA052]/30">
                      <CheckCircle2 className="w-4 h-4 text-[#CFA052]" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-[#E8DCCB] tracking-wide group-hover:text-white">
                      {row.ai}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* 6. TABBED LIFECYCLE SLIDER — Glee Inspired Redesign */}
      <section className="bg-black py-32 md:py-48 relative overflow-hidden">
        <div className="container mx-auto px-6 mb-20 text-center">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif text-white tracking-tighter mb-16"
          >
            Our <span className="italic text-[#CFA052]">Services</span>
          </motion.h2>

          {/* TAB NAVIGATION */}
          <div className="flex justify-center items-center gap-12 md:gap-20 border-b border-white/10 pb-4 relative max-w-2xl mx-auto">
            <button 
              onClick={() => setActiveTab('pre')}
              className={cn(
                "text-xs md:text-[14px] font-black tracking-[0.4em] uppercase transition-all duration-500 relative py-4",
                activeTab === 'pre' ? "text-white" : "text-white/30 hover:text-white/60"
              )}
            >
              PRE-OPENING
              {activeTab === 'pre' && (
                <motion.div layoutId="tabUnderline" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#CFA052]" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab('post')}
              className={cn(
                "text-xs md:text-[14px] font-black tracking-[0.4em] uppercase transition-all duration-500 relative py-4",
                activeTab === 'post' ? "text-white" : "text-white/30 hover:text-white/60"
              )}
            >
              POST-OPENING
              {activeTab === 'post' && (
                <motion.div layoutId="tabUnderline" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#CFA052]" />
              )}
            </button>
          </div>
        </div>

        {/* TILED SLIDER SECTION */}
        <div className="relative group/slider">
          <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative">
            
            {/* NAVIGATION ARROWS */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500">
               <button 
                  onClick={() => {
                    const slider = document.getElementById('lifecycle-slider');
                    if (slider) slider.scrollBy({ left: -400, behavior: 'smooth' });
                  }}
                  className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#CFA052] hover:border-[#CFA052] hover:text-black transition-all"
               >
                 <ChevronLeft className="w-6 h-6" />
               </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500">
               <button 
                  onClick={() => {
                    const slider = document.getElementById('lifecycle-slider');
                    if (slider) slider.scrollBy({ left: 400, behavior: 'smooth' });
                  }}
                  className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#CFA052] hover:border-[#CFA052] hover:text-black transition-all"
               >
                 <ChevronRight className="w-6 h-6" />
               </button>
            </div>

            {/* SLIDER CONTENT */}
            <div 
              id="lifecycle-slider"
              className="flex gap-8 overflow-x-auto scroll-smooth pb-20 no-scrollbar select-none"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-8"
                >
                  {(activeTab === 'pre' ? [
                    { title: "Concept Development & Feasibility", desc: "Developing a distinctive and market-aligned concept supported by detailed feasibility studies, financial modeling, and clear ROI projections." },
                    { title: "Brand Identity Development", desc: "Creating a compelling brand narrative, visual identity, and positioning strategy that establishes strong differentiation." },
                    { title: "Interior Design & Spatial Experience", desc: "Designing immersive, functional, and aesthetically refined spaces that enhance guest experience and brand alignment." },
                    { title: "Location Strategy & Site Acquisition", desc: "Identifying, evaluating, and securing high-potential locations with optimal visibility and commercial viability." },
                    { title: "Fit-Out Tendering & Coordination", desc: "Managing end-to-end contractor selection and fit-out execution to ensure quality delivery and timelines." },
                    { title: "Procurement of OS&E", desc: "Strategic sourcing of kitchen, service, and operational equipment to ensure seamless functionality." },
                    { title: "Talent Acquisition & Training", desc: "Recruiting the right talent and implementing structured training programs to build high-performance teams." },
                    { title: "Pre-Opening Planning & Soft Launch", desc: "Establishing operational readiness through trial runs and process testing to ensure smooth market entry." }
                  ] : [
                    { title: "Operations Management", desc: "Providing end-to-end operational leadership, ensuring smooth daily functioning and consistent service delivery." },
                    { title: "Staff Training & Development", desc: "Delivering continuous training programs to enhance skills, maintain excellence, and elevate guest experience." },
                    { title: "SOPs & Operational Manuals", desc: "Developing comprehensive manuals to ensure consistency, efficiency, and scalable systems across all departments." },
                    { title: "Operational Audits", desc: "Conducting detailed audits to identify inefficiencies, benchmark performance, and implement corrective strategies." },
                    { title: "Cost Control & Optimization", desc: "Implementing structured financial controls, monitoring expenses, and improving margins for profitability." },
                    { title: "Revenue Management", desc: "Driving growth through pricing strategies, demand forecasting, and direct booking enhancement." },
                    { title: "Brand Collaboration & Expansion", desc: "Facilitating brand partnerships and expansion strategies to scale the business across new markets." },
                    { title: "Guest Experience & QA", desc: "Enhancing guest satisfaction through monitoring and feedback systems to build strong brand loyalty." }
                  ]).map((service, i) => (
                    <div 
                      key={i} 
                      className="w-[320px] md:w-[480px] h-[520px] flex-shrink-0 group scroll-snap-align-start"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <div className="relative h-full p-10 md:p-14 rounded-[3rem] bg-white/[0.03] border border-white/10 group-hover:border-[#CFA052]/30 group-hover:bg-white/[0.05] transition-all duration-700 flex flex-col justify-between overflow-hidden shadow-2xl">
                        
                        {/* Background Accent Tile */}
                        <div className="absolute top-0 right-0 p-8">
                           <span className="text-8xl md:text-[10rem] font-serif text-white/[0.03] group-hover:text-[#CFA052]/5 transition-colors duration-700 leading-none select-none">
                             {String(i + 1).padStart(2, '0')}
                           </span>
                        </div>

                        <div className="relative z-10 space-y-8">
                           <h4 className="text-3xl md:text-4xl font-serif text-[#FAF9F6] tracking-tight group-hover:text-[#CFA052] transition-colors duration-500 leading-tight">
                             {service.title}
                           </h4>
                           <div className="w-12 h-[1px] bg-[#CFA052]/30 group-hover:w-24 transition-all duration-500" />
                           <p className="text-[#FAF9F6]/40 text-base md:text-lg font-light leading-relaxed tracking-wide group-hover:text-[#FAF9F6]/70 transition-colors duration-500">
                             {service.desc}
                           </p>
                        </div>

                        <div className="relative z-10 pt-8 mt-auto flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                           <Link href="/contact" className="text-[10px] font-black uppercase tracking-[0.4em] text-[#CFA052] flex items-center gap-3">
                             Request Intelligence <ArrowRight className="w-3 h-3" />
                           </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* PROGRESS BAR */}
            <div className="max-w-md mx-auto mt-4 h-[1px] bg-white/5 relative overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 className="absolute inset-x-0 h-full bg-gradient-to-r from-transparent via-[#CFA052]/40 to-transparent" 
               />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
