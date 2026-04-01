import { Section } from "@/components/ui/Section";
import { CheckCircle2, ArrowLeft, Calculator } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function FinanceAccountingPage() {
  return (
    <main className="min-h-screen bg-[#070b09] pt-32 pb-16">
      <Section spacing="none">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center text-mustard/80 hover:text-mustard mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Home</span>
          </Link>
          
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mustard/20 bg-mustard/5 text-mustard text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <Calculator className="w-4 h-4" /> Strategic Control
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-8">
                Finance & Accounting
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-12 border-l-2 border-mustard pl-6">
                Financial transparency and strategic control are vital for sustainable growth. VNEXORA offers full-suite financial services tailored to hospitality businesses, allowing owners to make data-backed decisions with confidence.
              </p>
              
              <div className="bg-[#121a15]/50 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 mb-10 shadow-2xl">
                <ul className="space-y-6">
                  {[
                    "Budgeting & Forecasting",
                    "Cash Flow & Working Capital Management",
                    "Financial Reporting (Compliant with USALI Standards)",
                    "Accounts Payable & Receivable Management"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-zinc-200">
                      <CheckCircle2 className="w-6 h-6 text-mustard/80 mr-4 shrink-0" />
                      <span className="leading-snug font-light text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button size="lg" className="h-14 px-10 bg-white text-black font-bold tracking-wide rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-mustard transition-all w-full md:w-auto border-none">
                MAXIMIZE PROFITS
              </Button>
            </div>
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2 h-[500px] lg:h-[750px] relative rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/20 z-10 pointer-events-none" />
              <img 
                src="/images/services/finance_accounting.jpg" 
                alt="Finance & Accounting"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
