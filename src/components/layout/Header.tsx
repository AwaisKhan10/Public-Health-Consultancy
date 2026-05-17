"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

type HeaderProps = {
  navLabel?: string;
  variant?: "light" | "dark";
};

export function Header({ navLabel, variant = "light" }: HeaderProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        isDark
          ? "border-white/10 bg-phc-teal-hero/90"
          : "border-card-border bg-card/90 dark:bg-card/95"
      }`}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6"
      >
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <LogoIcon className="h-9 w-9 shrink-0 md:h-10 md:w-10" />
          <span
            className={`hidden font-serif text-sm font-semibold leading-tight sm:block md:text-base ${
              isDark ? "text-white" : "text-phc-teal"
            }`}
          >
            {t("brand")}
          </span>
        </Link>

        <motion.span
          className={`hidden text-xs font-bold tracking-[0.15em] uppercase lg:block ${
            isDark ? "text-white/90" : "text-phc-teal"
          }`}
        >
          {navLabel}
        </motion.span>

        <motion.div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            className={`ml-1 flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-lg lg:hidden ${
              isDark ? "text-white" : "text-foreground"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`h-0.5 w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </motion.div>
      </motion.div>

      <nav
        className={`hidden border-t lg:block ${
          isDark ? "border-white/10" : "border-card-border"
        }`}
      >
        <ul className="mx-auto flex max-w-7xl flex-wrap justify-center gap-1 px-4 py-2">
          {NAV_LINKS.map(({ href, key }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={key}>
                <Link
                  href={href}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? isDark
                        ? "bg-white/20 text-white"
                        : "bg-phc-teal text-white"
                      : isDark
                        ? "text-white/85 hover:bg-white/10 hover:text-white"
                        : "text-muted hover:bg-phc-teal/10 hover:text-phc-teal"
                  }`}
                >
                  {t(key)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`overflow-hidden border-t lg:hidden ${
              isDark ? "border-white/10" : "border-card-border"
            }`}
          >
            <ul className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map(({ href, key }) => (
                <li key={key}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isDark
                        ? "text-white/90 hover:bg-white/10 hover:text-white"
                        : "text-foreground hover:bg-phc-teal/10 hover:text-phc-teal"
                    }`}
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
