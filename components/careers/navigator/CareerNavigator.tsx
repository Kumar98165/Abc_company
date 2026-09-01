"use client";

import React, { useState } from "react";
import { JobDetailItem } from "../data/jobsData";
import { CareerNavigatorButton } from "./CareerNavigatorButton";
import { CareerNavigatorPanel } from "./CareerNavigatorPanel";

interface CareerNavigatorProps {
  onViewRole: (job: JobDetailItem) => void;
  onApplyNow: (job: JobDetailItem) => void;
}

export function CareerNavigator({ onViewRole, onApplyNow }: CareerNavigatorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CareerNavigatorButton
        isOpen={isOpen}
        onToggle={() => setIsOpen(true)}
      />

      <CareerNavigatorPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onViewRole={onViewRole}
        onApplyNow={onApplyNow}
      />
    </>
  );
}
