"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { extendedJobsData } from "@/components/careers/data/jobsData";

export default function CreateJobPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("Software Engineering");
  const [location, setLocation] = useState("Pune (Hybrid)");
  const [workMode, setWorkMode] = useState("Hybrid");
  const [experience, setExperience] = useState("3-5 Years");
  const [description, setDescription] = useState("");
  const [skillsRaw, setSkillsRaw] = useState("React, Node.js, TypeScript, PostgreSQL");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in required fields (*)");
      return;
    }

    const newJob = {
      id: "job-" + Date.now(),
      title,
      department,
      location,
      workMode,
      experience,
      description,
      status: "Published",
      badgeBg: "bg-orange-500/10 text-orange-500",
      badgeIcon: "💼",
      skills: skillsRaw.split(",").map((s) => s.trim()).filter(Boolean),
    };

    extendedJobsData.unshift(newJob as any);
    alert("Job position created and published successfully!");
    router.push("/admin/jobs");
  };

  return (
    <AdminLayout pageTitle="Create New Job Position">
      <div className="max-w-3xl space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Post New Job Opening</h2>
            <p className="text-xs text-slate-500">Publish a new role on the public Careers page.</p>
          </div>
          <button
            onClick={() => router.push("/admin/jobs")}
            className="text-xs font-bold text-slate-600 hover:text-[#FF5F00]"
          >
            ← Back to Jobs
          </button>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 sm:p-8 space-y-5 text-xs text-[#0F172A] shadow-2xs">
          <div>
            <label className="block font-extrabold uppercase tracking-wider mb-1">
              Job Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Senior Software Engineer - Full Stack"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-extrabold uppercase tracking-wider mb-1">
                Department *
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-bold text-xs outline-none focus:border-[#FF5F00]"
              >
                <option value="Software Engineering">Software Engineering</option>
                <option value="AI & Machine Learning">AI & Machine Learning</option>
                <option value="Cloud & DevOps">Cloud & DevOps</option>
                <option value="Product & UI/UX">Product & UI/UX</option>
                <option value="Quality Assurance">Quality Assurance</option>
              </select>
            </div>

            <div>
              <label className="block font-extrabold uppercase tracking-wider mb-1">
                Experience Level *
              </label>
              <input
                type="text"
                required
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="e.g. 3-5 Years"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-extrabold uppercase tracking-wider mb-1">
                Location *
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Pune (Hybrid) / Remote"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
              />
            </div>

            <div>
              <label className="block font-extrabold uppercase tracking-wider mb-1">
                Work Mode *
              </label>
              <select
                value={workMode}
                onChange={(e) => setWorkMode(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-bold text-xs outline-none focus:border-[#FF5F00]"
              >
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Full Remote</option>
                <option value="On-Site">On-Site (Pune)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-extrabold uppercase tracking-wider mb-1">
              Required Technical Skills (Comma separated)
            </label>
            <input
              type="text"
              value={skillsRaw}
              onChange={(e) => setSkillsRaw(e.target.value)}
              placeholder="React, Node.js, TypeScript, PostgreSQL"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div>
            <label className="block font-extrabold uppercase tracking-wider mb-1">
              Job Description & Key Responsibilities *
            </label>
            <textarea
              required
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the candidate's responsibilities, required engineering background, and team environment..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => router.push("/admin/jobs")}
              className="rounded-full border border-slate-200 px-6 py-2.5 font-bold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-[#FF5F00] px-7 py-2.5 font-extrabold uppercase text-white hover:bg-[#e65400] transition shadow-md shadow-orange-500/20"
            >
              Publish Job Role →
            </button>
          </div>
        </form>

      </div>
    </AdminLayout>
  );
}
