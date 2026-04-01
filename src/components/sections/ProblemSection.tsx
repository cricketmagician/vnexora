"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { TrendingDown, ShieldAlert, Target } from "lucide-react";
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

      <div className="container relative z-10 px-4 flex-grow flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          {/* Hero statement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-32">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              {/* Label */}
              <p className="text-[10px] font-sans font-bold text-[#A67C52] tracking-[0.4em] uppercase mb-6">
                The Revenue Gap
              </p>
              <h2 className="text-4xl md:text-6xl font-serif text-[#2F4F3E] tracking-tight leading-[1.1] mb-8">
                Most hotels are<br />
                <span className="text-[#2F4F3E]/55 italic font-light">silently losing<br />20–40%</span><br />
                of their revenue.
              </h2>
              <p className="text-lg md:text-xl text-[#2F4F3E]/70 leading-relaxed font-light max-w-lg">
                Whether you operate a luxury resort, a city business hotel, or a mid-scale property — the gap between what your asset earns and what it <em>could</em> earn is the most expensive problem in hospitality.
              </p>

              {/* Stat strip */}
              <div className="mt-10 flex gap-8">
                {[
                  { val: "₹40L+", label: "avg monthly revenue gap" },
                  { val: "18+", label: "years fixing it" },
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

          {/* Problem tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-[1400px] mx-auto px-0 md:px-4">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full"
              >
                <div className="relative p-10 md:p-12 h-full rounded-[20px] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-[18px] border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2 flex flex-col items-start">
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />

                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-[#A67C52]/12 border border-[#A67C52]/25 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:scale-[1.08]">
                    {item.icon}
                  </div>

                  <h3 className="text-[22px] font-serif text-[#2F4F3E] mb-4 tracking-[-0.5px] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[#2F4F3E]/70 leading-[1.75] font-normal text-[15px]">
                    {item.desc}
                  </p>

                  <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none" />
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
