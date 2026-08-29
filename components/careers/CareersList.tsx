"use client";

import { useState } from "react";
import Link from "next/link";
import { Job } from "@/app/careers/page";

interface CareersListProps {
  jobsData: Job[];
  setApplicationPosition: (position: string) => void;
}

export function CareersList({ jobsData, setApplicationPosition }: CareersListProps) {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");
  const [locFilter, setLocFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      search === "" ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesDept = deptFilter === "all" || job.department === deptFilter;
    const matchesLoc = locFilter === "all" || job.location.includes(locFilter);
    const matchesType = typeFilter === "all" || job.type === typeFilter;
    return matchesSearch && matchesDept && matchesLoc && matchesType;
  });

  const clearFilters = () => {
    setSearch("");
    setDeptFilter("all");
    setLocFilter("all");
    setTypeFilter("all");
  };

  return (
    <div>
      {/* Filter controls */}
      <div className="mt-12 bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Search Keywords</label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title or skill (e.g. React)..."
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs outline-none focus:border-sky-500"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Department</label>
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs outline-none cursor-pointer"
            >
              <option value="all">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="AI & Data">AI & Data</option>
              <option value="Design">Design</option>
              <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Location</label>
            <select
              value={locFilter}
              onChange={(e) => setLocFilter(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs outline-none cursor-pointer"
            >
              <option value="all">All Locations</option>
              <option value="Pune">Pune</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Employment Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs outline-none cursor-pointer"
            >
              <option value="all">All Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-500">
          <span className="font-bold text-slate-800">{filteredJobs.length} positions available</span>
          <button type="button" onClick={clearFilters} className="text-sky-600 hover:text-sky-700 font-semibold cursor-pointer">
            Clear Filters
          </button>
        </div>
      </div>

      {/* Jobs display */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredJobs.length === 0 ? (
          <div className="col-span-full text-center py-12 border border-slate-100 rounded-2xl bg-white">
            <p className="text-sm font-semibold text-slate-500">No positions match your selected filters.</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg transition duration-300">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{job.title}</h3>
                    <p className="text-xs font-semibold text-slate-400 mt-1">{job.department} &bull; {job.location}</p>
                  </div>
                  <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-sky-600 border border-sky-100">{job.type}</span>
                </div>
                <p className="mt-4 text-xs text-slate-500 leading-relaxed">{job.description}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {job.skills.map((skill) => (
                    <span key={skill} className="rounded bg-slate-50 border border-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500 uppercase tracking-wide">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-2 text-[9px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Demo Position
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-6">
                <Link href={`/careers/${job.id}`} className="flex items-center justify-center rounded-lg border border-slate-200 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition">
                  View Job
                </Link>
                <a
                  href="#application-container"
                  onClick={() => setApplicationPosition(job.title)}
                  className="flex items-center justify-center rounded-lg bg-sky-600 py-2.5 text-xs font-bold text-white hover:bg-sky-500 transition text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
