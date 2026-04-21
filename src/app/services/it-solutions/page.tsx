"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Volume2, 
  VolumeX, 
  MessageSquare, 
  Lightbulb, 
  Settings, 
  Users,
  Code2,
  Cpu,
  Smartphone,
  Globe2,
  Database,
  Building2,
  ArrowRight
} from "lucide-react";

export default function ITSolutionsPage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#050505] overflow-hidden">
      
      {/* 1. CINEMATIC ENTRY (Mission Objective Hero) */}
      <section className="relative w-full h-screen min-h-[800px] flex items-end pb-32 overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted={isMuted} 
            playsInline 
            className="w-full h-full object-cover opacity-80"
          >
            {/* Using a premium tech abstract placeholder video */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-hacker-typing-on-a-laptop-40156-large.mp4" type="video/mp4" />
          </video>
          {/* Vnexora Dark Contrast Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/20" />
        </div>

        {/* Top Control Bar */}
        <div className="absolute top-32 left-0 right-0 w-full flex justify-center z-20">
          <button 
            onClick={toggleMute}
            className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 hover:border-mustard hover:text-mustard text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />} 
            {isMuted ? "Unmute Briefing" : "Mute Briefing"}
          </button>
        </div>

        {/* Floating Chat Icon (Bottom Right Mock) */}
        <div className="absolute bottom-12 right-12 z-20 hidden lg:flex">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-2xl shadow-blue-600/50 cursor-pointer hover:scale-110 transition-transform">
            <MessageSquare size={24} />
          </div>
        </div>

        {/* Left Aligned Cinematic Typography */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none mb-6">
              MISSION <span className="text-mustard">OBJECTIVE</span> 4:
            </h1>
            <p className="text-2xl md:text-4xl text-stone-300 font-light tracking-wide max-w-4xl">
              Integrate disparate systems to drive operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CORPORATE INTRODUCTION */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
                Our IT Solutions Make Sure Your Tech <span className="text-mustard italic font-serif">Works For You</span>
              </h2>
              <div className="space-y-6 text-stone-400 font-light leading-relaxed text-lg">
                <p>
                  We craft custom-built IT solutions that align seamlessly with your business goals. Like a covert operation, our team moves with precision and strategy; an elite force dedicated to tackling your most impossible IT missions.
                </p>
                <p>
                  Our team works closely with you to identify challenges, unlock hidden market opportunities, and implement the most effective technologies to drive ruthless results.
                </p>
              </div>
              <div className="pt-8">
                <Link href="#solutions" className="inline-block bg-[#0A0A0A] border border-mustard text-mustard hover:bg-mustard hover:text-black px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all">
                  Find Your Solutions
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full rounded-3xl overflow-hidden group border border-white/5"
            >
              <Image 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                alt="Tech Operative"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-mustard/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Creativity",
                icon: Lightbulb,
                desc: "Sometimes the answer to the most complex problem comes from applying a different perspective or way of thinking. Let the creative minds behind our code look at your problem."
              },
              {
                title: "Communication",
                icon: MessageSquare,
                desc: "Solutions come from listening and asking the right questions. Everything changes over time, but staying in regular communication avoids problems and keeps your tech project on course."
              },
              {
                title: "Experience",
                icon: Users,
                desc: "Peace of mind comes from knowing that the experience gained from working on hundreds of projects over time means that your IT architecture is securely in capable hands."
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 hover:border-mustard/50 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-mustard/20 to-transparent flex items-center justify-center text-mustard mb-8 group-hover:scale-110 transition-transform">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-stone-400 font-light leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THE BENTO IT SOLUTIONS GRID */}
      <section className="py-32 bg-[#050505]" id="solutions">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight mb-8">
              Ready to <span className="text-mustard">Find The Right</span> IT Solution For You?
            </h2>
            <p className="text-stone-400 text-lg font-light mb-10">
              Our team works closely with you to identify challenges, unlock opportunities, and implement the most effective corporate integration technologies.
            </p>
            <Link href="/contact" className="inline-block bg-mustard hover:bg-white text-black px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-colors">
              Schedule Free Consultation
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Services",
                desc: "We help you apply AI in practical ways to gain insights, streamline operations, and support better decision-making.",
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Custom Software Solutions",
                desc: "We write custom software to modernize existing systems and support your critical business functions with precision.",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "API Integration",
                desc: "We can integrate your off-the-shelf software effortlessly, utilizing rigorous API configurations into your custom internal software.",
                img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
              },
              {
                title: "Web App Development",
                desc: "Our team of expert developers creates high-performance, scalable, and rigidly secure architectural web platforms.",
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              },
              {
                title: "Mobile Application",
                desc: "Our team of developers can create, design, and rebuild any functional application to actively attract massive customer segments.",
                img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "IT Staffing",
                desc: "We work with businesses of all sizes to provide customized staffing solutions that meet their specific technological resourcing needs.",
                img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((box, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative h-[480px] rounded-3xl overflow-hidden group"
              >
                <Image src={box.img} alt={box.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors" />
                <div className="absolute inset-x-8 bottom-8 flex flex-col items-start">
                  <h3 className="text-3xl font-medium text-white tracking-tight mb-4">{box.title}</h3>
                  <p className="text-stone-300 font-light leading-relaxed mb-8 h-24 overflow-hidden overflow-ellipsis text-sm">{box.desc}</p>
                  <button className="flex items-center gap-2 border border-white/30 hover:border-mustard hover:text-mustard px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all text-white">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TOP TIER DELIVERY SPLIT */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight">
                We Deliver <br /><span className="text-mustard">Top-Tier Software</span>
              </h2>
              <div className="space-y-6 text-stone-400 font-light leading-relaxed text-lg">
                <p>
                  Our elite developers have handled expansive digital projects ranging from precise MVP creation to architectural app design escalating to pure enterprise software development.
                </p>
                <p className="italic border-l-2 border-mustard pl-6 text-stone-300">
                  "Like operatives trained for high-stakes missions, our experts adapt to any environment and execute with ruthless precision."
                </p>
                <p>
                  Responsive Quality and Affordable software expertise do not have to be an impossible mission to find. We are ready to execute your requirements today.
                </p>
              </div>
              <div className="pt-8">
                <Link href="/partner-with-us" className="inline-block bg-white text-black hover:bg-mustard px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-colors">
                  Explore Capabilities
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[700px] w-full rounded-3xl overflow-hidden group order-1 lg:order-2"
            >
              <Image 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop"
                alt="Delivery Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60" />
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
