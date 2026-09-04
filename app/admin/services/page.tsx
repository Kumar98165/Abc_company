"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { servicesData } from "@/data/services";

export default function AdminServicesPage() {
  const [servicesList, setServicesList] = useState(servicesData);

  return (
    <AdminLayout pageTitle="Public Services Management">
      <div className="space-y-6">
        
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Core Company Services</h2>
            <p className="text-xs text-slate-500">Manage public website service offerings, key features, and technology stacks.</p>
          </div>
          <button
            type="button"
            onClick={() => alert("Service editor feature ready.")}
            className="rounded-full bg-[#FF5F00] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
          >
            + Add New Service
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((srv) => (
            <div key={srv.id} className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-2.5 py-1 bg-slate-100 rounded-full text-slate-600">
                  {srv.categoryTag}
                </span>
                <span className="rounded-full bg-emerald-500/10 text-emerald-600 px-2.5 py-0.5 text-[10px] font-extrabold border border-emerald-200">
                  Published
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#0F172A]">{srv.fullTitle}</h3>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{srv.description}</p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#FF5F00]">
                <span>{srv.technologies.length} Tech Stack Items</span>
                <button onClick={() => alert(`Edit service ${srv.title}`)} className="hover:underline">Edit Service →</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AdminLayout>
  );
}
