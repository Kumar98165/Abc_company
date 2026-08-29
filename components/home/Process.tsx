"use client";

import { processSteps } from "@/data/home";
import { useEffect, useRef, useState } from "react";

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-play timer loop (increments active step every 3.5 seconds)
  useEffect(() => {
    if (isHovered || !isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 7);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, isVisible]);

  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Particle background (matched to light warm cream canvas with soft orange tint)
    const canvas = canvasRef.current;
    if (!canvas) return () => {
      observer.disconnect();
    };
    const ctx = canvas.getContext("2d");
    if (!ctx) return () => {
      observer.disconnect();
    };

    let animId: number;
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const particles: Array<{ x: number; y: number; vy: number; r: number }> = [];
    const count = 16;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vy: -0.15 - Math.random() * 0.2, // slowly moving upward
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255, 95, 0, 0.08)"; // Soft orange particles matching brand colors
      particles.forEach((p) => {
        p.y += p.vy;
        if (p.y < 0) {
          p.y = h;
          p.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Helper to check step states
  const getStepState = (idx: number) => {
    return {
      isActive: idx <= activeStep,
      isCurrent: idx === activeStep,
    };
  };

  return (
    <section 
      ref={sectionRef} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="anchor-offset bg-canvas text-[#1A1A1A] relative overflow-hidden border-b border-[#DDD4C7]"
    >
      {/* 3D background grids with particle animations */}
      <div className="grid-backdrop absolute inset-0 opacity-20 pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full" />

      <div className="section-shell section-space relative z-10">
        
        {/* Section Header: Why Choose Us text merged */}
        <div className="max-w-4xl mb-16">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#FF5F00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F00]" />
              WHY CHOOSE US
            </span>

            {/* H2 Title */}
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.85rem] leading-[1.12]">
              Engineering Built Around Your Business
            </h2>

            {/* Supporting Description */}
            <p className="mt-5 text-base leading-7 text-[#5A5A5A] sm:text-lg max-w-4xl">
              We combine deep business understanding, thoughtful product engineering, and modern technology to build software that solves real-world challenges. From ready-to-use products to fully customized solutions, we focus on delivering secure, scalable, and reliable technology that creates measurable value and grows with your business.
            </p>
          </div>
        </div>

        {/* Desktop straight horizontal timeline (lg and up) */}
        <div className="mt-20 hidden lg:block">
          <div className="relative">
            {/* Timeline base track */}
            <div className="absolute left-[3%] right-[3%] top-7 h-[2px] bg-slate-200" />
            
            {/* Timeline active glowing progress line - Styled Orange */}
            <div 
              className="absolute left-[3%] top-7 h-[2px] bg-[#FF5F00] shadow-[0_0_12px_rgba(255,95,0,0.4)] transition-all duration-700 ease-in-out" 
              style={{ width: `${(activeStep / 6) * 94}%` }}
            />

            {/* Floating 3D-like traveling project orb - Styled Orange */}
            <div
              className="absolute top-4 h-6.5 w-6.5 rounded-full border border-[#FF5F00] bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,95,0,0.5)] transition-all duration-700 ease-in-out"
              style={{
                left: `calc(3% + ${(activeStep / 6) * 94}% - 13px)`,
              }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F00] animate-ping" />
            </div>

            <div className="grid grid-cols-7 gap-5 pt-12">
              {processSteps.map((step, idx) => {
                const { isActive, isCurrent } = getStepState(idx);

                return (
                  <article 
                    key={step.number} 
                    onClick={() => setActiveStep(idx)}
                    className="relative select-none cursor-pointer group"
                  >
                    {/* Step Number Circle */}
                    <div className="absolute top-[-73px] left-1/2 -translate-x-1/2">
                      <div className="relative">
                        {isCurrent && (
                          <span className="absolute -inset-1.5 rounded-xl bg-[#FF5F00]/25 animate-pulse ring-2 ring-[#FF5F00]/30 pointer-events-none" />
                        )}
                        <span 
                          className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-bold transition-all duration-500 relative z-10 ${
                            isCurrent
                              ? "border-[#FF5F00] bg-white text-[#FF5F00] shadow-[0_4px_16px_rgba(255,95,0,0.3)] border-[2.5px] scale-115"
                              : isActive
                              ? "border-[#FF5F00]/50 bg-[#FF5F00]/10 text-[#FF5F00] border-[2px]"
                              : "border-slate-200 bg-white text-slate-400 border-[2px] group-hover:border-slate-350"
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <h3 
                      className={`text-base font-bold transition-colors duration-300 ${
                        isActive ? "text-[#1A1A1A]" : "text-slate-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className={`mt-3 text-xs leading-relaxed transition-all duration-300 ${
                        isCurrent 
                          ? "text-[#1A1A1A] font-medium opacity-100 translate-y-0" 
                          : isActive 
                          ? "text-[#1A1A1A] opacity-70" 
                          : "text-[#1A1A1A] opacity-45"
                      }`}
                    >
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 space-y-8 lg:hidden relative pl-6 border-l border-slate-200">
          {/* Mobile active vertical line - Brand Orange */}
          <div 
            className="absolute left-0 top-0 w-px bg-[#FF5F00] shadow-[0_0_8px_rgba(255,95,0,0.5)] transition-all duration-700"
            style={{ height: `${(activeStep / 6) * 100}%` }}
          />

          {processSteps.map((step, idx) => {
            const { isActive, isCurrent } = getStepState(idx);
            return (
              <article 
                key={step.number} 
                onClick={() => setActiveStep(idx)}
                className="relative pl-6 cursor-pointer select-none group"
              >
                <span 
                  className={`absolute left-0 top-0 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-lg border text-[10px] font-bold transition-all duration-500 ${
                    isCurrent
                      ? "border-[#FF5F00] bg-[#FF5F00] text-white shadow-[0_4px_12px_rgba(255,95,0,0.25)] border-[2px] scale-110"
                      : isActive
                      ? "border-[#FF5F00] bg-[#FF5F00] text-white"
                      : "border-slate-200 bg-white text-slate-400 group-hover:border-slate-350"
                  }`}
                  style={{ left: "-24px" }}
                >
                  {step.number}
                </span>
                <h3 className={`text-base font-bold transition-colors duration-200 ${isActive ? "text-[#1A1A1A]" : "text-slate-500"}`}>
                  {step.title}
                </h3>
                <p className={`mt-2 text-xs leading-relaxed transition-colors duration-200 ${isActive ? "text-[#1A1A1A] opacity-80" : "text-[#1A1A1A] opacity-45"}`}>
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
