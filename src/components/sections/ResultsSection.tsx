"use client";

import { motion, useScroll, useTransform, animate } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useRef, useEffect, useState } from "react";

const Counter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (latestValue) => setDisplayValue(Math.floor(latestValue))
    });
    return () => controls.stop();
  }, [value]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

const metrics = [
  {
    value: 32,
    suffix: "%",
    label: "RevPAR Increase",
    desc: "Average revenue growth across our managed portfolio within 12 months."
  },
  {
    value: 82,
    suffix: "%",
    label: "Portfolio Occupancy",
    desc: "Sustained occupancy levels even during off-peak market cycles."
  },
  {
    value: 420,
    prefix: "₹",
    suffix: " Cr+",
    label: "Asset Value Growth",
    desc: "Total capital appreciation unlocked for our hospitality partners."
  }
];

export const ResultsSection = () => {
  return (
    <Section id="results" className="bg-cream py-32 border-y border-dark-text/10">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-mustard text-xs font-bold uppercase tracking-[0.4em] mb-6"
          >
            Proof of Concept
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-serif text-dark-text mb-8 tracking-tight">
            The Vnexora Effect
          </h2>
          <p className="text-muted text-lg md:text-xl font-light max-w-2xl mx-auto">
            We don't promise results. We engineer them through clinical execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 max-w-6xl mx-auto">
          {metrics.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-6xl md:text-8xl font-serif font-black text-dark-text mb-6 tracking-tighter group-hover:text-mustard transition-colors duration-700">
                <Counter value={item.value} suffix={item.suffix} prefix={item.prefix} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-muted mb-4 group-hover:text-dark-text transition-colors">
                {item.label}
              </h3>
              <p className="text-dark-text/70 text-sm md:text-base font-light max-w-[280px] leading-relaxed transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex justify-center"
        >
          <div className="bg-white/40 backdrop-blur-md px-10 py-5 flex items-center gap-6 group hover:border-mustard/30 border border-dark-text/10 shadow-sm transition-all rounded-none">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-forest-dark"></span>
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-dark-text font-bold transition-colors">
              Currently accepting 2 properties for Q3 Transformation
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
