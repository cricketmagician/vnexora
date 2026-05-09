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
    <section className="relative bg-[#FAF9F6] py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-0">
          
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
              <div className="w-12 h-[1px] bg-[#A67C52]" />
              <span className="text-[12px] font-bold tracking-[0.5em] text-[#A67C52] uppercase">Who We Are</span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-[#5B0F2D] tracking-tight leading-[1.1] uppercase">
                We Run <br />
                <span className="italic opacity-90 text-[#A67C52]">Hotels.</span> <br />
                You Earn.
              </h2>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-6 text-[#5B0F2D]/70 text-base md:text-lg font-light leading-relaxed">
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
                className="px-10 py-5 bg-[#5B0F2D] text-[#FAF9F6] text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#A67C52] hover:text-black transition-all duration-500 shadow-xl hover:scale-105 active:scale-95"
              >
                View Brochure
              </a>
              <a
                href="/about-us"
                className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#5B0F2D]/60 hover:text-[#5B0F2D] transition-colors duration-300 underline underline-offset-8"
              >
                Our Story →
              </a>
            </div>

            {/* Highlighted Stat row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-[#5B0F2D]/10 pt-12 mt-4">
              {stats.slice(0, 3).map((s, i) => (
                <div key={s.label} className="flex flex-col p-6 bg-[#5B0F2D]/[0.02] border border-[#5B0F2D]/5 backdrop-blur-sm group hover:bg-[#A67C52]/10 hover:border-[#A67C52]/30 transition-all duration-500">
                  <Counter value={s.val} suffix={s.suffix} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#5B0F2D]/40 group-hover:text-[#5B0F2D]/80 transition-colors">{s.label}</span>
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
            className="lg:w-[60%] relative lg:mt-10"
          >
            <div className="relative aspect-[1/1.1] w-full overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] bg-black">
              <video
                src="/videos/hotels_and_resorts.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
              />
              {/* Subtle overlay for light theme */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-[#A67C52]/30 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
