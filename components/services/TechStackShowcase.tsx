"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TechItem {
  name: string;
  logo: React.ReactNode;
}

interface CategoryPipelineDetails {
  purpose: string;
  roleInStack: string;
  whyWeUseIt: string;
  keyBenefits: string;
  businessImpact: string;
  category3DIcon: React.ReactNode;
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
  pipeline: CategoryPipelineDetails;
}

export default function TechStackShowcase() {
  const [expandedNum, setExpandedNum] = useState<string | null>(null);

  const toggleExpand = (num: string) => {
    setExpandedNum((prev) => (prev === num ? null : num));
  };

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
      badgeBg: "bg-gradient-to-br from-[#FF5F00] to-[#FF7A26] text-white shadow-[0_4px_12px_rgba(255,95,0,0.25)]",
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
      pipeline: {
        purpose: "To build fast, responsive, and interactive user interfaces.",
        roleInStack: "Handles everything users see and interact with in the application.",
        whyWeUseIt: "These technologies help us deliver clean, scalable, and high-performance frontend applications.",
        keyBenefits: "Faster development, better performance, scalability, and a strong developer ecosystem.",
        businessImpact: "Deliver seamless user experiences that drive engagement and business growth.",
        category3DIcon: <Icon3DCodeWindow />,
      },
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
      badgeBg: "bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white shadow-[0_4px_12px_rgba(139,92,246,0.25)]",
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
      pipeline: {
        purpose: "Build secure APIs and application business logic.",
        roleInStack: "Processes requests, manages business rules and connects frontend applications with databases and external services.",
        whyWeUseIt: "Modern backend frameworks allow us to build scalable APIs and reliable enterprise applications.",
        keyBenefits: "High scalability, enterprise security, API performance, and long-term maintainability.",
        businessImpact: "Reliable backend architecture that supports mission-critical business growth.",
        category3DIcon: <Icon3DServerStack />,
      },
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
      badgeBg: "bg-gradient-to-br from-[#0D9488] to-[#14B8A6] text-white shadow-[0_4px_12px_rgba(13,148,136,0.25)]",
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
      pipeline: {
        purpose: "Turn business data into intelligent insights and automation.",
        roleInStack: "Provides machine learning, AI agents, analytics and data-processing capabilities.",
        whyWeUseIt: "AI technologies help automate repetitive workflows, improve decision-making and create intelligent product experiences.",
        keyBenefits: "Intelligent automation, data-driven decisions, predictive capabilities, and process optimization.",
        businessImpact: "Reduce operational effort and create new business opportunities through AI.",
        category3DIcon: <Icon3DAICube />,
      },
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
      badgeBg: "bg-gradient-to-br from-[#2563EB] to-[#60A5FA] text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]",
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
      pipeline: {
        purpose: "Deploy and operate applications reliably.",
        roleInStack: "Handles infrastructure, deployment, monitoring and scaling.",
        whyWeUseIt: "Cloud and DevOps technologies provide flexible infrastructure and faster releases.",
        keyBenefits: "High availability, automated CI/CD deployment pipelines, and active monitoring.",
        businessImpact: "Reliable applications with faster delivery and lower operational overhead.",
        category3DIcon: <Icon3DCloudDevOps />,
      },
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
      badgeBg: "bg-gradient-to-br from-[#16A34A] to-[#4ADE80] text-white shadow-[0_4px_12px_rgba(22,163,74,0.25)]",
      arrowStyle: "bg-[#EDFDF3] text-[#16A34A] border-[#B7F4CE] hover:bg-[#16A34A] hover:text-white",
      topIcon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s-8 1.79-8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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
      pipeline: {
        purpose: "Store and manage application data securely.",
        roleInStack: "Provides persistent data storage and fast data access.",
        whyWeUseIt: "Different database technologies allow us to choose the right storage architecture for each business requirement.",
        keyBenefits: "High data reliability, query performance, horizontal scalability, and flexible storage.",
        businessImpact: "Secure, compliant, and reliable enterprise data management.",
        category3DIcon: <Icon3DDatabaseCylinder />,
      },
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
      badgeBg: "bg-gradient-to-br from-[#E11D48] to-[#FB7185] text-white shadow-[0_4px_12px_rgba(225,29,72,0.25)]",
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
      pipeline: {
        purpose: "Deliver applications across web, mobile and cloud platforms.",
        roleInStack: "Provides deployment and cross-platform application capabilities.",
        whyWeUseIt: "Modern platforms allow us to deliver consistent experiences across multiple devices and environments.",
        keyBenefits: "Cross-platform support, faster deployment, architectural flexibility, and broader user reach.",
        businessImpact: "Reach more users across different platforms and touchpoints.",
        category3DIcon: <Icon3DPlatformsDevices />,
      },
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white text-[#1A1A1A] pt-4 sm:pt-6 pb-12 lg:pb-16 border-t border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF5F00]">
            <span className="h-2 w-2 rounded-full bg-[#FF5F00] animate-pulse" />
            OUR TECH STACK
          </span>
          <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl leading-tight">
            Our Technical Stack
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
            We leverage modern language patterns, framework ecosystems, and infrastructure orchestration.
          </p>
        </div>

        {/* 6 Tech Stack Cards Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {stackData.map((card) => (
            <TechStackCardItem
              key={card.num}
              card={card}
              isExpanded={expandedNum === card.num}
              onToggle={() => toggleExpand(card.num)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

{/* CARD ITEM WITH INNER SCROLL & SMOOTH ACCORDION COLLAPSE */}
function TechStackCardItem({
  card,
  isExpanded,
  onToggle,
}: {
  card: StackCardData;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const allTechs = [...card.row1, ...card.row2];

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-[28px] border ${
        isExpanded
          ? "sm:col-span-2 lg:col-span-3 border-2 border-[#FF5F00] bg-white shadow-[0_16px_50px_rgba(255,95,0,0.12)] p-5 sm:p-6"
          : `${card.borderColor} bg-white p-4 sm:p-5 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]`
      } transition-all duration-400 ease-in-out overflow-hidden`}
    >
      {/* Radial Accent Glow */}
      <div className={`absolute inset-0 ${card.radialGlow} pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

      <div>
        {/* Top Header: Badge + Title/Number + Close Button */}
        <div className="flex items-center justify-between z-10 relative">
          <div className="flex items-center gap-3">
            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${card.badgeBg}`}>
              {card.topIcon}
            </div>
            {isExpanded && (
              <span className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                {card.title}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#CBD5E1]/50 select-none">
              {card.num}
            </span>

            {/* TOP-RIGHT CLOSE BUTTON WHEN EXPANDED */}
            {isExpanded && (
              <button
                type="button"
                onClick={onToggle}
                aria-label="Close card details"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF2EA] text-[#FF5F00] border border-[#FFD9C2] hover:bg-[#FF5F00] hover:text-white font-bold text-xs transition-colors cursor-pointer shadow-2xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Title, Accent Bar & Description */}
        <div className="mt-3 relative z-10 flex items-start justify-between">
          <div className={`pr-2 z-10 ${isExpanded ? "max-w-2xl" : "max-w-[190px] sm:max-w-[210px]"}`}>
            {!isExpanded && (
              <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#FF5F00] transition-colors">
                {card.title}
              </h3>
            )}

            {/* Accent Line */}
            <div className={`w-8 h-1 rounded-full mt-1.5 mb-2 ${card.accentLineBg}`} />

            <p className="text-xs text-[#64748B] leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* 3D Graphic Asset */}
          <div
            className={`absolute right-[-10px] top-[-10px] ${
              isExpanded ? "w-32 h-32 sm:w-36 sm:h-36 right-2" : "w-32 h-32 sm:w-36 sm:h-36"
            } shrink-0 pointer-events-none transition-all duration-300 ease-out group-hover:scale-105`}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="144px"
              className="object-contain object-center mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* Middle Tech Pills Row */}
      <div className="mt-4 pt-3 border-t border-[#F1F5F9] z-10">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {isExpanded
              ? allTechs.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-[11.5px] font-semibold text-[#1E293B] shadow-2xs"
                  >
                    {tech.logo}
                    <span>{tech.name}</span>
                  </span>
                ))
              : card.row1.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-2.5 py-1 text-[11.5px] font-semibold text-[#1E293B] shadow-2xs transition-colors hover:border-[#CBD5E1]"
                  >
                    {tech.logo}
                    <span>{tech.name}</span>
                  </span>
                ))}

            {!isExpanded && (
              <span className="inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-bold text-[#64748B]">
                {card.moreCount}
              </span>
            )}
          </div>

          {/* UP ARROW BUTTON */}
          <button
            type="button"
            onClick={onToggle}
            aria-label={isExpanded ? "Collapse card details" : "Expand card details"}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-extrabold transition-all duration-300 shadow-2xs cursor-pointer ${
              isExpanded
                ? "bg-[#FF5F00] text-white border-[#FF5F00] scale-105 shadow-sm shadow-orange-500/30"
                : card.arrowStyle
            }`}
          >
            {isExpanded ? (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* EXPANDED INNER SCROLL & COLLAPSE CONTAINER */}
      <div
        className={`grid transition-all duration-400 ease-in-out ${
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-5 pt-5 border-t border-[#F1F5F9]" : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-none"
        }`}
      >
        <div className="overflow-hidden">
          {/* INNER SCROLL PIPELINE CONTAINER */}
          <div className="max-h-[220px] sm:max-h-[240px] overflow-y-auto pr-2 custom-orange-scrollbar space-y-4">
            {/* 5-Step Connected Pipeline */}
            <ExpandedPipelineInCard pipeline={card.pipeline} />

            {/* 2x2 Why This Stack Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-5 rounded-2xl bg-[#FFF9F4] border border-[#FFE8DA]">
              <StackCheckItem
                title="Component-Based Architecture"
                description="Build reusable UI components for consistent and maintainable code."
              />
              <StackCheckItem
                title="SEO Friendly"
                description="Frameworks like Next.js enable server-side rendering for better search visibility."
              />
              <StackCheckItem
                title="High Performance"
                description="Optimized rendering and efficient state management for faster user experiences."
              />
              <StackCheckItem
                title="Scalable & Maintainable"
                description="Modern tooling and best practices ensure long-term scalability and easy maintenance."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* 5-STEP PIPELINE RENDERER WITH 3D ICONS AND CIRCULAR CONNECTOR NODES */}
function ExpandedPipelineInCard({ pipeline }: { pipeline: CategoryPipelineDetails }) {
  const steps = [
    {
      title: "Purpose",
      desc: pipeline.purpose,
      icon: <Icon3DTargetBullseye />,
      isHighlighted: false,
    },
    {
      title: "Role in Stack",
      desc: pipeline.roleInStack,
      icon: <Icon3DPuzzlePiece />,
      isHighlighted: false,
    },
    {
      title: "Why We Use It",
      desc: pipeline.whyWeUseIt,
      icon: pipeline.category3DIcon,
      isHighlighted: true, // HIGHLIGHTED FEATURED STEP!
    },
    {
      title: "Key Benefits",
      desc: pipeline.keyBenefits,
      icon: <Icon3DGrowthChart />,
      isHighlighted: false,
    },
    {
      title: "Impact",
      desc: pipeline.businessImpact,
      icon: <Icon3DRocketLaunch />,
      isHighlighted: false,
    },
  ];

  return (
    <div className="relative">
      {/* Dashed Connector Line with Circular Connector Nodes */}
      <div className="hidden lg:flex items-center justify-between absolute top-[40px] left-[10%] right-[10%] z-0 pointer-events-none">
        <ConnectorDotLine />
        <ConnectorDotLine />
        <ConnectorDotLine />
        <ConnectorDotLine />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 relative z-10">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex flex-col items-center">
            {/* Step Card */}
            <div
              className={`w-full h-full flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 ${
                step.isHighlighted
                  ? "bg-[#FFF9F5] border-2 border-[#FF5F00] shadow-md ring-2 ring-[#FF5F00]/15"
                  : "bg-white border border-[#E8E0D8] shadow-2xs hover:border-[#FF5F00]/30"
              }`}
            >
              {/* Vibrant 3D Icon Badge Container */}
              <div className="mb-3.5 relative flex items-center justify-center">
                {step.icon}
              </div>

              <h4
                className={`text-xs font-extrabold mb-1.5 ${
                  step.isHighlighted ? "text-[#FF5F00]" : "text-[#0F172A]"
                }`}
              >
                {step.title}
              </h4>

              <p className="text-[11px] text-[#64748B] leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Mobile Connector Arrow */}
            {idx < steps.length - 1 && (
              <div className="lg:hidden text-[#FF5F00] font-bold text-xs py-1">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

{/* CONNECTOR LINE WITH CIRCULAR NODE (o-----o-----o) */}
function ConnectorDotLine() {
  return (
    <div className="flex-1 flex items-center justify-center relative">
      <div className="w-full h-[1.5px] border-t-2 border-dashed border-[#FF5F00]/40" />
      <div className="absolute h-3 w-3 rounded-full border-2 border-[#FF5F00] bg-white flex items-center justify-center shadow-xs">
        <div className="h-1 w-1 rounded-full bg-[#FF5F00]" />
      </div>
    </div>
  );
}

{/* 3D ICON BADGE COMPONENTS MATCHING REFERENCE UI */}

function Icon3DTargetBullseye() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF5F00] to-[#FF8738] p-2 shadow-[0_8px_20px_rgba(255,95,0,0.32)]">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.5" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        <path d="M14.5 9.5L20 4M20 4H16M20 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Icon3DPuzzlePiece() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FFA048] p-2 shadow-[0_8px_20px_rgba(255,106,0,0.30)]">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.5 4.5a2 2 0 013 0v1h1.5a2 2 0 012 2v1.5h1a2 2 0 010 3h-1v1.5a2 2 0 01-2 2H13.5v1a2 2 0 01-3 0v-1H9a2 2 0 01-2-2V12H6a2 2 0 010-3h1V7.5a2 2 0 012-2h1.5v-1z" />
      </svg>
    </div>
  );
}

function Icon3DCodeWindow() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF5F00] via-[#FF7824] to-[#FFA14A] p-2 shadow-[0_10px_25px_rgba(255,95,0,0.38)] ring-2 ring-[#FF5F00]/20">
      <div className="flex flex-col w-full h-full justify-between">
        <div className="flex items-center gap-1 border-b border-white/30 pb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
        <div className="flex items-center justify-center text-white font-extrabold text-xs tracking-wider">
          &lt;/&gt;
        </div>
      </div>
    </div>
  );
}

function Icon3DServerStack() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] p-2 shadow-[0_10px_25px_rgba(139,92,246,0.38)] ring-2 ring-[#8B5CF6]/20">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="5" rx="2" />
        <rect x="3" y="11" width="18" height="5" rx="2" />
        <rect x="3" y="18" width="18" height="5" rx="2" />
        <circle cx="7" cy="6.5" r="1" fill="currentColor" />
        <circle cx="7" cy="13.5" r="1" fill="currentColor" />
        <circle cx="7" cy="20.5" r="1" fill="currentColor" />
      </svg>
    </div>
  );
}

function Icon3DAICube() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#2DD4BF] p-2 shadow-[0_10px_25px_rgba(13,148,136,0.38)] ring-2 ring-[#0D9488]/20">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
  );
}

