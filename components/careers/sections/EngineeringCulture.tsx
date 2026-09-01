import React from "react";

export function EngineeringCulture() {
  const features = [
    {
      num: "01",
      title: "Innovation",
      desc: "We explore new technologies and turn ideas into practical solutions that deliver real-world business value.",
      icon: "💡",
    },
    {
      num: "02",
      title: "Ownership",
      desc: "Take responsibility for your work, make architectural decisions, and see your ideas through to production impact.",
      icon: "⚡",
    },
    {
      num: "03",
      title: "Collaboration",
      desc: "Engineers, designers, product managers, and business leaders work together in cross-functional pods.",
      icon: "🤝",
    },
    {
      num: "04",
      title: "Continuous Learning",
      desc: "Grow through structured mentorship, technical discussions, experimentation, and challenging high-scale projects.",
      icon: "📈",
    },
  ];

  return (
    <section id="engineering-culture" className="bg-[#FFFBF7] py-16 lg:py-24 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            OUR ENGINEERING CULTURE
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl tracking-tight">
            How We Build Software
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            We believe great engineering comes from ownership, collaboration, curiosity, and continuous improvement.
          </p>
        </div>

        {/* 4 FEATURE CARDS WITH SUBTLE HOVER ANIMATION */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.num}
              className="group rounded-3xl border border-[#EAE3D9] bg-white p-6 transition-all duration-300 hover:border-[#FF5F00] hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-extrabold text-[#FF5F00] bg-[#FFF4EC] px-2.5 py-0.5 rounded-full">
                    {item.num}
                  </span>
                  <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#0F172A] group-hover:text-[#FF5F00] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-extrabold text-[#FF5F00]">
                <span>Explore Standards</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
