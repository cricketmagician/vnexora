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
  BarChart3, LineChart, Zap, Coins, Globe2, Users,
  CheckCircle2, XCircle, ArrowRight, ChevronLeft, ChevronRight,
  Building2, Layout, BarChart, BadgeCheck, Globe, ShieldCheck, Microscope, Bot, Activity, MapPin,
  Package, FileText, Settings, Heart
} from "lucide-react";
import { cn } from "@/lib/utils";
import InstitutionalIntent from "@/components/sections/InstitutionalIntent";
import { ServiceEnquiryForm } from "@/components/sections/ServiceEnquiryForm";
import { PartnerCTA } from "@/components/sections/PartnerCTA";

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
        className="relative h-[420px] rounded-[2.5rem] overflow-hidden border border-white/20 flex flex-col bg-white/10 backdrop-blur-[60px] transition-all duration-700 group-hover:border-[#E3B448]/40 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Technical Background Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,175,55,0.15) 1px, transparent 0)', backgroundSize: '15px 15px' }} />
        
        {/* Vertical Intelligence Label */}
        <div className="absolute left-8 top-10 bottom-10 flex flex-col items-center justify-between z-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E3B448] [writing-mode:vertical-lr] rotate-180 opacity-60">Intelligence</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#E3B448]/30 to-transparent" />
          <span className="text-[14px] font-mono text-[#E3B448]/40">P-0{idx + 1}</span>
        </div>

        {/* Focal Image Box — Holographic Projection */}
        <div className="absolute top-12 left-20 right-8 h-[160px] z-10 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl shadow-black">
          {/* Accent Frame */}
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t border-r border-[#E3B448]/40 z-20" />
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
            <div className="w-2.5 h-2.5 rounded-full bg-[#E3B448] animate-pulse shadow-[0_0_15px_rgba(212,175,55,1)]" />
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
              ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(212,175,55,0.2), transparent 70%)`
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
      <div className="h-full p-8 md:p-10 rounded-[40px] bg-[#0A0A0A]/40 border border-white/10 hover:border-[#E3B448]/40 transition-all duration-700 flex flex-col justify-between overflow-hidden backdrop-blur-[40px] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] group-hover:bg-[#0A0A0A]/60">
        
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
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E3B448]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        {/* Content Overlay */}
        <div className="relative z-10">
          <div className="mb-8">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-[#E3B448]/30" />
                <span className="text-[10px] font-sans font-black text-[#E3B448] tracking-[0.4em] uppercase">
                  {service.label || "Expertise"}
                </span>
             </div>
            <h3 className="text-2xl md:text-3xl font-serif text-[#FAF9F6] mb-5 tracking-tight group-hover:text-[#E3B448] transition-colors duration-500 leading-[1.1]">
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
                  <div className="w-6 h-6 rounded-lg bg-[#E3B448]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#E3B448] group-hover/item:rotate-[15deg] transition-all duration-300">
                    <CheckCircle2 className="w-3 h-3 text-[#E3B448] group-hover/item:text-black" />
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
        <div className="relative z-10 mt-auto pt-8 border-t border-white/5 group-hover:border-[#E3B448]/20 transition-colors duration-700">
          <Link
            href={`/services/${service.slug}`}
            className="flex items-center justify-between group/btn"
          >
            <div className="flex flex-col">
               <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#E3B448]/60 group-hover/btn:text-[#E3B448] transition-colors">Experience</span>
               <span className="text-sm font-serif text-[#FAF9F6] italic">TAKE ME THERE</span>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-[#E3B448] group-hover/btn:border-[#E3B448] shadow-2xl transition-all duration-500">
              <ArrowRight size={18} className="text-[#E3B448] group-hover/btn:text-[#050505] group-hover/btn:translate-x-1 transition-all duration-500" />
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
      className="relative min-h-screen bg-[#FAF9F6] text-[#1A1A1A] overflow-x-hidden selection:bg-[#E3B448] selection:text-white font-sans"
    >

      {/* 1. HERO SECTION — Cinematic Editorial */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505]">
        
        {/* Cinematic Backdrop with Parallax */}
        <motion.div 
          style={{ y: useTransform(useScroll({ offset: ["start start", "end start"] }).scrollYProgress, [0, 1], ["0%", "30%"]) }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/services/luxury_architecture.png"
            alt="Vnexora Institutional"
            className="w-full h-full object-cover opacity-[0.7] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/80" />
        </motion.div>

        {/* Dynamic Light Rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[140%] bg-[#E3B448]/5 blur-[120px] rotate-[35deg] animate-pulse" />
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[140%] bg-[#E3B448]/5 blur-[120px] rotate-[-35deg] animate-pulse" />
        </div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Main Content Area */}
        <div className="container mx-auto px-6 relative z-20 flex flex-col items-center">
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="space-y-12 max-w-5xl"
          >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center gap-6"
              >
                 <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#E3B448]/40" />
                 <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#E3B448]">The Capabilities Portfolio</span>
                 <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#E3B448]/40" />
              </motion.div>
              
              <div className="relative">
                <h1 className="text-6xl md:text-[8rem] lg:text-[9rem] font-serif text-white tracking-tighter leading-none relative z-10">
                   Our <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="italic font-light text-[#E3B448]"
                   >Services.</motion.span>
                </h1>
                {/* Floating Shadow Text */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-white/[0.02] text-[12rem] font-serif tracking-tighter whitespace-nowrap pointer-events-none select-none">
                  EXCELLENCE
                </span>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col items-center gap-10"
              >
                <p className="text-white/60 text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed italic">
                  Precision architecting for institutional-grade <br className="hidden md:block" />
                  hospitality performance and global asset scale.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    const element = document.getElementById('services-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group cursor-pointer"
                >
                  <span className="text-[#E3B448] font-sans font-black text-[10px] uppercase tracking-[0.5em] inline-block border-2 border-[#E3B448]/30 px-12 py-5 rounded-full bg-[#E3B448]/5 backdrop-blur-xl transition-all duration-500 group-hover:bg-[#E3B448] group-hover:text-black group-hover:border-[#E3B448] shadow-[0_0_40px_rgba(212,175,55,0.1)]">
                    Explore Assets
                  </span>
                </motion.div>
              </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/20">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 2. TABBED LIFECYCLE SLIDER — Moved to Primary Position after Hero */}
      <section className="bg-white py-32 md:py-48 relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-6 mb-20 text-center">
          {/* TAB NAVIGATION — Light Theme */}
          <div className="flex justify-center items-center gap-12 md:gap-20 border-b border-slate-200 pb-4 relative max-w-2xl mx-auto">
            <button 
              onClick={() => setActiveTab('pre')}
              className={cn(
                "text-xs md:text-[14px] font-black tracking-[0.4em] uppercase transition-all duration-500 relative py-4",
                activeTab === 'pre' ? "text-[#0A0A0A]" : "text-slate-400 hover:text-slate-600"
              )}
            >
              PRE-OPENING
              {activeTab === 'pre' && (
                <motion.div layoutId="tabUnderline" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#E3B448]" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab('post')}
              className={cn(
                "text-xs md:text-[14px] font-black tracking-[0.4em] uppercase transition-all duration-500 relative py-4",
                activeTab === 'post' ? "text-[#0A0A0A]" : "text-slate-400 hover:text-slate-600"
              )}
            >
              POST-OPENING
              {activeTab === 'post' && (
                <motion.div layoutId="tabUnderline" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#E3B448]" />
              )}
            </button>
          </div>
        </div>

        {/* TILED SLIDER SECTION — Light Theme Tiles */}
        <div className="relative group/slider">
          <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative">
            
            {/* NAVIGATION ARROWS — High Contrast — Centered on Cards */}
            <div className="absolute top-[200px] md:top-[230px] -translate-y-1/2 left-4 md:left-8 z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500">
               <button 
                  onClick={() => {
                    const slider = document.getElementById('lifecycle-slider');
                    if (slider) slider.scrollBy({ left: -400, behavior: 'smooth' });
                  }}
                  className="w-14 h-14 rounded-full border border-slate-200 bg-white shadow-xl flex items-center justify-center text-[#0A0A0A] hover:bg-[#E3B448] hover:border-[#E3B448] transition-all"
               >
                 <ChevronLeft className="w-6 h-6" />
               </button>
            </div>
            <div className="absolute top-[200px] md:top-[230px] -translate-y-1/2 right-4 md:right-8 z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500">
               <button 
                  onClick={() => {
                    const slider = document.getElementById('lifecycle-slider');
                    if (slider) slider.scrollBy({ left: 400, behavior: 'smooth' });
                  }}
                  className="w-14 h-14 rounded-full border border-slate-200 bg-white shadow-xl flex items-center justify-center text-[#0A0A0A] hover:bg-[#E3B448] hover:border-[#E3B448] transition-all"
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
                    { title: "Concept Development & Feasibility", desc: "Developing a distinctive and market-aligned concept supported by detailed feasibility studies and ROI projections.", icon: <Sparkles className="w-5 h-5" />, image: "/images/services/lifecycle/card-1.jpg" },
                    { title: "Brand Identity Development", desc: "Creating a compelling brand narrative, visual identity, and positioning strategy for lasting market recall.", icon: <BadgeCheck className="w-5 h-5" />, image: "/images/services/lifecycle/card-2.jpg" },
                    { title: "Interior Design & Spatial Experience", desc: "Designing immersive, functional, and aesthetically refined spaces that enhance guest experience.", icon: <Layout className="w-5 h-5" />, image: "/images/services/lifecycle/card-3.jpg" },
                    { title: "Location Strategy & Site Acquisition", desc: "Identifying and securing high-potential locations with optimal visibility and commercial viability.", icon: <MapPin className="w-5 h-5" />, image: "/images/services/lifecycle/card-4.jpg" },
                    { title: "Fit-Out Tendering & Coordination", desc: "Managing end-to-end contractor selection and fit-out execution to ensure quality delivery.", icon: <Building2 className="w-5 h-5" />, image: "/images/services/lifecycle/card-5.jpg" },
                    { title: "Procurement of OS&E", desc: "Strategic sourcing of kitchen, service, and operational equipment to ensure seamless functionality.", icon: <Package className="w-5 h-5" />, image: "/images/services/lifecycle/card-6.jpg" },
                    { title: "Talent Acquisition & Training", desc: "Recruiting the right talent and implementing structured training programs to build high-performance teams.", icon: <Users className="w-5 h-5" />, image: "/images/services/lifecycle/card-7.jpg" },
                    { title: "Pre-Opening Planning & Soft Launch", desc: "Establishing operational readiness through trial runs and process testing for a smooth market entry.", icon: <Zap className="w-5 h-5" />, image: "/images/services/lifecycle/card-8.jpg" }
                  ] : [
                    { title: "Operations Management", desc: "Providing end-to-end operational leadership, ensuring smooth daily functioning and consistent service.", icon: <Settings className="w-5 h-5" />, image: "/images/services/lifecycle/post/post-1.jpg" },
                    { title: "Staff Training & Development", desc: "Delivering continuous training programs to enhance skills, maintain excellence, and elevate experience.", icon: <Activity className="w-5 h-5" />, image: "/images/services/lifecycle/post/post-2.jpg" },
                    { title: "SOPs & Operational Manuals", desc: "Developing comprehensive manuals to ensure consistency, efficiency, and scalable systems.", icon: <FileText className="w-5 h-5" />, image: "/images/services/lifecycle/post/post-3.jpg" },
                    { title: "Operational Audits", desc: "Conducting detailed audits to identify inefficiencies, benchmark performance, and implement strategies.", icon: <Microscope className="w-5 h-5" />, image: "/images/services/lifecycle/post/post-4.jpg" },
                    { title: "Cost Control & Optimization", desc: "Implementing structured financial controls, monitoring expenses, and improving margins.", icon: <Coins className="w-5 h-5" />, image: "/images/services/lifecycle/post/post-5.jpg" },
                    { title: "Revenue Management", desc: "Driving growth through pricing strategies, demand forecasting, and direct booking enhancement.", icon: <BarChart3 className="w-5 h-5" />, image: "/images/services/lifecycle/post/post-6.jpg" },
                    { title: "Brand Collaboration & Expansion", desc: "Facilitating brand partnerships and expansion strategies to scale the business across new markets.", icon: <Globe className="w-5 h-5" />, image: "/images/services/lifecycle/post/post-7.jpg" },
                    { title: "Guest Experience & QA", desc: "Enhancing guest satisfaction through monitoring and feedback systems to build strong brand loyalty.", icon: <Heart className="w-5 h-5" />, image: "/images/services/lifecycle/post/post-8.jpg" }
                  ]).map((service, i) => (
                    <div 
                      key={i} 
                      className="w-[300px] md:w-[360px] h-[400px] md:h-[460px] flex-shrink-0 group scroll-snap-align-start"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 group-hover:border-[#E3B448]/40 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all duration-1000 flex flex-col justify-between overflow-hidden">
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 z-0 opacity-100 transition-all duration-1000">
                          <Image 
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover scale-110 group-hover:scale-100 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        </div>

                        {/* Technical Background Texture */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #E3B448 0.5px, transparent 0)', backgroundSize: '15px 15px' }} />
                        
                        <div className="relative z-10">
                           {/* Icon Box */}
                           <div className="w-14 h-14 rounded-2xl bg-[#E3B448]/10 flex items-center justify-center text-[#E3B448] group-hover:bg-[#E3B448] group-hover:text-black transition-all duration-700 shadow-sm group-hover:shadow-lg group-hover:shadow-[#E3B448]/20">
                              {service.icon}
                           </div>
                        </div>

                        <div className="relative z-10 mt-auto space-y-6">
                           {/* Description (reveals on hover) */}
                           <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-1000 ease-in-out">
                              <p className="text-white/80 text-sm md:text-base font-light leading-relaxed tracking-wide mb-6">
                                {service.desc}
                              </p>
                           </div>

                           {/* Title & Divider */}
                           <div className="space-y-4">
                              <div className="w-8 h-px bg-[#E3B448]/40 group-hover:w-16 transition-all duration-700" />
                              <h4 className="text-2xl md:text-3xl font-serif text-white tracking-tight group-hover:text-[#E3B448] transition-colors duration-700 leading-tight">
                                {service.title}
                              </h4>
                           </div>
                        </div>

                        <div className="relative z-10 pt-6 border-t border-white/5 mt-4 h-1">
                           {/* Decorative space-filler removed for complete minimalism */}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* PROGRESS BAR & CTA — Elegant Slate/Gold */}
            <div className="flex flex-col items-center gap-8 mt-12">
               <div className="w-full max-w-md h-[1px] bg-slate-200 relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    className="absolute inset-x-0 h-full bg-gradient-to-r from-transparent via-[#E3B448]/40 to-transparent" 
                  />
               </div>
               
               <div className="text-center space-y-2">
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-lg md:text-xl font-serif italic text-slate-400"
                  >
                    To book our services
                  </motion.p>
                  
                  <div 
                    onClick={() => document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group/connect relative block cursor-pointer"
                  >
                     <div className="absolute inset-0 bg-[#E3B448]/20 blur-2xl opacity-0 group-hover/connect:opacity-100 transition-opacity" />
                     <button className="px-14 py-6 bg-[#0A0A0A] text-white text-[11px] font-black uppercase tracking-[0.5em] rounded-full border border-white/10 hover:bg-[#E3B448] hover:text-black transition-all duration-500 flex items-center gap-8 relative z-10 shadow-2xl">
                        Connect With Vnexora
                        <ArrowRight className="w-4 h-4 group-hover/connect:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INSTITUTIONAL INTENT — Purpose, Philosophy, Vision */}
      <InstitutionalIntent />

      {/* 4. WHAT WE DO — Homepage Inspired Version */}
      <SectionTransition>
        <section id="services-section" className="bg-[#050505] py-24 md:py-32 relative overflow-hidden text-center">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#E3B448]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#E3B448]/5 blur-[120px] rounded-full" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[12px] md:text-[14px] font-sans font-bold text-[#E3B448] tracking-[0.4em] uppercase mb-6"
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
                   className="text-[#E3B448] italic font-light"
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
                className="inline-block px-10 py-5 rounded-2xl border border-[#E3B448]/20 bg-[#E3B448]/5 backdrop-blur-[10px] mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
              >
                <p className="text-[#E3B448] font-sans font-medium tracking-wider text-sm md:text-base italic">
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

            </div>
        </section>
      </SectionTransition>

      {/* Partner CTA */}
      <PartnerCTA />
      
      {/* 5. DETAILED ENQUIRY — High Fidelity Form */}
      <section id="enquiry-section" className="bg-white py-32 md:py-48">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-mustard text-[10px] font-black tracking-[0.6em] uppercase block mb-6"
             >
               Strategic Brief
             </motion.span>
             <h2 className="text-5xl md:text-8xl font-serif italic text-black tracking-tighter leading-tight">
               Build Your <br />
               <span className="not-italic font-black text-slate-200 uppercase">Hospitality Solution.</span>
             </h2>
          </div>

          <div className="max-w-6xl mx-auto">
             <ServiceEnquiryForm />
          </div>
        </div>
      </section>

    </main>
  );
}
