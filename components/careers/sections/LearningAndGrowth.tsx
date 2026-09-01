import React from "react";

export function LearningAndGrowth() {
  const careerSteps = ["LEARN", "MENTORSHIP", "BUILD", "LEAD", "GROW"];
  const growthPills = [
    "Technical Training",
    "Mentorship",
    "Knowledge Sharing",
    "Certifications",
    "Leadership Opportunities",
    "Cross-functional Projects",
  ];

  return (
    <section id="learning-growth" className="bg-[#FFFBF7] py-16 lg:py-24 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            GROW WITH US
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl tracking-tight">
            Your Career Should Keep Moving Forward
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            We invest in our people through mentorship, technical learning, challenging projects, and opportunities to take on greater responsibility.
          </p>
        </div>

        {/* VISUAL CAREER JOURNEY MAP */}
        <div className="rounded-3xl border border-[#EAE3D9] bg-white p-8 shadow-sm mb-10">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B] text-center mb-8">
            CAREER TRAJECTORY MAP
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {careerSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4EC] border border-[#FFE2CC] text-[#FF5F00] font-mono text-sm font-extrabold shadow-2xs">
                    0{idx + 1}
                  </div>
                  <span className="mt-3 text-xs font-extrabold text-[#0F172A] tracking-wider uppercase">
                    {step}
                  </span>
                </div>

                {idx < careerSteps.length - 1 && (
                  <span className="hidden sm:inline text-lg text-[#FF5F00] font-extrabold">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* FEATURE TAGS */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {growthPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-[#EAE3D9] bg-white px-5 py-2 text-xs font-extrabold text-[#0F172A] shadow-2xs"
            >
              ✦ {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
