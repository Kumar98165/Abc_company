"use client";

import React, { useState } from "react";
import {
  ApplicationData,
  ApplicationStepNumber,
  JobMetadata,
} from "./types";
import { ApplicationStepper } from "./ApplicationStepper";
import { ApplicationSummary } from "./ApplicationSummary";
import { PersonalStep } from "./steps/PersonalStep";
import { ExperienceStep } from "./steps/ExperienceStep";
import { EducationStep } from "./steps/EducationStep";
import { SkillsStep } from "./steps/SkillsStep";
import { ProjectsStep } from "./steps/ProjectsStep";
import { DocumentsStep } from "./steps/DocumentsStep";
import { PreferencesQuestionsStep } from "./steps/PreferencesQuestionsStep";
import { ReviewStep } from "./steps/ReviewStep";
import { ApplicationSuccess } from "./ApplicationSuccess";

interface ApplicationWizardProps {
  jobMetadata: JobMetadata;
  onBackToCareers: () => void;
}

export function ApplicationWizard({
  jobMetadata,
  onBackToCareers,
}: ApplicationWizardProps) {
  const [currentStep, setCurrentStep] = useState<ApplicationStepNumber>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // FULL 8-STEP APPLICATION STATE
  const [formData, setFormData] = useState<ApplicationData>({
    jobMetadata: {
      jobId: jobMetadata.jobId || "full-stack-developer",
      title: jobMetadata.title || "Full Stack Developer",
      department: jobMetadata.department || "Engineering",
      location: jobMetadata.location || "Remote",
      employmentType: jobMetadata.employmentType || "Full-time",
      experience: jobMetadata.experience || "2–5 Years",
    },
    personal: {
      fullName: "",
      email: "",
      phone: "",
      gender: "Prefer not to say",
      country: "India",
      stateProvince: "",
      city: "",
      pincode: "",
      addressLine1: "",
      addressLine2: "",
    },
    experience: {
      totalExperience: "1–3 Years",
      currentCompany: "",
      currentTitle: "",
      noticePeriod: "30 Days",
      currentCTC: "",
      expectedCTC: "",
      joiningDate: "",
      preferredWorkMode: "Remote",
      willingToRelocate: "Maybe",
    },
    education: {
      highestLevel: "Bachelor's",
      degree: "B.Tech",
      specialization: "Computer Science & Engineering",
      university: "",
      graduationYear: "2023",
      cgpaPercentage: "",
      certifications: [],
    },
    skills: {
      primary: ["React.js", "Node.js", "TypeScript", "SQL"],
      secondary: ["Docker", "Tailwind CSS", "Git"],
      languages: ["JavaScript", "TypeScript", "Python"],
      frameworks: ["React", "Next.js", "Express"],
      databases: ["PostgreSQL", "MongoDB"],
      cloudDevOps: ["AWS", "Docker"],
      experienceMatrix: [
        { skillName: "React.js", years: "2 Years", level: "Intermediate" },
        { skillName: "Node.js", years: "1.5 Years", level: "Intermediate" },
      ],
    },
    projects: {
      projectName: "",
      role: "",
      technologiesUsed: "",
      description: "",
      githubProfile: "",
      linkedinProfile: "",
      portfolioWebsite: "",
      demoUrl: "",
      technicalBlog: "",
    },
    documents: {
      resumeFile: null,
      resumeFileName: "",
      resumeFileSize: "",
      coverLetter: "",
      additionalDocuments: null,
      parsedData: null,
      isParsing: false,
      parseConfirmed: false,
    },
    preferencesQuestions: {
      workAuthorization: "Yes",
      visaSponsorship: "No",
      preferredOfficeLocation: "Pune, India",
      openToTravel: "Occasionally",
      jobQuestionAnswers: {},
      referralSource: "Company Website",
      isReferredByEmployee: "No",
      referrerNameId: "",
      accommodationRequired: "No",
      accommodationDetails: "",
      truthfulnessConsent: false,
      privacyConsent: false,
      backgroundCheckConsent: true,
    },
  });

  // STEP VALIDATION
  const validateCurrentStep = (step: ApplicationStepNumber): boolean => {
    const errs: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.personal.fullName.trim()) errs.fullName = "Full Name is required.";
      if (!formData.personal.email.trim()) {
        errs.email = "Email Address is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.personal.email)) {
        errs.email = "Please enter a valid email address.";
      }
      if (!formData.personal.phone.trim()) {
        errs.phone = "Phone Number is required.";
      } else if (formData.personal.phone.trim().length < 10) {
        errs.phone = "Please enter a valid phone number.";
      }
      if (!formData.personal.stateProvince.trim()) errs.stateProvince = "State / Province is required.";
      if (!formData.personal.city.trim()) errs.city = "City is required.";
      if (!formData.personal.pincode.trim()) errs.pincode = "PIN / Postal Code is required.";
    }

    if (step === 3) {
      if (!formData.education.degree.trim()) errs.degree = "Degree / Qualification is required.";
      if (!formData.education.university.trim()) errs.university = "University / College is required.";
    }

    if (step === 4) {
      if (formData.skills.primary.length === 0) errs.primary = "At least one primary skill is required.";
    }

    if (step === 6) {
      if (!formData.documents.resumeFileName && !formData.documents.resumeFile) {
        errs.resumeFile = "Please upload your resume (PDF, DOC, DOCX).";
      }
    }

    if (step === 7) {
      if (!formData.preferencesQuestions.truthfulnessConsent) {
        errs.truthfulnessConsent = "You must confirm accuracy of your application information.";
      }
      if (!formData.preferencesQuestions.privacyConsent) {
        errs.privacyConsent = "You must agree to privacy policy processing.";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps((prev) => [...prev, currentStep]);
      }
      if (currentStep < 8) {
        setCurrentStep((prev) => (prev + 1) as ApplicationStepNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        handleSubmitApplication();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as ApplicationStepNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmitApplication = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FFFBF7] py-12">
        <ApplicationSuccess
          jobTitle={formData.jobMetadata.title}
          candidateName={formData.personal.fullName || "Candidate"}
          onBackToCareers={onBackToCareers}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFBF7]">
      {/* HEADER STEPPER */}
      <ApplicationStepper
        data={formData}
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={(step) => {
          if (validateCurrentStep(currentStep) || step < currentStep) {
            setCurrentStep(step);
          }
        }}
        onBackToCareers={onBackToCareers}
      />

      {/* 2-COLUMN MAIN CONTENT (LEFT: FORM STEPPER, RIGHT: STICKY SUMMARY) */}
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT FORM STEP CONTAINER */}
          <div className="flex-1 w-full rounded-[28px] border border-[#EAE3D9] bg-white p-6 sm:p-8 md:p-10 shadow-2xl space-y-8">
            {currentStep === 1 && (
              <PersonalStep
                data={formData.personal}
                onChange={(upd) => setFormData((prev) => ({ ...prev, personal: { ...prev.personal, ...upd } }))}
                errors={errors}
              />
            )}

            {currentStep === 2 && (
              <ExperienceStep
                data={formData.experience}
                onChange={(upd) => setFormData((prev) => ({ ...prev, experience: { ...prev.experience, ...upd } }))}
                errors={errors}
              />
            )}

            {currentStep === 3 && (
              <EducationStep
                data={formData.education}
                onChange={(upd) => setFormData((prev) => ({ ...prev, education: { ...prev.education, ...upd } }))}
                errors={errors}
              />
            )}

            {currentStep === 4 && (
              <SkillsStep
                data={formData.skills}
                onChange={(upd) => setFormData((prev) => ({ ...prev, skills: { ...prev.skills, ...upd } }))}
                errors={errors}
              />
            )}

            {currentStep === 5 && (
              <ProjectsStep
                data={formData.projects}
                onChange={(upd) => setFormData((prev) => ({ ...prev, projects: { ...prev.projects, ...upd } }))}
                errors={errors}
              />
            )}

            {currentStep === 6 && (
              <DocumentsStep
                data={formData.documents}
                onChange={(upd) => setFormData((prev) => ({ ...prev, documents: { ...prev.documents, ...upd } }))}
                errors={errors}
              />
            )}

            {currentStep === 7 && (
              <PreferencesQuestionsStep
                jobId={formData.jobMetadata.jobId}
                data={formData.preferencesQuestions}
                onChange={(upd) =>
                  setFormData((prev) => ({
                    ...prev,
                    preferencesQuestions: { ...prev.preferencesQuestions, ...upd },
                  }))
                }
                errors={errors}
              />
            )}

            {currentStep === 8 && (
              <ReviewStep
                data={formData}
                onEditStep={(step) => setCurrentStep(step)}
              />
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="pt-6 border-t border-[#F1F5F9] flex items-center justify-between gap-4">
              <div>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isSubmitting}
                    className="rounded-full border border-[#EAE3D9] bg-[#FAF8F5] px-7 py-3 text-xs font-extrabold text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                  >
                    ← Back
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onBackToCareers}
                  disabled={isSubmitting}
                  className="text-xs font-bold text-[#64748B] hover:text-red-600 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="rounded-full bg-[#FF5F00] px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition-all shadow-md shadow-orange-500/20 cursor-pointer disabled:opacity-50 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : currentStep === 8 ? (
                    "Submit Application →"
                  ) : (
                    "Save & Continue →"
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT STICKY SUMMARY SIDEBAR */}
          <ApplicationSummary
            data={formData}
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={(step) => setCurrentStep(step)}
          />
        </div>
      </div>
    </div>
  );
}
