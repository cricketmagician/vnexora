import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MoveRight, Phone, Mail } from "lucide-react";

export const BrochureSection = () => {
  return (
    <Section className="bg-cream pt-32 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-12 animate-slide-up">
            <div className="space-y-6">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-mustard">
                Strategic Partnerships
              </span>
              <h2 className="text-5xl md:text-7xl font-serif text-forest leading-[1.05] italic">
                Expert Support <br /> for Elite Brands
              </h2>
              <p className="text-xl text-forest/70 font-light leading-relaxed max-w-xl">
                Our bespoke recruitment solutions are designed to align with your establishment&apos;s unique brand identity and service philosophy. We provide more than just talent; we provide excellence.
              </p>
            </div>
            
            <div className="space-y-8 pt-4">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest group-hover:bg-mustard group-hover:text-white transition-all duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-serif text-forest">+44 (0) 20 1234 5678</span>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest group-hover:bg-mustard group-hover:text-white transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-serif text-forest">hello@vnexora.com</span>
              </div>
            </div>

            <div className="pt-8 scale-in animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="bg-forest hover:bg-mustard text-white hover:text-forest px-12 py-8 text-[11px] font-black uppercase tracking-[0.3em] rounded-none transition-all duration-700 shadow-2xl shadow-forest/10 group">
                Download Our Brochure <MoveRight className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </div>
          </div>

          {/* Right Image with Cinematic Polish */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl transform transition-transform duration-1000 group-hover:-translate-y-4">
              <img 
                src="/images/hr/support-expert.png" 
                alt="Expert Hospitality Support" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            </div>
            {/* Floating Accent */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-mustard rounded-[3rem] -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-1000" />
          </div>
        </div>
      </div>
    </Section>
  );
};
