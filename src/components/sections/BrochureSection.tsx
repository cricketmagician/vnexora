import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MoveRight, Phone, Mail } from "lucide-react";

export const BrochureSection = () => {
  return (
    <Section className="bg-cream pt-32 pb-40 relative overflow-hidden">
      {/* Botanical Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 opacity-[0.03] pointer-events-none -translate-x-1/2">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-forest">
          <path d="M50 0 C70 30 100 50 100 100 L0 100 C0 50 30 30 50 0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            
            {/* Premium Contact Details */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-full bg-forest/5 flex items-center justify-center text-forest group-hover:bg-mustard group-hover:text-white transition-all duration-700 shadow-sm backdrop-blur-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-mustard/60">Business Inquiry</p>
                  <p className="text-xl font-serif text-forest">+91 79808 29403</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-full bg-forest/5 flex items-center justify-center text-forest group-hover:bg-mustard group-hover:text-white transition-all duration-700 shadow-sm backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-mustard/60">Direct Response</p>
                  <p className="text-xl font-serif text-forest">connect@vnexora.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 scale-in animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="bg-forest hover:bg-mustard text-white hover:text-forest px-12 py-8 text-[11px] font-black uppercase tracking-[0.3em] rounded-none transition-all duration-700 shadow-[0_20px_50px_rgba(10,34,31,0.15)] group relative overflow-hidden">
                <span className="relative z-10">Download Our Brochure</span>
                <MoveRight className="relative z-10 ml-4 w-4 h-4 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </div>

          {/* Right Image with Cinematic Polish */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[5rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)] transform transition-all duration-1000 group-hover:-translate-y-4">
              <img 
                src="/images/hr/support-expert.png" 
                alt="Expert Hospitality Support" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Signature Accent */}
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-mustard rounded-[4rem] -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-1000 opacity-20 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-mustard rounded-[4rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-1000" />
          </div>
        </div>
      </div>
    </Section>
  );
};
