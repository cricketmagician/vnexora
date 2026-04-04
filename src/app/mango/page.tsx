"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Check,
  MessageSquare,
  TrendingUp,
  Bot,
  Shield,
  Zap,
  Wifi,
  ChevronRight,
  Sparkles,
  Users,
  ArrowUpRight,
  Star,
  Clock,
  Globe,
  Smartphone,
  BarChart3,
  Play
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ═══════════════════════════════════════════
   DESIGN TOKENS — DUVE-INSPIRED LIGHT PALETTE
   Primary: #7C5CFC (Soft Violet)
   Background: #FFFFFF / #F5F3EF (Warm Ivory)
   Text: #1A1A2E (Deep Ink) / #6B7280 (Warm Gray)
   Accent shapes: lavender/gold organic blobs
═══════════════════════════════════════════ */

const VIOLET = "#7C5CFC";
const VIOLET_LIGHT = "#EDE9FE";
const IVORY = "#F5F3EF";
const INK = "#1A1A2E";

/* ═══════════════════════════════════════════
   UI HELPER COMPONENTS  
═══════════════════════════════════════════ */

const FeatureBullet = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 py-2.5">
    <div className="w-5 h-5 rounded-full bg-[#7C5CFC]/10 flex items-center justify-center flex-shrink-0">
      <Check className="w-3 h-3 text-[#7C5CFC]" />
    </div>
    <span className="text-[15px] text-[#1A1A2E]/70 font-medium">{text}</span>
  </div>
);

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C5CFC]/[0.06] border border-[#7C5CFC]/10 mb-6">
    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7C5CFC]">
      {children}
    </span>
  </div>
);

/* ═══════════════════════════════════════════
   APP UI SCREENS (PHONE MOCKUPS)
   Light, clean Duve-style cards inside phone
═══════════════════════════════════════════ */

const ScreenCheckIn = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
    className="p-5 pt-14 h-full flex flex-col bg-white"
  >
    <div className="mb-6">
      <p className="text-[9px] text-[#7C5CFC] font-bold uppercase tracking-[0.15em] mb-1">Welcome</p>
      <h4 className="text-lg font-bold tracking-tight text-[#1A1A2E]" style={{ fontFamily: 'var(--font-playfair)' }}>Pre-arrival Check-in</h4>
      <p className="text-[10px] text-[#1A1A2E]/40 mt-1">4 steps · 2 completed</p>
    </div>
    <div className="space-y-3 flex-1">
      {[
        { t: "Passport Scan", s: "Verified ✓", done: true },
        { t: "Payment Method", s: "Card authorized", done: true },
        { t: "Arrival Window", s: "Select your time", done: false },
        { t: "Special Requests", s: "Optional", done: false },
      ].map((step, i) => (
        <div key={i} className={`p-3.5 rounded-2xl border transition-all ${step.done ? 'bg-[#7C5CFC] text-white border-transparent' : 'bg-[#F5F3EF] border-[#1A1A2E]/5 text-[#1A1A2E]'}`}>
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-bold">{step.t}</span>
            {step.done ? (
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-2.5 h-2.5" />
              </div>
            ) : (
              <ChevronRight className="w-3 h-3 opacity-30" />
            )}
          </div>
          <p className={`text-[9px] mt-0.5 ${step.done ? 'text-white/70' : 'text-[#1A1A2E]/40'}`}>{step.s}</p>
        </div>
      ))}
    </div>
    <button className="h-12 w-full rounded-2xl bg-[#1A1A2E] mt-4 flex items-center justify-center gap-2">
      <span className="text-[11px] font-bold text-white tracking-wide">Continue Check-in</span>
      <ArrowRight className="w-3 h-3 text-white" />
    </button>
  </motion.div>
);

