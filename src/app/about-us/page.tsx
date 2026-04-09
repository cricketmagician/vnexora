"use client";

import { Section } from "@/components/ui/Section";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, History, Sparkles, Target, Globe, Cpu, Award, Milestone, Menu, Pause, Play, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NarrativeSection from "@/components/sections/NarrativeSection";

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
      
      {/* 1. CINEMATIC GLASSMIND HERO (FULL-SCREEN VIDEO & FROSTED OVERLAYS) */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        
        {/* Full-Screen Cinematic Video Background (Inset Frame Refinement) */}
        <div className="absolute inset-0 z-0 bg-[#050505] p-4 md:p-8">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover brightness-[0.7] contrast-[1.1] rounded-[2.5rem]"
          >
            <source src="/videos/our-story-hero.mp4" type="video/mp4" />
          </video>
          {/* Subtle Global Vignette (Softened) */}
          <div className="absolute inset-4 md:inset-8 bg-gradient-to-b from-black/10 via-transparent to-black/30 rounded-[2.5rem] pointer-events-none" />
        </div>
        
        {/* Left Side: Black Frosted Glass Content Pillar (32% Width) */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[32%] h-full z-20 backdrop-blur-3xl bg-black/40 border-r border-white/5 flex flex-col justify-center overflow-hidden">
          {/* Subtle Textured Canvas (Visual Depth) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
            <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
          
          <div className="relative z-10 w-full px-8 md:px-14 flex-1 flex flex-col justify-center gap-10 md:gap-14">
            {/* Hamburger Menu Above Headline */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-2"
            >
              <button className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-3xl border border-white/10 rounded-full transition-all duration-500 group">
                <Menu className="w-6 h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
              </button>
            </motion.div>

            {/* Consolidated Brand Pillar Headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl md:text-[3.5rem] text-white leading-[1.1] tracking-tight font-serif font-medium">
                Hospitality is <br />
                <span className="relative inline-block mt-2">
                   experienced—<br/>never explained.
                   <motion.svg 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: 1.5 }}
                    viewBox="0 0 500 50" 
                    className="absolute -bottom-6 md:-bottom-8 left-0 w-full h-8 md:h-12 text-white fill-none stroke-current stroke-[3] pointer-events-none"
                  >
                    <path d="M5,35 Q200,15 350,30 T495,25" strokeLinecap="round" />
                  </motion.svg>
                </span>
              </h1>
            </motion.div>

            {/* Minimalist Narrow CTA Button (Floating Tab-Style) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-20 md:mt-32"
            >
              <Link 
                href="/services" 
                className="inline-flex items-center gap-6 px-10 py-7 bg-white transition-all duration-700 group hover:pr-14 rounded-full md:rounded-none"
              >
                <span className="text-[14px] md:text-[18px] font-medium tracking-tight font-serif text-[#BA893D] transition-all duration-500 group-hover:translate-x-1 leading-tight whitespace-nowrap">
                  Discover What Sets Us Apart
                </span>
                <ArrowRight className="w-5 h-5 text-[#BA893D] opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-1 ml-auto shrink-0" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Play/Pause Control Circle (High Fidelity Parity) */}
        <div className="absolute right-12 bottom-12 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40">
            <button 
              onClick={toggleVideo}
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/10 backdrop-blur-3xl text-white rounded-full border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:bg-white hover:text-black active:scale-95 group"
            >
              {isPlaying ? (
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-6 bg-current rounded-full" />
                  <div className="w-1.5 h-6 bg-current rounded-full" />
                </div>
              ) : (
                <Play size={24} fill="currentColor" className="ml-1" />
              )}
            </button>
        </div>

        {/* Top Right: Institutional Link (Mockup) */}
        <Link 
          href="/contact"
          className="absolute top-10 right-10 z-40 hidden md:flex items-center gap-6 px-10 py-5 bg-white/5 backdrop-blur-3xl border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-stone-900 transition-all duration-700 rounded-full"
        >
          Say Hello — Vnexora
        </Link>
      </section>

      {/* 2. NARRATIVE PARALLAX SECTION (AVOCET-INSPIRED EDITORIAL) */}
      <NarrativeSection />

      {/* 3. Deep Legacy Narrative Grid — CINEMATIC EDITORIAL */}
      <section className="bg-[#050505] relative z-20 overflow-hidden">

        {/* ── Drifting background watermark ── */}
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0.2, 0.5], ["0%", "-40%"]) }}
          className="absolute top-1/4 left-0 text-[15vw] font-serif font-black text-white/[0.018] whitespace-nowrap pointer-events-none select-none leading-none"
        >
          EXCELLENCE&nbsp;•&nbsp;PERFECTION&nbsp;•&nbsp;LEGACY
        </motion.div>

        {/* ── Ambient glow pools ── */}
        <div className="absolute -top-40 left-[20%] w-[500px] h-[500px] bg-mustard/[0.06] rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-mustard/[0.04] rounded-full blur-[180px] pointer-events-none" />

        {/* ════════════════════════════════
            TOP HALF — full-bleed split hero
        ════════════════════════════════ */}
        <div className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT — Cinematic image panel */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[55vh] lg:min-h-full overflow-hidden"
          >
            <img
              src="/images/services/luxury_hotel_architectural_shadows.png"
              alt="Vnexora Heritage Detail"
              className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[6s] hover:scale-100"
            />
            {/* Dark-to-right gradient bleed */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505]" />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent" />

            {/* Noise texture overlay for film-grain */}
            <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Floating caption badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-10 left-10 z-20"
            >
              <div className="bg-mustard/10 backdrop-blur-2xl border border-mustard/20 px-8 py-5 rounded-2xl">
                <div className="text-mustard text-[10px] font-black uppercase tracking-[0.4em] mb-1">Est. 2024</div>
                <div className="text-white/70 text-sm font-light italic">Where Institutions Meet Experience</div>
              </div>
            </motion.div>

            {/* Institutional seal — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute bottom-10 right-10 z-30 hidden lg:flex flex-col items-center justify-center w-36 h-36 rounded-full bg-mustard shadow-[0_0_60px_rgba(207,160,82,0.4)]"
            >
              <div className="text-2xl font-serif text-black font-bold leading-none">Inst.</div>
              <div className="text-[8px] font-black text-black/60 uppercase tracking-[0.25em] mt-1">Quality Seal</div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Narrative content */}
          <div className="flex items-center px-10 md:px-16 lg:px-20 xl:px-24 py-24 lg:py-32 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-14 max-w-2xl"
            >
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-5"
              >
                <div className="w-14 h-px bg-mustard" />
                <span className="text-[10px] font-black uppercase tracking-[0.7em] text-mustard">Who We Are</span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.2 }}
                className="text-5xl md:text-7xl xl:text-[5.5rem] font-serif text-white leading-[1.05] tracking-tighter"
              >
                Founded on a{" "}
                <span className="block mt-2 italic text-mustard relative">
                  Paradigm Shift.
                  {/* Gold underline */}
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.8 }}
                    viewBox="0 0 500 30"
                    className="absolute -bottom-3 left-0 w-full h-6 fill-none stroke-mustard stroke-2 pointer-events-none"
                  >
                    <path d="M0,20 Q250,5 500,15" strokeLinecap="round" />
                  </motion.svg>
                </span>
              </motion.h2>

              {/* Body copy */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="space-y-8"
              >
                <p className="text-white/45 text-lg md:text-xl font-light leading-[1.85] first-letter:text-[4rem] first-letter:font-serif first-letter:text-mustard first-letter:leading-[0.8] first-letter:mr-3 first-letter:float-left first-letter:mt-2">
                  The Vnexora journey began with a single realization: that luxury hospitality had become a commodity. In pursuit of scale, properties lost their soul, and owners lost their yield. We founded this institution to reverse that trend.
                </p>
                <p className="text-white/75 text-lg md:text-xl font-light leading-[1.85]">
                  By integrating institutional-grade financial intelligence with the high-art of guest experience, Vnexora creates a distinct &quot;Neural Grid&quot; for asset performance. We don&apos;t just manage hotels; we craft legacies of profitability.
                </p>
              </motion.div>

              {/* Pull-quote */}
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="relative pl-8 border-l-2 border-mustard/60"
              >
                <p className="text-mustard/80 text-base italic font-light leading-relaxed">
                  "Hospitality was never meant to be scaled like a commodity. It was meant to be felt like an heirloom."
                </p>
                <cite className="block mt-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 not-italic">— Vnexora Founding Charter</cite>
              </motion.blockquote>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-3 gap-6 pt-10 border-t border-white/[0.06]"
              >
                {[
                  { label: "Market Presence", value: "Global" },
                  { label: "Yield Optimization", value: "+28%" },
                  { label: "Mandate Focus", value: "Institutional" },
                ].map((stat, i) => (
                  <div key={i} className="group relative">
                    <div className="text-[9px] text-white/25 uppercase tracking-[0.35em] font-bold mb-2">{stat.label}</div>
                    <div className="text-2xl md:text-3xl font-serif text-white group-hover:text-mustard transition-colors duration-500">{stat.value}</div>
                    <div className="absolute -bottom-2 left-0 w-0 h-px bg-mustard group-hover:w-full transition-all duration-700" />
                  </div>
                ))}
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* ════════════════════════════════
            BOTTOM HALF — three editorial pillars
        ════════════════════════════════ */}
        <div className="container mx-auto px-6 md:px-12 lg:px-24 pb-40 pt-8">

          {/* Thin rule */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent mb-24" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.04]">
            {[
              {
                num: "01",
                title: "Institutional Intelligence",
                body: "We built proprietary audit systems that translate raw hospitality data into actionable yield strategies — the first of their kind in India.",
              },
              {
                num: "02",
                title: "Ownership Philosophy",
                body: "Every mandate is treated as if it were our own asset. No shortcuts, no templates. Only bespoke, first-principles stewardship.",
              },
              {
                num: "03",
                title: "Quiet Luxury Doctrine",
                body: "True luxury is not loud. It is felt in the weight of a door, the hush of a corridor, the warmth of an unexpected gesture.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18, duration: 1 }}
                className="group px-10 md:px-14 py-10 hover:bg-white/[0.015] transition-colors duration-700 relative overflow-hidden"
              >
                {/* Hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-mustard scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                <div className="text-[11px] font-black text-mustard/40 tracking-[0.4em] mb-6">{item.num}</div>
                <h3 className="text-2xl font-serif text-white mb-5 tracking-tight group-hover:text-mustard transition-colors duration-500">{item.title}</h3>
                <p className="text-white/35 text-base font-light leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Rule */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent mt-24" />
        </div>

      </section>

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
          
          <div className="space-y-0 relative">
            <TimelineStep 
              year="2024" 
              title="Foundation & Vision" 
              desc="Established in the heart of Washington D.C., Vnexora was built to redefine the intersection of luxury real estate and hotel operations." 
              align="left"
              icon={<History size={32} />}
              image="/images/timeline/timeline_2024_foundation.png"
            />
            <TimelineStep 
              year="2025" 
              title="The Neural Core" 
              desc="Deployment of the Vnexora AI Neural Grid, a proprietary engine that provides real-time audit and yield optimization for over 100+ mandates." 
              align="right"
              icon={<Cpu size={32} />}
              image="/images/timeline/timeline_2025_neural_core.png"
            />
            <TimelineStep 
              year="2026" 
              title="Global Apex" 
              desc="Becoming the definitive global partner for institutional hospitality asset owners, managing over $5B in luxury hospitality assets." 
              align="left"
              icon={<Globe size={32} />}
              image="/images/timeline/timeline_2026_global_apex.png"
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

function TimelineStep({ year, title, desc, align, icon, image }: { 
  year: string; 
  title: string; 
  desc: string; 
  align: "left" | "right"; 
  icon: React.ReactNode;
  image: string;
}) {
  const isLeft = align === "left";

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-0 py-24 md:py-32">

      {/* ── TEXT CARD side ── */}
      <div className={cn(isLeft ? "order-1" : "order-1 md:order-2")}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "group relative",
            isLeft ? "md:pr-16" : "md:pl-16"
          )}
        >
          <div className={cn(
            "bg-[#0A0A0A] border border-white/5 p-12 lg:p-16 rounded-[4rem] transition-all duration-700 group-hover:border-mustard/30 relative z-10",
            isLeft ? "rounded-tr-none" : "rounded-tl-none"
          )}>
            <div className={cn(
              "w-20 h-20 rounded-3xl bg-mustard/5 border border-mustard/10 flex items-center justify-center text-mustard mb-8 transition-all duration-500 group-hover:bg-mustard group-hover:text-black",
              isLeft ? "ml-auto" : "mr-auto"
            )}>
              {icon}
            </div>
            <div className={cn(isLeft ? "text-right" : "text-left")}>
              <span className="text-5xl font-serif text-mustard mb-4 block tracking-tighter">{year}</span>
              <h3 className="text-3xl font-serif text-white mb-6 tracking-tight">{title}</h3>
              <p className="text-white/40 text-xl font-light leading-relaxed">{desc}</p>
            </div>
          </div>

          {/* Connection Pulse dot — facing the centre line */}
          <div className={cn(
            "absolute top-1/2 w-8 h-8 rounded-full border border-mustard/30 flex items-center justify-center -translate-y-1/2 z-20",
            isLeft ? "-right-4" : "-left-4"
          )}>
            <div className="w-3 h-3 rounded-full bg-mustard shadow-[0_0_20px_rgba(207,160,82,1)]" />
          </div>
        </motion.div>
      </div>

      {/* ── IMAGE side ── */}
      <div className={cn(isLeft ? "order-2" : "order-2 md:order-1")}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className={cn(
            "relative aspect-[4/3] rounded-[3rem] overflow-hidden group",
            isLeft ? "md:pl-16" : "md:pr-16"
          )}
        >
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[4s]"
            />
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-1000" />
            {/* Gold vignette edge */}
            <div className="absolute inset-0 border border-mustard/10 rounded-[2.5rem]" />
            {/* Year watermark */}
            <div className="absolute bottom-6 right-8 text-[5rem] font-serif font-black text-white/[0.06] leading-none select-none pointer-events-none">{year}</div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
