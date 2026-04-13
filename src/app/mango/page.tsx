"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Check,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Briefcase,
  Bot,
  Shield,
  Zap,
  Wifi,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
  ArrowUpRight,
  Star,
  Clock,
  Globe,
  Smartphone,
  BarChart3,
  Play,
  Layers,
  Tablet,
  Home,
  Map,
  CheckCircle,
  Handshake,
  Trophy,
  MonitorPlay,
  CreditCard
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════
   DESIGN TOKENS — DUVE-INSPIRED LIGHT PALETTE
   Primary: #CFA052 (Sophisticated Gold)
   Background: #0A0A0A (Rich Black) / #FAF9F6 (Ivory)
   Text: #FAF9F6 (Ivory) / #CFA052 (Gold)
   Accent shapes: lavender/gold organic blobs
═══════════════════════════════════════════ */

const GOLD = "#CFA052";
const GOLD_LIGHT = "#FDF2E9";
const IVORY = "#FAF9F6"; 
const INK = "#0A0A0A"; 
const CHARCOAL = "#2D2D2D"; 

/* ═══════════════════════════════════════════
   UI HELPER COMPONENTS  
═══════════════════════════════════════════ */

const FeatureBullet = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 py-2.5">
    <div className="w-5 h-5 rounded-full bg-[#CFA052]/10 flex items-center justify-center flex-shrink-0">
      <Check className="w-3 h-3 text-[#CFA052]" />
    </div>
    <span className="text-[15px] text-[#1A1A2E]/70 font-medium">{text}</span>
  </div>
);

const SectionTag = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn(
    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A]/[0.05] border border-[#0A0A0A]/10 mb-8 whitespace-nowrap",
    className
  )}>
    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A0A0A]">
      {children}
    </span>
  </div>
);

