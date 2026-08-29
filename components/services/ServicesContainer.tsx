"use client";

import { useState } from "react";

interface ServiceItem {
  id: number;
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  capabilities: string[];
  tags: string[];
}

interface ServicesContainerProps {
  serviceCards: ServiceItem[];
  filters: Array<{ id: string; label: string }>;
}

export function ServicesContainer({ serviceCards, filters }: ServicesContainerProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices = serviceCards.filter(
    (service) => activeFilter === "all" || service.category === activeFilter
  );

  return (
    <div className="section-shell">
      {/* Interactive Filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            className={[
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer",
              activeFilter === filter.id
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/10"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200/80",
            ].join(" ")}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Core Service Cards Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/5 group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 transition-colors group-hover:bg-sky-100">
              {service.icon}
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 flex-grow">
              {service.description}
            </p>

            <div className="mt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Capabilities</h4>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-600 font-medium">
                {service.capabilities.map((cap, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-50">
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded bg-slate-50 px-2 py-0.5 text-[10px] font-bold text-slate-500 uppercase tracking-wide border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#final-cta"
              className="mt-6 flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2 text-xs font-bold text-slate-700 transition-all hover:bg-slate-950 hover:text-white hover:border-slate-950"
            >
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
