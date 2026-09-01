"use client";

import { useEffect, useState } from "react";

interface FloatingCardProps {
  label: string;
  top: string;
  left: string;
  delay: string;
}

function FloatingCard({ label, top, left, delay }: FloatingCardProps) {
  return (
    <div
      className="hero-card absolute pointer-events-none rounded-xl border border-[#DDD4C7]/60 bg-white/85 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#FF5F00] shadow-xl backdrop-blur-md animate-float"
      style={{
        top,
        left,
        animationDelay: delay,
      }}
    >
      <span className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F00] animate-pulse" />
        {label}
      </span>
    </div>
  );
}

interface HeroCarouselVisualProps {
  slides: any[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

function HeroCarouselVisual({ slides, activeSlide, setActiveSlide }: HeroCarouselVisualProps) {
  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      {/* Floating Support Headset Button on right edge */}
      <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#FF5F00] text-white shadow-md shadow-[#FF5F00]/25 cursor-pointer hover:scale-105 transition-transform duration-200">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 14a8 8 0 0 0-16 0" />
          <path d="M21 14v1a3 3 0 0 1-6 0v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 0 4" />
          <path d="M3 14v1a3 3 0 0 0 6 0v-1a2 2 0 0 0-2-2H3a2 2 0 0 0 0 4" />
        </svg>
      </div>

      <div className="relative w-full aspect-[4/3] flex flex-col items-center justify-center border border-[#DDD4C7] bg-[#FAF6F0] rounded-[2rem] overflow-hidden shadow-[0_28px_80px_rgba(120,80,30,0.12)]">
        {/* Grid background pattern */}
        <div className="absolute inset-0 grid-backdrop opacity-10 pointer-events-none" />

        {/* Scroll Track for Visuals */}
        <div
          className="flex w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-full shrink-0 flex flex-col items-center justify-center p-6">
              {slide.illustration}

              {/* Floating tags */}
              <div
                className="hero-card absolute pointer-events-none rounded-xl border border-[#DDD4C7]/60 bg-white/85 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#FF5F00] shadow-xl backdrop-blur-md animate-float"
                style={{
                  top: slide.tag1.top,
                  left: slide.tag1.left,
                  animationDuration: "5s",
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F00] animate-pulse" />
                  {slide.tag1.label}
                </span>
              </div>

              <div
                className="hero-card absolute pointer-events-none rounded-xl border border-[#DDD4C7]/60 bg-white/85 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#FF5F00] shadow-xl backdrop-blur-md animate-float"
                style={{
                  top: slide.tag2.top,
                  left: slide.tag2.left,
                  animationDuration: "5.5s",
                  animationDelay: "0.5s",
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F00] animate-pulse" />
                  {slide.tag2.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Navigation Indicator Dots */}
        <div className="absolute bottom-6 flex justify-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                i === activeSlide ? "bg-[#FF5F00] w-6" : "bg-[#DDD4C7]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      heading: (
        <>
          Build <span className="bg-gradient-to-r from-[#EB001B] via-[#FF5F00] to-[#F79E1B] bg-clip-text text-transparent">Digital Products</span>
          <br />
          That <span className="text-[#FF5F00]">Move Your Business Forward</span>
        </>
      ),
      paragraph: "We design and engineer scalable software, AI-powered products and digital experiences that solve real business challenges.",
      illustration: (
        <img
          src="/images/hero-ai-brain.png"
          alt="AI Solutions"
          className="h-64 sm:h-72 lg:h-80 w-auto object-contain drop-shadow-2xl"
        />
      ),
      tag1: { label: "AI Solutions", top: "15%", left: "8%" },
      tag2: { label: "API Integration", top: "72%", left: "64%" },
    },
    {
      heading: (
        <>
          Architect <span className="bg-gradient-to-r from-[#EB001B] via-[#FF5F00] to-[#F79E1B] bg-clip-text text-transparent">Cloud Solutions</span>
          <br />
          That <span className="text-[#FF5F00]">Scale Infinitely</span>
        </>
      ),
      paragraph: "Transition your architecture to highly available, serverless, and optimized cloud infrastructures built on modern standard pipelines.",
      illustration: (
        <img
          src="/images/hero-cloud-infrastructure.png"
          alt="Cloud Infrastructure"
          className="h-64 sm:h-72 lg:h-80 w-auto object-contain drop-shadow-2xl"
        />
      ),
      tag1: { label: "Cloud Solutions", top: "15%", left: "64%" },
      tag2: { label: "Security First", top: "72%", left: "8%" },
    },
    {
      heading: (
        <>
          Connect Systems <span className="bg-gradient-to-r from-[#EB001B] via-[#FF5F00] to-[#F79E1B] bg-clip-text text-transparent">With Seamless</span>
          <br />
          API <span className="text-[#FF5F00]">Integration & Workflows</span>
        </>
      ),
      paragraph: "Unify your business operations, data flows, and legacy software with robust, fast, and secure API gateways and middlewares.",
      illustration: (
        <img
          src="/images/hero-system-integration.jpg"
          alt="API Integration"
          className="h-64 sm:h-72 lg:h-80 w-auto object-contain drop-shadow-2xl"
        />
      ),
      tag1: { label: "API Integration", top: "15%", left: "8%" },
      tag2: { label: "AI Solutions", top: "72%", left: "64%" },
    },
    {
      heading: (
        <>
          Protect Assets <span className="bg-gradient-to-r from-[#EB001B] via-[#FF5F00] to-[#F79E1B] bg-clip-text text-transparent">With Enterprise</span>
          <br />
          Grade <span className="text-[#FF5F00]">Security Standards</span>
        </>
      ),
      paragraph: "Incorporate state-of-the-art security, encryption standards, and compliance structures into every layer of your systems by design.",
      illustration: (
        <img
          src="/images/hero-cyber-security.png"
          alt="Cyber Security"
          className="h-64 sm:h-72 lg:h-80 w-auto object-contain drop-shadow-2xl"
        />
      ),
      tag1: { label: "Security First", top: "15%", left: "64%" },
      tag2: { label: "Cloud Solutions", top: "72%", left: "8%" },
    },
    {
      heading: (
        <>
          Transform Raw <span className="bg-gradient-to-r from-[#EB001B] via-[#FF5F00] to-[#F79E1B] bg-clip-text text-transparent">Data Into</span>
          <br />
          Actionable <span className="text-[#FF5F00]">Business Insights</span>
        </>
      ),
      paragraph: "Unleash data analytics and interactive reporting pipelines to make smart, data-driven decisions that propel growth.",
      illustration: (
        <img
          src="/images/hero-data-analytics.jpg"
          alt="Data Analytics"
          className="h-64 sm:h-72 lg:h-80 w-auto object-contain drop-shadow-2xl"
        />
      ),
      tag1: { label: "Data Analytics", top: "15%", left: "8%" },
      tag2: { label: "API Integration", top: "72%", left: "64%" },
    },
    {
      heading: (
        <>
          Automate Workflows <span className="bg-gradient-to-r from-[#EB001B] via-[#FF5F00] to-[#F79E1B] bg-clip-text text-transparent">With Intelligent</span>
          <br />
          Operations <span className="text-[#FF5F00]">& Autonomous Agents</span>
        </>
      ),
      paragraph: "Deploy autonomous multi-agent networks and automated operations that eliminate manual overhead and streamline delivery.",
      illustration: (
        <img
          src="/images/hero-isometric-cube.png"
          alt="Automation"
          className="h-72 sm:h-88 lg:h-[420px] w-auto object-contain drop-shadow-2xl"
        />
      ),
      tag1: { label: "Automation", top: "15%", left: "64%" },
      tag2: { label: "AI Solutions", top: "72%", left: "8%" },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textTranslateY = scrollY * 0.12;
  const visualScale = Math.max(0.85, 1 - scrollY * 0.0006);

  return (
    <section id="top" className="relative overflow-hidden bg-canvas pt-10">
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      {/* Warm tint gradient glow */}
      <div className="absolute left-[62%] top-28 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,95,0,0.10),_transparent_72%)] blur-2xl" />

      <div className="section-shell section-space relative pt-24 md:pt-28 lg:pt-24 pb-12">
        <div className="grid min-h-[70vh] items-center gap-10 xl:grid-cols-[minmax(0,0.96fr)_minmax(460px,1.04fr)] xl:gap-12">
          
          {/* Hero text content with scroll-parallax shifts */}
          <div
            className="max-w-2xl w-full overflow-hidden transition-transform duration-100 ease-out"
            style={{ transform: `translate3d(0, -${textTranslateY}px, 0)` }}
          >
            {/* Scroll Track for Text Column */}
            <div
              className="flex w-full transition-transform duration-500 ease-out"
              style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full shrink-0">
                  <h1 className="text-balance text-2xl font-bold leading-[1.12] tracking-tight text-[#1A1A1A] sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                    {slide.heading}
                  </h1>

                  <p className="mt-4 max-w-xl text-base leading-7 text-[#5A5A5A] sm:text-lg">
                    {slide.paragraph}
                  </p>
                </div>
              ))}
            </div>

            {/* Explore Solutions & Contact Us Buttons */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#case-studies"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FF5F00] px-7 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#e65400] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00]"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-[#DDD4C7] bg-white px-7 py-4 text-base font-semibold text-[#1A1A1A] transition-all duration-200 hover:border-[#FF5F00] hover:text-[#FF5F00] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00]"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-6-6v2" />
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Contact Us
              </a>
            </div>

            {/* Bottom Row Categories/Divisions */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-y-4 border-t border-[#DDD4C7] pt-6">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#FF5F00] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="8" width="14" height="10" rx="3" />
                  <path d="M12 4v4" />
                  <circle cx="9" cy="13" r="1" />
                  <circle cx="15" cy="13" r="1" />
                  <path d="M9 17h6" />
                </svg>
                <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]">AI Solutions</span>
              </div>
              
              <span className="hidden md:block h-6 w-px bg-[#DDD4C7]" />
              
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#FF5F00] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4 4 8l8 4 8-4-8-4Z" />
                  <path d="m4 12 8 4 8-4" />
                  <path d="m4 16 8 4 8-4" />
                </svg>
                <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]">Cloud Infrastructure</span>
              </div>
              
              <span className="hidden md:block h-6 w-px bg-[#DDD4C7]" />
              
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#FF5F00] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]">Custom Software</span>
              </div>
              
              <span className="hidden md:block h-6 w-px bg-[#DDD4C7]" />
              
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#FF5F00] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]">Data Analytics</span>
              </div>
            </div>

          </div>

          {/* 3D Visual Carousel container with scroll shrink */}
          <div
            className="transition-transform duration-100 ease-out"
            style={{ transform: `scale(${visualScale})` }}
          >
            <HeroCarouselVisual slides={slides} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
          </div>

        </div>
      </div>
    </section>
  );
}
