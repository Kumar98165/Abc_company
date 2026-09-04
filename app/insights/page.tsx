import React, { Suspense } from "react";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { InsightsContainer } from "@/components/insights/InsightsContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Ideas, Technology & Perspectives",
  description: "Explore practical perspectives from our team on AI, software engineering, cloud, digital products, and emerging technologies.",
  keywords: [
    "Software Engineering Insights",
    "AI Architecture Blog",
    "Cloud DevOps Perspectives",
    "Enterprise Software Solutions",
    "Digital Product Studio Insights",
  ],
};

export default function InsightsPage() {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.companyname.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Insights",
        "item": "https://www.companyname.com/insights",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <Navbar />
      <main className="min-h-screen bg-[#FFFBF7] pt-20">
        <Suspense fallback={<div className="min-h-screen bg-[#FFFBF7]" />}>
          <InsightsContainer />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
