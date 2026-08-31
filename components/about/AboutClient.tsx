"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { productsData } from "@/data/products";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  github: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Vikram Malhotra",
    role: "Chief Executive Officer & Founder",
    bio: "Ex-Google Staff Engineer with 15+ years architecting enterprise distributed backends and machine learning workflows.",
    image: "/team/vikram.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "Chief AI Architect",
    bio: "PhD in Neural Systems from Stanford. Directs our predictive modeling, multi-agent pipelines, and vector RAG pipelines.",
    image: "/team/sarah.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Arjun Mehta",
    role: "Head of Software Engineering",
    bio: "Specializes in secure compiler languages, high-performance PostgreSQL tuning, and Spring Boot microservice registries.",
    image: "/team/arjun.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Elena Rostova",
    role: "VP of Cloud & Infrastructure",
    bio: "Orchestrates multi-region Kubernetes clusters and automated GitOps continuous deployment networks on AWS and GCP.",
    image: "/team/elena.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Rohan Das",
    role: "Lead UI/UX Architect",
    bio: "Creates responsive token-driven interface guidelines and dynamic web interactions keeping pixel-perfect consistency.",
    image: "/team/rohan.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Mia Thorne",
    role: "Director of Product Management",
    bio: "Translates complex operational requirements into high-value product sprints and client delivery frameworks.",
    image: "/team/mia.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];
