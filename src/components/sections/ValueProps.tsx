"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { MoveRight, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  {
    title: "Unmatched Speed in Talent Acquisition",
    description: "Our proprietary database and global network allow us to source elite candidates in record time, ensuring your property or house remains operational at the highest standards.",
    cta: "READ MORE"
  },
  {
    title: "Long-Term Value & Confidence",
    description: "We don't just fill roles; we build teams. Our rigorous screening and personality profiling guarantee a cultural fit that lasts, reducing turnover and increasing guest satisfaction.",
    cta: "READ MORE"
  },
  {
    title: "Comprehensive Advertising & Sourcing",
    description: "We handle the entire spectrum—from boutique social branding to executive-level headhunting—so you can focus on delivering exceptional hospitality experiences.",
    cta: "READ MORE"
  }
];

const ValueCard = ({ item, idx }: { item: typeof values[0]; idx: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-forest-dark p-12 md:p-16 lg:p-20 flex flex-col space-y-8 group hover:bg-forest transition-all duration-700 border-b md:border-b-0 md:border-r border-white/10 last:border-none relative animate-fade-in"
      style={{ animationDelay: `${idx * 0.2}s` }}
    >
      <div className="h-0.5 w-0 bg-mustard absolute top-0 left-0 transition-all duration-700 group-hover:w-full" />
      
      <h3 className="text-3xl lg:text-4xl font-serif text-white leading-[1.2] min-h-[3.6em] flex items-center">
        {item.title}
      </h3>

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-white/70 text-base lg:text-lg font-light leading-relaxed pt-2 pb-8 border-t border-white/5 mt-4">
                {item.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-auto flex items-center gap-4 text-mustard font-bold tracking-[0.2em] text-[10px] uppercase group-hover:gap-6 transition-all duration-500"
      >
        {isExpanded ? "READ LESS" : "READ MORE"} 
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 transition-transform" />
        ) : (
          <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
        )}
      </button>
    </div>
  );
};

export const ValueProps = () => {
  return (
    <Section className="bg-forest p-0 overflow-hidden">
      <div className="container mx-auto px-0 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y md:border border-white/10 overflow-hidden">
           {values.map((item, idx) => (
             <ValueCard key={idx} item={item} idx={idx} />
           ))}
        </div>
      </div>
    </Section>
  );
};
