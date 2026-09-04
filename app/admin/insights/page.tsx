"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { initialInsightsArticles } from "@/components/insights/data/insightsData";
import { AdminInsightEditorModal } from "@/components/insights/admin/AdminInsightEditorModal";
import { InsightArticle } from "@/components/insights/types";

export default function AdminInsightsPage() {
  const [articles, setArticles] = useState<InsightArticle[]>(initialInsightsArticles);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = articles.filter((a) => {
    if (statusFilter !== "ALL" && a.status !== statusFilter) return false;
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      return a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
    }
    return true;
  });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this Insight article? This action cannot be undone.")) {
      setArticles((prev) => prev.filter((a) => a.id !== id));
    }
  };

  const handleSave = (newArt: InsightArticle) => {
    setArticles((prev) => [newArt, ...prev]);
  };

  return (
    <AdminLayout pageTitle="Insights Management">
      <AdminInsightEditorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />

      <div className="space-y-6">
        
        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Insights & Content Platform</h2>
            <p className="text-xs text-slate-500">Manage technical blogs, technology updates, company news, and case studies.</p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="rounded-full bg-[#FF5F00] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
          >
            + Create Insight
          </button>
        </div>

        {/* FILTERS & SEARCH */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search insights title or category..."
            className="w-full sm:w-72 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-[#0F172A] outline-none focus:border-[#FF5F00]"
          />

          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <span>Filter Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white p-1.5 outline-none font-bold"
            >
              <option value="ALL">All Statuses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>
        </div>

        {/* INSIGHTS TABLE */}
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500">
                  <th className="p-4">Title</th>
                  <th className="p-4">Content Type</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Author</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Published Date</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-bold text-[#0F172A]">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 max-w-xs truncate font-extrabold">
                      {item.title}
                    </td>
                    <td className="p-4">
                      <span className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-2.5 py-0.5 text-[10px] font-extrabold text-[#FF5F00]">
                        {item.contentType}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600">{item.category}</td>
                    <td className="p-4 text-slate-600">{item.author.name}</td>
                    <td className="p-4">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${
                          item.status === "Published"
                            ? "bg-emerald-500/10 text-emerald-600 border border-emerald-200"
                            : item.status === "Draft"
                            ? "bg-slate-100 text-slate-600"
                            : "bg-amber-500/10 text-amber-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500">{item.publishedAt}</td>
                    <td className="p-4 text-right space-x-2">
                      <Link
                        href={`/insights/${item.slug}`}
                        target="_blank"
                        className="text-[11px] font-extrabold text-[#FF5F00] hover:underline"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-[11px] font-extrabold text-red-600 hover:underline cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
