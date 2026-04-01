"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const stats = [
  { val: "550+", label: "Keys Managed" },
  { val: "15+", label: "Hotel Assets" },
  { val: "56", label: "Global Brands" },
  { val: "18+", label: "Years of Authority" },
];

export const WelcomeIntro = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-40 overflow-hidden relative">
      {/* Ambient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A67C52]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#A67C52]" />
              <span className="text-[10px] font-bold font-sans tracking-[0.4em] text-[#A67C52] uppercase">Who We Are</span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#2F4F3E] tracking-tight leading-[1.05] uppercase">
                We Run <br />
                <span className="italic opacity-80 text-[#A67C52]">Hotels.</span> <br />
                You Earn.
              </h2>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-5 text-[#2F4F3E]/70 text-base md:text-lg font-light leading-relaxed max-w-lg">
              <p>
                Vnexora is a leading third-party hotel management company, operating full-spectrum hospitality assets — from luxury resorts and city business hotels to upscale serviced apartments and lifestyle venues.
              </p>
              <p>
                As an end-to-end partner, we take complete operational ownership, driving revenue growth, brand performance, and asset value on behalf of owners and investors across India and beyond.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6 pt-2 flex-wrap">
              <a
                href="/downloads/vnexora-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#2F4F3E] text-[#FAF9F6] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#A67C52] hover:text-black transition-all duration-500 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-3"
              >
                View Brochure
                <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52] group-hover:bg-black animate-pulse" />
              </a>
              <a
                href="/about-us"
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#2F4F3E]/60 hover:text-[#2F4F3E] transition-colors duration-300 underline underline-offset-4"
              >
                Our Story →
              </a>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#2F4F3E]/10 pt-10 mt-2">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl md:text-4xl font-serif text-[#2F4F3E] leading-none">{s.val}</span>
                  <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#2F4F3E]/50 mt-2">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Image stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/ultimate_luxury.png"
                alt="Vnexora Premium Hotel Management"
                fill
                unoptimized
                className="object-cover transition-transform duration-[3000ms] ease-out hover:scale-105"
              />
              {/* Dark edge vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-[#2F4F3E] text-white px-6 py-5 shadow-xl border border-white/10"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#A67C52] mb-1">Portfolio Scale</p>
              <p className="text-2xl font-serif font-light leading-none">Full-Spectrum</p>
              <p className="text-[10px] text-white/60 tracking-[0.15em] uppercase mt-1">All Hotel Categories</p>
            </motion.div>

            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#A67C52]/30 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
