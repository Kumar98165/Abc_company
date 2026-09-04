"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { siteConfig } from "@/data/home";

export default function AdminSettingsPage() {
  const [companyName, setCompanyName] = useState(siteConfig.name);
  const [contactEmail, setContactEmail] = useState(siteConfig.email);
  const [seoTitle, setSeoTitle] = useState("Enterprise Software Engineering & AI Solutions");
  const [seoDesc, setSeoDesc] = useState("Building high-impact digital products, scalable cloud backends, and enterprise AI integrations.");
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <AdminLayout pageTitle="Website Settings & Configuration">
      <div className="max-w-3xl space-y-6">
        
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A]">Company Profile & Default SEO</h2>
          <p className="text-xs text-slate-500">Configure global metadata, contact emails, and social media handles.</p>
        </div>

        {savedMessage && (
          <div className="rounded-2xl bg-emerald-500/10 border border-emerald-200 p-4 text-xs font-extrabold text-emerald-600 animate-in fade-in">
            ✓ Website settings saved successfully!
          </div>
        )}

        <form onSubmit={handleSave} className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 sm:p-8 space-y-5 text-xs text-[#0F172A] shadow-2xs">
          <div>
            <label className="block font-extrabold uppercase tracking-wider mb-1">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div>
            <label className="block font-extrabold uppercase tracking-wider mb-1">Primary Contact Email</label>
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div>
            <label className="block font-extrabold uppercase tracking-wider mb-1">Default SEO Title</label>
            <input
              type="text"
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div>
            <label className="block font-extrabold uppercase tracking-wider mb-1">Default Meta Description</label>
            <textarea
              rows={3}
              value={seoDesc}
              onChange={(e) => setSeoDesc(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="rounded-full bg-[#FF5F00] px-7 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
            >
              Save Configuration →
            </button>
          </div>
        </form>

      </div>
    </AdminLayout>
  );
}
