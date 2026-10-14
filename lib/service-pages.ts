import type {
  AllrounderPageDict,
  ApartmentRefreshPageDict,
  DesignWallsPageDict,
  MicrocementBathroomPageDict,
} from "./service-page-types";
import { SITE_URL } from "./site";

export const designWallsPageDe: DesignWallsPageDict = {
  metaTitle: "Designwände & Edelputz Wien | TV-Wand & Akzentwände",
  metaDescription:
    "Designwände in Wien und Umgebung: Betonoptik, Marmorino, Venetian Plaster & Limewash. TV-Wand ohne Spiegelung, Musterplatten vor Ort – Fixpreis nach Besichtigung.",
  metaKeywords: [
    "Designwände Wien",
    "TV-Wand Wien",
    "Edelputz Wien",
    "Venetian Plaster Wien",
    "Marmorino Wien",
    "Betonoptik Wand Wien",
    "Limewash Wien",
    "Akzentwand Wohnzimmer",
    "Stucco Veneziano Wien",
    "Wandgestaltung Wien",
  ],
  breadcrumbHome: "Startseite",
  breadcrumbCurrent: "Designwände",
  hero: {
    title: "Exklusive Designwände & Edelputz",
    subtitle:
      "Akzentwände, TV-Hintergründe und handgefertigte Unikate – mit spürbarer Haptik, feinen Strukturen und eleganten Lichtreflexen.",
  },
  dryZoneTitle: "Für trockene Wohnräume – nicht für das Bad",
  dryZoneText:
    "Diese Techniken sind für Wohnzimmer, Schlafzimmer, Flur und Essbereich gedacht. Für fugenlose Bäder, Duschen und WC setze ich Mikrozement ein – wasserfest und nahtlos.",
  dryZoneLinkLabel: "Zum Mikrozement Bad →",
  techniquesTitle: "Techniken & Optiken",
  techniqueFieldLabels: {
    look: "Look",
    idealFor: "Ideal für",
    advantage: "Vorteil",
    care: "Pflege",
    sample: "Muster",
  },
  techniques: [
    {
      title: "Betonoptik & Sichtbeton-Effekt",
      look:
        "Urbane Eleganz im Loft-Style – matte, strukturierte Oberfläche mit feinen Nuancen.",
      idealFor:
        "Moderne TV-Hintergründe, Esszimmer, Kombination mit warmen Holzelementen.",
      advantage:
        "Setzt starke Kontraste zu modernen Möbeln und indirekter LED-Beleuchtung.",
      care:
        "Strapazierfähig, stoßfest, fugenlos und mühelos feucht abwischbar.",
      sample: "Musterplatte auf Anfrage bei Besichtigung vor Ort.",
    },
    {
      title: "Marmorino (Echte Marmormehl-Struktur)",
      look:
        "Edel-matt bis seidenmatt – erzeugt die haptische Tiefe von natürlichem Travertin und Kalkstein.",
      idealFor:
        "TV-Wand im Wohnzimmer, Essbereich, repräsentative Akzentwand im Flur.",
      advantage:
        "Keine Spiegelung: Perfekt für TV-Wände, da kein störender Blendeffekt entsteht.",
      care:
        "Atmungsaktiv, ökologisch auf Kalkbasis, nach Versiegelung pflegeleicht und abwischbar.",
      sample: "Musterplatte auf Anfrage bei Besichtigung vor Ort.",
    },
    {
      title: "Venetian Plaster (Stucco Veneziano)",
      look:
        "Hochglänzend und spiegelglatt – zeitloser Luxus mit marmorähnlicher Lichtreflexion.",
      idealFor:
        "Repräsentative Eingangsbereiche, luxuriöse Nischen und klassische Akzentflächen.",
      advantage:
        "Echter Marmor-Effekt mit extrem glatter, glasartiger Haptik.",
      care:
        "Mit Spezialwachs geschützt, hochgradig wasserabweisend und leicht zu reinigen.",
      sample: "Musterplatte auf Anfrage bei Besichtigung vor Ort.",
    },
    {
      title: "Limewash & Cloud-Effect (Kalkwasch-Optik)",
      look:
        "Sanfte, wolkige Farbverläufe mit natürlicher, mattherber Struktur (Japandi / Wabi-Sabi).",
      idealFor:
        "Schlafzimmer, beruhigende Wohnbereiche, TV-Umfeld in warmen Erdtönen.",
      advantage:
        "100% ökologisch, feuchtigkeitsregulierend und natürlich schimmelhemmend.",
      care: "Matte bis seidenmatte Oberfläche, sanft abwischbar.",
      sample: "Musterplatte auf Anfrage bei Besichtigung vor Ort.",
    },
  ],
  sampleBoardTitle: "Musterplatten statt Stockfotos",
  sampleBoardIntro:
    "Sie sehen echte Oberflächen und Strukturen – keine Renderings. So treffen Sie Ihre Farb- und Technikwahl sicher.",
  sampleBoardCta:
    "Ich bringe Musterplatten zur Besichtigung mit – Sie entscheiden vor Ort.",
  sampleBoardTouchBadge: "Zum Anfassen vor Ort",
  sampleBoardLabels: [
    "Betonoptik",
    "Marmorino",
    "Venetian Plaster",
    "Limewash",
  ],
  tvWallTitle: "TV-Wand Gestaltung",
  tvWallIntro:
    "Ihr Fernseher verdient den perfekten Hintergrund – abgestimmt auf Möbel, Licht und Raumwirkung.",
  tvWallFeatures: [
    {
      title: "Kabelführung",
      description:
        "Saubere Kabelführung / Leerrohr in Abstimmung mit Ihrem Setup.",
    },
    {
      title: "LED-Beleuchtung",
      description:
        "Kombination mit LED-Hintergrundbeleuchtung (nach Absprache).",
    },
    {
      title: "Farbton-Matching",
      description:
        "Abgestimmt auf Parkett, Polster und Einbauschränke.",
    },
  ],
  tvWallTipTitle: "Design-Tipp",
  tvWallTipText:
    "Die TV-Wand wirkt am edelsten, wenn sie einen Ton dunkler oder wärmer ist als die übrigen Flächen – der Fernseher wirkt eingebettet, nicht aufgesetzt.",
  processTitle: "So arbeiten wir",
  processStepLabel: "Schritt",
  processSteps: [
    {
      title: "Beratung starten",
      description: "WhatsApp oder E-Mail – Fotos Ihrer Wand reichen für den ersten Eindruck.",
    },
    {
      title: "Muster vor Ort",
      description: "Technik und Farbe an echten Musterplatten wählen – haptisch und sicher.",
    },
    {
      title: "Fixpreis",
      description: "Transparentes Festpreis-Angebot nach kurzer Besichtigung.",
    },
    {
      title: "Ausführung",
      description: "Vorbereitung der Wand, saubere Arbeit, pünktliche Übergabe.",
    },
  ],
  faqTitle: "Häufige Fragen zu Designwänden",
  faq: [
    {
      question: "Eignet sich das für Altbauwände in Wien?",
      answer:
        "Ja, nach Prüfung des Untergrunds. Risse und Unebenheiten bereite ich fachgerecht vor, damit die Oberfläche dauerhaft hält.",
    },
    {
      question: "Kann ich die Wand später überstreichen?",
      answer:
        "Je nach Technik und System unterschiedlich. In der Beratung kläre ich, welche Lösung zu Ihrem Plan passt – dauerhaft schön oder spätere Anpassung.",
    },
    {
      question: "Wie lange dauert eine TV-Akzentwand?",
      answer:
        "Je nach Größe und Technik meist wenige Tage inklusive Trocknungszeiten – ohne Großbaustelle im ganzen Raum.",
    },
  ],
  whatsappPrefill:
    "Hallo, ich interessiere mich für eine Designwand / TV-Wand in Wien. ",
  learnMore: "Mehr erfahren",
  cta: {
    title: "Beratung & Musterplatten",
    text: "Senden Sie mir ein Foto Ihrer Wand – ich melde mich mit einer ehrlichen Empfehlung und einem fairen Fixpreis.",
    whatsapp: "WhatsApp Anfrage",
    email: "E-Mail senden",
  },
};

