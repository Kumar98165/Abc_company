"use client";

import React, { useState } from "react";
import { EducationInfo, CertificationItem } from "../types";

interface EducationStepProps {
  data: EducationInfo;
  onChange: (updated: Partial<EducationInfo>) => void;
  errors: { [key: string]: string };
}

export function EducationStep({ data, onChange, errors }: EducationStepProps) {
  const [certName, setCertName] = useState("");
  const [certIssuer, setCertIssuer] = useState("");
  const [certYear, setCertYear] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleAddCertification = () => {
    if (!certName.trim()) return;
    const newCert: CertificationItem = {
      id: "cert-" + Date.now(),
      name: certName.trim(),
      issuer: certIssuer.trim() || "Verified",
      year: certYear.trim() || new Date().getFullYear().toString(),
    };
    onChange({ certifications: [...data.certifications, newCert] });
    setCertName("");
    setCertIssuer("");
    setCertYear("");
  };

  const handleRemoveCertification = (id: string) => {
    onChange({ certifications: data.certifications.filter((c) => c.id !== id) });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl font-extrabold text-[#0F172A]">Step 3 — Education & Certifications</h2>
        <p className="text-xs text-[#64748B] mt-1">
          Provide details about your academic background, degree qualifications, and technical certifications.
        </p>
      </div>

      <div className="space-y-5">
        {/* Highest Education Level & Degree */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Highest Education Level <span className="text-[#FF5F00]">*</span>
            </label>
            <select
              name="highestLevel"
              value={data.highestLevel}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
            >
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="Diploma">Diploma</option>
              <option value="MBA">MBA</option>
              <option value="PhD">PhD</option>
              <option value="High School">High School</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Degree / Qualification <span className="text-[#FF5F00]">*</span>
            </label>
            <input
              type="text"
              name="degree"
              value={data.degree}
              onChange={handleChange}
              placeholder="e.g. B.Tech / B.E. / B.Sc"
              className={`w-full rounded-xl border ${errors.degree ? "border-red-500" : "border-[#E8E0D8]"} bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]`}
            />
            {errors.degree && <p className="mt-1 text-xs text-red-500 font-bold">{errors.degree}</p>}
          </div>
        </div>

        {/* Specialization & University */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Specialization / Major
            </label>
            <input
              type="text"
              name="specialization"
              value={data.specialization}
              onChange={handleChange}
              placeholder="e.g. Computer Science & Engineering"
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              University / College <span className="text-[#FF5F00]">*</span>
            </label>
            <input
              type="text"
              name="university"
              value={data.university}
              onChange={handleChange}
              placeholder="e.g. Savitribai Phule Pune University"
              className={`w-full rounded-xl border ${errors.university ? "border-red-500" : "border-[#E8E0D8]"} bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]`}
            />
            {errors.university && <p className="mt-1 text-xs text-red-500 font-bold">{errors.university}</p>}
          </div>
        </div>

        {/* Graduation Year & CGPA */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Graduation Year <span className="text-[#FF5F00]">*</span>
            </label>
            <select
              name="graduationYear"
              value={data.graduationYear}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
            >
              {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i + 2).map((year) => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              CGPA / Percentage <span className="text-xs font-normal text-[#94A3B8]">(Optional)</span>
            </label>
            <input
              type="text"
              name="cgpaPercentage"
              value={data.cgpaPercentage}
              onChange={handleChange}
              placeholder="e.g. 8.4 CGPA or 82%"
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>
        </div>

        {/* ADD CERTIFICATIONS MULTI-ENTRY CONTAINER */}
        <div className="pt-4 border-t border-[#F1F5F9] space-y-3">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
            Additional Certifications & Credentials
          </label>

          {/* Existing Certifications List */}
          {data.certifications.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {data.certifications.map((cert) => (
                <span
                  key={cert.id}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#FFF4EC] px-3.5 py-1 text-xs font-bold text-[#FF5F00] shadow-2xs"
                >
                  <span>🏆 {cert.name} ({cert.issuer})</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCertification(cert.id)}
                    className="text-[#FF5F00] hover:text-red-600 font-extrabold cursor-pointer"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Add Certification Inputs */}
          <div className="grid gap-3 sm:grid-cols-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#EAE3D9]">
            <input
              type="text"
              value={certName}
              onChange={(e) => setCertName(e.target.value)}
              placeholder="Certification Name (e.g. AWS Certified Developer)"
              className="rounded-xl border border-[#E8E0D8] bg-white px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
            <input
              type="text"
              value={certIssuer}
              onChange={(e) => setCertIssuer(e.target.value)}
              placeholder="Issuer (e.g. Amazon Web Services)"
              className="rounded-xl border border-[#E8E0D8] bg-white px-3 py-2 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
            <button
              type="button"
              onClick={handleAddCertification}
              className="rounded-xl bg-[#1A1A1A] px-4 py-2 text-xs font-extrabold text-white hover:bg-[#FF5F00] transition-colors cursor-pointer"
            >
              + Add Certification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
