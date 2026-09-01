"use client";

import React from "react";
import { ProjectInfo } from "../types";

interface ProjectsStepProps {
  data: ProjectInfo;
  onChange: (updated: Partial<ProjectInfo>) => void;
  errors: { [key: string]: string };
}

export function ProjectsStep({ data, onChange, errors }: ProjectsStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl font-extrabold text-[#0F172A]">Step 5 — Projects & Portfolio</h2>
        <p className="text-xs text-[#64748B] mt-1">
          Highlight your most relevant technical project, GitHub repositories, and online portfolio profiles.
        </p>
      </div>

      <div className="space-y-5">
        {/* MOST RELEVANT PROJECT SECTION */}
        <div className="p-4 rounded-2xl bg-[#FFF9F4] border border-[#FFE8DA] space-y-4">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] flex items-center gap-1.5">
            <span>🚀</span>
            <span>Most Relevant Project</span>
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
                Project Name <span className="text-[#FF5F00]">*</span>
              </label>
              <input
                type="text"
                name="projectName"
                value={data.projectName}
                onChange={handleChange}
                placeholder="e.g. Distributed E-Commerce Backend API"
                className={`w-full rounded-xl border ${errors.projectName ? "border-red-500" : "border-[#E8E0D8]"} bg-white px-4 py-2.5 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]`}
              />
              {errors.projectName && <p className="mt-1 text-xs text-red-500 font-bold">{errors.projectName}</p>}
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
                Your Role
              </label>
              <input
                type="text"
                name="role"
                value={data.role}
                onChange={handleChange}
                placeholder="e.g. Lead Backend Architect"
                className="w-full rounded-xl border border-[#E8E0D8] bg-white px-4 py-2.5 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Technologies Used
            </label>
            <input
              type="text"
              name="technologiesUsed"
              value={data.technologiesUsed}
              onChange={handleChange}
              placeholder="e.g. React, Node.js, PostgreSQL, Docker, AWS"
              className="w-full rounded-xl border border-[#E8E0D8] bg-white px-4 py-2.5 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Project Description
            </label>
            <textarea
              name="description"
              rows={3}
              value={data.description}
              onChange={handleChange}
              placeholder="Describe problem solved, architecture design, performance optimization, or scale metrics..."
              className="w-full rounded-xl border border-[#E8E0D8] bg-white px-4 py-2.5 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>
        </div>

        {/* ONLINE PROFILES & URLS */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              GitHub Profile URL
            </label>
            <input
              type="url"
              name="githubProfile"
              value={data.githubProfile}
              onChange={handleChange}
              placeholder="https://github.com/username"
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              name="linkedinProfile"
              value={data.linkedinProfile}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Portfolio Website
            </label>
            <input
              type="url"
              name="portfolioWebsite"
              value={data.portfolioWebsite}
              onChange={handleChange}
              placeholder="https://yourportfolio.com"
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Live Demo / Project URL
            </label>
            <input
              type="url"
              name="demoUrl"
              value={data.demoUrl}
              onChange={handleChange}
              placeholder="https://demo.app"
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Technical Blog / Medium
            </label>
            <input
              type="url"
              name="technicalBlog"
              value={data.technicalBlog}
              onChange={handleChange}
              placeholder="https://medium.com/@username"
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
