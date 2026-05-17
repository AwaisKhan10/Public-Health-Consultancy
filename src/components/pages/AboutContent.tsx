"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function AboutContent() {
  const t = useTranslations("about");

  return (
    <div className="bg-phc-bg pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <SectionHeading subtitle={t("subtitle")} title={t("title")} />

        <AnimateIn>
          <motion.div
            whileHover={{ x: 4 }}
            className="mb-12 rounded-2xl border border-card-border border-l-4 border-l-phc-teal bg-card p-6 shadow-sm md:p-8"
          >
            <h3 className="mb-4 font-serif text-2xl font-semibold text-phc-teal">
              {t("cardTitle")}
            </h3>
            <p className="leading-relaxed text-muted">{t("cardBody")}</p>
          </motion.div>
        </AnimateIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={fadeInUp}
            custom={0}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-phc-teal p-8 text-white shadow-lg"
          >
            <motion.div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <TargetIcon />
            </motion.div>
            <p className="mb-2 text-xs font-bold tracking-widest text-white/70 uppercase">
              {t("missionLabel")}
            </p>
            <p className="leading-relaxed">{t("missionText")}</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={0.1}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-card-border bg-card p-8 shadow-sm"
          >
            <motion.div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-phc-teal/10 text-phc-teal">
              <BulbIcon />
            </motion.div>
            <p className="mb-2 text-xs font-bold tracking-widest text-phc-teal uppercase">
              {t("visionLabel")}
            </p>
            <p className="leading-relaxed text-muted">{t("visionText")}</p>
          </motion.div>
        </motion.div>

        <SectionHeading subtitle={t("featuresSubtitle")} title="" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {[
            { title: t("feature1Title"), body: t("feature1Body"), bg: "bg-orange-100 dark:bg-orange-900/30", color: "text-orange-600" },
            { title: t("feature2Title"), body: t("feature2Body"), bg: "bg-teal-100 dark:bg-teal-900/30", color: "text-phc-teal" },
            { title: t("feature3Title"), body: t("feature3Body"), bg: "bg-purple-100 dark:bg-purple-900/30", color: "text-purple-600" },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              custom={i * 0.1}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-card-border bg-card p-6 shadow-sm"
            >
              <motion.div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${f.bg} ${f.color}`}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-xl font-bold">{i + 1}</span>
              </motion.div>
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-2 origin-left bg-phc-terracotta"
      />
    </div>
  );
}

function TargetIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.9V17h8v-2.1A7 7 0 0012 2z" />
    </svg>
  );
}
