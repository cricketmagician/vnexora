"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, Globe, ShoppingCart, Landmark, Blocks } from "lucide-react";
import Link from "next/link";
import { submitInquiry } from "@/actions/contactAction";
import { toast } from "sonner";

// Question Definitions
const QUESTIONS = [
  {
    id: "company",
    title: "What is the name of your company?",
    type: "text",
    placeholder: "e.g. Vnexora Luxury Estate"
  },
  {
    id: "role",
    title: "What is your role?",
    type: "options",
    choices: [
      { value: "Founder / Executive", label: "Founder / Executive" },
      { value: "Marketing Director", label: "Marketing Director" },
      { value: "IT / Technical Lead", label: "IT / Technical Lead" },
      { value: "Other", label: "Other" }
    ]
  },
  {
    id: "type",
    title: "What type of website do you need?",
    type: "options-cards",
    choices: [
      { value: "Corporate Website", icon: Landmark, desc: "For institutional presence." },
      { value: "E-commerce", icon: ShoppingCart, desc: "For direct revenue generation." },
      { value: "Web Application", icon: Blocks, desc: "Custom software & portals." },
      { value: "Landing Page", icon: Globe, desc: "High-conversion single page." }
    ]
  },
  {
    id: "size",
    title: "Estimated size of the project?",
    type: "options",
    choices: [
      { value: "1-5 Pages (Compact)", label: "1-5 Pages" },
      { value: "5-15 Pages (Standard)", label: "5-15 Pages" },
      { value: "15+ Pages (Enterprise)", label: "15+ Pages (Enterprise)" }
    ]
  },
  {
    id: "timeline",
    title: "What is your required timeline?",
    type: "options",
    choices: [
      { value: "ASAP (Within 4 Weeks)", label: "ASAP (Rush)" },
      { value: "1 to 3 Months", label: "1 to 3 Months" },
      { value: "3 to 6 Months", label: "3 to 6 Months" }
    ]
  },
  {
    id: "email",
    title: "Enter your contact email to receive the proposal.",
    type: "email",
    placeholder: "director@company.com"
  }
];

