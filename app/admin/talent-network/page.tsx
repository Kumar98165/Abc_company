"use client";

import React from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";

export default function AdminTalentNetworkPage() {
  const candidates = [
    { name: "Devendra Patil", email: "devendra@example.com", skills: "React, Python, AWS", date: "Sep 02, 2026", status: "Reviewed" },
    { name: "Ananya Saxena", email: "ananya@example.com", skills: "UI/UX, Figma, User Research", date: "Aug 29, 2026", status: "New" },
  ];

  return (
    <AdminLayout pageTitle="Talent Network Candidates">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A]">Talent Network Pool</h2>
          <p className="text-xs text-slate-500">Candidates who submitted general resumes for future technology openings.</p>
        </div>

        <div className="rounded-[28px] border border-[#E2E8F0] bg-white overflow-hidden shadow-2xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500">
                <th className="p-4">Candidate</th>
                <th className="p-4">Skills</th>
                <th className="p-4">Date Added</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-bold text-[#0F172A]">
              {candidates.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50 transition">
                  <td className="p-4"><div className="font-extrabold">{c.name}</div><div className="text-[10px] text-slate-400 font-normal">{c.email}</div></td>
                  <td className="p-4 text-[#FF5F00]">{c.skills}</td>
                  <td className="p-4 text-slate-500">{c.date}</td>
                  <td className="p-4"><span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-extrabold text-slate-600">{c.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
