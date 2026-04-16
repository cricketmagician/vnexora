"use client";

import { useRef, useState } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  AnimatePresence
} from "framer-motion";
import { 
  Building2,
  CheckCircle2,
  HardHat,
  Zap,
  Hammer,
  Maximize2,
  ShieldCheck,
  Building
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

export default function ConstructionRenovationPortal() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    challenge: "Turnkey Construction",
    referral: "Social Media",
    message: ""
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0.4]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject: `Construction Mandate: ${formData.challenge}`,
        message: `Project: ${formData.address}\nChallenge: ${formData.challenge}\nMessage: ${formData.message}`,
        source: 'construction_portal'
      });
      if (result.success) {
        setIsSubmitted(true);
        toast.success("Inquiry received.");
      }
    } catch {
      toast.error("Error sending inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main ref={containerRef} className="bg-white text-black selection:bg-mustard selection:text-white font-sans overflow-x-hidden">
      
      {/* HERO */}
      <section className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-black">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image src="/images/services/property_development.png" alt="Construction" fill className="object-cover opacity-60" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </motion.div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.8em] text-mustard">Vnexora Turnkey Solutions</h4>
            <h1 className="text-6xl md:text-[8vw] font-serif leading-[0.85] text-white tracking-tighter">
              Construction. <br />
              <span className="italic text-mustard">Engineered.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-white/60 leading-relaxed italic">
              "We manage the heavy lifting. From groundbreaking to final handover, our construction mandates ensure your hotel is built with precision, speed, and uncompromising quality."
            </p>
            <div className="pt-8">
              <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} className="px-12 py-5 bg-mustard text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-2xl">Start Construction Mandate →</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-24 md:py-48 bg-[#F5F1E9] text-black overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-7xl font-serif font-bold leading-[1.1] text-black tracking-tight">Efficiency. <br/><span className="text-mustard italic font-light">By Design.</span></h2>
              <p className="text-black/70 text-lg md:text-xl font-light leading-relaxed italic">"Our construction logic is based on absolute transparency and technical rigour. We eliminate the common delays and budget overruns that plague the industry."</p>
              <div className="space-y-4">
                  {[
                    "Fixed-price guarantees for peace of mind",
                    "Real-time site progress monitoring",
                    "Uncompromising safety and quality audits",
                    "Fast-track renovation for operational assets"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-mustard" />
                      <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="relative aspect-square">
                <Image src="/images/services/luxury_hotel_architectural_shadows.png" alt="Renovation" fill className="object-cover shadow-2xl grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section ref={formRef} className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 bg-[#080808] p-12 md:p-24 lg:p-32 pt-12 md:pt-16 lg:pt-20 flex flex-col justify-start text-white">
          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight uppercase">Build the <br /><span className="italic text-mustard">Future</span></h2>
          <div className="w-20 h-1 bg-mustard my-12" />
          <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70 italic">"Successful construction is predicted by professional planning. Let us lead your next renovation or new build with clinical precision."</p>
        </div>

        <div className="lg:w-1/2 bg-[#F5F1E9] p-12 md:p-24 lg:p-32 pt-12 md:pt-16 lg:pt-20 flex flex-col justify-start text-black">
          <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-black mb-12">Technical Inquiry</h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                  <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
               </div>
               <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Hotel Name & Address" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
               <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-mustard text-black text-xs font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 shadow-xl disabled:opacity-50">
                  {isSubmitting ? "TRANSMITTING..." : "AVAIL FREE CONSULTATION"}
               </button>
            </form>
          ) : (
            <div className="text-center py-20">
               <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center mx-auto mb-8"><CheckCircle2 className="text-black" /></div>
               <h3 className="text-3xl font-serif italic text-black">Inquiry Received.</h3>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
