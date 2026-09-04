"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { extendedJobsData } from "@/components/careers/data/jobsData";

export default function AdminJobsPage() {
  const [jobsList, setJobsList] = useState(extendedJobsData);
  const [search, setSearch] = useState("");

  const filtered = jobsList.filter((j) =>
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    j.department.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = (id: string) => {
    setJobsList((prev) =>
      prev.map((j) =>
        j.id === id
          ? { ...j, status: (j as any).status === "Published" ? "Closed" : "Published" }
          : j
      )
    );
  };

  return (
    <AdminLayout pageTitle="Open Positions & Careers Management">
      <div className="space-y-6">
        
        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Open Positions & Hiring</h2>
            <p className="text-xs text-slate-500">Manage active job openings, recruitment departments, and employment criteria.</p>
          </div>
          <Link
            href="/admin/jobs/new"
            className="rounded-full bg-[#FF5F00] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
          >
            + Add New Job Role
          </Link>
        </div>

        {/* SEARCH */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 flex items-center justify-between shadow-2xs">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search job title or department..."
            className="w-full sm:w-80 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-[#0F172A] outline-none focus:border-[#FF5F00]"
          />
        </div>

        {/* JOBS TABLE */}
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500">
                  <th className="p-4">Job Title</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Experience</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-bold text-[#0F172A]">
                {filtered.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-extrabold text-[#0F172A]">
                      {job.title}
                    </td>
                    <td className="p-4">
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-extrabold text-slate-600">
                        {job.department}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600">{job.location}</td>
                    <td className="p-4 text-slate-600">{job.experience}</td>
                    <td className="p-4">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${
                          (job as any).status !== "Closed"
                            ? "bg-emerald-500/10 text-emerald-600 border border-emerald-200"
                            : "bg-red-500/10 text-red-600 border border-red-200"
                        }`}
                      >
                        {(job as any).status || "Published"}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-3">
                      <Link
                        href="/admin/applications"
                        className="text-[11px] font-extrabold text-[#FF5F00] hover:underline"
                      >
                        View Applicants
                      </Link>
                      <button
                        onClick={() => toggleStatus(job.id)}
                        className="text-[11px] font-extrabold text-slate-600 hover:text-[#FF5F00] cursor-pointer"
                      >
                        {(job as any).status !== "Closed" ? "Close Role" : "Re-open"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
