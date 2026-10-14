import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BioRefreshPageContent } from "@/components/BioRefreshPageContent";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import {
  getBioRefreshStaticParams,
  isBioRefreshRoute,
} from "@/lib/bio-refresh-routes";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { buildBioRefreshMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ lang: string; serviceSlug: string; subSlug: string }>;
};

export async function generateStaticParams() {
  return getBioRefreshStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, serviceSlug, subSlug } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  if (!isBioRefreshRoute(lang, serviceSlug, subSlug)) {
    return {};
  }

  return buildBioRefreshMetadata(lang);
}

export default async function ServiceSubLandingPage({ params }: PageProps) {
  const { lang, serviceSlug, subSlug } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  if (!isBioRefreshRoute(lang, serviceSlug, subSlug)) {
    notFound();
  }

  const dict = getDictionary(lang as Locale);

  return (
    <>
      <StructuredData lang={lang as Locale} bioRefresh />
      <Header lang={lang as Locale} dict={dict} />
      <main className="pb-24 md:pb-0">
        <BioRefreshPageContent lang={lang as Locale} dict={dict} />
      </main>
      <Footer lang={lang as Locale} dict={dict} />
      <FloatingCTA dict={dict} />
    </>
  );
}
