import React from "react";
import Image from "next/image";

interface CareersHeroProps {
  onViewPositionsClick: () => void;
  onExploreCultureClick: () => void;
}

export function CareersHero({ onViewPositionsClick, onExploreCultureClick }: CareersHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white text-[#1A1A1A] border-b border-[#EAE3D9]">
      <div className="grid-backdrop absolute inset-0 opacity-15 pointer-events-none" />
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(255,95,0,0.12),_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(247,158,27,0.08),_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="section-shell relative py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 items-center">

          {/* Left Column: Headlines & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F00] animate-pulse" />
              CAREERS
            </span>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl leading-[1.15]">
              Build Extraordinary <br />
              Digital Products <br />
              <span className="text-[#FF5F00]">With Us</span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#6B6B6B] max-w-xl">
              We're building a world-class team of engineers, designers, problem solvers, and AI researchers shaping high-impact digital solutions.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onViewPositionsClick}
                className="rounded-full bg-[#FF5F00] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#e65400] hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 cursor-pointer"
              >
                VIEW OPEN POSITIONS →
              </button>
              <button
                type="button"
                onClick={onExploreCultureClick}
                className="rounded-full border border-[#DDD4C7] bg-white px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#1A1A1A] transition-all duration-300 hover:border-[#FF5F00] hover:text-[#FF5F00] hover:bg-[#FFF4EC]/50 cursor-pointer"
              >
                EXPLORE OUR CULTURE →
              </button>
            </div>
          </div>

          {/* Right Column: Existing 3D Team Illustration Image */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="relative w-full max-w-[540px] aspect-[1.3/1]">
              <Image
                src="/images/careers-3d-team-hero.png"
                alt="Engineering team collaboration 3D illustration"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                className="object-contain object-center drop-shadow-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
