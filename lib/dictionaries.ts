import type { Locale } from "./i18n";
import type { ServiceLandingKey } from "./service-routes";
import {
  bioRefreshPageDe,
  bioRefreshPageEn,
} from "./bio-refresh-pages";
import {
  apartmentRefreshPageDe,
  apartmentRefreshPageEn,
  designWallsPageDe,
  designWallsPageEn,
  microcementBathroomPageDe,
  microcementBathroomPageEn,
  allrounderPageDe,
  allrounderPageEn,
} from "./service-pages";
import type {
  AllrounderPageDict,
  ApartmentRefreshPageDict,
  BioRefreshPageDict,
  DesignWallsPageDict,
  MicrocementBathroomPageDict,
} from "./service-page-types";

type ReviewsLabels = {
  title: string;
  subtitle: string;
  sourceLabel: string;
  viewAllLabel: string;
  writeReviewLabel: string;
  starsLabel: string;
  partialApiNote: string;
};

type LocaleDictionary = Omit<Dictionary, "reviews"> & {
  reviews: ReviewsLabels;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImageAlt: string;
  };
  header: {
    companyName: string;
    nav: {
      services: string;
      servicesOverview: string;
      home: string;
      homeSections: string;
      menuTitle: string;
      menuOpen: string;
      menuClose: string;
      gallery: string;
      reviews: string;
      faq: string;
      bioPaintingLink: string;
    };
  };
  homeAudience: {
    title: string;
    intro: string;
    columns: Array<{ title: string; description: string }>;
  };
  serviceLandingCrossNav: {
    label: string;
    ariaLabel: string;
  };
  institutionalCare: {
    eyebrow: string;
    title: string;
    intro: string;
    highlight: string;
    imageAlt: string;
    bullets: string[];
    ctaLabel: string;
  };
  hero: {
    title: string;
    subtitle: string;
    subtitleSecondary: string;
    trustBadges: string[];
    ctaWhatsApp: string;
    ctaCall: string;
  };
  about: {
    title: string;
    role: string;
    imageAlt: string;
    paragraphs: string[];
  };
  sectionCta: {
    text: string;
    whatsapp: string;
    email: string;
  };
  reviews: ReviewsLabels;
  email: {
    buttonText: string;
  };
  services: {
    title: string;
    learnMore: string;
    featuredBio: {
      title: string;
      description: string;
      ctaLabel: string;
    };
    items: Array<{
      title: string;
      description: string;
      landing?: ServiceLandingKey;
    }>;
  };
  gallery: {
    title: string;
    subtitle: string;
    phases: Array<{
      label: string;
    }>;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  microcementFaq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  trust: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  footer: {
    impressum: string;
    impressumTeaser: string;
    privacy: string;
    privacyTeaser: string;
    serviceLinksTitle: string;
    microcementBathroomLink: string;
    allrounderMontageLink: string;
    designWallsLink: string;
    apartmentRefreshLink: string;
    bioPaintingLink: string;
    contactTitle: string;
    rights: string;
  };
  impressumPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    backToHome: string;
    responsibleTitle: string;
    companyLabel: string;
    addressLabel: string;
    address: string;
    contactTitle: string;
    phoneLabel: string;
    emailLabel: string;
    webLabel: string;
    businessTitle: string;
    authorityLabel: string;
    authority: string;
    membershipLabel: string;
    membership: string;
    legalLabel: string;
    legalLinkText: string;
    disputeTitle: string;
    disputeTextBefore: string;
    disputeTextAfter: string;
  };
  privacyPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    backToHome: string;
    lastUpdated: string;
    sections: Array<{
      title: string;
      paragraphs: string[];
    }>;
  };
  floatingCta: {
    whatsapp: string;
    call: string;
  };
  designWallsPage: DesignWallsPageDict;
  apartmentRefreshPage: ApartmentRefreshPageDict;
  bioRefreshPage: BioRefreshPageDict;
  microcementBathroomPage: MicrocementBathroomPageDict;
  allrounderPage: AllrounderPageDict;
};

