"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck, Users, TrendingUp, Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import StickySayHello from "@/components/ui/StickySayHello";

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-mustard animate-pulse" />
    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
      {children}
    </span>
  </motion.div>
);

export default function PhilosophyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cornerstones = [
    { title: "Institutional Excellence", icon: Award, id: "quality" },
    { title: "Unwavering Integrity", icon: ShieldCheck, id: "integrity" },
    { title: "Curated Communities", icon: Users, id: "community" },
    { title: "Yield Mastery", icon: TrendingUp, id: "profitability" },
    { title: "The Art of Luxury", icon: Sparkles, id: "luxury" },
  ];

  const pillars = [
    {
      id: "quality",
      title: "Institutional Excellence",
      subtitle: "Ingenuity. Resourcefulness. Quality.",
      body: "Our management philosophy is characterized by clinical precision and creative ingenuity. We manage every project in direct partnership with owners to maximize every dollar invested, yielding top-tier hospitality assets that outperform their markets through rigorous quality control.",
      image: "/images/about-us/philosophy.png",
      align: "left"
    },
    {
      id: "integrity",
      title: "Unwavering Integrity",
      subtitle: "Transparency as a Hallmark.",
      body: "We don't just talk a good game. At Vnexora, we hold ourselves to the highest global standards of integrity. We insist on absolute transparency in all our partnerships, ensuring that trust is not just earned, but maintained as our most valuable institutional asset.",
      image: "/images/about/leadership-hero.jpg",
      align: "right"
    },
    {
      id: "community",
      title: "Curated Communities",
      subtitle: "Serving the People and the Destination.",
      body: "Hospitality is the business of serving people, and that extends to the communities that host us. Our mission is to be a force for positive impact, partnering with local stakeholders and organizations that provide essential value and sustainable growth to the destination.",
      image: "/images/about-us/team.png",
      align: "left"
    },
    {
      id: "profitability",
      title: "Yield Mastery",
      subtitle: "Accountability and Innovation.",
      body: "Vnexora's investors and partners operate as true stewards of the asset. We replace guesswork with data-driven yield optimization, focusing on efficient operations and innovative strategies to enhance financial profits while maintaining the soul of the property.",
      image: "/images/institutional/roadmap-2025.png",
      align: "right"
    },
    {
      id: "luxury",
      title: "The Art of Luxury",
      subtitle: "Quiet Excellence.",
      body: "True luxury is not loud. It is felt in the hushed details—the weight of a door, the warmth of a gesture, the discretion of service. We believe that profitability is the result of deep passion and effective storytelling through these silent but powerful moments.",
      image: "/images/about/img90.jpeg",
      align: "left"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] selection:bg-mustard selection:text-white relative overflow-hidden font-serif">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/narrative/beach_vibe.png" 
            alt="Philosophy Hero" 
            fill 
            className="object-cover brightness-[0.4] contrast-[1.1]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <SectionTag>Vnexora Doctrine</SectionTag>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-[7rem] font-serif text-white mt-10 tracking-tight leading-[0.9]"
          >
            Our <br />
            <span className="italic text-mustard">Philosophy.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-white/40 text-lg md:text-2xl font-light max-w-2xl mx-auto mt-12 italic"
          >
            A commitment to data-driven intelligence, <br className="hidden md:block" />
            institutional rigor, and the soul of quiet luxury.
          </motion.p>
        </div>
      </section>

      {/* 2. CORNERSTONES GRID */}
      <section id="cornerstones" className="py-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">Institutional Pillars</h2>
            <div className="h-px w-20 bg-mustard/40 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cornerstones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(`pillar-${item.id}`);
                  if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                <div className="bg-[#F7F7F7] p-8 aspect-[16/11] transition-all duration-700 group flex flex-col items-start justify-between shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden rounded-none">
                  <div className="absolute inset-0 bg-mustard translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0" />
                  
                  <div className="relative z-10 text-mustard group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1">
                    <item.icon size={28} strokeWidth={2.5} className="transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xl md:text-2xl font-sans font-black uppercase tracking-tight text-[#111] group-hover:text-white transition-colors duration-500 leading-[1.05] max-w-[180px]">
                      {item.title}
                    </h3>
                    <div className="w-0 h-[2px] bg-white transition-all duration-500 delay-100 group-hover:w-full opacity-50" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED PILLARS */}
      <div className="pb-48 space-y-40">
        {pillars.map((pillar, i) => (
          <section key={pillar.id} id={`pillar-${pillar.id}`} className="container mx-auto px-6 md:px-12 lg:px-24 scroll-mt-32">
            <div className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
              pillar.align === "right" && "lg:grid-flow-dense"
            )}>
              <motion.div
                initial={{ opacity: 0, x: pillar.align === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className={cn("relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl", pillar.align === "right" && "lg:col-start-2")}
              >
                <Image src={pillar.image} alt={pillar.title} fill className="object-cover transition-transform duration-[6s] hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="text-mustard text-[10px] font-black uppercase tracking-[0.5em]">{pillar.subtitle}</div>
                  <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">{pillar.title}</h2>
                </div>
                <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
                  {pillar.body}
                </p>
                <div className="h-px w-20 bg-mustard/30" />
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* 4. CALL TO ACTION */}
      <section className="py-32 bg-white text-black relative z-10 rounded-t-[4rem]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-serif tracking-tight mb-12">
            Experience our <br />
            <span className="italic text-mustard">Doctrine in Action.</span>
          </h2>
          <Link 
            href="/career"
            className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:bg-mustard hover:text-black transition-all duration-500 group"
          >
            Join Our Team
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      <StickySayHello />
    </main>
  );
}
