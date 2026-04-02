import { Button } from "@/components/ui/Button";
import { MoveRight } from "lucide-react";

export const LuxuryRecruitmentHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-forest">
      {/* Background Image with Premium Polish */}
      <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
        <img 
          src="/images/hr/hero-luxury.png" 
          alt="Luxury Recruitment" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-transparent to-forest" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          <span className="inline-block text-[10px] md:text-sm font-bold uppercase tracking-[0.6em] text-mustard animate-fade-in">
            Elite Hospitality Search
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.95] italic animate-slide-up">
            Luxury Hospitality <br className="hidden md:block" /> Recruitment
          </h1>
          
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-cream/80 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Where prestigious establishments meet legendary talent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
             <Button className="bg-mustard hover:bg-white text-forest px-12 py-8 text-[11px] font-black uppercase tracking-[0.3em] rounded-none transition-all duration-700 group shadow-2xl">
                Hire Talent <MoveRight className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-2" />
             </Button>
             <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-12 py-8 text-[11px] font-black uppercase tracking-[0.3em] rounded-none transition-all duration-700">
                Download Our Brochure
             </Button>
          </div>
        </div>
      </div>
      
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-forest/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[30%] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
};
