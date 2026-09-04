"use client";

import React from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";

export default function AdminTestimonialsPage() {
  return (
    <AdminLayout pageTitle="Verified Client Testimonials">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Client Testimonials</h2>
            <p className="text-xs text-slate-500">Manage client reviews and technology partner feedback.</p>
          </div>
          <button onClick={() => alert("Add Testimonial ready.")} className="rounded-full bg-[#FF5F00] px-5 py-2 text-xs font-extrabold text-white uppercase tracking-wider">
            + Add Testimonial
          </button>
        </div>

        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 text-center space-y-2 text-xs text-slate-500 shadow-2xs">
          <p className="font-bold text-[#0F172A]">Verified Client Testimonials Portal Ready.</p>
          <p>No unverified testimonials are currently published.</p>
        </div>
      </div>
    </AdminLayout>
  );
}
