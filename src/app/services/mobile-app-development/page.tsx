"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  Code2, 
  Cpu, 
  Layout, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

export default function MobileAppDevelopment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Mobile App Development",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await submitInquiry({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Service Inquiry: ${formData.service}`,
        message: formData.message,
        source: 'mobile_app_development_page'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Inquiry received. Our tech desk will reach out.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Process error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: Smartphone,
      title: "iOS & Android",
      desc: "Native-grade performance using cross-platform frameworks for maximum reach."
    },
    {
      icon: Layout,
      title: "Premium UX/UI",
      desc: "Visual designs that align with the quiet luxury aesthetic of Vnexora."
    },
    {
      icon: Cpu,
      title: "AI Integration",
      desc: "Smart features including predictive analysis and personalized user journeys."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      desc: "Banking-grade encryption and secure data handling for peace of mind."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      desc: "We analyze your requirements and define the technical scope."
    },
    {
      step: "02",
      title: "Design",
      desc: "High-fidelity prototypes that define the user experience."
    },
    {
      step: "03",
      title: "Development",
      desc: "Agile sprints using the latest tech stack (React Native/Flutter)."
    },
    {
      step: "04",
      title: "Deployment",
      desc: "App Store optimization and seamless production rollout."
    }
  ];

  const FAQS = [
    { question: "What types of mobile apps do you develop?", answer: "We specialize in developing a wide range of mobile apps, including business, e-commerce, educational, and entertainment apps for both iOS and Android platforms." },
    { question: "How much does it cost to develop a mobile app?", answer: "The cost depends entirely on the features, complexity, and technology stack chosen. We offer highly tailored luxury solutions." },
    { question: "How long does it take to develop a mobile app?", answer: "Typical deployment windows range from 3 to 6 months to ensure rigorous high-fidelity design standards." },
    { question: "Do you offer post-launch support?", answer: "Absolutely. Deployment is just the beginning. Our enterprise tier includes continuous monitoring and performance enhancements." }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 selection:bg-mustard selection:text-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mustard/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-mustard/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-mustard text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">VNEXORA TECH DIVISION</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 italic">
                Mobile <span className="not-italic font-black uppercase text-white/10">Excellence.</span>
              </h1>
              <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mb-12">
                We design and build bespoke mobile experiences that bridge the gap between luxury hospitality and high-performance technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-mustard/50 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-mustard/10 rounded-2xl flex items-center justify-center text-mustard mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white/2 backdrop-blur-3xl border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <span className="text-mustard text-[10px] font-black tracking-[0.5em] uppercase">THE METHODOLOGY</span>
              <h2 className="text-4xl md:text-6xl font-serif italic">Institutional Grade <br />Development.</h2>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                Our approach is rooted in agile principles, ensuring rapid delivery without compromising on the minute details that define premium products.
              </p>
              
              <div className="space-y-4 pt-8">
                {process.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
                    <span className="text-2xl font-serif italic text-mustard opacity-40 group-hover:opacity-100 transition-opacity">{item.step}</span>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white">{item.title}</h4>
                      <p className="text-white/30 text-xs font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative aspect-square w-full max-w-[500px]">
              <div className="absolute inset-0 bg-mustard/20 blur-[100px] rounded-full animate-pulse" />
              <Image 
                src="/images/tech/app-mockup.png" 
                alt="Mobile App Interface" 
                fill 
                className="object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Contact */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-mustard/5 blur-[80px] rounded-full" />
            
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">Ready to <br />Build Your App?</h2>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                Connect with our tech desk to discuss your mobile roadmap. From ideation to global deployment, we handle the complexity.
              </p>
              
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-4 text-white/60">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <CheckCircle2 size={18} className="text-mustard" />
                  </div>
                  <span className="text-sm font-light uppercase tracking-widest">Confidential Audit</span>
                </div>
                <div className="flex items-center gap-4 text-white/60">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <CheckCircle2 size={18} className="text-mustard" />
                  </div>
                  <span className="text-sm font-light uppercase tracking-widest">Global Deployment Support</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              {isSubmitted ? (
                <div className="bg-white/5 p-12 rounded-3xl text-center border border-mustard/20">
                  <div className="w-20 h-20 bg-mustard rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-mustard/20">
                    <CheckCircle2 size={32} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-serif italic mb-4">Brief Received.</h3>
                  <p className="text-white/40 text-sm font-light mb-8 italic">Our technical lead will reach out to you within 24 hours.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-black uppercase tracking-[0.4em] text-mustard hover:text-white transition-colors">Submit Another Brief</button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="ENTER YOUR NAME" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-mustard transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-1">Work Email</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="ENTER OFFICIAL EMAIL" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-mustard transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="ENTER CONTACT NUMBER" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-mustard transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-1">Project Overview</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="DESCRIBE YOUR APP VISION" 
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-mustard transition-all placeholder:text-white/10 resize-none"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-mustard text-black text-[10px] font-black uppercase tracking-[0.5em] rounded-2xl hover:bg-white transition-all shadow-2xl relative overflow-hidden group"
                  >
                    <span className="relative z-10">{isSubmitting ? "Transmitting..." : "Initiate Consultation"}</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 border-t border-white/5 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif italic mb-12 text-center">Mobile Development FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                  <h4 className="text-sm font-bold uppercase tracking-widest">{faq.question}</h4>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} size={18} />
                </div>
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-white/40 text-sm font-light leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer-like Branding */}
      <section className="py-24 border-t border-white/5 text-center">
        <div className="flex justify-center flex-wrap gap-12 opacity-20 hover:opacity-40 transition-opacity px-6">
           {["Native Development", "Cloud Architecture", "Product Strategy"].map(t => (
             <span key={t} className="text-[10px] font-black uppercase tracking-[0.5em]">{t}</span>
           ))}
        </div>
      </section>
    </main>
  );
}
