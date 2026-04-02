import { Section } from "@/components/ui/Section";

const services = [
  {
    title: "Hotel Strategic Partnering",
    description: "We act as an extension of your HR team, managing the end-to-end recruitment process for global hotel chains and boutique properties.",
    image: "/images/hr/service-hotel-partner.png"
  },
  {
    title: "Restaurant Talent Solutions",
    description: "From Michelin-starred fine dining to high-volume casual luxury, we source the culinary and service talent that defines your brand.",
    image: "/images/hr/service-restaurant.png"
  },
  {
    title: "Executive Search",
    description: "Sourcing the industry leaders—General Managers, Executive Chefs, and Directors—who drive operational excellence.",
    image: "/images/hr/service-executive.png"
  },
  {
    title: "Operations & Floor Staffing",
    description: "Providing vetted, high-performance floor and kitchen staff to ensure seamless service across all hospitality venues.",
    image: "/images/hr/service-operations.png"
  }
];

export const ServiceCards = () => {
  return (
    <Section className="bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
           {services.map((item, idx) => (
             <div 
               key={idx} 
               className="group flex flex-col items-center text-center space-y-8 animate-fade-in"
               style={{ animationDelay: `${idx * 0.15}s` }}
             >
                <div className="relative w-full aspect-square rounded-tl-[5rem] rounded-br-[5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-105 border border-forest/5">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                  <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="space-y-4 px-4">
                  <h3 className="text-2xl font-serif text-forest leading-tight group-hover:text-mustard transition-colors duration-300">{item.title}</h3>
                  <div className="w-8 h-0.5 bg-mustard mx-auto transition-all duration-500 group-hover:w-16" />
                  <p className="text-forest/60 text-sm leading-relaxed font-light">{item.description}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </Section>
  );
};
