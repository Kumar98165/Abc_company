export type IconName =
  | "layers"
  | "spark"
  | "nodes"
  | "cloud"
  | "code"
  | "monitor"
  | "phone"
  | "bot"
  | "pen"
  | "compass"
  | "heart"
  | "bank"
  | "factory"
  | "bag"
  | "truck"
  | "cap"
  | "building"
  | "shield"
  | "chip"
  | "database";

export const siteConfig = {
  name: "Company Name",
  shortName: "CN",
  title: "Software Engineering & AI | Company Name",
  description:
    "Build scalable digital products, AI-powered solutions and modern software with our engineering team.",
  location: "Pune, India",
  email: "hello@companyname.com",
  phone: "+91 20 0000 0000",
};

export const navItems = [
  { label: "Home", href: "#top", current: true },
  { label: "Services", href: "#services" },
  { label: "AI & Technology", href: "#ai-technology" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
];

export const heroTrustItems = [
  "Enterprise-grade engineering",
  "AI-powered solutions",
  "Scalable architecture",
];

export const trustMarks = [
  "ENTERPRISE",
  "INNOVATION",
  "TECHNOLOGY",
  "DIGITAL",
  "AI SYSTEMS",
];

export const aboutValues = [
  {
    number: "01",
    title: "Experience",
    description:
      "Cross-functional product, platform and delivery experience across complex software programs.",
  },
  {
    number: "02",
    title: "Engineering Excellence",
    description:
      "Reliable implementation standards, clean architecture and quality-minded delivery practices.",
  },
  {
    number: "03",
    title: "Business Focus",
    description:
      "Solutions shaped around operational needs, customer outcomes and measurable business priorities.",
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "A collaborative delivery model built for iteration, support and sustained product growth.",
  },
];

export const whyChooseUsCards = [
  {
    number: "01",
    icon: "layers" as IconName,
    title: "Product Engineering",
    description:
      "Build reliable digital products from concept to production.",
  },
  {
    number: "02",
    icon: "spark" as IconName,
    title: "AI & Data Intelligence",
    description:
      "Turn business data into intelligent decisions, automation and better experiences.",
  },
  {
    number: "03",
    icon: "nodes" as IconName,
    title: "Scalable Architecture",
    description:
      "Design secure and scalable systems ready to grow with your business.",
  },
  {
    number: "04",
    icon: "cloud" as IconName,
    title: "Cloud & DevOps",
    description:
      "Build reliable infrastructure with modern cloud and deployment practices.",
  },
];

export const services = [
  {
    number: "01",
    icon: "code" as IconName,
    title: "Custom Software Development",
    description:
      "Purpose-built software tailored to your workflows, users and operational goals.",
  },
  {
    number: "02",
    icon: "monitor" as IconName,
    title: "Web Application Development",
    description:
      "Responsive web platforms designed for performance, maintainability and scale.",
  },
  {
    number: "03",
    icon: "phone" as IconName,
    title: "Mobile App Development",
    description:
      "Mobile experiences that connect product strategy with practical user needs.",
  },
  {
    number: "04",
    icon: "spark" as IconName,
    title: "AI & Machine Learning",
    description:
      "Applied AI solutions that improve decision-making, automation and service quality.",
  },
  {
    number: "05",
    icon: "bot" as IconName,
    title: "Generative AI & LLM Solutions",
    description:
      "LLM-powered assistants, copilots and workflows built for real product use cases.",
  },
  {
    number: "06",
    icon: "cloud" as IconName,
    title: "Cloud & DevOps",
    description:
      "Deployment pipelines and cloud foundations built for speed, reliability and control.",
  },
  {
    number: "07",
    icon: "pen" as IconName,
    title: "UI/UX & Product Design",
    description:
      "Product interfaces shaped by clarity, usability and commercial context.",
  },
  {
    number: "08",
    icon: "compass" as IconName,
    title: "Technology Consulting",
    description:
      "Strategic technical guidance for roadmap decisions, architecture and modernization.",
  },
];

export const aiCapabilities = [
  {
    title: "Generative AI",
    description: "Content and workflow generation grounded in business context.",
    desktopClass: "md:left-0 md:top-[14%]",
  },
  {
    title: "LLM Applications",
    description: "Productized language experiences with guardrails and observability.",
    desktopClass: "md:right-[6%] md:top-[8%]",
  },
  {
    title: "AI Agents",
    description: "Task-oriented systems that coordinate tools, prompts and actions.",
    desktopClass: "md:left-[8%] md:bottom-[20%]",
  },
  {
    title: "RAG",
    description: "Knowledge retrieval pipelines for grounded answers and enterprise search.",
    desktopClass: "md:left-[29%] md:top-0",
  },
  {
    title: "Computer Vision",
    description: "Visual intelligence for detection, analysis and operational review.",
    desktopClass: "md:right-0 md:bottom-[24%]",
  },
  {
    title: "Predictive Analytics",
    description: "Forecasting models that support planning and operational decisions.",
    desktopClass: "md:right-[28%] md:top-[2%]",
  },
  {
    title: "Business Automation",
    description: "Process automation that reduces repetitive work and improves throughput.",
    desktopClass: "md:left-[34%] md:bottom-0",
  },
];

export const industries = [
  {
    icon: "heart" as IconName,
    title: "Healthcare",
    description: "Digital systems that support patient, provider and operational workflows.",
  },
  {
    icon: "bank" as IconName,
    title: "FinTech",
    description: "Secure product engineering for financial services and data-sensitive platforms.",
  },
  {
    icon: "factory" as IconName,
    title: "Manufacturing",
    description: "Connected applications that improve plant visibility and process coordination.",
  },
  {
    icon: "bag" as IconName,
    title: "E-Commerce",
    description: "Commerce platforms focused on conversion, operations and customer experience.",
  },
  {
    icon: "truck" as IconName,
    title: "Logistics",
    description: "Software for shipment visibility, fulfillment and supply-chain orchestration.",
  },
  {
    icon: "cap" as IconName,
    title: "Education",
    description: "Learning and operations platforms that simplify delivery and engagement.",
  },
  {
    icon: "building" as IconName,
    title: "Real Estate",
    description: "Digital tools for property operations, lead management and portfolio insight.",
  },
];

export const caseStudies = [
  {
    industry: "Operations",
    title: "Enterprise Operations Platform",
    description:
      "A unified product experience for teams managing workflows, approvals and internal reporting across multiple business units.",
    technologies: ["Next.js", "TypeScript", "Workflow Automation"],
    image: "/images/case-study-operations.svg",
    alt: "Enterprise operations interface with workflow cards and reporting panels.",
  },
  {
    industry: "Analytics",
    title: "AI-Powered Business Intelligence",
    description:
      "A decision-support interface that connects operational metrics, predictive models and conversational analysis.",
    technologies: ["LLM Workflows", "Python", "Analytics"],
    image: "/images/case-study-ai-intelligence.svg",
    alt: "Business intelligence dashboard with AI insights and analytics charts.",
  },
  {
    industry: "Commerce",
    title: "Digital Commerce Platform",
    description:
      "A modular commerce experience built for catalog management, customer engagement and operational clarity.",
    technologies: ["Composable Commerce", "Design Systems", "Cloud Delivery"],
    image: "/images/case-study-commerce.svg",
    alt: "Digital commerce platform screen showing product cards and operational metrics.",
  },
];

export const technologyCategories = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces engineered for clarity, responsiveness and long-term maintainability.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Service layers and APIs designed for stability, business logic and scale.",
    items: ["Python", "Flask", "Java", "Spring Boot", "Node.js"],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    description: "Applied intelligence stacks for models, experimentation and production delivery.",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "LLMs"],
  },
  {
    id: "database",
    label: "Database",
    description: "Storage layers selected around access patterns, reliability and performance goals.",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Cloud platforms used to support secure, scalable and resilient delivery.",
    items: ["AWS", "Azure", "Google Cloud"],
  },
  {
    id: "devops",
    label: "DevOps",
    description: "Operational tooling for CI/CD, infrastructure management and deployment confidence.",
    items: ["Docker", "Git", "GitHub Actions", "Jenkins", "Kubernetes"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Clarify business goals, constraints and success criteria.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Define delivery priorities, architecture direction and scope.",
  },
  {
    number: "03",
    title: "Design",
    description: "Shape the product experience, flows and system behavior.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Build dependable features with an implementation-first mindset.",
  },
  {
    number: "05",
    title: "Test",
    description: "Validate quality, resilience and fit for real-world usage.",
  },
  {
    number: "06",
    title: "Deploy",
    description: "Release with operational readiness and delivery confidence.",
  },
  {
    number: "07",
    title: "Support",
    description: "Iterate, monitor and improve as product needs evolve.",
  },
];

