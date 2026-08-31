import Image from "next/image";
import { siteConfig } from "@/data/home";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { CTA } from "@/components/home/CTA";
import { ServicesContainer } from "@/components/services/ServicesContainer";
import { servicesData } from "@/data/services";
import { ProductsShowcase } from "@/components/services/ProductsShowcase";
import { TrustLogos } from "@/components/home/TrustLogos";
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
              <div className="lg:col-span-7 space-y-6">
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

              {/* Right Column: Visual Visual Graphic Card Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto w-full max-w-[460px] rounded-3xl border border-[#EDE5D8] bg-[#FAF8F5] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E8E0D8] bg-white">
                    <Image
                      src="/images/hero-isometric-cube.png"
                      alt="Enterprise Technology Services"
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Floating Pill Badge 1 - Top Left */}
                  <div className="absolute -top-4 -left-4 rounded-xl border border-[#FFE5CC] bg-white p-3 shadow-lg flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF4EC] text-[#FF5F00]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#1A1A1A]">AI & Multi-Agent</div>
                      <div className="text-[10px] text-[#8C827A]">Enterprise Workflows</div>
                    </div>
                  </div>

                  {/* Floating Pill Badge 2 - Bottom Right */}
                  <div className="absolute -bottom-4 -right-4 rounded-xl border border-[#FFE5CC] bg-white p-3 shadow-lg flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF4EC] text-[#FF5F00]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#1A1A1A]">Full-Stack & Cloud</div>
                      <div className="text-[10px] text-[#8C827A]">Scalable Architecture</div>
                    </div>
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
        <section className="section-shell py-16 lg:py-24">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF5F00]">
              Tech Stack
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl">Our Technical Stack</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#6B6B6B]">
              We leverage modern language patterns, framework ecosystems, and infrastructure orchestration.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Frontend", techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Redux Toolkit", "HTML5/CSS3"] },
              { label: "Backend & APIs", techs: ["Node.js", "NestJS", "Go (Golang)", "Python", "Java", ".NET Core", "GraphQL", "gRPC"] },
              { label: "AI & Big Data", techs: ["TensorFlow", "PyTorch", "LangChain", "OpenAI APIs", "CrewAI", "Pinecone DB", "Pandas", "Scikit-Learn"] },
              { label: "Cloud & DevOps", techs: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "ArgoCD", "Prometheus"] },
              { label: "Databases", techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "AWS DynamoDB", "Supabase", "Elasticsearch"] },
              { label: "Platforms", techs: ["Stripe Billing", "Auth0 & JWT", "Vercel", "Heroku", "Zapier", "n8n Integration"] },
            ].map(({ label, techs }) => (
              <div key={label} className="group rounded-2xl border border-[#E8E0D8] bg-white p-6 shadow-sm hover:shadow-lg hover:border-[#FF5F00]/20 transition-all duration-300">
                <div className="flex items-center gap-3 pb-4 border-b border-[#F0EAE2]">
                  <span className="h-2 w-2 rounded-full bg-[#FF5F00]" />
                  <h3 className="text-sm font-extrabold text-[#1A1A1A] uppercase tracking-wider">{label}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <span key={t} className="rounded-md bg-[#FAF6F0] px-2.5 py-1 text-xs font-semibold text-[#5A5048] border border-[#EDE5D8] hover:border-[#FF5F00]/40 hover:text-[#FF5F00] transition-colors cursor-default">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Approach Section */}
        <section className="bg-[#0F0F0F] text-white py-16 lg:py-24 relative overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,95,0,0.07),_transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(247,158,27,0.05),_transparent_60%)] pointer-events-none" />

          <div className="section-shell relative">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF5F00]">
                Our Methodology
              </span>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">Our Development Approach</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
                We combine rapid prototyping with enterprise engineering safety to deliver production outcomes.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { num: "01", title: "Discovery & Strategy", desc: "We collaborate to specify project scope, user personas, key timelines, and initial blueprint maps." },
                { num: "02", title: "Architecture & Design", desc: "Designing robust database models, API schemas, and interactive user prototypes for visual review." },
                { num: "03", title: "Agile Engineering", desc: "Bi-weekly sprints, comprehensive automated test coverage, and frequent code reviews verify stability." },
                { num: "04", title: "Deployment & Scale", desc: "Continuous integration pipelines release securely on cloud platforms, backed by liveness logging." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="group flex flex-col items-start relative">
                  {/* Connector line (hidden on last) */}
                  <div className="flex items-center gap-4 w-full">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF5F00]/10 border border-[#FF5F00]/25 text-[#FF5F00] font-extrabold text-sm group-hover:bg-[#FF5F00] group-hover:text-white transition-all duration-300">{num}</span>
                    <div className="flex-1 h-px bg-white/10 group-last:hidden" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-shell py-16 lg:py-24">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF5F00]">
              Why Us
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl">Why Choose Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#6B6B6B]">
              We focus on building actual business outcomes, maintaining transparency and engineering safety.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#FF5F00">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Enterprise Standards",
                desc: "We write clean, documented, and fully tested code that conforms to modern design pattern requirements.",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#FF5F00">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "AI-native Strategy",
                desc: "We don't just add LLM wrapper API calls; we architect multi-agent systems and contextual RAG databases.",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#FF5F00">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Outcome Transparency",
                desc: "Bi-weekly reviews, open communication, and detailed execution milestones prevent delays or surprises.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-[#E8E0D8] bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/8 hover:border-[#FF5F00]/20 transition-all duration-300">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF4EC] border border-[#FFE5CC] group-hover:bg-[#FF5F00] group-hover:border-[#FF5F00] transition-all duration-300">
                  <span className="group-hover:[&_svg]:stroke-white [&_svg]:transition-all [&_svg]:duration-300">{icon}</span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-[#1A1A1A] group-hover:text-[#FF5F00] transition-colors duration-200">{title}</h3>
                <p className="mt-2.5 text-sm text-[#6B6B6B] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products & Platforms Showcase */}
        <ProductsShowcase />

        {/* CTA Component */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
