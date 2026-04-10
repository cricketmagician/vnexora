"use client";

import { motion } from "framer-motion";
import { Target, Heart, Eye } from "lucide-react";

const intents = [
  {
    icon: Target,
    title: "PURPOSE",
    desc: "To make a positive, institutional-grade impact in all we do.",
  },
  {
    icon: Heart,
    title: "PHILOSOPHY",
    desc: "To provide bespoke stewardship for Vnexora Partner Assets.",
  },
  {
    icon: Eye,
    title: "VISION",
    desc: "To be the global benchmarks for hospitality ROI excellence.",
  }
];

export default function InstitutionalIntent() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-20">
          
          {/* Left: Narrative */}
          <div className="md:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#CFA052]">Our Intent</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#0A0A0A] tracking-tight leading-tight">
                What drives <span className="italic">us.</span>
              </h2>
            </div>
            
            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              As we have architected high-performance systems over years, Vnexora has remained committed to the precision that inspired its inception. We stay true to our institutional identity.
            </p>
          </div>

          {/* Right: Pillars */}
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-12 pt-10">
            {intents.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center text-center space-y-6 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#CFA052]/5 border border-slate-100 flex items-center justify-center text-[#CFA052] group-hover:bg-[#CFA052] group-hover:text-white transition-all duration-500">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0A0A0A]">{item.title}</h3>
                  <p className="text-slate-400 text-[13px] font-light leading-relaxed max-w-[200px] mx-auto group-hover:text-slate-600 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
