"use client";

import React from "react";
import Image from "next/image";

export function LifeAtCompany() {
  return (
    <section id="life-at-company" className="bg-white pt-10 pb-14 sm:pt-12 sm:pb-16 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            LIFE AT OUR COMPANY
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            A Place to Build, Learn & Grow
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Work with curious minds, collaborate across teams, explore new technologies, and turn ambitious ideas into products that make a difference.
          </p>
        </div>

        {/* PERFECTED ASYMMETRIC EDITORIAL GALLERY LAYOUT */}
        <div className="space-y-6">
          {/* Top Row: Large Feature Image (Left) + Two Stacked Images (Right) */}
          <div className="grid gap-6 lg:grid-cols-12 items-stretch">
            
            {/* 1. LARGE TEAM IMAGE (LEFT - TEAMWORK) */}
            <div className="lg:col-span-7 rounded-[28px] border border-[#EAE3D9] bg-[#FFFBF7] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#FF5F00] transition-all duration-300 shadow-2xs">
              <div>
                {/* Top Badge Line */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FF5F00] text-white font-mono text-[10.5px] font-extrabold uppercase tracking-wider">
                    TEAMWORK
                  </span>
                  <span className="text-xs font-extrabold text-[#FF5F00] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    Building together →
                  </span>
                </div>

                {/* Title & Description AT THE TOP */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-1">
                  Open Developer Lab & Real-Time Collaboration
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                  Engineers working side-by-side on laptops in pair programming loops and technical sprint discussions.
                </p>
              </div>

              {/* Photo filling bottom area to equal card size */}
              <div className="relative w-full flex-1 min-h-[260px] sm:min-h-[280px] lg:min-h-[300px] rounded-2xl overflow-hidden bg-white border border-[#EAE3D9]">
                <Image
                  src="/images/life-at-team-laptops.jpg"
                  alt="Engineering team collaborating on laptops in open software lab"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>

            {/* 2. TWO STACKED IMAGES (RIGHT - CULTURE & INNOVATION) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              
              {/* Stacked Image 1: CULTURE / INFORMAL SYNC */}
              <div className="rounded-[28px] border border-[#EAE3D9] bg-[#FFFBF7] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#FF5F00] transition-all duration-300 shadow-2xs">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#FFF4EC] border border-[#FFE2CC] text-[#FF5F00] font-mono text-[10.5px] font-extrabold uppercase tracking-wider">
                      CULTURE
                    </span>
                    <span className="text-xs font-extrabold text-[#FF5F00] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      Sharing ideas →
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#0F172A] mb-1">
                    Team Coffee & Informal Sync
                  </h4>

                  <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-[#EAE3D9] mb-2.5">
                    <Image
                      src="/images/life-at-team-coffee.jpg"
                      alt="Team members having an informal coffee discussion by the window"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                </div>

                <p className="text-xs text-[#64748B] leading-snug font-medium">
                  Informal coffee discussions and team bonding by the window.
                </p>
              </div>

              {/* Stacked Image 2: INNOVATION / CONFERENCE SPRINT */}
              <div className="rounded-[28px] border border-[#EAE3D9] bg-[#FFFBF7] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#FF5F00] transition-all duration-300 shadow-2xs">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#FFF4EC] border border-[#FFE2CC] text-[#FF5F00] font-mono text-[10.5px] font-extrabold uppercase tracking-wider">
                      INNOVATION
                    </span>
                    <span className="text-xs font-extrabold text-[#FF5F00] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      Exploring what's next →
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#0F172A] mb-1">
                    Sprint Planning & Interactive Workshops
                  </h4>

                  <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-[#EAE3D9] mb-2.5">
                    <Image
                      src="/images/life-at-team-conference.jpg"
                      alt="Cross-functional team meeting and interactive sprint planning session"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                </div>

                <p className="text-xs text-[#64748B] leading-snug font-medium">
                  Cross-functional team sprint planning and interactive sessions.
                </p>
              </div>

            </div>

          </div>

          {/* 3. WIDE TEAM / CULTURE BANNER (BOTTOM - GROWING TOGETHER) */}
          <div className="rounded-[28px] border border-[#FFE2CC] bg-gradient-to-r from-[#FFF4EC] via-[#FFFBF7] to-[#FFF4EC] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:border-[#FF5F00] transition-all shadow-2xs">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#FF5F00] text-white font-mono text-[10.5px] font-extrabold uppercase tracking-wider">
                  LEARNING & GROWTH
                </span>
                <span className="text-xs font-extrabold text-[#FF5F00]">Growing together →</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A]">
                Inclusive Environment & Transparent Peer Feedback
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Work alongside passionate engineers, designers, and domain architects in an open environment engineered for continuous growth.
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#FF5F00] border border-[#FFE2CC] text-xl shadow-xs group-hover:scale-110 transition-transform">
              👥
            </div>
          </div>
        </div>

        {/* 4 MODERN CULTURE HIGHLIGHT CARDS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-[#EAE3D9] bg-[#FFFBF7] p-4 text-center hover:border-[#FF5F00] transition-colors shadow-2xs">
            <span className="block text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
              🤝 COLLABORATE
            </span>
            <span className="block text-[11px] text-[#64748B] mt-1">Across teams & pods</span>
          </div>

          <div className="rounded-2xl border border-[#EAE3D9] bg-[#FFFBF7] p-4 text-center hover:border-[#FF5F00] transition-colors shadow-2xs">
            <span className="block text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
              💡 EXPLORE
            </span>
            <span className="block text-[11px] text-[#64748B] mt-1">New ideas & stack</span>
          </div>

          <div className="rounded-2xl border border-[#EAE3D9] bg-[#FFFBF7] p-4 text-center hover:border-[#FF5F00] transition-colors shadow-2xs">
            <span className="block text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
              📚 LEARN
            </span>
            <span className="block text-[11px] text-[#64748B] mt-1">Share knowledge daily</span>
          </div>

          <div className="rounded-2xl border border-[#EAE3D9] bg-[#FFFBF7] p-4 text-center hover:border-[#FF5F00] transition-colors shadow-2xs">
            <span className="block text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
              🎯 GROW
            </span>
            <span className="block text-[11px] text-[#64748B] mt-1">Take real ownership</span>
          </div>
        </div>

      </div>
    </section>
  );
}
