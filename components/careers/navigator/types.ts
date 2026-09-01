import { JobDetailItem } from "../data/jobsData";

export type NavigatorMode =
  | "WELCOME"
  | "DISCOVERY_SKILLS"
  | "DISCOVERY_EXP"
  | "DISCOVERY_DEPT"
  | "MATCH_RESULT"
  | "JOB_LIST"
  | "CHAT"
  | "LOADING"
  | "ERROR";

export interface ChatMessage {
  id: string;
  sender: "user" | "navigator";
  text: string;
  type?: "TEXT" | "MATCH_CARD" | "JOB_LIST" | "SUGGESTION";
  matchedJob?: JobDetailItem;
  matchLevel?: "Strong Match" | "Good Match" | "Potential Match";
  suggestedActions?: string[];
}
