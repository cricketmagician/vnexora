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

  const activeData = content[activeTab as keyof typeof content];

  return (
    <section className="py-24 md:py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background Video & Orbs */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-100 brightness-[0.7]"
        >
          <source src="/videos/jio.mp4" type="video/mp4" />
        </video>
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
        <div className="max-w-3xl mx-auto min-h-[400px]">
          {/* Left Side: Dynamic Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
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
                  <p className="text-base md:text-lg font-light text-white/80 leading-relaxed">
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
        </div>

        {/* Performance Metrics Row */}
        <div className="mt-20 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Revenue", value: 25, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/revenue.png" },
            { label: "ADR", value: 18, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/adr.png" },
            { label: "Occupancy", value: 30, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/occupancy.png" },
            { label: "Direct Bookings", value: 40, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/direct-bookings.png" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center justify-center space-x-6 opacity-0 hover:opacity-100 transition-all duration-500 ease-out transform hover:-translate-y-1 cursor-default">
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
