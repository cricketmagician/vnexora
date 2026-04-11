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
  Linkedin,
  Building2
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

      {/* ── INSTITUTIONAL SUB-NAV — ELEVATED EDITORIAL ── */}
      <nav className="bg-white/80 backdrop-blur-3xl border-b border-black/5 sticky top-0 z-[40] py-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-6 max-w-7xl relative flex items-center justify-center">
          <div className="flex items-center gap-10 md:gap-20">
            {[
              { label: "Our Philosophy", id: "philosophy" },
              { label: "Our Team", id: "team" },
              { label: "Vnexora Roadmap", id: "roadmap" }
            ].map((item, i) => (
              <div key={item.id} className="flex items-center gap-10 md:gap-20">
                <button 
                  onClick={() => {
                    const el = document.getElementById(item.id);
                    if (el) {
                      const offset = 120; // Adjusted for sticky nav
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = el.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="group relative flex items-center gap-3 text-[13px] font-black uppercase tracking-[0.6em] text-black/40 hover:text-black transition-all duration-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_10px_rgba(139,0,0,0.5)]" />
                  {item.label}
                  <span className="absolute -bottom-4 left-0 w-0 h-[2px] bg-[#8B0000] group-hover:w-full transition-all duration-700" />
                </button>
                {i < 2 && <div className="hidden md:block w-px h-5 bg-black/10 rotate-12" />}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* ── PHILOSOPHY SECTION — INSTITUTIONAL RED ── */}
      <section id="philosophy" className="py-24 md:py-32 bg-[#8B0000]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-serif text-white leading-none">
              Our <span className="relative">Philosophy <motion.svg className="absolute -bottom-4 left-0 w-full h-2" viewBox="0 0 400 20"><path d="M 5 15 Q 200 5 395 15" fill="transparent" stroke="white" strokeWidth="1" strokeOpacity="0.3" /></motion.svg></span>
            </h2>
            <p className="text-xl md:text-3xl font-serif italic text-white/80 leading-relaxed">
              "We are inspired professionals that believe profitability is the result of deep passion, a positive culture, and effective storytelling."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── OUR TEAM (GLASSMIND COLLECTIVE) ── */}
      <section id="team" className="py-48 md:py-72 bg-[#8B0000] border-y border-white/5">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24 md:mb-32">
               <div className="space-y-6">
                  <span className="text-[11px] font-black text-[#BA893D] uppercase tracking-[0.6em]">The Collective</span>
                  <h2 className="text-5xl md:text-8xl font-serif italic text-white leading-none">Our Team.</h2>
               </div>
               <p className="text-white/50 text-lg md:text-xl font-light max-w-md leading-relaxed italic pr-12">
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
                    <div className="relative aspect-[9/16] rounded-full overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] transition-all duration-700 bg-white/5 backdrop-blur-3xl border border-white/10">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          fill 
                          className="object-cover grayscale-[1] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                           <h3 className="text-white text-xl font-serif font-medium mb-1">{member.name}</h3>
                           <p className="text-[#BA893D] text-[9px] font-black uppercase tracking-[0.2em] mb-4">{member.role}</p>
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
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="text-center mb-32"
           >
              <h2 className="text-[#BA893D] text-[10rem] md:text-[14rem] font-handwritten leading-none opacity-20 select-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8">
                 Who we are
              </h2>
              <div className="relative z-10 flex flex-col items-center gap-6">
                 <div className="w-12 h-px bg-[#BA893D]/30" />
                 <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#BA893D]">Institutional Pillars</span>
                 <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tighter">
                   The <span className="italic">Foundation</span>
                 </h3>
              </div>
           </motion.div>
          
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

            {/* VNEXORA ROADMAP — THE EVOLUTION */}
            <motion.div
                id="roadmap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="col-span-1 lg:col-span-2 pt-40 border-t border-white/5 mt-20"
              >
                <div className="text-center mb-32">
                   <div className="flex items-center justify-center gap-4 mb-8">
                      <div className="w-12 h-px bg-[#BA893D]/30" />
                      <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#BA893D]">Our Evolution</span>
                      <div className="w-12 h-px bg-[#BA893D]/30" />
                   </div>
                   <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tight leading-none mb-12">
                     The Vnexora <br/>
                     <span className="italic font-light text-[#BA893D]">Roadmap.</span>
                   </h2>
                </div>

                <div className="relative max-w-5xl mx-auto px-6">
                  {/* Vertical Parallax Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 overflow-hidden">
                    <motion.div 
                      style={{ scaleY: scrollYProgress }}
                      className="w-full h-full bg-gradient-to-b from-[#BA893D] via-[#BA893D] to-transparent origin-top" 
                    />
                  </div>
                  
                  <div className="space-y-40 relative pb-40">
                    <TimelineStep 
                      year="2025" 
                      title="Build. Position. Partner." 
                      points={[
                        "Establish VNEXORA as a trusted hospitality consulting & deal partner",
                        "Execute strategic hotel transactions (Lease / MG / Revenue Share / Sale)",
                        "Drive brand collaborations with leading hotel chains & boutique brands",
                        "Optimize hotel performance through strategy, operations & revenue systems",
                        "Expand across high-growth tourism & spiritual destinations"
                      ]}
                      align="right"
                      icon={<Building2 size={32} />}
                      image="/images/institutional/roadmap-2025.png"
                    />
                    <TimelineStep 
                      year="2026" 
                      title="Transform. Scale. Go Global." 
                      points={[
                        "Deploy MangoH AI platform across partner hotels",
                        "Convert traditional properties into NEX-GEN AI-powered hotels",
                        "Deliver 360° hospitality solutions (Strategy + Tech + Operations + Revenue + Talent)",
                        "Build scalable, data-driven hotel models",
                        "Expand VNEXORA presence to global markets & partnerships"
                      ]}
                      align="left"
                      icon={<Globe size={32} />}
                      image="/images/institutional/roadmap-2026.png"
                    />
                  </div>

                  {/* Our Direction Statement */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 text-center border-t border-white/5 pt-32 pb-20"
                  >
                    <div className="text-[#BA893D]/40 text-[10px] uppercase font-black tracking-[0.6em] mb-8">Our Direction</div>
                    <h3 className="text-4xl md:text-6xl font-serif text-white leading-[1.2] max-w-4xl mx-auto italic font-medium">
                      From advisory to execution—<br/>
                      <span className="text-[#BA893D] opacity-80">from hotels to intelligent hospitality systems.</span>
                    </h3>
                  </motion.div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(" ");

function TimelineStep({ year, title, desc, points, align, icon, image }: { 
  year: string; 
  title: string; 
  desc?: string; 
  points?: string[];
  align: "left" | "right"; 
  icon: React.ReactNode;
  image: string;
}) {
  const isLeft = align === "left";

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-0 py-20">

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
            "bg-[#0A0A0A] border border-white/5 p-12 lg:p-16 rounded-[4rem] transition-all duration-700 group-hover:border-[#BA893D]/30 relative z-10",
            isLeft ? "rounded-tr-none" : "rounded-tl-none"
          )}>
            <div className={cn(
              "w-20 h-20 rounded-3xl bg-[#BA893D]/5 border border-[#BA893D]/10 flex items-center justify-center text-[#BA893D] mb-8 transition-all duration-500 group-hover:bg-[#BA893D] group-hover:text-black",
              isLeft ? "ml-auto" : "mr-auto"
            )}>
              {icon}
            </div>
            <div className={cn(isLeft ? "text-right" : "text-left")}>
              <span className="text-5xl font-serif text-[#BA893D] mb-4 block tracking-tighter">{year}</span>
              <h3 className="text-3xl font-serif text-white mb-6 tracking-tight leading-tight">{title}</h3>
              {desc && <p className="text-white/40 text-xl font-light leading-relaxed">{desc}</p>}
              {points && (
                <ul className={cn(
                  "space-y-4 mt-6",
                  isLeft ? "flex flex-col items-end" : "flex flex-col items-start"
                )}>
                  {points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/point">
                      {isLeft && <span className="text-white/40 text-lg font-light leading-snug text-right">{point}</span>}
                      <div className="w-1.5 h-1.5 rounded-full bg-[#BA893D] mt-2 shrink-0 shadow-[0_0_10px_rgba(186,137,61,0.6)] group-hover/point:scale-125 transition-transform" />
                      {!isLeft && <span className="text-white/40 text-lg font-light leading-snug text-left">{point}</span>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Connection Pulse dot — facing the centre line */}
          <div className={cn(
            "absolute top-1/2 w-8 h-8 rounded-full border border-[#BA893D]/30 flex items-center justify-center -translate-y-1/2 z-20",
            isLeft ? "-right-4" : "-left-4"
          )}>
            <div className="w-3 h-3 rounded-full bg-[#BA893D] shadow-[0_0_20px_rgba(186,137,61,1)]" />
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
            <div className="absolute inset-0 border border-[#BA893D]/10 rounded-[2.5rem]" />
          </div>
        </motion.div>
      </div>

    </div>
  );
}
