"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Send Brief",
    description: "Provide the specific requirements and culture of your establishment to initiate our search.",
    image: "/images/hr/process-1.png"
  },
  {
    id: "02",
    title: "Book Consultation",
    description: "A deep-dive session to understand the nuances of the role and your brand ethos.",
    image: "/images/hr/process-2.png"
  },
  {
    id: "03",
    title: "Candidate Shortlist",
    description: "We present a curated selection of the industry's most exceptional talent for your review.",
    image: "/images/hr/process-3.png"
  },
  {
    id: "04",
    title: "Review CVs",
    description: "Deep-dive into the backgrounds and references of our top-tier hospitality candidates.",
    image: "/images/hr/sector-global.png"
  },
  {
    id: "05",
    title: "Interview & Trial",
    description: "Meet the finalists and conduct trials to ensure a seamless integration into your team.",
    image: "/images/hr/sector-finedining.png"
  },
  {
    id: "06",
    title: "The Job Offer",
    description: "Finalizing the placement and ensuring a successful onboarding for your new luxury hire.",
    image: "/images/hr/sector-boutique.png"
  }
];

export const RecruitmentJourney = () => {
  return (
    <Section className="bg-cream overflow-hidden py-32">
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-serif text-forest italic leading-[1.1]"
          >
            The Recruitment Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-mustard font-bold uppercase tracking-[0.5em] text-[10px]"
          >
            by vnexora team
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Fixed Grid Layout (No Infinite Scroll) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group/card relative rounded-[3rem] overflow-hidden shadow-2xl h-[450px] md:h-[550px] transition-all duration-700 hover:scale-[1.02] border border-forest/5"
            >
              {/* Background Image */}
              <img 
                src={step.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" 
                alt={step.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
              
              {/* Content with Blur Effect at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 backdrop-blur-md bg-forest/40 border-t border-white/10 flex flex-col justify-end items-start space-y-3 translate-y-8 group-hover/card:translate-y-0 transition-transform duration-700">
                <span className="text-mustard font-bold uppercase tracking-[0.3em] text-[10px]">
                  Step {step.id}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm font-light leading-relaxed opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 delay-100">
                  {step.description}
                </p>

                {/* Decorative Accent */}
                <div className="absolute bottom-0 left-0 h-1 bg-mustard transition-all duration-700 w-0 group-hover/card:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 flex justify-center mt-24">
         <div className="flex items-center gap-8 text-forest/20 uppercase tracking-[0.4em] text-[9px] font-black italic">
            <span>Seamless Recruitment Journey</span>
         </div>
      </div>
    </Section>
  );
};