export const designWallsPageEn: DesignWallsPageDict = {
  metaTitle: "Design Walls & Premium Plaster Vienna | TV Feature Walls",
  metaDescription:
    "Design walls in Vienna and surroundings: concrete look, marmorino, Venetian plaster & limewash. TV walls without glare, sample boards on site – fixed price after viewing.",
  metaKeywords: [
    "design walls Vienna",
    "TV feature wall Vienna",
    "Venetian plaster Vienna",
    "marmorino Vienna",
    "concrete look wall Vienna",
    "limewash Vienna",
    "accent wall Vienna",
    "premium plaster Vienna",
    "Stucco Veneziano Vienna",
    "wall design Vienna",
  ],
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Design walls",
  hero: {
    title: "Exclusive design walls & premium plaster",
    subtitle:
      "Feature walls, TV backgrounds and handcrafted one-offs – tactile surfaces, fine structure and elegant light reflections.",
  },
  dryZoneTitle: "For dry living spaces – not for bathrooms",
  dryZoneText:
    "These techniques are for living rooms, bedrooms, hallways and dining areas. For seamless bathrooms, showers and WCs I use microcement – waterproof and joint-free.",
  dryZoneLinkLabel: "Microcement bathrooms →",
  techniquesTitle: "Techniques & finishes",
  techniqueFieldLabels: {
    look: "Look",
    idealFor: "Ideal for",
    advantage: "Benefit",
    care: "Care",
    sample: "Sample",
  },
  techniques: [
    {
      title: "Concrete look & fair-faced concrete effect",
      look:
        "Urban loft elegance – matte, structured surface with subtle nuances.",
      idealFor:
        "Modern TV backdrops, dining rooms, paired with warm wood elements.",
      advantage:
        "Strong contrast with contemporary furniture and indirect LED lighting.",
      care: "Hard-wearing, impact-resistant, seamless and easy to wipe clean.",
      sample: "Sample board on request at your viewing.",
    },
    {
      title: "Marmorino (real marble-flour structure)",
      look:
        "Refined matte to satin – tactile depth like natural travertine and limestone.",
      idealFor:
        "TV walls in living rooms, dining areas, statement walls in hallways.",
      advantage:
        "No glare: ideal for TV walls with no distracting reflections on screen.",
      care:
        "Breathable, eco lime base; after sealing, easy-care and wipeable.",
      sample: "Sample board on request at your viewing.",
    },
    {
      title: "Venetian plaster (Stucco Veneziano)",
      look:
        "High-gloss and mirror-smooth – timeless luxury with marble-like light play.",
      idealFor:
        "Representative entrances, luxury niches and classic feature surfaces.",
      advantage:
        "True marble effect with an ultra-smooth, glass-like feel.",
      care:
        "Protected with specialist wax, highly water-repellent and easy to clean.",
      sample: "Sample board on request at your viewing.",
    },
    {
      title: "Limewash & cloud effect",
      look:
        "Soft, cloudy colour washes with a natural matte texture (Japandi / Wabi-Sabi).",
      idealFor:
        "Bedrooms, calm living zones, TV areas in warm earth tones.",
      advantage:
        "100% ecological, moisture-regulating and naturally mould-resistant.",
      care: "Matte to satin finish, gently wipeable.",
      sample: "Sample board on request at your viewing.",
    },
  ],
  sampleBoardTitle: "Sample boards instead of stock photos",
  sampleBoardIntro:
    "You see real finishes and textures – not renders. That makes colour and technique choices confident.",
  sampleBoardCta:
    "I bring sample boards to your viewing – you decide on site.",
  sampleBoardTouchBadge: "Touch on site",
  sampleBoardLabels: [
    "Concrete look",
    "Marmorino",
    "Venetian plaster",
    "Limewash",
  ],
  tvWallTitle: "TV wall design",
  tvWallIntro:
    "Your TV deserves the right backdrop – matched to furniture, light and the feel of the room.",
  tvWallFeatures: [
    {
      title: "Cable routing",
      description:
        "Clean routing / conduit aligned with your setup.",
    },
    {
      title: "LED lighting",
      description:
        "Backlighting integration (by agreement).",
    },
    {
      title: "Colour matching",
      description:
        "Tuned to flooring, upholstery and built-ins.",
    },
  ],
  tvWallTipTitle: "Design tip",
  tvWallTipText:
    "A TV wall one shade darker or warmer than the rest makes the screen feel built-in, not bolted on.",
  processTitle: "How we work",
  processStepLabel: "Step",
  processSteps: [
    {
      title: "Start consultation",
      description: "WhatsApp or e-mail – photos of your wall are enough to begin.",
    },
    {
      title: "Samples on site",
      description: "Choose technique and colour on real boards – tactile and confident.",
    },
    {
      title: "Fixed price",
      description: "Transparent lump-sum quote after a short viewing.",
    },
    {
      title: "Execution",
      description: "Wall prep, clean workmanship, on-time handover.",
    },
  ],
  faqTitle: "FAQ – design walls",
  faq: [
    {
      question: "Does this work on period apartment walls in Vienna?",
      answer:
        "Yes, after checking the substrate. I prepare cracks and uneven areas properly so the finish lasts.",
    },
    {
      question: "Can the wall be painted over later?",
      answer:
        "It depends on the technique and system. In consultation I explain what fits your plans – lasting beauty or future flexibility.",
    },
    {
      question: "How long does a TV feature wall take?",
      answer:
        "Depending on size and technique, usually a few days including drying – without a full-room construction site.",
    },
  ],
  whatsappPrefill:
    "Hello, I am interested in a design wall / TV wall in Vienna. ",
  learnMore: "Learn more",
  cta: {
    title: "Consultation & sample boards",
    text: "Send me a photo of your wall – I will reply with honest advice and a fair fixed price.",
    whatsapp: "WhatsApp inquiry",
    email: "Send e-mail",
  },
};

