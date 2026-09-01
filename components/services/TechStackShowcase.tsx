"use client";

import React from "react";
import Image from "next/image";

interface TechItem {
  name: string;
  logo: React.ReactNode;
}

interface StackCardData {
  num: string;
  title: string;
  description: string;
  image: string;
  borderColor: string;
  accentLineBg: string;
  radialGlow: string;
  badgeBg: string;
  arrowStyle: string;
  topIcon: React.ReactNode;
  row1: TechItem[];
  row2: TechItem[];
  moreCount: string;
}

export default function TechStackShowcase() {
  const stackData: StackCardData[] = [
    // 01 - Frontend
    {
      num: "01",
      title: "Frontend",
      description: "Building interactive, responsive, and fast user experiences.",
      image: "/images/service-web-engineering.png",
      borderColor: "border-[#FFE5D4]",
      accentLineBg: "bg-[#FF5F00]",
      radialGlow: "bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,95,0,0.10),_transparent_70%)]",
      badgeBg: "bg-gradient-to-br from-[#FF5F00] to-[#FF7A26] text-white shadow-[0_6px_16px_rgba(255,95,0,0.28)]",
      arrowStyle: "bg-[#FFF2EA] text-[#FF5F00] border-[#FFD9C2] hover:bg-[#FF5F00] hover:text-white",
      topIcon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      row1: [
        {
          name: "React.js",
          logo: (
            <svg className="w-3.5 h-3.5 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="2.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
            </svg>
          ),
        },
        {
          name: "Next.js",
          logo: (
            <span className="w-3.5 h-3.5 rounded-full bg-black text-white flex items-center justify-center text-[8px] font-black leading-none">
              N
            </span>
          ),
        },
        {
          name: "TypeScript",
          logo: (
            <span className="w-3.5 h-3.5 rounded-xs bg-[#3178C6] text-white flex items-center justify-center text-[7.5px] font-bold leading-none">
              TS
            </span>
          ),
        },
      ],
      row2: [
        {
          name: "Vue.js",
          logo: (
            <svg className="w-3.5 h-3.5 text-[#4FC08D]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 3h4.5L12 13.5 17.5 3H22L12 21 2 3z" />
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          logo: (
            <svg className="w-3.5 h-3.5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6c-3.3 0-5.3 1.6-6 4.9 1.3-1.6 2.8-2.1 4.5-1.5 1 0.4 1.7 1.1 2.5 2 1.3 1.3 2.8 2.9 6.5 2.9 3.3 0 5.3-1.6 6-4.9-1.3 1.6-2.8 2.1-4.5 1.5-1-0.4-1.7-1.1-2.5-2-1.3-1.3-2.8-2.9-6.5-2.9z" />
            </svg>
          ),
        },
      ],
      moreCount: "+2 more",
    },

    // 02 - Backend & APIs
    {
      num: "02",
      title: "Backend & APIs",
      description: "Scalable APIs and robust backend systems with modern frameworks.",
      image: "/images/service-database.png",
      borderColor: "border-[#F0E6FF]",
      accentLineBg: "bg-[#8B5CF6]",
      radialGlow: "bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.10),_transparent_70%)]",
      badgeBg: "bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white shadow-[0_6px_16px_rgba(139,92,246,0.28)]",
      arrowStyle: "bg-[#F5EDFF] text-[#8B5CF6] border-[#E9D5FF] hover:bg-[#8B5CF6] hover:text-white",
      topIcon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
      row1: [
        {
          name: "Node.js",
          logo: (
            <span className="w-3.5 h-3.5 rounded-xs bg-[#5FA04E] text-white flex items-center justify-center text-[7px] font-bold leading-none">
              ⬢
            </span>
          ),
        },
        {
          name: "NestJS",
          logo: (
            <span className="w-3.5 h-3.5 rounded-full bg-[#E0234E] text-white flex items-center justify-center text-[7.5px] font-black leading-none">
              N
            </span>
          ),
        },
        {
          name: "Go (Golang)",
          logo: (
            <span className="w-3.5 h-3.5 rounded-xs bg-[#00ADD8] text-white flex items-center justify-center text-[6.5px] font-bold leading-none">
              GO
            </span>
          ),
        },
      ],
      row2: [
        {
          name: "Python",
          logo: (
            <svg className="w-3.5 h-3.5 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c-5 0-4.5 2.2-4.5 2.2V6.5h4.6v.7H5.6S2 6.7 2 11.8s3.4 4.9 3.4 4.9h2v-2.8s-.1-3.3 3.3-3.3h5.7s3.1.1 3.1-3.1V4.9S20 2 12 2z" />
            </svg>
          ),
        },
        {
          name: "Java",
          logo: (
            <span className="w-3.5 h-3.5 text-[#5382A1] font-black text-[9px] flex items-center justify-center leading-none">
              ☕
            </span>
          ),
        },
      ],
      moreCount: "+3 more",
    },

    // 03 - AI & Big Data
    {
      num: "03",
      title: "AI & Big Data",
      description: "Intelligent systems and data pipelines for actionable insights.",
      image: "/images/service-analytics.png",
      borderColor: "border-[#E0F7F4]",
      accentLineBg: "bg-[#0D9488]",
      radialGlow: "bg-[radial-gradient(ellipse_at_bottom_right,_rgba(13,148,136,0.10),_transparent_70%)]",
      badgeBg: "bg-gradient-to-br from-[#0D9488] to-[#14B8A6] text-white shadow-[0_6px_16px_rgba(13,148,136,0.28)]",
      arrowStyle: "bg-[#E6FBFA] text-[#0D9488] border-[#B2F5EA] hover:bg-[#0D9488] hover:text-white",
      topIcon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      row1: [
        {
          name: "TensorFlow",
          logo: (
            <span className="w-3.5 h-3.5 text-[#FF6F00] font-black text-[7.5px] flex items-center justify-center leading-none">
              TF
            </span>
          ),
        },
        {
          name: "PyTorch",
          logo: (
            <span className="w-3.5 h-3.5 text-[#EE4C2C] font-black text-[9px] flex items-center justify-center leading-none">
              🔥
            </span>
          ),
        },
        {
          name: "LangChain",
          logo: (
            <span className="w-3.5 h-3.5 text-[#00A67E] font-black text-[9px] flex items-center justify-center leading-none">
              🦜
            </span>
          ),
        },
      ],
      row2: [
        {
          name: "OpenAI APIs",
          logo: (
            <svg className="w-3.5 h-3.5 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
        {
          name: "Pandas",
          logo: (
            <span className="w-3.5 h-3.5 text-[#150458] font-bold text-[7.5px] flex items-center justify-center leading-none">
              PD
            </span>
          ),
        },
      ],
      moreCount: "+4 more",
    },

    // 04 - Cloud & DevOps
    {
      num: "04",
      title: "Cloud & DevOps",
      description: "Automated deployments, monitoring, and scalable cloud infrastructure.",
      image: "/images/service-cloud-devops.png",
      borderColor: "border-[#E0ECFF]",
      accentLineBg: "bg-[#2563EB]",
      radialGlow: "bg-[radial-gradient(ellipse_at_bottom_right,_rgba(37,99,235,0.10),_transparent_70%)]",
      badgeBg: "bg-gradient-to-br from-[#2563EB] to-[#60A5FA] text-white shadow-[0_6px_16px_rgba(37,99,235,0.28)]",
      arrowStyle: "bg-[#EEF4FF] text-[#2563EB] border-[#C7D9FE] hover:bg-[#2563EB] hover:text-white",
      topIcon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      row1: [
        {
          name: "AWS",
          logo: (
            <span className="w-3.5 h-3.5 text-[#FF9900] font-black text-[7px] flex items-center justify-center leading-none">
              aws
            </span>
          ),
        },
        {
          name: "Docker",
          logo: (
            <span className="w-3.5 h-3.5 text-[#2496ED] font-black text-[9px] flex items-center justify-center leading-none">
              🐳
            </span>
          ),
        },
        {
          name: "Kubernetes",
          logo: (
            <span className="w-3.5 h-3.5 text-[#326CE5] font-black text-[7px] flex items-center justify-center leading-none">
              K8s
            </span>
          ),
        },
      ],
      row2: [
        {
          name: "Terraform",
          logo: (
            <span className="w-3.5 h-3.5 text-[#844FBA] font-extrabold text-[8px] flex items-center justify-center leading-none">
              TF
            </span>
          ),
        },
        {
          name: "GitHub Actions",
          logo: (
            <svg className="w-3.5 h-3.5 text-[#2088FF]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          ),
        },
      ],
      moreCount: "+3 more",
    },

    // 05 - Databases
    {
      num: "05",
      title: "Databases",
      description: "Relational, NoSQL, and in-memory databases for any scale.",
      image: "/images/service-data-architecture.png",
      borderColor: "border-[#E2F7EA]",
      accentLineBg: "bg-[#16A34A]",
      radialGlow: "bg-[radial-gradient(ellipse_at_bottom_right,_rgba(22,163,74,0.10),_transparent_70%)]",
      badgeBg: "bg-gradient-to-br from-[#16A34A] to-[#4ADE80] text-white shadow-[0_6px_16px_rgba(22,163,74,0.28)]",
      arrowStyle: "bg-[#EDFDF3] text-[#16A34A] border-[#B7F4CE] hover:bg-[#16A34A] hover:text-white",
      topIcon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      row1: [
        {
          name: "PostgreSQL",
          logo: (
            <span className="w-3.5 h-3.5 text-[#336791] font-black text-[7px] flex items-center justify-center leading-none">
              PG
            </span>
          ),
        },
        {
          name: "MongoDB",
          logo: (
            <span className="w-3.5 h-3.5 text-[#47A248] font-bold text-[8px] flex items-center justify-center leading-none">
              🍃
            </span>
          ),
        },
        {
          name: "MySQL",
          logo: (
            <span className="w-3.5 h-3.5 text-[#00758F] font-black text-[7px] flex items-center justify-center leading-none">
              SQL
            </span>
          ),
        },
      ],
      row2: [
        {
          name: "Redis",
          logo: (
            <span className="w-3.5 h-3.5 text-[#DC382D] font-extrabold text-[8px] flex items-center justify-center leading-none">
              R
            </span>
          ),
        },
        {
          name: "ElasticSearch",
          logo: (
            <span className="w-3.5 h-3.5 text-[#005571] font-bold text-[7px] flex items-center justify-center leading-none">
              ES
            </span>
          ),
        },
      ],
      moreCount: "+2 more",
    },

    // 06 - Platforms
    {
      num: "06",
      title: "Platforms",
      description: "Cross-platform solutions for web, mobile, and beyond.",
      image: "/images/service-platforms.png",
      borderColor: "border-[#FFE5EB]",
      accentLineBg: "bg-[#E11D48]",
      radialGlow: "bg-[radial-gradient(ellipse_at_bottom_right,_rgba(225,29,72,0.10),_transparent_70%)]",
      badgeBg: "bg-gradient-to-br from-[#E11D48] to-[#FB7185] text-white shadow-[0_6px_16px_rgba(225,29,72,0.28)]",
      arrowStyle: "bg-[#FFF0F3] text-[#E11D48] border-[#FFC5D0] hover:bg-[#E11D48] hover:text-white",
      topIcon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      row1: [
        {
          name: "Vercel",
          logo: (
            <span className="w-3.5 h-3.5 text-black font-black text-[8px] flex items-center justify-center leading-none">
              ▲
            </span>
          ),
        },
        {
          name: "Netlify",
          logo: (
            <span className="w-3.5 h-3.5 text-[#00C7B7] font-bold text-[7px] flex items-center justify-center leading-none">
              N
            </span>
          ),
        },
        {
          name: "Firebase",
          logo: (
            <span className="w-3.5 h-3.5 text-[#FFCA28] font-bold text-[8px] flex items-center justify-center leading-none">
              🔥
            </span>
          ),
        },
      ],
      row2: [
        {
          name: "Android",
          logo: (
            <span className="w-3.5 h-3.5 text-[#3DDC84] font-bold text-[8px] flex items-center justify-center leading-none">
              🤖
            </span>
          ),
        },
        {
          name: "iOS",
          logo: (
            <span className="w-3.5 h-3.5 text-black font-bold text-[9px] flex items-center justify-center leading-none">
              
            </span>
          ),
        },
      ],
      moreCount: "+2 more",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white text-[#1A1A1A] py-14 lg:py-20 border-t border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF5F00]">
            <span className="h-2 w-2 rounded-full bg-[#FF5F00] animate-pulse" />
            OUR TECH STACK
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl leading-tight">
            Our Technical Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
            We leverage modern language patterns, framework ecosystems, and infrastructure orchestration.
          </p>
        </div>

        {/* 6 Tech Stack Cards Grid - Compact & Perfectly Proportionate */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stackData.map((card) => (
            <div
              key={card.num}
              className={`group relative flex flex-col justify-between rounded-[28px] border ${card.borderColor} bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden`}
            >
              {/* Radial Accent Glow at Bottom Right */}
              <div className={`absolute inset-0 ${card.radialGlow} pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

              <div>
                {/* Top Row: Left Squircle Badge + Right Number */}
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.badgeBg}`}>
                    {card.topIcon}
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-[#CBD5E1]/50 select-none">
                    {card.num}
                  </span>
                </div>

                {/* Middle Content: Title, Underline Accent, Description + Large Transparent 3D Graphic */}
                <div className="mt-5 relative min-h-[95px] flex items-start justify-between">
                  <div className="pr-2 z-10 max-w-[190px] sm:max-w-[210px]">
                    <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#FF5F00] transition-colors">
                      {card.title}
                    </h3>

                    {/* Color Accent Underline */}
                    <div className={`w-9 h-1 rounded-full mt-2 mb-2.5 ${card.accentLineBg}`} />

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* 3D Isometric Graphic Illustration - Large & Transparent via mix-blend-multiply */}
                  <div className="absolute right-[-16px] top-[-10px] w-36 h-36 sm:w-44 sm:h-44 shrink-0 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-108 group-hover:-translate-y-1">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="176px"
                      className="object-contain object-center mix-blend-multiply"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Tech Pills Rows + Arrow Button */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] z-10 space-y-2.5">
                {/* Row 1 Pills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {card.row1.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-semibold text-[#1E293B] shadow-2xs transition-colors hover:border-[#CBD5E1]"
                    >
                      {tech.logo}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>

                {/* Row 2 Pills + Arrow Button */}
                <div className="flex items-center justify-between gap-2 pt-0.5">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {card.row2.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-semibold text-[#1E293B] shadow-2xs transition-colors hover:border-[#CBD5E1]"
                      >
                        {tech.logo}
                        <span>{tech.name}</span>
                      </span>
                    ))}
                    {/* +X More Pill */}
                    <span className="inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-xs font-bold text-[#64748B]">
                      {card.moreCount}
                    </span>
                  </div>

                  {/* Theme Arrow Action Button */}
                  <button
                    type="button"
                    aria-label={`View ${card.title} stack details`}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 shadow-2xs cursor-pointer ${card.arrowStyle}`}
                  >
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
