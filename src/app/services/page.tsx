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

      {/* 1. HERO SECTION — Dark Minimal Premium */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#050505]">
        
        {/* Layer 1: Immersion Backdrop (Deep, Dark, Dimmed) */}
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/services/luxury_architecture.png"
            alt="Vnexora Institutional"
            className="w-full h-full object-cover opacity-[0.25] mix-blend-luminosity grayscale-[0.8]"
          />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#050505] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#050505] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#050505] to-transparent" />
        </motion.div>

        {/* Ambient Overlay Texture */}
        <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Main Content Area */}
        <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="space-y-10 max-w-4xl"
          >
              <div className="flex items-center justify-center gap-4">
                 <div className="w-12 h-px bg-[#CFA052]/40" />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#CFA052]">Capabilities</span>
                 <div className="w-12 h-px bg-[#CFA052]/40" />
              </div>
              
              <h1 className="text-5xl md:text-[5.5rem] font-serif text-white tracking-tight leading-none drop-shadow-2xl">
                 Our <span className="italic font-light text-[#CFA052]">Services.</span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white/40 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
              >
                Precision architecting for institutional-grade <br className="hidden md:block" />
                <span className="text-[#CFA052]/80 font-sans font-black text-[9px] uppercase tracking-[0.4em] inline-block mt-8 border border-[#CFA052]/20 px-8 py-3 rounded-full bg-[#CFA052]/5 backdrop-blur-md">Hospitality Assets</span>
              </motion.p>
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
                <motion.div layoutId="tabUnderline" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#CFA052]" />
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
                <motion.div layoutId="tabUnderline" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#CFA052]" />
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
                  className="w-14 h-14 rounded-full border border-slate-200 bg-white shadow-xl flex items-center justify-center text-[#0A0A0A] hover:bg-[#CFA052] hover:border-[#CFA052] transition-all"
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
                  className="w-14 h-14 rounded-full border border-slate-200 bg-white shadow-xl flex items-center justify-center text-[#0A0A0A] hover:bg-[#CFA052] hover:border-[#CFA052] transition-all"
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
                    { title: "Concept Development & Feasibility", desc: "Developing a distinctive and market-aligned concept supported by detailed feasibility studies and ROI projections.", icon: <Sparkles className="w-5 h-5" /> },
                    { title: "Brand Identity Development", desc: "Creating a compelling brand narrative, visual identity, and positioning strategy for lasting market recall.", icon: <BadgeCheck className="w-5 h-5" /> },
                    { title: "Interior Design & Spatial Experience", desc: "Designing immersive, functional, and aesthetically refined spaces that enhance guest experience.", icon: <Layout className="w-5 h-5" /> },
                    { title: "Location Strategy & Site Acquisition", desc: "Identifying and securing high-potential locations with optimal visibility and commercial viability.", icon: <MapPin className="w-5 h-5" /> },
                    { title: "Fit-Out Tendering & Coordination", desc: "Managing end-to-end contractor selection and fit-out execution to ensure quality delivery.", icon: <Building2 className="w-5 h-5" /> },
                    { title: "Procurement of OS&E", desc: "Strategic sourcing of kitchen, service, and operational equipment to ensure seamless functionality.", icon: <Package className="w-5 h-5" /> },
                    { title: "Talent Acquisition & Training", desc: "Recruiting the right talent and implementing structured training programs to build high-performance teams.", icon: <Users className="w-5 h-5" /> },
                    { title: "Pre-Opening Planning & Soft Launch", desc: "Establishing operational readiness through trial runs and process testing for a smooth market entry.", icon: <Zap className="w-5 h-5" /> }
                  ] : [
                    { title: "Operations Management", desc: "Providing end-to-end operational leadership, ensuring smooth daily functioning and consistent service.", icon: <Settings className="w-5 h-5" /> },
                    { title: "Staff Training & Development", desc: "Delivering continuous training programs to enhance skills, maintain excellence, and elevate experience.", icon: <Activity className="w-5 h-5" /> },
                    { title: "SOPs & Operational Manuals", desc: "Developing comprehensive manuals to ensure consistency, efficiency, and scalable systems.", icon: <FileText className="w-5 h-5" /> },
                    { title: "Operational Audits", desc: "Conducting detailed audits to identify inefficiencies, benchmark performance, and implement strategies.", icon: <Microscope className="w-5 h-5" /> },
                    { title: "Cost Control & Optimization", desc: "Implementing structured financial controls, monitoring expenses, and improving margins.", icon: <Coins className="w-5 h-5" /> },
                    { title: "Revenue Management", desc: "Driving growth through pricing strategies, demand forecasting, and direct booking enhancement.", icon: <BarChart3 className="w-5 h-5" /> },
                    { title: "Brand Collaboration & Expansion", desc: "Facilitating brand partnerships and expansion strategies to scale the business across new markets.", icon: <Globe className="w-5 h-5" /> },
                    { title: "Guest Experience & QA", desc: "Enhancing guest satisfaction through monitoring and feedback systems to build strong brand loyalty.", icon: <Heart className="w-5 h-5" /> }
                  ]).map((service, i) => (
                    <div 
                      key={i} 
                      className="w-[300px] md:w-[360px] h-[400px] md:h-[460px] flex-shrink-0 group scroll-snap-align-start"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 group-hover:border-[#CFA052]/40 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] transition-all duration-700 flex flex-col justify-between overflow-hidden">
                        
                        {/* Background Accent Tile — Sequential Numbering — Refined & Smaller */}
                        <div className="absolute top-10 right-10">
                           <span className="text-2xl md:text-4xl font-serif text-slate-100 group-hover:text-[#CFA052]/20 transition-all duration-700 leading-none select-none">
                             {String(i + 1).padStart(2, '0')}
                           </span>
                        </div>

                        <div className="relative z-10 space-y-6">
                           {/* Icon Box */}
                           <div className="w-12 h-12 rounded-xl bg-[#CFA052]/5 flex items-center justify-center text-[#CFA052] group-hover:bg-[#CFA052] group-hover:text-black transition-all duration-500 scale-100 group-hover:scale-110">
                              {service.icon}
                           </div>

                           <h4 className="text-2xl md:text-3xl font-serif text-[#0A0A0A] tracking-tight group-hover:text-[#CFA052] transition-colors duration-500 leading-tight">
                             {service.title}
                           </h4>
                           <div className="w-8 h-[1px] bg-[#CFA052]/30 group-hover:w-16 transition-all duration-500" />
                           <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed tracking-wide group-hover:text-slate-700 transition-colors duration-500">
                             {service.desc}
                           </p>
                        </div>

                        <div className="relative z-10 pt-4 flex items-center gap-2">
                           {/* Decorative bottom element instead of CTA */}
                           <div className="w-1 h-1 rounded-full bg-[#CFA052]/30 group-hover:bg-[#CFA052]" />
                           <div className="w-12 h-[1px] bg-slate-100 group-hover:bg-[#CFA052]/20 transition-all duration-500" />
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
                    className="absolute inset-x-0 h-full bg-gradient-to-r from-transparent via-[#CFA052]/40 to-transparent" 
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
                  
                  <Link href="/contact" className="group/connect relative block">
                     <div className="absolute inset-0 bg-[#CFA052]/20 blur-2xl opacity-0 group-hover/connect:opacity-100 transition-opacity" />
                     <button className="px-14 py-6 bg-[#0A0A0A] text-white text-[11px] font-black uppercase tracking-[0.5em] rounded-full border border-white/10 hover:bg-[#CFA052] hover:text-black transition-all duration-500 flex items-center gap-8 relative z-10 shadow-2xl">
                        Connect With Vnexora
                        <ArrowRight className="w-4 h-4 group-hover/connect:translate-x-2 transition-transform" />
                     </button>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INSTITUTIONAL INTENT — Purpose, Philosophy, Vision */}
      <InstitutionalIntent />

      {/* 4. WHAT WE DO — Homepage Inspired Version */}
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

      {/* 4. CAPABILITIES GRID — Holographic Architectural Cards */}

    </main>
  );
}
