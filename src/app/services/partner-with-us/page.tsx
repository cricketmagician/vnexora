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
  LifeBuoy,
  Users,
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
          <Image src="/images/partner/hero.png" alt="Vnexora Partnership" fill className="object-cover brightness-[0.7]" priority />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Header Breadcrumb */}
        <div className="absolute top-32 left-0 right-0 z-20 container mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
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
            className="text-[8vw] md:text-[5vw] lg:text-[5rem] font-serif text-white leading-[1] tracking-tight mb-8"
          >
            Hospitality <span className="italic text-[#CFA052]">Greatness</span><br />
            Starts with the <span className="italic">Right Partner.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-white/70 text-lg md:text-xl font-light tracking-widest max-w-3xl mb-12"
          >
            Build premium guest experiences and exceptional asset performance with <span className="font-bold text-white uppercase tracking-widest">Vnexora.</span>
          </motion.p>

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
      <section className="py-20 bg-[#FDFCFB] relative z-20 -mt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Hotel Assets", value: 15, suffix: "" },
              { label: "Keys Managed", value: 550, suffix: "+" },
              { label: "Years of Authority", value: 18, suffix: "+" },
              { label: "Global Brands", value: 56, suffix: "" },
              { label: "MoU Signed", value: 27, suffix: "+" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#021A59]/5 p-10 text-center group hover:shadow-[0_20px_50px_rgba(2,26,89,0.05)] transition-all duration-500 rounded-[2rem]"
              >
                <div className="text-4xl md:text-5xl font-black text-[#021A59] mb-4 tabular-nums tracking-tighter">
                  <AnimatedNumber n={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#021A59]/40">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 pt-0 bg-[#FDFCFB]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Two Vertical Images */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative flex gap-4 md:gap-8 items-start"
            >
              <div className="w-1/2 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/partner/why_partner.png" 
                  alt="Hotel Lounge" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="w-1/2 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/partner/hero.png" 
                  alt="Hotel Room" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] uppercase tracking-tight">
                Why Partner With Us
              </h2>
              
              <p className="text-black/60 text-lg leading-relaxed font-light">
                When you join hands with Vnexora, you gain more than a management company—you gain a dedicated partner committed to maximising your assets' potential. Our bespoke, owner-friendly management models are designed to minimise risk, enhance profitability, and elevate guest experiences.
              </p>

              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] uppercase tracking-widest text-sm">We Bring:</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Tailored Brand Positioning", desc: "A multi-brand portfolio offering flexibility to suit diverse markets and property types." },
                    { title: "Global Distribution & Reach", desc: "Access to 6,40,000+ travel agents worldwide through GDS and a powerful central reservations system." },
                    { title: "Advanced Technology", desc: "A next-generation, AI-driven tech stack for revenue management, distribution, and reputation monitoring." },
                    { title: "Yield Intelligence", desc: "Proprietary neural grids for real-time revenue optimization and maximum asset performance." },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#CFA052] mt-2 shrink-0" />
                      <p className="text-black/60 text-sm leading-relaxed font-light">
                        <span className="font-bold text-[#1A1A1A]">{item.title}</span> – {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. PARTNERSHIP MODELS — sticky scroll
      ══════════════════════════════════════════════════ */}
      <section id="models" className="py-24 bg-[#F9F9F7]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="text-center mb-20 max-w-6xl mx-auto space-y-8">
            <Tag>Partnership Opportunities</Tag>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#1A1A1A] tracking-tight md:whitespace-nowrap">
              Who Can Partner With <span className="text-[#CFA052]">VNEXORA?</span>
            </h2>
            <p className="text-black/50 text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto">
              We welcome ambitious businesses, developers, investors, hospitality professionals, architects, interior designers, vendors, consultants, and service providers who believe in quality, growth, and innovation. Whether you want to expand your portfolio, deliver premium solutions, or align your brand with a forward-thinking hospitality company, VNEXORA is ready to collaborate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { 
                title: "Developers", 
                img: "/images/partner/room.png", 
                points: ["Turn land into hotels.", "Increase ROI.", "Access top brands.", "Build future-ready assets."] 
              },
              { 
                title: "Investors", 
                img: "/images/partner/hero.png", 
                points: ["Enter growth markets.", "Earn better returns.", "Get expert support.", "Diversify smartly."] 
              },
              { 
                title: "Architects & Interior Designers", 
                img: "/images/partner/management.png", 
                points: ["Design premium spaces.", "Build landmark projects.", "Grow your portfolio.", "Join quality teams."] 
              },
              { 
                title: "Hospitality Professionals & Consultants", 
                img: "/images/partner/synergy.png", 
                points: ["Join exciting projects.", "Work with top brands.", "Add strategic value.", "Grow with VNEXORA."] 
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[550px] overflow-hidden rounded-2xl cursor-pointer"
              >
                <Image src={m.img} alt={m.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif italic text-white mb-6 leading-tight">{m.title}</h3>
                  <ul className="space-y-3 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {m.points.map((p, pi) => (
                      <li key={pi} className="flex items-center gap-3 text-white/70 text-sm font-light">
                        <div className="w-1 h-1 rounded-full bg-[#CFA052]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFA052] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Collaborate Now <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center pt-16 border-t border-black/5"
          >
            <p className="text-black/60 text-lg md:text-xl font-light leading-relaxed italic">
              "Getting started is simple. Connect with our partnership team, and we’ll arrange a strategic discussion to understand your goals, evaluate opportunities, and build a partnership designed for long-term mutual success."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4B. HOW WE PARTNER — process timeline
      ══════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════
          4C. PARTNERSHIP OPPORTUNITIES — card grid
      ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FDFCFB]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="text-center mb-20 max-w-4xl mx-auto space-y-8">
            <Tag>Collaborations</Tag>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] tracking-tight">
              Partner. Profit. <span className="italic">Progress.</span>
            </h2>
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#CFA052] uppercase tracking-[0.2em]">
                Partnership Opportunities for Independent Hotels, Vendors & Service Providers
              </h3>
              <p className="text-black/50 text-lg md:text-xl font-light leading-relaxed">
                Join the VNEXORA growth ecosystem built for ambitious hotels, trusted vendors, and quality service partners. We create meaningful collaborations that unlock new opportunities, strengthen market presence, and drive long-term success. Whether you manage a hotel, supply products, or deliver specialized services, VNEXORA helps the right partners grow faster together.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Brand Collaboration Opportunities", 
                img: "/images/partner/franchise.png", 
                desc: "Expand your business through strategic alliances, franchise opportunities, and co-branded hospitality partnerships with established and emerging brands to accelerate growth, visibility, and market reach." 
              },
              { 
                title: "Supply Chain Partnerships", 
                img: "/images/partner/supply_chain.png", 
                desc: "We collaborate with trusted suppliers of food, beverages, operating supplies, guest amenities, and hospitality essentials who deliver consistent quality, competitive value, and reliable service standards." 
              },
              { 
                title: "Service Partnerships", 
                img: "/images/partner/service_partnership.png", 
                desc: "We partner with professional service providers in event management, wellness, recreation, transportation, guest engagement, and curated experiences to elevate hospitality standards and enhance guest satisfaction." 
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
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* Left: Cinematic Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                <Image src="/images/partner/handshake.png" alt="Strategic Partnership" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="absolute -bottom-8 -left-8 bg-white p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-black/5 hidden md:block max-w-[280px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#CFA052]/10 flex items-center justify-center text-[#CFA052]">
                    <TrendingUp size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Scale Report</span>
                </div>
                <div className="text-3xl font-serif text-[#1A1A1A] leading-tight mb-2">94% Retention</div>
                <p className="text-black/40 text-[11px] font-light leading-relaxed">Average longevity of our institutional partnership mandates.</p>
              </motion.div>
            </motion.div>

            {/* Right: Benefits Content */}
            <div className="space-y-12 order-1 lg:order-2">
              <div className="space-y-6">
                <Tag>Exclusive Advantages</Tag>
                <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tight">
                  Partner <span className="italic text-[#CFA052]">Benefits.</span>
                </h2>
                <p className="text-black/40 text-lg font-light leading-relaxed max-w-xl">
                  Aligning with Vnexora means more than a contract. It's a commitment to excellence, powered by our institutional infrastructure and premium brand authority.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { 
                    icon: TrendingUp, 
                    title: "Exponential Growth", 
                    desc: "Leverage our market dominance and institutional networks to scale your asset's performance rapidly." 
                  },
                  { 
                    icon: LifeBuoy, 
                    title: "Full-Spectrum Support", 
                    desc: "24/7 access to our specialized operations, marketing, and technology teams to ensure seamless execution." 
                  },
                  { 
                    icon: Users, 
                    title: "Collaborative Synergy", 
                    desc: "A partnership model built on radical transparency, shared goals, and high-frequency communication." 
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 1 }}
                    className="group flex items-start gap-8 p-8 rounded-3xl hover:bg-[#F9F9F7] transition-all duration-500 border border-transparent hover:border-black/5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#FDFCFB] flex items-center justify-center text-[#CFA052] shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2 pt-1">
                      <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight">{item.title}</h3>
                      <p className="text-black/40 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

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
