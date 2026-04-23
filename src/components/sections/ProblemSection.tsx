"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { TrendingDown, ShieldAlert, Target, Globe, Lightbulb, Users2, LineChart } from "lucide-react";
import { useRef } from "react";

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
      className="relative min-h-[110vh] flex flex-col justify-between bg-gradient-to-b from-[#E8DCCB] via-[#E3D6C3] to-[#DDD0BB] overflow-hidden pt-32 md:pt-48 pb-0"
    >
      {/* Ambient orb */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#2F4F3E]/8 blur-[140px] rounded-full pointer-events-none" />

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
              <h2 className="text-4xl md:text-6xl font-serif text-[#2F4F3E] tracking-tight leading-[1.1] mb-8">
                Most Hotels Are<br />
                <span className="text-[#2F4F3E]/55 italic font-light">Silently Losing<br />20–40%</span><br />
                Of Their Revenue.
              </h2>
              <p className="text-lg md:text-xl text-[#2F4F3E]/70 leading-relaxed font-light max-w-lg">
                Whether you operate a luxury resort, a city business hotel, or a mid-scale property — the gap between what your asset earns and what it <em>could</em> earn is the most expensive problem in hospitality.
              </p>

              {/* Stat strip */}
              <div className="mt-10 flex gap-8">
                {[
                  { val: "₹40L+", label: "Avg Monthly Revenue Gap" },
                  { val: "18+", label: "Years Fixing It" },
                ].map((s) => (
                  <div key={s.label} className="border-l-2 border-[#A67C52]/40 pl-4">
                    <p className="text-3xl font-serif text-[#2F4F3E] font-light">{s.val}</p>
                    <p className="text-[10px] text-[#2F4F3E]/60 uppercase tracking-[0.2em] font-bold mt-1">{s.label}</p>
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
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2F4F3E]/5 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -inset-4 bg-[#2F4F3E]/5 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>

          {/* Solution Heading (More Than a Hotel Partner. A Growth Partner.) */}
          <div className="mt-32 mb-20 text-left">
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-[#2F4F3E] mb-8 leading-tight tracking-tight max-w-4xl">
              More Than A Hotel Partner.<br />
              <span className="text-[#A67C52]">A Growth Partner.</span>
            </h2>
            <p className="text-[#2F4F3E]/70 text-lg md:text-xl font-normal leading-relaxed max-w-4xl">
              With deep hospitality expertise across boutique resorts, independent hotels, and global brands, we deliver tailored revenue strategies, market positioning, demand generation, and concept development that increase direct bookings, strengthen profitability, and create memorable guest experiences.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              {
                title: "Growth Solutions for Your Hotel Brand",
                description: (
                  <ul className="text-left list-disc list-inside space-y-2">
                    <li>Increase direct bookings.</li>
                    <li>Improve OTA performance.</li>
                    <li>Unlock extra revenue streams.</li>
                    <li>Maximize ADR, RevPAR, and occupancy.</li>
                    <li>Grow profits with smarter strategies.</li>
                  </ul>
                ),
                icon: <Globe className="w-10 h-10 text-black/80" />,
                bgColor: "bg-[#D4E6F7]"
              },
              {
                title: "Concept Creation for Unique Market Positioning",
                description: (
                  <ul className="text-left list-disc list-inside space-y-2">
                    <li>Build standout hotel concepts.</li>
                    <li>Create memorable guest experiences.</li>
                    <li>Develop restaurant and rooftop revenue ideas.</li>
                    <li>Launch wellness and lifestyle offerings.</li>
                    <li>Strengthen brand identity and appeal.</li>
                    <li>Increase guest loyalty and repeat stays.</li>
                  </ul>
                ),
                icon: <Lightbulb className="w-10 h-10 text-black/80" />,
                bgColor: "bg-[#D4E6F7]"
              },
              {
                title: "Trusted Partnerships That Drive Long-Term Growth",
                description: (
                  <ul className="text-left list-disc list-inside space-y-2">
                    <li>Work closely with hotel owners and teams.</li>
                    <li>Deliver continuous revenue optimization strategies.</li>
                    <li>Strengthen brand visibility and demand generation.</li>
                    <li>Enhance guest engagement and satisfaction.</li>
                    <li>Build long-term growth roadmaps.</li>
                    <li>Protect brand identity while improving performance.</li>
                  </ul>
                ),
                icon: <Users2 className="w-10 h-10 text-black/80" />,
                bgColor: "bg-[#D4E6F7]"
              },
              {
                title: "Expert Insights & Support When You Need It",
                description: (
                  <ul className="text-left list-disc list-inside space-y-2">
                    <li>Combine AI intelligence with real hotel expertise.</li>
                    <li>Guide decisions with data-driven strategies.</li>
                    <li>Improve margins and operational efficiency.</li>
                    <li>Strengthen guest engagement and loyalty.</li>
                    <li>Support growth at every stage.</li>
                    <li>Deliver smarter, faster business outcomes.</li>
                  </ul>
                ),
                icon: <LineChart className="w-10 h-10 text-black/80" />,
                bgColor: "bg-[#D4E6F7]"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col items-center text-center p-10 md:p-12 ${item.bgColor} rounded-[4rem] min-h-[500px] shadow-sm hover:shadow-md transition-shadow duration-300 group`}
              >
                <div className="mb-10 transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-8 leading-tight px-4">
                  {item.title}
                </h3>
                <p className="text-[#4A5568] text-sm md:text-base font-light leading-relaxed">
                  {item.description}
                </p>
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
        <div className="relative w-screen left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1F3D2B] via-[#2F4F3E] to-[#1F3D2B] py-14 md:py-16 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] border-y border-white/20 overflow-hidden">
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
