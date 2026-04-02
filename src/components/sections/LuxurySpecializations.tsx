import { Section } from "@/components/ui/Section";
import { MoveRight } from "lucide-react";

const sectors = [
  {
    title: "Luxury, Heritage & Palace Hotels",
    description: "Sourcing elite teams for India's most iconic heritage properties and palace hotels, where tradition meets world-class service.",
    image: "/images/hr/sector-boutique.png"
  },
  {
    title: "Business & Premium Urban Hotels",
    description: "Recruiting high-performance leadership and operational staff for the country's leading business and commercial hotel groups.",
    image: "/images/hr/sector-global.png"
  },
  {
    title: "Wellness & Ayurveda Resorts",
    description: "Providing specialized therapists, wellness directors, and hospitality experts for premier spa and holistic retreats.",
    image: "/images/hr/sector-clubs.png"
  },
  {
    title: "Weddings, Banquets & Theme Dining",
    description: "Managing large-scale recruitment for high-volume luxury events, premium weddings, and theme-based destination dining.",
    image: "/images/hr/sector-finedining.png"
  }
];

export const LuxurySpecializations = () => {
  return (
    <Section className="bg-cream relative overflow-hidden">
       {/* Background botanical accents for a premium feel */}
       <div className="absolute top-0 right-0 w-[60%] h-full opacity-5 pointer-events-none -translate-y-1/2 translate-x-1/2">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-forest">
             <path d="M50 0 C70 30 100 50 100 100 L0 100 C0 50 30 30 50 0 Z" />
          </svg>
       </div>
       
       <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-8">
             <div className="flex flex-col items-center gap-4">
                <span className="text-mustard font-black uppercase tracking-[0.4em] text-[10px]">Exceptional Talent</span>
                <h2 className="text-5xl md:text-7xl font-serif text-forest leading-[1.05] italic">Our Luxury Hospitality Specialisms</h2>
             </div>
             <p className="text-xl text-forest/70 font-light leading-relaxed max-w-2xl mx-auto italic">
                We don&apos;t just fill positions; we define hospitality excellence in the world&apos;s most demanding environments.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
             {sectors.map((sector, idx) => (
                <div 
                  key={idx} 
                  className="group relative h-[650px] overflow-hidden rounded-[4rem] shadow-2xl animate-fade-in transition-all duration-700 hover:shadow-forest/10"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                   {/* Background Image */}
                   <img 
                     src={sector.image} 
                     alt={sector.title} 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/40 to-transparent transition-opacity duration-700 group-hover:opacity-95" />
                   
                   {/* Content Overlay with Glass Polish */}
                   <div className="absolute inset-0 p-12 lg:p-16 flex flex-col justify-end items-start space-y-8">
                      <div className="space-y-4">
                         <h3 className="text-3xl lg:text-4xl font-serif text-white leading-tight group-hover:text-mustard transition-colors duration-500">{sector.title}</h3>
                         <div className="w-12 h-[1px] bg-mustard transition-all duration-700 group-hover:w-full origin-left" />
                      </div>
                      
                      <p className="text-white/70 text-lg font-light leading-relaxed max-w-sm translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                         {sector.description}
                      </p>
                      
                      <button className="flex items-center gap-6 text-mustard font-black tracking-[0.4em] text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group/btn">
                         Explore More <MoveRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-3" />
                      </button>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </Section>
  );
};
