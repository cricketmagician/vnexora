"use client";

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hammer,
  Wrench,
  Monitor,
  Layout,
  Factory,
  ClipboardList,
  CheckCircle2,
  Plus,
  Minus,
  Mail,
  ArrowRight,
  Home,
  RefreshCcw,
  Layers,
  Armchair,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════
   3D TILT CARD COMPONENT (Hero center piece)
   ═══════════════════════════════════════════════════════ */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SERVICE NAV THUMBNAILS DATA
   ═══════════════════════════════════════════════════════ */
const serviceNavItems = [
  { label: "Interior\nFittings", image: "/images/services/interior_craftsmen.png", anchor: "fittings" },
  { label: "TBS\nExecution", image: "/images/services/arch_tbs_technical.png", anchor: "tbs-exec" },
  { label: "Digital IT\nConcept", image: "/images/services/interior_digital_it.png", anchor: "it-concept" },
  { label: "FF&E &\nFacilitexport default function InteriorDecorPortal() {
  return (
    <main className="bg-white text-black font-sans overflow-x-hidden pt-20">

      {/* ═══════════════════════════════════════════════════
          HERO — Large Luxury Room Photo + Nav Thumbs
          ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Title Overlay */}
        <div className="absolute inset-x-0 top-0 h-[75vh] md:h-[80vh] z-0 mt-[100px]">
          <Image
            src="/images/services/interior_hero_room.png"
            alt="Interior Fittings & Furnishings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center pt-10 px-6">
             <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-sans font-medium text-white tracking-[0.25em] text-center uppercase max-w-7xl leading-[1.1]">
                Interior Fittings –<br className="hidden md:block" /> Furnishings
             </h1>
          </div>
        </div>

        {/* Space for background image */}
        <div className="h-[55vh] md:h-[65vh] w-full" />
      </section>

      {/* Service navigation thumbnails — Dedicated White Section */}
      <section className="relative z-10 w-full bg-white pb-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-7xl mx-auto">
          {serviceNavItems.map((item, i) => (
            <button
              key={i}
              onClick={() => document.getElementById(item.anchor)?.scrollIntoView({ behavior: "smooth" })}
              className="group flex flex-col items-center gap-5 py-8"
            >
              <div className="relative w-full aspect-[4/3] bg-white rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.15)] -translate-y-4 group-hover:translate-y-0 group-hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden border border-black/5">
                <Image src={item.image} alt={item.label} fill className="object-cover" />
              </div>
              <span className="text-[10px] md:text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-black/40 text-center whitespace-pre-line leading-relaxed group-hover:text-black transition-colors">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — INTERIOR FITTINGS
          Text Left | Multi-Photo Right
          ═══════════════════════════════════════════════════ */}
      <section id="fittings" className="py-24 md:py-40 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
              <p className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-black/30">
                Bespoke Design
              </p>
              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-bold text-black leading-[0.9] tracking-[-0.03em]">
                Interior fittings
              </h2>
              <p className="text-xl md:text-2xl text-black/60 font-sans font-light leading-relaxed max-w-xl pr-6">
                Bespoke interior hotel fittings. From drywall construction to furnishings, we ensure a seamless process and optimum results. Your guests will love it!
              </p>
            </motion.div>

            {/* Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:pt-12">
               <div className="relative h-[450px] overflow-hidden rounded-sm shadow-lg">
                 <Image src="/images/services/interior_craftsmen.png" alt="Craftsmanship" fill className="object-cover" />
               </div>
               <div className="relative h-[450px] overflow-hidden rounded-sm shadow-lg md:mt-12">
                 <Image src="/images/services/arch_project_management.png" alt="Planning" fill className="object-cover" />
               </div>
            </div>
          </div>

          {/* Sub-services Icons Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-40">
             {[
               {
                 icon: <Home strokeWidth={1} className="w-12 h-12 text-black/60" />,
                 title: "Complete Expansion",
                 desc: "This service module is a comprehensive care-free package for your interior hotel fittings: one contact for all maintenance groups, optimisation of all interfaces, all fully integrated and assembled."
               },
               {
                 icon: <RefreshCcw strokeWidth={1} className="w-12 h-12 text-black/60" />,
                 title: "Soft Renovation",
                 desc: "Sometimes, all it takes is a little paint and a few touches to completely refresh a hotel room. We can also achieve a major impact for your hotel with straightforward renovation work."
               },
               {
                 icon: <Layers strokeWidth={1} className="w-12 h-12 text-black/60" />,
                 title: "Floors, Wall, Ceiling",
                 desc: "Whether drywall construction, natural stone, tiles, wallpaper, decorating work or stucco: we are your hotel experts for floors, wall and ceiling and can provide sound advice on design, materials and techniques."
               },
               {
                 icon: <Armchair strokeWidth={1} className="w-12 h-12 text-black/60" />,
                 title: "FF&E",
                 desc: "Furniture, fixtures, and equipment: we plan and deliver everything you need to successfully run your hotel. You can rely on our decades of hotel expertise."
               }
             ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="h-16 flex items-end">{item.icon}</div>
                  <h3 className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-black/90">{item.title}</h3>
                  <p className="text-[15px] md:text-base text-black/50 font-sans font-light leading-relaxed">{item.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — TBS EXECUTION
          Multi-Photo Left | Text Right
          ═══════════════════════════════════════════════════ */}
      <section id="tbs-exec" className="py-24 md:py-40 bg-[#FBFBFB]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
            {/* Photos */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="relative h-[550px] overflow-hidden rounded-sm shadow-xl">
                 <Image src="/images/services/arch_tbs_technical.png" alt="Technical Systems" fill className="object-cover" />
               </div>
               <div className="relative h-[550px] overflow-hidden rounded-sm shadow-xl md:mt-20">
                 <Image src="/images/services/hotel_operations_analytics.png" alt="TBS Engineering" fill className="object-cover" />
               </div>
            </div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-10">
              <p className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-black/30">
                Building Technology
              </p>
              <h2 className="text-5xl md:text-7xl font-sans font-bold text-black leading-[0.9] tracking-[-0.03em]">
                TBS execution
              </h2>
              <p className="text-xl text-black/60 font-sans font-light leading-relaxed">
                Your building should be optimally and sustainable run at minimal costs – this is our commitment to you. Our project managers ensure legally compliant implementation of heating, air conditioning, ventilation, plumbing (HVAC), electrical technology, building automation and fire prevention.
              </p>
              <div className="w-20 h-[1.5px] bg-black/10" />
              <p className="text-black/50 font-sans font-light italic text-lg leading-relaxed">
                Communication under one roof, with no additional effort for you!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — DIGITAL IT CONCEPT
          Text Left | Feature Image Right
          ═══════════════════════════════════════════════════ */}
      <section id="it-concept" className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
              <p className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-black/30">
                Smart Control – Optimum User-Friendliness
              </p>
              <h2 className="text-5xl md:text-7xl font-sans font-bold text-black leading-[0.9] tracking-[-0.03em]">
                Digital IT<br />concept
              </h2>
              <p className="text-xl text-black/60 font-sans font-light leading-relaxed">
                Often, not enough attention is given to digital hotel concepts during the planning phase. Optimum WIFI coverage and the seamless functioning of digital backend processes play a key role in guest satisfaction and the smooth running of everyday hotel processes. We take care of this.
              </p>
            </motion.div>

            {/* Digital Image */}
            <div className="relative h-[600px] overflow-hidden rounded-sm shadow-2xl border border-black/5">
               <Image src="/images/services/interior_digital_it.png" alt="IT Planning" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — FF&E, FACILITIES
          Photo Grid + Overlapping Text
          ═══════════════════════════════════════════════════ */}
      <section id="ffe" className="py-24 md:py-40 bg-[#FAF9F6]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
             <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative h-[500px] overflow-hidden shadow-2xl rounded-sm">
                   <Image src="/images/services/interior_ffe_lobby.png" alt="FF&E Lobby" fill className="object-cover" />
                </div>
                <div className="relative h-[500px] overflow-hidden shadow-2xl rounded-sm md:mt-20">
                   <Image src="/images/services/hotel_interior_rendering.png" alt="FF&E Room" fill className="object-cover" />
                </div>
             </div>
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8 lg:pl-16">
                <p className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-black/30">
                  Fixtures, Furniture and Equipment
                </p>
                <h2 className="text-5xl md:text-6xl font-sans font-bold text-black uppercase leading-[1.05] tracking-tight">
                  FF&E, <br />Facilities
                </h2>
                <div className="h-1 w-24 bg-black/10" />
                <p className="text-lg text-black/50 font-sans font-light leading-relaxed">
                   Comprehensive planning and delivery of your entire hotel inventory.
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — FURNITURE FACTORY
          Text Left | Large Workshop Photo Right
          ═══════════════════════════════════════════════════ */}
      <section id="factory" className="py-32 md:py-48 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-sans font-bold text-black leading-[0.9] tracking-[-0.03em]">
                Furniture <br />factory
              </h2>
              <p className="text-xl md:text-2xl text-black/60 font-sans font-light leading-relaxed">
                Furniture for your hotel – 30 master carpenters and regular carpenters produce your furniture at our in-house furniture factory.
              </p>
              <p className="text-lg text-black/50 font-sans font-light italic leading-relaxed max-w-lg">
                Handmade, one-off pieces, as unique as your hotel. Producing high-quality decorative panels, reception areas, kitchenettes, and more.
              </p>
            </motion.div>

            {/* Factory Image */}
            <div className="relative h-[650px] overflow-hidden rounded-sm shadow-2xl border border-black/5">
               <Image src="/images/services/interior_furniture_factory.png" alt="In-house Furniture Factory" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — PROJECT MANAGEMENT
          Split Image Bottom | Text Right Top
          ═══════════════════════════════════════════════════ */}
      <section id="mgmt" className="py-24 md:py-48 bg-[#F8F8F8] border-y border-black/5">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:mt-32">
                <div className="relative h-[450px] overflow-hidden rounded-sm shadow-xl">
                   <Image src="/images/services/arch_project_management.png" alt="Project Coordination" fill className="object-cover" />
                </div>
                <div className="relative h-[450px] overflow-hidden rounded-sm shadow-xl md:mt-16">
                   <Image src="/images/services/interior_craftsmen.png" alt="Field Management" fill className="object-cover" />
                </div>
             </div>
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">
                <p className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-black/30">
                  Interior Fittings – Project Management
                </p>
                <h2 className="text-5xl md:text-7xl font-sans font-bold text-black leading-[0.9] tracking-[-0.03em]">
                  Project<br />management
                </h2>
                <div className="w-20 h-1 bg-black/10" />
                <p className="text-xl text-black/60 font-sans font-light leading-relaxed pr-10">
                  Right from the start, your personal contact will reliably ensure that costs, deadlines and quality are all met and that nothing gets forgotten. They will support you throughout your hotel project and coordinate all stakeholders involved.
                </p>
                <div className="pt-8">
                   <Link href="/contact" className="flex items-center gap-6 group">
                      <span className="text-xs font-sans font-black uppercase tracking-[0.3em] group-hover:text-mustard transition-colors">Contact us for a preliminary consultation</span>
                      <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-mustard group-hover:bg-mustard/10 transition-all">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                   </Link>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA SECTION
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-52 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-sans font-bold text-black leading-[0.95] tracking-[-0.04em]">
                Interior fittings with attention to detail
              </h2>
              <p className="text-xl md:text-2xl text-black/40 font-sans font-light max-w-lg leading-relaxed">
                One partner, all services under one roof. Interior fittings couldn't be easier.
                However, we also welcome projects that only require partial services!
              </p>
              <div className="flex flex-wrap items-center gap-10 pt-6">
                <Link
                  href="/contact"
                  className="px-12 py-6 bg-black text-white text-[12px] font-sans font-black uppercase tracking-[0.4em] hover:bg-mustard hover:text-black transition-all duration-500 shadow-2xl"
                >
                  <Mail className="w-4 h-4 inline-block mr-4 mb-0.5" strokeWidth={3} />
                  Non-Binding Inquiries
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-5 text-[12px] font-sans font-black uppercase tracking-[0.35em] text-black hover:text-mustard transition-colors group"
                >
                  Your Personal Contact <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <div className="relative h-[550px] md:h-[750px] overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-black/5">
              <Image src="/images/services/interior_craftsmen.png" alt="Collaborative Refinement" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
