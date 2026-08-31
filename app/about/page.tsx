import type { Metadata } from "next";
import { AboutClient } from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "Company | About Us",
  description: "Explore our enterprise software engineering mission, core organizational goals, strategic vision, and the executive leadership team.",
};

export default function AboutPage() {
  return <AboutClient />;
}
