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
  TrendingUp,
  Play
} from "lucide-react";
import Link from "next/link";

export default function HotelsBuySellPage() {
  const [activeForm, setActiveForm] = useState<"buy" | "sell" | "lease">("buy");
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (type: "buy" | "sell" | "lease") => {
    setActiveForm(type);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

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
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
            src="/images/services/luxury_brokerage_hero.png" 
            alt="Luxury Hotel Brokerage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-mustard font-sans text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase mb-8 block"
          >
            Exclusive Hospitality Brokerage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-[1.2] tracking-tight"
          >
            Discrete Transactions. <br className="hidden md:block" />
            <span className="text-mustard italic">Exceptional Assets.</span>
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
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToForm("buy")}
              className="px-10 h-16 bg-mustard text-black font-bold tracking-[0.4em] text-[10px] sm:text-xs hover:bg-white transition-all rounded-none uppercase"
            >
              Buy a Hotel
            </Button>
            <Button 
              size="lg" 
              onClick={() => scrollToForm("sell")}
              className="px-10 h-16 bg-transparent border-2 border-white text-white font-bold tracking-[0.4em] text-[10px] sm:text-xs hover:bg-white hover:text-black transition-all rounded-none uppercase"
            >
              Sell Property
            </Button>
            <Button 
              size="lg" 
              onClick={() => scrollToForm("lease")}
              className="px-10 h-16 bg-white/5 border border-white/20 text-white font-bold tracking-[0.4em] text-[10px] sm:text-xs hover:bg-mustard hover:text-black transition-all rounded-none uppercase"
            >
              Lease Assets
            </Button>
          </motion.div>
        </div>
      </section>

      <Section className="bg-[#0a0f0d] border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 relative z-20">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-black/60 backdrop-blur-2xl border border-white/10 p-10 flex flex-col items-center text-center group cursor-pointer"
            onClick={() => scrollToForm("buy")}
          >
            <div className="w-16 h-16 bg-mustard/10 flex items-center justify-center mb-8 border border-mustard/20 group-hover:bg-mustard transition-colors">
              <Search className="w-8 h-8 text-mustard group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xl font-serif text-white mb-4 uppercase tracking-wider">The Acquirer</h3>
            <p className="text-white/40 text-xs font-light mb-8">Secure prestigious hospitality assets aligned with your strategic goals.</p>
            <span className="text-mustard text-[10px] font-bold tracking-[0.2em] flex items-center uppercase">
              Start Acquisition <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-black/60 backdrop-blur-2xl border border-white/10 p-10 flex flex-col items-center text-center group cursor-pointer"
            onClick={() => scrollToForm("sell")}
          >
            <div className="w-16 h-16 bg-mustard/10 flex items-center justify-center mb-8 border border-mustard/20 group-hover:bg-mustard transition-colors">
              <Handshake className="w-8 h-8 text-mustard group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xl font-serif text-white mb-4 uppercase tracking-wider">The Vendor</h3>
            <p className="text-white/40 text-xs font-light mb-8">Execute a discrete divestment strategy to maximize high-value exits.</p>
            <span className="text-mustard text-[10px] font-bold tracking-[0.2em] flex items-center uppercase">
              Start Divestment <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-black/60 backdrop-blur-2xl border border-white/10 p-10 flex flex-col items-center text-center group cursor-pointer"
            onClick={() => scrollToForm("lease")}
          >
            <div className="w-16 h-16 bg-mustard/10 flex items-center justify-center mb-8 border border-mustard/20 group-hover:bg-mustard transition-colors">
              <Key className="w-8 h-8 text-mustard group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xl font-serif text-white mb-4 uppercase tracking-wider">The Operator</h3>
            <p className="text-white/40 text-xs font-light mb-8">Optimize yield through high-end leasing and full-scale management.</p>
            <span className="text-mustard text-[10px] font-bold tracking-[0.2em] flex items-center uppercase">
              Lease Assets <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Service Inquiry</h2>
            <p className="text-white/40 font-light max-w-xl mx-auto text-sm md:text-base">Please provide the initial details of your requirement. Our advisory team will reach out with a tailored perspective.</p>
          </div>

          <div ref={formRef} className="bg-[#FAF9F6] rounded-none overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            {/* Form Tabs */}
            <div className="flex border-b border-stone-200">
              {(["buy", "sell", "lease"] as const).map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveForm(tab)}
                  className={`flex-1 py-8 text-[10px] font-black tracking-[0.3em] uppercase transition-all ${
                    activeForm === tab ? "bg-stone-900 text-white" : "text-stone-400 bg-stone-50 hover:bg-stone-100"
                  }`}
                >
                  I want to {tab === "buy" ? "Acquire" : tab === "sell" ? "Divest" : "Lease"}
                </button>
              ))}
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
                    <label className="text-[10px] uppercase tracking-[0.3em] text-[#CFA052] font-black">Full Name</label>
                    <input required type="text" placeholder="GIOVANNI ROSSI" className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-300" />
                  </div>
                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-[#CFA052] font-black">Corporate Email</label>
                    <input required type="email" placeholder="G.ROSSI@ESTATE.COM" className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-300" />
                  </div>

                  {activeForm === "buy" ? (
                    <>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-[#CFA052] font-black">Target Asset Type</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium focus:outline-none focus:border-[#CFA052] transition-colors appearance-none pr-10">
                            <option>Boutique Urban Hotel</option>
                            <option>Coastal Luxury Resort</option>
                            <option>Historic Landmark Asset</option>
                            <option>Development Site</option>
                          </select>
                          <ChevronRight className="w-4 h-4 text-[#CFA052] absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-[#CFA052] font-black">Investment Budget</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium focus:outline-none focus:border-[#CFA052] transition-colors appearance-none pr-10">
                            <option>$10M - $25M</option>
                            <option>$25M - $50M</option>
                            <option>$50M - $100M+</option>
                            <option>Confidential / Undisclosed</option>
                          </select>
                          <ChevronRight className="w-4 h-4 text-[#CFA052] absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                    </>
                  ) : activeForm === "sell" ? (
                    <>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-[#CFA052] font-black">Asset Location</label>
                        <input type="text" placeholder="E.G. ROME, ITALY" className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium text-lg focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-300" />
                      </div>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-[#CFA052] font-black">Valuation Target</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium focus:outline-none focus:border-[#CFA052] transition-colors appearance-none pr-10">
                            <option>Under $20M</option>
                            <option>$20M - $50M</option>
                            <option>$50M - $100M</option>
                            <option>$100M+</option>
                          </select>
                          <ChevronRight className="w-4 h-4 text-[#CFA052] absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-[#CFA052] font-black">Lease Duration Target</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-900 font-medium focus:outline-none focus:border-[#CFA052] transition-colors appearance-none pr-10">
                            <option>3 - 5 Years</option>
                            <option>5 - 10 Years</option>
                            <option>10+ Years (Legacy)</option>
                            <option>Rolling Contract</option>
                          </select>
                          <ChevronRight className="w-4 h-4 text-[#CFA052] absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="space-y-2 col-span-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-[#CFA052] font-black">Strategy & Notes</label>
                    <textarea rows={4} placeholder="SPECIFIC REQUIREMENTS OR CONTEXT..." className="w-full bg-transparent border border-stone-200 p-6 text-stone-900 font-medium focus:outline-none focus:border-[#CFA052] transition-colors placeholder:text-stone-200 resize-none"></textarea>
                  </div>

                  <div className="col-span-2 pt-10">
                    <Button 
                      type="submit"
                      className="w-full h-20 bg-[#CFA052] text-black font-bold tracking-[0.4em] text-sm hover:bg-stone-900 hover:text-white transition-all rounded-none"
                    >
                      SUBMIT SECURE INQUIRY
                    </Button>
                    <p className="mt-6 text-center text-stone-400 text-[9px] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                       <Lock className="w-3 h-3 text-[#CFA052]" /> AES-256 Encrypted Transmission Protocols Active
                    </p>
                  </div>
                </motion.form>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>

      {/* Strategic Guidance Video Section */}
      <section className="bg-mustard py-24 md:py-32 px-6 md:px-16 text-black border-t border-white/5 relative z-20">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="w-full lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-serif leading-tight mb-8"
              >
                Strategic Divestment <br /> 
                <span className="italic">Expertly Guided.</span>
              </motion.h2>
              <div className="space-y-6 text-black/80 text-lg font-light leading-relaxed">
                <p>
                  Selling a trophy hospitality asset requires more than just a listing. At Vnexora, it is a calculated orchestration of value and timing.
                </p>
                <p>
                  We start by <span className="font-bold text-black underline decoration-black/20 decoration-2 underline-offset-4">assessing your property's intrinsic value</span> and advising on gathering key documents like accounts, licenses, and planning permissions.
                </p>
                <p>
                  Then we <span className="font-bold text-black underline decoration-black/20 decoration-2 underline-offset-4">market your hotel to qualified buyers</span>, manage viewings and negotiations, and guide you through to a successful, discrete sale.
                </p>
              </div>
              <Link href="/sell-hotel">
                <Button 
                  className="mt-12 bg-black text-white hover:bg-black/90 px-10 h-16 rounded-none tracking-[0.3em] uppercase text-[10px] sm:text-xs font-bold transition-all"
                >
                  Inquire for Sale
                </Button>
              </Link>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video bg-black shadow-2xl group overflow-hidden border-8 border-white/10">
                <iframe 
                  src="https://player.vimeo.com/video/824804225?autoplay=1&loop=1&background=1" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen" 
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black pl-1 shadow-2xl">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer-like closer */}
      <Section className="bg-[#0a0f0d] text-center border-t border-white/5">
         <Link href="/" className="inline-flex items-center text-mustard/60 hover:text-mustard transition-colors uppercase tracking-[0.3em] text-xs font-bold">
            <ChevronRight className="w-4 h-4 mr-2 rotate-180" /> Back to Intelligence Hub
         </Link>
      </Section>
    </main>
  );
}
