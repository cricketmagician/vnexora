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
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  const handleNext = () => {
    if (!selectedRole) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-white text-[#021A59] overflow-hidden">
      
      {/* 1. CINEMATIC ENTRY (Mission Objective Hero) */}
      <section className="relative w-full h-screen min-h-[800px] flex items-end pb-32 overflow-hidden bg-slate-100">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            {/* The user's downloaded local video */}
            <source src="/videos/Video_Generation_Successful.mp4" type="video/mp4" />
          </video>
          {/* Grounding gradient for text readability while leaving video clearly visible in the center/top */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>



        {/* Floating Chat Icon (Bottom Right Mock) */}
        <div className="absolute bottom-12 right-12 z-20 hidden lg:flex">
          <div className="w-16 h-16 rounded-full bg-[#021A59] flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
            <MessageSquare size={24} />
          </div>
        </div>

        {/* Left Aligned Cinematic Typography */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#021A59] tracking-tighter leading-none mb-6">
              MISSION <span className="text-[#1b4ed8]">OBJECTIVE</span> 4:
            </h1>
            <p className="text-2xl md:text-4xl text-slate-700 font-light tracking-wide max-w-4xl">
              Integrate disparate systems to drive operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CORPORATE INTRODUCTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#021A59] tracking-tight leading-tight">
                Our IT Solutions Make Sure Your Tech Works For You
              </h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
                <p>
                  We craft custom-built IT solutions that align seamlessly with your business goals. Like a covert operation, our team moves with precision and strategy; an elite force dedicated to tackling your most impossible IT missions.
                </p>
                <p>
                  Our team works closely with you to identify challenges, unlock opportunities, and implement the most effective technologies to drive results.
                </p>
              </div>
              <div className="pt-8">
                <Link href="#solutions" className="inline-block bg-[#021A59] text-white hover:bg-[#1b4ed8] px-10 py-4 rounded-full text-sm font-semibold transition-all">
                  Find Your Solutions
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full rounded-2xl overflow-hidden group shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                alt="Tech Operative"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
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
                  className="bg-white border-2 border-[#021A59] rounded-2xl p-10 hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center text-[#021A59] mb-8">
                    <Icon size={48} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#021A59] mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THE BENTO IT SOLUTIONS GRID */}
      <section className="py-32 bg-white" id="solutions">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight leading-tight mb-8">
              Ready to <span className="text-[#021A59] font-bold">Find The Right IT Solution</span> For You?
            </h2>
            <p className="text-slate-600 text-lg font-light mb-10">
              Our team works closely with you to identify challenges, unlock opportunities, and implement the most effective technologies.
            </p>
            <Link href="/contact" className="inline-block bg-[#021A59] text-white hover:bg-[#1b4ed8] px-10 py-4 rounded-full text-sm font-semibold transition-colors">
              Schedule a Free Consultation
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
                className="relative h-[480px] rounded-3xl overflow-hidden group shadow-lg"
              >
                <Image src={box.img} alt={box.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#021A59]/80 group-hover:bg-[#021A59]/70 transition-colors" />
                <div className="absolute inset-x-8 bottom-8 flex flex-col items-start text-white">
                  <h3 className="text-3xl font-bold tracking-tight mb-4">{box.title}</h3>
                  <p className="font-light leading-relaxed mb-8 h-24 overflow-hidden overflow-ellipsis text-sm">{box.desc}</p>
                  <button className="flex items-center gap-2 border border-white hover:bg-white hover:text-[#021A59] px-8 py-3 rounded-full text-sm font-semibold transition-all">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TOP TIER DELIVERY SPLIT */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#021A59] tracking-tight leading-tight">
                We Deliver Top-Tier Software
              </h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
                <p>
                  Our developers have handled software projects ranging from MVP creation to App Design to pure enterprise software development.
                </p>
                <p>
                  Like operatives trained for high-stakes missions, our experts adapt to any environment and execute with precision.
                </p>
                <p>
                  Responsive Quality and Affordable software expertise do not have to be hard to find. We are happy to discuss your business needs and how we can help you find a solution.
                </p>
              </div>
              <div className="pt-8">
                <Link href="/partner-with-us" className="inline-block bg-[#021A59] text-white hover:bg-[#1b4ed8] px-10 py-4 rounded-full text-sm font-semibold transition-colors">
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full rounded-3xl overflow-hidden group order-1 lg:order-2 shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop"
                alt="Delivery Team"
                fill
                className="object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. LAUNCH SMARTER FORM */}
      <section className="py-24 bg-white mb-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-xl md:text-2xl text-slate-800 font-medium mb-12 tracking-tight">
            Fill out the form below, and we'll help you overcome roadblocks and launch smarter.
          </p>

          <div className="bg-white border border-[#021A59] overflow-hidden text-left shadow-xl max-w-2xl mx-auto">
            <div className="p-8 md:p-12 pb-6">
              <h3 className="text-base font-bold text-[#021A59] mb-6 tracking-tight">Who are you? <span className="text-[#021A59] font-bold ml-1">*</span></h3>
              
              <div className="flex flex-col gap-3">
                {[
                  "Pre-Revenue or Early Stage Founder / Owner",
                  "Small to mid-sized business (10–250 employees)",
                  "Mid-market company (250–1,000 employees)",
                  "Enterprise organization (1,000+ employees)",
                  "Government / Public Sector",
                  "Agency / Consultancy / Nonprofit"
                ].map((option, idx) => (
                  <label 
                    key={idx} 
                    className="flex items-center gap-3 border border-[#021A59]/40 rounded-full px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    {/* Native Radio styling override to match screenshot */}
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedRole === option ? 'border-[#021A59]' : 'border-slate-400'}`}>
                       {selectedRole === option && <div className="w-2 h-2 bg-[#021A59] rounded-full" />}
                    </div>
                    {/* Hidden actual radio for accessibility */}
                    <input 
                      type="radio" 
                      name="role" 
                      value={option}
                      checked={selectedRole === option}
                      onChange={(e) => {
                        setSelectedRole(e.target.value);
                        setShowError(false);
                      }}
                      className="sr-only"
                    />
                    <span className="text-sm text-[#021A59] font-medium">{option}</span>
                  </label>
                ))}
              </div>

              {showError && (
                <p className="text-[#d32f2f] text-sm font-semibold mt-6">Who are you? is required</p>
              )}
            </div>

            <div className="border-t border-[#021A59]/20 p-5 px-8 flex justify-end bg-white">
              <button 
                onClick={handleNext}
                className="flex items-center gap-1 text-[#021A59] font-bold text-sm tracking-wide group"
              >
                NEXT <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
