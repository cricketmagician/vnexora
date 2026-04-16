"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  Building2,
  Lightbulb,
  Cpu,
  HardHat,
  Eye
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

/* ─────────────────── SERVICE PILLAR DATA ─────────────────── */
const servicePillars = [
  {
    id: "analysis",
    number: "01",
    tag: "The Foundation",
    title: "Needs Analysis & Consultation",
    subtitle: "Active listening is the core of every successful planning concept.",
    image: "/images/services/arch_needs_analysis.png",
    paragraphs: [
      "Every great hotel begins with a deep understanding of the project. Before the first line is drawn, we sit with you to learn your vision, your market, and your budget.",
      "We analyze feasibility, study the local market, map competitor landscapes, and define operational requirements. This clinical approach saves months of rework and ensures every design decision is backed by real data.",
    ],
    bullets: [
      "Feasibility studies & market research",
      "Budget planning & financial modelling",
      "Target group analysis",
      "Operational concept development",
    ],
    reverse: false,
  },
  {
    id: "architecture",
    number: "02",
    tag: "The Structure",
    title: "Architecture",
    subtitle: "From the first draft to the final approval — we shape the building.",
    image: "/images/services/arch_planning.png",
    paragraphs: [
      "Architecture is more than shape. It defines how guests move, how services flow, and how your brand is experienced from the outside. Our architects balance beauty with operational intelligence.",
      "We handle everything: initial drafts, floor layouts, approval plans, and execution-ready drawings. We also manage all communication with authorities and government bodies, keeping your project compliant and on track.",
    ],
    bullets: [
      "Concept drafts & floor layout plans",
      "Approval plans & execution plans",
      "Authority communication & permits",
      "Structural engineering coordination",
    ],
    reverse: true,
  },
  {
    id: "interior",
    number: "03",
    tag: "The Atmosphere",
    title: "Interior Architecture",
    subtitle: "Design with atmosphere. Rooms that feel like a story.",
    image: "/images/services/arch_interior_design.png",
    paragraphs: [
      "A hotel room must feel right the moment a guest walks in. Our interior architects don't just select furniture — they compose experiences. Every material, every light source, every texture is chosen with intent.",
      "We develop complete room concepts, lighting strategies, and material palettes. From lobby to suite, spa to restaurant — every space is designed for both aesthetic impact and operational practicality.",
    ],
    bullets: [
      "Room, design & lighting concepts",
      "Material & product selection",
      "3D visualizations & mood boards",
      "FF&E procurement & coordination",
    ],
    reverse: false,
  },
  {
    id: "tbs",
    number: "04",
    tag: "The Engine",
    title: "Technical Building Services",
    subtitle: "Invisible systems that make a great hotel possible.",
    image: "/images/services/arch_tbs_technical.png",
    paragraphs: [
      "The best engineering is the kind your guests never notice. Our TBS planners work alongside the architects from day one, ensuring every system is optimized for efficiency, comfort, and sustainability.",
      "We plan and oversee heating, ventilation, air conditioning, plumbing, electrical systems, and smart building automation. These are the systems that quietly define your hotel's operational cost for decades.",
    ],
    bullets: [
      "HVAC planning & energy optimization",
      "Electrical & plumbing systems",
      "Building automation & smart controls",
      "Sustainability & green certifications",
    ],
    reverse: true,
  },
  {
    id: "management",
    number: "05",
    tag: "The Guarantee",
    title: "General Planning & Project Management",
    subtitle: "One point of contact. Fixed deadlines. No surprises.",
    image: "/images/services/arch_project_management.png",
    paragraphs: [
      "This is where the entire operation comes together. As your general planner, we coordinate every trade, every vendor, and every approval to deliver your hotel on time and within budget.",
      "With Vnexora as your single point of contact, you eliminate the gaps that cause delays and cost overruns. We bring structure, transparency, and accountability to every phase of the project.",
    ],
    bullets: [
      "Full project coordination & scheduling",
      "Cost control & budget management",
      "Quality assurance & site supervision",
      "Turnkey handover — ready for guests",
    ],
    reverse: false,
  },
];

