"use client";

import React from "react";
import { ApplicationData, ApplicationStepNumber } from "./types";

interface ApplicationStepperProps {
  data: ApplicationData;
  currentStep: ApplicationStepNumber;
  completedSteps: number[];
  onStepClick: (step: ApplicationStepNumber) => void;
  onBackToCareers: () => void;
}

const STEP_TITLES: { [key in ApplicationStepNumber]: { short: string; full: string } } = {
  1: { short: "01 Personal", full: "Personal Information" },
  2: { short: "02 Experience", full: "Professional Experience" },
  3: { short: "03 Education", full: "Education & Certifications" },
  4: { short: "04 Skills", full: "Technical Skills & Matrix" },
  5: { short: "05 Projects", full: "Projects & Portfolio" },
  6: { short: "06 Documents", full: "Documents & Resume Parser" },
  7: { short: "07 Preferences", full: "Preferences & Job Questions" },
  8: { short: "08 Review", full: "Review Application" },
};

export function ApplicationStepper({
  data,
  currentStep,
  completedSteps,
  onStepClick,
  onBackToCareers,
}: ApplicationStepperProps) {
  const { jobMetadata } = data;
  const progressPercentage = Math.round((currentStep / 8) * 100);

  return (
    <header className="bg-white border-b border-[#EAE3D9] pt-6 pb-6">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Top Header: Back Link + Job Details */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <button
              type="button"
              onClick={onBackToCareers}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FF5F00] hover:underline cursor-pointer"
            >
              <span>←</span>
              <span>Back to Careers</span>
            </button>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Apply for <span className="text-[#FF5F00]">{jobMetadata.title || "Full Stack Developer"}</span>
            </h1>

            <p className="text-xs sm:text-sm font-semibold text-[#64748B]">
              {jobMetadata.department || "Engineering"} • {jobMetadata.location || "Remote"} • {jobMetadata.employmentType || "Full-time"} • {jobMetadata.experience || "2–5 Years"}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <span className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-3.5 py-1 text-xs font-extrabold text-[#FF5F00] shadow-2xs">
              Step {currentStep} of 8
            </span>
          </div>
        </div>

        {/* DESKTOP HORIZONTAL STEPPER */}
        <div className="hidden lg:block pt-2">
          <div className="grid grid-cols-8 gap-2 relative">
            {([1, 2, 3, 4, 5, 6, 7, 8] as ApplicationStepNumber[]).map((stepNum) => {
              const isCurrent = currentStep === stepNum;
              const isPassed = completedSteps.includes(stepNum) || currentStep > stepNum;
              return (
                <button
                  key={stepNum}
                  type="button"
                  onClick={() => (isPassed || isCurrent) && onStepClick(stepNum)}
                  disabled={!isPassed && !isCurrent}
                  className={`flex flex-col items-center text-center p-2 rounded-2xl border transition-all duration-300 ${
                    isCurrent
                      ? "bg-[#FFF4EC] border-[#FF5F00] shadow-md shadow-orange-500/15 ring-2 ring-[#FF5F00]/20"
                      : isPassed
                      ? "bg-white border-[#10B981] text-[#10B981] cursor-pointer hover:bg-emerald-50/50"
                      : "bg-[#FAF8F5] border-[#EAE3D9] opacity-50 cursor-not-allowed"
                  }`}
                >
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-extrabold mb-1 ${
                      isCurrent
                        ? "bg-[#FF5F00] text-white"
                        : isPassed
                        ? "bg-[#10B981] text-white"
                        : "bg-[#CBD5E1] text-white"
                    }`}
                  >
                    {isPassed ? "✓" : stepNum}
                  </div>
                  <span
                    className={`text-[10.5px] font-extrabold leading-tight ${
                      isCurrent
                        ? "text-[#FF5F00]"
                        : isPassed
                        ? "text-[#0F172A]"
                        : "text-[#94A3B8]"
                    }`}
                  >
                    {STEP_TITLES[stepNum].short}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE PROGRESS STEPPER */}
        <div className="lg:hidden space-y-2 pt-2 border-t border-[#F1F5F9]">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-[#0F172A]">
              Step {currentStep} of 8: <span className="text-[#FF5F00]">{STEP_TITLES[currentStep].full}</span>
            </span>
            <span className="font-mono font-extrabold text-[#FF5F00]">{progressPercentage}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-[#F1F5F9] overflow-hidden p-0.5 border border-[#EAE3D9]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#FF5F00] to-[#F79E1B] transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
