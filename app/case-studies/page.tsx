import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { CaseStudies } from "@/components/home/CaseStudies";
import { CTA } from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore our collection of custom software engineering and AI projects built to create real-world business value.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-canvas text-copy pt-20">
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
