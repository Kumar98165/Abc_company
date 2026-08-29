"use client";

import { useEffect, useRef, useState } from "react";

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section ref={containerRef} className="relative overflow-hidden bg-canvas text-[#1A1A1A] border-y border-[#DDD4C7]">
      {/* 3D background grid effect */}
      <div className="grid-backdrop absolute inset-0 opacity-20 pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full" />

      <div className="section-shell section-space relative z-10">
        
        {/* Section Header with Warm Cream Canvas aligned brand colors */}
        <div className="max-w-4xl">
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

      </div>
    </section>
  );
}
