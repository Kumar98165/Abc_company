"use client";

import React from "react";

interface JobSearchEngineProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  departmentFilter: string;
  onDepartmentChange: (dep: string) => void;
  locationFilter: string;
  onLocationChange: (loc: string) => void;
  experienceFilter: string;
  onExperienceChange: (exp: string) => void;
  workModeFilter: string;
  onWorkModeChange: (wm: string) => void;
  employmentTypeFilter: string;
  onEmploymentTypeChange: (et: string) => void;
  resultsCount: number;
  onClearFilters: () => void;
}

export function JobSearchEngine({
  searchQuery,
  onSearchChange,
  departmentFilter,
  onDepartmentChange,
  locationFilter,
  onLocationChange,
  experienceFilter,
  onExperienceChange,
  workModeFilter,
  onWorkModeChange,
  employmentTypeFilter,
  onEmploymentTypeChange,
  resultsCount,
  onClearFilters,
}: JobSearchEngineProps) {
  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    departmentFilter !== "All" ||
    locationFilter !== "All" ||
    experienceFilter !== "All" ||
    workModeFilter !== "All" ||
    employmentTypeFilter !== "All";

  return (
    <div className="bg-white rounded-[28px] border border-[#EAE3D9] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-5">
      {/* SEARCH INPUT BAR */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-[#64748B]">🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search jobs, technologies (e.g. React, Node.js, AI, DevOps), or keywords..."
          className="w-full rounded-2xl border border-[#E8E0D8] bg-[#FFFBF7] pl-11 pr-16 py-3.5 text-xs sm:text-sm text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#FF5F00] focus:ring-1 focus:ring-[#FF5F00] transition-colors"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#64748B] hover:text-[#FF5F00] font-bold cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* MULTI-FILTER DROPDOWNS GRID */}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Department Filter */}
        <div>
          <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#64748B] mb-1">
            Department
          </label>
          <select
            value={departmentFilter}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="w-full rounded-xl border border-[#E8E0D8] bg-[#FFFBF7] px-3 py-2 text-xs font-bold text-[#0F172A] outline-none focus:border-[#FF5F00] cursor-pointer"
          >
            <option value="All">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="AI & Data">AI & Data</option>
            <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
            <option value="Design">Design</option>
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#64748B] mb-1">
            Location
          </label>
          <select
            value={locationFilter}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full rounded-xl border border-[#E8E0D8] bg-[#FFFBF7] px-3 py-2 text-xs font-bold text-[#0F172A] outline-none focus:border-[#FF5F00] cursor-pointer"
          >
            <option value="All">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>
        </div>

        {/* Experience Filter */}
        <div>
          <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#64748B] mb-1">
            Experience
          </label>
          <select
            value={experienceFilter}
            onChange={(e) => onExperienceChange(e.target.value)}
            className="w-full rounded-xl border border-[#E8E0D8] bg-[#FFFBF7] px-3 py-2 text-xs font-bold text-[#0F172A] outline-none focus:border-[#FF5F00] cursor-pointer"
          >
            <option value="All">All Experience</option>
            <option value="1-4 Yrs">1–4 Years</option>
            <option value="2-5 Yrs">2–5 Years</option>
            <option value="2-6 Yrs">2–6 Years</option>
          </select>
        </div>

        {/* Work Mode Filter */}
        <div>
          <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#64748B] mb-1">
            Work Mode
          </label>
          <select
            value={workModeFilter}
            onChange={(e) => onWorkModeChange(e.target.value)}
            className="w-full rounded-xl border border-[#E8E0D8] bg-[#FFFBF7] px-3 py-2 text-xs font-bold text-[#0F172A] outline-none focus:border-[#FF5F00] cursor-pointer"
          >
            <option value="All">All Work Modes</option>
            <option value="Remote">Remote First</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* Employment Type Filter */}
        <div>
          <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#64748B] mb-1">
            Employment Type
          </label>
          <select
            value={employmentTypeFilter}
            onChange={(e) => onEmploymentTypeChange(e.target.value)}
            className="w-full rounded-xl border border-[#E8E0D8] bg-[#FFFBF7] px-3 py-2 text-xs font-bold text-[#0F172A] outline-none focus:border-[#FF5F00] cursor-pointer"
          >
            <option value="All">All Types</option>
            <option value="Full Time">Full-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
      </div>

      {/* RESULTS COUNTER & CLEAR FILTERS ACTION */}
      <div className="flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs">
        <span className="font-extrabold text-[#0F172A]">
          Showing <span className="text-[#FF5F00] font-mono text-sm">{resultsCount}</span> {resultsCount === 1 ? "opportunity" : "opportunities"}
        </span>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="text-xs font-extrabold text-[#FF5F00] hover:underline cursor-pointer flex items-center gap-1 bg-[#FFF4EC] border border-[#FFE2CC] px-3 py-1 rounded-full"
          >
            <span>✕</span>
            <span>CLEAR FILTERS</span>
          </button>
        )}
      </div>
    </div>
  );
}
