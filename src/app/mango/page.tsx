"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  Sparkles,
  Users,
  LayoutGrid,
  ZapIcon,
  Search,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { ShimmerText } from "@/components/ui/ShimmerText";

/* ═══════════════════════════════════════════
   UI COMPONENTS & FRAGMENTS
   (REDESIGNED FOR PREMIUM AESTHETIC)
═══════════════════════════════════════════ */

const FeatureLine = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 py-2 border-b border-white/5">
    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
    <span className="text-sm font-medium tracking-tight text-white/70">{text}</span>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="h-px w-8 bg-emerald-500/20" />
    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400/60 transition-colors hover:text-emerald-400">
      {children}
    </span>
  </div>
);

/* ═══════════════════════════════════════════
   APP UI SCREENS (MOCKUPS)
   (REDESIGNED WITH GLASSMORHISM)
═══════════════════════════════════════════ */

const ScreenCheckIn = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
    className="p-6 pt-12 h-full flex flex-col bg-white"
  >
    <div className="mb-8">
      <h4 className="text-xl font-bold tracking-tight mb-1 text-slate-900" style={{ fontFamily: 'var(--font-playfair)' }}>Pre-arrival</h4>
      <p className="text-[10px] text-slate-400">4 steps to complete</p>
    </div>
    <div className="space-y-4 flex-1">
      {[
        { t: "Passport Scan", s: "Verified", active: true },
        { t: "Payment Method", s: "Authorized", active: true },
        { t: "Arrival Window", s: "Select time", active: false },
        { t: "Concierge Request", s: "Optional", active: false },
      ].map((step, i) => (
        <div key={i} className={`p-4 rounded-2xl border transition-all duration-300 ${step.active ? 'bg-emerald-600 text-white border-transparent shadow-lg shadow-emerald-600/20' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-bold">{step.t}</span>
            {step.active ? <Check className="w-3 h-3" /> : <div className="w-3 h-3 rounded-full border border-current opacity-20" />}
          </div>
          <p className={`text-[9px] mt-1 ${step.active ? 'opacity-80' : 'opacity-60'}`}>{step.s}</p>
        </div>
      ))}
    </div>
    <div className="h-12 w-full rounded-2xl bg-slate-900 mt-6 flex items-center justify-center shadow-xl">
      <span className="text-[11px] font-bold text-white">Continue to Step 3 →</span>
    </div>
  </motion.div>
);

const ScreenMessages = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
    className="p-4 pt-12 h-full flex flex-col bg-slate-50"
  >
    <div className="flex items-center justify-between mb-6 px-2">
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Live Concierge</h4>
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
    </div>
    <div className="flex-1 space-y-4 px-2">
      <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-slate-100">
        <p className="text-[10px] leading-relaxed text-slate-700">Good morning Sarah! Your Executive Suite is now ready. Would you like us to bring up your bags? 🧳</p>
      </div>
      <div className="bg-emerald-600 p-3 rounded-2xl rounded-tr-none shadow-lg shadow-emerald-600/10 max-w-[80%] ml-auto">
        <p className="text-[10px] text-white leading-relaxed">Yes please! Also, can we get extra towels? Thanks!</p>
      </div>
      <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-slate-100">
        <p className="text-[10px] leading-relaxed text-slate-700">Absolutely. Our team is on it. Anything else for your arrival? ✨</p>
      </div>
    </div>
    <div className="mt-4 h-10 bg-white rounded-full border border-slate-200 px-4 flex items-center justify-between shadow-sm">
      <span className="text-[10px] text-slate-400 italic">Type a request...</span>
      <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
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
    <div className="h-48 bg-emerald-900 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent z-10" />
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80')]" />
      <Sparkles className="w-12 h-12 text-white/20 z-20" />
      <div className="absolute bottom-4 left-4 z-20">
        <h4 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Upgrade to Penthouse</h4>
        <p className="text-[10px] text-white/80">Available for your stay</p>
      </div>
    </div>
    <div className="p-6 space-y-5 flex-1 flex flex-col">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-slate-900">$120 <span className="text-[10px] font-normal text-slate-400">/night</span></span>
        <div className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[8px] font-bold uppercase tracking-wider">Exclusive Offer</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 bg-slate-50 rounded-xl text-center border border-slate-100">
          <p className="text-[10px] font-bold text-slate-800">Ocean View</p>
          <p className="text-[8px] text-slate-400 mt-1">Panoramic</p>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl text-center border border-slate-100">
          <p className="text-[10px] font-bold text-slate-800">140 SQM</p>
          <p className="text-[8px] text-slate-400 mt-1">Spacious</p>
        </div>
      </div>
      <button className="w-full py-3 bg-slate-900 text-white text-[10px] font-bold rounded-xl mt-auto shadow-xl hover:bg-slate-800 transition-colors">Book Upgrade Now</button>
    </div>
  </motion.div>
);

const ScreenConcierge = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
    className="p-6 pt-12 h-full flex flex-col bg-slate-950"
  >
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-2">
        <Bot className="w-3 h-3 text-emerald-400" />
        <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-wider">AI CONCIERGE</span>
      </div>
      <h4 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>mangoH Assistant</h4>
    </div>
    <div className="space-y-6 flex-1">
      <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
        <p className="text-white/30 text-[9px] uppercase font-semibold mb-2">Analyzing Request...</p>
        <p className="text-white text-[11px] leading-relaxed">"Suggest 3 farm-to-table restaurants within walking distance."</p>
      </div>
      <div className="p-4 bg-emerald-500/[0.08] rounded-2xl border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-emerald-400/60 text-[9px] font-bold uppercase">Smart Recommendations</p>
        </div>
        <div className="space-y-3">
          {[
            { name: "The Greenhouse", meta: "300m · Organic" },
            { name: "Roots & Leaves", meta: "600m · Garden" },
            { name: "Field's Edge", meta: "800m · Local" },
          ].map((r, i) => (
            <div key={i} className="flex justify-between items-center p-2 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
              <div>
                <p className="text-[10px] font-bold text-white">{r.name}</p>
                <p className="text-[8px] text-white/30">{r.meta}</p>
              </div>
              <ChevronRight className="w-3 h-3 text-white/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
    <p className="text-[8px] text-white/20 text-center mt-6">Powered by Vnexora AI Intelligence</p>
  </motion.div>
);

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */

export default function MangoPremiumPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which feature is currently active based on scroll (0 to 1)
  const [activeFeature, setActiveFeature] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.25) setActiveFeature(0);
      else if (latest < 0.5) setActiveFeature(1);
      else if (latest < 0.75) setActiveFeature(2);
      else setActiveFeature(3);
    });
  }, [scrollYProgress]);

  const phoneX = useTransform(scrollYProgress, [0, 0.1], [100, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      
      {/* ══════════ AMBIENT BACKGROUND GLOWS ══════════ */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/10 blur-[180px] rounded-full opacity-50" />
      </div>

      {/* ══════════ GRAIN OVERLAY ══════════ */}
      <div className="fixed inset-0 pointer-events-none z-[99]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.05,
        mixBlendMode: 'overlay'
      }} />

      {/* ══════════ HERO SECTION ══════════ */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
        
        <div className="max-w-[1200px] w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl mb-12 group cursor-pointer hover:border-emerald-500/30 transition-all duration-500">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 group-hover:text-white transition-colors">mangoH Guest Experience Hub</span>
              <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-emerald-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <h1 className="text-[3.5rem] md:text-[6.5rem] lg:text-[9rem] font-bold tracking-tight leading-[0.85] mb-12" style={{ fontFamily: 'var(--font-playfair)' }}>
              Superior
              <br />
              <span className="relative">
                <ShimmerText className="italic font-light text-emerald-400/90">Hospitality</ShimmerText>
                <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-[1px]" />
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed font-light mb-16 px-4">
              Unlock a new dimension of guest engagement with mangoH. 
              The ultimate bridge between luxury service and digital efficiency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-12 py-6 bg-white text-slate-950 text-xs font-bold tracking-[0.3em] rounded-full overflow-hidden group shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                >
                  <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 group-hover:text-white transition-colors">BOOK A LIVE DEMO</span>
                </motion.button>
              </Link>
              <div className="flex items-center gap-4 text-white/40 text-sm font-medium hover:text-white/60 transition-colors">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030712] bg-slate-800 flex items-center justify-center overflow-hidden">
                      <Users className="w-4 h-4 text-white/20" />
                    </div>
                  ))}
                </div>
                Trusted by 500+ global properties
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }} 
            className="absolute -top-1/2 -left-1/4 w-[1200px] h-[1200px] border-[0.5px] border-emerald-500/20 rounded-full" 
          />
          <motion.div 
            animate={{ rotate: -360, scale: [1, 1.05, 1] }} 
            transition={{ duration: 75, repeat: Infinity, ease: "linear" }} 
            className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] border-[0.5px] border-blue-500/10 rounded-full" 
          />
        </div>
      </section>

      {/* ══════════ BENTO GRID FEATURES ══════════ */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-24">
            <SectionLabel>Technology</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
              Engineered for <span className="italic text-emerald-400">Excellence.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            <GlowCard className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between" glowColor="rgba(16, 185, 129, 0.15)">
              <div>
                <Bot className="w-10 h-10 text-emerald-400 mb-6" />
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Vnexora Intelligence</h3>
                <p className="text-white/50 text-lg leading-relaxed font-light">
                  An advanced LLM engine trained specifically on luxury hospitality standards. 
                  Provide instant, human-like responses to 90% of guest inquiries.
                </p>
              </div>
              <div className="mt-12 flex gap-4">
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest">30+ Languages</div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest">24/7 Support</div>
              </div>
            </GlowCard>

            <GlowCard className="md:col-span-2 p-8 flex items-center gap-8" glowColor="rgba(59, 130, 246, 0.15)">
              <div className="flex-1">
                <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 tracking-tight">Upsell Engine</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  Data-driven room upgrades and services delivered at the perfect moment.
                </p>
              </div>
              <div className="text-4xl font-bold text-blue-400">+22%</div>
            </GlowCard>

            <GlowCard className="p-8 group cursor-default" glowColor="rgba(251, 191, 36, 0.15)">
              <Zap className="w-8 h-8 text-amber-400 mb-4 transition-transform group-hover:scale-125" />
              <h3 className="text-lg font-bold mb-2 tracking-tight">Real-time</h3>
              <p className="text-white/40 text-xs leading-relaxed">
                Instant PMS synchronization.
              </p>
            </GlowCard>

            <GlowCard className="p-8 group cursor-default" glowColor="rgba(167, 139, 250, 0.15)">
              <Shield className="w-8 h-8 text-purple-400 mb-4 transition-transform group-hover:scale-125" />
              <h3 className="text-lg font-bold mb-2 tracking-tight">Secure</h3>
              <p className="text-white/40 text-xs leading-relaxed">
                Enterprise-grade data encryption.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* ══════════ THE CORE NARRATIVE (SCROLL CONTENT) ══════════ */}
      <section className="relative px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-[1400px]">
          
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* TEXT COLUMN - SCROLLS */}
            <div className="lg:w-1/2 space-y-[40vh] pb-[40vh]">
              
              {/* Feature 01 */}
              <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-40%" }}
                className="pt-20"
              >
                <SectionLabel>Arrival Experience 01</SectionLabel>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Invisible
                  <br />
                  <span className="text-emerald-400 italic">Check-in.</span>
                </h2>
                <p className="text-xl text-white/50 font-light leading-relaxed mb-10 max-w-lg">
                  Erase the lobby wait. Guests complete ID verification, signatures, and payments from their devices. 
                  Arrival becomes a curated welcome, not a administrative task.
                </p>
                <div className="space-y-3 max-w-sm">
                  <FeatureLine text="Biometric ID Verification" />
                  <FeatureLine text="Contactless Payment Bridge" />
                  <FeatureLine text="Digital Key Distribution" />
                </div>
              </motion.div>

              {/* Feature 02 */}
              <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-40%" }}
              >
                <SectionLabel>Omnichannel 02</SectionLabel>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Unified
                  <br />
                  <span className="text-blue-400 italic">Dialogue.</span>
                </h2>
                <p className="text-xl text-white/50 font-light leading-relaxed mb-10 max-w-lg">
                  WhatsApp, SMS, and In-App messages consolidated into a single, intelligent flow. 
                  Respond at scale without losing the personal touch.
                </p>
                <div className="space-y-3 max-w-sm">
                  <FeatureLine text="WhatsApp & SMS Integration" />
                  <FeatureLine text="Smart Team Task Routing" />
                  <FeatureLine text="Sentiment Analysis Engine" />
                </div>
              </motion.div>

              {/* Feature 03 */}
              <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-40%" }}
              >
                <SectionLabel>Monetization 03</SectionLabel>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Peak Intent
                  <br />
                  <span className="text-amber-400 italic">Upselling.</span>
                </h2>
                <p className="text-xl text-white/50 font-light leading-relaxed mb-10 max-w-lg">
                  Our AI identifies guest needs before they even ask. Present tailored upgrades, 
                  late check-outs, and services when the guest is most likely to convert.
                </p>
                <div className="space-y-3 max-w-sm">
                  <FeatureLine text="Behavioral Event Triggers" />
                  <FeatureLine text="Dynamic Pricing Integration" />
                  <FeatureLine text="One-Tap Conversion" />
                </div>
              </motion.div>

              {/* Feature 04 */}
              <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-40%" }}
              >
                <SectionLabel>Intelligence 04</SectionLabel>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Autonomous
                  <br />
                  <span className="text-purple-400 italic">Concierge.</span>
                </h2>
                <p className="text-xl text-white/50 font-light leading-relaxed mb-10 max-w-lg">
                  A 24/7 expert that knows every detail of your property and local area. 
                  Recommendations that feel professional, personalized, and instant.
                </p>
                <div className="space-y-3 max-w-sm">
                  <FeatureLine text="Real-time Local Knowledge" />
                  <FeatureLine text="Seamless Staff Handoff" />
                  <FeatureLine text="Multiscreen Compatibility" />
                </div>
              </motion.div>

            </div>

            {/* VISUAL COLUMN - STICKY PHONE */}
            <div className="lg:w-1/2 h-[100vh] lg:sticky lg:top-0 flex items-center justify-center perspective-1000">
              
              <motion.div 
                style={{ rotateY: phoneRotate, x: phoneX, opacity: phoneOpacity, scale: phoneScale }}
                className="relative w-[320px] md:w-[380px]"
              >
                {/* Visual Glow */}
                <div className="absolute -inset-20 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" />
                
                {/* The Phone Case (REDESIGNED) */}
                <div className="relative bg-slate-900 rounded-[4rem] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] border border-white/10">
                  
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-3xl z-30 flex items-center justify-center p-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 ml-2" />
                    <div className="flex-1" />
                    <div className="w-4 h-1 rounded-full bg-white/10 mr-2" />
                  </div>
                  
                  {/* Screen Content Wrapper */}
                  <div className="relative h-[680px] md:h-[750px] rounded-[3.2rem] overflow-hidden bg-slate-950">
                    
                    {/* Screen Sections */}
                    <AnimatePresence mode="wait">
                      {activeFeature === 0 && <ScreenCheckIn key="0" />}
                      {activeFeature === 1 && <ScreenMessages key="1" />}
                      {activeFeature === 2 && <ScreenUpsell key="2" />}
                      {activeFeature === 3 && <ScreenConcierge key="3" />}
                    </AnimatePresence>

                    {/* Bottom Indicator Bar */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/10 rounded-full z-30" />
                  </div>
                </div>

                {/* Floating Elements Around Phone */}
                <motion.div 
                  className="absolute -right-16 top-1/4 bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 hidden xl:block"
                  animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }}
                >
                  <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">+18% Revenue</div>
                  <div className="text-[8px] text-white/30 mt-1">Direct upsell uplift</div>
                </motion.div>

                <motion.div 
                  className="absolute -left-16 bottom-1/4 bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 hidden xl:block"
                  animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                >
                   <Users className="w-8 h-8 text-blue-400 mb-3" />
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400">85% Digital</div>
                  <div className="text-[8px] text-white/30 mt-1">Guest adoption rate</div>
                </motion.div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════ METRICS SHOWCASE ══════════ */}
      <section className="py-60 relative overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40L40 0' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }} />
        
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-[5.5rem] font-bold text-white tracking-tighter mb-12" style={{ fontFamily: 'var(--font-playfair)' }}>
              Legacy-grade <span className="italic">Performance.</span>
            </h2>
            <div className="h-0.5 w-40 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { val: "12m", label: "SAVED PER KEY", desc: "Front-desk time reclaimed from administrative paperwork." },
              { val: "$220", label: "REVENUE / ROOM", desc: "Average monthly uplift from AI-driven contextual upsells." },
              { val: "94%", label: "SATISFACTION", desc: "Guest rating increase within the first 90 days of deployment." },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.8 }}
                className="text-center group"
              >
                <div className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tighter transition-transform group-hover:scale-110 duration-700" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {m.val}
                </div>
                <h4 className="text-xs font-bold text-emerald-400 tracking-[0.4em] mb-6 uppercase">{m.label}</h4>
                <p className="text-white/40 text-sm leading-relaxed max-w-[260px] mx-auto font-light">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ INTEGRATIONS ══════════ */}
      <section className="py-40 px-6 bg-[#030712]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12">
            <div className="max-w-2xl">
              <SectionLabel>Integrations</SectionLabel>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                Fits right <span className="italic text-emerald-400">in.</span>
              </h2>
            </div>
            <p className="text-white/40 text-lg font-light max-w-sm mb-2 leading-relaxed">
              Zero friction deployment. mangoH integrates with 100+ hospitality tech providers instantly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {["OPERA", "MEWS", "CLOUDBEDS", "GUESTY", "PROTEL", "SITEMINDER", "APALEO", "HOSTAWAY"].map((p, i) => (
               <GlowCard key={i} className="p-12 flex flex-col items-center justify-center group" glowColor="rgba(255, 255, 255, 0.05)">
                 <div className="w-14 h-14 rounded-full border border-white/5 mb-8 flex items-center justify-center bg-white/[0.02] group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all duration-500">
                   <Wifi className="w-6 h-6 text-white/20 group-hover:text-emerald-400" />
                 </div>
                 <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 group-hover:text-white transition-all">{p}</span>
               </GlowCard>
             ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="relative py-60 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-600/5 blur-[120px]" />
        
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-16 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ready to redefine 
              <br />
              <span className="italic font-light text-emerald-400">your legacy?</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto mb-20 font-light leading-relaxed">
              Join the properties leading the digital transformation of luxury hospitality. 
              Secure your personalized walkthrough today.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/contact">
                <button className="px-16 py-8 bg-emerald-600 text-white text-[10px] font-bold tracking-[0.5em] rounded-full hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-emerald-500/20">
                  START YOUR JOURNEY
                </button>
              </Link>
              <button className="text-[10px] font-bold tracking-[0.4em] text-white/40 hover:text-white transition-colors uppercase">
                View case studies →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5" />
      </section>

    </main>
  );
}
