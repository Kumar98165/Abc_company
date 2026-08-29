import { siteConfig } from "@/data/home";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description: "Explore our specialized enterprise technology architectures built to optimize workflows across Healthcare, FinTech, E-Commerce, Logistics, and Manufacturing.",
  keywords: [
    "Healthcare software engineering",
    "FinTech transaction platforms",
    "E-Commerce storefront scale",
    "IoT industrial automation",
    "Logistics dispatch APIs",
  ],
};

// SVGs for each industry
const icons = {
  healthcare: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  fintech: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ecommerce: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  manufacturing: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 00-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1V2.968a2 2 0 00-1.242-1.844L12 0l-1.758 1.124A2 2 0 009 2.968V5L8 4zm1 14h6v3a1 1 0 01-1 1H10a1 1 0 01-1-1v-3z" />
    </svg>
  ),
  logistics: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M13 16h4l4-4v4m-8 0h4" />
    </svg>
  ),
  education: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  ),
  realestate: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  travel: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V8a2.5 2.5 0 00-2.5-2.5h-1.5A2 2 0 0111 3.5V2a2 2 0 00-2-2H8a2 2 0 00-2 2v1.935z" />
    </svg>
  ),
  food: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707-.707" />
    </svg>
  ),
  professional: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: icons.healthcare,
    description: "Secure, compliant, and highly integrated software systems that streamline patient care workflows and record keeping.",
    challenges: [
      "Strict data protection compliance (HIPAA/GDPR)",
      "Fragmented data layouts across medical devices",
      "Clunky legacy clinician interface software",
    ],
    solutions: [
      "Encrypted EHR/EMR cloud management databases",
      "Interoperable HL7/FHIR custom middleware layers",
      "Sleek telemedicine mobile and web dashboards",
    ],
  },
  {
    id: "fintech",
    name: "FinTech",
    icon: icons.fintech,
    description: "Highly stable, low-latency financial systems engineered to process transactions securely and automate compliance records.",
    challenges: [
      "Rigid security threat vulnerabilities",
      "High-throughput transactional latency delays",
      "Complex auditing and KYC compliance workflows",
    ],
    solutions: [
      "End-to-end encrypted transaction ledger architecture",
      "Automated KYC/AML background check scripts",
      "Real-time fraud alerts trained on transaction telemetry",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: icons.ecommerce,
    description: "High-performance multi-channel storefronts and backoffice stock managers designed to convert traffic and scale dynamically.",
    challenges: [
      "Sudden holiday traffic spikes causing crashes",
      "Disjointed inventory updates across retail channels",
      "Cart abandonment caused by page load latency",
    ],
    solutions: [
      "Auto-scaling serverless web app architectures",
      "Consolidated real-time inventory databases",
      "Edge-cached content delivery networks",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: icons.manufacturing,
    description: "Data-driven IoT monitoring and inventory management tools shaped to optimize shopfloor output and schedule telemetry.",
    challenges: [
      "Unplanned hardware breakdowns halting lines",
      "Inaccurate manual inventory counts",
      "Opaque tracking across physical workstations",
    ],
    solutions: [
      "IoT telemetry hubs for predictive machine maintenance",
      "Barcode/RFID scanner API integrations",
      "Work-in-progress digital control dashboards",
    ],
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: icons.logistics,
    description: "Real-time dispatch portals, routing optimization models, and fleet telemetry managers built to secure delivery paths.",
    challenges: [
      "Suboptimal pathing increasing fuel consumption",
      "Opaque parcel location updates for clients",
      "Disjointed communication between drivers and dispatchers",
    ],
    solutions: [
      "Dynamic multi-stop route calculation APIs",
      "Real-time GPS vehicle tracking portals",
      "Automated SMS/Email notification microservices",
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: icons.education,
    description: "Interactive virtual classrooms and administration hubs designed to organize curriculums and monitor course progress.",
    challenges: [
      "Unengaging virtual learning interfaces",
      "Complex manual grading and report cards",
      "Unsecured student database storage",
    ],
    solutions: [
      "Interactive audio/video chat integrations",
      "Automated quiz checking and scorecard generators",
      "Role-based secure student directories",
    ],
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: icons.realestate,
    description: "Property discovery indexes and agent matching platforms designed to simplify purchasing paths and lease signings.",
    challenges: [
      "Outdated properties remaining on list pages",
      "Disjointed scheduling for physical site viewings",
      "Manual document collection and background checks",
    ],
    solutions: [
      "Auto-expiring database posting indexes",
      "Self-service tour booking calendars",
      "Secure digital lease signature integrations",
    ],
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    icon: icons.travel,
    description: "High-speed reservation booking engines and dynamic pricing tools engineered to optimize occupancy rates.",
    challenges: [
      "Double bookings across reservation channels",
      "Inability to adjust pricing to match market changes",
      "Slow multi-stop itinerary loaders",
    ],
    solutions: [
      "Unified channel synchronizer database locks",
      "Dynamic demand-based price setting scripts",
      "Fast cached itinerary planners",
    ],
  },
  {
    id: "food",
    name: "Food & Restaurant",
    icon: icons.food,
    description: "Digital ordering portals, kitchen display routers, and loyalty programs built to expedite fulfillment speed.",
    challenges: [
      "High commission fees on third-party food apps",
      "Lost orders between front-desk and kitchens",
      "Low returning customer rate",
    ],
    solutions: [
      "Direct commission-free web ordering setups",
      "Automated kitchen ticket printing services",
      "Points-based loyalty tracking scripts",
    ],
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: icons.professional,
    description: "Time tracking tools, client intake forms, and invoice routers built to reduce administration hours.",
    challenges: [
      "Unbilled billable hours due to manual entry",
      "Slow client onboarding paper cycles",
      "Opaque invoice payment updates",
    ],
    solutions: [
      "One-click task time log trackers",
      "E-Signature onboarding intake templates",
      "Stripe payment reminder notification pipelines",
    ],
  },
];

export default function IndustriesPage() {
  const schemaWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Industries",
    "description": "Enterprise software engineering solutions for Healthcare, FinTech, E-Commerce, Logistics, and Manufacturing.",
    "publisher": {
      "@type": "Organization",
      "name": "Company Name",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }}
      />

      <Navbar />
      <main className="min-h-screen bg-[#F5EFE6] pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white text-[#1A1A1A] border-b border-[#DDD4C7]">
          <div className="grid-backdrop absolute inset-0 opacity-15" />
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(255,95,0,0.10),_transparent_70%)] blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(247,158,27,0.08),_transparent_70%)] blur-3xl" />

          <div className="section-shell relative py-20 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF5F00]">
                WHAT WE SERVE
              </span>
              <h1 className="mt-8 text-balance text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
                Technology Solutions for Every Industry
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#6B6B6B] sm:text-xl">
                We engineer scalable, secure, and compliance-minded software architectures tailored to solve industry-specific operational friction.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#industry-highlights"
                  className="rounded-full bg-[#FF5F00] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#e65400] hover:shadow-lg hover:shadow-orange-500/20"
                >
                  View Case Studies
                </a>
                <a
                  href="#final-cta"
                  className="rounded-full border border-[#DDD4C7] bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#1A1A1A] transition-all hover:border-[#FF5F00] hover:text-[#FF5F00]"
                >
                  Discuss Your Industry Challenge
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Alternating Spotlight Sections */}
        <section id="industry-highlights" className="bg-white py-16 lg:py-24">
          <div className="section-shell">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Spotlight Sectors</span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Deep Functional Expertise</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-sm sm:text-base">
                We deliver robust implementations that adhere to safety and industry standards. Here is how we support key enterprise areas:
              </p>
            </div>

            <div className="space-y-20 lg:space-y-28">
              {/* Highlight 1: Healthcare */}
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    {icons.healthcare}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Healthcare Technology Systems</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Patient records, telemetry streams, and clinic tools must be secure, accessible, and fast. We build compliant software interfaces that keep medical staff informed.
                  </p>
                  <div className="space-y-3 border-t border-slate-100 pt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Capabilities</h4>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs font-semibold text-slate-700">
                      <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> HIPAA Security Checks</li>
                      <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> HL7 / FHIR Integrations</li>
                      <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Telehealth Audio/Video</li>
                      <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Medical Asset Tracking</li>
                    </ul>
                  </div>
                </div>
                <div className="relative rounded-2xl bg-gradient-to-br from-[#F5EFE6] to-[#EDE5D8] border border-[#DDD4C7] p-8 text-[#1A1A1A] shadow-xl lg:order-last">
                  <div className="grid-backdrop absolute inset-0 opacity-10 rounded-2xl" />
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Case Focus</span>
                  <h4 className="mt-2 text-lg font-bold">Interoperable EHR Pipeline</h4>
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    Designed and deployed a secure clinical microservice layer that aggregates patient records from multi-brand hospital equipment directly to unified clinician tablets, lowering review time.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Next.js", "Java", "Docker", "HL7 Standards"].map((t) => (
                      <span key={t} className="rounded bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-slate-200">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlight 2: FinTech */}
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6 lg:order-last">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    {icons.fintech}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">FinTech Systems & Security</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    We construct low-latency ledger platforms that process transactions safely while providing transparent reporting telemetry for compliance tracking.
                  </p>
                  <div className="space-y-3 border-t border-slate-100 pt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Capabilities</h4>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs font-semibold text-slate-700">
                      <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Low-latency Processing</li>
                      <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Ledger Auditing Systems</li>
                      <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Automated KYC / AML Checks</li>
                      <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Custom Checkout Pipelines</li>
                    </ul>
                  </div>
                </div>
                <div className="relative rounded-2xl bg-gradient-to-br from-[#F5EFE6] to-[#EDE5D8] border border-[#DDD4C7] p-8 text-[#1A1A1A] shadow-xl">
                  <div className="grid-backdrop absolute inset-0 opacity-10 rounded-2xl" />
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Case Focus</span>
                  <h4 className="mt-2 text-lg font-bold">Automated Reconciliations</h4>
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    Built a high-volume ledger engine matching incoming checkout events against bank deposits, reducing accounting team reconciliation times and reporting delays.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Go (Golang)", "PostgreSQL", "Kafka", "AWS"].map((t) => (
                      <span key={t} className="rounded bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-slate-200">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Directory Section */}
        <section className="section-shell py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Industries Grid</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-sm sm:text-base">
              A comprehensive view of the sectors we support with dedicated engineering resources.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/5 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 transition-colors group-hover:bg-sky-100">
                  {ind.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {ind.name}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-500 flex-grow">
                  {ind.description}
                </p>

                <div className="mt-4 space-y-3.5 pt-4 border-t border-slate-50">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-red-500">Common Friction Points</h4>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-600">
                      {ind.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="mt-1 text-red-400 font-bold leading-none">&bull;</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Engineering Solutions</h4>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-600">
                      {ind.solutions.map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="mt-1 text-emerald-400 font-bold leading-none">&bull;</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#final-cta"
                  className="mt-6 flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2 text-xs font-bold text-slate-700 transition-all hover:bg-slate-950 hover:text-white hover:border-slate-950"
                >
                  Discuss Your Challenge &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic CTA */}
        <section id="final-cta" className="anchor-offset relative overflow-hidden bg-[linear-gradient(180deg,#0B1B2E_0%,#07111F_100%)] text-white">
          <div className="grid-backdrop absolute inset-0 opacity-15" />
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.24),_transparent_72%)] blur-3xl" />
          <div className="section-shell section-space relative">
            <div className="overflow-hidden border border-white/10 bg-white/5 px-6 py-12 shadow-[0_30px_90px_rgba(7,17,31,0.28)] sm:px-10 lg:px-14 lg:py-16">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  PARTNER WITH US
                </span>
                <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.7rem]">
                  Discuss Your Industry Challenge.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Connect directly with our engineering team to draft technical blueprints and specifications matching your industry friction.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={"mailto:" + siteConfig.email}
                    className="group inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-4 text-base font-semibold text-slate-950 transition-all duration-200 hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Start a Conversation
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </a>
                  <a
                    href={"tel:" + siteConfig.phone.replace(/\s+/g, '')}
                    className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:border-sky-300 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Talk to Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
