"use client";

import React, { useState } from "react";
import { JobDetailItem } from "../data/jobsData";

interface JobCardItemProps {
  job: JobDetailItem;
  onViewJob: (job: JobDetailItem) => void;
  onApplyNow: (job: JobDetailItem) => void;
}

export function JobCardItem({ job, onViewJob, onApplyNow }: JobCardItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-[28px] border border-[#EAE3D9] bg-white p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-[#FF5F00] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
      <div>
        {/* Top Header: Icon Badge next to Title */}
        <div className="flex items-start gap-3.5 mb-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4EC] border border-[#FFE2CC] text-[#FF5F00] shadow-2xs">
            <span className="font-mono font-black text-base">{job.badgeIconText}</span>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-[#0F172A] leading-tight group-hover:text-[#FF5F00] transition-colors">
              {job.title}
            </h3>

            {/* Sub-metadata Line */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-[#64748B] mt-1.5">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{job.location}</span>
              </span>

              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{job.experience}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-[#64748B] leading-relaxed mb-3.5">
          {job.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1 mb-5">
          {job.skills.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#E2E8F0] bg-[#FAF8F5] px-2.5 py-0.5 text-[10.5px] font-extrabold text-[#0F172A]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        {/* PEACH PILL BUTTON & VIEW JOB */}
        <div className="grid grid-cols-2 gap-2 pt-3.5 border-t border-[#F1F5F9] mb-2.5">
          <button
            type="button"
            onClick={() => onViewJob(job)}
            className="rounded-full border border-[#EAE3D9] bg-[#FAF8F5] px-3 py-2.5 text-[11px] font-extrabold text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer text-center"
          >
            VIEW JOB
          </button>
          
          <button
            type="button"
            onClick={() => onApplyNow(job)}
            className="rounded-full border border-[#FFE2CC] bg-[#FFF4EC] px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wider text-[#FF5F00] hover:bg-[#FF5F00] hover:text-white transition-all duration-300 shadow-2xs cursor-pointer text-center"
          >
            APPLY NOW →
          </button>
        </div>

        {/* VIEW REQUIREMENTS EXPANDABLE ACCORDION TOGGLE */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-center text-[11px] font-extrabold text-[#64748B] hover:text-[#FF5F00] transition-colors flex items-center justify-center gap-1 py-0.5 cursor-pointer"
        >
          <span>{isExpanded ? "Hide Requirements ↑" : "View Requirements ▼"}</span>
        </button>

        {/* EXPANDABLE REQUIREMENTS DRAWER */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-[#F1F5F9] space-y-3 text-xs text-[#334155] animate-in fade-in duration-200">
            <div>
              <h4 className="font-extrabold uppercase text-[#0F172A] mb-1">Key Responsibilities</h4>
              <ul className="list-disc pl-3.5 space-y-1 text-[#64748B]">
                {job.responsibilities.slice(0, 3).map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold uppercase text-[#0F172A] mb-1">Required Qualifications</h4>
              <ul className="list-disc pl-3.5 space-y-1 text-[#64748B]">
                {job.requiredSkills.slice(0, 3).map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
