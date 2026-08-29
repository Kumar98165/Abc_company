"use client";

import { caseStudies } from "@/data/home";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { useEffect, useRef, useState } from "react";

type CardProps = {
  study: (typeof caseStudies)[number];
};

function CaseStudyCard({ study }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = ((e.clientY - rect.top) / height - 0.5) * -6; // max 3 deg
    const y = ((e.clientX - rect.left) / width - 0.5) * 6;

    const lx = ((e.clientX - rect.left) / width) * 100;
    const ly = ((e.clientY - rect.top) / height) * 100;

    setRotate({ x, y });
    setLightPos({ x: lx, y: ly });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleUnimplementedClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    alert(`✨ The "${label}" case study is under development. Stay tuned for details!`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] cursor-pointer select-none transition-all duration-300"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Inner tilt card */}
      <article
        className="w-full h-full flex flex-col justify-between transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <style jsx>{`
          article:hover {
            transform: translateY(-8px);
          }
        `}</style>

        {/* Moving Light Reflection Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-30 transition-opacity group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle 120px at ${lightPos.x}% ${lightPos.y}%, rgba(56, 189, 248, 0.15), transparent 80%)`,
          }}
        />

        <div>
          <div className="relative overflow-hidden aspect-[16/10]" style={{ transform: "translateZ(10px)" }}>
            <Image
              src={study.image}
              alt={study.alt}
              fill
              sizes="(min-width: 1280px) 45vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.04]"
            />
          </div>
          <div className="p-6 sm:p-8" style={{ transform: "translateZ(20px)" }}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600">{study.industry}</p>
            <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-950">{study.title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">{study.description}</p>
            
            {/* Tech tags floating Z */}
            <div className="mt-6 flex flex-wrap gap-1.5" style={{ transform: "translateZ(30px)" }}>
              {study.technologies.map((tag) => (
                <span key={tag} className="border border-slate-200 bg-slate-50 rounded px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-8 pb-6 sm:pb-8" style={{ transform: "translateZ(15px)" }}>
          <a
            href={`#case-study-${study.title}`}
            onClick={(e) => handleUnimplementedClick(e, study.title)}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-colors duration-200 hover:text-sky-600"
          >
            View Case Study
            <span className="transition-transform duration-200 hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </article>
    </div>
  );
}

export function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} id="case-studies" className="anchor-offset bg-white overflow-hidden">
      <div className="section-shell section-space">
        <SectionHeading
          label="Selected Work"
          title="Real Problems. Thoughtful Engineering."
          description="We align our engineering experience with sector-specific operational processes."
        />

        <div className="mt-14 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              className="transition-all duration-700"
              style={{
                transitionDelay: `${100 + i * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
              }}
            >
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