export function AboutClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF8F5] overflow-hidden pt-24" ref={containerRef}>

        {/* Banner Hero */}
        <section className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-4 lg:pt-12 lg:pb-6">

          <div className="section-shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 items-center">

              {/* Left Column: Image with rounded corners directly */}
              <div className="lg:col-span-5">
                <div className="relative aspect-square w-full max-w-[440px] mx-auto overflow-hidden rounded-[2.5rem] border border-slate-200/80 shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-white">
                  <Image
                    src="/images/about-hero-developers.jpg"
                    alt="Your Perfect Engineering Partner"
                    fill
                    className="object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, 440px"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Title, Description & Stats Layout */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.15]">
                  Your Perfect <span className="bg-gradient-to-r from-[#FF6A00] to-[#E64A00] bg-clip-text text-transparent">Engineering</span> <br />
                  Partner
                </h1>

                <div className="space-y-4 text-base leading-relaxed text-muted max-w-2xl">
                  <p>
                    Company Name, established in Bhosari, Pune, is an enterprise software engineering company. We run contract engineering, full-stack deployment, quality verification, and dedicated developer teams under our plant-in-plant squad delivery model.
                  </p>
                  <p>
                    Our clients build cloud architectures, high-performance backends, artificial intelligence platforms, custom fintech platforms, and responsive microservice frameworks.
                  </p>
                </div>

                {/* Grid Stats matching mockup layout */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center border-t border-line/40 pt-8">

                  {/* Big Stat Left */}
                  <div className="sm:col-span-5 relative flex items-center gap-4">
                    <div className="w-[3px] self-stretch bg-gradient-to-b from-[#FF5F00] to-[#EB001B] rounded-full" />
                    <div className="relative py-1">
                      {/* Large background text */}
                      <div className="text-6xl font-black text-slate-200/50 absolute left-0 top-[-8px] select-none pointer-events-none font-sans leading-none z-0">
                        15+
                      </div>
                      <div className="relative z-10 space-y-1">
                        <div className="text-2xl font-extrabold text-ink leading-none">Years</div>
                        <div className="text-xs font-bold text-muted uppercase tracking-wider">Industry Experience</div>
                      </div>
                    </div>
                  </div>

                  {/* List Stats Right */}
                  <div className="sm:col-span-7 space-y-4">

                    {/* Stat Row 1 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100/80 text-purple-600">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">35+ Clients</div>
                        <div className="text-xs text-muted">Active enterprise customers globally</div>
                      </div>
                    </div>

                    {/* Stat Row 2 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100/80 text-orange-600">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">$12.5M+ Turnover</div>
                        <div className="text-xs text-muted">Annualized project delivery runrate</div>
                      </div>
                    </div>

                    {/* Stat Row 3 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100/80 text-green-600">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">4000+ Workforce</div>
                        <div className="text-xs text-muted">Total developers, QA and cloud engineers</div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Goal, Vision & Mission Flow Timeline */}
        <section className="pillars-section">
          {/* Custom style matching the exact HTML template */}
          <style dangerouslySetInnerHTML={{ __html: `
            .pillars-section {
              width: 100%;
              padding: 40px 20px;
              background:
                linear-gradient(
                  rgba(250, 248, 245, 0.92),
                  rgba(250, 248, 245, 0.92)
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent 0,
                  transparent 47px,
                  rgba(30, 41, 59, 0.035) 48px
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent 0,
                  transparent 47px,
                  rgba(30, 41, 59, 0.035) 48px
                );
            }

            .pillars-container {
              position: relative;
              max-width: 1400px;
              margin: auto;
              padding: 35px 50px 55px;
              border: 1px solid #e6ded2;
              border-radius: 30px;
              background: rgba(255, 253, 249, 0.9);
              box-shadow:
                0 20px 60px rgba(30, 41, 59, 0.08),
                inset 0 1px 0 rgba(255,255,255,0.8);
              overflow: hidden;
            }

            .pillars-header {
              text-align: center;
              position: relative;
              z-index: 5;
            }

            .eyebrow {
              display: inline-flex;
              align-items: center;
              gap: 9px;
              color: #ff5a0a;
              font-size: 12px;
              font-weight: 800;
              letter-spacing: 4px;
              text-transform: uppercase;
              margin-bottom: 15px;
            }

            .eyebrow::before,
            .eyebrow::after {
              content: "";
              width: 20px;
              height: 1px;
              background: #ffb28b;
            }

            .eyebrow::before {
              box-shadow: -7px 0 0 #ff5a0a;
            }

            .eyebrow::after {
              box-shadow: 7px 0 0 #ff5a0a;
            }

            .pillars-header h2 {
              font-size: clamp(32px, 4vw, 55px);
              line-height: 1.05;
              letter-spacing: -2.5px;
              font-weight: 800;
              color: #0e1726;
            }

            .pillars-header p {
              margin-top: 16px;
              color: #687386;
              font-size: 15px;
              line-height: 1.6;
            }

            .pillars-content {
              position: relative;
              margin-top: 35px;
            }

            .pillars-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              position: relative;
              z-index: 3;
            }

            .connector {
              position: absolute;
              top: 40px;
              left: 12%;
              right: 12%;
              height: 95px;
              z-index: 1;
              pointer-events-none;
            }

            .connector svg {
              width: 100%;
              height: 100%;
              overflow: visible;
            }

            .connector-bg {
              fill: none;
              stroke: #edf0f1;
              stroke-width: 18;
              stroke-linecap: round;
            }

            .connector-orange {
              fill: none;
              stroke: #ff6a18;
              stroke-width: 7;
              stroke-linecap: round;
            }

            .connector-blue {
              fill: none;
              stroke: #77afe4;
              stroke-width: 7;
              stroke-linecap: round;
            }

            .connector-green {
              fill: none;
              stroke: #a5ce9d;
              stroke-width: 7;
              stroke-linecap: round;
            }

            .pillar {
              position: relative;
              text-align: center;
              padding: 0 35px;
            }

            .icon-wrapper {
              position: relative;
              width: 86px;
              height: 86px;
              margin: 0 auto 25px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #fffdfa;
              border: 7px solid #fff;
              box-shadow:
                0 5px 20px rgba(15, 23, 42, 0.08),
                0 0 0 2px rgba(255, 255, 255, 0.8);
              z-index: 5;
            }

            .icon-wrapper::before {
              content: "";
              position: absolute;
              inset: -10px;
              border-radius: 50%;
              z-index: -1;
              opacity: 0.55;
            }

            .mission .icon-wrapper {
              color: #ff6a18;
            }

            .mission .icon-wrapper::before {
              background: #ffe4d4;
            }

            .vision .icon-wrapper {
              color: #3d86ca;
            }

            .vision .icon-wrapper::before {
              background: #dcecff;
            }

            .goal .icon-wrapper {
              color: #68a960;
            }

            .goal .icon-wrapper::before {
              background: #e2f1df;
            }

            .icon {
              width: 31px;
              height: 31px;
              stroke: currentColor;
              stroke-width: 2;
              fill: none;
            }

            .number {
              position: absolute;
              top: 85px;
              left: 50%;
              transform: translateX(-50%);
              width: 24px;
              height: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 5px;
              font-size: 10px;
              font-weight: 800;
              color: white;
              z-index: 5;
            }

            .mission .number {
              background: #ff6a18;
            }

            .vision .number {
              background: #5d9bd0;
            }

            .goal .number {
              background: #77b36d;
            }

            .number::after {
              content: "";
              position: absolute;
              top: 20px;
              left: 50%;
              transform: translateX(-50%);
              width: 1px;
              height: 10px;
            }

            .mission .number::after {
              background: #ff6a18;
            }

            .vision .number::after {
              background: #5d9bd0;
            }

            .goal .number::after {
              background: #77b36d;
            }

            .pillar h3 {
              margin-top: 25px;
              margin-bottom: 13px;
              font-size: 20px;
              font-weight: 800;
              letter-spacing: -0.5px;
              color: #0e1726;
            }

            .pillar h3::after {
              content: "";
              display: block;
              width: 18px;
              height: 2px;
              margin: 9px auto 0;
              border-radius: 10px;
            }

            .mission h3::after {
              background: #ff6a18;
            }

            .vision h3::after {
              background: #5d9bd0;
            }

            .goal h3::after {
              background: #77b36d;
            }

            .pillar p {
              max-width: 340px;
              margin: auto;
              color: #697486;
              font-size: 13px;
              line-height: 1.65;
            }

            .highlights {
              position: relative;
              z-index: 4;
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              margin-top: 48px;
              padding-top: 25px;
              border-top: 1px solid #ebe4da;
            }

            .highlight {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 13px;
              padding: 0 25px;
              border-right: 1px solid #ebe4da;
            }

            .highlight:last-child {
              border-right: none;
            }

            .highlight-icon {
              width: 38px;
              height: 38px;
              flex-shrink: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              background: #fff;
              box-shadow: 0 4px 12px rgba(15,23,42,0.07);
            }

            .highlight-icon svg {
              width: 19px;
              height: 19px;
            }

            .highlight:nth-child(1) .highlight-icon {
              color: #ff6a18;
            }

            .highlight:nth-child(2) .highlight-icon {
              color: #5d9bd0;
            }

            .highlight:nth-child(3) .highlight-icon {
              color: #77b36d;
            }

            .highlight-text strong {
              display: block;
              margin-bottom: 2px;
              color: #344054;
              font-size: 12px;
              font-weight: 800;
            }

            .highlight-text span {
              color: #8993a3;
              font-size: 10px;
            }

            .pillar {
              transition: transform 0.35s ease;
            }

            .pillar:hover {
              transform: translateY(-6px);
            }

            .pillar:hover .icon-wrapper {
              box-shadow:
                0 12px 28px rgba(15, 23, 42, 0.12),
                0 0 0 7px rgba(255,255,255,0.7);
            }

            @media (max-width: 900px) {
              .pillars-container {
                padding: 45px 25px 35px;
              }
              .pillars-content {
                margin-top: 45px;
              }
              .pillars-grid {
                grid-template-columns: 1fr;
                gap: 55px;
              }
              .connector {
                display: none;
              }
              .pillar {
                padding: 0 15px;
              }
              .number {
                position: relative;
                top: auto;
                left: auto;
                transform: none;
                margin: -5px auto 18px;
              }
              .number::after {
                display: none;
              }
              .highlights {
                grid-template-columns: 1fr;
                gap: 20px;
              }
              .highlight {
                border-right: none;
                padding: 0;
              }
            }

            @media (max-width: 520px) {
              .pillars-section {
                padding: 35px 12px;
              }
              .pillars-container {
                border-radius: 22px;
                padding: 40px 18px 30px;
              }
              .pillars-header h2 {
                font-size: 34px;
                letter-spacing: -1.5px;
              }
              .pillars-header p {
                font-size: 13px;
              }
              .icon-wrapper {
                width: 78px;
                height: 78px;
              }
              .pillar h3 {
                font-size: 19px;
              }
              .pillar p {
                font-size: 13px;
              }
            }
          `}} />

          <div className="pillars-container">

            {/* HEADER */}
            <div className="pillars-header">
              <div className="eyebrow">
                OUR PILLARS
              </div>
              <h2>
                The Foundations of Our Engineering
              </h2>
              <p>
                We organize our engineering processes around three core operational principles.
              </p>
            </div>

            {/* PILLARS CONTENT */}
            <div className="pillars-content">

              {/* CONNECTING LINE */}
              <div className="connector">
                <svg viewBox="0 0 1000 120" preserveAspectRatio="none">
                  {/* Soft background */}
                  <path
                    className="connector-bg"
                    d="M 0 35 C 100 35, 130 35, 160 70 C 190 105, 250 105, 290 70 C 330 35, 390 35, 425 70 C 460 105, 520 105, 555 70 C 590 35, 650 35, 690 70 C 730 105, 790 105, 830 70 C 865 40, 910 35, 1000 35"
                  />
                  {/* Orange */}
                  <path
                    className="connector-orange"
                    d="M 0 35 C 100 35, 130 35, 160 70 C 190 105, 250 105, 290 70"
                  />
                  {/* Blue */}
                  <path
                    className="connector-blue"
                    d="M 290 70 C 330 35, 390 35, 425 70 C 460 105, 520 105, 555 70"
                  />
                  {/* Green */}
                  <path
                    className="connector-green"
                    d="M 555 70 C 590 35, 650 35, 690 70 C 730 105, 790 105, 830 70 C 865 40, 910 35, 1000 35"
                  />
                </svg>
              </div>

              <div className="pillars-grid">
                {/* =====================
                     MISSION
                ====================== */}
                <article className="pillar mission">
                  <div className="icon-wrapper">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M5 16L19 5" />
                      <path d="M19 5L17 11" />
                      <path d="M19 5L13 7" />
                      <path d="M5 16L3 21L8 19" />
                    </svg>
                  </div>
                  <div className="number">
                    01
                  </div>
                  <h3>
                    Our Mission
                  </h3>
                  <p>
                    To build reliable, maintainable software platforms and AI systems that solve real-world business challenges and create lasting value.
                  </p>
                </article>

                {/* =====================
                     VISION
                ====================== */}
                <article className="pillar vision">
                  <div className="icon-wrapper">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M2 12s3.5-6 10-6 10 6 10 6 -3.5 6-10 6 -10-6-10-6Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div className="number">
                    02
                  </div>
                  <h3>
                    Our Vision
                  </h3>
                  <p>
                    To become a trusted technology partner for businesses building modern software, intelligent systems and scalable solutions for the future.
                  </p>
                </article>

                {/* =====================
                     GOAL
                ====================== */}
                <article className="pillar goal">
                  <div className="icon-wrapper">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12 3 L20 6 V11 C20 16 16.5 19.5 12 21 C7.5 19.5 4 16 4 11 V6 Z" />
                      <path d="M8.5 12L11 14.5L16 9.5" />
                    </svg>
                  </div>
                  <div className="number">
                    03
                  </div>
                  <h3>
                    Our Goal
                  </h3>
                  <p>
                    To deliver secure, scalable and high-quality technology that helps our customers operate better, grow faster and innovate confidently.
                  </p>
                </article>
              </div>

              {/* =====================
                   BOTTOM HIGHLIGHTS
              ====================== */}
              <div className="highlights">
                
                <div className="highlight">
                  <div className="highlight-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <div className="highlight-text">
                    <strong>
                      Purpose Driven
                    </strong>
                    <span>
                      We build with intent and clarity.
                    </span>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  </div>
                  <div className="highlight-text">
                    <strong>
                      Clarity First
                    </strong>
                    <span>
                      We simplify complexity.
                    </span>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="highlight-text">
                    <strong>
                      Impact Focused
                    </strong>
                    <span>
                      We measure success in impact.
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* How We Work Section */}
        <section className="py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-slate-200/40">
          <div className="section-shell max-w-6xl mx-auto px-4">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">Our Process</span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0e1726] tracking-tight sm:text-4xl leading-tight">How We Work</h2>
              <p className="mt-3 text-[#687386] text-xs sm:text-sm">
                A structured, repeatable engineering pipeline designed to deliver scalable software with speed and precision.
              </p>
            </div>

            {/* Steps Container */}
            <div className="relative">
              {/* Desktop Flow Line (Only on large screens) */}
              <div className="absolute top-8 left-8 right-8 h-[2px] border-t-2 border-dashed border-slate-200/80 hidden lg:block z-0" />

              {/* Grid of Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
                
                {/* Step 1: Discover */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200/60 shadow-sm flex items-center justify-center relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-md z-10">
                    <span className="text-sm font-black text-indigo-500">01</span>
                    <div className="absolute inset-0 rounded-full bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#0e1726] transition-colors group-hover:text-indigo-500">Discover</h3>
                  <p className="mt-1.5 text-[11px] text-[#687386] leading-normal max-w-[120px]">
                    Requirements & scoping
                  </p>
                </div>

                {/* Step 2: Plan */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200/60 shadow-sm flex items-center justify-center relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-md z-10">
                    <span className="text-sm font-black text-blue-500">02</span>
                    <div className="absolute inset-0 rounded-full bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#0e1726] transition-colors group-hover:text-blue-500">Plan</h3>
                  <p className="mt-1.5 text-[11px] text-[#687386] leading-normal max-w-[120px]">
                    Milestones & architecture
                  </p>
                </div>

                {/* Step 3: Design */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200/60 shadow-sm flex items-center justify-center relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-md z-10">
                    <span className="text-sm font-black text-teal-500">03</span>
                    <div className="absolute inset-0 rounded-full bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#0e1726] transition-colors group-hover:text-teal-500">Design</h3>
                  <p className="mt-1.5 text-[11px] text-[#687386] leading-normal max-w-[120px]">
                    UI/UX mapping & prototype
                  </p>
                </div>

                {/* Step 4: Build */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200/60 shadow-sm flex items-center justify-center relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-md z-10">
                    <span className="text-sm font-black text-[#FF6A00]">04</span>
                    <div className="absolute inset-0 rounded-full bg-[#FF6A00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#0e1726] transition-colors group-hover:text-[#FF6A00]">Build</h3>
                  <p className="mt-1.5 text-[11px] text-[#687386] leading-normal max-w-[120px]">
                    Type-safe code delivery
                  </p>
                </div>

                {/* Step 5: Test */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200/60 shadow-sm flex items-center justify-center relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-md z-10">
                    <span className="text-sm font-black text-rose-500">05</span>
                    <div className="absolute inset-0 rounded-full bg-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#0e1726] transition-colors group-hover:text-rose-500">Test</h3>
                  <p className="mt-1.5 text-[11px] text-[#687386] leading-normal max-w-[120px]">
                    Continuous QA validation
                  </p>
                </div>

                {/* Step 6: Launch */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200/60 shadow-sm flex items-center justify-center relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-md z-10">
                    <span className="text-sm font-black text-green-500">06</span>
                    <div className="absolute inset-0 rounded-full bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#0e1726] transition-colors group-hover:text-green-500">Launch</h3>
                  <p className="mt-1.5 text-[11px] text-[#687386] leading-normal max-w-[120px]">
                    Automated deployment
                  </p>
                </div>

                {/* Step 7: Improve */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200/60 shadow-sm flex items-center justify-center relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-md z-10">
                    <span className="text-sm font-black text-purple-500">07</span>
                    <div className="absolute inset-0 rounded-full bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#0e1726] transition-colors group-hover:text-purple-500">Improve</h3>
                  <p className="mt-1.5 text-[11px] text-[#687386] leading-normal max-w-[120px]">
                    Feedback & optimization
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* Achievements Section */}
        <section className="py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-slate-200/40">
          <div className="section-shell max-w-6xl mx-auto px-4">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">Milestones</span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0e1726] tracking-tight sm:text-4xl leading-tight">Our Achievements</h2>
              <p className="mt-3 text-[#687386] text-xs sm:text-sm">
                Recognized for engineering excellence and quality-driven software delivery across global platforms.
              </p>
            </div>

            {/* Achievements Grid with 3D Perspective */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch [perspective:1000px]">
              
              {/* Card 1 */}
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-3deg)] hover:shadow-[0_20px_45px_rgba(255,106,0,0.05),_0_15px_30px_rgba(0,0,0,0.04)] flex flex-col h-full justify-between group">
                <div className="flex-1 flex flex-col [transform-style:preserve-3d]">
                  <div 
                    className="relative h-32 w-full overflow-hidden rounded-xl mb-4 border border-slate-100 bg-[#FAF8F5] cursor-pointer group/img [transform:translateZ(10px)] transition-transform duration-500 group-hover:shadow-md"
                    onClick={() => setLightboxImage("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop")}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
                      alt="Projects Completed Milestone"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-[#0e1726] [transform:translateZ(15px)] mt-2">150+</div>
                  <h3 className="text-xs font-bold text-[#0e1726] mt-1 [transform:translateZ(15px)] leading-snug">Projects Completed</h3>
                  <p className="text-[10px] text-[#687386] mt-2 leading-relaxed flex-grow [transform:translateZ(15px)]">
                    Enterprise-grade backends and cloud infrastructures successfully shipped.
                  </p>
                </div>
                
                {/* Footer Badge */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between [transform:translateZ(10px)]">
                  <span className="text-[8px] font-bold text-[#FF6A00] uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100/40">Audit Verified</span>
                  <span className="text-[8.5px] font-semibold text-slate-400">Track Record</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-3deg)] hover:shadow-[0_20px_45px_rgba(255,106,0,0.05),_0_15px_30px_rgba(0,0,0,0.04)] flex flex-col h-full justify-between group">
                <div className="flex-1 flex flex-col [transform-style:preserve-3d]">
                  <div 
                    className="relative h-32 w-full overflow-hidden rounded-xl mb-4 border border-slate-100 bg-[#FAF8F5] cursor-pointer group/img [transform:translateZ(10px)] transition-transform duration-500 group-hover:shadow-md"
                    onClick={() => setLightboxImage("https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop")}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop"
                      alt="System Uptime Milestone"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-[#0e1726] [transform:translateZ(15px)] mt-2">99.99%</div>
                  <h3 className="text-xs font-bold text-[#0e1726] mt-1 [transform:translateZ(15px)] leading-snug">System Uptime</h3>
                  <p className="text-[10px] text-[#687386] mt-2 leading-relaxed flex-grow [transform:translateZ(15px)]">
                    Architected fail-safe clusters and serverless networks for global scaling.
                  </p>
                </div>

                {/* Footer Badge */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between [transform:translateZ(10px)]">
                  <span className="text-[8px] font-bold text-[#FF6A00] uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100/40">Realtime SLA</span>
                  <span className="text-[8.5px] font-semibold text-slate-400">High Uptime</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-3deg)] hover:shadow-[0_20px_45px_rgba(255,106,0,0.05),_0_15px_30px_rgba(0,0,0,0.04)] flex flex-col h-full justify-between group">
                <div className="flex-1 flex flex-col [transform-style:preserve-3d]">
                  <div 
                    className="relative h-32 w-full overflow-hidden rounded-xl mb-4 border border-slate-100 bg-[#FAF8F5] cursor-pointer group/img [transform:translateZ(10px)] transition-transform duration-500 group-hover:shadow-md"
                    onClick={() => setLightboxImage("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop")}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                      alt="Specialized Engineers Milestone"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-[#0e1726] [transform:translateZ(15px)] mt-2">50+</div>
                  <h3 className="text-xs font-bold text-[#0e1726] mt-1 [transform:translateZ(15px)] leading-snug">Specialized Engineers</h3>
                  <p className="text-[10px] text-[#687386] mt-2 leading-relaxed flex-grow [transform:translateZ(15px)]">
                    Distributed cloud administrators, compiler developers, and QA leads.
                  </p>
                </div>

                {/* Footer Badge */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between [transform:translateZ(10px)]">
                  <span className="text-[8px] font-bold text-[#FF6A00] uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100/40">Active Squads</span>
                  <span className="text-[8.5px] font-semibold text-slate-400">Tech Experts</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-3deg)] hover:shadow-[0_20px_45px_rgba(255,106,0,0.05),_0_15px_30px_rgba(0,0,0,0.04)] flex flex-col h-full justify-between group">
                <div className="flex-1 flex flex-col [transform-style:preserve-3d]">
                  <div 
                    className="relative h-32 w-full overflow-hidden rounded-xl mb-4 border border-slate-100 bg-[#FAF8F5] cursor-pointer group/img [transform:translateZ(10px)] transition-transform duration-500 group-hover:shadow-md"
                    onClick={() => setLightboxImage("https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop")}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
                      alt="Compliance Ready Milestone"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-[#0e1726] [transform:translateZ(15px)] mt-2">ISO 27001</div>
                  <h3 className="text-xs font-bold text-[#0e1726] mt-1 [transform:translateZ(15px)] leading-snug">Compliance Ready</h3>
                  <p className="text-[10px] text-[#687386] mt-2 leading-relaxed flex-grow [transform:translateZ(15px)]">
                    Strict adherence to data protection & security guidelines.
                  </p>
                </div>

                {/* Footer Badge */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between [transform:translateZ(10px)]">
                  <span className="text-[8px] font-bold text-[#FF6A00] uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100/40">Global Standard</span>
                  <span className="text-[8.5px] font-semibold text-slate-400">Security First</span>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Demonstration & Seminar Showcase Section */}
        <section className="py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-slate-200/40">
          <div className="section-shell max-w-6xl mx-auto px-4">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">Capabilities</span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0e1726] tracking-tight sm:text-4xl leading-tight">Product & Services Showcase</h2>
              <p className="mt-3 text-[#687386] text-xs sm:text-sm">
                Explore our capabilities in real-time across high-performance backends, cloud architectures, and squad delivery models.
              </p>
            </div>

            {/* Video Cards Grid (3 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Enterprise Cloud Architecture */}
              <div className="bg-white border border-slate-200/60 rounded-2xl p-4 shadow-[0_10px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-[#FAF8F5] mb-4">
                  <video 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" 
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-in-office-42171-large.mp4"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#0e1726]">Enterprise Cloud Architecture</h3>
                <p className="text-[10px] text-[#687386] mt-2 leading-relaxed">
                  Designing resilient, high-speed microservices and secure database frameworks.
                </p>
              </div>

              {/* Card 2: Dedicated Squad Delivery */}
              <div className="bg-white border border-slate-200/60 rounded-2xl p-4 shadow-[0_10px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-[#FAF8F5] mb-4">
                  <video 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" 
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://assets.mixkit.co/videos/preview/mixkit-business-people-having-a-video-conference-call-on-a-laptop-40179-large.mp4"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#0e1726]">Dedicated Squad Delivery</h3>
                <p className="text-[10px] text-[#687386] mt-2 leading-relaxed">
                  Full-stack deployment and source verification under our plant-in-plant model.
                </p>
              </div>

              {/* Card 3: Product Platform Engineering */}
              <div className="bg-white border border-slate-200/60 rounded-2xl p-4 shadow-[0_10px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-[#FAF8F5] mb-4">
                  <video 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" 
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://assets.mixkit.co/videos/preview/mixkit-man-hands-typing-on-laptop-keyboard-40347-large.mp4"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#0e1726]">Product Platform Engineering</h3>
                <p className="text-[10px] text-[#687386] mt-2 leading-relaxed">
                  Custom enterprise software design built with next.js, cloud systems, and automated pipelines.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* Products & Platforms Section */}
        <section className="py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-slate-200/40">
          <div className="section-shell max-w-6xl mx-auto px-4">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">Our Built Assets</span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0e1726] tracking-tight sm:text-4xl leading-tight">Products & Platforms We've Built</h2>
              <p className="mt-3 text-[#687386] text-xs sm:text-sm">
                A custom portfolio of enterprise software platforms, smart analytics dashboards, and fintech portals shipped for global companies.
              </p>
            </div>

            {/* Products Grid (4 Columns) with 3D Perspective */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch [perspective:1000px]">
              {productsData.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-3deg)] hover:shadow-[0_20px_45px_rgba(255,106,0,0.05),_0_15px_30px_rgba(0,0,0,0.04)] flex flex-col h-full justify-between group"
                >
                  {/* Content Top Segment */}
                  <div className="flex-1 flex flex-col [transform-style:preserve-3d]">
                    {/* Product Image container */}
                    <div 
                      className="relative h-32 w-full overflow-hidden rounded-xl mb-4 border border-slate-100 bg-[#FAF8F5] cursor-pointer group/img [transform:translateZ(10px)] transition-transform duration-500 group-hover:shadow-md"
                      onClick={() => setLightboxImage(product.image)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Category Tag */}
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#FF6A00] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100/50 self-start mb-2.5 [transform:translateZ(15px)]">
                      {product.category}
                    </span>

                    {/* Product Name */}
                    <h3 className="text-sm font-bold text-[#0e1726] tracking-tight hover:text-[#FF6A00] transition-colors leading-snug [transform:translateZ(15px)]">{product.name}</h3>
                    
                    {/* Product Description */}
                    <p className="text-[10px] text-[#687386] mt-2 leading-relaxed flex-grow [transform:translateZ(15px)]">
                      {product.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1 mt-4 pt-1 mb-4 [transform:translateZ(10px)]">
                      {product.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="text-[8.5px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {product.technologies.length > 3 && (
                        <span className="text-[8.5px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/20">
                          +{product.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stable Bottom Action Area */}
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between [transform:translateZ(10px)]">
                    {product.projectLink ? (
                      <>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Production Live</span>
                        <a 
                          href={product.projectLink}
                          className="inline-flex items-center gap-1 text-[10px] font-bold text-[#FF6A00] hover:text-[#E64A00] transition-colors group/btn"
                        >
                          View Product
                          <span className="transition-transform duration-300 transform group-hover/btn:translate-x-0.5">→</span>
                        </a>
                      </>
                    ) : (
                      <>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Enterprise Internal</span>
                        <span className="text-[9px] font-medium text-slate-400 italic">Case Study</span>
                      </>
                    )}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>


        {/* Executive Team Section */}
        <section className="pt-12 pb-20 lg:pt-16 lg:pb-24 bg-[#FAF8F5]">
          <div className="section-shell">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Meet the Architects</span>
              <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl tracking-tight">Our Leadership Team</h2>
              <p className="mt-3 text-muted text-xs sm:text-sm">
                A structured team of researchers, engineers, and cloud administrators focused on engineering excellence.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, i) => (
                <div
                  key={member.name}
                  className="group relative rounded-2xl border border-line/45 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Decorative Brand Gradient Accent Bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-red via-accent to-accent-2" />

                  {/* Profile image with custom clip-path & zoom transition */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} – ${member.role}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110 filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Dark gradient overlap at bottom of image */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  {/* Member Details */}
                  <div className="flex flex-col flex-1 p-6 pt-4 bg-white relative z-10">
                    <h3 className="text-lg font-bold text-ink tracking-tight group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mt-1.5">
                      {member.role}
                    </p>

                    <p className="mt-4 text-xs leading-relaxed text-muted flex-1">
                      {member.bio}
                    </p>

                    {/* Social networks linked section */}
                    <div className="mt-6 pt-4 border-t border-line/30 flex items-center gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-accent transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-ink transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
              <button 
                className="absolute top-4 right-4 text-white hover:text-slate-300 bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors cursor-pointer z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(null);
                }}
              >
                ✕
              </button>
              <img 
                src={lightboxImage} 
                alt="Full Size View" 
                className="max-w-full max-h-full rounded-xl object-contain shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