const ScreenMessages = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
    className="p-4 pt-14 h-full flex flex-col bg-[#FAFAF8]"
  >
    <div className="flex items-center justify-between mb-5 px-1">
      <div>
        <h4 className="text-[11px] font-bold text-[#1A1A2E]">Concierge Chat</h4>
        <p className="text-[8px] text-[#1A1A2E]/30 mt-0.5">Typically replies in 30sec</p>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 border border-green-100">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[8px] text-green-600 font-bold">Online</span>
      </div>
    </div>
    <div className="flex-1 space-y-3 py-2">
      <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] border border-[#1A1A2E]/5">
        <p className="text-[10px] leading-relaxed text-[#1A1A2E]/80">Good morning Sarah! Your Executive Suite is ready. Shall we bring your luggage up? 🧳</p>
        <p className="text-[7px] text-[#1A1A2E]/20 mt-1.5">9:14 AM</p>
      </div>
      <div className="bg-[#7C5CFC] p-3 rounded-2xl rounded-tr-sm shadow-md shadow-[#7C5CFC]/10 max-w-[80%] ml-auto">
        <p className="text-[10px] text-white leading-relaxed">Yes please! Also, can we get extra towels?</p>
        <p className="text-[7px] text-white/40 mt-1.5">9:15 AM</p>
      </div>
      <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] border border-[#1A1A2E]/5">
        <p className="text-[10px] leading-relaxed text-[#1A1A2E]/80">Of course! Our team is on the way. Anything else? ✨</p>
        <p className="text-[7px] text-[#1A1A2E]/20 mt-1.5">9:15 AM</p>
      </div>
    </div>
    <div className="mt-3 h-10 bg-white rounded-full border border-[#1A1A2E]/10 px-4 flex items-center justify-between shadow-sm">
      <span className="text-[10px] text-[#1A1A2E]/30">Type a request...</span>
      <div className="w-6 h-6 bg-[#7C5CFC] rounded-full flex items-center justify-center">
        <ArrowRight className="w-3 h-3 text-white" />
      </div>
    </div>
  </motion.div>
);

const ScreenUpsell = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
    className="h-full flex flex-col bg-white"
  >
    <div className="relative h-44 overflow-hidden">
      <Image src="/images/mango/spa-wellness.png" alt="Spa Upgrade" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
      <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#FEF3C7] border border-amber-200 z-10">
        <span className="text-[8px] font-bold text-amber-700 uppercase tracking-wider">Exclusive</span>
      </div>
    </div>
    <div className="p-5 space-y-4 flex-1 flex flex-col -mt-4 relative z-10">
      <div>
        <h4 className="text-base font-bold text-[#1A1A2E] tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Penthouse Upgrade</h4>
        <p className="text-[10px] text-[#1A1A2E]/40 mt-0.5">Available for your stay dates</p>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-[#1A1A2E]">$120</span>
        <span className="text-[10px] text-[#1A1A2E]/40">/night extra</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: "Ocean View", sub: "Panoramic" },
          { label: "140 SQM", sub: "Spacious" },
          { label: "Terrace", sub: "Private" },
        ].map((f, i) => (
          <div key={i} className="p-2.5 bg-[#F5F3EF] rounded-xl text-center">
            <p className="text-[9px] font-bold text-[#1A1A2E]">{f.label}</p>
            <p className="text-[7px] text-[#1A1A2E]/30 mt-0.5">{f.sub}</p>
          </div>
        ))}
      </div>
      <button className="w-full py-3 bg-[#7C5CFC] text-white text-[10px] font-bold rounded-xl mt-auto shadow-lg shadow-[#7C5CFC]/20 hover:bg-[#6B4FE0] transition-colors">
        Book Upgrade →
      </button>
    </div>
  </motion.div>
);