const ActionCard = ({ title, icon: Icon, href }: { title: string, icon: any, href: string }) => (
  <Link href={href} className="group h-full">
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-6 p-6 md:p-8 bg-[#FAF9F6] border border-black/[0.05] rounded-3xl hover:border-[#CFA052]/40 hover:shadow-[0_45px_100px_rgba(0,0,0,0.08)] transition-all duration-500 h-full relative overflow-hidden"
    >
      {/* Inner Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#CFA052]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] bg-white border border-black/5 flex items-center justify-center text-[#CFA052] shadow-xl shadow-black/5 group-hover:bg-[#CFA052] group-hover:text-white transition-all duration-500 flex-shrink-0">
        <Icon className="w-6 h-6 md:w-7 md:h-7" />
      </div>
      
      <div className="flex flex-col gap-1.5 text-left">
        <h4 className="text-[13px] md:text-[15px] font-bold uppercase tracking-[0.2em] text-[#0A0A0A] group-hover:text-[#CFA052] transition-colors leading-tight">
          {title}
        </h4>
        <div className="flex items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.25em] font-black text-black/20 group-hover:text-black/40 transition-colors">Strategic Path</span>
          <ArrowRight className="w-3 h-3 text-[#CFA052] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  </Link>
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
      <p className="text-[9px] text-[#CFA052] font-bold uppercase tracking-[0.15em] mb-1">Welcome</p>
      <h4 className="text-lg font-bold tracking-tight text-[#0A0A0A]" style={{ fontFamily: 'var(--font-playfair)' }}>Pre-arrival Check-in</h4>
      <p className="text-[10px] text-[#0A0A0A]/40 mt-1">4 steps · 2 completed</p>
    </div>
    <div className="space-y-3 flex-1">
      {[
        { t: "Passport Scan", s: "Verified ✓", done: true },
        { t: "Payment Method", s: "Card authorized", done: true },
        { t: "Arrival Window", s: "Select your time", done: false },
        { t: "Special Requests", s: "Optional", done: false },
      ].map((step, i) => (
        <div key={i} className={`p-3.5 rounded-2xl border transition-all ${step.done ? 'bg-[#CFA052] text-white border-transparent' : 'bg-[#F5F3EF] border-[#0A0A0A]/5 text-[#0A0A0A]'}`}>
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
          <p className={`text-[9px] mt-0.5 ${step.done ? 'text-white/70' : 'text-[#0A0A0A]/40'}`}>{step.s}</p>
        </div>
      ))}
    </div>
    <button className="h-12 w-full rounded-2xl bg-[#0A0A0A] mt-4 flex items-center justify-center gap-2">
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
        <h4 className="text-[11px] font-bold text-[#0A0A0A]">Concierge Chat</h4>
        <p className="text-[8px] text-[#0A0A0A]/30 mt-0.5">Typically replies in 30sec</p>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 border border-green-100">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[8px] text-green-600 font-bold">Online</span>
      </div>
    </div>
    <div className="flex-1 space-y-3 py-2">
      <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] border border-[#0A0A0A]/5">
        <p className="text-[10px] leading-relaxed text-[#0A0A0A]/80">Namaste Rahul ji! Your Deluxe Suite is ready. Shall we arrange your luggage? 🧳</p>
        <p className="text-[7px] text-[#0A0A0A]/20 mt-1.5">9:14 AM</p>
      </div>
      <div className="bg-[#0A0A0A] p-3 rounded-2xl rounded-tr-sm shadow-md max-w-[80%] ml-auto">
        <p className="text-[10px] text-white leading-relaxed">Yes please! Also, can we get extra towels?</p>
        <p className="text-[7px] text-white/40 mt-1.5">9:15 AM</p>
      </div>
      <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] border border-[#0A0A0A]/5">
        <p className="text-[10px] leading-relaxed text-[#0A0A0A]/80">Of course! Our team is on the way. Anything else? ✨</p>
        <p className="text-[7px] text-[#0A0A0A]/20 mt-1.5">9:15 AM</p>
      </div>
    </div>
    <div className="mt-3 h-10 bg-white rounded-full border border-[#0A0A0A]/10 px-4 flex items-center justify-between shadow-sm">
      <span className="text-[10px] text-[#0A0A0A]/30">Type a request...</span>
      <div className="w-6 h-6 bg-[#CFA052] rounded-full flex items-center justify-center">
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
        <h4 className="text-base font-bold text-[#0A0A0A] tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Heritage Suite Upgrade</h4>
        <p className="text-[10px] text-[#0A0A0A]/40 mt-0.5">Available for your stay dates</p>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-[#0A0A0A]">₹8,500</span>
        <span className="text-[10px] text-[#0A0A0A]/40">/night extra</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: "Courtyard View", sub: "Scenic" },
          { label: "62 SQM", sub: "Spacious" },
          { label: "Balcony", sub: "Private" },
        ].map((f, i) => (
          <div key={i} className="p-2.5 bg-[#F5F3EF] rounded-xl text-center">
            <p className="text-[9px] font-bold text-[#0A0A0A]">{f.label}</p>
            <p className="text-[7px] text-[#0A0A0A]/30 mt-0.5">{f.sub}</p>
          </div>
        ))}
      </div>
      <button className="w-full py-3 bg-[#CFA052] text-white text-[10px] font-bold rounded-xl mt-auto shadow-lg shadow-[#CFA052]/20 hover:bg-[#B8860B] transition-colors">
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
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#CFA052]/10 border border-[#CFA052]/15 mb-2">
        <Bot className="w-3 h-3 text-[#CFA052]" />
        <span className="text-[8px] text-[#CFA052] font-bold uppercase tracking-wider">AI CONCIERGE</span>
      </div>
      <h4 className="text-base font-bold text-[#0A0A0A] tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>mangoH Assistant</h4>
    </div>
    <div className="space-y-4 flex-1">
      <div className="p-3.5 bg-white rounded-2xl border border-[#0A0A0A]/5 shadow-sm">
        <p className="text-[#0A0A0A]/30 text-[9px] uppercase font-semibold mb-1.5">Your request</p>
        <p className="text-[#0A0A0A] text-[11px] leading-relaxed font-medium">"Best restaurants for dinner near Connaught Place."</p>
      </div>
      <div className="p-3.5 bg-white rounded-2xl border border-[#CFA052]/15 shadow-md shadow-[#CFA052]/5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052] animate-pulse" />
          <p className="text-[#CFA052] text-[9px] font-bold uppercase tracking-wide">Recommendations</p>
        </div>
        <div className="space-y-2.5">
          {[
            { name: "Bukhara", meta: "500m · North Indian · ★ 4.9", stars: 5 },
            { name: "Indian Accent", meta: "800m · Modern Indian · ★ 4.8", stars: 5 },
            { name: "Spice Route", meta: "1.2km · Kerala · ★ 4.7", stars: 4 },
          ].map((r, i) => (
            <div key={i} className="flex justify-between items-center p-2.5 bg-[#F5F3EF] rounded-xl hover:bg-[#CFA052]/5 transition-colors cursor-pointer">
              <div>
                <p className="text-[10px] font-bold text-[#0A0A0A]">{r.name}</p>
                <p className="text-[8px] text-[#0A0A0A]/30">{r.meta}</p>
              </div>
              <ChevronRight className="w-3 h-3 text-[#0A0A0A]/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
    <p className="text-[8px] text-[#0A0A0A]/20 text-center mt-4">Powered by mangoH AI Intelligence</p>
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
    <section ref={sectionRef} className="relative py-32 bg-[#FAF9F6] overflow-hidden">
      {/* Subtle dot grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, #0A0A0A 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <SectionTag>Results That Matter</SectionTag>
          <h2 className="text-4xl md:text-8xl font-bold tracking-tighter mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Impact in <span className="italic text-[#CFA052]">Numbers.</span>
          </h2>
          <p className="text-xl text-[#0A0A0A]/50 font-light max-w-2xl mx-auto">
            Measurable operational excellence delivered to boutique and enterprise properties alike.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Large Highlight Card - 18min */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-8 relative group"
          >
            <div className="relative bg-white rounded-[3rem] p-10 md:p-20 border border-[#0A0A0A]/5 h-full flex flex-col md:flex-row items-center gap-16 overflow-hidden hover:shadow-2xl hover:shadow-[#CFA052]/5 transition-all duration-700">
              <div className="relative z-10 flex-1">
                <div className="w-20 h-20 rounded-2xl bg-[#CFA052]/[0.08] flex items-center justify-center mb-12 group-hover:bg-[#CFA052] transition-all duration-500">
                  <Clock className="w-10 h-10 text-[#CFA052] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-bold text-[#0A0A0A] mb-6">Operational Efficiency</h3>
                <p className="text-xl text-[#0A0A0A]/50 leading-relaxed font-light mb-10">
                  From automated ID verification to digital signatures, eliminate the friction that slows your team down.
                </p>
                <div className="flex items-center gap-4 py-5 px-8 rounded-2xl bg-[#FAF9F6] border border-[#0A0A0A]/5 w-fit">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#0A0A0A]/40">Optimization active</span>
                </div>
              </div>

              <div className="relative flex-shrink-0">
                <div className="text-[10rem] md:text-[14rem] font-bold text-[#0A0A0A] tracking-tighter leading-none" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <AnimatedCounter target={22} suffix="m" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#0A0A0A]/20 mt-[-1rem] ml-4 text-center md:text-left">Saved / Reservation</p>
              </div>
            </div>
          </motion.div>

          {/* Side Column - 73% and $180 */}
          <div className="md:col-span-12 lg:col-span-4 grid grid-cols-1 gap-8">
            {/* 73% Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] rounded-[3rem] p-12 text-white relative overflow-hidden group h-full flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-4">Adoption Rate</p>
                <div className="text-8xl font-bold tracking-tighter mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <AnimatedCounter target={68} suffix="%" />
                </div>
                <p className="text-xl font-medium text-white/80 leading-snug">Digital Check-in Guest Adoption</p>
                <p className="text-sm text-white/40 mt-6 font-light leading-relaxed">Replacing paper forms across Indian 3–5 star properties.</p>
              </div>
            </motion.div>

            {/* $180 Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[3rem] p-12 border border-[#0A0A0A]/5 relative overflow-hidden group shadow-xl shadow-black/[0.01] h-full flex flex-col justify-center"
            >
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0A0A0A]/20 mb-4">Revenue Uplift</p>
                <div className="text-8xl font-bold tracking-tighter mb-6 text-[#CFA052]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <AnimatedCounter target={2400} prefix="₹" />
                </div>
                <p className="text-xl font-medium text-[#0A0A0A]/80 leading-snug">Average revenue uplift per room / stay.</p>
                <div className="mt-8 flex gap-2">
                   {[1,2,3,4].map(i => <div key={i} className="h-1.5 flex-1 bg-[#CFA052]/[0.05] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: 0.5 + i*0.15, duration: 1.2, ease: "circOut" }}
                        className="h-full bg-[#CFA052]" 
                      />
                   </div>)}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 4: Satisfaction — Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 relative group"
          >
            <div className="relative bg-white rounded-[3rem] p-10 md:p-16 border border-[#0A0A0A]/5 hover:shadow-2xl hover:shadow-[#CFA052]/5 transition-all duration-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-[#CFA052]/[0.08] flex items-center justify-center group-hover:bg-[#CFA052] transition-all duration-500">
                    <Star className="w-10 h-10 text-[#CFA052] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <div className="text-6xl md:text-7xl font-bold text-[#0A0A0A] tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>
                      <AnimatedCounter target={94} suffix="%" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0A0A0A]/40 mt-2">Verified Guest Satisfaction Score</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + s * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <Star className="w-8 h-8 fill-[#CFA052] text-[#CFA052]" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-lg text-[#0A0A0A]/40 font-light leading-relaxed mt-10 max-w-3xl">
                Based on automated post-stay digital feedback across 200+ Indian hotel properties.
              </p>
            </div>
          </motion.div>

        </div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link href="/contact" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-[#1A1A2E]/10 text-sm font-bold text-[#1A1A2E]/70 hover:text-[#CFA052] hover:border-[#CFA052]/30 hover:shadow-lg hover:shadow-[#CFA052]/5 transition-all group">
            See all case studies 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
/* ═══════════════════════════════════════════
   BEFORE vs AFTER — 21ST.DEV SHOWCASE
═══════════════════════════════════════════ */

const COMPARISONS = [
  {
    before: { title: "Staff juggling conversations everywhere", emoji: "😰", details: ["WhatsApp, email, phone, walk-ins", "Messages lost between shifts", "No conversation history"] },
    after: { title: "One centralized guest communication hub", emoji: "💬", details: ["All channels in one inbox", "Auto-translated in 120+ languages", "Full conversation timeline"] },
  },
  {
    before: { title: "Answering the same questions all day", emoji: "🔁", details: ["What time is checkout?", "What's the WiFi password?", "Where is the pool?"] },
    after: { title: "Guests get the information before they arrive", emoji: "📱", details: ["Automated pre-arrival guide", "Digital room directory", "Smart FAQ bot 24/7"] },
  },
  {
    before: { title: "Manual check-in. Long queues.", emoji: "🏢", details: ["Guests wait 15+ minutes", "Paper forms and ID copies", "Front desk bottlenecks"] },
    after: { title: "Online check-in. Faster arrivals.", emoji: "✅", details: ["Check-in from their phone", "ID verification before arrival", "Room ready on time"] },
  },
  {
    before: { title: "Empty spa slots and missed upsells", emoji: "🛏️", details: ["No visibility on guest preferences", "Staff forget to offer upgrades", "Revenue left on the table"] },
    after: { title: "Personalized upsells based on guest data", emoji: "💎", details: ["AI-driven recommendations", "Smart timing & targeting", "Up to 40% more revenue"] },
  },
  {
    before: { title: "Generic guest communication", emoji: "📧", details: ["Same template for everyone", "2-star reviews on Google", "Guests feel like a number"] },
    after: { title: "Personalized guest journey", emoji: "⭐", details: ["Tailored pre/during/post-stay", "5-star review generation", "Guests become loyal advocates"] },
  },
];

function BeforeAfterShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % COMPARISONS.length), 4500);
    return () => clearInterval(timer);
  }, []);

  const item = COMPARISONS[active];

  return (
    <div className="mt-12">
      {/* Card */}
      <div className="relative bg-white rounded-3xl border border-[#1A1A2E]/[0.06] shadow-xl shadow-black/[0.03] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]"
          >
            {/* BEFORE */}
            <div className="p-8 md:p-12 bg-[#FBF9F6]">
              <p className="text-3xl md:text-4xl italic text-[#1A1A2E]/20 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Before</p>
              <div className="text-5xl mb-4">{item.before.emoji}</div>
              <h3 className="text-lg md:text-xl font-bold text-[#1A1A2E]/80 mb-4 leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>
                {item.before.title}
              </h3>
              <ul className="space-y-2">
                {item.before.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#1A1A2E]/50">
                    <span className="text-red-400 mt-0.5">✕</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTER DIVIDER */}
            <div className="relative flex items-center justify-center py-4 md:py-0">
              {/* Mobile horizontal line */}
              <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-[#CFA052] to-transparent" />
              {/* Desktop vertical line */}
              <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-[#CFA052] to-transparent" />
              {/* VS badge */}
              <div className="absolute bg-[#CFA052] text-white text-xs font-black px-3 py-2 rounded-full shadow-lg z-10 tracking-wider">
                VS.
              </div>
            </div>

            {/* AFTER */}
            <div className="p-8 md:p-12 bg-white">
              <p className="text-3xl md:text-4xl italic mb-2" style={{ fontFamily: 'var(--font-playfair)', color: '#CFA052' }}>After</p>
              <div className="text-5xl mb-4">{item.after.emoji}</div>
              <h3 className="text-lg md:text-xl font-bold text-[#1A1A2E] mb-4 leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>
                {item.after.title}
              </h3>
              <ul className="space-y-2">
                {item.after.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#1A1A2E]/70">
                    <span className="mt-0.5" style={{ color: '#CFA052' }}>✓</span>
                    <span className="font-medium">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-3 mt-8">
        {COMPARISONS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative h-2 rounded-full transition-all duration-500"
            style={{
              width: active === i ? 32 : 8,
              backgroundColor: active === i ? '#CFA052' : '#1A1A2E15',
            }}
          />
        ))}
      </div>

      {/* Step label */}
      <p className="text-center text-xs text-[#1A1A2E]/30 font-medium mt-3 tracking-wider">
        {active + 1} / {COMPARISONS.length}
      </p>
    </div>
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

  // --- Auto-changing Hero Mockups ---
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const heroMockups = [
    "/images/mango/hero-3d.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroMockups.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroMockups.length]);

  // --- Auto-changing Guest Lifecycle ---
  const [activeLifecycleStep, setActiveLifecycleStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLifecycleStep((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Force scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
    // Also handle browser-specific scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-[#1A1A2E]" style={{ overflowX: 'clip' }}>

      {/* ══════════ BLACK HEADER BAR ══════════ */}
      <div className="w-full h-24 bg-[#1A1A2E]" />

      {/* ══════════ HERO SECTION — BLACK & GOLD EDITION ══════════ */}
      <section className="relative h-screen min-h-[850px] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-black">
        
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          
          {/* Subtle Scanning Light Effect */}
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[30vh] bg-gradient-to-b from-transparent via-[#CFA052]/5 to-transparent pointer-events-none z-20"
          />
        </div>


        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-8 items-start relative z-30 pt-10 md:pt-16">
          
          {/* LEFT — Copy */}
          <div className="flex flex-col pt-8 md:pt-16">
            {/* mangoH Product Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052]" />
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#CFA052]">mangoH</span>
              <span className="text-[10px] text-white/30 font-medium tracking-[0.1em]">by VNEXORA</span>
            </motion.div>

            <div className="overflow-hidden mb-10">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[2.2rem] md:text-[3.6rem] lg:text-[4.4rem] font-bold tracking-tight leading-[1.1] text-white" 
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                The Next Gen <br />
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  className="italic text-[#CFA052]"
                >
                  Guest Experience
                </motion.span> <br />
                solution
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-center gap-6 mb-16"
            >
               <p className="text-[10px] md:text-[11px] font-bold tracking-[0.6em] uppercase text-white/90">GUEST</p>
               <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052]" />
               <p className="text-[10px] md:text-[11px] font-bold tracking-[0.6em] uppercase text-white/90">STAFF</p>
               <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052]" />
               <p className="text-[10px] md:text-[11px] font-bold tracking-[0.6em] uppercase text-white/90">MANAGEMENT</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#E2B063" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#CFA052] text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-xl shadow-[#CFA052]/10 transition-all border border-[#CFA052]"
                >
                  Request a Demo
                </motion.button>
              </Link>
              <button 
                className="px-8 py-4 bg-transparent text-white border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2 group"
              >
                Learn More
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform opacity-50" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT — Premium 3D Mockup Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative h-[500px] lg:h-[750px] w-full flex items-center justify-center lg:justify-end"
          >
            <div
              className="relative w-full aspect-square max-w-[800px] filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={heroMockups[currentHeroIdx]} 
                    alt="MangoH Next Gen Solution Mockups" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Ambient Glows around the mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#CFA052]/5 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ══════════ THE CHALLENGE SECTION — DARK PREMIUM ══════════ */}
      <section className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#CFA052]/[0.02] blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-[800px] mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-8 bg-[#CFA052]/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052]/60">The Challenge</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.1] mb-12"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              The gap between check-in <br />
              and <span className="text-[#CFA052] italic font-medium">true loyalty.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-xl text-white/40 leading-relaxed font-light"
            >
              Traditional upselling relies on manual efforts or static promotions that miss the moment. Without automation, hotels lose the chance to convert guest interest into meaningful, personalized revenue.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { id: "01", title: "Visibility Gap", desc: "Limited insight into real-time guest preferences and behaviors.", icon: Shield },
              { id: "02", title: "Friction at Desk", desc: "Manual, slow upselling that feels intrusive rather than supportive.", icon: Clock },
              { id: "03", title: "System Silos", desc: "Fragmented tools that cannot target offers with intelligence.", icon: Zap },
              { id: "04", title: "Mass Messaging", desc: "Generic promotions that guests ignore in their crowded inbox.", icon: MessageSquare },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/[0.05] hover:border-[#CFA052]/40 transition-all duration-500 hover:bg-[#CFA052]/[0.02] hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)]"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-2xl font-bold text-[#CFA052]/40" style={{ fontFamily: 'var(--font-playfair)' }}>{item.id}.</span>
                  <item.icon className="w-6 h-6 text-[#CFA052]/40 group-hover:text-[#CFA052] transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════ GUEST LIFECYCLE SECTION — AKIA INSPIRED ══════════ */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 items-center">
            
            {/* LEFT — Circular Animation */}
            <div className="relative flex items-center justify-center min-h-[400px]">
              <div className="relative w-full max-w-[420px] aspect-square">
                {/* Main Circle SVG */}
                <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                  {/* Decorative background circle */}
                  <circle cx="200" cy="200" r="160" fill="none" stroke="#F5F3EF" strokeWidth="2" strokeDasharray="8 8" />
                  
                  {/* Color-Coded Arrow Marker Definitions */}
                  <defs>
                    {[
                      { id: "arrowhead-0", color: "#CFA052" },
                      { id: "arrowhead-1", color: "#CFA052" },
                      { id: "arrowhead-2", color: "#CFA052" },
                      { id: "arrowhead-3", color: "#000000" }
                    ].map((marker) => (
                      <marker key={marker.id} id={marker.id} markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                        <path 
                          d="M2,2 L8,5 L2,8" 
                          fill="none" 
                          stroke={marker.color} 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                        />
                      </marker>
                    ))}
                  </defs>

                  {/* Segmented Arc Paths with Color-Matched Arrows */}
                  <g fill="none" strokeWidth="2.5" strokeLinecap="round">
                    {/* Booking to Arrival */}
                    <path d="M 222,42 A 160,160 0 0,1 358,178" stroke="#CFA052" markerEnd="url(#arrowhead-0)" className={cn("transition-all duration-700", activeLifecycleStep === 0 ? "opacity-80" : "opacity-10")} />
                    {/* Arrival to Stay */}
                    <path d="M 358,222 A 160,160 0 0,1 222,358" stroke="#CFA052" markerEnd="url(#arrowhead-1)" className={cn("transition-all duration-700", activeLifecycleStep === 1 ? "opacity-80" : "opacity-10")} />
                    {/* Stay to Departure */}
                    <path d="M 178,358 A 160,160 0 0,1 42,222" stroke="#CFA052" markerEnd="url(#arrowhead-2)" className={cn("transition-all duration-700", activeLifecycleStep === 2 ? "opacity-80" : "opacity-10")} />
                    {/* Departure to Booking */}
                    <path d="M 42,178 A 160,160 0 0,1 178,42" stroke="#000000" markerEnd="url(#arrowhead-3)" className={cn("transition-all duration-700", activeLifecycleStep === 3 ? "opacity-80" : "opacity-10")} />
                  </g>

                  {/* Static Nodes (Clickable regions) */}
                  {[
                    { cx: 200, cy: 40, label: "BOOKING", color: "#CFA052", tx: 0, ty: -35 },
                    { cx: 360, cy: 200, label: "ARRIVAL", color: "#CFA052", tx: 60, ty: 5 },
                    { cx: 200, cy: 360, label: "STAY", color: "#CFA052", tx: 0, ty: 45 },
                    { cx: 40, cy: 200, label: "DEPARTURE", color: "#0A0A0A", tx: -65, ty: 5 },
                  ].map((node, i) => (
                    <g key={i} className="cursor-pointer" onClick={() => setActiveLifecycleStep(i)}>
                      <circle 
                        cx={node.cx} cy={node.cy} r="12" 
                        fill="white" 
                        stroke={node.color} 
                        strokeWidth="4"
                        className={cn("transition-all duration-500", activeLifecycleStep === i ? "r-[14] stroke-[6]" : "opacity-40")}
                      />
                      <text 
                        x={node.cx + node.tx} y={node.cy + node.ty} 
                        textAnchor="middle" 
                        className={cn("text-[10px] font-black tracking-[0.2em] transition-all duration-500", activeLifecycleStep === i ? "fill-black scale-110" : "fill-black/30")}
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}

                  {/* SLIDING AVATAR (Path Follower) — Now Layered on TOP */}
                  <motion.g
                    animate={{ 
                      x: 200 + 160 * Math.sin((activeLifecycleStep * 90) * (Math.PI / 180)) - 200,
                      y: 200 - 160 * Math.cos((activeLifecycleStep * 90) * (Math.PI / 180)) - 40
                    }}
                    transition={{ 
                      duration: 1.2, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                  >
                    <motion.circle
                      cx="200" cy="40"
                      r="16" 
                      fill="white" 
                      stroke="#CFA052" 
                      strokeWidth="2"
                      className="shadow-xl"
                    />
                    <motion.g transform="translate(190, 30)">
                       {/* High-Fidelity Human Avatar SVG */}
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="#CFA052" />
                          <path d="M12 13C7.58172 13 4 16.5817 4 21H20C20 16.5817 16.4183 13 12 13Z" fill="#CFA052" />
                       </svg>
                    </motion.g>
                  </motion.g>
                </svg>

                {/* Central Chat Bubble — Updates with phase */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeLifecycleStep}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      className="bg-[#F5F3EF] p-5 md:p-6 rounded-[2rem] shadow-xl shadow-black/5 relative max-w-[220px]"
                    >
                      <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-[#F5F3EF] rotate-45" />
                      <p className="text-[13px] font-medium text-[#0A0A0A] leading-relaxed">
                        {
                          activeLifecycleStep === 0 ? "Upgrade to Ocean View for just $40/night?" :
                          activeLifecycleStep === 1 ? "Your room is ready 2 hours early! Tap to check-in." :
                          activeLifecycleStep === 2 ? "Need fresh towels or a spa slot? Just ask here." :
                          "Thanks for staying! Here's 15% off your next visit."
                        }
                      </p>
                      
                      {/* Avatar Icon */}
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-white overflow-hidden shadow-lg">
                        <div className="w-full h-full bg-[#CFA052] flex items-center justify-center">
                           <Users className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* RIGHT — Content Column */}
            <div className="flex flex-col items-start">
              <div className={cn(
                "px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-6",
                activeLifecycleStep === 0 ? "bg-[#CFA052]/10 text-[#CFA052]" :
                activeLifecycleStep === 1 ? "bg-[#CFA052]/10 text-[#CFA052]" :
                activeLifecycleStep === 2 ? "bg-[#CFA052]/10 text-[#CFA052]" :
                "bg-gray-100 text-gray-500"
              )}>
                {
                  activeLifecycleStep === 0 ? "Booking" :
                  activeLifecycleStep === 1 ? "Arrival" :
                  activeLifecycleStep === 2 ? "Stay" :
                  "Departure"
                }
              </div>

              <div className="min-h-[250px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLifecycleStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 
                      className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] leading-tight mb-6"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {
                        activeLifecycleStep === 0 ? <><Image src="/images/logos/mangoh_logo.png" alt="mangoH" width={220} height={55} className="h-14 w-auto inline-block align-middle mr-4" /> <span className="text-[#CFA052] italic">seamlessly manages</span> the reservation journey.</> :
                        activeLifecycleStep === 1 ? <><Image src="/images/logos/mangoh_logo.png" alt="mangoH" width={220} height={55} className="h-14 w-auto inline-block align-middle mr-4" /> <span className="text-[#CFA052] italic">unlocks immediate earnings</span> with pre-arrival engagement.</> :
                        activeLifecycleStep === 2 ? <><Image src="/images/logos/mangoh_logo.png" alt="mangoH" width={220} height={55} className="h-16 w-auto inline-block align-middle mr-4" />will <span className="text-[#CFA052] italic">elevate</span> the experience.</> :
                        <><Image src="/images/logos/mangoh_logo.png" alt="mangoH" width={220} height={55} className="h-16 w-auto inline-block align-middle mr-4" />will <span className="italic text-[#0A0A0A]/40">coordinate</span> bringing them back.</>
                      }
                    </h2>
                    <p className="text-base text-[#0A0A0A]/50 font-light leading-relaxed mb-10">
                      {
                        activeLifecycleStep === 0 ? "MangoH identifies premium leads to unlock superior revenue opportunities while delivering tailored upgrades before arrival, maximizing profitability and enhancing the guest experience." :
                        activeLifecycleStep === 1 ? "MangoH drives incremental revenue through early access priority check-ins and upgrades, while maximizing guest spend with curated, location-based experiences and personalized premium services." :
                        activeLifecycleStep === 2 ? "Real-time guest communication ensures every request is handled instantly on autopilot." :
                        "mangoH learns from guest behavior and runs targeted campaigns to win past guests back effectively."
                      }
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, label: "Skill: Upsell", desc: "Drive +25% Revenue per Guest" },
                  { icon: Star, label: "Reputation", desc: "Achieve 5-Star Consistency" },
                  { icon: CreditCard, label: "Direct Booking", desc: "Increase Direct Reservations by +30%" },
                  { icon: Zap, label: "Smart Reservations", desc: "Boost Booking Conversions by +20%" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#F5F3EF] flex items-center gap-4 border border-black/[0.03] hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <stat.icon className="w-5 h-5 text-[#CFA052]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A]">{stat.label}</p>
                      <p className="text-[11px] text-black/40 font-medium">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ══════════ SKILLS SECTION — AKIA INSPIRED ══════════ */}
      <section className="py-16 px-6 bg-white overflow-hidden">
        <div className="max-w-[1300px] mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-tight mb-8"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            mangoH is <span className="italic">your</span> agent.<br />
            Give her the <span className="text-[#CFA052]">skills</span> you need.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#0A0A0A]/40 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Whether you need more direct bookings, higher guest satisfaction, or stronger brand loyalty — there's a skill for that.
          </motion.p>
        </div>

        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Reservations",
              desc: "Convert website visitors into direct bookings with AI web chat that answers questions about rooms, rates, and availability in real time.",
              color: "bg-purple-50",
              textColor: "text-purple-600",
              image: "/images/mango/skill-reservations.png",
              delay: 0
            },
            {
              title: "Guest Services",
              desc: "Handle every guest message, request, and question automatically over SMS, WhatsApp, or webchat — your front desk gets time back.",
              color: "bg-teal-50",
              textColor: "text-teal-600",
              image: "/images/mango/skill-guest-services.png",
              delay: 0.1
            },
            {
              title: "Marketing",
              desc: "Turn past guests into repeat visitors. mangoH builds targeted segments, writes email campaigns, and manages campaigns on autopilot.",
              color: "bg-yellow-50",
              textColor: "text-yellow-600",
              isIcon: true,
              delay: 0.2
            }
          ].map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: skill.delay, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full rounded-[2.5rem] bg-[#F9F9F8] border border-black/[0.03] overflow-hidden"
            >
              <div className="p-10 pb-0">
                <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">{skill.title}</h3>
                <p className="text-[#0A0A0A]/50 font-light leading-relaxed text-sm lg:text-base">
                  {skill.desc}
                </p>
              </div>

              {/* Graphic Area */}
              <div className="mt-12 relative h-[300px] w-full flex items-center justify-center">
                <div className={cn("absolute inset-0 transition-all duration-700 opacity-0 group-hover:opacity-100", skill.color)} />
                
                {skill.isIcon ? (
                  <div className="relative z-10 w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-yellow-50 overflow-hidden">
                     <div className="absolute inset-0 bg-yellow-50/30" />
                     <TrendingUp className="w-20 h-20 text-yellow-500 relative z-10" />
                  </div>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full h-full p-8"
                  >
                     <img 
                       src={skill.image} 
                       alt={skill.title} 
                       className="w-full h-full object-contain drop-shadow-2xl"
                     />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════ LIFESTYLE EXPERIENCE SECTION — WHITE EDITION ══════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1300px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-[3.5rem] p-12 md:p-20 shadow-[0_50px_120px_rgba(0,0,0,0.02)] relative overflow-visible flex flex-col lg:flex-row items-center gap-16"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CFA052]/5 rounded-full blur-[80px] -mr-32 -mt-32" />

            <div className="flex-1 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-[1px] w-8 bg-[#CFA052]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#CFA052]">The Personal Touch</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-bold tracking-tight leading-[1.2] mb-10 text-[#0A0A0A]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                The New Standard of Excellence. A personal masterpiece in every stay.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-lg text-[#0A0A0A]/60 leading-relaxed font-light mb-12 max-w-lg"
              >
                Guests today expect more than just a room. They seek personalized connections and seamless moments that reflect their unique journey. mangoH transforms every interaction into a signature experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <button className="px-10 py-5 bg-[#0A0A0A] text-white text-[10px] font-bold uppercase tracking-[0.25em] rounded-full hover:bg-[#CFA052] hover:shadow-xl hover:shadow-[#CFA052]/20 transition-all duration-500">
                  Explore Experience
                </button>
              </motion.div>
            </div>

            {/* Right Side — Family Cutout Photo Fully Contained */}
            <div
              className="flex-1 relative lg:-mr-20 lg:-mt-10 min-h-[500px] w-full"
            >
              <div className="relative w-full h-[600px]">
                <Image 
                  src="/images/mango/family-vacation-cutout.png" 
                  alt="A family celebrating their personalized hospitality experience" 
                  fill 
                  className="object-contain mix-blend-multiply"
                  priority
                />
              </div>

              {/* Float Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 bottom-20 p-6 bg-white shadow-2xl rounded-3xl border border-black/[0.03] hidden xl:block"
              >
                <p className="text-[10px] font-black uppercase tracking-widest text-[#CFA052] mb-1">Guest Loyalty</p>
                <p className="text-2xl font-bold text-[#0A0A0A]">+42% Growth</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ IMPACT IN NUMBERS — HUDINI SPLIT LAYOUT ══════════ */}
      <section className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
        {/* Subtle Gold Grain/Glow Background Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#CFA052]/30 to-transparent blur-3xl translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#CFA052]/20 to-transparent blur-3xl -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Major Stats */}
            <div className="space-y-16">
              <div className="space-y-6">
                <p className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter leading-none text-white" style={{ fontFamily: 'var(--font-playfair)' }}>40%</p>
                <p className="text-xl text-white/50 font-light max-w-sm">Decrease in response time to requests</p>
              </div>
              <div className="space-y-6">
                <p className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter leading-none text-white" style={{ fontFamily: 'var(--font-playfair)' }}>Boosted</p>
                <p className="text-xl text-white/50 font-light max-w-sm">Guest satisfaction levels</p>
              </div>
              <div className="space-y-6">
                <p className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter leading-none text-white" style={{ fontFamily: 'var(--font-playfair)' }}>Visibility</p>
                <p className="text-xl text-white/50 font-light max-w-sm">On performance for management teams</p>
              </div>
            </div>

            {/* Right: The Impact Box */}
            <div className="relative p-10 md:p-14 rounded-[2.5rem] border border-[#CFA052]/20 bg-white/[0.03] backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-10 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>The Impact:</h3>
              <ul className="space-y-8 mb-16 text-white/70">
                {[
                  "Higher guest engagement rates through personalized digital journeys.",
                  "Reduced dependency on manual upselling by front-desk teams.",
                  "Stronger brand loyalty driven by thoughtful, relevant experiences."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-[#CFA052] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ GUEST JOURNEY SOLUTIONS — STEP BY STEP ══════════ */}
      <section className="py-24 px-6 bg-[#080808] relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto relative z-10 text-center mb-20">
             <h2 className="text-[3rem] md:text-[5rem] font-bold tracking-tighter text-white leading-[0.9]" style={{ fontFamily: 'var(--font-playfair)' }}>
               Every screen becomes a <br />
               <span className="text-[#CFA052] italic">personalized channel.</span>
             </h2>
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "QR SCAN",
                desc: "A frictionless start. Guests scan a unique code in their room or around the property to instantly access services.",
                icon: Smartphone,
                color: "from-[#CFA052]/20 to-transparent"
              },
              {
                title: "BOOK SERVICE",
                desc: "Explore tailored menus, book spa treatments, or request concierge help—all through a beautiful, intuitive interface.",
                icon: Layers,
                color: "from-amber-600/10 to-transparent"
              },
              {
                title: "DELIVERED",
                desc: "Seamless fulfillment. Staff receive requests instantly, optimizing workflows and ensuring guest delight in record time.",
                icon: Zap,
                color: "from-[#CFA052]/10 to-transparent"
              }
            ].map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col items-center text-center p-8 transition-all duration-500 hover:border-[#CFA052]/30 hover:bg-white/[0.05]"
              >
                <div className={cn("w-full aspect-[4/3] rounded-[1.5rem] mb-12 flex items-center justify-center relative overflow-hidden bg-gradient-to-br", sol.color)}>
                  <sol.icon className="w-20 h-20 text-[#CFA052]/80 transform group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6 tracking-widest leading-none">{sol.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm mb-8 px-4">
                  {sol.desc}
                </p>
                <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052] hover:text-[#E9C46A] transition-colors border-b border-[#CFA052]/20 pb-1">
                  Learn more
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOSPITALITY VERTICALS — MYMA INSPIRED ══════════ */}
      <section className="py-24 px-6 bg-[#0D0D0D] overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[2.5rem] md:text-[4rem] font-bold tracking-tight leading-[1] text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
              AI for Boutique Hotels, Resorts, <br />
              <span className="text-[#CFA052]">& Beyond</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Resorts & Hotels", desc: "Improve your guests' experience and maximize your profits with leading AI technology.", icon: Globe },
              { title: "Holiday Parks", desc: "Integrated software specifically tailored to the needs of camping grounds and RV parks.", icon: Users },
              { title: "Vacation Rentals", desc: "Replace complicated manuals and dozens of emails with easy to use Guest Compendium.", icon: Home },
              { title: "Tourism Associations", desc: "Enhance the visitor experience with a virtual travel consultant that can guide and answer questions.", icon: Map },
              { title: "Experiences", desc: "Answer frequently asked questions, capture group bookings, and sell gift cards, with ease!", icon: Zap },
              { title: "Restaurants & Bars", desc: "Streamline orders and guest engagement for dynamic dining environments.", icon: Briefcase }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-[2rem] p-8 backdrop-blur-md border border-white/10 flex flex-col hover:border-[#CFA052]/30 hover:bg-white/[0.08] transition-all duration-500 group"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 bg-black/50 border border-white/5 flex items-center justify-center">
                   <item.icon className="w-16 h-16 text-[#CFA052]/30 group-hover:text-[#CFA052]/60 transition-colors" strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{item.title}</h3>
                <p className="text-[15px] text-white/50 font-light leading-relaxed mb-6">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CHAPTER 03: UNIFIED CONCIERGE ══════════ */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-[1300px] mx-auto text-center">
          <SectionTag className="border-white/20 text-white/60">Guest Communication</SectionTag>
          <h2 className="text-[4rem] md:text-[8rem] font-bold tracking-tighter mb-8 leading-[0.85]" style={{ fontFamily: 'var(--font-playfair)' }}>
            One World. <br />
            <span className="text-white/20">Unified Voice.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/40 font-light max-w-2xl mx-auto mb-20">
            WhatsApp, SMS, and in-app requests unified into a single, AI-orchestrated dashboard that speaks every language perfectly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden">
            {[
              { title: "Universal Translation", desc: "Speak with every guest in their native language across 120+ dialects." },
              { title: "AI-Powered Triage", desc: "Requests are instantly routed to the right team for immediate resolution." },
              { title: "Sentiment Engine", desc: "Identify and resolve guest friction before it turns into a review." }
            ].map((item, i) => (
              <div key={i} className="p-12 text-left hover:bg-white/[0.03] transition-colors group">
                <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 mb-8 block group-hover:text-[#CFA052] transition-colors">0{i+1}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Image removed to maintain Quiet Luxury aesthetic */}
        </div>
      </section>

      {/* ══════════ THE INTERACTIVE ARCHIVE — PHONE MOCKUP SECTION ══════════ */}
      <section className="relative px-6 bg-[#FAF9F6]">
        <div ref={featuresRef} className="max-w-[1150px] mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch min-h-screen">
            
            {/* TEXT COLUMN — Cinematic Storytelling */}
            <div className="lg:w-1/2 space-y-[20vh] pb-[20vh] pt-20">
              
              <motion.div 
                ref={step1Ref}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-30%" }}
                className="max-w-md"
              >
                <SectionTag>Chapter 01</SectionTag>
                <h2 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter mb-8 leading-[0.95]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Seamless <br />
                  <span className="italic" style={{ color: GOLD }}>Check-in.</span>
                </h2>
                <p className="text-xl text-[#0A0A0A]/50 font-light leading-relaxed">
                  The lobby is now everywhere. Guests verify identity, authorize payments, and receive their digital keys before they even arrive.
                </p>
              </motion.div>

              <motion.div 
                ref={step2Ref}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-30%" }}
                className="max-w-md"
              >
                <SectionTag>Chapter 02</SectionTag>
                <h2 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter mb-8 leading-[0.95]" style={{ fontFamily: 'var(--font-playfair)' }}>
                   Eloquent <br />
                  <span className="italic" style={{ color: GOLD }}>Dialogue.</span>
                </h2>
                <p className="text-xl text-[#0A0A0A]/50 font-light leading-relaxed">
                  One conversation, infinite channels. AI-powered concierge that translates perfectly and responds instantly.
                </p>
              </motion.div>

              <motion.div 
                ref={step3Ref}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-30%" }}
                className="max-w-md"
              >
                <SectionTag>Chapter 03</SectionTag>
                <h2 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter mb-8 leading-[0.95]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Intelligent <br />
                  <span className="italic" style={{ color: GOLD }}>Growth.</span>
                </h2>
                <p className="text-xl text-[#0A0A0A]/50 font-light leading-relaxed">
                  Monetize every touchpoint with smart, personalized upsells presented at the peak moment of guest intent.
                </p>
              </motion.div>

              <motion.div 
                ref={step4Ref}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-30%" }}
                className="max-w-md"
              >
                <SectionTag>Chapter 04</SectionTag>
                <h2 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter mb-8 leading-[0.95]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Total <br />
                  <span className="italic" style={{ color: GOLD }}>Mastery.</span>
                </h2>
                <p className="text-xl text-[#0A0A0A]/50 font-light leading-relaxed">
                  Everything automated. Everything integrated. Deep PMS connectivity that gives you absolute control over the guest journey.
                </p>
              </motion.div>

            </div>

            {/* VISUAL COLUMN — The Premium Mockup */}
            <div className="lg:w-1/2 lg:sticky lg:top-0 lg:self-start lg:h-screen flex items-center justify-center p-12">
              
              <div className="relative w-full max-w-[340px]">
                {/* Floating Abstract Background */}
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] aspect-square border-2 border-dashed border-[#CFA052]/5 rounded-full"
                />

                <motion.div 
                   className="relative z-10"
                   initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                   whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                   transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                >
                  {/* Phone Case — High Fidelity Gloss */}
                  <div className="relative bg-[#0A0A0A] rounded-[3.5rem] p-3 shadow-[0_60px_120px_rgba(0,0,0,0.5)] border border-[#CFA052]/20 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CFA052]/10 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Screen Container */}
                    <div className="relative h-[600px] rounded-[2.8rem] overflow-hidden bg-[#F5F3EF]">
                      {/* Dynamic Island Notch */}
                      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                         <div className="w-4 h-1 rounded-full bg-white/5" />
                      </div>

                      {/* Screen Content - Smooth Cross-fade based on activeFeature */}
                      <div className="relative h-full w-full">
                        <AnimatePresence mode="popLayout">
                          <motion.div
                            key={activeFeature}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            className="absolute inset-0"
                          >
                            {activeFeature === 0 && <ScreenCheckIn />}
                            {activeFeature === 1 && <ScreenMessages />}
                            {activeFeature === 2 && <ScreenUpsell />}
                            {activeFeature === 3 && <ScreenConcierge />}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      
                      {/* Interaction Glow */}
                      <motion.div 
                        animate={{ opacity: [0.05, 0.1, 0.05] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-t from-[#CFA052]/10 to-transparent pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Dynamic Floating Labels */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={`label-left-${activeFeature}`}
                    className="absolute -left-16 top-1/4 p-6 bg-white shadow-2xl rounded-3xl border border-[#CFA052]/10 hidden xl:block"
                  >
                     <p className="text-[10px] font-bold text-[#CFA052] uppercase tracking-widest mb-2">
                       {activeFeature === 0 ? "Efficiency" : activeFeature === 1 ? "Inbound" : activeFeature === 2 ? "Conversion" : "Control"}
                     </p>
                     <p className="text-lg font-bold text-[#0A0A0A]">
                       {activeFeature === 0 ? "18min Saved" : activeFeature === 1 ? "120+ Langs" : activeFeature === 2 ? "24% Uplift" : "Live View"}
                     </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={`label-right-${activeFeature}`}
                    className="absolute -right-16 bottom-1/4 p-6 bg-[#0A0A0A] text-white shadow-2xl rounded-3xl border border-[#CFA052]/20 hidden xl:block"
                  >
                     <p className="text-[10px] font-bold text-[#CFA052] uppercase tracking-widest mb-2">
                       {activeFeature === 0 ? "Satisfaction" : activeFeature === 1 ? "Wait Time" : activeFeature === 2 ? "ROI" : "Staff Efficiency"}
                     </p>
                     <p className="text-lg font-bold text-white">
                       {activeFeature === 0 ? "99.8% Core" : activeFeature === 1 ? "< 10s Resp" : activeFeature === 2 ? "4.2x Faster" : "+35% Flow"}
                     </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BEFORE vs AFTER — 21ST.DEV INTERACTIVE ══════════ */}
      <section className="py-28 px-6 bg-[#FAFAF8] overflow-hidden">
        <div className="max-w-[1000px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#CFA052' }}>
              Guest Experience, Modernized
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              See the <span className="italic" style={{ color: '#CFA052' }}>difference</span>
            </h2>
            <p className="text-base text-[#1A1A2E]/40 max-w-lg mx-auto">
              How mangoH transforms every touchpoint of your hotel operations
            </p>
          </motion.div>

          <BeforeAfterShowcase />
        </div>
      </section>

      {/* ══════════ FAQ SECTION — PREMIUM ACCORDIAN ══════════ */}
      <section className="py-28 px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Section Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <h2 className="text-[2.8rem] md:text-[3.8rem] font-bold tracking-tight leading-[1.05] mb-8 text-[#1A1A2E]" style={{ fontFamily: 'var(--font-playfair)' }}>
                Frequently Asked <br />
                <span className="italic" style={{ color: '#CFA052' }}>Questions</span>
              </h2>
              <p className="text-lg text-[#1A1A2E]/50 font-light leading-relaxed mb-8">
                At Vnexora, the brightest minds in hospitality tech drive every 
                breakthrough that creates real impact for your guest journey.
              </p>
              
              <div className="hidden lg:block w-12 h-[2px] bg-[#CFA052]/30" />
            </motion.div>

            {/* Right: Accordion */}
            <div className="space-y-4">
              <FAQItem 
                question="How does mangoH integrate with our existing PMS?"
                answer="mangoH offers deep, bi-directional integration with major PMS providers, ensuring real-time synchronization of guest data, room status, and financial authorizations without any manual data entry." 
              />
              <FAQItem 
                question="Is the check-in process fully contactless?"
                answer="Yes. Guests can complete the entire arrival flow—ID verification, digital signature, and payment authorization—directly from their smartphone before they arrive at the property." 
              />
              <FAQItem 
                question="Can we customize the interface to match our hotel's brand?"
                answer="Absolutely. mangoH is fully white-labeled. You can customize colors, logos, and the tone of our AI concierge to ensure a seamless extension of your property's exclusive identity." 
              />
              <FAQItem 
                question="Do guests need to download an app to use mangoH?"
                answer="No. mangoH is a web-based platform. Guests simply click a link sent via WhatsApp or Email, allowing for 100% adoption without the friction of an app store download." 
              />
              <FAQItem 
                question="How many languages does the AI concierge support?"
                answer="Our proprietary AI engine supports instant two-way translation in over 120 languages, allowing your staff and guests to communicate effortlessly regardless of their native tongue." 
              />
              <FAQItem 
                question="How does the platform impact our operational ROI?"
                answer="Properties using mangoH typically see a 20-30% increase in ancillary revenue through automated upselling and a significant reduction in front-desk operational overhead." 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#1A1018]">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#CFA052' }}>Convert Your Hotel Into</p>
            <h2 className="text-2xl md:text-4xl leading-tight font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Nex-Gen Modern AI Hotel
            </h2>
          </motion.div>
 
          {/* All 10 hotel feature cards — Strict 4-column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { img: "/images/mango/cards/gold-checkin-new.png", label: "Online Check-in" },
              { img: "/images/mango/cards/gold-checkout-new.png", label: "Online Check-out" },
              { img: "/images/mango/cards/gold-mobilekeys-new.png", label: "Mobile Keys" },
              { img: "/images/mango/cards/gold-hotelbrand-new.png", label: "Hotel Brands" },
              { img: "/images/mango/cards/gold-language-new.png", label: "120+ Language Support" },
              { img: "/images/mango/cards/gold-assistance-new.png", label: "24x7 Personal Assistance" },
              { img: "/images/mango/cards/gold-operation-new.png", label: "Digital Operation Control" },
              { img: "/images/mango/cards/gold-menus-new.png", label: "Digital Menus & Mobile Ordering" },
              { img: "/images/mango/cards/gold-analytics-new.png", label: "Segmentation & Analytics" },
              { img: "/images/mango/cards/gold-upsells-new.png", label: "Upsells" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={cn(
                  "rounded-[1.2rem] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#CFA052]/20 relative group bg-white/5 border border-white/5",
                  i === 8 ? "lg:col-start-2" : "" // Centers the last 2 cards in a 4-column grid
                )}
              >
                <div className="relative w-full aspect-square">
                  <Image src={card.img} alt={card.label} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL HUDINI-STYLE CTA — WANT TO KNOW MORE? ══════════ */}
      <section className="relative py-32 overflow-hidden bg-white border-t border-black/[0.03]">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-[2.8rem] md:text-[4rem] lg:text-[4.8rem] font-bold tracking-tight text-[#0A0A0A] leading-[1.05] mb-12"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Want to know more?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <ActionCard 
                  title="Request Demo" 
                  icon={MonitorPlay} 
                  href="/contact?subject=Requesting Duve Demo" 
                />
                <ActionCard 
                  title="Subscription" 
                  icon={CreditCard} 
                  href="/contact?subject=Subscription Inquiry" 
                />
                <ActionCard 
                  title="iNPLASS Affiliate Club" 
                  icon={Trophy} 
                  href="/services/partner-with-us" 
                />
                <ActionCard 
                  title="Partnership" 
                  icon={Handshake} 
                  href="/contact?subject=Strategic Partnership" 
                />
              </div>
            </motion.div>

            {/* Right Visual — Hand Entry */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:-mr-40 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[650px] aspect-[4/5]">
                <Image 
                  src="/images/mango/hand-holding-iphone-hudini.png" 
                  alt="Hudini Experience on Mobile" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════ PREMIUM POPUP — 21ST.DEV STYLE ══════════ */}
      <DemoPopup />

    </main>
  );
}

/* ═══════════════════════════════════════════
   PREMIUM FAQ ITEM COMPONENT
   Style: Rounded border, Mustard accent, Smooth frame-motion
═══════════════════════════════════════════ */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className={cn(
        "rounded-[2rem] border overflow-hidden transition-all duration-500",
        isOpen 
          ? "border-[#CFA052]/50 bg-[#F5F3EF]/30 shadow-lg shadow-[#CFA052]/5" 
          : "border-[#1A1A2E]/5 bg-white hover:border-[#CFA052]/30"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left group"
      >
        <span className={cn(
          "text-base md:text-lg font-bold tracking-tight transition-colors duration-300",
          isOpen ? "text-[#1A1A2E]" : "text-[#1A1A2E]/80 group-hover:text-[#1A1A2E]"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ml-4",
          isOpen ? "bg-[#CFA052] text-white rotate-180" : "bg-[#F5F3EF] text-[#1A1A2E]/40 group-hover:bg-[#CFA052]/10 group-hover:text-[#CFA052]"
        )}>
          <ChevronRight className="w-5 h-5 rotate-90" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-8 pb-8">
              <div className="pt-2 border-t border-[#CFA052]/10">
                <p className="text-[15px] md:text-base text-[#1A1A2E]/60 leading-relaxed font-light">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   PREMIUM POPUP COMPONENT
═══════════════════════════════════════════ */

function DemoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
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
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[90vw] max-w-[720px]"
          >
            <div className="relative bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 border border-[#CFA052]/20">
              {/* Premium Glow Effects */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#CFA052]/[0.05] via-transparent to-transparent pointer-events-none" />
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#CFA052]/10 blur-[100px] rounded-full pointer-events-none" />
              
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all z-20 group border border-white/10"
              >
                <span className="text-white/40 group-hover:text-white text-lg transition-colors">✕</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left — Text */}
                <div className="p-10 md:p-14 flex flex-col justify-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 mb-6"
                  >
                    <div className="w-8 h-[1px] bg-[#CFA052]/40" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#CFA052]">Limited Offer</span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-8"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Experience <br />
                    <span className="italic text-[#CFA052]">Quiet Luxury</span> <br />
                    for your Hotel.
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link href="/contact" className="block w-fit">
                      <button
                        onClick={handleClose}
                        className="group relative px-10 py-5 bg-[#CFA052] text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#E2B063] transition-all shadow-xl shadow-[#CFA052]/20 flex items-center justify-center gap-3"
                      >
                        Book a demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </motion.div>
                </div>

                {/* Right — Phone mockup image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative h-[320px] md:h-auto overflow-hidden bg-[#111111]"
                >
                  <Image
                    src="/images/mango/popup-phones.png"
                    alt="mangoH Guest App"
                    fill
                    className="object-cover object-center scale-110 md:scale-100"
                  />
                  {/* Overlay to blend image with black background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent md:hidden block" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
