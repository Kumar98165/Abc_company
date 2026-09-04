"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { JobDetailItem } from "../data/jobsData";
import { CareerNavigator } from "./CareerNavigator";
import { JobDetailsModal } from "../sections/JobDetailsModal";

export function GlobalCareerNavigator() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeJobModal, setActiveJobModal] = useState<JobDetailItem | null>(null);

  // Hide candidate career navigator on internal Admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const handleViewRole = (job: JobDetailItem) => {
    setActiveJobModal(job);
  };

  const handleApplyNow = (job: JobDetailItem) => {
    setActiveJobModal(null);
    router.push(`/careers?apply=${job.id}`);
  };

  return (
    <>
      <CareerNavigator
        onViewRole={handleViewRole}
        onApplyNow={handleApplyNow}
      />

      {/* Global Job Details Modal */}
      <JobDetailsModal
        job={activeJobModal}
        onClose={() => setActiveJobModal(null)}
        onApplyNow={handleApplyNow}
      />
    </>
  );
}
