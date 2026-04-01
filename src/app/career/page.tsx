import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

const positions = [
  { title: "General Manager", department: "Hotel Operations", location: "Mumbai, India" },
  { title: "Director of Revenue", department: "Finance & Accounting", location: "Dubai, UAE" },
  { title: "F&B Concept Architect", department: "Brand Partnerships", location: "New Delhi, India" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] font-sans selection:bg-[#8d6c4c] selection:text-white">
      {/* Dark background for Navbar on this specific page */}
      <div className="bg-[#050505]">
        <Navbar />
        <div className="h-24"></div>
      </div>
      
      <Section spacing="lg" className="bg-[#050505] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/pool_hero.jpg')] bg-cover opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-[0.1em] uppercase mb-8 leading-tight drop-shadow-2xl">
            Shape The Future of Hospitality
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            At VNEXORA, we are always searching for visionary leaders, operational experts, and creative minds who share our passion for redefining luxury estate management globally.
          </p>
        </div>
      </Section>

      <Section spacing="lg">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-xs font-bold tracking-[0.3em] text-[#8d6c4c] uppercase mb-12 flex items-center">
            <span className="w-8 h-[1px] bg-[#8d6c4c] mr-4"></span>
            Open Opportunities
          </h2>
          
          <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
            {positions.map((job, idx) => (
              <div key={idx} className="group py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-zinc-50 transition-colors px-6 -mx-6 rounded-sm">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#111] mb-3 group-hover:text-[#8d6c4c] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
                    <span>{job.department}</span>
                    <span className="text-zinc-300">•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="flex items-center text-xs font-bold tracking-widest uppercase text-[#8d6c4c]">
                  Apply Now 
                  <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-white p-12 shadow-xl border border-zinc-100 rounded-sm">
            <h3 className="text-2xl font-serif text-[#111] mb-4">Spontaneous Application</h3>
            <p className="text-zinc-500 mb-8 max-w-md mx-auto font-light">Don't see a perfect fit? We're always open to meeting exceptional talent. Register your interest with us.</p>
            <button className="px-8 py-4 bg-[#262626] text-white text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors rounded-sm shadow-lg">
              Send Your Resume
            </button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
