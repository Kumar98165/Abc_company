import React from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { ArticleDetailContainer } from "@/components/insights/ArticleDetailContainer";
import { initialInsightsArticles } from "@/components/insights/data/insightsData";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return initialInsightsArticles.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = initialInsightsArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Insight Not Found",
    };
  }

  return {
    title: `${article.title} | Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = initialInsightsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Organization",
      "name": article.author.name,
    },
    "datePublished": article.publishedAt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main className="min-h-screen bg-[#FFFBF7] pt-20">
        <ArticleDetailContainer article={article} />
      </main>
      <Footer />
    </>
  );
}
