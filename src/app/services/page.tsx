"use client";

import { useState, useEffect, useRef } from "react";
import { SectionTransition } from "@/components/ui/SectionTransition";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, QrCode, Headphones, Key, 
  BarChart3, LineChart, Zap, Coins, Settings, Globe2, Users,
  CheckCircle2, XCircle, ArrowRight, ChevronLeft, ChevronRight
} from "lucide-react";

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
        className="relative h-[420px] rounded-[2.5rem] overflow-hidden border border-white/20 flex flex-col bg-white/10 backdrop-blur-[60px] transition-all duration-700 group-hover:border-[#A67C52]/40 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Technical Background Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(166,124,82,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
        
        {/* Vertical Intelligence Label */}
        <div className="absolute left-8 top-10 bottom-10 flex flex-col items-center justify-between z-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A67C52] [writing-mode:vertical-lr] rotate-180 opacity-60">Intelligence</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#A67C52]/30 to-transparent" />
          <span className="text-[14px] font-mono text-[#A67C52]/40">P-0{idx + 1}</span>
        </div>

        {/* Focal Image Box — Holographic Projection */}
        <div className="absolute top-12 left-20 right-8 h-[160px] z-10 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl shadow-black">
          {/* Accent Frame */}
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t border-r border-[#A67C52]/40 z-20" />
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
            <div className="w-2 h-2 rounded-full bg-[#A67C52] animate-pulse shadow-[0_0_12px_rgba(166,124,82,0.8)]" />
            <h3 className="text-base md:text-lg font-bold uppercase tracking-[0.25em] text-[#E8DCCB] group-hover:text-white transition-colors">
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
              ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(166,124,82,0.1), transparent 60%)`
            ),
          }}
        />
      </div>
    </motion.div>
  );
};

const DetailedServiceCard = ({ service, idx }: { service: { title: string; image: string; desc: string; benefits: string[]; label?: string }; idx: number }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <div className="group relative flex flex-col md:flex-row h-full bg-white border border-black/[0.03] rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)] transition-all duration-700">
        
        {/* Left Side: Content */}
        <div className="flex-1 p-7 md:p-10 flex flex-col justify-between border-r border-black/[0.02]">
          {/* Separator Line + Label Animation */}
          <div className="flex items-center gap-6 mb-12">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
              className="h-[1px] bg-[#A67C52]" 
            />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#A67C52]">
               {service.label?.toUpperCase() || "STRATEGIC"}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#1A1A1A] mb-4 leading-[1.1] tracking-tight group-hover:text-[#A67C52] transition-colors duration-500">
            {service.title}
          </h3>

          <p className="text-[#1A1A1A]/50 text-sm md:text-base leading-relaxed font-light mb-6 max-w-xl">
            {service.desc}
          </p>

          {/* Premium Benefits List — Sequential Stagger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
            {service.benefits.map((benefit, bIndex) => (
              <motion.div 
                key={bIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + (bIndex * 0.1) }}
                className="flex items-center gap-3"
              >
                <div className="w-1 h-1 rounded-full bg-[#A67C52]/40 flex-shrink-0" />
                <span className="text-[#1A1A1A]/40 text-xs md:text-sm font-light tracking-wide italic">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="pt-6 border-t border-black/[0.03]">
            <Link href="/contact" className="inline-flex items-center gap-4 group/link">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#A67C52] border-b border-[#A67C52]/20 pb-1 group-hover/link:border-[#A67C52] transition-colors">
                 Consult Solution
              </span>
              <div className="w-9 h-9 rounded-full border border-[#A67C52]/20 flex items-center justify-center group-hover/link:bg-[#A67C52] transition-all duration-700">
                 <ArrowRight size={14} className="text-[#A67C52] group-hover/link:text-white transition-all transform group-hover/link:translate-x-0.5" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side: Bespoke Visual — [40% Width] */}
        <div className="md:w-[40%] relative min-h-[220px] md:min-h-full overflow-hidden bg-[#F5F5F5]">
          <motion.div 
            style={{ y, scale }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-105"
            />
            {/* Soft Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-transparent md:bg-gradient-to-r md:from-white/40 md:to-transparent" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

          {/* Asset ID Badge */}
          <div className="absolute bottom-8 right-8 z-20">
             <div className="px-5 py-3 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-xl shadow-2xl">
                <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest">Asset P-0{idx + 1}</span>
             </div>
          </div>
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
    <main className="relative min-h-screen bg-[#FAF9F6] text-[#1A1A1A] overflow-x-hidden selection:bg-[#A67C52] selection:text-white font-sans">

      {/* 1. HERO SECTION — Ultra-Premium Cinematic Experience */}
      <section className="relative h-[95vh] min-h-[750px] flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Background Image with Parallax & Ken Burns effect */}
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/services/luxury_brokerage_hero.png"
            alt="Vnexora Premium Services"
            fill
            priority
            className="object-cover opacity-90"
          />
          {/* Multi-layered Premium Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent/60" />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Floating Asset Performance Badge (Glassmorphic) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-32 right-12 md:right-28 z-20 hidden lg:flex"
        >
          <div className="px-6 py-4 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl flex flex-col gap-1 shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">Asset Performance</span>
            </div>
            <span className="text-lg font-serif text-white italic tracking-wide">Premium Yield Focused</span>
          </div>
        </motion.div>

        {/* Decorative Top Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="absolute top-[110px] left-8 right-8 h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent origin-left z-10"
        />

        <div className="relative z-10 px-8 md:px-20 lg:px-32 max-w-[1680px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-12 h-[1px] bg-[#A67C52]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#A67C52]">The Management Suite</span>
          </motion.div>

          {/* Editorial Headline Reveal */}
          <div className="flex flex-col gap-2 mb-16">
            <div className="overflow-hidden mb-2">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="block text-white/60 font-sans uppercase tracking-[0.8em] text-[10px] md:text-[12px] font-bold"
              >
                End-to-End
              </motion.span>
            </div>
            
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.85] tracking-tighter"
              >
                Hotel
              </motion.h1>
            </div>

            <div className="overflow-hidden -mt-2 md:-mt-4">
              <motion.h1 
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#A67C52] italic leading-[0.85] tracking-tighter"
              >
                Management.
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-12"
          >
            <div className="max-w-sm space-y-4">
               <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.4em]">Core Objectives</p>
               <p className="text-white/60 text-sm md:text-base font-light tracking-[0.05em] leading-relaxed italic pr-12">
                 Transforming hospitality assets into high-yield, world-class portfolios through precision operation.
               </p>
            </div>

            <Link href="/contact" className="group/btn relative">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-14 py-6 bg-[#A67C52] text-black text-[11px] uppercase tracking-[0.5em] font-black rounded-full overflow-hidden shadow-[0_20px_50px_rgba(166,124,82,0.3)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(166,124,82,0.5)] hover:bg-[#CFA052]"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Consult Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1.5" />
                </span>
                {/* Refined Glass Highlight on Button */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Refined Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
        >
          <span className="text-[8px] font-black uppercase tracking-[0.8em] text-white/20 group-hover:text-[#A67C52] transition-colors">Vertical Navigation</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent group-hover:from-[#A67C52]/40 transition-all duration-700" />
        </motion.div>
      </section>

      {/* 2. WHAT WE DO — Luxury Light Section */}
      <SectionTransition>
        <section className="py-32 bg-[#FAF9F6] border-t border-black/5 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-28 relative">
              {/* Decorative gold ornamental lines flanking the label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="flex items-center justify-center gap-6 mb-14"
              >
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: 60 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent to-[#A67C52]/60" 
                />
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rotate-45 bg-[#A67C52]/40" />
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#A67C52]">Capabilities</span>
                  <div className="w-1 h-1 rotate-45 bg-[#A67C52]/40" />
                </div>
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: 60 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
                  className="h-[1px] bg-gradient-to-l from-transparent to-[#A67C52]/60" 
                />
              </motion.div>
              
              {/* Cinematic staggered word reveal */}
              <div className="relative mb-6 flex flex-col items-center">
                <div className="overflow-hidden py-2 px-4">
                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  >
                    <span className="block text-[60px] md:text-[100px] lg:text-[120px] font-serif leading-none tracking-tight text-[#1A1A1A]">
                      WHAT WE
                    </span>
                  </motion.div>
                </div>
                <div className="overflow-hidden -mt-2 md:-mt-6 py-2 px-4">
                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                  >
                    <span className="block text-[60px] md:text-[100px] lg:text-[120px] font-serif leading-none tracking-tight text-[#A67C52] italic">
                      DO
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Gold diamond ornament */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center gap-3 my-10"
              >
                <div className="w-8 h-[1px] bg-[#A67C52]/20" />
                <div className="w-2 h-2 rotate-45 border border-[#A67C52]/40" />
                <div className="w-8 h-[1px] bg-[#A67C52]/20" />
              </motion.div>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-base md:text-lg text-[#1A1A1A]/35 font-serif max-w-2xl mx-auto leading-relaxed tracking-wide mb-16"
              >
                End-to-End Hospitality Solutions Designed for Performance, Profitability & Scale
              </motion.p>

              {/* Power Positioning Line — Floating with corner accents */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block px-10 md:px-14 py-7 border border-[#A67C52]/20 rounded-2xl bg-white/80 backdrop-blur-sm shadow-[0_8px_30px_rgba(166,124,82,0.06)] relative group cursor-default"
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#A67C52]/30 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#A67C52]/30 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#A67C52]/30 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#A67C52]/30 rounded-br-2xl" />
                  
                  <p className="text-sm md:text-base text-[#A67C52] italic font-medium tracking-wide">
                    "We Don't Just Support Hotels — We Structure, Operate & Scale Profitable Hospitality Assets."
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1300px] mx-auto items-stretch">
              {[
                {
                  title: "Hospitality Development & Project Advisory",
                  label: "Development",
                  image: "/Users/nihalkumar/.gemini/antigravity/brain/d8eb8cb0-780e-4ed2-9658-3d7040cb22ea/hospitality_development_advisory_1775302204299.png",
                  desc: "We partner with owners and investors to conceptualize and execute hospitality projects with strong market positioning.",
                  benefits: ["Project concept & strategy", "Highest & best use analysis", "Development planning", "Market positioning"]
                },
                {
                  title: "Architecture, Design & Technical Planning",
                  label: "Architecture",
                  image: "/Users/nihalkumar/.gemini/antigravity/brain/d8eb8cb0-780e-4ed2-9658-3d7040cb22ea/architecture_technical_planning_1775302233532.png",
                  desc: "Aligning design excellence with operational efficiency to create scalable, guest-centric hospitality environments.",
                  benefits: ["Architectural planning", "Interior coordination", "Technical review", "Cost-efficient solutions"]
                },
                {
                  title: "Feasibility, Budgeting & Financial Planning",
                  label: "Financials",
                  image: "/Users/nihalkumar/.gemini/antigravity/brain/d8eb8cb0-780e-4ed2-9658-3d7040cb22ea/financial_planning_feasibility_1775302253091.png",
                  desc: "Ensuring project financial viability with structured planning and optimized capital deployment.",
                  benefits: ["Financial feasibility", "Budget planning", "ROI-driven structuring", "Risk assessment"]
                },
                {
                  title: "Brand Strategy & Operator Alignment",
                  label: "Strategy",
                  image: "/images/services/brand_partnership.jpg",
                  desc: "Helping you select the right brand and operator to maximize asset value and long-term performance.",
                  benefits: ["Brand positioning", "Operator evaluation", "Management advisory", "Brand-market fit"]
                },
                {
                  title: "Brand Collaboration & Deal Structuring",
                  label: "Partnerships",
                  image: "/Users/nihalkumar/.gemini/antigravity/brain/d8eb8cb0-780e-4ed2-9658-3d7040cb22ea/brand_partnership_deal_revised_1775302299012.png",
                  desc: "Structuring strategic partnerships (Lease | Management | Revenue Share) for commercially viable agreements.",
                  benefits: ["Lease model structuring", "Contract negotiation", "Revenue share models", "Deal closure"]
                },
                {
                  title: "Pre-Opening, Training & Launch Management",
                  label: "Launch",
                  image: "/Users/nihalkumar/.gemini/antigravity/brain/d8eb8cb0-780e-4ed2-9658-3d7040cb22ea/preopening_launch_training_luxury_1775302347676.png",
                  desc: "Managing the pre-opening phase with a focus on team readiness, operational systems, and market entry.",
                  benefits: ["Pre-opening planning", "Talent acquisition", "Service standards", "SOP development"]
                },
                {
                  title: "Hotel Operations & Asset Management",
                  label: "Operations",
                  image: "/images/services/hotel-ops.png",
                  desc: "Delivering structured operations and asset oversight focused on efficiency, control, and guest satisfaction.",
                  benefits: ["End-to-end management", "Performance monitoring", "Operational controls", "Experience management"]
                },
                {
                  title: "Revenue Optimization & Commercial Strategy",
                  label: "Revenue",
                  image: "/images/services/revenue_growth_luxury.png",
                  desc: "Maximizing revenue through strategic pricing, distribution, and integrated sales & marketing execution.",
                  benefits: ["Revenue management", "Sales & branding", "OTA optimization", "Demand generation"]
                },
                {
                  title: "Performance Enhancement & Audit Systems",
                  label: "Audit",
                  image: "/images/services/ai_analytics.png",
                  desc: "Bringing transparency and accountability through structured performance tracking and operational audits.",
                  benefits: ["KPI tracking", "Financial audits", "Reporting systems", "Profitability strategy"]
                },
                {
                  title: "AI Guest Experience & Transformation",
                  label: "AI & Tech",
                  image: "/images/services/ai_guest_experience_luxury.png",
                  desc: "Enabling hotels to transition into tech-driven assets with enhanced guest engagement and efficiency.",
                  benefits: ["AI guest platform", "Journey automation", "Real-time analytics", "Process optimization"]
                }
              ].map((service, idx) => (
                <DetailedServiceCard key={idx} service={service} idx={idx} />
              ))}
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
                <div className="w-8 h-[1px] bg-[#A67C52]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-[#A67C52]">The Vnexora Edge</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-light text-white leading-[1.1]">
                Proprietary <span className="text-[#A67C52] italic">AI Ecosystem</span>
              </h2>
            </div>
            
            {/* Scroll Navigation Arrows */}
            <div className="flex items-center gap-4 pb-2">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-[#A67C52]/20 flex items-center justify-center text-[#A67C52] hover:bg-[#A67C52] hover:text-white transition-all duration-500 group/nav"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-5 h-5 group-hover/nav:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-[#A67C52]/20 flex items-center justify-center text-[#A67C52] hover:bg-[#A67C52] hover:text-white transition-all duration-500 group/nav"
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
        <section className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-t border-[#A67C52]/5 overflow-hidden">
          <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-[45%] relative aspect-[14/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#A67C52]/10"
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
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A67C52]">Assets</span>
                <div className="h-[1px] w-12 bg-[#A67C52]/20" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-light leading-[1.1] mb-10 text-[#1A1A1A]">
                Built for <span className="text-[#A67C52] italic">High-Performance</span> Assets
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all border border-[#A67C52]/10">
                      <CheckCircle2 className="text-[#A67C52] w-5 h-5" />
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(166,124,82,0.04),transparent_60%)] pointer-events-none" />

          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#A67C52]/40" />
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#A67C52]">The Difference</span>
                <div className="w-8 h-[1px] bg-[#A67C52]/40" />
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif font-light text-[#E8DCCB]"
              >
                Traditional Hotel{" "}
                <span className="text-white/20 font-sans text-xl italic mx-2">vs</span>{" "}
                <span className="text-[#A67C52] italic">AI-Powered</span>
              </motion.h2>
            </div>

            <div className="flex flex-col gap-4">
              {comparison.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.7 }}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-0"
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
                    <div className="h-full w-[1px] bg-[#A67C52]/10 self-stretch" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/20 py-2 text-center">
                      {row.label}
                    </span>
                    <div className="h-full w-[1px] bg-[#A67C52]/10 self-stretch" />
                  </div>

                  <div className="flex items-center gap-4 bg-[#A67C52]/5 border border-[#A67C52]/15 px-6 md:px-8 py-5 rounded-r-2xl group hover:bg-[#A67C52]/10 transition-all">
                    <div className="w-7 h-7 rounded-full bg-[#A67C52]/15 flex items-center justify-center flex-shrink-0 border border-[#A67C52]/30">
                      <CheckCircle2 className="w-4 h-4 text-[#A67C52]" />
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
