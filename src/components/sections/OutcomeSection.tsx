"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useRef } from "react";

export const OutcomeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["#14231E", "#0B1411", "#0e1a16", "#14231E"]
  );

  return (
    <div ref={containerRef} className="relative">
      <motion.div style={{ backgroundColor: bgGradient }} className="absolute inset-0 -z-10 transition-colors duration-1000" />
      
      {/* SECTION 3: THE SHIFT (Reveal Moment) */}
      <Section className="min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-8"
            >
              It's Not the Property. <br />
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="text-gold-gradient italic"
              >
                It's the System Behind It.
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-cream/60 text-lg md:text-xl font-light"
            >
              True yield is engineered—not found.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* SECTION 4: THE TRANSFORMATION (Imagine) */}
      <Section className="min-h-screen flex flex-col justify-center border-t border-cream/10">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-mustard text-sm font-bold tracking-[0.4em] uppercase mb-16"
            >
              The Transformation
            </motion.p>
            
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-24 leading-tight">
              Imagine Your Property As...
            </h3>

            <div className="space-y-24">
              {[
                "A fully booked destination",
                "A premium brand in your city",
                "A high-performing revenue asset"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center gap-8 group"
                >
                  <span className="text-mustard/20 font-serif text-5xl md:text-7xl group-hover:text-mustard transition-colors duration-700">0{i+1}</span>
                  <p className="text-cream/50 font-serif text-2xl md:text-5xl group-hover:text-white transition-colors duration-700">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
