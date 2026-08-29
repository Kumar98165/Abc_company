"use client";

import { processSteps } from "@/data/home";
import { SectionHeading } from "./SectionHeading";
import { useEffect, useRef, useState } from "react";

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 100
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress when section is in viewport
      const totalDist = rect.height + windowHeight;
      const currentScroll = windowHeight - rect.top;

      if (currentScroll > 0 && rect.top < windowHeight) {
        const pct = Math.min(100, Math.max(0, (currentScroll / totalDist) * 100));
        setScrollProgress(pct);

        // Map pct (0-100) to 7 stages
        const stage = Math.min(6, Math.floor((pct / 100) * 7));
        setActiveStep(stage);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="anchor-offset bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
      <div className="grid-backdrop absolute inset-0 opacity-15 pointer-events-none" />

      <div className="section-shell section-space relative z-10">
        <SectionHeading
          label="Our Process"
          title="From Idea to Impact"
          invert
        />

        {/* Desktop horizontal timeline */}
        <div className="mt-20 hidden lg:block">
          <div className="relative">
            {/* Timeline base track */}
            <div className="absolute left-[3%] right-[3%] top-7 h-[2px] bg-slate-800" />
            
            {/* Timeline active glowing progress line */}
            <div 
              className="absolute left-[3%] top-7 h-[2px] bg-sky-500 shadow-[0_0_12px_#0ea5e9] transition-all duration-100 ease-out" 
              style={{ width: `${Math.max(0, Math.min(94, scrollProgress * 0.94))}%` }}
            />

            {/* Floating 3D-like traveling project orb */}
            <div
              className="absolute top-4 h-6.5 w-6.5 rounded-full border border-sky-400 bg-slate-950 flex items-center justify-center shadow-[0_0_15px_#0ea5e9] transition-all duration-100 ease-out"
              style={{
                left: `calc(3% + ${Math.max(0, Math.min(94, scrollProgress * 0.94))}% - 13px)`,
              }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-sky-400 animate-ping" />
            </div>

            <div className="grid grid-cols-7 gap-5 pt-12">
              {processSteps.map((step, idx) => {
                const isActive = idx <= activeStep;
                const isCurrent = idx === activeStep;

                return (
                  <article key={step.number} className="relative select-none">
                    <span 
                      className={`absolute top-[-73px] left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-bold transition-all duration-300 ${
                        isCurrent
                          ? "border-sky-500 bg-sky-600 text-white shadow-[0_0_12px_rgba(14,165,233,0.4)] scale-110"
                          : isActive
                          ? "border-sky-500/50 bg-sky-500/10 text-sky-400"
                          : "border-slate-800 bg-slate-950 text-slate-500"
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3 
                      className={`text-base font-bold transition-colors duration-300 ${
                        isActive ? "text-white" : "text-slate-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className={`mt-3 text-xs leading-relaxed transition-all duration-300 ${
                        isCurrent 
                          ? "text-slate-300 opacity-100 translate-y-0" 
                          : isActive 
                          ? "text-slate-400 opacity-70" 
                          : "text-slate-600 opacity-40"
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
        <div className="mt-12 space-y-8 lg:hidden relative pl-6 border-l border-slate-800">
          {/* Mobile active vertical line */}
          <div 
            className="absolute left-0 top-0 w-px bg-sky-500 shadow-[0_0_8px_#0ea5e9] transition-all duration-100"
            style={{ height: `${scrollProgress}%` }}
          />

          {processSteps.map((step, idx) => {
            const isActive = idx <= activeStep;
            return (
              <article key={step.number} className="relative pl-6">
                <span 
                  className={`absolute left-0 top-0 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-lg border text-[10px] font-bold transition-colors duration-300 ${
                    isActive
                      ? "border-sky-500 bg-sky-500 text-white"
                      : "border-slate-800 bg-slate-950 text-slate-500"
                  }`}
                  style={{ left: "-24px" }}
                >
                  {step.number}
                </span>
                <h3 className={`text-base font-bold transition-colors duration-200 ${isActive ? "text-white" : "text-slate-500"}`}>
                  {step.title}
                </h3>
                <p className={`mt-2 text-xs leading-relaxed transition-colors duration-200 ${isActive ? "text-slate-400" : "text-slate-600"}`}>
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
