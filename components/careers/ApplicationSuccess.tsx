"use client";

import React from "react";

interface ApplicationSuccessProps {
  jobTitle: string;
  candidateName: string;
  onBackToCareers: () => void;
}

export function ApplicationSuccess({
  jobTitle,
  candidateName,
  onBackToCareers,
}: ApplicationSuccessProps) {
  const applicationId = "APP-2026-" + Math.floor(1000 + Math.random() * 9000);

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-center animate-in fade-in zoom-in-95 duration-400">
      {/* SUCCESS BADGE */}
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF4EC] border-4 border-[#FF5F00] text-[#FF5F00] shadow-xl mb-6">
        <svg className="h-12 w-12 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
        Application Submitted Successfully!
      </h2>

      <p className="mt-3 text-base text-[#64748B] max-w-lg mx-auto leading-relaxed">
        Thank you, <span className="font-extrabold text-[#0F172A]">{candidateName}</span>. Your application for{" "}
        <span className="font-extrabold text-[#FF5F00]">{jobTitle}</span> has been received by our enterprise recruitment team.
      </p>

      {/* APPLICATION REFERENCE ID BADGE */}
      <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-[#EAE3D9] bg-[#FAF8F5] px-6 py-3 shadow-2xs">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">Application ID:</span>
        <span className="font-mono text-base font-extrabold text-[#FF5F00]">{applicationId}</span>
      </div>

      {/* 5-STAGE ATS CANDIDATE STATUS TRACKER */}
      <div className="mt-10 rounded-3xl border border-[#EAE3D9] bg-white p-6 sm:p-8 shadow-xl text-left space-y-6">
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#0F172A]">
            Candidate Application Status
          </h3>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-extrabold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Active Record
          </span>
        </div>

        <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E2E8F0]">
          {/* Stage 1: Received */}
          <div className="relative flex items-start gap-4">
            <span className="absolute -left-6 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981] text-white text-[10px] font-extrabold ring-4 ring-white">
              ✓
            </span>
            <div>
              <h4 className="text-xs font-extrabold text-[#0F172A]">Application Received</h4>
              <p className="text-[11px] text-[#64748B]">Today • Profile & resume uploaded to recruitment portal</p>
            </div>
          </div>

          {/* Stage 2: Under Review */}
          <div className="relative flex items-start gap-4">
            <span className="absolute -left-6 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF5F00] text-white text-[10px] font-extrabold ring-4 ring-white shadow-md shadow-orange-500/30">
              ●
            </span>
            <div>
              <h4 className="text-xs font-extrabold text-[#FF5F00]">Under Review</h4>
              <p className="text-[11px] text-[#64748B]">Hiring manager reviewing candidate experience matrix</p>
            </div>
          </div>

          {/* Stage 3: Recruiter Screening */}
          <div className="relative flex items-start gap-4 opacity-50">
            <span className="absolute -left-6 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#CBD5E1] text-white text-[10px] font-extrabold ring-4 ring-white">
              ○
            </span>
            <div>
              <h4 className="text-xs font-extrabold text-[#0F172A]">Recruiter Screening</h4>
              <p className="text-[11px] text-[#64748B]">Initial alignment discussion on expectations & availability</p>
            </div>
          </div>

          {/* Stage 4: Technical Interview */}
          <div className="relative flex items-start gap-4 opacity-50">
            <span className="absolute -left-6 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#CBD5E1] text-white text-[10px] font-extrabold ring-4 ring-white">
              ○
            </span>
            <div>
              <h4 className="text-xs font-extrabold text-[#0F172A]">Technical Interview</h4>
              <p className="text-[11px] text-[#64748B]">System design, live coding & domain architecture review</p>
            </div>
          </div>

          {/* Stage 5: Offer */}
          <div className="relative flex items-start gap-4 opacity-50">
            <span className="absolute -left-6 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#CBD5E1] text-white text-[10px] font-extrabold ring-4 ring-white">
              ○
            </span>
            <div>
              <h4 className="text-xs font-extrabold text-[#0F172A]">Offer</h4>
              <p className="text-[11px] text-[#64748B]">Offer letter dispatch & onboarding confirmation</p>
            </div>
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={onBackToCareers}
          className="rounded-full bg-[#FF5F00] px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition-all shadow-md shadow-orange-500/25 cursor-pointer"
        >
          Back to Careers
        </button>
        <button
          type="button"
          onClick={() => alert(`Status for ${applicationId}: Under Review by Recruitment Panel.`)}
          className="rounded-full border border-[#DDD4C7] bg-white px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#1A1A1A] hover:border-[#FF5F00] hover:text-[#FF5F00] transition-all cursor-pointer"
        >
          View My Application
        </button>
      </div>
    </div>
  );
}