export const apartmentRefreshPageDe: ApartmentRefreshPageDict = {
  metaTitle: "Wohnungs-Refresh Wien | Ausmalen & Bio-Option",
  metaDescription:
    "Wohnungs-Refresh in Wien: Ausmalen, Schalter, Lampen & Jalousien in 2–5 Tagen – optional lösemittelarmes Bio- & Silikat-Ausmalen. Orientierungspreise in der FAQ, Fixpreis nach Besichtigung.",
  metaKeywords: [
    "Wohnungs-Refresh Wien",
    "Wohnung auffrischen Wien",
    "Ausmalen Wohnung Wien",
    "Bio Ausmalen Wien",
    "Silikatfarbe Wien",
    "schadstoffarm streichen Wien",
    "Wohnung renovieren ohne Umbau",
    "Vermieter Renovierung Wien",
    "bezugsfertig wohnung Wien",
    "Fixpreis Maler Wien",
    "Wohnung vor Neuvermietung",
    "kleine Renovierung Wien",
    "Modernisierung Wohnung Wien",
  ],
  breadcrumbHome: "Startseite",
  breadcrumbCurrent: "Wohnungs-Refresh",
  hero: {
    title: "Wohnungs-Refresh",
    subtitle:
      "Kleine Veränderungen, maximale Wirkung – in Wien und Umgebung, ganz ohne Großbaustelle.",
    tagline: "Sauber · Fixpreis · Bezugsfertig",
  },
  positioningTitle: "Smartes Update – keine Billig-Sanierung",
  positioningText:
    "Ein Wohnungs-Refresh ist kein Komplettumbau. Sie erhalten ein frisches, gepflegtes Zuhause in überschaubarer Zeit – typischerweise innerhalb von 2–5 Tagen, je nach Umfang.",
  durationNote: "Minimaler Staub, maximaler Effekt.",
  featuresTitle: "Leistungen im Überblick",
  audienceTitle: "Für wen?",
  audienceItems: [
    {
      title: "Vermieter vor Neuvermietung",
      description:
        "Schnell bezugsfertig für den nächsten Mieter – ohne Zeitverlust.",
    },
    {
      title: "Eigentümer vor Verkauf",
      description:
        "Maximaler Optik-Boost für Höchstpreise bei Besichtigungen.",
    },
    {
      title: "Neubezug / Einzug",
      description:
        "Das neue Zuhause sofort frisch, sauber und hygienisch genießen.",
    },
    {
      title: "Bestandsmieter",
      description:
        "Modernes Wohngefühl – ganz ohne langwierige Baustelle.",
    },
  ],
  processTitle: "So einfach funktioniert's",
  processSteps: [
    {
      title: "Foto senden",
      description: "Sie schicken mir Fotos oder kurze Videos per WhatsApp.",
    },
    {
      title: "Fixpreis erhalten",
      description: "Ich erstelle ein transparentes Festpreis-Angebot.",
    },
    {
      title: "Termin vereinbaren",
      description: "Kurzfristige Umsetzung ohne lange Wartezeiten.",
    },
    {
      title: "Saubere Übergabe",
      description: "Pünktlich, sauber und bezugsfertig erledigt.",
    },
  ],
  packagesTitle: "Leistungsumfang (Pakete ohne Festpreis-Liste)",
  popularPackageBadge: "BELIEBTESTE WAHL",
  packageDurationLabel: "Dauer",
  packages: [
    {
      name: "Basis",
      duration: "ca. 1–2 Tage",
      items: [
        "Ausmalen in Reinweiß oder moderne Trendfarben",
        "Kleine Wandreparaturen (Dübellöcher, Risse, Macken)",
      ],
    },
    {
      name: "Komfort",
      duration: "ca. 2–3 Tage",
      popular: true,
      items: [
        "Alles aus Basis",
        "Steckdosen & Lichtschalter (Design-Serien)",
        "Türbeschläge & Griffe erneuern",
      ],
    },
    {
      name: "Komplett",
      duration: "ca. 3–5 Tage",
      items: [
        "Alles aus Komfort",
        "Lampen demontieren & neue Leuchten montieren",
        "Jalousien / Rollos – Demontage & Montage (nach Absprache)",
      ],
    },
  ],
  excludedTitle: "Was ist nicht dabei?",
  excludedItems: [
    "Keine Entkernung oder Wanddurchbrüche",
    "Keine komplette Elektroinstallation / Zählerkasten",
    "Kein Fliesenlegen oder Badsanierung",
    "Keine Küchenmontage oder Einbaumöbel (außer nach Absprache)",
  ],
  upsellTitle: "Eine Wand soll besonders wirken?",
  upsellText:
    "Kombinieren Sie Ihren Refresh mit einer Designwand oder TV-Akzentfläche im Wohnzimmer.",
  upsellLinkLabel: "Zu Designwänden & Edelputz →",
  bioPaintingMoreLinkLabel: "Mehr zum Bio-Refresh & Klimafarben erfahren →",
  ecoUpgradeTitle: "Öko- & Klima-Upgrade Option",
  ecoUpgradeIntro:
    "Für alle Pakete (Basis, Komfort, Komplett) buchbar – schadstoffarm und atmungsaktiv:",
  ecoUpgradeBullets: [
    "Staubreduziertes Schleifen mit professioneller Absaugung",
    "Mineralischer Quarzsand-Haftgrund",
    "Lösemittelarme, dampfdiffusionsoffene Silikat- oder Kalkfinishs",
  ],
  refreshIcons: [
    {
      label: "Wohngesundes Ausmalen & Bio-Option",
      description:
        "Schadstoff- & lösemittelarme Anstriche mit Silikat- und Kalkfarben für ein optimales Raumklima.",
    },
    {
      label: "Schalter & Steckdosen",
      description:
        "Austausch altvergilbter Abdeckungen gegen moderne Design-Serien.",
    },
    {
      label: "Türgriffe & Beschläge",
      description:
        "Neue, elegante Türschnallen für ein modernes Raumgefühl.",
    },
    {
      label: "Beleuchtung",
      description:
        "Fachgerechter Tausch altbackener Lampen gegen moderne LED-Spots.",
    },
    {
      label: "Jalousien & Plissee",
      description:
        "Saubere Demontage & Maßmontage moderner Sonnenschutz-Systeme.",
    },
  ],
  faqTitle: "Häufige Fragen zum Wohnungs-Refresh & Preisen",
  faq: [
    {
      question: "Was kosten Malerarbeiten pro m²? (Orientierung)",
      answer:
        "Als unverbindliche Orientierung: einfaches Ausmalen mit kleineren Wandreparaturen (z. B. Dübellöcher, kleine Risse) ab 12 € pro m²; Spachteln/Glätten der Wände ab 15 € pro m². Der tatsächliche Preis hängt davon ab, ob die Wohnung leer ist, wie stark die Wände beansprucht sind und welche Qualität Sie wünschen. Nach Fotos oder Besichtigung erhalten Sie einen transparenten Fixpreis.",
    },
    {
      question: "Wie lange dauert ein Refresh?",
      answer:
        "Je nach Paket und Wohnungsgröße meist 2–5 Arbeitstage. Den genauen Ablauf planen wir vorab transparent.",
    },
    {
      question: "Muss ich während der Arbeiten ausziehen?",
      answer:
        "Oft nicht nötig. Ich arbeite raumweise, schütze Möbel und Böden und halte die Baustelle sauber.",
    },
    {
      question: "Gibt es einen Fixpreis?",
      answer:
        "Ja. Nach Fotos und kurzer Beschreibung nenne ich Ihnen in der Regel einen fairen Pauschalpreis ohne versteckte Kosten.",
    },
    {
      question: "Bieten Sie wohngesundes / Bio-Ausmalen an?",
      answer:
        `Ja – als Öko- & Klima-Upgrade zu allen Paketen mit Silikat- und Kalkfarben, staubreduziert verarbeitet. Details: ${SITE_URL}/de/wohnungs-refresh/bio-oeko`,
    },
  ],
  whatsappPrefill:
    "Hallo, ich interessiere mich für einen Wohnungs-Refresh in Wien. ",
  learnMore: "Mehr erfahren",
  cta: {
    title: "Refresh anfragen",
    text: "Fotos per WhatsApp senden – ich melde mich schnell mit einem fairen Fixpreis.",
    whatsapp: "WhatsApp Anfrage",
    email: "E-Mail senden",
  },
};

