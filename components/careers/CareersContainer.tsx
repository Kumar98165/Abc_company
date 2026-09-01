"use client";

import React, { useState, useMemo } from "react";
import { extendedJobsData, JobDetailItem } from "./data/jobsData";
import { CareersHero } from "./sections/CareersHero";
import { WhyJoinUs } from "./sections/WhyJoinUs";
import { LifeAtCompany } from "./sections/LifeAtCompany";
import { EngineeringCulture } from "./sections/EngineeringCulture";
import { JobSearchEngine } from "./sections/JobSearchEngine";
import { JobCardItem } from "./sections/JobCardItem";
import { JobDetailsModal } from "./sections/JobDetailsModal";
import { HiringProcessTimeline } from "./sections/HiringProcessTimeline";
import { BenefitsAndPerks } from "./sections/BenefitsAndPerks";
import { LearningAndGrowth } from "./sections/LearningAndGrowth";
import { DiversitySection } from "./sections/DiversitySection";
import { TalentNetworkModal } from "./sections/TalentNetworkModal";
import { ApplicationWizard } from "./ApplicationWizard";
import { JobMetadata } from "./types";

export function CareersContainer() {
  // ATS Application Flow State
  const [selectedJobForApp, setSelectedJobForApp] = useState<JobMetadata | null>(null);
  const [isApplying, setIsApplying] = useState(false);

  // Job Details Modal State
  const [activeJobModal, setActiveJobModal] = useState<JobDetailItem | null>(null);

  // Talent Network Modal State
  const [isTalentNetworkOpen, setIsTalentNetworkOpen] = useState(false);

  // Client-Side Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [experienceFilter, setExperienceFilter] = useState("All");
  const [workModeFilter, setWorkModeFilter] = useState("All");
  const [employmentTypeFilter, setEmploymentTypeFilter] = useState("All");

  // Client-Side Combined Filtering Logic
  const filteredJobs = useMemo(() => {
    return extendedJobsData.filter((job) => {
      // 1. Search Query Matching (Title, Department, Technologies, Description)
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesDepartment = job.department.toLowerCase().includes(q);
        const matchesDescription = job.description.toLowerCase().includes(q);
        const matchesSkills = job.skills.some((s) => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDepartment && !matchesDescription && !matchesSkills) {
          return false;
        }
      }

      // 2. Department Filter
      if (departmentFilter !== "All" && job.department !== departmentFilter) {
        return false;
      }

      // 3. Location Filter
      if (locationFilter !== "All" && !job.location.includes(locationFilter)) {
        return false;
      }

      // 4. Experience Filter
      if (experienceFilter !== "All" && job.experience !== experienceFilter) {
        return false;
      }

      // 5. Work Mode Filter
      if (workModeFilter !== "All" && !job.location.includes(workModeFilter)) {
        return false;
      }

      // 6. Employment Type Filter
      if (employmentTypeFilter !== "All" && job.type !== employmentTypeFilter) {
        return false;
      }

      return true;
    });
  }, [searchQuery, departmentFilter, locationFilter, experienceFilter, workModeFilter, employmentTypeFilter]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setDepartmentFilter("All");
    setLocationFilter("All");
    setExperienceFilter("All");
    setWorkModeFilter("All");
    setEmploymentTypeFilter("All");
  };

  const scrollToPositions = () => {
    const el = document.getElementById("open-positions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCulture = () => {
    const el = document.getElementById("why-join-us");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplyClick = (job: JobDetailItem) => {
    setSelectedJobForApp({
      jobId: job.id,
      title: job.title,
      department: job.department,
      location: job.location,
      employmentType: job.type,
      experience: job.experience,
    });
    setIsApplying(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToCareers = () => {
    setIsApplying(false);
    setSelectedJobForApp(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // IF CANDIDATE CLICKED APPLY NOW: RENDER 8-STEP ENTERPRISE ATS APPLICATION WIZARD
  if (isApplying && selectedJobForApp) {
    return (
      <ApplicationWizard
        jobMetadata={selectedJobForApp}
        onBackToCareers={handleBackToCareers}
      />
    );
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <CareersHero
        onViewPositionsClick={scrollToPositions}
        onExploreCultureClick={scrollToCulture}
      />

      {/* 2. WHY JOIN US (6 CARDS) */}
      <WhyJoinUs />

      {/* 3. LIFE AT OUR COMPANY */}
      <LifeAtCompany />

      {/* 4. OUR ENGINEERING CULTURE (4 INTERACTIVE CARDS) */}
      <EngineeringCulture />

      {/* 5. OPEN POSITIONS & SEARCH ENGINE SECTION */}
      <section id="open-positions" className="bg-[#FFFBF7] py-16 lg:py-24 border-b border-[#EAE3D9]">
        <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
              OPEN POSITIONS
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl tracking-tight">
              Explore Opportunities & Impact
            </h2>
            <p className="mt-3 text-base text-[#64748B] leading-relaxed">
              Find a role where your skills, curiosity, and ambition can make a lasting impact on enterprise software solutions.
            </p>
          </div>

          {/* SEARCH & FILTER ENGINE */}
          <JobSearchEngine
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            departmentFilter={departmentFilter}
            onDepartmentChange={setDepartmentFilter}
            locationFilter={locationFilter}
            onLocationChange={setLocationFilter}
            experienceFilter={experienceFilter}
            onExperienceChange={setExperienceFilter}
            workModeFilter={workModeFilter}
            onWorkModeChange={setWorkModeFilter}
            employmentTypeFilter={employmentTypeFilter}
            onEmploymentTypeChange={setEmploymentTypeFilter}
            resultsCount={filteredJobs.length}
            onClearFilters={handleClearFilters}
          />

          {/* JOB CARDS GRID */}
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredJobs.map((job) => (
                <JobCardItem
                  key={job.id}
                  job={job}
                  onViewJob={(j) => setActiveJobModal(j)}
                  onApplyNow={(j) => handleApplyClick(j)}
                />
              ))}
            </div>
          ) : (
            /* NO POSITIONS FOUND EMPTY STATE */
            <div className="rounded-3xl border border-[#EAE3D9] bg-white p-12 text-center space-y-4 shadow-2xs">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF4EC] text-[#FF5F00] text-3xl">
                🔎
              </div>
              <h3 className="text-xl font-extrabold text-[#0F172A]">No positions found</h3>
              <p className="text-xs text-[#64748B] max-w-md mx-auto leading-relaxed">
                No open roles matched your search criteria or selected filters. Try broadening your keywords or clearing selected filters.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="mt-2 rounded-full bg-[#FF5F00] px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20"
              >
                CLEAR FILTERS
              </button>
            </div>
          )}

          {/* "Don't see the right role?" Banner */}
          <div className="rounded-[28px] bg-[#FFF4EC] border border-[#FFE2CC] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF5F00] text-white text-xl shadow-md">
                🚀
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#0F172A]">
                  Don't see the right role?
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                  Your next opportunity may not be listed yet. Join our talent network and share your resume!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsTalentNetworkOpen(true)}
                className="rounded-full border-2 border-[#FF5F00] bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] hover:bg-[#FF5F00] hover:text-white transition-all cursor-pointer"
              >
                JOIN TALENT NETWORK →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW WE HIRE (6-STEP TIMELINE) */}
      <HiringProcessTimeline />

      {/* 7. BENEFITS & PERKS */}
      <BenefitsAndPerks />

      {/* 8. LEARNING & GROWTH CAREER JOURNEY */}
      <LearningAndGrowth />

      {/* 9. DIVERSITY & INCLUSION */}
      <DiversitySection />

      {/* MODAL 1: JOB DETAILS SPECIFICATION MODAL */}
      <JobDetailsModal
        job={activeJobModal}
        onClose={() => setActiveJobModal(null)}
        onApplyNow={(j) => handleApplyClick(j)}
      />

      {/* MODAL 2: GENERAL TALENT NETWORK MODAL */}
      <TalentNetworkModal
        isOpen={isTalentNetworkOpen}
        onClose={() => setIsTalentNetworkOpen(false)}
      />
    </>
  );
}
