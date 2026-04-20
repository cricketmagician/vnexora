'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Monitor, 
  Smartphone, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Check, 
  Zap,
  Layout,
  LayoutDashboard,
  Users
} from 'lucide-react'
import { MeshGradient } from "@paper-design/shaders-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface AnimatedPathProps {
    className?: string;
    duration?: number;
    delay?: number;
    repeat?: number;
    d: string;
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
}

const AnimatedPath = ({
    className = "",
    duration = 2,
    delay = 0,
    repeat = Infinity,
    d,
    stroke = "currentColor",
    strokeWidth = 2,
    fill = "none"
}: AnimatedPathProps) => {
    return (
        <motion.path
            className={className}
            d={d}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
                pathLength: 1,
                opacity: 1,
            }}
            transition={{
                pathLength: {
                    duration,
                    delay,
                    repeat,
                    repeatType: "reverse",
                    ease: "easeInOut",
                },
                opacity: {
                    duration: 0.2,
                    delay,
                }
            }}
            fill={fill}
        />
    );
};

interface TextRotatorProps {
    words: string[];
    className?: string;
    interval?: number;
    textGradient?: boolean;
    letterAnimation?: boolean;
}

const TextRotator = ({
    words,
    className = "",
    interval = 3000,
    textGradient = true,
    letterAnimation = true
}: TextRotatorProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, interval);

        return () => clearInterval(timer);
    }, [words.length, interval]);

    // Animation variants for letter-by-letter effect
    const letterVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(5px)",
            scale: 0.9
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                delay: i * 0.05,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }),
        exit: (i: number) => ({
            opacity: 0,
            y: -20,
            filter: "blur(5px)",
            scale: 0.9,
            transition: {
                delay: i * 0.02,
                duration: 0.3,
                ease: "easeInOut"
            }
        })
    };

    // Generate gradient colors for letters (Mustard/Gold themed)
    const getGradientColors = (index: number, total: number) => {
        // Hues centered around Mustard/Gold (#CFA052 is approx 38 degrees)
        const hue = 38 + (index / total * 20); 
        return `hsl(${hue}, 80%, 60%)`;
    };

    return (
        <span className={cn(
            "relative inline-block min-w-[250px] min-h-[1.5em]",
            !letterAnimation && textGradient && "bg-clip-text text-transparent bg-gradient-to-r from-[#CFA052] via-[#E8DCCB] to-[#CFA052]",
            className
        )}>
            <AnimatePresence mode="wait">
                {letterAnimation ? (
                    <motion.span
                        key={currentIndex}
                        className="absolute inset-0 flex items-center justify-center w-full -mt-3"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {words[currentIndex].split('').map((letter, i, array) => (
                            <motion.span
                                key={`${currentIndex}-${i}`}
                                custom={i}
                                variants={letterVariants}
                                style={textGradient ? {
                                    color: getGradientColors(i, array.length),
                                    display: 'inline-block',
                                    textShadow: '0 0 15px rgba(207, 160, 82, 0.15)',
                                    fontWeight: 'inherit'
                                } : {}}
                                className={letter === ' ' ? 'ml-2' : ''}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </motion.span>
                        ))}
                    </motion.span>
                ) : (
                    <motion.span
                        key={currentIndex}
                        className="absolute inset-0 flex items-center justify-center w-full"
                        initial={{
                            y: 40,
                            opacity: 0,
                            filter: "blur(8px)",
                            scale: 0.95,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            scale: 1,
                        }}
                        exit={{
                            y: -40,
                            opacity: 0,
                            filter: "blur(8px)",
                            scale: 0.95,
                        }}
                        transition={{
                            y: { type: "spring", stiffness: 100, damping: 15 },
                            opacity: { duration: 0.5 },
                            filter: { duration: 0.4 },
                            scale: { duration: 0.4 }
                        }}
                    >
                        {words[currentIndex]}
                    </motion.span>
                )}
            </AnimatePresence>
            <span className="opacity-0">{words[0]}</span>
        </span>
    );
};

interface RippleProps {
    x: number;
    y: number;
    size: number;
}

