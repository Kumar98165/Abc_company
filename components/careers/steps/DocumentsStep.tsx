"use client";

import React, { useRef } from "react";
import { DocumentsInfo } from "../types";

interface DocumentsStepProps {
  data: DocumentsInfo;
  onChange: (updated: Partial<DocumentsInfo>) => void;
  errors: { [key: string]: string };
}

export function DocumentsStep({ data, onChange, errors }: DocumentsStepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processResumeFile(file);
    }
  };

  const processResumeFile = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      alert("Maximum file size is 5MB.");
      return;
    }

    const sizeFormatted = (file.size / 1024 / 1024).toFixed(1) + " MB";

    // Set file state and trigger resume parsing simulation
    onChange({
      resumeFile: file,
      resumeFileName: file.name,
      resumeFileSize: sizeFormatted,
      isParsing: true,
      parseConfirmed: false,
    });

    // Simulate Resume Parser extraction delay
    setTimeout(() => {
      onChange({
        isParsing: false,
        parsedData: {
          name: file.name.split("_")[0] || "Candidate",
          email: "extracted.candidate@example.com",
          phone: "+91 98765 43210",
          skills: ["React.js", "Node.js", "TypeScript", "SQL"],
          experienceYears: "3.5 Years",
          education: "Bachelor of Technology in Computer Science",
          linkedin: "https://linkedin.com/in/candidate",
          github: "https://github.com/candidate",
        },
      });
    }, 1500);
  };

  const handleRemoveFile = () => {
    onChange({
      resumeFile: null,
      resumeFileName: "",
      resumeFileSize: "",
      parsedData: null,
      isParsing: false,
      parseConfirmed: false,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl font-extrabold text-[#0F172A]">Step 6 — Documents & Resume Parser</h2>
        <p className="text-xs text-[#64748B] mt-1">
          Upload your resume in PDF, DOC, or DOCX format. Our automated parser will analyze your profile for fast application review.
        </p>
      </div>

      <div className="space-y-6">
        {/* RESUME UPLOAD COMPONENT MATCHING SPECIFICATION */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
            Resume / CV <span className="text-[#FF5F00]">*</span>
          </label>

          {data.resumeFileName ? (
            /* UPLOADED RESUME DISPLAY STATE */
            <div className="rounded-2xl border-2 border-[#10B981]/30 bg-emerald-50/50 p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10B981] text-white text-lg font-bold shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0F172A]">{data.resumeFileName}</h4>
                    <p className="text-xs text-[#64748B]">{data.resumeFileSize}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="rounded-full border border-[#EAE3D9] bg-white px-4 py-1.5 text-xs font-bold text-[#0F172A] hover:border-[#FF5F00] cursor-pointer"
                  >
                    Replace
                  </button>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="rounded-full border border-red-200 bg-white px-4 py-1.5 text-xs font-bold text-red-600 hover:bg-red-50 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* SIMULATED RESUME PARSER STATUS */}
              {data.isParsing ? (
                <div className="flex items-center gap-3 rounded-xl bg-white p-3 border border-[#EAE3D9]">
                  <span className="h-4 w-4 rounded-full border-2 border-[#FF5F00] border-t-transparent animate-spin" />
                  <span className="text-xs font-extrabold text-[#FF5F00]">Analyzing your resume...</span>
                </div>
              ) : data.parsedData ? (
                <div className="rounded-xl bg-white p-4 border border-emerald-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#10B981] flex items-center gap-1.5">
                      <span>✨</span>
                      <span>Resume information detected</span>
                    </span>
                    <span className="text-[10.5px] font-bold text-[#64748B]">Auto-Parsed Profile</span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs text-[#334155] pt-1">
                    <p><strong>Skills Found:</strong> {data.parsedData.skills?.join(", ")}</p>
                    <p><strong>Est. Experience:</strong> {data.parsedData.experienceYears}</p>
                    <p><strong>Education:</strong> {data.parsedData.education}</p>
                    <p><strong>Contact:</strong> {data.parsedData.email}</p>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            /* DRAG AND DROP UPLOAD ZONE */
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed ${
                errors.resumeFile ? "border-red-500 bg-red-50/40" : "border-[#E8E0D8] bg-[#FAF8F5] hover:border-[#FF5F00] hover:bg-[#FFF9F4]"
              } p-10 text-center transition-all cursor-pointer shadow-2xs`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-[#EAE3D9] text-[#FF5F00] text-2xl shadow-sm mb-4">
                ↑
              </div>
              <h3 className="text-sm font-extrabold text-[#0F172A]">Upload Resume</h3>
              <p className="mt-1 text-xs text-[#64748B]">Drag & drop your resume here</p>
              <p className="mt-1 text-[11px] font-bold text-[#94A3B8]">PDF, DOC, DOCX • Maximum 5 MB</p>
              <button
                type="button"
                className="mt-5 rounded-full bg-[#FF5F00] px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition-colors shadow-xs"
              >
                Choose File
              </button>
            </div>
          )}
          {errors.resumeFile && <p className="text-xs text-red-500 font-bold">{errors.resumeFile}</p>}
        </div>

        {/* COVER LETTER */}
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
            Cover Letter <span className="text-xs font-normal text-[#94A3B8]">(Optional)</span>
          </label>
          <textarea
            rows={4}
            value={data.coverLetter}
            onChange={(e) => onChange({ coverLetter: e.target.value })}
            placeholder="Share why you're interested in this role and key achievements that make you a great fit..."
            className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
          />
        </div>
      </div>
    </div>
  );
}
