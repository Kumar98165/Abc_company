export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  projectLink?: string;
}

export const productsData: Product[] = [
  {
    id: "hrms",
    name: "Enterprise HRMS Portal",
    category: "HR & Operations",
    description: "A comprehensive Human Resource Management System managing payroll, leaves, employee onboarding, and performance tracking with automated smart scheduling engines.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    image: "/images/products/hrms.png",
    projectLink: "/services"
  },
  {
    id: "lps",
    name: "Loan Processing System (LPS)",
    category: "Fintech",
    description: "An automated credit risk assessment and loan workflow manager that simplifies verification, underwriting, and payout tracking with digital KYC integrations.",
    technologies: ["React", "Express", "MongoDB", "Python (FastAPI)", "AWS RDS"],
    image: "/images/products/lps.png",
    projectLink: "/services"
  },
  {
    id: "crm",
    name: "Omnichannel CRM Platform",
    category: "Sales & Marketing",
    description: "Real-time client management, sales pipelines, and conversational marketing portal integrating WhatsApp, Email, and SMS endpoints for high engagement rates.",
    technologies: ["Vue.js", "Tailwind CSS", "NestJS", "Redis", "MySQL"],
    image: "/images/products/crm.png",
    projectLink: ""
  },
  {
    id: "ai-copilot",
    name: "AI Analytics Copilot",
    category: "Artificial Intelligence",
    description: "A generative AI-driven business intelligence dashboard that ingests unstructured PDF reports and visualizes predictions, margins, and operational recommendations.",
    technologies: ["Next.js", "Python (PyTorch)", "OpenAI API", "Pinecone", "Tailwind CSS"],
    image: "/images/products/ai-copilot.png",
    projectLink: "/technology"
  }
];
