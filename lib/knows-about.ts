import type { Locale } from "./i18n";

const KNOWS_ABOUT_DE: readonly string[] = [
  "Mikrozement Verarbeitung Wien",
  "Fugenloses Mikrozement-Bad und Dusche",
  "Cemher Mikrozement",
  "Murexin designcoat",
  "Limewash Technik und Kalkfarben",
  "Bio-Kalkfarben und wohngesunde Anstriche",
  "Marmorino und Stucco Veneziano",
  "Designwände und TV-Akzentwände",
  "Betonoptik Wandgestaltung",
  "TV-Wandhalterung fachgerecht montieren",
  "Bilder und Spiegel präzise aufhängen",
  "Vorhangstangen und Karniese montieren",
  "Deckenlampen und LED-Leuchten montieren",
  "Möbelmontage und Schrankaufbau",
  "Silikonfugen erneuern Bad und Dusche",
  "Armaturenwechsel und Sanitär-Tausch",
  "Ausmalen und Malerarbeiten Wien",
  "Spachtelarbeiten und Wandglättung",
  "Wohnungs-Refresh und Übergabereparaturen",
  "Kleinreparaturen und Dübelarbeiten Beton Rigips",
  "Allrounder Handwerker Wien",
  "Instandhaltung Indische Botschaft Wien",
  "Immobilien-Instandhaltung Mietportfolio Wien",
  "Institutionelle Objektbetreuung Wien",
  "Laufende Gewerbe- und Liegenschaftsbetreuung",
];

const KNOWS_ABOUT_EN: readonly string[] = [
  "Microcement application Vienna",
  "Seamless microcement bathroom and shower",
  "Cemher microcement",
  "Murexin designcoat",
  "Limewash and lime paint techniques",
  "Eco lime paints and low-emission coatings",
  "Marmorino and Stucco Veneziano",
  "Design walls and TV feature walls",
  "Concrete-look wall finishes",
  "TV wall bracket installation",
  "Picture and mirror hanging",
  "Curtain rails and poles installation",
  "Ceiling lights and LED fitting installation",
  "Furniture and cabinet assembly",
  "Silicone joint renewal bathroom and shower",
  "Tap replacement and sanitary swap",
  "Painting and decorating Vienna",
  "Skimming and wall smoothing",
  "Apartment refresh and handover repairs",
  "Small repairs and anchor fixing concrete drywall",
  "Handyman services Vienna",
  "Maintenance Indian Embassy Vienna",
  "Rental property portfolio maintenance Vienna",
  "Institutional property care Vienna",
  "Ongoing commercial and building maintenance",
];

export function getKnowsAbout(lang: Locale): readonly string[] {
  return lang === "de" ? KNOWS_ABOUT_DE : KNOWS_ABOUT_EN;
}

export function getSchemaBusinessDescription(lang: Locale): string {
  if (lang === "de") {
    return "Handwerker und Allrounder in Wien und Umgebung: Mikrozement, Limewash und Bio-Kalkfarben, Montage (TV-Wandhalterung, Bilder, Lampen, Möbel), Wohnungs-Refresh und Sanitär-Kleinaufträge. Seit Februar 2026 Instandhaltung der Indischen Botschaft in Wien und eines Mietportfolios mit 25 Einheiten.";
  }

  return "Handyman and all-round craftsman in Vienna and surroundings: microcement, limewash and eco lime paints, mounting (TV brackets, pictures, lights, furniture), apartment refresh and small sanitary jobs. Since February 2026 maintaining the Indian Embassy in Vienna and a rental portfolio of 25 units.";
}
