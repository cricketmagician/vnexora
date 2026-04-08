"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { label: "Hotel Assets", value: 15, suffix: "" },
  { label: "Keys Managed", value: 550, suffix: "+" },
  { label: "Years of Authority", value: 18, suffix: "+" },
  { label: "Global Brands", value: 56, suffix: "" },
  { label: "MOU / Agreement", value: 27, suffix: "" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2200;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
};

export const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={sectionRef}
      suppressHydrationWarning
      className="relative z-10 py-20 md:py-32 px-4 md:px-8 overflow-hidden"
    >
      {/* Parallax BG */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/images/stats-bg.png"
          alt="Vnexora Background"
          fill
          className="object-cover opacity-25 mix-blend-luminosity scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        {/* Bird watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/vnexora-bird-full.png"
            alt=""
            width={500}
            height={500}
            className="object-contain opacity-[0.07] scale-75 md:scale-100 mix-blend-screen"
          />
        </div>
      </motion.div>

      {/* Gold top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A67C52]/60 to-transparent origin-left"
      />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="w-10 h-[1px] bg-[#A67C52]/40" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] font-bold text-[#A67C52]">The Global Scale</span>
            <div className="w-10 h-[1px] bg-[#A67C52]/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.0]"
          >
            The{" "}
            <motion.span
              initial={{ opacity: 0, filter: "blur(16px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.35 }}
              className="italic text-[#A67C52]"
            >
              Vnexora
            </motion.span>{" "}
            Influence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/40 text-sm md:text-base font-light tracking-wide mt-5 max-w-md mx-auto"
          >
            Delivering measurable results across every category of hospitality
          </motion.p>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#A67C52]/5 via-[#A67C52]/10 to-[#A67C52]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl" />

          <div className="relative grid grid-cols-2 md:grid-cols-5 bg-white/[0.03] backdrop-blur-2xl border border-white/8 rounded-[2rem] overflow-hidden shadow-2xl hover:border-[#A67C52]/30 transition-all duration-700 ease-out">
            {stats.map((stat, i) => {
              const isMOU = i === stats.length - 1;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={[
                    "flex flex-col items-center justify-center py-12 md:py-20 px-4 relative overflow-hidden",
                    "transition-all duration-500 cursor-default group/stat",
                    !isMOU && i < stats.length - 1 ? "border-r border-white/5" : "",
                    !isMOU && i < 3 ? "border-b md:border-b-0 border-white/5" : "",
                    isMOU
                      ? "border-l-2 border-[#A67C52] bg-gradient-to-b from-[#A67C52]/10 via-[#A67C52]/5 to-transparent shadow-[inset_0_0_40px_rgba(166,124,82,0.08)]"
                      : "hover:bg-white/[0.03]",
                  ].join(" ")}
                >
                  {/* MOU: ambient glow blob */}
                  {isMOU && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(166,124,82,0.15)_0%,transparent_70%)] pointer-events-none" />
                  )}

                  {/* MOU: pulsing NEW badge */}
                  {isMOU && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A67C52] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A67C52]" />
                      </span>
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#A67C52]">FY 25–26</span>
                    </div>
                  )}

                  {/* Number */}
                  <div className={[
                    "text-4xl md:text-6xl lg:text-7xl font-serif mb-3 md:mb-4 tracking-tighter transition-colors duration-500",
                    isMOU ? "text-[#A67C52]" : "text-white group-hover/stat:text-[#A67C52]",
                  ].join(" ")}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                    className={[
                      "h-[1px] mb-3 md:mb-4 origin-left",
                      isMOU ? "w-12 bg-[#A67C52]" : "w-8 bg-[#A67C52]/40",
                    ].join(" ")}
                  />

                  <p className={[
                    "text-[11px] md:text-[13px] font-bold uppercase tracking-[0.3em] transition-opacity duration-300",
                    isMOU
                      ? "text-[#A67C52] opacity-100"
                      : "text-[#A67C52] opacity-60 group-hover/stat:opacity-100",
                  ].join(" ")}>
                    {stat.label}
                  </p>

                  {/* Corner accent for non-MOU */}
                  {!isMOU && (
                    <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#A67C52]/0 group-hover/stat:border-[#A67C52]/40 transition-all duration-500" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── FY 2025-26 Floating Achievement Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative mt-10 flex justify-end pr-2"
        >
          <div className="relative group">
            {/* Outer glow pulse */}
            <div className="absolute -inset-1 bg-[#A67C52]/20 rounded-2xl blur-xl animate-pulse" />
            <div className="relative flex items-center gap-5 bg-[#0D0D0D]/90 backdrop-blur-2xl border border-[#A67C52]/40 rounded-2xl px-7 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* Vertical gold bar */}
              <div className="w-[2px] h-10 bg-gradient-to-b from-[#A67C52] to-[#A67C52]/20 rounded-full flex-shrink-0" />
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.5em] text-[#A67C52] mb-1">FY 2025 – 26</div>
                <div className="text-white text-sm font-serif font-light leading-snug">What We Achieved</div>
                <div className="text-white/40 text-[11px] font-light mt-0.5 tracking-wide">MOU · Assets · Keys · Brands</div>
              </div>
              {/* Stamp ring */}
              <div className="ml-2 w-12 h-12 rounded-full border border-[#A67C52]/30 flex items-center justify-center flex-shrink-0">
                <div className="text-[#A67C52] text-lg font-serif font-bold leading-none">✦</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Gold bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A67C52]/30 to-transparent origin-right"
      />
    </section>
  );
};
