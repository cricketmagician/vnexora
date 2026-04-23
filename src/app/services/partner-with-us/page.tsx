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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [form, setForm] = useState({
    entity: "",
    email: "",
    tier: "Joint Venture",
    objective: "",
  });

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const heroOp  = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

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
    <main ref={containerRef} className="bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#CFA052] selection:text-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          1. FULL-BLEED CINEMATIC HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[750px] overflow-hidden">
        {/* Background image */}
        <motion.div className="absolute inset-0 z-0">
          <Image src="/images/partner/hero.png" alt="Vnexora Partnership" fill className="object-cover brightness-95" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        </motion.div>

        {/* Header Breadcrumb */}
        <div className="absolute top-32 left-0 right-0 z-20 container mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="opacity-40">{'>'}</span>
            <span>Partner with Us</span>
          </div>
        </div>

        {/* Content */}
        <motion.div style={{ opacity: heroOp }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Tag>Strategic Institutional Partnership</Tag>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[7vw] lg:text-[6.5rem] font-serif text-white leading-[1] tracking-tight mb-12 uppercase"
          >
            Partner with <span className="italic">Vnexora:</span><br />
            <span className="text-[8vw] md:text-[5vw] lg:text-[4.5rem] font-light tracking-widest opacity-90">Shape the Future of Hospitality</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <a
              href="#invite"
              className="group relative px-12 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:text-white"
            >
              <div className="absolute inset-0 bg-[#CFA052] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-4">
                Initiate Dialogue
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Vignette */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FDFCFB] to-transparent z-10" />
      </section>

      {/* ══════════════════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════════════════ */}
      <section className="border-b border-black/[0.05] bg-[#FDFCFB]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/[0.05]">
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
                className="py-12 px-10 text-center group"
              >
                <div className="text-5xl md:text-6xl font-serif text-[#1A1A1A] mb-3 tabular-nums font-light">
                  <AnimatedNumber n={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2B. BLACK ROCK PARTNERSHIP INTRODUCTION
      ══════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#FDFCFB]">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-7xl mx-auto text-center space-y-6"
          >
            <h2 className="text-xl md:text-2xl font-serif text-[#1A1A1A] tracking-widest uppercase">
              Partner with Vnexora: <span className="italic text-[#CFA052]">Shape the Future of Hospitality</span>
            </h2>
            <p className="text-black/40 text-sm md:text-base font-light leading-relaxed max-w-5xl mx-auto">
              At Vnexora Hotels & Resorts, we believe that every partnership is an opportunity to create something remarkable. As one of India’s most dynamic hospitality brands, we combine visionary thinking, cutting-edge technology, and a guest-first approach to deliver exceptional returns for our owners and unforgettable stays for our guests. Together, we can transform hotels into destinations and ideas into thriving realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. WHY VNEXORA — editorial split
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#FDFCFB] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
                <Image src="/images/partner/management.png" alt="Partnership Synergy" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB]/20 to-transparent" />
              </div>

              {/* Floating detail */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 -right-10 bg-[#CFA052] p-10 rounded-2xl shadow-2xl hidden md:block"
              >
                <div className="text-3xl font-serif text-white font-light leading-none mb-2">IIT BHU</div>
                <div className="text-[9px] font-bold text-white/70 uppercase tracking-[0.3em]">Founding Pedigree</div>
              </motion.div>
            </motion.div>

            {/* Right — text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <Tag>Why Partner With Us</Tag>

              <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight text-[#1A1A1A]">
                Beyond Management. <br />
                <span className="italic text-[#CFA052]">Asset Synchronization.</span>
              </h2>

              <p className="text-black/50 text-xl font-light leading-relaxed">
                Vnexora bridges the gap between institutional finance and hospitality craft. We don't just operate hotels; we synchronize assets for maximum yield, structural longevity, and global brand authority.
              </p>

              <div className="space-y-8 pt-8 border-t border-black/[0.05]">
                {[
                  { icon: Zap,    title: "Yield Intelligence", desc: "Proprietary neural grids for real-time revenue optimization." },
                  { icon: Shield, title: "Institutional Governance", desc: "Board-level reporting and rigorous financial audit frameworks." },
                  { icon: Star,   title: "Elite Talent Pool", desc: "Curated operational teams led by IIT-trained leadership." },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#CFA052]/5 flex items-center justify-center text-[#CFA052] shrink-0 transition-colors duration-500 group-hover:bg-[#CFA052] group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif italic text-[#1A1A1A] mb-1">{title}</h4>
                      <p className="text-black/40 text-sm font-light leading-relaxed">{desc}</p>
                    </div>
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
      <section id="models" className="py-20 bg-[#F9F9F7]">
        <div className="container mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <Tag>Partnership Opportunities</Tag>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mt-8 tracking-tight">
              Strategic <span className="italic">Verticals.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Franchise Model", img: "/images/partner/room.png", desc: "License the Vnexora brand and institutional operating playbook." },
              { title: "Joint Venture", img: "/images/partner/hero.png", desc: "Strategic capital partnerships for high-yield hospitality assets." },
              { title: "Management", img: "/images/partner/management.png", desc: "Full-service management for asset owners seeking passive returns." },
              { title: "Development", img: "/images/partner/synergy.png", desc: "End-to-end advisory from feasibility to stabilized operations." },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer"
              >
                <Image src={m.img} alt={m.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif italic text-white mb-3">{m.title}</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{m.desc}</p>
                  <div className="mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Explore Mandate <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4B. HOW WE PARTNER — process timeline
      ══════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════
          4C. PARTNERSHIP OPPORTUNITIES — card grid
      ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FDFCFB]">
        <div className="container mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <Tag>Collaborations</Tag>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mt-8 tracking-tight uppercase">
              Partnership <span className="italic">Opportunities.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Franchise Opportunities", 
                img: "/images/partner/franchise.png", 
                desc: "Expand your business by franchising with a renowned hospitality brand." 
              },
              { 
                title: "Supply Chain Collaborations", 
                img: "/images/partner/supply_chain.png", 
                desc: "We are always looking for quality suppliers for food, beverages, and hospitality amenities." 
              },
              { 
                title: "Service Partnerships", 
                img: "/images/partner/service_partnership.png", 
                desc: "Collaborate with us in areas such as event management, wellness, and guest experiences." 
              },
            ].map((op, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-black/[0.03] p-8 rounded-[2.5rem] hover:shadow-[0_40px_100px_rgba(0,0,0,0.04)] transition-all duration-700"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-10">
                  <Image src={op.img} alt={op.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 tracking-tight">{op.title}</h3>
                <p className="text-black/40 text-sm font-light leading-relaxed">{op.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4D. PARTNER BENEFITS — split layout
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F9F9F7]">
        <div className="container mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <Tag>Advantages</Tag>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mt-8 tracking-tight uppercase">
              Partner <span className="italic">Benefits.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image src="/images/partner/handshake.png" alt="Partner Benefits" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            <div className="space-y-8">
              {[
                { 
                  title: "Growth Potential", 
                  desc: "Leverage our brand's presence to enhance your business." 
                },
                { 
                  title: "Support System", 
                  desc: "Benefit from our comprehensive support and expertise in the hospitality industry." 
                },
                { 
                  title: "Collaborative Environment", 
                  desc: "Work in a partnership that values innovation and open communication." 
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-black/[0.03] p-10 rounded-[2.5rem] hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 group"
                >
                  <h3 className="text-xl font-serif text-[#1A1A1A] mb-3 group-hover:text-[#CFA052] transition-colors">{benefit.title}</h3>
                  <p className="text-black/40 text-sm font-light leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. PARTNERSHIP JOURNEY — editorial timeline
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="text-center mb-16">
            <Tag>Partnership Journey</Tag>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mt-8 tracking-tight">
              The <span className="italic">Process.</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Vertical spine */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-black/[0.05] -translate-x-1/2" />

            {[
              {
                num: "01",
                title: "Inquiry & Audit",
                desc: "Submit your asset details for a preliminary yield audit. Our directorate reviews submissions within 5 business days.",
              },
              {
                num: "02",
                title: "Mandate Call",
                desc: "A focused strategy session to align on objectives, expectations, and the Vnexora ecosystem fit.",
              },
              {
                num: "03",
                title: "Bespoke Proposal",
                desc: "Detailed commercial terms, structural roadmap, and performance projections delivered under NDA.",
              },
              {
                num: "04",
                title: "Onboarding",
                desc: "90-day integration phase — deploying systems, elite talent, and the Vnexora brand playbook.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15 }}
                className={`relative mb-12 flex items-center ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                {/* Dot */}
                <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#CFA052] border-4 border-white shadow-[0_0_0_1px_#CFA052] z-10" />

                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-20">
                  <div className={`flex flex-col ${i % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                    <span className="text-6xl font-serif italic text-black/[0.03] leading-none mb-4">{step.num}</span>
                    <h3 className={`text-2xl font-serif text-[#1A1A1A] mb-4 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>{step.title}</h3>
                    <p className={`text-black/40 font-light leading-relaxed text-base max-w-sm ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
             <a
                href="#invite"
                className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-[#CFA052] hover:text-black transition-all duration-500"
              >
                Begin the Process <ArrowRight className="w-4 h-4" />
              </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. MANIFESTO — full-bleed editorial text
      ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FDFCFB] overflow-hidden relative border-y border-black/5">
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-12">Our Mandate Philosophy</div>
            <blockquote className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tight italic">
              "We don't just manage hotels.<br />
              <span className="not-italic font-sans font-light tracking-widest opacity-80 uppercase">We build ecosystems.</span>"
            </blockquote>
            <div className="mt-12 text-[11px] font-bold uppercase tracking-[0.3em] text-[#CFA052]">Vnexora Directorate</div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. WHAT PARTNERS RECEIVE — bento grid
      ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FDFCFB]">
        <div className="container mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <Tag>The Ecosystem</Tag>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mt-8 tracking-tight">
              What Partners <span className="italic">Receive.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative bg-white border border-black/[0.04] rounded-[2.5rem] p-12 overflow-hidden group hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] transition-all duration-700"
            >
              <TrendingUp className="w-10 h-10 text-[#CFA052] mb-10" />
              <h3 className="text-3xl md:text-4xl font-serif italic text-[#1A1A1A] mb-6">Yield Intelligence</h3>
              <p className="text-black/40 text-lg font-light max-w-xl leading-relaxed">Access to our proprietary Neural Grid — real-time revenue optimization, demand forecasting, and competitor audit systems accessible to all mandated partners.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-[#CFA052] rounded-[2.5rem] p-12 overflow-hidden group shadow-2xl"
            >
              <Globe className="w-10 h-10 text-white/80 mb-10" />
              <h3 className="text-2xl font-serif italic text-white mb-6">Global Distribution</h3>
              <p className="text-white/80 font-light leading-relaxed">Direct connectivity to 40+ global OTAs, GDS systems, and luxury travel consortia with priority ranking.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative bg-white border border-black/[0.04] rounded-[2.5rem] p-12 overflow-hidden group hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] transition-all duration-700"
            >
              <Shield className="w-10 h-10 text-[#CFA052] mb-10" />
              <h3 className="text-2xl font-serif italic text-[#1A1A1A] mb-6">Audit Framework</h3>
              <p className="text-black/40 font-light leading-relaxed">Monthly financial audits, KPI dashboards, and direct board-level reporting for full transparency.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 relative bg-white border border-black/[0.04] rounded-[2.5rem] p-12 overflow-hidden group hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] transition-all duration-700"
            >
              <Building2 className="w-10 h-10 text-[#CFA052] mb-10" />
              <h3 className="text-3xl md:text-4xl font-serif italic text-[#1A1A1A] mb-6">Dedicated On-Ground Team</h3>
              <p className="text-black/40 text-lg font-light max-w-xl leading-relaxed">A hand-picked operations team for every mandate — from pre-opening to stabilised operations. No shared resources, no compromises.</p>
              <div className="mt-12 flex gap-3 flex-wrap">
                {["Revenue Manager", "Head of Ops", "F&B Director", "Quality Auditor"].map((r) => (
                  <span key={r} className="text-[9px] font-bold uppercase tracking-widest text-black/30 border border-black/5 px-5 py-2.5 rounded-full">{r}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. INQUIRY FORM
      ══════════════════════════════════════════════════ */}
      <section id="invite" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-5 lg:sticky lg:top-24"
            >
              <Tag>Initiate Dialogue</Tag>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight text-[#1A1A1A]">
                Ready to <span className="italic text-[#CFA052]">Collaborate?</span>
              </h2>
              <p className="text-black/40 text-xl font-light leading-relaxed">
                Our directorate reviews partnership applications quarterly. Submit your brief for a confidential preliminary audit.
              </p>

              <div className="space-y-6 pt-10 border-t border-black/[0.05]">
                {[
                  "Limited mandates per quarter",
                  "Confidential NDA-backed process",
                  "Direct board-level engagement",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-6 h-6 rounded-full bg-[#CFA052]/10 flex items-center justify-center">
                      <Check size={12} className="text-[#CFA052]" />
                    </div>
                    <span className="text-black/50 text-sm font-light uppercase tracking-widest">{item}</span>
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
                    className="bg-[#FDFCFB] border border-black/[0.05] rounded-[2.5rem] p-12 md:p-16 space-y-6 relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.03)]"
                  >
                    {[
                      { label: "Entity Name", key: "entity", type: "text", placeholder: "ACME HOSPITALITY GROUP" },
                      { label: "Corporate Email", key: "email", type: "email", placeholder: "DIRECTOR@ENTITY.COM" },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key} className="group border-b border-black/[0.05] focus-within:border-[#CFA052] transition-colors duration-500 pb-4">
                        <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-black/30 mb-4 group-focus-within:text-[#CFA052] transition-colors">{label}</label>
                        <input
                          required
                          type={type}
                          placeholder={placeholder}
                          value={(form as any)[key]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-black/[0.1] text-[#1A1A1A]"
                        />
                      </div>
                    ))}

                    <div className="group border-b border-black/[0.05] focus-within:border-[#CFA052] transition-colors duration-500 pb-4">
                      <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-black/30 mb-4 group-focus-within:text-[#CFA052] transition-colors">Vertical</label>
                      <select
                        value={form.tier}
                        onChange={(e) => setForm({ ...form, tier: e.target.value })}
                        className="w-full bg-transparent text-xl font-light focus:outline-none text-[#1A1A1A] appearance-none"
                      >
                        {models.map((m) => <option key={m.title} className="bg-white">{m.title}</option>)}
                      </select>
                    </div>

                    <div className="group border-b border-black/[0.05] focus-within:border-[#CFA052] transition-colors duration-500 pb-4">
                      <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-black/30 mb-4 group-focus-within:text-[#CFA052] transition-colors">Strategic Objective</label>
                      <textarea
                        required
                        value={form.objective}
                        onChange={(e) => setForm({ ...form, objective: e.target.value })}
                        placeholder="DESCRIBE THE MANDATE..."
                        rows={3}
                        className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-black/[0.1] text-[#1A1A1A] resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-[0.4em] rounded-2xl hover:bg-[#CFA052] transition-all duration-500 disabled:opacity-50"
                    >
                      {isSubmitting ? "Transmitting..." : "Submit to Directorate"}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border border-[#CFA052]/20 rounded-[2.5rem] p-20 text-center shadow-2xl"
                  >
                    <div className="w-20 h-20 bg-[#CFA052] rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-[#CFA052]/20">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-serif italic text-[#1A1A1A] mb-4">Brief Transmitted.</h3>
                    <p className="text-black/40 font-light max-w-xs mx-auto mb-10 leading-relaxed">Our directorate will review your partnership mandate and be in touch within 5 business days.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052] hover:underline transition-all">
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
          className="text-5xl md:text-8xl font-serif italic text-black/[0.04] hover:text-[#CFA052]/30 transition-colors duration-1000 uppercase tracking-tighter"
        >
          Explore All Services
        </Link>
      </section>

    </main>
  );
}