export const testimonials = [
  {
    quote:
      "Placeholder testimonial reserved for an approved client quote. Replace with a verified reference before launch.",
    name: "Client name to be added",
    role: "Reference pending",
    company: "Approved testimonial placeholder",
  },
  {
    quote:
      "Placeholder testimonial reserved for a confirmed project statement that reflects real delivery outcomes.",
    name: "Client name to be added",
    role: "Reference pending",
    company: "Approved testimonial placeholder",
  },
  {
    quote:
      "Placeholder testimonial reserved for a real customer perspective once legal and brand approvals are complete.",
    name: "Client name to be added",
    role: "Reference pending",
    company: "Approved testimonial placeholder",
  },
];

export const faqs = [
  {
    question: "What type of projects do you work on?",
    answer:
      "We work on digital products, internal platforms, customer-facing software, AI-powered workflows and modernization initiatives that require strong product and engineering alignment.",
  },
  {
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We support both early-stage teams and established organizations when the product challenge is clear and the engagement requires senior engineering and delivery thinking.",
  },
  {
    question: "Can you work with an existing development team?",
    answer:
      "Yes. We can embed with internal teams, support delivery acceleration, contribute architecture guidance or take ownership of defined product areas.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our stack depends on product needs, but we regularly work across modern frontend, backend, cloud and AI technologies including the platforms highlighted on this homepage.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration depends on complexity, scope and team structure. Discovery and roadmap alignment typically define the practical delivery plan before implementation starts.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We support post-launch stabilization, iterative improvements, infrastructure operations and ongoing product development where needed.",
  },
  {
    question: "Can you integrate AI into an existing product?",
    answer:
      "Yes. We can evaluate existing systems, identify high-value AI opportunities and implement AI features with the right governance, observability and user experience considerations.",
  },
];

export const footerColumns = [
  {
    title: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Industries", href: "#industries" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Careers", href: "mailto:careers@companyname.com" },
      { label: "Contact", href: "#final-cta" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Software Development" },
      { label: "AI & Machine Learning" },
      { label: "Generative AI" },
      { label: "Cloud & DevOps" },
      { label: "UI/UX" },
      { label: "Consulting" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog" },
      { label: "Insights" },
      { label: "FAQs", href: "#faq" },
      { label: "Case Studies", href: "#case-studies" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: siteConfig.email, href: "mailto:hello@companyname.com" },
      { label: siteConfig.phone, href: "tel:+912000000000" },
      { label: siteConfig.location },
      { label: "LinkedIn profile" },
      { label: "GitHub organization" },
    ],
  },
];