export const apartmentRefreshPageEn: ApartmentRefreshPageDict = {
  metaTitle: "Apartment Refresh Vienna | Painting & Eco Option",
  metaDescription:
    "Apartment refresh in Vienna: painting, switches, lights & blinds in 2–5 days – optional low-VOC eco silicate and lime painting. Guide prices in the FAQ, fixed quote after viewing.",
  metaKeywords: [
    "apartment refresh Vienna",
    "refresh apartment Vienna",
    "painting apartment Vienna",
    "eco painting Vienna",
    "silicate paint Vienna",
    "low VOC painting Vienna",
    "renovation without major works Vienna",
    "landlord renovation Vienna",
    "move-in ready apartment Vienna",
    "fixed price painter Vienna",
    "re-letting preparation Vienna",
    "small renovation Vienna",
    "apartment modernisation Vienna",
  ],
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Apartment refresh",
  hero: {
    title: "Apartment Refresh",
    subtitle:
      "Small changes, maximum impact – in Vienna and surroundings, without a major construction site.",
    tagline: "Clean · Fixed price · Move-in ready",
  },
  positioningTitle: "Smart update – not a cheap full renovation",
  positioningText:
    "An apartment refresh is not a complete rebuild. You get a fresh, well-kept home in a manageable timeframe – typically within 2–5 days depending on scope.",
  durationNote: "Minimal dust, maximum effect.",
  featuresTitle: "Services at a glance",
  audienceTitle: "Who is it for?",
  audienceItems: [
    {
      title: "Landlords before re-letting",
      description:
        "Move-in ready quickly for the next tenant – no wasted time.",
    },
    {
      title: "Owners before sale",
      description:
        "Maximum visual impact for top prices at viewings.",
    },
    {
      title: "New move-in",
      description:
        "Enjoy a fresh, clean home from day one.",
    },
    {
      title: "Existing tenants",
      description:
        "A modern feel – without a lengthy construction site.",
    },
  ],
  processTitle: "How it works",
  processSteps: [
    {
      title: "Send photos",
      description: "Share photos or short videos via WhatsApp.",
    },
    {
      title: "Get a fixed price",
      description: "I send a transparent lump-sum quote.",
    },
    {
      title: "Book a date",
      description: "Short-notice scheduling without long waiting times.",
    },
    {
      title: "Clean handover",
      description: "On time, tidy and move-in ready.",
    },
  ],
  packagesTitle: "Scope (packages without price list)",
  popularPackageBadge: "MOST POPULAR",
  packageDurationLabel: "Duration",
  packages: [
    {
      name: "Basic",
      duration: "approx. 1–2 days",
      items: [
        "Repainting in white or modern trend colours",
        "Small wall repairs (holes, cracks, marks)",
      ],
    },
    {
      name: "Comfort",
      duration: "approx. 2–3 days",
      popular: true,
      items: [
        "Everything in Basic",
        "Sockets & light switches (design series)",
        "Door hardware & handles renewed",
      ],
    },
    {
      name: "Complete",
      duration: "approx. 3–5 days",
      items: [
        "Everything in Comfort",
        "Remove old lights & mount new fittings",
        "Blinds / shutters – removal & installation (by agreement)",
      ],
    },
  ],
  excludedTitle: "What is not included?",
  excludedItems: [
    "No stripping or structural wall openings",
    "No full electrical installation / fuse box work",
    "No tiling or bathroom renovation",
    "No kitchen fitting or built-in furniture (except by agreement)",
  ],
  upsellTitle: "Want one wall to stand out?",
  upsellText:
    "Combine your refresh with a design or TV feature wall in the living room.",
  upsellLinkLabel: "Design walls & premium plaster →",
  bioPaintingMoreLinkLabel: "Learn more about eco refresh & climate paints →",
  ecoUpgradeTitle: "Eco & climate upgrade option",
  ecoUpgradeIntro:
    "Available for all packages (Basic, Comfort, Complete) – low-emission and breathable:",
  ecoUpgradeBullets: [
    "Dust-reduced sanding with professional extraction",
    "Mineral quartz-sand bonding primer",
    "Low-VOC breathable silicate or lime topcoats",
  ],
  refreshIcons: [
    {
      label: "Healthy & eco painting option",
      description:
        "Low-emission coats with silicate and lime paints for a more comfortable indoor climate.",
    },
    {
      label: "Switches & sockets",
      description:
        "Replace yellowed covers with modern design series.",
    },
    {
      label: "Door handles & hardware",
      description:
        "Elegant new handles for a contemporary feel.",
    },
    {
      label: "Lighting",
      description:
        "Professional swap of dated fittings for modern LED spots.",
    },
    {
      label: "Blinds & pleated shades",
      description:
        "Careful removal and custom fitting of sun protection systems.",
    },
  ],
  faqTitle: "FAQ – apartment refresh & pricing",
  faq: [
    {
      question: "What do painting works cost per m²? (guide prices)",
      answer:
        "As a guide only: simple repainting with minor wall repairs (e.g. plug holes, small cracks) from €12 per m²; skimming/smoothing walls from €15 per m². The actual price depends on whether the flat is empty, how worn the walls are and the finish you want. After photos or a viewing you receive a transparent fixed quote.",
    },
    {
      question: "How long does a refresh take?",
      answer:
        "Depending on package and size, usually 2–5 working days. We plan the schedule transparently in advance.",
    },
    {
      question: "Do I need to move out during the work?",
      answer:
        "Often not. I work room by room, protect furniture and floors and keep the site clean.",
    },
    {
      question: "Is there a fixed price?",
      answer:
        "Yes. After photos and a short description I usually provide a fair lump sum with no hidden costs.",
    },
    {
      question: "Do you offer healthy / eco interior painting?",
      answer:
        `Yes – as an eco & climate upgrade for all packages with silicate and lime paints, applied dust-reduced. Details: ${SITE_URL}/en/apartment-refresh/eco-healthy-painting`,
    },
  ],
  whatsappPrefill:
    "Hello, I am interested in an apartment refresh in Vienna. ",
  learnMore: "Learn more",
  cta: {
    title: "Request a refresh",
    text: "Send photos via WhatsApp – I will get back to you quickly with a fair fixed price.",
    whatsapp: "WhatsApp inquiry",
    email: "Send e-mail",
  },
};

