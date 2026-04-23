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
              <Tag>Asset Synchronization</Tag>
              <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-[1.05] tracking-tight">
                From <span className="italic text-[#CFA052]">Assets</span> to Authority. <br />
                Vnexora Drives Yield.
              </h2>
              <p className="text-black/50 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                We integrate institutional governance with high-frequency revenue intelligence. 
                Vnexora doesn't just manage hotels; we synchronize your entire asset ecosystem 
                for maximum capital efficiency and market dominance.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 bg-black text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-[#CFA052] hover:text-black transition-all duration-500 shadow-2xl flex items-center gap-4">
                Schedule Strategy Call <ArrowRight size={16} />
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-black/5">
              {[
                { label: "RevPAR Yield", value: 30, suffix: "%+", icon: BarChart3 },
                { label: "Direct Mix", value: 12, suffix: "%+", icon: Globe },
                { label: "Global Presence", value: 56, suffix: "+", icon: Zap },
                { label: "Response Mandate", value: 4, suffix: "h", icon: Clock },
              ].map((stat, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-3xl font-serif text-[#1A1A1A]">
                    <AnimatedNumber n={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/30 leading-tight">
                    {stat.label}
                  </div>
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