const de: LocaleDictionary = {
  meta: {
    title:
      "Handwerker Wien | Bio-Ausmalen, Refresh & Montage",
    description:
      "Handwerker in Wien: wohngesundes Bio- & Silikat-Ausmalen, Wohnungs-Refresh, Allrounder-Montage – Spezial auch Mikrozement-Bad & Designwände. Fixpreis nach Besichtigung, sauber & persönlich.",
    ogImageAlt:
      "Wien Handwerk Profis – Bio-Ausmalen, Refresh, Montage und Spezial-Oberflächen in Wien",
    keywords: [
      "Handwerker Wien",
      "Mikrozement Bad Wien",
      "fugenloses Bad Wien",
      "Allrounder Wien",
      "Montage Handwerker Wien",
      "Lampen montieren Wien",
      "TV Wandhalterung montieren Wien",
      "Möbelmontage Wien",
      "Wohnungs-Refresh Wien",
      "Designwände Wien",
      "TV-Wand Wien",
      "Edelputz Wien",
      "Silikonfugen erneuern Wien",
      "Malerarbeiten Wien",
      "Fixpreis Handwerker Wien",
      "TV Wandhalterung montieren Wien",
      "Bilder aufhängen Wien",
      "Indische Botschaft Wien Handwerker",
      "Objektbetreuung Immobilien Wien",
      "Bio Ausmalen Wien",
      "Silikatfarbe Wien",
      "schadstoffarm streichen Wien",
    ],
  },
  header: {
    companyName: "Wien Handwerk Profis",
    nav: {
      services: "Leistungen",
      servicesOverview: "Übersicht auf der Startseite",
      home: "Startseite",
      homeSections: "Auf der Startseite",
      menuTitle: "Menü",
      menuOpen: "Menü öffnen",
      menuClose: "Schließen",
      gallery: "Referenzen",
      reviews: "Bewertungen",
      faq: "FAQ",
      bioPaintingLink: "Bio- & Klima-Ausmalen",
    },
  },
  homeAudience: {
    title: "Für wen ist was?",
    intro:
      "Ob schnelles Übergabe-Streichen, Montage im Alltag oder eine besondere Wand – Sie finden den passenden Einstieg ohne Luxus-Druck.",
    columns: [
      {
        title: "Schnell frisch & wohngesund",
        description:
          "Bio-/Silikat-Ausmalen und Wohnungs-Refresh für Übergabe, Einzug, Kinderzimmer oder Allergiker – lösemittelarm und Fixpreis nach Besichtigung.",
      },
      {
        title: "Klein & praktisch",
        description:
          "Allrounder-Montage: TV, Bilder, Lampen, Möbel, Silikon, Kleinreparaturen – ein Ansprechpartner, sauber erledigt.",
      },
      {
        title: "Besonderes Finish",
        description:
          "Designwände, Limewash oder fugenloses Mikrozement-Bad – wenn Sie mehr als Standardfarbe wollen, mit Muster und Planung vor Ort.",
      },
    ],
  },
  serviceLandingCrossNav: {
    label: "Weitere Leistungen",
    ariaLabel: "Zu anderen Spezial-Leistungen wechseln",
  },
  institutionalCare: {
    eyebrow: "Gewerbe & institutionelle Betreuung",
    title: "Verlässliche Instandhaltung – auch für große Objekte",
    intro:
      "Neben privaten Aufträgen betreue ich laufend gewerbliche und institutionelle Liegenschaften in Wien: planbare Termine, saubere Ausführung und ein fester Ansprechpartner für alle typischen Handwerks- und Montagearbeiten.",
    highlight:
      "Seit Februar 2026 übernehme ich die laufende Instandhaltung der Indischen Botschaft in Wien sowie ein Mietportfolio mit 25 Wohneinheiten – von Kleinreparaturen über Montage bis zu Übergaben.",
    imageAlt:
      "Gergely Dancs vor dem Hintergrund der Embassy of India in Wien – Handwerker und Allrounder",
    bullets: [
      "TV-Wandhalterungen, Bilder, Spiegel und Lampen – fachgerecht und sauber",
      "Sanitär-Kleinaufträge, Silikonfugen, Armaturen und Übergabereparaturen",
      "Möbelmontage, Karniese und Allrounder-Arbeiten aus einer Hand",
      "Transparente Abrechnung – Stundensatz oder Paket nach Absprache",
    ],
    ctaLabel: "Zum Allrounder & Montage-Service",
  },
  hero: {
    title:
      "Handwerker in Wien – wohngesundes Ausmalen, Refresh & Montage",
    subtitle:
      "Bio- & Silikat-Anstriche, Wohnungs-Refresh und Allrounder-Arbeiten – sauber, termingerecht, mit fairen Fixpreisen nach Besichtigung.",
    subtitleSecondary:
      "Spezial-Leistungen auf Wunsch: fugenlose Mikrozement-Bäder, Designwände & Edelputz – persönlich vom Meister, ohne wechselnde Subunternehmer.",
    trustBadges: [
      "Lösemittelarm & staubreduziert",
      "Sauber & Termingerecht",
      "Festpreis nach Besichtigung",
    ],
    ctaWhatsApp: "WhatsApp Chat",
    ctaCall: "Anrufen",
  },
  about: {
    title: "Über mich",
    role: "Handwerker & Maler in Wien – Bio-Ausmalen, Refresh & Spezial-Oberflächen",
    imageAlt:
      "Gergely Dancs – Handwerker, Bio-Ausmalen und Refresh in Wien",
    paragraphs: [
      "Mein Name ist Gergely Dancs. Ich helfe Eigentümern und Mietern in Wien mit dem, was im Alltag zählt: wohngesundes Ausmalen mit Silikat- und Kalkfarben, komplette Wohnungs-Refreshs und zuverlässige Montage – sauber, pünktlich, mit transparenten Fixpreisen.",
      "Wenn Sie mehr als eine Standardfarbe wünschen, setze ich auch fugenlose Mikrozement-Bäder sowie Designwände um – Betonoptik, Limewash, Marmorino oder Venetian Plaster. Alles aus einer Hand, persönlich und ohne wechselnde Subunternehmer.",
    ],
  },
  sectionCta: {
    text: "Fotos per WhatsApp senden – ich melde mich schnell mit einem fairen Fixpreis.",
    whatsapp: "WhatsApp Anfrage",
    email: "E-Mail senden",
  },
  reviews: {
    title: "Das sagen meine Kunden",
    subtitle: "Google Bewertungen",
    sourceLabel: "Google Bewertungen",
    viewAllLabel: "Alle Bewertungen auf Google ansehen",
    writeReviewLabel: "Bewertung auf Google schreiben",
    starsLabel: "Sterne",
    partialApiNote:
      "Hinweis: Über die öffentliche Google API werden maximal 5 Bewertungen angezeigt. Alle {count} Bewertungen finden Sie auf Google.",
  },
  email: {
    buttonText: "E-Mail senden",
  },
  services: {
    title: "Meine Leistungen",
    learnMore: "Mehr erfahren",
    featuredBio: {
      title: "Bio- & klimafreundliches Ausmalen",
      description:
        "Silikat- und Kalkfarben, lösemittelarm – ideal für Kinderzimmer, Übergabe, Altbau und Allergiker. Staubreduziert verarbeitet, Fixpreis nach Besichtigung.",
      ctaLabel: "Zur Bio- & Klima-Seite →",
    },
    items: [
      {
        title: "Wohnungs-Refresh & Ausmalen",
        description:
          "Smartes Update ohne Großbaustelle: Streichen, Schalter, Lampen und mehr – optional mit Bio-/Silikat-Anstrich als Klima-Upgrade.",
        landing: "apartmentRefresh",
      },
      {
        title: "Allrounder Handwerk & Montage",
        description:
          "TV, Bilder, Lampen, Möbel, Silikon und Kleinreparaturen – praktische Hilfe im Haushalt, zuverlässig aus einer Hand.",
        landing: "allrounderMontage",
      },
      {
        title: "Designwände & Edelputz",
        description:
          "Für alle, die mehr als Standardfarbe wollen: TV-Wände, Limewash, Marmorino – mit Muster vor Ort, ohne überladenen Luxus-Jargon.",
        landing: "designWalls",
      },
      {
        title: "Mikrozement & fugenlose Bäder",
        description:
          "Spezial für moderne, fugenlose Bäder und Duschen – wasserfest und pflegeleicht. Für geplante Bad-Updates mit Besichtigung und Festpreis.",
        landing: "microcementBathroom",
      },
    ],
  },
  gallery: {
    title: "Meine Arbeiten in Wien",
    subtitle:
      "Ausgewählte Projekte – Mikrozement, Montage & Reparatur, Wohnungs-Refresh, Designwände und Altbau-Arbeiten in Wien und Umgebung.",
    phases: [
      { label: "Vorher Nachher Wohnung" },
      { label: "Mikrocement Verarbeitung" },
      { label: "Mikrozement Oberfläche" },
      { label: "Mikrocement WC Betonoptik" },
      { label: "Altbau Fenster Reparatur Wien" },
      { label: "Bohrlöcher spachteln Wien" },
      { label: "Fenster abdichten einfräsen" },
      { label: "Treppengeländer Montage Wien" },
    ],
  },
  microcementFaq: {
    title: "Häufig gestellte Fragen zu Mikrozement & Preisen",
    items: [
      {
        question: "Was kostet Mikrozement pro m²?",
        answer:
          "Als Orientierung: ab 160 € pro m² (bei Flächen ab ca. 10 m²) inklusive Material und Verarbeitung mit Premium-Mikrozement (z. B. Cemher) – abhängig von Fläche, Untergrund und Detailgrad. Nach Fotos und Besichtigung erhalten Sie einen transparenten Festpreis.",
      },
      {
        question: "Was wird bei Vorarbeiten extra berechnet?",
        answer:
          "Demontage und Wiederanbringung von Sanitäranlagen (WC, Waschbecken, Armaturen) sowie spezielle Untergrundvorbereitungen werden individuell nach Aufwand separat kalkuliert – vor Beginn der Arbeiten schriftlich fixiert.",
      },
      {
        question: "Ist Mikrozement eine günstige Alternative zu Fliesen?",
        answer:
          "Nein, Mikrozement ist ein exklusiver Oberflächenbelag. Der finanzielle Vorteil liegt nicht im Materialpreis, sondern im Entfall der Abrissarbeiten: Sie sparen Lärm, Schmutz, Entsorgungskosten und Zeit, da der Belag direkt auf bestehende Fliesen aufgetragen werden kann.",
      },
      {
        question: "Warum ist die Verarbeitung so aufwendig?",
        answer:
          "Anders als in Online-Videos dargestellt, ist Mikrozement kein einfaches Spachteln. Es erfordert präzise Untergrundvorbereitung, ein mehrschichtiges System (Grundierung, Gewebe, Basis- und Feinschichten, Versiegelung) sowie die strikte Einhaltung der Trocknungszeiten des Herstellers.",
      },
      {
        question: "Welche Vorteile bietet Mikrozement?",
        answer:
          "Sie erhalten eine fugenlose, moderne und leicht zu reinigende Oberfläche in handwerklicher Unikat-Optik, die vollkommen wasserfest und langlebig ist.",
      },
    ],
  },
  faq: {
    title: "Häufig gestellte Fragen (FAQ)",
    items: [
      {
        question: "Wie erhalte ich am schnellsten ein Angebot?",
        answer:
          "Am einfachsten per WhatsApp oder E-Mail. Senden Sie mir Fotos der Wohnung, des Bads oder der zu renovierenden Flächen – ich nenne Ihnen in den meisten Fällen direkt einen fairen Fixpreis ohne versteckte Kosten.",
      },
      {
        question: "Bleibt die Wohnung während der Sanierung bewohnbar?",
        answer:
          "Je nach Umfang arbeite ich raumweise und schütze Möbel sowie Böden sorgfältig ab. Staubarme Vorbereitung, saubere Baustellenführung und klare Absprachen sorgen dafür, dass Ihr Alltag so wenig wie möglich gestört wird.",
      },
      {
        question: "Welche Materialien verwenden Sie für Mikrocement?",
        answer:
          "Für fugenlose Bäder, Duschen und Betonoptik-Wände arbeite ich mit Murexin designcoat und Cemher – hochwertige Systeme für wasserfeste, nahtlose Oberflächen. Für Maler- und Spachtelarbeiten setze ich bewährte Premium-Produkte ein.",
      },
      {
        question: "In welchen Bezirken in Wien sind Sie tätig?",
        answer:
          "Ich bin im gesamten Wiener Raum und Umgebung im Einsatz – Mikrozement-Bäder, Wohnungs-Refresh, Designwände und Allrounder-Montage. Besonders häufig in Bezirken wie Innere Stadt, Hietzing, Währing und Döbling; kurzfristige Termine sind in ganz Wien möglich.",
      },
      {
        question: "Betreuen Sie auch institutionelle Objekte?",
        answer:
          "Ja. Seit Februar 2026 übernehme ich die laufende Instandhaltung der Indischen Botschaft in Wien sowie ein Mietportfolio mit 25 Wohneinheiten – neben privaten Aufträgen für Montage, Sanitär-Kleinaufträge und Refresh.",
      },
      {
        question: "Bieten Sie schadstoffarmes Bio- bzw. Silikat-Ausmalen an?",
        answer:
          "Ja – als Öko- & Klima-Upgrade zum Wohnungs-Refresh mit lösemittelarmen Silikat- und Kalkfarben, staubreduziert verarbeitet. Ausführliche Infos, Ablauf und FAQ finden Sie auf der Unterseite „Bio- & Klima-Ausmalen“ (über Wohnungs-Refresh erreichbar).",
      },
    ],
  },
  trust: {
    title: "Warum mich wählen?",
    items: [
      {
        title: "Sauberkeit & Fixpreise",
        description:
          "Abgedeckte Böden, saubere Baustelle und transparente Pauschalpreise – Sie wissen vorab, was die Wohnungssanierung kostet.",
      },
      {
        title: "Mikrocement-Spezialist",
        description:
          "Fugenlose Bäder und Betonoptik mit Murexin designcoat und Cemher – wasserfest, modern und ohne Fliesenfugen.",
      },
      {
        title: "Alles aus einer Hand",
        description:
          "Mikrozement, Refresh, Designwände und Allrounder-Montage – ein Ansprechpartner mit eigenen Detailseiten und klaren Leistungen.",
      },
    ],
  },
  footer: {
    impressum: "Impressum",
    impressumTeaser: "Rechtliche Informationen und Kontaktdaten.",
    privacy: "Datenschutz",
    privacyTeaser: "Informationen zur Verarbeitung Ihrer Daten (DSGVO).",
    serviceLinksTitle: "Spezial-Leistungen",
    microcementBathroomLink: "Mikrozement-Bad",
    allrounderMontageLink: "Allrounder & Montage",
    designWallsLink: "Designwände & TV-Wand",
    apartmentRefreshLink: "Wohnungs-Refresh",
    bioPaintingLink: "Bio- & Klima-Ausmalen",
    contactTitle: "Kontakt",
    rights: "© Wien Handwerk Profis. Alle Rechte vorbehalten.",
  },
  impressumPage: {
    metaTitle: "Impressum – Wien Handwerk Profis",
    metaDescription:
      "Impressum und rechtliche Angaben zu Wien Handwerk Profis – Gergely Dancs, Wohnungssanierung und Mikrocement in Wien.",
    title: "Impressum",
    backToHome: "← Zurück zur Startseite",
    responsibleTitle: "Für den Inhalt verantwortlich",
    companyLabel: "Unternehmensbezeichnung",
    addressLabel: "Standort der Gewerbeberechtigung",
    address: "Penzinger Str. 29-31/3/12, 1140 Wien",
    contactTitle: "Kontaktdaten",
    phoneLabel: "Tel",
    emailLabel: "E-Mail",
    webLabel: "Web",
    businessTitle: "Gewerbeinformationen",
    authorityLabel: "Behörde gem. ECG",
    authority: "Magistratisches Bezirksamt des XIV. Bezirkes",
    membershipLabel: "Mitgliedschaft",
    membership: "Mitglied der Wirtschaftskammer Wien (WKO)",
    legalLabel: "Berufsrecht",
    legalLinkText: "Gewerbeordnung",
    disputeTitle: "Online-Streitbeilegung",
    disputeTextBefore:
      "Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:",
    disputeTextAfter:
      "Sie können allfällige Beschwerden auch an die oben angegebene E-Mail-Adresse richten.",
  },
  privacyPage: {
    metaTitle: "Datenschutz – Wien Handwerk Profis",
    metaDescription:
      "Datenschutzerklärung von Wien Handwerk Profis: Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
    title: "Datenschutzerklärung",
    backToHome: "← Zurück zur Startseite",
    lastUpdated: "Stand: Juni 2026",
    sections: [
      {
        title: "1. Verantwortlicher",
        paragraphs: [
          "Verantwortlich für die Datenverarbeitung auf dieser Website ist Gergely Dancs, Penzinger Str. 29-31/3/12, 1140 Wien, Österreich. E-Mail: info@wien-handwerk-profis.at, Telefon: 0660 8956377.",
        ],
      },
      {
        title: "2. Zweck der Website",
        paragraphs: [
          "Diese Website informiert über Wohnungssanierung, Mikrocement-Oberflächen und Handwerksleistungen in Wien. Sie können mich per Telefon, E-Mail oder WhatsApp kontaktieren, um eine Anfrage zu stellen oder Fotos von geplanten Arbeiten zu senden.",
        ],
      },
      {
        title: "3. Welche Daten werden verarbeitet?",
        paragraphs: [
          "Bei einer Kontaktaufnahme verarbeite ich die von Ihnen übermittelten Daten (z. B. Name, Telefonnummer, E-Mail-Adresse, Inhalt der Nachricht sowie von Ihnen freiwillig gesendete Fotos). Beim Besuch der Website können technisch notwendige Server-Logdaten verarbeitet werden (z. B. IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite, Browsertyp).",
          "Auf der Startseite können öffentliche Google-Bewertungen angezeigt werden. Dabei werden Inhalte von Google geladen; es gelten zusätzlich die Datenschutzbestimmungen von Google.",
        ],
      },
      {
        title: "4. Rechtsgrundlagen",
        paragraphs: [
          "Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO), auf Grundlage meines berechtigten Interesses an der sicheren Bereitstellung dieser Website (Art. 6 Abs. 1 lit. f DSGVO) sowie – soweit erforderlich – auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).",
        ],
      },
      {
        title: "5. Hosting",
        paragraphs: [
          "Diese Website wird bei Vercel Inc. gehostet. Dabei können personenbezogene Daten in Drittländern (z. B. USA) verarbeitet werden. Vercel setzt geeignete Garantien für Datenübermittlungen ein. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel.",
        ],
      },
      {
        title: "6. Speicherdauer",
        paragraphs: [
          "Anfragedaten speichere ich nur so lange, wie dies für die Bearbeitung Ihres Anliegens, die Abwicklung eines Auftrags oder die Erfüllung gesetzlicher Aufbewahrungspflichten erforderlich ist.",
        ],
      },
      {
        title: "7. Ihre Rechte",
        paragraphs: [
          "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Wenn Sie der Ansicht sind, dass die Verarbeitung gegen das Datenschutzrecht verstößt, können Sie sich bei der Österreichischen Datenschutzbehörde beschweren (www.dsb.gv.at).",
        ],
      },
      {
        title: "8. Cookies und Analyse-Tools",
        paragraphs: [
          "Diese Website verwendet keine Tracking- oder Marketing-Cookies und kein Analyse-Tool wie Google Analytics. Es werden nur technisch notwendige Funktionen für den Betrieb der Website eingesetzt.",
        ],
      },
    ],
  },
  floatingCta: {
    whatsapp: "WhatsApp",
    call: "Anruf",
  },
  designWallsPage: designWallsPageDe,
  apartmentRefreshPage: apartmentRefreshPageDe,
  bioRefreshPage: bioRefreshPageDe,
  microcementBathroomPage: microcementBathroomPageDe,
  allrounderPage: allrounderPageDe,
};

