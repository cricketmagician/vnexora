"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description: "In-depth audit of revenue leaks, operational friction, and positioning gaps.",
    offset: 0,
    image: "/images/diagnose.png"
  },
  {
    number: "02",
    title: "Reposition",
    description: "Brand alignment, pricing optimization, and strategic market pivot.",
    offset: 20,
    image: "/images/reposition.png"
  },
  {
    number: "03",
    title: "Optimize",
    description: "End-to-end operational, staffing, and technology systems integration.",
    offset: -10,
    image: "/images/optimize.png"
  },
  {
    number: "04",
    title: "Scale",
    description: "Long-term growth strategies and sustained asset value maximization.",
    offset: 10,
    image: "/images/scale.png"
  }
];

export const TransformationModel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  return (
    <Section id="model" className="bg-cream relative overflow-hidden py-32 border-b border-dark-text/10">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-mustard text-xs font-bold uppercase tracking-[0.4em] mb-4"
          >
            Proprietary Methodology
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-dark-text tracking-tight mb-6"
          >
            Asset Transformation Model
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Our systematic approach to moving your property from underperformance to market dominance.
          </motion.p>
        </div>
      </div>

      <div ref={targetRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mt-20">
        {steps.map((item, index) => {
          const y = useTransform(scrollYProgress, [0, 1], [item.offset * 2, -item.offset * 2]);
          
          return (
            <motion.div 
              key={index}
              style={{ y }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white/40 border border-dark-text/10 shadow-xl backdrop-blur-xl relative p-10 h-[500px] flex flex-col justify-between group overflow-hidden"
            >
              {/* Cinematic Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover opacity-10 mix-blend-overlay grayscale transition-all duration-1000 group-hover:opacity-30 group-hover:grayscale-0 group-hover:scale-110"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/40 to-transparent" />
              </div>

              <span className="text-8xl font-serif font-bold text-dark-text/5 group-hover:text-mustard/10 transition-colors absolute -top-4 -right-4 leading-none z-10 font-black">
                {item.number}
              </span>
              
              <div className="relative z-10 mt-auto">
                <div className="w-12 h-px bg-mustard/50 mb-8 group-hover:w-20 transition-all duration-700" />
                <h3 className="text-3xl font-serif text-dark-text mb-6 tracking-tight group-hover:text-mustard transition-colors">{item.title}</h3>
                <p className="text-dark-text/70 leading-relaxed font-light text-base transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-muted group-hover:text-mustard transition-colors mt-8">
                <span>Phase {item.number}</span>
                <div className="h-px flex-1 bg-dark-text/10 group-hover:bg-mustard/40" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
