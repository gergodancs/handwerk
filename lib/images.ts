const REF = "/images/referenzen";
const ALTBAU = `${REF}/altbau-sanierung`;
const ALLROUNDER = `${REF}/allrounder-maler`;
const LEISTUNGEN = "/images/leistungen";
const PROFIL = "/images/profil";

export const OWNER_PROFILE_IMAGE = `${PROFIL}/profil-pic.jpg`;

export const LEISTUNG_IMAGES = {
  altbauFensterSanierung:
    "altbau-fenster-sanierung-nachtraegliche-waermedämmung-wien.jpg",
  handwerkerWien: "handwerker-wien.jpg",
} as const;

export const ALLROUNDER_GALLERY_IMAGES = {
  bohrloecherSpachteln: "bohrloecher-spachteln-wand-reparatur-wien.jpg",
  garderobeStreichen:
    "einbauschrank-renovierung-altbau-garderobe-streichen.jpg",
  wcSanierungMikrozement: "fugenlose-wc-sanierung-mikrozement-wien.jpg",
  moebelmontageIkea: "moebelmontage-wien-ikea-moebel-aufbauen.jpg",
  treppengelaenderMontage: "treppengelaender-montage-holz-metall-wien.jpg",
} as const;

export const ALTBAU_GALLERY_IMAGES = {
  reparaturMorschesHolz:
    "altbau-fenster-reparatur-morsches-holz-sanieren.jpg",
  silikondichtungEinfraesen:
    "fenster-abdichten-altbau-silikondichtung-einfraesen.jpg",
  tuerSanierungSchallschutz:
    "altbau-tuer-sanierung-und-schallschutz-abdichtung.jpg",
  einstellenGegenZugluft:
    "altbau-fenster-einstellen-gegen-zugluft-wien.jpg",
} as const;

export const PROJECT_IMAGES = {
  vorher: `${ALTBAU}/${ALTBAU_GALLERY_IMAGES.reparaturMorschesHolz}`,
  nachher: `${ALTBAU}/${ALTBAU_GALLERY_IMAGES.einstellenGegenZugluft}`,
  dichtungDetail: `${ALTBAU}/${ALTBAU_GALLERY_IMAGES.silikondichtungEinfraesen}`,
} as const;

export const HERO_BACKGROUND = PROJECT_IMAGES.nachher;

export const SERVICE_IMAGES = [
  {
    src: `${LEISTUNGEN}/${LEISTUNG_IMAGES.altbauFensterSanierung}`,
    alt: "Altbau Fenster Sanierung nachträgliche Wärmedämmung Wien",
  },
  {
    src: PROJECT_IMAGES.dichtungDetail,
    alt: "Nutenfräsen Fensterdichtung Altbau Silikondichtung einfräsen Wien",
  },
  {
    src: `${LEISTUNGEN}/${LEISTUNG_IMAGES.handwerkerWien}`,
    alt: "Handwerker Wien Allrounder Malerarbeiten Montage und Reparatur",
  },
] as const;

export const GALLERY_PROJECTS = [
  {
    phases: [
      {
        src: `${ALTBAU}/${ALTBAU_GALLERY_IMAGES.reparaturMorschesHolz}`,
        alt: "Altbau Fenster Reparatur morsches Holz sanieren Wien",
      },
      {
        src: `${ALTBAU}/${ALTBAU_GALLERY_IMAGES.tuerSanierungSchallschutz}`,
        alt: "Altbau Tür Sanierung Schallschutz Abdichtung Wien",
      },
      {
        src: `${ALTBAU}/${ALTBAU_GALLERY_IMAGES.silikondichtungEinfraesen}`,
        alt: "Fenster abdichten Altbau Silikondichtung einfräsen Wien",
      },
      {
        src: `${ALTBAU}/${ALTBAU_GALLERY_IMAGES.einstellenGegenZugluft}`,
        alt: "Altbau Fenster einstellen gegen Zugluft Wien",
      },
    ],
  },
  {
    phases: [
      {
        src: `${ALLROUNDER}/${ALLROUNDER_GALLERY_IMAGES.bohrloecherSpachteln}`,
        alt: "Bohrlöcher spachteln Wand reparieren Handwerker Wien",
      },
      {
        src: `${ALLROUNDER}/${ALLROUNDER_GALLERY_IMAGES.garderobeStreichen}`,
        alt: "Einbauschrank Renovierung Altbau Garderobe streichen Wien",
      },
      {
        src: `${ALLROUNDER}/${ALLROUNDER_GALLERY_IMAGES.wcSanierungMikrozement}`,
        alt: "Fugenlose WC Sanierung Mikrozement Handwerker Wien",
      },
      {
        src: `${ALLROUNDER}/${ALLROUNDER_GALLERY_IMAGES.moebelmontageIkea}`,
        alt: "Möbelmontage Wien IKEA Möbel aufbauen Handwerker",
      },
      {
        src: `${ALLROUNDER}/${ALLROUNDER_GALLERY_IMAGES.treppengelaenderMontage}`,
        alt: "Treppengeländer Montage Holz Metall Handwerker Wien",
      },
    ],
  },
] as const;
