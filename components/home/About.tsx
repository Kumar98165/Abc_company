"use client";

import { aboutValues } from "@/data/home";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export function About() {
  const [rotateImage, setRotateImage] = useState({ x: 0, y: 0 });
  const imageCardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleImageMouseMove = (e: React.MouseEvent) => {
    const el = imageCardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate rotation between -16 and 16 degrees for 3D effect
    const x = ((e.clientY - rect.top) / height - 0.5) * -16;
    const y = ((e.clientX - rect.left) / width - 0.5) * 16;
    
    setRotateImage({ x, y });
  };

  const handleImageMouseLeave = () => {
    setRotateImage({ x: 0, y: 0 });
  };

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const icons = [
    // 01 Product Thinking: Target / Bullseye (Strategic product planning focus)
    <svg key="01" viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>,
    // 02 Engineering Excellence: Layers Stack (Building scalable code architecture)
    <svg key="02" viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>,
    // 03 AI & Innovation: CPU Processor Chip (AI and automation processor core)
    <svg key="03" viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>,
    // 04 Long-Term Partnership: Combined users / handshake theme
    <svg key="04" viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
  ];

  return (
    <section id="about" className="anchor-offset bg-canvas overflow-hidden">
      <div className="section-shell pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24">
        
        {/* Top Area: Heading, Eyebrow, and Supporting Paragraph (No card wrapper, flush with layout margins) */}
        <div ref={textRef} className="w-full mb-10">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#FF5F00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F00]" />
              ABOUT US
            </span>

            {/* H2 Title */}
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.85rem] leading-[1.12]">
              Technology Built Around Your Business
            </h2>

            {/* Supporting Subtext */}
            <p className="mt-5 text-base leading-7 text-[#5A5A5A] sm:text-lg max-w-4xl">
              We build ready-to-use software products and custom technology solutions that help businesses simplify operations, automate processes, and scale with confidence.
            </p>
          </div>
        </div>

        {/* Bottom Area: Grid with Image on Left, Feature Cards on Right (Stretched to match heights) */}
        <div className="grid grid-cols-1 gap-12 lg:gap-16 xl:grid-cols-[1fr_1.2fr] xl:items-stretch">
          
          {/* Bottom Left: Capabilities Visual Map with 3D Parallax Hover */}
          <div className={`relative w-full flex items-stretch justify-center transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Backing ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/10 to-red-500/5 rounded-[2.5rem] blur-3xl pointer-events-none" />
            
            {/* Premium rounded container block with 3D rotate style, thick border-2 and h-full stretching */}
            <div 
              ref={imageCardRef}
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              className="relative w-full max-w-[540px] h-full rounded-[2rem] border-2 border-slate-200 bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.06),_0_1px_4px_rgba(15,23,42,0.01)] overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(15,23,42,0.1)] flex items-center justify-center"
              style={{
                transform: `perspective(1000px) rotateX(${rotateImage.x}deg) rotateY(${rotateImage.y}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Parallax inner visual wrapper */}
              <div style={{ transform: "translateZ(30px)" }} className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/about-capabilities.png"
                  alt="Core technology capabilities network map including AI, Business Growth, Data Security, and Software Development."
                  width={1200}
                  height={960}
                  className="h-full w-full object-cover rounded-[1.5rem] opacity-95 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom Right: Cards and CTA link */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* 2x2 Feature Grid */}
            <div className="grid gap-5 sm:grid-cols-2 h-full">
              {aboutValues.map((value, i) => {
                // Define theme classes matching the color-coded badges
                const themes = [
                  {
                    bg: "bg-blue-50/70",
                    text: "text-blue-600",
                    hoverBorder: "hover:border-blue-500",
                    hoverShadow: "hover:shadow-[0_24px_50px_rgba(59,130,246,0.08)]",
                  },
                  {
                    bg: "bg-purple-50/70",
                    text: "text-purple-600",
                    hoverBorder: "hover:border-purple-500",
                    hoverShadow: "hover:shadow-[0_24px_50px_rgba(168,85,247,0.08)]",
                  },
                  {
                    bg: "bg-orange-50/70",
                    text: "text-orange-600",
                    hoverBorder: "hover:border-orange-500",
                    hoverShadow: "hover:shadow-[0_24px_50px_rgba(249,115,22,0.08)]",
                  },
                  {
                    bg: "bg-emerald-50/70",
                    text: "text-emerald-600",
                    hoverBorder: "hover:border-emerald-500",
                    hoverShadow: "hover:shadow-[0_24px_50px_rgba(16,185,129,0.08)]",
                  },
                ];

                const theme = themes[i];

                return (
                  <div
                    key={value.number}
                    className={`group relative overflow-hidden border-2 border-slate-200 bg-white p-6 rounded-[2rem] transition-all duration-700 hover:-translate-y-1.5 ${theme.hoverBorder} ${theme.hoverShadow} shadow-[0_10px_30px_rgba(15,23,42,0.02),_0_1px_3px_rgba(15,23,42,0.01)] flex flex-col justify-between`}
                    style={{
                      transitionDelay: isVisible ? `${400 + i * 500}ms` : "0ms",
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(32px)"
                    }}
                  >
                    <div>
                      {/* Top Row: Icon on left */}
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-2xl ${theme.bg} ${theme.text} transition-colors duration-300`}>
                          {icons[i]}
                        </div>
                      </div>
                      
                      {/* Title and description */}
                      <h3 className="mt-8 text-base font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
