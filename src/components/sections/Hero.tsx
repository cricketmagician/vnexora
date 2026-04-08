"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";

// ─── Manifesto Lines ─────────────────────────────────────────────────────────
const manifestoLines = [
  {
    id: 0,
    text: "VNEXORA exists for one reason—",
    emphasis: "to make hotels commercially unstoppable.",
    delay: 0.2,
  },
  {
    id: 1,
    text: "The next decade won't belong to the biggest hotels—",
    emphasis: "it will belong to those engineered by VNEXORA.",
    delay: 2.4,
  },
  {
    id: 2,
    text: "VNEXORA is not a service provider.",
    emphasis: "It is a growth partner.",
    delay: 4.8,
  },
];

// ─── Word-by-word reveal ─────────────────────────────────────────────────────
const WordReveal = ({
  text,
  baseDelay,
  className,
}: {
  text: string;
  baseDelay: number;
  className?: string;
}) => {
  const words = text.split(" ");
  return (
    <span className={`inline ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: baseDelay + i * 0.07,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// ─── Golden shimmer on emphasis text ─────────────────────────────────────────
const EmphasisReveal = ({
  text,
  baseDelay,
}: {
  text: string;
  baseDelay: number;
}) => {
  const words = text.split(" ");
  return (
    <span className="block mt-1 sm:mt-2">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #CFA052 0%, #E8C97A 40%, #CFA052 70%, #A07830 100%)",
              backgroundSize: "200% 100%",
            }}
            initial={{ y: "110%", opacity: 0, backgroundPosition: "200% 0" }}
            animate={{
              y: "0%",
              opacity: 1,
              backgroundPosition: ["200% 0", "0% 0"],
            }}
            transition={{
              duration: 0.8,
              delay: baseDelay + i * 0.08,
              ease: [0.215, 0.61, 0.355, 1],
              backgroundPosition: {
                delay: baseDelay + i * 0.08 + 0.4,
                duration: 1.2,
                ease: "easeOut",
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// ─── Horizontal rule that wipes in ───────────────────────────────────────────
const WipeLine = ({ delay }: { delay: number }) => (
  <motion.div
    className="w-full h-px bg-gradient-to-r from-transparent via-[#CFA052]/40 to-transparent my-8 md:my-10"
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 1, delay, ease: [0.215, 0.61, 0.355, 1] }}
    style={{ transformOrigin: "left" }}
  />
);

// ─── Main Hero ────────────────────────────────────────────────────────────────
export const Hero = () => {
  return (
    <section className="relative z-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* ── Cinematic Video Background ── */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45] grayscale-[0.15] transform-gpu scale-105"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Deep vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />

        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Scanning gold shimmer bar */}
        <motion.div
          animate={{ top: ["-30%", "110%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[20vh] bg-gradient-to-b from-transparent via-[#CFA052]/4 to-transparent pointer-events-none z-10"
        />
      </div>

      {/* ── Top Left Brand Mark ── */}
      <div className="absolute top-12 left-12 z-40 hidden lg:flex items-center gap-4">
        <div className="w-8 h-8 rounded-full border border-[#CFA052]/40 flex items-center justify-center">
          <div className="w-1 h-1 bg-[#CFA052] rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-black tracking-[0.5em] text-white uppercase">
            VNEXORA
          </span>
          <span className="text-[7px] font-black tracking-[0.8em] text-[#CFA052] uppercase ml-1 opacity-60">
            Global_Advisory
          </span>
        </div>
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl w-full flex flex-col items-center">

          {/* ── Eyebrow label ── */}
          <div className="overflow-hidden mb-10 md:mb-14">
            <motion.span
              className="block text-[9px] md:text-[10px] font-black tracking-[0.9em] text-[#CFA052] uppercase"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.215, 0.61, 0.355, 1] }}
            >
              COMMERCIAL MANIFESTO
            </motion.span>
          </div>

          {/* ── 3 Manifesto Lines ── */}
          <div className="flex flex-col items-center gap-0 w-full">
            {manifestoLines.map((line, idx) => (
              <div key={line.id} className="w-full">
                <motion.div className="text-left md:text-center">
                  {/* First part – white */}
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic text-white leading-[1.3] tracking-tight">
                    <WordReveal text={line.text} baseDelay={line.delay} />
                  </p>
                  {/* Emphasis part – gold shimmer */}
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic leading-[1.3] tracking-tight">
                    <EmphasisReveal
                      text={line.emphasis}
                      baseDelay={line.delay + 0.3}
                    />
                  </p>
                </motion.div>

                {/* Separator wipe – between lines only */}
                {idx < manifestoLines.length - 1 && (
                  <WipeLine delay={line.delay + 0.8} />
                )}
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 6.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/contact">
              <button className="relative px-14 py-5 text-[11px] font-black tracking-[0.6em] uppercase text-black bg-[#CFA052] overflow-hidden group transition-all duration-500 hover:shadow-[0_0_60px_rgba(207,160,82,0.4)]">
                <span className="relative z-10">PARTNER WITH US</span>
                <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </Link>
            <Link href="/about-us">
              <button className="text-[11px] font-black tracking-[0.6em] uppercase text-white/50 hover:text-[#CFA052] transition-colors duration-300 underline-offset-4 hover:underline">
                OUR STORY
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Left Perspective Anchor ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="absolute bottom-12 left-12 z-20 flex flex-col items-start gap-4"
      >
        <span className="text-[9px] font-black tracking-[0.6em] uppercase text-white/30 italic">
          Perspective_Explore
        </span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-[#CFA052]/50 to-transparent" />
      </motion.div>

      {/* ── Bottom progress bar (static accent) ── */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#CFA052]/80 via-[#E8C97A] to-transparent z-40"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 3, delay: 0.1, ease: "easeOut" }}
      />
    </section>
  );
};
