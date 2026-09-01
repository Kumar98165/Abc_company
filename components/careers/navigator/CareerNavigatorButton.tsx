"use client";

import React, { useState, useEffect } from "react";

interface CareerNavigatorButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function CareerNavigatorButton({ isOpen, onToggle }: CareerNavigatorButtonProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto collapse after 4 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCollapsed(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isOpen) return null;

  const showExpanded = !isCollapsed || isHovered;

  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Open AI Career Navigator"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full border border-[#EAE3D9] bg-white px-4 py-3 text-xs font-extrabold text-[#0F172A] shadow-[0_12px_35px_rgba(0,0,0,0.12)] hover:border-[#FF5F00] hover:shadow-2xl hover:scale-103 transition-all duration-300 cursor-pointer group"
    >
      {/* Abstract Orbiting AI Symbol */}
      <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF5F00]">
        <span className="text-sm font-black animate-spin-slow">✦</span>
        <span className="absolute inset-0 rounded-full border border-[#FF5F00]/40 animate-ping opacity-20" />
      </div>

      <span className="tracking-wide">
        {showExpanded ? "Career Navigator" : "AI"}
      </span>

      {showExpanded && (
        <span className="text-[10px] font-extrabold text-[#FF5F00] bg-[#FFF4EC] border border-[#FFE2CC] px-2 py-0.5 rounded-full uppercase tracking-wider">
          AI
        </span>
      )}
    </button>
  );
}
