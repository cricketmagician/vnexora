"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart3, LineChart, PieChart, Target, TrendingUp, Users } from "lucide-react";

const tabs = [
  { id: "profit", label: "Boost Profitability" },
  { id: "decisions", label: "Improve Business Decisions" },
  { id: "competitors", label: "Stay Ahead Of Competitors" },
  { id: "costs", label: "Control Costs" },
];

const content = {
  profit: {
    title: "BOOST PROFITABILITY",
    heading: "Maximize your margins with strategic pricing and inventory optimization.",
    cards: [
      {
        type: "primary",
        title: "ROOM PRICING",
        desc: "Optimize pricing strategies quickly and effectively by segment, season, and competitor movement. Stay competitive and maximize RevPAR.",
        icon: "/images/sections/hotel-icons/room-pricing.png",
        bgColor: "bg-[#0A0A0A]",
        textColor: "text-white",
      },
      {
        type: "secondary",
        title: "PACKAGES & ADD-ONS",
        desc: "Boost profits and guest satisfaction with data-driven offers. Smart packages that convert more bookings fast.",
        icon: "/images/sections/hotel-icons/packages.png",
        bgColor: "bg-white",
        textColor: "text-black",
      },
      {
        type: "small",
        title: "FINANCIAL INSIGHTS",
        desc: "Gain clarity into unit economics with powerful data. Turn numbers into smarter profit decisions.",
        icon: "/images/sections/hotel-icons/metric.png",
        bgColor: "bg-white",
        textColor: "text-black",
      },
      {
        type: "metric",
        title: "IMPACT SNAPSHOT",
        value: "4%",
        desc: "Cost-saving opportunity of top-line sales and operational efficiency.",
        icon: "/images/sections/hotel-icons/insights.png",
        bgColor: "bg-[#0A0A0A]",
        textColor: "text-white",
      }
    ]
  },
  decisions: {
    title: "IMPROVE BUSINESS DECISIONS",
    heading: "Access comprehensive brand and industry insights to drive informed decision-making.",
    cards: [
      {
        type: "primary",
        title: "REVENUE INSIGHTS",
        desc: "Understand RevPAR, ADR, and channel mix down to room type and stay date. Deep dive into your performance metrics.",
        icon: "/images/sections/hotel-icons/room-pricing.png",
        bgColor: "bg-[#0A0A0A]",
        textColor: "text-white",
      },
      {
        type: "secondary",
        title: "COMPETITOR RATE INTELLIGENCE",
        desc: "Real-time market pricing and benchmarking. Never miss a market shift again.",
        icon: "/images/sections/hotel-icons/packages.png",
        bgColor: "bg-white",
        textColor: "text-black",
      },
      {
        type: "small",
        title: "PRICE MATCH",
        desc: "Optimize pricing fast and beat the market. Automatic adjustments to keep you ahead.",
        icon: "/images/sections/hotel-icons/metric.png",
        bgColor: "bg-white",
        textColor: "text-black",
      },
      {
        type: "metric",
        title: "TRUSTED BY",
        value: "150+",
        desc: "Hotels worldwide driving growth through smarter data-driven decisions.",
        icon: "/images/sections/hotel-icons/insights.png",
        bgColor: "bg-[#0A0A0A]",
        textColor: "text-white",
      }
    ]
  },
  competitors: {
    title: "STAY AHEAD OF COMPETITORS",
    heading: "Track competitor hotels and guest preferences to shape profitable pricing strategies.",
    cards: [
      {
        type: "primary",
        title: "COMPETITOR PRICING INTELLIGENCE",
        desc: "Measure room rate evolution across thousands of hotels in your market segment.",
        icon: "/images/sections/hotel-icons/room-pricing.png",
        bgColor: "bg-[#0A0A0A]",
        textColor: "text-white",
      },
      {
        type: "secondary",
        title: "GUEST INSIGHTS",
        desc: "Discover what guests value most in rooms, packages, and promotions.",
        icon: "/images/sections/hotel-icons/packages.png",
        bgColor: "bg-white",
        textColor: "text-black",
      },
      {
        type: "small",
        title: "PRICE MATCH",
        desc: "Optimize hotel pricing strategies quickly and effectively.",
        icon: "/images/sections/hotel-icons/metric.png",
        bgColor: "bg-white",
        textColor: "text-black",
      },
      {
        type: "metric",
        title: "SERVED",
        value: "5+",
        desc: "Countries (United States, Costa Rica, Italy...)",
        icon: "/images/sections/hotel-icons/insights.png",
        bgColor: "bg-[#0A0A0A]",
        textColor: "text-white",
      }
    ]
  },
  costs: {
    title: "CONTROL COSTS",
    heading: "Improve your bottom line with proven hotel revenue & cost solutions.",
    cards: [
      {
        type: "primary",
        title: "FINANCIAL INSIGHTS",
        desc: "Gain clarity into unit economics with powerful data-driven optimization.",
        icon: "/images/sections/hotel-icons/room-pricing.png",
        bgColor: "bg-[#0A0A0A]",
        textColor: "text-white",
      },
      {
        type: "secondary",
        title: "PACKAGES & ADD-ONS",
        desc: "Boost profits and guest satisfaction with data-driven optimization.",
        icon: "/images/sections/hotel-icons/packages.png",
        bgColor: "bg-white",
        textColor: "text-black",
      },
      {
        type: "small",
        title: "PRICE MATCH",
        desc: "Optimize room, package, and pricing fast.",
        icon: "/images/sections/hotel-icons/metric.png",
        bgColor: "bg-white",
        textColor: "text-black",
      },
      {
        type: "metric",
        title: "TRUSTED BY",
        value: "150+",
        desc: "Leading hotels optimizing costs daily",
        icon: "/images/sections/hotel-icons/insights.png",
        bgColor: "bg-[#0A0A0A]",
        textColor: "text-white",
      }
    ]
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
  const [activeTab, setActiveTab] = useState("profit");

  const activeData = content[activeTab as keyof typeof content];

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Image & Orbs */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/services/luxury_hotel_interior_hero.png" 
          alt="Cinematic Hospitality Background" 
          className="w-full h-full object-cover opacity-60 brightness-[0.5] scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-80" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-[5px] max-w-7xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-12 tracking-tight">
            VNEXORA Smart Hotel Solutions <br />
            <span className="italic font-light text-[#D4AF37]">Grow Bookings, Revenue & Loyalty</span>
          </h2>

          {/* Tabs */}
          <div className="inline-flex flex-wrap justify-center p-1.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
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
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center min-h-[600px]">
          {/* Left Side: Dynamic Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em]">
                  {activeData.title}
                </span>
                <h3 className="text-3xl md:text-5xl font-sans font-bold text-white leading-tight">
                  {activeData.heading}
                </h3>
              </div>
              <button className="px-8 py-4 bg-[#D4AF37] text-black text-sm font-bold rounded-full hover:bg-white transition-all duration-300">
                Book a 20-min consult
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Right Side: Bento Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 h-full"
            >
              {activeData.cards.map((card, idx) => {
                if (card.type === "primary") {
                  return (
                    <div key={idx} className={`col-span-2 md:col-span-1 row-span-1 p-0 rounded-[2.5rem] ${card.bgColor} ${card.textColor} flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:scale-[1.02] border border-white/5 overflow-hidden`}>
                      <div className="w-full h-72 md:h-80 relative flex items-center justify-center bg-transparent p-4">
                        <img src={card.icon as string} alt={card.title} className="w-full h-full object-contain brightness-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-110 transition-transform duration-700 group-hover:scale-125" />
                      </div>
                      <div className="p-8 pt-0">
                        <span className="text-[10px] font-black uppercase tracking-wider opacity-60 block mb-2">{card.title}</span>
                        <p className="text-base md:text-lg font-bold leading-snug">{card.desc}</p>
                      </div>
                    </div>
                  );
                }
                if (card.type === "secondary") {
                  return (
                    <div key={idx} className={`col-span-2 md:col-span-1 p-0 rounded-[2.5rem] ${card.bgColor} ${card.textColor} flex flex-col justify-between border border-white/5 transition-all duration-500 hover:scale-[1.02] overflow-hidden`}>
                      <div className="w-full h-64 md:h-72 relative flex items-center justify-center bg-transparent p-4">
                        <img src={card.icon as string} alt={card.title} className="w-full h-full object-contain brightness-110 drop-shadow-[0_15px_35px_rgba(0,0,0,0.15)] scale-110 transition-transform duration-700 group-hover:scale-125" />
                      </div>
                      <div className="p-8 pt-0">
                        <span className="text-[10px] font-black uppercase tracking-wider opacity-40 block mb-2">{card.title}</span>
                        <p className="text-base md:text-lg font-bold leading-snug">{card.desc}</p>
                      </div>
                    </div>
                  );
                }
                if (card.type === "small") {
                  return (
                    <div key={idx} className={`p-0 rounded-[2.5rem] ${card.bgColor} ${card.textColor} border border-white/5 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] overflow-hidden`}>
                      <div className="w-full h-64 relative flex items-center justify-center bg-transparent p-4">
                        <img src={card.icon as string} alt={card.title} className="w-full h-full object-contain brightness-110 drop-shadow-[0_15px_35px_rgba(0,0,0,0.15)] scale-110 transition-transform duration-700 group-hover:scale-125" />
                      </div>
                      <div className="p-8 pt-0">
                        <span className="text-[10px] font-black uppercase tracking-wider opacity-40 block mb-2">{card.title}</span>
                        <p className="text-base md:text-lg font-bold leading-snug">{card.desc}</p>
                      </div>
                    </div>
                  );
                }
                if (card.type === "metric") {
                  return (
                    <div key={idx} className={`p-0 rounded-[2.5rem] ${card.bgColor} ${card.textColor} flex flex-col justify-between text-center transition-all duration-500 hover:scale-[1.02] border border-white/5 overflow-hidden`}>
                      <div className="w-full h-72 md:h-80 relative flex items-center justify-center bg-transparent p-4">
                        <img src={card.icon as string} alt={card.title} className="w-full h-full object-contain brightness-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-110 transition-transform duration-700 group-hover:scale-125" />
                      </div>
                      <div className="p-8 pt-0 pb-12">
                        <span className="text-[10px] font-black uppercase tracking-wider opacity-40 block mb-2">{card.title}</span>
                        <p className="text-sm md:text-base font-bold opacity-80 leading-tight">{card.desc}</p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
