import React from "react";

export function WhyJoinUs() {
  const cards = [
    {
      num: "01",
      title: "Hybrid / Remote First",
      desc: "Work from anywhere with flexibility, depending on your role and team.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      isOffset: false,
    },
    {
      num: "02",
      title: "Learning Culture",
      desc: "Continuous learning through mentorship, training, knowledge sharing, and challenging projects.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      isOffset: true, // SHIFTED DOWN
    },
    {
      num: "03",
      title: "Impactful Work",
      desc: "Work on meaningful digital products used to solve real business problems.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      isOffset: false,
    },
    {
      num: "04",
      title: "Career Growth",
      desc: "Take on new responsibilities, develop your skills, and grow into leadership opportunities.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      isOffset: false,
    },
    {
      num: "05",
      title: "Health & Wellness",
      desc: "Programs and benefits designed to support employee wellbeing and work-life balance.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      isOffset: true, // SHIFTED DOWN
    },
    {
      num: "06",
      title: "Collaborative Culture",
      desc: "Work alongside engineers, designers, product thinkers, and business teams.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      isOffset: false,
    },
  ];

  return (
    <section id="why-join-us" className="bg-[#FFFBF7] pt-10 sm:pt-12 pb-16 sm:pb-20 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-4 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            WHY JOIN US
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Build Your Career. Shape What's Next.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Work on challenging technology, collaborate with exceptional people, and turn ambitious ideas into products that create real business impact.
          </p>
        </div>

        {/* 6 CARDS WITH STAGGERED UP/DOWN OFFSET (MATCHING FIRST REFERENCE SCREENSHOT) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start pb-8">
          {cards.map((card) => (
            <div
              key={card.num}
              className={`group rounded-[32px] border border-[#EAE3D9] bg-white p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#FF5F00] hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between min-h-[210px] ${
                card.isOffset ? "lg:translate-y-8" : ""
              }`}
            >
              {/* TOP ROW: ICON BADGE ON LEFT + FAINT GIANT NUMBER WATERMARK ON RIGHT */}
              <div className="flex items-start justify-between relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF4EC] text-[#FF5F00] border border-[#FFE2CC] group-hover:bg-[#FF5F00] group-hover:text-white transition-colors duration-300 shadow-2xs">
                  {card.icon}
                </div>

                {/* Giant Faint Number Watermark in Top Right */}
                <span className="font-mono text-5xl font-black text-[#FF5F00]/20 select-none pointer-events-none leading-none group-hover:text-[#FF5F00]/35 transition-colors">
                  {card.num}
                </span>
              </div>

              {/* TITLE & DESCRIPTION BELOW */}
              <div className="mt-5">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] group-hover:text-[#FF5F00] transition-colors mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
