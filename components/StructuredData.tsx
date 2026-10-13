import { EMAIL, GOOGLE_BUSINESS_URL, GOOGLE_PLACE_ID, GOOGLE_VIEW_REVIEWS_URL, PHONE_HREF, WEBSITE_URL } from "@/lib/constants";
import { getPlaceReviews } from "@/lib/google-places";
import {
  HERO_BACKGROUND,
  INSTITUTIONAL_EMBASSY_IMAGE,
  OWNER_PROFILE_IMAGE,
} from "@/lib/images";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import {
  getServiceLandingFaqItems,
  getServiceLandingPageDict,
} from "@/lib/service-landing";
import {
  SERVICE_LANDING_KEYS,
  getServiceLandingPath,
  resolveServiceLandingPath,
  type ServiceLandingKey,
} from "@/lib/service-routes";
import { getKnowsAbout, getSchemaBusinessDescription } from "@/lib/knows-about";
import { getAreaServedSchema, isSchemaSafeReviews, VIENNA_GEO } from "@/lib/seo";
import { BUSINESS_NAME, OWNER_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

type StructuredDataProps = {
  lang: Locale;
  page?: "home" | "impressum" | "privacy";
  serviceLanding?: ServiceLandingKey;
};

export async function StructuredData({
  lang,
  page = "home",
  serviceLanding,
}: StructuredDataProps) {
  const dict = getDictionary(lang);
  const phone = PHONE_HREF.replace("tel:", "");

  const placeReviews = page === "home" ? await getPlaceReviews(lang) : null;
  const schemaReviews = isSchemaSafeReviews(placeReviews) ? placeReviews : null;

  const googleProfileUrl =
    GOOGLE_BUSINESS_URL || GOOGLE_VIEW_REVIEWS_URL || "";

  const sameAs = [WEBSITE_URL, ...(googleProfileUrl ? [googleProfileUrl] : [])];

  const heroImageUrl = HERO_BACKGROUND.startsWith("http")
    ? HERO_BACKGROUND
    : `${SITE_URL}${HERO_BACKGROUND}`;

  const businessImages = [
    `${SITE_URL}/${lang}/opengraph-image`,
    heroImageUrl,
    `${SITE_URL}${OWNER_PROFILE_IMAGE}`,
    ...(page === "home"
      ? [`${SITE_URL}${INSTITUTIONAL_EMBASSY_IMAGE}`]
      : []),
  ];

  const localBusiness: Record<string, unknown> = {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: BUSINESS_NAME,
    description: getSchemaBusinessDescription(lang),
    url: `${SITE_URL}/${lang}`,
    knowsAbout: [...getKnowsAbout(lang)],
    telephone: phone,
    email: EMAIL,
    image: businessImages,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Penzinger Str. 29-31/3/12",
      addressLocality: "Wien",
      postalCode: "1140",
      addressCountry: "AT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: VIENNA_GEO.latitude,
      longitude: VIENNA_GEO.longitude,
    },
    areaServed: getAreaServedSchema(lang),
    founder: {
      "@type": "Person",
      name: OWNER_NAME,
      image: `${SITE_URL}${OWNER_PROFILE_IMAGE}`,
    },
    priceRange: "€€",
    knowsLanguage: ["de", "en"],
    sameAs,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  if (googleProfileUrl) {
    localBusiness.hasMap = googleProfileUrl;
  }

  if (schemaReviews) {
    localBusiness.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: schemaReviews.rating.toFixed(1),
      reviewCount: schemaReviews.totalRatings,
      bestRating: "5",
      worstRating: "1",
    };
  }

  const specialistWebPages =
    page === "home"
      ? SERVICE_LANDING_KEYS.map((key) => {
          const path = getServiceLandingPath(key, lang);
          return { "@id": `${SITE_URL}${path}#webpage` };
        })
      : undefined;

  const graph: object[] = [
    localBusiness,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        page === "home"
          ? getSchemaBusinessDescription(lang)
          : dict.meta.description,
      inLanguage: ["de-AT", "en"],
      publisher: { "@id": `${SITE_URL}/#business` },
      ...(specialistWebPages ? { hasPart: specialistWebPages } : {}),
    },
  ];

  if (page === "home") {
    graph.push({
      "@type": "WebPage",
      "@id": `${SITE_URL}/${lang}#webpage`,
      name: dict.meta.title,
      description: getSchemaBusinessDescription(lang),
      url: `${SITE_URL}/${lang}`,
      inLanguage: lang === "de" ? "de-AT" : "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
    });

    dict.services.items.forEach((service, index) => {
      const serviceUrl = service.landing
        ? `${SITE_URL}${resolveServiceLandingPath(lang, service.landing)}`
        : `${SITE_URL}/${lang}#leistungen`;

      graph.push({
        "@type": "Service",
        "@id": `${SITE_URL}/${lang}#service-${index + 1}`,
        name: service.title,
        description: service.description,
        url: serviceUrl,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: getAreaServedSchema(lang),
      });
    });

    graph.push({
      "@type": "ItemList",
      "@id": `${SITE_URL}/${lang}#specialist-services`,
      name:
        lang === "de"
          ? "Spezial-Leistungen mit Detailseiten"
          : "Specialist services with detail pages",
      itemListElement: SERVICE_LANDING_KEYS.map((key, index) => {
        const landingDict = getServiceLandingPageDict(dict, key);
        const url = `${SITE_URL}${getServiceLandingPath(key, lang)}`;

        return {
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            name: landingDict.hero.title,
            description: landingDict.metaDescription,
            url,
          },
        };
      }),
    });

    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_URL}/${lang}#faq`,
      mainEntity: [
        ...dict.faq.items.map((item) => ({
          "@type": "Question" as const,
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer" as const,
            text: item.answer,
          },
        })),
      ],
    });

    schemaReviews?.reviews.forEach((review) => {
      graph.push({
        "@type": "Review",
        author: { "@type": "Person", name: review.author },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: "5",
        },
        reviewBody: review.text,
        datePublished: review.publishedAt,
        itemReviewed: { "@id": `${SITE_URL}/#business` },
      });
    });
  }

  if (page === "impressum") {
    graph.push({
      "@type": "WebPage",
      "@id": `${SITE_URL}/${lang}/impressum#webpage`,
      name: dict.impressumPage.title,
      description: dict.impressumPage.metaDescription,
      url: `${SITE_URL}/${lang}/impressum`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
    });
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: SITE_NAME,
          item: `${SITE_URL}/${lang}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: dict.impressumPage.title,
          item: `${SITE_URL}/${lang}/impressum`,
        },
      ],
    });
  }

  if (page === "privacy") {
    graph.push({
      "@type": "WebPage",
      "@id": `${SITE_URL}/${lang}/datenschutz#webpage`,
      name: dict.privacyPage.title,
      description: dict.privacyPage.metaDescription,
      url: `${SITE_URL}/${lang}/datenschutz`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
    });
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: SITE_NAME,
          item: `${SITE_URL}/${lang}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: dict.privacyPage.title,
          item: `${SITE_URL}/${lang}/datenschutz`,
        },
      ],
    });
  }

  if (serviceLanding) {
    const landingDict = getServiceLandingPageDict(dict, serviceLanding);
    const pagePath = getServiceLandingPath(serviceLanding, lang);
    const pageUrl = `${SITE_URL}${pagePath}`;
    const faqItems = getServiceLandingFaqItems(dict, serviceLanding);
    const serviceId = `${pageUrl}#service`;

    graph.push({
      "@type": "Service",
      "@id": serviceId,
      name: landingDict.hero.title,
      description: landingDict.metaDescription,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: getAreaServedSchema(lang),
      url: pageUrl,
    });
    graph.push({
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: landingDict.metaTitle,
      description: landingDict.metaDescription,
      url: pageUrl,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": serviceId },
    });
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: landingDict.breadcrumbHome,
          item: `${SITE_URL}/${lang}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: landingDict.breadcrumbCurrent,
          item: pageUrl,
        },
      ],
    });
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question" as const,
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: item.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
