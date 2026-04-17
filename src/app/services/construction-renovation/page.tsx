"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HardHat,
  Hammer,
  DraftingCompass,
  FileCheck,
  ShieldCheck,
  Zap,
  Wind,
  Droplets,
  CalendarCheck,
  Plus,
  Minus,
  Mail,
  ArrowRight,
  Loader2,
  Building,
  RefreshCcw,
  Layers,
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
  { label: "Core &\nShell", image: "/images/services/construction_core_shell.png", anchor: "core-shell" },
  { label: "Hotel\nRenovation", image: "/images/services/construction_renovation.png", anchor: "renovation" },
  { label: "Technical\nIntegration", image: "/images/services/arch_tbs_technical.png", anchor: "tbs" },
  { label: "Site\nManagement", image: "/images/services/arch_project_management.png", anchor: "management" },
];

export default function ConstructionRenovationPortal() {
  return (
    <main className="bg-white text-black font-sans overflow-x-hidden">
      
      {/* ═══════════════════════════════════════════════════
          HERO — Professional Construction Visuals
          ═══════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden flex flex-col justify-end">
        <Image 
          src="/images/services/construction_hero.png" 
          alt="Luxury hotel construction site" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="container mx-auto px-6 md:px-16 pb-20 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }} 
            className="space-y-6"
          >
             <h1 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-lg uppercase leading-[1.1]">
                Construction &<br />Renovation
             </h1>
          </motion.div>
        </div>

        {/* Thumbs overlay */}
        <div className="relative z-10 w-full bg-white/10 backdrop-blur-sm border-t border-white/10 px-4">
           <div className="container mx-auto max-w-5xl py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {serviceNavItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => document.getElementById(item.anchor)?.scrollIntoView({ behavior: "smooth" })}
                    className="group flex flex-col items-center gap-4"
                  >
                    <div className="relative w-full aspect-[4/3] bg-white rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.25)] -translate-y-6 group-hover:-translate-y-10 group-hover:scale-[1.05] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden border border-white/10">
                      <Image src={item.image} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 transition-colors group-hover:text-white whitespace-pre-line leading-relaxed">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — CORE & SHELL
          Text | Photo | Photo
          ═══════════════════════════════════════════════════ */}
      <section id="core-shell" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 pr-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 leading-relaxed">
                Foundations and structural integrity
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                Core & Shell
              </h2>
              <p className="text-[15px] text-black/60 font-light leading-relaxed">
                New hotel construction requires a balance of speed and structural perfection. We manage the core and shell phase with clinical precision, ensuring the backbone of your hospitality asset is built to last for generations.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <Building className="w-5 h-5 text-black/60 flex-shrink-0" />
                  <span className="text-sm font-semibold text-black">Structural Engineering</span>
                </div>
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-5 h-5 text-black/60 flex-shrink-0" />
                  <span className="text-sm font-semibold text-black">Safety Compliance</span>
                </div>
              </div>
            </motion.div>

            {/* Photos */}
            <div className="relative h-[300px] md:h-[450px] overflow-hidden rounded-sm shadow-sm">
              <Image src="/images/services/construction_core_shell.png" alt="Core & Shell" fill className="object-cover" />
            </div>
            <div className="relative h-[300px] md:h-[450px] overflow-hidden rounded-sm shadow-sm">
              <Image src="/images/services/property_development.png" alt="Finished Structure" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — RENOVATION
          Grid Style Layout
          ═══════════════════════════════════════════════════ */}
      <section id="renovation" className="py-20 md:py-32 bg-[#FBFBFB]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-sm shadow-xl">
                <Image src="/images/services/construction_renovation.png" alt="Hotel Renovation" fill className="object-cover" />
             </div>
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                  Revitalizing high-value assets
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                  Hotel Renovation
                </h2>
                <p className="text-[17px] text-black/60 font-light leading-relaxed pr-10">
                  Renovating an operational hotel is an art form. We specialize in fast-track refurbishment cycles that minimize guest disruption while maximizing asset value. Whether it's a soft refresh or a complete lifestyle conversion, we deliver cost-certain results.
                </p>
                <ul className="space-y-4 pt-4">
                   {[
                     "Phased implementation during partial operations",
                     "Short construction periods for minimal downtime",
                     "Highest quality standards in room finishing",
                     "Full-service turnkey renovation mandates"
                   ].map((text, i) => (
                     <li key={i} className="flex items-start gap-4 text-sm font-medium text-black/80">
                        <RefreshCcw className="w-4 h-4 mt-0.5 text-mustard" />
                        <span>{text}</span>
                     </li>
                   ))}
                </ul>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — TBS INTEGRATION
          3-column: Text | Photo | Photo
          ═══════════════════════════════════════════════════ */}
      <section id="tbs" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
             {/* Text column */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                  Technical Building Services
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                  Technical<br />Integration
                </h2>
                <p className="text-[15px] text-black/60 font-light leading-relaxed">
                  Construction and engineering must function as one. We integrate HVAC, Electrical, and digital hotel systems from day one, ensuring your technical infrastructure is invisible to guests but invincible in performance.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                   <div className="flex flex-col gap-2">
                      <Zap className="w-6 h-6 text-black/50" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Electrical</span>
                   </div>
                   <div className="flex flex-col gap-2">
                      <Wind className="w-6 h-6 text-black/50" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Climate</span>
                   </div>
                </div>
             </motion.div>
             {/* Photos */}
             <div className="relative h-[300px] md:h-[450px] overflow-hidden rounded-sm shadow-sm">
               <Image src="/images/services/arch_tbs_technical.png" alt="TBS Planning" fill className="object-cover" />
             </div>
             <div className="relative h-[300px] md:h-[450px] overflow-hidden rounded-sm shadow-sm">
               <Image src="/images/services/interior_digital_it.png" alt="IT Infrastructure" fill className="object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — SITE MANAGEMENT
          Institutional Layout
          ═══════════════════════════════════════════════════ */}
      <section id="management" className="py-20 md:py-32 bg-[#FBFBFB] border-t border-black/5">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                Precision coordination on-site
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-[1.1]">
                Site<br />Management
              </h2>
              <p className="text-[17px] text-black/60 font-light leading-relaxed">
                Our site managers are the guardians of your project's heartbeat. They coordinate trades, manage timelines with military precision, and ensure strict adherence to quality and safety standards. With Vnexora, your construction site is a model of professional efficiency.
              </p>
              <div className="flex items-center gap-6 pt-4">
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-serif font-bold text-black">100%</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">Cost Certainty</span>
                 </div>
                 <div className="w-px h-12 bg-black/10" />
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-serif font-bold text-black">On-Time</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">Guarantee</span>
                 </div>
              </div>
            </motion.div>

            <div className="relative h-[350px] md:h-[500px] overflow-hidden rounded-sm shadow-sm">
               <Image src="/images/services/arch_project_management.png" alt="On-site Coordination" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — FAQ
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="space-y-4 mb-16 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">
              Technical Q&A
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-black">
              Construction & Renovation FAQ
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="What is meant by turnkey hotel construction?"
              answer="Turnkey construction means Vnexora manages the entire process from the first dig to the final handover. You receive a fully operational building ready for occupation. We take responsibility for all planning, procurement, construction trades, and technical building services, providing you with a single point of accountability and fixed-price guarantees."
            />
            <FAQItem 
              question="How do you handle renovations while the hotel is still open?"
              answer="Renovating while operational is our core specialty. We develop detailed work phase plans that isolate construction zones from guest areas. This includes dust-protection walls, noise-restricted work hours, and optimized logistic routes for workers to ensure your guests enjoy a premium stay despite the ongoing improvements."
            />
            <FAQItem 
              question="Can Vnexora provide fixed price and deadline guarantees?"
              answer="Yes. Our institutional construction process is designed to eliminate uncertainty. Based on our detailed professional planning, we provide clear cost and deadline guarantees for our renovation and construction mandates, giving you total security for your investment."
            />
            <FAQItem 
              question="What technical services (TBS) are included in your scope?"
              answer="Our construction mandates cover all essential technical building services, including HVAC (Heating, Ventilation, Air Conditioning), sanitary and plumbing works, electrical systems, lighting control, and fire prevention. We ensure all these systems are integrated according to current sustainability and building regulations."
            />
            <FAQItem 
              question="What roles do Site Managers and Project Managers play?"
              answer="Project Managers pull the strings from a strategic level—managing budget, sample approvals, and overall timelines. Site Managers are present on the construction site daily to coordinate the actual execution, solve technical challenges on the spot, and enforce our high quality and safety standards among all trades."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CONTACT FORM (Auroma Style)
          ═══════════════════════════════════════════════════ */}
      <ArchitectureContactForm 
        source="construction_portal"
        title="Start your construction"
        accentTitle="mandate"
        subtitle="Our technical building service experts and site managers are ready to lead your renovation or new build. Provide your project details to begin."
      />

    </main>
  );
}
