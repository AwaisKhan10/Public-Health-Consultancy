"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === "en" ? "ur" : "en";
    router.replace(pathname, { locale: next });
  };

  return (
    <motion.button
      type="button"
      onClick={toggle}
      className="rounded-full border border-card-border bg-card px-3 py-1.5 text-xs font-semibold tracking-wide text-foreground transition-colors hover:border-phc-teal hover:text-phc-teal"
      whileTap={{ scale: 0.95 }}
      aria-label="Switch language"
    >
      {locale === "en" ? "اردو" : "EN"}
    </motion.button>
  );
}
