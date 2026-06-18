import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PrivacyContent } from "@/components/PrivacyContent";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { StructuredData } from "@/components/StructuredData";
import { getDictionary } from "@/lib/dictionaries";
import { buildPrivacyMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  return buildPrivacyMetadata(lang as Locale);
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);

  return (
    <>
      <StructuredData lang={lang} page="privacy" />
      <Header lang={lang} dict={dict} />
      <PrivacyContent lang={lang} dict={dict} />
      <Footer lang={lang} dict={dict} />
      <FloatingCTA dict={dict} />
    </>
  );
}