/* ─────────────────── ICON MAP ─────────────────── */
const iconMap: Record<string, React.ReactNode> = {
  analysis: <Search className="w-7 h-7" />,
  architecture: <Building2 className="w-7 h-7" />,
  interior: <Lightbulb className="w-7 h-7" />,
  tbs: <Cpu className="w-7 h-7" />,
  management: <HardHat className="w-7 h-7" />,
};

/* ─────────────────── MAIN COMPONENT ─────────────────── */
export default function HotelArchitecturePortal() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    challenge: "Hotel Architecture & Planning",
    referral: "Social Media",
    message: "",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.08], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0.3]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fullMessage = `Name: ${formData.firstName} ${formData.lastName}\nLocation: ${formData.address}\nChallenge: ${formData.challenge}\nReferral: ${formData.referral}\n\n${formData.message}`;
    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject: `Architecture Inquiry: ${formData.challenge}`,
        message: fullMessage,
        source: "hotel_architecture_portal",
      });
      if (result.success) {
        setIsSubmitted(true);
        toast.success("Your design inquiry has been received.");
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main ref={containerRef} className="bg-white text-black font-sans overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO (Full-screen cinematic)
          ═══════════════════════════════════════════════════ */}
      <section className="relative h-[100vh] overflow-hidden flex items-end bg-black">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/services/hotel_architecture_hero.png"
            alt="Hotel Architecture by Vnexora"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-6 md:px-16 relative z-10 pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl space-y-8"
          >
            <p className="text-mustard text-[11px] font-bold uppercase tracking-[0.5em]">
              Vnexora Luxury Estates
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-white leading-[1.05] tracking-tight">
              Hotel Architecture
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              From concept to turnkey handover — we provide a complete, single-source solution for hotel design, engineering, and construction management.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-4 bg-mustard text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-500"
              >
                Start a Project
              </button>
              <button
                onClick={() => document.getElementById("methodology")?.scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-4 border border-white/30 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white/10 transition-all duration-500"
              >
                Our Approach
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — PHILOSOPHY / METHODOLOGY
          ═══════════════════════════════════════════════════ */}
      <section id="methodology" className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Philosophy text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-mustard text-[11px] font-bold uppercase tracking-[0.5em]">
                Our Philosophy
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.1] tracking-tight">
                Design & Build.<br />
                <span className="text-black/30">All Under One Roof.</span>
              </h2>
              <div className="space-y-5 text-black/60 text-base md:text-lg font-light leading-relaxed">
                <p>
                  A hotel is more than walls and windows. It is a complex living system that must work perfectly 24 hours a day, 365 days a year. That is why we bring architecture, interior design, and technical engineering together from the very start.
                </p>
                <p>
                  When architects, designers, and engineers work in silos, critical details fall through the cracks. Our holistic approach eliminates these blind spots. As your single point of contact, we save you months of rework, protect your budget, and deliver a hotel that is beautiful, functional, and future-proof.
                </p>
              </div>
            </motion.div>

            {/* Right: Quick stats / value props */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-0"
            >
              {[
                { label: "Architecture", desc: "From conceptual drafts to approved execution plans" },
                { label: "Interior Design", desc: "Atmospheric spaces with curated materials & lighting" },
                { label: "TBS Engineering", desc: "HVAC, electrical, plumbing & smart automation" },
                { label: "Project Management", desc: "Single-source coordination from start to handover" },
                { label: "3D Visualization", desc: "Photorealistic renders to preview every detail" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 py-7 border-b border-black/5 group hover:bg-[#FAFAF8] transition-colors px-4 -mx-4"
                >
                  <span className="text-[11px] font-bold text-mustard mt-1 min-w-[28px]">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black group-hover:text-mustard transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-sm text-black/40 font-light mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — SERVICE PILLARS (Alternating Split)
          Each pillar gets its own full-width section,
          mimicking the Appia structure exactly.
          ═══════════════════════════════════════════════════ */}
      {servicePillars.map((pillar, idx) => (
        <section
          key={pillar.id}
          className={`py-0 ${idx % 2 === 0 ? "bg-[#F7F5F0]" : "bg-white"}`}
        >
          <div
            className={`flex flex-col ${
              pillar.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } min-h-[80vh]`}
          >
            {/* IMAGE HALF */}
            <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-[80vh] overflow-hidden group">
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              {/* Number overlay */}
              <div className="absolute bottom-8 left-8 z-10">
                <span className="text-[120px] md:text-[180px] font-serif font-bold text-white/10 leading-none select-none">
                  {pillar.number}
                </span>
              </div>
            </div>

            {/* TEXT HALF */}
            <div className="lg:w-1/2 flex items-center">
              <motion.div
                initial={{ opacity: 0, x: pillar.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-10 md:p-16 lg:p-20 xl:p-24 space-y-8 max-w-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-mustard/10 flex items-center justify-center text-mustard">
                    {iconMap[pillar.id]}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-mustard">
                    {pillar.tag}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-black leading-[1.15] tracking-tight">
                  {pillar.title}
                </h2>

                <p className="text-base md:text-lg font-medium text-black/80 italic leading-relaxed border-l-2 border-mustard pl-6">
                  {pillar.subtitle}
                </p>

                <div className="space-y-4 text-black/55 text-[15px] font-light leading-relaxed">
                  {pillar.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>

                {/* Bullet list */}
                <div className="pt-4 space-y-3">
                  {pillar.bullets.map((bullet, bi) => (
                    <div key={bi} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-mustard flex-shrink-0" />
                      <span className="text-sm font-semibold text-black/70">{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — FULL-WIDTH CTA BANNER
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 bg-black overflow-hidden">
        <Image
          src="/images/services/hotel_interior_rendering.png"
          alt="Luxury Hotel Interior"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-mustard text-[11px] font-bold uppercase tracking-[0.5em]">
              Your Hotel, Our Expertise
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] tracking-tight">
              Ready to Build<br />Something Extraordinary?
            </h2>
            <p className="text-white/50 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Whether you are planning a new hotel, renovating an existing property, or exploring a mixed-use development — our team of architects, designers, and engineers is ready to turn your vision into reality.
            </p>
            <button
              onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="px-14 py-5 bg-mustard text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-500"
            >
              Schedule a Free Consultation <ArrowRight className="inline w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — PROCESS (How We Work)
          ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 bg-[#F7F5F0]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <p className="text-mustard text-[11px] font-bold uppercase tracking-[0.5em]">
              The Process
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-black tracking-tight">
              How We Work With You
            </h2>
            <p className="text-black/40 text-base font-light max-w-xl mx-auto">
              A clear, transparent process — from the first conversation to the day your doors open.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/5">
            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "We listen to your vision, study the project brief, and define the scope together.",
              },
              {
                step: "02",
                title: "Custom Proposal",
                desc: "We deliver a detailed plan with timelines, budgets, and design concepts for your approval.",
              },
              {
                step: "03",
                title: "Design & Engineering",
                desc: "Our architects, interior designers, and TBS engineers execute the plans in parallel.",
              },
              {
                step: "04",
                title: "Turnkey Handover",
                desc: "Your hotel is delivered on time, on budget, and ready for guests on day one.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 md:p-12 space-y-6 border-r border-b border-black/5 last:border-r-0 bg-white hover:bg-[#F7F5F0] transition-colors group"
              >
                <span className="text-5xl font-serif italic text-mustard/20 group-hover:text-mustard/40 transition-colors">
                  {item.step}
                </span>
                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-bold uppercase tracking-wider text-black">{item.title}</h3>
                  <p className="text-sm text-black/40 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — FREE CONSULTATION FORM
          ═══════════════════════════════════════════════════ */}
      <section ref={formRef} className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT — Narrative */}
        <div className="lg:w-1/2 bg-[#0A0A0A] p-10 md:p-16 lg:p-24 pt-12 md:pt-16 lg:pt-20 flex flex-col justify-start text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-mustard text-[11px] font-bold uppercase tracking-[0.5em]">
              Let's Talk
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight">
              Architecting<br />Your <span className="italic text-mustard">Legacy.</span>
            </h2>
            <div className="w-16 h-1 bg-mustard" />
            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-white/60">
              <p>
                Whether it's a boutique property or a 300-room resort, our team has the depth to handle the complexity. Architecture, interiors, and engineering — all under one roof.
              </p>
              <p className="text-white font-semibold text-2xl not-italic">
                Book your free consultation today.
              </p>
              <p>
                Share your project details and our technical team will get back to you within 24 hours with an initial assessment.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              {["Fixed Deadlines", "Price Guarantee", "Single Contact"].map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mustard" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50">{tag}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Form */}
        <div className="lg:w-1/2 bg-[#F5F1E9] p-10 md:p-16 lg:p-24 pt-12 md:pt-16 lg:pt-20 flex flex-col justify-start text-black">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-black">
                Free Consultation
              </h2>
              <div className="w-12 h-px bg-black/15" />
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/35">First Name</label>
                    <input required className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/35">Last Name</label>
                    <input required className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/35">Email*</label>
                    <input type="email" required className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/35">Phone</label>
                    <input type="tel" required className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="+91" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/35">Project Location & Scope</label>
                  <input required className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="City, region, and approximate project size" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/35">Inquiry Type</label>
                    <select value={formData.challenge} onChange={(e) => setFormData({ ...formData, challenge: e.target.value })} className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black appearance-none">
                      <option>Hotel Architecture & Planning</option>
                      <option>Interior Architecture & Design</option>
                      <option>Technical Building Services</option>
                      <option>Full Turnkey Project</option>
                      <option>Renovation & Modernization</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/35">How did you find us?</label>
                    <select value={formData.referral} onChange={(e) => setFormData({ ...formData, referral: e.target.value })} className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black appearance-none">
                      <option>Social Media</option>
                      <option>Referral</option>
                      <option>Search Engine</option>
                      <option>Industry Event</option>
                    </select>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.challenge === "Other" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-2 overflow-hidden">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-black/35">Please specify</label>
                      <input required className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Describe your project needs..." />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/35">Project Details</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-mustard transition-all text-sm font-light text-black resize-none" placeholder="Tell us about your vision, timeline, and key requirements..." />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-mustard text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-700 shadow-xl disabled:opacity-50">
                  {isSubmitting ? "SENDING..." : "AVAIL FREE CONSULTATION"}
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="text-black w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif italic text-black mb-4">Brief Received.</h3>
                <p className="text-black/40 text-sm font-light leading-relaxed max-w-md mx-auto">
                  Our architecture team will review your project details and contact you within 24 hours.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="mt-10 text-[10px] font-bold uppercase tracking-widest hover:text-mustard transition-colors text-black/40">
                  Submit Another Inquiry
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER — Next Service Link
          ═══════════════════════════════════════════════════ */}
      <footer className="relative h-[50vh] md:h-[60vh] flex flex-col items-center justify-center overflow-hidden group bg-black">
        <Image
          src="/images/services/arch_interior_design.png"
          alt="Interior Decor"
          fill
          className="object-cover opacity-15 group-hover:opacity-30 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-[5s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-mustard block opacity-50 group-hover:opacity-100 transition-all">
              Explore Next
            </span>
            <Link href="/services/interior-decor" className="block">
              <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-serif italic text-white tracking-tight leading-none hover:text-mustard transition-colors duration-700">
                Interior Decor.
              </h2>
            </Link>
            <p className="text-white/30 text-base font-light max-w-xl mx-auto italic">
              Bespoke styling that elevates the guest experience from ordinary to unforgettable.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
