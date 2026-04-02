import { Section } from "@/components/ui/Section";
import { MoveRight } from "lucide-react";

const values = [
  {
    title: "Unmatched Speed in Talent Acquisition",
    description: "Our proprietary database and global network allow us to source elite candidates in record time, ensuring your property or house remains operational at the highest standards.",
    cta: "READ MORE"
  },
  {
    title: "Long-Term Value & Confidence",
    description: "We don't just fill roles; we build teams. Our rigorous screening and personality profiling guarantee a cultural fit that lasts, reducing turnover and increasing guest satisfaction.",
    cta: "READ MORE"
  },
  {
    title: "Comprehensive Advertising & Sourcing",
    description: "We handle the entire spectrum—from boutique social branding to executive-level headhunting—so you can focus on delivering exceptional hospitality experiences.",
    cta: "READ MORE"
  }
];

export const ValueProps = () => {
  return (
    <Section className="bg-forest">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 overflow-hidden">
           {values.map((item, idx) => (
             <div 
               key={idx} 
               className="bg-forest-dark p-16 md:p-20 space-y-10 group hover:bg-forest transition-all duration-700 border-b md:border-b-0 md:border-r border-white/10 last:border-none relative animate-fade-in"
               style={{ animationDelay: `${idx * 0.2}s` }}
             >
                <div className="h-0.5 w-0 bg-mustard absolute top-0 left-0 transition-all duration-700 group-hover:w-full" />
                <h3 className="text-3xl lg:text-4xl font-serif text-white leading-[1.2]">{item.title}</h3>
                <p className="text-white/50 text-base lg:text-lg font-light leading-relaxed">{item.description}</p>
                <button className="flex items-center gap-4 text-mustard font-bold tracking-[0.2em] text-[10px] uppercase group-hover:gap-6 transition-all duration-500">
                  {item.cta} <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
             </div>
           ))}
        </div>
      </div>
    </Section>
  );
};
