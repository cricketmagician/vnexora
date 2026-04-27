"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Globe, Lightbulb, Users2, LineChart } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Growth Solutions For Your Hotel Brand",
    description: (
      <ul className="text-left list-disc list-inside space-y-2">
        <li>Increase direct bookings.</li>
        <li>Improve OTA performance.</li>
        <li>Maximize ADR and RevPAR.</li>
        <li>Grow profits with smarter strategies.</li>
      </ul>
    ),
    icon: <Globe className="w-10 h-10 text-white/90" />,
    bgColor: "bg-[#3A071B]",
    textColor: "text-white",
    descColor: "text-white/80"
  },
  {
    title: "Concept Creation For Unique Market Positioning",
    description: (
      <ul className="text-left list-disc list-inside space-y-2">
        <li>Build standout hotel concepts.</li>
        <li>Create memorable guest experiences.</li>
        <li>Develop unique revenue ideas.</li>
        <li>Strengthen brand identity and appeal.</li>
      </ul>
    ),
    icon: <Lightbulb className="w-10 h-10 text-white/90" />,
    bgColor: "bg-[#5B0F2D]",
    textColor: "text-white",
    descColor: "text-white/80"
  },
  {
    title: "Trusted Partnerships That Drive Long-Term Growth",
    description: (
      <ul className="text-left list-disc list-inside space-y-2">
        <li>Work closely with hotel owners.</li>
        <li>Deliver continuous revenue optimization.</li>
        <li>Strengthen brand visibility.</li>
        <li>Enhance guest engagement.</li>
      </ul>
    ),
    icon: <Users2 className="w-10 h-10 text-white/90" />,
    bgColor: "bg-[#5B0F2D]",
    textColor: "text-white",
    descColor: "text-white/80"
  },
  {
    title: "Expert Insights & Support When You Need It",
    description: (
      <ul className="text-left list-disc list-inside space-y-2">
        <li>Combine AI with hotel expertise.</li>
        <li>Guide data-driven strategies.</li>
        <li>Improve margins and efficiency.</li>
        <li>Deliver faster business outcomes.</li>
      </ul>
    ),
    icon: <LineChart className="w-10 h-10 text-white/90" />,
    bgColor: "bg-[#3A071B]",
    textColor: "text-white",
    descColor: "text-white/80"
  }
];

import { useMotionValue, useSpring, useTransform } from "framer-motion";

const ServiceTiltCard = ({ item, idx }: { item: any, idx: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative flex flex-col items-center text-center p-10 md:p-12 bg-[#0A0A0A] border border-white/10 rounded-[3rem] min-h-[500px] h-full transition-all duration-500 hover:border-[#D4AF37]/30 group overflow-hidden"
    >
      {/* Glare Effect */}
      <motion.div
        style={{
          background: "radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%)",
          left: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
          top: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
        }}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="mb-10 w-20 h-20 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto group-hover:bg-[#D4AF37] transition-all duration-500 group-hover:scale-110 shadow-2xl">
           <div className="group-hover:text-black transition-colors duration-500">
            {item.icon}
           </div>
        </div>
        <h3 className="text-xl md:text-2xl font-serif text-white mb-8 leading-tight px-4 group-hover:text-[#D4AF37] transition-colors duration-500">
          {item.title}
        </h3>
        <div className="text-white/40 text-sm md:text-base font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
          {item.description}
        </div>
      </div>

      {/* Institutional Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)', backgroundSize: '20px 20px' }} />
    </motion.div>
  );
};

export const ServiceCards = () => {
  return (
    <Section className="bg-[#050505] py-24 md:py-32 relative overflow-hidden">
      {/* Premium Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/service_cards_bg.png" 
          alt="Premium Background" 
          fill 
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/80" />
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-[5px] max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight max-w-4xl">
              More than just a <span className="text-[#D4AF37] italic font-light">hotel partner.</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-normal leading-relaxed max-w-4xl">
              With over 30 years of experience in hospitality—from boutique resorts to global hotel groups—we deliver tailored revenue strategies, digital marketing, and concept creation that boost direct bookings, maximize profitability, and create memorable guest experiences.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <ServiceTiltCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </Section>
  );
};
