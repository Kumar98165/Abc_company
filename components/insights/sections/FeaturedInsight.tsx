import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InsightArticle } from "../types";

interface FeaturedInsightProps {
  article: InsightArticle;
}

export function FeaturedInsight({ article }: FeaturedInsightProps) {
  return (
    <section className="bg-white py-10 sm:py-12 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-[32px] border border-[#EAE3D9] bg-[#FFFBF7] p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] grid gap-8 lg:grid-cols-12 items-center group hover:border-[#FF5F00] transition-all duration-300">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5F00] px-3.5 py-0.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white shadow-2xs">
              FEATURED INSIGHT
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#FF5F00] transition-colors leading-snug">
              {article.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-extrabold text-[#64748B] pt-1">
              <span className="uppercase text-[#FF5F00] tracking-wider">{article.category}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.publishedAt}</span>
            </div>

            <div className="pt-2">
              <Link
                href={`/insights/${article.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5F00] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
              >
                <span>Read Insight</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-6">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden border border-[#EAE3D9] shadow-sm">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
