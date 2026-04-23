"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BarChart3, Globe, Zap, Clock } from "lucide-react";

// ── tiny helpers ──────────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-4">
      <div className="w-10 h-px bg-[#CFA052]" />
      <span className="text-[10px] font-black uppercase tracking-[0.7em] text-[#CFA052]">
        {children}
      </span>
      <div className="w-10 h-px bg-[#CFA052]" />
    </div>
  );
}

function AnimatedNumber({ n, suffix = "" }: { n: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let cur = 0;
    const increment = n / (2200 / 16);
    const interval = setInterval(() => {
      cur += increment;
      if (cur >= n) { setDisplay(n); clearInterval(interval); }
      else setDisplay(Math.floor(cur));
    }, 16);
    return () => clearInterval(interval);
  }, [isInView, n]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export const YieldIntelligence = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
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
              <button className="px-10 py-5 bg-black text-white text-base font-bold rounded-full hover:bg-[#CFA052] transition-all duration-300 shadow-xl shadow-black/10">
                Book a 20-min consult
              </button>
            </div>

            {/* Stats Row with Dividers */}
            <div className="flex flex-wrap items-center gap-y-10 pt-12">
              {[
                { label: "Avg. RevPAR Uplift", value: "+12–28%" },
                { label: "Direct Mix Growth", value: "+8–20 pts" },
                { label: "Parity Issues Resolved", value: "< 72 hrs" },
                { label: "Response SLA", value: "8 hrs" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center">
                  <div className="pr-10 lg:pr-14">
                    <div className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-[11px] font-bold text-[#718096] uppercase tracking-[0.2em] leading-tight">
                      {stat.label}
                    </div>
                  </div>
                  {i < 3 && <div className="hidden md:block w-px h-16 bg-gray-200 mr-10 lg:mr-14" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cinematic Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[1/1.1] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.08)]">
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
