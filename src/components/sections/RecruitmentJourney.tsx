import { Section } from "@/components/ui/Section";

const steps = [
  {
    id: "01",
    title: "Send Brief",
    description: "Provide the specific requirements and culture of your establishment to initiate our search.",
    image: "/images/hr/process-1.png"
  },
  {
    id: "02",
    title: "Book Consultation",
    description: "A deep-dive session to understand the nuances of the role and your brand ethos.",
    image: "/images/hr/process-2.png"
  },
  {
    id: "03",
    title: "Candidate Shortlist",
    description: "We present a curated selection of the industry's most exceptional talent for your review.",
    image: "/images/hr/process-3.png"
  },
  {
    id: "04",
    title: "Review CVs",
    description: "Deep-dive into the backgrounds and references of our top-tier hospitality candidates.",
    image: "/images/hr/sector-global.png"
  },
  {
    id: "05",
    title: "Interview & Trial",
    description: "Meet the finalists and conduct trials to ensure a seamless integration into your team.",
    image: "/images/hr/sector-finedining.png"
  },
  {
    id: "06",
    title: "The Job Offer",
    description: "Finalizing the placement and ensuring a successful onboarding for your new luxury hire.",
    image: "/images/hr/sector-boutique.png"
  }
];

export const RecruitmentJourney = () => {
  return (
    <Section className="bg-cream overflow-hidden py-32">
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-7xl font-serif text-forest italic leading-[1.1] animate-slide-up">The Recruitment Process</h2>
          <p className="text-mustard font-bold uppercase tracking-[0.5em] text-[10px] animate-fade-in" style={{ animationDelay: '0.2s' }}>by vnexora team</p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Automatic Slow Scroll Container */}
        <div className="flex overflow-x-auto gap-8 px-6 md:px-[8vw] pb-24 no-scrollbar snap-x snap-mandatory scroll-smooth relative">
          {/* Animated Wrapper for Slow Scroll Effect */}
          <div className="flex gap-8 animate-slow-scroll">
             {[...steps, ...steps].map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 w-[280px] md:w-[420px] aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl snap-center group/card transition-all duration-700 hover:scale-[1.02]"
                >
                  {/* Background Image */}
                  <img 
                    src={step.image} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" 
                    alt={step.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Content with Blur Effect at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 backdrop-blur-md bg-forest/40 border-t border-white/10 flex flex-col justify-end items-start space-y-4 md:translate-y-16 transition-transform duration-700 group-hover/card:translate-y-0">
                    <span className="text-mustard font-bold uppercase tracking-[0.3em] text-[10px]">
                      Step {step.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed md:opacity-0 transition-opacity duration-700 delay-100 group-hover/card:opacity-100">
                      {step.description}
                    </p>

                    {/* Decorative Accent */}
                    <div className="absolute bottom-0 left-0 h-1 bg-mustard transition-all duration-700 w-0 group-hover/card:w-full" />
                  </div>
                </div>
             ))}
          </div>
        </div>

        {/* Improved Instructions Footer */}
        <div className="container mx-auto px-4 flex justify-center mt-4">
           <div className="flex items-center gap-8 text-forest/30 uppercase tracking-[0.4em] text-[9px] font-black">
              <span>Swipe to Explore</span>
              <div className="w-24 h-[1px] bg-forest/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-mustard/40 -translate-x-full animate-progress-shimmer" />
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};
