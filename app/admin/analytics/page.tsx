"use client";

import React from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";

export default function AdminAnalyticsPage() {
  return (
    <AdminLayout pageTitle="Website Traffic Analytics">
      <div className="space-y-6">
        
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A]">Organic Traffic & Visitor Statistics</h2>
          <p className="text-xs text-slate-500">Real-time metrics on public page views, top tech insights, and referral traffic.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 space-y-1 shadow-2xs">
            <span className="text-[10px] font-extrabold uppercase text-[#FF5F00]">MONTHLY VISITORS</span>
            <div className="text-2xl font-extrabold text-[#0F172A]">14,280</div>
            <span className="text-[10px] text-emerald-600 font-bold">↑ +18.4% this month</span>
          </div>

          <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 space-y-1 shadow-2xs">
            <span className="text-[10px] font-extrabold uppercase text-[#FF5F00]">TOTAL PAGE VIEWS</span>
            <div className="text-2xl font-extrabold text-[#0F172A]">48,910</div>
            <span className="text-[10px] text-emerald-600 font-bold">Avg 3.4 pages/session</span>
          </div>

          <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 space-y-1 shadow-2xs">
            <span className="text-[10px] font-extrabold uppercase text-[#FF5F00]">TOP PAGE</span>
            <div className="text-sm font-extrabold text-[#0F172A] truncate">/insights/ai-agents</div>
            <span className="text-[10px] text-slate-500 font-bold">8,420 Views</span>
          </div>

          <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 space-y-1 shadow-2xs">
            <span className="text-[10px] font-extrabold uppercase text-[#FF5F00]">CAREER APPLICANTS</span>
            <div className="text-2xl font-extrabold text-[#0F172A]">124</div>
            <span className="text-[10px] text-blue-600 font-bold">3.2% Conversion Rate</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 space-y-3 shadow-2xs">
          <h3 className="text-sm font-extrabold text-[#0F172A]">Traffic Distribution by Domain</h3>
          <div className="space-y-2 text-xs font-bold text-slate-700">
            <div className="flex justify-between border-b pb-2"><span>1. Direct & Organic Search (Google)</span><span className="text-[#FF5F00]">64.2%</span></div>
            <div className="flex justify-between border-b pb-2"><span>2. LinkedIn Tech Network</span><span className="text-[#FF5F00]">21.5%</span></div>
            <div className="flex justify-between border-b pb-2"><span>3. GitHub Developer Referral</span><span className="text-[#FF5F00]">9.8%</span></div>
            <div className="flex justify-between"><span>4. Tech Conferences & Events</span><span className="text-[#FF5F00]">4.5%</span></div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
