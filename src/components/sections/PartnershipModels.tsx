"use client";

import React from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const models = [
  {
    title: "Management Contract",
    description: "End-to-end management where we handle every detail while you retain asset ownership.",
    features: ["Revenue Optimization", "Operations Management", "Brand Standards Alignment"]
  },
  {
    title: "Lease Model",
    description: "Fixed monthly rental income guaranteed, regardless of market volatility or occupancy.",
    features: ["Stable Cash Flow", "Passive Income", "Zero Operational Risk"],
    popular: true
  },
  {
    title: "Revenue Share",
    description: "A collaborative partnership focused on aggressive growth and shared performance goals.",
    features: ["Aligned Incentives", "Cost Efficiency", "Growth Participation"]
  }
];

export const PartnershipModels = () => {
  return (
    <Section id="partnerships" className="bg-forest">
      <SectionHeader 
        subtitle="Engagement Models"
        title="Flexible Partnership Structures"
        description="Every property is unique. We offer multiple engagement frameworks to suit your financial objectives."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`p-10 rounded-sm border ${item.popular ? 'border-mustard/40 bg-mustard/5' : 'border-cream/10 bg-forest-dark/50'} flex flex-col h-full`}
          >
            {item.popular && (
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-mustard mb-6 block">
                Most Popular for Investors
              </span>
            )}
            <h3 className="text-2xl font-serif mb-6 text-light-text">{item.title}</h3>
            <p className="text-cream/70 leading-relaxed mb-10 flex-grow">
              {item.description}
            </p>
            
            <ul className="mb-10 space-y-4">
              {item.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-sm text-light-text/80">
                  <div className="w-1 h-1 rounded-full bg-mustard" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant={item.popular ? "gold" : "outline"} className={`w-full ${!item.popular && "border-cream/20 text-cream hover:bg-cream/10"}`}>
              Explore Model
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
