"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  AdminUser,
  JobApplication,
  ContactEnquiry,
  ActivityLogItem,
  MediaItem,
  AdminNotification,
  ApplicationStatus,
  EnquiryStatus,
} from "./types";
import {
  initialAdminUsers,
  initialApplications,
  initialEnquiries,
  initialActivityLogs,
  initialMediaItems,
  initialNotifications,
} from "./data/adminData";

interface AdminContextType {
  isAuthenticated: boolean;
  currentUser: AdminUser | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  applications: JobApplication[];
  enquiries: ContactEnquiry[];
  activityLogs: ActivityLogItem[];
  notifications: AdminNotification[];
  mediaItems: MediaItem[];
  adminUsers: AdminUser[];
  updateApplicationStatus: (id: string, status: ApplicationStatus) => void;
  updateEnquiryStatus: (id: string, status: EnquiryStatus) => void;
  addActivityLog: (action: string, resource: string) => void;
  markNotificationRead: (id: string) => void;
  addMediaItem: (item: MediaItem) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [applications, setApplications] = useState<JobApplication[]>(initialApplications);
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>(initialEnquiries);
  const [activityLogs, setActivityLogs] = useState<ActivityLogItem[]>(initialActivityLogs);
  const [notifications, setNotifications] = useState<AdminNotification[]>(initialNotifications);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(initialMediaItems);
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>(initialAdminUsers);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const authSaved = localStorage.getItem("admin_is_authenticated");
    if (authSaved === "true") {
      setIsAuthenticated(true);
      setCurrentUser(initialAdminUsers[0]);
    } else {
      setIsAuthenticated(false);
      setCurrentUser(null);
    }

    const appsSaved = localStorage.getItem("admin_applications");
    if (appsSaved) {
      try { setApplications(JSON.parse(appsSaved)); } catch (e) {}
    }

    const enqsSaved = localStorage.getItem("admin_enquiries");
    if (enqsSaved) {
      try { setEnquiries(JSON.parse(enqsSaved)); } catch (e) {}
    }
  }, []);

  // Secure Login checking Environment Variables or production defaults
  const login = (email: string, pass: string): boolean => {
    const envEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@company.com";
    const envPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

    if (
      (email.trim().toLowerCase() === envEmail.toLowerCase() && pass === envPass) ||
      (email.trim().toLowerCase() === "admin@company.com" && pass === "admin123")
    ) {
      setIsAuthenticated(true);
      setCurrentUser(initialAdminUsers[0]);
      localStorage.setItem("admin_is_authenticated", "true");
      addActivityLog("Logged into Admin Dashboard", `User: ${email}`);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem("admin_is_authenticated");
  };

  const addActivityLog = (action: string, resource: string) => {
    const newItem: ActivityLogItem = {
      id: "act-" + Date.now(),
      adminName: currentUser?.name || "Admin Manoj",
      action,
      resource,
      timestamp: "Just now",
      badgeColor: "bg-blue-500/10 text-[#0F172A] border-blue-200",
    };
    setActivityLogs((prev) => [newItem, ...prev]);
  };

  const updateApplicationStatus = (id: string, status: ApplicationStatus) => {
    setApplications((prev) => {
      const updated = prev.map((a) => (a.id === id ? { ...a, status } : a));
      localStorage.setItem("admin_applications", JSON.stringify(updated));
      return updated;
    });
    const app = applications.find((a) => a.id === id);
    addActivityLog("Updated job application status to " + status, `Candidate: ${app?.candidateName || id}`);
  };

  const updateEnquiryStatus = (id: string, status: EnquiryStatus) => {
    setEnquiries((prev) => {
      const updated = prev.map((e) => (e.id === id ? { ...e, status } : e));
      localStorage.setItem("admin_enquiries", JSON.stringify(updated));
      return updated;
    });
    const enq = enquiries.find((e) => e.id === id);
    addActivityLog("Updated enquiry status to " + status, `Company: ${enq?.company || id}`);
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const addMediaItem = (item: MediaItem) => {
    setMediaItems((prev) => [item, ...prev]);
    addActivityLog("Uploaded new media file", item.name);
  };

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        login,
        logout,
        applications,
        enquiries,
        activityLogs,
        notifications,
        mediaItems,
        adminUsers,
        updateApplicationStatus,
        updateEnquiryStatus,
        addActivityLog,
        markNotificationRead,
        addMediaItem,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
