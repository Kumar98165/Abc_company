"use client";

import React, { useState } from "react";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  badgeBg: string;
  badgeIcon: React.ReactNode;
  skills: string[];
  fullRequirements?: string[];
}

interface CareersListProps {
  jobsData: Job[];
  setApplicationPosition: (position: string) => void;
}

export function CareersList({ jobsData, setApplicationPosition }: CareersListProps) {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {jobsData.map((job) => {
        const isExpanded = expandedJobId === job.id;
        return (
          <div
            key={job.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-[#EAE3D9] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,95,0,0.08)] hover:border-[#FF5F00]/30 transition-all duration-300 overflow-hidden"
          >
            <div>
              {/* Top 3D Badge */}
              <div className="mb-4">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${job.badgeBg}`}>
                  {job.badgeIcon}
                </div>
              </div>

              {/* Job Title */}
              <h3 className="text-sm font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#FF5F00] transition-colors line-clamp-2 min-h-[40px]">
                {job.title}
              </h3>

              {/* Location & Experience Meta */}
              <div className="mt-3 flex items-center gap-3 text-[11px] font-bold text-[#64748B]">
                <span className="flex items-center gap-1">
                  <span>📍</span>
                  <span>{job.location}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>💼</span>
                  <span>{job.experience}</span>
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-5 pt-3 border-t border-[#F1F5F9] space-y-2">
              <button
                type="button"
                onClick={() => setApplicationPosition(job.title)}
                className="w-full rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-4 py-2 text-[10.5px] font-extrabold uppercase tracking-wider text-[#FF5F00] hover:bg-[#FF5F00] hover:text-white transition-colors cursor-pointer shadow-2xs"
              >
                APPLY NOW →
              </button>

              <button
                type="button"
                onClick={() => toggleExpand(job.id)}
                className="w-full text-[10px] font-bold text-[#94A3B8] hover:text-[#FF5F00] text-center cursor-pointer transition-colors"
              >
                {isExpanded ? "Hide Requirements ▲" : "View Requirements ▼"}
              </button>
            </div>

            {/* EXPANDABLE REQUIREMENTS DRAWER */}
            {isExpanded && (
              <div className="mt-3 pt-3 border-t border-[#F1F5F9] bg-[#FFF9F4] -mx-5 -mb-5 p-4 space-y-2 animate-in fade-in duration-200">
                <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                  Key Requirements:
                </h4>
                {job.fullRequirements ? (
                  <ul className="space-y-1.5">
                    {job.fullRequirements.map((req: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[10.5px] text-[#475569] leading-snug">
                        <span className="text-[#FF5F00] font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[10.5px] text-[#64748B]">
                    Strong technical skills in {job.skills.join(", ")}.
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
