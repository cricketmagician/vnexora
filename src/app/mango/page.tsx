"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Check,
  Smartphone,
  MessageSquare,
  TrendingUp,
  Bot,
  Clock,
  Shield,
  Zap,
  BarChart3,
  Globe,
  Wifi,
  ChevronRight,
  Play,
  Sparkles
} from "lucide-react";
import Link from "next/link";

/* ═══════════════════════════════════════════
   DESIGN TOKENS
   2-Color System: Ivory + Forest
═══════════════════════════════════════════ */
const C = {
  bg: "#FAFAF8",
  fg: "#0A1F1C",
  fgLight: "rgba(10,31,28,0.5)",
  fgMuted: "rgba(10,31,28,0.08)",
};

const features = [
  {
    id: "checkin",
    tag: "01",
    title: "Online Check-in",
    headline: "No more queues.\nNo more paperwork.",
    description: "Guests complete their entire check-in digitally before arrival — ID verification, preferences, and agreements. Your front desk is liberated to deliver hospitality, not handle administration.",
    icon: <Smartphone className="w-7 h-7" />,
  },
  {
    id: "communication",
    tag: "02",
    title: "Communication Hub",
    headline: "Every message.\nOne unified inbox.",
    description: "Consolidate WhatsApp, SMS, email, and in-app messages into a single intelligent dashboard. Respond to guests faster, automate routine queries, and never miss a request.",
    icon: <MessageSquare className="w-7 h-7" />,
  },
  {
    id: "upselling",
    tag: "03",
    title: "Smart Upselling",
    headline: "The right offer.\nThe right moment.",
    description: "mangoH learns guest preferences from booking data and behavior to surface relevant upgrades, spa packages, dining experiences — driving ancillary revenue without being intrusive.",
    icon: <TrendingUp className="w-7 h-7" />,
  },
  {
    id: "concierge",
    tag: "04",
    title: "AI Concierge",
    headline: "24/7 intelligence.\nZero wait time.",
    description: "Our generative AI agent handles guest inquiries around the clock — from restaurant recommendations to transport bookings — in 30+ languages, with the warmth of a human concierge.",
    icon: <Bot className="w-7 h-7" />,
  },
];

/* ═══════════════════════════════════════════
   ANIMATED COUNTER COMPONENT
═══════════════════════════════════════════ */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    const timer = setTimeout(() => {
      setHasAnimated(true);
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = duration / end;
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(counter);
      }, stepTime);
    }, 500);
    return () => clearTimeout(timer);
  }, [value, hasAnimated]);

  return <>{count}{suffix}</>;
}

