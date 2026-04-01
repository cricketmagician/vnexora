import { Section } from "@/components/ui/Section";
import { CheckCircle2, ArrowLeft, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function HotelOperationsPage() {
  return (
    <main className="min-h-screen bg-[#0a0f0d] pt-32 pb-16">
      <Section spacing="none">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center text-mustard/80 hover:text-mustard mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Home</span>
          </Link>
          
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            {/* Right Content (Flipped layout) */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mustard/20 bg-mustard/5 text-mustard text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <Settings className="w-4 h-4" /> Operational Excellence
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-8">
                Hotel Operations & Management
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-12">
                Operational excellence is the backbone of every successful hotel. VNEXORA provides hands-on daily management solutions across departments to enhance guest satisfaction, increase profitability, and ensure brand compliance.
              </p>
              
              <div className="bg-forest/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 mb-10 shadow-2xl">
                <h3 className="text-mustard uppercase tracking-[0.2em] text-xs font-bold mb-8">Service Pillars</h3>
                <ul className="space-y-6">
                  {[
                    "Day-to-day Hotel Management",
                    "Rooms Division & Front Office Oversight",
                    "Food & Beverage Management",
                    "Sales & Marketing Strategy",
                    "Preventive Maintenance & Engineering",
                    "HouseKeeping & Quality Audits",
                    "Energy Efficiency & Sustainability Programs"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-zinc-200">
                      <div className="w-8 h-8 rounded-full bg-mustard/10 flex items-center justify-center mr-4 shrink-0 mt-0.5 border border-mustard/30">
                        <CheckCircle2 className="w-4 h-4 text-mustard" />
                      </div>
                      <span className="leading-snug font-light text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button size="lg" className="h-14 px-10 bg-transparent border-2 border-mustard text-mustard font-bold tracking-wide rounded-xl hover:bg-mustard hover:text-black transition-all w-full md:w-auto">
                OPTIMIZE OPERATIONS
              </Button>
            </div>
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2 h-[500px] lg:h-[900px] relative rounded-[3rem] overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-transparent z-10" />
              <img 
                src="/images/services/hotel_operations.jpg" 
                alt="Hotel Operations & Management"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
