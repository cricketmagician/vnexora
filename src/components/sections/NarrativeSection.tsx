'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const NarrativeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for images
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -350]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-56 bg-[#F9F9F9] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Editorial Headline */}
        <div className="max-w-5xl mx-auto text-center mb-32 md:mb-56">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tight">
              Breathing life into stories too <br className="hidden md:block" />
              good <span className="relative inline-block italic">
                to go untold.
                <motion.svg 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewBox="0 0 500 50" 
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-8 text-black fill-none stroke-current stroke-[2] pointer-events-none"
                >
                  <path d="M5,35 Q250,10 495,35" strokeLinecap="round" />
                </motion.svg>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Staggered Parallax Grid */}
        <div className="relative grid grid-cols-12 gap-4 h-[600px] md:h-[900px]">
          
          {/* Image 1: Left Floating (Curated Asset) */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-0 top-[10%] w-[45%] md:w-[32%] aspect-[4/5] z-10"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/narrative/IMG_2270.jpg" 
                alt="Hospitality Moment" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Image 2: Middle Low (Curated Asset) */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute left-[20%] bottom-0 w-[50%] md:w-[35%] aspect-square z-20"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/narrative/IMG_2397.jpg" 
                alt="Hospitality Moment" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Image 3: Right Top Floating (Curated Asset) */}
          <motion.div 
            style={{ y: y3 }}
            className="absolute right-0 top-0 w-[48%] md:w-[38%] aspect-[3/4] z-30"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/narrative/IMG_2774.jpg" 
                alt="Hospitality Moment" 
                fill 
                className="object-cover"
              />
              {/* Floating "Say Hello" Style Callout */}
              <div className="absolute bottom-8 right-8 z-40">
                <Link 
                  href="/contact"
                  className="bg-[#991B1B] text-white px-8 py-6 rounded-none font-serif text-lg flex items-center gap-4 shadow-2xl hover:bg-black transition-colors duration-500"
                >
                  Say Hello
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Image 4: Far Right Background (Curated Asset) */}
          <motion.div 
            style={{ y: y4 }}
            className="absolute right-[5%] bottom-[15%] w-[35%] md:w-[25%] aspect-[4/5] z-0 opacity-40 blur-[1px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src="/images/narrative/IMG_3099.jpg" 
                alt="Hospitality Moment" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Aesthetic Background Detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#050505]/[0.02] -skew-x-12 transform origin-top pointer-events-none" />
    </section>
  );
};

export default NarrativeSection;
