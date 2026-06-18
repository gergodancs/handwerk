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
    ogImageAlt: string;
  };
  header: {
    companyName: string;
    nav: {
      services: string;
      gallery: string;
      reviews: string;
      faq: string;
    };
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
    privacy: string;
    privacyTeaser: string;
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
};

const de: LocaleDictionary = {
  meta: {
    title: "Altbau-Fenster sanieren Wien | Nutenfräsen & Dichtung",
    description:
      "Altbau-Fenster & Türen sanieren in Wien: Schleifen, Lackieren, Nutenfräsen & Silikondichtung gegen Zugluft. Gergely Dancs – Fixpreis per WhatsApp.",
    ogImageAlt:
      "Wien Handwerk Profis – Altbau-Fenster Sanierung und Handwerker Wien",
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
    nav: {
      services: "Leistungen",
      gallery: "Referenzen",
      reviews: "Bewertungen",
      faq: "FAQ",
    },
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
          "Schleifen, Spachteln, Kitten und präzises Lackieren von klassischen Wiener Holzfenstern und Innentüren. Ich erhalte den historischen Charme Ihres Altbaus und rette die Originalsubstanz vor dem teuren Neukauf.",
      },
      {
        title: "Nutenfräsen & Nachträgliche Dichtung",
        description:
          "Schluss mit Zugluft und hohen Heizkosten. Ich fräse eine präzise 3mm-Nut in den Fensterflügel und setze eine langlebige Silikon-Schlauchdichtung ein. Unsichtbar, hocheffektiv und drastisch lärmreduzierend.",
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
          "Absolut nein! Bei klassischen Wiener Kastenfenstern (Doppelfenstern) demontiere ich immer nur eine Ebene (z. B. die Innenflügel), während die andere Ebene geschlossen bleibt. Ihre Wohnung ist zu jeder Zeit sicher und wetterfest. Zudem arbeite ich mit professionellen Absaugsystemen direkt an meinen Maschinen – der Schleifstaub wird sofort aufgefangen, sodass Ihr Wohnraum sauber bleibt.",
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
    privacy: "Datenschutz",
    privacyTeaser: "Informationen zur Verarbeitung Ihrer Daten (DSGVO).",
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
          "Diese Website informiert über Handwerks- und Malerleistungen in Wien mit Schwerpunkt Altbau-Fenster- und Türensanierung. Sie können mich per Telefon, E-Mail oder WhatsApp kontaktieren, um eine Anfrage zu stellen oder Fotos von geplanten Arbeiten zu senden.",
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
};

const en: LocaleDictionary = {
  meta: {
    title: "Altbau Window Restoration Vienna | Routed Sealing",
    description:
      "Altbau window & door restoration in Vienna: sanding, painting, routed sealing against drafts. Gergely Dancs – fair fixed price via WhatsApp.",
    ogImageAlt:
      "Wien Handwerk Profis – period window restoration and handyman Vienna",
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
    nav: {
      services: "Services",
      gallery: "Projects",
      reviews: "Reviews",
      faq: "FAQ",
    },
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
          "Sanding, filling, glazing putty, and precise painting of classic Viennese wooden windows and interior doors. I preserve the historic charm of your period home and save the original fabric from costly replacement.",
      },
      {
        title: "Routed Grooves & Retrofit Sealing",
        description:
          "No more drafts and high heating costs. I rout a precise 3mm groove into the sash and install a durable silicone tube seal. Invisible, highly effective, and dramatically noise-reducing.",
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
          "Absolutely not! With classic Viennese box windows (double windows), I always remove only one layer (e.g. the inner sashes) while the other layer stays closed. Your home remains secure and weatherproof at all times. I also use professional dust extraction systems directly on my machines – sanding dust is captured immediately so your living space stays clean.",
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
    privacy: "Privacy Policy",
    privacyTeaser: "How we process your personal data (GDPR).",
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
          "This website provides information about handyman and painting services in Vienna, with a focus on Altbau window and door restoration. You can contact me by phone, e-mail, or WhatsApp to request a quote or send photos of planned work.",
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
};

const dictionaries: Record<Locale, LocaleDictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
