import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { UserSearch, FileText, MoveRight } from "lucide-react";

export const DualConversion = () => {
  return (
    <Section spacing="none" className="bg-forest border-t border-white/5 py-32">
       <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-stretch">
             {/* Hire Talent (Client Focus) */}
             <div className="bg-forest-light p-16 md:p-20 rounded-[4rem] group hover:bg-mustard transition-all duration-700 space-y-12 animate-fade-in border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="space-y-6">
                   <div className="w-16 h-16 rounded-3xl bg-mustard group-hover:bg-forest flex items-center justify-center text-forest group-hover:text-mustard transition-colors duration-700">
                      <UserSearch className="w-8 h-8" />
                   </div>
                   <h3 className="text-4xl lg:text-5xl font-serif text-white group-hover:text-forest transition-colors duration-700">Hire Exceptional Talent</h3>
                   <p className="text-white/60 text-xl font-light leading-relaxed group-hover:text-forest transition-colors duration-700">
                      Partner with VNEXORA to source, vet, and place the industry&apos;s most prestigious hospitality experts.
                   </p>
                </div>
                <div className="pt-8 transition-transform duration-700 translate-y-4 group-hover:translate-y-0">
                   <Button className="bg-white group-hover:bg-forest text-forest group-hover:text-white px-12 py-8 text-[11px] font-black uppercase tracking-[0.3em] rounded-none shadow-2xl transition-all duration-700 border-none">
                      SUBMIT BRIEF <MoveRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-2" />
                   </Button>
                </div>
             </div>
             
             {/* Submit CV (Candidate Focus) */}
             <div className="bg-white p-16 md:p-20 rounded-[4rem] group space-y-12 animate-fade-in border border-forest/5 relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="space-y-6">
                   <div className="w-16 h-16 rounded-3xl bg-forest flex items-center justify-center text-mustard group-hover:bg-mustard/20 transition-colors duration-700">
                      <FileText className="w-8 h-8" />
                   </div>
                   <h3 className="text-4xl lg:text-5xl font-serif text-forest leading-tight">Elevate Your Career</h3>
                   <p className="text-forest/60 text-xl font-light leading-relaxed">
                      Register your profile in our exclusive talent pool and gain access to opportunities with the world&apos;s finest hotels and restaurants.
                   </p>
                </div>
                <div className="pt-8 transition-transform duration-700 translate-y-4 group-hover:translate-y-0">
                   <Button className="bg-forest hover:bg-mustard text-white hover:text-forest px-12 py-8 text-[11px] font-black uppercase tracking-[0.3em] rounded-none shadow-2xl transition-all duration-700 border-none">
                      REGISTER CV <MoveRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-2" />
                   </Button>
                </div>
             </div>
          </div>
       </div>
    </Section>
  );
};
