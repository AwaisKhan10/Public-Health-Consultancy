import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { TrainingContent } from "@/components/pages/TrainingContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "training" });
  return { title: t("title"), description: t("intro") };
}

export default async function TrainingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("training");

  return (
    <PageShell navLabel={t("navLabel")} footerVariant="dark">
      <TrainingContent />
    </PageShell>
  );
}
