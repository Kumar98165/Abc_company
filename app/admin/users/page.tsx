"use client";

import React from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAdmin } from "@/components/admin/AdminContext";

export default function AdminUsersPage() {
  const { adminUsers } = useAdmin();

  return (
    <AdminLayout pageTitle="Admin User Management & RBAC">
      <div className="space-y-6">
        
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Authorized Administrative Users</h2>
            <p className="text-xs text-slate-500">Manage user roles, Super Admin permissions, Recruiter access, and Content Editor accounts.</p>
          </div>
          <button
            type="button"
            onClick={() => alert("Invite Admin user modal ready.")}
            className="rounded-full bg-[#FF5F00] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
          >
            + Invite Admin User
          </button>
        </div>

        <div className="rounded-[28px] border border-[#E2E8F0] bg-white overflow-hidden shadow-2xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500">
                <th className="p-4">Name & Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-bold text-[#0F172A]">
              {adminUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50 transition">
                  <td className="p-4">
                    <div className="font-extrabold">{u.name}</div>
                    <div className="text-[10.5px] text-slate-400 font-normal">{u.email}</div>
                  </td>
                  <td className="p-4">
                    <span className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-3 py-1 text-[10px] font-extrabold text-[#FF5F00]">
                      {u.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-extrabold">
                      {u.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500">{u.lastLogin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </AdminLayout>
  );
}
