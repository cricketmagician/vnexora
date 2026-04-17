"use client";

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DraftingCompass,
  Ruler,
  FileCheck,
  Palette,
  Box,
  ClipboardList,
  Zap,
  Wind,
  Droplets,
  ShieldAlert,
  CalendarCheck,
  Plus,
  Minus,
  Mail,
  ArrowRight,
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
   FAQ ACCORDION ITEM
   ═══════════════════════════════════════════════════════ */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-black group-hover:text-black/70 transition-colors pr-8">
          {question}
        </span>
        {open ? <Minus className="w-5 h-5 text-black/40 flex-shrink-0" /> : <Plus className="w-5 h-5 text-black/40 flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm md:text-base text-black/50 font-light leading-relaxed max-w-4xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SERVICE NAV THUMBNAILS DATA
   ═══════════════════════════════════════════════════════ */
const serviceNavItems = [
  { label: "Analysis &\nConsultation", image: "/images/services/arch_needs_analysis.png", anchor: "analysis" },
  { label: "Architecture", image: "/images/services/technical_architecture_blueprint.png", anchor: "architecture" },
  { label: "Interior\nArchitecture", image: "/images/services/arch_interior_sketch.png", anchor: "interior" },
  { label: "TBS\nPlanning", image: "/images/services/arch_tbs_technical.png", anchor: "tbs" },
  { label: "Project\nManagement", image: "/images/services/arch_project_management.png", anchor: "management" },
  { label: "3D\nVisualisation", image: "/images/services/hotel_interior_rendering.png", anchor: "cta" },
];

/* ═══════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function HotelArchitecturePortal() {
  return (
    <main className="bg-white text-black font-sans overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════
          HERO — Dark Blueprint BG + 3D Tilt Floor Plan + Nav Thumbs
          ═══════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] md:h-[90vh] flex flex-col justify-end overflow-hidden bg-[#1a1a2e]">
        {/* Bespoke Architecture Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/hotel_architecture_bespoke.png"
            alt="Bespoke Luxury Hotel Architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Centered Title */}
        <div className="container mx-auto px-6 md:px-16 pb-20 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white tracking-tight drop-shadow-lg text-center px-6 uppercase leading-[1.1]">
              Hotel Architecture
            </h1>
          </motion.div>
        </div>

        {/* Service navigation thumbnails — blurred strip with -10 lift */}
        <div className="relative z-10 w-full bg-white/10 backdrop-blur-md border-t border-white/10 px-4">
           <div className="container mx-auto max-w-5xl py-8">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                {serviceNavItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => document.getElementById(item.anchor)?.scrollIntoView({ behavior: "smooth" })}
                    className="group flex flex-col items-center gap-4"
                  >
                    <div className="relative w-full aspect-[4/3] bg-white rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] -translate-y-6 group-hover:-translate-y-10 group-hover:scale-[1.05] group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden border border-white/10">
                      <Image src={item.image} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 transition-colors group-hover:text-white whitespace-pre-line leading-relaxed text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — NEEDS ANALYSIS & CONSULTATION
          3-column: Text | Photo | Photo
          ═══════════════════════════════════════════════════ */}
      <section id="analysis" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 pr-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 leading-relaxed">
                Ideas, wishes and current status of your building project
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                Needs analysis<br />& consultation
              </h2>
              <p className="text-[15px] text-black/60 font-light leading-relaxed">
                Each hotel is unique, each guest has different demands and each host has their own requirements. The initial consultation is about getting to know one another and understanding the requirements of your building project. We actively listen, which is the basic requirement for a successful planning concept.
              </p>
            </motion.div>

            {/* Photo 1 */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <Image src="/images/services/arch_needs_analysis.png" alt="Consultation" fill className="object-cover" />
            </div>

            {/* Photo 2 */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <Image src="/images/services/arch_project_management.png" alt="Partnership" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — ARCHITECTURE
          2-column: Sketch Left | Text Right
          ═══════════════════════════════════════════════════ */}
      <section id="architecture" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Architectural sketch/drawing */}
            <div className="relative h-[350px] md:h-[500px] overflow-hidden">
              <Image src="/images/services/technical_architecture_blueprint.png" alt="Architecture Plans" fill className="object-cover" />
            </div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 lg:pt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                Architecture, design and use in harmony
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                Architecture
              </h2>
              <p className="text-[15px] text-black/60 font-light leading-relaxed">
                Planning is at the heart of every construction project, particularly the architecture of the hotel building. Our architects develop initial drafts and floor layout plans based on your ideas and requests. Upon approval, detailed planning then begins in which we also communicate with authorities, public bodies and banks. Results-oriented and on time.
              </p>

              {/* Icon bullet list */}
              <div className="space-y-5 pt-4">
                <div className="flex items-center gap-4">
                  <DraftingCompass className="w-5 h-5 text-black/60 flex-shrink-0" />
                  <span className="text-sm font-semibold text-black">Design planning</span>
                </div>
                <div className="flex items-center gap-4">
                  <FileCheck className="w-5 h-5 text-black/60 flex-shrink-0" />
                  <span className="text-sm font-semibold text-black">Approval planning</span>
                </div>
                <div className="flex items-center gap-4">
                  <Ruler className="w-5 h-5 text-black/60 flex-shrink-0" />
                  <span className="text-sm font-semibold text-black">Execution planning</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — INTERIOR ARCHITECTURE
          3-column: Text | Sketch | Photo
          ═══════════════════════════════════════════════════ */}
      <section id="interior" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 pr-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                Design with atmosphere
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                Interior<br />architecture
              </h2>
              <p className="text-[15px] text-black/60 font-light leading-relaxed">
                Rooms need atmosphere. With great sensitivity to your requirements, our interior designers create atmospheric and practical room, design and lighting concepts for your hotel. This ensures we always keep sight of the overall hotel project.
              </p>

              {/* Icon bullet list */}
              <div className="space-y-5 pt-2">
                <div className="flex items-center gap-4">
                  <DraftingCompass className="w-5 h-5 text-black/60 flex-shrink-0" />
                  <span className="text-sm font-semibold text-black">Design planning</span>
                </div>
                <div className="flex items-center gap-4">
                  <Palette className="w-5 h-5 text-black/60 flex-shrink-0" />
                  <span className="text-sm font-semibold text-black">Material selection</span>
                </div>
                <div className="flex items-center gap-4">
                  <Ruler className="w-5 h-5 text-black/60 flex-shrink-0" />
                  <span className="text-sm font-semibold text-black">Execution planning</span>
                </div>
              </div>
            </motion.div>

            {/* Interior sketch */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <Image src="/images/services/arch_interior_sketch.png" alt="Interior Sketch" fill className="object-cover" />
            </div>

            {/* Photo — designer at work */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <Image src="/images/services/arch_cta_person.png" alt="Interior Designer" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — TBS PLANNING
          Top: Photos + Text | Bottom: 2×2 sub-service grid
          ═══════════════════════════════════════════════════ */}
      <section id="tbs" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl space-y-16">
          {/* Top row: photos left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Photo 1 */}
            <div className="relative h-[280px] md:h-[350px] overflow-hidden">
              <Image src="/images/services/arch_needs_analysis.png" alt="TBS Team" fill className="object-cover" />
            </div>

            {/* Photo 2 */}
            <div className="relative h-[280px] md:h-[350px] overflow-hidden">
              <Image src="/images/services/arch_tbs_technical.png" alt="Technical Systems" fill className="object-cover" />
            </div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                Sustainable building technology
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                TBS Planning
              </h2>
              <p className="text-[15px] text-black/60 font-light leading-relaxed">
                Your building should be optimally used and operated: this is our focus when it comes to planning technical building services. Our professional TBS planners oversee heating, air conditioning, ventilation, plumbing (HVAC), electrical technology, and building automation, all in close coordination with our architects and project managers. Simple and sustainable.
              </p>
            </motion.div>
          </div>

          {/* Bottom: 2×2 sub-service grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-4">
            {[
              {
                icon: <Zap className="w-8 h-8 text-black/70" />,
                title: "Electrical Planning",
                desc: "Good technical hotel planning is well thought-out, energy and cost-efficient and makes a significant contribution towards sustainability. Whether lighting, sockets, switches or digital hotel systems, our modern and innovative solutions stick to the motto \"keep it simple\" for easy usability.",
              },
              {
                icon: <Wind className="w-8 h-8 text-black/70" />,
                title: "HVAC",
                desc: "Heating, ventilation and air conditioning – we advise and plan in all areas based on energetic and economic aspects. Compliant and professional, highly efficient and based on the state of the art.",
              },
              {
                icon: <Droplets className="w-8 h-8 text-black/70" />,
                title: "Plumbing",
                desc: "Plumbing plays an elementary role in a hotel. Although not always visible to the eye, it must nevertheless function perfectly. Drinking water hygiene, optimisation of resources and spa facilities – our professional planners advise you according to your needs.",
              },
              {
                icon: <ShieldAlert className="w-8 h-8 text-black/70" />,
                title: "Fire Prevention",
                desc: "Essential for every hotel and the interface of all building equipment: the fire prevention concept. As part of our integral planning process, we develop a comprehensive fire prevention concept in coordination with building regulations and guidelines.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div>{item.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-black">{item.title}</h3>
                <p className="text-[15px] text-black/50 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — PROJECT MANAGEMENT
          3-column: Text | Photo | Photo
          ═══════════════════════════════════════════════════ */}
      <section id="management" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 pr-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                General planning – coordinating the goal
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                Project<br />management
              </h2>
              <p className="text-[15px] text-black/60 font-light leading-relaxed">
                Our project managers pull all the strings. They determine the schedule upon project launch, coordinate our in-house architects and professional planners and oversee design plans, samples, deadlines and budget requirements. Benefit from our experience.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <CalendarCheck className="w-5 h-5 text-black/60 flex-shrink-0" />
                <span className="text-sm font-semibold text-black">Integral planning</span>
              </div>
            </motion.div>

            {/* Photo 1 */}
            <div className="relative h-[300px] md:h-[420px] overflow-hidden">
              <Image src="/images/services/arch_project_management.png" alt="Project Management" fill className="object-cover" />
            </div>

            {/* Photo 2 */}
            <div className="relative h-[300px] md:h-[420px] overflow-hidden">
              <Image src="/images/services/arch_cta_person.png" alt="Material Selection" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — CTA
          2-column: Text + Buttons Left | Photo Right
          ═══════════════════════════════════════════════════ */}
      <section id="cta" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text + CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-black leading-[1.15]">
                Want to impress your guests?
              </h2>
              <p className="text-base text-black/60 font-light">
                We can help you create a unique hotel!<br />
                Enquire today.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-mustard hover:text-black transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Non-Binding Request
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black hover:text-mustard transition-colors"
                >
                  Your Personal Contact <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Photo */}
            <div className="relative h-[350px] md:h-[480px] overflow-hidden">
              <Image src="/images/services/arch_cta_person.png" alt="Your Contact" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7 — FAQ ACCORDION
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="space-y-2 mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
              Questions & Answers
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
              Our services for hotel architecture & hotel interior design
            </h2>
          </div>

          <div>
            <FAQItem
              question="What is meant by the term hotel architecture?"
              answer="Hotel architecture refers to the planning and design of hotel buildings and their interiors. Architecture refers to the building in general, including its shape, floor plans, technology and external appearance. Interior design, on the other hand, focuses mainly on the interior design, such as the choice of colors, furniture, textiles and lighting. Hotel architects and interior designers work closely together to create a harmonious overall picture. Hotel architecture takes into account functional requirements, building services, high-quality design, hotel interior style, comfort and sustainability to create the perfect guest experience."
            />
            <FAQItem
              question="What are the tasks of a hotel architect?"
              answer="A hotel architect is responsible for the complete planning and design of the hotel building. This includes developing floor plans, facade design, structural engineering and coordinating with authorities for building permits. They also ensure the building meets safety regulations, accessibility standards and energy efficiency requirements while creating an aesthetically pleasing structure."
            />
            <FAQItem
              question="Which hotel areas are planned in interior design?"
              answer="Interior design covers all guest-facing and operational areas of a hotel. This includes the lobby and reception, guest rooms and suites, restaurants and bars, spa and wellness areas, conference rooms, corridors and public spaces. Each area requires a unique approach to lighting, materials and furniture to create the desired atmosphere while maintaining operational practicality."
            />
            <FAQItem
              question="How does the architecture of a luxury hotel differ from that of a budget hotel?"
              answer="Luxury hotels focus on premium materials, generous spatial planning, high-end technical systems and bespoke design elements. Budget hotels prioritize efficient use of space, standardized room layouts, cost-effective materials and simplified technical systems. However, both require careful architectural planning to ensure guest comfort and operational efficiency."
            />
            <FAQItem
              question="What influence does hotel architecture have on the guest experience and satisfaction?"
              answer="Hotel architecture directly impacts how guests feel from the moment they arrive. The building's exterior creates the first impression, the lobby sets the tone, and the room design determines comfort levels. Good architecture optimizes natural light, acoustics, temperature control and spatial flow — all of which subconsciously influence guest satisfaction and their decision to return."
            />
            <FAQItem
              question="How does hotel architecture differ from the architecture of a residential building?"
              answer="Hotels are 24/7 operational buildings with complex technical requirements — commercial kitchens, laundry facilities, HVAC for hundreds of rooms, fire safety for public assembly areas, and accessibility compliance. Unlike residential buildings, hotels must balance aesthetic design with intensive operational demands, high traffic flows, and the need for rapid maintenance access."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
