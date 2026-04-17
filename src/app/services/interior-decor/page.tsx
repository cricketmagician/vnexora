"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Home,
  RefreshCcw,
  Layers,
  Armchair,
  Plus,
  Minus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ArchitectureContactForm from "@/components/forms/ArchitectureContactForm";

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
  { label: "Interior\nFittings", image: "/images/services/interior_craftsmen.png", anchor: "fittings" },
  { label: "TBS\nExecution", image: "/images/services/interior_tbs_execution.png", anchor: "tbs-exec" },
  { label: "Digital IT\nConcept", image: "/images/services/interior_digital_it.png", anchor: "it-concept" },
  { label: "FF&E, Fit-out\n& Procurement", image: "/images/services/interior_ffe_fitout.png", anchor: "ffe" },
  { label: "Furniture\nFactory", image: "/images/services/interior_furniture_factory.png", anchor: "factory" },
  { label: "Project\nManagement", image: "/images/services/arch_project_management.png", anchor: "mgmt" },
];

export default function InteriorDecorPortal() {
  return (
    <main className="bg-white text-black font-sans overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════
          HERO — Large Luxury Room Photo + Nav Thumbs
          ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Title Overlay */}
        <div className="absolute inset-x-0 top-0 h-[75vh] md:h-[80vh] z-0">
          <Image
            src="/images/services/interior_hero_room.png"
            alt="Interior Fittings & Furnishings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center pt-10 px-6">
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-lg text-center px-6 uppercase leading-[1.1]">
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
              <div className="relative w-full aspect-[4/3] bg-white rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.12),0_10px_20px_rgba(0,0,0,0.05)] -translate-y-4 group-hover:-translate-y-8 group-hover:scale-[1.05] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.25)] transition-all duration-500 overflow-hidden border border-black/5">
                <Image src={item.image} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
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
      <section id="fittings" className="py-20 md:py-32 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 pr-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 leading-relaxed">
                Bespoke interior hotel fittings
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                Interior fittings
              </h2>
              <p className="text-[15px] text-black/60 font-light leading-relaxed">
                Bespoke interior hotel fittings. From drywall construction to furnishings, we ensure a seamless process and optimum results. Your guests will love it! One contact for all maintenance groups, optimization of all interfaces, all fully integrated and assembled.
              </p>
            </motion.div>

            {/* Photo 1 */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-sm shadow-sm">
              <Image src="/images/services/interior_craftsmen.png" alt="Craftsmanship" fill className="object-cover" />
            </div>

            {/* Photo 2 */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-sm shadow-sm">
              <Image src="/images/services/arch_project_management.png" alt="Planning" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — TBS EXECUTION
          Multi-Photo Left | Text Right
          ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          SECTION 2 — SERVICE MODULES
          2×2 Icon Grid (Architecture style)
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-[#FBFBFB]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                icon: <Home className="w-8 h-8 text-black/70" />,
                title: "Complete Expansion",
                desc: "This service module is a comprehensive care-free package for your interior hotel fittings: one contact for all maintenance groups, optimization of all interfaces, all fully integrated and assembled.",
              },
              {
                icon: <RefreshCcw className="w-8 h-8 text-black/70" />,
                title: "Soft Renovation",
                desc: "Sometimes, all it takes is a little paint and a few touches to completely refresh a hotel room. We can also achieve a major impact for your hotel with straightforward renovation work.",
              },
              {
                icon: <Layers className="w-8 h-8 text-black/70" />,
                title: "Floors, Wall, Ceiling",
                desc: "Whether drywall construction, natural stone, tiles, wallpaper, decorating work or stucco: we are your hotel experts for floors, wall and ceiling and can provide sound advice on design, materials and techniques.",
              },
              {
                icon: <Armchair className="w-8 h-8 text-black/70" />,
                title: "FF&E, Fit-out & Procurement",
                desc: "Turnkey interior fit-outs combining global procurement with local high-precision assembly. From OS&E to bespoke furniture, we manage 100% of your hotel's inventory lifecycle.",
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
          SECTION 3 — TBS EXECUTION
          3-column: Photo | Photo | Text
          ═══════════════════════════════════════════════════ */}
      <section id="tbs-exec" className="py-20 md:py-32 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
             {/* Photo 1 */}
             <div className="relative h-[280px] md:h-[350px] overflow-hidden rounded-sm shadow-sm">
               <Image src="/images/services/arch_tbs_technical.png" alt="Technical Systems" fill className="object-cover" />
             </div>
             {/* Photo 2 */}
             <div className="relative h-[280px] md:h-[350px] overflow-hidden rounded-sm shadow-sm">
               <Image src="/images/services/interior_tbs_execution.png" alt="TBS Engineering" fill className="object-cover" />
             </div>
             {/* Text */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                  Building Technology
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                  TBS execution
                </h2>
                <p className="text-[15px] text-black/60 font-light leading-relaxed">
                  Your building should be optimally and sustainable run at minimal costs – this is our commitment to you. Our project managers ensure legally compliant implementation of heating, air conditioning, ventilation, plumbing (HVAC), electrical technology, building automation and fire prevention.
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — DIGITAL IT CONCEPT
          Text Left | Feature Image Right
          ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          SECTION 4 — DIGITAL IT CONCEPT
          2-column: Text | Photo
          ═══════════════════════════════════════════════════ */}
      <section id="it-concept" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 leading-relaxed text-center lg:text-left">
                Smart Control – Optimum User-Friendliness
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1] text-center lg:text-left">
                Digital IT<br />concept
              </h2>
              <p className="text-[15px] text-black/60 font-light leading-relaxed text-center lg:text-left">
                Often, not enough attention is given to digital hotel concepts during the planning phase. Optimum WIFI coverage and the seamless functioning of digital backend processes play a key role in guest satisfaction and the smooth running of everyday hotel processes. We take care of this.
              </p>
            </motion.div>

            {/* Digital Image */}
            <div className="relative h-[300px] md:h-[450px] overflow-hidden rounded-sm shadow-sm">
               <Image src="/images/services/interior_digital_it.png" alt="IT Planning" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — FF&E, FACILITIES
          Photo Grid + Overlapping Text
          ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          SECTION 5 — FF&E, FACILITIES
          3-column: Photo | Photo | Text
          ═══════════════════════════════════════════════════ */}
      <section id="ffe" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
             <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-sm shadow-sm">
                <Image src="/images/services/interior_ffe_lobby.png" alt="FF&E Lobby" fill className="object-cover" />
             </div>
             <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-sm shadow-sm">
                <Image src="/images/services/interior_ffe_fitout.png" alt="FF&E Fit-out" fill className="object-cover" />
             </div>
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                  Fixtures, Furniture and Equipment
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                  FF&E, Fit-out <br />& Procurement
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] text-black/60 font-light leading-relaxed">
                    In the Indian hospitality landscape, delivering a luxury asset requires a delicate balance of global design standards and local execution mastery. We provide turnkey FF&E (Furniture, Fixtures, and Equipment) and fit-out solutions tailored for the high-end market.
                  </p>
                  <p className="text-[15px] text-black/60 font-light leading-relaxed">
                    From sourcing premium materials globally to managing high-precision local fit-outs and OS&E procurement, we ensure every detail—from the lobby chandelier to the bedside technology—is curated for durability, luxury, and cultural resonance.
                  </p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — FURNITURE FACTORY
          Text Left | Large Workshop Photo Right
          ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          SECTION 6 — FURNITURE FACTORY
          2-column: Text | Photo
          ═══════════════════════════════════════════════════ */}
      <section id="factory" className="py-20 md:py-32 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                Furniture <br />factory
              </h2>
              <p className="text-[15px] text-black/60 font-light leading-relaxed">
                Furniture for your hotel – 30 master carpenters and regular carpenters produce your furniture at our in-house furniture factory. Handmade, one-off pieces, as unique as your hotel. Producing high-quality decorative panels, reception areas, kitchenettes, and more.
              </p>
            </motion.div>

            {/* Factory Image */}
            <div className="relative h-[300px] md:h-[450px] overflow-hidden rounded-sm shadow-sm">
               <Image src="/images/services/interior_furniture_factory.png" alt="In-house Furniture Factory" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — PROJECT MANAGEMENT
          Split Image Bottom | Text Right Top
          ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          SECTION 7 — PROJECT MANAGEMENT
          3-column: Text | Photo | Photo
          ═══════════════════════════════════════════════════ */}
      <section id="mgmt" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 pr-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 leading-relaxed">
                Interior Fittings – Project Management
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                Project<br />management
              </h2>
              <p className="text-[15px] text-black/60 font-light leading-relaxed">
                Right from the start, your personal contact will reliably ensure that costs, deadlines and quality are all met and that nothing gets forgotten. They will support you throughout your hotel project and coordinate all stakeholders involved.
              </p>
            </motion.div>

            {/* Photo 1 */}
            <div className="relative h-[300px] md:h-[420px] overflow-hidden rounded-sm shadow-sm">
              <Image src="/images/services/arch_project_management.png" alt="Project Coordination" fill className="object-cover" />
            </div>

            {/* Photo 2 */}
            <div className="relative h-[300px] md:h-[420px] overflow-hidden rounded-sm shadow-sm">
              <Image src="/images/services/interior_craftsmen.png" alt="Field Management" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 8 — CONTACT FORM (Auroma Style)
          ═══════════════════════════════════════════════════ */}
      <ArchitectureContactForm 
        source="interior_decor_portal"
        title="Start your interior"
        accentTitle="requirement"
        subtitle="Our interior decorators and craftsmen are ready to refine your hotel's aesthetic. Provide your project details to begin."
      />

      {/* ═══════════════════════════════════════════════════
          SECTION 9 — FAQ ACCORDION
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="space-y-2 mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
              Questions & Answers
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
              Interior Fittings & Furnishings FAQ
            </h2>
          </div>

          <div>
            <FAQItem
              question="What is the scope of 'Complete Expansion' for interior fittings?"
              answer="Complete Expansion is a care-free service module that covers the entire interior build-out, from drywall construction and ceiling work to final flooring and custom joinery. We provide a single point of contact to coordinate all trades, optimizing interfaces and ensuring a faster, more reliable handover."
            />
            <FAQItem
              question="Can you handle 'Soft Renovations' while the hotel is partially operational?"
              answer="Yes, our project management team is specialized in phased hotel renovations. We strategically plan work cycles to minimize noise and guest disruption, often working room-by-room or floor-by-floor to maintain your revenue stream during the upgrade process."
            />
            <FAQItem
              question="What is included in FF&E services?"
              answer="FF&E (Furniture, Fixtures, and Equipment) covers everything from bedroom and lounge furniture to lighting, specialized kitchen equipment, and spa fittings. We handle the entire procurement, logistics, and assembly process, ensuring everything meets the high-traffic durability requirements of luxury hospitality."
            />
            <FAQItem
              question="How do you integrate TBS (Technical Building Services) with interior decor?"
              answer="We believe interior design and technical infrastructure must function as one. Our project managers coordinate closely with electrical and HVAC planners to integrate air conditioning vents, smart building controls, and lighting systems seamlessly into decorative panels and furniture, ensuring aesthetic purity without compromising performance."
            />
            <FAQItem
              question="Does Vnexora produce custom furniture in-house?"
              answer="Yes, we operate an in-house furniture factory with over 30 master carpenters. This allows us to create bespoke, one-off pieces — such as unique reception desks, decorative wall paneling, and tailored kitchenettes — specifically for your hotel's brand identity, with total control over quality and timelines."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
