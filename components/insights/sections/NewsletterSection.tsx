"use client";

import React, { useState } from "react";
import Link from "next/link";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-[#FFFBF7] py-12 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* NEWSLETTER BOX */}
        <div className="rounded-[32px] border border-[#FFE2CC] bg-gradient-to-r from-[#FFF4EC] via-white to-[#FFF4EC] p-8 sm:p-10 shadow-xs max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-white px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            STAY AHEAD OF WHAT'S NEXT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Engineering & AI Perspectives Delivered
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-lg mx-auto leading-relaxed">
            Get occasional insights on AI, software architecture, cloud infrastructure, and digital product development from our team.
          </p>

          {submitted ? (
            <div className="rounded-2xl bg-white border border-[#FFE2CC] p-4 text-xs font-extrabold text-[#FF5F00] animate-in fade-in max-w-md mx-auto">
              ✓ Thank you for subscribing! You will receive our latest technical insights.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full rounded-full border border-[#E8E0D8] bg-white px-5 py-3 text-xs text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#FF5F00]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 rounded-full bg-[#FF5F00] px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
              >
                Subscribe →
              </button>
            </form>
          )}
        </div>

        {/* FINAL CONVERSION CTA */}
        <div className="rounded-[32px] bg-[#0F172A] p-8 sm:p-10 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold">
              BUILD SOMETHING GREAT
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              Have a technology challenge or product idea? Let's talk about how we can help turn it into reality.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-[#FF5F00] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-lg shadow-orange-500/30"
          >
            Talk to Our Team →
          </Link>
        </div>

      </div>
    </section>
  );
}
