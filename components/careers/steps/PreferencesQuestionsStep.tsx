"use client";

import React from "react";
import { PreferencesQuestionsInfo } from "../types";
import { getQuestionsForJob } from "../jobQuestionsConfig";

interface PreferencesQuestionsStepProps {
  jobId: string;
  data: PreferencesQuestionsInfo;
  onChange: (updated: Partial<PreferencesQuestionsInfo>) => void;
  errors: { [key: string]: string };
}

export function PreferencesQuestionsStep({
  jobId,
  data,
  onChange,
  errors,
}: PreferencesQuestionsStepProps) {
  const dynamicQuestions = getQuestionsForJob(jobId);

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    onChange({
      jobQuestionAnswers: {
        ...data.jobQuestionAnswers,
        [questionId]: value,
      },
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onChange({ [name]: checked } as Partial<PreferencesQuestionsInfo>);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl font-extrabold text-[#0F172A]">Step 7 — Work Authorization, Job Questions & Consents</h2>
        <p className="text-xs text-[#64748B] mt-1">
          Answer role-specific screening questions, set work authorization status, and review candidate privacy terms.
        </p>
      </div>

      <div className="space-y-6">
        {/* WORK AUTHORIZATION */}
        <div className="p-4 rounded-2xl bg-[#FFF9F4] border border-[#FFE8DA] space-y-4">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] flex items-center gap-1.5">
            <span>🌐</span>
            <span>Work Authorization & Relocation</span>
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-extrabold text-[#0F172A] mb-1">
                Are you legally authorized to work in the selected country? <span className="text-[#FF5F00]">*</span>
              </label>
              <div className="flex items-center gap-6 mt-1">
                {(["Yes", "No"] as const).map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-xs font-bold text-[#1E293B] cursor-pointer">
                    <input
                      type="radio"
                      name="workAuthorization"
                      value={opt}
                      checked={data.workAuthorization === opt}
                      onChange={(e) => onChange({ workAuthorization: e.target.value as "Yes" | "No" })}
                      className="h-4 w-4 text-[#FF5F00] focus:ring-[#FF5F00]"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-[#0F172A] mb-1">
                Will you require visa sponsorship now or in the future? <span className="text-[#FF5F00]">*</span>
              </label>
              <div className="flex items-center gap-6 mt-1">
                {(["Yes", "No"] as const).map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-xs font-bold text-[#1E293B] cursor-pointer">
                    <input
                      type="radio"
                      name="visaSponsorship"
                      value={opt}
                      checked={data.visaSponsorship === opt}
                      onChange={(e) => onChange({ visaSponsorship: e.target.value as "Yes" | "No" })}
                      className="h-4 w-4 text-[#FF5F00] focus:ring-[#FF5F00]"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                Preferred Office Location
              </label>
              <select
                value={data.preferredOfficeLocation}
                onChange={(e) => onChange({ preferredOfficeLocation: e.target.value })}
                className="w-full rounded-xl border border-[#E8E0D8] bg-white px-4 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
              >
                <option value="Pune, India">Pune, India (HQ)</option>
                <option value="Bengaluru, India">Bengaluru, India</option>
                <option value="Remote - India">Remote - India</option>
                <option value="Remote - Global">Remote - Global</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                Open to Travel?
              </label>
              <div className="flex items-center gap-4 mt-1.5">
                {(["Yes", "No", "Occasionally"] as const).map((opt) => (
                  <label key={opt} className="flex items-center gap-1.5 text-xs font-bold text-[#1E293B] cursor-pointer">
                    <input
                      type="radio"
                      name="openToTravel"
                      value={opt}
                      checked={data.openToTravel === opt}
                      onChange={(e) => onChange({ openToTravel: e.target.value as "Yes" | "No" | "Occasionally" })}
                      className="h-4 w-4 text-[#FF5F00] focus:ring-[#FF5F00]"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DYNAMIC JOB-SPECIFIC QUESTIONS ENGINE */}
        <div className="space-y-4 pt-2 border-t border-[#F1F5F9]">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
            <span>❓</span>
            <span>Job-Specific Screening Questions</span>
          </h3>

          {dynamicQuestions.map((q) => {
            const currentAnswer = data.jobQuestionAnswers[q.id] || "";
            return (
              <div key={q.id} className="p-4 rounded-2xl border border-[#EAE3D9] bg-[#FAF8F5] space-y-2">
                <label className="block text-xs font-extrabold text-[#0F172A]">
                  {q.questionText} {q.required && <span className="text-[#FF5F00]">*</span>}
                </label>

                {/* Radio Type */}
                {q.type === "radio" && (
                  <div className="flex flex-wrap items-center gap-6 pt-1">
                    {q.options?.map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 text-xs font-bold text-[#1E293B] cursor-pointer">
                        <input
                          type="radio"
                          name={`q_${q.id}`}
                          value={opt.value}
                          checked={currentAnswer === opt.value}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          className="h-4 w-4 text-[#FF5F00] focus:ring-[#FF5F00]"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                )}

                {/* Dropdown Type */}
                {q.type === "dropdown" && (
                  <select
                    value={typeof currentAnswer === "string" ? currentAnswer : ""}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    className="w-full sm:w-2/3 rounded-xl border border-[#E8E0D8] bg-white px-4 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
                  >
                    <option value="">Select option...</option>
                    {q.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}

                {/* Textarea Type */}
                {q.type === "textarea" && (
                  <textarea
                    rows={3}
                    value={typeof currentAnswer === "string" ? currentAnswer : ""}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    placeholder={q.placeholder || "Enter your response..."}
                    className="w-full rounded-xl border border-[#E8E0D8] bg-white px-4 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* REFERRAL SOURCE & ACCESSIBILITY ACCOMMODATIONS */}
        <div className="grid gap-5 sm:grid-cols-2 pt-2 border-t border-[#F1F5F9]">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              How did you hear about us?
            </label>
            <select
              value={data.referralSource}
              onChange={(e) => onChange({ referralSource: e.target.value })}
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
            >
              <option value="Company Website">Company Website</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Indeed">Indeed</option>
              <option value="Job Fair">Job Fair</option>
              <option value="College / University">College / University</option>
              <option value="Employee Referral">Employee Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="Google Search">Google Search</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Do you require recruitment accommodation?
            </label>
            <select
              value={data.accommodationRequired}
              onChange={(e) => onChange({ accommodationRequired: e.target.value as "Yes" | "No" | "Prefer not to say" })}
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* LEGAL DECLARATIONS & PRIVACY CONSENTS */}
        <div className="p-4 rounded-2xl bg-[#FFF9F4] border border-[#FFE8DA] space-y-3">
          <h4 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">Candidate Declarations & Consent</h4>
          
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              name="truthfulnessConsent"
              checked={data.truthfulnessConsent}
              onChange={handleCheckboxChange}
              className="mt-0.5 h-4 w-4 rounded border-[#E8E0D8] text-[#FF5F00] focus:ring-[#FF5F00] cursor-pointer"
            />
            <span className="text-xs text-[#475569] leading-relaxed">
              I confirm that the information provided in this application is accurate and complete to the best of my knowledge. <span className="text-[#FF5F00]">*</span>
            </span>
          </label>
          {errors.truthfulnessConsent && <p className="text-xs text-red-500 font-bold ml-6">{errors.truthfulnessConsent}</p>}

          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={data.privacyConsent}
              onChange={handleCheckboxChange}
              className="mt-0.5 h-4 w-4 rounded border-[#E8E0D8] text-[#FF5F00] focus:ring-[#FF5F00] cursor-pointer"
            />
            <span className="text-xs text-[#475569] leading-relaxed">
              I agree to the processing of my personal information for recruitment purposes according to the company's Privacy Policy. <span className="text-[#FF5F00]">*</span>
            </span>
          </label>
          {errors.privacyConsent && <p className="text-xs text-red-500 font-bold ml-6">{errors.privacyConsent}</p>}
        </div>
      </div>
    </div>
  );
}
