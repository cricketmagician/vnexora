import { Button } from "@/components/ui/Button";
import { MoveRight } from "lucide-react";

export const HRHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-forest">
      {/* Background Image with Clean Overlay */}
      <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
        <img 
          src="/images/luxury_bedroom_hero.jpg" 
          alt="Luxury Hospitality Recruitment" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center">
        {/* Simplified Title - Refined Size & Text */}
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] text-mustard">
              Vnexora Talent & Staffing
            </span>
            <div className="w-12 h-px bg-mustard/30 mx-auto" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] italic drop-shadow-2xl">
            Excellence in Hospitality <br className="hidden md:block" /> & Resort Recruitment
          </h1>
          
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-white/70 italic drop-shadow-lg">
            Where legendary properties meet elite talent across the Indian landscape.
          </p>
        </div>

        {/* Dual Button CTA Section - Moved Higher */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
           <Button variant="outline" className="border-white/30 text-white hover:bg-mustard hover:text-forest hover:border-mustard px-14 py-8 text-[11px] font-black uppercase tracking-[0.4em] rounded-none transition-all duration-700 min-w-[250px]">
              Get in Touch
           </Button>
           <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-forest px-14 py-8 text-[11px] font-black uppercase tracking-[0.4em] rounded-none transition-all duration-700 min-w-[250px]">
              Book a Client Call
           </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-30">
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white">Explore Excellence</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};
