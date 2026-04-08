'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const NarrativeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Unique Parallax transforms for all 22 images for maximum depth
  // Original 9
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y6 = useTransform(scrollYProgress, [0, 1], [0, -550]);
  const y7 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y8 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y9 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // New 13 (pic7_1 to pic7_13)
  const y10 = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const y11 = useTransform(scrollYProgress, [0, 1], [0, -380]);
  const y12 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y13 = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const y14 = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const y15 = useTransform(scrollYProgress, [0, 1], [0, -520]);
  const y16 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y17 = useTransform(scrollYProgress, [0, 1], [0, -480]);
  const y18 = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const y19 = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const y20 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const y21 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y22 = useTransform(scrollYProgress, [0, 1], [0, -440]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-56 bg-[#F9F9F9] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Editorial Headline */}
        <div className="max-w-5xl mx-auto text-center mb-48 md:mb-72">
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

        {/* Expansive Mosaic Parallax Grid — Significantly taller for 22 images */}
        <div className="relative h-[2500px] md:h-[4500px] w-full">
          
          {/* ORIGINAL 9 IMAGES */}
          <motion.div style={{ y: y1 }} className="absolute left-[0%] top-[0%] w-[45%] md:w-[32%] aspect-[4/5] z-30">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image src="/images/narrative/IMG_2270.jpg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="absolute left-[5%] top-[8%] w-[40%] md:w-[28%] aspect-square z-10 opacity-80">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/narrative/IMG_2277.jpg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y3 }} className="absolute left-[25%] top-[5%] w-[50%] md:w-[38%] aspect-[4/5] z-40">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.25)] border border-white/40">
              <Image src="/images/narrative/IMG_2397.jpg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Image 4 (NO HELLO) */}
          <motion.div style={{ y: y4 }} className="absolute right-[0%] top-[2%] w-[42%] md:w-[32%] aspect-[3/4] z-20">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/narrative/IMG_2774.jpg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y5 }} className="absolute left-[15%] top-[15%] w-[60%] md:w-[45%] aspect-video z-30">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image src="/images/narrative/9368EE5C-80BA-4EE7-8FD4-F05591D76868.JPEG" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y6 }} className="absolute left-[0%] top-[22%] w-[45%] md:w-[30%] aspect-[4/5] z-20">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/narrative/IMG_2399.jpg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y7 }} className="absolute right-[5%] top-[18%] w-[50%] md:w-[35%] aspect-square z-30">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image src="/images/narrative/IMG_2778.jpg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y8 }} className="absolute right-[0%] top-[28%] w-[35%] md:w-[25%] aspect-[4/5] z-0 opacity-70">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image src="/images/narrative/IMG_3099.jpg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y9 }} className="absolute left-[30%] top-[30%] w-[60%] md:w-[40%] aspect-[16/10] z-20">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/narrative/07ACDEA7-11C5-4523-B036-B7ECB7E79E3D.JPEG" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>


          {/* NEW PIC7 IMAGES (13 IMAGES) — Distributed further down */}
          
          <motion.div style={{ y: y10 }} className="absolute right-[5%] top-[35%] w-[45%] md:w-[32%] aspect-[4/5] z-30">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/images/narrative/pic7_1.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y11 }} className="absolute left-[0%] top-[40%] w-[50%] md:w-[35%] aspect-square z-20">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image src="/images/narrative/pic7_2.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y12 }} className="absolute left-[20%] top-[45%] w-[65%] md:w-[50%] aspect-video z-40">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.25)] border border-white/10">
              <Image src="/images/narrative/pic7_3.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y13 }} className="absolute right-[10%] top-[50%] w-[40%] md:w-[28%] aspect-[4/5] z-10 opacity-90">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/images/narrative/pic7_4.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y14 }} className="absolute left-[5%] top-[55%] w-[45%] md:w-[32%] aspect-[3/4] z-30">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/images/narrative/pic7_5.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y15 }} className="absolute right-[0%] top-[60%] w-[55%] md:w-[40%] aspect-[4/5] z-20">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/images/narrative/pic7_6.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y16 }} className="absolute left-[25%] top-[65%] w-[50%] md:w-[35%] aspect-square z-40">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.2)] border border-white/10">
              <Image src="/images/narrative/pic7_7.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y17 }} className="absolute right-[15%] top-[70%] w-[60%] md:w-[45%] aspect-video z-10 opacity-80">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/images/narrative/pic7_8.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y18 }} className="absolute left-[0%] top-[75%] w-[45%] md:w-[32%] aspect-[4/5] z-30">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/images/narrative/pic7_9.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y19 }} className="absolute right-[5%] top-[80%] w-[50%] md:w-[35%] aspect-[16/10] z-20">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/images/narrative/pic7_10.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y20 }} className="absolute left-[15%] top-[85%] w-[60%] md:w-[42%] aspect-[4/5] z-40">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.3)] border border-white/10">
              <Image src="/images/narrative/pic7_11.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y21 }} className="absolute right-[0%] top-[90%] w-[45%] md:w-[30%] aspect-square z-10 opacity-70">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/images/narrative/pic7_12.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div style={{ y: y22 }} className="absolute left-[25%] bottom-[0%] w-[55%] md:w-[40%] aspect-[3/4] z-30">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/images/narrative/pic7_13.jpeg" alt="Vnexora Institutional" fill className="object-cover" />
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
