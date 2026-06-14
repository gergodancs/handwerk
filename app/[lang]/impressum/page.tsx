import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ImpressumContent } from "@/components/ImpressumContent";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { StructuredData } from "@/components/StructuredData";
import { getDictionary } from "@/lib/dictionaries";
import { buildImpressumMetadata } from "@/lib/metadata";
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

  return buildImpressumMetadata(lang as Locale);
}

export default async function ImpressumPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);

  return (
    <>
      <StructuredData lang={lang} page="impressum" />
      <Header lang={lang} dict={dict} />
      <ImpressumContent lang={lang} dict={dict} />
      <Footer lang={lang} dict={dict} />
      <FloatingCTA dict={dict} />
    </>
  );
}
