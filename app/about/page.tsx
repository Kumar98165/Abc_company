import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { CTA } from "@/components/home/CTA";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | About Us",
  description: "Explore our enterprise software engineering mission, core organizational goals, strategic vision, and the executive leadership team.",
};

const teamMembers = [
  {
    name: "Vikram Malhotra",
    role: "Chief Executive Officer & Founder",
    bio: "Ex-Google Staff Engineer with 15+ years architecting enterprise distributed backends and machine learning workflows.",
    image: "/team/vikram.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "Chief AI Architect",
    bio: "PhD in Neural Systems from Stanford. Directs our predictive modeling, multi-agent pipelines, and vector RAG pipelines.",
    image: "/team/sarah.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Arjun Mehta",
    role: "Head of Software Engineering",
    bio: "Specializes in secure compiler languages, high-performance PostgreSQL tuning, and Spring Boot microservice registries.",
    image: "/team/arjun.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Elena Rostova",
    role: "VP of Cloud & Infrastructure",
    bio: "Orchestrates multi-region Kubernetes clusters and automated GitOps continuous deployment networks on AWS and GCP.",
    image: "/team/elena.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Rohan Das",
    role: "Lead UI/UX Architect",
    bio: "Creates responsive token-driven interface guidelines and dynamic web interactions keeping pixel-perfect consistency.",
    image: "/team/rohan.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Mia Thorne",
    role: "Director of Product Management",
    bio: "Translates complex operational requirements into high-value product sprints and client delivery frameworks.",
    image: "/team/mia.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F5EFE6] pt-20">
        {/* Banner Hero */}
        <section className="relative overflow-hidden bg-white text-slate-950 border-b border-slate-100">
          <div className="grid-backdrop absolute inset-0 opacity-15" />
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(255,95,0,0.06),_transparent_70%)] blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(247,158,27,0.06),_transparent_70%)] blur-3xl" />

          <div className="section-shell relative py-20 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-600">
                COMPANY MISSION
              </span>
              <h1 className="mt-8 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Engineering Digital Legacies
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-500 sm:text-xl">
                We believe in clean code, secure transactions, and robust machine learning capabilities that transform complex operational bottlenecks into market advantages.
              </p>
            </div>
          </div>
        </section>

        {/* Goal, Vision & Mission Grid */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
          <div className="section-shell">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Mission */}
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="mt-6 text-xl font-extrabold text-slate-900">Our Mission</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  To construct production-grade, highly maintainable software platforms and AI systems that solve real-world corporate friction points, helping engineers deploy confidently.
                </p>
              </div>

              {/* Vision */}
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="mt-6 text-xl font-extrabold text-slate-900">Our Vision</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  To become the standard technical partner for companies looking to transition from legacy monolith systems into modern, serverless cloud pipelines and autonomous multi-agent networks.
                </p>
              </div>

              {/* Corporate Goal */}
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="mt-6 text-xl font-extrabold text-slate-900">Our Goal</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  Deliver absolute type-safety, 99.9% uptime architectures, and clean technical documentation so client operations can scale smoothly without architectural revisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Team Section */}
        <section className="py-16 lg:py-24 bg-slate-50/50">
          <div className="section-shell">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500">MEET THE ARCHITECTS</span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Leadership Team</h2>
              <p className="mt-4 text-slate-500 text-sm sm:text-base">
                A structured team of researchers, engineers, and cloud administrators focused on engineering excellence.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur-md shadow-[0_4px_24px_rgba(15,23,42,0.07)] hover:shadow-[0_8px_40px_rgba(255,95,0,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  {/* Orange accent top bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#eb001b] via-[#ff5f00] to-[#f79e1b]" />

                  {/* Profile image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} – ${member.role}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay at bottom of image */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/90 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 pt-4">
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mt-1">{member.role}</p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-500 flex-1">
                      {member.bio}
                    </p>

                    {/* Social links */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-orange-500 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
