"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Instagram, Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  color: string;
  bio: string;
  linkedin?: string;
}

const team: TeamMember[] = [
  {
    id: 3,
    name: "Shachi Mishra",
    role: "Co-Founder & CMO",
    image: "/images/team/shachi-mishra.jpg",
    color: "bg-black/90",
    bio: "Driving marketing excellence and brand strategy for Vnexora's global presence.",
    linkedin: "https://www.linkedin.com/in/shachi-mishra-513051374/"
  },
  {
    id: 5,
    name: "Sonam Singh",
    role: "Director, Operations",
    image: "/images/team/sonam-singh.jpg",
    color: "bg-black/90",
    bio: "Overseeing daily operations and efficiency across the property portfolio.",
    linkedin: "https://www.linkedin.com/in/sonam-singh-21a856381/"
  },
  {
    id: 6,
    name: "Shyam Lal Singh",
    role: "Mentor & Advisor",
    image: "/images/team/shyam-lal-singh.jpg",
    color: "bg-black/90",
    bio: "Founder, Planner India. Providing strategic guidance and industry insights.",
    linkedin: "https://www.linkedin.com/in/shyam-lal-singh-260710161"
  },
  {
    id: 7,
    name: "Dr. Anil Agarwal",
    role: "Mentor",
    image: "/images/team/anil-agarwal.jpg",
    color: "bg-black/90",
    bio: "Ex HOD, Industrial Management, IIT BHU. Expert in management systems.",
    linkedin: "https://www.linkedin.com/in/anil-kumar-agrawal-3646248/"
  },
  {
    id: 9,
    name: "Deepak Mishra",
    role: "Community Mavens",
    image: "/images/team/deepak-mishra.jpg",
    color: "bg-black/90",
    bio: "Director, Panchayat Web Series. Connecting culture with hospitality.",
    linkedin: "https://www.linkedin.com/in/deepak-mishra-6b88318"
  },
  {
    id: 10,
    name: "Devesh Mishra",
    role: "Director Finance",
    image: "/images/team/devesh-mishra.jpg",
    color: "bg-black/90",
    bio: "Leading financial strategy and compliance for Vnexora Group.",
    linkedin: "https://www.linkedin.com/in/devesh-mishra-6a5ba125"
  },
  {
    id: 11,
    name: "Anshu Anand",
    role: "Sr. Business Advisor",
    image: "/images/team/anshu-anand.jpg",
    color: "bg-black/90",
    bio: "Strategic advisor for business expansion and market entry.",
    linkedin: "https://www.linkedin.com/in/anshuaanandofficial"
  },
  {
    id: 15,
    name: "Sneha Giri",
    role: "Legal Advisor",
    image: "/images/team/sneha-giri.jpg",
    color: "bg-black/90",
    bio: "Ensuring legal compliance and structural integrity.",
    linkedin: "https://www.linkedin.com/in/advocate-sneha-giri-95708b68"
  },
  {
    id: 2,
    name: "Akanscha Roy",
    role: "Co-Founder & CBO",
    image: "/images/team/akanscha-roy.jpg",
    color: "bg-black/90",
    bio: "Focusing on business growth and strategic brand partnerships to scale the Vnexora portfolio.",
    linkedin: "https://www.linkedin.com/in/akanscha-roy-61641121b/"
  },
  {
    id: 1,
    name: "Mr. Vineet Mishra",
    role: "Founder & CEO",
    image: "/images/team/vineet-mishra.jpg",
    color: "bg-black/90",
    bio: "IIT BHU Alumnus with 15+ years of experience in Hospitality & Real Estate. A visionary leader bridging global standards with local relevance.",
    linkedin: "https://www.linkedin.com/in/vineet-mishra-98151a6a/"
  },
  {
    id: 4,
    name: "Pooja Tripathi",
    role: "Co-Founder & COO",
    image: "/images/team/pooja-tripathi.jpg",
    color: "bg-black/90",
    bio: "Pioneering operational excellence and guest experience innovation across all managed properties.",
    linkedin: "https://www.linkedin.com/in/pooja-tripathi-80542490/"
  },
  {
    id: 12,
    name: "Shikha Mishra",
    role: "PR Manager",
    image: "/images/team/shikha-mishra.jpg",
    color: "bg-black/90",
    bio: "Managing public relations and brand communication."
    // No LinkedIn provided
  },
  {
    id: 13,
    name: "Gitanjali",
    role: "Social Media Expert",
    image: "/images/team/gitanjali.jpg",
    color: "bg-black/90",
    bio: "Crafting Vnexora's digital presence and community engagement.",
    linkedin: "https://www.linkedin.com/in/gitanjali-chauhan"
  },
  {
    id: 16,
    name: "Ankit Saini",
    role: "Tech & Web Expert",
    image: "/images/team/ankit-saini.jpg",
    color: "bg-black/90",
    bio: "Leading digital transformation and tech infrastructure.",
    linkedin: "https://www.linkedin.com/in/ankit-saini-462643a1"
  },
  {
    id: 17,
    name: "Monika Sharma",
    role: "Sr. Architect",
    image: "/images/team/monika-sharma.jpg",
    color: "bg-black/90",
    bio: "Expert in luxury hospitality architecture and design.",
    linkedin: "https://www.linkedin.com/in/monica-sharma-3b2ab135"
  },
  {
    id: 18,
    name: "Aparajita Ghosh",
    role: "Vastu Expert",
    image: "/images/team/aparajita-ghosh.jpg",
    color: "bg-black/90",
    bio: "Harmonizing spaces with traditional Vastu principles.",
    linkedin: "https://www.linkedin.com/in/aparajita-bose-she-her-151b551a6"
  },
  {
    id: 19,
    name: "Ankush Rai",
    role: "Architect & PM",
    image: "/images/team/ankush-rai.jpg",
    color: "bg-black/90",
    bio: "Managing architectural projects and technical execution.",
    linkedin: "https://www.linkedin.com/in/ankushrai1/"
  },
  {
    id: 20,
    name: "Namira",
    role: "Sales Manager",
    image: "/images/team/namira.jpg",
    color: "bg-black/90",
    bio: "Driving sales growth and corporate partnerships."
  },
  {
    id: 21,
    name: "Rakesh Singh",
    role: "Outlet Manager",
    image: "/images/team/rakesh-singh.jpg",
    color: "bg-black/90",
    bio: "Managing restaurant, bar, and lounge experiences.",
    linkedin: "https://www.linkedin.com/in/rakesh-singh-3072b9374/"
  },
  {
    id: 22,
    name: "Kesar",
    role: "Marketing Manager",
    image: "/images/team/kesar.jpg",
    color: "bg-black/90",
    bio: "Influencer relations and assistant marketing management.",
    linkedin: "https://www.linkedin.com/in/kesar-chaurasia-97703533b/"
  },
  {
    id: 23,
    name: "Ambalica",
    role: "Content Strategist",
    image: "/images/team/ambalica.jpg",
    color: "bg-black/90",
    bio: "Developing compelling narratives for the Vnexora brand."
  },
];

