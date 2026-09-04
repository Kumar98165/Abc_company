"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";

// Self-contained SVG Icon Components
const SearchIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PlusIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const EditIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

const TrashIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const LinkedinIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const GithubIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const UserIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const BriefcaseIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387M3.75 14.15a2.18 2.18 0 01-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m10.5 0V5.25A2.25 2.25 0 0014.25 3h-4.5A2.25 2.25 0 007.5 5.25v1.286m9 0H7.5" />
  </svg>
);

const MapPinIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const XIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Technology & AI" | "Infrastructure Practice" | "Product UX & Frontend" | "Executive Leadership" | "Security & Cloud";
  bio: string;
  avatarUrl?: string;
  avatarEmoji?: string;
  avatarBg?: string;
  skills: string[];
  experience: string;
  location: string;
  linkedin?: string;
  github?: string;
  email?: string;
  status: "Published" | "Draft";
  order: number;
}

const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm-1",
    name: "Dr. Aris Thorne",
    role: "Principal Systems Architect & AI Lead",
    department: "Technology & AI",
    bio: "Ex-Google DeepMind researcher leading enterprise LLM orchestration, RAG vector indexing pipelines, and high-throughput distributed systems.",
    avatarEmoji: "🧠",
    avatarBg: "from-purple-500 to-indigo-600",
    skills: ["Python", "PyTorch", "LangChain", "Vector Indexing", "C++"],
    experience: "12+ Yrs Exp",
    location: "San Francisco / Remote",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "aris.thorne@company.com",
    status: "Published",
    order: 1,
  },
  {
    id: "tm-2",
    name: "Devon Zhao",
    role: "DevOps & Multi-Cloud Lead",
    department: "Infrastructure Practice",
    bio: "Specializes in zero-downtime Kubernetes deployments, automated Terraform infrastructure-as-code, and AWS/Azure enterprise migrations.",
    avatarEmoji: "⚡",
    avatarBg: "from-cyan-500 to-blue-600",
    skills: ["Kubernetes", "AWS", "Terraform", "Docker", "CI/CD"],
    experience: "10+ Yrs Exp",
    location: "Pune, India (Hybrid)",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "devon.zhao@company.com",
    status: "Published",
    order: 2,
  },
  {
    id: "tm-3",
    name: "Elena Vance",
    role: "Frontend Practice Lead & Design Systems",
    department: "Product UX & Frontend",
    bio: "Pioneer in modern Next.js App Architecture, micro-frontend performance tuning, and accessible component library ecosystems.",
    avatarEmoji: "🎨",
    avatarBg: "from-orange-500 to-amber-600",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    experience: "8+ Yrs Exp",
    location: "Pune, India",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "elena.vance@company.com",
    status: "Published",
    order: 3,
  },
  {
    id: "tm-4",
    name: "Marcus Brody",
    role: "VP of Enterprise Software Engineering",
    department: "Executive Leadership",
    bio: "Drives end-to-end technical strategy, agile engineering execution, and high-security compliance for Tier-1 enterprise clients worldwide.",
    avatarEmoji: "👑",
    avatarBg: "from-emerald-500 to-teal-700",
    skills: ["Enterprise Architecture", "Java", "Microservices", "Security", "Agile"],
    experience: "15+ Yrs Exp",
    location: "London, UK / Remote",
    linkedin: "https://linkedin.com",
    email: "marcus.brody@company.com",
    status: "Published",
    order: 4,
  },
  {
    id: "tm-5",
    name: "Priya Nair",
    role: "Senior AI & Machine Learning Engineer",
    department: "Technology & AI",
    bio: "Focuses on fine-tuning foundational models, prompt evaluation suites, and real-time streaming agentic systems.",
    avatarEmoji: "🤖",
    avatarBg: "from-pink-500 to-rose-600",
    skills: ["Python", "Transformers", "vLLM", "PostgreSQL", "FastAPI"],
    experience: "6+ Yrs Exp",
    location: "Pune, India",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "priya.nair@company.com",
    status: "Published",
    order: 5,
  },
  {
    id: "tm-6",
    name: "Vikram Joshi",
    role: "Principal Cyber Security & Cloud Architect",
    department: "Security & Cloud",
    bio: "Ensures SOC-2, HIPAA, and ISO27001 compliance standards across multi-tenant enterprise backend platforms and APIs.",
    avatarEmoji: "🛡️",
    avatarBg: "from-slate-700 to-slate-900",
    skills: ["Cloud Security", "OAuth 2.0", "Penetration Testing", "Go", "Kafka"],
    experience: "11+ Yrs Exp",
    location: "Pune, India",
    linkedin: "https://linkedin.com",
    email: "vikram.j@company.com",
    status: "Published",
    order: 6,
  },
];

