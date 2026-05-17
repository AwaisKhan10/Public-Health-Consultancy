import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CapacityContent } from "@/components/pages/CapacityContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "capacity" });
  return { title: t("title"), description: t("geoList") };
}

export default async function CapacityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("capacity");

  return (
    <PageShell navLabel={t("navLabel")}>
      <CapacityContent />
    </PageShell>
  );
}
