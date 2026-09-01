"use client";

import React, { useState } from "react";
import { SkillsInfo, SkillExperienceItem } from "../types";

interface SkillsStepProps {
  data: SkillsInfo;
  onChange: (updated: Partial<SkillsInfo>) => void;
  errors: { [key: string]: string };
}

export function SkillsStep({ data, onChange, errors }: SkillsStepProps) {
  const [newPrimary, setNewPrimary] = useState("");
  const [newSecondary, setNewSecondary] = useState("");

  const [matrixSkillName, setMatrixSkillName] = useState("");
  const [matrixYears, setMatrixYears] = useState("2 Years");

  const addTag = (category: "primary" | "secondary", value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    if (data[category].includes(trimmed)) return;
    onChange({ [category]: [...data[category], trimmed] });
  };

  const removeTag = (category: "primary" | "secondary", value: string) => {
    onChange({ [category]: data[category].filter((item) => item !== value) });
  };

  const handleAddSkillMatrix = () => {
    if (!matrixSkillName.trim()) return;
    const newItem: SkillExperienceItem = {
      skillName: matrixSkillName.trim(),
      years: matrixYears,
      level: "Intermediate",
    };
    onChange({ experienceMatrix: [...data.experienceMatrix, newItem] });
    setMatrixSkillName("");
  };

  const handleRemoveSkillMatrix = (index: number) => {
    const updated = [...data.experienceMatrix];
    updated.splice(index, 1);
    onChange({ experienceMatrix: updated });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl font-extrabold text-[#0F172A]">Step 4 — Technical Skills & Experience Matrix</h2>
        <p className="text-xs text-[#64748B] mt-1">
          Select primary & secondary technical skills and define your years of hands-on experience for key technologies.
        </p>
      </div>

      <div className="space-y-6">
        {/* PRIMARY SKILLS TAG SELECTOR */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
            Primary Skills <span className="text-[#FF5F00]">*</span>
          </label>

          <div className="flex flex-wrap gap-2 p-3 rounded-2xl border border-[#E8E0D8] bg-[#FAF8F5] min-h-[52px]">
            {data.primary.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5F00] px-3.5 py-1 text-xs font-extrabold text-white shadow-xs"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => removeTag("primary", skill)}
                  className="text-white hover:text-red-200 font-black cursor-pointer"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="text"
              value={newPrimary}
              onChange={(e) => setNewPrimary(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag("primary", newPrimary);
                  setNewPrimary("");
                }
              }}
              placeholder="Type skill & press Enter (e.g. React.js, Node.js, Python)..."
              className="flex-1 rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
            <button
              type="button"
              onClick={() => {
                addTag("primary", newPrimary);
                setNewPrimary("");
              }}
              className="rounded-xl bg-[#FF5F00] px-5 py-2.5 text-xs font-extrabold text-white hover:bg-[#e65400] transition-colors cursor-pointer"
            >
              + Add Skill
            </button>
          </div>
          {errors.primary && <p className="text-xs text-red-500 font-bold">{errors.primary}</p>}
        </div>

        {/* SECONDARY SKILLS TAG SELECTOR */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
            Secondary Skills <span className="text-xs font-normal text-[#94A3B8]">(Optional)</span>
          </label>

          <div className="flex flex-wrap gap-2 p-3 rounded-2xl border border-[#E8E0D8] bg-[#FAF8F5] min-h-[48px]">
            {data.secondary.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#CBD5E1] bg-white px-3 py-1 text-xs font-bold text-[#334155]"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => removeTag("secondary", skill)}
                  className="text-[#64748B] hover:text-red-600 font-black cursor-pointer"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="text"
              value={newSecondary}
              onChange={(e) => setNewSecondary(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag("secondary", newSecondary);
                  setNewSecondary("");
                }
              }}
              placeholder="Add secondary skill (e.g. Docker, Figma, Redis)..."
              className="flex-1 rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
            <button
              type="button"
              onClick={() => {
                addTag("secondary", newSecondary);
                setNewSecondary("");
              }}
              className="rounded-xl border border-[#EAE3D9] bg-white px-5 py-2.5 text-xs font-bold text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
            >
              + Add
            </button>
          </div>
        </div>

        {/* YEARS OF EXPERIENCE BY SKILL MATRIX TABLE */}
        <div className="pt-4 border-t border-[#F1F5F9] space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
              Years of Experience by Skill
            </label>
            <span className="text-[11px] text-[#64748B]">Map duration per technology</span>
          </div>

          {/* Matrix Card Table */}
          <div className="rounded-2xl border border-[#EAE3D9] bg-white overflow-hidden shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#EAE3D9] text-[10.5px] font-extrabold text-[#64748B] uppercase tracking-wider">
                  <th className="py-2.5 px-4">Technology / Skill</th>
                  <th className="py-2.5 px-4">Years of Experience</th>
                  <th className="py-2.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-xs">
                {data.experienceMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#FFF9F4] transition-colors">
                    <td className="py-3 px-4 font-bold text-[#0F172A]">{item.skillName}</td>
                    <td className="py-3 px-4 text-[#FF5F00] font-mono font-extrabold">{item.years}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleRemoveSkillMatrix(idx)}
                        className="text-xs text-red-500 font-bold hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Matrix Row Control */}
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#EAE3D9]">
            <input
              type="text"
              value={matrixSkillName}
              onChange={(e) => setMatrixSkillName(e.target.value)}
              placeholder="Technology name (e.g. React.js, Python, AWS)"
              className="w-full sm:flex-1 rounded-xl border border-[#E8E0D8] bg-white px-3.5 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
            <select
              value={matrixYears}
              onChange={(e) => setMatrixYears(e.target.value)}
              className="w-full sm:w-36 rounded-xl border border-[#E8E0D8] bg-white px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
            >
              <option value="6 Months">6 Months</option>
              <option value="1 Year">1 Year</option>
              <option value="1.5 Years">1.5 Years</option>
              <option value="2 Years">2 Years</option>
              <option value="3 Years">3 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>
            <button
              type="button"
              onClick={handleAddSkillMatrix}
              className="w-full sm:w-auto rounded-xl bg-[#0F172A] px-4 py-2 text-xs font-extrabold text-white hover:bg-[#FF5F00] transition-colors cursor-pointer"
            >
              + Add to Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
