"use client";

import React, { useState } from "react";
import { InsightArticle, ContentType, InsightCategory } from "../types";

interface AdminInsightEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (article: InsightArticle) => void;
}

export function AdminInsightEditorModal({ isOpen, onClose, onSave }: AdminInsightEditorModalProps) {
  const [contentType, setContentType] = useState<ContentType>("Company Program");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState<InsightCategory>("COMPANY PROGRAMS");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState("/images/life-at-team-conference.jpg");
  const [contentRaw, setContentRaw] = useState("");
  const [tagsRaw, setTagsRaw] = useState("Company Program, Innovation, AI");
  const [authorName, setAuthorName] = useState("Engineering Leadership");
  const [authorRole, setAuthorRole] = useState("Innovation Council");
  const [status, setStatus] = useState<"Draft" | "Published" | "Scheduled">("Published");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");

  // Specialized fields for Company Program / Innovation
  const [programName, setProgramName] = useState("");
  const [objective, setObjective] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [benefitsRaw, setBenefitsRaw] = useState("");

  // Specialized fields for Technology Update
  const [techName, setTechName] = useState("");
  const [whatChanged, setWhatChanged] = useState("");
  const [whyItMatters, setWhyItMatters] = useState("");
  const [businessImpact, setBusinessImpact] = useState("");
  const [technicalPerspective, setTechnicalPerspective] = useState("");

  // Specialized fields for Event
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [takeawaysRaw, setTakeawaysRaw] = useState("");

  // Specialized fields for Case Study
  const [projectName, setProjectName] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [outcome, setOutcome] = useState("");

  if (!isOpen) return null;

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slug) {
      setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !excerpt) {
      alert("Please fill in required fields (*)");
      return;
    }

    const newArticle: InsightArticle = {
      id: "insight-" + Date.now(),
      slug,
      title,
      excerpt,
      contentType,
      category,
      image: image || "/images/life-at-team-conference.jpg",
      author: {
        name: authorName,
        role: authorRole,
      },
      publishedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      readTime: "5 min read",
      status,
      tags: tagsRaw.split(",").map((t) => t.trim()).filter(Boolean),
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || excerpt,
      content: contentRaw.split("\n\n").filter(Boolean),
      ...((contentType === "Company Program" || contentType === "Innovation") && {
        programDetails: {
          programName: programName || title,
          objective,
          targetAudience,
          keyBenefits: benefitsRaw.split("\n").filter(Boolean),
        },
      }),
      ...(contentType === "Technology Update" && {
        techUpdateDetails: {
          technologyName: techName || title,
          whatChanged,
          whyItMatters,
          businessImpact,
          technicalPerspective,
        },
      }),
      ...(contentType === "Event" && {
        eventDetails: {
          eventName: eventName || title,
          date: eventDate || "Upcoming",
          location: eventLocation || "Innovation Hub",
          keyTakeaways: takeawaysRaw.split("\n").filter(Boolean),
        },
      }),
      ...(contentType === "Case Study" && {
        caseStudyDetails: {
          projectName: projectName || title,
          challenge,
          solution,
          technology: tagsRaw.split(",").map((t) => t.trim()).filter(Boolean),
          implementation: contentRaw,
          outcome,
        },
      }),
    };

    onSave(newArticle);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-[32px] border border-[#EAE3D9] max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
              ADMIN CONTENT MANAGEMENT STUDIO
            </span>
            <h2 className="text-xl font-extrabold text-[#0F172A]">
              Create / Post New Insight or Company Program
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF8F5] text-[#0F172A] border border-[#EAE3D9] hover:bg-[#FF5F00] hover:text-white font-extrabold text-xs transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-xs text-[#0F172A]">
          {/* CONTENT TYPE SELECTOR */}
          <div>
            <label className="block font-extrabold uppercase tracking-wider mb-1">
              Content Type *
            </label>
            <select
              value={contentType}
              onChange={(e) => {
                const val = e.target.value as ContentType;
                setContentType(val);
                if (val === "Company Program" || val === "Innovation") {
                  setCategory("COMPANY PROGRAMS");
                }
              }}
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] p-3 font-bold text-xs outline-none focus:border-[#FF5F00]"
            >
              <option value="Company Program">Company Program</option>
              <option value="Innovation">Innovation Initiative</option>
              <option value="Blog">Blog</option>
              <option value="Technology Update">Technology Update</option>
              <option value="Engineering Deep Dive">Engineering Deep Dive</option>
              <option value="Event">Event</option>
              <option value="Company News">Company News</option>
              <option value="Case Study">Case Study</option>
              <option value="Announcement">Announcement</option>
            </select>
          </div>

          {/* TITLE & SLUG */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-extrabold uppercase tracking-wider mb-1">
                Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. AI Innovation Incubator Program"
                className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] p-3 text-xs outline-none focus:border-[#FF5F00]"
              />
            </div>

            <div>
              <label className="block font-extrabold uppercase tracking-wider mb-1">
                Slug (URL) *
              </label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="ai-innovation-incubator-program"
                className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] p-3 text-xs outline-none focus:border-[#FF5F00]"
              />
            </div>
          </div>

          {/* CATEGORY & STATUS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-extrabold uppercase tracking-wider mb-1">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as InsightCategory)}
                className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] p-3 font-bold text-xs outline-none focus:border-[#FF5F00]"
              >
                <option value="COMPANY PROGRAMS">COMPANY PROGRAMS</option>
                <option value="AI & ML">AI & ML</option>
                <option value="ENGINEERING">ENGINEERING</option>
                <option value="CLOUD & DEVOPS">CLOUD & DEVOPS</option>
                <option value="WEB">WEB</option>
                <option value="MOBILE">MOBILE</option>
                <option value="PRODUCT">PRODUCT</option>
                <option value="COMPANY">COMPANY</option>
                <option value="EVENTS">EVENTS</option>
                <option value="CASE STUDIES">CASE STUDIES</option>
              </select>
            </div>

            <div>
              <label className="block font-extrabold uppercase tracking-wider mb-1">
                Publish Status *
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] p-3 font-bold text-xs outline-none focus:border-[#FF5F00]"
              >
                <option value="Published">Published Now</option>
                <option value="Draft">Draft</option>
                <option value="Scheduled">Scheduled</option>
              </select>
            </div>
          </div>

          {/* EXCERPT */}
          <div>
            <label className="block font-extrabold uppercase tracking-wider mb-1">
              Short Description / Excerpt *
            </label>
            <textarea
              required
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary of the program or innovation initiative..."
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] p-3 text-xs outline-none focus:border-[#FF5F00]"
            />
          </div>

          {/* COMPANY PROGRAM FIELDS */}
          {(contentType === "Company Program" || contentType === "Innovation") && (
            <div className="rounded-2xl border border-[#FFE2CC] bg-[#FFF4EC] p-4 space-y-3">
              <h4 className="font-extrabold text-[#FF5F00] uppercase tracking-wider text-[11px]">
                🚀 Company Program Details
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold mb-1">Target Audience</label>
                  <input
                    type="text"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="Senior Engineers & Tech Leads"
                    className="w-full rounded-xl border border-[#E8E0D8] bg-white p-2.5 text-xs outline-none focus:border-[#FF5F00]"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Objective</label>
                  <input
                    type="text"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="Accelerate experimental AI research into core products."
                    className="w-full rounded-xl border border-[#E8E0D8] bg-white p-2.5 text-xs outline-none focus:border-[#FF5F00]"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold mb-1">Program Benefits (One per line)</label>
                <textarea
                  rows={3}
                  value={benefitsRaw}
                  onChange={(e) => setBenefitsRaw(e.target.value)}
                  placeholder="Benefit 1&#10;Benefit 2&#10;Benefit 3"
                  className="w-full rounded-xl border border-[#E8E0D8] bg-white p-2.5 text-xs outline-none focus:border-[#FF5F00]"
                />
              </div>
            </div>
          )}

          {/* MAIN ARTICLE CONTENT */}
          <div>
            <label className="block font-extrabold uppercase tracking-wider mb-1">
              Main Details & Content
            </label>
            <textarea
              rows={4}
              value={contentRaw}
              onChange={(e) => setContentRaw(e.target.value)}
              placeholder="Detailed description of the program..."
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] p-3 text-xs outline-none focus:border-[#FF5F00]"
            />
          </div>

          {/* TAGS & AUTHOR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-extrabold uppercase tracking-wider mb-1">
                Tags (Comma separated)
              </label>
              <input
                type="text"
                value={tagsRaw}
                onChange={(e) => setTagsRaw(e.target.value)}
                placeholder="Company Program, Innovation, AI"
                className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] p-3 text-xs outline-none focus:border-[#FF5F00]"
              />
            </div>

            <div>
              <label className="block font-extrabold uppercase tracking-wider mb-1">
                Author Role
              </label>
              <input
                type="text"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                placeholder="Innovation Council Lead"
                className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] p-3 text-xs outline-none focus:border-[#FF5F00]"
              />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#F1F5F9]">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#EAE3D9] bg-white px-6 py-2.5 text-xs font-extrabold text-[#0F172A] hover:bg-[#FAF8F5] transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-[#FF5F00] px-7 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
            >
              Publish Program / Insight →
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
