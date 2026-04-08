"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 0,
    label: "GLOBAL ADVISORY",
    image: "/images/hero/hero_checkin.png",
    headline: "Expert advice to grow your hotel's profit.",
    description: "We help you build and manage high-performance hotel assets that deliver better returns.",
    ctaText: "OUR STORY"
  },
  {
    id: 1,
    label: "OPERATIONAL ALPHA",
    image: "/images/hero/hero_bar.png",
    headline: "Luxury management for your premium hotels.",
    description: "Setting the highest standards of service for the world's most beautiful boutique hotels.",
    ctaText: "CONSULT US"
  },
  {
    id: 2,
    label: "ASSET TRANSFORMATION",
    image: "/images/hero/hero_city_day.png",
    headline: "Turning your property into a leading brand.",
    description: "Our experts transform your real estate into modern, market-leading luxury collections.",
    ctaText: "OUR PORTFOLIO"
  },
  {
    id: 3,
    label: "CULTURAL HERITAGE",
    image: "/images/hero/hero_9.png",
    headline: "Modern luxury with the soul of tradition.",
    description: "Bringing world-class hospitality to the spiritual heart of India.",
    ctaText: "OUR VISION"
  },
  {
    id: 4,
    label: "STRATEGIC MANDATE",
    image: "/images/hero/hero_city_night.png",
    headline: "The only partner you need for hotel success.",
    description: "Providing complete advisory for building, managing, and growing your hotel empire.",
    ctaText: "SERVICES"
  }
];

const staggerVariants: any = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 1.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
};

const RandomScatterText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  
  return (
    <span className="inline-block">
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap mr-[0.3em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${char}-${charIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + (wordIndex * 0.1) + (charIndex * 0.02),
                ease: "easeOut"
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

export const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlideIndex] || slides[0];

  const handleNext = () => setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative z-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Cinematic Video Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6] grayscale-[0.2] transform-gpu scale-105"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Dynamic scanning light effect */}
        <motion.div 
          animate={{
            top: ["-100%", "100%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute left-0 right-0 h-[30vh] bg-gradient-to-b from-transparent via-[#CFA052]/5 to-transparent pointer-events-none z-10"
        />
      </div>

      {/* Institutional Content Layer */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl w-full flex flex-col items-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              className="flex flex-col items-center"
            >
              {/* Institutional Label */}
              <motion.span
                custom={0}
                variants={staggerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-[10px] md:text-[11px] font-black tracking-[0.7em] text-[#CFA052] uppercase mb-10 block drop-shadow-lg"
              >
                {slide.label}
              </motion.span>

              {/* High-Impact Headline with Scatter Animation */}
              <motion.h1
                key={`headline-${slide.id}`}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif italic text-white leading-[1.2] tracking-tighter mb-10 drop-shadow-2xl min-h-[3.5em] md:min-h-0"
              >
                <RandomScatterText text={slide.headline} />
              </motion.h1>

              {/* Descriptive Insight */}
              <motion.p
                custom={2}
                variants={staggerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-base md:text-xl text-white/50 font-light italic leading-relaxed max-w-3xl mb-16 px-4"
              >
                "{slide.description}"
              </motion.p>

              {/* Strategy CTA */}
              <motion.div
                custom={3}
                variants={staggerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Link href={slide.ctaText === "CONSULT US" ? "/contact" : "/services"}>
                  <Button 
                    size="lg" 
                    className="px-16 py-8 bg-transparent text-white border border-white/20 hover:border-[#CFA052] hover:text-black font-black tracking-[0.5em] uppercase transition-all duration-700 backdrop-blur-3xl group shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden"
                  >
                    <span className="relative z-10">{slide.ctaText}</span>
                    <div className="absolute inset-0 bg-[#CFA052] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Slide Navigation - Pro Minimalist Arrows */}
      <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none hidden lg:flex">
        <button 
          onClick={handlePrev}
          className="pointer-events-auto p-4 text-white/10 hover:text-[#CFA052] transition-all duration-500 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-16 h-16 transform group-hover:-translate-x-2 transition-transform" strokeWidth={0.5} />
        </button>

        <button 
          onClick={handleNext}
          className="pointer-events-auto p-4 text-white/10 hover:text-[#CFA052] transition-all duration-500 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-16 h-16 transform group-hover:translate-x-2 transition-transform" strokeWidth={0.5} />
        </button>
      </div>

      {/* Vertical Pagination Trackers */}
      <div className="absolute bottom-12 right-12 z-30 flex flex-col gap-6 items-end">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlideIndex(i)}
            className="flex items-center gap-4 group"
          >
            <span className={cn(
               "text-[9px] font-black tracking-widest transition-all duration-500 text-white/0 group-hover:text-white/40",
               i === currentSlideIndex && "text-[#CFA052]/60"
            )}>
               0{i + 1}
            </span>
            <div
               className={cn(
                 "w-1 h-6 transition-all duration-700",
                 i === currentSlideIndex ? "bg-[#CFA052] h-10" : "bg-white/10 group-hover:bg-white/30"
               )}
            />
          </button>
        ))}
      </div>

      {/* Dynamic Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-1 bg-[#CFA052]/40 z-40 transition-all duration-500" style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }} />

      {/* VNEXORA BRANDING ELEMENTS */}
      
      {/* 1. Top-Left Branding Mark */}
      <div className="absolute top-12 left-12 z-40 hidden lg:flex items-center gap-4">
        <div className="w-8 h-8 rounded-full border border-[#CFA052]/40 flex items-center justify-center">
           <div className="w-1 h-1 bg-[#CFA052] rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-black tracking-[0.5em] text-white uppercase">VNEXORA</span>
          <span className="text-[7px] font-black tracking-[0.8em] text-[#CFA052] uppercase ml-1 opacity-60">Global_Advisory</span>
        </div>
      </div>

      {/* 3. Bottom-Left Perspective Anchor */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-12 z-20 flex flex-col items-start gap-4"
      >
        <span className="text-[9px] font-black tracking-[0.6em] uppercase text-white/30 italic">Perspective_Explore</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-[#CFA052]/50 to-transparent" />
      </motion.div>
    </section>
  );
};
