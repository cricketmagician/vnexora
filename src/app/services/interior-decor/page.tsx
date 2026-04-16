"use client";

import { useRef, useState } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
} from "framer-motion";
import { 
  CheckCircle2,
  Gem,
  Sparkles,
  Paintbrush,
  Lightbulb,
  Palette
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

export default function InteriorDecorPortal() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: ""
  });

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitInquiry({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject: `Interior Styling Request`,
        message: `Project: ${formData.address}\n\n${formData.message}`,
        source: 'interior_decor_portal'
      });
      if (result.success) {
        setIsSubmitted(true);
        toast.success("Styling request received.");
      }
    } catch {
      toast.error("Error sending request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main ref={containerRef} className="bg-white text-black font-sans overflow-x-hidden">
      
      {/* HERO */}
      <section className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-black">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <Image src="/images/services/hotel_interior_rendering.png" alt="Interior Decor" fill className="object-cover opacity-60" priority />
        </motion.div>
        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.8em] text-mustard">Vnexora Bespoke Styling</h4>
          <h1 className="text-6xl md:text-[8vw] font-serif leading-[0.85] text-white tracking-tighter">
            Dress Your <br />
            <span className="italic text-mustard">Hotels in Luxury.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-white/60 leading-relaxed italic">
            "Art is in the details. We curate every piece—from fine furniture to ambient lighting—to create a guest experience that feels like a masterpiece."
          </p>
          <div className="pt-8">
            <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} className="px-12 py-5 bg-mustard text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl">Start Your Masterpiece →</button>
          </div>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="py-24 md:py-48 bg-white text-black">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                 <h2 className="text-4xl md:text-7xl font-serif font-bold tracking-tight">Curation. <br/><span className="text-mustard italic font-light">Not Selection.</span></h2>
                 <p className="text-black/50 text-xl font-light leading-relaxed italic">"Our interior decor mandates go beyond picking furniture. We architect atmosphere, ensuring every texture and shadow aligns with your brand's unique character."</p>
                 <div className="grid grid-cols-2 gap-8 pt-8">
                    {[
                      { icon: <Palette className="w-6 h-6" />, title: "Bespoke Palettes" },
                      { icon: <Gem className="w-6 h-6" />, title: "Fine Art Sourcing" },
                      { icon: <Lightbulb className="w-6 h-6" />, title: "Lighting Concepts" },
                      { icon: <Sparkles className="w-6 h-6" />, title: "Luxury Materials" }
                    ].map((item, i) => (
                      <div key={i} className="space-y-4">
                         <div className="text-mustard">{item.icon}</div>
                         <h4 className="text-xs font-black uppercase tracking-widest">{item.title}</h4>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative aspect-[4/5] bg-black">
                 <Image src="/images/services/luxury_hotel_architectural_shadows.png" alt="Styling" fill className="object-cover opacity-80" />
              </div>
           </div>
        </div>
      </section>

      {/* FORM */}
      <section ref={formRef} className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 bg-black p-12 md:p-32 flex flex-col justify-start text-white">
          <h2 className="text-5xl md:text-7xl font-serif font-bold uppercase leading-tight">Elevate <br/>The <br/><span className="italic text-mustard">Feeling.</span></h2>
          <div className="w-20 h-1 bg-mustard my-12" />
        </div>
        <div className="lg:w-1/2 bg-[#F5F1E9] p-12 md:p-32 flex flex-col justify-start">
           <h2 className="text-5xl font-sans font-bold mb-12">Styling Inquiry</h2>
           {!isSubmitted ? (
             <form onSubmit={handleSubmit} className="space-y-8">
                <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Full Name" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                <input required className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-mustard transition-all text-sm font-light text-black" placeholder="Hotel Location" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
                <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-mustard text-black text-xs font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all shadow-xl">AVIAL STYLING CALL →</button>
             </form>
           ) : (
             <div className="text-center py-20">
                <CheckCircle2 className="w-16 h-16 text-mustard mx-auto mb-8" />
                <h3 className="text-3xl font-serif italic">Request Received.</h3>
             </div>
           )}
        </div>
      </section>
    </main>
  );
}
