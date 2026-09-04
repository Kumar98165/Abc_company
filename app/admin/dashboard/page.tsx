"use client";

import React from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export default function DashboardPage() {
  return (
    <AdminLayout pageTitle="Dashboard Overview">
      <AdminDashboard />
    </AdminLayout>
  );
}