export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);
 
  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - (clientWidth * 0.6) : scrollLeft + (clientWidth * 0.6);
      containerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Ensure window starts at top
    window.scrollTo(0, 0);

    // Initial scroll to center immediately to avoid "slow feel"
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      container.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#0A0A0A] selection:bg-mustard selection:text-white pb-20">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-16 px-4 md:px-8 text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-black/30 text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">
              The Minds Behind
            </span>
            <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] uppercase tracking-tighter mb-8">
              Our <span className="italic">Elite</span> <br /> Leadership
            </h1>
            <div className="flex items-center justify-center gap-6">
               <div className="h-[1px] w-12 bg-black/10" />
               <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Vnexora Luxury Estate</p>
               <div className="h-[1px] w-12 bg-black/10" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-[#FAF9F6] group/carousel">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex overflow-x-auto gap-8 px-[10vw] md:px-[25vw] no-scrollbar snap-x snap-mandatory py-6"
        >
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} containerRef={containerRef} />
          ))}
        </motion.div>
 
        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-30">
          <button 
            onClick={() => scroll("left")}
            className="w-14 h-14 rounded-full bg-white/40 backdrop-blur-xl border border-black/5 flex items-center justify-center text-black shadow-xl pointer-events-auto transition-all duration-500 hover:bg-black hover:text-white hover:scale-110 group/nav"
            aria-label="Previous Member"
          >
            <ChevronLeft className="w-6 h-6 transition-transform duration-500 group-hover/nav:-translate-x-0.5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-14 h-14 rounded-full bg-white/40 backdrop-blur-xl border border-black/5 flex items-center justify-center text-black shadow-xl pointer-events-auto transition-all duration-500 hover:bg-black hover:text-white hover:scale-110 group/nav"
            aria-label="Next Member"
          >
            <ChevronRight className="w-6 h-6 transition-transform duration-500 group-hover/nav:translate-x-0.5" />
          </button>
        </div>
 
        {/* Floating Scroll Labels */}
        <div className="absolute left-12 bottom-12 pointer-events-none opacity-20 hidden md:block">
          <span className="text-[8px] font-bold tracking-[0.5em] uppercase block whitespace-nowrap">Explore the Collective</span>
        </div>
      </section>

      {/* Philosophy Section - Light */}
      <Section className="py-32 bg-white rounded-t-[4rem] shadow-2xl shadow-black/5 relative z-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-3xl md:text-5xl font-serif text-[#0A0A0A]/90 leading-tight italic mb-12">
              "We don't just manage assets; <br />
              we orchestrate <span className="text-black">legacies</span>."
            </p>
            <p className="text-[#0A0A0A]/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Our leadership team is a curated blend of IIT engineers, financial masters, and hospitality visionaries dedicated to redefining the luxury property management paradigm.
            </p>
            <div className="mt-16 w-16 h-[2px] bg-black/20 mx-auto" />
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

