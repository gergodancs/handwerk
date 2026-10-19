export type TechniqueCard = {
  title: string;
  look: string;
  idealFor: string;
  advantage: string;
  care: string;
  sample: string;
  previewImage?: string;
  previewAlt?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceLandingPageDict = {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  hero: {
    title: string;
    subtitle: string;
    tagline?: string;
  };
  whatsappPrefill: string;
  learnMore: string;
  faqTitle: string;
  faq: FaqItem[];
  cta: {
    title: string;
    text: string;
    whatsapp: string;
    email: string;
  };
};

export type DesignWallsPageDict = ServiceLandingPageDict & {
  dryZoneTitle: string;
  dryZoneText: string;
  dryZoneLinkLabel: string;
  techniquesTitle: string;
  techniqueFieldLabels: {
    look: string;
    idealFor: string;
    advantage: string;
    care: string;
    sample: string;
  };
  techniques: TechniqueCard[];
  sampleBoardTitle: string;
  sampleBoardIntro: string;
  sampleBoardCta: string;
  sampleBoardTouchBadge: string;
  sampleBoardLabels: string[];
  tvWallTitle: string;
  tvWallIntro: string;
  tvWallFeatures: Array<{ title: string; description: string }>;
  tvWallTipTitle: string;
  tvWallTipText: string;
  processTitle: string;
  processStepLabel: string;
  processSteps: Array<{ title: string; description: string }>;
};

export type MicrocementBathroomPageDict = Omit<
  ServiceLandingPageDict,
  "faqTitle" | "faq"
> & {
  benefitsTitle: string;
  benefits: Array<{ title: string; description: string }>;
  applicationsTitle: string;
  applications: string[];
  galleryTitle: string;
  galleryIntro: string;
  processTitle: string;
  processStepLabel: string;
  processSteps: Array<{ title: string; description: string }>;
};

export type AllrounderPageDict = ServiceLandingPageDict & {
  servicesTitle: string;
  categories: Array<{
    title: string;
    items: string[];
  }>;
  benefitsTitle: string;
  benefits: Array<{ title: string; description: string }>;
};

export type ApartmentRefreshPageDict = ServiceLandingPageDict & {
  positioningTitle: string;
  positioningText: string;
  durationNote: string;
  featuresTitle: string;
  audienceTitle: string;
  audienceItems: Array<{ title: string; description: string }>;
  processTitle: string;
  processSteps: Array<{ title: string; description: string }>;
  packagesTitle: string;
  popularPackageBadge: string;
  packageDurationLabel: string;
  packages: Array<{
    name: string;
    duration: string;
    items: string[];
    popular?: boolean;
  }>;
  excludedTitle: string;
  excludedItems: string[];
  upsellTitle: string;
  upsellText: string;
  upsellLinkLabel: string;
  refreshIcons: Array<{ label: string; description: string }>;
  bioPaintingMoreLinkLabel: string;
  bioEntryBannerTitle: string;
  bioEntryBannerText: string;
  bioEntryBannerCta: string;
  ecoUpgradeTitle: string;
  ecoUpgradeIntro: string;
  ecoUpgradeBullets: string[];
};

export type BioRefreshPageDict = ServiceLandingPageDict & {
  breadcrumbParent: string;
  heroBadge: string;
  heroSecondaryCta: string;
  comparisonTitle: string;
  comparisonProblemTitle: string;
  comparisonProblemText: string;
  comparisonSolutionTitle: string;
  comparisonSolutionText: string;
  benefitsTitle: string;
  benefits: Array<{ title: string; description: string }>;
  scopeSectionId: string;
  scopeTitle: string;
  scopeIdealForLabel: string;
  scopeStepsLabel: string;
  scopeAdvantageLabel: string;
  scopeOptions: Array<{
    name: string;
    idealFor: string;
    steps: string[];
    advantage: string;
  }>;
  dustFreeTitle: string;
  dustFreeText: string;
  designWallsUpsellTitle: string;
  designWallsUpsellText: string;
  designWallsUpsellLinkLabel: string;
};
