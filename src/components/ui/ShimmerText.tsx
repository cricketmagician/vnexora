"use client";

import { motion } from "framer-motion";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ShimmerText({ 
  children, 
  className = "" 
}: ShimmerTextProps) {
  return (
    <motion.span
      className={`relative inline-block overflow-hidden ${className}`}
      initial={{ backgroundSize: "200% 100%" }}
      animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }}
      transition={{ 
        repeat: Infinity, 
        duration: 3, 
        ease: "linear" 
      }}
      style={{
        backgroundImage: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
      }}
    >
      {children}
    </motion.span>
  );
}
