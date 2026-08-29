"use client";

import { services } from "@/data/home";
import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";
import { useEffect, useRef, useState } from "react";

export function Services() {
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

  // Filter exactly the 6 requested services
  const targetServices = services.filter((s) =>
    ["01", "02", "03", "04", "06", "07"].includes(s.number)
  );

  return (
    <section id="services" className="anchor-offset bg-canvas overflow-hidden" ref={containerRef}>
      <div className="section-shell section-space">
        <SectionHeading
          label="What We Do"
          title="Services That Drive Your Business Forward"
          description="From product development to AI and cloud engineering, we help businesses build technology that performs."
        />

        <div className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {targetServices.map((service, i) => (
            <article
              key={service.title}
              className={`service-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-700`}
              style={{
                transitionDelay: `${100 + i * 120}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
              }}
            >
              <style jsx>{`
                .service-card {
                  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s, border-color 0.4s;
                }
                .service-card:hover {
                  transform: translateY(-6px);
                  border-color: rgba(14, 165, 233, 0.4);
                  box-shadow: 0 20px 40px rgba(14, 165, 233, 0.06);
                }
                .sweep-effect {
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 50%;
                  height: 100%;
                  background: linear-gradient(
                    to right,
                    transparent,
                    rgba(56, 189, 248, 0.15),
                    transparent
                  );
                  transform: skewX(-25deg);
                  transition: none;
                  pointer-events: none;
                }
                .service-card:hover .sweep-effect {
                  animation: sweep-flash 0.85s ease-out;
                }
                @keyframes sweep-flash {
                  0% { left: -100%; }
                  100% { left: 200%; }
                }
              `}</style>

              {/* Light Sweep Effect */}
              <div className="sweep-effect" />

              <div className="flex items-start justify-between gap-4">
                {/* 3D icon lift container */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition-all duration-300 group-hover:border-sky-500 group-hover:bg-sky-50 group-hover:text-sky-600 group-hover:-translate-y-1">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-slate-400">{service.number}</span>
              </div>

              {/* Title shifts 2px up on hover */}
              <h3 className="mt-8 text-xl font-bold tracking-tight text-slate-950 transition-transform duration-300 group-hover:-translate-y-[2px]">
                {service.title}
              </h3>
              
              <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-500">
                {service.description}
              </p>

              {/* Learn More arrow shifts 4px right on hover */}
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-colors duration-200 group-hover:text-sky-600">
                Learn More
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
