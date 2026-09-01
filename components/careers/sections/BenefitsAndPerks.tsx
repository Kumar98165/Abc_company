import React from "react";

export function BenefitsAndPerks() {
  const perks = [
    {
      title: "Competitive Compensation",
      desc: "Top 10% market benchmark salaries with bi-annual performance bonuses.",
      icon: "💎",
    },
    {
      title: "Flexible Work & Remote",
      desc: "Work remotely or from our modern hybrid tech pods with flexible hours.",
      icon: "🌐",
    },
    {
      title: "Health & Wellness Insurance",
      desc: "Comprehensive medical insurance coverage for employees and dependents.",
      icon: "🛡️",
    },
    {
      title: "Paid Time Off & Holidays",
      desc: "Generous vacation leaves, wellness days, and mandatory holiday breaks.",
      icon: "🏝️",
    },
    {
      title: "Learning & Development Stipend",
      desc: "Annual learning budget for courses, tech books, and developer tooling.",
      icon: "📚",
    },
    {
      title: "Professional Growth",
      desc: "Structured career advancement tracks into lead architecture & management.",
      icon: "🚀",
    },
    {
      title: "Team Retreats & Events",
      desc: "Quarterly hackathons, team dinners, and annual engineering retreats.",
      icon: "🎉",
    },
    {
      title: "Certification Support",
      desc: "Full financial coverage for AWS, GCP, Azure, Kubernetes & AI exams.",
      icon: "🏅",
    },
  ];

  return (
    <section id="benefits-perks" className="bg-white py-16 lg:py-24 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            BENEFITS & PERKS
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl tracking-tight">
            Comprehensive Employee Rewards
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            We invest in our people through competitive rewards, wellness programs, and continuous learning opportunities.
          </p>
        </div>

        {/* 8 PERKS GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#EAE3D9] bg-[#FFFBF7] p-6 hover:border-[#FF5F00] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF4EC] text-2xl border border-[#FFE2CC] mb-4">
                {p.icon}
              </div>
              <h3 className="text-sm font-extrabold text-[#0F172A] mb-1.5">
                {p.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
