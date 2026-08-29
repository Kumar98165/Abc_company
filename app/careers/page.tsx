import { siteConfig } from "@/data/home";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { CareersContainer } from "@/components/careers/CareersContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our growing technology team. Discover remote and hybrid engineering, design, AI research, and cloud infrastructure opportunities.",
  keywords: [
    "Software Engineer jobs Pune",
    "Frontend Developer openings Hybrid",
    "AI ML engineer roles",
    "DevOps cloud vacancy",
    "UI UX design recruitment",
  ],
};

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  skills: string[];
  description: string;
  demo?: boolean;
}

export const jobsData: Job[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    department: "Engineering",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "0–2 Years",
    skills: ["JavaScript", "TypeScript", "React", "REST API", "Git"],
    description: "Build reliable and scalable web applications across modern client and server technologies.",
    demo: true,
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "0–2 Years",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    description: "Develop elegant, highly performant browser client interfaces with strict design layout parity.",
    demo: true,
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    department: "Engineering",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "1–3 Years",
    skills: ["Node.js", "Python", "Java", "REST APIs", "PostgreSQL"],
    description: "Architect secure backend nodes, database schema patterns, and microservice route systems.",
    demo: true,
  },
  {
    id: "ai-ml-engineer",
    title: "AI / ML Engineer",
    department: "AI & Data",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "0–2 Years",
    skills: ["Python", "PyTorch", "LLMs", "RAG", "Vector Search"],
    description: "Train predictive data science models and integrate autonomous cognitive workflows.",
    demo: true,
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "1–3 Years",
    skills: ["Figma", "Adobe CC", "Prototyping", "Design Systems"],
    description: "Create layouts, vector prototypes, and unified design tokens to align product UI workflows.",
    demo: true,
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Cloud & Infrastructure",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "1–3 Years",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    description: "Design zero-downtime server build chains and monitor cloud container scale operations.",
    demo: true,
  },
];

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
      <main className="min-h-screen bg-[#F5EFE6] pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white text-slate-950 border-b border-slate-100">
          <div className="grid-backdrop absolute inset-0 opacity-15" />
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(255,95,0,0.06),_transparent_70%)] blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(247,158,27,0.06),_transparent_70%)] blur-3xl" />

          <div className="section-shell relative py-20 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-600">
                JOIN OUR TEAM
              </span>
              <h1 className="mt-8 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Build the Future With Us
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-500 sm:text-xl">
                We're building a team of curious engineers, designers, problem solvers and technology enthusiasts who want to create meaningful digital products.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#open-positions"
                  className="rounded-md bg-sky-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/10"
                >
                  View Open Positions
                </a>
                <a
                  href="#why-join-us"
                  className="rounded-md border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-800 transition-all hover:bg-slate-100"
                >
                  Learn About Our Culture
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section id="why-join-us" className="section-shell py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Why CN?</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Why Join Us?</h2>
            <p className="mt-4 text-slate-500 text-sm sm:text-base">
              Work with talented people, solve meaningful problems and grow with a company that values engineering excellence.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Meaningful Work", desc: "Build products that solve real business problems and operational friction." },
              { title: "Continuous Learning", desc: "Learn modern technologies, container clusters, and improve your engineering skills." },
              { title: "Growth Opportunities", desc: "Grow your technical capabilities and professional leadership roles." },
              { title: "Collaborative Culture", desc: "Work directly with senior engineers, UI designers and business teams." },
              { title: "Modern Technology", desc: "Work with modern compiler tools, cloud networks, and vector AI search agents." },
              { title: "Ownership & Impact", desc: "Take full responsibility of pipelines and see your work generate measurable customer value." },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 group-hover:bg-sky-100 transition-colors">
                  <span className="font-bold text-sky-600 text-sm">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="bg-slate-950 text-white py-16 lg:py-24">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400">OUR CULTURE</span>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">People. Technology. Growth.</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  We focus on building actual business outcomes, maintaining transparency and engineering safety.
                </p>
                <div className="mt-8 space-y-6 text-sm text-slate-300">
                  {[
                    { step: "01", title: "Engineering Culture", desc: "Clean specifications, robust review guidelines, and modular component ownership." },
                    { step: "02", title: "Learning & Development", desc: "Bi-weekly technical study sessions, architecture reviews, and framework sharing sessions." },
                    { step: "03", title: "Innovation", desc: "Investigating multi-agent AI systems, serverless scale operations, and low-latency databases." },
                  ].map((culture) => (
                    <div key={culture.step} className="flex gap-4">
                      <span className="font-bold text-sky-400 text-lg">{culture.step}</span>
                      <div>
                        <h4 className="font-bold text-white">{culture.title}</h4>
                        <p className="mt-1 text-xs text-slate-400">{culture.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-900 border border-white/5 p-6 flex flex-col justify-between h-48 shadow-lg">
                  <span className="text-xs font-extrabold uppercase text-sky-400">Collaborative</span>
                  <p className="text-xs text-slate-400">Our engineering and design teams work in short sprints with daily standups.</p>
                </div>
                <div className="rounded-2xl bg-slate-900 border border-white/5 p-6 flex flex-col justify-between h-48 shadow-lg mt-8">
                  <span className="text-xs font-extrabold uppercase text-sky-400">Continuous Growth</span>
                  <p className="text-xs text-slate-400">Quarterly growth roadmaps align engineers with new technology frameworks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-shell py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Perks</span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Benefits That Help You Do Your Best Work</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Competitive Compensation", desc: "Benchmark salaries based on engineering capability models." },
              { title: "Learning & Development", desc: "Sponsored certification courses and technology learning credits." },
              { title: "Flexible Work Options", desc: "Structured hybrid working environments in Pune or Remote." },
              { title: "Health & Wellness", desc: "Comprehensive health insurance coverage packages." },
            ].map((perk, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm text-center">
                <h3 className="text-base font-bold text-slate-900">{perk.title}</h3>
                <p className="mt-2 text-xs text-slate-500">{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Careers List Wrapper (Handles filter state client side) */}
        <CareersContainer jobsData={jobsData} />

        {/* Bottom CTA */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0B1B2E_0%,#07111F_100%)] text-white">
          <div className="grid-backdrop absolute inset-0 opacity-15" />
          <div className="section-shell py-20 text-center relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to Build What's Next?</h2>
            <p className="mt-4 text-sm text-slate-400 max-w-md mx-auto">
              Join a team that combines engineering, design and AI to build meaningful digital products.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a href="#open-positions" className="rounded-md bg-white px-5 py-3 text-xs font-bold uppercase text-slate-950 hover:bg-sky-100 transition">
                View Open Positions
              </a>
              <a href="#application-container" className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold uppercase text-white hover:bg-white/10 transition">
                Send Your Resume
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
