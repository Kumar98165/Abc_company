import Image from "next/image";
import { siteConfig } from "@/data/home";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { ServicesContainer } from "@/components/services/ServicesContainer";
import { servicesData } from "@/data/services";
import { TrustLogos } from "@/components/home/TrustLogos";
import TechStackShowcase from "@/components/services/TechStackShowcase";
import { EnterpriseSecurityTrustBar } from "@/components/services/EnterpriseSecurityTrustBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "From product engineering to AI orchestration and cloud infrastructure, discover our full suite of technical capabilities.",
  keywords: [
    "Software Development Services",
    "Web Application Engineering",
    "Mobile App Studio",
    "Generative AI integration",
    "Enterprise RAG deployment",
    "Cloud DevOps automation",
  ],
};

export default function ServicesPage() {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Technical Product Engineering and AI Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Company Name",
      "url": "https://www.companyname.com",
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technical Capabilities",
      "itemListElement": servicesData.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />

      <Navbar />
      <main className="min-h-screen bg-[#F5EFE6] pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white text-[#1A1A1A] border-b border-[#DDD4C7]">
          <div className="grid-backdrop absolute inset-0 opacity-15" />
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(255,95,0,0.10),_transparent_70%)] blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(247,158,27,0.08),_transparent_70%)] blur-3xl" />
          
          <div className="section-shell relative py-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              
              {/* Left Column: Headline & Action */}
              <div className="lg:col-span-6 space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF5F00]">
                  <span className="h-2 w-2 rounded-full bg-[#FF5F00] animate-pulse" />
                  OUR SERVICES
                </span>
                <h1 className="text-balance text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl leading-[1.15]">
                  Technology Solutions <br />
                  <span className="bg-gradient-to-r from-[#FF5F00] via-[#F79E1B] to-[#FF5F00] bg-clip-text text-transparent">
                    Built for Growth
                  </span>
                </h1>
                <p className="text-lg leading-relaxed text-[#6B6B6B] max-w-2xl">
                  We combine product thinking, engineering expertise and AI capabilities to build scalable digital solutions for global enterprises.
                </p>
                
                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href="#core-services"
                    className="rounded-full bg-[#FF5F00] px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#e65400] hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
                  >
                    Explore Services
                  </a>
                  <a
                    href="#final-cta"
                    className="rounded-full border border-[#DDD4C7] bg-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-[#1A1A1A] transition-all duration-300 hover:border-[#FF5F00] hover:text-[#FF5F00] hover:bg-[#FFF4EC]/50"
                  >
                    Schedule Consultation
                  </a>
                </div>

                {/* Stat Counters */}
                <div className="mt-8 grid grid-cols-3 gap-6 border-t border-[#F0EAE2] pt-8 max-w-xl">
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">12+</div>
                    <div className="mt-1 text-xs font-bold text-[#7A6E65] uppercase tracking-wider">Service Areas</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5F00]">99.9%</div>
                    <div className="mt-1 text-xs font-bold text-[#7A6E65] uppercase tracking-wider">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">100+</div>
                    <div className="mt-1 text-xs font-bold text-[#7A6E65] uppercase tracking-wider">Apps Shipped</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-6 relative">
                <div className="relative mx-auto w-full max-w-[650px] lg:max-w-none">
                  <div className="relative aspect-[1.18/1] w-full overflow-hidden rounded-3xl">
                    <Image
                      src="/images/hero-isometric-cube.png"
                      alt="Enterprise Technology Services"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                      className="object-contain object-center transition-transform duration-700 hover:scale-[1.03]"
                      priority
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Company Partnership Trust Logos */}
        <TrustLogos />

        {/* Core Technical Expertise Section */}
        <div id="core-services">
          <ServicesContainer />
        </div>

        {/* Technology Stack Section */}
        <TechStackShowcase />

        {/* Enterprise Security & Compliance Trust Section */}
        <EnterpriseSecurityTrustBar />
      </main>
      <Footer />
    </>
  );
}
