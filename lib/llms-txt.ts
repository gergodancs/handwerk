import { EMAIL, PHONE_DISPLAY, WEBSITE_URL } from "@/lib/constants";
import { getBioRefreshPath } from "@/lib/bio-refresh-routes";
import {
  SERVICE_LANDING_KEYS,
  getServiceLandingPath,
} from "@/lib/service-routes";
import { OWNER_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

const SERVICE_LINK_LABELS: Record<
  (typeof SERVICE_LANDING_KEYS)[number],
  { title: string; blurb: string }
> = {
  microcementBathroom: {
    title: "Fugenloses Mikrozement-Bad",
    blurb:
      "Nahtlose, wasserdichte Bad- und Duschoberflächen in Wien (Cemher, Murexin designcoat).",
  },
  allrounderMontage: {
    title: "Allrounder Montage & Reparatur",
    blurb:
      "Montage, Kleinreparaturen, Malerarbeiten und Übergaben – ein Ansprechpartner in Wien.",
  },
  apartmentRefresh: {
    title: "Wohnungs-Refresh",
    blurb:
      "Smartes Update ohne Großbaustelle: Streichen, Spachteln, Übergabereparaturen.",
  },
  designWalls: {
    title: "Designwände & Edelputz",
    blurb:
      "TV-Wände und Akzentflächen: Betonoptik, Marmorino, Venetian Plaster, Limewash.",
  },
};

/**
 * Plain-text summary for LLM crawlers (experimental). Served at /llms.txt.
 * @see https://llmstxt.org/
 */
export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> Handwerk und Wohnungssanierung in Wien – Mikrozement, Refresh, Designwände, Allrounder.`,
    "",
    `${OWNER_NAME} betreut private Wohnungen und institutionelle Objekte in Wien und Umgebung`,
    `(u. a. laufende Instandhaltung an der Indischen Botschaft, 25 Mieteinheiten seit Februar 2026).`,
    `Fixpreise nach Besichtigung; Kontakt per Telefon, E-Mail oder WhatsApp.`,
    "",
    "## Wichtige Seiten (Deutsch)",
    "",
  ];

  for (const key of SERVICE_LANDING_KEYS) {
    const { title, blurb } = SERVICE_LINK_LABELS[key];
    const url = `${SITE_URL}${getServiceLandingPath(key, "de")}`;
    lines.push(`- [${title}](${url}): ${blurb}`);
  }

  lines.push(
    `- [Bio- & Klima-Ausmalen](${SITE_URL}${getBioRefreshPath("de")}): Silikat- und Kalkfarben, lösemittelarm – Unterseite zum Wohnungs-Refresh.`,
    "",
  );

  lines.push(
    "",
    "## Start & Kontakt",
    "",
    `- [Startseite](${SITE_URL}/de): Leistungen, Referenzen, institutionelle Betreuung.`,
    `- Website: ${WEBSITE_URL}`,
    `- E-Mail: ${EMAIL}`,
    `- Telefon: +43 ${PHONE_DISPLAY.replace(/^0/, "")}`,
    "",
    "Englische Inhalte: gleiche Pfade unter `/en/` (z. B. `/en/microcement-bathroom`).",
    "",
  );

  return lines.join("\n");
}
