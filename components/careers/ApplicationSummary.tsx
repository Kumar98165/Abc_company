"use client";

import React from "react";
import { ApplicationData, ApplicationStepNumber } from "./types";

interface ApplicationSummaryProps {
  data: ApplicationData;
  currentStep: ApplicationStepNumber;
  completedSteps: number[];
  onStepClick?: (step: ApplicationStepNumber) => void;
}

export function ApplicationSummary({
  data,
  currentStep,
  completedSteps,
  onStepClick,
}: ApplicationSummaryProps) {
  const { jobMetadata } = data;
  const progressPercentage = Math.round((currentStep / 8) * 100);

  return (
    <aside className="w-full lg:w-80 shrink-0 space-y-4">
      {/* CARD 1: STICKY APPLICATION SUMMARY */}
      <div className="sticky top-24 rounded-3xl border border-[#EAE3D9] bg-white p-6 shadow-xl space-y-5">
        {/* Header */}
        <div className="border-b border-[#F1F5F9] pb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3 py-0.5 text-[10.5px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F00] animate-pulse" />
            APPLICATION SUMMARY
          </span>
          <h3 className="mt-2.5 text-lg font-extrabold text-[#0F172A] tracking-tight">
            {jobMetadata.title || "Job Application"}
          </h3>
          <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
            {jobMetadata.department || "Engineering"} • {jobMetadata.location || "Remote"} • {jobMetadata.employmentType || "Full-time"}
          </p>
        </div>

        {/* Progress Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-[#0F172A]">Application Progress</span>
            <span className="font-mono font-extrabold text-[#FF5F00]">{progressPercentage}%</span>
          </div>
          {/* Progress Bar */}
          <div className="h-2.5 w-full rounded-full bg-[#F1F5F9] overflow-hidden p-0.5 border border-[#EAE3D9]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#FF5F00] to-[#F79E1B] transition-all duration-400 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-1">
            <span>Step {currentStep} of 8</span>
            <span className="font-semibold text-[#0F172A]">⏱️ ~5–8 mins</span>
          </div>
        </div>

        {/* Quick Stepper List */}
        <div className="space-y-1.5 pt-2 border-t border-[#F1F5F9]">
          {[
            { num: 1, title: "Personal Info" },
            { num: 2, title: "Work Experience" },
            { num: 3, title: "Education" },
            { num: 4, title: "Skills & Matrix" },
            { num: 5, title: "Projects & Links" },
            { num: 6, title: "Documents & Resume" },
            { num: 7, title: "Preferences & Consents" },
            { num: 8, title: "Review Application" },
          ].map((item) => {
            const isCurrent = currentStep === item.num;
            const isDone = completedSteps.includes(item.num) || currentStep > item.num;
            return (
              <button
                key={item.num}
                type="button"
                onClick={() => onStepClick && isDone && onStepClick(item.num as ApplicationStepNumber)}
                disabled={!isDone && !isCurrent}
                className={`w-full flex items-center justify-between p-2 rounded-xl text-xs font-extrabold transition-all text-left ${
                  isCurrent
                    ? "bg-[#FFF4EC] text-[#FF5F00] border border-[#FFE2CC]"
                    : isDone
                    ? "text-[#10B981] hover:bg-[#F8FAFC] cursor-pointer"
                    : "text-[#94A3B8] opacity-60 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                      isDone
                        ? "bg-[#10B981] text-white"
                        : isCurrent
                        ? "bg-[#FF5F00] text-white"
                        : "bg-[#E2E8F0] text-[#64748B]"
                    }`}
                  >
                    {isDone ? "✓" : item.num}
                  </span>
                  <span>{item.title}</span>
                </div>
                {isCurrent && <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#FF5F00]">ACTIVE</span>}
              </button>
            );
          })}
        </div>

        {/* Security Trust Note */}
        <div className="pt-2 border-t border-[#F1F5F9] text-[10.5px] text-[#64748B] flex items-center gap-1.5">
          <span className="text-[#FF5F00]">🔒</span>
          <span>Enterprise Encrypted Candidate Portal</span>
        </div>
      </div>
    </aside>
  );
}
