"use client";

import React from "react";
import { ProfessionalExperience } from "../types";

interface ExperienceStepProps {
  data: ProfessionalExperience;
  onChange: (updated: Partial<ProfessionalExperience>) => void;
  errors: { [key: string]: string };
}

export function ExperienceStep({ data, onChange, errors }: ExperienceStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const isFresher = data.totalExperience === "Fresher";

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl font-extrabold text-[#0F172A]">Step 2 — Professional Experience</h2>
        <p className="text-xs text-[#64748B] mt-1">
          Tell us about your work history, notice period, compensation expectations, and work mode preferences.
        </p>
      </div>

      <div className="space-y-5">
        {/* Total Experience */}
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
            Total Work Experience <span className="text-[#FF5F00]">*</span>
          </label>
          <select
            name="totalExperience"
            value={data.totalExperience}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
          >
            <option value="Fresher">Fresher</option>
            <option value="0–1 Year">0–1 Year</option>
            <option value="1–3 Years">1–3 Years</option>
            <option value="3–5 Years">3–5 Years</option>
            <option value="5–8 Years">5–8 Years</option>
            <option value="8+ Years">8+ Years</option>
          </select>
        </div>

        {/* Conditional Fields for Experienced Candidates */}
        {!isFresher && (
          <div className="grid gap-5 sm:grid-cols-2 animate-in fade-in duration-200">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
                Current / Previous Company
              </label>
              <input
                type="text"
                name="currentCompany"
                value={data.currentCompany}
                onChange={handleChange}
                placeholder="e.g. TCS, Infosys, Startup..."
                className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
                Current / Previous Job Title
              </label>
              <input
                type="text"
                name="currentTitle"
                value={data.currentTitle}
                onChange={handleChange}
                placeholder="e.g. Software Engineer"
                className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
              />
            </div>
          </div>
        )}

        {/* Notice Period, Current CTC, Expected CTC */}
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Notice Period
            </label>
            <select
              name="noticePeriod"
              value={data.noticePeriod}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
            >
              <option value="Immediate">Immediate</option>
              <option value="Serving Notice">Serving Notice</option>
              <option value="15 Days">15 Days</option>
              <option value="30 Days">30 Days</option>
              <option value="60 Days">60 Days</option>
              <option value="90 Days">90 Days</option>
            </select>
          </div>

          {!isFresher && (
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
                Current CTC (LPA)
              </label>
              <input
                type="text"
                name="currentCTC"
                value={data.currentCTC}
                onChange={handleChange}
                placeholder="e.g. 6.5 LPA"
                className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Expected CTC (LPA)
            </label>
            <input
              type="text"
              name="expectedCTC"
              value={data.expectedCTC}
              onChange={handleChange}
              placeholder="e.g. 9.5 LPA"
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>
        </div>

        {/* Earliest Joining Date */}
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
            Earliest Joining Date
          </label>
          <input
            type="date"
            name="joiningDate"
            value={data.joiningDate}
            onChange={handleChange}
            className="w-full sm:w-1/2 rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
          />
        </div>

        {/* Radio Preferences */}
        <div className="grid gap-6 sm:grid-cols-2 pt-2 border-t border-[#F1F5F9]">
          {/* Preferred Work Mode */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-2">
              Preferred Work Mode
            </label>
            <div className="flex items-center gap-4">
              {(["Remote", "Hybrid", "On-site"] as const).map((mode) => (
                <label key={mode} className="flex items-center gap-2 text-xs font-bold text-[#1E293B] cursor-pointer">
                  <input
                    type="radio"
                    name="preferredWorkMode"
                    value={mode}
                    checked={data.preferredWorkMode === mode}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#FF5F00] focus:ring-[#FF5F00]"
                  />
                  <span>{mode}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Willing to Relocate */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-2">
              Willing to Relocate?
            </label>
            <div className="flex items-center gap-4">
              {(["Yes", "No", "Maybe"] as const).map((option) => (
                <label key={option} className="flex items-center gap-2 text-xs font-bold text-[#1E293B] cursor-pointer">
                  <input
                    type="radio"
                    name="willingToRelocate"
                    value={option}
                    checked={data.willingToRelocate === option}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#FF5F00] focus:ring-[#FF5F00]"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
