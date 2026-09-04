"use client";

import React from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAdmin } from "@/components/admin/AdminContext";

export default function AdminActivityPage() {
  const { activityLogs } = useAdmin();

  return (
    <AdminLayout pageTitle="System Audit & Activity Logs">
      <div className="space-y-6">
        
        <div>
          <h2 className="text-xl font-extrabold text-[#0F172A]">Administrative Audit Trail</h2>
          <p className="text-xs text-slate-500">Chronological history of admin actions, content publishing, job updates, and user modifications.</p>
        </div>

        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-2xs space-y-4">
          <div className="space-y-3">
            {activityLogs.map((log) => (
              <div key={log.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 gap-2 text-xs font-bold">
                <div>
                  <span className="font-extrabold text-[#FF5F00]">{log.adminName}</span>
                  <span className="text-slate-700 ml-2">{log.action}:</span>
                  <p className="text-slate-600 font-normal mt-0.5">{log.resource}</p>
                </div>
                <span className="text-[10px] text-slate-400 font-mono shrink-0">{log.timestamp}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
