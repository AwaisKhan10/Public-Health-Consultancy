"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { SITE } from "@/lib/constants";
import { AnimateIn } from "@/components/ui/AnimateIn";

type FooterProps = {
  variant?: "light" | "dark";
};

export function Footer({ variant = "dark" }: FooterProps) {
  const t = useTranslations("common");
  const tNav = useTranslations("nav");

  return (
    <footer
      className={
        variant === "dark"
          ? "bg-[#0a1818] text-white"
          : "border-t border-card-border bg-card text-foreground"
      }
    >
      <AnimateIn className="mx-auto max-w-7xl px-4 py-12 text-center md:px-6">
        <div className="mb-4 flex flex-col items-center justify-center gap-3">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <LogoIcon className="h-12 w-12" />
            <span className="text-left font-serif text-lg font-semibold leading-snug">
              {tNav("brand")}
            </span>
          </motion.div>
          <p
            className={`font-serif text-lg italic ${
              variant === "dark" ? "text-white/90" : "text-phc-teal"
            }`}
          >
            {t("tagline")}
          </p>
        </div>
        <p className="text-sm text-muted">{t("copyright")}</p>
        <p className="mt-2 text-xs text-muted">{SITE.url}</p>
      </AnimateIn>
    </footer>
  );
}
