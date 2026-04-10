"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Shield, Globe, Users, Trophy, Handshake, Zap, Milestone } from "lucide-react";

/**
 * ── INSTITUTIONAL PILLARS ──
 * High-fidelity narrative blocks inspired by the Avocet "Who We Are" journey.
 */
const pillars = [
  {
    title: "Hospitality Insiders",
    desc: "Our leadership stems from generations of institutional hospitality wisdom. We don't just manage; we inhabit the art of service with clinical precision.",
    icon: Shield,
    image: "/images/about-us/insider_door.png",
    tag: "Legacy",
    accent: "01"
  },
  {
    title: "Shared Stewardship",
    desc: "We align our success directly with yours. Every mandate is treated as a core asset in our shared institutional portfolio, ensuring 100% alignment of interest.",
    icon: Handshake,
    image: "/images/about-us/relationship_handshake.png",
    tag: "Alignment",
    accent: "02"
  },
  {
    title: "Strategic Growth",
    desc: "A track record defined by yield optimization and operational excellence across India's most complex and rewarding hospitality landscapes.",
    icon: Milestone,
    image: "/images/about-us/nationwide_map.png",
    tag: "Scale",
    accent: "03"
  },
  {
    title: "Executive Leadership",
    desc: "Led by industry veterans who have architected success for global hotel chains and bespoke boutique retreats with equal mastery.",
    icon: Users,
    image: "/images/about-us/success_team.png",
    tag: "Expertise",
    accent: "04"
  },
  {
    title: "Measurable Results",
    desc: "Every gesture and guest interaction is distilled into high-yield performance data that drives sustainable asset value and owner returns.",
    icon: Zap,
    image: "/images/about-us/results_champagne.png",
    tag: "Performance",
    accent: "05"
  }
];

export default function WhoWeArePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Parallax effects for the hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-white selection:bg-[#BA893D] selection:text-black font-serif overflow-x-hidden">
      
      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/about-us/insider_door.png" 
            alt="Institutional Identity" 
            fill 
            className="object-cover brightness-[0.35] grayscale-[0.6] sepia-[0.1]" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          
          {/* Subtle watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 opacity-5 whitespace-nowrap select-none pointer-events-none uppercase tracking-tighter">
             VNEXORA Gp.
          </div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="flex items-center justify-center gap-5">
              <div className="w-12 h-px bg-[#BA893D]" />
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#BA893D]">Institutional Identity</span>
              <div className="w-12 h-px bg-[#BA893D]" />
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-medium tracking-tighter leading-[0.85]">
              Who We <span className="italic font-light text-[#BA893D]">Are.</span>
            </h1>
            
            <p className="text-white/40 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed border-t border-white/10 pt-10 mt-10">
              A clinical approach to <span className="text-white">hospitality stewardship.</span> <br className="hidden md:block" />
              Architecting legacies through precision intelligence.
            </p>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">The Mandate</span>
          <div className="w-px h-20 bg-gradient-to-b from-[#BA893D] to-transparent" />
        </motion.div>
      </section>

      {/* ── NARRATIVE GRID — THE PILLARS ── */}
      <section className="py-32 md:py-64 bg-[#050505] relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-32 md:gap-y-48 gap-x-20">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, delay: i % 2 * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={i % 2 !== 0 ? "md:mt-32" : ""}
              >
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group">
                  <Image 
                    src={pillar.image} 
                    alt={pillar.title} 
                    fill 
                    className="object-cover grayscale-[0.2] brightness-[0.7] group-hover:scale-110 transition-transform duration-[3s]"
                  />
                  
                  {/* Subtle Grain Overlay */}
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-10 left-10">
                     <span className="text-[6rem] font-serif italic text-white/10 leading-none select-none">{pillar.accent}</span>
                  </div>

                  <div className="absolute bottom-10 left-10 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                        <pillar.icon className="w-5 h-5 text-[#BA893D]" />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">{pillar.tag}</span>
                  </div>
                </div>

                <div className="max-w-md space-y-8">
                  <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-none italic font-light">
                    {pillar.title}
                  </h3>
                  <div className="w-12 h-px bg-[#BA893D]/40" />
                  <p className="text-white/40 text-xl font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Final CTA Pillar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center text-center py-40 bg-zinc-900/40 rounded-[4rem] border border-white/5 mt-20"
              >
                <Shield className="w-16 h-16 text-[#BA893D] mb-12 opacity-40" />
                <h3 className="text-4xl md:text-7xl font-serif text-white tracking-tighter mb-12">Architecture of <br/> <span className="italic font-light text-[#BA893D]">Confidence.</span></h3>
                <Link href="/contact">
                   <button className="px-16 py-8 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-[#BA893D] transition-all duration-700">
                      Request Institutional Deck
                   </button>
                </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
