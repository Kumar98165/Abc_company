"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAdmin } from "@/components/admin/AdminContext";
import { JobApplication, ApplicationStatus } from "@/components/admin/types";

export default function AdminApplicationsPage() {
  const { applications, updateApplicationStatus } = useAdmin();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedApp, setSelectedApp] = useState<JobApplication | null>(null);

  const filtered = applications.filter((app) => {
    if (statusFilter !== "ALL" && app.status !== statusFilter) return false;
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      return (
        app.candidateName.toLowerCase().includes(q) ||
        app.appliedPosition.toLowerCase().includes(q) ||
        app.skills.some((s) => s.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <AdminLayout pageTitle="Job Applications Management">
      <div className="space-y-6">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Received Candidate Applications</h2>
            <p className="text-xs text-slate-500">Review candidate resumes, evaluate technical skills, and manage recruitment stages.</p>
          </div>
          <span className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-4 py-1.5 text-xs font-extrabold text-[#FF5F00]">
            Total Applicants: {applications.length}
          </span>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search candidate name, position, or skill..."
            className="w-full sm:w-80 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-[#0F172A] outline-none focus:border-[#FF5F00]"
          />

          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <span>Stage Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white p-1.5 outline-none font-bold"
            >
              <option value="ALL">All Stages</option>
              <option value="New">New</option>
              <option value="Under Review">Under Review</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Interview">Interview</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* APPLICATIONS TABLE */}
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500">
                  <th className="p-4">Candidate</th>
                  <th className="p-4">Applied Position</th>
                  <th className="p-4">Experience</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Recruitment Stage</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-bold text-[#0F172A]">
                {filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50 transition">
                    <td className="p-4">
                      <div className="font-extrabold text-[#0F172A]">{app.candidateName}</div>
                      <div className="text-[10.5px] text-slate-400 font-normal">{app.email}</div>
                    </td>
                    <td className="p-4 max-w-xs font-extrabold text-[#FF5F00]">{app.appliedPosition}</td>
                    <td className="p-4 text-slate-600">{app.experience}</td>
                    <td className="p-4 text-slate-600">{app.location}</td>
                    <td className="p-4 text-slate-500">{app.appliedDate}</td>
                    <td className="p-4">
                      <select
                        value={app.status}
                        onChange={(e) => updateApplicationStatus(app.id, e.target.value as ApplicationStatus)}
                        className="rounded-lg border border-slate-200 bg-white p-1.5 text-xs font-extrabold outline-none focus:border-[#FF5F00]"
                      >
                        <option value="New">New</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Interview">Interview</option>
                        <option value="Selected">Selected</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => setSelectedApp(app)}
                        className="rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-extrabold text-[#0F172A] hover:bg-[#FF5F00] hover:text-white transition cursor-pointer"
                      >
                        View Details →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CANDIDATE DETAIL MODAL */}
        {selectedApp && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-[32px] border border-[#E2E8F0] max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                    CANDIDATE APPLICATION DOSSIER
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0F172A]">{selectedApp.candidateName}</h3>
                  <p className="text-xs text-slate-500">{selectedApp.appliedPosition}</p>
                </div>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs hover:bg-[#FF5F00] hover:text-white transition"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-[#0F172A]">
                <div className="grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <div>
                    <span className="font-bold text-slate-500 block">Email:</span>
                    <span className="font-extrabold">{selectedApp.email}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-500 block">Phone:</span>
                    <span className="font-extrabold">{selectedApp.phone}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-500 block">Experience:</span>
                    <span className="font-extrabold">{selectedApp.experience}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-500 block">Location:</span>
                    <span className="font-extrabold">{selectedApp.location}</span>
                  </div>
                </div>

                <div>
                  <span className="font-extrabold uppercase tracking-wider block mb-1 text-slate-600">Technical Skills & Expertise</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedApp.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-3 py-1 text-[11px] font-extrabold text-[#FF5F00]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedApp.coverLetter && (
                  <div>
                    <span className="font-extrabold uppercase tracking-wider block mb-1 text-slate-600">Candidate Statement / Cover Letter</span>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 leading-relaxed font-semibold">
                      "{selectedApp.coverLetter}"
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-500">Update Stage:</span>
                    <select
                      value={selectedApp.status}
                      onChange={(e) => {
                        updateApplicationStatus(selectedApp.id, e.target.value as ApplicationStatus);
                        setSelectedApp({ ...selectedApp, status: e.target.value as ApplicationStatus });
                      }}
                      className="rounded-xl border border-slate-300 bg-white p-2 font-extrabold text-xs outline-none focus:border-[#FF5F00]"
                    >
                      <option value="New">New</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Interview">Interview</option>
                      <option value="Selected">Selected</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setSelectedApp(null)}
                    className="rounded-full bg-[#FF5F00] px-6 py-2 text-xs font-extrabold uppercase text-white hover:bg-[#e65400] transition"
                  >
                    Done
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );
}
