import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ServicesContent } from "@/components/pages/ServicesContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("title"), description: t("ctaBody") };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <PageShell navLabel={t("navLabel")}>
      <ServicesContent />
    </PageShell>
  );
}
