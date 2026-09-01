import React from "react";

export function HiringProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "APPLY",
      desc: "Submit your application and resume through our careers portal.",
    },
    {
      num: "02",
      title: "APPLICATION REVIEW",
      desc: "Our recruitment team reviews your skills, experience, and profile.",
    },
    {
      num: "03",
      title: "RECRUITER CONVERSATION",
      desc: "Discuss your experience, goals, and the opportunity.",
    },
    {
      num: "04",
      title: "TECHNICAL INTERVIEW",
      desc: "Demonstrate your technical knowledge and problem-solving skills.",
    },
    {
      num: "05",
      title: "FINAL INTERVIEW",
      desc: "Meet the team and explore how you can contribute.",
    },
    {
      num: "06",
      title: "OFFER",
      desc: "If there's a strong match, we'll move forward with an offer.",
    },
  ];

  return (
    <section id="hiring-process" className="bg-[#FFFBF7] py-16 lg:py-24 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            HOW WE HIRE
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl tracking-tight">
            Transparent Recruitment Process
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            A transparent and straightforward process from application to offer.
          </p>
        </div>

        {/* DESKTOP HORIZONTAL TIMELINE */}
        <div className="hidden lg:block relative py-6">
          {/* Connector Bar */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-[#FFE2CC] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((s, idx) => (
              <div key={s.num} className="flex flex-col items-center text-center group">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-[#FF5F00] text-[#FF5F00] font-mono text-sm font-extrabold shadow-md mb-4 group-hover:bg-[#FF5F00] group-hover:text-white transition-colors duration-300">
                  {s.num}
                </div>
                <h3 className="text-xs font-extrabold text-[#0F172A] tracking-wider uppercase mb-1">
                  {s.title}
                </h3>
                <p className="text-[11px] text-[#64748B] leading-relaxed px-1">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE */}
        <div className="lg:hidden relative pl-6 space-y-8 border-l-2 border-[#FFE2CC]">
          {steps.map((s) => (
            <div key={s.num} className="relative group">
              <span className="absolute -left-[31px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-[#FF5F00] text-[#FF5F00] font-mono text-xs font-extrabold">
                {s.num}
              </span>
              <h3 className="text-sm font-extrabold text-[#0F172A] uppercase tracking-wider">
                {s.title}
              </h3>
              <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
