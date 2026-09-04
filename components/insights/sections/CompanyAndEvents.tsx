import React from "react";
import Link from "next/link";
import { InsightArticle } from "../types";

interface CompanyAndEventsProps {
  articles: InsightArticle[];
}

export function CompanyAndEvents({ articles }: CompanyAndEventsProps) {
  const teamItems = articles.filter(
    (a) => a.contentType === "Event" || a.contentType === "Company News" || a.contentType === "Announcement"
  ).slice(0, 3);

  if (teamItems.length === 0) return null;

  return (
    <section className="bg-[#FFFBF7] py-12 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            FROM OUR TEAM
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Company News, Events & Workshops
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Highlights from our team's tech events, engineering workshops, company announcements, and key learnings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {teamItems.map((item) => {
            const isEvent = item.contentType === "Event";
            const eventDet = item.eventDetails;

            return (
              <div
                key={item.id}
                className="group rounded-[28px] border border-[#EAE3D9] bg-white p-6 shadow-2xs hover:border-[#FF5F00] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                      {item.contentType}
                    </span>
                    <span className="text-[11px] font-bold text-[#64748B]">{item.publishedAt}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#FF5F00] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.excerpt}
                  </p>

                  {isEvent && eventDet && (
                    <div className="rounded-xl bg-[#FAF8F5] p-3 text-[11px] font-extrabold text-[#0F172A] space-y-1">
                      <p className="text-[#FF5F00]">📍 {eventDet.location}</p>
                      <p className="text-[#64748B]">📅 Date: {eventDet.date}</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#F1F5F9] mt-4">
                  <Link
                    href={`/insights/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-[#FF5F00] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