function Icon3DCloudDevOps() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#60A5FA] p-2 shadow-[0_10px_25px_rgba(37,99,235,0.38)] ring-2 ring-[#2563EB]/20">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    </div>
  );
}

function Icon3DDatabaseCylinder() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#16A34A] to-[#4ADE80] p-2 shadow-[0_10px_25px_rgba(22,163,74,0.38)] ring-2 ring-[#16A34A]/20">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    </div>
  );
}

function Icon3DPlatformsDevices() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E11D48] to-[#FB7185] p-2 shadow-[0_10px_25px_rgba(225,29,72,0.38)] ring-2 ring-[#E11D48]/20">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    </div>
  );
}

function Icon3DGrowthChart() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF5F00] to-[#FFA04A] p-2 shadow-[0_8px_20px_rgba(255,95,0,0.32)]">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" />
        <path d="M4 8l4-4 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Icon3DRocketLaunch() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF5F00] to-[#FF8030] p-2 shadow-[0_8px_20px_rgba(255,95,0,0.32)]">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.13 2.25a1 1 0 00-1.26 0C9.36 4.14 7 7.78 7 12a7 7 0 003.5 6.06V21a1 1 0 001.5.86l2-1.14 2 1.14a1 1 0 001.5-.86v-2.94A7 7 0 0021 12c0-4.22-2.36-7.86-4.87-9.75z" />
      </svg>
    </div>
  );
}

function StackCheckItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#FF5F00] text-white text-[9px] font-black mt-0.5 shadow-2xs">
        ✓
      </div>
      <div>
        <h5 className="text-xs font-extrabold text-[#0F172A]">{title}</h5>
        <p className="text-[11px] text-[#64748B] leading-relaxed mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
}
