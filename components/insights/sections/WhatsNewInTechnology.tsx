import React from "react";
import Link from "next/link";
import { InsightArticle } from "../types";

interface WhatsNewInTechnologyProps {
  articles: InsightArticle[];
}

export function WhatsNewInTechnology({ articles }: WhatsNewInTechnologyProps) {
  const techUpdates = articles.filter((a) => a.contentType === "Technology Update");
  if (techUpdates.length === 0) return null;

  const topTech = techUpdates[0];
  const details = topTech.techUpdateDetails;

  return (
    <section className="bg-white py-12 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-[32px] border border-[#FFE2CC] bg-gradient-to-br from-[#FFF4EC] via-[#FFFBF7] to-white p-7 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5F00] px-3.5 py-0.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white shadow-2xs">
              ⚡ WHAT'S NEW IN TECHNOLOGY
            </span>
            <span className="text-xs font-mono font-extrabold text-[#64748B]">
              EMERGING PERSPECTIVES • {topTech.publishedAt}
            </span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              {topTech.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {topTech.excerpt}
            </p>
          </div>

          {/* 4 PERSPECTIVE CARDS */}
          {details && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-2">
              <div className="rounded-2xl border border-[#EAE3D9] bg-white p-4 space-y-1 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                  1. WHAT CHANGED
                </span>
                <p className="text-xs font-bold text-[#0F172A] leading-snug">
                  {details.whatChanged}
                </p>
              </div>

              <div className="rounded-2xl border border-[#EAE3D9] bg-white p-4 space-y-1 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                  2. WHY IT MATTERS
                </span>
                <p className="text-xs font-bold text-[#0F172A] leading-snug">
                  {details.whyItMatters}
                </p>
              </div>

              <div className="rounded-2xl border border-[#EAE3D9] bg-white p-4 space-y-1 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                  3. BUSINESS IMPACT
                </span>
                <p className="text-xs font-bold text-[#0F172A] leading-snug">
                  {details.businessImpact}
                </p>
              </div>

              <div className="rounded-2xl border border-[#EAE3D9] bg-white p-4 space-y-1 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                  4. ENGINEERING PERSPECTIVE
                </span>
                <p className="text-xs font-bold text-[#0F172A] leading-snug">
                  {details.technicalPerspective}
                </p>
              </div>
            </div>
          )}

          <div className="pt-2">
            <Link
              href={`/insights/${topTech.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#FF5F00] bg-white px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] hover:bg-[#FF5F00] hover:text-white transition cursor-pointer"
            >
              <span>Explore Technology Update</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
