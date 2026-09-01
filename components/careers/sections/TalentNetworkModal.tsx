"use client";

import React, { useState, useRef } from "react";

interface TalentNetworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TalentNetworkModal({ isOpen, onClose }: TalentNetworkModalProps) {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    phone: "",
    primaryArea: "Engineering",
    experience: "1-3 Yrs",
    topSkills: "",
    linkedin: "",
    portfolio: "",
    preferredLocation: "Remote",
    preferredWorkMode: "Hybrid / Remote",
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.fullName || !fields.email) {
      alert("Please fill in your name and email.");
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#EAE3D9] shadow-2xl p-6 sm:p-8 my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF8F5] text-[#0F172A] border border-[#EAE3D9] hover:bg-[#FF5F00] hover:text-white font-extrabold text-sm transition-colors cursor-pointer"
        >
          ✕
        </button>

        {isSuccess ? (
          <div className="text-center py-10 space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF5F00] text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-extrabold text-[#0F172A]">Joined Talent Network!</h3>
            <p className="text-xs text-[#64748B] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-extrabold text-[#0F172A]">{fields.fullName}</span>. Your candidate profile and resume have been saved to our talent network pool.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 rounded-full bg-[#FF5F00] px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
                TALENT NETWORK
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-[#0F172A]">Join Our Talent Network</h2>
              <p className="text-xs text-[#64748B] mt-1">
                Your next opportunity may not be listed yet. Share your profile and we'll keep you in mind for future openings.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                  Full Name <span className="text-[#FF5F00]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={fields.fullName}
                  onChange={handleChange}
                  placeholder="Rahul Sharma"
                  className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                  Email Address <span className="text-[#FF5F00]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="rahul@example.com"
                  className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={fields.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                  Primary Area
                </label>
                <select
                  name="primaryArea"
                  value={fields.primaryArea}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
                >
                  <option value="Engineering">Engineering</option>
                  <option value="AI & Data">AI & Data</option>
                  <option value="Cloud DevOps">Cloud DevOps</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                  Experience
                </label>
                <select
                  name="experience"
                  value={fields.experience}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
                >
                  <option value="Fresher">Fresher</option>
                  <option value="1-3 Yrs">1-3 Yrs</option>
                  <option value="3-5 Yrs">3-5 Yrs</option>
                  <option value="5+ Yrs">5+ Yrs</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                Top Skills
              </label>
              <input
                type="text"
                name="topSkills"
                value={fields.topSkills}
                onChange={handleChange}
                placeholder="e.g. React, Node.js, Python, AWS..."
                className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                Upload Resume (PDF, DOCX)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-between rounded-xl border border-dashed border-[#E8E0D8] bg-[#FAF8F5] p-3 cursor-pointer hover:border-[#FF5F00]"
              >
                <span className="text-xs font-extrabold text-[#0F172A]">
                  {uploadedFile ? `📄 ${uploadedFile.name}` : "📁 Click to upload resume PDF"}
                </span>
                <span className="text-[10px] text-[#64748B]">Max 5MB</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={fields.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/..."
                  className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={fields.portfolio}
                  onChange={handleChange}
                  placeholder="https://yourportfolio.com"
                  className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[#EAE3D9] bg-white px-5 py-2.5 text-xs font-bold text-[#64748B] hover:text-[#0F172A] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-full bg-[#FF5F00] px-7 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
              >
                Join Network →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
