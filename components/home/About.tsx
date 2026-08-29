"use client";

import { aboutValues } from "@/data/home";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { useState, useRef, useEffect } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate rotation between -4 and 4 degrees
    const x = ((e.clientY - rect.top) / height - 0.5) * -8;
    const y = ((e.clientX - rect.left) / width - 0.5) * 8;
    
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
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

  return (
    <section id="about" className="anchor-offset bg-canvas overflow-hidden">
      <div className="section-shell section-space">
        <div className="grid gap-16 xl:grid-cols-[1fr_0.94fr] xl:items-center">
          
          {/* Left Side: 3D Floating Layered Image Stack */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-[480px] sm:h-[550px] w-full flex items-center justify-center cursor-pointer select-none"
            style={{ perspective: "1000px" }}
          >
            {/* Inner Wrapper supporting 3D rotate */}
            <div
              className="relative w-full h-full max-w-[480px] transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Backing glow */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 to-blue-500/10 rounded-[2.5rem] blur-3xl pointer-events-none"
                style={{ transform: "translateZ(-40px)" }}
              />

              {/* Layer 1: Main illustration Card (At Z = 0) */}
              <div 
                className="absolute inset-4 rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
                style={{ transform: "translateZ(0px)" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.06),_transparent_48%)]" />
                <Image
                  src="/images/about-innovation.svg"
                  alt="Abstract technology system illustration representing digital innovation and product engineering."
                  width={1200}
                  height={960}
                  className="h-full w-full object-cover p-8 opacity-80"
                />
              </div>

              {/* Layer 2: Floating Secondary Image/Asset Card (At Z = 40px) */}
              <div
                className="absolute -right-2 top-[12%] w-[160px] h-[160px] rounded-3xl border border-white/20 bg-slate-950 p-4 shadow-2xl flex flex-col justify-between"
                style={{ transform: "translateZ(40px) scale(0.95)" }}
              >
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400">Innovation</span>
                <p className="text-[11px] leading-relaxed text-slate-300">Evaluating cognitive architectures and secure cloud backends.</p>
              </div>

              {/* Layer 3: Floating UI Stat Badge (At Z = 75px) */}
              <div
                className="absolute -left-4 bottom-[15%] rounded-2xl border border-slate-200 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md"
                style={{ transform: "translateZ(75px)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Architecture Performance</p>
                <p className="text-xl font-extrabold text-slate-900 mt-1">99.98% uptime</p>
              </div>
            </div>
          </div>

          {/* Right Side: Staggered Content Reveals */}
          <div ref={textRef} className="space-y-8">
            <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <SectionHeading
                label="About Us"
                title="Your Technology Partner for Digital Innovation"
                description="We help businesses turn ideas into reliable, scalable digital products by combining product thinking, engineering excellence and emerging technologies."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutValues.map((value, i) => (
                <div
                  key={value.number}
                  className={`border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] rounded-xl transition-all duration-700`}
                  style={{
                    transitionDelay: `${250 + i * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(24px)"
                  }}
                >
                  <p className="text-xs font-bold text-sky-600 tracking-wider uppercase">{value.number}</p>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-950">{value.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{value.description}</p>
                </div>
              ))}
            </div>

            <div className={`pt-2 transition-all duration-700 delay-[700ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <a
                href="#final-cta"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                Learn About Us
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
