import { NextResponse } from "next/server";
import { extendedJobsData } from "@/components/careers/data/jobsData";

export async function POST(req: Request) {
  try {
    const { message, skills } = await req.json();
    const lowerMsg = (message || "").toLowerCase();

    // 1. WhatsApp / Manager Redirect Query
    if (lowerMsg.includes("manager") || lowerMsg.includes("whatsapp") || lowerMsg.includes("connect") || lowerMsg.includes("recruiter")) {
      return NextResponse.json({
        type: "WHATSAPP_REDIRECT",
        reply: "Connecting you directly with our Talent Acquisition Hiring Manager on WhatsApp for instant assistance!",
        whatsappLink: "https://wa.me/?text=Hi%2C%20I%20am%20exploring%20career%20opportunities%20at%20your%20company.",
        suggestedActions: ["Chat on WhatsApp", "Explore Roles", "Match My Skills"],
      });
    }

    // 2. Skill Matching Query
    if (skills && skills.length > 0) {
      const matched = extendedJobsData.filter((job) =>
        job.skills.some((s) => skills.includes(s) || skills.some((userS: string) => s.toLowerCase().includes(userS.toLowerCase())))
      );

      const topMatch = matched[0] || extendedJobsData[0];
      return NextResponse.json({
        type: "MATCH_RESULT",
        matchLevel: matched.length > 1 ? "Strong Match" : "Good Match",
        job: topMatch,
        explanation: `Your technical background in ${skills.join(", ")} aligns exceptionally well with our ${topMatch.title} opening.`,
        suggestedActions: ["View Role", "Apply Now", "Talk to Manager"],
      });
    }

    // 3. Hiring Process Queries
    if (lowerMsg.includes("hiring") || lowerMsg.includes("process") || lowerMsg.includes("interview")) {
      return NextResponse.json({
        type: "TEXT_RESPONSE",
        reply: "Our hiring process consists of 6 transparent stages: 1) Application, 2) Profile Review, 3) Recruiter Call, 4) Technical Assessment, 5) Final Interview, and 6) Formal Offer.",
        suggestedActions: ["Find My Next Role", "Explore Roles", "Talk to Manager"],
      });
    }

    // 4. React / Frontend Queries
    if (lowerMsg.includes("react") || lowerMsg.includes("frontend") || lowerMsg.includes("node")) {
      const fullStackJob = extendedJobsData.find((j) => j.id === "fullstack-dev") || extendedJobsData[0];
      return NextResponse.json({
        type: "JOB_SUGGESTION",
        reply: `Our ${fullStackJob.title} position is a direct match for your React & Node.js skills.`,
        job: fullStackJob,
        suggestedActions: ["View Role", "Apply Now", "Talk to Manager"],
      });
    }

    // Default Conversational Assistance Response
    return NextResponse.json({
      type: "TEXT_RESPONSE",
      reply: "How can I assist you with your career journey today? Select an option below or ask me any question:",
      suggestedActions: ["Find My Next Role", "Match My Skills", "Explore Roles", "Talk to Manager"],
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Career Navigator is temporarily unavailable." },
      { status: 500 }
    );
  }
}
