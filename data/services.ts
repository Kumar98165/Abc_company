export interface CapabilityItem {
  name: string;
  icon: string;
}

export interface ServiceData {
  num: string;
  id: string;
  categoryTag: string;
  title: string;
  fullTitle: string;
  category: string;
  image: string;
  description: string;
  capabilities: CapabilityItem[];
  technologies: string[];
}

export const servicesData: ServiceData[] = [
  {
    num: "01",
    id: "custom-software",
    categoryTag: "SOFTWARE ENGINEERING",
    title: "Development",
    fullTitle: "Custom Software & Web Engineering",
    category: "software",
    image: "/images/hero-isometric-cube.png",
    description: "Tailored enterprise solutions built from the ground up to solve unique business challenges, modernize legacy codebases, and scale dynamically.",
    capabilities: [
      { name: "Legacy Modernization", icon: "box" },
      { name: "API Design & Integration", icon: "link" },
      { name: "Scalable Microservices", icon: "layers" },
      { name: "High-performance Architecture", icon: "speed" },
    ],
    technologies: ["Go", "Java", ".NET", "PostgreSQL", "React", "Next.js"],
  },
  {
    num: "02",
    id: "ai-ml",
    categoryTag: "ARTIFICIAL INTELLIGENCE",
    title: "& Generative AI",
    fullTitle: "AI, Machine Learning & GenAI",
    category: "ai",
    image: "/images/hero-ai-brain.png",
    description: "Transform business data into predictive insights, autonomous AI agents, and intelligent applications powered by foundation LLMs & RAG.",
    capabilities: [
      { name: "Predictive Analytics & NLP", icon: "speed" },
      { name: "Enterprise RAG & LLM Apps", icon: "box" },
      { name: "Autonomous AI Agents", icon: "layers" },
      { name: "Computer Vision & OCR", icon: "link" },
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenAI", "LangChain", "Pinecone"],
  },
  {
    num: "03",
    id: "cloud-devops",
    categoryTag: "CLOUD INFRASTRUCTURE",
    title: "& DevOps Automation",
    fullTitle: "Cloud, DevOps & Security",
    category: "cloud",
    image: "/images/hero-cloud-infrastructure.png",
    description: "Build resilient multi-cloud infrastructure, zero-downtime CI/CD automation pipelines, and enterprise-grade cloud security architectures.",
    capabilities: [
      { name: "Infrastructure as Code", icon: "code" },
      { name: "CI/CD Pipeline Automation", icon: "speed" },
      { name: "Kubernetes Orchestration", icon: "layers" },
      { name: "Zero-Trust Cloud Security", icon: "server" },
    ],
    technologies: ["AWS", "GCP", "Terraform", "Kubernetes", "Docker", "GitHub Actions"],
  },
  {
    num: "04",
    id: "saas-dev",
    categoryTag: "ENTERPRISE SYSTEMS",
    title: "& SaaS Platforms",
    fullTitle: "SaaS & ERP/CRM Platforms",
    category: "software",
    image: "/images/hero-system-integration.jpg",
    description: "Build secure multi-tenant SaaS platforms, integrated ERP/CRM resources, and automated business process pipelines.",
    capabilities: [
      { name: "Multi-tenant Architecture", icon: "server" },
      { name: "Subscription & Billing API", icon: "link" },
      { name: "Custom ERP / CRM Systems", icon: "box" },
      { name: "Business Process Automation", icon: "speed" },
    ],
    technologies: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "Stripe", "SQL Server"],
  },
];
