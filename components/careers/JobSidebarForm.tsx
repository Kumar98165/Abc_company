"use client";

import { useState, useRef } from "react";

export function JobSidebarForm() {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (!uploadedFile) errors.file = "Please upload your resume.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSuccess(true);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sticky top-28 space-y-6">
      <h3 className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-3">Apply for this Role</h3>

      {isSuccess ? (
        <div className="text-center py-6 animate-in fade-in duration-200">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4">
            <svg className="h-6 w-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Application Received</h4>
          <p className="mt-2 text-xs text-slate-500 leading-relaxed">
            Thank you for applying. Our recruiting team will review your CV shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formFields.name}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-sky-500"
            />
            {formErrors.name && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.name}</p>}
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formFields.email}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-sky-500"
            />
            {formErrors.email && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.email}</p>}
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Resume Upload (PDF, DOC, DOCX) *
            </label>
            {!uploadedFile ? (
              <div className="border border-dashed border-slate-200 rounded-lg p-4 text-center bg-slate-50/50 relative hover:border-sky-500 transition cursor-pointer">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <p className="text-[10px] font-bold text-slate-700">Browse resume</p>
                <p className="text-[9px] text-slate-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
              </div>
            ) : (
              <div className="text-xs text-sky-600 font-bold mt-2 flex items-center justify-between bg-sky-50 rounded px-2 py-1 border border-sky-100">
                <span className="truncate">{uploadedFile.name}</span>
                <button type="button" onClick={removeFile} className="text-slate-400 hover:text-red-500 font-bold">
                  &times;
                </button>
              </div>
            )}
            {formErrors.file && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.file}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-950 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-600 transition cursor-pointer"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
