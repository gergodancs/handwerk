import type { Locale } from "./i18n";

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
      "Altbau-Fensterrettung Wien | Nutenfräsen & Dichtung – Wien Handwerk Profis",
    description:
      "Gergely Dancs – Spezialist für Altbau-Fenster- und Türensanierung in Wien. Schleifen, Lackieren, Nutenfräsen und unsichtbare Silikon-Dichtung gegen Zugluft. Premium Handwerk ohne Subunternehmer.",
    keywords: [
      "Altbau Fenster sanieren Wien",
      "Holzfenster restaurieren Wien",
      "Nutenfräsen Fenster Wien",
      "Fensterdichtung nachrüsten Wien",
      "Kastenfenster sanieren Wien",
      "Zugluft Fenster Wien",
      "Handwerker Wien",
      "Maler Wien",
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
      "Die liebevolle Rettung und Pflege klassischer Wiener Holzfenster, Türen und Rahmen. Ich verwandle verwitterte oder beschädigte Fenster wieder in neuwertige Schmuckstücke – kombiniert mit modernster, unsichtbarer Hohlraum-Fräsdichtung gegen Zugluft und Kälte. Sauber, zuverlässig und direkt vor Ort.",
    ctaWhatsApp: "WhatsApp Chat",
    ctaCall: "Anrufen",
  },
  about: {
    title: "Über mich",
    role: "Altbau-Liebhaber & Handwerker",
    imageAlt: "Gergely Dancs – Altbau-Liebhaber & Handwerker in Wien",
    paragraphs: [
      "Mein Name ist Gergely Dancs. Ich bin nicht nur Handwerker, sondern echter Altbau-Liebhaber. Für mich ist ein altes Wiener Holzfenster kein wertloses Relikt, das man einfach durch Plastik ersetzt, sondern ein Stück Geschichte, das Handwerkskunst und Charakter besitzt.",
      "Mit viel Fingerspitzengefühl, Präzision und Premium-Materialien sorge ich dafür, dass Ihre Fenster und Türen nicht nur optisch wieder im alten Glanz erstrahlen, sondern durch moderne Dichtungstechnik auch perfekt vor Kälte und Lärm schützen. Ehrlich, direkt und ohne Subunternehmer.",
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
    subject: "Anfrage für Handwerksarbeiten - Wien Handwerk Profis",
    body: `Hallo Gergely,

ich interessiere mich für:
[ ] Altbau Fenster- & Türensanierung
[ ] Nutenfräsen & nachträgliche Dichtung
[ ] Malerarbeiten / Allrounder-Service

Bitte kontaktieren Sie mich unter der Telefonnummer: 

Mit freundlichen Grüßen,`,
  },
  services: {
    title: "Meine Leistungen",
    items: [
      {
        title: "Altbau Fenster- & Türensanierung",
        description:
          "Schleifen, Spachteln, Kitten und präzises Lackieren von klassischen Wiener Holzfenstern und Innentüren. Wir erhalten den historischen Charme Ihres Altbaus und retten die Originalsubstanz vor dem teuren Neukauf.",
      },
      {
        title: "Nutenfräsen & Nachträgliche Dichtung",
        description:
          "Schluss mit Zugluft und hohen Heizkosten. Wir fräsen eine präzise 3mm-Nut in den Fensterflügel und setzen eine langlebige Silikon-Schlauchdichtung ein. Unsichtbar, hocheffektiv und drastisch lärmreduzierend.",
      },
      {
        title: "Premium Allrounder & Malerarbeiten",
        description:
          "Feine Innenmalerei, exaktes Spachteln von Rissen sowie fachgerechte Montagen im Alltag (Lampen, Möbel, Regale). Alles aus einer Hand, ohne Subunternehmer, mit Fokus auf absolute Sauberkeit.",
      },
    ],
  },
  gallery: {
    title: "Meine Arbeiten in Wien",
    subtitle:
      "Zwei Schwerpunkte, Schritt für Schritt – vom Ausgangszustand bis zum Premium-Ergebnis. Staubarm, mit Schutz Ihrer Wohnung und ohne offene Fenster über Nacht.",
    projects: [
      {
        title: "Altbau-Fenster Sanierung & Nachträgliche Dichtung",
        phases: [
          { label: "1) Altbau Holz Reparatur" },
          { label: "2) Tür Sanierung Wien" },
          { label: "3) Fenster abdichten einfräsen" },
          { label: "4) Fenster Sanierung Wien" },
        ],
      },
      {
        title: "Premium Allrounder & Malerarbeiten",
        phases: [
          { label: "1) Wand Reparatur Wien" },
          { label: "2) Garderobe streichen Wien" },
          { label: "3) WC Sanierung Mikrozement Wien" },
          { label: "4) Möbelmontage Wien" },
          { label: "5) Treppengeländer Montage Wien" },
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
        question: "Bleibt meine Wohnung während der Sanierung offen oder schmutzig?",
        answer:
          "Absolut nein! Bei klassischen Wiener Kastenfenstern (Doppelfenstern) demontieren wir immer nur eine Ebene (z. B. die Innenflügel), während die andere Ebene geschlossen bleibt. Ihre Wohnung ist zu jeder Zeit sicher und wetterfest. Zudem arbeiten wir mit professionellen Absaugsystemen direkt an unseren Maschinen – der Schleifstaub wird sofort aufgefangen, sodass Ihr Wohnraum sauber bleibt.",
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
        title: "Wiener Kastenfenster-Experte",
        description:
          "Ich kenne den Aufbau klassischer Doppelfenster und saniere schrittweise – ohne dass Ihre Wohnung offen oder ungeschützt bleibt.",
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
      "Altbau Window Restoration Vienna | Routed Sealing & Craftsman – Wien Handwerk Profis",
    description:
      "Gergely Dancs – specialist for Altbau window and door restoration in Vienna. Sanding, painting, routed groove sealing against drafts. Premium craftsmanship, no subcontractors.",
    keywords: [
      "Altbau window restoration Vienna",
      "wooden window renovation Vienna",
      "window draft sealing Vienna",
      "routed groove sealing Vienna",
      "period window restoration Vienna",
      "handyman Vienna",
      "painter Vienna",
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
      "Your Specialist for Period Window Restoration & Premium Craftsman in Vienna",
    subtitle:
      "Dedicated restoration and maintenance of classic Viennese wooden windows, doors, and frames. I transform weathered or damaged windows into pristine centerpieces – combined with modern, invisible routed silicone sealing against drafts and cold. Clean, reliable, and directly on-site.",
    ctaWhatsApp: "WhatsApp Chat",
    ctaCall: "Call Now",
  },
  about: {
    title: "About Me",
    role: "Altbau Enthusiast & Craftsman",
    imageAlt: "Gergely Dancs – Altbau enthusiast & craftsman in Vienna",
    paragraphs: [
      "My name is Gergely Dancs. I am not just a handyman, but a true Altbau enthusiast. To me, an old Viennese wooden window is not a worthless relic to be replaced with plastic, but a piece of history with craftsmanship and character.",
      "With a keen eye for detail, precision, and premium materials, I make sure your windows and doors not only shine again visually, but also protect perfectly against cold and noise through modern sealing technology. Honest, direct, and without subcontractors.",
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
    subject: "Inquiry for Handyman Services - Wien Handwerk Profis",
    body: `Hello Gergely,

I am interested in:
[ ] Altbau window & door restoration
[ ] Routed groove sealing & draft insulation
[ ] Painting / handyman services

Please contact me at the following phone number: 

Best regards,`,
  },
  services: {
    title: "My Services",
    items: [
      {
        title: "Altbau Window & Door Restoration",
        description:
          "Sanding, filling, glazing putty, and precise painting of classic Viennese wooden windows and interior doors. We preserve the historic charm of your period home and save the original fabric from costly replacement.",
      },
      {
        title: "Routed Grooves & Retrofit Sealing",
        description:
          "No more drafts and high heating costs. We rout a precise 3mm groove into the sash and install a durable silicone tube seal. Invisible, highly effective, and dramatically noise-reducing.",
      },
      {
        title: "Premium Handyman & Painting",
        description:
          "Fine interior painting, precise crack filling, and professional everyday installations (lamps, furniture, shelves). Everything from one source, no subcontractors, with absolute focus on cleanliness.",
      },
    ],
  },
  gallery: {
    title: "My Work in Vienna",
    subtitle:
      "Two focus areas, step by step – from the starting condition to a premium finish. Dust-free, protecting your home, and without leaving windows open overnight.",
    projects: [
      {
        title: "Period Window Restoration & Retrofit Sealing",
        phases: [
          { label: "1) Period Wood Repair" },
          { label: "2) Door Restoration Vienna" },
          { label: "3) Window Sealing & Routing" },
          { label: "4) Window Restoration Vienna" },
        ],
      },
      {
        title: "Premium Handyman & Painting",
        phases: [
          { label: "1) Wall Repair Vienna" },
          { label: "2) Built-in Wardrobe Painting Vienna" },
          { label: "3) Microcement Bathroom Vienna" },
          { label: "4) Furniture Assembly Vienna" },
          { label: "5) Stair Railing Installation Vienna" },
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
        question: "Will my apartment stay open or dirty during the restoration?",
        answer:
          "Absolutely not! With classic Viennese box windows (double windows), we always remove only one layer (e.g. the inner sashes) while the other layer stays closed. Your home remains secure and weatherproof at all times. We also use professional dust extraction systems directly on our machines – sanding dust is captured immediately so your living space stays clean.",
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
        title: "Viennese Box Window Expert",
        description:
          "I understand classic double-window construction and restore in stages – without leaving your home open or unprotected.",
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
