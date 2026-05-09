"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  Briefcase, 
  User, 
  GraduationCap, 
  Cpu, 
  Star,
  FileText,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

const InputField = ({ label, value, onChange, placeholder, type = "text", required = false }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 block ml-1">
      {label} {required && <span className="text-mustard">*</span>}
    </label>
    <input 
      type={type}
      required={required}
      className="w-full bg-white border-b border-black/10 py-3 px-1 outline-none focus:border-mustard transition-colors text-sm font-bold tracking-widest uppercase placeholder:text-black/10"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

const SelectField = ({ label, options, value, onChange, required = false }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 block ml-1">
      {label} {required && <span className="text-mustard">*</span>}
    </label>
    <select 
      required={required}
      className="w-full bg-white border-b border-black/10 py-3 px-1 outline-none focus:border-mustard transition-colors text-sm font-bold tracking-widest uppercase cursor-pointer"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">SELECT OPTION</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const RadioGroup = ({ label, options, value, onChange, required = false }: any) => (
  <div className="space-y-4">
    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 block ml-1">
      {label} {required && <span className="text-mustard">*</span>}
    </label>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {options.map((opt: string) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "px-4 py-3 text-[10px] font-bold tracking-widest uppercase text-left border transition-all",
            value === opt ? "bg-black text-white border-black" : "bg-white text-black/60 border-black/10 hover:border-black/30"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export const JoinOurTeamForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Personal
    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    altMobile: "",
    email: "",
    city: "",
    state: "",
    country: "INDIA",
    address: "",

    // Step 2: Applying As & Dept
    applyingAs: "",
    department: "",

    // Step 3: Professional / Student / Mentor
    currentTitle: "",
    currentCompany: "",
    totalExp: "",
    hospExp: "",
    currentSalary: "",
    expectedSalary: "",
    noticePeriod: "",
    
    // For Students
    collegeName: "",
    course: "",
    yearSem: "",
    internDuration: "",
    studentSkills: "",

    // For Mentors
    domainExpertise: "",
    mentorExp: "",
    mentorCompanies: "",
    mentoringExpDetail: "",
    engagementMode: "",

    // Step 4: Skills & Documents
    keySkills: "",
    softwareTools: "",
    languages: "",
    certifications: "",
    leadership: "",
    salesTargets: "",
    linkedinUrl: "",

    // Step 5: Final
    availability: "",
    whyJoin: "",
    workMode: "",
    declaration: false
  });

  const [uploadedDocs, setUploadedDocs] = useState<Record<string, { name: string; content: string } | null>>({
    "Resume / CV": null,
    "ID Proof": null,
    "Certifications": null
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
    const file = e.target.files?.[0];
    console.log(`File upload change detected for ${label}:`, file?.name);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log(`File reader loaded for ${label}`);
        setUploadedDocs(prev => ({
          ...prev,
          [label]: { name: file.name, content: reader.result as string }
        }));
        toast.success(`${label} attached.`);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeDoc = (label: string) => {
    setUploadedDocs(prev => ({
      ...prev,
      [label]: null
    }));
  };

  const steps = [
    { id: 1, title: "Personal Details", icon: User },
    { id: 2, title: "Role & Interest", icon: Briefcase },
    { id: 3, title: "Background", icon: GraduationCap },
    { id: 4, title: "Skills & Profile", icon: Star },
    { id: 5, title: "Final Details", icon: Cpu }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 5) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!formData.declaration) {
      toast.error("Please confirm the declaration to proceed.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.mobile,
        subject: `Career Application: ${formData.department} (${formData.applyingAs})`,
        message: JSON.stringify(formData, null, 2),
        source: 'career_form'
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Application submitted successfully!");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
      {/* Left Branding Sidebar */}
      <div className="md:w-1/3 bg-[#0A0A0A] relative min-h-[300px] md:min-h-auto overflow-hidden">
        <img 
          src="/images/forms/career-sidebar.jpg" 
          alt="Vnexora Careers" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 z-10 space-y-4">
          <div className="w-12 h-[2px] bg-mustard" />
          <h2 className="text-3xl font-serif text-white leading-tight">
            Build the <br />
            <span className="italic">Future.</span>
          </h2>
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">
            Join the VNEXORA mandating team and scale institutional hospitality.
          </p>
        </div>

        {/* Step Indicators */}
        <div className="absolute top-12 left-12 right-12 hidden md:block">
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.id} className="flex items-center gap-4 group">
                <div className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500",
                  step === s.id ? "bg-mustard border-mustard text-black scale-110" : 
                  step > s.id ? "bg-white/20 border-transparent text-white" : "border-white/10 text-white/20"
                )}>
                  {step > s.id ? <CheckCircle2 size={14} /> : <s.icon size={14} />}
                </div>
                <span className={cn(
                  "text-[9px] font-black tracking-widest uppercase transition-colors duration-500",
                  step === s.id ? "text-white" : "text-white/20"
                )}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Form Content */}
      <div className="md:w-2/3 p-8 md:p-16 lg:p-20 bg-white">
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20"
          >
            <div className="w-20 h-20 bg-mustard rounded-full flex items-center justify-center shadow-2xl shadow-mustard/20">
              <CheckCircle2 size={32} className="text-black" />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-serif text-black">Application Received.</h3>
              <p className="text-black/40 text-sm max-w-sm mx-auto font-medium">
                Our recruitment desk will review your profile. If your skills match our requirements, we'll get in touch for the next steps.
              </p>
            </div>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-black text-white px-12 py-5 font-bold text-[10px] tracking-[0.5em] uppercase hover:bg-mustard hover:text-black transition-all"
            >
              Back to Home
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4 border-b border-black/5 pb-8">
              <div className="flex items-center gap-3">
                <span className="text-mustard font-black text-[10px] tracking-widest">VNEXORA CAREERS</span>
                <div className="h-px w-8 bg-black/10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-black tracking-tight leading-tight">
                Join Our Team.
              </h1>
              <p className="text-black/30 text-xs font-bold uppercase tracking-[0.2em]">
                Be a part of the future of Hospitality, Growth & Innovation.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1" 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                >
                  <InputField label="Full Name" required value={formData.fullName} onChange={(v:any) => setFormData({...formData, fullName: v})} placeholder="JOHN DOE" />
                  <InputField label="Date of Birth" type="date" value={formData.dob} onChange={(v:any) => setFormData({...formData, dob: v})} />
                  <SelectField label="Gender" options={["MALE", "FEMALE", "OTHER"]} value={formData.gender} onChange={(v:any) => setFormData({...formData, gender: v})} />
                  <InputField label="Mobile / WhatsApp" required value={formData.mobile} onChange={(v:any) => setFormData({...formData, mobile: v})} placeholder="+91 ..." />
                  <InputField label="Alternate Contact" value={formData.altMobile} onChange={(v:any) => setFormData({...formData, altMobile: v})} placeholder="+91 ..." />
                  <InputField label="Email Address" required type="email" value={formData.email} onChange={(v:any) => setFormData({...formData, email: v})} placeholder="HELLO@DOMAIN.COM" />
                  <InputField label="Current City" required value={formData.city} onChange={(v:any) => setFormData({...formData, city: v})} placeholder="VARANASI" />
                  <InputField label="State" required value={formData.state} onChange={(v:any) => setFormData({...formData, state: v})} placeholder="UTTAR PRADESH" />
                  <InputField label="Country" required value={formData.country} onChange={(v:any) => setFormData({...formData, country: v})} placeholder="INDIA" />
                  <div className="md:col-span-2">
                    <InputField label="Current Address" value={formData.address} onChange={(v:any) => setFormData({...formData, address: v})} placeholder="STREET, AREA, PINCODE" />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2" 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <RadioGroup 
                    label="Applying As" 
                    required 
                    options={[
                      "Full-Time Employee", "Part-Time Employee", "Intern", 
                      "Mentor", "Industry Expert", "Consultant", 
                      "Freelancer", "Volunteer", "Other"
                    ]} 
                    value={formData.applyingAs} 
                    onChange={(v:any) => setFormData({...formData, applyingAs: v})} 
                  />
                  <RadioGroup 
                    label="Department / Role Interested In" 
                    required 
                    options={[
                      "Hotel Operations", "Sales & Marketing", "Business Development", 
                      "Revenue Management", "HR & Recruitment", "Finance & Accounts", 
                      "Interior / Design", "Construction / Projects", "AI / Technology", 
                      "Software / Product", "Customer Success", "Content / Branding", 
                      "Legal / Compliance", "Strategy & Expansion", "Other"
                    ]} 
                    value={formData.department} 
                    onChange={(v:any) => setFormData({...formData, department: v})} 
                  />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3" 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  {/* Categorized professional details based on applyingAs */}
                  {formData.applyingAs === "Intern" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      <InputField label="College / University Name" required value={formData.collegeName} onChange={(v:any) => setFormData({...formData, collegeName: v})} />
                      <InputField label="Course / Degree" value={formData.course} onChange={(v:any) => setFormData({...formData, course: v})} />
                      <InputField label="Year / Semester" value={formData.yearSem} onChange={(v:any) => setFormData({...formData, yearSem: v})} />
                      <InputField label="Internship Duration Available" value={formData.internDuration} onChange={(v:any) => setFormData({...formData, internDuration: v})} />
                    </div>
                  ) : (formData.applyingAs === "Mentor" || formData.applyingAs === "Industry Expert") ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      <InputField label="Domain Expertise" required value={formData.domainExpertise} onChange={(v:any) => setFormData({...formData, domainExpertise: v})} />
                      <InputField label="Years of Experience" required value={formData.mentorExp} onChange={(v:any) => setFormData({...formData, mentorExp: v})} />
                      <InputField label="Companies Worked With" value={formData.mentorCompanies} onChange={(v:any) => setFormData({...formData, mentorCompanies: v})} />
                      <SelectField label="Preferred Engagement Mode" options={["ONLINE", "OFFLINE", "HYBRID"]} value={formData.engagementMode} onChange={(v:any) => setFormData({...formData, engagementMode: v})} />
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      <InputField label="Current Job Title" value={formData.currentTitle} onChange={(v:any) => setFormData({...formData, currentTitle: v})} />
                      <InputField label="Current Company / College Name" required value={formData.currentCompany} onChange={(v:any) => setFormData({...formData, currentCompany: v})} />
                      <InputField label="Total Experience (Years)" value={formData.totalExp} onChange={(v:any) => setFormData({...formData, totalExp: v})} />
                      <InputField label="Relevant Hospitality Experience" value={formData.hospExp} onChange={(v:any) => setFormData({...formData, hospExp: v})} />
                      <InputField label="Current Salary / Stipend" value={formData.currentSalary} onChange={(v:any) => setFormData({...formData, currentSalary: v})} />
                      <InputField label="Expected Salary / Stipend" value={formData.expectedSalary} onChange={(v:any) => setFormData({...formData, expectedSalary: v})} />
                      <InputField label="Notice Period / Joining Availability" required value={formData.noticePeriod} onChange={(v:any) => setFormData({...formData, noticePeriod: v})} />
                    </div>
                  )}
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4" 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <InputField label="Key Skills" required value={formData.keySkills} onChange={(v:any) => setFormData({...formData, keySkills: v})} />
                    <InputField label="Software / Tools Known" value={formData.softwareTools} onChange={(v:any) => setFormData({...formData, softwareTools: v})} />
                    <InputField label="Languages Known" value={formData.languages} onChange={(v:any) => setFormData({...formData, languages: v})} />
                    <InputField label="Certifications" value={formData.certifications} onChange={(v:any) => setFormData({...formData, certifications: v})} />
                    <InputField label="Leadership Experience" value={formData.leadership} onChange={(v:any) => setFormData({...formData, leadership: v})} />
                    <InputField label="Sales Targets Achieved (If Any)" value={formData.salesTargets} onChange={(v:any) => setFormData({...formData, salesTargets: v})} />
                    <div className="md:col-span-2">
                      <InputField label="LinkedIn Profile URL" value={formData.linkedinUrl} onChange={(v:any) => setFormData({...formData, linkedinUrl: v})} placeholder="HTTPS://LINKEDIN.COM/IN/..." />
                    </div>
                  </div>
                  
                  {/* Functional Upload Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-black/40">
                      <Upload size={20} className="text-mustard" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Document Uploads</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {["Resume / CV", "ID Proof", "Certifications"].map((doc) => (
                        <div key={doc} className="space-y-3">
                          <label className="text-[9px] font-bold text-black/30 uppercase tracking-widest ml-1">{doc}</label>
                          <div className="relative group">
                            {!uploadedDocs[doc] ? (
                              <label className="cursor-pointer block">
                                <input 
                                  type="file" 
                                  onChange={(e) => handleFileUpload(e, doc)}
                                  className="hidden" 
                                />
                                <div className="border border-black/10 rounded-xl p-6 text-center group-hover:border-mustard transition-all bg-black/[0.02] flex flex-col items-center gap-2">
                                  <Upload size={16} className="text-black/20 group-hover:text-mustard transition-colors" />
                                  <span className="text-[10px] text-black/40 font-bold uppercase tracking-widest">Select</span>
                                </div>
                              </label>
                            ) : (
                              <div className="border border-mustard/30 bg-mustard/5 rounded-xl p-4 flex items-center gap-3 relative">
                                <div className="w-8 h-8 rounded-lg bg-mustard/20 flex items-center justify-center text-mustard">
                                  <FileText size={14} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[10px] font-bold text-black truncate uppercase tracking-wider">{uploadedDocs[doc]?.name}</p>
                                </div>
                                <button 
                                  type="button"
                                  onClick={() => removeDoc(doc)}
                                  className="text-red-500 hover:text-red-700 transition-colors"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[9px] text-black/20 italic">Note: File size limit is 10MB per document. Supported formats: PDF, DOC, JPG, PNG.</p>
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div 
                  key="step5" 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <RadioGroup 
                    label="Availability" 
                    required 
                    options={["Immediate Joiner", "Within 15 Days", "Within 30 Days", "60+ Days"]} 
                    value={formData.availability} 
                    onChange={(v:any) => setFormData({...formData, availability: v})} 
                  />
                  <RadioGroup 
                    label="Preferred Work Mode" 
                    required 
                    options={["On-Site", "Remote", "Hybrid", "Open to Relocation"]} 
                    value={formData.workMode} 
                    onChange={(v:any) => setFormData({...formData, workMode: v})} 
                  />
                  <div className="space-y-4">
                    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 block ml-1">Why Join VNEXORA? *</label>
                    <textarea 
                      required
                      className="w-full bg-white border-b border-black/10 py-3 px-1 outline-none focus:border-mustard transition-colors text-xs font-bold tracking-widest uppercase min-h-[100px] resize-none"
                      placeholder="BRIEFLY TELL US WHY YOU WANT TO JOIN..."
                      value={formData.whyJoin}
                      onChange={e => setFormData({...formData, whyJoin: e.target.value})}
                    />
                  </div>

                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="mt-1"
                      checked={formData.declaration}
                      onChange={e => setFormData({...formData, declaration: e.target.checked})}
                    />
                    <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest group-hover:text-black transition-colors">
                      I confirm that the information shared is true and accurate.
                    </span>
                  </label>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="pt-12 border-t border-black/5 flex items-center justify-between">
              {step > 1 ? (
                <button 
                  type="button"
                  onClick={() => setStep(prev => prev - 1)}
                  className="flex items-center gap-3 text-black/40 hover:text-black transition-colors group"
                >
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
                </button>
              ) : <div />}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-6 bg-black text-white px-12 py-5 font-bold text-[10px] tracking-[0.5em] uppercase hover:bg-mustard hover:text-black transition-all group shadow-xl"
              >
                {isSubmitting ? "Processing..." : (step === 5 ? "Apply Now" : "Next Step")}
                {!isSubmitting && <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>

            {/* Footer Trustmarks */}
            <div className="pt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-20">
               {["Equal Opportunity", "Growth Driven Careers", "Powered by VNExora"].map(t => (
                 <span key={t} className="text-[8px] font-black uppercase tracking-[0.3em]">{t}</span>
               ))}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
