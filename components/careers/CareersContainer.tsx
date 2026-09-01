"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { extendedJobsData, JobDetailItem } from "./data/jobsData";
import { CareersHero } from "./sections/CareersHero";
import { WhyJoinUs } from "./sections/WhyJoinUs";
import { LifeAtCompany } from "./sections/LifeAtCompany";
import { JobSearchEngine } from "./sections/JobSearchEngine";
import { JobCardItem } from "./sections/JobCardItem";
import { JobDetailsModal } from "./sections/JobDetailsModal";
import { HiringProcessTimeline } from "./sections/HiringProcessTimeline";
import { DiversitySection } from "./sections/DiversitySection";
import { TalentNetworkModal } from "./sections/TalentNetworkModal";
import { ApplicationWizard } from "./ApplicationWizard";
import { JobMetadata } from "./types";

const JOBS_PER_PAGE = 10;

export function CareersContainer() {
  const searchParams = useSearchParams();

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

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  // Support URL param trigger e.g. /careers?apply=fullstack-dev
  useEffect(() => {
    const applyId = searchParams.get("apply");
    if (applyId) {
      const targetJob = extendedJobsData.find((j) => j.id === applyId);
      if (targetJob) {
        setSelectedJobForApp({
          jobId: targetJob.id,
          title: targetJob.title,
          department: targetJob.department,
          location: targetJob.location,
          employmentType: targetJob.type,
          experience: targetJob.experience,
        });
        setIsApplying(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [searchParams]);

  // Reset page to 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, departmentFilter, locationFilter, experienceFilter, workModeFilter, employmentTypeFilter]);

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

  // Paginated Jobs Slicing
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const paginatedJobs = useMemo(() => {
    const start = (currentPage - 1) * JOBS_PER_PAGE;
    return filteredJobs.slice(start, start + JOBS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setDepartmentFilter("All");
    setLocationFilter("All");
    setExperienceFilter("All");
    setWorkModeFilter("All");
    setEmploymentTypeFilter("All");
    setCurrentPage(1);
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

      {/* 4. OPEN POSITIONS & SEARCH ENGINE SECTION */}
      <section id="open-positions" className="bg-[#FFFBF7] pt-10 sm:pt-12 pb-14 sm:pb-16 border-b border-[#EAE3D9]">
        <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
              OPEN POSITIONS
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Explore Opportunities & Impact
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
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

          {/* JOB CARDS GRID (4 CARDS PER ROW ON DESKTOP) */}
          {filteredJobs.length > 0 ? (
            <div className="space-y-8">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {paginatedJobs.map((job) => (
                  <JobCardItem
                    key={job.id}
                    job={job}
                    onViewJob={(j) => setActiveJobModal(j)}
                    onApplyNow={(j) => handleApplyClick(j)}
                  />
                ))}
              </div>

              {/* PAGINATION CONTROL BAR */}
              {totalPages > 1 && (
                <div className="rounded-2xl border border-[#EAE3D9] bg-white p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                  <span className="text-xs text-[#64748B] font-bold">
                    Showing <span className="text-[#0F172A]">{(currentPage - 1) * JOBS_PER_PAGE + 1}</span>–<span className="text-[#0F172A]">{Math.min(currentPage * JOBS_PER_PAGE, filteredJobs.length)}</span> of <span className="text-[#FF5F00] font-mono text-sm">{filteredJobs.length}</span> positions
                  </span>

                  <div className="flex items-center gap-2">
                    {/* Previous Page Button */}
                    <button
                      type="button"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      className={`rounded-xl border px-3.5 py-1.5 text-xs font-extrabold transition-colors cursor-pointer ${
                        currentPage === 1
                          ? "border-[#E2E8F0] bg-[#FAF8F5] text-[#94A3B8] cursor-not-allowed"
                          : "border-[#EAE3D9] bg-white text-[#0F172A] hover:border-[#FF5F00] hover:text-[#FF5F00]"
                      }`}
                    >
                      ← Previous
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => setCurrentPage(pageNum)}
                        className={`h-8 w-8 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                          pageNum === currentPage
                            ? "bg-[#FF5F00] text-white shadow-xs"
                            : "border border-[#EAE3D9] bg-white text-[#0F172A] hover:border-[#FF5F00] hover:text-[#FF5F00]"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}

                    {/* Next Page Button */}
                    <button
                      type="button"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      className={`rounded-xl border px-3.5 py-1.5 text-xs font-extrabold transition-colors cursor-pointer ${
                        currentPage === totalPages
                          ? "border-[#E2E8F0] bg-[#FAF8F5] text-[#94A3B8] cursor-not-allowed"
                          : "border-[#EAE3D9] bg-white text-[#0F172A] hover:border-[#FF5F00] hover:text-[#FF5F00]"
                      }`}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}
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
                className="rounded-full border-2 border-[#FF5F00] bg-[#FFFFFF] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] hover:bg-[#FF5F00] hover:text-white transition-all cursor-pointer"
              >
                JOIN TALENT NETWORK →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE HIRE (6-STEP TIMELINE) */}
      <HiringProcessTimeline />

      {/* 6. DIVERSITY & INCLUSION */}
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