export default function WebsiteCalculator() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 is the intro screen
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handlers
  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      submitCalculator();
    }
  };

  const handleBack = () => {
    if (currentStep > -1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [QUESTIONS[currentStep].id]: answer });
    // Auto-advance for options
    if (QUESTIONS[currentStep].type.includes("options")) {
      setTimeout(handleNext, 300);
    }
  };

  const submitCalculator = async () => {
    setIsSubmitting(true);
    try {
      const formattedMessage = `
        WEBSITE CALCULATOR LEAD:
        Company: ${answers.company || "Not provided"}
        Role: ${answers.role || "Not provided"}
        Type: ${answers.type || "Not provided"}
        Size: ${answers.size || "Not provided"}
        Timeline: ${answers.timeline || "Not provided"}
        Email: ${answers.email || "Not provided"}
      `;

      // Simulating a form submission using the existing submitInquiry action
      await submitInquiry({
        fullName: answers.company || "Calculator Lead",
        email: answers.email || "no-reply@calculator.com",
        phone: "N/A",
        subject: "Website Calculator Submission",
        message: formattedMessage,
        source: "Website Calculator"
      });
      setIsSuccess(true);
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render Intro Screen
  if (currentStep === -1) {
    return (
      <main className="min-h-screen bg-[#050505] relative flex items-center justify-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-purple-900/40 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-mustard/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="absolute top-8 left-8 z-50">
          <Link href="/services/web-app-ai-tech-support" className="flex items-center text-white/50 hover:text-mustard transition-colors gap-2 text-sm font-medium uppercase tracking-widest">
            <ChevronLeft size={16} /> Return
          </Link>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tighter leading-tight">
              Website Design & <br /> Development Calculator
            </h1>
            <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              There are many factors that will dictate the cost and timeline of a new digital flagship. Our carefully crafted advisory calculator will collect the key strategic information we need and provide you with an <span className="text-mustard italic">instant proposal.</span>
            </p>
            <div className="pt-8">
              <button 
                onClick={handleNext}
                className="bg-mustard text-black hover:bg-mustard/90 px-12 py-5 rounded-full text-sm font-black uppercase tracking-[0.3em] transition-all transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Render Success Screen
  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center space-y-6">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 rounded-full bg-mustard/10 flex items-center justify-center mx-auto mb-8 border border-mustard/20">
            <CheckCircle2 size={40} className="text-mustard" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Proposal Generative Started</h2>
          <p className="text-stone-400 font-light max-w-md mx-auto">
            Your architectural brief has been securely transmitted. Our strategic team will review your parameters and email you the comprehensive proposal shortly.
          </p>
          <div className="pt-8">
            <Link href="/" className="inline-block border border-white/20 text-white hover:bg-white hover:text-black px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all">
              Return to Portal
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Render active question step
  const question = QUESTIONS[currentStep];
  const progressPercentage = Math.round(((currentStep) / QUESTIONS.length) * 100);

  return (
    <main className="min-h-screen bg-[#050505] flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none" />

      {/* Top Header & Progress */}
      <header className="w-full pt-8 px-8 relative z-20">
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-6">
          <button onClick={handleBack} className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest">
            <ChevronLeft size={16} /> Back
          </button>
          <div className="text-white/50 text-sm font-mono tracking-widest">
            STEP {currentStep + 1} OF {QUESTIONS.length}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 to-mustard"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div className="max-w-4xl mx-auto mt-2 text-right text-xs text-mustard font-mono">
          {progressPercentage}%
        </div>
      </header>

      {/* Central Question Area */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl mx-auto space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight text-center leading-tight">
              {question.title}<span className="text-mustard">*</span>
            </h2>

            {/* Answer Inputs */}
            <div className="pt-8">
              
              {/* Type: Text/Email */}
              {(question.type === "text" || question.type === "email") && (
                <div className="flex flex-col items-center justify-center gap-6 w-full max-w-xl mx-auto">
                  <input 
                    type={question.type}
                    value={answers[question.id] || ""}
                    onChange={(e) => setAnswers({ ...answers, [question.id]: e.target.value })}
                    placeholder={question.placeholder}
                    className="w-full bg-transparent border-b-2 border-white/20 text-white text-2xl md:text-3xl text-center pb-4 focus:outline-none focus:border-mustard transition-colors placeholder:text-white/20 font-light"
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && answers[question.id] && handleNext()}
                  />
                  <button 
                    onClick={handleNext}
                    disabled={!answers[question.id]}
                    className="mt-8 flex items-center gap-3 bg-white disabled:bg-white/20 text-black disabled:text-black/50 px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all"
                  >
                    {isSubmitting ? "Generating..." : "Continue"} <ArrowRight size={16} />
                  </button>
                </div>
              )}

              {/* Type: Standard Options */}
              {question.type === "options" && (
                <div className="grid gap-4 max-w-lg mx-auto">
                  {question.choices?.map((choice) => (
                    <button
                      key={choice.value}
                      onClick={() => handleAnswer(choice.value)}
                      className={`w-full p-6 text-left border rounded-xl transition-all duration-300 flex items-center justify-between group
                        ${answers[question.id] === choice.value 
                          ? "border-mustard bg-mustard/10 text-white" 
                          : "border-white/10 hover:border-white/30 text-stone-300 hover:bg-white/5"}
                      `}
                    >
                      <span className="text-lg font-light tracking-wide">{choice.label}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                        ${answers[question.id] === choice.value ? "border-mustard" : "border-white/20 group-hover:border-white/40"}
                      `}>
                        {answers[question.id] === choice.value && <div className="w-3 h-3 bg-mustard rounded-full" />}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Type: Card Options */}
              {question.type === "options-cards" && (
                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {question.choices?.map((choice) => {
                    const Icon = choice.icon;
                    const isSelected = answers[question.id] === choice.value;
                    return (
                      <button
                        key={choice.value}
                        onClick={() => handleAnswer(choice.value)}
                        className={`p-8 text-left border rounded-2xl transition-all duration-300 flex flex-col gap-6 group relative overflow-hidden
                          ${isSelected 
                            ? "border-mustard bg-mustard/10 text-white" 
                            : "border-white/10 hover:border-white/30 text-stone-300 hover:bg-white/5"}
                        `}
                      >
                        {isSelected && <div className="absolute top-0 right-0 w-32 h-32 bg-mustard/20 blur-3xl rounded-full" />}
                        <div className="relative z-10 flex items-center justify-between w-full">
                          <div className={`p-3 rounded-lg border ${isSelected ? "border-mustard text-mustard bg-mustard/20" : "border-white/10 text-white/50 group-hover:text-white"}`}>
                            {Icon && <Icon size={24} />}
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                            ${isSelected ? "border-mustard" : "border-white/20 group-hover:border-white/40"}
                          `}>
                            {isSelected && <div className="w-3 h-3 bg-mustard rounded-full" />}
                          </div>
                        </div>
                        <div className="relative z-10">
                          <h4 className="text-xl font-medium text-white mb-2">{choice.value}</h4>
                          <p className="text-sm font-light text-stone-400">{choice.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
