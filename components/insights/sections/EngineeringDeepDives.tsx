import React from "react";
import Link from "next/link";
import { InsightArticle } from "../types";

interface EngineeringDeepDivesProps {
  articles: InsightArticle[];
}

export function EngineeringDeepDives({ articles }: EngineeringDeepDivesProps) {
  const deepDiveArticles = articles.filter((a) => a.deepDive).slice(0, 3);

  return (
    <section className="bg-white py-12 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            ENGINEERING DEEP DIVES
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Architecture & Deep Technical Perspectives
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Go deeper into the technologies, architecture decisions, and engineering practices behind modern digital products.
          </p>
        </div>

        {/* HORIZONTAL EDITORIAL ROW */}
        <div className="grid gap-5 md:grid-cols-3">
          {deepDiveArticles.map((a) => (
            <Link
              key={a.id}
              href={`/insights/${a.slug}`}
              className="group rounded-2xl border border-[#EAE3D9] bg-[#FFFBF7] p-6 shadow-2xs hover:border-[#FF5F00] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                  {a.category}
                </span>
                <h3 className="text-sm font-extrabold text-[#0F172A] group-hover:text-[#FF5F00] transition-colors leading-snug">
                  "{a.title}"
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                  {a.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE3D9] flex items-center justify-between text-[11px] font-extrabold text-[#64748B]">
                <span>{a.readTime}</span>
                <span className="text-[#FF5F00] group-hover:translate-x-1 transition-transform">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
