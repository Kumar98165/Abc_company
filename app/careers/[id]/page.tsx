import { siteConfig } from "@/data/home";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { JobSidebarForm } from "@/components/careers/JobSidebarForm";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface JobDetails {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  tools: string[];
}

const jobsDetailData: Record<string, JobDetails> = {
  "software-engineer": {
    id: "software-engineer",
    title: "Software Engineer",
    department: "Engineering",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "0–2 Years",
    about: "We are looking for a Software Engineer who enjoys building reliable and scalable applications and wants to work across modern frontend and backend technologies.",
    responsibilities: [
      "Build and maintain web applications",
      "Develop reusable components",
      "Work with REST APIs",
      "Collaborate with designers and backend engineers",
      "Write clean and maintainable code",
      "Debug and improve application performance",
      "Participate in code reviews",
    ],
    requirements: [
      "Strong programming fundamentals",
      "Knowledge of JavaScript / TypeScript",
      "Familiarity with React or similar frontend frameworks",
      "Understanding of REST APIs",
      "Basic Git knowledge",
      "Problem-solving mindset",
    ],
    niceToHave: [
      "Next.js",
      "Node.js",
      "Python",
      "Java",
      "PostgreSQL",
      "Docker",
      "Cloud platforms",
    ],
    tools: ["TypeScript", "React", "Node.js", "REST API", "Git"],
  },
  "frontend-developer": {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "0–2 Years",
    about: "We are looking for a Frontend Developer passionate about crafting elegant, highly responsive UI client-side structures with dynamic animations.",
    responsibilities: [
      "Build client-side interactive React components",
      "Maintain state structures and hook optimizations",
      "Integrate API data feeds into dashboard views",
      "Enforce layout alignment and responsive guidelines",
    ],
    requirements: [
      "Proficient with React and framework logic",
      "Strong JavaScript / TypeScript credentials",
      "Knowledge of HTML5, CSS3, and utility styling like Tailwind",
    ],
    niceToHave: [
      "Next.js / SSR concepts",
      "Figma prototyping access",
      "Redux Toolkit / context management",
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  "backend-developer": {
    id: "backend-developer",
    title: "Backend Developer",
    department: "Engineering",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "1–3 Years",
    about: "We are looking for a Backend Developer to construct highly stable REST APIs, manage database queries, and optimize server-side telemetry scaling.",
    responsibilities: [
      "Design and deploy microservice endpoint paths",
      "Maintain data consistency inside PostgreSQL databases",
      "Implement memory cache buffers with Redis",
      "Write automated unit and integration tests",
    ],
    requirements: [
      "Familiarity with Node.js, Python, or Java",
      "Knowledge of SQL and databases (PostgreSQL/MySQL)",
      "Understanding of Git and web server infrastructure routing",
    ],
    niceToHave: [
      "Spring Boot",
      "FastAPI / OpenAPI configurations",
      "Docker container deployment",
    ],
    tools: ["Node.js", "Python", "Java", "REST APIs", "PostgreSQL"],
  },
  "ai-ml-engineer": {
    id: "ai-ml-engineer",
    title: "AI / ML Engineer",
    department: "AI & Data",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "0–2 Years",
    about: "We are looking for an AI/ML Engineer who wants to deploy predictions, setup vector DB indices, and configure autonomous tool-calling agents.",
    responsibilities: [
      "Write prompt script orchestrators inside LangChain / LangGraph",
      "Train predictive ML classifiers using Scikit-Learn",
      "Manage text embedding pipelines and index search speeds",
      "Collaborate with backend teams to package models inside microservices",
    ],
    requirements: [
      "Proficient with Python scripting",
      "Understanding of PyTorch or TensorFlow frameworks",
      "Knowledge of database vectors (Pinecone/pgvector)",
    ],
    niceToHave: [
      "Generative LLM tuning",
      "Autonomous Multi-Agent loops",
      "Computer Vision OpenCV scripts",
    ],
    tools: ["Python", "PyTorch", "LLMs", "RAG", "Vector Search"],
  },
  "ui-ux-designer": {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "1–3 Years",
    about: "We are looking for a UI/UX Designer who enjoys building beautiful, structured web/mobile interfaces and maintaining shared design token systems.",
    responsibilities: [
      "Create flow wireframes and high-fidelity prototypes inside Figma",
      "Maintain reusable design token component classes",
      "Perform usability audits on existing client software",
      "Collaborate with frontend engineers to match designs",
    ],
    requirements: [
      "Proficient with Figma software tools",
      "Strong understanding of layout spacing and visual hierarchy",
      "Portfolio showing client interface solutions",
    ],
    niceToHave: [
      "Tailwind utilities syntax",
      "Adobe Creative Suite",
      "Figma design system orchestration",
    ],
    tools: ["Figma", "Adobe CC", "Prototyping", "Design Systems"],
  },
  "devops-engineer": {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Cloud & Infrastructure",
    location: "Pune / Hybrid",
    type: "Full Time",
    experience: "1–3 Years",
    about: "We are looking for a DevOps Engineer to automate testing frameworks, write custom Terraform infrastructure maps, and check server metrics logs.",
    responsibilities: [
      "Build automated CI/CD flow scripts triggerable on code commits",
      "Maintain Kubernetes container scaling policies",
      "Configure virtual networking security panels inside AWS",
      "Optimize system error metrics dashboard aggregators",
    ],
    requirements: [
      "Experience with Docker and Kubernetes operations",
      "Familiarity with AWS cloud dashboards and Terraform configurations",
      "Understanding of scripting languages (Bash, Python)",
    ],
    niceToHave: [
      "Prometheus & Grafana charts",
      "GitHub Actions",
      "ArgoCD deployment nodes",
    ],
    tools: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const job = jobsDetailData[resolvedParams.id];
  if (!job) return {};

  return {
    title: `${job.title} | Careers`,
    description: `Apply for the ${job.title} dynamic vacancy inside the ${job.department} team. Experience: ${job.experience}. Location: ${job.location}.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(jobsDetailData).map((key) => ({
    id: key,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function JobDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const job = jobsDetailData[resolvedParams.id];

  if (!job) {
    notFound();
  }

  // Google JobPosting structured schema mapping
  const schemaJob = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.about,
    "datePosted": "2026-08-29",
    "validThrough": "2027-08-29",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Company Name",
      "sameAs": "https://www.companyname.com",
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "addressCountry": "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJob) }}
      />

      <Navbar />
      <main className="min-h-screen bg-[#F5EFE6] pt-20">
        <div className="section-shell py-12 max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-400 font-semibold mb-6 flex gap-2" aria-label="Breadcrumb">
            <Link href="/careers" className="hover:text-slate-600">
              Careers
            </Link>
            <span>/</span>
            <span className="text-slate-600">{job.title}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[2fr_1.2fr]">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="rounded bg-sky-50 border border-sky-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-sky-600">
                  {job.department}
                </span>
                <h1 className="text-3xl font-extrabold text-slate-900 mt-4 sm:text-4xl">{job.title}</h1>
                <p className="text-sm font-semibold text-slate-400 mt-2">
                  {job.location} &bull; {job.type} &bull; Experience: {job.experience}
                </p>
                <div className="mt-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Demo / Sample Position
                </div>
              </div>

              <section className="border-t border-slate-100 pt-6">
                <h2 className="text-lg font-bold text-slate-900 mb-3">About the Role</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{job.about}</p>
              </section>

              <section className="border-t border-slate-100 pt-6">
                <h2 className="text-lg font-bold text-slate-900 mb-3">Responsibilities</h2>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </section>

              <section className="border-t border-slate-100 pt-6">
                <h2 className="text-lg font-bold text-slate-900 mb-3">Requirements</h2>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </section>

              <section className="border-t border-slate-100 pt-6">
                <h2 className="text-lg font-bold text-slate-900 mb-3">Nice to Have</h2>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                  {job.niceToHave.map((nth, i) => (
                    <li key={i}>{nth}</li>
                  ))}
                </ul>
              </section>

              <section className="border-t border-slate-100 pt-6">
                <h2 className="text-lg font-bold text-slate-900 mb-3">What We Offer</h2>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                  <li>Competitive compensation benchmarks</li>
                  <li>Learning resources and course sponsors</li>
                  <li>Flexible hybrid working schedules</li>
                  <li>Comprehensive medical coverage packages</li>
                </ul>
              </section>
            </div>

            {/* Application Sidebar Form (Handles form submit client side) */}
            <JobSidebarForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
