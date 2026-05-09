"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const stats = [
  { val: 550, suffix: "+", label: "Keys Managed" },
  { val: 15, suffix: "+", label: "Hotel Assets" },
  { val: 56, suffix: "+", label: "Global Brands" },
  { val: 18, suffix: "+", label: "Years Of Authority" },
  { val: 27, suffix: "+", label: "MOU Signed" },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="text-3xl md:text-5xl font-serif text-[#E3B448] leading-none block mb-1">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export const WelcomeIntro = () => {
  return (
    <section className="relative bg-[#050505] py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
          
          {/* LEFT — Text Content (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:w-[40%] flex flex-col gap-10 lg:pr-12"
          >
            {/* Label */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#E3B448]" />
              <span className="text-[12px] font-bold tracking-[0.5em] text-[#E3B448] uppercase">Who We Are</span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white tracking-tight leading-[1.1] uppercase">
                We Run <br />
                <span className="italic opacity-90 text-[#E3B448]">Hotels.</span> <br />
                You Earn.
              </h2>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-6 text-white/60 text-base md:text-lg font-light leading-relaxed">
              <p>
                Vnexora is a leading third-party hotel management company, operating full-spectrum hospitality assets — from luxury resorts and city business hotels to upscale serviced apartments and lifestyle venues.
              </p>
              <p>
                As an end-to-end partner, we take complete operational ownership, driving revenue growth, brand performance, and asset value on behalf of owners and investors across India and beyond.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-8 pt-4 flex-wrap">
              <a
                href="/downloads/vnexora-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#E3B448] text-black text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all duration-500 shadow-[0_20px_50px_rgba(227,180,72,0.2)] hover:scale-105 active:scale-95"
              >
                View Brochure
              </a>
              <a
                href="/about-us"
                className="text-[11px] uppercase tracking-[0.4em] font-bold text-white hover:text-[#E3B448] transition-colors duration-300 underline underline-offset-8"
              >
                Our Story →
              </a>
            </div>

            {/* Highlighted Stat row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-12 mt-4">
              {stats.slice(0, 3).map((s, i) => (
                <div key={s.label} className="flex flex-col p-6 bg-white/[0.03] border border-white/5 backdrop-blur-sm group hover:bg-[#E3B448]/10 hover:border-[#E3B448]/30 transition-all duration-500">
                  <Counter value={s.val} suffix={s.suffix} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-white/80 transition-colors">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Video (60%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:w-[60%] relative"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-black">
              <video
                src="/videos/hotels_and_resorts.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
              />
              {/* Dark edge vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#E3B448] p-8 hidden md:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black mb-1">Portfolio Scale</p>
                <p className="text-2xl font-serif font-light leading-none text-black italic">Full-Spectrum</p>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-[#E3B448]/20 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
