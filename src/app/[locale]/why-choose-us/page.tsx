import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { WhyContent } from "@/components/pages/WhyContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "why" });
  return { title: t("title"), description: t("card1Body") };
}

export default async function WhyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("why");

  return (
    <PageShell navLabel={t("navLabel")}>
      <WhyContent />
    </PageShell>
  );
}
