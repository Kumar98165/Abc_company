"use client";

import React from "react";
import { ApplicationData, ApplicationStepNumber } from "../types";

interface ReviewStepProps {
  data: ApplicationData;
  onEditStep: (step: ApplicationStepNumber) => void;
}

export function ReviewStep({ data, onEditStep }: ReviewStepProps) {
  const { personal, experience, education, skills, projects, documents, preferencesQuestions, jobMetadata } = data;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3 py-0.5 text-[10.5px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
          STEP 8 OF 8
        </span>
        <h2 className="mt-1 text-xl font-extrabold text-[#0F172A]">Review Your Application</h2>
        <p className="text-xs text-[#64748B] mt-1">
          Review all information carefully before submitting your application for <span className="font-extrabold text-[#FF5F00]">{jobMetadata.title}</span>. Click [ Edit ] on any section to modify.
        </p>
      </div>

      <div className="space-y-5">
        {/* SECTION 1: PERSONAL INFORMATION */}
        <div className="rounded-2xl border border-[#EAE3D9] bg-[#FAF8F5] p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">1. Personal Information</h3>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="text-xs font-extrabold text-[#FF5F00] hover:underline cursor-pointer"
            >
              [ Edit ]
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 text-xs text-[#334155]">
            <p><strong>Full Name:</strong> {personal.fullName || "—"}</p>
            <p><strong>Email:</strong> {personal.email || "—"}</p>
            <p><strong>Phone:</strong> {personal.phone || "—"}</p>
            <p><strong>Gender:</strong> {personal.gender || "—"}</p>
            <p><strong>Location:</strong> {personal.city}, {personal.stateProvince}, {personal.country} ({personal.pincode})</p>
            <p><strong>Address:</strong> {personal.addressLine1} {personal.addressLine2}</p>
          </div>
        </div>

        {/* SECTION 2: PROFESSIONAL EXPERIENCE */}
        <div className="rounded-2xl border border-[#EAE3D9] bg-[#FAF8F5] p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">2. Professional Experience</h3>
            <button
              type="button"
              onClick={() => onEditStep(2)}
              className="text-xs font-extrabold text-[#FF5F00] hover:underline cursor-pointer"
            >
              [ Edit ]
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 text-xs text-[#334155]">
            <p><strong>Total Experience:</strong> {experience.totalExperience}</p>
            <p><strong>Current Company:</strong> {experience.currentCompany || "N/A"}</p>
            <p><strong>Current Title:</strong> {experience.currentTitle || "N/A"}</p>
            <p><strong>Notice Period:</strong> {experience.noticePeriod}</p>
            <p><strong>Expected CTC:</strong> {experience.expectedCTC || "—"}</p>
            <p><strong>Work Mode:</strong> {experience.preferredWorkMode} (Relocate: {experience.willingToRelocate})</p>
          </div>
        </div>

        {/* SECTION 3: EDUCATION */}
        <div className="rounded-2xl border border-[#EAE3D9] bg-[#FAF8F5] p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">3. Education & Certifications</h3>
            <button
              type="button"
              onClick={() => onEditStep(3)}
              className="text-xs font-extrabold text-[#FF5F00] hover:underline cursor-pointer"
            >
              [ Edit ]
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 text-xs text-[#334155]">
            <p><strong>Degree:</strong> {education.degree} ({education.highestLevel})</p>
            <p><strong>Specialization:</strong> {education.specialization || "—"}</p>
            <p><strong>University:</strong> {education.university}</p>
            <p><strong>Graduation Year:</strong> {education.graduationYear}</p>
            <p><strong>Certifications:</strong> {education.certifications.map((c) => c.name).join(", ") || "None listed"}</p>
          </div>
        </div>

        {/* SECTION 4: SKILLS & MATRIX */}
        <div className="rounded-2xl border border-[#EAE3D9] bg-[#FAF8F5] p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">4. Technical Skills</h3>
            <button
              type="button"
              onClick={() => onEditStep(4)}
              className="text-xs font-extrabold text-[#FF5F00] hover:underline cursor-pointer"
            >
              [ Edit ]
            </button>
          </div>
          <div className="space-y-2 text-xs text-[#334155]">
            <div>
              <strong>Primary Skills:</strong>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {skills.primary.map((s) => (
                  <span key={s} className="rounded-full bg-[#FF5F00] text-white px-2.5 py-0.5 text-[11px] font-extrabold">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {skills.experienceMatrix.length > 0 && (
              <p><strong>Mapped Skill Experience:</strong> {skills.experienceMatrix.map((m) => `${m.skillName} (${m.years})`).join(", ")}</p>
            )}
          </div>
        </div>

        {/* SECTION 5: PROJECTS & PORTFOLIO */}
        <div className="rounded-2xl border border-[#EAE3D9] bg-[#FAF8F5] p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">5. Projects & Links</h3>
            <button
              type="button"
              onClick={() => onEditStep(5)}
              className="text-xs font-extrabold text-[#FF5F00] hover:underline cursor-pointer"
            >
              [ Edit ]
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 text-xs text-[#334155]">
            <p><strong>Featured Project:</strong> {projects.projectName || "—"}</p>
            <p><strong>GitHub:</strong> {projects.githubProfile || "—"}</p>
            <p><strong>LinkedIn:</strong> {projects.linkedinProfile || "—"}</p>
            <p><strong>Portfolio:</strong> {projects.portfolioWebsite || "—"}</p>
          </div>
        </div>

        {/* SECTION 6: DOCUMENTS */}
        <div className="rounded-2xl border border-[#EAE3D9] bg-[#FAF8F5] p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">6. Documents & Resume</h3>
            <button
              type="button"
              onClick={() => onEditStep(6)}
              className="text-xs font-extrabold text-[#FF5F00] hover:underline cursor-pointer"
            >
              [ Edit ]
            </button>
          </div>
          <div className="text-xs text-[#334155]">
            <p><strong>Resume File:</strong> {documents.resumeFileName || "Not uploaded"}</p>
            {documents.coverLetter && <p className="mt-1"><strong>Cover Letter:</strong> Included ({documents.coverLetter.length} chars)</p>}
          </div>
        </div>

        {/* SECTION 7: PREFERENCES & CONSENTS */}
        <div className="rounded-2xl border border-[#EAE3D9] bg-[#FAF8F5] p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">7. Preferences & Consents</h3>
            <button
              type="button"
              onClick={() => onEditStep(7)}
              className="text-xs font-extrabold text-[#FF5F00] hover:underline cursor-pointer"
            >
              [ Edit ]
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 text-xs text-[#334155]">
            <p><strong>Work Authorized:</strong> {preferencesQuestions.workAuthorization}</p>
            <p><strong>Visa Sponsorship Needed:</strong> {preferencesQuestions.visaSponsorship}</p>
            <p><strong>Truthfulness Confirmed:</strong> {preferencesQuestions.truthfulnessConsent ? "✓ Confirmed" : "✕ Pending"}</p>
            <p><strong>Privacy Policy Consented:</strong> {preferencesQuestions.privacyConsent ? "✓ Consented" : "✕ Pending"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
