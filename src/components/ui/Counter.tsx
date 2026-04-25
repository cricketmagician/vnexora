"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

export const Counter = ({ value, duration = 2, prefix = "", suffix = "", delay = 0 }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { 
        duration, 
        delay,
        ease: [0.16, 1, 0.3, 1] 
      });
      return controls.stop;
    }
  }, [isInView, value, duration, delay, count]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};
