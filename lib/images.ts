const REF = "/images/referenzen";
const WOHNUNG = `${REF}/wohnung-sanierung`;
const MIKROCEMENT = `${REF}/mikrocement`;
const ALTBAU = `${REF}/altbau-sanierung`;
const ALLROUNDER = `${REF}/allrounder-maler`;
const LEISTUNGEN = "/images/leistungen";
const DESIGNWAENDE = "/images/designwaende";
const MIKROZEMENT_BAD = "/images/mikrozement-bad";
const PROFIL = "/images/profil";

export const OWNER_PROFILE_IMAGE = `${PROFIL}/profil-pic.jpg`;

export const WOHNUNG_GALLERY_IMAGES = {
  vorherNachher: "wohnung-sanierung-vorher-nachher-wien.jpg",
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
  oberflaecheTextur: "mikrozement-oberflaeche-textur.jpg",
  wc: "mikrocement-wc-fugenlos-wien.jpg",
} as const;

export const LEISTUNG_IMAGES = {
  wohnungssanierung: "wohnungssanierung-wien.jpg",
  mikrocementBad: "mikrocement-bad-wien.jpg",
  handwerkerWien: "handwerker-wien.jpg",
} as const;

export const HERO_BACKGROUND =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80";

/** Preview images for design-wall technique cards (order matches techniques in copy). */
export const DESIGN_WALL_TECHNIQUE_PREVIEWS = [
  {
    src: `${DESIGNWAENDE}/betonoptik-tv-wand.png`,
    alt: "Betonoptik TV-Wand mit Steinspachtel-Paneelen",
  },
  {
    src: `${DESIGNWAENDE}/marmorino-struktur.png`,
    alt: "Marmorino Marmormehl-Struktur matt und seidenmatt",
  },
  {
    src: `${DESIGNWAENDE}/venetian-plaster.jpg`,
    alt: "Venetian Plaster Stucco Veneziano im Bad und Wohnraum",
  },
  {
    src: `${DESIGNWAENDE}/limewash-wohnzimmer.png`,
    alt: "Limewash Cloud-Effect Akzentwand im Wohnzimmer",
  },
] as const;

/** Sample-board thumbnails (order matches sampleBoardLabels in copy). */
export const MICROCEMENT_LANDING_GALLERY = [
  {
    src: `${MIKROZEMENT_BAD}/badezimmer-fertig.jpg`,
    alt: "Fertiges Mikrozement-Badezimmer Wien fugenlos",
  },
  {
    src: `${MIKROZEMENT_BAD}/dusche-fugenlos.jpg`,
    alt: "Fugenlose Mikrozement-Dusche Wien",
  },
  {
    src: `${MIKROZEMENT_BAD}/verarbeitung-wien.jpg`,
    alt: "Mikrozement Verarbeitung Handwerk Wien",
  },
  {
    src: `${MIKROZEMENT_BAD}/oberflaeche-textur.jpg`,
    alt: "Mikrozement Oberfläche Textur Detail",
  },
  {
    src: `${MIKROZEMENT_BAD}/oberflaeche-detail.jpg`,
    alt: "Mikrozement Wand Oberfläche Detail",
  },
] as const;

export const DESIGN_WALL_SAMPLE_BOARDS = [
  {
    src: `${DESIGNWAENDE}/betonoptik-muster.webp`,
    alt: "Musterplatte Betonoptik Struktur",
  },
  {
    src: `${DESIGNWAENDE}/marmorino-muster.jpg`,
    alt: "Musterplatte Marmorino Marmormehl Detail",
  },
  {
    src: `${DESIGNWAENDE}/venetian-plaster-muster.jpg`,
    alt: "Musterplatte Venetian Plaster Hochglanz",
  },
  {
    src: `${DESIGNWAENDE}/limewash-muster.jpg`,
    alt: "Musterplatte Limewash Kalkwasch-Optik",
  },
] as const;

export type ServiceCardImage = {
  src: string;
  alt: string;
  /** Show upper portion of photo (hides lower crop in 16:10 cards). */
  cropTopHalf?: boolean;
};

export const SERVICE_IMAGES: ServiceCardImage[] = [
  {
    src: `${LEISTUNGEN}/microzement-oberflaeche-detail.jpg`,
    alt: "Mikrozement Oberfläche fugenlos Wien Bad und Dusche",
    cropTopHalf: true,
  },
  {
    src: `${LEISTUNGEN}/${LEISTUNG_IMAGES.handwerkerWien}`,
    alt: "Handwerker Wien Altbau Fenster Malerarbeiten Allrounder",
  },
  {
    src: `${LEISTUNGEN}/${LEISTUNG_IMAGES.wohnungssanierung}`,
    alt: "Wohnungs-Refresh Wien Ausmalen Modernisierung",
  },
  {
    src: `${DESIGNWAENDE}/venetian-plaster.jpg`,
    alt: "Designwände Venetian Plaster und Edelputz Wien",
    cropTopHalf: true,
  },
];

export const GALLERY_PHASES = [
  {
    src: `${WOHNUNG}/${WOHNUNG_GALLERY_IMAGES.vorherNachher}`,
    alt: "Wohnungssanierung Wien Vorher Nachher Vergleich",
    objectFit: "contain" as const,
    objectPosition: "center center",
  },
  {
    src: `${MIKROCEMENT}/${MIKROCEMENT_GALLERY_IMAGES.anwendung}`,
    alt: "Mikrocement Verarbeitung Wien Murexin designcoat",
    objectFit: "contain" as const,
    objectPosition: "center center",
  },
  {
    src: `${MIKROCEMENT}/${MIKROCEMENT_GALLERY_IMAGES.oberflaecheTextur}`,
    alt: "Mikrozement Oberfläche Textur Detail fugenlos Wien",
    aspectRatio: "3/4" as const,
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
