import { Section } from "@/components/ui/Section";
import { ArrowLeft, UsersRound } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function HumanResourcesPage() {
  return (
    <main className="min-h-screen bg-[#111111] pt-32 pb-16">
      <Section spacing="none">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center text-mustard/80 hover:text-mustard mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Home</span>
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-[45%]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mustard/20 bg-mustard/5 text-mustard text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <UsersRound className="w-4 h-4" /> People First Philosophy
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-8">
                Human Resource & Talent 
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-12">
                Our people-first philosophy ensures that we attract, nurture, and retain top hospitality talent. VNEXORA helps properties build teams that align with the brand's ethos and deliver exceptional service.
              </p>
              
              <div className="space-y-4 mb-12">
                {[
                  "Talent Acquisition & Onboarding",
                  "Customized Training Modules for All Departments",
                  "Leadership Development & Mentorship Programs",
                  "Employee Engagement Initiatives",
                  "Performance Appraisal & Rewards System"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center bg-black/40 p-5 rounded-2xl border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-mustard mr-4 shrink-0" />
                    <span className="leading-snug font-light text-lg text-white">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="h-14 px-10 border border-mustard text-mustard font-bold tracking-wide rounded-xl hover:bg-mustard hover:text-black transition-all w-full md:w-auto">
                EMPOWER YOUR TEAM
              </Button>
            </div>
            
            {/* Right Image Layout (Offset overlapping) */}
            <div className="w-full lg:w-[55%] relative h-[600px] lg:h-[800px]">
              <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20">
                <img 
                  src="/images/services/human_resources.jpg" 
                  alt="HR & Talent Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[75%] bg-forest rounded-[3rem] border border-white/10 shadow-2xl z-30 p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-serif text-mustard mb-4">Exceptional Service Begins Here</h3>
                <p className="text-zinc-300 font-light text-lg">Train your staff to embody international luxury standards seamlessly.</p>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(207,160,82,0.1),transparent_50%)] z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
