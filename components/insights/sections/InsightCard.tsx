import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InsightArticle } from "../types";

interface InsightCardProps {
  article: InsightArticle;
}

export function InsightCard({ article }: InsightCardProps) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group rounded-[28px] border border-[#EAE3D9] bg-white p-5 shadow-2xs hover:shadow-xl hover:border-[#FF5F00] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* IMAGE CONTAINER WITH TOP-RIGHT ARROW */}
        <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 border border-[#EAE3D9]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#0F172A] group-hover:bg-[#FF5F00] group-hover:text-white transition-colors duration-300 shadow-sm">
            <span className="text-xs font-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </div>
        </div>

        {/* CONTENT TYPE & CATEGORY BADGES */}
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
            {article.category}
          </span>
          <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FFF4EC] text-[#FF5F00] border border-[#FFE2CC]">
            {article.contentType}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-base font-extrabold text-[#0F172A] leading-snug mb-2 group-hover:text-[#FF5F00] transition-colors line-clamp-2">
          {article.title}
        </h3>

        {/* EXCERPT */}
        <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
      </div>

      {/* META FOOTER */}
      <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-extrabold text-[#64748B]">
        <span>{article.author.name}</span>
        <span>{article.readTime} · {article.publishedAt}</span>
      </div>
    </Link>
  );
}
