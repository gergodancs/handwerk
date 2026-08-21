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
    title: "Wohnungssanierung Wien | Mikrocement & fugenlose Bäder",
    description:
      "Wohnung renovieren in Wien: Malen, Spachteln, komplette Sanierung. Mikrocement, fugenlose Bäder & Betonoptik mit Murexin designcoat & Cemher. Fixpreis per WhatsApp.",
    ogImageAlt:
      "Wien Handwerk Profis – Wohnungssanierung und Mikrocement Wien",
    keywords: [
      "Wohnungssanierung Wien",
      "Wohnung renovieren Wien",
      "Mikrocement Wien",
      "fugenloses Bad Wien",
      "Betonoptik Wände Wien",
      "Murexin designcoat Wien",
      "Cemher Wien",
      "Maler Wien",
      "Wohnung sanieren Wien",
      "Bad renovieren Wien",
      "Handwerker Wien",
      "Altbau Wohnung Wien",
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
    title: "Ihr Spezialist für Wohnungssanierung & Mikrocement in Wien",
    subtitle:
      "Komplette Wohnungsrenovierung von Malerarbeiten und Spachteln bis zur fertigen Wohnung – plus fugenlose Mikrocement-Oberflächen in Bad und WC. Ich arbeite sauber, termingerecht und mit Premium-Materialien wie Murexin designcoat und Cemher. Altbau-Fenster und Allrounder-Leistungen als Ergänzung.",
    ctaWhatsApp: "WhatsApp Chat",
    ctaCall: "Anrufen",
  },
  about: {
    title: "Über mich",
    role: "Wohnungssanierung & Mikrocement in Wien",
    imageAlt: "Gergely Dancs – Wohnungssanierung und Mikrocement in Wien",
    paragraphs: [
      "Mein Name ist Gergely Dancs. Ich renoviere Wohnungen in Wien von der ersten Vorbereitung bis zum bezugsfertigen Ergebnis – Malen, Spachteln, Bodenarbeiten und detailverliebte Ausführung inklusive.",
      "Als Zusatz-Spezialisierung setze ich fugenlose Mikrocement- und Betonoptik-Oberflächen mit Murexin designcoat und Cemher um – ideal für moderne Bäder, WCs und Wandflächen. Dazu kommen Altbau-Fenster und zuverlässiger Allrounder-Service, alles aus einer Hand und ohne Subunternehmer.",
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
    items: [
      {
        title: "Wohnungssanierung Wien",
        description:
          "Komplette Renovierung Ihrer Wohnung: Vorbereitung, Spachteln, Streichen, Detailarbeiten und saubere Übergabe. Ideal für Vermietung, Verkauf oder frisches Wohngefühl – von der Küche bis zum Wohnzimmer, termingerecht und mit Fixpreis.",
      },
      {
        title: "Mikrocement & fugenlose Bäder",
        description:
          "Fugenlose Mikrocement-Oberflächen für Bad, Dusche und WC – wasserfest, pflegeleicht und in modernem Betonlook. Verarbeitung mit Murexin designcoat und Cemher für langlebige, nahtlose Ergebnisse ohne Fliesenfugen.",
      },
      {
        title: "Altbau Fenster & Allrounder",
        description:
          "Ergänzend Altbau-Fenster- und Türensanierung, Nutenfräsen, Malerarbeiten und Montagen im Alltag. Wenn neben der Wohnungssanierung noch Fenster, Wände oder Einbauten anstehen – alles aus einer Hand.",
      },
    ],
  },
  gallery: {
    title: "Meine Arbeiten in Wien",
    subtitle:
      "Ausgewählte Projekte – Wohnungssanierung, Mikrocement, Altbau-Fenster und Allrounder-Arbeiten in Wien.",
    phases: [
      { label: "Vorher Nachher Wohnung" },
      { label: "Ausgangszustand Zimmer" },
      { label: "Mikrocement Verarbeitung" },
      { label: "Fugenloses Bad Dusche" },
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
          "Ich bin im gesamten Wiener Raum im Einsatz – Wohnungssanierung, Mikrocement-Bäder und ergänzend Altbau-Fenster. Besonders häufig in Bezirken wie Innere Stadt, Hietzing, Währing und Döbling; kurzfristige Termine sind in ganz Wien möglich.",
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
          "Wohnungssanierung, Mikrocement und ergänzend Altbau-Fenster – ein Ansprechpartner, keine Subunternehmer.",
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
      "Impressum und rechtliche Angaben zu Wien Handwerk Profis – Gergely Dancs, Wohnungssanierung und Mikrocement in Wien.",
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
};

const en: LocaleDictionary = {
  meta: {
    title: "Apartment Renovation Vienna | Microcement Bathrooms",
    description:
      "Apartment renovation in Vienna: painting, plastering, full refurbishment. Seamless microcement bathrooms with Murexin designcoat & Cemher. Fair fixed price via WhatsApp.",
    ogImageAlt:
      "Wien Handwerk Profis – apartment renovation and microcement Vienna",
    keywords: [
      "apartment renovation Vienna",
      "home renovation Vienna",
      "microcement Vienna",
      "seamless bathroom Vienna",
      "concrete effect walls Vienna",
      "Murexin designcoat Vienna",
      "Cemher Vienna",
      "painter Vienna",
      "bathroom renovation Vienna",
      "handyman Vienna",
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
    title: "Your Specialist for Apartment Renovation & Microcement in Vienna",
    subtitle:
      "Complete apartment refurbishment from painting and plastering to move-in ready results – plus seamless microcement surfaces for bathrooms and WCs. I work cleanly and on schedule with premium materials including Murexin designcoat and Cemher. Period windows and handyman services available as add-ons.",
    ctaWhatsApp: "WhatsApp Chat",
    ctaCall: "Call Now",
  },
  about: {
    title: "About Me",
    role: "Apartment Renovation & Microcement in Vienna",
    imageAlt: "Gergely Dancs – apartment renovation and microcement in Vienna",
    paragraphs: [
      "My name is Gergely Dancs. I renovate apartments across Vienna from initial preparation to a finished, move-in ready result – including painting, plastering, flooring coordination, and meticulous detail work.",
      "I also specialize in seamless microcement and concrete-effect surfaces using Murexin designcoat and Cemher – perfect for modern bathrooms, WCs, and feature walls. Period window restoration and reliable handyman work are available as complementary services, all from one contact with no subcontractors.",
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
    items: [
      {
        title: "Apartment Renovation Vienna",
        description:
          "Complete apartment refurbishment: preparation, plastering, painting, detail work, and a clean handover. Ideal for rental, sale, or a fresh living space – from kitchen to living room, on schedule with fixed pricing.",
      },
      {
        title: "Microcement & Seamless Bathrooms",
        description:
          "Seamless microcement surfaces for bathrooms, showers, and WCs – waterproof, low-maintenance, and in a modern concrete look. Applied with Murexin designcoat and Cemher for durable, joint-free results.",
      },
      {
        title: "Period Windows & Handyman",
        description:
          "Complementary period window and door restoration, routed sealing, painting, and everyday installations. When apartment renovation is combined with windows, walls, or fittings – everything from one source.",
      },
    ],
  },
  gallery: {
    title: "My Work in Vienna",
    subtitle:
      "Selected projects – apartment renovation, microcement, period windows, and handyman work in Vienna.",
    phases: [
      { label: "Before & after apartment" },
      { label: "Room starting condition" },
      { label: "Microcement application" },
      { label: "Seamless shower" },
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
          "I work across Vienna – apartment renovation, microcement bathrooms, and complementary period window work. Especially active in districts such as Innere Stadt, Hietzing, Währing, and Döbling; short-notice appointments are possible city-wide.",
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
          "Apartment renovation, microcement, and complementary period windows – one contact, no subcontractors.",
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
      "Legal notice and company information for Wien Handwerk Profis – Gergely Dancs, apartment renovation and microcement in Vienna.",
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
};

const dictionaries: Record<Locale, LocaleDictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
