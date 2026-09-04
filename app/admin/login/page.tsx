"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/components/admin/AdminContext";

export default function AdminLoginPage() {
  const { login } = useAdmin();
  const router = useRouter();

  const [email, setEmail] = useState("admin@company.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid administrative credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full rounded-[32px] border border-slate-800 bg-[#1E293B] p-8 space-y-6 shadow-2xl">
        
        <div className="text-center space-y-2">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5F00] text-white text-2xl font-bold shadow-lg shadow-orange-500/20">
            ✦
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5F00]">
            SECURE ENTERPRISE CMS
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight">Admin Portal Sign In</h1>
          <p className="text-xs text-slate-400">Authorized personnel access only.</p>
        </div>

        {error && (
          <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-center text-xs text-red-400 font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold uppercase tracking-wider text-slate-300 mb-1">
              Admin Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@company.com"
              className="w-full rounded-xl border border-slate-700 bg-[#0F172A] p-3 text-white outline-none focus:border-[#FF5F00]"
            />
          </div>

          <div>
            <label className="block font-bold uppercase tracking-wider text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-700 bg-[#0F172A] p-3 text-white outline-none focus:border-[#FF5F00]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#FF5F00] py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-lg shadow-orange-500/30 mt-2"
          >
            Sign In to Dashboard →
          </button>
        </form>

        <div className="pt-4 border-t border-slate-800 text-center text-[10px] text-slate-500">
          <p>Protected by Role-Based Access Control (RBAC) & SSL Encryption.</p>
        </div>

      </div>
    </div>
  );
}
