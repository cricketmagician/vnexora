"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

type FormState = {
  role: string;
  build: string[];
  challenge: string[];
  timeline: string;
  budget: string;
  contactRole: string;
  fullName: string;
  email: string;
  phone: string;
  captcha: boolean;
};

export default function ITSolutionsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormState>({
    role: "",
    build: [],
    challenge: [],
    timeline: "",
    budget: "",
    contactRole: "",
    fullName: "",
    email: "",
    phone: "",
    captcha: false
  });
  const [showError, setShowError] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 50;
        
        if (isAtEnd) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 450, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const QUESTIONS = [
    {
      id: 1,
      type: "radio",
      question: "Who are you?",
      key: "role",
      options: [
        "Pre-Revenue or Early Stage Founder / Owner",
        "Small to mid-sized business (10–250 employees)",
        "Mid-market company (250–1,000 employees)",
        "Enterprise organization (1,000+ employees)",
        "Government / Public Sector",
        "Agency / Consultancy / Nonprofit"
      ]
    },
    {
      id: 2,
      type: "checkbox",
      question: "What Are You Looking to Build?",
      key: "build",
      options: [
        "AI strategy, automation, or AI-enabled tools",
        "Custom enterprise software or internal systems",
        "Modernization of existing or legacy systems",
        "System integrations (ERP, CRM, data, APIs)",
        "Customer-facing web or mobile applications",
        "Staff augmentation"
      ]
    },
    {
      id: 3,
      type: "checkbox",
      question: "What challenge are you trying to solve?",
      key: "challenge",
      options: [
        "I need a clear technical plan and realistic cost estimate",
        "We need an experienced team to design and build a system",
        "We need to modernize or scale existing software",
        "We have systems that don't talk to each other",
        "We lack internal technical leadership or capacity",
        "We know something needs to change but don't know where to start"
      ]
    },
    {
      id: 4,
      type: "radio",
      question: "What's your timeline?",
      key: "timeline",
      options: [
        "ASAP (Less than 3 months)",
        "3-6 months",
        "6-9 months",
        "9+ months"
      ]
    },
    {
      id: 5,
      type: "radio",
      question: "What's your budget?",
      key: "budget",
      options: [
        "< ₹10 Lakhs",
        "₹10 Lakhs - ₹50 Lakhs",
        "₹50 Lakhs - ₹1 Crore",
        "₹1 Crore+"
      ]
    },
    {
      id: 6,
      type: "contact",
      question: "What best describes your role?",
      key: "contactRole",
      options: [
        "Owner / Founder",
        "Executive (CEO, COO, CTO, CIO)",
        "Technical leader / architect",
        "Project or product manager",
        "Researching on behalf of a team"
      ]
    }
  ];

  const SECTORS = [
    {
      title: "Retail & E-commerce",
      img: "/images/sections/sector-ecommerce.png",
      description: "High-conversion shopping experiences built for global scalability."
    },
    {
      title: "Healthcare Tech",
      img: "/images/sections/sector-healthcare.png",
      description: "Secure, patient-first platforms for modern diagnostics and care."
    },
    {
      title: "Real Estate",
      img: "/images/sections/sector-real-estate.png",
      description: "Immersive property listing and management ecosystems."
    },
    {
      title: "Hospitality & Travel",
      img: "/images/sections/sector-hospitality.png",
      description: "Cinematic booking engines and guest-centric digital interfaces."
    },
    {
      title: "Education & E-learning",
      img: "/images/sections/sector-education.png",
      description: "Scalable knowledge platforms designed for the future of learning."
    }
  ];

  const handleNext = () => {
    const currentQ = QUESTIONS[currentStep - 1];
    
    if (currentQ.type === "radio") {
      if (formData[currentQ.key as keyof FormState] === "") {
        setShowError(true);
        return;
      }
    } else if (currentQ.type === "checkbox") {
      if ((formData[currentQ.key as keyof FormState] as string[]).length === 0) {
        setShowError(true);
        return;
      }
    } else if (currentQ.type === "contact") {
      if (!formData.contactRole || !formData.fullName || !formData.email || !formData.captcha) {
        setShowError(true);
        return;
      }
    }

    setShowError(false);
    if (currentStep < QUESTIONS.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      alert("Form submitted! We will contact you shortly.\nData: " + JSON.stringify(formData));
    }
  };

  const handleToggleCheckbox = (key: keyof FormState, option: string) => {
    setFormData(prev => {
      const arr = prev[key] as string[];
      if (arr.includes(option)) {
        return { ...prev, [key]: arr.filter(item => item !== option) };
      } else {
        return { ...prev, [key]: [...arr, option] };
      }
    });
    setShowError(false);
  };

  return (
    <main className="flex flex-col min-h-screen bg-white text-[#5B0F2D] overflow-hidden">
      
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
          <div className="w-16 h-16 rounded-full bg-[#5B0F2D] flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
            <MessageSquare size={24} />
          </div>
        </div>

        {/* Left Aligned Cinematic Typography */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-6xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[75px] font-black text-[#5B0F2D] tracking-tighter leading-[1.05] mb-8">
              Digital Assets That <br className="hidden md:block" />
              <span className="text-[#3b82f6]">Generate Growth.</span> <br className="hidden md:block" />
              Powering the Future of Business.
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 font-light tracking-wide max-w-5xl leading-relaxed">
              We build revenue-driven AI, web, app, and smart automation solutions for hospitality, hotels, retail, real estate, healthcare, education, and modern enterprises—transforming businesses into high-performance growth engines.
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#5B0F2D] tracking-tight leading-tight">
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
                <Link href="#solutions" className="inline-block bg-[#5B0F2D] text-white hover:bg-[#1b4ed8] px-10 py-4 rounded-full text-sm font-semibold transition-all">
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
                src="/images/sections/tech-intro.png"
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
                  className="bg-white border-2 border-[#5B0F2D] rounded-2xl p-10 hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center text-[#5B0F2D] mb-8">
                    <Icon size={48} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#5B0F2D] mb-4 tracking-tight">{value.title}</h3>
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
              Ready to <span className="text-[#5B0F2D] font-bold">Find The Right IT Solution</span> For You?
            </h2>
            <p className="text-slate-600 text-lg font-light mb-10">
              Our team works closely with you to identify challenges, unlock opportunities, and implement the most effective technologies.
            </p>
            <Link href="/contact" className="inline-block bg-[#5B0F2D] text-white hover:bg-[#1b4ed8] px-10 py-4 rounded-full text-sm font-semibold transition-colors">
              Schedule a Free Consultation
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Services",
                desc: "We help you apply AI in practical ways to gain insights, streamline operations, and support better decision-making.",
                img: "/images/sections/bento-ai.png"
              },
              {
                title: "Custom Software Solutions",
                desc: "We write custom software to modernize existing systems and support your critical business functions with precision.",
                img: "/images/sections/bento-software.png"
              },
              {
                title: "API Integration",
                desc: "We can integrate your off-the-shelf software effortlessly, utilizing rigorous API configurations into your custom internal software.",
                img: "/images/sections/bento-api.png"
              },
              {
                title: "Web App Development",
                desc: "Our team of expert developers creates high-performance, scalable, and rigidly secure architectural web platforms.",
                img: "/images/sections/bento-webapp.png",
                link: "/services/web-app-ai-tech-support"
              },
              {
                title: "Mobile Application",
                desc: "Our team of developers can create, design, and rebuild any functional application to actively attract massive customer segments.",
                img: "/images/sections/bento-mobileapp.png"
              },
              {
                title: "IT Staffing",
                desc: "We work with businesses of all sizes to provide customized staffing solutions that meet their specific technological resourcing needs.",
                img: "/images/sections/bento-staffing.png"
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
                <Image 
                  src={box.img} 
                  alt={box.title} 
                  fill 
                  unoptimized
                  className="object-cover transition-all duration-700 blur-[2px] group-hover:blur-0 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#5B0F2D]/60 group-hover:bg-[#5B0F2D]/20 transition-colors duration-500" />
                <div className="absolute inset-x-8 bottom-8 flex flex-col items-start text-white">
                  <h3 className="text-3xl font-bold tracking-tight mb-4">{box.title}</h3>
                  <p className="font-light leading-relaxed mb-8 h-24 overflow-hidden overflow-ellipsis text-sm">{box.desc}</p>
                  <Link 
                    href={box.link || "#solutions"} 
                    className="flex items-center gap-2 border border-white hover:bg-white hover:text-[#5B0F2D] px-8 py-3 rounded-full text-sm font-semibold transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTOR-SPECIFIC INNOVATIONS (SLIDER) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black text-[#5B0F2D] tracking-tighter leading-[0.9] mb-6">
                EXPERIENCE SECTOR-SPECIFIC <br className="hidden lg:block" />
                <span className="text-[#1b4ed8]">INNOVATIONS.</span>
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl leading-relaxed">
                Transforming business efficiency with specialized software solutions tailored for your industry's unique challenges.
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('sector-slider');
                  el?.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-[#5B0F2D] hover:bg-[#5B0F2D] hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('sector-slider');
                  el?.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-[#5B0F2D] hover:bg-[#5B0F2D] hover:text-white transition-all shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            id="sector-slider"
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SECTORS.map((sector, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] aspect-[4/5] relative rounded-3xl overflow-hidden group snap-center shadow-xl flex-shrink-0"
              >
                <Image 
                  src={sector.img}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B0F2D]/90 via-[#5B0F2D]/40 to-transparent flex flex-col justify-end p-8 lg:p-10" style={{ pointerEvents: 'none' }}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{sector.title}</h3>
                  <p className="text-white/70 font-light text-sm md:text-base leading-relaxed max-w-sm">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TOP TIER DELIVERY SPLIT */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B0F2D] tracking-tight leading-tight">
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
                <Link href="/partner-with-us" className="inline-block bg-[#5B0F2D] text-white hover:bg-[#1b4ed8] px-10 py-4 rounded-full text-sm font-semibold transition-colors">
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
                src="/images/sections/tech-delivery.png"
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
        <div className="container mx-auto px-6 max-w-4xl text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-[#5B0F2D] tracking-tighter mb-4 uppercase">
            Accelerate Growth. <br className="md:hidden" /> Dominate Markets.
          </h2>
          <h3 className="text-2xl md:text-4xl font-light text-[#5B0F2D] tracking-tight mb-8">
            Book Your Free Consultation.
          </h3>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Fill out the form below, and we'll help you overcome roadblocks and launch smarter.
          </p>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Left: Professional Visual */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl group min-h-[600px]"
            >
              <Image 
                src="/images/sections/consultant.png"
                alt="Professional Consultant"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5B0F2D]/60 to-transparent flex flex-col justify-end p-10">
                <p className="text-white text-xl font-bold tracking-tight mb-2">Expert Consultations</p>
                <p className="text-white/80 font-light leading-relaxed max-w-sm text-sm">
                  Strategic growth isn't just about code—it's about the precision and wisdom behind it. Our team is ready to guide your technical roadmap.
                </p>
              </div>
            </motion.div>

            {/* Right: Interactive Form */}
            <div className="bg-white border border-[#5B0F2D] overflow-hidden text-left shadow-2xl w-full flex flex-col h-full">
            
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-12 pb-6"
                >
                  {(() => {
                    const q = QUESTIONS[currentStep - 1];
                    const isContactStep = q.type === "contact";

                    return (
                      <>
                        <h3 className="text-base font-bold text-[#5B0F2D] mb-6 tracking-tight">
                          {q.question} <span className="text-[#5B0F2D] font-bold ml-1">*</span>
                        </h3>
                        
                        <div className="flex flex-col gap-3">
                          {q.options.map((option, idx) => {
                            const isCheckbox = q.type === "checkbox";
                            const isSelected = isCheckbox 
                              ? (formData[q.key as keyof FormState] as string[]).includes(option)
                              : formData[q.key as keyof FormState] === option;

                            return (
                              <label 
                                key={idx} 
                                className={`flex items-center gap-3 border rounded-full px-5 py-3 cursor-pointer transition-colors
                                  ${isSelected ? 'border-[#5B0F2D] bg-slate-50' : 'border-[#5B0F2D]/40 hover:bg-slate-50'}
                                `}
                              >
                                <div className={`flex items-center justify-center shrink-0
                                  ${isCheckbox ? 'w-4 h-4 rounded-sm border' : 'w-4 h-4 rounded-full border'}
                                  ${isSelected ? 'border-[#5B0F2D] bg-[#5B0F2D]' : 'border-slate-400 bg-white'}
                                `}>
                                  {isCheckbox && isSelected && <Check size={12} className="text-white" strokeWidth={3} />}
                                  {!isCheckbox && isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <input 
                                  type={isCheckbox ? "checkbox" : "radio"} 
                                  name={q.key} 
                                  value={option}
                                  checked={isSelected}
                                  onChange={() => {
                                    if (isCheckbox) {
                                      handleToggleCheckbox(q.key as keyof FormState, option);
                                    } else {
                                      setFormData(prev => ({ ...prev, [q.key]: option }));
                                      setShowError(false);
                                    }
                                  }}
                                  className="sr-only"
                                />
                                <span className="text-sm text-[#5B0F2D] font-medium leading-tight">{option}</span>
                              </label>
                            );
                          })}
                        </div>

                        {isContactStep && (
                          <div className="mt-8 space-y-4">
                            <div>
                              <label className="block text-sm font-bold text-[#5B0F2D] mb-1">Full Name *</label>
                              <input 
                                type="text"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                className="w-full border border-[#5B0F2D]/40 rounded-md px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:border-[#5B0F2D] transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-[#5B0F2D] mb-1">Email *</label>
                              <div className="relative">
                                <input 
                                  type="email"
                                  placeholder="Email"
                                  value={formData.email}
                                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                  className="w-full border border-[#5B0F2D]/40 rounded-md px-4 py-3 pl-10 placeholder:text-slate-400 focus:outline-none focus:border-[#5B0F2D] transition-colors"
                                />
                                <MessageSquare size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B0F2D]" />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-[#5B0F2D] mb-1">Phone</label>
                              <input 
                                type="tel"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                className="w-full border border-[#5B0F2D]/40 rounded-md px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:border-[#5B0F2D] transition-colors"
                              />
                            </div>

                            {/* Mock Captcha */}
                            <div className="mt-8">
                              <label className="block text-sm font-bold text-[#5B0F2D] mb-2 text-left">Captcha</label>
                              <div className="border border-slate-200 bg-slate-50 p-4 rounded-md flex items-center justify-between">
                                <label className="flex items-center gap-3 cursor-pointer">
                                  <input 
                                    type="checkbox"
                                    checked={formData.captcha}
                                    onChange={(e) => setFormData(prev => ({ ...prev, captcha: e.target.checked }))}
                                    className="w-6 h-6 border-slate-300 rounded focus:ring-0 focus:ring-offset-0 accent-[#5B0F2D]"
                                  />
                                  <span className="text-sm font-medium text-slate-700">I'm not a robot</span>
                                </label>
                                <div className="text-right">
                                   <div className="w-8 h-8 rounded-full border-2 border-dashed border-slate-300 animate-spin-slow hidden" />
                                   <Image 
                                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                                      alt="reCAPTCHA" 
                                      width={24} 
                                      height={24} 
                                      className="opacity-50 grayscale"
                                   />
                                   <p className="text-[10px] text-slate-400 mt-1 uppercase">reCAPTCHA</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {showError && (
                          <p className="text-[#d32f2f] text-sm font-semibold mt-6">
                            {isContactStep ? "All required fields must be filled" : `${q.question} is required`}
                          </p>
                        )}
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Nav */}
            <div className="border-t border-[#5B0F2D]/20 p-5 px-8 flex justify-between bg-white items-center">
              <div>
                {currentStep > 1 && (
                  <button 
                    onClick={() => { setCurrentStep(prev => prev - 1); setShowError(false); }}
                    className="text-slate-500 font-semibold text-sm hover:text-[#5B0F2D] transition-colors"
                  >
                    BACK
                  </button>
                )}
              </div>
              <button 
                onClick={handleNext}
                className="flex items-center gap-1 text-[#5B0F2D] font-bold text-sm tracking-wide group"
              >
                {currentStep === QUESTIONS.length ? 'SUBMIT' : 'NEXT'} <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    </main>
  );
}
