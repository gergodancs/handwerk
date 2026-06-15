import type { Locale } from "./i18n";

type ReviewsLabels = {
  title: string;
  subtitle: string;
  sourceLabel: string;
  viewAllLabel: string;
  writeReviewLabel: string;
  starsLabel: string;
};

type LocaleDictionary = Omit<Dictionary, "reviews"> & {
  reviews: ReviewsLabels;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  header: {
    companyName: string;
  };
  hero: {
    title: string;
    subtitle: string;
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
    subject: string;
    body: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  gallery: {
    title: string;
    subtitle: string;
    projects: Array<{
      title: string;
      phases: Array<{
        label: string;
      }>;
    }>;
  };
  faq: {
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
    contactTitle: string;
    rights: string;
  };
  impressumPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    backToHome: string;
    responsibleTitle: string;
    nameLabel: string;
    companyLabel: string;
    addressLabel: string;
    address: string;
    contactTitle: string;
    phoneLabel: string;
    emailLabel: string;
    webLabel: string;
    businessTitle: string;
    gisaLabel: string;
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
  floatingCta: {
    whatsapp: string;
    call: string;
  };
};

const de: LocaleDictionary = {
  meta: {
    title:
      "Handwerker & Maler Wien | Altbau-Fensterrenovierung – Wien Handwerk Profis",
    description:
      "Gergely Dancs – Ihr Handwerker in Wien für Malerarbeiten, Spachteln, Altbau-Holzfenster-Sanierung und Montageservice. Fixpreise, saubere Arbeit, Einsatz in ganz Wien (u. a. 1., 13., 18., 19. Bezirk).",
    keywords: [
      "Handwerker Wien",
      "Maler Wien",
      "Altbau Fenster renovieren Wien",
      "Holzfenster lackieren Wien",
      "Spachteln Wien",
      "Wand streichen Wien",
      "Allrounder Wien",
      "Montageservice Wien",
      "Handwerk Profis",
      "Hietzing",
      "Döbling",
      "Währing",
    ],
  },
  header: {
    companyName: "Wien Handwerk Profis",
  },
  hero: {
    title:
      "Ihr Spezialist für Altbau-Fensterrettung & Premium Handwerk in Wien",
    subtitle:
      "Die liebevolle Rettung und Pflege alter Wiener Holzfenster, Türen und Rahmen. Als anspruchsvoller Allrounder kümmere ich mich zudem um präzise Ausbesserungen, feine Malerarbeiten und professionelle Montagen – sauber, zuverlässig und mit Blick fürs Detail.",
    ctaWhatsApp: "WhatsApp Chat",
    ctaCall: "Anrufen",
  },
  about: {
    title: "Über mich",
    role: "Ihr Handwerker in Wien",
    imageAlt: "Gergely Dancs – Handwerker in Wien",
    paragraphs: [
      "Mein Name ist Gergely Dancs. Ich bin Ihr persönlicher Ansprechpartner für hochwertige Malerarbeiten, Altbau-Fensterrenovierung und Allrounder-Service in Wien – ohne Subunternehmer, ohne Umwege.",
      "Mit Sorgfalt, Präzision und Premium-Materialien sorge ich dafür, dass Ihr Zuhause nicht nur schöner, sondern auch dauerhaft geschützt ist. Saubere Baustellen und transparente Fixpreise sind für mich selbstverständlich.",
      "Schicken Sie mir einfach Fotos Ihres Projekts per WhatsApp – in den meisten Fällen erhalten Sie noch am selben Tag ein faires Angebot.",
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
  },
  email: {
    buttonText: "E-Mail senden",
    subject: "Anfrage für Handwerksarbeiten - Wien Handwerk Profis",
    body: `Hallo Gergely,

ich interessiere mich für:
[ ] Malerarbeiten
[ ] Fensterrenovierung
[ ] Sonstige Allrounder-Arbeiten

Bitte kontaktieren Sie mich unter der Telefonnummer: 

Mit freundlichen Grüßen,`,
  },
  services: {
    title: "Meine Leistungen",
    items: [
      {
        title: "Altbau Fenster- & Türenrenovierung",
        description:
          "Nachhaltige Sanierung, fachgerechtes Schleifen, Spachteln und präzises Lackieren von verwitterten Holzfenstern, Innentüren und deren Rahmen. Ich rette den alten Wiener Charme, statt teuer auszutauschen.",
      },
      {
        title: "Feine Maler- & Ausbesserungsarbeiten",
        description:
          "Professionelles Ausmalen, exaktes Gletten und die feine Ausbesserung von Wänden und Decken. Saubere Kanten und makellose Oberflächen für Ihr Wohlbefinden.",
      },
      {
        title: "Premium Allrounder & Montageservice",
        description:
          "Schnelle und fachgerechte Hilfe im Alltag: Lampenmontage, Möbelaufbau, kleinere Reparaturen, Sanitärtausch (Armaturen) und Silikonfugen-Erneuerung auf höchstem Niveau.",
      },
    ],
  },
  gallery: {
    title: "Meine Arbeiten in Wien",
    subtitle:
      "Ein ehrlicher Einblick in meine Arbeitsweise – vom Ausgangszustand bis zum perfekten Ergebnis, Schritt für Schritt.",
    projects: [
      {
        title: "Altbau-Fenster Restauration",
        phases: [
          { label: "1) Altbau-Fenster Restauration" },
          { label: "2) Detail Schleifen" },
          { label: "3) Grundierung / Lackierung" },
          { label: "4) Fertiges Ergebnis" },
        ],
      },
      {
        title: "Wand streichen & Spachteln",
        phases: [
          { label: "1) Wand Vorbereitung" },
          { label: "2) Präzises Spachteln" },
          { label: "3) Erster Anstrich" },
          { label: "4) Perfektes Endergebnis" },
        ],
      },
      {
        title: "Allrounder & Montageservice",
        phases: [
          { label: "1) Lampenmontage" },
          { label: "2) Möbelaufbau" },
          { label: "3) Sanitär & Reparatur" },
          { label: "4) Sauberes Endergebnis" },
        ],
      },
    ],
  },
  faq: {
    title: "Häufig gestellte Fragen (FAQ)",
    items: [
      {
        question: "Wie erhalte ich am schnellsten ein Angebot?",
        answer:
          "Am einfachsten und schnellsten geht es per WhatsApp oder E-Mail. Senden Sie mir einfach ein paar Fotos von den zu erledigenden Arbeiten (z. B. der Wand, dem Altbau-Fenster oder der Montageaufgabe) und eine kurze Beschreibung. Ich kann Ihnen in den meisten Fällen direkt einen fairen Pauschalpreis nennen – so gibt es keine bösen Überraschungen oder versteckte Kosten.",
      },
      {
        question:
          "Welche Materialien verwenden Sie für die Altbau-Fenster- und Türenrenovierung?",
        answer:
          "Für klassische Wiener Altbau-Holzfenster und Türen verwende ich ausschließlich hochwertige, langlebige Grundierungen und Lacke von Premium-Marken. Die richtige Vorbereitung (gründliches Schleifen und Spachteln) und Profi-Materialien garantieren, dass das Holz optimal geschützt ist und für viele Jahre wie neu aussieht.",
      },
      {
        question: "In welchen Bezirken in Wien sind Sie tätig?",
        answer:
          "Ich bin im gesamten Wiener Raum für Sie im Einsatz. Da sich mein Schwerpunkt auf die fachgerechte Altbau-Sanierung und hochwertige Pflege von Wohnsitzen konzentriert, bin ich besonders häufig in Bezirken mit hohem Altbau- und Einfamilienhaus-Anteil anzutreffen – wie etwa im 1. Bezirk (Innere Stadt), 13. (Hietzing), 18. (Währing) oder 19. (Döbling). Dank flexibler Routenplanung sind aber in ganz Wien auch kurzfristige Termine möglich.",
      },
    ],
  },
  trust: {
    title: "Warum mich wählen?",
    items: [
      {
        title: "Sauberkeit & Präzision",
        description:
          "Ich schütze Ihr Eigentum penibel, arbeite staubarm und hinterlasse die Baustelle absolut rein.",
      },
      {
        title: "Wiener Altbau-Experte",
        description:
          "Ich verstehe die Struktur alter Wohnungen und weiß genau, wie man empfindliche Holzsubstanzen fachgerecht saniert.",
      },
      {
        title: "Transparente Fixpreise",
        description:
          "Keine versteckten Kosten oder böse Überraschungen. Sie erhalten vorab ein klares, faires Angebot.",
      },
    ],
  },
  footer: {
    impressum: "Impressum",
    impressumTeaser: "Rechtliche Informationen und Kontaktdaten.",
    contactTitle: "Kontakt",
    rights: "© Wien Handwerk Profis. Alle Rechte vorbehalten.",
  },
  impressumPage: {
    metaTitle: "Impressum – Wien Handwerk Profis",
    metaDescription:
      "Impressum und rechtliche Angaben zu Wien Handwerk Profis – Gergely Dancs, Handwerker in Wien.",
    title: "Impressum",
    backToHome: "← Zurück zur Startseite",
    responsibleTitle: "Für den Inhalt verantwortlich",
    nameLabel: "Name",
    companyLabel: "Unternehmensbezeichnung",
    addressLabel: "Standort der Gewerbeberechtigung",
    address: "Penzinger Str. 29-31/3/12, 1140 Wien",
    contactTitle: "Kontaktdaten",
    phoneLabel: "Tel",
    emailLabel: "E-Mail",
    webLabel: "Web",
    businessTitle: "Gewerbeinformationen",
    gisaLabel: "GISA-Zahl",
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
  floatingCta: {
    whatsapp: "WhatsApp",
    call: "Anruf",
  },
};

const en: LocaleDictionary = {
  meta: {
    title:
      "Handyman & Painter Vienna | Altbau Window Restoration – Wien Handwerk Profis",
    description:
      "Gergely Dancs – your handyman in Vienna for painting, plastering, Altbau wooden window restoration and assembly services. Fixed prices, clean work, serving all of Vienna (incl. districts 1, 13, 18, 19).",
    keywords: [
      "handyman Vienna",
      "painter Vienna",
      "Altbau window restoration Vienna",
      "wooden window painting Vienna",
      "plastering Vienna",
      "interior painting Vienna",
      "assembly service Vienna",
      "Wien Handwerk Profis",
      "Hietzing",
      "Döbling",
      "Währing",
    ],
  },
  header: {
    companyName: "Wien Handwerk Profis",
  },
  hero: {
    title:
      "Your Specialist for Altbau Window Restoration & Premium Handyman Services in Vienna",
    subtitle:
      "Dedicated restoration and maintenance of classic Viennese wooden windows, doors, and frames. As a high-end all-rounder and decorator, I also handle precise repairs, fine painting, and professional assembly work – clean, reliable, and with absolute attention to detail.",
    ctaWhatsApp: "WhatsApp Chat",
    ctaCall: "Call Now",
  },
  about: {
    title: "About Me",
    role: "Your handyman in Vienna",
    imageAlt: "Gergely Dancs – handyman in Vienna",
    paragraphs: [
      "My name is Gergely Dancs. I am your personal contact for high-quality painting, Altbau window restoration, and handyman services in Vienna – no subcontractors, no runaround.",
      "With care, precision, and premium materials, I make sure your home not only looks better but stays protected for years. Clean job sites and transparent fixed prices are standard for me.",
      "Simply send me photos of your project via WhatsApp – in most cases, you'll receive a fair quote the same day.",
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
  },
  email: {
    buttonText: "Send E-Mail",
    subject: "Inquiry for Handyman Services - Wien Handwerk Profis",
    body: `Hello Gergely,

I am interested in:
[ ] Painting Works
[ ] Window Restoration
[ ] Other Handyman Services

Please contact me at the following phone number: 

Best regards,`,
  },
  services: {
    title: "My Services",
    items: [
      {
        title: "Altbau Window & Door Restoration",
        description:
          "Sustainable restoration, professional sanding, plastering, and precise painting of weathered wooden windows, interior doors, and frames. I preserve classic Viennese charm instead of costly replacement.",
      },
      {
        title: "Fine Painting & Touch-up Work",
        description:
          "Professional interior painting, precise smoothing, and fine repairs to walls and ceilings. Clean edges and flawless surfaces for your home.",
      },
      {
        title: "Premium Handyman & Assembly Service",
        description:
          "Fast, professional everyday help: lamp installation, furniture assembly, minor repairs, faucet replacement, and silicone joint renewal – at the highest standard.",
      },
    ],
  },
  gallery: {
    title: "My Projects in Vienna",
    subtitle:
      "An honest look at how I work – from the starting condition to a flawless finish, step by step.",
    projects: [
      {
        title: "Altbau Window Restoration",
        phases: [
          { label: "1) Altbau Window Restoration" },
          { label: "2) Detail Sanding" },
          { label: "3) Priming / Painting" },
          { label: "4) Finished Result" },
        ],
      },
      {
        title: "Wall Painting & Plastering",
        phases: [
          { label: "1) Wall Preparation" },
          { label: "2) Precise Plastering" },
          { label: "3) First Coat" },
          { label: "4) Perfect Final Result" },
        ],
      },
      {
        title: "Handyman & Assembly Service",
        phases: [
          { label: "1) Lamp Installation" },
          { label: "2) Furniture Assembly" },
          { label: "3) Plumbing & Repairs" },
          { label: "4) Clean Finished Result" },
        ],
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions (FAQ)",
    items: [
      {
        question: "How can I get a quote as quickly as possible?",
        answer:
          "The easiest and fastest way is via WhatsApp or E-mail. Simply send me a few photos of the work to be done (e.g., the wall, the Altbau window, or the assembly task) along with a short description. In most cases, I can provide you with a fair fixed price (Pauschalpreis) immediately – ensuring no bad surprises or hidden costs.",
      },
      {
        question:
          "What materials do you use for Altbau window and door restoration?",
        answer:
          "For classic Viennese wooden windows and doors, I exclusively use high-quality, durable primers and lacquers from premium brands. Proper preparation (thorough sanding and patching) combined with professional materials guarantees that the wood is perfectly protected and looks brand new for years to come.",
      },
      {
        question: "Which districts in Vienna do you cover?",
        answer:
          "I operate across the entire Vienna area. Since my expertise focuses on professional Altbau restoration and high-quality home maintenance, I am particularly active in districts with a high density of classic old buildings and family homes – such as the 1st district (Innere Stadt), 13th (Hietzing), 18th (Währing), or 19th (Döbling). However, thanks to flexible scheduling, short-notice appointments are possible all over Vienna.",
      },
    ],
  },
  trust: {
    title: "Why Choose Me?",
    items: [
      {
        title: "Cleanliness & Precision",
        description:
          "I meticulously protect your property, minimize dust, and leave the workspace spotless.",
      },
      {
        title: "Altbau Specialist",
        description:
          "I understand the structure of old apartments and know exactly how to professionally restore delicate wooden surfaces.",
      },
      {
        title: "Transparent Fixed Prices",
        description:
          "No hidden fees or surprises. You receive a clear, fair offer before I begin.",
      },
    ],
  },
  footer: {
    impressum: "Legal Notice",
    impressumTeaser: "Legal information and contact details.",
    contactTitle: "Contact",
    rights: "© Wien Handwerk Profis. All rights reserved.",
  },
  impressumPage: {
    metaTitle: "Legal Notice – Wien Handwerk Profis",
    metaDescription:
      "Legal notice and company information for Wien Handwerk Profis – Gergely Dancs, handyman services in Vienna.",
    title: "Legal Notice (Impressum)",
    backToHome: "← Back to homepage",
    responsibleTitle: "Responsible for content",
    nameLabel: "Name",
    companyLabel: "Company name",
    addressLabel: "Registered business address",
    address: "Penzinger Str. 29-31/3/12, 1140 Vienna",
    contactTitle: "Contact details",
    phoneLabel: "Phone",
    emailLabel: "E-mail",
    webLabel: "Website",
    businessTitle: "Business information",
    gisaLabel: "GISA number",
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
  floatingCta: {
    whatsapp: "WhatsApp",
    call: "Call",
  },
};

const dictionaries: Record<Locale, LocaleDictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
