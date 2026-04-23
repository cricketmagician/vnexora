"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const YieldIntelligence = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Content */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-sans font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                From <span className="text-[#CFA052]">rooms to revenue.</span> <br />
                Vnexora helps you grow faster.
              </h2>
              <p className="text-[#4A5568] text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                Vnexora plugs into your PMS, channel manager, and OTAs to optimize pricing, distribution, and demand generation daily. We act like your in-house revenue team, KPI obsessed, and hotel-centric.
              </p>
            </div>

            <div>
              <button className="px-10 py-5 bg-black text-white text-base font-bold rounded-full hover:bg-[#CFA052] transition-all duration-300 shadow-xl shadow-black/5">
                Book a 20-min consult
              </button>
            </div>

            {/* Stats Row with Dividers - Exact Siivo Match */}
            <div className="pt-16 flex flex-wrap items-center gap-y-12">
              {[
                { label: "Avg. RevPAR Uplift", value: "+12–28%" },
                { label: "Direct Mix Growth", value: "+8–20 pts" },
                { label: "Parity Issues Resolved", value: "< 72 hrs" },
                { label: "Response SLA", value: "8 hrs" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center">
                  <div className="pr-8 lg:pr-12">
                    <div className="text-xl md:text-2xl font-sans font-normal text-[#1A1A1A] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[9px] font-medium text-[#718096] uppercase tracking-wider leading-tight max-w-[100px]">
                      {stat.label}
                    </div>
                  </div>
                  {/* Vertical divider visible on desktop */}
                  {i < 3 && <div className="hidden md:block w-px h-10 bg-gray-200 mr-8 lg:mr-12" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cinematic Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[1/1.1] rounded-[4rem] overflow-hidden shadow-2xl shadow-black/5">
              <Image 
                src="/images/home/yield_intelligence.png" 
                alt="Institutional Revenue Strategy" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
