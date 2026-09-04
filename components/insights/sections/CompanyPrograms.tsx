import React from "react";
import Link from "next/link";
import { InsightArticle } from "../types";

interface CompanyProgramsProps {
  articles: InsightArticle[];
}

export function CompanyPrograms({ articles }: CompanyProgramsProps) {
  const programs = articles.filter(
    (a) => a.contentType === "Company Program" || a.category === "COMPANY PROGRAMS"
  );

  if (programs.length === 0) return null;

  return (
    <section className="bg-[#FFFBF7] py-12 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            COMPANY PROGRAMS & INNOVATIONS
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Our Internal R&D & Tech Acceleration Initiatives
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Explore our company's flagship innovation incubators, fellowship programs, and technology acceleration initiatives.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((prog) => {
            const det = prog.programDetails;
            return (
              <div
                key={prog.id}
                className="group rounded-[32px] border border-[#EAE3D9] bg-white p-7 sm:p-8 shadow-2xs hover:border-[#FF5F00] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-3.5 py-1 text-[10.5px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                      🚀 {prog.contentType}
                    </span>
                    <span className="text-xs font-bold text-[#64748B]">{prog.publishedAt}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#FF5F00] transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {prog.excerpt}
                  </p>

                  {det && (
                    <div className="rounded-2xl bg-[#FFF9F4] border border-[#FFE2CC] p-4 space-y-2">
                      <p className="text-xs font-extrabold text-[#0F172A]">
                        🎯 Target: <span className="text-[#64748B] font-normal">{det.targetAudience}</span>
                      </p>
                      <ul className="space-y-1.5 pt-1">
                        {det.keyBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                            <span className="text-[#FF5F00] font-bold">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-5 border-t border-[#F1F5F9] mt-6">
                  <Link
                    href={`/insights/${prog.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FF5F00] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Program Details</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
