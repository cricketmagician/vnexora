"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart3, LineChart, PieChart, Target, TrendingUp, Users } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import Link from "next/link";
import Image from "next/image";
import { Counter } from "@/components/ui/Counter";

const tabs = [
  { id: "profit", label: "Boost Profitability" },
  { id: "decisions", label: "Improve Business Decisions" },
  { id: "competitors", label: "Stay Ahead Of Competitors" },
  { id: "costs", label: "Control Costs" },
];

const content = {
  profit: {
    title: "Strongest Recommendation",
    heading: "Boost Profitability",
    subtitle: "Hospitality Intelligence That Drives Revenue.",
    description: "We help hotels maximize revenue, reduce operational inefficiencies, improve guest satisfaction, and build stronger hospitality brands through strategic consulting and intelligent hospitality solutions......",
  },
  decisions: {
    title: "Strategic Advantage",
    heading: "Improve Business Decisions",
    subtitle: "Smarter Insights. Stronger Hospitality Growth.",
    description: "VNEXORA empowers hospitality businesses with data-driven strategies, operational intelligence, and market-focused insights to make smarter decisions, improve performance, and drive long-term profitability.....",
  },
  competitors: {
    title: "Market Leadership",
    heading: "Stay Ahead Of Competitors",
    subtitle: "Future-Ready Hospitality Strategies.",
    description: "We help hotels and hospitality businesses strengthen their competitive edge through strategic brand positioning, operational excellence, AI-driven hospitality solutions, and revenue optimization designed for long-term growth in an evolving hospitality landscape....",
  },
  costs: {
    title: "CONTROL COSTS",
    heading: "Improve your bottom line with proven hotel revenue & cost solutions.",
    subtitle: "Operational Efficiency & Cost Containment.",
    description: "Identify cost leakages, streamline operational workflows, and implement intelligent resource allocation to significantly improve GOPPAR and keep margins high.",
  }
};

function Zap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export const HotelSolutions = () => {
  const { openConsultation } = useConsultation();
  const [activeTab, setActiveTab] = useState("profit");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1.15, 1.25]);

  const activeData = content[activeTab as keyof typeof content];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background Image & Orbs */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/services/luxury_hotel_interior_hero.png" 
          alt="Cinematic Hospitality Background" 
          className="w-full h-full object-cover opacity-80 brightness-[0.7] scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d] opacity-60" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E3B448]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-[5px] max-w-7xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-12 tracking-tight">
            VNEXORA Smart Hotel Solutions <br />
            <span className="italic font-light text-[#E3B448]">Grow Bookings, Revenue & Loyalty</span>
          </h2>

          {/* Tabs */}
          <div className="inline-flex flex-wrap justify-center p-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/15">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 relative ${
                  activeTab === tab.id ? "text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch min-h-[500px]">
          {/* Left Side: Dynamic Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[#E3B448] text-xs font-black uppercase tracking-[0.3em]">
                    {activeData.title}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                    {activeData.heading}
                  </h3>
                </div>
                {activeData.subtitle && (
                  <p className="text-lg md:text-xl font-medium text-white border-l-2 border-[#E3B448] pl-4 italic">
                    {activeData.subtitle}
                  </p>
                )}
                {activeData.description && (
                  <p className="text-base md:text-lg font-light text-white/80 leading-relaxed max-w-xl">
                    {activeData.description}
                  </p>
                )}
              </div>
              <div>
                <button 
                  onClick={openConsultation}
                  className="inline-block px-8 py-4 bg-[#E3B448] text-black text-sm font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  Book a 20-min consult
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Side: Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[360px] aspect-[3/4] mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 self-center"
            >
              <motion.div 
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-0 w-full h-full"
              >
                <Image 
                  src={
                    activeTab === "profit" ? "/images/sections/j1.jpeg" :
                    activeTab === "decisions" ? "/images/sections/j2.jpeg" :
                    activeTab === "competitors" ? "/images/sections/j3.jpeg" :
                    "/images/sections/j4.jpeg"
                  } 
                  alt={activeData.title} 
                  fill
                  className="object-cover opacity-100 transition-all duration-300"
                />
              </motion.div>
              {/* Subtle glass border overlay */}
              <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Performance Metrics Row */}
        <div className="mt-20 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Revenue", value: 25, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/revenue.png" },
            { label: "ADR", value: 18, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/adr.png" },
            { label: "Occupancy", value: 30, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/occupancy.png" },
            { label: "Direct Bookings", value: 40, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/direct-bookings.png" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center justify-center space-x-6">
              <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                <Image 
                  src={stat.icon} 
                  alt={stat.label} 
                  fill 
                  className="object-contain brightness-110 drop-shadow-2xl scale-110"
                />
              </div>
              <div className={i < 3 ? 'pr-8 lg:pr-12 border-r border-white/10 hidden md:block' : ''}>
                <div className="text-xl md:text-2xl font-sans font-semibold text-white mb-0.5">
                  <Counter 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                    delay={i * 0.2}
                  />
                </div>
                <div className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] leading-tight">
                  {stat.label}
                </div>
              </div>
              {/* Mobile version without border */}
              <div className="md:hidden">
                <div className="text-xl font-sans font-semibold text-white mb-0.5">
                  <Counter 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                    delay={i * 0.2}
                  />
                </div>
                <div className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
