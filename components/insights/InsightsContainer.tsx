"use client";

import React, { useState, useMemo, useEffect } from "react";
import { initialInsightsArticles } from "./data/insightsData";
import { InsightArticle, InsightCategory } from "./types";
import { InsightHero } from "./sections/InsightHero";
import { FeaturedInsight } from "./sections/FeaturedInsight";
import { InsightCategoryFilter } from "./sections/InsightCategoryFilter";
import { InsightCard } from "./sections/InsightCard";
import { CompanyPrograms } from "./sections/CompanyPrograms";
import { WhatsNewInTechnology } from "./sections/WhatsNewInTechnology";
import { EngineeringDeepDives } from "./sections/EngineeringDeepDives";
import { CompanyAndEvents } from "./sections/CompanyAndEvents";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { AdminInsightEditorModal } from "./admin/AdminInsightEditorModal";

const categories: InsightCategory[] = [
  "ALL" as any,
  "COMPANY PROGRAMS",
  "AI & ML",
  "ENGINEERING",
  "CLOUD & DEVOPS",
  "WEB",
  "MOBILE",
  "PRODUCT",
  "COMPANY",
  "EVENTS",
  "CASE STUDIES",
];

export function InsightsContainer() {
  const [articles, setArticles] = useState<InsightArticle[]>(initialInsightsArticles);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Load from localStorage if present
  useEffect(() => {
    const saved = localStorage.getItem("company_insights_articles");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setArticles(parsed);
        }
      } catch (e) {
        console.error("Failed to load saved insights", e);
      }
    }
  }, []);

  const handleSaveArticle = (newArticle: InsightArticle) => {
    const updated = [newArticle, ...articles];
    setArticles(updated);
    localStorage.setItem("company_insights_articles", JSON.stringify(updated));
  };

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      // Filter out Drafts for normal view unless search matches
      if (article.status === "Draft" && searchQuery.trim() === "") {
        return false;
      }

      // 1. Category Filter
      if (activeCategory !== "ALL" && article.category !== activeCategory) {
        return false;
      }

      // 2. Search Query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(q);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(q);
        const matchesCategory = article.category.toLowerCase().includes(q);
        const matchesType = article.contentType.toLowerCase().includes(q);
        const matchesTags = article.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesTitle && !matchesExcerpt && !matchesCategory && !matchesType && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [articles, activeCategory, searchQuery]);

  return (
    <>
      {/* ADMIN EDIT FLOATING QUICK TRIGGER */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={() => setIsAdminOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-[#FF5F00] bg-white/90 backdrop-blur-md px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] shadow-xl hover:bg-[#FF5F00] hover:text-white transition cursor-pointer"
        >
          <span>✦ Post Program / Insight (Admin)</span>
        </button>
      </div>

      {/* ADMIN EDITOR MODAL */}
      <AdminInsightEditorModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onSave={handleSaveArticle}
      />

      {/* 1. COMPACT PAGE HERO */}
      <InsightHero />

      {/* 2. FEATURED INSIGHT ARTICLE */}
      {featuredArticle && <FeaturedInsight article={featuredArticle} />}

      {/* 3. LATEST INSIGHTS & SEARCH & CATEGORIES */}
      <section id="latest-insights" className="bg-[#FFFBF7] py-12 border-b border-[#EAE3D9]">
        <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          
          {/* SECTION HEADER & SEARCH INPUT */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
                LATEST INSIGHTS & PROGRAMS
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Engineering Knowledge, Tech & Company Initiatives
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                Stay up to date with our latest technology perspectives, engineering knowledge, company programs, and industry developments.
              </p>
            </div>

            {/* SEARCH FIELD */}
            <div className="w-full md:w-80 shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs, technology, AI..."
                className="w-full rounded-full border border-[#E8E0D8] bg-white px-5 py-3 text-xs text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#FF5F00] shadow-2xs"
              />
            </div>
          </div>

          {/* CATEGORY FILTER PILLS */}
          <InsightCategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* 3-COLUMN ARTICLES GRID */}
          {filteredArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-2">
              {filteredArticles.map((article) => (
                <InsightCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            /* EMPTY SEARCH STATE */
            <div className="rounded-3xl border border-[#EAE3D9] bg-white p-12 text-center space-y-4 shadow-2xs">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4EC] text-[#FF5F00] text-2xl">
                🔍
              </div>
              <h3 className="text-lg font-extrabold text-[#0F172A]">No insights or programs found</h3>
              <p className="text-xs text-[#64748B] max-w-md mx-auto leading-relaxed">
                No articles or company programs matched your search query. Try broadening your keywords.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("ALL");
                }}
                className="rounded-full bg-[#FF5F00] px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer"
              >
                View All Insights & Programs
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. COMPANY PROGRAMS & INNOVATION INITIATIVES */}
      <CompanyPrograms articles={articles} />

      {/* 5. WHAT'S NEW IN TECHNOLOGY */}
      <WhatsNewInTechnology articles={articles} />

      {/* 6. ENGINEERING DEEP DIVES */}
      <EngineeringDeepDives articles={articles} />

      {/* 7. FROM OUR TEAM (COMPANY NEWS & EVENTS) */}
      <CompanyAndEvents articles={articles} />

      {/* 8. CASE STUDIES (TECHNOLOGY IN ACTION) */}
      <CaseStudiesSection articles={articles} />

      {/* 9. NEWSLETTER & FINAL CONTACT CTA */}
      <NewsletterSection />
    </>
  );
}
