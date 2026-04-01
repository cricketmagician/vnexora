import { Section } from "@/components/ui/Section";
import { CheckCircle2, ArrowLeft, PenTool } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function PropertyDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[500px] w-full pt-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 to-black/20 z-10" />
        <img 
          src="/images/services/property_development.jpg" 
          alt="Property Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <Link href="/" className="inline-flex items-center text-mustard/80 hover:text-mustard mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mustard/20 bg-black/50 backdrop-blur-md text-mustard text-xs font-bold tracking-[0.2em] uppercase mb-8">
            <PenTool className="w-4 h-4" /> From Ideation To Execution
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight max-w-4xl">
            Property Development & Consulting
          </h1>
        </div>
      </div>

      <Section spacing="lg" className="relative z-30 -mt-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-[#121212] border border-white/5 rounded-[3rem] p-10 md:p-16 shadow-2xl max-w-5xl mx-auto">
            <p className="text-xl md:text-3xl text-zinc-300 font-light leading-relaxed mb-16 text-center max-w-3xl mx-auto">
              We support hospitality ventures from ideation to execution. Our development team offers comprehensive consulting services to guide investors and owners through every phase of hotel development and renovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
              {[
                "Market Research & Feasibility Studies",
                "Site Selection & Brand Fitment",
                "Capex Planning & Budgeting",
                "Architecture & Interior Design Consultation",
                "Procurement of FF&E",
                "Pre-Opening Operations Setup & Training"
              ].map((feature, index) => (
                <div key={index} className="flex flex-col border-t border-white/10 pt-6 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-serif text-white/20 group-hover:text-mustard/40 transition-colors">0{index + 1}</span>
                    <CheckCircle2 className="w-5 h-5 text-mustard" />
                  </div>
                  <h4 className="text-xl text-white font-medium tracking-wide">{feature}</h4>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="h-16 px-12 bg-mustard text-black font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(202,158,83,0.3)] border-none">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
