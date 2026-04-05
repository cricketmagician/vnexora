"use client";

import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Handshake, Building2, Map, TrendingUp, Users,
  Calculator, ShieldCheck, Cpu, Sparkles, ArrowRight
} from "lucide-react";
import React from "react";

const IconMap = ({ slug, className }: { slug: string; className?: string }) => {
  switch (slug) {
    case "ai-guest-experience-platform":      return <Sparkles strokeWidth={1} className={className} />;
    case "brand-partnership-solutions":       return <Handshake strokeWidth={1} className={className} />;
    case "hotel-operations-management":       return <Building2 strokeWidth={1} className={className} />;
    case "property-development-consulting":   return <Map strokeWidth={1} className={className} />;
    case "sales-marketing":                   return <TrendingUp strokeWidth={1} className={className} />;
    case "human-resource-talent-development": return <Users strokeWidth={1} className={className} />;
    case "finance-accounting":                return <Calculator strokeWidth={1} className={className} />;
    case "hospitality-asset-management":      return <ShieldCheck strokeWidth={1} className={className} />;
    case "digital-transformation-it":         return <Cpu strokeWidth={1} className={className} />;
    case "hotels-resorts-buy-sell":           return <Handshake strokeWidth={1} className={className} />;
    default:                                  return <Building2 strokeWidth={1} className={className} />;
  }
};

const TiltCard = ({ service, index }: { service: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const glareX  = useTransform(xSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY  = useTransform(ySpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const titleParts = service.title.split(" ");
  const lastWord = titleParts.pop();
  const mainTitle = titleParts.join(" ");

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 50, scale: 0.96, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="w-full min-w-[280px] md:min-w-0 snap-center group"
    >
      <Link href={`/services/${service.slug}`} className="block w-full h-full">
        <div
          className="relative h-full min-h-[280px] md:min-h-[340px] rounded-[24px] overflow-hidden transition-shadow duration-[400ms] border border-white/5 hover:border-white/20 flex flex-col items-center justify-center p-8 md:p-10 backdrop-blur-[12px]"
          style={{
            background: "linear-gradient(145deg, #050505, #0D0D0D)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Vignette */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{ background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.35))" }}
          />

          {/* Background image — blurred at rest, sharp on hover */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none transition-all duration-[1200ms] ease-out scale-110 group-hover:scale-105 group-hover:blur-none"
            style={{
              backgroundImage: `url('${service.image}')`,
              filter: "brightness(0.75) contrast(1.1) blur(8px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-out"
            style={{
              backgroundImage: `url('${service.image}')`,
              filter: "brightness(1) contrast(1.1)",
            }}
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0 z-[2] pointer-events-none transition-all duration-700"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))" }}
          />

          {/* Hover green tint shift */}
          <div
            className="absolute inset-0 z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(15, 30, 20, 0.85), rgba(15, 30, 20, 0.4))" }}
          />

          {/* 3D glare highlight */}
          <motion.div
            className="absolute inset-0 z-[4] pointer-events-none rounded-[24px]"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]) =>
                  `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.08), transparent 60%)`
              ),
            }}
          />

          {/* Shine sweep */}
          <div className="absolute z-[5] -inset-full h-[500%] w-[500%] rotate-[30deg] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none -translate-x-[150%] transition-transform duration-[1500ms] ease-out group-hover:translate-x-[150%]" />

          {/* Grain */}
          <div className="absolute inset-0 z-[5] opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />

          {/* Content — lifted on z-axis for depth */}
          <div
            className="relative z-10 flex flex-col items-center text-center w-full"
            style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ scale: 1.12, rotate: 6 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:border-white/20"
              style={{ transformStyle: "preserve-3d" }}
            >
              <IconMap slug={service.slug} className="w-6 h-6 text-white/80 group-hover:text-white" />
            </motion.div>

            <h3 className="text-[20px] md:text-[22px] font-sans font-bold text-white tracking-[2px] leading-tight mb-4 uppercase transition-all duration-500 group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              {mainTitle} <span className="text-[#CFA052]">{lastWord}</span>
            </h3>

            <p className="text-white/75 text-sm font-sans leading-relaxed tracking-wide transition-all duration-700 max-w-[85%] mx-auto opacity-70 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              {service.shortDescription}
            </p>

            <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center gap-3 text-white/80 text-[10px] tracking-[0.3em] font-bold">
              <span className="text-[9px]">EXPLORE</span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const OperationalStrategy = () => {
  return (
    <Section
      spacing="none"
      className="bg-[#FAF9F6] pt-24 md:pt-32 pb-20 md:pb-32 text-center overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#CFA052]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#2F4F3E]/5 blur-[150px] rounded-full" />
      </div>

      <div className="w-full px-4 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-[12px] font-sans font-bold text-[#CFA052] tracking-[0.4em] uppercase mb-4"
          >
            Services provided by us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif text-[#2F4F3E] tracking-[0.1em] md:tracking-[0.2em] leading-tight mb-8 uppercase"
          >
            Operational Upgrade <span className="text-[#CFA052] italic font-light">System</span>
          </motion.h2>
          <div className="w-16 h-[1px] bg-[#2F4F3E]/10 mx-auto" />
        </div>

        <div
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar gap-6 md:gap-8 max-w-[1500px] mx-auto pb-10 md:pb-0 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1200px" }}
        >
          {services.map((service, i) => (
            <TiltCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
};