const DEPARTMENTS = [
  "All Departments",
  "Technology & AI",
  "Infrastructure Practice",
  "Product UX & Frontend",
  "Executive Leadership",
  "Security & Cloud",
] as const;

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<string>("All Departments");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);

  // Form State
  const [formData, setFormData] = useState<{
    name: string;
    role: string;
    department: TeamMember["department"];
    bio: string;
    avatarEmoji: string;
    avatarBg: string;
    skills: string;
    experience: string;
    location: string;
    linkedin: string;
    github: string;
    email: string;
    status: "Published" | "Draft";
  }>({
    name: "",
    role: "",
    department: "Technology & AI",
    bio: "",
    avatarEmoji: "👤",
    avatarBg: "from-purple-500 to-indigo-600",
    skills: "",
    experience: "",
    location: "Pune, India",
    linkedin: "",
    github: "",
    email: "",
    status: "Published",
  });

  // Load state from localStorage on initial mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("admin_team_members");
      if (saved) {
        setMembers(JSON.parse(saved));
      } else {
        setMembers(INITIAL_TEAM_MEMBERS);
        localStorage.setItem("admin_team_members", JSON.stringify(INITIAL_TEAM_MEMBERS));
      }
    } catch {
      setMembers(INITIAL_TEAM_MEMBERS);
    }
  }, []);

  // Save to localStorage whenever members state changes
  const saveMembers = (updated: TeamMember[]) => {
    setMembers(updated);
    try {
      localStorage.setItem("admin_team_members", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save team members", e);
    }
  };

  const handleOpenAddModal = () => {
    setEditingMember(null);
    setFormData({
      name: "",
      role: "",
      department: "Technology & AI",
      bio: "",
      avatarEmoji: "👤",
      avatarBg: "from-purple-500 to-indigo-600",
      skills: "",
      experience: "5+ Yrs Exp",
      location: "Pune, India",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "",
      status: "Published",
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (m: TeamMember) => {
    setEditingMember(m);
    setFormData({
      name: m.name,
      role: m.role,
      department: m.department,
      bio: m.bio,
      avatarEmoji: m.avatarEmoji || "👤",
      avatarBg: m.avatarBg || "from-purple-500 to-indigo-600",
      skills: m.skills.join(", "),
      experience: m.experience,
      location: m.location,
      linkedin: m.linkedin || "",
      github: m.github || "",
      email: m.email || "",
      status: m.status,
    });
    setIsModalOpen(true);
  };

  const handleDeleteMember = (id: string, name: string) => {
    if (confirm(`Are you sure you want to remove "${name}" from the public team directory?`)) {
      const updated = members.filter((m) => m.id !== id);
      saveMembers(updated);
    }
  };

  const handleToggleStatus = (id: string) => {
    const updated = members.map((m) => {
      if (m.id === id) {
        const newStatus: "Published" | "Draft" = m.status === "Published" ? "Draft" : "Published";
        return { ...m, status: newStatus };
      }
      return m;
    });
    saveMembers(updated);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.role) return;

    const skillsArray = formData.skills
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (editingMember) {
      // Update existing
      const updated = members.map((m) => {
        if (m.id === editingMember.id) {
          return {
            ...m,
            name: formData.name,
            role: formData.role,
            department: formData.department,
            bio: formData.bio,
            avatarEmoji: formData.avatarEmoji,
            avatarBg: formData.avatarBg,
            skills: skillsArray.length > 0 ? skillsArray : ["Engineering"],
            experience: formData.experience,
            location: formData.location,
            linkedin: formData.linkedin,
            github: formData.github,
            email: formData.email,
            status: formData.status,
          };
        }
        return m;
      });
      saveMembers(updated);
    } else {
      // Add new
      const newMember: TeamMember = {
        id: `tm-${Date.now()}`,
        name: formData.name,
        role: formData.role,
        department: formData.department,
        bio: formData.bio || "Engineering team leader driving innovation and technical excellence.",
        avatarEmoji: formData.avatarEmoji || "👤",
        avatarBg: formData.avatarBg || "from-blue-500 to-cyan-600",
        skills: skillsArray.length > 0 ? skillsArray : ["Engineering", "Cloud"],
        experience: formData.experience || "5+ Yrs Exp",
        location: formData.location || "Pune, India",
        linkedin: formData.linkedin,
        github: formData.github,
        email: formData.email,
        status: formData.status,
        order: members.length + 1,
      };
      saveMembers([newMember, ...members]);
    }

    setIsModalOpen(false);
  };

  // Filtering
  const filteredMembers = members.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDept = selectedDept === "All Departments" || m.department === selectedDept;
    const matchesStatus = selectedStatus === "All" || m.status === selectedStatus;

    return matchesSearch && matchesDept && matchesStatus;
  });

  const getBadgeColor = (dept: TeamMember["department"]) => {
    switch (dept) {
      case "Technology & AI":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Infrastructure Practice":
        return "bg-cyan-100 text-cyan-800 border-cyan-200";
      case "Product UX & Frontend":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Executive Leadership":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Security & Cloud":
        return "bg-slate-100 text-slate-800 border-slate-300";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <AdminLayout pageTitle="Team Leadership Directory">
      <div className="space-y-6 pb-12">
        {/* Top Header Banner */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black tracking-tight text-[#0F172A]">Company Engineering Team</h2>
              <span className="rounded-full bg-[#FF5F00]/10 px-3 py-1 text-xs font-bold text-[#FF5F00]">
                {members.length} Members
              </span>
            </div>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Manage public engineering leadership profiles, practice leads, technical advisors, and company directory cards.
            </p>
          </div>

          <button
            onClick={handleOpenAddModal}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF5F00] to-[#FF8700] px-6 py-3 text-xs font-extrabold text-white shadow-md shadow-[#FF5F00]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5F00]/30 hover:scale-[1.02] active:scale-95 uppercase tracking-wider cursor-pointer shrink-0"
          >
            <PlusIcon className="h-4 w-4" />
            Add Team Member
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search team members by name, role, skills, or bio..."
                className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none transition duration-200 focus:border-[#FF5F00] focus:ring-4 focus:ring-[#FF5F00]/10"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 outline-none focus:border-[#FF5F00]"
              >
                <option value="All">All Status ({members.length})</option>
                <option value="Published">Published ({members.filter((m) => m.status === "Published").length})</option>
                <option value="Draft">Draft ({members.filter((m) => m.status === "Draft").length})</option>
              </select>
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-3">
            {DEPARTMENTS.map((dept) => {
              const isActive = selectedDept === dept;
              const count =
                dept === "All Departments"
                  ? members.length
                  : members.filter((m) => m.department === dept).length;

              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#0F172A] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {dept}
                  <span
                    className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Team Members Grid */}
        {filteredMembers.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-slate-300 bg-white p-12 text-center">
            <UserIcon className="h-12 w-12 text-slate-300 mb-3" />
            <h3 className="text-base font-extrabold text-slate-800">No Team Members Found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Try adjusting your search keywords or switching department filter tabs to view team members.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDept("All Departments");
                setSelectedStatus("All");
              }}
              className="mt-4 text-xs font-extrabold text-[#FF5F00] underline"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="group relative flex flex-col justify-between rounded-[28px] border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5F00]/40 hover:shadow-xl"
              >
                {/* Top Row: Avatar & Department Badge */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    {/* Avatar Icon / Circle */}
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${member.avatarBg} text-2xl shadow-md text-white font-extrabold shrink-0`}
                    >
                      {member.avatarEmoji || member.name.charAt(0)}
                    </div>

                    {/* Department Badge */}
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-bold ${getBadgeColor(
                        member.department
                      )}`}
                    >
                      {member.department}
                    </span>
                  </div>

                  {/* Name & Role Title */}
                  <h3 className="text-lg font-black tracking-tight text-[#0F172A] group-hover:text-[#FF5F00] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#FF5F00] mt-0.5">{member.role}</p>

                  {/* Bio */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Skills Chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-700 border border-slate-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Info Meta Row */}
                  <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-3 text-[11px] font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <BriefcaseIcon className="h-3.5 w-3.5 text-slate-400" />
                      {member.experience}
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPinIcon className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      {member.location}
                    </span>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  {/* Status Toggle Badge */}
                  <button
                    onClick={() => handleToggleStatus(member.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold transition-colors cursor-pointer ${
                      member.status === "Published"
                        ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                    title="Click to toggle Published / Draft status"
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        member.status === "Published" ? "bg-emerald-500 animate-pulse" : "bg-slate-400"
                      }`}
                    />
                    {member.status}
                  </button>

                  {/* Action Icons */}
                  <div className="flex items-center gap-1">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                        title="LinkedIn Profile"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors"
                        title="GitHub Profile"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                    <button
                      onClick={() => handleOpenEditModal(member)}
                      className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
                      title="Edit Profile"
                    >
                      <EditIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteMember(member.id, member.name)}
                      className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                      title="Delete Team Member"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal: Add or Edit Team Member */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs overflow-y-auto">
            <div className="relative w-full max-w-2xl rounded-[28px] bg-white p-6 sm:p-8 shadow-2xl my-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-black text-[#0F172A]">
                    {editingMember ? "Edit Team Member Profile" : "Add New Engineering Leader"}
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    Configure profile information, practice area, bio, and technology expertise tags.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmitForm} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Aris Thorne"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#FF5F00]"
                    />
                  </div>

                  {/* Role Title */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Role Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Principal Systems & AI Lead"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#FF5F00]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Department */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Department / Practice Area
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          department: e.target.value as TeamMember["department"],
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#FF5F00]"
                    >
                      <option value="Technology & AI">Technology & AI</option>
                      <option value="Infrastructure Practice">Infrastructure Practice</option>
                      <option value="Product UX & Frontend">Product UX & Frontend</option>
                      <option value="Executive Leadership">Executive Leadership</option>
                      <option value="Security & Cloud">Security & Cloud</option>
                    </select>
                  </div>

                  {/* Avatar Preset Icon */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Avatar Icon Preset
                    </label>
                    <select
                      value={formData.avatarEmoji}
                      onChange={(e) => setFormData({ ...formData, avatarEmoji: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#FF5F00]"
                    >
                      <option value="🧠">🧠 AI / Research</option>
                      <option value="⚡">⚡ Infrastructure / Cloud</option>
                      <option value="🎨">🎨 Frontend & Design</option>
                      <option value="👑">👑 Leadership / VP</option>
                      <option value="🤖">🤖 Machine Learning</option>
                      <option value="🛡️">🛡️ Cyber Security</option>
                      <option value="👨‍💻">👨‍💻 Software Engineer</option>
                      <option value="👩‍💻">👩‍💻 Tech Lead</option>
                      <option value="👤">👤 Generic User</option>
                    </select>
                  </div>
                </div>

                {/* Bio Summary */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    Professional Bio / Summary
                  </label>
                  <textarea
                    rows={3}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    placeholder="Short 2-3 sentence overview of expertise, past experience, and current focus..."
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-medium text-slate-800 outline-none focus:border-[#FF5F00]"
                  />
                </div>

                {/* Skills Chips */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    Key Technologies / Skills (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="e.g. Python, PyTorch, Kubernetes, AWS, Next.js"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#FF5F00]"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Experience */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="e.g. 10+ Yrs Exp"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#FF5F00]"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Pune, India (Hybrid)"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#FF5F00]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* LinkedIn */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-medium text-slate-800 outline-none focus:border-[#FF5F00]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-medium text-slate-800 outline-none focus:border-[#FF5F00]"
                    />
                  </div>
                </div>

                {/* Status Selection */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    Directory Status
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        value="Published"
                        checked={formData.status === "Published"}
                        onChange={() => setFormData({ ...formData, status: "Published" })}
                        className="accent-[#FF5F00]"
                      />
                      Published (Visible on Website)
                    </label>
                    <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        value="Draft"
                        checked={formData.status === "Draft"}
                        onChange={() => setFormData({ ...formData, status: "Draft" })}
                        className="accent-[#FF5F00]"
                      />
                      Draft (Hidden)
                    </label>
                  </div>
                </div>

                {/* Modal Footer Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-[#FF5F00] to-[#FF8700] px-6 py-2.5 text-xs font-extrabold text-white shadow-md hover:shadow-lg uppercase tracking-wider"
                  >
                    {editingMember ? "Save Changes" : "Create Team Profile"}
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

