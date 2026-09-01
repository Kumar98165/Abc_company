"use client";

import React, { useState } from "react";
import { extendedJobsData, JobDetailItem } from "../data/jobsData";

interface CareerDiscoveryWizardProps {
  onCompleteMatch: (matchedJob: JobDetailItem, selectedSkills: string[]) => void;
  onCancel: () => void;
}

export function CareerDiscoveryWizard({ onCompleteMatch, onCancel }: CareerDiscoveryWizardProps) {
  const [step, setStep] = useState<"SKILLS" | "EXP" | "DEPT">("SKILLS");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedExp, setSelectedExp] = useState<string>("");
  const [selectedDept, setSelectedDept] = useState<string>("");

  const skillOptions = ["React", "Node.js", "Python", "AI / ML", "Cloud", "UI/UX", "TypeScript", "AWS", "PostgreSQL", "Docker"];
  const expOptions = ["Fresher", "0–2 Years", "2–5 Years", "5+ Years"];
  const deptOptions = ["Engineering", "AI & Data", "Cloud DevOps", "Design"];

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleNextFromSkills = () => {
    if (selectedSkills.length === 0) {
      alert("Please select at least one technology.");
      return;
    }
    setStep("EXP");
  };

  const handleNextFromExp = (exp: string) => {
    setSelectedExp(exp);
    setStep("DEPT");
  };

  const handleCompleteDept = (dept: string) => {
    setSelectedDept(dept);

    // Calculate best match
    const matched = extendedJobsData.find((j) =>
      j.skills.some((s) => selectedSkills.includes(s))
    ) || extendedJobsData[0];

    onCompleteMatch(matched, selectedSkills);
  };

  return (
    <div className="space-y-4 p-4 rounded-2xl border border-[#EAE3D9] bg-white shadow-xs">
      {/* Wizard Progress Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
          YOUR CAREER JOURNEY • STEP {step === "SKILLS" ? "1 OF 3" : step === "EXP" ? "2 OF 3" : "3 OF 3"}
        </span>
        <button
          type="button"
          onClick={onCancel}
          className="text-xs text-[#64748B] hover:text-[#0F172A] font-bold cursor-pointer"
        >
          Cancel
        </button>
      </div>

      {/* STEP 1: SKILLS */}
      {step === "SKILLS" && (
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold text-[#0F172A]">
            What are your strongest technologies?
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {skillOptions.map((skill) => {
              const isSelected = selectedSkills.includes(skill);
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`rounded-full px-3 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#FF5F00] text-white shadow-xs"
                      : "border border-[#E2E8F0] bg-[#FAF8F5] text-[#0F172A] hover:border-[#FF5F00]"
                  }`}
                >
                  {skill} {isSelected && "✓"}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNextFromSkills}
            className="w-full mt-2 rounded-xl bg-[#FF5F00] py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer"
          >
            Continue →
          </button>
        </div>
      )}

      {/* STEP 2: EXPERIENCE */}
      {step === "EXP" && (
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold text-[#0F172A]">
            How much experience do you have?
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {expOptions.map((exp) => (
              <button
                key={exp}
                type="button"
                onClick={() => handleNextFromExp(exp)}
                className="rounded-xl border border-[#EAE3D9] bg-[#FAF8F5] p-3 text-xs font-extrabold text-[#0F172A] hover:border-[#FF5F00] hover:bg-[#FFF4EC] transition cursor-pointer text-center"
              >
                {exp}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: DEPARTMENT */}
      {step === "DEPT" && (
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold text-[#0F172A]">
            What type of work interests you?
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {deptOptions.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => handleCompleteDept(dept)}
                className="rounded-xl border border-[#EAE3D9] bg-[#FAF8F5] p-3 text-xs font-extrabold text-[#0F172A] hover:border-[#FF5F00] hover:bg-[#FFF4EC] transition cursor-pointer text-center"
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
