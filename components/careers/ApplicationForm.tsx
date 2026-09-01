"use client";

import React from "react";
import { ApplicationWizard } from "./ApplicationWizard";
import { JobMetadata } from "./types";

interface ApplicationFormProps {
  initialPosition?: string;
  jobMetadata?: Partial<JobMetadata>;
  onCancel?: () => void;
}

export function ApplicationForm({
  initialPosition = "Full Stack Developer",
  jobMetadata = {},
  onCancel = () => {},
}: ApplicationFormProps) {
  const metadata: JobMetadata = {
    jobId: jobMetadata.jobId || "full-stack-developer",
    title: jobMetadata.title || initialPosition || "Full Stack Developer",
    department: jobMetadata.department || "Engineering",
    location: jobMetadata.location || "Remote",
    employmentType: jobMetadata.employmentType || "Full-time",
    experience: jobMetadata.experience || "2–5 Years",
  };

  return <ApplicationWizard jobMetadata={metadata} onBackToCareers={onCancel} />;
}
