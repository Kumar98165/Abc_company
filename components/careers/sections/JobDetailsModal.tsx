"use client";

import React from "react";
import { JobDetailItem } from "../data/jobsData";

interface JobDetailsModalProps {
  job: JobDetailItem | null;
  onClose: () => void;
  onApplyNow: (job: JobDetailItem) => void;
}

export function JobDetailsModal({ job, onClose, onApplyNow }: JobDetailsModalProps) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-[#EAE3D9] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="p-6 sm:p-8 bg-[#FFFBF7] border-b border-[#EAE3D9] flex items-start justify-between gap-4 shrink-0">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FF5F00] text-white text-[10.5px] font-extrabold uppercase tracking-wider mb-2">
              {job.department}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              {job.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#64748B] mt-2">
              <span>📍 {job.location}</span>
              <span>•</span>
              <span>💼 {job.experience}</span>
              <span>•</span>
              <span>⏱️ {job.type}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F172A] border border-[#EAE3D9] hover:bg-[#FF5F00] hover:text-white font-extrabold text-sm transition-colors cursor-pointer shadow-xs shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm text-[#334155] leading-relaxed">
          {/* About the Role */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] mb-2">
              ABOUT THE ROLE
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              {job.description} As a {job.title} in our {job.department} division, you will take ownership of architectural decisions, collaborate across cross-functional engineering pods, and deploy high-impact software systems serving enterprise workloads.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] mb-3">
              PRIMARY TECH STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#E2E8F0] bg-[#FAF8F5] px-4 py-1.5 text-xs font-extrabold text-[#0F172A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Responsibilities */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] mb-3">
              RESPONSIBILITIES & WHAT YOU'LL DO
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          {/* Required Skills */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] mb-3">
              REQUIRED QUALIFICATIONS & SKILLS
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
              {job.requiredSkills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Nice to Have */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] mb-3">
              NICE TO HAVE
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
              {job.niceToHave.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] mb-3">
              WHAT WE OFFER & BENEFITS
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
              {job.whatWeOffer.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky Bottom Action Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#EAE3D9] flex items-center justify-between gap-4 shrink-0">
          <div>
            <p className="text-xs font-extrabold text-[#0F172A]">{job.title}</p>
            <p className="text-[11px] text-[#64748B]">{job.department} • {job.location}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#EAE3D9] bg-white px-5 py-2.5 text-xs font-bold text-[#64748B] hover:text-[#0F172A] cursor-pointer"
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onApplyNow(job);
              }}
              className="rounded-full bg-[#FF5F00] px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition-all shadow-md shadow-orange-500/20 cursor-pointer"
            >
              APPLY NOW →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
