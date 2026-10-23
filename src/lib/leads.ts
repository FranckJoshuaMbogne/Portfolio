import { site } from "@/config/site";
import { track } from "./analytics";
import { firebaseReady, getDb } from "./firebase";

export interface ConsultationPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  interests: string[];
  engagement?: string;
  adSpend?: string;
  message: string;
  date: string;
  time: string;
  timezone?: string;
  channel?: string;
  lang: "en" | "fr";
}

function clean<T extends Record<string, unknown>>(obj: T) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined && v !== "" && !(Array.isArray(v) && v.length === 0))
  ) as Partial<T>;
}

export function whatsappSummary(p: ConsultationPayload, whatsappBase: string) {
  const lines =
    p.lang === "fr"
      ? [
          `Bonjour Franck, je souhaite réserver une consultation stratégique.`,
          `Nom : ${p.name}`,
          p.company && `Entreprise : ${p.company}`,
          `Besoin : ${p.interests.join(", ")}`,
          `Créneau : ${p.date} — ${p.time}${p.timezone ? ` (${p.timezone})` : ""}`,
          `Message : ${p.message}`,
        ]
      : [
          `Hi Franck, I'd like to book a strategy consultation.`,
          `Name: ${p.name}`,
          p.company && `Company: ${p.company}`,
          `Need: ${p.interests.join(", ")}`,
          `Slot: ${p.date} — ${p.time}${p.timezone ? ` (${p.timezone})` : ""}`,
          `Message: ${p.message}`,
        ];
  return `${whatsappBase}?text=${encodeURIComponent(lines.filter(Boolean).join("\n"))}`;
}

/**
 * Saves the request to Firestore (`consultations`) and/or a webhook.
 * Returns "saved" when stored, or "whatsapp" when no backend is configured
 * yet — the caller then opens WhatsApp with the request pre-filled.
 */
export async function submitConsultation(payload: ConsultationPayload): Promise<"saved" | "whatsapp"> {
  const page = typeof window !== "undefined" ? window.location.pathname : "";
  const data = clean({ ...payload, page });
  const results: boolean[] = [];

  if (firebaseReady) {
    try {
      const fs = await import("firebase/firestore/lite");
      const db = await getDb();
      await fs.addDoc(fs.collection(db, "consultations"), { ...data, status: "new", createdAt: fs.serverTimestamp() });
      results.push(true);
    } catch (err) {
      console.error("Consultation could not be saved", err);
      results.push(false);
    }
  }

  if (site.leadWebhook) {
    try {
      const res = await fetch(site.leadWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString(), source: "portfolio" }),
      });
      results.push(res.ok);
    } catch {
      results.push(false);
    }
  }

  track("generate_lead", { form: "consultation", lang: payload.lang });
  // Nothing configured, or every destination failed: hand the request to
  // WhatsApp (pre-filled) so no enquiry is ever lost.
  return results.some(Boolean) ? "saved" : "whatsapp";
}
