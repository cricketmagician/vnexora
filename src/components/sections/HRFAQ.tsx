"use client";
import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of hospitality properties do you specialize in?",
    answer: "We specialize in ultra-luxury 5-star hotels, boutique resorts, private family offices, prestigious private households, and superyachts globally."
  },
  {
    question: "How long does the recruitment process typically take?",
    answer: "While we prioritize speed, our standard process for specialized roles takes between 2 to 6 weeks, depending on the complexity and location of the requirement."
  },
  {
    question: "Do you offer international recruitment services?",
    answer: "Yes, our network spans across the globe, allowing us to source and place talent in major cities, remote retreats, and international waters."
  },
  {
    question: "Can you provide temporary or seasonal staffing?",
    answer: "Absolutely. We maintain a pool of vetted seasonal experts for retreats, peak holiday periods, and yachting seasons."
  }
];

export const HRFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-cream">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-forest mb-16 text-center italic">Service FAQ</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-forest/10 pb-6 transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-xl md:text-2xl font-serif text-forest group-hover:text-mustard transition-colors duration-300">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-mustard transition-transform duration-500 ${openIndex === idx ? "rotate-180" : ""}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? "max-h-[300px] mt-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-forest/70 text-lg font-light leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
