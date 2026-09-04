"use client";

import { siteConfig } from "@/data/home";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

function LogoMark() {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#DDD4C7] bg-white text-sm font-semibold tracking-[0.28em] text-[#1A1A1A] shadow-sm shadow-[#DDD4C7]/50">
      {siteConfig.shortName}
    </span>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6">
      <span
        className={[
          "absolute left-0 top-0.5 h-0.5 w-6 origin-center rounded-full bg-[#1A1A1A] transition-transform duration-300",
          open ? "translate-y-2 rotate-45" : "translate-y-0",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-2 h-0.5 w-6 rounded-full bg-[#1A1A1A] transition-opacity duration-300",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-3.5 h-0.5 w-6 origin-center rounded-full bg-[#1A1A1A] transition-transform duration-300",
          open ? "-translate-y-1 rotate-[-45deg]" : "translate-y-0",
        ].join(" ")}
      />
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("top");
  const [notification, setNotification] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLAnchorElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = magneticRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
  };

  const handleMouseLeaveMagnetic = () => {
    const el = magneticRef.current;
    if (!el) return;
    el.style.transform = `translate3d(0px, 0px, 0px)`;
  };

  // Close notification automatically after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll detection for sticky design
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 12);
      if (currentScrollY < 50) {
        setActiveSection("top");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll Spy Observer
  useEffect(() => {
    const sections = ["top", "about", "services", "ai-technology", "industries", "case-studies"];
    const observers = sections
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return { id, el };
      })
      .filter(Boolean) as { id: string; el: HTMLElement }[];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observers.forEach(({ el }) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle link clicking
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    const isUnimplementedHash = href.startsWith("#") && (
      label.toLowerCase().includes("our team") ||
      label.toLowerCase().includes("crm") ||
      label.toLowerCase().includes("erp") ||
      label.toLowerCase().includes("saas") ||
      label.toLowerCase().includes("e-commerce") ||
      label.toLowerCase().includes("automation")
    );

    if (isUnimplementedHash) {
      e.preventDefault();
      setNotification(`✨ The "${label}" page is currently under development. Stay tuned for updates!`);
      setActiveDropdown(null);
      setOpen(false);
      return;
    }

    const isHomePage = typeof window !== "undefined" && window.location.pathname === "/";

    // Smooth scroll for hash links when on home page, otherwise redirect to home page with hash
    if (href.startsWith("#")) {
      if (isHomePage) {
        const targetEl = document.getElementById(href.substring(1));
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        e.preventDefault();
        window.location.href = "/" + href;
      }
      setActiveDropdown(null);
      setOpen(false);
    } else if (href.startsWith("/services")) {
      const isServicesPage = typeof window !== "undefined" && window.location.pathname === "/services";
      if (isServicesPage) {
        setTimeout(() => {
          const targetEl = document.getElementById("core-services");
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
      setActiveDropdown(null);
      setOpen(false);
    } else if (href.startsWith("/industries")) {
      const isIndustriesPage = typeof window !== "undefined" && window.location.pathname === "/industries";
      if (isIndustriesPage && href.includes("#")) {
        const hash = href.split("#")[1];
        setTimeout(() => {
          const targetEl = document.getElementById(hash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
      setActiveDropdown(null);
      setOpen(false);
    } else if (href.startsWith("/contact") || href.startsWith("/insights") || href.startsWith("/careers")) {
      setActiveDropdown(null);
      setOpen(false);
    }
  };

  const pathname = usePathname();

  let currentActiveLabel = "";
  if (pathname === "/services") {
    currentActiveLabel = "Services";
  } else if (pathname?.startsWith("/careers")) {
    currentActiveLabel = "Careers";
  } else if (pathname?.startsWith("/insights")) {
    currentActiveLabel = "Insights";
  } else if (pathname === "/technology") {
    currentActiveLabel = "Technology";
  } else if (pathname === "/industries") {
    currentActiveLabel = "Industries";
  } else if (pathname === "/about") {
    currentActiveLabel = "About";
  } else if (pathname === "/case-studies") {
    currentActiveLabel = "Case Studies";
  } else if (pathname === "/contact") {
    currentActiveLabel = "Start a Project";
  } else if (pathname === "/") {
    currentActiveLabel = "Home";
  }

  // Mouse hover event helpers for dropdowns
  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Keyboard Event Handlers
  const handleKeyDown = (e: React.KeyboardEvent, label: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveDropdown(activeDropdown === label ? null : label);
    }
    if (e.key === "Escape") {
      setActiveDropdown(null);
    }
  };

  const wrapperClass = scrolled || open
    ? "border-b border-[#DDD4C7]/80 bg-[#F5EFE6]/95 shadow-[0_16px_50px_rgba(120,80,30,0.08)] backdrop-blur-xl py-2.5 scale-[0.985] lg:scale-[0.99] rounded-lg mx-2 sm:mx-6 mt-2 text-[#1A1A1A]"
    : "border-b border-[#DDD4C7]/50 bg-[#F5EFE6] py-4 scale-100 mt-0 text-[#1A1A1A]";

  return (
    <header className={["fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out", mounted ? "opacity-100" : "opacity-0"].join(" ")} ref={headerRef}>
      <div className={["transition-all duration-300 origin-top", wrapperClass].join(" ")}>
        <div className="section-shell">
          <nav className="flex h-20 items-center justify-between gap-4" aria-label="Primary navigation">
            {/* Logo area */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "Home", "/")}
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00] focus-visible:ring-offset-2 rounded"
            >
              <LogoMark />
              <div className="min-w-0">
                <p className="text-base font-semibold tracking-[-0.02em] text-[#1A1A1A]">{siteConfig.name}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#FF5F00]">Software Engineering</p>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <div className="hidden items-center gap-4 xl:gap-5.5 lg:flex">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown;
                const isActive = currentActiveLabel === item.label;

                if (hasDropdown) {
                  const isOpen = activeDropdown === item.label;
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href={item.href || "#"}
                        onClick={(e) => handleLinkClick(e, item.label, item.href || "#")}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        aria-controls={`dropdown-${item.label.toLowerCase()}`}
                        onKeyDown={(e) => handleKeyDown(e, item.label)}
                        className={[
                          "relative flex items-center gap-1 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00] focus-visible:ring-offset-2 rounded-sm px-1 py-2 cursor-pointer whitespace-nowrap",
                          isActive ? "!text-[#FF5F00]" : "!text-[#3D3D3D] hover:!text-[#FF5F00]",
                        ].join(" ")}
                      >
                        {item.label}
                        <svg
                          className={[
                            "h-3.5 w-3.5 transform transition-transform duration-200",
                            isOpen ? "rotate-180 !text-[#FF5F00]" : "!text-[#9A8A7A] group-hover:!text-[#FF5F00]",
                          ].join(" ")}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-[#FF5F00] rounded-full animate-in fade-in duration-300" />
                        )}
                      </a>

                      {/* Dropdown Menu Container */}
                      <div
                        id={`dropdown-${item.label.toLowerCase()}`}
                        role="menu"
                        aria-label={item.label}
                        className={[
                          "absolute left-0 mt-1.5 w-56 rounded-lg border border-[#DDD4C7] bg-[#FAF6F0] p-2 shadow-xl ring-1 ring-black/5 backdrop-blur-xl transition-all duration-[350ms] ease-out z-50 origin-top-left",
                          isOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                            : "opacity-0 -translate-y-2 pointer-events-none scale-95",
                        ].join(" ")}
                      >
                        <div className="flex flex-col gap-0.5">
                          {item.dropdown?.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              role="menuitem"
                              onClick={(e) => handleLinkClick(e, subItem.label, subItem.href)}
                              className="rounded-md px-3 py-2 text-xs font-semibold !text-[#3D3D3D] transition-all duration-150 hover:bg-[#EADFD4] hover:!text-[#FF5F00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00]"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Regular link
                return (
                  <a
                    key={item.label}
                    href={item.href || "#"}
                    onClick={(e) => handleLinkClick(e, item.label, item.href || "#")}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "relative text-sm font-semibold transition-colors duration-200 hover:!text-[#FF5F00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00] focus-visible:ring-offset-2 rounded-sm px-1 py-2 cursor-pointer whitespace-nowrap",
                      isActive ? "!text-[#FF5F00]" : "!text-[#3D3D3D]",
                    ].join(" ")}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-[#FF5F00] rounded-full animate-in fade-in duration-300" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block shrink-0">
              <a
                ref={magneticRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeaveMagnetic}
                href="/contact"
                onClick={(e) => handleLinkClick(e, "Start a Project", "/contact")}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5F00] px-5 py-2.5 text-xs font-bold uppercase tracking-wider !text-white transition-all duration-200 hover:bg-[#e65400] hover:shadow-lg hover:shadow-orange-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00] focus-visible:ring-offset-2 cursor-pointer whitespace-nowrap"
                style={{ transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)", color: "#ffffff" }}
              >
                Start a Project
              </a>
            </div>

            {/* Mobile Hamburger menu Button */}
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#DDD4C7] bg-[#F5EFE6] text-[#1A1A1A] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00] lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <MenuIcon open={open} />
            </button>
          </nav>

          {/* Mobile Navigation Drawer */}
          <div
            id="mobile-navigation"
            className={[
              "overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
              open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <div className="border-t border-[#DDD4C7] pb-8 pt-4">
              <div className="flex flex-col gap-1 max-h-[70vh] overflow-y-auto pr-1">
                {navItems.map((item) => {
                  const hasDropdown = !!item.dropdown;
                  if (hasDropdown) {
                    const isSectionOpen = activeMobileSection === item.label;
                    return (
                      <div key={item.label} className="border-b border-slate-55 last:border-0 py-1">
                        <button
                          type="button"
                          onClick={() => setActiveMobileSection(isSectionOpen ? null : item.label)}
                          className="flex w-full items-center justify-between px-4 py-2.5 text-base font-semibold text-[#1A1A1A] transition-colors hover:text-[#FF5F00]"
                        >
                          <span>{item.label}</span>
                          <svg
                            className={[
                              "h-4 w-4 transform transition-transform duration-200 text-slate-400",
                              isSectionOpen ? "rotate-180 text-[#FF5F00]" : "",
                            ].join(" ")}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div
                          className={[
                            "overflow-hidden transition-all duration-300 ease-in-out bg-slate-50/60 rounded-md",
                            isSectionOpen ? "max-h-96 py-1.5 opacity-100 bg-[#EDE5D8]/60" : "max-h-0 opacity-0 pointer-events-none",
                          ].join(" ")}
                        >
                          {item.dropdown?.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              onClick={(e) => handleLinkClick(e, subItem.label, subItem.href)}
                              className="block px-8 py-2 text-sm font-semibold text-[#3D3D3D] transition-colors hover:text-[#FF5F00]"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href || "#"}
                      onClick={(e) => handleLinkClick(e, item.label, item.href || "#")}
                      className="rounded-md px-4 py-2.5 text-base font-semibold text-[#1A1A1A] transition-colors hover:bg-[#EDE5D8] hover:text-[#FF5F00]"
                    >
                      {item.label}
                    </a>
                  );
                })}

                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, "Start a Project", "/contact")}
                  className="mx-4 mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5F00] px-4 py-3.5 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#e65400] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00]"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Interactive Notification / Toast for Development Placeholders */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-xl border border-[#DDD4C7] bg-[#FAF6F0]/95 p-4 shadow-2xl backdrop-blur-md ring-1 ring-[#FF5F00]/10 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF5F00]/10 text-[#FF5F00]">
              <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold leading-relaxed text-[#1A1A1A]">{notification}</p>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="rounded p-0.5 text-[#9A8A7A] hover:text-[#FF5F00]"
              aria-label="Close message"
            >
              <svg className="h-3 w-3 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