const en: LocaleDictionary = {
  meta: {
    title:
      "Handyman Vienna | Eco Painting, Refresh & Mounting",
    description:
      "Handyman in Vienna: healthy eco silicate & lime painting, apartment refresh, mounting – specialist microcement bathrooms & design walls too. Fixed quote after viewing, clean & personal.",
    ogImageAlt:
      "Wien Handwerk Profis – eco painting, refresh, mounting and specialist finishes in Vienna",
    keywords: [
      "handyman Vienna",
      "microcement bathroom Vienna",
      "seamless bathroom Vienna",
      "mounting service Vienna",
      "lamp installation Vienna",
      "TV wall mount Vienna",
      "furniture assembly Vienna",
      "apartment refresh Vienna",
      "design walls Vienna",
      "TV feature wall Vienna",
      "silicone renewal bathroom Vienna",
      "painting Vienna",
      "fixed price handyman Vienna",
      "TV wall mount installation Vienna",
      "picture hanging Vienna",
      "Indian Embassy Vienna maintenance",
      "property portfolio maintenance Vienna",
      "eco painting Vienna",
      "silicate paint Vienna",
      "low VOC painting Vienna",
    ],
  },
  header: {
    companyName: "Wien Handwerk Profis",
    nav: {
      services: "Services",
      servicesOverview: "Overview on homepage",
      home: "Home",
      homeSections: "On the homepage",
      menuTitle: "Menu",
      menuOpen: "Open menu",
      menuClose: "Close",
      gallery: "Projects",
      reviews: "Reviews",
      faq: "FAQ",
      bioPaintingLink: "Eco & healthy painting",
    },
  },
  homeAudience: {
    title: "Which service fits you?",
    intro:
      "Whether you need a quick handover repaint, everyday mounting or a special wall – find the right entry point without luxury pressure.",
    columns: [
      {
        title: "Fresh & healthy indoors",
        description:
          "Eco silicate and lime painting plus apartment refresh for handover, move-in, nurseries or allergy households – low-VOC, fixed quote after viewing.",
      },
      {
        title: "Small & practical",
        description:
          "Handyman mounting: TV, pictures, lights, furniture, silicone, small repairs – one contact, done neatly.",
      },
      {
        title: "Special finishes",
        description:
          "Design walls, limewash or seamless microcement bathrooms – when you want more than standard paint, with samples and planning on site.",
      },
    ],
  },
  serviceLandingCrossNav: {
    label: "More services",
    ariaLabel: "Switch to another specialist service page",
  },
  institutionalCare: {
    eyebrow: "Commercial & institutional care",
    title: "Reliable maintenance – including larger properties",
    intro:
      "Alongside private jobs I maintain commercial and institutional buildings in Vienna: reliable scheduling, clean work and one contact for typical handyman and mounting tasks.",
    highlight:
      "Since February 2026 I have been responsible for ongoing maintenance at the Indian Embassy in Vienna and a rental portfolio of 25 residential units – from small repairs and mounting to handover work.",
    imageAlt:
      "Gergely Dancs in front of the Embassy of India backdrop in Vienna – handyman and all-round craftsman",
    bullets: [
      "TV brackets, pictures, mirrors and lights – installed neatly and securely",
      "Small sanitary jobs, silicone joints, taps and handover touch-ups",
      "Furniture assembly, curtain rails and all-round handyman work",
      "Transparent billing – hourly rate or agreed packages",
    ],
    ctaLabel: "Handyman & mounting service",
  },
  hero: {
    title:
      "Handyman in Vienna – healthy painting, refresh & mounting",
    subtitle:
      "Eco silicate and lime coats, apartment refresh and handyman work – clean, on schedule, fair fixed quotes after viewing.",
    subtitleSecondary:
      "Specialist finishes on request: seamless microcement bathrooms, design walls and premium plaster – personally, without rotating subcontractors.",
    trustBadges: [
      "Low-VOC & dust-reduced",
      "Clean & on schedule",
      "Fixed quote after viewing",
    ],
    ctaWhatsApp: "WhatsApp Chat",
    ctaCall: "Call Now",
  },
  about: {
    title: "About Me",
    role: "Handyman & painter in Vienna – eco painting, refresh & specialist surfaces",
    imageAlt:
      "Gergely Dancs – handyman, eco painting and refresh in Vienna",
    paragraphs: [
      "My name is Gergely Dancs. I help owners and tenants in Vienna with what matters day to day: healthy painting with silicate and lime, full apartment refreshes and reliable mounting – clean, on time, transparent fixed prices.",
      "When you want more than standard paint, I also deliver seamless microcement bathrooms and design walls – concrete look, limewash, marmorino or Venetian plaster. One contact, personally, without rotating subcontractors.",
    ],
  },
  sectionCta: {
    text: "Send photos via WhatsApp – I'll get back to you quickly with a fair fixed price.",
    whatsapp: "WhatsApp Inquiry",
    email: "Send E-Mail",
  },
  reviews: {
    title: "What My Clients Say",
    subtitle: "Google Reviews",
    sourceLabel: "Google Reviews",
    viewAllLabel: "View all reviews on Google",
    writeReviewLabel: "Write a review on Google",
    starsLabel: "stars",
    partialApiNote:
      "Note: The public Google API shows up to 5 reviews. View all {count} reviews on Google.",
  },
  email: {
    buttonText: "Send E-Mail",
  },
  services: {
    title: "My Services",
    learnMore: "Learn more",
    featuredBio: {
      title: "Eco & climate-friendly painting",
      description:
        "Silicate and lime paints, low-VOC – ideal for nurseries, handover, period flats and allergy households. Dust-reduced work, fixed quote after viewing.",
      ctaLabel: "Go to eco painting page →",
    },
    items: [
      {
        title: "Apartment refresh & painting",
        description:
          "Smart update without major works: painting, switches, lights and more – optional eco silicate upgrade for healthier indoor air.",
        landing: "apartmentRefresh",
      },
      {
        title: "Handyman work & installation",
        description:
          "TV, pictures, lights, furniture, silicone and small repairs – practical help at home from one contact.",
        landing: "allrounderMontage",
      },
      {
        title: "Design walls & premium plaster",
        description:
          "When you want more than standard paint: TV walls, limewash, marmorino – samples on site, without intimidating luxury jargon.",
        landing: "designWalls",
      },
      {
        title: "Microcement & seamless bathrooms",
        description:
          "Specialist seamless bathrooms and showers – waterproof and easy to clean. For planned bathroom updates with viewing and fixed quote.",
        landing: "microcementBathroom",
      },
    ],
  },
  gallery: {
    title: "My Work in Vienna",
    subtitle:
      "Selected projects – microcement, mounting & repairs, apartment refresh, design walls and period building work in Vienna and surroundings.",
    phases: [
      { label: "Before & after apartment" },
      { label: "Microcement application" },
      { label: "Microcement surface detail" },
      { label: "Microcement WC" },
      { label: "Period window repair Vienna" },
      { label: "Patching drill holes Vienna" },
      { label: "Window sealing groove Vienna" },
      { label: "Stair railing installation Vienna" },
    ],
  },
  microcementFaq: {
    title: "Frequently asked questions about microcement & pricing",
    items: [
      {
        question: "What does microcement cost per m²?",
        answer:
          "As a guide: from €160 per m² (for areas from approx. 10 m²) including materials and application with premium microcement (e.g. Cemher) – depending on area, substrate and detail. After photos and a viewing you receive a transparent fixed price.",
      },
      {
        question: "What preparation work is charged separately?",
        answer:
          "Removal and reinstallation of sanitary fittings (WC, basin, taps) and special substrate preparation are quoted individually based on effort – fixed in writing before work begins.",
      },
      {
        question: "Is microcement a cheap alternative to tiles?",
        answer:
          "No, microcement is a premium surface finish. The financial advantage is not in the material cost, but in avoiding demolition work: you save noise, mess, disposal costs, and time, because the coating can be applied directly over existing tiles.",
      },
      {
        question: "Why is the application so labour-intensive?",
        answer:
          "Unlike what online videos suggest, microcement is not simple skim coating. It requires precise substrate preparation, a multi-layer system (primer, mesh, base and finish coats, sealing), and strict adherence to the manufacturer's drying times.",
      },
      {
        question: "What are the benefits of microcement?",
        answer:
          "You get a seamless, modern, easy-to-clean surface with a bespoke handcrafted look that is fully waterproof and long-lasting.",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions (FAQ)",
    items: [
      {
        question: "How can I get a quote as quickly as possible?",
        answer:
          "The fastest way is via WhatsApp or e-mail. Send photos of your apartment, bathroom, or surfaces to be renovated – in most cases I can give you a fair fixed price immediately with no hidden costs.",
      },
      {
        question: "Can I stay in the apartment during renovation?",
        answer:
          "Depending on scope, I work room by room and protect furniture and floors carefully. Dust-minimizing preparation, clean site management, and clear scheduling keep disruption to a minimum.",
      },
      {
        question: "What materials do you use for microcement?",
        answer:
          "For seamless bathrooms, showers, and concrete-effect walls I use Murexin designcoat and Cemher – premium systems for waterproof, joint-free surfaces. For painting and plastering I rely on proven professional products.",
      },
      {
        question: "Which districts in Vienna do you cover?",
        answer:
          "I work across Vienna and the surrounding area – microcement bathrooms, apartment refresh, design walls and handyman mounting. Especially active in districts such as Innere Stadt, Hietzing, Währing, and Döbling; short-notice appointments are possible city-wide.",
      },
      {
        question: "Do you maintain institutional properties?",
        answer:
          "Yes. Since February 2026 I have been responsible for ongoing maintenance at the Indian Embassy in Vienna and a rental portfolio of 25 units – alongside private jobs for mounting, small sanitary work and refresh.",
      },
      {
        question: "Do you offer low-VOC eco or silicate painting?",
        answer:
          "Yes – as an eco & climate upgrade for apartment refresh with low-emission silicate and lime paints, applied dust-reduced. Full details, process and FAQ are on the “Eco & healthy painting” sub-page (via apartment refresh).",
      },
    ],
  },
  trust: {
    title: "Why Choose Me?",
    items: [
      {
        title: "Clean Work & Fixed Prices",
        description:
          "Protected floors, a tidy site, and transparent fixed pricing – you know the cost of your renovation upfront.",
      },
      {
        title: "Microcement Specialist",
        description:
          "Seamless bathrooms and concrete-effect surfaces with Murexin designcoat and Cemher – waterproof, modern, and joint-free.",
      },
      {
        title: "Everything from One Source",
        description:
          "Microcement, refresh, design walls and handyman mounting – one contact with dedicated detail pages.",
      },
    ],
  },
  footer: {
    impressum: "Legal Notice",
    impressumTeaser: "Legal information and contact details.",
    privacy: "Privacy Policy",
    privacyTeaser: "How we process your personal data (GDPR).",
    serviceLinksTitle: "Specialist services",
    microcementBathroomLink: "Microcement bathroom",
    allrounderMontageLink: "Handyman & mounting",
    designWallsLink: "Design walls & TV wall",
    apartmentRefreshLink: "Apartment refresh",
    bioPaintingLink: "Eco & healthy painting",
    contactTitle: "Contact",
    rights: "© Wien Handwerk Profis. All rights reserved.",
  },
  impressumPage: {
    metaTitle: "Legal Notice – Wien Handwerk Profis",
    metaDescription:
      "Legal notice and company information for Wien Handwerk Profis – Gergely Dancs, apartment renovation and microcement in Vienna.",
    title: "Legal Notice (Impressum)",
    backToHome: "← Back to homepage",
    responsibleTitle: "Responsible for content",
    companyLabel: "Company name",
    addressLabel: "Registered business address",
    address: "Penzinger Str. 29-31/3/12, 1140 Vienna",
    contactTitle: "Contact details",
    phoneLabel: "Phone",
    emailLabel: "E-mail",
    webLabel: "Website",
    businessTitle: "Business information",
    authorityLabel: "Authority pursuant to ECG",
    authority: "Magistrate of the 14th District",
    membershipLabel: "Membership",
    membership: "Member of the Vienna Chamber of Commerce (WKO)",
    legalLabel: "Trade regulations",
    legalLinkText: "Gewerbeordnung (Trade Regulations Act)",
    disputeTitle: "Online dispute resolution",
    disputeTextBefore:
      "Consumers have the opportunity to submit complaints to the EU Online Dispute Resolution platform:",
    disputeTextAfter:
      "You may also send any complaints to the e-mail address listed above.",
  },
  privacyPage: {
    metaTitle: "Privacy Policy – Wien Handwerk Profis",
    metaDescription:
      "Privacy policy of Wien Handwerk Profis: information on personal data processing under the GDPR.",
    title: "Privacy Policy",
    backToHome: "← Back to homepage",
    lastUpdated: "Last updated: June 2026",
    sections: [
      {
        title: "1. Data controller",
        paragraphs: [
          "The data controller for this website is Gergely Dancs, Penzinger Str. 29-31/3/12, 1140 Vienna, Austria. E-mail: info@wien-handwerk-profis.at, phone: +43 660 8956377.",
        ],
      },
      {
        title: "2. Purpose of this website",
        paragraphs: [
          "This website provides information about apartment renovation, microcement surfaces, and handyman services in Vienna. You can contact me by phone, e-mail, or WhatsApp to request a quote or send photos of planned work.",
        ],
      },
      {
        title: "3. What data is processed?",
        paragraphs: [
          "When you contact me, I process the data you provide (e.g. name, phone number, e-mail address, message content, and photos you voluntarily send). When you visit the website, technically necessary server log data may be processed (e.g. IP address, time of access, page requested, browser type).",
          "Public Google reviews may be displayed on the homepage. Content is loaded from Google; Google's privacy policy also applies.",
        ],
      },
      {
        title: "4. Legal bases",
        paragraphs: [
          "Processing is carried out to handle your inquiry and for pre-contractual measures (Art. 6(1)(b) GDPR), based on my legitimate interest in providing this website securely (Art. 6(1)(f) GDPR), and – where required – on your consent (Art. 6(1)(a) GDPR).",
        ],
      },
      {
        title: "5. Hosting",
        paragraphs: [
          "This website is hosted by Vercel Inc. Personal data may be processed in third countries (e.g. the USA). Vercel uses appropriate safeguards for data transfers. Further information is available in Vercel's privacy policy.",
        ],
      },
      {
        title: "6. Retention",
        paragraphs: [
          "I store inquiry data only as long as necessary to handle your request, perform a job, or comply with legal retention obligations.",
        ],
      },
      {
        title: "7. Your rights",
        paragraphs: [
          "You have the right to access, rectification, erasure, restriction of processing, data portability, and to object to processing. If you believe processing violates data protection law, you may lodge a complaint with the Austrian Data Protection Authority (www.dsb.gv.at).",
        ],
      },
      {
        title: "8. Cookies and analytics",
        paragraphs: [
          "This website does not use tracking or marketing cookies and does not use analytics tools such as Google Analytics. Only technically necessary functions are used to operate the site.",
        ],
      },
    ],
  },
  floatingCta: {
    whatsapp: "WhatsApp",
    call: "Call",
  },
  designWallsPage: designWallsPageEn,
  apartmentRefreshPage: apartmentRefreshPageEn,
  bioRefreshPage: bioRefreshPageEn,
  microcementBathroomPage: microcementBathroomPageEn,
  allrounderPage: allrounderPageEn,
};

const dictionaries: Record<Locale, LocaleDictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
