import { ConfigurableQuestion } from "./types";

export const defaultQuestions: ConfigurableQuestion[] = [
  {
    id: "exp_react",
    questionText: "Do you have hands-on production experience with React.js / Next.js?",
    type: "radio",
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ],
    required: true,
  },
  {
    id: "years_primary_stack",
    questionText: "How many years of professional experience do you have with your primary tech stack?",
    type: "dropdown",
    options: [
      { label: "Less than 1 year", value: "<1" },
      { label: "1 to 2 years", value: "1-2" },
      { label: "3 to 5 years", value: "3-5" },
      { label: "5+ years", value: "5+" },
    ],
    required: true,
  },
  {
    id: "tech_challenge",
    questionText: "Briefly describe a complex technical problem or system architectural challenge you recently solved.",
    type: "textarea",
    placeholder: "Explain your role, technologies used, and the business impact...",
    required: true,
  },
  {
    id: "distributed_team",
    questionText: "Are you comfortable collaborating in an agile, distributed team with daily standups?",
    type: "radio",
    options: [
      { label: "Yes, fully comfortable", value: "Yes" },
      { label: "No", value: "No" },
    ],
    required: false,
  },
];

export const jobQuestionsMap: { [jobId: string]: ConfigurableQuestion[] } = {
  "full-stack-developer": [
    {
      id: "fs_fullstack_exp",
      questionText: "Which backend framework do you feel most proficient building REST/GraphQL APIs with?",
      type: "dropdown",
      options: [
        { label: "Node.js (Express / NestJS)", value: "Node.js" },
        { label: "Python (FastAPI / Django)", value: "Python" },
        { label: "Java (Spring Boot)", value: "Java" },
        { label: "Go (Golang)", value: "Go" },
      ],
      required: true,
    },
    ...defaultQuestions,
  ],
  "ai-engineer": [
    {
      id: "ai_llm_rag",
      questionText: "Have you built RAG (Retrieval-Augmented Generation) pipelines or fine-tuned LLMs?",
      type: "radio",
      options: [
        { label: "Yes, in production", value: "Yes" },
        { label: "Yes, in personal projects", value: "Personal" },
        { label: "No", value: "No" },
      ],
      required: true,
    },
    ...defaultQuestions,
  ],
  "cloud-devops-engineer": [
    {
      id: "devops_cloud_provider",
      questionText: "Which primary cloud infrastructure platforms have you managed?",
      type: "multiselect",
      options: [
        { label: "AWS", value: "AWS" },
        { label: "Google Cloud (GCP)", value: "GCP" },
        { label: "Microsoft Azure", value: "Azure" },
        { label: "Kubernetes (K8s)", value: "K8s" },
      ],
      required: true,
    },
    ...defaultQuestions,
  ],
  "ui-ux-designer": [
    {
      id: "design_system_exp",
      questionText: "Do you have experience building component design systems and auto-layout tokens in Figma?",
      type: "radio",
      options: [
        { label: "Yes, extensively", value: "Yes" },
        { label: "Basic knowledge", value: "Basic" },
        { label: "No", value: "No" },
      ],
      required: true,
    },
    ...defaultQuestions,
  ],
};

export function getQuestionsForJob(jobId: string): ConfigurableQuestion[] {
  return jobQuestionsMap[jobId] || defaultQuestions;
}
