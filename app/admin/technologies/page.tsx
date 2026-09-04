"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAdmin } from "@/components/admin/AdminContext";

export interface TechCardItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "AI / ML" | "Database" | "Cloud & DevOps" | "DevOps" | "Mobile";
  logoIcon: string;
  description: string;
  status: "Published" | "Draft";
  colorGradient?: string;
}

const initialTechStack: TechCardItem[] = [
  { id: "t1", name: "React / Next.js", category: "Frontend", logoIcon: "⚛️", description: "Enterprise SSR & CSR web applications with TypeScript and Server Components.", status: "Published" },
  { id: "t2", name: "Python / PyTorch", category: "AI / ML", logoIcon: "🐍", description: "Generative AI, LangChain, RAG vector indexing, and model evaluation pipelines.", status: "Published" },
  { id: "t3", name: "Java / Spring Boot", category: "Backend", logoIcon: "☕", description: "High-throughput financial microservices and scalable enterprise backend APIs.", status: "Published" },
  { id: "t4", name: "PostgreSQL", category: "Database", logoIcon: "🐘", description: "Relational database clustering, pgvector embeddings, and automated partitioning.", status: "Published" },
  { id: "t5", name: "Kubernetes & AWS", category: "Cloud & DevOps", logoIcon: "☁️", description: "Multi-region elastic cloud orchestration and IaC Terraform deployment automation.", status: "Published" },
  { id: "t6", name: "Docker & CI/CD", category: "DevOps", logoIcon: "🐳", description: "Zero-downtime automated deployment pipelines, containerization, and security.", status: "Published" },
];

const categoryColors: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  Frontend: { bg: "bg-[#F0F5FF]", text: "text-[#3B82F6]", border: "border-[#DBEAFE]", iconBg: "from-[#6366F1]/10 to-[#3B82F6]/10" },
  "AI / ML": { bg: "bg-[#ECFDF5]", text: "text-[#10B981]", border: "border-[#A7F3D0]", iconBg: "from-[#10B981]/10 to-[#059669]/10" },
  Backend: { bg: "bg-[#FAF5FF]", text: "text-[#8B5CF6]", border: "border-[#E9D5FF]", iconBg: "from-[#8B5CF6]/10 to-[#7C3AED]/10" },
  Database: { bg: "bg-[#FFF7ED]", text: "text-[#F97316]", border: "border-[#FFEDD5]", iconBg: "from-[#F97316]/10 to-[#EA580C]/10" },
  "Cloud & DevOps": { bg: "bg-[#F0FDFA]", text: "text-[#0D9488]", border: "border-[#CCFBF1]", iconBg: "from-[#0D9488]/10 to-[#0891B2]/10" },
  DevOps: { bg: "bg-[#F0F9FF]", text: "text-[#0284C7]", border: "border-[#BAE6FD]", iconBg: "from-[#0284C7]/10 to-[#0369A1]/10" },
  Mobile: { bg: "bg-[#FDF2F8]", text: "text-[#DB2777]", border: "border-[#FBCFE8]", iconBg: "from-[#DB2777]/10 to-[#E11D48]/10" },
};

const categoryTabs = ["ALL", "Frontend", "Backend", "AI / ML", "Database", "Cloud & DevOps", "DevOps"];

