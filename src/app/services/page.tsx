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
  Building2, Layout, BarChart, BadgeCheck, Globe, ShieldCheck, Microscope, Bot
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
  const scrollRef = useRef<HTMLDivElement>(null);
  
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
      desc: "Automated handling and optimization of high-volume stays.",
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
    <main className="relative min-h-screen bg-[#FAF9F6] text-[#1A1A1A] overflow-x-hidden selection:bg-[#CFA052] selection:text-white font-sans">

      {/* 1. HERO SECTION — Pure Glass "Midnight Mesh" Experience */}
      <section className="relative h-screen min-h-[850px] flex items-center justify-center overflow-hidden bg-[#050505]">
        {/* Layer 1: Premium Midnight Onyx Shade (Code-based, no image dependency) */}
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Layer 2: Institutional Mesh Gradients */}
        <div className="absolute inset-x-0 top-0 h-full">
            {/* Top Left Glow */}
            <div className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.08)_0%,transparent_70%)] blur-[100px]" />
            {/* Bottom Right Glow */}
            <div className="absolute -bottom-1/4 -right-1/4 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.04)_0%,transparent_70%)] blur-[100px]" />
        </div>
        
        {/* Layer 3: Glass Texture (Animated Grain) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

        {/* Layer 4: Wide Horizontal Glass Tile (Wait for animation) */}
        <div className="relative z-10 w-full max-w-[1400px] px-8 md:px-20 lg:px-28 mt-24 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
            }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            {/* Wide Glass Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full p-12 md:p-16 lg:p-20 bg-white/40 backdrop-blur-[120px] border border-white/40 rounded-[4rem] shadow-[0_80px_160px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              {/* Left Column: Institutional Narrative */}
              <div className="flex-1 flex flex-col items-start gap-8 lg:gap-12">
                {/* Day Tag Style */}
                <div className="px-6 py-2.5 bg-white/60 backdrop-blur-md rounded-full border border-black/5 shadow-sm">
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-[#1A1A1A]/50">Management Suite</span>
                </div>

                {/* Main Title (High-End Serif) */}
                <div className="max-w-xl">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#1A1A1A] tracking-tighter leading-[0.85] mb-6 drop-shadow-sm">
                    Hotel <br/>
                    <span className="text-[#CFA052] italic font-light">Management.</span>
                  </h1>
                  <p className="text-[#1A1A1A]/40 text-sm md:text-base font-light tracking-[0.05em] leading-relaxed italic max-w-sm">
                    Architecting high-yield hospitality ecosystems through precision operations and AI-driven precision.
                  </p>
                </div>
              </div>

              {/* Vertical Separator (lg only) */}
              <div className="hidden lg:block w-[1px] h-64 border-l border-dotted border-black/10" />
              {/* Horizontal Separator (mobile/tablet only) */}
              <div className="block lg:hidden w-full h-[1px] border-b border-dotted border-black/10" />

              {/* Right Column: Dynamic Action & Metrics */}
              <div className="flex-1 flex flex-col gap-10 w-full lg:max-w-[450px]">
                {/* Nested Day Glass (Darker overlay for contrast) */}
                <motion.div 
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 1.2 }}
                  className="w-full p-10 bg-[#050505]/5 backdrop-blur-[60px] border border-black/5 rounded-[2.5rem] flex flex-col gap-6 group/inner hover:bg-[#050505]/10 transition-all duration-700"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#CFA052]/10 border border-[#CFA052]/20 flex items-center justify-center group-hover/inner:bg-[#CFA052] shadow-sm transition-all duration-500">
                      <CheckCircle2 className="text-[#CFA052] w-6 h-6 group-hover/inner:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-[#CFA052]">Institutional Metric</span>
                      <p className="text-[#1A1A1A] font-serif italic text-xl md:text-2xl leading-none">Yield Optimizer 2.4</p>
                    </div>
                  </div>
                  <p className="text-[#1A1A1A]/40 text-base font-light leading-relaxed tracking-wide">
                    Deploying institutional-grade financial strategy and AI audits to empower resort owners.
                  </p>
                </motion.div>

                {/* Primary CTA (Day Style) */}
                <Link href="/contact" className="group/btn w-full">
                  <button className="w-full py-7 bg-[#1A1A1A] text-[#FAF9F6] text-[12px] font-black uppercase tracking-[0.5em] rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:bg-[#CFA052] hover:text-[#1A1A1A] transition-all duration-700 flex items-center justify-center gap-6">
                    Initiate Transformation
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1.5" />
                  </button>
                </Link>
              </div>

              {/* Day Glare Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1500" />
            </motion.div>
          </motion.div>
        </div>

        {/* Surface Navigation Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8 group cursor-pointer"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.7em] text-[#1A1A1A]/20 group-hover:text-[#1A1A1A]/60 transition-colors">Surface Navigation</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#1A1A1A]/10 via-[#1A1A1A]/5 to-transparent group-hover:from-[#CFA052]/40 transition-all duration-700" />
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
            {aiServices.map((service, idx) => (
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

    </main>
  );
}
