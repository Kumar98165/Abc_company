"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAdmin } from "@/components/admin/AdminContext";
import { EnquiryStatus } from "@/components/admin/types";

export default function AdminEnquiriesPage() {
  const { enquiries, updateEnquiryStatus } = useAdmin();
  const [search, setSearch] = useState("");

  const filtered = enquiries.filter((e) =>
    e.company.toLowerCase().includes(search.toLowerCase()) ||
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.service.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout pageTitle="Business Contact Enquiries">
      <div className="space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Enterprise Enquiries & RFPs</h2>
            <p className="text-xs text-slate-500">Track and respond to client project inquiries submitted via the public Contact page.</p>
          </div>
          <span className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-4 py-1.5 text-xs font-extrabold text-[#FF5F00]">
            Total RFPs: {enquiries.length}
          </span>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 flex items-center justify-between shadow-2xs">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search company, contact name, or service..."
            className="w-full sm:w-80 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-[#0F172A] outline-none focus:border-[#FF5F00]"
          />
        </div>

        <div className="rounded-[28px] border border-[#E2E8F0] bg-white overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500">
                  <th className="p-4">Company & Contact</th>
                  <th className="p-4">Requested Service</th>
                  <th className="p-4">Project Message</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Update Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-bold text-[#0F172A]">
                {filtered.map((enq) => (
                  <tr key={enq.id} className="hover:bg-slate-50 transition">
                    <td className="p-4">
                      <div className="font-extrabold text-[#0F172A]">{enq.company}</div>
                      <div className="text-[10.5px] text-slate-500 font-normal">{enq.name} ({enq.email})</div>
                    </td>
                    <td className="p-4 font-extrabold text-[#FF5F00]">{enq.service}</td>
                    <td className="p-4 max-w-xs text-slate-600 font-normal truncate">{enq.message}</td>
                    <td className="p-4 text-slate-500">{enq.date}</td>
                    <td className="p-4">
                      <span className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-2.5 py-0.5 text-[10px] font-extrabold text-[#FF5F00]">
                        {enq.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <select
                        value={enq.status}
                        onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as EnquiryStatus)}
                        className="rounded-lg border border-slate-200 bg-white p-1 text-xs font-extrabold outline-none focus:border-[#FF5F00]"
                      >
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Converted">Converted</option>
                        <option value="Closed">Closed</option>
                      </select>
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
