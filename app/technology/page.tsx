import { siteConfig } from "@/data/home";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description: "Read our comprehensive engineering stack blueprint, covering React, Next.js, Java, Spring Boot, Python, PostgreSQL, AWS, Docker, and Kubernetes.",
  keywords: [
    "Next.js architecture",
    "React design patterns",
    "Java Spring Boot microservices",
    "Python AI frameworks",
    "PostgreSQL scale tuning",
    "Docker Kubernetes clusters",
  ],
};

// Technology specific icons
const techIcons: Record<string, React.ReactNode> = {
  React: (
    <svg className="h-5 w-5 fill-none stroke-sky-500" viewBox="0 0 24 24" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30,12,12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90,12,12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150,12,12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-sky-500" />
    </svg>
  ),
  "Next.js": (
    <svg className="h-5 w-5 fill-none stroke-slate-900" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 17V7l7 10V7" />
    </svg>
  ),
  TypeScript: (
    <svg className="h-5 w-5 fill-sky-600 stroke-none" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="3" />
      <text x="7" y="17" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
    </svg>
  ),
  JavaScript: (
    <svg className="h-5 w-5 fill-amber-500 stroke-none" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="3" />
      <text x="8" y="17" fill="black" fontSize="11" fontWeight="bold" fontFamily="sans-serif">JS</text>
    </svg>
  ),
  "Tailwind CSS": (
    <svg className="h-5 w-5 fill-none stroke-sky-400" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Java: (
    <svg className="h-5 w-5 stroke-red-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c2.5 0 3-1 3-2.5S13.5 9 12 9s-3 1-3 2.5 1.5 2.5 3 2.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9V3M9 5h6M9 14h6" />
    </svg>
  ),
  "Spring Boot": (
    <svg className="h-5 w-5 stroke-emerald-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 2.5-3.5 3.5-3.5 6s2 4.5 3.5 7c1.5-2.5 3.5-4.5 3.5-7s-2-3.5-3.5-6z" />
      <circle cx="12" cy="11" r="1.5" />
    </svg>
  ),
  Python: (
    <svg className="h-5 w-5 fill-none stroke-blue-500" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a4 4 0 00-4 4v2H6a4 4 0 00-4 4v2a4 4 0 004 4h2v1a4 4 0 004 4h2a4 4 0 004-4v-2h2a4 4 0 004-4v-2a4 4 0 00-4-4h-2V7a4 4 0 00-4-4h-2z" />
    </svg>
  ),
  FastAPI: (
    <svg className="h-5 w-5 stroke-teal-500 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Flask: (
    <svg className="h-5 w-5 stroke-slate-700 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M10 3v6l-3 7a2 2 0 001.7 2.7h6.6A2 2 0 0017 16l-3-7V3" />
    </svg>
  ),
  "Node.js": (
    <svg className="h-5 w-5 stroke-green-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4.5v9L12 21L4 16.5v-9L12 3z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  PyTorch: (
    <svg className="h-5 w-5 stroke-orange-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7.5 4.5v9L12 21l-7.5-4.5v-9L12 3z" />
      <path d="M12 8v8M9 10h6" strokeLinecap="round" />
    </svg>
  ),
  TensorFlow: (
    <svg className="h-5 w-5 stroke-orange-500 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "Scikit-learn": (
    <svg className="h-5 w-5 stroke-blue-700 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M12 8v8" strokeLinecap="round" />
    </svg>
  ),
  LLMs: (
    <svg className="h-5 w-5 stroke-indigo-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <rect width="18" height="12" x="3" y="6" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 10h4M7 14h10" />
    </svg>
  ),
  RAG: (
    <svg className="h-5 w-5 stroke-violet-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  "AI Agents": (
    <svg className="h-5 w-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <circle cx="9" cy="7" r="4" />
      <circle cx="15" cy="17" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11v6h6" />
    </svg>
  ),
  "Computer Vision": (
    <svg className="h-5 w-5 stroke-blue-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  PostgreSQL: (
    <svg className="h-5 w-5 stroke-sky-700 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
  MySQL: (
    <svg className="h-5 w-5 stroke-blue-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <ellipse cx="12" cy="7" rx="6" ry="3" />
      <path d="M6 7v5c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5V7M6 12v5c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5v-5" />
    </svg>
  ),
  MongoDB: (
    <svg className="h-5 w-5 stroke-green-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 2.5-3.5 3.5-3.5 6s2 4.5 3.5 7c1.5-2.5 3.5-4.5 3.5-7s-2-3.5-3.5-6z" />
      <path d="M9 16c1.5 1 4.5 1 6 0" />
    </svg>
  ),
  Redis: (
    <svg className="h-5 w-5 stroke-red-500 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 3.5 3 8 3s8-1 8-3V7M4 7c0-2 3.5-3 8-3s8 1 8 3M4 7c0 2 3.5 3 8 3s8-1 8-3M4 12c0 2 3.5 3 8 3s8-1 8-3" />
    </svg>
  ),
  AWS: (
    <svg className="h-5 w-5 stroke-amber-500 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0 0l-4-4m4 4l4-4M5 19h14" />
    </svg>
  ),
  Azure: (
    <svg className="h-5 w-5 stroke-blue-500 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 8-4 8H6l-4-8 4-8z" />
    </svg>
  ),
  "Google Cloud": (
    <svg className="h-5 w-5 stroke-sky-400 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zm0 10v10M2 17l10 5 10-5" />
    </svg>
  ),
  Docker: (
    <svg className="h-5 w-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18v6H3V9zm4 0V6m4 3V6m4 3V6m4 3V6" />
      <path d="M5 15c1.5 2 4.5 2 6 0" strokeLinecap="round" />
    </svg>
  ),
  Kubernetes: (
    <svg className="h-5 w-5 stroke-blue-700 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M3.5 7l2.5 1.5m10 7l2.5 1.5M20.5 7l-2.5 1.5M6 17l-2.5 1.5" />
    </svg>
  ),
  "GitHub Actions": (
    <svg className="h-5 w-5 stroke-slate-900 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 9v7a2 2 0 002 2h7" strokeLinecap="round" />
    </svg>
  ),
  Jenkins: (
    <svg className="h-5 w-5 stroke-amber-700 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7c-2 0-3 1.5-3 3.5s2 3.5 3 3.5 3-1.5 3-3.5S14 7 12 7z" />
    </svg>
  ),
  "CI/CD": (
    <svg className="h-5 w-5 stroke-indigo-500 fill-none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12a4 4 0 100-8 4 4 0 000 8zm8 0a4 4 0 100 8 4 4 0 000-8z" />
      <path d="M8 12h8" strokeLinecap="round" />
    </svg>
  ),
};

const techStack = [
  {
    category: "Frontend",
    description: "Responsive, secure, and user-centric browser architectures constructed with type-safety and state predictability.",
    items: [
      { name: "React", description: "Component-driven client rendering libraries with concurrent capabilities." },
      { name: "Next.js", description: "Server-side rendering frameworks providing hybrid static/dynamic generation." },
      { name: "TypeScript", description: "Strongly typed supersets of JavaScript helping reduce runtime exceptions." },
      { name: "JavaScript", description: "Universal standard scripting languages powering web browser client scripts." },
      { name: "Tailwind CSS", description: "Utility-first stylesheets built for scalable design system matching." },
    ],
  },
  {
    category: "Backend",
    description: "Robust application servers, microservice nodes, and clean API schemas shaped to scale operations safely.",
    items: [
      { name: "Java", description: "Enterprise-grade compiled language for secure business logic execution." },
      { name: "Spring Boot", description: "Cohesive frameworks for building standalone production-grade Spring services." },
      { name: "Python", description: "High-level language optimized for clean syntax and scientific computing tasks." },
      { name: "FastAPI", description: "Modern, rapid web framework built for Python API development with OpenAPI routing." },
      { name: "Flask", description: "Lightweight, flexible Python WSGI microframework for microservices." },
      { name: "Node.js", description: "Event-driven asynchronous JavaScript runtimes optimized for I/O operations." },
    ],
  },
  {
    category: "AI & Machine Learning",
    description: "Custom model training pipelines, token-based content parsers, and semantic vector database retrievers.",
    items: [
      { name: "Python", description: "Core data science script foundation supporting numeric libraries." },
      { name: "PyTorch", description: "Dynamic neural network frameworks optimized for tensor graphics computing." },
      { name: "TensorFlow", description: "End-to-end open-source platforms for deep learning modeling and deployment." },
      { name: "Scikit-learn", description: "Predictive modeling and classification libraries for tabular telemetry." },
      { name: "LLMs", description: "Large Language Models supporting generative text completion and summarization." },
      { name: "RAG", description: "Retrieval-Augmented Generation linking domain documents to LLM pipelines." },
      { name: "AI Agents", description: "Autonomous task-execution loops with decision capability and tool usage." },
      { name: "Computer Vision", description: "Image-processing and object detection scripts parsing visual feeds." },
    ],
  },
  {
    category: "Database Systems",
    description: "Highly structured and non-relational transactional storage options for scalable query speeds.",
    items: [
      { name: "PostgreSQL", description: "Object-relational databases offering complex transaction security." },
      { name: "MySQL", description: "Widely used relational database management systems for standard web application records." },
      { name: "MongoDB", description: "JSON-like document stores built for flexible schema requirements." },
      { name: "Redis", description: "In-memory database buffers used for high-performance caches and sessions." },
    ],
  },
  {
    category: "Cloud Infrastructures",
    description: "Virtual networks, server groups, and managed data stores supporting worldwide availability.",
    items: [
      { name: "AWS", description: "Comprehensive cloud compute and database management ecosystems." },
      { name: "Azure", description: "Enterprise cloud directory and developer service systems." },
      { name: "Google Cloud", description: "Optimized virtual containers, big data processing, and AI modeling platforms." },
    ],
  },
  {
    category: "DevOps & Pipelines",
    description: "Automated test checking, container assembly lines, and zero-downtime cluster orchestration.",
    items: [
      { name: "Docker", description: "Container systems isolating application binaries from hardware differences." },
      { name: "Kubernetes", description: "Orchestration panels managing cluster scheduling and dynamic scaling." },
      { name: "GitHub Actions", description: "Code-triggered pipelines compiling packages and launching unit tests." },
      { name: "Jenkins", description: "Extensible automation servers running customized test integrations." },
      { name: "CI/CD", description: "Continuous Integration and Delivery concepts reducing manual deployment steps." },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <>
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
                OUR EXPERTISE
              </span>
              <h1 className="mt-8 text-balance text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
                Engineering With the Right Technology
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#6B6B6B] sm:text-xl">
                We select toolsets, frameworks, and deployment scripts shaped to deliver long-term stability, performance security, and clean maintenance.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#tech-matrix"
                  className="rounded-full bg-[#FF5F00] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#e65400] hover:shadow-lg hover:shadow-orange-500/20"
                >
                  View Tech Matrix
                </a>
                <a
                  href="#final-cta"
                  className="rounded-full border border-[#DDD4C7] bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#1A1A1A] transition-all hover:border-[#FF5F00] hover:text-[#FF5F00]"
                >
                  Discuss Tech Options
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Technology Matrix */}
        <section id="tech-matrix" className="py-16 lg:py-24 bg-white">
          <div className="section-shell">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Enterprise Stack</span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Technology Matrix</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-sm sm:text-base">
                Factual list of the programming structures, database options, and orchestration software we use in active client deployments.
              </p>
            </div>

            <div className="space-y-12">
              {techStack.map((category) => (
                <div
                  key={category.category}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid gap-6 lg:grid-cols-[1fr_2.5fr] lg:items-start">
                    {/* Category Label */}
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">{category.category}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {category.description}
                      </p>
                    </div>

                    {/* Matrix Items */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {category.items.map((item) => {
                        const icon = techIcons[item.name] || <span className="h-2 w-2 rounded-full bg-sky-500" />;
                        return (
                          <div
                            key={item.name}
                            className="rounded-xl border border-slate-50 bg-slate-50/50 p-4 transition-all hover:bg-white hover:shadow-sm hover:border-slate-100 flex flex-col gap-3 group"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-100 text-slate-600 transition-colors group-hover:bg-sky-50 group-hover:text-sky-600 shadow-sm">
                                {icon}
                              </div>
                              <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                            </div>
                            <p className="text-xs leading-relaxed text-slate-500">
                              {item.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Architecture Summary Section */}
        <section className="section-shell py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Architecting for Adaptability</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Technology choices dictate the future speed of modifications. We choose modular design patterns that separate data layers from presentation layers, helping ensure code remains testable and scalable.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600 mt-0.5">
                    <svg className="h-3 w-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Modular Microservices</h4>
                    <p className="mt-1 text-xs text-slate-500">Decoupled execution blocks running isolated functions without monolithic dependencies.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600 mt-0.5">
                    <svg className="h-3 w-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Type-Safe Contracts</h4>
                    <p className="mt-1 text-xs text-slate-500">Strongly compiled APIs and schema definitions matching server outputs to client formats.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600 mt-0.5">
                    <svg className="h-3 w-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Infrastructure Automation</h4>
                    <p className="mt-1 text-xs text-slate-500">Configurable environment deployments defined via code templates ensuring deployment parity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#F5EFE6] to-[#EDE5D8] border border-[#DDD4C7] p-8 text-[#1A1A1A] shadow-xl relative overflow-hidden">
              <div className="grid-backdrop absolute inset-0 opacity-10" />
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">Technical Feasibility Matrix</h3>
              <div className="mt-6 space-y-4 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400 font-medium">Type Safety</span>
                  <span className="text-sky-400 font-bold">Strict TypeScript / compiled Java/Go contracts</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400 font-medium">Test Automation</span>
                  <span className="text-sky-400 font-bold">Comprehensive CI/CD regression suites</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400 font-medium">Monitoring</span>
                  <span className="text-sky-400 font-bold">Liveness checking and error telemetry logs</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-slate-400 font-medium">Data Storage</span>
                  <span className="text-sky-400 font-bold">Relational PostgreSQL + caching layers</span>
                </div>
              </div>
            </div>
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
                  TECHNICAL PARTNER
                </span>
                <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.7rem]">
                  Start Your Project With the Right Stack.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Let us evaluate your software blueprint requirements and recommend the optimal language syntax, database configuration, and scaling framework.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={"mailto:" + siteConfig.email}
                    className="group inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-4 text-base font-semibold text-slate-950 transition-all duration-200 hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Discuss Stack Options
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </a>
                  <a
                    href={"tel:" + siteConfig.phone.replace(/\s+/g, '')}
                    className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:border-sky-300 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Talk to Our Architects
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
