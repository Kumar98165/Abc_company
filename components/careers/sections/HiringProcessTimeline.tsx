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
    <section id="hiring-process" className="bg-[#FFFBF7] pt-6 sm:pt-8 pb-8 sm:pb-10 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* SECTION HEADER WITH COMPACT TIGHT MARGINS */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-7">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            HOW WE HIRE
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Transparent Recruitment Process
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            A transparent and straightforward process from application to offer.
          </p>
        </div>

        {/* DESKTOP HORIZONTAL TIMELINE WITH EXACT CENTERED CONNECTOR BAR */}
        <div className="hidden lg:block relative py-1">
          {/* Connector Line passing EXACTLY through the vertical center (24px) of the 48px circles */}
          <div className="absolute top-[24px] left-12 right-12 h-1 bg-[#FFE2CC] rounded-full z-0" />

          <div className="grid grid-cols-6 gap-3 relative z-10">
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center group cursor-default">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4EC] border-2 border-[#FF5F00] text-[#FF5F00] font-mono text-xs font-black shadow-sm group-hover:bg-[#FF5F00] group-hover:text-white transition-all duration-300 mb-2.5">
                  {s.num}
                </div>
                <h3 className="text-[11.5px] font-extrabold text-[#0F172A] tracking-wider uppercase mb-1">
                  {s.title}
                </h3>
                <p className="text-[11px] text-[#64748B] leading-snug px-0.5">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE */}
        <div className="lg:hidden relative pl-5 space-y-5 border-l-2 border-[#FFE2CC] my-2">
          {steps.map((s) => (
            <div key={s.num} className="relative group">
              <span className="absolute -left-[27px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF4EC] border-2 border-[#FF5F00] text-[#FF5F00] font-mono text-[10px] font-black">
                {s.num}
              </span>
              <h3 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
                {s.title}
              </h3>
              <p className="text-[11px] text-[#64748B] mt-0.5 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