const ScreenConcierge = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
    className="p-5 pt-14 h-full flex flex-col bg-[#FAFAF8]"
  >
    <div className="mb-6">
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#7C5CFC]/10 border border-[#7C5CFC]/15 mb-2">
        <Bot className="w-3 h-3 text-[#7C5CFC]" />
        <span className="text-[8px] text-[#7C5CFC] font-bold uppercase tracking-wider">AI CONCIERGE</span>
      </div>
      <h4 className="text-base font-bold text-[#1A1A2E] tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>mangoH Assistant</h4>
    </div>
    <div className="space-y-4 flex-1">
      <div className="p-3.5 bg-white rounded-2xl border border-[#1A1A2E]/5 shadow-sm">
        <p className="text-[#1A1A2E]/30 text-[9px] uppercase font-semibold mb-1.5">Your request</p>
        <p className="text-[#1A1A2E] text-[11px] leading-relaxed font-medium">"Suggest 3 farm-to-table restaurants near the hotel."</p>
      </div>
      <div className="p-3.5 bg-white rounded-2xl border border-[#7C5CFC]/15 shadow-md shadow-[#7C5CFC]/5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC] animate-pulse" />
          <p className="text-[#7C5CFC] text-[9px] font-bold uppercase tracking-wide">Recommendations</p>
        </div>
        <div className="space-y-2.5">
          {[
            { name: "The Greenhouse", meta: "300m · Organic · ★ 4.8", stars: 5 },
            { name: "Roots & Leaves", meta: "600m · Garden · ★ 4.6", stars: 4 },
            { name: "Field's Edge", meta: "800m · Local · ★ 4.7", stars: 5 },
          ].map((r, i) => (
            <div key={i} className="flex justify-between items-center p-2.5 bg-[#F5F3EF] rounded-xl hover:bg-[#7C5CFC]/5 transition-colors cursor-pointer">
              <div>
                <p className="text-[10px] font-bold text-[#1A1A2E]">{r.name}</p>
                <p className="text-[8px] text-[#1A1A2E]/30">{r.meta}</p>
              </div>
              <ChevronRight className="w-3 h-3 text-[#1A1A2E]/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
    <p className="text-[8px] text-[#1A1A2E]/20 text-center mt-4">Powered by mangoH AI Intelligence</p>
  </motion.div>
);

/* ═══════════════════════════════════════════
   ANIMATED COUNTER (21ST.DEV STYLE)
═══════════════════════════════════════════ */

function AnimatedCounter({ target, prefix = "", suffix = "", duration = 2 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 40, stiffness: 80 });

  useEffect(() => {
    if (isInView) {
      motionVal.set(target);
    }
  }, [isInView, motionVal, target]);

  useEffect(() => {
    const unsubscribe = springVal.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springVal, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

/* ═══════════════════════════════════════════
   STATS SECTION — 21ST.DEV PREMIUM
═══════════════════════════════════════════ */

function StatsSection21st() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#F5F3EF] overflow-hidden">
      {/* Subtle dot grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, #1A1A2E 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTag>Proven Results</SectionTag>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Numbers that <span className="italic" style={{ color: VIOLET }}>speak.</span>
          </h2>
          <p className="text-base text-[#1A1A2E]/40 font-light max-w-lg mx-auto">
            Real impact from real properties using mangoH every day.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Large Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative group"
          >
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#7C5CFC]/40 via-[#C4B5FD]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />
            <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-[#1A1A2E]/5 h-full flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-[#7C5CFC]/5 transition-all duration-500">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#7C5CFC]/[0.04] -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#7C5CFC]/[0.08] flex items-center justify-center mb-6 group-hover:bg-[#7C5CFC] transition-colors duration-500">
                  <Clock className="w-6 h-6 text-[#7C5CFC] group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-6xl md:text-7xl font-bold text-[#1A1A2E] tracking-tighter mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <AnimatedCounter target={18} suffix="min" />
                </div>
                <p className="text-lg font-bold text-[#1A1A2E]/80 mb-3">saved per reservation</p>
                <p className="text-sm text-[#1A1A2E]/40 leading-relaxed font-light max-w-xs">
                  Eliminate tedious manual work — from ID checks to digital signatures — and give your team time back for what matters.
                </p>
              </div>

              {/* Mini bar chart decoration */}
              <div className="flex items-end gap-1.5 mt-8">
                {[40, 55, 35, 70, 85, 60, 90, 75, 95, 80, 100, 65].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                    className="flex-1 rounded-t-sm bg-[#7C5CFC]/10 group-hover:bg-[#7C5CFC]/20 transition-colors"
                    style={{ maxHeight: `${h * 0.4}px` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column — Two Stacked Cards */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 2: Check-in ratio */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#FDE68A]/50 via-[#FCD34D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />
              <div className="relative bg-white rounded-3xl p-8 border border-[#1A1A2E]/5 h-full hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-5 group-hover:bg-amber-400 transition-colors duration-500">
                  <Users className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-[#1A1A2E] tracking-tighter mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <AnimatedCounter target={73} suffix="%" />
                </div>
                <p className="text-base font-bold text-[#1A1A2E]/80 mb-2">online check-in ratio</p>
                <p className="text-sm text-[#1A1A2E]/40 leading-relaxed font-light">
                  Say goodbye to long check-in queues and waiting times forever.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Revenue uplift */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-emerald-400/30 via-emerald-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />
              <div className="relative bg-white rounded-3xl p-8 border border-[#1A1A2E]/5 h-full hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-500 transition-colors duration-500">
                  <TrendingUp className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-[#1A1A2E] tracking-tighter mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <AnimatedCounter target={180} prefix="$" />
                </div>
                <p className="text-base font-bold text-[#1A1A2E]/80 mb-2">average uplift per room</p>
                <p className="text-sm text-[#1A1A2E]/40 leading-relaxed font-light">
                  Maximize revenue by unlocking smart profile-based upsells.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Satisfaction — Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="sm:col-span-2 relative group"
            >
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#7C5CFC]/20 via-[#C4B5FD]/10 to-[#FDE68A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />
              <div className="relative bg-white rounded-3xl p-8 border border-[#1A1A2E]/5 hover:shadow-xl hover:shadow-[#7C5CFC]/5 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#7C5CFC]/[0.08] flex items-center justify-center group-hover:bg-[#7C5CFC] transition-colors duration-500">
                      <Star className="w-5 h-5 text-[#7C5CFC] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>
                        <AnimatedCounter target={94} suffix="%" />
                      </div>
                      <p className="text-sm font-bold text-[#1A1A2E]/70 mt-1">guest satisfaction score</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + s * 0.1, type: "spring", stiffness: 300 }}
                      >
                        <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#1A1A2E]/40 leading-relaxed font-light mt-4 max-w-lg">
                  Based on post-stay digital surveys integrated within the mangoH guest platform across 500+ luxury properties.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link href="/contact" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-[#1A1A2E]/10 text-sm font-bold text-[#1A1A2E]/70 hover:text-[#7C5CFC] hover:border-[#7C5CFC]/30 hover:shadow-lg hover:shadow-[#7C5CFC]/5 transition-all group">
            See all case studies 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE  
═══════════════════════════════════════════ */

export default function MangoPremiumPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  // Track scroll within the features section only
  const { scrollYProgress: featuresProgress } = useScroll({
    target: featuresRef,
    offset: ["start start", "end end"]
  });

  const [activeFeature, setActiveFeature] = useState(0);
  
  // Use IntersectionObserver for reliable step detection
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const refs = [step1Ref, step2Ref, step3Ref, step4Ref];
    const observers: IntersectionObserver[] = [];

    refs.forEach((ref, index) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setActiveFeature(index);
            }
          });
        },
        { threshold: [0.3, 0.5, 0.7], rootMargin: "-20% 0px -20% 0px" }
      );
      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-[#1A1A2E]" style={{ overflowX: 'clip' }}>

      {/* ══════════ BLACK HEADER BAR ══════════ */}
      <div className="w-full h-24 bg-[#1A1A2E]" />

      {/* ══════════ HERO SECTION ══════════ */}
      <section className="relative min-h-[85vh] flex items-center px-6 md:px-12 lg:px-20 pt-12 pb-20 overflow-hidden bg-white">
        
        {/* Organic background blobs */}
        <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] rounded-full bg-[#FDE68A]/20 blur-[2px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#7C5CFC]/15 blur-[2px] pointer-events-none" />
        <div className="absolute top-[20%] right-[5%] w-[200px] h-[200px] rounded-full bg-[#C4B5FD]/20 blur-[1px] pointer-events-none" />
        
        <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* LEFT — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-8 text-[#1A1A2E]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Transform How You Do{" "}
              <span className="italic" style={{ color: VIOLET }}>Hospitality</span>
            </h1>

            <p className="text-lg md:text-xl text-[#1A1A2E]/60 leading-relaxed font-light mb-10 max-w-xl">
              From digital check-in to tailored upsells, mangoH&apos;s all-in-one 
              platform streamlines guest journeys, drives revenue, and enhances 
              operational efficiency.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-5 mb-16">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 text-white text-sm font-bold tracking-wide rounded-full shadow-xl shadow-[#7C5CFC]/25 transition-all"
                  style={{ backgroundColor: VIOLET }}
                >
                  Book a demo now
                </motion.button>
              </Link>
              <button className="flex items-center gap-2 px-6 py-4 text-[#1A1A2E]/60 text-sm font-medium hover:text-[#1A1A2E] transition-colors group">
                <div className="w-10 h-10 rounded-full border-2 border-[#1A1A2E]/10 flex items-center justify-center group-hover:border-[#7C5CFC] transition-colors">
                  <Play className="w-3.5 h-3.5 ml-0.5" />
                </div>
                Watch video
              </button>
            </div>

            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-bold text-[#1A1A2E]">Excellent</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <div key={s} className="w-5 h-5 bg-[#00B67A] flex items-center justify-center">
                      <span className="text-white text-[10px]">★</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#1A1A2E]/40">
                Based on <span className="font-semibold text-[#1A1A2E]/60 underline">2,288 reviews</span>{" "}
                verified by <span className="font-semibold text-[#1A1A2E]/60">HotelTechReport</span> ✓
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Hero Image with organic shapes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#1A1A2E]/10 border border-[#1A1A2E]/5 aspect-[4/3]">
              <Image 
                src="/images/mango/hero-poolside.png" 
                alt="Luxury hotel poolside with guest using mangoH" 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-[#1A1A2E] ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ BRAND LOGOS MARQUEE ══════════ */}
      <section className="py-10 bg-white relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex gap-16 items-center shrink-0">
              {["IHG", "WYNDHAM", "THE SET", "THE HOXTON", "CURIO", "LEONARDO", "ACCOR", "SOFITEL", "BANYAN TREE", "CROWNE PLAZA"].map((brand, i) => (
                <span
                  key={`${loop}-${i}`}
                  className="text-[12px] md:text-[14px] font-bold tracking-[0.25em] text-[#1A1A2E]/15 hover:text-[#1A1A2E]/40 transition-colors cursor-default whitespace-nowrap"
                >
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ SOLUTION HEADLINE + CATEGORY PILLS — DUVE STYLE ══════════ */}
      <section className="pt-16 pb-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-[3.2rem] font-bold tracking-tight leading-[1.15] mb-10"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            A complete guest<br />
            experience solution for
          </motion.h2>

          <div className="flex flex-wrap gap-4">
            {[
              { label: "Hotels", delay: 0.3 },
              { label: "Vacation Rentals", delay: 0.45 },
              { label: "Resorts", delay: 0.6 },
            ].map((cat, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: cat.delay, duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full text-base font-semibold tracking-wide border-2 border-[#1A1A2E]/10 text-[#1A1A2E] bg-white hover:border-[#7C5CFC]/40 hover:text-[#7C5CFC] hover:shadow-lg hover:shadow-[#7C5CFC]/10 transition-all duration-300"
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ GLOBAL REACH — DUVE STYLE ══════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <SectionTag>Global Presence</SectionTag>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Trusted by India&apos;s <span className="italic" style={{ color: VIOLET }}>finest</span> properties
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="text-base md:text-lg text-[#1A1A2E]/70 leading-relaxed font-light max-w-sm" style={{ fontFamily: 'var(--font-playfair)' }}>
                From luxury resorts in <strong className="text-[#1A1A2E] font-bold">Goa</strong> and{" "}
                <strong className="text-[#1A1A2E] font-bold">Jaipur</strong> to business hotels in{" "}
                <strong className="text-[#1A1A2E] font-bold">Mumbai</strong> and{" "}
                <strong className="text-[#1A1A2E] font-bold">Delhi</strong>, mangoH powers the complete guest journey for India&apos;s most forward-thinking hospitality brands.
              </p>
              <div className="w-1 h-12 bg-[#E5793B] rounded-full mt-8" />
            </motion.div>

            {/* Right — Image with accent circle */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Orange accent circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-[#E5793B] -z-[1]" />
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/mango/hotel-interior.png" 
                  alt="Luxury hotel interior" 
                  width={650} 
                  height={420} 
                  className="object-cover w-full h-[400px]" 
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-[#1A1A2E]/5">
            {[
              { target: 8, suffix: "+", label: "Cities" },
              { target: 50, suffix: "+", label: "Integrations" },
              { target: 120, suffix: "+", label: "Properties" },
              { target: 85, suffix: "k+", label: "Engaged guests / mo" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="text-4xl md:text-6xl font-bold text-[#1A1A2E] tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-[#1A1A2E]/50 font-medium mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ STATS SECTION — 21ST.DEV PREMIUM ══════════ */}
      <StatsSection21st />

      {/* ══════════ FEATURE SECTIONS — ALTERNATING LAYOUT ══════════ */}

      {/* Feature 1: Online Check-in */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionTag>Online Check-in</SectionTag>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
                Skip the front desk entirely
              </h2>
              <p className="text-lg text-[#1A1A2E]/50 font-light leading-relaxed mb-8 max-w-lg">
                Guests can check-in before they get to your property — saving your 
                staff and your guests time. Let your guests enjoy their vacation right 
                away, while leaving your staff the efficient time to focus on providing 
                an outstanding hospitality experience.
              </p>
              <div className="space-y-1 mb-8">
                <FeatureBullet text="Biometric ID & passport verification" />
                <FeatureBullet text="Digital signature collection" />
                <FeatureBullet text="Contactless payment authorization" />
                <FeatureBullet text="Real-time room status alerts" />
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#1A1A2E] text-sm font-bold hover:text-[#7C5CFC] transition-colors group">
                Learn more 
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-[#1A1A2E]/8 border border-[#1A1A2E]/5 aspect-[4/3]">
                <Image src="/images/mango/hotel-checkin.png" alt="Digital check-in experience" fill className="object-cover" />
              </div>
              {/* Floating accent blob */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#FDE68A]/50 -z-10 blur-[1px]" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#C4B5FD]/40 -z-10 blur-[1px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2: Upsell */}
      <section className="py-28 px-6 bg-[#FAFAF9]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image First on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-[#1A1A2E]/8 border border-[#1A1A2E]/5 aspect-[4/3]">
                <Image src="/images/mango/spa-wellness.png" alt="Spa upsell experience" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-[#7C5CFC]/15 -z-10 blur-[1px]" />
              <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full bg-[#FDE68A]/40 -z-10 blur-[1px]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <SectionTag>Smart Upselling</SectionTag>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
                Upsell like never before
              </h2>
              <p className="text-lg text-[#1A1A2E]/50 font-light leading-relaxed mb-4 max-w-lg">
                <strong className="text-[#1A1A2E]/80">Offer the right service to the right guest at the right time.</strong>
              </p>
              <p className="text-lg text-[#1A1A2E]/50 font-light leading-relaxed mb-8 max-w-lg">
                mangoH learns about your guests before arrival through guest information 
                and OTA data. The intelligence collected increases revenue by offering 
                tailored upsells based on behavioral signals.
              </p>
              <div className="space-y-1 mb-8">
                <FeatureBullet text="Behavioral event triggers" />
                <FeatureBullet text="Dynamic pricing integration" />
                <FeatureBullet text="Commission-free revenue" />
                <FeatureBullet text="One-tap conversion flow" />
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#1A1A2E] text-sm font-bold hover:text-[#7C5CFC] transition-colors group">
                Learn more 
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 3: Guest Communication */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionTag>Guest Communication</SectionTag>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
                Every channel, one dashboard
              </h2>
              <p className="text-lg text-[#1A1A2E]/50 font-light leading-relaxed mb-8 max-w-lg">
                Bring WhatsApp, SMS, and in-app requests into one AI-powered dashboard. 
                Your guests communicate however they want, and your team responds from 
                one place — instantly, in any language.
              </p>
              <div className="space-y-1 mb-8">
                <FeatureBullet text="Omni-channel unified inbox" />
                <FeatureBullet text="Automated instant replies" />
                <FeatureBullet text="Internal task routing" />
                <FeatureBullet text="Sentiment analysis engine" />
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#1A1A2E] text-sm font-bold hover:text-[#7C5CFC] transition-colors group">
                Learn more 
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-[#1A1A2E]/8 border border-[#1A1A2E]/5 aspect-[4/3]">
                <Image src="/images/mango/concierge-service.png" alt="Concierge communication" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#C4B5FD]/30 -z-10 blur-[1px]" />
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#FDE68A]/50 -z-10 blur-[1px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ PLATFORM HEADLINE ══════════ */}
      <section className="py-28 px-6 bg-[#F5F3EF]">
        <div className="max-w-[1100px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-[3.5rem] font-bold tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
              A platform built for a modern{" "}
              <span className="italic" style={{ color: VIOLET }}>hospitality experience</span>
            </h2>
            <p className="text-lg text-[#1A1A2E]/40 font-light max-w-2xl mx-auto leading-relaxed mb-16">
              Everything your property needs to deliver world-class digital guest experiences, 
              from pre-arrival to post-checkout.
            </p>
          </motion.div>

          {/* Feature Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Smartphone className="w-6 h-6" />, title: "Mobile-first Check-in", desc: "Guests complete arrivals from their own device, before reaching your property." },
              { icon: <MessageSquare className="w-6 h-6" />, title: "Unified Messaging", desc: "WhatsApp, SMS, in-app — every channel, one inbox for your team." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Revenue Engine", desc: "Smart upsells presented at peak guest intent moments." },
              { icon: <Bot className="w-6 h-6" />, title: "AI Concierge", desc: "24/7 intelligent assistant that knows your property inside and out." },
              { icon: <Shield className="w-6 h-6" />, title: "Secure & Compliant", desc: "Enterprise-grade encryption and GDPR-compliant data handling." },
              { icon: <Globe className="w-6 h-6" />, title: "30+ Languages", desc: "Communicate with every guest in their native language." },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-8 rounded-2xl border border-[#1A1A2E]/5 text-left hover:shadow-lg hover:shadow-[#7C5CFC]/5 hover:border-[#7C5CFC]/15 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#7C5CFC]/[0.07] flex items-center justify-center text-[#7C5CFC] mb-5 group-hover:bg-[#7C5CFC] group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1A2E] tracking-tight">{card.title}</h3>
                <p className="text-sm text-[#1A1A2E]/45 leading-relaxed font-light">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ INTERACTIVE PHONE MOCKUP SECTION ══════════ */}
      <section className="relative px-6 md:px-12 lg:px-24 bg-white">
        <div ref={featuresRef} className="container mx-auto max-w-[1400px]">
          <div className="text-center pt-28 mb-10">
            <SectionTag>Live Experience</SectionTag>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              See it in <span className="italic" style={{ color: VIOLET }}>action</span>
            </h2>
            <p className="text-lg text-[#1A1A2E]/40 font-light max-w-xl mx-auto">
              Scroll through to explore what your guests will experience firsthand.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* TEXT COLUMN */}
            <div className="lg:w-1/2 space-y-[40vh] pb-[40vh]">
              
              <motion.div 
                ref={step1Ref}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-30%" }}
                className="pt-20"
              >
                <SectionTag>Step 01</SectionTag>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Invisible Arrivals
                </h2>
                <p className="text-lg text-[#1A1A2E]/50 font-light leading-relaxed mb-8 max-w-lg">
                  No queues. Guests verify ID, sign documents, and authorize payment 
                  from their device. Digital keys ready on arrival.
                </p>
                <div className="space-y-1 max-w-sm">
                  <FeatureBullet text="Biometric ID Verification" />
                  <FeatureBullet text="Digital Signature Collection" />
                  <FeatureBullet text="Real-time Room Status" />
                </div>
              </motion.div>

              <motion.div 
                ref={step2Ref}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-30%" }}
              >
                <SectionTag>Step 02</SectionTag>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Guest Inbox at Scale
                </h2>
                <p className="text-lg text-[#1A1A2E]/50 font-light leading-relaxed mb-8 max-w-lg">
                  Every channel unified. Your team responds instantly from one dashboard, 
                  in any language, with AI-powered suggestions.
                </p>
                <div className="space-y-1 max-w-sm">
                  <FeatureBullet text="Omni-channel Dashboard" />
                  <FeatureBullet text="Automated Instant Replies" />
                  <FeatureBullet text="Smart Task Routing" />
                </div>
              </motion.div>

              <motion.div 
                ref={step3Ref}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-30%" }}
              >
                <SectionTag>Step 03</SectionTag>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Predictive Upselling
                </h2>
                <p className="text-lg text-[#1A1A2E]/50 font-light leading-relaxed mb-8 max-w-lg">
                  AI analyses booking data to present the right upgrade at the peak 
                  moment of guest intent. Revenue without commissions.
                </p>
                <div className="space-y-1 max-w-sm">
                  <FeatureBullet text="Behavioral Data Upsells" />
                  <FeatureBullet text="Dynamic Pricing Engine" />
                  <FeatureBullet text="One-Tap Conversion" />
                </div>
              </motion.div>

              <motion.div 
                ref={step4Ref}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-30%" }}
              >
                <SectionTag>Step 04</SectionTag>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  24/7 AI Concierge
                </h2>
                <p className="text-lg text-[#1A1A2E]/50 font-light leading-relaxed mb-8 max-w-lg">
                  An expert at your guest&apos;s fingertips. Local recommendations, transport 
                  booking, and property knowledge — in any language.
                </p>
                <div className="space-y-1 max-w-sm">
                  <FeatureBullet text="30+ Languages Supported" />
                  <FeatureBullet text="Seamless Human Handoff" />
                  <FeatureBullet text="Deep PMS Integration" />
                </div>
              </motion.div>

            </div>

            {/* VISUAL COLUMN — STICKY PHONE (ALWAYS VISIBLE) */}
            <div className="lg:w-1/2 lg:sticky lg:top-0 lg:self-start lg:h-screen flex items-center justify-center">
              
              <motion.div 
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[240px] md:w-[270px]"
              >
                {/* Subtle glow behind phone */}
                <div className="absolute -inset-16 bg-[#7C5CFC]/5 rounded-full blur-[80px]" />
                
                {/* Phone Frame */}
                <div className="relative bg-white rounded-[3rem] p-2.5 shadow-[0_30px_80px_rgba(26,26,46,0.12)] border border-[#1A1A2E]/8">
                  
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1A1A2E] rounded-3xl z-30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                  
                  {/* Screen */}
                  <div className="relative h-[480px] md:h-[540px] rounded-[2.5rem] overflow-hidden bg-[#F5F3EF]">
                    <AnimatePresence mode="wait">
                      {activeFeature === 0 && <ScreenCheckIn key="0" />}
                      {activeFeature === 1 && <ScreenMessages key="1" />}
                      {activeFeature === 2 && <ScreenUpsell key="2" />}
                      {activeFeature === 3 && <ScreenConcierge key="3" />}
                    </AnimatePresence>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-[#1A1A2E]/10 rounded-full z-30" />
                  </div>
                </div>

                {/* Step indicator dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        activeFeature === i 
                          ? 'w-8 bg-[#7C5CFC]' 
                          : 'w-2 bg-[#1A1A2E]/10'
                      }`}
                    />
                  ))}
                </div>

                {/* Floating Badges */}
                <motion.div 
                  className="absolute -right-14 top-1/4 bg-white p-5 rounded-2xl shadow-xl border border-[#1A1A2E]/5 hidden xl:block"
                  animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }}
                >
                  <TrendingUp className="w-6 h-6 text-[#7C5CFC] mb-2" />
                  <div className="text-[10px] font-bold text-[#1A1A2E]">+18% Revenue</div>
                  <div className="text-[8px] text-[#1A1A2E]/30">Per property</div>
                </motion.div>

                <motion.div 
                  className="absolute -left-14 bottom-1/3 bg-white p-5 rounded-2xl shadow-xl border border-[#1A1A2E]/5 hidden xl:block"
                  animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  <Users className="w-6 h-6 text-[#7C5CFC] mb-2" />
                  <div className="text-[10px] font-bold text-[#1A1A2E]">85% Digital</div>
                  <div className="text-[8px] text-[#1A1A2E]/30">Guest adoption</div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════ FEATURE SUITE — DUVE CARD GRID ══════════ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-[2.8rem] leading-tight font-normal tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              The only end-to-end suite to transform your hotel and brand
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { img: "/images/mango/cards/checkin.png", label: "Online Check-in" },
              { img: "/images/mango/cards/guestapp.png", label: "Guest App" },
              { img: "/images/mango/cards/messaging.png", label: "Guest\nCommunication" },
              { img: "/images/mango/cards/upsells.png", label: "Upsells" },
              { img: "/images/mango/cards/roomdirectory.png", label: "Room Directory" },
              { img: "/images/mango/cards/mobilekeys.png", label: "Mobile Keys" },
              { img: "/images/mango/cards/analytics.png", label: "Segmentation &\nAnalytics" },
              { img: "/images/mango/cards/hotelbrand.png", label: "Hotel Brand" },
              { img: "/images/mango/cards/ai.png", label: "mangoH AI" },
              { img: "/images/mango/cards/menus.png", label: "Digital Menus &\nMobile Ordering" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                whileHover={{ y: -5 }}
                className="bg-[#F8F7F4] hover:bg-[#F0EEFF] py-10 px-6 rounded-2xl flex flex-col items-center justify-center group cursor-pointer transition-all duration-300"
              >
                <div className="relative w-[72px] h-[72px] md:w-[85px] md:h-[85px] mb-6">
                  <Image src={card.img} alt={card.label} fill className="object-contain" />
                </div>
                <p className="text-sm md:text-[15px] font-semibold text-[#1A1A2E] text-center leading-snug whitespace-pre-line" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {card.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-white">
        {/* Background organic shapes */}
        <div className="absolute top-0 left-[-5%] w-[300px] h-[300px] rounded-full bg-[#FDE68A]/30 -z-0 blur-[2px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#C4B5FD]/20 -z-0 blur-[2px]" />
        
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ready to transform your{" "}
              <span className="italic" style={{ color: VIOLET }}>guest experience?</span>
            </h2>
            <p className="text-lg text-[#1A1A2E]/40 max-w-xl mx-auto mb-12 font-light leading-relaxed">
              Join the properties leading the digital transformation of luxury hospitality. 
              Book a personalized walkthrough today.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-5 text-white text-sm font-bold tracking-wide rounded-full shadow-xl shadow-[#7C5CFC]/25"
                  style={{ backgroundColor: VIOLET }}
                >
                  Book a demo now
                </motion.button>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#1A1A2E]/50 text-sm font-medium hover:text-[#7C5CFC] transition-colors group">
                Contact sales 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ PREMIUM POPUP — 21ST.DEV STYLE ══════════ */}
      <DemoPopup />

    </main>
  );
}

/* ═══════════════════════════════════════════
   PREMIUM POPUP COMPONENT
═══════════════════════════════════════════ */

function DemoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show if user hasn't dismissed before in this session
      if (!sessionStorage.getItem('mangoh-popup-dismissed')) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('mangoh-popup-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[90vw] max-w-[720px]"
          >
            <div className="relative bg-[#7C5CFC] rounded-3xl overflow-hidden shadow-2xl shadow-[#7C5CFC]/30">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors z-20"
              >
                <span className="text-white text-lg leading-none">✕</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left — Text */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Hoteliers,<br />
                    Increase Revenue and Guest Satisfaction with Your Hotel&apos;s Guest App
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link href="/contact">
                      <button
                        onClick={handleClose}
                        className="px-8 py-3.5 bg-[#1A1A2E] text-white text-sm font-bold rounded-full hover:bg-black transition-colors shadow-lg"
                      >
                        Book a demo
                      </button>
                    </Link>
                  </motion.div>
                </div>

                {/* Right — Phone mockup image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative h-[280px] md:h-auto"
                >
                  <Image
                    src="/images/mango/popup-phones.png"
                    alt="mangoH Guest App"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
