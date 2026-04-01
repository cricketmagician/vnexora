import { Section } from "@/components/ui/Section";
import { CheckCircle2, ArrowLeft, LineChart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function SalesMarketingPage() {
  return (
    <main className="min-h-screen bg-forest pt-32 pb-16">
      <Section spacing="none">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center text-mustard/80 hover:text-mustard mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Home</span>
          </Link>
          
          <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mustard/20 bg-mustard/5 text-mustard text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <LineChart className="w-4 h-4" /> Growth & Visibility
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-8">
              Sales & Marketing
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
              Effective positioning and promotion are crucial in today's competitive hospitality space. VNEXORA builds sales strategies that blend local intelligence with global outreach to drive bookings and boost visibility.
            </p>
          </div>
          
          {/* Bento-box Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <div className="lg:col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-auto">
              <img 
                src="/images/services/sales_marketing.jpg" 
                alt="Sales and Marketing"
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl font-serif text-white mb-3">Data-Driven Campaigns</h3>
                <p className="text-zinc-300 font-light text-lg">Combining global trends with strict local performance metrics.</p>
              </div>
            </div>
            
            {[
              "Marketing Plan & Campaigns",
              "Revenue & Yield Optimization",
              "Web, SEO & Social Media",
              "Graphic Design & Visuals",
              "PR & Influencer Collabs",
              "Online Reputation Mgmt"
            ].map((feature, index) => (
              <div key={index} className="bg-[#151a17] rounded-[2rem] p-8 hover:bg-[#1a211d] transition-colors border border-white/5 flex flex-col justify-center items-center text-center group h-[200px]">
                <CheckCircle2 className="w-8 h-8 text-mustard/50 group-hover:text-mustard mb-4 transition-colors" />
                <h4 className="text-lg text-white font-medium tracking-wide leading-snug">{feature}</h4>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="h-16 px-12 bg-mustard text-black font-bold tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(202,158,83,0.2)]">
              DRIVE YOUR REVENUE
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
