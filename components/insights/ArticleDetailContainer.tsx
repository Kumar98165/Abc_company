import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InsightArticle } from "./types";
import { InsightCard } from "./sections/InsightCard";
import { initialInsightsArticles } from "./data/insightsData";

interface ArticleDetailContainerProps {
  article: InsightArticle;
}

export function ArticleDetailContainer({ article }: ArticleDetailContainerProps) {
  const relatedArticles = initialInsightsArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const isProgram = (article.contentType === "Company Program" || article.contentType === "Innovation") && article.programDetails;
  const isTechUpdate = article.contentType === "Technology Update" && article.techUpdateDetails;
  const isEvent = article.contentType === "Event" && article.eventDetails;
  const isCaseStudy = article.contentType === "Case Study" && article.caseStudyDetails;

  return (
    <article className="bg-[#FFFBF7] min-h-screen py-10 sm:py-14 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs font-bold text-[#64748B]">
          <Link href="/" className="hover:text-[#FF5F00]">Home</Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-[#FF5F00]">Insights</Link>
          <span>/</span>
          <span className="text-[#0F172A] truncate max-w-xs">{article.title}</span>
        </nav>

        {/* HEADER AREA */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
              🚀 {article.contentType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            {article.excerpt}
          </p>

          {/* AUTHOR META */}
          <div className="flex items-center gap-4 pt-4 border-t border-[#EAE3D9] text-xs text-[#64748B]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF5F00] font-mono font-bold text-sm">
              ✦
            </div>
            <div>
              <p className="font-extrabold text-[#0F172A]">{article.author.name}</p>
              <p className="text-[11px]">{article.author.role} • {article.publishedAt} • {article.readTime}</p>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative h-64 sm:h-96 w-full rounded-[28px] overflow-hidden border border-[#EAE3D9] shadow-md">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        {/* COMPANY PROGRAM CALLOUT BOX */}
        {isProgram && (
          <div className="rounded-[28px] border border-[#FFE2CC] bg-[#FFF4EC] p-6 sm:p-8 space-y-4 shadow-2xs">
            <h3 className="font-extrabold text-[#FF5F00] uppercase tracking-wider text-xs">
              🚀 Company Program Overview & Key Benefits
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 text-xs text-[#0F172A]">
              <div>
                <span className="font-extrabold text-[#FF5F00] block">Program Name:</span>
                <span>{article.programDetails?.programName}</span>
              </div>
              <div>
                <span className="font-extrabold text-[#FF5F00] block">Target Audience:</span>
                <span>{article.programDetails?.targetAudience}</span>
              </div>
            </div>
            {article.programDetails?.keyBenefits && (
              <div className="pt-2 border-t border-[#FFE2CC]">
                <span className="font-extrabold text-[#FF5F00] text-xs block mb-2">Key Program Benefits:</span>
                <ul className="space-y-1.5 text-xs text-[#334155]">
                  {article.programDetails.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FF5F00] font-bold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* SPECIALIZED CONTENT TYPE CALLOUT BOXES */}
        {isTechUpdate && (
          <div className="rounded-[28px] border border-[#FFE2CC] bg-[#FFF4EC] p-6 space-y-3">
            <h3 className="font-extrabold text-[#FF5F00] uppercase tracking-wider text-xs">
              ⚡ Technology Impact Summary
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 text-xs text-[#0F172A]">
              <div>
                <span className="font-extrabold text-[#FF5F00] block">What Changed:</span>
                <span>{article.techUpdateDetails?.whatChanged}</span>
              </div>
              <div>
                <span className="font-extrabold text-[#FF5F00] block">Business Impact:</span>
                <span>{article.techUpdateDetails?.businessImpact}</span>
              </div>
            </div>
          </div>
        )}

        {isEvent && (
          <div className="rounded-[28px] border border-[#FFE2CC] bg-[#FFF4EC] p-6 space-y-3">
            <h3 className="font-extrabold text-[#FF5F00] uppercase tracking-wider text-xs">
              📅 Event Information & Key Takeaways
            </h3>
            <p className="text-xs font-bold text-[#0F172A]">
              Location: {article.eventDetails?.location} | Date: {article.eventDetails?.date}
            </p>
            {article.eventDetails?.keyTakeaways && (
              <ul className="space-y-1.5 text-xs text-[#334155] pt-2">
                {article.eventDetails.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF5F00] font-bold">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {isCaseStudy && (
          <div className="rounded-[28px] border border-[#FFE2CC] bg-[#FFF4EC] p-6 space-y-3">
            <h3 className="font-extrabold text-[#FF5F00] uppercase tracking-wider text-xs">
              💼 Case Study Summary
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 text-xs text-[#0F172A]">
              <div>
                <span className="font-extrabold text-[#FF5F00] block">Challenge:</span>
                <span>{article.caseStudyDetails?.challenge}</span>
              </div>
              <div>
                <span className="font-extrabold text-[#FF5F00] block">Outcome:</span>
                <span>{article.caseStudyDetails?.outcome}</span>
              </div>
            </div>
          </div>
        )}

        {/* ARTICLE BODY CONTENT */}
        <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-[#334155] leading-relaxed bg-white p-6 sm:p-10 rounded-[28px] border border-[#EAE3D9] shadow-2xs">
          {article.content ? (
            article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          ) : (
            <p>
              In today's fast-evolving technology ecosystem, building scalable systems requires a holistic approach across software architecture, data modeling, and continuous deployment workflows.
            </p>
          )}

          {/* TAGS */}
          <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#E2E8F0] bg-[#FAF8F5] px-3 py-1 text-xs font-bold text-[#0F172A]">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* RELATED INSIGHTS SECTION */}
        <div className="pt-10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-[#0F172A]">
              YOU MAY ALSO LIKE
            </h3>
            <Link href="/insights" className="text-xs font-extrabold text-[#FF5F00] hover:underline">
              View All Insights →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedArticles.map((rel) => (
              <InsightCard key={rel.id} article={rel} />
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