export const microcementBathroomPageDe: MicrocementBathroomPageDict = {
  metaTitle: "Fugenloses Mikrozement-Bad Wien | Wasserdicht & nahtlos",
  metaDescription:
    "Mikrozement-Bad und WC in Wien und Umgebung: fugenlos, wasserdicht, premium mit Cemher und Murexin designcoat. Orientierungspreise in der FAQ.",
  metaKeywords: [
    "Mikrozement Bad Wien",
    "fugenloses Bad Wien",
    "Mikrozement Dusche Wien",
    "Mikrozement WC Wien",
    "Cemher Wien",
    "Murexin designcoat Wien",
    "Betonoptik Bad Wien",
    "Bad ohne Fliesen Wien",
  ],
  breadcrumbHome: "Startseite",
  breadcrumbCurrent: "Mikrozement-Bad",
  hero: {
    title: "Fugenloses Mikrozement-Bad & WC",
    subtitle:
      "Hochwertige, wasserfeste und fugenlose Oberflächen mit Cemher und Murexin designcoat – in Wien und Umgebung.",
  },
  benefitsTitle: "Warum Mikrozement im Bad?",
  benefits: [
    {
      title: "Fugenlos & wasserdicht",
      description:
        "Keine Fugen, keine Silikonfugen – eine durchgängige, versiegelte Oberfläche für Dusche, Boden und Wand.",
    },
    {
      title: "Premium-Systeme",
      description:
        "Verarbeitung mit Murexin designcoat und Cemher – mehrstufiges System mit Gewebe, Versiegelung und Herstellervorgaben.",
    },
    {
      title: "Modern & pflegeleicht",
      description:
        "Betonoptik, minimalistisch und leicht zu reinigen – ideal für zeitgemäße Bäder und WCs.",
    },
  ],
  applicationsTitle: "Einsatzbereiche",
  applications: [
    "Dusche & Walk-in-Bereich",
    "Badezimmer-Wände und Boden",
    "WC und Gästetoilette",
    "Waschtisch-Umfeld und Nischen",
  ],
  galleryTitle: "Referenzen Mikrozement",
  galleryIntro:
    "Echte Projekte aus Wien – von der Verarbeitung bis zur fertigen, fugenlosen Oberfläche.",
  processTitle: "So läuft Ihr Mikrozement-Bad ab",
  processStepLabel: "Schritt",
  processSteps: [
    {
      title: "Anfrage & Fotos",
      description:
        "Sie senden Fotos per WhatsApp – ich prüfe Untergrund und Machbarkeit.",
    },
    {
      title: "Besichtigung & Festpreis",
      description:
        "Vor Ort klären wir Details; Sie erhalten ein transparentes Angebot inkl. Vorarbeiten.",
    },
    {
      title: "Vorbereitung & Schichten",
      description:
        "Untergrund, Gewebe, Mikrozement-Schichten und Versiegelung nach System – mit Trocknungszeiten.",
    },
    {
      title: "Übergabe",
      description:
        "Saubere Baustelle, pflegehinweise und bezugsfertige Oberfläche – termingerecht.",
    },
  ],
  whatsappPrefill:
    "Hallo, ich interessiere mich für ein fugenloses Mikrozement-Bad in Wien. ",
  learnMore: "Mehr erfahren",
  cta: {
    title: "Mikrozement-Bad anfragen",
    text: "Senden Sie mir Fotos Ihres Bads – ich melde mich mit einer ehrlichen Einschätzung und einem fairen Angebot.",
    whatsapp: "WhatsApp Anfrage",
    email: "E-Mail senden",
  },
};

