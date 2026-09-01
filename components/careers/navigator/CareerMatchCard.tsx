"use client";

import React from "react";
import { JobDetailItem } from "../data/jobsData";

interface CareerMatchCardProps {
  job: JobDetailItem;
  matchLevel?: "Strong Match" | "Good Match" | "Potential Match";
  explanation?: string;
  onViewRole: (job: JobDetailItem) => void;
  onApplyNow: (job: JobDetailItem) => void;
}

export function CareerMatchCard({
  job,
  matchLevel = "Strong Match",
  explanation,
  onViewRole,
  onApplyNow,
}: CareerMatchCardProps) {
  return (
    <div className="rounded-2xl border border-[#FFE2CC] bg-gradient-to-br from-[#FFF4EC] via-white to-[#FFFBF7] p-5 shadow-sm space-y-4 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[10.5px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
          <span>✦</span> YOUR CAREER MATCH
        </span>
        <span className="rounded-full bg-[#FF5F00] px-2.5 py-0.5 text-[10px] font-extrabold text-white uppercase tracking-wider">
          {matchLevel}
        </span>
      </div>

      {/* Role Title & Location */}
      <div>
        <h4 className="text-base font-extrabold text-[#0F172A] leading-tight">
          {job.title}
        </h4>
        <p className="text-[11px] text-[#64748B] mt-0.5">
          {job.department} • {job.location} • {job.experience}
        </p>
      </div>

      {/* Matched Checklist */}
      <div className="space-y-1.5 pt-2 border-t border-[#FFE2CC] text-xs">
        {job.skills.slice(0, 3).map((skill) => (
          <div key={skill} className="flex items-center justify-between text-[#0F172A]">
            <span className="font-bold">{skill}</span>
            <span className="font-extrabold text-[#FF5F00]">✓</span>
          </div>
        ))}
        <div className="flex items-center justify-between text-[#0F172A]">
          <span className="font-bold">Experience ({job.experience})</span>
          <span className="font-extrabold text-[#FF5F00]">✓</span>
        </div>
        <div className="flex items-center justify-between text-[#0F172A]">
          <span className="font-bold">Work preference ({job.location})</span>
          <span className="font-extrabold text-[#FF5F00]">✓</span>
        </div>
      </div>

      {/* Reasoning */}
      {explanation && (
        <div className="pt-2 border-t border-[#FFE2CC] text-[11px] text-[#475569] leading-relaxed">
          <span className="font-bold text-[#0F172A]">Why this role? </span>
          {explanation}
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-2">
        <button
          type="button"
          onClick={() => onViewRole(job)}
          className="rounded-xl border border-[#EAE3D9] bg-white px-3 py-2 text-xs font-extrabold text-[#0F172A] hover:bg-[#FAF8F5] transition cursor-pointer text-center"
        >
          View Role
        </button>
        <button
          type="button"
          onClick={() => onApplyNow(job)}
          className="rounded-xl bg-[#FF5F00] px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer text-center shadow-xs"
        >
          Apply Now →
        </button>
      </div>
    </div>
  );
}
