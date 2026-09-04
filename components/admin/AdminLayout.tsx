"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAdmin } from "./AdminContext";

interface AdminLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export function AdminLayout({ children, pageTitle }: AdminLayoutProps) {
  const { isAuthenticated, currentUser, logout, notifications, markNotificationRead, applications, enquiries } = useAdmin();
  const pathname = usePathname();
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [globalSearch, setGlobalSearch] = useState("");
  const [searchResults, setSearchResults] = useState<{ title: string; type: string; href: string }[]>([]);

  // Auth redirect check
  useEffect(() => {
    if (!isAuthenticated && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [isAuthenticated, pathname, router]);

  // Global Search logic
  useEffect(() => {
    if (!globalSearch.trim()) {
      setSearchResults([]);
      return;
    }
    const q = globalSearch.toLowerCase();
    const results: { title: string; type: string; href: string }[] = [];

    // Search applications
    applications.forEach((app) => {
      if (app.candidateName.toLowerCase().includes(q) || app.appliedPosition.toLowerCase().includes(q)) {
        results.push({ title: `${app.candidateName} (${app.appliedPosition})`, type: "Application", href: "/admin/applications" });
      }
    });

    // Search enquiries
    enquiries.forEach((enq) => {
      if (enq.company.toLowerCase().includes(q) || enq.name.toLowerCase().includes(q) || enq.service.toLowerCase().includes(q)) {
        results.push({ title: `${enq.company} - ${enq.name}`, type: "Enquiry", href: "/admin/enquiries" });
      }
    });

    setSearchResults(results.slice(0, 5));
  }, [globalSearch, applications, enquiries]);

  if (!isAuthenticated && pathname !== "/admin/login") {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center text-white">
        <p className="text-sm font-semibold animate-pulse">Redirecting to Admin Portal...</p>
      </div>
    );
  }

  const unreadNotifsCount = notifications.filter((n) => !n.read).length;

  const sidebarNavGroups = [
    {
      group: "MAIN",
      items: [{ label: "Dashboard", href: "/admin/dashboard", icon: "📊" }],
    },
    {
      group: "CONTENT",
      items: [
        { label: "Insights", href: "/admin/insights", icon: "✍️" },
        { label: "Services", href: "/admin/services", icon: "🛠️" },
        { label: "Technologies", href: "/admin/technologies", icon: "⚡" },
        { label: "Case Studies", href: "/admin/case-studies", icon: "💼" },
        { label: "Team", href: "/admin/team", icon: "👥" },
        { label: "Testimonials", href: "/admin/testimonials", icon: "⭐" },
      ],
    },
    {
      group: "CAREERS",
      items: [
        { label: "Open Positions", href: "/admin/jobs", icon: "💼" },
        { label: "Applications", href: "/admin/applications", icon: "📄", badge: applications.filter(a => a.status === "New").length },
        { label: "Talent Network", href: "/admin/talent-network", icon: "🌐" },
      ],
    },
    {
      group: "BUSINESS",
      items: [{ label: "Contact Enquiries", href: "/admin/enquiries", icon: "📥", badge: enquiries.filter(e => e.status === "New").length }],
    },
    {
      group: "MEDIA",
      items: [{ label: "Media Library", href: "/admin/media", icon: "🖼️" }],
    },
    {
      group: "ANALYTICS",
      items: [{ label: "Website Analytics", href: "/admin/analytics", icon: "📈" }],
    },
    {
      group: "SYSTEM",
      items: [
        { label: "Admin Users", href: "/admin/users", icon: "🛡️" },
        { label: "Activity Logs", href: "/admin/activity", icon: "📋" },
        { label: "Settings", href: "/admin/settings", icon: "⚙️" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      
      {/* TOP HEADER */}
      <header className="h-16 border-b border-[#E2E8F0] bg-white sticky top-0 z-30 px-4 sm:px-6 flex items-center justify-between shadow-2xs">
        {/* Left: Mobile hamburger & Page Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            ☰
          </button>
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-2 text-slate-500 hover:bg-slate-100 rounded-lg text-xs font-bold"
            title="Toggle Sidebar"
          >
            {collapsed ? "⏩" : "⏪"}
          </button>
          <h1 className="text-base sm:text-lg font-extrabold text-[#0F172A] tracking-tight">
            {pageTitle}
          </h1>
        </div>

        {/* Right: Search, Notifications, Profile */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* SEARCH FIELD WITH POPUP RESULTS */}
          <div className="relative hidden sm:block w-64">
            <input
              type="text"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Search admin..."
              className="w-full rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-1.5 text-xs text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#FF5F00] focus:bg-white"
            />
            {searchResults.length > 0 && (
              <div className="absolute top-10 left-0 right-0 bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-2 z-50 animate-in fade-in">
                <span className="text-[10px] font-extrabold text-[#94A3B8] px-3 uppercase tracking-wider block mb-1">Search Results</span>
                {searchResults.map((res, i) => (
                  <Link
                    key={i}
                    href={res.href}
                    onClick={() => setGlobalSearch("")}
                    className="flex items-center justify-between px-3 py-2 text-xs font-bold text-[#0F172A] hover:bg-[#FFF4EC] hover:text-[#FF5F00] rounded-xl transition"
                  >
                    <span className="truncate">{res.title}</span>
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">{res.type}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* NOTIFICATIONS BELL */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition cursor-pointer"
            >
              🔔
              {unreadNotifsCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF5F00] text-[9px] font-extrabold text-white">
                  {unreadNotifsCount}
                </span>
              )}
            </button>

            {/* NOTIFICATIONS DROPDOWN */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl p-4 z-50 space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">Notifications</h3>
                  <span className="text-[10px] font-bold text-[#FF5F00]">{unreadNotifsCount} Unread</span>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => markNotificationRead(n.id)}
                      className={`p-2.5 rounded-xl border text-xs cursor-pointer transition ${
                        n.read ? "bg-white border-slate-100 text-slate-500" : "bg-[#FFF9F4] border-[#FFE2CC] text-[#0F172A] font-bold"
                      }`}
                    >
                      <p className="text-[11px] font-extrabold text-[#FF5F00]">{n.title}</p>
                      <p className="text-[10.5px] leading-snug">{n.message}</p>
                      <span className="text-[9px] text-slate-400 block mt-1">{n.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ADMIN PROFILE */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-1.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
            >
              <div className="h-8 w-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-xs font-extrabold border border-[#FF5F00]">
                {currentUser?.name ? currentUser.name.charAt(0) : "A"}
              </div>
              <span className="hidden md:block text-xs font-extrabold text-[#0F172A]">{currentUser?.name || "Admin"}</span>
              <span className="text-xs text-slate-400">▼</span>
            </button>

            {/* PROFILE MENU DROPDOWN */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl p-2 z-50 text-xs font-bold text-[#0F172A] space-y-1 animate-in fade-in">
                <div className="px-3 py-2 border-b border-slate-100">
                  <p className="text-xs font-extrabold">{currentUser?.name}</p>
                  <p className="text-[10px] text-[#FF5F00] font-bold">{currentUser?.role}</p>
                </div>
                <Link href="/admin/settings" className="block px-3 py-2 hover:bg-slate-50 rounded-xl">
                  Account Settings
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="w-full text-left px-3 py-2 hover:bg-red-50 text-red-600 rounded-xl transition cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* SIDEBAR NAVIGATION */}
        <aside
          className={`bg-[#0F172A] text-slate-300 border-r border-slate-800 transition-all duration-300 flex flex-col justify-between z-20 ${
            collapsed ? "w-16" : "w-64"
          } hidden lg:flex`}
        >
          <div className="py-4 space-y-6 overflow-y-auto px-3 max-h-[calc(100vh-4rem)]">
            
            {/* BRAND BADGE */}
            <div className={`flex items-center gap-3 px-2 pb-2 border-b border-slate-800 ${collapsed ? "justify-center" : ""}`}>
              <div className="h-8 w-8 rounded-lg bg-[#FF5F00] flex items-center justify-center text-white font-extrabold text-xs shrink-0">
                ✦
              </div>
              {!collapsed && (
                <div>
                  <p className="text-xs font-extrabold text-white tracking-wider uppercase">ENTERPRISE CMS</p>
                  <p className="text-[9px] text-slate-400">Admin Control Panel</p>
                </div>
              )}
            </div>

            {/* NAV GROUPS */}
            {sidebarNavGroups.map((grp) => (
              <div key={grp.group} className="space-y-1">
                {!collapsed && (
                  <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-slate-500 px-3 block mb-1">
                    {grp.group}
                  </span>
                )}

                {grp.items.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-extrabold transition cursor-pointer ${
                        isActive
                          ? "bg-[#FF5F00] text-white shadow-md shadow-orange-500/20"
                          : "hover:bg-slate-800 text-slate-300 hover:text-white"
                      }`}
                      title={collapsed ? item.label : undefined}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm">{item.icon}</span>
                        {!collapsed && <span>{item.label}</span>}
                      </div>

                      {!collapsed && item.badge ? (
                        <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-[9px] font-extrabold text-orange-400 border border-orange-500/30">
                          {item.badge}
                        </span>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* SIDEBAR FOOTER */}
          {!collapsed && (
            <div className="p-4 border-t border-slate-800 text-[10px] text-slate-500 text-center">
              <p>v2.4 Enterprise SaaS CMS</p>
            </div>
          )}
        </aside>

        {/* MOBILE DRAWER */}
        {mobileOpen && (
          <div className="fixed inset-0 z-40 bg-black/60 lg:hidden flex">
            <div className="bg-[#0F172A] w-64 p-4 text-slate-300 space-y-6 overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-extrabold text-white">ADMIN NAVIGATION</span>
                <button onClick={() => setMobileOpen(false)} className="text-xs text-slate-400">✕</button>
              </div>

              {sidebarNavGroups.map((grp) => (
                <div key={grp.group} className="space-y-1">
                  <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">{grp.group}</span>
                  {grp.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      {item.badge ? (
                        <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-[9px] text-orange-400">{item.badge}</span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
          {children}
        </main>

      </div>
    </div>
  );
}