export const microcementBathroomPageEn: MicrocementBathroomPageDict = {
  metaTitle: "Seamless Microcement Bathroom Vienna | Waterproof & joint-free",
  metaDescription:
    "Microcement bathroom and WC in Vienna and surroundings: seamless, waterproof, premium Cemher and Murexin designcoat. Guide prices in the FAQ.",
  metaKeywords: [
    "microcement bathroom Vienna",
    "seamless bathroom Vienna",
    "microcement shower Vienna",
    "waterproof bathroom Vienna",
    "Cemher Vienna",
    "Murexin designcoat Vienna",
    "concrete look bathroom Vienna",
    "bathroom without tiles Vienna",
  ],
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Microcement bathroom",
  hero: {
    title: "Seamless microcement bathroom & WC",
    subtitle:
      "High-quality, waterproof and joint-free surfaces with Cemher and Murexin designcoat – in Vienna and surroundings.",
  },
  benefitsTitle: "Why microcement in the bathroom?",
  benefits: [
    {
      title: "Joint-free & waterproof",
      description:
        "No tile grout or silicone joints – one sealed surface for shower, floor and walls.",
    },
    {
      title: "Premium systems",
      description:
        "Applied with Murexin designcoat and Cemher – multi-layer system with mesh, sealers and manufacturer specs.",
    },
    {
      title: "Modern & easy-care",
      description:
        "Concrete look, minimal and easy to clean – perfect for contemporary bathrooms and WCs.",
    },
  ],
  applicationsTitle: "Applications",
  applications: [
    "Shower & walk-in area",
    "Bathroom walls and floor",
    "WC and guest toilet",
    "Vanity surrounds and niches",
  ],
  galleryTitle: "Microcement projects",
  galleryIntro:
    "Real work in Vienna – from application to the finished seamless surface.",
  processTitle: "How your microcement bathroom works",
  processStepLabel: "Step",
  processSteps: [
    {
      title: "Inquiry & photos",
      description:
        "Send photos via WhatsApp – I check substrate and feasibility.",
    },
    {
      title: "Viewing & fixed price",
      description:
        "We clarify details on site; you receive a transparent quote including prep work.",
    },
    {
      title: "Prep & layers",
      description:
        "Substrate, mesh, microcement coats and sealing per system – with drying times.",
    },
    {
      title: "Handover",
      description:
        "Clean site, care notes and a finished surface – on schedule.",
    },
  ],
  whatsappPrefill:
    "Hello, I am interested in a seamless microcement bathroom in Vienna. ",
  learnMore: "Learn more",
  cta: {
    title: "Request a microcement bathroom",
    text: "Send photos of your bathroom – I will reply with an honest assessment and a fair quote.",
    whatsapp: "WhatsApp inquiry",
    email: "Send e-mail",
  },
};