const ButtonRipple = ({
    children,
    className = "",
    onClick,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
    [key: string]: any;
}) => {
    const [ripples, setRipples] = useState<RippleProps[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;

        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();

        // Calculate ripple position relative to button
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate ripple size
        const size = Math.max(rect.width, rect.height) * 1.5;

        // Add new ripple
        const newRipple = { x, y, size };
        setRipples([...ripples, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
            setRipples((prevRipples) => prevRipples.filter(r => r !== newRipple));
        }, 1000);

        if (onClick) onClick(e);
    };

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            className={`relative overflow-hidden ${className}`}
            {...props}
        >
            <AnimatePresence>
                {ripples.map((ripple, i) => (
                    <motion.span
                        key={i}
                        initial={{
                            opacity: 0.5,
                            scale: 0,
                            x: ripple.x - ripple.size / 2,
                            y: ripple.y - ripple.size / 2,
                        }}
                        animate={{
                            opacity: 0,
                            scale: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            width: ripple.size,
                            height: ripple.size,
                            background: 'radial-gradient(circle, rgba(207,160,82,0.6) 0%, rgba(255,255,255,0) 70%)',
                            borderRadius: '50%',
                            transform: `translate(${ripple.x - ripple.size / 2}px, ${ripple.y - ripple.size / 2}px) scale(0)`,
                            pointerEvents: 'none',
                        }}
                    />
                ))}
            </AnimatePresence>

            {children}
        </button>
    );
};

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Paper Shaders - Mesh Gradient Base */}
            <MeshGradient
                className="absolute inset-0 w-full h-full"
                colors={["#000000", "#CFA052", "#0F172A", "#1E3A8A", "#000000"]}
                speed={0.2}
            />
            
            {/* Tactical Wireframe Layer */}
            <MeshGradient
                className="absolute inset-0 w-full h-full opacity-20"
                colors={["#0F172A", "#CFA052", "#ffffff"]}
                speed={0.15}
            />

            {/* Noise overlay texture */}
            <div
                className="absolute inset-0 mix-blend-overlay opacity-30 z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '150px 150px',
                }}
            />

            {/* Subtle light beam effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#CFA052]/10 via-transparent to-transparent"
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            {/* Dynamic dotted grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        radial-gradient(circle, rgba(207,160,82,0.1) 1px, transparent 1px),
                        radial-gradient(circle, rgba(207,160,82,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px, 30px 30px',
                    backgroundPosition: '0 0, 15px 15px',
                    opacity: 0.3,
                }}
            />

            {/* Ambient light sources */}
            <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#CFA052]/20 blur-2xl"
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            {/* Diagonal highlight animation */}
            <motion.div
                className="absolute -inset-full h-[300%] w-[200%] opacity-5"
                style={{
                    background: 'linear-gradient(115deg, transparent 30%, rgba(255, 255, 255, 0.1) 40%, rgba(207, 160, 82, 0.1) 50%, transparent 60%)',
                    transform: 'rotate(-15deg)',
                }}
                animate={{
                    left: ['-100%', '100%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                }}
            />

            {/* Edge lighting */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CFA052]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CFA052]/10 to-transparent" />
            </div>
        </div>
    );
};

