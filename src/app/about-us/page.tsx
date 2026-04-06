"use client";

import { Section } from "@/components/ui/Section";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, History, Sparkles, Target, Globe, Cpu, Award, Milestone, Menu, Pause, Play, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function OurStoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] selection:bg-mustard selection:text-white relative overflow-hidden font-serif">
      
      {/* 1. CINEMATIC SPLIT HERO (AVOCET STYLE) */}
      <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#5B1C1C]">
        
        {/* Left Side: Brand Maroon Section */}
        <div className="w-full md:w-[45%] h-[40vh] md:h-full bg-[#5B1C1C] relative flex items-center justify-center p-8 md:p-20 overflow-hidden">
          {/* Decorative Logo / Icon Layer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute -top-20 -left-20 w-96 h-96 pointer-events-none"
          >
             <Image src="/images/logo.png" alt="" fill className="object-contain brightness-0 invert" />
          </motion.div>
          
          <div className="relative z-10 w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image src="/images/logo.png" alt="Vnexora" width={120} height={120} className="mb-12 brightness-0 invert opacity-90" />
              <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full mb-8">
                <Menu className="w-5 h-5 text-white/60" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Cinematic Video */}
        <div className="w-full md:w-[55%] h-[60vh] md:h-full relative overflow-hidden shadow-[-20px_0_40px_rgba(0,0,0,0.3)]">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=73461ef35f6060c6d7d967e8574d75f284e36336&profile_id=164" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Bottom Right CTA Overlay */}
          <Link href="/services" className="absolute bottom-0 right-0 left-0 md:left-auto md:w-[450px] bg-white group flex items-center justify-between p-8 md:p-10 transition-all duration-500 hover:bg-[#5B1C1C] hover:text-white">
            <span className="text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] font-sans text-black group-hover:text-white">Discover What Sets Us Apart From The Others</span>
            <div className="w-10 h-10 flex items-center justify-center border border-black/10 group-hover:border-white/20 rounded-full transition-colors">
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>

          {/* Video Control Bar */}
          <div className="absolute bottom-10 right-10 z-20 flex gap-4 items-center">
             <button 
                onClick={toggleVideo}
                className="w-12 h-12 flex items-center justify-center bg-[#5B1C1C] text-white rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
              >
                {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
              </button>
          </div>
        </div>

        {/* Central Overlay Headline (Spanning both sides) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none px-6 md:px-20 lg:px-48 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-4xl md:text-7xl lg:text-9xl text-white leading-[0.9] tracking-tighter"
          >
            HOSPITALITY IS <br className="hidden md:block" />
            A STORY BETTER <br />
            <span className="relative inline-block mt-4 md:mt-0">
               TOLD ALOUD.
               <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
                viewBox="0 0 500 50" 
                className="absolute -bottom-4 md:-bottom-8 left-0 w-full h-8 md:h-12 text-white fill-none stroke-current stroke-[6] pointer-events-none opacity-80"
              >
                <path d="M10,35 Q150,10 300,35 T490,20" strokeLinecap="round" />
              </motion.svg>
            </span>
          </motion.h1>
        </div>

        {/* Top Right: Say Hello Button */}
        <Link 
          href="/contact"
          className="absolute top-10 right-10 z-40 hidden md:block px-8 py-4 border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-[#5B1C1C] transition-all duration-500 rounded-lg backdrop-blur-md"
        >
          Say Hello
        </Link>
      </section>

      {/* 2. THE MISSION — Staggered Narrative Parallax */}
      <Section container={false} className="bg-[#050505] relative z-20 py-48 overflow-hidden">
        {/* Floating Background Text */}
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0.2, 0.5], ["0%", "-40%"]) }}
          className="absolute top-1/4 left-0 text-[15vw] font-serif font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
        >
          EXCELLENCE • PERFECTION • LEGACY
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-center">
            
            {/* Left: Deep Heritage Image */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative group pr-12 pb-12"
              >
                {/* Image Border Accent */}
                <div className="absolute top-12 left-12 right-0 bottom-0 border border-mustard/20 rounded-[3rem] transition-all duration-700 group-hover:top-8 group-hover:left-8" />
                
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-[#0A0A0A]">
                  <img
                    src="/images/services/luxury_hotel_architectural_shadows.png"
                    alt="Vnexora Heritage Detail"
                    className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-1000" />
                </div>
                
                {/* Badge Overlay */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-mustard p-10 rounded-[2rem] shadow-2xl z-20 hidden md:block"
                >
                  <div className="text-4xl font-serif text-black leading-none mb-2">Institutional</div>
                  <div className="text-[10px] font-bold text-black/60 uppercase tracking-[0.3em]">Quality Seal</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Mission Narrative */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-[1.5px] bg-mustard" />
                  <span className="text-[11px] font-black uppercase tracking-[0.6em] text-mustard">Who We Are</span>
                </div>
                
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tighter">
                  Founded on a <span className="italic text-mustard">Paradigm Shift.</span>
                </h2>

                <div className="space-y-10">
                  <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl first-letter:text-6xl first-letter:font-serif first-letter:text-mustard first-letter:mr-3 first-letter:float-left">
                    The Vnexora journey began with a single realization: that luxury hospitality had become a commodity. In pursuit of scale, properties lost their soul, and owners lost their yield. We founded this institution to reverse that trend.
                  </p>
                  <p className="text-white/80 text-xl font-light leading-relaxed max-w-2xl">
                    By integrating institutional-grade financial intelligence with the high-art of guest experience, Vnexora creates a distinct &quot;Neural Grid&quot; for asset performance. We don&apos;t just manage hotels; we craft legacies of profitability.
                  </p>
                </div>

                <div className="flex flex-wrap gap-12 md:gap-16 pt-12 border-t border-white/5">
                  <StatItem label="Market Presence" value="Global" />
                  <StatItem label="Yield Optimization" value="+28%" />
                  <StatItem label="Mandate Focus" value="Institutional" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Premium Divider */}
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-32">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </Section>

      {/* 3. EVOLUTION TIMELINE — Vertical Parallax Flow */}
      <section className="bg-[#050505] py-48 relative">
        <div className="container mx-auto px-6 text-center mb-40">
          <SectionTag>Our Evolution</SectionTag>
          <h2 className="text-5xl md:text-[7rem] font-serif text-white mt-12 tracking-tight leading-none">
            The Timeline of <br/>
            <span className="italic text-gold-gradient">Excellence.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Central Parallax Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ scaleY: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]) }}
              className="w-full h-full bg-gradient-to-b from-mustard via-mustard to-transparent origin-top" 
            />
          </div>
          
          <div className="space-y-64 relative">
            <TimelineStep 
              year="2024" 
              title="Foundation & Vision" 
              desc="Established in the heart of Washington D.C., Vnexora was built to redefine the intersection of luxury real estate and hotel operations." 
              align="left"
              icon={<History size={32} />}
            />
            <TimelineStep 
              year="2025" 
              title="The Neural Core" 
              desc="Deployment of the Vnexora AI Neural Grid, a proprietary engine that provides real-time audit and yield optimization for over 100+ mandates." 
              align="right"
              icon={<Cpu size={32} />}
            />
            <TimelineStep 
              year="2026" 
              title="Global Apex" 
              desc="Becoming the definitive global partner for institutional hospitality asset owners, managing over $5B in luxury hospitality assets." 
              align="left"
              icon={<Globe size={32} />}
            />
          </div>
        </div>
      </section>

      {/* 4. CORE PRINCIPLES — Ultra-Premium Glass Grid */}
      <Section className="bg-[#050505] py-48 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-mustard/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-mustard/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 text-center mb-32">
          <SectionTag>Institutional Pillars</SectionTag>
          <h2 className="text-5xl md:text-[6rem] font-serif text-white mt-10 tracking-tighter">
            Our <span className="italic text-mustard">Core Principles.</span>
          </h2>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {[
            { icon: Award, title: "Uncompromising Quality", desc: "Every detail, from architectural audits to guest linen selection, must meet the Vnexora clinical standard." },
            { icon: Target, title: "Yield Precision", desc: "We replace guesswork with data-driven yield optimization, ensuring every square meter of your asset performs." },
            { icon: Sparkles, title: "Quiet Luxury", desc: "A firm belief that true luxury is felt, not shouted. We focus on discretion, privacy, and curated excellence." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0A0A0A]/80 backdrop-blur-[100px] border border-white/5 p-16 rounded-[4rem] text-center transition-all duration-700 hover:border-mustard/40"
            >
              <div className="w-20 h-20 rounded-3xl bg-mustard/5 flex items-center justify-center text-mustard border border-mustard/10 mx-auto mb-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-mustard group-hover:text-black">
                <item.icon size={36} strokeWidth={1.2} />
              </div>
              <h3 className="text-3xl font-serif text-white mb-8 tracking-tight">{item.title}</h3>
              <p className="text-white/30 text-lg font-light leading-relaxed">
                {item.desc}
              </p>
              
              {/* Internal Accent */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-white/5 group-hover:w-16 group-hover:bg-mustard/40 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. INSTITUTIONAL CALL TO ACTION */}
      <section className="bg-[#0A0A0A] py-64 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <SectionTag>Institutional Partners</SectionTag>
            <h2 className="text-6xl md:text-[9rem] font-serif text-white mt-12 mb-16 tracking-tighter leading-[0.85]">
              Redefine Your <br/>
              <span className="text-mustard italic text-gold-gradient">Financial Legacy.</span>
            </h2>
            <p className="text-white/40 text-xl md:text-2xl font-light mb-20 max-w-3xl mx-auto leading-relaxed">
              Step into the Vnexora ecosystem. We are currently accepting limited new mandates for 2026 partner cycles.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-16 py-8 bg-mustard text-black text-[11px] font-black uppercase tracking-[0.5em] rounded-full shadow-[0_20px_50px_rgba(207,160,82,0.3)] transition-all"
              >
                Initiate Consultation
                <ChevronRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <button className="text-white/40 text-[11px] font-black uppercase tracking-[0.5em] hover:text-white transition-colors">
                View Portfolio — 2026
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <div className="h-full w-full bg-[radial-gradient(#CFA052_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
      </section>

    </main>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-4">
      <div className="w-12 h-[1px] bg-mustard/30" />
      <span className="text-[11px] font-black tracking-[0.7em] text-mustard uppercase">{children}</span>
      <div className="w-12 h-[1px] bg-mustard/30" />
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium mb-1">{label}</span>
      <span className="text-3xl font-serif text-white">{value}</span>
    </div>
  );
}