export const allrounderPageDe: AllrounderPageDict = {
  metaTitle:
    "Allrounder Handwerk & Montage Wien | Reparaturen & Haushalts-Service",
  metaDescription:
    "Allrounder in Wien und Umgebung: Montage, Lampen, TV-Halterung, Möbel, Sanitär, Silikonfugen & Kleinreparaturen – schnell, sauber, fair abgerechnet.",
  metaKeywords: [
    "Allrounder Wien",
    "Handwerker Montage Wien",
    "Lampen montieren Wien",
    "TV Wandhalterung montieren Wien",
    "Möbelmontage Wien",
    "Karniese montieren Wien",
    "Silikonfugen erneuern Wien",
    "Armaturenwechsel Wien",
    "Kleinreparaturen Wohnung Wien",
    "Haushalts Handwerker Wien",
  ],
  breadcrumbHome: "Startseite",
  breadcrumbCurrent: "Allrounder & Montage",
  hero: {
    title: "Allrounder Handwerk & Montageservice",
    subtitle:
      "Kleine und große Handwerksarbeiten, professionelle Montage und Reparaturen im Haushalt – schnell, sauber und zuverlässig aus einer Hand, in Wien und Umgebung.",
    tagline: "Montage · Reparatur · Sauberkeit",
  },
  servicesTitle: "Leistungen im Überblick",
  categories: [
    {
      title: "Montage & Befestigung",
      items: [
        "Vorhangstangen & Karniese: fachgerechte Montage von Schienen und Stangen",
        "Bilder & Spiegel: sichere Befestigung von Galerien, schweren Bildern und Großspiegeln",
        "TV-Wandhalterungen: stabile Montage an Beton-, Ziegel- oder Rigipswänden inkl. sauberer Kabelführung",
        "Möbelmontage: Zusammenbau und Aufstellen (IKEA, XXXLutz, Mömax u. a.) sowie Schrankmontagen",
      ],
    },
    {
      title: "Sanitär & Reparaturen im Bad",
      items: [
        "Armaturenwechsel: Tausch von Wasserhähnen, Mischbatterien und Brausegarnituren",
        "Sanitär-Tausch: Austausch von Waschbecken, WCs und Spülkästen (nach Absprache)",
        "Silikonfugen: Entfernung alter Fugen und professionelles Ziehen neuer, wasserdichter Sanitärfugen",
      ],
    },
    {
      title: "Elektro & Kleinreparaturen",
      items: [
        "Lampenmontage: Anbringen und Anschließen von Decken-, Wand- und LED-Leuchten (nach österreichischem Regelwerk)",
        "Kleine Ausbesserungen: Dübellöcher, Risse und kleine Transportschäden an Wänden",
        "Haushalts-Hilfe: allgemeine Handwerks- und Reparaturarbeiten rund um Wohnung und Haus",
      ],
    },
  ],
  benefitsTitle: "Warum Wien Handwerk Profis?",
  benefits: [
    {
      title: "Alles aus einer Hand",
      description:
        "Für viele kleinere Jobs brauchen Sie keinen separaten Installateur, Elektriker und Monteur – ein Ansprechpartner, klare Absprache.",
    },
    {
      title: "Profi-Werkzeug",
      description:
        "Bohrhammer, Laser, Absaugung und Qualitäts-Dübel (z. B. Fischer) – auch an Beton, Ziegel und Rigips.",
    },
    {
      title: "Transparente Preise",
      description:
        "Fairer Stundensatz oder Fixpreis bei klar umrissenen Paketen – vor Beginn schriftlich, ohne versteckte Kosten.",
    },
    {
      title: "Sauberkeit",
      description:
        "Geschützte Böden, ordentliche Baustelle und saubere Übergabe nach jedem Einsatz.",
    },
  ],
  faqTitle: "Häufige Fragen zu Allrounder & Montage",
  faq: [
    {
      question: "Wie wird abgerechnet (Stundensatz oder Pauschalpreis)?",
      answer:
        "Für kleinere Arbeiten verrechne ich einen fairen Stundensatz. Bei klar definierten Projekten – z. B. Tausch mehrerer Armaturen oder Montage mehrerer Möbelstücke – erstelle ich gerne vorab ein Fixpreis-Angebot.",
    },
    {
      question: "Muss ich Dübel, Schrauben oder Kleinmaterial selbst kaufen?",
      answer:
        "Standard-Montagematerial (Qualitäts-Dübel, Schrauben, Dichtungsbänder) habe ich im Fahrzeug. Spezielle Halterungen, Lampen, Armaturen oder Möbel besorgen Sie als Kunde – oder wir klären die Beschaffung vorab.",
    },
    {
      question: "Übernehmen Sie auch Arbeiten an Betonwänden (z. B. im Neubau)?",
      answer:
        "Ja. Mit professioneller Bohrhammer-Technik und passenden Dübeln montiere ich auch an Stahlbeton, Ziegel und Rigips – stabil und sauber.",
    },
    {
      question: "Wie schnell bekomme ich einen Termin?",
      answer:
        "Bei kleineren Einsätzen finden wir meist innerhalb weniger Tage einen passenden Termin – schreiben Sie mir am besten mit kurzer Beschreibung und Fotos per WhatsApp.",
    },
  ],
  whatsappPrefill:
    "Hallo, ich brauche Hilfe bei Montage/Reparatur im Haushalt (Allrounder). ",
  learnMore: "Mehr erfahren",
  cta: {
    title: "Hilfe im Haushalt anfragen",
    text:
      "Schicken Sie mir kurz Ihre Wünsche – gerne mit Fotos der Aufgaben – per WhatsApp oder E-Mail. Sie erhalten umgehend eine Rückmeldung.",
    whatsapp: "WhatsApp Anfrage",
    email: "E-Mail senden",
  },
};

