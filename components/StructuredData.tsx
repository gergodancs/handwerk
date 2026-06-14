import { EMAIL, GOOGLE_BUSINESS_URL, GOOGLE_PLACE_ID, PHONE_HREF, WEBSITE_URL } from "@/lib/constants";
import { getPlaceReviews } from "@/lib/google-places";
import { HERO_BACKGROUND } from "@/lib/images";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { BUSINESS_NAME, OWNER_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

type StructuredDataProps = {
  lang: Locale;
  page?: "home" | "impressum";
};

export async function StructuredData({
  lang,
  page = "home",
}: StructuredDataProps) {
  const dict = getDictionary(lang);
  const phone = PHONE_HREF.replace("tel:", "");

  const placeReviews = page === "home" ? await getPlaceReviews(lang) : null;

  const googleProfileUrl =
    GOOGLE_BUSINESS_URL ||
    (GOOGLE_PLACE_ID
      ? `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`
      : "");

  const sameAs = [WEBSITE_URL, ...(googleProfileUrl ? [googleProfileUrl] : [])];

  const localBusiness: Record<string, unknown> = {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: BUSINESS_NAME,
    description: dict.meta.description,
    url: `${SITE_URL}/${lang}`,
    telephone: phone,
    email: EMAIL,
    image: [`${SITE_URL}/${lang}/opengraph-image`, HERO_BACKGROUND],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Penzinger Str. 29-31/3/12",
      addressLocality: "Wien",
      postalCode: "1140",
      addressCountry: "AT",
    },
    areaServed: {
      "@type": "City",
      name: "Vienna",
    },
    founder: {
      "@type": "Person",
      name: OWNER_NAME,
    },
    priceRange: "€€",
    knowsLanguage: ["de", "en"],
    sameAs,
  };

  if (placeReviews) {
    localBusiness.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: placeReviews.rating.toFixed(1),
      reviewCount: placeReviews.totalRatings,
      bestRating: "5",
      worstRating: "1",
    };
  }

  const graph: object[] = [
    localBusiness,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: dict.meta.description,
      inLanguage: lang === "de" ? "de-AT" : "en",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ];

  if (page === "home") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_URL}/${lang}#faq`,
      mainEntity: dict.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });

    placeReviews?.reviews.forEach((review) => {
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
