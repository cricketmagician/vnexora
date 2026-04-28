"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck, Users, TrendingUp, Sparkles, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import StickySayHello from "@/components/ui/StickySayHello";

export default function PhilosophyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const cornerstones = [
    { title: "Delivering Quality", icon: Award, id: "quality" },
    { title: "Living Integrity", icon: ShieldCheck, id: "integrity" },
    { title: "Supporting Community", icon: Users, id: "community" },
    { title: "Growing Profitability", icon: TrendingUp, id: "profitability" },
    { title: "Having Fun", icon: Sparkles, id: "fun" },
  ];

  const pillars = [
    {
      id: "quality",
      title: "Quality",
      subtitle: "Institutional Excellence",
      body: "Our management philosophy is characterized by clinical precision and creative ingenuity. We manage every project in direct partnership with owners to maximize every dollar invested, yielding top-tier hospitality assets that outperform their markets through rigorous quality control.",
      image: "/images/about-us/philosophy.png",
      align: "left"
    },
    {
      id: "integrity",
      title: "Integrity",
      subtitle: "Unwavering Trust",
      body: "We don't just talk a good game. At Vnexora, we hold ourselves to the highest global standards of integrity. We insist on absolute transparency in all our partnerships, ensuring that trust is not just earned, but maintained as our most valuable institutional asset.",
      image: "/images/about/leadership-hero.jpg",
      align: "right"
    },
    {
      id: "community",
      title: "Community",
      subtitle: "Curated Impact",
      body: "Hospitality is the business of serving people, and that extends to the communities that host us. Our mission is to be a force for positive impact, partnering with local stakeholders and organizations that provide essential value and sustainable growth to the destination.",
      image: "/images/about-us/team.png",
      align: "left"
    },
    {
      id: "profitability",
      title: "Profitability",
      subtitle: "Yield Mastery",
      body: "Vnexora's investors and partners operate as true stewards of the asset. We replace guesswork with data-driven yield optimization, focusing on efficient operations and innovative strategies to enhance financial profits while maintaining the soul of the property.",
      image: "/images/institutional/roadmap-2025.png",
      align: "right"
    },
    {
      id: "fun",
      title: "Fun",
      subtitle: "The Soul of Service",
      body: "Our employees are our biggest asset, and in order to operate at the top, we have to attract and retain the top talent in the industry. We do that simply by making work fun! We provide a rewarding environment where every voice makes a meaningful impact.",
      image: "/images/about/img90.jpeg",
      align: "left"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white selection:bg-mustard selection:text-white relative overflow-hidden font-sans">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/careers/team_lobby.png" 
            alt="Philosophy Hero" 
            fill 
            className="object-cover brightness-[0.7] contrast-[1.05]" 
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8rem] font-sans font-black text-white tracking-tighter uppercase leading-none"
          >
            Core Values
          </motion.h1>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-sans font-black text-[#111] uppercase tracking-tighter leading-none">
                Cornerstones
              </h2>
              <p className="text-mustard/60 text-xl md:text-2xl font-light italic leading-tight max-w-md">
                A Culture Built on Quality, Integrity, Community, Profitability and Fun
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[#333] text-lg md:text-xl font-light leading-relaxed font-serif">
                Excellence in operational execution is a promise we confidently make, knowing that our cornerstones form the solid foundation of every relationship, every project, every procurement. As a private company with deep experience in operating premium branded hotels in all economic cycles, Vnexora has been able to quickly adapt to changing business environments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORNERSTONES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                <div className="bg-[#F8F8F8] p-10 aspect-square transition-all duration-700 group flex flex-col items-start justify-between shadow-sm hover:shadow-2xl relative overflow-hidden rounded-none border border-black/[0.03]">
                  {/* Premium Slide-up Fill */}
                  <div className="absolute inset-0 bg-mustard translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0" />
                  
                  <div className="relative z-10 text-mustard group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1">
                    <item.icon size={32} strokeWidth={2} className="transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-sans font-black uppercase tracking-tight text-[#111] group-hover:text-white transition-colors duration-500 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAILED PILLARS - LIGHT THEME */}
      <div className="pb-48 space-y-32 bg-white">
        {pillars.map((pillar, i) => (
          <section key={pillar.id} id={`pillar-${pillar.id}`} className="container mx-auto px-6 md:px-12 lg:px-24 scroll-mt-32">
            <div className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center",
              pillar.align === "right" && "lg:grid-flow-dense"
            )}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className={cn("relative aspect-[4/3] overflow-hidden shadow-xl", pillar.align === "right" && "lg:col-start-2")}
              >
                <Image src={pillar.image} alt={pillar.title} fill className="object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-7xl font-sans font-black text-[#111] uppercase tracking-tighter leading-none">
                    {pillar.title}
                  </h2>
                </div>
                <p className="text-[#444] text-lg md:text-xl font-light leading-relaxed font-serif">
                  {pillar.body}
                </p>
                <div className="h-1 w-20 bg-mustard" />
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* 5. BOTTOM NAV / FOOTER TEASER */}
      <section className="border-t border-black/5 bg-[#F9F9F9]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[50vh]">
          <Link href="/about-us" className="group relative overflow-hidden flex items-center justify-center border-r border-black/5">
            <Image src="/images/about-us/history.png" alt="Our Story" fill className="object-cover brightness-[0.5] transition-transform duration-[2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-mustard/20 transition-colors" />
            <span className="relative z-10 text-4xl font-sans font-black text-white uppercase tracking-tighter group-hover:scale-110 transition-transform">Our Story</span>
          </Link>
          <Link href="/contact" className="group relative overflow-hidden flex items-center justify-center">
            <Image src="/images/careers/team_lobby.png" alt="Contact" fill className="object-cover brightness-[0.5] transition-transform duration-[2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-mustard/20 transition-colors" />
            <span className="relative z-10 text-4xl font-sans font-black text-white uppercase tracking-tighter group-hover:scale-110 transition-transform">Global Initiatives</span>
          </Link>
        </div>
      </section>

      <StickySayHello />
    </main>
  );
}