function TeamCard({ member, index, containerRef }: { member: TeamMember, index: number, containerRef: React.RefObject<HTMLDivElement | null> }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [centerX, setCenterX] = useState(0);

  useEffect(() => {
    const updateCenter = () => {
      if (cardRef.current && containerRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const center = (rect.left + rect.width / 2) - (containerRect.left + containerRect.width / 2);
        setCenterX(center);
      }
    };

    updateCenter();
    containerRef.current?.addEventListener('scroll', updateCenter, { passive: true });
    window.addEventListener('resize', updateCenter);
    
    // Quick initial check
    const initialCheck = requestAnimationFrame(updateCenter);

    return () => {
      containerRef.current?.removeEventListener('scroll', updateCenter);
      window.removeEventListener('resize', updateCenter);
      cancelAnimationFrame(initialCheck);
    };
  }, [containerRef]);

  // Snappy magnification logic
  const distance = Math.abs(centerX);
  const scale = Math.max(0.8, 1.12 - distance / 1200);
  const opacity = Math.max(0.7, 1 - distance / 2000);

  return (
    <motion.div 
      ref={cardRef}
      animate={{ scale, opacity }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex-shrink-0 w-[240px] md:w-[320px] snap-center py-10"
    >
      <div 
        className="relative aspect-[9/16] rounded-full overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] bg-white border border-[#0A0A0A]/5 group"
      >
        {/* Image - Full Color */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url('${member.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

        {/* Floating Socials */}
        <div className="absolute top-1/4 right-10 flex flex-col gap-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#0A66C2] transition-colors"
              aria-label={`${member.name} on LinkedIn`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          ) : (
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white/30 cursor-not-allowed">
              <Linkedin className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Bottom Badge - Monochrome */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <motion.div 
            className={`rounded-[2.5rem] p-6 md:p-8 text-white ${member.color} backdrop-blur-xl shadow-2xl`}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <h3 className="text-xl md:text-2xl font-serif mb-1 tracking-tight">{member.name}</h3>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60 mb-3">{member.role}</p>
            <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out">
              <p className="text-xs font-light leading-relaxed text-white/70 border-t border-white/10 pt-3">
                {member.bio}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
