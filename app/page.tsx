import { About } from "@/components/home/About";
import { AITechnology } from "@/components/home/AITechnology";
import { CaseStudies } from "@/components/home/CaseStudies";
import { CTA } from "@/components/home/CTA";
import { FAQ } from "@/components/home/FAQ";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Navbar } from "@/components/home/Navbar";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { TechnologyStack } from "@/components/home/TechnologyStack";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustLogos } from "@/components/home/TrustLogos";

export default function Home() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Company Name",
    "url": "https://www.companyname.com",
    "logo": "https://www.companyname.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-20-00000000",
      "contactType": "customer service",
      "availableLanguage": ["en"],
    },
    "sameAs": [
      "https://www.linkedin.com/company/companyname",
      "https://github.com/companyname",
    ],
  };

  const schemaSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Company Name",
    "url": "https://www.companyname.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.companyname.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSite) }}
      />

      <Navbar />
      <main className="overflow-hidden bg-canvas text-copy">
        <Hero />
        <TrustLogos />
        <About />
        <Process />
        <Services />
        <AITechnology />
        <Industries />
        <CaseStudies />
        <TechnologyStack />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
