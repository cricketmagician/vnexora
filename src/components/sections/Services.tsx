import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { Handshake, Building2, Map, TrendingUp, Users, Calculator, ArrowRight } from "lucide-react";
import React from "react";

// Mapping icons based on the slug
const IconMap = ({ slug, className }: { slug: string; className?: string }) => {
  switch (slug) {
    case "brand-partnership-solutions":
      return <Handshake strokeWidth={1} className={className} />;
    case "hotel-operations-management":
      return <Building2 strokeWidth={1} className={className} />;
    case "property-development-consulting":
      return <Map strokeWidth={1} className={className} />;
    case "sales-marketing":
      return <TrendingUp strokeWidth={1} className={className} />;
    case "human-resource-talent-development":
      return <Users strokeWidth={1} className={className} />;
    case "finance-accounting":
      return <Calculator strokeWidth={1} className={className} />;
    default:
      return <Building2 strokeWidth={1} className={className} />;
  }
};

export const Services = () => {
  return (
    <Section spacing="lg" className="bg-[#050505]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-mustard mb-4 leading-loose">
            Discover Vnexora
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white tracking-widest uppercase">
            Our Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            return (
              <Link
                href={`/services/${service.slug}`}
                key={service.id}
                className="group relative block h-[380px] bg-[#0c0c0c] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                style={{ 
                  // Sharp bottom-left corner cut like The First Group's style
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50px 100%, 0 calc(100% - 50px))' 
                }}
              >
                {/* Default static border */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none" />

                {/* Animated Gradient + Image Fade-In (The "motion animation not plain" feature) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-0 scale-125 transition-all duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-[0.25] group-hover:scale-100"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                
                {/* Animated Mustard Glow Border */}
                <div className="absolute inset-0 border border-transparent transition-colors duration-700 group-hover:border-mustard/30 pointer-events-none" />

                {/* Central Content Container */}
                <div className="absolute inset-x-0 inset-y-0 p-8 flex flex-col items-center justify-center text-center transition-transform duration-[0.8s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-8">
                  
                  {/* Icon */}
                  <div className="text-white/60 mb-6 transition-all duration-700 group-hover:-translate-y-2 group-hover:text-mustard group-hover:scale-110">
                    <IconMap slug={service.slug} className="w-12 h-12 md:w-14 md:h-14" />
                  </div>
                  
                  {/* Expanding Divider Line */}
                  <div className="w-8 h-[1px] bg-white/20 mb-8 transition-all duration-700 ease-out group-hover:bg-mustard/80 group-hover:w-24 group-hover:h-[2px]" />
                  
                  {/* Title */}
                  <h3 className="text-sm md:text-base font-bold font-sans text-white uppercase tracking-[0.2em] leading-loose transition-all duration-700 group-hover:text-mustard/90 max-w-[80%] mx-auto">
                    {service.title}
                  </h3>
                  
                </div>

                {/* Hidden Description & CTA (Reveals on hover from bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full opacity-0 transition-all duration-[0.8s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100 flex flex-col items-center text-center">
                  <p className="text-zinc-400 font-light text-sm line-clamp-2 leading-relaxed mb-4 max-w-[90%]">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-mustard text-xs font-bold tracking-widest uppercase">
                    Explore Service <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-500 group-hover:translate-x-1" />
                  </div>
                </div>
                
                {/* Folded paper aesthetic on the cut string (corner accent) */}
                <div className="absolute bottom-0 left-0 w-[50px] h-[50px] overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 right-0 w-[80px] h-[1px] bg-mustard/50 -rotate-45 transform translate-x-2 translate-y-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
