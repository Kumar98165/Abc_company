import React from "react";
import Link from "next/link";
import { InsightArticle } from "../types";

interface CaseStudiesSectionProps {
  articles: InsightArticle[];
}

export function CaseStudiesSection({ articles }: CaseStudiesSectionProps) {
  const caseStudies = articles.filter((a) => a.contentType === "Case Study");
  if (caseStudies.length === 0) return null;

  return (
    <section className="bg-white py-12 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            CASE STUDIES
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Technology in Action
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            See how our technology team approaches complex engineering challenges and delivers reliable digital solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          {caseStudies.map((cs) => {
            const details = cs.caseStudyDetails;
            return (
              <div
                key={cs.id}
                className="rounded-[32px] border border-[#EAE3D9] bg-[#FFFBF7] p-7 sm:p-9 shadow-sm space-y-6 hover:border-[#FF5F00] transition duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#EAE3D9] pb-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                      PROJECT CASE STUDY
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                      {cs.title}
                    </h3>
                  </div>

                  <Link
                    href={`/insights/${cs.slug}`}
                    className="shrink-0 rounded-full bg-[#FF5F00] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-2xs"
                  >
                    View Case Study →
                  </Link>
                </div>

                {details && (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl bg-white p-4 border border-[#EAE3D9]">
                      <span className="text-[10px] font-extrabold uppercase text-[#FF5F00]">1. CHALLENGE</span>
                      <p className="text-xs text-[#334155] font-semibold mt-1 leading-snug">{details.challenge}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 border border-[#EAE3D9]">
                      <span className="text-[10px] font-extrabold uppercase text-[#FF5F00]">2. SOLUTION</span>
                      <p className="text-xs text-[#334155] font-semibold mt-1 leading-snug">{details.solution}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 border border-[#EAE3D9]">
                      <span className="text-[10px] font-extrabold uppercase text-[#FF5F00]">3. STACK</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {details.technology.map((t) => (
                          <span key={t} className="rounded-md bg-[#FFF4EC] px-2 py-0.5 text-[10px] font-bold text-[#FF5F00]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white p-4 border border-[#EAE3D9]">
                      <span className="text-[10px] font-extrabold uppercase text-[#FF5F00]">4. OUTCOME</span>
                      <p className="text-xs text-[#334155] font-semibold mt-1 leading-snug">{details.outcome}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
