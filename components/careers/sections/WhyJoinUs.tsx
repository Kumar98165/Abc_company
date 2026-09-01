import React from "react";

export function WhyJoinUs() {
  const cards = [
    {
      num: "01",
      title: "Hybrid / Remote First",
      desc: "Work from anywhere with flexibility, depending on your role and team.",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Learning Culture",
      desc: "Continuous learning through mentorship, training, knowledge sharing, and challenging projects.",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Impactful Work",
      desc: "Work on meaningful digital products used to solve real business problems.",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Career Growth",
      desc: "Take on new responsibilities, develop your skills, and grow into leadership opportunities.",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Health & Wellness",
      desc: "Programs and benefits designed to support employee wellbeing and work-life balance.",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      num: "06",
      title: "Collaborative Culture",
      desc: "Work alongside engineers, designers, product thinkers, and business teams.",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-join-us" className="bg-[#FFFBF7] py-16 lg:py-24 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            WHY JOIN US
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl tracking-tight">
            Build Your Career. Shape What's Next.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
            Work on challenging technology, collaborate with exceptional people, and turn ambitious ideas into products that create real business impact.
          </p>
        </div>

        {/* 6 CARDS MATCHING EXACT USER REFERENCE SCREENSHOT */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.num}
              className="group rounded-[28px] border border-[#EAE3D9] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:border-[#FF5F00] hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Number Badge on Left, Icon Badge on Right */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-extrabold text-[#FF5F00] bg-[#FFF4EC] px-3.5 py-1 rounded-full border border-[#FFE2CC]">
                    {card.num}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF5F00] border border-[#FFE2CC] group-hover:bg-[#FF5F00] group-hover:text-white transition-colors duration-300">
                    {card.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-[#FF5F00] transition-colors mb-2.5">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
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
