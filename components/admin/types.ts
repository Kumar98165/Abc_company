export type AdminRole = "Super Admin" | "Content Admin" | "Recruiter" | "Editor";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  avatar?: string;
  status: "Active" | "Inactive";
  lastLogin: string;
}

export type ApplicationStatus =
  | "New"
  | "Under Review"
  | "Shortlisted"
  | "Interview"
  | "Selected"
  | "Rejected"
  | "Withdrawn";

export interface JobApplication {
  id: string;
  candidateName: string;
  email: string;
  phone: string;
  appliedPosition: string;
  experience: string;
  location: string;
  appliedDate: string;
  status: ApplicationStatus;
  resumeUrl?: string;
  coverLetter?: string;
  skills: string[];
}

export type EnquiryStatus = "New" | "In Progress" | "Contacted" | "Converted" | "Closed";

export interface ContactEnquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: EnquiryStatus;
}

export interface ActivityLogItem {
  id: string;
  adminName: string;
  action: string;
  resource: string;
  timestamp: string;
  badgeColor?: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  category: "Blog" | "Careers" | "Services" | "Technology" | "Team" | "Case Studies" | "General";
  size: string;
  type: string;
  uploadedAt: string;
}

export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "application" | "enquiry" | "insight" | "system";
}
