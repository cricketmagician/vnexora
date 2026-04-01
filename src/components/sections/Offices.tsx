"use client";

import { Section } from "@/components/ui/Section";
import { MoveUpRight } from "lucide-react";

const offices = [
  {
    city: "Mumbai",
    email: "mumbai@vnexora.com",
    address: "Bandra Kurla Complex, Mumbai, India",
    phone: "+91 (0) 22 123 4567"
  },
  {
    city: "Dubai",
    email: "dubai@vnexora.com",
    address: "Downtown Dubai, UAE",
    phone: "+971 (0) 4 123 4567"
  },
  {
    city: "Riyadh",
    email: "riyadh@vnexora.com",
    address: "King Abdullah Financial District, KSA",
    phone: "+966 (0) 11 123 4567"
  }
];

export const Offices = () => {
  return (
    <Section spacing="lg" className="bg-[#fdfdfd] border-t border-zinc-100 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 transform skew-x-12 translate-x-32" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 mb-16 lg:mb-24 flex items-center">
          <span className="w-8 h-[1px] bg-zinc-300 mr-4"></span>
          Our Offices
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
          {offices.map((office, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <h4 className="text-5xl lg:text-6xl font-sans font-bold text-[#111] mb-8 group-hover:text-[#8d6c4c] transition-colors duration-500 tracking-tight">
                {office.city}
              </h4>
              
              <div className="space-y-4 text-zinc-500 font-light flex flex-col">
                <a href={`mailto:${office.email}`} className="text-base lg:text-lg hover:text-[#8d6c4c] transition-colors flex items-center group-hover:translate-x-1 duration-300">
                  {office.email}
                </a>
                <p className="text-base lg:text-lg">{office.address}</p>
                <p className="text-base lg:text-lg">{office.phone}</p>
                
                <div className="mt-8 pt-6 border-t border-zinc-200 w-12 group-hover:w-full group-hover:border-[#8d6c4c] transition-all duration-700 overflow-hidden">
                  <MoveUpRight className="w-5 h-5 text-zinc-300 group-hover:text-[#8d6c4c] transition-colors duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
