"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Users2, ShieldCheck, Trophy, Sparkles, Layout, Database, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function WorkWithUsPage() {
  const slides = [
    {
      id: "01",
      title: "Become a Hospitality Business Partner",
      subtitle: "",
      tagline: "Be Your Own Boss. Build With Trust. Earn Without Limits.",
      description: "Business Partner Consultant. Your Network. Our Execution. Maximum Earning Potential. Build your own business identity with VNEXORA Luxury Estate — without investment, office setup, or operational pressure.",
      footerTagline: "Vnexora Executive Mandate",
      image: "/images/work-with-us/111.jpeg",
      property: "Strategic Hub"
    },
    {
      id: "02",
      title: "Build Your Own Hospitality Business Identity",
      subtitle: "Premium Opportunities. Professional Execution. Flexible Growth.",
      tagline: "No Investment. No Boundaries. Only Growth.",
      description: "Partner with VNEXORA Luxury Estate and unlock access to high-value hospitality and commercial opportunities without building a traditional office or operational team. You focus on networking; we manage the negotiations, structuring, and strategic coordination.",
      footerTagline: "Vnexora Partnership",
      image: "/images/work-with-us/112.jpeg",
      property: "Professional Execution Lounge"
    },
    {
      id: "03",
      title: "Independent Hospitality Business Partner Consultant",
      subtitle: "Where Relationships Create Revenue",
      tagline: "Your Network. Our Expertise. Shared Success.",
      description: "Vnexora is building a premium network of connectors across the hospitality sector. If you have access to owners or investors, we provide the platform and strategic support to help you scale professionally.",
      footerTagline: "Strategic Network",
      image: "/images/work-with-us/113.jpeg",
      property: "Strategic Hub - London, UK"
    },
    {
      id: "04",
      title: "Empowering",
      subtitle: "Specialists",
      image: "/images/work-with-us/114.jpeg",
      property: "The Vault - Singapore, SG"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.05
    })
  };

  return (
    <main className="bg-[#050505] text-white selection:bg-mustard selection:text-black min-h-screen font-sans overflow-x-hidden">
      
      {/* 1. CINEMATIC SLIDER HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 1 },
              scale: { duration: 2 }
            }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={slides[currentSlide].image} 
              alt="Luxury Background" 
              fill 
              className="object-cover opacity-60 grayscale-[0.2]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          </motion.div>
        </AnimatePresence>

        {/* Content Container */}
        <div className="container relative z-20 px-6 mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[700px] mt-20"
            >
              {/* 1. EYEBROW LABEL — Airy & Editorial */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-6 mb-12"
              >
                <div className="w-12 h-px bg-mustard/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-mustard/80">Institutional Network</span>
              </motion.div>

              {/* 2. MAIN HEADING — Single Line, Refined & All Caps */}
              <h1 className="mb-12">
                <span className="text-3xl md:text-5xl font-serif uppercase tracking-[0.08em] leading-[1.1] text-white/95">
                  {slides[currentSlide].title}
                </span>
                {slides[currentSlide].subtitle && (
                  <span className="block text-xl md:text-3xl font-serif uppercase tracking-[0.1em] leading-[1.2] text-white/70 mt-6 max-w-[600px]">
                    {slides[currentSlide].subtitle}
                  </span>
                )}
              </h1>

              {/* 3. TAGLINE — Premium Accent */}
              {slides[currentSlide].tagline && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-10"
                >
                  <p className="text-mustard text-[11px] font-black uppercase tracking-[0.3em] border-l border-mustard/30 pl-8">
                    {slides[currentSlide].tagline}
                  </p>
                </motion.div>
              )}

              {/* 4. PREMIUM DESCRIPTION — Breathable & Optimized */}
              {slides[currentSlide].description && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/60 text-[1.05rem] font-light leading-[1.8] max-w-[520px] mb-16 opacity-[0.82] tracking-wide"
                >
                  {slides[currentSlide].description}
                </motion.p>
              )}

              {/* 5. CTA BUTTON — Confident & Stable */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-12 pt-4">
                <Button 
                  onClick={() => document.getElementById('membership-details')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-mustard text-black hover:bg-white px-[42px] py-[18px] text-[0.78rem] font-black uppercase tracking-[0.18em] rounded-none transition-all duration-700 shadow-[0_20px_50px_rgba(207,160,82,0.15)]"
                >
                  Join Task Force
                </Button>
                
                <div className="flex flex-col gap-2 border-l border-white/10 pl-10">
                  <span className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">Executive Mandate</span>
                  <span className="text-[12px] font-serif italic text-white/40">"Floating in status, anchored in trust."</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vertical Scroll Down Indicator — More Subtle */}
        <div className="absolute left-10 bottom-10 z-30 hidden lg:flex flex-col items-center gap-16">
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/10 rotate-180 [writing-mode:vertical-lr]">Scroll Down</span>
          <div className="w-px h-32 bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        {/* Bottom Left Property Label */}
        <div className="absolute left-10 bottom-10 z-30 lg:hidden">
          <p className="text-[9px] font-black tracking-[0.3em] text-white/40 uppercase">Vnexora Global Network</p>
        </div>
        <div className="absolute left-32 bottom-10 z-30 hidden lg:block">
           <AnimatePresence mode="wait">
             <motion.p 
               key={currentSlide}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase"
             >
               {slides[currentSlide].property}
             </motion.p>
           </AnimatePresence>
        </div>

        {/* Luxury Grid Pagination (1 2 3 4) */}
        <div className="absolute right-6 bottom-6 md:right-12 md:bottom-12 z-30">
          <div className="grid grid-cols-2 bg-black/40 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-[10px] md:text-xs font-black transition-all duration-700 border border-white/5 ${
                  currentSlide === index 
                    ? "bg-mustard text-black" 
                    : "text-white/40 hover:bg-white/5 hover:text-white"
                }`}
              >
                {slide.id}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC MISSION SECTION — Cinematic Asymmetric Layout */}
      <section id="membership-details" className="relative py-32 md:py-60 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
            
            {/* Left Image — Grayscale Professionalism */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] relative overflow-hidden grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 group">
                <Image 
                  src="/images/about/leadership-hero.jpg" 
                  alt="Vnexora Visionary" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-40" />
              </div>
              {/* Subtle Label */}
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-[8px] font-black tracking-[0.4em] text-white/30 uppercase italic">Vnexora Institutional Desk</p>
              </div>
            </motion.div>

            {/* Right Content — Editorial Authority */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="lg:col-span-7 lg:pl-32 space-y-12"
            >
              <div className="space-y-6">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">Vnexora Luxury Estate</span>
                <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter uppercase text-white/95">
                  Discover Our <br />
                  <span className="italic text-white/70">Passion</span>
                </h2>
              </div>

              <div className="max-w-[580px] space-y-10">
                <p className="text-white/50 text-[1.1rem] font-light leading-[1.8] tracking-wide">
                  Take your professional identity from a simple consultant to a timeless institution. At Vnexora Luxury Estate, we combine a deep history and standing in the industry with cutting-edge strategies to deliver high-quality results for our partners.
                </p>
                <p className="text-white/40 text-[1rem] font-light leading-[1.8] tracking-wide">
                  Our comprehensive suite of services — from strategic advisory and asset management to high-touch hospitality operations — is designed so our partners achieve their professional vision, increase their network's value, and build a lasting legacy in the global luxury market.
                </p>
                
                {/* Styled Service Link */}
                <div className="pt-8 flex items-center gap-6 group cursor-pointer border-l border-mustard/30 pl-8 hover:border-mustard transition-colors duration-500">
                  <span className="text-[10px] font-black tracking-[0.4em] text-white/80 group-hover:text-mustard uppercase transition-colors">Explore Our Services</span>
                  <div className="w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-mustard transition-all duration-500" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SERVICE COLUMNS — Cinematic Expertise Grid (Row 1) */}
      <section className="relative h-[600px] overflow-hidden bg-black group/section border-y border-white/10">
        {/* Unified Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/services_day_hero.png" 
            alt="Hospitality Mastery" 
            fill 
            className="object-cover opacity-100 brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Column Container */}
        <div className="relative z-10 flex h-full container mx-auto px-6 py-12 gap-4">
          {[
            {
              id: "01",
              label: "The Why",
              title: "WHY THIS OPPORTUNITY",
              desc: "Turn relationships into revenue. VNEXORA provides the professional execution platform to convert your trusted contacts into serious hospitality business opportunities."
            },
            {
              id: "02",
              label: "Requirements",
              title: "WHAT YOU NEED",
              desc: "No investment or office required. You only need your existing network, active efforts in opportunity sharing, and trust-driven relationships built on credibility."
            },
            {
              id: "03",
              label: "Our Role",
              title: "WHAT VNEXORA HANDLES",
              desc: "We power the complete business cycle: deal evaluation, structuring, coordination with brands/investors, documentation support, and professional closing."
            },
            {
              id: "04",
              label: "Your Role",
              title: "WHAT YOU HANDLE",
              desc: "You drive the network by introducing opportunities, connecting decision-makers, sharing market intelligence, and representing Vnexora with professionalism."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative h-full flex-1 border-2 border-white/20 overflow-hidden transition-all duration-1000 ease-[0.22,1,0.36,1] group/card bg-black/20 backdrop-blur-[2px] hover:backdrop-blur-md"
            >
              {/* Frosted Glass Overlay (only visible on hover) */}
              <div className="absolute inset-0 bg-white/0 group-hover/card:bg-white/[0.05] transition-all duration-700" />

              {/* Top Indicator (Hover Only) */}
              <div className="absolute top-12 left-10 right-10 z-20 opacity-0 group-hover/card:opacity-100 transition-all duration-700 delay-300">
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-2xl font-serif text-white/90 italic">{item.id}</span>
                  <div className="h-[1px] flex-1 bg-white/40" />
                </div>
                
                <h4 className="text-[9px] font-black tracking-[0.4em] text-mustard uppercase mb-4">
                  {item.title}
                </h4>

                <p className="text-white/80 text-[0.85rem] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Label & Number (Always visible, fades/shifts on hover) */}
              <div className="absolute bottom-8 left-8 right-8 z-10 transition-all duration-700 group-hover/card:opacity-0 group-hover/card:translate-y-5">
                {/* Large Background Number */}
                <div className="absolute -bottom-4 -left-4 select-none pointer-events-none overflow-hidden">
                   <span className="text-[120px] font-serif text-white/50 tracking-tighter italic leading-none block">
                     {item.id}
                   </span>
                </div>
                
                {/* Label */}
                <div className="relative z-20 pt-8">
                  <span className="text-[11px] font-black tracking-[0.3em] text-white uppercase block leading-tight">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Border Highlights (Subtle) */}
              <div className="absolute top-0 right-0 w-[1px] h-0 bg-mustard group-hover/card:h-full transition-all duration-[1.5s] ease-out z-30 opacity-40" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE SERVICE COLUMNS — Cinematic Expertise Grid (Row 2) */}
      <section className="relative h-[600px] overflow-hidden bg-black group/section border-b border-white/10">
        {/* Unified Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/hero_light.png" 
            alt="Operational Excellence" 
            fill 
            className="object-cover opacity-100 brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        {/* Column Container */}
        <div className="relative z-10 flex h-full container mx-auto px-6 py-12 gap-4">
          {[
            {
              id: "05",
              label: "Earnings",
              title: "EARNING MODEL",
              desc: "Maximum earnings with no ceiling. Earn through management contracts, lease deals, brand expansion, commercial property, and MangoH platform referrals."
            },
            {
              id: "06",
              label: "Eligibility",
              title: "WHO CAN APPLY",
              desc: "Built for network-driven professionals: Hotel consultants, real estate experts, brokers, entrepreneurs, retired professionals, and local market specialists."
            },
            {
              id: "07",
              label: "Benefits",
              title: "WHY PARTNER WITH US",
              desc: "No investment or manpower required. Flexible working model (full/part-time) with professional execution support and long-term recurring income potential."
            },
            {
              id: "08",
              label: "Our Creed",
              title: "TRUST & GROWTH",
              desc: "At VNEXORA, we believe growth runs on relationships. This is a partnership for those who believe their relationships can create meaningful business value."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative h-full flex-1 border-2 border-white/20 overflow-hidden transition-all duration-1000 ease-[0.22,1,0.36,1] group/card bg-black/20 backdrop-blur-[2px] hover:backdrop-blur-md"
            >
              {/* Frosted Glass Overlay (only visible on hover) */}
              <div className="absolute inset-0 bg-white/0 group-hover/card:bg-white/[0.05] transition-all duration-700" />

              {/* Top Indicator (Hover Only) */}
              <div className="absolute top-12 left-10 right-10 z-20 opacity-0 group-hover/card:opacity-100 transition-all duration-700 delay-300">
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-2xl font-serif text-white/90 italic">{item.id}</span>
                  <div className="h-[1px] flex-1 bg-white/40" />
                </div>
                
                <h4 className="text-[9px] font-black tracking-[0.4em] text-mustard uppercase mb-4">
                  {item.title}
                </h4>

                <p className="text-white/80 text-[0.85rem] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Label & Number (Always visible, fades/shifts on hover) */}
              <div className="absolute bottom-8 left-8 right-8 z-10 transition-all duration-700 group-hover/card:opacity-0 group-hover/card:translate-y-5">
                {/* Large Background Number */}
                <div className="absolute -bottom-4 -left-4 select-none pointer-events-none overflow-hidden">
                   <span className="text-[120px] font-serif text-white/50 tracking-tighter italic leading-none block">
                     {item.id}
                   </span>
                </div>
                
                {/* Label */}
                <div className="relative z-20 pt-8">
                  <span className="text-[11px] font-black tracking-[0.3em] text-white uppercase block leading-tight">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Border Highlights (Subtle) */}
              <div className="absolute top-0 right-0 w-[1px] h-0 bg-mustard group-hover/card:h-full transition-all duration-[1.5s] ease-out z-30 opacity-40" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. HOW TO JOIN */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hotel_guests_enjoying.png" alt="Hospitality Background" fill className="object-cover opacity-[0.05] grayscale" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-serif italic">How to join <span className="text-mustard not-italic">VNEXORA</span></h2>
            <div className="space-y-8 text-white/60 text-lg font-light leading-relaxed">
              <p>
                Joining VNEXORA is straightforward, yet we follow a rigorous screening process to ensure we get the right people on board and add value to both the consultant and the VNEXORA network.
              </p>
              <p>
                We look for hospitality industry professionals with at least 10 years of experience at a senior level; Director, Vice President or C-suite. This can be at a hospitality brand, management company, owner/investor group or development business.
              </p>
              <p>
                We look for like-minded professionals who bring a depth of experience and breadth of perspective, integrity, creativity, curiosity and a collaborative approach.
              </p>
            </div>
            <div className="pt-8">
               <Button 
                onClick={() => document.getElementById('partnership-forms')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-mustard text-black hover:bg-white px-12 py-8 text-[11px] font-black uppercase tracking-[0.5em] rounded-none"
               >
                 Apply to Join
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTNERSHIP FORM SECTION */}
      <section id="partnership-forms" className="py-24 md:py-40 bg-white/5 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 italic uppercase">Join the <span className="text-mustard not-italic">Task Force</span></h2>
            <p className="text-mustard text-sm md:text-lg font-bold uppercase tracking-[0.3em] mb-4">Elevate your expertise in offering hospitality consulting services.</p>
            <p className="text-white/40 text-sm md:text-base font-light tracking-wide">
              Submit your mandate brief. Our strategic desk will review and initiate contact within 24 institutional hours.
            </p>
          </div>

          <form className="space-y-8 p-12 bg-white border border-black/5 rounded-[2rem] shadow-2xl relative overflow-hidden text-black">
            {/* Subtle Gradient Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-mustard/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black placeholder:text-black/20 outline-none focus:border-mustard transition-all uppercase"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">Institutional Email</label>
                <input 
                  type="email" 
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black placeholder:text-black/20 outline-none focus:border-mustard transition-all uppercase"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">Expertise Area</label>
                <select className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black/60 outline-none focus:border-mustard transition-all uppercase appearance-none">
                  <option className="bg-white">Strategic Advisory</option>
                  <option className="bg-white">Development & Asset Management</option>
                  <option className="bg-white">ESG Advisory</option>
                  <option className="bg-white">Operational Advisory</option>
                  <option className="bg-white">Branding & Marketing</option>
                  <option className="bg-white">Sales & Commercial</option>
                  <option className="bg-white">Financial Advisory</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">Years of Experience</label>
                <input 
                  type="text" 
                  placeholder="10+ YEARS"
                  className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black placeholder:text-black/20 outline-none focus:border-mustard transition-all uppercase"
                />
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <label className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">Your Vision</label>
              <textarea 
                placeholder="HOW CAN WE BUILD TOGETHER?"
                rows={4}
                className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black placeholder:text-black/20 outline-none focus:border-mustard transition-all uppercase resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-black text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-mustard hover:text-black transition-all duration-700 shadow-2xl relative z-10"
            >
              Transmit Mandate
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
