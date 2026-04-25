"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { TrendingDown, ShieldAlert, Target, Globe, Lightbulb, Users2, LineChart } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

import { Counter } from "@/components/ui/Counter";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.23, 1, 0.32, 1] }
};

const problems = [
  {
    icon: <Target className="w-6 h-6 text-[#A67C52]" />,
    title: "Revenue Left on the Table",
    desc: "Pricing gaps, weak channel strategy, and unmapped demand pockets quietly drain 20–40% of your revenue potential every quarter.",
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-[#A67C52]" />,
    title: "Operational Margin Leak",
    desc: "Labour inefficiencies, vendor misalignment, and outdated SOP frameworks turn profit centres into cost black holes.",
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-[#A67C52]" />,
    title: "Asset Underperformance",
    desc: "Without active asset management, your property drifts below its true market positioning — eroding brand equity and investor confidence.",
  },
];

export const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <Section
      ref={sectionRef}
      id="problem"
      spacing="none"
      className="relative min-h-[110vh] flex flex-col justify-between bg-white overflow-hidden pt-32 md:pt-48 pb-0"
    >
      {/* Ambient orb */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#5B0F2D]/8 blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-white/10 pointer-events-none z-0"
      />

      <div className="container mx-auto px-[5px] max-w-7xl relative z-10 flex-grow flex flex-col justify-center">
        <div className="w-full">
          {/* Hero statement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-32">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              {/* Label */}
              <p className="text-[10px] font-sans font-bold text-[#A67C52] tracking-[0.4em] uppercase mb-6">
                The Revenue Gap
              </p>
              <h2 className="text-4xl md:text-6xl font-serif text-[#5B0F2D] tracking-tight leading-[1.1] mb-8">
                Many Hotels Are<br />
                <span className="text-[#5B0F2D]/55 italic font-light">Operating Below<br />20–40%</span><br />
                Of Their True Potential.
              </h2>
              <p className="text-lg md:text-xl text-[#5B0F2D]/70 leading-relaxed font-light max-w-lg">
                Whether you operate a luxury resort, city hotel, boutique stay, or mid-scale property, the gap between current performance and true earning potential is often hospitality’s costliest hidden challenge. Poor pricing, weak distribution, missed upselling, OTA dependence, and slow demand response quietly reduce profits every day.
              </p>

              {/* Stat strip */}
              <div className="grid grid-cols-2 gap-y-12 max-w-lg mt-10">
                {[
                  { start: 20, end: 40, suffix: "%", label: "Revenue Potential Lost", icon: "/images/sections/problem-stats/revenue-lost.png" },
                  { start: 15, end: 25, suffix: "%", label: "Lower Room Rates", icon: "/images/sections/problem-stats/lower-rates.png" },
                  { start: 10, end: 30, suffix: "%", label: "Missed Occupancy", icon: "/images/sections/problem-stats/missed-occupancy.png" },
                  { end: 50, prefix: "Up to ", suffix: "%", label: "OTA Dependence", icon: "/images/sections/problem-stats/ota-dependence.png" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center space-x-6">
                    <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0">
                      <Image 
                        src={stat.icon} 
                        alt={stat.label} 
                        fill 
                        className="object-contain brightness-110 drop-shadow-2xl scale-110"
                      />
                    </div>
                    <div className={`pr-8 lg:pr-12 ${i % 2 === 0 ? 'border-r border-stone-200' : ''}`}>
                      <div className="text-xl md:text-2xl font-serif text-[#5B0F2D] mb-1 italic">
                        {stat.start !== undefined ? (
                          <>
                            <Counter value={stat.start} delay={i * 0.1} />
                            <span>–</span>
                            <Counter value={stat.end} suffix={stat.suffix} delay={i * 0.1 + 0.2} />
                          </>
                        ) : (
                          <Counter value={stat.end} prefix={stat.prefix} suffix={stat.suffix} delay={i * 0.1} />
                        )}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
              style={{ perspective: 1000 }}
            >
              <div className="relative p-6 rounded-3xl border border-white/40 bg-white/30 backdrop-blur-3xl shadow-2xl overflow-hidden group">
                <img
                  src="/images/leakage.png"
                  alt="Revenue Leakage"
                  className="w-full h-auto grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000 rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#5B0F2D]/5 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -inset-4 bg-[#5B0F2D]/5 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>

          {/* Solution Heading (More Than a Hotel Partner. A Growth Partner.) */}
          <div className="mt-32 mb-20 text-left">
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-[#5B0F2D] mb-8 leading-tight tracking-tight max-w-4xl">
              More Than A Hotel Partner.<br />
              <span className="text-[#A67C52]">A Growth Partner.</span>
            </h2>
            <p className="text-[#5B0F2D]/70 text-lg md:text-xl font-normal leading-relaxed max-w-4xl">
              With deep hospitality expertise across boutique resorts, independent hotels, and global brands, we deliver tailored revenue strategies, market positioning, demand generation, and concept development that increase direct bookings, strengthen profitability, and create memorable guest experiences.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              {
                title: "Growth Solutions For Your Hotel Brand",
                description: (
                  <ul className="text-left list-disc list-inside space-y-2">
                    <li>Increase direct bookings.</li>
                    <li>Improve OTA performance.</li>
                    <li>Maximize ADR and RevPAR.</li>
                    <li>Grow profits with smarter strategies.</li>
                  </ul>
                ),
                icon: <Globe className="w-10 h-10 text-white/90" />,
                bgColor: "bg-[#050505]",
                textColor: "text-white",
                descColor: "text-white/80"
              },
              {
                title: "Concept Creation For Unique Market Positioning",
                description: (
                  <ul className="text-left list-disc list-inside space-y-2">
                    <li>Build standout hotel concepts.</li>
                    <li>Create memorable guest experiences.</li>
                    <li>Develop unique revenue ideas.</li>
                    <li>Strengthen brand identity and appeal.</li>
                  </ul>
                ),
                icon: <Lightbulb className="w-10 h-10 text-white/90" />,
                bgColor: "bg-[#5B0F2D]",
                textColor: "text-white",
                descColor: "text-white/80"
              },
              {
                title: "Trusted Partnerships That Drive Long-Term Growth",
                description: (
                  <ul className="text-left list-disc list-inside space-y-2">
                    <li>Work closely with hotel owners.</li>
                    <li>Deliver continuous revenue optimization.</li>
                    <li>Strengthen brand visibility.</li>
                    <li>Enhance guest engagement.</li>
                  </ul>
                ),
                icon: <Users2 className="w-10 h-10 text-white/90" />,
                bgColor: "bg-[#5B0F2D]",
                textColor: "text-white",
                descColor: "text-white/80"
              },
              {
                title: "Expert Insights & Support When You Need It",
                description: (
                  <ul className="text-left list-disc list-inside space-y-2">
                    <li>Combine AI with hotel expertise.</li>
                    <li>Guide data-driven strategies.</li>
                    <li>Improve margins and efficiency.</li>
                    <li>Deliver faster business outcomes.</li>
                  </ul>
                ),
                icon: <Image src="/images/sections/iconk4.png" alt="Expert Insights" width={140} height={140} className="object-contain" />,
                bgColor: "bg-[#050505]",
                bgImage: "/images/sections/cardbg4.jpeg",
                bgOpacity: "opacity-70",
                isImageItem: true,
                textColor: "text-white",
                descColor: "text-white/80"
              }
            ].map((item: any, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  y: -16, 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col items-center text-center p-10 md:p-12 ${item.bgColor} rounded-[4rem] min-h-[500px] overflow-hidden shadow-2xl hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/20 transition-all duration-500 group cursor-pointer`}
              >
                {item.bgImage && (
                  <>
                    <Image src={item.bgImage} alt={item.title} fill className={`object-cover ${item.bgOpacity || "opacity-30"} transition-transform duration-700 group-hover:scale-110`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </>
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                    className={`mb-10 ${item.isImageItem ? '' : 'p-6 rounded-3xl bg-white/5 group-hover:bg-white/10'} transition-colors duration-500`}
                  >
                    <div className="transition-transform duration-700 group-hover:scale-110">
                      {item.icon}
                    </div>
                  </motion.div>
                <h3 className={`text-xl md:text-2xl font-bold ${item.textColor || "text-[#1A1A1A]"} mb-8 leading-tight px-4`}>
                  {item.title}
                </h3>
                <div className={`${item.descColor || "text-[#4A5568]"} text-sm md:text-base font-light leading-relaxed`}>
                  {item.description}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing statement strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="w-full group overflow-visible mt-24"
      >
        <div className="relative w-screen left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3A071B] via-[#5B0F2D] to-[#3A071B] py-14 md:py-16 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] border-y border-white/20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif italic text-[#F8F6F2] leading-tight text-[clamp(24px,2.5vw,40px)] tracking-[-0.5px]"
            >
              {["The", "most", "expensive", "revenue", "is", "the", "one", "you", "never", "capture."].map((word, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.3em]">
                  {word.split("").map((char, cIdx) => (
                    <motion.span
                      key={cIdx}
                      variants={{
                        hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                      }}
                      transition={{ duration: 0.7, delay: wIdx * 0.08 + cIdx * 0.02, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.p>
            <p className="text-white/50 text-[11px] uppercase tracking-[0.3em] font-bold mt-6">— Vnexora Revenue Intelligence</p>
          </div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </motion.div>
    </Section>
  );
};
