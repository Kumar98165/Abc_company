"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { JobDetailItem } from "../data/jobsData";
import { CareerNavigator } from "./CareerNavigator";
import { JobDetailsModal } from "../sections/JobDetailsModal";

export function GlobalCareerNavigator() {
  const router = useRouter();
  const [activeJobModal, setActiveJobModal] = useState<JobDetailItem | null>(null);

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
