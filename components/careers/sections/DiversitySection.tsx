import React from "react";

export function DiversitySection() {
  return (
    <section id="diversity" className="bg-white pt-6 sm:pt-8 pb-8 sm:pb-10 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-[32px] border border-[#EAE3D9] bg-gradient-to-r from-[#FFF4EC] via-[#FFFBF7] to-white p-7 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] grid gap-8 lg:grid-cols-12 items-center relative overflow-hidden">
          
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5F00] px-3.5 py-0.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white shadow-2xs">
              DIVERSITY & INCLUSION
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              A Place Where Everyone Can Contribute
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We strive to create an inclusive environment where people with different perspectives, experiences, and ideas can do their best work. Equal opportunity is at the heart of our culture.
            </p>

            {/* 3 DISTINCTIVE CHECKMARK BADGES */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="flex items-center gap-2 rounded-xl border border-[#EAE3D9] bg-white px-3.5 py-2 text-xs font-extrabold text-[#0F172A] shadow-2xs hover:border-[#FF5F00] transition-colors">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF5F00] text-xs font-black">
                  ✓
                </span>
                <span>Accessibility Support</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-[#EAE3D9] bg-white px-3.5 py-2 text-xs font-extrabold text-[#0F172A] shadow-2xs hover:border-[#FF5F00] transition-colors">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF5F00] text-xs font-black">
                  ✓
                </span>
                <span>Inclusive Hiring Practices</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-[#EAE3D9] bg-white px-3.5 py-2 text-xs font-extrabold text-[#0F172A] shadow-2xs hover:border-[#FF5F00] transition-colors">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF5F00] text-xs font-black">
                  ✓
                </span>
                <span>Equal Opportunity Workplace</span>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURE CARD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="p-6 rounded-2xl bg-white border border-[#EAE3D9] shadow-xs text-center space-y-3 w-full max-w-sm hover:border-[#FF5F00] hover:shadow-md transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF4EC] text-[#FF5F00] border border-[#FFE2CC] text-2xl mx-auto shadow-2xs">
                🌍
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A]">Global Remote & Hybrid Talent</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Empowering diverse technology professionals across multiple regions with equal opportunities for career acceleration.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