/* ═══════════════════════════════════════════
   PHONE MOCKUP COMPONENT
═══════════════════════════════════════════ */
function PhoneMockup({ activeFeature }: { activeFeature: string }) {
  return (
    <div className="relative w-[300px] md:w-[340px] mx-auto">
      {/* Ambient glow */}
      <div className="absolute -inset-20 bg-[#0A1F1C]/[0.03] rounded-full blur-3xl" />
      
      {/* Phone body */}
      <div className="relative bg-white rounded-[3.2rem] p-[6px] shadow-[0_40px_100px_rgba(10,31,28,0.12),0_0_0_1px_rgba(10,31,28,0.04)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-white rounded-b-3xl z-20 flex items-center justify-center">
          <div className="w-[60px] h-[4px] bg-[#0A1F1C]/10 rounded-full mt-1" />
        </div>
        
        <div className="rounded-[2.8rem] overflow-hidden bg-[#F5F4F0] aspect-[9/19.5] relative">
          <AnimatePresence mode="wait">
            {activeFeature === "checkin" && (
              <motion.div 
                key="checkin"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }}
                className="p-6 pt-14 h-full flex flex-col"
              >
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A1F1C] mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Smartphone className="w-6 h-6 text-[#FAFAF8]" />
                  </div>
                  <p className="text-lg font-bold tracking-tight">Online Check-in</p>
                  <p className="text-[10px] text-[#0A1F1C]/40 mt-1">Complete in 2 minutes</p>
                </div>
                <div className="space-y-3 flex-1">
                  {["Guest Details", "ID Verification", "Room Preferences"].map((step, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${i < 2 ? 'bg-[#0A1F1C]' : 'bg-[#0A1F1C]/10'}`}>
                        {i < 2 ? <Check className="w-4 h-4 text-[#FAFAF8]" /> : <span className="text-xs font-bold">{i + 1}</span>}
                      </div>
                      <div>
                        <p className="text-xs font-semibold">{step}</p>
                        <p className="text-[9px] text-[#0A1F1C]/40">{i < 2 ? 'Completed' : 'In Progress'}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0A1F1C] rounded-2xl p-4 mt-4">
                  <p className="text-xs font-semibold text-[#FAFAF8] text-center">Continue Check-in →</p>
                </div>
              </motion.div>
            )}
            {activeFeature === "communication" && (
              <motion.div 
                key="communication"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }}
                className="p-6 pt-14 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0A1F1C] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-[#FAFAF8]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Messages</p>
                    <p className="text-[9px] text-[#0A1F1C]/40">3 conversations</p>
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  {[
                    { from: "Front Desk", msg: "Your room is ready! 🎉", time: "2m" },
                    { from: "Spa & Wellness", msg: "Appointment confirmed for 3 PM", time: "1h" },
                    { from: "Restaurant", msg: "Table for 2 at 8 PM — confirmed ✓", time: "3h" },
                  ].map((m, i) => (
                    <div key={i} className="bg-white rounded-2xl p-3 shadow-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#0A1F1C]/10 flex-shrink-0 flex items-center justify-center">
                          <span className="text-[8px] font-bold">{m.from[0]}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="text-[10px] font-bold">{m.from}</p>
                            <p className="text-[8px] text-[#0A1F1C]/30">{m.time}</p>
                          </div>
                          <p className="text-[9px] text-[#0A1F1C]/60 mt-0.5">{m.msg}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="flex-1 h-10 bg-white rounded-full border border-[#0A1F1C]/10 px-4 flex items-center">
                    <span className="text-[9px] text-[#0A1F1C]/30">Type a message...</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#0A1F1C] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#FAFAF8]" />
                  </div>
                </div>
              </motion.div>
            )}
            {activeFeature === "upselling" && (
              <motion.div 
                key="upselling"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }}
                className="p-6 pt-14 h-full flex flex-col"
              >
                <p className="text-[10px] text-[#0A1F1C]/40 uppercase tracking-widest mb-3">Recommended for You</p>
                <div className="space-y-3 flex-1">
                  {[
                    { name: "Ocean View Suite", price: "+$120/night", tag: "Popular" },
                    { name: "Spa & Wellness Package", price: "$89", tag: "New" },
                    { name: "Late Checkout", price: "$45", tag: "" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                      <div className="h-20 bg-gradient-to-br from-[#0A1F1C]/5 to-[#0A1F1C]/10 relative">
                        {item.tag && (
                          <span className="absolute top-2 right-2 px-2 py-0.5 bg-[#0A1F1C] text-[#FAFAF8] text-[7px] font-bold rounded-full uppercase tracking-wider">{item.tag}</span>
                        )}
                      </div>
                      <div className="p-3 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold">{item.name}</p>
                          <p className="text-[9px] text-[#0A1F1C]/40">{item.price}</p>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[#0A1F1C] flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-[#FAFAF8]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {activeFeature === "concierge" && (
              <motion.div 
                key="concierge"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }}
                className="p-6 pt-14 h-full flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#0A1F1C] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#FAFAF8]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">mangoH AI</p>
                    <p className="text-[8px] text-emerald-600">● Online</p>
                  </div>
                </div>
                <div className="space-y-3 flex-1 overflow-hidden">
                  <div className="bg-[#0A1F1C]/5 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                    <p className="text-[10px] leading-relaxed">What restaurants nearby would you recommend for a romantic dinner?</p>
                  </div>
                  <div className="bg-[#0A1F1C] rounded-2xl rounded-tr-sm p-3 max-w-[90%] ml-auto">
                    <p className="text-[10px] text-[#FAFAF8] leading-relaxed">I'd recommend <strong>La Terrazza</strong> — a 5-min walk, famous for their sunset terrace and seafood. Perfect for a romantic evening! 🌅</p>
                    <p className="text-[8px] text-[#FAFAF8]/40 mt-2">Shall I reserve a table?</p>
                  </div>
                  <div className="bg-[#0A1F1C]/5 rounded-2xl rounded-tl-sm p-3 max-w-[55%]">
                    <p className="text-[10px]">Yes, 8pm for 2</p>
                  </div>
                  <div className="bg-[#0A1F1C] rounded-2xl rounded-tr-sm p-3 max-w-[85%] ml-auto">
                    <p className="text-[10px] text-[#FAFAF8] leading-relaxed">Done! Table confirmed at La Terrazza, 8 PM for 2. I've added it to your itinerary. ✅</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div 
        className="absolute -left-16 top-[30%] bg-white rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgba(10,31,28,0.08)] border border-[#0A1F1C]/5 hidden lg:flex items-center gap-3"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
          <Check className="w-4 h-4 text-emerald-600" />
        </div>
        <div>
          <p className="text-[10px] font-bold">Checked in</p>
          <p className="text-[8px] text-[#0A1F1C]/30">Just now</p>
        </div>
      </motion.div>

      <motion.div 
        className="absolute -right-14 bottom-[25%] bg-white rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgba(10,31,28,0.08)] border border-[#0A1F1C]/5 hidden lg:flex items-center gap-3"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="w-8 h-8 rounded-full bg-[#0A1F1C]/5 flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-[#0A1F1C]" />
        </div>
        <div>
          <p className="text-[10px] font-bold">+$220/room</p>
          <p className="text-[8px] text-[#0A1F1C]/30">Revenue uplift</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export default function MangoHPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#0A1F1C] overflow-hidden">
      
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-24">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(${C.fg} 1px, transparent 1px), linear-gradient(90deg, ${C.fg} 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        
        {/* Large decorative number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[40vw] font-bold text-[#0A1F1C]/[0.02] leading-none select-none pointer-events-none hidden lg:block">
          m
        </div>

        <div className="container mx-auto max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            
            {/* Left */}
            <div className="lg:w-[55%]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
              >
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1F1C]/[0.04] border border-[#0A1F1C]/[0.06] mb-10"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-semibold tracking-wide">Vnexora's Guest Experience Platform</span>
                </motion.div>

                {/* Headline */}
                <h1 className="text-[3.2rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[0.95] tracking-[-0.04em] mb-10">
                  Transform
                  <br />
                  How You Do
                  <br />
                  <span className="relative inline-block">
                    <span className="italic font-light">Hospitality</span>
                    <motion.span 
                      className="absolute -bottom-2 left-0 h-[3px] bg-[#0A1F1C]"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    />
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-[#0A1F1C]/50 leading-relaxed max-w-lg mb-12 font-light">
                  From digital check-in to tailored upsells, mangoH streamlines guest journeys, drives revenue, and enhances operational efficiency.
                </p>

                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <Link href="/contact">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-10 py-5 bg-[#0A1F1C] text-[#FAFAF8] text-sm font-semibold tracking-wide rounded-full flex items-center gap-3 shadow-[0_10px_40px_rgba(10,31,28,0.2)] hover:shadow-[0_15px_50px_rgba(10,31,28,0.3)] transition-shadow duration-500"
                    >
                      Book a Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <button className="flex items-center gap-3 text-sm font-semibold group">
                    <div className="w-12 h-12 rounded-full border-2 border-[#0A1F1C]/15 flex items-center justify-center group-hover:border-[#0A1F1C]/40 transition-colors">
                      <Play className="w-4 h-4 ml-0.5" />
                    </div>
                    Watch Demo
                  </button>
                </div>

                {/* Social Proof */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-16 flex items-center gap-8"
                >
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#0A1F1C] text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-[11px] text-[#0A1F1C]/40">4.9/5 from 200+ hotels</p>
                  </div>
                  <div className="w-px h-10 bg-[#0A1F1C]/10" />
                  <div>
                    <p className="text-2xl font-bold tracking-tight">200+</p>
                    <p className="text-[11px] text-[#0A1F1C]/40">Properties worldwide</p>
                  </div>
                  <div className="w-px h-10 bg-[#0A1F1C]/10 hidden sm:block" />
                  <div className="hidden sm:block">
                    <p className="text-2xl font-bold tracking-tight">50M+</p>
                    <p className="text-[11px] text-[#0A1F1C]/40">Guest interactions</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right - Phone */}
            <motion.div 
              className="lg:w-[45%]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0, 1] }}
            >
              <PhoneMockup activeFeature={features[activeFeature].id} />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#0A1F1C]/30 font-semibold">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#0A1F1C]/20 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════ METRICS ══════════ */}
      <section className="py-28 md:py-36 px-6 md:px-12 bg-[#0A1F1C] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-white/[0.03] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full border border-white/[0.03] translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto max-w-[1200px] relative z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#FAFAF8]/30 text-[11px] font-semibold uppercase tracking-[0.4em] text-center mb-20"
          >
            Measurable Impact
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-white/10">
            {[
              { value: 12, suffix: " min", label: "saved per reservation", desc: "Eliminate check-in queues and manual processes entirely." },
              { value: 85, suffix: "%", label: "online check-in rate", desc: "Guests complete check-in before arriving at your property." },
              { value: 220, suffix: "", prefix: "$", label: "avg. revenue uplift", desc: "Per room, per month through intelligent upselling." },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center py-10 md:py-0 md:px-12 group cursor-default"
                onMouseEnter={() => setHoveredMetric(i)}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <div className="mb-6">
                  <span className="text-6xl md:text-7xl font-bold text-[#FAFAF8] tracking-tight">
                    {metric.prefix || ""}<AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </span>
                </div>
                <p className="text-[#FAFAF8]/80 font-semibold text-lg mb-3">{metric.label}</p>
                <p className="text-[#FAFAF8]/30 text-sm leading-relaxed max-w-xs mx-auto">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PLATFORM STATEMENT ══════════ */}
      <section className="py-32 md:py-44 px-6 text-center relative">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(${C.fg} 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
        <div className="container mx-auto max-w-[900px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-semibold text-[#0A1F1C]/30 uppercase tracking-[0.4em] mb-8">The Platform</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] mb-10">
              One platform.
              <br />
              <span className="italic font-light">Every touchpoint.</span>
            </h2>
            <p className="text-[#0A1F1C]/40 text-xl leading-relaxed max-w-2xl mx-auto font-light">
              The only digital layer you need between your guest and an unforgettable stay. From pre-arrival to post-checkout.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════ INTERACTIVE FEATURES ══════════ */}
      <section className="pb-32 md:pb-44 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Feature Tabs - Left */}
            <div className="lg:w-[55%]">
              <div className="lg:sticky lg:top-32">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setActiveFeature(i)}
                    className={`group cursor-pointer border-l-2 transition-all duration-500 pl-8 md:pl-12 py-8 md:py-10 ${
                      activeFeature === i 
                        ? 'border-[#0A1F1C] bg-[#0A1F1C]/[0.02]' 
                        : 'border-[#0A1F1C]/10 hover:border-[#0A1F1C]/30'
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                        activeFeature === i 
                          ? 'bg-[#0A1F1C] text-[#FAFAF8] shadow-[0_8px_24px_rgba(10,31,28,0.2)]' 
                          : 'bg-[#0A1F1C]/5 text-[#0A1F1C]'
                      }`}>
                        {feature.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#0A1F1C]/30 uppercase tracking-[0.3em]">{feature.tag}</span>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-1 mb-3">{feature.title}</h3>
                        <AnimatePresence mode="wait">
                          {activeFeature === i && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              <p className="text-xl font-semibold text-[#0A1F1C]/80 mb-3 leading-snug whitespace-pre-line">{feature.headline}</p>
                              <p className="text-[#0A1F1C]/40 leading-relaxed font-light">{feature.description}</p>
                              <Link href="/contact" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold group/link hover:gap-3 transition-all">
                                Learn more <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Phone - Right */}
            <div className="lg:w-[45%] flex items-center justify-center">
              <div className="lg:sticky lg:top-40">
                <PhoneMockup activeFeature={features[activeFeature].id} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHY MANGOH ══════════ */}
      <section className="py-28 md:py-36 px-6 md:px-12 bg-[#0A1F1C]/[0.02] border-y border-[#0A1F1C]/[0.04]">
        <div className="container mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[11px] font-semibold text-[#0A1F1C]/30 uppercase tracking-[0.4em] mb-6">Why mangoH</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Built for modern hospitality
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Clock className="w-5 h-5" />, title: "Save 12+ Hours Weekly", desc: "Automate repetitive tasks and liberate your team to focus on what matters — the guest experience." },
              { icon: <TrendingUp className="w-5 h-5" />, title: "Drive Ancillary Revenue", desc: "Intelligent upselling generates significant income with zero extra effort from your staff." },
              { icon: <Shield className="w-5 h-5" />, title: "Enterprise Security", desc: "SOC 2 compliant with enterprise-grade encryption and full GDPR compliance." },
              { icon: <Zap className="w-5 h-5" />, title: "Go Live in 48 Hours", desc: "Guided onboarding with dedicated support — no disruption to your operations." },
              { icon: <BarChart3 className="w-5 h-5" />, title: "Real-time Analytics", desc: "Live dashboards tracking check-in rates, guest satisfaction, and revenue metrics." },
              { icon: <Globe className="w-5 h-5" />, title: "30+ Languages", desc: "Serve international guests in their native language — automatically translated in real-time." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-3xl p-8 border border-[#0A1F1C]/[0.04] hover:border-[#0A1F1C]/10 hover:shadow-[0_20px_60px_rgba(10,31,28,0.06)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0A1F1C]/[0.04] flex items-center justify-center mb-6 group-hover:bg-[#0A1F1C] group-hover:text-[#FAFAF8] transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-3 tracking-tight">{item.title}</h4>
                <p className="text-[#0A1F1C]/40 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ INTEGRATIONS ══════════ */}
      <section className="py-28 md:py-36 px-6 text-center">
        <div className="container mx-auto max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-semibold text-[#0A1F1C]/30 uppercase tracking-[0.4em] mb-6">Integrations</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Connects with everything
            </h2>
            <p className="text-[#0A1F1C]/40 text-lg max-w-xl mx-auto mb-16 font-light">
              mangoH integrates seamlessly with your existing tech stack — zero disruption, full power.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Opera PMS", "Mews", "Cloudbeds", "RoomRaccoon", "Guesty", "Hostaway", "apaleo", "Protel"].map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-[#0A1F1C]/[0.04] hover:border-[#0A1F1C]/10 hover:shadow-[0_10px_40px_rgba(10,31,28,0.05)] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A1F1C]/[0.04] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0A1F1C] transition-colors duration-500">
                  <Wifi className="w-4 h-4 group-hover:text-[#FAFAF8] transition-colors duration-500" />
                </div>
                <p className="text-sm font-bold">{name}</p>
                <p className="text-[10px] text-[#0A1F1C]/25 mt-1">Connected</p>
              </motion.div>
            ))}
          </div>
          <p className="text-[11px] text-[#0A1F1C]/25 mt-10 font-medium">+ 150 more integrations available</p>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="relative py-32 md:py-44 px-6 bg-[#0A1F1C] overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white/[0.05]" />
        </div>
        
        <div className="container mx-auto max-w-[800px] text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-semibold text-[#FAFAF8]/20 uppercase tracking-[0.4em] mb-10">Get Started</p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#FAFAF8] tracking-tight mb-8 leading-[1.05]">
              Ready to transform
              <br />
              <span className="italic font-light">your guest experience?</span>
            </h2>
            <p className="text-[#FAFAF8]/40 text-lg mb-14 max-w-lg mx-auto font-light">
              Join the hospitality leaders already using mangoH to delight guests and grow revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-12 py-5 bg-[#FAFAF8] text-[#0A1F1C] text-sm font-bold tracking-wide rounded-full flex items-center gap-3 shadow-[0_10px_40px_rgba(250,250,248,0.15)]"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/services">
                <button className="px-12 py-5 bg-transparent border border-[#FAFAF8]/15 text-[#FAFAF8] text-sm font-semibold tracking-wide rounded-full hover:border-[#FAFAF8]/30 transition-all duration-300">
                  View All Solutions
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
