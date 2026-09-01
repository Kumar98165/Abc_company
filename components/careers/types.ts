export type ApplicationStepNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface JobMetadata {
  jobId: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  country: string;
  stateProvince: string;
  city: string;
  pincode: string;
  addressLine1: string;
  addressLine2: string;
}

export interface ProfessionalExperience {
  totalExperience: string;
  currentCompany: string;
  currentTitle: string;
  noticePeriod: string;
  currentCTC: string;
  expectedCTC: string;
  joiningDate: string;
  preferredWorkMode: "Remote" | "Hybrid" | "On-site";
  willingToRelocate: "Yes" | "No" | "Maybe";
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface EducationInfo {
  highestLevel: string;
  degree: string;
  specialization: string;
  university: string;
  graduationYear: string;
  cgpaPercentage: string;
  certifications: CertificationItem[];
}

export interface SkillExperienceItem {
  skillName: string;
  years: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillsInfo {
  primary: string[];
  secondary: string[];
  languages: string[];
  frameworks: string[];
  databases: string[];
  cloudDevOps: string[];
  experienceMatrix: SkillExperienceItem[];
}

export interface ProjectInfo {
  projectName: string;
  role: string;
  technologiesUsed: string;
  description: string;
  githubProfile: string;
  linkedinProfile: string;
  portfolioWebsite: string;
  demoUrl: string;
  technicalBlog: string;
}

export interface DocumentsInfo {
  resumeFile: File | null;
  resumeFileName: string;
  resumeFileSize: string;
  coverLetter: string;
  additionalDocuments: File | null;
  parsedData: {
    name?: string;
    email?: string;
    phone?: string;
    skills?: string[];
    experienceYears?: string;
    education?: string;
    linkedin?: string;
    github?: string;
  } | null;
  isParsing: boolean;
  parseConfirmed: boolean;
}

export interface JobQuestionOption {
  label: string;
  value: string;
}

export interface ConfigurableQuestion {
  id: string;
  questionText: string;
  type: "text" | "textarea" | "radio" | "checkbox" | "dropdown" | "multiselect" | "number" | "date";
  options?: JobQuestionOption[];
  required: boolean;
  placeholder?: string;
}

export interface PreferencesQuestionsInfo {
  workAuthorization: "Yes" | "No";
  visaSponsorship: "Yes" | "No";
  preferredOfficeLocation: string;
  openToTravel: "Yes" | "No" | "Occasionally";
  jobQuestionAnswers: { [questionId: string]: string | string[] };
  referralSource: string;
  isReferredByEmployee: "Yes" | "No";
  referrerNameId: string;
  accommodationRequired: "Yes" | "No" | "Prefer not to say";
  accommodationDetails: string;
  truthfulnessConsent: boolean;
  privacyConsent: boolean;
  backgroundCheckConsent: boolean;
}

export interface ApplicationData {
  jobMetadata: JobMetadata;
  personal: PersonalInfo;
  experience: ProfessionalExperience;
  education: EducationInfo;
  skills: SkillsInfo;
  projects: ProjectInfo;
  documents: DocumentsInfo;
  preferencesQuestions: PreferencesQuestionsInfo;
}
