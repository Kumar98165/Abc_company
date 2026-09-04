import React from "react";

export function ExploreByTopic({ onSelectCategory }: { onSelectCategory: (cat: string) => void }) {
  const topics = [
    {
      title: "AI & MACHINE LEARNING",
      desc: "Explore AI, LLMs, autonomous agents, RAG pipelines, and intelligent automation.",
      category: "AI & Machine Learning",
      icon: "🤖",
    },
    {
      title: "SOFTWARE ENGINEERING",
      desc: "Architecture, REST & GraphQL APIs, backend systems, testing, and engineering practices.",
      category: "Software Engineering",
      icon: "⚙️",
    },
    {
      title: "CLOUD & DEVOPS",
      desc: "Cloud infrastructure, Kubernetes, CI/CD pipelines, observability, and scalability.",
      category: "Cloud & DevOps",
      icon: "☁️",
    },
    {
      title: "DIGITAL PRODUCTS",
      desc: "Product engineering, UX research, digital transformation, and product strategy.",
      category: "Digital Transformation",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-[#FFFBF7] py-12 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            EXPLORE BY TOPIC
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Targeted Technical Domains
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => (
            <button
              key={t.title}
              type="button"
              onClick={() => onSelectCategory(t.category)}
              className="group rounded-2xl border border-[#EAE3D9] bg-white p-5 text-left shadow-2xs hover:border-[#FF5F00] hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl block mb-3">{t.icon}</span>
                <h3 className="text-xs font-extrabold text-[#0F172A] tracking-wider uppercase mb-1.5 group-hover:text-[#FF5F00] transition-colors">
                  {t.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {t.desc}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-extrabold text-[#FF5F00]">
                <span>Explore Topics</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