export const ClassyHero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    // Words to rotate through
    const rotatingWords = ["Applications", "Websites", "Intelligent Tech Solutions"];

    const handleButtonClick = () => {
        setIsButtonClicked(true);
        setTimeout(() => {
            setIsButtonClicked(false);
        }, 3000);
    };

    return (
        <div className="relative bg-[#050505] h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <HeroBackground />

            {/* Hero content */}
            <motion.div
                className="z-20 text-center px-4 relative -mt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-12 h-px bg-[#CFA052]" />
                  <span className="text-[#CFA052] font-bold text-xs tracking-[0.5em] uppercase">Vnexora Technical Mandate</span>
                  <div className="w-12 h-px bg-[#CFA052]" />
                </div>

                <motion.h1
                    className="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-6xl mx-auto leading-tight flex flex-col items-center gap-2 tracking-tighter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <span className="opacity-80">We build NextGen</span>
                    <TextRotator
                        words={rotatingWords}
                        className="font-serif italic font-light block text-[#60A5FA] text-5xl md:text-8xl lg:text-9xl mt-2"
                        interval={3500}
                        letterAnimation={true}
                        textGradient={false}
                    />
                </motion.h1>

                <motion.p
                    className="text-white/60 text-xl md:text-2xl mt-6 max-w-3xl mx-auto font-light leading-relaxed italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                >
                    for Hotels, Resorts, Restaurants, Real Estate & Luxury Brands
                </motion.p>

                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                >
                    <ButtonRipple
                        className="group relative inline-flex items-center justify-center gap-6 px-12 py-5 bg-[#CFA052] text-black font-bold text-[11px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-700 cursor-pointer"
                        onClick={handleButtonClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span className="z-10 relative">Initialize Journey</span>

                        <div className="relative z-10 flex items-center justify-center h-6 w-6">
                            <AnimatePresence>
                                {isButtonClicked ? (
                                    <motion.div
                                        key="journey-icon"
                                        className="absolute inset-0 flex items-center justify-center"
                                        initial={{ opacity: 0, rotate: -20 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 1.5 }}
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <AnimatedPath d="M12 3L2 12H5V20H19V12H22L12 3Z" stroke="#000" strokeWidth={1.5} duration={0.6} />
                                        </svg>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="arrow-icon"
                                        className="absolute inset-0 flex items-center justify-center"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, x: -10 }}
                                    >
                                        <motion.div
                                            animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                                            transition={{ duration: 1, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }}
                                        >
                                            <ArrowRight size={18} />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </ButtonRipple>
                </motion.div>
            </motion.div>

            {/* Services Card - Left Side */}
            <motion.div
                className="absolute bottom-20 left-10 z-30 2xl:block hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
            >
                <motion.div
                    className="bg-white/[0.03] backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-2xl w-80 relative border border-white/10"
                    whileHover={{ y: -5 }}
                >
                    <div className="p-10 flex flex-col relative">
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-white text-3xl font-serif italic font-light tracking-tight leading-none">Smart<br />Digital.</h3>
                            <div className="text-[#CFA052] bg-[#CFA052]/10 p-3 rounded-2xl">
                                <Zap size={24} />
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Web & App Design", icon: Layout },
                                { title: "Smart Hotel Tech", icon: Monitor },
                                { title: "AI Support Systems", icon: Cpu }
                            ].map((item) => (
                                <div key={item.title} className="flex items-center gap-4 text-white/90 group/item">
                                    <div className="bg-white/5 p-2 rounded-xl group-hover/item:bg-[#CFA052]/20 group-hover/item:text-[#CFA052] transition-all">
                                        <item.icon size={18} />
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-widest">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                            <div className="text-white/40 text-[9px] font-black uppercase tracking-[0.3em]">Explore Stack</div>
                            <ArrowRight size={14} className="text-[#CFA052]" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Projects Showcase Card - Right Side */}
            <motion.div
                className="absolute bottom-20 right-10 z-30 2xl:block hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                <motion.div
                    className="w-80 relative"
                    whileHover={{ y: -5 }}
                >
                    <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl p-10">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-white font-bold text-lg tracking-tight uppercase">Tech Portfolio</h3>
                                <p className="text-[#CFA052] text-[9px] font-black uppercase tracking-widest mt-1">Institutional Work</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-[#CFA052]/20 flex items-center justify-center text-[#CFA052]">
                                <Globe size={20} />
                            </div>
                        </div>

                        <div className="space-y-6 mb-8">
                            {[
                                { title: "Luxury PMS Dashboard", label: "Architecture", progress: 98 },
                                { title: "Guest Booking Platform", label: "Conversion", progress: 85 },
                                { title: "Neural Ops Grid", label: "Neural AI", progress: 60 }
                            ].map((project, index) => (
                                <div key={project.title} className="space-y-3">
                                    <div className="flex justify-between items-end">
                                        <h4 className="text-white text-xs font-bold leading-none">{project.title}</h4>
                                        <span className="text-[#CFA052] text-[8px] font-black uppercase">{project.label}</span>
                                    </div>
                                    <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-[#CFA052] to-[#E8DCCB]"
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: `${project.progress}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                            {[
                                { value: "100%", label: "Direct" },
                                { value: "0ms", label: "Latency" },
                                { value: "AI", label: "Driven" }
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-white font-bold text-xs">{stat.value}</div>
                                    <div className="text-[#CFA052] text-[8px] font-black uppercase tracking-wider mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
