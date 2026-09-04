export type ContentType =
  | "Blog"
  | "Technology Update"
  | "Company News"
  | "Event"
  | "Case Study"
  | "Engineering Deep Dive"
  | "Announcement"
  | "Company Program"
  | "Innovation";

export type InsightCategory =
  | "AI & ML"
  | "ENGINEERING"
  | "CLOUD & DEVOPS"
  | "WEB"
  | "MOBILE"
  | "PRODUCT"
  | "COMPANY"
  | "EVENTS"
  | "CASE STUDIES"
  | "COMPANY PROGRAMS";

export interface ProgramDetails {
  programName: string;
  objective: string;
  targetAudience: string;
  keyBenefits: string[];
}

export interface EventDetails {
  eventName: string;
  date: string;
  location: string;
  keyTakeaways: string[];
}

export interface CaseStudyDetails {
  projectName: string;
  challenge: string;
  solution: string;
  technology: string[];
  implementation: string;
  outcome: string;
}

export interface TechUpdateDetails {
  technologyName: string;
  whatChanged: string;
  whyItMatters: string;
  businessImpact: string;
  technicalPerspective: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentType: ContentType;
  category: InsightCategory;
  image: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  deepDive?: boolean;
  status: "Draft" | "Published" | "Scheduled";
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  content?: string[];
  programDetails?: ProgramDetails;
  eventDetails?: EventDetails;
  caseStudyDetails?: CaseStudyDetails;
  techUpdateDetails?: TechUpdateDetails;
}
