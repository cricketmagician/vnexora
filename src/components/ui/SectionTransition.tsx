"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const SectionTransition = ({ 
  children, 
  className = "",
  showDivider = true
}: { 
  children: React.ReactNode;
  className?: string;
  showDivider?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"]
  });

  // When the section is ending (scrolling up out of view), scale it down slightly and fade out
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.5]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className={`relative w-full origin-top ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      >
        {children}
      </motion.div>

      {/* Animated divider when section ends */}
      {showDivider && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 flex justify-center w-full z-50 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: "all" }}
        >
          <motion.div 
            className="h-[1px] bg-gradient-to-r from-transparent via-mustard/50 to-transparent"
            initial={{ width: "0%" }}
            whileInView={{ width: "80%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border border-mustard bg-black"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};
