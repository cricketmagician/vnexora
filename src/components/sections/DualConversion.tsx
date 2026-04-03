import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { UserSearch, FileText, MoveRight } from "lucide-react";

export const DualConversion = () => {
  return (
    <Section spacing="none" className="bg-forest py-24 overflow-hidden">
       <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
             
             {/* Hire Talent (Client Focus) */}
             <div className="relative group rounded-[3rem] overflow-hidden min-h-[400px] flex flex-col p-8 md:p-12 transition-all duration-700 animate-fade-in border border-white/10">
                {/* Background Image & Overlay */}
                <img 
                   src="/images/hr/hire_talent_bg.png" 
                   alt="Hire Talent" 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-forest/80 group-hover:bg-forest/70 transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />

                <div className="relative z-10 space-y-6 mt-auto">
                   <div className="w-14 h-14 rounded-2xl bg-mustard flex items-center justify-center text-forest shadow-xl">
                      <UserSearch className="w-7 h-7" />
                   </div>
                   <div className="space-y-4">
                      <h3 className="text-3xl lg:text-4xl font-serif text-white italic">Hire Exceptional Talent</h3>
                      <p className="text-white/70 text-lg font-light leading-relaxed max-w-md">
                         Partner with VNEXORA to source, vet, and place the industry&apos;s most prestigious hospitality experts.
                      </p>
                   </div>
                   <div className="pt-4">
                      <Button className="bg-white hover:bg-mustard text-forest px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] rounded-none shadow-2xl transition-all duration-500 border-none group/link">
                         SUBMIT BRIEF <MoveRight className="ml-3 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                      </Button>
                   </div>
                </div>
             </div>
             
             {/* Submit CV (Candidate Focus) */}
             <div className="relative group rounded-[3rem] overflow-hidden min-h-[400px] flex flex-col p-8 md:p-12 transition-all duration-700 animate-fade-in border border-forest/10" style={{ animationDelay: '0.2s' }}>
                {/* Background Image & Overlay */}
                <img 
                   src="/images/hr/career_bg.png" 
                   alt="Elevate Career" 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-cream/90 group-hover:bg-cream/80 transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />

                <div className="relative z-10 space-y-6 mt-auto">
                   <div className="w-14 h-14 rounded-2xl bg-forest flex items-center justify-center text-mustard shadow-xl">
                      <FileText className="w-7 h-7" />
                   </div>
                   <div className="space-y-4">
                      <h3 className="text-3xl lg:text-4xl font-serif text-forest italic">Elevate Your Career</h3>
                      <p className="text-forest/70 text-lg font-light leading-relaxed max-w-md">
                         Register your profile in our exclusive talent pool and gain access to opportunities with the world&apos;s finest hotels and restaurants.
                      </p>
                   </div>
                   <div className="pt-4">
                      <Button className="bg-forest hover:bg-mustard text-white hover:text-forest px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] rounded-none shadow-2xl transition-all duration-500 border-none group/link">
                         REGISTER CV <MoveRight className="ml-3 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                      </Button>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </Section>
  );
};
