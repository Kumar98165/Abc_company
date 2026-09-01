import React from "react";

export function DiversitySection() {
  return (
    <section id="diversity" className="bg-white py-16 lg:py-24 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-[#EAE3D9] bg-[#FFFBF7] p-8 sm:p-12 grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
              DIVERSITY & INCLUSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              A Place Where Everyone Can Contribute
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We strive to create an inclusive environment where people with different perspectives, experiences, and ideas can do their best work. Equal opportunity is at the heart of our culture.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#0F172A]">
                <span className="text-[#FF5F00]">✓</span>
                <span>Accessibility Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#0F172A]">
                <span className="text-[#FF5F00]">✓</span>
                <span>Inclusive Hiring Practices</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#0F172A]">
                <span className="text-[#FF5F00]">✓</span>
                <span>Equal Opportunity Workplace</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="p-6 rounded-3xl bg-white border border-[#EAE3D9] shadow-sm text-center space-y-3 w-full max-w-sm">
              <span className="text-4xl">🌍</span>
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
