"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const slides = [
  {
    id: 0,
    image: "/images/hero/hero_checkin.png",
    headline: "Welcome to Vnexora",
    ctaText: "OUR STORY"
  },
  {
    id: 1,
    image: "/images/hero/hero_bar.png",
    headline: "Elite Networking Environments",
    ctaText: "CONSULT US"
  },
  {
    id: 2,
    image: "/images/hero/hero_city_day.png",
    headline: "Architectural Precision",
    ctaText: "OUR PORTFOLIO"
  },
  {
    id: 3,
    image: "/images/hero/hero_9.png",
    headline: "Sacred Heritage: Varanasi",
    ctaText: "OUR VISION"
  },
  {
    id: 4,
    image: "/images/hero/hero_city_night.png",
    headline: "Global Visionary Strategy",
    ctaText: "SERVICES"
  },
  {
    id: 5,
    image: "/images/hero/hero_6.png",
    headline: "Bespoke Lifestyle Management",
    ctaText: "EXPLORE"
  }
];

const RandomScatterText = ({ text }: { text: string }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
            ease: "easeOut"
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 7000); 
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentSlideIndex >= slides.length) {
      setCurrentSlideIndex(0);
    }
  }, [slides.length, currentSlideIndex]);

  const slide = slides[currentSlideIndex] || slides[0];

  const handleNext = () => setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative z-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Images with pronounced slow zoom (Ken Burns) */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false}>
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.headline}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.15 }} // More pronounced zoom
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 15, ease: "linear" } 
            }}
            className="absolute inset-0 w-full h-full object-cover transform-gpu origin-center"
          />
        </AnimatePresence>
        {/* Extremely minimal overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Extreme Minimalist Center Content with Scramble */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-7xl w-full">
        <div className="mb-6 md:mb-10 min-h-[100px] md:min-h-[140px] flex items-center justify-center">
          <h1
            key={`headline-${slide.id}`}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-wide leading-[1.15] drop-shadow-xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <RandomScatterText text={slide.headline} />
          </h1>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`btn-${slide.id}`}
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.0, delay: 1.4, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <Button 
              size="lg" 
              className="px-10 py-6 border-2 border-white bg-transparent text-white font-bold tracking-[0.2em] uppercase rounded-none hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm shadow-2xl"
            >
              {slide.ctaText}
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows (Flamingo Style) */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-10 h-10 md:w-12 md:h-12 font-light" strokeWidth={1} />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-10 h-10 md:w-12 md:h-12 font-light" strokeWidth={1} />
      </button>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center animate-bounce shadow-2xl cursor-pointer">
          <ChevronDown className="w-6 h-6 text-black" />
        </div>
      </div>
    </section>
  );
};
