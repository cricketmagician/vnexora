"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Hospitality Insiders",
    desc: "Our specialists understand the language, pace, and priorities of your business with clinical precision.",
    image: "/images/about-us/insider_door.png",
    accent: "01"
  },
  {
    title: "Relationship-driven",
    desc: "Over 80% of our mandates originate from returning institutional partners who trust our stewardship.",
    image: "/images/about-us/handshake.png",
    accent: "02"
  },
  {
    title: "Proven Success",
    desc: "92% of all optimized assets exceed their baseline yield targets within the first 12 months.",
    image: "/images/about-us/success_team.png",
    accent: "03"
  },
  {
    title: "Nationwide Service",
    desc: "Vnexora operates across all tier-1 markets, delivering deep local intelligence at institutional scale.",
    image: "/images/about-us/nationwide_map.png",
    accent: "04"
  },
  {
    title: "Built for Results",
    desc: "Focused. Timely. Professional. We deliver bespoke recruiting and strategy that fuels high-performance.",
    image: "/images/about-us/results_toast.png",
    accent: "05"
  }
];

export default function WhoWeAreGrid() {
  return (
    <section className="py-24 bg-[#FAF9F6] text-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group shadow-xl"
            >
              {/* Image Layer */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
              
              {/* Content */}
              <div className="relative h-full p-10 flex flex-col justify-end text-white">
                <span className="text-mustard text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-60">
                   Institutional Expertise // {card.accent}
                </span>
                <h3 className="text-3xl font-serif mb-4 group-hover:text-mustard transition-colors">
                  {card.title}
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed max-w-[280px] group-hover:text-white transition-colors">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Card 6: CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="aspect-[4/3] rounded-[2.5rem] bg-[#1a3a2a] flex flex-col items-center justify-center p-12 text-center text-white relative overflow-hidden group border border-white/5"
          >
             {/* Decorative Background Icon */}
             <Users className="absolute top-[-20px] right-[-20px] w-64 h-64 text-white/[0.03] rotate-12" />
             
             <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-white" />
             </div>
             
             <h3 className="text-4xl font-serif mb-10 tracking-tight">Vnexora Collective.</h3>
             
             <Link href="/team" className="group/btn relative inline-block">
                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <button className="px-10 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] rounded-full flex items-center gap-6 group-hover:bg-mustard transition-all duration-500 relative z-10">
                   Meet Our Team
                   <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
