"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Globe, Lightbulb, Users2, LineChart } from "lucide-react";

const services = [
  {
    title: "Growth Solutions for Your Hotel Brand",
    description: (
      <ul className="text-left list-disc list-inside space-y-2">
        <li>Increase direct bookings.</li>
        <li>Improve OTA performance.</li>
        <li>Unlock extra revenue streams.</li>
        <li>Maximize ADR, RevPAR, and occupancy.</li>
        <li>Grow profits with smarter strategies.</li>
      </ul>
    ),
    icon: <Globe className="w-10 h-10 text-black/80" />,
    bgColor: "bg-[#D4E6F7]"
  },
  {
    title: "Concept Creation for Unique Market Positioning",
    description: (
      <ul className="text-left list-disc list-inside space-y-2">
        <li>Build standout hotel concepts.</li>
        <li>Create memorable guest experiences.</li>
        <li>Develop restaurant and rooftop revenue ideas.</li>
        <li>Launch wellness and lifestyle offerings.</li>
        <li>Strengthen brand identity and appeal.</li>
        <li>Increase guest loyalty and repeat stays.</li>
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
        <li>Work closely with hotel owners and teams.</li>
        <li>Deliver continuous revenue optimization strategies.</li>
        <li>Strengthen brand visibility and demand generation.</li>
        <li>Enhance guest engagement and satisfaction.</li>
        <li>Build long-term growth roadmaps.</li>
        <li>Protect brand identity while improving performance.</li>
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
        <li>Combine AI intelligence with real hotel expertise.</li>
        <li>Guide decisions with data-driven strategies.</li>
        <li>Improve margins and operational efficiency.</li>
        <li>Strengthen guest engagement and loyalty.</li>
        <li>Support growth at every stage.</li>
        <li>Deliver smarter, faster business outcomes.</li>
      </ul>
    ),
    icon: <LineChart className="w-10 h-10 text-[#2F4F3E]/80" />,
    bgColor: "bg-white/40 backdrop-blur-3xl border border-white/60"
  }
];

export const ServiceCards = () => {
  return (
    <Section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-[5px] max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-[#1A1A1A] mb-8 leading-tight tracking-tight max-w-4xl">
            More than just a <span className="text-[#021A59]">hotel partner</span>
          </h2>
          <p className="text-[#4A5568] text-lg md:text-xl font-normal leading-relaxed max-w-4xl">
            With over 30 years of experience in hospitality—from boutique resorts to global hotel groups—we deliver tailored revenue strategies, digital marketing, and concept creation that boost direct bookings, maximize profitability, and create memorable guest experiences.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center p-10 md:p-12 ${item.bgColor} rounded-[4rem] min-h-[500px] shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="mb-10">
                {item.icon}
              </div>
              <h3 className={`text-xl md:text-2xl font-bold ${item.textColor || "text-[#1A1A1A]"} mb-8 leading-tight px-4`}>
                {item.title}
              </h3>
              <div className={`${item.descColor || "text-[#4A5568]"} text-sm md:text-base font-light leading-relaxed`}>
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
