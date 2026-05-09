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
    <span ref={ref} className="text-3xl md:text-4xl font-serif text-[#5B0F2D] leading-none">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export const WelcomeIntro = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/hotels_and_resorts.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70"
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-[#050505]/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-10"
          >
            {/* Label */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#E3B448]" />
              <span className="text-[12px] font-bold tracking-[0.5em] text-[#E3B448] uppercase">Who We Are</span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-tight leading-[1.1] uppercase">
                We Run <br />
                <span className="italic opacity-90 text-[#E3B448]">Hotels.</span> <br />
                You Earn.
              </h2>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-6 text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
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
                className="px-12 py-6 bg-[#E3B448] text-black text-[12px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all duration-500 shadow-[0_20px_50px_rgba(227,180,72,0.3)] hover:scale-105 active:scale-95"
              >
                View Brochure
              </a>
              <a
                href="/about-us"
                className="text-[12px] uppercase tracking-[0.4em] font-bold text-white hover:text-[#E3B448] transition-colors duration-300 underline underline-offset-8"
              >
                Our Story →
              </a>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-t border-white/10 pt-16 mt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
                  className="flex flex-col"
                >
                  <div className="text-3xl md:text-4xl font-serif text-[#E3B448] leading-none">
                    <Counter value={s.val} suffix={s.suffix} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mt-3">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating badge for full background version */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-12 right-12 hidden lg:block bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-right"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E3B448] mb-2">Portfolio Scale</p>
        <p className="text-3xl font-serif font-light leading-none text-white">Full-Spectrum</p>
        <p className="text-[11px] text-white/50 tracking-[0.2em] uppercase mt-2">Global Authority</p>
      </motion.div>
    </section>
  );
};