function TimelineStep({ year, title, desc, align, icon }: { year: string; title: string; desc: string; align: "left" | "right"; icon: React.ReactNode }) {
  return (
    <div className={cn(
      "w-full flex items-center",
      align === "left" ? "md:justify-start" : "md:justify-end"
    )}>
      <motion.div 
        initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "w-full md:w-[46%] group relative",
          align === "left" ? "text-right md:pr-12" : "text-left md:pl-12"
        )}
      >
        <div className={cn(
          "bg-[#0A0A0A] border border-white/5 p-12 lg:p-16 rounded-[4rem] transition-all duration-700 group-hover:border-mustard/30 relative z-10",
          align === "left" ? "rounded-tr-none" : "rounded-tl-none"
        )}>
          <div className={cn(
            "w-20 h-20 rounded-3xl bg-mustard/5 border border-mustard/10 flex items-center justify-center text-mustard mb-8 transition-all duration-500 group-hover:bg-mustard group-hover:text-black",
            align === "left" ? "ml-auto" : "mr-auto"
          )}>
            {icon}
          </div>
          <span className="text-5xl font-serif text-mustard mb-4 block tracking-tighter">{year}</span>
          <h3 className="text-3xl font-serif text-white mb-6 tracking-tight">{title}</h3>
          <p className="text-white/40 text-xl font-light leading-relaxed">{desc}</p>
        </div>
        
        {/* Connection Pulse */}
        <div className={cn(
          "absolute top-1/2 w-8 h-8 rounded-full border border-mustard/30 flex items-center justify-center -translate-y-1/2 z-20",
          align === "left" ? "-right-4" : "-left-4"
        )}>
          <div className="w-3 h-3 rounded-full bg-mustard shadow-[0_0_20px_rgba(207,160,82,1)]" />
        </div>
      </motion.div>
    </div>
  );
}