export default function AdminTechnologiesPage() {
  const { addActivityLog } = useAdmin();
  const [techList, setTechList] = useState<TechCardItem[]>(initialTechStack);
  const [activeTab, setActiveTab] = useState("ALL");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTech, setEditingTech] = useState<TechCardItem | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [category, setCategory] = useState<TechCardItem["category"]>("Frontend");
  const [logoIcon, setLogoIcon] = useState("⚛️");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"Published" | "Draft">("Published");

  // Load saved technology stack from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("admin_technologies_list");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTechList(parsed);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const openCreateModal = () => {
    setEditingTech(null);
    setName("");
    setCategory("Frontend");
    setLogoIcon("⚛️");
    setDescription("");
    setStatus("Published");
    setIsModalOpen(true);
  };

  const openEditModal = (tech: TechCardItem) => {
    setEditingTech(tech);
    setName(tech.name);
    setCategory(tech.category);
    setLogoIcon(tech.logoIcon);
    setDescription(tech.description);
    setStatus(tech.status || "Published");
    setIsModalOpen(true);
  };

  const handleSaveTechnology = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Please fill in required fields (*)");
      return;
    }

    if (editingTech) {
      // Edit existing
      const updated = techList.map((t) =>
        t.id === editingTech.id
          ? { ...t, name, category, logoIcon, description, status }
          : t
      );
      setTechList(updated);
      localStorage.setItem("admin_technologies_list", JSON.stringify(updated));
      addActivityLog("Updated technology stack item", `${name} (${category})`);
    } else {
      // Create new
      const newTech: TechCardItem = {
        id: "tech-" + Date.now(),
        name,
        category,
        logoIcon: logoIcon || "⚡",
        description,
        status,
      };
      const updated = [newTech, ...techList];
      setTechList(updated);
      localStorage.setItem("admin_technologies_list", JSON.stringify(updated));
      addActivityLog("Added new technology stack item", `${name} (${category})`);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string, techName: string) => {
    if (confirm(`Are you sure you want to delete "${techName}" from the technology registry?`)) {
      const updated = techList.filter((t) => t.id !== id);
      setTechList(updated);
      localStorage.setItem("admin_technologies_list", JSON.stringify(updated));
      addActivityLog("Deleted technology item", techName);
    }
  };

  const filtered = techList.filter((t) => {
    if (activeTab !== "ALL" && t.category !== activeTab) return false;
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      return (
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <AdminLayout pageTitle="Technology Stack Management">
      <div className="space-y-6">
        
        {/* HEADER AREA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5F00]">
              CENTRAL TECH REGISTRY
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
              Central Technology Stack Registry
            </h2>
            <p className="text-xs text-slate-500">
              Manage frontend, backend, database, AI/ML, and cloud technology cards displayed across the company website.
            </p>
          </div>

          <button
            type="button"
            onClick={openCreateModal}
            className="rounded-full bg-[#FF5F00] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-lg shadow-orange-500/20 shrink-0"
          >
            + ADD TECHNOLOGY
          </button>
        </div>

        {/* SEARCH AND CATEGORY FILTER TABS CONTAINER */}
        <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-4 space-y-4 shadow-2xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-80">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search technology, framework or category..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-[#0F172A] outline-none focus:border-[#FF5F00] focus:bg-white"
              />
            </div>

            <div className="text-xs font-bold text-slate-500">
              Active Cards: <span className="text-[#FF5F00] font-extrabold">{filtered.length}</span> / {techList.length}
            </div>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-t border-slate-100">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-extrabold whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? "bg-[#FF5F00] text-white shadow-2xs"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* TECHNOLOGY CARDS GRID */}
        {filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tech) => {
              const style = categoryColors[tech.category] || {
                bg: "bg-slate-50",
                text: "text-slate-700",
                border: "border-slate-200",
                iconBg: "from-slate-100 to-slate-200",
              };

              return (
                <div
                  key={tech.id}
                  className="group rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-2xs hover:border-[#FF5F00] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* ICON & CATEGORY PILL */}
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${style.iconBg} border border-slate-100 text-2xl shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                        {tech.logoIcon}
                      </div>

                      <span className={`rounded-full px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-wider border ${style.bg} ${style.text} ${style.border}`}>
                        {tech.category}
                      </span>
                    </div>

                    {/* TECH TITLE */}
                    <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#FF5F00] transition-colors leading-snug">
                      {tech.name}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {tech.description}
                    </p>
                  </div>

                  {/* BOTTOM ACTION BAR */}
                  <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between text-xs font-extrabold">
                    <span className="flex items-center gap-1.5 text-emerald-600 text-[11px]">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{tech.status || "Published"}</span>
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openEditModal(tech)}
                        className="text-slate-600 hover:text-[#FF5F00] text-[11px] font-extrabold transition cursor-pointer"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(tech.id, tech.name)}
                        className="text-red-500 hover:text-red-700 text-[11px] font-extrabold transition cursor-pointer"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-[28px] border border-slate-200 bg-white p-12 text-center space-y-3">
            <span className="text-3xl block">🔍</span>
            <h3 className="text-base font-extrabold text-[#0F172A]">No technology cards found</h3>
            <p className="text-xs text-slate-500">No tools matched your search query or selected category filter.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveTab("ALL");
              }}
              className="rounded-full bg-[#FF5F00] px-5 py-2 text-xs font-extrabold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* MODAL FORM FOR ADDING / EDITING TECHNOLOGY */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-[32px] border border-[#E2E8F0] max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8 animate-in fade-in">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                    TECH STACK REGISTRY EDITOR
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0F172A]">
                    {editingTech ? `Edit Technology Card` : `Add New Technology Stack Item`}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="h-8 w-8 rounded-full bg-slate-100 text-slate-700 hover:bg-[#FF5F00] hover:text-white font-bold text-xs transition cursor-pointer flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveTechnology} className="space-y-4 text-xs text-[#0F172A]">
                <div>
                  <label className="block font-extrabold uppercase tracking-wider mb-1">
                    Technology Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Go (Golang) or LangChain"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-extrabold uppercase tracking-wider mb-1">
                      Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-bold text-xs outline-none focus:border-[#FF5F00]"
                    >
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend & APIs</option>
                      <option value="AI / ML">AI / ML & Big Data</option>
                      <option value="Database">Database</option>
                      <option value="Cloud & DevOps">Cloud & Infrastructure</option>
                      <option value="DevOps">DevOps & CI/CD</option>
                      <option value="Mobile">Mobile Apps</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-extrabold uppercase tracking-wider mb-1">
                      Icon Emoji or Symbol *
                    </label>
                    <input
                      type="text"
                      required
                      value={logoIcon}
                      onChange={(e) => setLogoIcon(e.target.value)}
                      placeholder="e.g. ⚛️, 🐍, ☕, 🐘, ☁️, 🐳"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
                    />
                  </div>
                </div>

                {/* EMOJI PRESET QUICK SELECT */}
                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  <span className="text-[10px] font-bold text-slate-400">Presets:</span>
                  {["⚛️", "🐍", "☕", "🐘", "☁️", "🐳", "🚀", "🤖", "🎨", "🌐"].map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setLogoIcon(emoji)}
                      className="h-7 w-7 rounded-lg border border-slate-200 bg-slate-50 hover:bg-[#FFF4EC] hover:border-[#FF5F00] flex items-center justify-center text-sm transition cursor-pointer"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block font-extrabold uppercase tracking-wider mb-1">
                    Publish Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-bold text-xs outline-none focus:border-[#FF5F00]"
                  >
                    <option value="Published">Published Now</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>

                <div>
                  <label className="block font-extrabold uppercase tracking-wider mb-1">
                    Description & Key Purpose *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe how your engineering team leverages this framework or tool for enterprise client solutions..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#FF5F00]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full border border-slate-200 px-6 py-2.5 font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-full bg-[#FF5F00] px-7 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
                  >
                    {editingTech ? "Save Changes →" : "Add Technology →"}
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );
}
