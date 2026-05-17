"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ServicesContent() {
  const t = useTranslations("services");
  const tc = useTranslations("common");

  const cards = [
    { title: t("card1Title"), items: t.raw("card1Items") as string[], dark: true, bullet: "bg-white" },
    { title: t("card2Title"), items: t.raw("card2Items") as string[], iconBg: "bg-sky-100 dark:bg-sky-900/40", bullet: "bg-phc-teal" },
    { title: t("card3Title"), items: t.raw("card3Items") as string[], iconBg: "bg-red-100 dark:bg-red-900/40", bullet: "bg-phc-coral" },
    { title: t("card4Title"), items: t.raw("card4Items") as string[], iconBg: "bg-purple-100 dark:bg-purple-900/40", bullet: "bg-purple-500" },
  ];

  return (
    <motion.div className="bg-phc-bg pb-16" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <SectionHeading subtitle={t("subtitle")} title={t("title")} />

        <div className="mb-6 grid gap-6 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              custom={i * 0.1}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-6 shadow-sm ${
                card.dark
                  ? "bg-phc-teal text-white lg:row-span-1"
                  : "border border-card-border bg-card"
              }`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                  card.dark ? "border border-white/30" : card.iconBg
                }`}
              >
                <span className={`text-lg font-bold ${card.dark ? "text-white" : "text-phc-teal"}`}>
                  {i + 1}
                </span>
              </div>
              <h3 className={`mb-4 font-semibold ${card.dark ? "text-white" : ""}`}>{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${card.bullet}`} />
                    <span className={card.dark ? "text-white/90" : "text-muted"}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          custom={0.4}
          whileHover={{ y: -4 }}
          className="mb-12 rounded-2xl bg-phc-teal-light p-8 text-white md:flex md:items-start md:gap-8"
        >
          <motion.div
            className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/20 md:mb-0"
            whileHover={{ scale: 1.08 }}
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </motion.div>
          <div className="flex-1">
            <h3 className="mb-1 text-xl font-semibold">{t("card5Title")}</h3>
            <p className="mb-4 text-white/80">{t("card5Subtitle")}</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {(t.raw("card5Items") as string[]).map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimateIn>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-phc-teal to-phc-teal-dark p-8 text-white md:flex-row"
          >
            <div>
              <h3 className="mb-2 font-serif text-2xl font-bold">{t("ctaTitle")}</h3>
              <p className="text-white/85">{t("ctaBody")}</p>
            </div>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block rounded-full bg-phc-coral px-8 py-3 font-semibold text-white shadow-lg"
              >
                {tc("getStarted")}
              </motion.span>
            </Link>
          </motion.div>
        </AnimateIn>
      </div>
    </motion.div>
  );
}
