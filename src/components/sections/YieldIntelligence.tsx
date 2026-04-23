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
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-6xl md:text-8xl font-sans font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                From <span className="text-[#CFA052]">rooms to revenue.</span> <br />
                Vnexora helps you grow faster.
              </h2>
              <p className="text-black/50 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Vnexora plugs into your PMS, channel manager, and OTAs to optimize pricing, distribution, and demand generation daily. We act like your in-house revenue team, KPI obsessed, and hotel-centric.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 bg-black text-white text-[14px] font-bold rounded-xl hover:bg-[#CFA052] hover:text-black transition-all duration-500 shadow-xl flex items-center gap-4">
                Book a 20-min consult
              </button>
            </div>

            {/* Stats Row with Dividers */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 pt-12">
              {[
                { label: "Avg. RevPAR Uplift", value: "+12–28%" },
                { label: "Direct Mix Growth", value: "+8–20 pts" },
                { label: "Parity Issues Resolved", value: "< 72 hrs" },
                { label: "Response SLA", value: "8 hrs" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-12">
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-medium text-black/40">
                      {stat.label}
                    </div>
                  </div>
                  {i < 3 && <div className="hidden md:block w-px h-16 bg-black/10" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cinematic Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
              <Image 
                src="/images/home/yield_intelligence.png" 
                alt="Institutional Revenue Strategy" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating Decorative Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-48 h-48 bg-[#CFA052]/5 blur-[60px] rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-serif italic text-black/[0.02] pointer-events-none select-none -translate-x-1/2">
        Yield
      </div>
    </section>
  );
};
