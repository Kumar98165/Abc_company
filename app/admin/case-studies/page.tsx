"use client";

import React from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { initialInsightsArticles } from "@/components/insights/data/insightsData";

export default function AdminCaseStudiesPage() {
  const caseStudies = initialInsightsArticles.filter((a) => a.contentType === "Case Study");

  return (
    <AdminLayout pageTitle="Case Studies & Project Portfolio">
      <div className="space-y-6">
        
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Verified Case Studies</h2>
            <p className="text-xs text-slate-500">Manage real enterprise projects, engineering solutions, and business outcomes.</p>
          </div>
          <button
            type="button"
            onClick={() => alert("Create Case Study ready.")}
            className="rounded-full bg-[#FF5F00] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
          >
            + Add Case Study
          </button>
        </div>

        <div className="space-y-4">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-3 py-1 text-[10px] font-extrabold uppercase text-[#FF5F00]">
                  PROJECT CASE STUDY
                </span>
                <span className="text-xs text-slate-400 font-bold">{cs.publishedAt}</span>
              </div>

              <h3 className="text-lg font-extrabold text-[#0F172A]">{cs.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{cs.excerpt}</p>

              {cs.caseStudyDetails && (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-slate-50 p-4 border border-slate-100 text-xs">
                  <div><span className="font-bold text-[#FF5F00]">Challenge:</span> <p className="text-slate-700">{cs.caseStudyDetails.challenge}</p></div>
                  <div><span className="font-bold text-[#FF5F00]">Solution:</span> <p className="text-slate-700">{cs.caseStudyDetails.solution}</p></div>
                  <div><span className="font-bold text-[#FF5F00]">Tech Stack:</span> <p className="text-slate-700">{cs.caseStudyDetails.technology.join(", ")}</p></div>
                  <div><span className="font-bold text-[#FF5F00]">Outcome:</span> <p className="text-slate-700">{cs.caseStudyDetails.outcome}</p></div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </AdminLayout>
  );
}
