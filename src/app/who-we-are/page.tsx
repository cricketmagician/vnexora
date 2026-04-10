"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  ArrowRight, 
  Shield, 
  Globe, 
  Users, 
  Trophy, 
  Handshake, 
  Zap, 
  Milestone,
  Linkedin 
} from "lucide-react";

/**
 * ── LEADERSHIP DATA ──
 * High-fidelity leadership profiles for the capsule grid.
 */
const teamMembers = [
  {
    name: "Mr. Vineet Mishra",
    role: "Founder & CEO",
    image: "/images/team/vineet-mishra.jpg",
    linkedin: "https://www.linkedin.com/in/vineet-mishra-98151a6a/"
  },
  {
    name: "Akanscha Roy",
    role: "Co-Founder & CBO",
    image: "/images/team/akanscha-roy.jpg",
    linkedin: "https://www.linkedin.com/in/akanscha-roy-61641121b/"
  },
  {
    name: "Pooja Tripathi",
    role: "Co-Founder & COO",
    image: "/images/team/pooja-tripathi.jpg",
    linkedin: "https://www.linkedin.com/in/pooja-tripathi-80542490/"
  },
  {
    name: "Shachi Mishra",
    role: "Co-Founder & CMO",
    image: "/images/team/shachi-mishra.jpg",
    linkedin: "https://www.linkedin.com/in/shachi-mishra-513051374/"
  }
];

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

      {/* ── INSTITUTIONAL SUB-NAV ── */}
      <nav className="bg-white border-b border-black/5 sticky top-0 z-[40] py-8">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-center gap-12 md:gap-24">
          {[
            { label: "Our Philosophy", id: "philosophy" },
            { label: "Our Team", id: "team" },
            { label: "Our History", id: "history" }
          ].map((item) => (
            <button 
              key={item.id} 
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40 hover:text-[#8B0000] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── PHILOSOPHY SECTION ── */}
      <section id="philosophy" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-serif text-black leading-none">
              Our <span className="relative">Philosophy <motion.svg className="absolute -bottom-4 left-0 w-full h-2" viewBox="0 0 400 20"><path d="M 5 15 Q 200 5 395 15" fill="transparent" stroke="black" strokeWidth="1" strokeOpacity="0.1" /></motion.svg></span>
            </h2>
            <p className="text-xl md:text-3xl font-serif italic text-black/60 leading-relaxed">
              "We are inspired professionals that believe profitability is the result of deep passion, a positive culture, and effective storytelling."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── OUR TEAM (CAPSULE GRID) ── */}
      <section id="team" className="py-48 md:py-72 bg-[#FAF9F6] border-y border-black/5">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24 md:mb-32">
               <div className="space-y-6">
                  <span className="text-[11px] font-black text-[#8B0000] uppercase tracking-[0.6em]">The Collective</span>
                  <h2 className="text-5xl md:text-8xl font-serif italic text-black leading-none">Our Team.</h2>
               </div>
               <p className="text-black/40 text-lg md:text-xl font-light max-w-md leading-relaxed italic pr-12">
                  "A curated blend of IIT engineers, financial masters, and hospitality visionaries dedicated to redefining the luxury paradigm."
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
               {teamMembers.map((member, i) => (
                 <motion.div
                   key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15 }}
                    className="group"
                 >
                    <div className="relative aspect-[9/16] rounded-full overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 bg-white border border-black/5">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          fill 
                          className="object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                           <h3 className="text-white text-xl font-serif font-medium mb-1">{member.name}</h3>
                           <p className="text-mustard text-[9px] font-black uppercase tracking-[0.2em] mb-4">{member.role}</p>
                           {member.linkedin && (
                             <a 
                                href={member.linkedin} 
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
                             >
                                <Linkedin size={14} />
                             </a>
                           )}
                        </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ── NARRATIVE GRID — THE PILLARS ── */}
      <section id="pillars" className="py-32 md:py-64 bg-[#050505] relative z-20">
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
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group">
                  <Image 
                    src={pillar.image} 
                    alt={pillar.title} 
                    fill 
                    className="object-cover grayscale-[0.2] brightness-[0.6] group-hover:scale-110 transition-transform duration-[3s]"
                  />
                  
                  {/* Subtle Grain Overlay */}
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  
                  {/* Bottom Gradient for Text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                  
                  {/* Decorative Accent */}
                  <div className="absolute top-10 left-10">
                     <span className="text-[6rem] font-serif italic text-white/10 leading-none select-none">{pillar.accent}</span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                           <pillar.icon className="w-4 h-4 text-[#BA893D]" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50">{pillar.tag}</span>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-none italic font-light">
                        {pillar.title}
                      </h3>
                      
                      <div className="w-12 h-px bg-[#BA893D]/40" />
                      
                      <p className="text-white/70 text-lg font-light leading-relaxed max-w-sm">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Final CTA Pillar */}
            <motion.div
                id="history"
                initial={{ opacity: 0, scale: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center text-center py-40 border-t border-black/5 mt-20"
              >
                <div className="mb-16">
                   <h2 className="text-5xl md:text-8xl font-serif text-black leading-none mb-12">
                     Our <span className="italic font-light">History</span>
                   </h2>
                   <p className="text-black/40 text-[10px] font-black uppercase tracking-[0.6em] mb-12">Established 2024</p>
                   <motion.div 
                      className="w-full h-1"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1.5 }}
                   >
                      <div className="w-24 h-[3px] bg-black/10 mx-auto" />
                   </motion.div>
                </div>

                <p className="text-xl md:text-2xl text-black/60 font-light max-w-2xl mx-auto mb-20">
                  Vnexora was founded on the principle that modern luxury requires institutional clinical precision. Our journey is defined by the stewardship of India&apos;s most promising hospitality assets.
                </p>

                <Link href="/say-hello">
                   <button className="px-20 py-8 bg-[#8B0000] text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-black transition-all duration-700 shadow-2xl">
                      Say Hello
                   </button>
                </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
