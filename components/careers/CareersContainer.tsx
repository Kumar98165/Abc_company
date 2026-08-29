"use client";

import { useState } from "react";
import { CareersList } from "./CareersList";
import { ApplicationForm } from "./ApplicationForm";
import { Job } from "@/app/careers/page";

interface CareersContainerProps {
  jobsData: Job[];
}

export function CareersContainer({ jobsData }: CareersContainerProps) {
  const [activeApplyPosition, setActiveApplyPosition] = useState("");

  const handleApplyClick = (position: string) => {
    setActiveApplyPosition(position);
    // Smooth scroll down to the application form container
    const el = document.getElementById("application-container");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Current Openings */}
      <section id="open-positions" className="bg-white py-16 lg:py-24">
        <div className="section-shell">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Current Openings</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Explore Opportunities</h2>
            <p className="mt-4 text-sm text-slate-500">
              Explore sample positions to join our growing technology team.
            </p>
          </div>

          <CareersList jobsData={jobsData} setApplicationPosition={handleApplyClick} />

          {/* Spontaneous application */}
          <div className="mt-16 text-center border-t border-slate-100 pt-16">
            <h3 className="text-lg font-bold text-slate-900">Don't See the Right Role?</h3>
            <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
              We're always interested in meeting talented people. If you don't see a suitable opening, send us your profile and tell us how you could contribute.
            </p>
            <a 
              href="#application-container" 
              onClick={() => handleApplyClick("")}
              className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-slate-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-600 transition cursor-pointer"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-container" className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Submit Application</span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Apply Now</h2>
          </div>

          <ApplicationForm initialPosition={activeApplyPosition} />
        </div>
      </section>
    </>
  );
}
