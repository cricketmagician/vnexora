"use client";

import { Section } from "@/components/ui/Section";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, History, Sparkles, Target, Globe, Building2, Cpu, Award, Milestone, Menu, Pause, Play, ArrowRight, Linkedin, Mail, ShieldCheck, Users, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NarrativeSection from "@/components/sections/NarrativeSection";
import StickySayHello from "@/components/ui/StickySayHello";

export default function OurStoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] selection:bg-mustard selection:text-white relative overflow-hidden font-serif">
      
      {/* 1. CINEMATIC HERO (FULL-SCREEN VIDEO & CENTERED CONTENT) */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        
        {/* Full-Screen Cinematic Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover brightness-[0.5] contrast-[1.1]"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Subtle Global Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
        
        {/* Centered Content Pillar */}
        <div className="relative z-20 w-full max-w-5xl px-6 text-center">
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-12">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="text-white text-3xl md:text-[5.5vw] font-serif font-black leading-tight tracking-tighter mb-6 block drop-shadow-2xl uppercase whitespace-nowrap">
                <span className="text-mustard">VNEXORA</span> <span className="italic font-light">Luxury Estate</span>
              </h1>
              <h2 className="text-lg md:text-3xl text-white/90 font-serif font-bold tracking-[0.6em] mb-12 uppercase drop-shadow-xl">
                A New Dawn for Hospitality
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto drop-shadow-xl px-4">
                We are a forward-thinking hospitality company transforming hotels, resorts, and hospitality assets into profitable, future-ready destinations across India and beyond. Our vision extends beyond conventional hotel management—we are redefining ownership value, guest experience, and operational excellence.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-6 md:mt-10"
            >
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Link 
                  href="#philosophy" 
                  className="px-14 py-6 bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-mustard transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105"
                >
                  Learn More
                </Link>
                <Link 
                  href="/contact" 
                  className="px-14 py-6 border border-white/30 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Play/Pause Control Circle (High Fidelity Parity) */}
        <div className="absolute right-12 bottom-12 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40">
            <button 
              onClick={toggleVideo}
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/10 backdrop-blur-3xl text-white rounded-full border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:bg-white hover:text-black active:scale-95 group"
            >
              {isPlaying ? (
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-6 bg-current rounded-full" />
                  <div className="w-1.5 h-6 bg-current rounded-full" />
                </div>
              ) : (
                <Play size={24} fill="currentColor" className="ml-1" />
              )}
            </button>
        </div>

        {/* Top Right: Institutional Link (Mockup) */}
        <Link 
          href="/say-hello"
          className="absolute top-10 right-10 z-40 hidden md:flex items-center gap-6 px-10 py-5 bg-mustard border border-white/10 text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-700 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
        >
          Say Hello — Vnexora
        </Link>
      </section>

      {/* NEW: DELIVERING RESULTS SECTION — MODERN REFINEMENT */}
      <Section className="bg-white py-24 md:py-40 relative overflow-hidden z-20">
        {/* Ambient Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-mustard/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/[0.02] blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Content Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-mustard mb-6 block">
                  Delivering Results
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-black leading-[1.1] tracking-tight mb-8">
                  Creating guest <br />
                  experiences we can <br />
                  <span className="italic text-mustard">be proud of</span>
                </h2>
                
                <div className="space-y-6 max-w-xl">
                  <p className="text-[#0A0A0A]/80 text-lg md:text-xl font-light leading-relaxed">
                    Vnexora delivers results through nurturing trust, fostering reliability, encouraging originality, and approaching our role with an attitude of full ownership.
                  </p>
                  <p className="text-[#0A0A0A]/60 text-base md:text-lg font-light leading-relaxed">
                    Our team is at the core of everything we do, creating experiences for our guests that we are proud of. We celebrate individual differences, actively supporting equality, diversity, and inclusion.
                  </p>
                </div>

                <div className="pt-10">
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex items-center gap-4 px-12 py-5 bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-mustard hover:text-black transition-all duration-500 rounded-full overflow-hidden shadow-2xl"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Image Column (7 Cols) — Modern Parallax Frame */}
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] md:aspect-[16/10] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-black/5"
              >
                <Image 
                  src="/images/narrative/beach_vibe.png" 
                  alt="Vnexora Institutional Excellence" 
                  fill 
                  className="object-cover transition-transform duration-[10s] hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Decorative Badge */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 md:-left-20 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl z-20 hidden md:block border border-black/5"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-4xl md:text-5xl font-serif text-mustard font-bold italic">98%</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Guest Satisfaction</span>
                </div>
              </motion.div>

              {/* Geometric Overlay */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-mustard/10 rounded-full blur-3xl -z-10" />
            </div>

          </div>
        </div>
      </Section>
      {/* LEADERSHIP HERO SECTION */}
      <section className="relative min-h-[90vh] bg-[#FDFBF7] overflow-hidden flex items-center">
        {/* Decorative Circular Elements (Matching Reference) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F2EFE9] rounded-full pointer-events-none hidden lg:block" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl pt-20 lg:pt-0"
              >
                {/* Subtle Purple Glow behind text */}
                <div className="absolute -left-20 top-0 w-64 h-64 bg-[#D1C4D1]/30 rounded-full blur-[100px] -z-10" />
                
                {/* Purple decorative circle from reference */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#D1C4D1]/40 rounded-full -z-10 hidden lg:block" />

                <h2 className="text-[3.5rem] md:text-[6.5vw] font-serif font-black text-[#3D0A24] tracking-tighter leading-[0.9] mb-8 uppercase relative">
                  Leadership
                </h2>
                <p className="text-[#3D0A24]/60 text-lg md:text-xl font-light leading-relaxed max-w-lg lg:pl-4">
                  Vnexora is driven by an international team of dedicated professionals with vast experience in hospitality management. At the heart, the Vnexora family are inspired by a true passion for hospitality backed by the strength of expertise in South Asia and global markets.
                </p>
              </motion.div>
            </div>

            {/* Right Image (5 cols) */}
            <div className="lg:col-span-5 relative mt-20 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
              >
                <Image 
                  src="/images/about/leadership-hero.jpg"
                  alt="Vnexora Leadership Vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </motion.div>

              {/* SCROLL Indicator (Vertical) */}
              <div className="absolute -left-16 bottom-0 hidden lg:flex flex-col items-center gap-8 translate-y-1/2">
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-black/20 [writing-mode:vertical-lr] rotate-180">Scroll</span>
                <div className="w-[1px] h-24 bg-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOUNDER & CEO SECTION */}
      <section className="bg-white py-32 md:py-48 relative overflow-hidden z-20">
        {/* Decorative background ring */}
        <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[40px] border-[#3D0A24]/[0.02] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Left: Circular CEO Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Outer Burgundy Ring */}
              <div className="relative w-[400px] h-[400px] md:w-[650px] md:h-[650px] flex items-center justify-center">
                <div className="absolute inset-0 border-[3px] border-[#3D0A24]/10 rounded-full" />
                <div className="absolute inset-10 border-[1px] border-[#3D0A24]/5 rounded-full" />
                
                {/* Image Container */}
                <div className="relative w-[320px] h-[320px] md:w-[540px] md:h-[540px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
                  <Image
                    src="/images/team/vineet-mishra.jpg"
                    alt="Mr. Vineet Mishra - Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Floating Decorative Dot */}
                <div className="absolute top-1/4 right-0 w-6 h-6 bg-mustard rounded-full shadow-lg" />
              </div>
            </motion.div>

            {/* Right: CEO Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3D0A24] mb-4">
                Mr. Vineet Mishra
              </h2>
              <div className="text-mustard text-[11px] font-black uppercase tracking-[0.4em] mb-10">
                Founder & CEO
              </div>
              
              <div className="space-y-6">
                <p className="text-black/70 text-lg md:text-xl font-light leading-relaxed">
                  IIT BHU Alumnus with 15+ years of experience in Hospitality & Real Estate. A visionary leader bridging global standards with local relevance. 
                </p>
                <p className="text-black/50 text-base md:text-lg font-light leading-relaxed">
                  Under his leadership, Vnexora has transformed from a strategic advisory firm into a multi-brand hospitality management powerhouse with a growing footprint across high-growth destinations. Vineet&apos;s expertise in yield optimization and institutional-grade management has set a new benchmark for the industry.
                </p>
                <p className="text-black/50 text-base md:text-lg font-light leading-relaxed">
                  He is dedicated to creating a legacy of excellence that transcends traditional hospitality, focusing on deep asset performance and meaningful guest experiences.
                </p>
              </div>

              {/* Signature/Seal Mockup */}
              <div className="mt-16 pt-10 border-t border-black/5 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center italic font-serif text-black/30">VM</div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Vnexora Institutional</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/20">Executive Mandate</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      <Section className="bg-[#FAF9F6] pt-12 md:pt-20 pb-32 md:pb-48 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30 mb-4 block">
                Passionate
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-black mb-6">
                Our Team
              </h2>
              <p className="text-[#0A0A0A]/60 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
                Guided by collective brilliance and institutional depth, our team brings together decades of expertise to <br className="hidden md:block" /> 
                redefine the hospitality landscape and deliver unparalleled value across every destination.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16 max-w-[1400px] mx-auto">
            {[
              {
                name: "Mr. Vineet Mishra",
                role: "Founder & CEO",
                image: "/images/team/vineet-mishra.jpg",
                linkedin: "https://www.linkedin.com/in/vineet-mishra-98151a6a/"
              },
              {
                name: "Akanscha Roy",
                role: "Co-Founder & CBO",
                image: "/images/team/akanscha-roy.jpg",
                linkedin: "https://www.linkedin.com/in/akanscha-roy-61641121b/"
              },
              {
                name: "Pooja Tripathi",
                role: "Co-Founder & COO",
                image: "/images/team/pooja-tripathi.jpg",
                linkedin: "https://www.linkedin.com/in/pooja-tripathi-80542490/"
              },
              {
                name: "Shachi Mishra",
                role: "Co-Founder & CMO",
                image: "/images/team/shachi-mishra.jpg",
                linkedin: "https://www.linkedin.com/in/shachi-mishra-513051374/"
              },
              {
                name: "Raihane Zaghdoud",
                role: "Chief Growth Officer",
                image: "/images/team/rile.jpg"
              },
              {
                name: "Sonam Singh",
                role: "Director, Operations",
                image: "/images/team/sonam-singh.jpg",
                linkedin: "https://www.linkedin.com/in/sonam-singh-21a856381/"
              },
              {
                name: "Devesh Mishra",
                role: "Director Finance",
                image: "/images/team/devesh-mishra.jpg",
                linkedin: "https://www.linkedin.com/in/devesh-mishra-6a5ba125"
              },
              {
                name: "Shyam Lal Singh",
                role: "Mentor & Advisor",
                image: "/images/team/shyam-lal-singh.jpg",
                linkedin: "https://www.linkedin.com/in/shyam-lal-singh-260710161"
              },
              {
                name: "Dr. Anil Agarwal",
                role: "Mentor",
                image: "/images/team/anil-agarwal.jpg",
                linkedin: "https://www.linkedin.com/in/anil-kumar-agrawal-3646248/"
              },
              {
                name: "Anshu Anand",
                role: "Sr. Business Advisor",
                image: "/images/team/anshu-anand.jpg",
                linkedin: "https://www.linkedin.com/in/anshuaanandofficial"
              },
              {
                name: "Sneha Giri",
                role: "Legal Advisor",
                image: "/images/team/sneha-giri.jpg",
                linkedin: "https://www.linkedin.com/in/advocate-sneha-giri-95708b68"
              },
              {
                name: "Ankit Saini",
                role: "Tech & Web Expert",
                image: "/images/team/ankit-saini.jpg",
                linkedin: "https://www.linkedin.com/in/ankit-saini-462643a1"
              },
              {
                name: "Monika Sharma",
                role: "Sr. Architect",
                image: "/images/team/monika-sharma.jpg",
                linkedin: "https://www.linkedin.com/in/monica-sharma-3b2ab135"
              },
              {
                name: "Ankush Rai",
                role: "Architect & PM",
                image: "/images/team/ankush-rai.jpg",
                linkedin: "https://www.linkedin.com/in/ankushrai1/"
              },
              {
                name: "Gitanjali",
                role: "Social Media Expert",
                image: "/images/team/gitanjali.jpg",
                linkedin: "https://www.linkedin.com/in/gitanjali-chauhan"
              },
              {
                name: "Shikha Mishra",
                role: "PR Manager",
                image: "/images/team/shikha-mishra.jpg"
              },
              {
                name: "Namira",
                role: "Sales Manager",
                image: "/images/team/namira.jpg"
              },
              {
                name: "Rakesh Singh",
                role: "Outlet Manager",
                image: "/images/team/rakesh-singh.jpg",
                linkedin: "https://www.linkedin.com/in/rakesh-singh-3072b9374/"
              },
              {
                name: "Kesar",
                role: "Marketing Manager",
                image: "/images/team/kesar.jpg",
                linkedin: "https://www.linkedin.com/in/kesar-chaurasia-97703533b/"
              },
              {
                name: "Ambalica",
                role: "Content Strategist",
                image: "/images/team/ambalica.jpg"
              },
              {
                name: "Deepak Mishra",
                role: "Community Mavens",
                image: "/images/team/deepak-mishra.jpg",
                linkedin: "https://www.linkedin.com/in/deepak-mishra-6b88318"
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-none mb-8 bg-black/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={cn(
                      "object-cover transition-all duration-700 grayscale group-hover:grayscale-0",
                      (member.name === "Kesar" || member.name === "Ambalica") ? "object-[center_40%] scale-[1.25] group-hover:scale-[1.35]" : "object-[center_15%] group-hover:scale-105"
                    )}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-black mb-2">{member.name}</h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6">{member.role}</p>
                  <div className="flex justify-center gap-6">
                    <Link href={member.linkedin || "#"} target="_blank" className="text-black/20 hover:text-mustard transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <button className="text-black/20 hover:text-mustard transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* JOIN OUR TEAM / CAREERS SECTION */}
      <Section className="bg-[#FDFBF7] py-24 md:py-40 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-mustard mb-6 block">
                  Careers
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-black leading-[1.1] tracking-tight mb-8">
                  Join Our Team and <br />
                  <span className="italic text-mustard">Build Your Career</span>
                </h2>
                <p className="text-[#0A0A0A]/70 text-lg font-light leading-relaxed max-w-xl">
                  Join our team and be part of a dynamic and innovative hospitality management company. We offer competitive salaries, excellent benefits, and a supportive work environment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/5 pt-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-black">Why Choose Us?</h3>
                  <p className="text-[#0A0A0A]/60 text-sm font-light leading-relaxed">
                    Innovative projects that challenge limits and redefine the hospitality sector.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-black">Our Values</h3>
                  <p className="text-[#0A0A0A]/60 text-sm font-light leading-relaxed">
                    We endeavour to achieve excellence in all that we undertake.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  href="/career" 
                  className="group inline-flex items-center justify-center gap-4 bg-[#0A0A0A] text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl hover:bg-mustard hover:text-black hover:scale-105 transition-all duration-500"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] group"
            >
              <Image 
                src="/images/careers/team_lobby.png" 
                alt="Join Vnexora Team" 
                fill 
                className="object-cover transition-transform duration-[10s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border border-black/5 rounded-[3rem]" />
            </motion.div>

          </div>
        </div>
      </Section>
      <section className="bg-[#050505] relative z-20 overflow-hidden">

        {/* ── Drifting background watermark ── */}
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0.2, 0.5], ["0%", "-40%"]) }}
          className="absolute top-1/4 left-0 text-[15vw] font-serif font-black text-white/[0.018] whitespace-nowrap pointer-events-none select-none leading-none"
        >
          EXCELLENCE&nbsp;•&nbsp;PERFECTION&nbsp;•&nbsp;LEGACY
        </motion.div>

        {/* ── Ambient glow pools ── */}
        <div className="absolute -top-40 left-[20%] w-[500px] h-[500px] bg-mustard/[0.06] rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-mustard/[0.04] rounded-full blur-[180px] pointer-events-none" />

        {/* ════════════════════════════════
            TOP HALF — full-bleed split hero
        ════════════════════════════════ */}
        <div className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT — Narrative content */}
          <div className="flex items-center px-10 md:px-16 lg:px-20 xl:px-24 py-24 lg:py-32 relative z-10 lg:order-1 order-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-14 max-w-2xl"
            >
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-5"
              >
                <div className="w-14 h-px bg-mustard" />
                <span className="text-[10px] font-black uppercase tracking-[0.7em] text-mustard">Who We Are</span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.2 }}
                className="text-4xl md:text-5xl xl:text-[4.5rem] font-serif text-white leading-[1.05] tracking-tighter"
              >
                Founded on a{" "}
                <span className="block mt-2 italic text-mustard relative">
                  Paradigm Shift.
                  {/* Gold underline */}
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.8 }}
                    viewBox="0 0 500 30"
                    className="absolute -bottom-3 left-0 w-full h-6 fill-none stroke-mustard stroke-2 pointer-events-none"
                  >
                    <path d="M0,20 Q250,5 500,15" strokeLinecap="round" />
                  </motion.svg>
                </span>
              </motion.h2>

              {/* Body copy */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="space-y-8"
              >
                <p className="text-white/45 text-lg md:text-xl font-light leading-[1.85] first-letter:text-[4rem] first-letter:font-serif first-letter:text-mustard first-letter:leading-[0.8] first-letter:mr-3 first-letter:float-left first-letter:mt-2">
                  The Vnexora journey began with a single realization: that luxury hospitality had become a commodity. In pursuit of scale, properties lost their soul, and owners lost their yield. We founded this institution to reverse that trend.
                </p>
                <p className="text-white/75 text-lg md:text-xl font-light leading-[1.85]">
                  By integrating institutional-grade financial intelligence with the high-art of guest experience, Vnexora creates a distinct &quot;Neural Grid&quot; for asset performance. We don&apos;t just manage hotels; we craft legacies of profitability.
                </p>
              </motion.div>

              {/* Pull-quote */}
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="relative pl-8 border-l-2 border-mustard/60"
              >
                <p className="text-mustard/80 text-base italic font-light leading-relaxed">
                  "Hospitality was never meant to be scaled like a commodity. It was meant to be felt like an heirloom."
                </p>
                <cite className="block mt-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 not-italic">— Vnexora Founding Charter</cite>
              </motion.blockquote>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-3 gap-6 pt-10 border-t border-white/[0.06]"
              >
                {[
                  { label: "Market Presence", value: "Global" },
                  { label: "Yield Optimization", value: "+28%" },
                  { label: "Mandate Focus", value: "Institutional" },
                ].map((stat, i) => (
                  <div key={i} className="group relative">
                    <div className="text-[9px] text-white/25 uppercase tracking-[0.35em] font-bold mb-2">{stat.label}</div>
                    <div className="text-2xl md:text-3xl font-serif text-white group-hover:text-mustard transition-colors duration-500">{stat.value}</div>
                    <div className="absolute -bottom-2 left-0 w-0 h-px bg-mustard group-hover:w-full transition-all duration-700" />
                  </div>
                ))}
              </motion.div>

            </motion.div>
          </div>

          {/* RIGHT — Cinematic image panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[55vh] lg:min-h-full overflow-hidden lg:order-2 order-1"
          >
            <img
              src="/images/about/kit1.jpeg"
              alt="Vnexora Heritage Detail"
              className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[6s] hover:scale-100"
            />
            {/* Dark-to-left gradient bleed */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#050505]" />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent" />

            {/* Noise texture overlay for film-grain */}
            <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Floating caption badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-10 right-10 z-20"
            >
              <div className="bg-mustard/10 backdrop-blur-2xl border border-mustard/20 px-8 py-5 rounded-2xl text-right">
                <div className="text-mustard text-[10px] font-black uppercase tracking-[0.4em] mb-1">Est. 2024</div>
                <div className="text-white/70 text-sm font-light italic">Where Institutions Meet Experience</div>
              </div>
            </motion.div>

            {/* Institutional seal — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute bottom-10 left-10 z-30 hidden lg:flex flex-col items-center justify-center w-36 h-36 rounded-full bg-mustard shadow-[0_0_60px_rgba(207,160,82,0.4)]"
            >
              <div className="text-2xl font-serif text-black font-bold leading-none">Inst.</div>
              <div className="text-[8px] font-black text-black/60 uppercase tracking-[0.25em] mt-1">Quality Seal</div>
            </motion.div>
          </motion.div>
        </div>

        {/* ════════════════════════════════
            BOTTOM HALF — three editorial pillars
        ════════════════════════════════ */}
        {/* ════════════════════════════════
            BOTTOM HALF — three editorial pillars
        ════════════════════════════════ */}
        {/* ════════════════════════════════
            PHILOSOPHY TEASER
        ════════════════════════════════ */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 py-32 text-center">
          <SectionTag>Our Core</SectionTag>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-serif text-white mt-8 mb-12 tracking-tight"
          >
            Institutional <span className="italic text-mustard">Intelligence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16 italic leading-relaxed"
          >
            Discover the Vnexora Doctrine—a culture built on uncompromising quality, unwavering integrity, and the pursuit of quiet luxury.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/philosophy"
              className="group inline-flex items-center gap-6 bg-white/5 border border-white/10 px-12 py-6 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white hover:bg-mustard hover:text-black transition-all duration-500 shadow-2xl"
            >
              Explore Our Philosophy
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-3" />
            </Link>
          </motion.div>
        </section>


        {/* ════════════════════════════════
            NAVIGATION BRIDGE — Cinematic editorial panels
        ════════════════════════════════ */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 h-[60vh] md:h-[80vh] overflow-hidden">
          {[
            {
              title: "Team",
              desc: "Embracing uniqueness, encouraging creativity, and empowerment.",
              link: "Meet Our Team",
              href: "/team",
              image: "/images/about-us/team.png"
            },
            {
              title: "Philosophy",
              desc: "When we invest in something, we don't just put skin in the game.",
              link: "Our Philosophy",
              href: "/philosophy",
              image: "/images/about-us/philosophy.png"
            },
            {
              title: "History",
              desc: "Stories are the vehicles that get us from one location in life to the next.",
              link: "Our History",
              href: "#roadmap",
              image: "/images/about-us/history.png"
            }
          ].map((panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1.5 }}
              className="group relative h-full w-full overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <motion.img 
                src={panel.image}
                alt={panel.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-[0.6] group-hover:brightness-[0.8]"
              />

              {/* Burgundy/Dark Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#4A0404]/40 to-[#2A0202]/90 mix-blend-multiply opacity-80 transition-opacity duration-700 group-hover:opacity-60" />
              
              {/* Content Container */}
              <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-10 md:px-14 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                  className="space-y-6"
                >
                  <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight">{panel.title}</h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed max-w-[280px]">
                    {panel.desc}
                  </p>
                  
                  <Link 
                    href={panel.href}
                    className="inline-flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.4em] pt-6 group/link"
                  >
                    <span className="relative">
                      {panel.link}
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-white/30 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 origin-left" />
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/link:translate-x-2" />
                  </Link>
                </motion.div>
              </div>

              {/* Subtle accent line (vertical) on desktop */}
              {i < 2 && (
                <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/5 z-20 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>

      </section>

      {/* 3. EVOLUTION TIMELINE — Vertical Parallax Flow */}
      <section id="roadmap" className="bg-[#050505] py-48 relative">
        <div className="container mx-auto px-6 text-center mb-40">
          <SectionTag>Our Evolution</SectionTag>
          <h2 className="text-4xl md:text-[5rem] font-serif text-white mt-12 tracking-tight leading-none">
            The Vnexora <br/>
            <span className="italic text-gold-gradient">Roadmap.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Central Parallax Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ scaleY: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]) }}
              className="w-full h-full bg-gradient-to-b from-mustard via-mustard to-transparent origin-top" 
            />
          </div>
          
          <div className="space-y-0 relative">
            <TimelineStep 
              year="2025" 
              title="Build. Position. Partner." 
              points={[
                "Establish VNEXORA as a trusted hospitality consulting & deal partner",
                "Execute strategic hotel transactions (Lease / MG / Revenue Share / Sale)",
                "Drive brand collaborations with leading hotel chains & boutique brands",
                "Optimize hotel performance through strategy, operations & revenue systems",
                "Expand across high-growth tourism & spiritual destinations"
              ]}
              align="right"
              icon={<Building2 size={32} />}
              image="/images/institutional/roadmap-2025.png"
            />
            <TimelineStep 
              year="2026" 
              title="Transform. Scale. Go Global." 
              points={[
                "Deploy MangoH AI platform across partner hotels",
                "Convert traditional properties into NEX-GEN AI-powered hotels",
                "Deliver 360° hospitality solutions (Strategy + Tech + Operations + Revenue + Talent)",
                "Build scalable, data-driven hotel models",
                "Expand VNEXORA presence to global markets & partnerships"
              ]}
              align="left"
              icon={<Globe size={32} />}
              image="/images/institutional/roadmap-2026.png"
            />
          </div>

          {/* Our Direction Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 text-center"
          >
            <div className="text-mustard/40 text-[10px] uppercase font-black tracking-[0.6em] mb-8">Our Direction</div>
            <h3 className="text-4xl md:text-6xl font-serif text-white leading-[1.2] max-w-4xl mx-auto italic font-medium">
              From advisory to execution—<br/>
              <span className="text-mustard opacity-80">from hotels to <br className="md:hidden" />intelligent hospitality systems.</span>
            </h3>
          </motion.div>
        </div>
      </section>





      {/* 2. NARRATIVE PARALLAX SECTION (AVOCET-INSPIRED EDITORIAL) */}
      <NarrativeSection />

      {/* STICKY CTA — SAY HELLO */}
      <StickySayHello />

    </main>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-4">
      <div className="w-12 h-[1px] bg-mustard/30" />
      <span className="text-[11px] font-black tracking-[0.7em] text-mustard uppercase">{children}</span>
      <div className="w-12 h-[1px] bg-mustard/30" />
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium mb-1">{label}</span>
      <span className="text-3xl font-serif text-white">{value}</span>
    </div>
  );
}

function TimelineStep({ year, title, desc, points, align, icon, image }: { 
  year: string; 
  title: string; 
  desc?: string; 
  points?: string[];
  align: "left" | "right"; 
  icon: React.ReactNode;
  image: string;
}) {
  const isLeft = align === "left";

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-0 py-24 md:py-32">

      {/* ── TEXT CARD side ── */}
      <div className={cn(isLeft ? "order-1" : "order-1 md:order-2")}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "group relative",
            isLeft ? "md:pr-16" : "md:pl-16"
          )}
        >
          <div className={cn(
            "bg-[#0A0A0A] border border-white/5 p-12 lg:p-16 rounded-[4rem] transition-all duration-700 group-hover:border-mustard/30 relative z-10",
            isLeft ? "rounded-tr-none" : "rounded-tl-none"
          )}>
            <div className={cn(
              "w-20 h-20 rounded-3xl bg-mustard/5 border border-mustard/10 flex items-center justify-center text-mustard mb-8 transition-all duration-500 group-hover:bg-mustard group-hover:text-black",
              isLeft ? "ml-auto" : "mr-auto"
            )}>
              {icon}
            </div>
            <div className={cn(isLeft ? "text-right" : "text-left")}>
              <span className="text-5xl font-serif text-mustard mb-4 block tracking-tighter">{year}</span>
              <h3 className="text-3xl font-serif text-white mb-6 tracking-tight leading-tight">{title}</h3>
              {desc && <p className="text-white/40 text-xl font-light leading-relaxed">{desc}</p>}
              {points && (
                <ul className={cn(
                  "space-y-4 mt-6",
                  isLeft ? "flex flex-col items-end" : "flex flex-col items-start"
                )}>
                  {points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/point">
                      {isLeft && <span className="text-white/40 text-lg font-light leading-snug text-right">{point}</span>}
                      <div className="w-1.5 h-1.5 rounded-full bg-mustard mt-2 shrink-0 shadow-[0_0_10px_rgba(207,160,82,0.6)] group-hover/point:scale-125 transition-transform" />
                      {!isLeft && <span className="text-white/40 text-lg font-light leading-snug text-left">{point}</span>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Connection Pulse dot — facing the centre line */}
          <div className={cn(
            "absolute top-1/2 w-8 h-8 rounded-full border border-mustard/30 flex items-center justify-center -translate-y-1/2 z-20",
            isLeft ? "-right-4" : "-left-4"
          )}>
            <div className="w-3 h-3 rounded-full bg-mustard shadow-[0_0_20px_rgba(207,160,82,1)]" />
          </div>
        </motion.div>
      </div>

      {/* ── IMAGE side ── */}
      <div className={cn(isLeft ? "order-2" : "order-2 md:order-1")}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className={cn(
            "relative aspect-[4/3] rounded-[3rem] overflow-hidden group",
            isLeft ? "md:pl-16" : "md:pr-16"
          )}
        >
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[4s]"
            />
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-1000" />
            {/* Gold vignette edge */}
            <div className="absolute inset-0 border border-mustard/10 rounded-[2.5rem]" />
            {/* Year watermark */}
            <div className="absolute bottom-6 right-8 text-[5rem] font-serif font-black text-white/[0.06] leading-none select-none pointer-events-none">{year}</div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

function WordWithStroke({ children, italic }: { children: React.ReactNode; italic?: boolean }) {
  return (
    <span className={cn("relative inline-block px-1", italic && "italic")}>
      <span className="relative z-10">{children}</span>
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8 }}
        viewBox="0 0 100 20"
        className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-4 md:h-6 text-[#1A1A1A]/10 fill-none stroke-current stroke-[4] pointer-events-none"
      >
        <path d="M5,15 Q50,8 95,15" strokeLinecap="round" />
      </motion.svg>
    </span>
  );
}
