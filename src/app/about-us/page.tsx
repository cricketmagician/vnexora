"use client";

import { Section } from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronRight, History, Sparkles, Target } from "lucide-react";
import Image from "next/image";

export default function OurStoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white selection:bg-mustard selection:text-white relative overflow-hidden">

      {/* FLOATING 3D ARCHITECT AVATAR */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        animate={{ 
          y: [0, -15, 0] // floating animation
        }}
        transition={{ 
          opacity: { duration: 1.5, delay: 0.5 },
          scale: { duration: 1.5, delay: 0.5 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-[30%] -left-20 md:-left-32 w-[350px] h-[350px] md:w-[600px] md:h-[600px] pointer-events-none z-10 mix-blend-multiply brightness-[1.08] contrast-[1.2] opacity-90"
      >
        <Image
          src="/images/avatars/architect.png"
          alt="Strategic Architect"
          fill
          className="object-contain"
        />
      </motion.div>
      
      {/* Hero Section - Immersive Parallax */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-forest">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/reception_hero.jpg" 
            alt="Vnexora Luxury Estate" 
            className="w-full h-full object-cover opacity-40 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-transparent to-forest" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-block text-mustard text-xs font-bold tracking-[0.5em] uppercase mb-8">
              EST. 2024 — GLOBAL EXCELLENCE
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] tracking-tighter mb-12">
              Our <span className="italic text-gold-gradient">Legacy</span> <br/>
              of Excellence
            </h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
              className="w-32 h-[1px] bg-mustard mx-auto shadow-[0_0_20px_rgba(207,160,82,0.6)]"
            />
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover More</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-mustard to-transparent" />
        </motion.div>
      </section>

      {/* 2. THE NARRATIVE — Light Luxury Editorial */}
      <Section id="who" spacing="lg" className="bg-[#FAF9F6] relative z-20 overflow-visible">
        {/* Floating Architectural Asset */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: 50 }}
          whileInView={{ opacity: 0.15, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[-80px] right-[5%] w-[400px] h-[500px] pointer-events-none z-0"
        >
          <Image
            src="/images/about/ethos_asset.png"
            alt="Architectural Detail"
            fill
            className="object-cover rounded-[4rem]"
          />
        </motion.div>

        <div className="container mx-auto px-8 md:px-20 lg:px-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left: Heading & Ethos */}
            <div className="lg:col-span-5 flex flex-col pt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Vertical Identifier */}
                <div className="absolute -left-12 top-0 flex flex-col items-center">
                  <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#A67C52] [writing-mode:vertical-lr] rotate-180 mb-4 opacity-40">Section</span>
                  <span className="text-4xl font-serif text-[#A67C52]/20 select-none">01</span>
                </div>

                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-[1px] bg-[#A67C52]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A67C52]">The Narrative</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-serif font-light text-[#1A1A1A] leading-[1.05] tracking-tight mb-12">
                  Redefining the <br/>
                  <span className="text-[#A67C52] italic">Hospitality Ethos.</span>
                </h2>

                <p className="text-[#1A1A1A]/60 text-lg md:text-xl font-light leading-relaxed max-w-sm">
                  In an era of fleeting trends, we anchor our philosophy in timeless luxury and clinical operational precision.
                </p>
              </motion.div>
            </div>

            {/* Right: Detailed Story & Vision Card */}
            <div className="lg:col-span-7 space-y-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="absolute -left-8 top-4 w-[1px] h-20 bg-gradient-to-b from-[#A67C52]/40 to-transparent" />
                <p className="text-2xl md:text-3xl text-[#1A1A1A] font-light leading-relaxed mb-12 indent-12 first-letter:text-8xl first-letter:font-serif first-letter:text-[#A67C52] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2">
                  At VNEXORA Luxury Estate, we redefine hospitality by empowering hotel and resort owners with bespoke operational and strategic solutions. Rooted in excellence and driven by innovation, VNEXORA partners with visionary property owners to unlock the full potential of their assets.
                </p>
                <div className="h-[0.5px] w-40 bg-[#A67C52]/20" />
              </motion.div>

              <motion.div
                id="philosophy"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative bg-white/50 backdrop-blur-sm p-12 lg:p-16 rounded-[4rem] border border-[#A67C52]/10 shadow-[0_40px_100px_rgba(166,124,82,0.05)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-16 text-[#A67C52]/5 pointer-events-none">
                  <Target className="w-56 h-56" />
                </div>
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-8 rounded-full border border-[#A67C52]/20 flex items-center justify-center text-[#A67C52]">
                    <History className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#1A1A1A]">Guided by Vision</h3>
                </div>

                <p className="text-xl text-[#1A1A1A]/70 font-light leading-relaxed relative z-10">
                  Whether through long-term leasing, management contracts, or curated brand alliances, our approach is built on trust, transparency, and transformative growth. With deep expertise in property management, we collaborate with hospitality leaders to craft legacies in luxury hospitality.
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A67C52]/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us - Interactive Glass Cards */}
      <Section spacing="lg" className="bg-forest overflow-hidden py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-mustard text-xs font-bold tracking-[0.3em] uppercase mb-6 block"
            >
              The Vnexora Advantage
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Why Global Leaders <br/>
              <span className="italic text-gold-gradient">Choose Vnexora.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <History className="w-6 h-6" />,
                title: "Decades of Wisdom",
                text: "Combining decades of hospitality heritage with cutting-edge modern performance analytics."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Precision Management",
                text: "End-to-end solutions combining global expertise with local insights for tailored growth."
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Bespoke Alliances",
                text: "Curating exclusive brand partnerships that elevate property positioning and revenue."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="liquid-glass p-10 rounded-[2.5rem] flex flex-col items-start gap-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-mustard/10 flex items-center justify-center text-mustard border border-mustard/20">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-white mb-4">{item.title}</h4>
                  <p className="text-white/60 font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/10 pt-24"
          >
            <div className="max-w-lg">
              <h3 className="text-3xl font-serif text-white mb-6">Ready to redefine your hospitality legacy?</h3>
              <p className="text-white/40 font-light">Join the elite network of property owners transforming the luxury landscape with Vnexora.</p>
            </div>
            <button className="group relative px-10 py-5 bg-mustard text-forest-dark text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all duration-500 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Partner With Us <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>
      </Section>

    </main>
  );
}

