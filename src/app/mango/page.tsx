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
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════
   DESIGN TOKENS — DUVE-INSPIRED LIGHT PALETTE
   Primary: #7C5CFC (Soft Violet)
   Background: #FFFFFF / #F5F3EF (Warm Ivory)
   Text: #1A1A2E (Deep Ink) / #6B7280 (Warm Gray)
   Accent shapes: lavender/gold organic blobs
═══════════════════════════════════════════ */

const VIOLET = "#7C5CFC";
const VIOLET_LIGHT = "#EDE9FE";
const IVORY = "#FAF9F6"; // Slightly warmer ivory
const INK = "#0A0A0A"; // Deeper black for higher contrast
const CHARCOAL = "#2D2D2D"; // For secondary text

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
            Impact in <span className="italic text-[#7C5CFC]">Numbers.</span>
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
            <div className="relative bg-white rounded-[3rem] p-10 md:p-20 border border-[#0A0A0A]/5 h-full flex flex-col md:flex-row items-center gap-16 overflow-hidden hover:shadow-2xl hover:shadow-[#7C5CFC]/5 transition-all duration-700">
              <div className="relative z-10 flex-1">
                <div className="w-20 h-20 rounded-2xl bg-[#7C5CFC]/[0.08] flex items-center justify-center mb-12 group-hover:bg-[#7C5CFC] transition-all duration-500">
                  <Clock className="w-10 h-10 text-[#7C5CFC] group-hover:text-white transition-colors duration-500" />
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
                  <AnimatedCounter target={18} suffix="m" />
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
                  <AnimatedCounter target={73} suffix="%" />
                </div>
                <p className="text-xl font-medium text-white/80 leading-snug">Online Check-in Guest Adoption</p>
                <p className="text-sm text-white/40 mt-6 font-light leading-relaxed">Setting new industry benchmarks for pure digital engagement.</p>
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
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0A0A0A]/20 mb-4">Commercial Uplift</p>
                <div className="text-8xl font-bold tracking-tighter mb-6 text-[#7C5CFC]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <AnimatedCounter target={180} prefix="$" />
                </div>
                <p className="text-xl font-medium text-[#0A0A0A]/80 leading-snug">Average revenue uplift per room / stay.</p>
                <div className="mt-8 flex gap-2">
                   {[1,2,3,4].map(i => <div key={i} className="h-1.5 flex-1 bg-[#7C5CFC]/[0.05] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: 0.5 + i*0.15, duration: 1.2, ease: "circOut" }}
                        className="h-full bg-[#7C5CFC]" 
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
            <div className="relative bg-white rounded-[3rem] p-10 md:p-16 border border-[#0A0A0A]/5 hover:shadow-2xl hover:shadow-[#7C5CFC]/5 transition-all duration-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-[#7C5CFC]/[0.08] flex items-center justify-center group-hover:bg-[#7C5CFC] transition-all duration-500">
                    <Star className="w-10 h-10 text-[#7C5CFC] group-hover:text-white transition-colors duration-500" />
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
                      <Star className="w-8 h-8 fill-[#7C5CFC] text-[#7C5CFC]" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-lg text-[#0A0A0A]/40 font-light leading-relaxed mt-10 max-w-3xl">
                Based on automated post-stay digital feedback across 500+ luxury properties globally.
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

      {/* ══════════ HERO SECTION ══════════ */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-20 pb-20 overflow-hidden bg-[#FAF9F6]">
        
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col justify-center h-full"
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="h-[1px] w-8 bg-[#0A0A0A]/20" />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0A0A0A]/40">Reimagining Hospitality</span>
            </div>

            <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] font-bold tracking-tighter leading-[0.85] mb-12 text-[#0A0A0A]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Quiet <span className="italic" style={{ color: VIOLET }}>Luxury</span> <br />
              <span className="opacity-10">Defined.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#0A0A0A]/50 leading-relaxed font-light mb-12 max-w-xl">
              From seamless check-ins to intelligent concierge, we provide the digital layer that powers modern, world-class guest experiences.
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-20">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#0A0A0A" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-[#7C5CFC] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-[#7C5CFC]/20 transition-all"
                >
                  Start Transformation
                </motion.button>
              </Link>
              <button className="flex items-center gap-4 text-[#0A0A0A] font-bold uppercase tracking-[0.2em] text-[10px] group">
                <div className="w-12 h-12 rounded-full border border-[#0A0A0A]/10 flex items-center justify-center group-hover:border-[#7C5CFC] transition-all">
                  <Play className="w-3 h-3 ml-0.5 fill-current" />
                </div>
                The Vision
              </button>
            </div>

            <div className="flex items-center gap-10 opacity-40">
               <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1">Response Time</p>
                  <p className="text-xl font-medium">&lt; 30 Seconds</p>
               </div>
               <div className="h-8 w-[1px] bg-black/10" />
               <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1">Satisfaction</p>
                  <p className="text-xl font-medium">99.8% Core</p>
               </div>
            </div>
          </motion.div>

          {/* RIGHT — High Impact Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative h-[600px] lg:h-[800px] w-full"
          >
            <div className="absolute inset-0 bg-[#0A0A0A]/5 rounded-[3rem] -rotate-2 scale-95 blur-3xl opacity-20 pointer-events-none" />
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/20 shadow-[-40px_40px_80px_rgba(0,0,0,0.1)]">
              <Image 
                src="/images/mango/editorial-hero.png" 
                alt="Luxury hotel editorial vision" 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 via-transparent to-transparent" />
              
              {/* Overlapping Badge */}
              <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-xl flex items-center justify-between">
                 <div>
                    <h4 className="text-xl font-bold tracking-tight text-[#0A0A0A]">Elite Guest Experience</h4>
                    <p className="text-sm text-[#0A0A0A]/50">Powered by MangoH Intelligence</p>
                 </div>
                 <div className="w-14 h-14 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white">
                    <ArrowUpRight className="w-6 h-6" />
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
              
              {/* Added to fill empty space — Destination Pills */}
              <div className="flex flex-wrap gap-2.5 mt-10 max-w-sm">
                {["Goa", "Jaipur", "Mumbai", "Delhi", "Udaipur", "Bangalore"].map((city) => (
                  <motion.div 
                    key={city}
                    whileHover={{ scale: 1.05, borderColor: '#E5793B60', color: '#E5793B' }}
                    className="px-4 py-2 rounded-xl border border-[#1A1A2E]/5 bg-[#1A1A2E]/[0.02] text-[9.5px] font-black text-[#1A1A2E]/40 uppercase tracking-[0.2em] transition-all cursor-default"
                  >
                    {city}
                  </motion.div>
                ))}
              </div>

              {/* Added Mini Stats to fill space */}
              <div className="flex items-center gap-12 mt-16 pt-10 border-t border-[#1A1A2E]/5">
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'var(--font-playfair)' }}>500</span>
                    <span className="text-lg font-bold text-[#E5793B]">+</span>
                  </div>
                  <span className="text-[9px] uppercase font-black tracking-[0.3em] text-[#1A1A2E]/30 mt-1">Properties</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'var(--font-playfair)' }}>15</span>
                    <span className="text-lg font-bold text-[#E5793B]">+</span>
                  </div>
                  <span className="text-[9px] uppercase font-black tracking-[0.3em] text-[#1A1A2E]/30 mt-1">Key Cities</span>
                </div>
              </div>

              <div className="w-1 h-12 bg-[#E5793B] rounded-full mt-12 opacity-40" />
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

          {/* Performance Stats — Premium Floating Glass Refinement */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-20 border-t border-[#1A1A2E]/5">
            {[
              { value: "40%", prefix: "Up to", label: "More Revenue", icon: TrendingUp, color: "#CFA052" },
              { value: "30%", prefix: "Up to", label: "Less Operational Cost", icon: Briefcase, color: "#CFA052" },
              { value: "60%", prefix: "Up to", label: "Better Guest Reviews", icon: Star, color: "#CFA052" },
              { value: "30%", prefix: "Up to", label: "Faster Guest Service", icon: Zap, color: "#CFA052" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12 }}
                className="group relative bg-white rounded-[2rem] p-10 text-center border border-[#1A1A2E]/[0.03] shadow-[0_20px_50px_-20px_rgba(26,26,46,0.06)] hover:shadow-[0_40px_80px_-25px_rgba(207,160,82,0.12)] hover:border-[#CFA052]/20 transition-all duration-700 cursor-default"
              >
                {/* Floating Icon Halo */}
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
                  style={{ backgroundColor: `${stat.color}08`, border: `1px solid ${stat.color}15` }}
                >
                  <stat.icon className="w-7 h-7" style={{ color: stat.color }} strokeWidth={1.5} />
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] text-[#1A1A2E]/40 font-bold uppercase tracking-[0.2em] mb-3">
                    {stat.prefix}
                  </p>
                  <div className="relative inline-block">
                    <span 
                      className="text-5xl md:text-6xl font-bold tracking-tighter leading-none block" 
                      style={{ fontFamily: 'var(--font-playfair)', color: stat.color }}
                    >
                      {stat.value}
                    </span>
                    {/* Subtle underline grow on hover */}
                    <motion.div 
                      className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full origin-left bg-[#CFA052]/20"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                    />
                  </div>
                  <p className="text-[15px] text-[#1A1A2E]/80 font-bold mt-5 tracking-tight group-hover:text-[#1A1A2E] transition-colors">
                    {stat.label}
                  </p>
                </div>

                {/* Corner Sparkle Effect on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Sparkles className="w-4 h-4" style={{ color: `${stat.color}30` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ STATS SECTION — 21ST.DEV PREMIUM ══════════ */}
      <StatsSection21st />

      {/* ══════════ FEATURE SECTIONS — ALTERNATING LAYOUT ══════════ */}

      {/* ══════════ CHAPTER 01: THE NEW ARRIVAL ══════════ */}
      <section className="py-40 px-6 bg-[#FAF9F6]">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="max-w-xl">
                 <SectionTag>Online Check-in</SectionTag>
                 <h2 className="text-[4rem] md:text-[6.5rem] font-bold tracking-tighter mb-10 leading-[0.9]" style={{ fontFamily: 'var(--font-playfair)' }}>
                   Invisible <br />
                   <span className="italic" style={{ color: VIOLET }}>Arrivals.</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-[#0A0A0A]/50 font-light leading-relaxed mb-12">
                   Guests can check-in before they ever set foot in the lobby—eliminating queues and giving your team time back for the art of hospitality.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-2">
                       <p className="text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/30">Verification</p>
                       <p className="text-base font-medium text-[#0A0A0A]">Biometric ID & Document Collection</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/30">Efficiency</p>
                       <p className="text-base font-medium text-[#0A0A0A]">Instant Digital Keys & Payment</p>
                    </div>
                 </div>
                 <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#0A0A0A] group border-b border-[#0A0A0A]/10 pb-2 hover:border-[#7C5CFC] transition-all">
                   Explore the Flow
                   <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 transition-transform duration-700 hover:scale-[1.02]">
                <Image src="/images/mango/hotel-checkin.png" alt="Digital check-in experience" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ CHAPTER 02: THE INTELLIGENT GUEST ══════════ */}
      <section className="py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 transition-transform duration-700 hover:scale-[1.02]">
                <Image src="/images/mango/spa-wellness.png" alt="Spa upsell experience" fill className="object-cover" />
                 <div className="absolute -bottom-10 -right-10 bg-[#7C5CFC] text-white p-12 rounded-[2rem] shadow-2xl hidden md:block">
                    <TrendingUp className="w-10 h-10 mb-6" />
                    <p className="text-3xl font-bold tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>+18% Uplift</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Avg Revenue Growth</p>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="max-w-xl ml-auto lg:text-right">
                <SectionTag>Smart Upselling</SectionTag>
                <h2 className="text-[4rem] md:text-[6.5rem] font-bold tracking-tighter mb-10 leading-[0.9]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Anticipating <br />
                  <span className="italic" style={{ color: VIOLET }}>Desires.</span>
                </h2>
                <p className="text-xl md:text-2xl text-[#0A0A0A]/50 font-light leading-relaxed mb-12">
                  Anticipate Every need. Our AI-driven engine delivers the right experience to the right guest at the peak moment of intent.
                </p>
                <div className="flex flex-col lg:items-end gap-6 mb-12">
                  <div className="flex items-center gap-4">
                    <span className="h-[1px] w-12 bg-[#0A0A0A]/10" />
                    <span className="text-base font-medium text-[#0A0A0A]">One-Tap Experience Conversions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="h-[1px] w-12 bg-[#0A0A0A]/10" />
                    <span className="text-base font-medium text-[#0A0A0A]">Behavioral Intent Triggers</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="h-[1px] w-12 bg-[#0A0A0A]/10" />
                    <span className="text-base font-medium text-[#0A0A0A]">Commission-Free Monetization</span>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#0A0A0A] group border-b border-[#0A0A0A]/10 pb-2 hover:border-[#7C5CFC] transition-all">
                   Revenue Potential
                   <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ CHAPTER 03: UNIFIED CONCIERGE ══════════ */}
      <section className="py-40 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-[1300px] mx-auto text-center">
          <SectionTag className="border-white/20 text-white/60">Guest Communication</SectionTag>
          <h2 className="text-[4rem] md:text-[8rem] font-bold tracking-tighter mb-12 leading-[0.85]" style={{ fontFamily: 'var(--font-playfair)' }}>
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
                <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 mb-8 block group-hover:text-[#7C5CFC] transition-colors">0{i+1}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
             <Image 
               src="/images/mango/concierge-service.png" 
               alt="Digital Concierge Dashboard" 
               width={1200} 
               height={600} 
               className="rounded-[3rem] shadow-2xl border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000"
             />
          </div>
        </div>
      </section>

      {/* ══════════ THE INTERACTIVE ARCHIVE — PHONE MOCKUP SECTION ══════════ */}
      <section className="relative px-6 bg-[#FAF9F6]">
        <div ref={featuresRef} className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch min-h-screen">
            
            {/* TEXT COLUMN — Cinematic Storytelling */}
            <div className="lg:w-1/2 space-y-[40vh] pb-[40vh] pt-40">
              
              <motion.div 
                ref={step1Ref}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-30%" }}
                className="max-w-md"
              >
                <SectionTag>Chapter 01</SectionTag>
                <h2 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter mb-8 leading-[0.95]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Seamless <br />
                  <span className="italic" style={{ color: VIOLET }}>Check-in.</span>
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
                  <span className="italic" style={{ color: VIOLET }}>Dialogue.</span>
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
                  <span className="italic" style={{ color: VIOLET }}>Growth.</span>
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
                  <span className="italic" style={{ color: VIOLET }}>Mastery.</span>
                </h2>
                <p className="text-xl text-[#0A0A0A]/50 font-light leading-relaxed">
                  Everything automated. Everything integrated. Deep PMS connectivity that gives you absolute control over the guest journey.
                </p>
              </motion.div>

            </div>

            {/* VISUAL COLUMN — The Premium Mockup */}
            <div className="lg:w-1/2 lg:sticky lg:top-0 lg:self-start lg:h-screen flex items-center justify-center p-12">
              
              <div className="relative w-full max-w-[400px]">
                {/* Floating Abstract Background */}
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border-2 border-dashed border-[#0A0A0A]/5 rounded-full"
                />

                <motion.div 
                   className="relative z-10"
                   initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                   whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                   transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                >
                  {/* Phone Case — High Fidelity Gloss */}
                  <div className="relative bg-[#0A0A0A] rounded-[4rem] p-3.5 shadow-[0_80px_160px_rgba(0,0,0,0.2)] border border-white/10 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Screen Container */}
                    <div className="relative h-[650px] rounded-[3.2rem] overflow-hidden bg-[#F5F3EF]">
                      <AnimatePresence mode="wait">
                        {activeFeature === 0 && <ScreenCheckIn key="0" />}
                        {activeFeature === 1 && <ScreenMessages key="1" />}
                        {activeFeature === 2 && <ScreenUpsell key="2" />}
                        {activeFeature === 3 && <ScreenConcierge key="3" />}
                      </AnimatePresence>
                      
                      {/* Interaction Glow */}
                      <motion.div 
                        animate={{ opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-t from-[#7C5CFC]/5 to-transparent pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Dynamic Floating Labels */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute -left-12 top-1/4 p-6 bg-white shadow-2xl rounded-3xl border border-[#0A0A0A]/5 hidden xl:block"
                  >
                     <p className="text-[10px] font-bold text-[#0A0A0A]/30 uppercase tracking-widest mb-2">Efficiency</p>
                     <p className="text-lg font-bold">18min Saved</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute -right-12 bottom-1/4 p-6 bg-[#0A0A0A] text-white shadow-2xl rounded-3xl border border-white/5 hidden xl:block"
                  >
                     <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Satisfaction</p>
                     <p className="text-lg font-bold">99.8% Core</p>
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
