"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  Key, 
  MapPin, 
  DollarSign, 
  ShieldCheck, 
  Users, 
  Search,
  Handshake,
  CheckCircle2,
  FileSearch,
  Users2,
  Network,
  Lock,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function HotelsBuySellPage() {
  const [activeForm, setActiveForm] = useState<"buy" | "sell">("buy");

  const processSteps = [
    {
      title: "Strategic Discovery",
      description: "In-depth consultation to define your specific investment parameters or divestment goals.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Asset Evaluation",
      description: "Rigorous valuation and vetting process to ensure asset quality and market alignment.",
      icon: <FileSearch className="w-6 h-6" />
    },
    {
      title: "Discrete Matching",
      description: "Connecting qualified acquirers with vetted vendors through our private network.",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Vetted Connection",
      description: "Introduction and information exchange under strict confidentiality protocols.",
      icon: <Users2 className="w-6 h-6" />
    },
    {
      title: "Negotiation Support",
      description: "Expert guidance through commercial terms, due diligence, and deal structuring.",
      icon: <Handshake className="w-6 h-6" />
    },
    {
      title: "Closing & Handover",
      description: "Seamless finalization of the transaction and asset transition management.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0f0d]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/luxury_brokerage_hero.png" 
            alt="Luxury Hotel Brokerage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0f0d]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-mustard font-sans text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-6 block"
          >
            Exclusive Hospitality Brokerage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] tracking-tight"
          >
            Discrete Transactions. <br className="hidden md:block" />
            <span className="text-mustard">Exceptional Assets.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
          >
            Vnexora connects global investors with premium off-market hospitality opportunities through unparalleled expertise and specialized vetting.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Button 
              size="lg" 
              onClick={() => {
                setActiveForm("buy");
                document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 h-16 bg-mustard text-black font-bold tracking-[0.4em] text-[10px] sm:text-xs hover:bg-mustard/90 transition-all rounded-none uppercase"
            >
              Buy a Hotel
            </Button>
            <Button 
              size="lg" 
              onClick={() => {
                setActiveForm("sell");
                document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 h-16 bg-transparent border-2 border-white text-white font-bold tracking-[0.4em] text-[10px] sm:text-xs hover:bg-white hover:text-black transition-all rounded-none uppercase"
            >
              Sell your Property
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gateway Section */}
      <Section className="bg-[#0a0f0d] border-b border-white/5">
        <div className="grid md:grid-cols-2 gap-8 -mt-24 relative z-20">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/10 p-10 flex flex-col items-center text-center group cursor-pointer"
            onClick={() => {
              setActiveForm("buy");
              document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="w-16 h-16 bg-mustard/10 flex items-center justify-center mb-8 border border-mustard/20 group-hover:bg-mustard transition-colors">
              <Search className="w-8 h-8 text-mustard group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 uppercase tracking-wider">For the Acquirer</h3>
            <p className="text-white/60 font-light mb-8">Identify and secure prestigious hospitality assets that align with your strategic investment portfolio.</p>
            <span className="text-mustard text-xs font-bold tracking-[0.2em] flex items-center uppercase">
              Start Acquisition <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/10 p-10 flex flex-col items-center text-center group cursor-pointer"
            onClick={() => {
              setActiveForm("sell");
              document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="w-16 h-16 bg-mustard/10 flex items-center justify-center mb-8 border border-mustard/20 group-hover:bg-mustard transition-colors">
              <Handshake className="w-8 h-8 text-mustard group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 uppercase tracking-wider">For the Vendor</h3>
            <p className="text-white/60 font-light mb-8">Execute a discrete divestment strategy to maximize value while maintaining complete operational confidentiality.</p>
            <span className="text-mustard text-xs font-bold tracking-[0.2em] flex items-center uppercase">
              Start Divestment <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </motion.div>
        </div>
      </Section>
      
      {/* Why Vnexora Section (Colorful & Bold) */}
      <section className="bg-mustard py-32 px-6 md:px-16 text-black relative z-20">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-center mb-24">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-black/60 font-sans text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 block"
             >
               The Vnexora Edge
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-serif leading-tight"
             >
               Why Trust <br className="md:hidden" /> <span className="italic">Vnexora</span> For Your Asset
             </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
            {[
              {
                title: "Global Reach",
                description: "Direct access to prime hospitality markets across Asia, Europe, and UAE.",
                icon: <Network className="w-10 h-10" />
              },
              {
                title: "Vetted Network",
                description: "Only qualified HNI investors and verified property owners enter our portal.",
                icon: <ShieldCheck className="w-10 h-10" />
              },
              {
                title: "Asset Insight",
                description: "Every deal is backed by deep P&L analysis and operational optimization expertise.",
                icon: <TrendingUp className="w-10 h-10" />
              },
              {
                title: "Discrete Strategy",
                description: "100% confidential transaction lifecycle protecting your core operations.",
                icon: <Lock className="w-10 h-10" />
              },
              {
                title: "Proven Returns",
                description: "Consistently delivering high-value exits and strategic acquisitions.",
                icon: <CheckCircle2 className="w-10 h-10" />
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="mb-8 text-black group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-serif font-bold uppercase tracking-widest mb-4">{feature.title}</h4>
                <p className="text-black/70 text-sm leading-relaxed font-semibold italic">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <Section className="bg-[#0c1411] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mustard/5 rounded-full blur-[120px] pointer-events-none" />
        
        <SectionHeader 
          subtitle="Our Methodology"
          title={<span className="text-white">The <span className="text-mustard">Vnexora</span> Process</span>}
          description="A white-glove approach to hospitality transactions, ensuring discretion, accuracy, and strategic alignment at every stage."
          align="center"
          className="relative z-10"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-10 border border-white/10 bg-black/40 backdrop-blur-sm group hover:border-mustard/50 hover:bg-black/60 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6 text-mustard/10 text-6xl font-serif group-hover:text-mustard/20 transition-colors">
                {index + 1}
              </div>
              <div className="mb-8 w-14 h-14 rounded-full bg-mustard/10 flex items-center justify-center text-mustard border border-mustard/20 group-hover:bg-mustard group-hover:text-black transition-all duration-500">
                {step.icon}
              </div>
              <h4 className="text-xl font-serif text-white mb-4 uppercase tracking-[0.1em] group-hover:text-mustard transition-colors">{step.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Off-Market Advantage Banner */}
      <Section className="bg-black py-0" spacing="none" container={false}>
        <div className="flex flex-col lg:flex-row min-h-[500px]">
          <div className="w-full lg:w-1/2 p-16 md:p-24 flex flex-col justify-center bg-[#0a0f0d] border-r border-white/5">
            <ShieldCheck className="w-12 h-12 text-mustard mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              The Off-Market Advantage
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
              Our most prestigious inventory—including trophy assets in Prime European and Middle Eastern markets—is never listed publicly. To protect the integrity and operational stability of these assets, access is granted only to vetted inquiries.
            </p>
            <div className="flex items-center gap-4 text-mustard font-bold tracking-[0.2em] text-xs uppercase">
              Secure Private Access <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
            <img 
              src="/images/services/luxury_brokerage_hero.png" 
              alt="Confidential Asset" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </Section>

      {/* Inquiry Form Section */}
      <Section id="inquiry-form" className="bg-[#0a0f0d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Service Inquiry</h2>
            <p className="text-white/40 font-light max-w-xl mx-auto">Please provide the initial details of your requirement. Our advisory team will reach out with a tailored perspective.</p>
          </div>

          <div className="bg-[#0c1411] border border-white/10 rounded-none overflow-hidden shadow-2xl">
            {/* Form Tabs */}
            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setActiveForm("buy")}
                className={`flex-1 py-8 text-xs font-bold tracking-[0.3em] uppercase transition-all ${
                  activeForm === "buy" ? "bg-mustard text-black" : "text-white/40 hover:text-white"
                }`}
              >
                I want to Acquire
              </button>
              <button 
                onClick={() => setActiveForm("sell")}
                className={`flex-1 py-8 text-xs font-bold tracking-[0.3em] uppercase transition-all ${
                  activeForm === "sell" ? "bg-mustard text-black" : "text-white/40 hover:text-white"
                }`}
              >
                I want to Divest
              </button>
            </div>

            <div className="p-8 md:p-16">
              <AnimatePresence mode="wait">
                <motion.form 
                  key={activeForm}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-mustard font-bold">Full Name</label>
                    <input type="text" placeholder="GIOVANNI ROSSI" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-mustard transition-colors placeholder:text-white/10" />
                  </div>
                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-mustard font-bold">Corporate Email</label>
                    <input type="email" placeholder="G.ROSSI@ESTATE.COM" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-mustard transition-colors placeholder:text-white/10" />
                  </div>

                  {activeForm === "buy" ? (
                    <>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-mustard font-bold">Target Asset Type</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-mustard transition-colors appearance-none pr-10">
                            <option className="bg-[#0c1411]">Boutique Urban Hotel</option>
                            <option className="bg-[#0c1411]">Coastal Luxury Resort</option>
                            <option className="bg-[#0c1411]">Historic Landmark Asset</option>
                            <option className="bg-[#0c1411]">Development Site</option>
                          </select>
                          <ChevronRight className="w-4 h-4 text-mustard absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-mustard font-bold">Investment Budget</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-mustard transition-colors appearance-none pr-10">
                            <option className="bg-[#0c1411]">$10M - $25M</option>
                            <option className="bg-[#0c1411]">$25M - $50M</option>
                            <option className="bg-[#0c1411]">$50M - $100M+</option>
                            <option className="bg-[#0c1411]">Confidential / Undisclosed</option>
                          </select>
                          <ChevronRight className="w-4 h-4 text-mustard absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-mustard font-bold">Asset Location</label>
                        <input type="text" placeholder="E.G. ROME, ITALY" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-mustard transition-colors placeholder:text-white/10" />
                      </div>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-mustard font-bold">Valuation Target</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-mustard transition-colors appearance-none pr-10">
                            <option className="bg-[#0c1411]">Under $20M</option>
                            <option className="bg-[#0c1411]">$20M - $50M</option>
                            <option className="bg-[#0c1411]">$50M - $100M</option>
                            <option className="bg-[#0c1411]">$100M+</option>
                          </select>
                          <ChevronRight className="w-4 h-4 text-mustard absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="space-y-2 col-span-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-mustard font-bold">Strategy & Notes</label>
                    <textarea rows={4} placeholder="SPECIFIC REQUIREMENTS OR CONTEXT..." className="w-full bg-transparent border border-white/10 p-6 text-white font-light focus:outline-none focus:border-mustard transition-colors placeholder:text-white/10 resize-none"></textarea>
                  </div>

                  <div className="col-span-2 pt-10">
                    <Button 
                      type="button"
                      className="w-full h-20 bg-mustard text-black font-bold tracking-[0.4em] text-sm hover:bg-mustard/90 transition-all rounded-none"
                    >
                      SUBMIT SECURE INQUIRY
                    </Button>
                    <p className="mt-6 text-center text-white/30 text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                       <ShieldCheck className="w-3 h-3" /> End-to-end Encrypted Confidential Communication
                    </p>
                  </div>
                </motion.form>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer-like closer */}
      <Section className="bg-[#0a0f0d] text-center border-t border-white/5">
         <Link href="/" className="inline-flex items-center text-mustard/60 hover:text-mustard transition-colors uppercase tracking-[0.3em] text-xs font-bold">
            <ChevronRight className="w-4 h-4 mr-2 rotate-180" /> Back to Intelligence Hub
         </Link>
      </Section>
    </main>
  );
}
