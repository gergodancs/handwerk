const REF = "/images/referenzen";
const WOHNUNG = `${REF}/wohnung-sanierung`;
const MIKROCEMENT = `${REF}/mikrocement`;
const ALTBAU = `${REF}/altbau-sanierung`;
const ALLROUNDER = `${REF}/allrounder-maler`;
const LEISTUNGEN = "/images/leistungen";
const PROFIL = "/images/profil";

export const OWNER_PROFILE_IMAGE = `${PROFIL}/profil-pic.jpg`;

export const WOHNUNG_GALLERY_IMAGES = {
  vorherNachher: "wohnung-sanierung-vorher-nachher-wien.jpg",
  ausgangszustandZimmer: "wien-wohnung-zimmer-sanierung-fertig.png",
} as const;

export const ALTBAU_GALLERY_IMAGES = {
  reparaturMorschesHolz:
    "altbau-fenster-reparatur-morsches-holz-sanieren.jpg",
  silikondichtungEinfraesen:
    "fenster-abdichten-altbau-silikondichtung-einfraesen.jpg",
} as const;

export const ALLROUNDER_GALLERY_IMAGES = {
  bohrloecherSpachteln: "bohrloecher-spachteln-wand-reparatur-wien.jpg",
  treppengelaenderMontage: "treppengelaender-montage-holz-metall-wien.jpg",
} as const;

export const MIKROCEMENT_GALLERY_IMAGES = {
  anwendung: "mikrocement-anwendung-wien-murexin.jpg",
  badDusche: "mikrocement-bad-dusche-fugenlos-wien.jpg",
  wc: "mikrocement-wc-fugenlos-wien.jpg",
} as const;

export const LEISTUNG_IMAGES = {
  wohnungssanierung: "wohnungssanierung-wien.jpg",
  mikrocementBad: "mikrocement-bad-wien.jpg",
  handwerkerWien: "handwerker-wien.jpg",
} as const;

export const HERO_BACKGROUND = `${WOHNUNG}/${WOHNUNG_GALLERY_IMAGES.vorherNachher}`;

export const SERVICE_IMAGES = [
  {
    src: `${LEISTUNGEN}/${LEISTUNG_IMAGES.wohnungssanierung}`,
    alt: "Wohnungssanierung Wien Vorher Nachher Malerarbeiten",
  },
  {
    src: `${LEISTUNGEN}/${LEISTUNG_IMAGES.mikrocementBad}`,
    alt: "Mikrocement Bad fugenlos Wien Murexin designcoat Cemher",
  },
  {
    src: `${LEISTUNGEN}/${LEISTUNG_IMAGES.handwerkerWien}`,
    alt: "Handwerker Wien Altbau Fenster Malerarbeiten Allrounder",
  },
] as const;

export const GALLERY_PHASES = [
  {
    src: `${WOHNUNG}/${WOHNUNG_GALLERY_IMAGES.vorherNachher}`,
    alt: "Wohnungssanierung Wien Vorher Nachher Vergleich",
    objectFit: "contain" as const,
    objectPosition: "center center",
  },
  {
    src: `${WOHNUNG}/${WOHNUNG_GALLERY_IMAGES.ausgangszustandZimmer}`,
    alt: "Wohnungssanierung Wien Ausgangszustand Zimmer",
    aspectRatio: "3/4" as const,
    objectFit: "cover" as const,
    objectPosition: "center center",
  },
  {
    src: `${MIKROCEMENT}/${MIKROCEMENT_GALLERY_IMAGES.anwendung}`,
    alt: "Mikrocement Verarbeitung Wien Murexin designcoat",
    objectFit: "contain" as const,
    objectPosition: "center center",
  },
  {
    src: `${MIKROCEMENT}/${MIKROCEMENT_GALLERY_IMAGES.badDusche}`,
    alt: "Fugenloses Bad Mikrocement Dusche Wien Betonoptik",
    objectFit: "cover" as const,
    objectPosition: "center center",
  },
  {
    src: `${MIKROCEMENT}/${MIKROCEMENT_GALLERY_IMAGES.wc}`,
    alt: "Mikrocement WC fugenlos Wien Cemher Betonoptik",
    objectFit: "cover" as const,
    objectPosition: "center 40%",
  },
  {
    src: `${ALTBAU}/${ALTBAU_GALLERY_IMAGES.reparaturMorschesHolz}`,
    alt: "Altbau Fenster Reparatur morsches Holz sanieren Wien",
    objectFit: "cover" as const,
    objectPosition: "center center",
  },
  {
    src: `${ALLROUNDER}/${ALLROUNDER_GALLERY_IMAGES.bohrloecherSpachteln}`,
    alt: "Bohrlöcher spachteln Wand Reparatur Malerarbeiten Wien",
    objectFit: "cover" as const,
    objectPosition: "center center",
  },
  {
    src: `${ALTBAU}/${ALTBAU_GALLERY_IMAGES.silikondichtungEinfraesen}`,
    alt: "Fenster abdichten Altbau Silikondichtung einfräsen Wien",
    objectFit: "cover" as const,
    objectPosition: "center center",
  },
  {
    src: `${ALLROUNDER}/${ALLROUNDER_GALLERY_IMAGES.treppengelaenderMontage}`,
    alt: "Treppengeländer Montage Holz Metall Handwerker Wien",
    objectFit: "cover" as const,
    objectPosition: "center center",
  },
] as const;
