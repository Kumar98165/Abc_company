"use client";

import { faqs } from "@/data/home";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqs[0].question);

  return (
    <section id="faq" className="anchor-offset bg-white">
      <div className="section-shell section-space">
        <SectionHeading
          label="FAQ"
          title="Questions, Answered"
        />
        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((item) => {
            const isOpen = openQuestion === item.question;
            const panelId = item.question.toLowerCase().replace(/[^a-z0-9]+/g, "-");

            return (
              <div key={item.question} className="py-2">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-1 py-5 text-left text-lg font-semibold tracking-[-0.02em] text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                  >
                    <span>{item.question}</span>
                    <span className="text-2xl text-slate-400">{isOpen ? "-" : "+"}</span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl px-1 pb-5 text-base leading-8 text-slate-500">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