export const allrounderPageEn: AllrounderPageDict = {
  metaTitle:
    "Handyman Mounting & Repairs Vienna | Home Installation Service",
  metaDescription:
    "Handyman in Vienna and surroundings: mounting, lights, TV brackets, furniture, sanitary, silicone joints & small repairs – fast, clean, fairly priced.",
  metaKeywords: [
    "handyman Vienna",
    "mounting service Vienna",
    "lamp installation Vienna",
    "TV wall mount Vienna",
    "furniture assembly Vienna",
    "curtain rail Vienna",
    "silicone renewal bathroom Vienna",
    "tap replacement Vienna",
    "home repairs Vienna",
    "allrounder handyman Vienna",
  ],
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Handyman & mounting",
  hero: {
    title: "Handyman work & mounting service",
    subtitle:
      "Small and larger jobs, professional mounting and household repairs – fast, clean and reliable from one contact, in Vienna and surroundings.",
    tagline: "Mounting · Repair · Clean handover",
  },
  servicesTitle: "Services at a glance",
  categories: [
    {
      title: "Mounting & fixing",
      items: [
        "Curtain rails & poles: professional fitting of tracks and rods",
        "Pictures & mirrors: secure fixing of galleries, heavy frames and large mirrors",
        "TV wall mounts: solid installation on concrete, brick or plasterboard with tidy cabling",
        "Furniture assembly: build and place flat-pack and cabinet furniture (IKEA, etc.)",
      ],
    },
    {
      title: "Sanitary & bathroom repairs",
      items: [
        "Tap & mixer replacement in kitchen and bathroom",
        "Sanitary swap: basins, WCs and cisterns (by agreement)",
        "Silicone joints: removal of old sealant and new waterproof bathroom silicone",
      ],
    },
    {
      title: "Electrical & small repairs",
      items: [
        "Light fittings: mounting and connection of ceiling, wall and LED lights (per Austrian rules)",
        "Touch-ups: plug holes, cracks and minor wall damage",
        "Household help: general handyman work around your flat or home",
      ],
    },
  ],
  benefitsTitle: "Why Wien Handwerk Profis?",
  benefits: [
    {
      title: "One contact",
      description:
        "For many small jobs you do not need separate trades – one person, clear communication.",
    },
    {
      title: "Pro tools",
      description:
        "Hammer drill, laser level, dust extraction and quality fixings – concrete, brick and drywall.",
    },
    {
      title: "Transparent pricing",
      description:
        "Fair hourly rate or fixed price for defined packages – agreed in writing upfront.",
    },
    {
      title: "Clean work",
      description:
        "Protected floors, tidy site and a clean handover after every visit.",
    },
  ],
  faqTitle: "FAQ – handyman & mounting",
  faq: [
    {
      question: "Hourly rate or fixed price?",
      answer:
        "Smaller tasks are billed at a fair hourly rate. For clearly defined projects – e.g. several tap swaps or furniture assemblies – I am happy to quote a fixed price in advance.",
    },
    {
      question: "Do I need to buy plugs, screws and consumables?",
      answer:
        "Standard fixings and small consumables are on board. Special brackets, lights, fittings or furniture are supplied by you – or we arrange sourcing in advance.",
    },
    {
      question: "Can you drill into concrete walls (e.g. new builds)?",
      answer:
        "Yes. With professional hammer-drill gear and the right anchors I mount securely on concrete, brick and plasterboard.",
    },
    {
      question: "How soon can I get an appointment?",
      answer:
        "For smaller jobs we usually find a slot within a few days – send a short description and photos via WhatsApp.",
    },
  ],
  whatsappPrefill:
    "Hello, I need help with mounting/repairs at home (handyman). ",
  learnMore: "Learn more",
  cta: {
    title: "Request household help",
    text:
      "Send a short message with your tasks – photos welcome – via WhatsApp or e-mail. I will reply promptly.",
    whatsapp: "WhatsApp inquiry",
    email: "Send e-mail",
  },
};
