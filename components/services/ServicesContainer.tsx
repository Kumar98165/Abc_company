"use client";

import { useState } from "react";
import Image from "next/image";
import { servicesData } from "@/data/services";

function CapabilityIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "box":
      return (
        <svg className="w-4 h-4 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "link":
      return (
        <svg className="w-4 h-4 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
    case "layers":
      return (
        <svg className="w-4 h-4 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "speed":
      return (
        <svg className="w-4 h-4 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "browser":
      return (
        <svg className="w-4 h-4 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "server":
      return (
        <svg className="w-4 h-4 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      );
    case "code":
    default:
      return (
        <svg className="w-4 h-4 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
  }
}

function ArchitectureIsometricVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[380px] mx-auto flex items-center justify-center select-none pointer-events-none">
      <svg className="absolute inset-0 w-full h-full text-[#E7E2DA]/40" viewBox="0 0 400 400" fill="none">
        <polygon points="200,40 340,120 340,280 200,360 60,280 60,120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <polygon points="200,80 300,140 300,260 200,320 100,260 100,140" stroke="currentColor" strokeWidth="0.75" />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <svg className="w-32 h-32 drop-shadow-xl" viewBox="0 0 120 120" fill="none">
          <polygon points="60,85 105,62 60,39 15,62" fill="#E7E2DA" opacity="0.3" />
          <polygon points="60,85 105,62 105,68 60,91" fill="#D6CEC2" opacity="0.4" />
          <polygon points="60,85 15,62 15,68 60,91" fill="#C5BCAE" opacity="0.5" />
          <polygon points="60,20 95,40 60,60 25,40" fill="#FF822E" />
          <polygon points="60,60 95,40 95,75 60,95" fill="#FF6500" />
          <polygon points="60,60 25,40 25,75 60,95" fill="#E05400" />
          <line x1="60" y1="20" x2="60" y2="60" stroke="#FFA366" strokeWidth="1.5" />
          <line x1="60" y1="60" x2="95" y2="40" stroke="#FFA366" strokeWidth="1" />
          <line x1="60" y1="60" x2="25" y2="40" stroke="#FFA366" strokeWidth="1" />
        </svg>
      </div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        <path d="M200 200 L200 70" stroke="#FF6500" strokeWidth="1.25" strokeDasharray="3 3" />
        <circle cx="200" cy="135" r="3" fill="#FF6500" />
        <path d="M200 200 L75 160" stroke="#FF6500" strokeWidth="1.25" strokeDasharray="3 3" />
        <circle cx="137" cy="180" r="3" fill="#FF6500" />
        <path d="M200 200 L325 160" stroke="#FF6500" strokeWidth="1.25" strokeDasharray="3 3" />
        <circle cx="262" cy="180" r="3" fill="#FF6500" />
        <path d="M200 200 L110 310" stroke="#FF6500" strokeWidth="1.25" strokeDasharray="3 3" />
        <circle cx="155" cy="255" r="3" fill="#FF6500" />
        <path d="M200 200 L290 310" stroke="#FF6500" strokeWidth="1.25" strokeDasharray="3 3" />
        <circle cx="245" cy="255" r="3" fill="#FF6500" />
      </svg>
      <div className="absolute top-[25px] left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-white border border-[#E7E2DA] shadow-md flex items-center justify-center">
          <svg className="w-5 h-5 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <span className="mt-1 text-[9px] font-mono font-extrabold tracking-wider text-[#071A2B] uppercase">API GATEWAY</span>
      </div>
      <div className="absolute top-[130px] left-[15px] flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-white border border-[#E7E2DA] shadow-md flex items-center justify-center">
          <svg className="w-5 h-5 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="mt-1 text-[9px] font-mono font-extrabold tracking-wider text-[#071A2B] uppercase">WEB CLIENT</span>
      </div>
      <div className="absolute top-[130px] right-[15px] flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-white border border-[#E7E2DA] shadow-md flex items-center justify-center">
          <svg className="w-5 h-5 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <span className="mt-1 text-[9px] font-mono font-extrabold tracking-wider text-[#071A2B] uppercase">MICROSERVICES</span>
      </div>
      <div className="absolute bottom-[25px] left-[65px] flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-white border border-[#E7E2DA] shadow-md flex items-center justify-center">
          <svg className="w-5 h-5 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
        <span className="mt-1 text-[9px] font-mono font-extrabold tracking-wider text-[#071A2B] uppercase">DATABASE</span>
      </div>
      <div className="absolute bottom-[25px] right-[65px] flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-white border border-[#E7E2DA] shadow-md flex items-center justify-center">
          <svg className="w-5 h-5 text-[#FF6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
        <span className="mt-1 text-[9px] font-mono font-extrabold tracking-wider text-[#071A2B] uppercase">CLOUD</span>
      </div>
    </div>
  );
}

export function ServicesContainer() {
  const [expandedNum, setExpandedNum] = useState<string | null>("01");

  return (
    <section className="relative w-full bg-[#FFFFFF] pt-16 lg:pt-24 pb-4 sm:pb-6 text-[#101820] overflow-hidden">
      
      {/* Background Blueprint Decorative Lines (Top Right) */}
      <div className="absolute top-0 right-0 w-[450px] h-[350px] pointer-events-none opacity-40 select-none">
        <svg className="w-full h-full text-[#E7E2DA]" viewBox="0 0 450 350" fill="none">
          <path d="M150 0 L250 100 H450" stroke="currentColor" strokeWidth="1" />
          <path d="M200 0 L320 120 H450" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
          <path d="M280 0 L400 120 V350" stroke="currentColor" strokeWidth="0.75" />
          <line x1="380" y1="40" x2="380" y2="48" stroke="#FF6500" strokeWidth="4" strokeLinecap="square" />
          <rect x="376" y="36" width="8" height="8" fill="#FF6500" />
          <circle cx="320" cy="120" r="3" fill="#FF6500" />
          <circle cx="250" cy="100" r="3" fill="#E7E2DA" />
        </svg>
      </div>

      <div className="section-shell relative z-10">
        
        {/* ================================================== */}
        {/* SECTION INTRO                                      */}
        {/* ================================================== */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#FF6500] uppercase">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A2B] tracking-tight leading-[1.15]">
            Engineering Capabilities <br />
            Built for Complex Business Problems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
            Explore our specialized software, AI engineering, product design, and cloud capabilities built to transform complex business requirements into scalable digital products.
          </p>
        </div>

        {/* ================================================== */}
        {/* 4 FEATURED VERTICAL CARDS WITH IMAGES             */}
        {/* ================================================== */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const isExpanded = expandedNum === service.num;
            return (
              <div
                key={service.num}
                onClick={() => setExpandedNum((prev) => (prev === service.num ? null : service.num))}
                className={`group relative flex flex-col justify-between border rounded-2xl bg-white p-2.5 transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? "border-[#FF6500] shadow-xl ring-2 ring-[#FF6500]/20 -translate-y-1"
                    : "border-[#E7E2DA] hover:border-[#FF6500]/60 hover:shadow-[0_15px_35px_rgba(7,26,43,0.08)] hover:-translate-y-1.5"
                }`}
              >
                {/* Media Image Header */}
                <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-[#FAF8F5]">
                  <Image
                    src={service.image}
                    alt={service.fullTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/75 via-[#071A2B]/15 to-transparent" />

                  {/* Top-Left Number Badge */}
                  <div className="absolute top-3 left-3 flex h-7 px-2.5 items-center justify-center rounded-lg bg-[#071A2B]/85 backdrop-blur-md border border-white/20 shadow-sm">
                    <span className="font-mono text-xs font-extrabold text-[#FF6500]">
                      {service.num}
                    </span>
                  </div>

                  {/* Bottom Category Tag */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block rounded-md bg-white/90 backdrop-blur-md px-2.5 py-1 border border-white/50 text-[10px] font-mono font-extrabold text-[#071A2B] tracking-wider uppercase shadow-2xs">
                      {service.categoryTag}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-3 pt-4 pb-2 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#071A2B] group-hover:text-[#FF6500] transition-colors leading-snug">
                      {service.fullTitle}
                    </h3>
                    <p className="mt-2 text-xs text-[#667085] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Tech stack preview pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#FCFBF8] border border-[#E7E2DA] text-[#071A2B] px-2 py-0.5 text-[10px] font-mono font-semibold rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="text-[10px] font-mono text-[#667085] px-1 py-0.5">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Modern Action Bar */}
                  <div
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 ${
                      isExpanded
                        ? "bg-[#FF6500] text-white border-[#FF6500]"
                        : "bg-[#FCFBF8] text-[#071A2B] border-[#E7E2DA] group-hover:bg-[#FF6500] group-hover:text-white group-hover:border-[#FF6500]"
                    }`}
                  >
                    <span>{isExpanded ? "Hide Details" : "View Capabilities"}</span>
                    <div className={`flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300 ${
                      isExpanded
                        ? "bg-white/20 text-white"
                        : "bg-[#E7E2DA]/60 text-[#071A2B] group-hover:bg-white/20 group-hover:text-white"
                    }`}>
                      <span className="text-sm font-black leading-none">{isExpanded ? "−" : "+"}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* EXPANDED INLINE DETAILS PANEL                      */}
        {/* ================================================== */}
        {expandedNum && (
          <div className="mt-8 border border-[#FF6500]/40 rounded-2xl bg-[#FCFBF8] p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden transition-all duration-300">
            {(() => {
              const activeService = servicesData.find((s) => s.num === expandedNum) || servicesData[0];
              return (
                <div>
                  <div className="flex items-center justify-between border-b border-[#E7E2DA] pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-extrabold text-[#FF6500]">
                        {activeService.num}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#667085] uppercase tracking-wider">
                        // {activeService.categoryTag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#071A2B]">
                        {activeService.fullTitle}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setExpandedNum(null)}
                      className="text-xs font-mono font-bold text-[#667085] hover:text-[#FF6500] cursor-pointer"
                    >
                      Close [✕]
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 space-y-6">
                      <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                        "{activeService.description}"
                      </p>

                      {/* Core Capabilities */}
                      <div>
                        <div className="flex items-center justify-between border-b border-[#E7E2DA] pb-2 mb-4">
                          <h4 className="text-[11px] font-mono font-extrabold uppercase tracking-[0.2em] text-[#071A2B]">
                            CORE CAPABILITIES
                          </h4>
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6500]" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {activeService.capabilities.map((cap: any, idx: number) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E7E2DA] bg-white shadow-2xs">
                                <CapabilityIcon icon={cap.icon} />
                              </div>
                              <span className="text-xs text-[#101820] font-semibold">
                                {cap.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technology Stack */}
                      <div>
                        <div className="flex items-center justify-between border-b border-[#E7E2DA] pb-2 mb-4">
                          <h4 className="text-[11px] font-mono font-extrabold uppercase tracking-[0.2em] text-[#071A2B]">
                            TECHNOLOGY STACK
                          </h4>
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6500]" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {activeService.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="bg-white border border-[#E7E2DA] text-[#071A2B] px-3.5 py-1.5 text-xs font-semibold font-mono rounded-md shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Explore CTA */}
                      <div className="pt-2">
                        <a
                          href="#final-cta"
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6500] hover:text-[#D45400] transition-colors border-b-2 border-[#FF6500] pb-0.5 group cursor-pointer"
                        >
                          Explore Capability & Solution Details
                          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Architecture Diagram */}
                    <div className="lg:col-span-5 flex items-center justify-center border border-[#E7E2DA] rounded-xl bg-white p-4 shadow-2xs">
                      <ArchitectureIsometricVisual />
                    </div>

                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
