import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const ContactBriefForm = () => {
  return (
    <Section className="bg-mustard mb-0">
       <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             {/* Left Content */}
             <div className="text-forest space-y-10 animate-fade-in">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-forest/50">Hire Talent</span>
                  <h2 className="text-5xl md:text-7xl font-serif leading-[1.05] max-w-xl italic">Send Us Your Brief</h2>
                </div>
                <p className="text-xl md:text-2xl font-light max-w-lg leading-relaxed border-l-[3px] border-forest/80 pl-10 py-2">
                  The first step toward building an exceptional team begins with a single conversation. Provide details on your requirements, and our team will get in touch with you shortly.
                </p>
                <div className="pt-12 flex flex-col gap-4 text-forest/70 uppercase tracking-widest text-[10px] font-bold">
                   <p>© VNEXORA Hospitality Recruitment Solutions</p>
                   <p className="flex items-center gap-4">
                     <span className="w-1.5 h-1.5 rounded-full bg-forest/30" />
                     Global Presence: London | Dubai | New York
                   </p>
                </div>
             </div>
             
             {/* Form Card */}
             <div className="bg-forest p-10 md:p-16 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] animate-fade-in relative overflow-hidden group" style={{ animationDelay: '0.2s' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-mustard/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-mustard/10 transition-colors duration-700" />
                
                <form className="space-y-8 relative z-10">
                   <div className="grid gap-8 md:grid-cols-2">
                     <div className="space-y-3">
                       <label className="text-[10px] uppercase tracking-widest text-mustard font-black">Your Name</label>
                       <input 
                         type="text" 
                         className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-white/20 focus:outline-none focus:border-mustard transition-colors font-light" 
                         placeholder="Full Name" 
                       />
                     </div>
                     <div className="space-y-3">
                       <label className="text-[10px] uppercase tracking-widest text-mustard font-black">Your Email</label>
                       <input 
                         type="email" 
                         className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-white/20 focus:outline-none focus:border-mustard transition-colors font-light" 
                         placeholder="email@address.com" 
                       />
                     </div>
                   </div>
                   
                   <div className="grid gap-8 md:grid-cols-2">
                     <div className="space-y-3">
                       <label className="text-[10px] uppercase tracking-widest text-mustard font-black">Contact Number</label>
                       <input 
                         type="tel" 
                         className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-white/20 focus:outline-none focus:border-mustard transition-colors font-light" 
                         placeholder="+1 (000) 000-0000" 
                       />
                     </div>
                     <div className="space-y-3">
                       <label className="text-[10px] uppercase tracking-widest text-mustard font-black">Recruitment Type</label>
                       <select className="w-full bg-transparent border-b border-white/10 pb-[13px] text-white focus:outline-none focus:border-mustard transition-colors appearance-none cursor-pointer font-light">
                         <option className="bg-forest">Luxury Hospitality Staffing</option>
                         <option className="bg-forest">Private Household Recruitment</option>
                         <option className="bg-forest">Corporate & Executive</option>
                         <option className="bg-forest">Seasonal & Retreat Staffing</option>
                       </select>
                     </div>
                   </div>
                   
                   <div className="space-y-3">
                     <label className="text-[10px] uppercase tracking-widest text-mustard font-black">Project Brief / Message</label>
                     <textarea 
                       rows={4} 
                       className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-white/20 focus:outline-none focus:border-mustard transition-colors resize-none font-light leading-relaxed" 
                       placeholder="Please tell us about your specific staffing requirements..." 
                     />
                   </div>
                   
                   <div className="pt-4">
                     <Button className="w-full h-20 bg-mustard hover:bg-white text-forest font-black tracking-[0.3em] rounded-none transition-all duration-700 uppercase shadow-[0_15px_30px_rgba(207,160,82,0.2)]">
                       SUBMIT ENQUIRY
                     </Button>
                   </div>
                </form>
             </div>
          </div>
       </div>
    </Section>
  );
};
