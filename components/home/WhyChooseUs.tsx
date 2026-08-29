"use client";

import { whyChooseUsCards } from "@/data/home";
import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";
import { useEffect, useRef, useState } from "react";

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll reveal
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

    // Particle background
    const canvas = canvasRef.current;
    if (!canvas) return () => observer.disconnect();
    const ctx = canvas.getContext("2d");
    if (!ctx) return () => observer.disconnect();

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
      ctx.fillStyle = "rgba(255, 95, 0, 0.12)";
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

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#FAF6F0] text-[#1A1A1A] border-y border-[#DDD4C7]">
      {/* 3D background grids */}
      <div className="grid-backdrop absolute inset-0 opacity-20 pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full" />

      <div className="section-shell section-space relative z-10">
        <SectionHeading
          label="Why Choose Us"
          title="Engineering Built Around Your Business"
          description="Technology should support your business goals, not create unnecessary complexity."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUsCards.map((card, i) => (
            <article
              key={card.title}
              className={`why-card group border border-white/60 bg-white/70 backdrop-blur-md p-6 rounded-2xl transition-all duration-700 shadow-sm`}
              style={{
                transitionDelay: `${100 + i * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transformStyle: "preserve-3d",
              }}
            >
              <style jsx>{`
                .why-card {
                  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s, box-shadow 0.4s;
                  transform: perspective(800px) translateZ(0px);
                }
                @media (min-width: 1024px) {
                  .why-card:hover {
                    transform: perspective(800px) translateY(-8px) rotateX(3deg) rotateY(-3deg) translateZ(10px);
                    border-color: rgba(255, 95, 0, 0.25);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
                  }
                }
              `}</style>

              <div className="flex items-start justify-between gap-4" style={{ transform: "translateZ(30px)" }}>
                <span className="text-xs font-bold text-[#FF5F00] tracking-wider">{card.number}</span>
                <Icon
                  name={card.icon}
                  className="h-9 w-9 text-[#FF5F00] transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-8 text-xl font-bold tracking-tight text-[#1A1A1A]" style={{ transform: "translateZ(20px)" }}>
                {card.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#6B6B6B]" style={{ transform: "translateZ(10px)" }}>
                {card.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF5F00] cursor-pointer hover:text-[#e65400]">
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
