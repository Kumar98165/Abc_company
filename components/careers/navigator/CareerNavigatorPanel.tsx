"use client";

import React, { useState, useRef, useEffect } from "react";
import { extendedJobsData, JobDetailItem } from "../data/jobsData";
import { NavigatorMode, ChatMessage } from "./types";
import { CareerMatchCard } from "./CareerMatchCard";
import { CareerDiscoveryWizard } from "./CareerDiscoveryWizard";

interface CareerNavigatorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onViewRole: (job: JobDetailItem) => void;
  onApplyNow: (job: JobDetailItem) => void;
}

export function CareerNavigatorPanel({
  isOpen,
  onClose,
  onViewRole,
  onApplyNow,
}: CareerNavigatorPanelProps) {
  const [mode, setMode] = useState<NavigatorMode>("WELCOME");
  const [inputMsg, setInputMsg] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [matchedJob, setMatchedJob] = useState<JobDetailItem | null>(null);
  const [matchExplanation, setMatchExplanation] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, mode, isLoading]);

  if (!isOpen) return null;

  const handleWhatsAppRedirect = () => {
    const waUrl = "https://wa.me/?text=Hi%2C%20I%20am%20exploring%20career%20opportunities%20at%20your%20company.";
    window.open(waUrl, "_blank");
  };

  const handleSendChat = async (textToSend?: string) => {
    const messageText = textToSend || inputMsg;
    if (!messageText.trim()) return;

    if (messageText.includes("Manager") || messageText.includes("WhatsApp")) {
      handleWhatsAppRedirect();
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: messageText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMsg("");
    setMode("CHAT");
    setIsLoading(true);

    try {
      const res = await fetch("/api/career-agent/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await res.json();
      setIsLoading(false);

      if (data.type === "MATCH_RESULT" && data.job) {
        setMatchedJob(data.job);
        setMatchExplanation(data.explanation);
        const aiMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: "navigator",
          text: data.explanation || "Here is your career match:",
          type: "MATCH_CARD",
          matchedJob: data.job,
          matchLevel: data.matchLevel || "Strong Match",
          suggestedActions: data.suggestedActions,
        };
        setMessages((prev) => [...prev, aiMsg]);
      } else {
        const aiMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: "navigator",
          text: data.reply || "How can I assist you with your career journey today?",
          type: data.type === "WHATSAPP_REDIRECT" ? "SUGGESTION" : "TEXT",
          matchedJob: data.job,
          suggestedActions: data.suggestedActions || ["Find My Next Role", "Match My Skills", "Talk to Manager"],
        };
        setMessages((prev) => [...prev, aiMsg]);
      }
    } catch (err) {
      setIsLoading(false);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "navigator",
        text: "Career Navigator is temporarily unavailable. You can browse open positions directly below.",
        type: "TEXT",
        suggestedActions: ["Explore Roles", "Talk to Manager"],
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  const handleDiscoveryMatch = (job: JobDetailItem, skills: string[]) => {
    setMatchedJob(job);
    setMatchExplanation(`Your technical background in ${skills.join(", ")} aligns well with this role.`);
    setMode("MATCH_RESULT");
  };

  return (
    <div className="fixed inset-0 z-50 lg:inset-auto lg:bottom-4 lg:right-6 lg:w-[420px] lg:max-h-[490px] bg-white rounded-none lg:rounded-[32px] border-0 lg:border border-[#EAE3D9] shadow-[0_20px_60px_rgba(0,0,0,0.22)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
      
      {/* PANEL HEADER - SHIFTED DOWN TO BOTTOM-4 WITH INCREASED WIDTH (420PX), ZERO NAVBAR OVERLAP */}
      <div className="pt-3.5 pb-3 px-4.5 bg-[#FFFBF7] border-b border-[#EAE3D9] flex items-center justify-between shrink-0 z-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8.5 w-8.5 items-center justify-center rounded-2xl bg-[#FFF4EC] text-[#FF5F00] border border-[#FFE2CC] shadow-2xs">
            <span className="text-base font-black animate-spin-slow">✦</span>
          </div>
          <div>
            <h3 className="text-xs font-extrabold text-[#0F172A] tracking-wider uppercase flex items-center gap-1.5 leading-tight">
              CAREER NAVIGATOR
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F00] animate-pulse" />
            </h3>
            <p className="text-[10px] font-medium text-[#64748B] mt-0.5">AI-powered career guide</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-white text-[#0F172A] border border-[#EAE3D9] hover:bg-[#FF5F00] hover:text-white font-extrabold text-xs transition cursor-pointer shadow-2xs"
        >
          ✕
        </button>
      </div>

      {/* PANEL BODY CONTENT WITH HIDDEN SCROLLBAR & VERTICAL DROPLIST FORMAT */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#FFFBF7]/40 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        
        {/* MODE 1: WELCOME MESSAGE + VERTICAL DROPLIST OF OPTIONS */}
        {mode === "WELCOME" && (
          <div className="space-y-3 animate-in fade-in duration-300">
            {/* AI Welcome Message Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF5F00] text-white text-xs font-black shadow-2xs mt-0.5">
                ✦
              </div>
              <div className="rounded-2xl border border-[#FFE2CC] bg-[#FFF4EC] p-3 text-xs leading-relaxed text-[#0F172A] space-y-1 shadow-2xs">
                <p className="font-extrabold text-[#0F172A]">
                  How can I assist you today?
                </p>
                <p className="text-[#64748B] text-[11.5px]">
                  Select an option from the list below or ask me any question:
                </p>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => setMode("DISCOVERY_SKILLS")}
              className="w-full rounded-2xl bg-[#FF5F00] py-3 px-4 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e65400] transition cursor-pointer shadow-md shadow-orange-500/20 text-center flex items-center justify-center gap-2"
            >
              <span>🔎 FIND MY NEXT ROLE</span>
              <span>→</span>
            </button>

            {/* VERTICAL DROPLIST FORMATTED OPTIONS */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setMode("DISCOVERY_SKILLS")}
                className="w-full rounded-2xl border border-[#EAE3D9] bg-white p-3 flex items-center justify-between hover:border-[#FF5F00] transition cursor-pointer shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base group-hover:scale-110 transition-transform">🧠</span>
                  <div className="text-left">
                    <span className="block text-xs font-extrabold text-[#0F172A]">Match My Skills</span>
                    <span className="block text-[10px] text-[#64748B]">Tag-based career fit assessment</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#FF5F00] group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                type="button"
                onClick={() => setMode("JOB_LIST")}
                className="w-full rounded-2xl border border-[#EAE3D9] bg-white p-3 flex items-center justify-between hover:border-[#FF5F00] transition cursor-pointer shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base group-hover:scale-110 transition-transform">📋</span>
                  <div className="text-left">
                    <span className="block text-xs font-extrabold text-[#0F172A]">Explore All Open Roles</span>
                    <span className="block text-[10px] text-[#64748B]">Browse active opportunities</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#FF5F00] group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                type="button"
                onClick={() => handleSendChat("How does your hiring process work?")}
                className="w-full rounded-2xl border border-[#EAE3D9] bg-white p-3 flex items-center justify-between hover:border-[#FF5F00] transition cursor-pointer shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base group-hover:scale-110 transition-transform">❓</span>
                  <div className="text-left">
                    <span className="block text-xs font-extrabold text-[#0F172A]">Hiring Process Guide</span>
                    <span className="block text-[10px] text-[#64748B]">6-step transparent timeline</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#FF5F00] group-hover:translate-x-1 transition-transform">→</span>
              </button>

              {/* WHATSAPP RECRUITER MANAGER REDIRECT DROPLIST ITEM */}
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 p-3 flex items-center justify-between hover:border-[#25D366] transition cursor-pointer shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base group-hover:scale-110 transition-transform">💬</span>
                  <div className="text-left">
                    <span className="block text-xs font-extrabold text-[#0F172A]">Talk to Hiring Manager</span>
                    <span className="block text-[10px] text-[#128C7E] font-bold">Direct WhatsApp assistance</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#128C7E] group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        )}

        {/* MODE 2: CAREER DISCOVERY WIZARD */}
        {(mode === "DISCOVERY_SKILLS" || mode === "DISCOVERY_EXP" || mode === "DISCOVERY_DEPT") && (
          <CareerDiscoveryWizard
            onCompleteMatch={handleDiscoveryMatch}
            onCancel={() => setMode("WELCOME")}
          />
        )}

        {/* MODE 3: MATCH RESULT */}
        {mode === "MATCH_RESULT" && matchedJob && (
          <div className="space-y-3">
            <CareerMatchCard
              job={matchedJob}
              explanation={matchExplanation}
              onViewRole={onViewRole}
              onApplyNow={onApplyNow}
            />

            <button
              type="button"
              onClick={() => setMode("WELCOME")}
              className="w-full text-center text-xs font-extrabold text-[#64748B] hover:text-[#FF5F00] py-2 cursor-pointer"
            >
              ← Back to Navigator Dashboard
            </button>
          </div>
        )}

        {/* MODE 4: JOB STACK LIST */}
        {mode === "JOB_LIST" && (
          <div className="space-y-2.5 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2">
              <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#FF5F00]">
                YOUR OPPORTUNITIES ({extendedJobsData.length})
              </span>
              <button
                type="button"
                onClick={() => setMode("WELCOME")}
                className="text-xs font-extrabold text-[#64748B] hover:text-[#FF5F00] cursor-pointer"
              >
                Back
              </button>
            </div>

            <div className="space-y-2 max-h-[340px] overflow-y-auto pr-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {extendedJobsData.map((job) => (
                <div
                  key={job.id}
                  className="rounded-2xl border border-[#EAE3D9] bg-white p-3 shadow-2xs hover:border-[#FF5F00] transition flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EC] border border-[#FFE2CC] text-[#FF5F00] font-mono font-bold text-xs">
                      {job.badgeIconText}
                    </div>
                    <div>
                      <h5 className="text-[11.5px] font-extrabold text-[#0F172A] leading-tight group-hover:text-[#FF5F00] transition-colors">
                        {job.title}
                      </h5>
                      <p className="text-[9.5px] text-[#64748B] mt-0.5">
                        {job.department} • {job.location}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onViewRole(job)}
                    className="rounded-full bg-[#FFF4EC] border border-[#FFE2CC] px-2.5 py-1 text-[10px] font-extrabold text-[#FF5F00] hover:bg-[#FF5F00] hover:text-white transition cursor-pointer shrink-0"
                  >
                    View →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODE 5: CHAT CONVERSATION */}
        {mode === "CHAT" && (
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#FF5F00] text-white rounded-br-2xs"
                      : "bg-white border border-[#EAE3D9] text-[#0F172A] rounded-bl-2xs shadow-2xs"
                  }`}
                >
                  {msg.text}
                </div>

                {/* Optional Matched Card Embed */}
                {msg.type === "MATCH_CARD" && msg.matchedJob && (
                  <div className="w-full mt-3">
                    <CareerMatchCard
                      job={msg.matchedJob}
                      explanation={msg.text}
                      onViewRole={onViewRole}
                      onApplyNow={onApplyNow}
                    />
                  </div>
                )}

                {/* WHATSAPP CTA LINK BUTTON */}
                {msg.type === "SUGGESTION" && (
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="mt-2 flex items-center gap-2 rounded-full border border-[#25D366] bg-[#25D366] px-4 py-2 text-xs font-extrabold text-[#0F172A] hover:bg-[#128C7E] hover:text-white transition cursor-pointer shadow-xs"
                  >
                    <span>💬 Chat on WhatsApp</span>
                    <span>→</span>
                  </button>
                )}

                {/* Contextual Action Chips */}
                {msg.suggestedActions && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {msg.suggestedActions.map((action) => (
                      <button
                        key={action}
                        type="button"
                        onClick={() => {
                          if (action === "Talk to Manager" || action === "Chat on WhatsApp") {
                            handleWhatsAppRedirect();
                          } else if (action === "Find My Next Role" || action === "Match My Skills") {
                            setMode("DISCOVERY_SKILLS");
                          } else if (action === "Explore Roles") {
                            setMode("JOB_LIST");
                          } else if (action === "View Role" && msg.matchedJob) {
                            onViewRole(msg.matchedJob);
                          } else if (action === "Apply Now" && msg.matchedJob) {
                            onApplyNow(msg.matchedJob);
                          } else {
                            handleSendChat(action);
                          }
                        }}
                        className="rounded-full border border-[#FFE2CC] bg-[#FFF4EC] px-3 py-1 text-[10px] font-extrabold text-[#FF5F00] hover:bg-[#FF5F00] hover:text-white transition cursor-pointer"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* AI Loading State */}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-[#FF5F00] font-extrabold bg-white border border-[#FFE2CC] p-3 rounded-2xl w-fit">
                <span className="animate-spin text-sm">✦</span>
                <span>Analyzing your career preferences...</span>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>
        )}
      </div>

      {/* PANEL FOOTER INPUT */}
      <div className="p-3 bg-white border-t border-[#EAE3D9] shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendChat();
          }}
          className="relative flex items-center"
        >
          <input
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            placeholder="Ask Career Navigator..."
            className="w-full rounded-full border border-[#E8E0D8] bg-[#FAF8F5] pl-4 pr-11 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#FF5F00] transition-colors"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="absolute right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5F00] text-white hover:bg-[#e65400] transition cursor-pointer shadow-2xs"
          >
            ➤
          </button>
        </form>
      </div>

    </div>
  );
}
