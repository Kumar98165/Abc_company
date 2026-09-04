import React from "react";

export function InsightHero() {
  return (
    <section className="bg-[#FFFBF7] pt-12 sm:pt-16 pb-10 sm:pb-12 border-b border-[#EAE3D9] relative overflow-hidden">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
              INSIGHTS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Ideas, Technology & Perspectives
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-2xl">
              Explore practical perspectives from our technology team on AI, software engineering, cloud infrastructure, digital products, and enterprise architectures.
            </p>
          </div>

          <div className="hidden md:flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-[#FFF4EC] border border-[#FFE2CC] text-[#FF5F00] text-3xl shadow-sm">
            ✦
          </div>
        </div>
      </div>
    </section>
  );
}
