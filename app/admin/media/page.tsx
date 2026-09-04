"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAdmin } from "@/components/admin/AdminContext";

export default function AdminMediaPage() {
  const { mediaItems, addMediaItem } = useAdmin();
  const [filterCategory, setFilterCategory] = useState("ALL");

  const filtered = mediaItems.filter(
    (m) => filterCategory === "ALL" || m.category === filterCategory
  );

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newItem = {
        id: "med-" + Date.now(),
        name: file.name,
        url: "/images/life-at-team-laptops.jpg",
        category: "General" as any,
        size: Math.round(file.size / 1024) + " KB",
        type: file.type || "image/jpeg",
        uploadedAt: "Just now",
      };
      addMediaItem(newItem);
      alert(`Uploaded media file: ${file.name}`);
    }
  };

  return (
    <AdminLayout pageTitle="Media & Asset Library">
      <div className="space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Centralized Media Assets</h2>
            <p className="text-xs text-slate-500">Upload, preview, and organize optimized WebP and SVG graphic assets.</p>
          </div>
          <label className="rounded-full bg-[#FF5F00] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20">
            + Upload New Media Asset
            <input type="file" onChange={handleSimulatedUpload} className="hidden" accept="image/*" />
          </label>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 flex items-center justify-between shadow-2xs text-xs font-bold">
          <span>Filter Category:</span>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white p-1.5 outline-none font-bold"
          >
            <option value="ALL">All Asset Categories</option>
            <option value="Blog">Blog</option>
            <option value="Careers">Careers</option>
            <option value="Services">Services</option>
            <option value="Technology">Technology</option>
            <option value="Team">Team</option>
            <option value="General">General</option>
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => (
            <div key={item.id} className="rounded-[24px] border border-[#E2E8F0] bg-white p-4 shadow-2xs space-y-3">
              <div className="relative h-40 w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                <Image src={item.url} alt={item.name} fill className="object-cover" />
              </div>
              <div>
                <span className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-2 py-0.5 text-[9px] font-extrabold text-[#FF5F00]">
                  {item.category}
                </span>
                <p className="text-xs font-extrabold text-[#0F172A] truncate mt-1">{item.name}</p>
                <p className="text-[10px] text-slate-400">{item.size} • {item.uploadedAt}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AdminLayout>
  );
}
