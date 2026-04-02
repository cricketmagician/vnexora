import { Section } from "@/components/ui/Section";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const ExpertiseTabs = () => {
  return (
    <Section className="bg-cream overflow-hidden py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Left: Signature Asymmetric Image Section */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[8rem] md:rounded-tl-[12rem] shadow-2xl transition-transform duration-1000 group-hover:-translate-y-2">
              <img 
                src="/images/hr/sector-finedining.png" 
                alt="Luxury Hospitality Staffing" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest/5 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            {/* Minimal Decorative Label */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-mustard/30 pointer-events-none" />
          </div>

          {/* Right: Editorial Content & Specialized Areas */}
          <div className="w-full lg:w-1/2 space-y-12 animate-slide-up">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-forest leading-[1.1] italic">
                Hospitality & Resort <br className="hidden md:block" /> Staffing
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-forest/70 font-light leading-relaxed max-w-xl">
                  We leverage our curated network and deep industry insight to place elite hospitality professionals across the entire Indian landscape—from heritage palaces and business hotels to luxury resorts and theme-based premium restaurants.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-mustard">
                Specialist Areas (India):
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                {[
                  "Luxury & Heritage Hotels",
                  "Boutique & Lifestyle Resorts",
                  "Premium Business Hotels",
                  "Fine Dining & Theme Restaurants",
                  "Highway & Transit Hotels",
                  "Private Clubs & Elite Bars",
                  "Weddings & Large-scale Banquets",
                  "Wellness & Ayurveda Retreats"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-forest/80 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-mustard mr-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link href="/services/human-resource-talent-development/luxury-hospitality-recruitment">
                <Button variant="outline" className="border-mustard/40 text-forest hover:bg-mustard hover:text-white px-12 py-7 text-[11px] font-black uppercase tracking-[0.3em] rounded-none transition-all duration-700">
                  Take Me There <MoveRight className="ml-4 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
