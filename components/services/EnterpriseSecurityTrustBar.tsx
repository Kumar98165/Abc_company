"use client";

import React from "react";

export function EnterpriseSecurityTrustBar() {
  const trustItems = [
    {
      badge: "SOC 2 TYPE II",
      title: "SOC 2 Type II Certified",
      desc: "Rigorous data security controls, end-to-end encrypted API channels, and continuous audit logging.",
      tag: "Verified Audit",
      badgeStyle: "bg-[#FFF4EC] text-[#FF5F00] border-[#FFE2CC]",
      glowColor: "from-[#FF5F00]/10 to-transparent",
      iconBg: "bg-gradient-to-br from-[#FF5F00] to-[#FF7B26] text-white shadow-[0_6px_16px_rgba(255,95,0,0.28)]",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      badge: "ISO 27001",
      title: "ISO 27001 Compliant",
      desc: "Enterprise Information Security Management System (ISMS) governing code safety & access control.",
      tag: "ISMS Framework",
      badgeStyle: "bg-[#F5EDFF] text-[#8B5CF6] border-[#E9D5FF]",
      glowColor: "from-[#8B5CF6]/10 to-transparent",
      iconBg: "bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white shadow-[0_6px_16px_rgba(139,92,246,0.28)]",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      badge: "GDPR READY",
      title: "GDPR & Data Privacy Ready",
      desc: "Zero PII data leakage protocols, data residency compliance, and privacy-by-design architecture.",
      tag: "Privacy Protected",
      badgeStyle: "bg-[#E6FBFA] text-[#0D9488] border-[#B2F5EA]",
      glowColor: "from-[#0D9488]/10 to-transparent",
      iconBg: "bg-gradient-to-br from-[#0D9488] to-[#14B8A6] text-white shadow-[0_6px_16px_rgba(13,148,136,0.28)]",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      badge: "99.99% SLA",
      title: "99.99% High Availability SLA",
      desc: "Multi-region redundancy, automated failover capabilities, and 24/7 proactive incident monitoring.",
      tag: "Active Monitoring",
      badgeStyle: "bg-[#EEF4FF] text-[#2563EB] border-[#C7D9FE]",
      glowColor: "from-[#2563EB]/10 to-transparent",
      iconBg: "bg-gradient-to-br from-[#2563EB] to-[#60A5FA] text-white shadow-[0_6px_16px_rgba(37,99,235,0.28)]",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FCFAFAF7] text-[#1A1A1A] py-10 lg:py-14 border-t border-b border-[#EAE3D9]">
      {/* Background Radial Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,_rgba(255,95,0,0.06),_transparent_70%)] pointer-events-none" />

      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF5F00]">
            <span className="h-2 w-2 rounded-full bg-[#FF5F00] animate-pulse" />
            ENTERPRISE SECURITY & COMPLIANCE
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-3xl lg:text-4xl leading-tight">
            Engineered for Security, Speed & Reliability
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            Our technical delivery pipelines adhere to strict global compliance mandates and high-availability enterprise SLAs.
          </p>
        </div>

        {/* 4 Trust Badges Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between rounded-[22px] border border-[#E8E0D8] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(255,95,0,0.10)] hover:border-[#FF5F00]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Ambient Radial Glow on Hover */}
              <div className={`absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-radial ${item.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div>
                {/* Top Row: 3D Squircle Icon Badge + Pill Tag */}
                <div className="flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <span className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-extrabold uppercase border ${item.badgeStyle}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#FF5F00] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Verified Status Indicator */}
              <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#0F172A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F00] animate-pulse" />
                  {item.tag}
                </span>
                <span className="text-[10px] font-bold text-[#94A3B8]">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
