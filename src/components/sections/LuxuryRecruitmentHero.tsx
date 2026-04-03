import { Button } from "@/components/ui/Button";
import { MoveRight } from "lucide-react";

export const LuxuryRecruitmentHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-forest">
      {/* Background Image with Cinematic Depth */}
      <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
        <img 
          src="/images/hr/hero-luxury.png" 
          alt="Luxury Recruitment" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/95 via-forest/20 to-forest" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Elite Accent Label */}
          <div className="flex flex-col items-center gap-6 animate-fade-in">
            <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.8em] text-mustard">
              Elite Hospitality Search
            </span>
            <div className="w-16 h-px bg-mustard/40" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] italic animate-slide-up drop-shadow-2xl">
            Luxury Hospitality <br className="hidden md:block" /> Recruitment
          </h1>
          
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-cream/70 italic animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Where prestigious establishments meet legendary talent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             <Button className="bg-mustard hover:bg-white text-forest px-14 py-8 text-[11px] font-black uppercase tracking-[0.3em] rounded-none transition-all duration-700 group shadow-[0_20px_50px_rgba(202,160,85,0.2)] border-none">
                Hire Talent <MoveRight className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-2" />
             </Button>
             <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-forest px-14 py-8 text-[11px] font-black uppercase tracking-[0.3em] rounded-none transition-all duration-700">
                Download Our Brochure
             </Button>
          </div>
        </div>
      </div>
      
      {/* Visual Accents for Depth */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-forest/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};
