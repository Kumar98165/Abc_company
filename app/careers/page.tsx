import React, { Suspense } from "react";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { CareersContainer } from "@/components/careers/CareersContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Our Engineering & AI Team",
  description: "Join our team of engineers, designers, AI researchers, and problem solvers building high-impact digital products. Explore remote and hybrid career opportunities.",
  keywords: [
    "Software Engineer jobs Pune",
    "Frontend Developer openings Hybrid",
    "AI ML engineer roles",
    "DevOps cloud vacancy",
    "UI UX design recruitment",
    "Full Stack Developer careers",
  ],
};

export default function CareersPage() {
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
        "name": "Careers",
        "item": "https://www.companyname.com/careers",
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
          <CareersContainer />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
