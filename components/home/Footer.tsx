"use client";

import { siteConfig } from "@/data/home";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email address is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setIsSubscribed(true);
    setEmail("");
  };

  const handleUnimplementedClick = (e: React.MouseEvent, label: string) => {
    const isSpecialLink = label.toLowerCase().includes("privacy") || label.toLowerCase().includes("terms") || label.toLowerCase().includes("cookie");
    if (isSpecialLink) {
      e.preventDefault();
      alert(`✨ The "${label}" section is under development. Stay tuned for updates!`);
    }
  };

  return (
    <footer className="bg-[#1C1410] text-white border-t border-[#FF5F00]/20">
      <div className="section-shell pb-12 pt-20">
        {/* Top: Brand info and Newsletter */}
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.5fr_1.5fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm font-semibold tracking-[0.28em] text-white">
                {siteConfig.shortName}
              </span>
              <div>
                <p className="text-lg font-bold tracking-tight text-white">{siteConfig.name}</p>
                <p className="text-[10px] uppercase font-bold tracking-[0.24em] text-[#FF5F00]">Software Engineering</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#B09A8A]">
              Building reliable enterprise products, scalable cloud backends, and cognitive artificial intelligence integrations matching modern industry security standards.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8 space-y-4">
            <h3 className="text-base font-bold text-white">Subscribe to Tech Insights</h3>
            <p className="text-xs text-[#B09A8A]">
              Receive monthly digests detailing microservice architectures, AI deployment frameworks, and cloud engineering best practices. No spam.
            </p>
            {isSubscribed ? (
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-xs text-emerald-400 font-semibold animate-in fade-in duration-200">
                🎉 Successfully subscribed! Check your inbox soon for confirmation.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="Enter your work email"
                    className="flex-1 rounded-md border border-white/10 bg-white/5 px-4.5 py-3 text-xs text-white placeholder-[#7A6A5A] transition focus:border-[#FF5F00] outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#FF5F00] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#e65400] cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
                {error && <p className="text-[10px] font-semibold text-red-400">{error}</p>}
              </form>
            )}
          </div>
        </div>

        <div className="grid gap-10 py-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-white/10">
          {/* Column 1: Company */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF5F00]">Company</h3>
            <ul className="space-y-2.5 text-xs text-[#B09A8A]">
              <li><a href="/#about" className="transition-colors hover:text-[#FF5F00]">About Us</a></li>
              <li><a href="/#about" className="transition-colors hover:text-[#FF5F00]">Our Team</a></li>
              <li><a href="/careers" className="transition-colors hover:text-[#FF5F00]">Careers</a></li>
              <li><a href="/contact" className="transition-colors hover:text-[#FF5F00]">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF5F00]">Services</h3>
            <ul className="space-y-2.5 text-xs text-[#B09A8A]">
              <li><a href="/services?filter=software" className="transition-colors hover:text-[#FF5F00]">Software Development</a></li>
              <li><a href="/services?filter=software" className="transition-colors hover:text-[#FF5F00]">Web Development</a></li>
              <li><a href="/services?filter=software" className="transition-colors hover:text-[#FF5F00]">Mobile Development</a></li>
              <li><a href="/services?filter=ai" className="transition-colors hover:text-[#FF5F00]">AI & ML</a></li>
              <li><a href="/services?filter=cloud" className="transition-colors hover:text-[#FF5F00]">Cloud & DevOps</a></li>
              <li><a href="/services?filter=design" className="transition-colors hover:text-[#FF5F00]">UI/UX</a></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF5F00]">Solutions</h3>
            <ul className="space-y-2.5 text-xs text-[#B09A8A]">
              <li><a href="/services?filter=software" className="transition-colors hover:text-[#FF5F00]">CRM</a></li>
              <li><a href="/services?filter=software" className="transition-colors hover:text-[#FF5F00]">ERP</a></li>
              <li><a href="/services?filter=software" className="transition-colors hover:text-[#FF5F00]">SaaS</a></li>
              <li><a href="/services?filter=software" className="transition-colors hover:text-[#FF5F00]">E-Commerce</a></li>
              <li><a href="/services?filter=automation" className="transition-colors hover:text-[#FF5F00]">Automation</a></li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF5F00]">Industries</h3>
            <ul className="space-y-2.5 text-xs text-[#B09A8A]">
              <li><a href="/industries#healthcare" className="transition-colors hover:text-[#FF5F00]">Healthcare</a></li>
              <li><a href="/industries#fintech" className="transition-colors hover:text-[#FF5F00]">FinTech</a></li>
              <li><a href="/industries#manufacturing" className="transition-colors hover:text-[#FF5F00]">Manufacturing</a></li>
              <li><a href="/industries#logistics" className="transition-colors hover:text-[#FF5F00]">Logistics</a></li>
              <li><a href="/industries#education" className="transition-colors hover:text-[#FF5F00]">Education</a></li>
            </ul>
          </div>

          {/* Column 5: Resources & Socials */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF5F00]">Resources</h3>
            <ul className="space-y-2.5 text-xs text-[#B09A8A]">
              <li><a href="/#case-studies" className="transition-colors hover:text-[#FF5F00]">Case Studies</a></li>
              <li><a href="/insights" className="transition-colors hover:text-[#FF5F00]">Insights</a></li>
              <li><a href="/technology" className="transition-colors hover:text-[#FF5F00]">Technology</a></li>
              <li><a href="/#faq" className="transition-colors hover:text-[#FF5F00]">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Panel: Legal, Social icons and Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-10 text-xs text-[#7A6A5A]">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="#privacy" onClick={(e) => handleUnimplementedClick(e, "Privacy Policy")} className="hover:text-[#FF5F00] transition">Privacy Policy</a>
            <a href="#terms" onClick={(e) => handleUnimplementedClick(e, "Terms & Conditions")} className="hover:text-[#FF5F00] transition">Terms & Conditions</a>
            <a href="#cookies" onClick={(e) => handleUnimplementedClick(e, "Cookie Policy")} className="hover:text-[#FF5F00] transition">Cookie Policy</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-white/5 flex items-center justify-center text-[#B09A8A] hover:bg-[#FF5F00] hover:text-white transition"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-white/5 flex items-center justify-center text-[#B09A8A] hover:bg-[#FF5F00] hover:text-white transition"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-white/5 flex items-center justify-center text-[#B09A8A] hover:bg-[#FF5F00] hover:text-white transition"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-white/5 flex items-center justify-center text-[#B09A8A] hover:bg-[#FF5F00] hover:text-white transition"
              aria-label="X"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-[10px] text-slate-600">
          <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
