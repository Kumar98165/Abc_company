export interface JobDetailItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  badgeBg: string;
  badgeIconText: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requiredSkills: string[];
  niceToHave: string[];
  whatWeOffer: string[];
}

export const extendedJobsData: JobDetailItem[] = [
  {
    id: "full-stack-developer",
    title: "Full Stack Developer (React / Node.js)",
    department: "Engineering",
    location: "Remote",
    type: "Full Time",
    experience: "2-5 Yrs",
    badgeBg: "bg-gradient-to-br from-[#FF5F00] to-[#FF8030] text-white shadow-[0_4px_12px_rgba(255,95,0,0.25)]",
    badgeIconText: "</>",
    skills: ["React", "Node.js", "TypeScript", "Next.js", "PostgreSQL", "AWS"],
    description: "Build reliable, high-performance web applications across modern client and server technologies.",
    responsibilities: [
      "Architect and implement scalable full-stack web applications using React, Next.js, and Node.js.",
      "Design robust RESTful APIs and GraphQL endpoints backed by PostgreSQL & Redis databases.",
      "Collaborate with product managers, UI/UX designers, and cloud infrastructure engineers.",
      "Write clean, unit-tested, and well-documented TypeScript code with peer code reviews.",
      "Optimize application performance, client load times, and cloud server response SLAs.",
    ],
    requiredSkills: [
      "2-5 years of professional experience in full-stack software development.",
      "Strong proficiency in JavaScript (ES6+), TypeScript, React, and Node.js.",
      "Experience with relational databases (PostgreSQL/MySQL) and ORMs (Prisma, TypeORM).",
      "Solid understanding of web security best practices, CORS, OAuth, and JWT authentication.",
      "Familiarity with Git workflows, Docker containers, and CI/CD automation pipelines.",
    ],
    niceToHave: [
      "Experience with Next.js App Router and Server Components.",
      "Knowledge of AWS cloud services (EC2, S3, CloudFront, Lambda).",
      "Familiarity with Microservices architecture and Event-Driven systems.",
    ],
    whatWeOffer: [
      "Competitive compensation package with performance performance bonuses.",
      "Flexible hybrid/remote-first work schedule.",
      "Comprehensive medical insurance coverage for self and family.",
      "Annual certification stipend for professional growth.",
    ],
  },
  {
    id: "ai-engineer",
    title: "AI Engineer (Machine Learning)",
    department: "AI & Data",
    location: "Remote",
    type: "Full Time",
    experience: "1-4 Yrs",
    badgeBg: "bg-gradient-to-br from-[#10B981] to-[#34D399] text-white shadow-[0_4px_12px_rgba(16,185,129,0.25)]",
    badgeIconText: "AI",
    skills: ["Python", "PyTorch", "LLMs", "RAG", "Vector DBs", "LangChain"],
    description: "Train predictive data science models and integrate autonomous cognitive AI workflows.",
    responsibilities: [
      "Design and deploy production-grade RAG (Retrieval-Augmented Generation) pipelines and LLM applications.",
      "Fine-tune machine learning models and optimize inference latencies for real-time applications.",
      "Implement vector search indexing using Pinecone, Qdrant, or Weaviate databases.",
      "Collaborate with product teams to integrate cognitive AI capabilities into enterprise products.",
      "Monitor model drift, evaluation metrics, and prompt performance in production environments.",
    ],
    requiredSkills: [
      "1-4 years of experience working with Python, PyTorch/TensorFlow, and ML ecosystems.",
      "Hands-on experience with LLM APIs (OpenAI, Anthropic) and framework tools (LangChain, LlamaIndex).",
      "Solid understanding of vector embeddings, semantic search, and prompt engineering patterns.",
      "Experience processing structured/unstructured dataset pipelines using Pandas and NumPy.",
    ],
    niceToHave: [
      "Experience deploying ML models via FastAPI / Triton Inference Server.",
      "Familiarity with GPU acceleration, CUDA, and model quantization (vLLM, Ollama).",
      "Published research work or GitHub contributions in open-source AI projects.",
    ],
    whatWeOffer: [
      "Access to cutting-edge AI compute infrastructure and GPU clusters.",
      "Mentorship from senior AI research scientists.",
      "Sponsored attendance to top AI conferences and research symposiums.",
      "Flexible remote work environment.",
    ],
  },
  {
    id: "cloud-devops-engineer",
    title: "Cloud DevOps Engineer",
    department: "Cloud & Infrastructure",
    location: "Remote",
    type: "Full Time",
    experience: "2-6 Yrs",
    badgeBg: "bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] text-white shadow-[0_4px_12px_rgba(59,130,246,0.25)]",
    badgeIconText: "☁️",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Prometheus"],
    description: "Design zero-downtime server build chains and monitor cloud container scale operations.",
    responsibilities: [
      "Manage multi-region cloud infrastructure on AWS using Infrastructure as Code (Terraform).",
      "Configure automated CI/CD pipelines using GitHub Actions, GitLab CI, or Jenkins.",
      "Maintain production Kubernetes clusters (EKS), container registries, and ingress controllers.",
      "Implement zero-trust security policies, IAM roles, and secret manager vaults.",
      "Set up 24/7 telemetry monitoring, log aggregation, and alert metrics with Grafana/Prometheus.",
    ],
    requiredSkills: [
      "2-6 years of experience in Cloud Architecture, DevOps, or Site Reliability Engineering.",
      "Proficiency in AWS cloud infrastructure management (EC2, VPC, EKS, S3, RDS, CloudFront).",
      "Hands-on experience writing Terraform modules, Dockerfiles, and Helm charts.",
      "Strong Linux system administration and Bash/Python scripting capabilities.",
    ],
    niceToHave: [
      "AWS Certified Solutions Architect or CKA (Certified Kubernetes Administrator).",
      "Experience with GitOps workflows (ArgoCD or Flux).",
      "Familiarity with multi-cloud deployments (AWS + GCP/Azure).",
    ],
    whatWeOffer: [
      "Generous hardware budget and multi-monitor developer setup.",
      "Full coverage for cloud certifications and exam fees.",
      "Competitive salary and wellness allowance.",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full Time",
    experience: "2-4 Yrs",
    badgeBg: "bg-gradient-to-br from-[#EC4899] to-[#F472B6] text-white shadow-[0_4px_12px_rgba(236,72,153,0.25)]",
    badgeIconText: "🎨",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Wireframing"],
    description: "Create layouts, vector prototypes, and unified design tokens to align product UI workflows.",
    responsibilities: [
      "Design intuitive, responsive user interfaces for web and mobile software products.",
      "Develop and maintain component design systems, auto-layout tokens, and UI specs in Figma.",
      "Conduct user research, usability testing, and translate candidate feedback into interactive wireframes.",
      "Collaborate closely with frontend engineers to ensure high design fidelity during implementation.",
      "Establish visual design standards, iconography, and responsive grid systems.",
    ],
    requiredSkills: [
      "2-4 years of experience as a UI/UX Designer with a strong portfolio showcasing digital products.",
      "Mastery of Figma, interactive prototyping, micro-interactions, and component libraries.",
      "Deep understanding of user-centered design principles, accessibility (WCAG), and responsive layouts.",
      "Excellent communication skills to articulate design decisions to cross-functional partners.",
    ],
    niceToHave: [
      "Basic understanding of HTML5, CSS3, and Tailwind CSS framework concepts.",
      "Experience creating micro-animations using Lottie or Framer Motion.",
      "Familiarity with SaaS enterprise product design workflows.",
    ],
    whatWeOffer: [
      "Modern hybrid office setup in Pune with ergonomic workspaces.",
      "Design conference stipends and Figma plugin subscriptions.",
      "Health insurance & team retreat events.",
    ],
  },
];
