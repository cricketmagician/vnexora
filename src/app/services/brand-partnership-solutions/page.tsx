import { Section } from "@/components/ui/Section";
import { CheckCircle2, ArrowLeft, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function BrandPartnershipPage() {
  return (
    <main className="min-h-screen bg-forest pt-32 pb-16">
      <Section spacing="none">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center text-mustard/80 hover:text-mustard mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Home</span>
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mustard/20 bg-mustard/5 text-mustard text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <Building2 className="w-4 h-4" /> Global Affiliations
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-8">
                Brand Partnership Solutions
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-12 border-l-2 border-mustard pl-6">
                At VNEXORA, we bridge the gap between visionary hotel owners and leading national and international hospitality brands. Our expertise lies in facilitating mutually beneficial brand affiliations that elevate property positioning and guest experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Management Contracts",
                  "Lease Agreements",
                  "Revenue-Sharing Models",
                  "Tailored Hybrid Models"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-mustard mr-4 shrink-0" />
                    <span className="leading-snug font-light text-lg text-white">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="h-14 px-10 bg-mustard text-black font-bold tracking-wide rounded-xl hover:bg-white transition-all w-full md:w-auto">
                ELEVATE YOUR HOTEL
              </Button>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-1/2 h-[500px] lg:h-[800px] relative rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
              <img 
                src="/images/services/brand_partnership.jpg" 
                alt="Brand Partnership Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
