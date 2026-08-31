"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  github: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Vikram Malhotra",
    role: "Chief Executive Officer & Founder",
    bio: "Ex-Google Staff Engineer with 15+ years architecting enterprise distributed backends and machine learning workflows.",
    image: "/team/vikram.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "Chief AI Architect",
    bio: "PhD in Neural Systems from Stanford. Directs our predictive modeling, multi-agent pipelines, and vector RAG pipelines.",
    image: "/team/sarah.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Arjun Mehta",
    role: "Head of Software Engineering",
    bio: "Specializes in secure compiler languages, high-performance PostgreSQL tuning, and Spring Boot microservice registries.",
    image: "/team/arjun.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Elena Rostova",
    role: "VP of Cloud & Infrastructure",
    bio: "Orchestrates multi-region Kubernetes clusters and automated GitOps continuous deployment networks on AWS and GCP.",
    image: "/team/elena.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Rohan Das",
    role: "Lead UI/UX Architect",
    bio: "Creates responsive token-driven interface guidelines and dynamic web interactions keeping pixel-perfect consistency.",
    image: "/team/rohan.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Mia Thorne",
    role: "Director of Product Management",
    bio: "Translates complex operational requirements into high-value product sprints and client delivery frameworks.",
    image: "/team/mia.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];
export function AboutClient() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-canvas overflow-hidden pt-24" ref={containerRef}>

        {/* Banner Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-canvas to-canvas-2 border-b border-line/30 pt-8 pb-12 lg:pt-16 lg:pb-16">
          {/* Subtle tech patterns and glowing orbs matching mockup */}
          <div className="grid-backdrop absolute inset-0 opacity-20 pointer-events-none" />
          <div className="absolute left-[-10%] top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute right-[-10%] bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

          <div className="section-shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 items-center">

              {/* Left Column: Image with rounded corners directly */}
              <div className="lg:col-span-5">
                <div className="relative aspect-square w-full max-w-[440px] mx-auto overflow-hidden rounded-[2.5rem]">
                  <Image
                    src="/images/about-hero-developers.jpg"
                    alt="Your Perfect Engineering Partner"
                    fill
                    className="object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, 440px"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Title, Description & Stats Layout */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.15]">
                  Your Perfect <span className="bg-gradient-to-r from-accent via-accent-2 to-red bg-clip-text text-transparent">Engineering</span> <br />
                  Partner
                </h1>

                <div className="space-y-4 text-base leading-relaxed text-muted max-w-2xl">
                  <p>
                    Company Name, established in Bhosari, Pune, is an enterprise software engineering company. We run contract engineering, full-stack deployment, quality verification, and dedicated developer teams under our plant-in-plant squad delivery model.
                  </p>
                  <p>
                    Our clients build cloud architectures, high-performance backends, artificial intelligence platforms, custom fintech platforms, and responsive microservice frameworks.
                  </p>
                </div>

                {/* Grid Stats matching mockup layout */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center border-t border-line/40 pt-8">

                  {/* Big Stat Left */}
                  <div className="sm:col-span-5 relative flex items-center gap-4">
                    <div className="w-[3px] self-stretch bg-gradient-to-b from-[#FF5F00] to-[#EB001B] rounded-full" />
                    <div className="relative py-1">
                      {/* Large background text */}
                      <div className="text-6xl font-black text-slate-200/50 absolute left-0 top-[-8px] select-none pointer-events-none font-sans leading-none z-0">
                        15+
                      </div>
                      <div className="relative z-10 space-y-1">
                        <div className="text-2xl font-extrabold text-ink leading-none">Years</div>
                        <div className="text-xs font-bold text-muted uppercase tracking-wider">Industry Experience</div>
                      </div>
                    </div>
                  </div>

                  {/* List Stats Right */}
                  <div className="sm:col-span-7 space-y-4">

                    {/* Stat Row 1 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100/80 text-purple-600">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">35+ Clients</div>
                        <div className="text-xs text-muted">Active enterprise customers globally</div>
                      </div>
                    </div>

                    {/* Stat Row 2 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100/80 text-orange-600">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">$12.5M+ Turnover</div>
                        <div className="text-xs text-muted">Annualized project delivery runrate</div>
                      </div>
                    </div>

                    {/* Stat Row 3 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100/80 text-green-600">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">4000+ Workforce</div>
                        <div className="text-xs text-muted">Total developers, QA and cloud engineers</div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Goal, Vision & Mission Cards */}
        <section className="pt-10 pb-12 lg:pt-12 lg:pb-16 bg-[#F5EFE6]/35 border-b border-line/25 relative">
          <div className="grid-backdrop absolute inset-0 opacity-15 pointer-events-none" />
          
          {/* Custom style for animations */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes flow-dash {
              to {
                stroke-dashoffset: -48;
              }
            }
            .animate-flow-dash {
              animation: flow-dash 2s linear infinite;
            }
            @keyframes pulse-ring {
              0% { transform: scale(0.95); opacity: 0.8; }
              50% { transform: scale(1.1); opacity: 0.4; }
              100% { transform: scale(0.95); opacity: 0.8; }
            }
            .animate-pulse-ring {
              animation: pulse-ring 3s ease-in-out infinite;
            }
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spin-slow 16s linear infinite;
            }
          `}} />

          <div className="section-shell relative z-10">

            <div className="text-center max-w-3xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5F00]">Our Pillars</span>
              <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl tracking-tight">The Foundations of Our Engineering</h2>
              <p className="mt-3 text-muted text-xs sm:text-sm">
                We organize our engineering processes around three core operational tenets.
              </p>
              {/* Decorative line under title from second image */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                <div className="h-[3px] w-12 bg-[#FF5F00] rounded-full" />
                <div className="h-[6px] w-[6px] rounded-full bg-[#FF5F00] animate-pulse" />
              </div>
            </div>

            {/* Desktop / Large Screen Layout: Wavy SVG flow board */}
            <div className="relative w-full h-[480px] hidden lg:block select-none mt-6 overflow-visible">
              
              <div className="relative w-full h-full">
                {/* Wavy Path SVG (locked to 420px height) */}
                <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-[420px] pointer-events-none">
                  <defs>
                    <linearGradient id="flowGradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="5%" stopColor="#FF5F00" />
                      <stop offset="25%" stopColor="#FF5F00" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="75%" stopColor="#22C55E" />
                      <stop offset="95%" stopColor="#22C55E" />
                    </linearGradient>
                    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
                      <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.08" floodColor="#000000" />
                    </filter>
                  </defs>

                  {/* Thick background track */}
                  <path
                    d="M 50,130 L 264,130 C 348,130 348,330 432,330 C 516,330 516,90 600,90 C 684,90 684,330 768,330 C 852,330 852,130 936,130 L 1150,130"
                    stroke="url(#flowGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    filter="url(#shadow)"
                    className="opacity-90"
                  />

                  {/* Animated dashing highlight flow overlay */}
                  <path
                    d="M 50,130 L 264,130 C 348,130 348,330 432,330 C 516,330 516,90 600,90 C 684,90 684,330 768,330 C 852,330 852,130 936,130 L 1150,130"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 16"
                    className="animate-flow-dash opacity-60"
                  />
                </svg>

                {/* Nodes & Text Blocks */}
                
                {/* STEP 1 TEXT BLOCK (Left of Icon 1) */}
                <div className="absolute left-[4%] top-[230px] w-[16%] flex flex-col items-start z-20">
                  <div className="flex flex-col mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-3xl font-black text-[#FF5F00] leading-none">01</span>
                      <svg className="w-4 h-4 text-[#FF5F00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-[#FF5F00] uppercase tracking-wider mt-0.5">Step</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-ink tracking-tight text-[#FF5F00]">Our Mission</h3>
                  <div className="h-[2px] w-6 bg-[#FF5F00] mt-1.5 mb-3" />
                  <p className="text-xs leading-relaxed text-muted">
                    To construct production-grade, highly maintainable software platforms and AI systems that solve real-world corporate friction points, helping engineers deploy confidently.
                  </p>
                </div>

                {/* NODE 1 ICON (Lightning) */}
                <div className="absolute left-[22%] top-[130px] -translate-x-1/2 -translate-y-1/2 z-30 group">
                  {/* Pulsing colored ring */}
                  <div className="absolute inset-[-8px] rounded-full bg-[#FF5F00]/10 border border-[#FF5F00]/20 animate-pulse-ring pointer-events-none" />
                  
                  {/* Dotted spinning ring */}
                  <div className="absolute inset-[-12px] rounded-full border border-dashed border-[#FF5F00]/30 animate-spin-slow pointer-events-none" />
                  
                  {/* White circle icon container */}
                  <div className="h-16 w-16 rounded-full bg-white border-2 border-[#FF5F00]/20 shadow-md flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-7 w-7 text-[#FF5F00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* STEP 2 TEXT BLOCK (Centered under Icon 2) */}
                <div className="absolute left-[41%] top-[340px] w-[18%] flex flex-col items-center text-center z-20">
                  <div className="flex flex-col items-center mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-3xl font-black text-[#3B82F6] leading-none">02</span>
                      <svg className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-wider mt-0.5">Step</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-ink tracking-tight text-[#3B82F6]">Our Vision</h3>
                  <div className="h-[2px] w-6 bg-[#3B82F6] mt-1.5 mb-3" />
                  <p className="text-xs leading-relaxed text-muted">
                    To become the standard technical partner for companies looking to transition from legacy monolith systems into modern, serverless cloud pipelines and autonomous multi-agent networks.
                  </p>
                </div>

                {/* NODE 2 ICON (Eye) */}
                <div className="absolute left-[50%] top-[90px] -translate-x-1/2 -translate-y-1/2 z-30 group">
                  {/* Pulsing colored ring */}
                  <div className="absolute inset-[-8px] rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 animate-pulse-ring pointer-events-none" />
                  
                  {/* Dotted spinning ring */}
                  <div className="absolute inset-[-12px] rounded-full border border-dashed border-[#3B82F6]/30 animate-spin-slow pointer-events-none" />
                  
                  {/* White circle icon container */}
                  <div className="h-16 w-16 rounded-full bg-white border-2 border-[#3B82F6]/20 shadow-md flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-7 w-7 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>

                {/* STEP 3 TEXT BLOCK (Right of Icon 3) */}
                <div className="absolute left-[80%] top-[230px] w-[16%] flex flex-col items-start z-20">
                  <div className="flex flex-col mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-3xl font-black text-[#22C55E] leading-none">03</span>
                      <svg className="w-4 h-4 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-[#22C55E] uppercase tracking-wider mt-0.5">Step</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-ink tracking-tight text-[#22C55E]">Our Goal</h3>
                  <div className="h-[2px] w-6 bg-[#22C55E] mt-1.5 mb-3" />
                  <p className="text-xs leading-relaxed text-muted">
                    Deliver absolute type-safety, 99.9% uptime architectures, and clean technical documentation so client operations can scale smoothly without architectural revisions.
                  </p>
                </div>

                {/* NODE 3 ICON (Shield/Check) */}
                <div className="absolute left-[78%] top-[130px] -translate-x-1/2 -translate-y-1/2 z-30 group">
                  {/* Pulsing colored ring */}
                  <div className="absolute inset-[-8px] rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 animate-pulse-ring pointer-events-none" />
                  
                  {/* Dotted spinning ring */}
                  <div className="absolute inset-[-12px] rounded-full border border-dashed border-[#22C55E]/30 animate-spin-slow pointer-events-none" />
                  
                  {/* White circle icon container */}
                  <div className="h-16 w-16 rounded-full bg-white border-2 border-[#22C55E]/20 shadow-md flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-7 w-7 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>


              </div>
            </div>

            {/* Mobile / Small Screen Layout: Vertical Timelines */}
            <div className="lg:hidden block bg-white/40 backdrop-blur-md rounded-3xl border border-line p-6 sm:p-8 shadow-sm overflow-hidden mt-8 relative">
              {/* Grid backdrop inside the board */}
              <div className="grid-backdrop absolute inset-0 opacity-10 pointer-events-none" />

              {/* Vertical line connecting the steps */}
              <div className="absolute left-[36px] sm:left-[44px] top-[80px] bottom-[80px] w-[3px] bg-gradient-to-b from-[#FF5F00] via-[#3B82F6] to-[#22C55E] rounded-full" />

              <div className="space-y-12 relative z-10">
                {/* Step 1 */}
                <div className="flex gap-6 sm:gap-8 items-start">
                  {/* Icon Node */}
                  <div className="relative shrink-0 mt-1">
                    <div className="absolute inset-[-4px] rounded-full bg-[#FF5F00]/10 border border-[#FF5F00]/20 animate-pulse-ring pointer-events-none" />
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border-2 border-[#FF5F00]/20 shadow-md flex items-center justify-center">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF5F00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xl font-black text-[#FF5F00] leading-none">01</span>
                      <svg className="w-3.5 h-3.5 text-[#FF5F00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-[9px] font-bold text-[#FF5F00] uppercase tracking-wider">Step</span>
                    </div>
                    <h3 className="text-lg font-bold text-ink tracking-tight text-[#FF5F00]">Our Mission</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted mt-2">
                      To construct production-grade, highly maintainable software platforms and AI systems that solve real-world corporate friction points, helping engineers deploy confidently.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 sm:gap-8 items-start">
                  {/* Icon Node */}
                  <div className="relative shrink-0 mt-1">
                    <div className="absolute inset-[-4px] rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 animate-pulse-ring pointer-events-none" />
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border-2 border-[#3B82F6]/20 shadow-md flex items-center justify-center">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xl font-black text-[#3B82F6] leading-none">02</span>
                      <svg className="w-3.5 h-3.5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-[9px] font-bold text-[#3B82F6] uppercase tracking-wider">Step</span>
                    </div>
                    <h3 className="text-lg font-bold text-ink tracking-tight text-[#3B82F6]">Our Vision</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted mt-2">
                      To become the standard technical partner for companies looking to transition from legacy monolith systems into modern, serverless cloud pipelines and autonomous multi-agent networks.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 sm:gap-8 items-start">
                  {/* Icon Node */}
                  <div className="relative shrink-0 mt-1">
                    <div className="absolute inset-[-4px] rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 animate-pulse-ring pointer-events-none" />
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border-2 border-[#22C55E]/20 shadow-md flex items-center justify-center">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xl font-black text-[#22C55E] leading-none">03</span>
                      <svg className="w-3.5 h-3.5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-[9px] font-bold text-[#22C55E] uppercase tracking-wider">Step</span>
                    </div>
                    <h3 className="text-lg font-bold text-ink tracking-tight text-[#22C55E]">Our Goal</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted mt-2">
                      Deliver absolute type-safety, 99.9% uptime architectures, and clean technical documentation so client operations can scale smoothly without architectural revisions.
                    </p>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </section>


        {/* Executive Team Section */}
        <section className="pt-10 pb-20 lg:pt-14 lg:pb-28 bg-[#FAF6F0]">
          <div className="section-shell">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Meet the Architects</span>
              <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl tracking-tight">Our Leadership Team</h2>
              <p className="mt-3 text-muted text-xs sm:text-sm">
                A structured team of researchers, engineers, and cloud administrators focused on engineering excellence.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, i) => (
                <div
                  key={member.name}
                  className="group relative rounded-2xl border border-line/45 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Decorative Brand Gradient Accent Bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-red via-accent to-accent-2" />

                  {/* Profile image with custom clip-path & zoom transition */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} – ${member.role}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110 filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Dark gradient overlap at bottom of image */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  {/* Member Details */}
                  <div className="flex flex-col flex-1 p-6 pt-4 bg-white relative z-10">
                    <h3 className="text-lg font-bold text-ink tracking-tight group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mt-1.5">
                      {member.role}
                    </p>

                    <p className="mt-4 text-xs leading-relaxed text-muted flex-1">
                      {member.bio}
                    </p>

                    {/* Social networks linked section */}
                    <div className="mt-6 pt-4 border-t border-line/30 flex items-center gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-accent transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-ink transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
