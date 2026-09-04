"use client";

import React from "react";
import Link from "next/link";
import { useAdmin } from "./AdminContext";

export function AdminDashboard() {
  const { currentUser, applications, enquiries, activityLogs, mediaItems, updateApplicationStatus, updateEnquiryStatus } = useAdmin();

  const newApplicationsCount = applications.filter((a) => a.status === "New").length;
  const newEnquiriesCount = enquiries.filter((e) => e.status === "New").length;

  const kpiCards = [
    {
      title: "TOTAL INSIGHTS",
      value: "8",
      subtitle: "Published Articles & Programs",
      trend: "+2 this week",
      icon: "✍️",
      href: "/admin/insights",
    },
    {
      title: "OPEN POSITIONS",
      value: "6",
      subtitle: "Active Hiring Roles",
      trend: "4 Departments",
      icon: "💼",
      href: "/admin/jobs",
    },
    {
      title: "APPLICATIONS",
      value: applications.length.toString(),
      subtitle: `${newApplicationsCount} New Received`,
      trend: "+5 this week",
      icon: "📄",
      href: "/admin/applications",
      highlight: newApplicationsCount > 0,
    },
    {
      title: "CONTACT ENQUIRIES",
      value: enquiries.length.toString(),
      subtitle: `${newEnquiriesCount} Action Needed`,
      trend: "Enterprise RFPs",
      icon: "📥",
      href: "/admin/enquiries",
      highlight: newEnquiriesCount > 0,
    },
    {
      title: "WEBSITE VISITORS",
      value: "14,280",
      subtitle: "Monthly Organic Views",
      trend: "+18.4% vs last month",
      icon: "📈",
      href: "/admin/analytics",
    },
    {
      title: "MEDIA FILES",
      value: mediaItems.length.toString(),
      subtitle: "Uploaded Tech Assets",
      trend: "Optimized WebP",
      icon: "🖼️",
      href: "/admin/media",
    },
  ];

  return (
    <div className="space-y-8">
      
      {/* WELCOME BANNER */}
      <div className="rounded-[28px] border border-[#E2E8F0] bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5F00]">
            CENTRAL CONTROL PANEL
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            GOOD MORNING, {currentUser?.name?.toUpperCase() || "ADMIN"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Here's what's happening across your website today.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/admin/insights/new"
            className="rounded-full bg-[#FF5F00] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/30"
          >
            + Create Insight
          </Link>
          <Link
            href="/admin/jobs/new"
            className="rounded-full border border-slate-600 bg-slate-800/80 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-slate-700 transition cursor-pointer"
          >
            + Add Job
          </Link>
        </div>
      </div>

      {/* KPI CARDS GRID */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {kpiCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className={`group rounded-[24px] border p-6 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
              card.highlight
                ? "bg-gradient-to-br from-[#FFF4EC] to-white border-[#FFE2CC] hover:border-[#FF5F00]"
                : "bg-white border-[#E2E8F0] hover:border-[#FF5F00]"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#64748B] group-hover:text-[#FF5F00] transition-colors">
                  {card.title}
                </span>
                <span className="text-2xl">{card.icon}</span>
              </div>
              <div className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-1">
                {card.value}
              </div>
              <p className="text-xs font-semibold text-[#64748B]">
                {card.subtitle}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-[11px] font-extrabold text-[#FF5F00]">
              <span>{card.trend}</span>
              <span className="group-hover:translate-x-1 transition-transform">Manage →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* QUICK ACTIONS BAR */}
      <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-6 shadow-2xs space-y-4">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
          QUICK MANAGEMENT ACTIONS
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/insights/new" className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-4 py-2 text-xs font-extrabold text-[#FF5F00] hover:bg-[#FF5F00] hover:text-white transition">
            + Create Insight
          </Link>
          <Link href="/admin/jobs/new" className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-4 py-2 text-xs font-extrabold text-[#FF5F00] hover:bg-[#FF5F00] hover:text-white transition">
            + Add Job Role
          </Link>
          <Link href="/admin/services" className="rounded-full bg-slate-50 border border-slate-200 px-4 py-2 text-xs font-extrabold text-[#0F172A] hover:bg-slate-200 transition">
            + Manage Services
          </Link>
          <Link href="/admin/technologies" className="rounded-full bg-slate-50 border border-slate-200 px-4 py-2 text-xs font-extrabold text-[#0F172A] hover:bg-slate-200 transition">
            + Update Tech Stack
          </Link>
          <Link href="/admin/case-studies" className="rounded-full bg-slate-50 border border-slate-200 px-4 py-2 text-xs font-extrabold text-[#0F172A] hover:bg-slate-200 transition">
            + Add Case Study
          </Link>
        </div>
      </div>

      {/* RECENT APPLICATIONS & RECENT ENQUIRIES TWO COLUMN GRID */}
      <div className="grid gap-6 lg:grid-cols-2">
        
        {/* RECENT APPLICATIONS */}
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">CAREERS</span>
              <h3 className="text-base font-extrabold text-[#0F172A]">Recent Applications</h3>
            </div>
            <Link href="/admin/applications" className="text-xs font-extrabold text-[#FF5F00] hover:underline">
              View All ({applications.length}) →
            </Link>
          </div>

          <div className="space-y-3">
            {applications.slice(0, 4).map((app) => (
              <div key={app.id} className="p-3.5 rounded-2xl border border-slate-100 bg-[#F8FAFC] flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-extrabold text-[#0F172A]">{app.candidateName}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold">{app.appliedPosition}</p>
                  <p className="text-[10px] text-slate-400">{app.appliedDate} • {app.experience}</p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={app.status}
                    onChange={(e) => updateApplicationStatus(app.id, e.target.value as any)}
                    className="text-[10.5px] font-bold rounded-lg border border-slate-200 bg-white p-1 outline-none"
                  >
                    <option value="New">New</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Interview">Interview</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT CONTACT ENQUIRIES */}
        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">BUSINESS</span>
              <h3 className="text-base font-extrabold text-[#0F172A]">Recent Contact Enquiries</h3>
            </div>
            <Link href="/admin/enquiries" className="text-xs font-extrabold text-[#FF5F00] hover:underline">
              View All ({enquiries.length}) →
            </Link>
          </div>

          <div className="space-y-3">
            {enquiries.slice(0, 3).map((enq) => (
              <div key={enq.id} className="p-3.5 rounded-2xl border border-slate-100 bg-[#F8FAFC] flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-extrabold text-[#0F172A]">{enq.company}</h4>
                  <p className="text-[11px] text-[#FF5F00] font-semibold">{enq.service}</p>
                  <p className="text-[10px] text-slate-400">From: {enq.name} • {enq.date}</p>
                </div>
                <select
                  value={enq.status}
                  onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                  className="text-[10.5px] font-bold rounded-lg border border-slate-200 bg-white p-1 outline-none"
                >
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Converted">Converted</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ACTIVITY FEED */}
      <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-base font-extrabold text-[#0F172A]">System Activity Log</h3>
          <Link href="/admin/activity" className="text-xs font-extrabold text-[#FF5F00] hover:underline">
            Full Audit Log →
          </Link>
        </div>

        <div className="space-y-3">
          {activityLogs.slice(0, 4).map((log) => (
            <div key={log.id} className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-[#0F172A]">{log.adminName}</span>
                <span className="text-slate-600">{log.action}:</span>
                <span className="font-bold text-[#FF5F00] truncate max-w-xs">{log.resource}</span>
              </div>
              <span className="text-[10px] text-slate-400 shrink-0">{log.timestamp}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
