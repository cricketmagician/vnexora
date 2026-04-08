"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  Handshake,
  Globe,
  TrendingUp,
  Building2,
  BarChart3,
  Check,
  ChevronDown,
  Zap,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

// ── tiny helpers ──────────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-4">
      <div className="w-10 h-px bg-[#CFA052]" />
      <span className="text-[10px] font-black uppercase tracking-[0.7em] text-[#CFA052]">
        {children}
      </span>
      <div className="w-10 h-px bg-[#CFA052]" />
    </div>
  );
}

function AnimatedNumber({ n, suffix = "" }: { n: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let cur = 0;
    const increment = n / (2200 / 16);
    const interval = setInterval(() => {
      cur += increment;
      if (cur >= n) { setDisplay(n); clearInterval(interval); }
      else setDisplay(Math.floor(cur));
    }, 16);
    return () => clearInterval(interval);
  }, [isInView, n]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ── page ─────────────────────────────────────────────────────────────────────

export default function PartnerWithUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeModel, setActiveModel] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [form, setForm] = useState({
    entity: "",
    email: "",
    tier: "Joint Venture",
    objective: "",
  });

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const { scrollYProgress: stickyProgress } = useScroll({ target: stickyRef, offset: ["start start", "end end"] });

  // hero parallax
  const heroY   = useTransform(scrollYProgress, [0, 0.12], ["0%", "30%"]);
  const heroOp  = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // sticky panel index
  const panelIndex = useTransform(stickyProgress, [0.05, 0.9], [0, 3]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitInquiry({
        fullName: form.entity || "Partnership Lead",
        email: form.email,
        subject: `Partnership Inquiry — ${form.tier}`,
        message: `Organization: ${form.entity}\nPartnership Tier: ${form.tier}\nObjective: ${form.objective}`,
        source: "partner_with_us_page",
      });
      if (result.success) { setIsSubmitted(true); toast.success("Brief received. Our directorate will contact you."); }
      else toast.error(result.message);
    } catch { toast.error("Submission error. Please try again."); }
    finally { setIsSubmitting(false); }
  };

  // ── partnership models ──
  const models = [
    {
      icon: Handshake,
      number: "01",
      title: "Joint Venture & Equity",
      short: "Co-invest",
      desc: "Strategic capital partnerships where we co-invest alongside owners and developers in high-yield hospitality assets. Shared governance, shared upside.",
      highlights: ["Equity co-investment", "Governance frameworks", "Profit participation", "Exit strategy advisory"],
      color: "from-amber-900/30 to-transparent",
    },
    {
      icon: Globe,
      number: "02",
      title: "Brand Licensing",
      short: "Licensing",
      desc: "License the Vnexora brand and operating playbook to qualified independent operators seeking institutional credibility and global distribution access.",
      highlights: ["Brand license agreements", "SOPs & playbooks", "Global distribution", "Quality audits"],
      color: "from-stone-900/40 to-transparent",
    },
    {
      icon: Building2,
      number: "03",
      title: "Third-Party Management",
      short: "Management",
      desc: "Full-service hotel management for asset owners who want institutional returns without operational involvement. We operate; you benefit.",
      highlights: ["P&L responsibility", "Talent deployment", "Revenue management", "Monthly audit reports"],
      color: "from-zinc-900/40 to-transparent",
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Development Advisory",
      short: "Advisory",
      desc: "End-to-end advisory for hospitality development projects — from feasibility to brand selection, design brief to pre-opening management.",
      highlights: ["Feasibility studies", "Concept & positioning", "Brand selection", "Pre-opening mgmt"],
      color: "from-neutral-900/40 to-transparent",
    },
  ];

  return (
    <main ref={containerRef} className="bg-[#050505] text-white font-sans selection:bg-[#CFA052] selection:text-black overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          1. FULL-BLEED CINEMATIC HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">

        {/* Background image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 scale-110">
          <Image src="/images/partner/hero_nexus.png" alt="Vnexora Partnership" fill className="object-cover brightness-[0.35]" priority />
        </motion.div>

        {/* Gold grain overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

        {/* Vignette */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-0" />

        {/* Content */}
        <motion.div style={{ opacity: heroOp }} className="relative z-10 text-center px-6 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <Tag>Strategic Institutional Nexus</Tag>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] md:text-[9vw] lg:text-[7.5rem] font-serif italic text-white leading-[0.9] tracking-tighter mb-8"
          >
            Partner<br />
            <span className="not-italic text-[#CFA052]">With Us.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/50 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Scaling the next echelon of hospitality through collaborative capital,
            operational excellence, and brand synergy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#invite"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-[#CFA052] text-black text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white transition-all duration-500 shadow-[0_20px_50px_rgba(207,160,82,0.3)]"
            >
              Initiate Dialogue
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#models"
              className="inline-flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-[0.4em] hover:text-white transition-colors"
            >
              Explore Models <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════════════════ */}
      <section className="border-y border-white/[0.06] bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { label: "Hotel Assets", value: 15, suffix: "" },
              { label: "Keys Managed", value: 550, suffix: "+" },
              { label: "Years of Authority", value: 18, suffix: "+" },
              { label: "Global Brands", value: 56, suffix: "" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-14 px-10 text-center group"
              >
                <div className="text-5xl md:text-6xl font-serif text-[#CFA052] mb-3 tabular-nums">
                  <AnimatedNumber n={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. WHY VNEXORA — editorial split
      ══════════════════════════════════════════════════ */}
      <section className="py-40 bg-[#050505] relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-[#CFA052]/[0.04] rounded-full blur-[200px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.6)]">
                <Image src="/images/partner/synergy.png" alt="Partnership Synergy" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute -bottom-8 -right-8 bg-[#CFA052] p-8 rounded-[2rem] shadow-2xl"
              >
                <div className="text-3xl font-serif text-black font-bold leading-none mb-1">Select</div>
                <div className="text-[8px] font-black text-black/60 uppercase tracking-[0.3em]">Mandates Only</div>
              </motion.div>
            </motion.div>

            {/* Right — text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <Tag>Why Vnexora</Tag>

              <h2 className="text-5xl md:text-7xl font-serif leading-[1.05] tracking-tighter">
                Not Just a Firm.{" "}
                <span className="italic text-[#CFA052]">A Nexus.</span>
              </h2>

              <p className="text-white/50 text-xl font-light leading-[1.85]">
                We operate at the intersection of institutional finance and hospitality craft. Our partnerships are not transactional — they are structural, long-term, and designed for asymmetric value creation.
              </p>

              <div className="space-y-6 pt-6 border-t border-white/[0.06]">
                {[
                  { icon: Zap,    text: "Proprietary yield optimization — avg. +28% RevPAR uplift" },
                  { icon: Shield, text: "Institutional audit & governance frameworks on every mandate" },
                  { icon: Star,   text: "IIT-trained leadership with 15+ years of built experience" },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#CFA052]/10 border border-[#CFA052]/20 flex items-center justify-center text-[#CFA052] shrink-0 group-hover:bg-[#CFA052] group-hover:text-black transition-all duration-500">
                      <Icon size={18} />
                    </div>
                    <p className="text-white/60 text-base font-light leading-relaxed pt-1">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. PARTNERSHIP MODELS — sticky scroll
      ══════════════════════════════════════════════════ */}
      <section id="models" ref={stickyRef} className="relative bg-[#050505] py-32">
        <div className="flex flex-col justify-center overflow-hidden">

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <div className="text-[25vw] font-serif font-black text-white/[0.015] whitespace-nowrap tracking-tighter leading-none">
              NEXUS
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="text-center mb-16">
              <Tag>Partnership Models</Tag>
              <h2 className="text-5xl md:text-7xl font-serif italic text-white mt-8 tracking-tighter leading-none">
                Choose Your Vertical.
              </h2>
            </div>

            {/* Model tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {models.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setActiveModel(i)}
                  className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] border transition-all duration-500 ${
                    activeModel === i
                      ? "bg-[#CFA052] border-[#CFA052] text-black"
                      : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/70"
                  }`}
                >
                  {m.short}
                </button>
              ))}
            </div>

            {/* Active model card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl mx-auto"
              >
                <div className={`relative bg-gradient-to-br ${models[activeModel].color} bg-[#0D0D0D] border border-white/[0.07] rounded-[3rem] p-12 md:p-16 overflow-hidden`}>
                  {/* Glow corner */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#CFA052]/10 rounded-full blur-[80px]" />

                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-[#CFA052]/10 border border-[#CFA052]/20 flex items-center justify-center text-[#CFA052]">
                          {(() => { const Icon = models[activeModel].icon; return <Icon size={28} />; })()}
                        </div>
                        <span className="text-[#CFA052]/40 text-5xl font-serif font-black">{models[activeModel].number}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-6 leading-tight">
                        {models[activeModel].title}
                      </h3>
                      <p className="text-white/50 text-lg font-light leading-relaxed">
                        {models[activeModel].desc}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30 mb-6">Inclusions</div>
                      {models[activeModel].highlights.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-center gap-4 py-4 border-b border-white/[0.05] group"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#CFA052]/10 flex items-center justify-center shrink-0">
                            <Check size={12} className="text-[#CFA052]" />
                          </div>
                          <span className="text-white/70 text-sm font-light">{h}</span>
                        </motion.div>
                      ))}

                      <a
                        href="#invite"
                        className="group inline-flex items-center gap-3 mt-6 text-[10px] font-black uppercase tracking-[0.4em] text-[#CFA052] hover:gap-5 transition-all duration-300"
                      >
                        Apply for this model <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Model dots */}
            <div className="flex justify-center gap-3 mt-10">
              {models.map((_, i) => (
                <button key={i} onClick={() => setActiveModel(i)} className={`rounded-full transition-all duration-500 ${i === activeModel ? "w-8 h-2 bg-[#CFA052]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4B. HOW WE PARTNER — process timeline
      ══════════════════════════════════════════════════ */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Decorative BG watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="text-[22vw] font-serif font-black text-black/[0.025] whitespace-nowrap tracking-tighter leading-none">
            PROCESS
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-[#CFA052]" />
                <span className="text-[10px] font-black uppercase tracking-[0.7em] text-[#CFA052]">Partnership Journey</span>
                <div className="w-10 h-px bg-[#CFA052]" />
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-black leading-[1.05] tracking-tighter">
                How We <span className="italic text-[#CFA052]">Partner.</span>
              </h2>
            </motion.div>
          </div>

          {/* Steps */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0 relative">
            {/* Vertical spine on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/[0.06] -translate-x-1/2" />

            {[
              {
                num: "01",
                title: "Submit Your Brief",
                desc: "Share your asset details, partnership objectives, and financial expectations through our confidential inquiry form. All submissions are reviewed at directorate level.",
                align: "right",
              },
              {
                num: "02",
                title: "Screening & Call",
                desc: "Our team reviews your brief within 5 business days. If qualified, we schedule a focused 45-minute strategy call to understand your mandate in depth.",
                align: "left",
              },
              {
                num: "03",
                title: "Proposal & NDA",
                desc: "We present a bespoke partnership proposal including structure, commercial terms, and a phased execution roadmap — all under a mutual NDA.",
                align: "right",
              },
              {
                num: "04",
                title: "Mandate & Onboarding",
                desc: "Once aligned, we execute the mandate agreement and begin structured 90-day onboarding — deploying our team, systems, and brand playbook.",
                align: "left",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`relative pb-16 md:pb-20 group ${
                  step.align === "right"
                    ? "md:pr-16 md:text-right"
                    : "md:pl-16 md:col-start-2"
                }`}
              >
                {/* Dot on the spine */}
                <div className={`hidden md:flex absolute top-2 items-center justify-center w-5 h-5 rounded-full bg-[#CFA052] border-4 border-white shadow-[0_0_0_2px_#CFA052] z-10 ${
                  step.align === "right" ? "-right-[10px]" : "-left-[10px]"
                }`} />

                {/* Step number */}
                <div className={`text-6xl font-serif text-[#CFA052]/20 font-black leading-none mb-4 group-hover:text-[#CFA052]/40 transition-colors duration-500`}>
                  {step.num}
                </div>

                <h3 className="text-2xl font-serif text-black mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-black/50 font-light leading-relaxed text-base">
                  {step.desc}
                </p>

                {/* Bottom rule */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className={`absolute bottom-0 h-px w-16 bg-[#CFA052]/30 ${
                    step.align === "right" ? "right-0 origin-right" : "left-0 origin-left"
                  } hidden md:block`}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <a
              href="#invite"
              className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-[#CFA052] hover:text-black transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
            >
              Begin the Process <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. MANIFESTO — full-bleed editorial text
      ══════════════════════════════════════════════════ */}
      <section className="py-48 bg-[#CFA052] overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.7em] text-black/50 mb-10">Our Mandate Philosophy</div>
            <blockquote className="text-4xl md:text-6xl lg:text-7xl font-serif text-black leading-[1.1] tracking-tight italic">
              "We don't take on partners.<br />
              <span className="not-italic font-sans font-black tracking-tighter">We build ecosystems.</span>"
            </blockquote>
            <div className="mt-12 text-[11px] font-black uppercase tracking-[0.5em] text-black/40">— Vnexora Directorate</div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. WHAT PARTNERS RECEIVE — bento grid
      ══════════════════════════════════════════════════ */}
      <section className="py-40 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-16">
          <div className="text-center mb-20">
            <Tag>What You Receive</Tag>
            <h2 className="text-5xl md:text-6xl font-serif italic text-white mt-8 tracking-tighter">
              The Full Ecosystem.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Large card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative bg-[#0A0A0A] border border-white/[0.06] rounded-[2.5rem] p-12 overflow-hidden group hover:border-[#CFA052]/30 transition-all duration-700"
            >
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#CFA052]/[0.06] rounded-full blur-[100px] group-hover:bg-[#CFA052]/[0.12] transition-all duration-700" />
              <TrendingUp className="w-10 h-10 text-[#CFA052]/60 mb-8" />
              <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-5">Institutional Yield Intelligence</h3>
              <p className="text-white/40 text-lg font-light max-w-lg leading-relaxed">Access to our proprietary Neural Grid — real-time revenue optimization, demand forecasting, and competitor audit systems accessible to all mandated partners.</p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CFA052]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-[#CFA052] rounded-[2.5rem] p-12 overflow-hidden group"
            >
              <Globe className="w-10 h-10 text-black/60 mb-8" />
              <h3 className="text-2xl font-serif italic text-black mb-4">Global Distribution</h3>
              <p className="text-black/60 font-light leading-relaxed">Direct connectivity to 40+ global OTAs, GDS systems, and luxury travel consortia.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative bg-[#0A0A0A] border border-white/[0.06] rounded-[2.5rem] p-12 overflow-hidden group hover:border-[#CFA052]/30 transition-all duration-700"
            >
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#CFA052]/[0.05] rounded-full blur-[60px]" />
              <Shield className="w-10 h-10 text-[#CFA052]/60 mb-8" />
              <h3 className="text-2xl font-serif italic text-white mb-4">Governance Framework</h3>
              <p className="text-white/40 font-light leading-relaxed">Monthly financial audits, KPI dashboards, and board-level reporting.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 relative bg-[#0A0A0A] border border-white/[0.06] rounded-[2.5rem] p-12 overflow-hidden group hover:border-[#CFA052]/30 transition-all duration-700"
            >
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#CFA052]/[0.04] rounded-full blur-[120px]" />
              <Building2 className="w-10 h-10 text-[#CFA052]/60 mb-8" />
              <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-5">Dedicated On-Ground Team</h3>
              <p className="text-white/40 text-lg font-light max-w-lg leading-relaxed">A hand-picked operations team for every mandate — from pre-opening to stabilised operations. No shared resources, no compromises.</p>
              <div className="mt-10 flex gap-4 flex-wrap">
                {["Revenue Manager", "Head of Operations", "F&B Director", "Quality Auditor"].map((r) => (
                  <span key={r} className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CFA052]/60 border border-[#CFA052]/20 px-5 py-2 rounded-full">{r}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. INQUIRY FORM
      ══════════════════════════════════════════════════ */}
      <section id="invite" className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(207,160,82,0.06),transparent_60%)]" />

        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-10 lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center gap-4">
                <div className="w-10 h-px bg-[#CFA052]" />
                <span className="text-[10px] font-black uppercase tracking-[0.7em] text-[#CFA052]">Initiate Dialogue</span>
                <div className="w-10 h-px bg-[#CFA052]" />
              </div>
              <h2 className="text-5xl md:text-6xl font-serif leading-[1.05] tracking-tighter text-black">
                Ready to Build<br />
                <span className="italic text-[#CFA052]">Together?</span>
              </h2>
              <p className="text-black/50 text-xl font-light leading-relaxed">
                Our directorate reviews partnership applications quarterly. Submit your brief and we will reach out within 5 business days.
              </p>

              <div className="space-y-5 pt-6 border-t border-black/[0.07]">
                {[
                  "Limited mandates per quarter",
                  "Confidential NDA-backed process",
                  "Direct board-level engagement",
                  "Structured 90-day onboarding",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#CFA052]/10 border border-[#CFA052]/40 flex items-center justify-center">
                      <Check size={10} className="text-[#CFA052]" />
                    </div>
                    <span className="text-black/60 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-[#FAF9F6] border border-black/[0.06] rounded-[2.5rem] p-10 md:p-14 space-y-10 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                  >
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#CFA052]/[0.04] blur-[100px] rounded-full pointer-events-none" />

                    {[
                      { label: "Organization / Entity Name", key: "entity", type: "text", placeholder: "ACME HOSPITALITY GROUP" },
                      { label: "Corporate Email", key: "email", type: "email", placeholder: "DIRECTOR@ENTITY.COM" },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key} className="group relative border-b border-black/[0.08] focus-within:border-[#CFA052] transition-colors duration-500 pb-1">
                        <label className="block text-[8px] font-black uppercase tracking-[0.45em] text-black/30 mb-3 group-focus-within:text-[#CFA052] transition-colors">{label}</label>
                        <input
                          required
                          type={type}
                          placeholder={placeholder}
                          value={(form as any)[key]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full bg-transparent py-3 text-lg font-light focus:outline-none placeholder:text-black/[0.15] text-black"
                        />
                      </div>
                    ))}

                    <div className="group relative border-b border-black/[0.08] focus-within:border-[#CFA052] transition-colors duration-500 pb-1">
                      <label className="block text-[8px] font-black uppercase tracking-[0.45em] text-black/30 mb-3 group-focus-within:text-[#CFA052] transition-colors">Partnership Model</label>
                      <select
                        value={form.tier}
                        onChange={(e) => setForm({ ...form, tier: e.target.value })}
                        className="w-full bg-transparent py-3 text-lg font-light focus:outline-none text-black/80 appearance-none"
                      >
                        {models.map((m) => <option key={m.title} className="bg-white">{m.title}</option>)}
                      </select>
                    </div>

                    <div className="group relative border-b border-black/[0.08] focus-within:border-[#CFA052] transition-colors duration-500 pb-1">
                      <label className="block text-[8px] font-black uppercase tracking-[0.45em] text-black/30 mb-3 group-focus-within:text-[#CFA052] transition-colors">Objective & Context</label>
                      <textarea
                        required
                        value={form.objective}
                        onChange={(e) => setForm({ ...form, objective: e.target.value })}
                        placeholder="DESCRIBE THE OPPORTUNITY..."
                        rows={4}
                        className="w-full bg-transparent py-3 text-lg font-light focus:outline-none placeholder:text-black/[0.15] text-black resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-black text-white text-[11px] font-black uppercase tracking-[0.5em] rounded-2xl hover:bg-[#CFA052] hover:text-black transition-all duration-500 disabled:opacity-50 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                    >
                      {isSubmitting ? "Transmitting..." : "Submit to Directorate"}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#FAF9F6] border border-[#CFA052]/20 rounded-[2.5rem] p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                  >
                    <div className="w-20 h-20 bg-[#CFA052] rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-3xl font-serif italic text-black mb-4">Brief Received.</h3>
                    <p className="text-black/40 font-light max-w-xs mx-auto mb-10 leading-relaxed">Our directorate will review your partnership brief and be in touch within 5 business days.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-black uppercase tracking-[0.4em] text-[#CFA052]/60 hover:text-[#CFA052] transition-colors">
                      Submit another brief
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. FOOTER LINK
      ══════════════════════════════════════════════════ */}
      <section className="py-24 border-t border-white/[0.04] text-center">
        <Link
          href="/services"
          className="text-5xl md:text-8xl font-serif italic text-white/[0.06] hover:text-[#CFA052]/30 transition-colors duration-1000 uppercase tracking-tighter"
        >
          Explore All Services
        </Link>
      </section>

    </main>
  );
}
