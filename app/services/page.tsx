import { siteConfig } from "@/data/home";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { CTA } from "@/components/home/CTA";
import { ServicesContainer } from "@/components/services/ServicesContainer";
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

// Icons for each core service
const icons = {
  software: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  web: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  mobile: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  ai: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  genai: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
    </svg>
  ),
  agents: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  vision: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  saas: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  enterprise: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  cloud: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  design: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  automation: (
    <svg className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const serviceCards = [
  {
    id: 1,
    title: "Custom Software Development",
    category: "software",
    icon: icons.software,
    description: "Tailored enterprise solutions built from the ground up to solve your unique business challenges and streamline operations.",
    capabilities: ["Legacy Modernization", "API Design & Integration", "Scalable Microservices", "High-performance Architecture"],
    tags: ["Go", "Java", ".NET", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Web Application Development",
    category: "software",
    icon: icons.web,
    description: "Responsive, secure, and lightning-fast web applications designed with modern frameworks to engage users and scale dynamically.",
    capabilities: ["Single Page Applications (SPAs)", "Server-side Rendering (SSR)", "E-Commerce Architectures", "Progressive Web Apps (PWAs)"],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "software",
    icon: icons.mobile,
    description: "High-performance cross-platform and native mobile applications crafted to deliver seamless experiences across iOS and Android.",
    capabilities: ["Native iOS & Android development", "Cross-Platform Engineering", "Offline-first architectures", "Secure Payment Gateway integrations"],
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    category: "ai",
    icon: icons.ai,
    description: "Turn predictive insights into actual value by training and deploying tailored models designed to solve core business problems.",
    capabilities: ["Predictive Analytics", "Natural Language Processing (NLP)", "Anomaly & Fraud Detection", "Model Optimization & Tuning"],
    tags: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn"],
  },
  {
    id: 5,
    title: "Generative AI",
    category: "ai",
    icon: icons.genai,
    description: "Supercharge content generation, automate analysis, and construct semantic search features using state-of-the-art LLMs.",
    capabilities: ["RAG (Retrieval-Augmented Generation)", "Prompt Engineering & Tuning", "Multi-modal model integrations", "Enterprise Semantic Search"],
    tags: ["OpenAI API", "LangChain", "LlamaIndex", "Pinecone"],
  },
  {
    id: 6,
    title: "AI Agents",
    category: "ai",
    icon: icons.agents,
    description: "Develop autonomous workflows and intelligent AI agents capable of reasoning, calling tools, and completing complex processes.",
    capabilities: ["Autonomous Workflows", "Multi-Agent System Orchestration", "Tool and API execution agents", "Human-in-the-loop governance"],
    tags: ["CrewAI", "LangGraph", "AutoGPT", "Python"],
  },
  {
    id: 7,
    title: "Computer Vision",
    category: "ai",
    icon: icons.vision,
    description: "Implement high-fidelity visual monitoring, object detection, and automated media annotation systems for physical and digital assets.",
    capabilities: ["Real-time Object Detection", "OCR & Document Processing", "Facial Recognition systems", "Quality Inspection Automation"],
    tags: ["OpenCV", "YOLO", "PyTorch", "AWS Rekognition"],
  },
  {
    id: 8,
    title: "SaaS Development",
    category: "software",
    icon: icons.saas,
    description: "Build robust multi-tenant software-as-a-service applications equipped with secure subscription scaling and billing pipelines.",
    capabilities: ["Multi-tenant Database architecture", "Stripe Billing & Subscriptions", "Usage-based telemetry tracking", "Configurable Admin Dashboards"],
    tags: ["Node.js", "Prisma", "PostgreSQL", "Stripe"],
  },
  {
    id: 9,
    title: "CRM & ERP Development",
    category: "software",
    icon: icons.enterprise,
    description: "Consolidate your customer records and resource workflows with highly integrated, customizable management systems.",
    capabilities: ["Financial Ledger Integrations", "Supply Chain and Stock Telemetry", "Lead scoring automation", "Custom reporting engines"],
    tags: ["SQL Server", "NestJS", "Angular", "Docker"],
  },
  {
    id: 10,
    title: "Cloud & DevOps",
    category: "cloud",
    icon: icons.cloud,
    description: "Establish scalable cloud infrastructure and automate delivery pipelines to achieve zero-downtime deployments.",
    capabilities: ["Infrastructure as Code (IaC)", "CI/CD Pipeline Automation", "Kubernetes Orchestration", "Cloud Migration Strategy"],
    tags: ["AWS", "Terraform", "Kubernetes", "GitHub Actions"],
  },
  {
    id: 11,
    title: "UI/UX Design",
    category: "design",
    icon: icons.design,
    description: "Shape intuitive interfaces and high-fidelity user journeys tailored to drive conversions and optimize product usage.",
    capabilities: ["User Research & Persona design", "Wireframes & Interactive Prototypes", "Design System configuration", "Usability Testing & Audit"],
    tags: ["Figma", "Adobe Creative Suite", "Tailwind CSS", "Prototyping"],
  },
  {
    id: 12,
    title: "Business Automation",
    category: "automation",
    icon: icons.automation,
    description: "Replace repetitive manual entry tasks with intelligent background services and third-party API orchestrations.",
    capabilities: ["Workflow automation scripts", "RPA (Robotic Process Automation)", "ERP API integration pipelines", "Slack/Teams notifications"],
    tags: ["n8n", "Zapier", "Node.js", "Python"],
  },
];

const filters = [
  { id: "all", label: "All Services" },
  { id: "software", label: "Software & Web" },
  { id: "ai", label: "AI & ML" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "design", label: "Design & UX" },
  { id: "automation", label: "Automation" },
];

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
      "itemListElement": serviceCards.map((service) => ({
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
          
          <div className="section-shell relative py-20 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF5F00]">
                OUR SERVICES
              </span>
              <h1 className="mt-8 text-balance text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
                Technology Solutions Built for Growth
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#6B6B6B] sm:text-xl">
                We combine product thinking, engineering expertise and AI capabilities to build scalable digital solutions.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#core-services"
                  className="rounded-full bg-[#FF5F00] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#e65400] hover:shadow-lg hover:shadow-orange-500/20"
                >
                  Explore Services
                </a>
                <a
                  href="#final-cta"
                  className="rounded-full border border-[#DDD4C7] bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#1A1A1A] transition-all hover:border-[#FF5F00] hover:text-[#FF5F00]"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="section-shell py-16 lg:py-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-600 font-bold text-lg">01</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Product Engineering</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">Designing and building performant core digital infrastructures optimized for customer success.</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-600 font-bold text-lg">02</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">AI Integration</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">Incorporating large language models and cognitive agents directly into existing workflow steps.</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-600 font-bold text-lg">03</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Agile Infrastructure</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">Creating cloud foundations built around automation, scale, and iron-clad security protocols.</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-600 font-bold text-lg">04</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Delivery Excellence</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">Working under predictable timelines, clean engineering pipelines, and outcome verification.</p>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section id="core-services" className="bg-white py-16 lg:py-24">
          <div className="section-shell">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Our Technical Expertise</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
                Explore our full suite of software, AI engineering, design, and infrastructure automation capabilities.
              </p>
            </div>

            {/* Interactive container */}
            <ServicesContainer serviceCards={serviceCards} filters={filters} />
          </div>
        </section>

        {/* Technology Capabilities Section */}
        <section className="section-shell py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Our Technical Stack</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
              We leverage modern language patterns, framework ecosystems, and infrastructure orchestration.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-50 pb-3">Frontend</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Redux Toolkit", "HTML5/CSS3"].map((t) => (
                  <span key={t} className="rounded-md bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-100">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-50 pb-3">Backend & APIs</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Node.js", "NestJS", "Go (Golang)", "Python", "Java", ".NET Core", "GraphQL", "gRPC"].map((t) => (
                  <span key={t} className="rounded-md bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-100">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-50 pb-3">AI & Big Data</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["TensorFlow", "PyTorch", "LangChain", "OpenAI APIs", "CrewAI", "Pinecone DB", "Pandas", "Scikit-Learn"].map((t) => (
                  <span key={t} className="rounded-md bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-100">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-50 pb-3">Cloud & Orchestration</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "ArgoCD", "Prometheus"].map((t) => (
                  <span key={t} className="rounded-md bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-100">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-50 pb-3">Databases</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "Redis", "MySQL", "AWS DynamoDB", "Supabase", "Elasticsearch"].map((t) => (
                  <span key={t} className="rounded-md bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-100">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-50 pb-3">Platforms</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Stripe Billing", "Auth0 & JWT", "Vercel", "Heroku", "Zapier", "n8n Integration"].map((t) => (
                  <span key={t} className="rounded-md bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-100">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Approach Section */}
        <section className="bg-slate-900 text-white py-16 lg:py-24">
          <div className="section-shell">
            <div className="text-center">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-sky-400">
                OUR METHODOLOGY
              </span>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">Our Development Approach</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
                We combine rapid prototyping with enterprise engineering safety to deliver production outcomes.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
              <div className="flex flex-col items-start relative z-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold">01</span>
                <h3 className="mt-6 text-xl font-bold">Discovery & Strategy</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  We collaborate to specify project scope, user personas, key timelines, and initial blueprint maps.
                </p>
              </div>
              <div className="flex flex-col items-start relative z-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold">02</span>
                <h3 className="mt-6 text-xl font-bold">Architecture & Design</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Designing robust database models, API schemas, and interactive user prototypes for visual review.
                </p>
              </div>
              <div className="flex flex-col items-start relative z-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold">03</span>
                <h3 className="mt-6 text-xl font-bold">Agile Engineering</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Bi-weekly sprints, comprehensive automated test coverage, and frequent code reviews verify stability.
                </p>
              </div>
              <div className="flex flex-col items-start relative z-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold">04</span>
                <h3 className="mt-6 text-xl font-bold">Deployment & Scale</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Continuous integration pipelines release securely on cloud platforms, backed by liveness logging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-shell py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Why Choose Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
              We focus on building actual business outcomes, maintaining transparency and engineering safety.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <svg className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Enterprise Standards</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                We write clean, documented, and fully tested code that conforms to modern design pattern requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <svg className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">AI-native Strategy</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                We don't just add LLM wrapper API calls; we architect multi-agent systems and contextual RAG databases.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <svg className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Outcome Transparency</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Bi-weekly reviews, open communication, and detailed execution milestones prevent delays or surprises.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Component */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
