"use client";

import { useState, useRef } from "react";

interface ApplicationFormProps {
  initialPosition: string;
}

export function ApplicationForm({ initialPosition }: ApplicationFormProps) {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    position: initialPosition || "",
    experience: "",
    portfolio: "",
    linkedin: "",
    github: "",
    coverLetter: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync position selection when clicked from cards list
  if (initialPosition && formFields.position !== initialPosition) {
    setFormFields((prev) => ({ ...prev, position: initialPosition }));
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors((prev) => ({ ...prev, file: "Maximum file size is 5MB." }));
        return;
      }
      const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowed.includes(file.type)) {
        setFormErrors((prev) => ({ ...prev, file: "Supported formats are PDF, DOC, or DOCX." }));
        return;
      }
      setFormErrors((prev) => ({ ...prev, file: "" }));
      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formFields.name.trim()) errors.name = "Full Name is required.";
    if (!formFields.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formFields.position) errors.position = "Position is required.";
    if (!uploadedFile) errors.file = "Please upload your resume.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSuccess(true);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:p-10">
      {isSuccess ? (
        <div className="text-center py-10 animate-in fade-in duration-200">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-6">
            <svg className="h-8 w-8 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900">Application Submitted!</h3>
          <p className="mt-3 text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            Thank you for applying. Your profile application has been successfully received, and our recruitment team will check details shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name *</label>
              <input type="text" name="name" value={formFields.name} onChange={handleInputChange} required className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-sky-500" />
              {formErrors.name && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Email *</label>
              <input type="email" name="email" value={formFields.email} onChange={handleInputChange} required className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-sky-500" />
              {formErrors.email && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.email}</p>}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Phone</label>
              <input type="tel" name="phone" value={formFields.phone} onChange={handleInputChange} className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-sky-500" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Current Location</label>
              <input type="text" name="location" value={formFields.location} onChange={handleInputChange} className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-sky-500" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Position Applying For *</label>
              <select name="position" value={formFields.position} onChange={handleInputChange} required className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs outline-none cursor-pointer">
                <option value="">Select a role</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="AI / ML Engineer">AI / ML Engineer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
              </select>
              {formErrors.position && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.position}</p>}
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Years of Experience</label>
              <input type="number" name="experience" value={formFields.experience} onChange={handleInputChange} min="0" className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-sky-500" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Portfolio URL</label>
              <input type="url" name="portfolio" value={formFields.portfolio} onChange={handleInputChange} className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-sky-500" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">LinkedIn URL</label>
              <input type="url" name="linkedin" value={formFields.linkedin} onChange={handleInputChange} className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-sky-500" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">GitHub URL</label>
              <input type="url" name="github" value={formFields.github} onChange={handleInputChange} className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-sky-500" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Cover Letter</label>
            <textarea name="coverLetter" value={formFields.coverLetter} onChange={handleInputChange} rows={3} className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-sky-500" placeholder="Tell us why you want to join us..."></textarea>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Resume Upload (PDF, DOC, DOCX) *</label>
            {!uploadedFile ? (
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-sky-500 transition cursor-pointer relative bg-slate-50/50">
                <input type="file" ref={fileInputRef} onChange={handleFileChange} required accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="space-y-1 text-slate-500">
                  <p className="text-xs font-bold text-slate-700">Drag & drop your resume here or <span className="text-sky-600">Browse files</span></p>
                  <p className="text-[10px]">Maximum size: 5 MB</p>
                </div>
              </div>
            ) : (
              <div className="text-xs text-sky-600 font-bold mt-2 flex items-center justify-between bg-sky-50 rounded-lg px-4 py-2 border border-sky-100 animate-in fade-in duration-150">
                <span>{uploadedFile.name}</span>
                <button type="button" onClick={removeFile} className="text-slate-400 hover:text-red-500 text-lg font-bold">&times;</button>
              </div>
            )}
            {formErrors.file && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.file}</p>}
          </div>

          <button type="submit" className="w-full rounded-lg bg-slate-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-600 transition cursor-pointer">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
