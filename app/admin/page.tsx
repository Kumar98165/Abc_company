"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/components/admin/AdminContext";

export default function AdminRootPage() {
  const { isAuthenticated } = useAdmin();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login");
    } else {
      router.push("/admin/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center text-white">
      <div className="text-center space-y-2">
        <div className="h-10 w-10 mx-auto rounded-full bg-[#FF5F00] flex items-center justify-center text-white font-bold animate-spin">
          ✦
        </div>
        <p className="text-xs font-semibold text-slate-300">Checking Administrative Permissions...</p>
      </div>
    </div>
  );
}
