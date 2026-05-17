"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const modules = [
  { code: "RMNCH", desc: "Reproductive, Maternal, Newborn & Child Health" },
  { code: "MIYCAN", desc: "Maternal, Infant & Young Child Nutrition" },
  { code: "CD & IPC", desc: "Communicable Diseases & Infection Prevention" },
  { code: "NCDs", desc: "Non-Communicable Diseases" },
  { code: "DHIS-2", desc: "District Health Information System" },
  { code: "HRM", desc: "Human Resource Management for Health" },
  { code: "M&E", desc: "Monitoring & Evaluation" },
  { code: "Leadership", desc: "Health Leadership & Governance" },
  { code: "HCWM", desc: "Healthcare Waste Management" },
  { code: "Gender", desc: "Gender in Health Programs" },
  { code: "FP", desc: "Family Planning" },
  { code: "Referral", desc: "Referral Systems" },
  { code: "MSDS", desc: "Medical Supplies & Logistics" },
  { code: "HCQ", desc: "Healthcare Quality & Safety" },
];

export function TrainingContent() {
  const t = useTranslations("training");

  const outcomes = [t("outcome1"), t("outcome2"), t("outcome3"), t("outcome4")];
  const core = [t("core1"), t("core2"), t("core3"), t("core4")];

  return (
    <motion.div className="bg-phc-bg pb-0" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <SectionHeading subtitle={t("subtitle")} title={t("title")} />
        <motion.p variants={fadeInUp} custom={0.1} className="-mt-6 mb-8 max-w-3xl text-muted">
          {t("intro")}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={0.15}
          className="mb-4 rounded-2xl border-2 border-phc-teal bg-card p-8 text-center"
        >
          <p className="font-serif text-xl font-bold text-phc-teal md:text-2xl">{t("featured")}</p>
        </motion.div>

        <motion.div variants={fadeInUp} custom={0.2} className="mb-12 rounded-2xl bg-phc-teal p-6 text-center text-white">
          <p className="leading-relaxed">{t("methodology")}</p>
        </motion.div>

        <p className="mb-4 text-xs font-bold tracking-widest text-phc-coral uppercase">
          {t("areasSubtitle")}
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        >
          {modules.map((m, i) => (
            <motion.div
              key={m.code}
              variants={fadeInUp}
              custom={i * 0.03}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-xl border border-card-border bg-card p-3 text-center shadow-sm"
            >
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-phc-teal/10 text-phc-teal text-xs font-bold">
                {m.code.slice(0, 2)}
              </div>
              <p className="text-xs font-bold text-phc-teal">{m.code}</p>
              <p className="mt-1 text-[10px] leading-tight text-muted">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mb-2 text-xs font-bold tracking-widest text-phc-coral uppercase">{t("impactSubtitle")}</p>
        <p className="mb-4 text-muted">{t("impactBody")}</p>
        <motion.div className="mb-12 flex flex-wrap gap-3">
          {outcomes.map((o, i) => (
            <motion.span
              key={o}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-phc-teal dark:bg-teal-900/40"
            >
              {o}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-phc-teal p-8 text-white"
        >
          <h3 className="mb-4 text-center font-serif text-xl font-bold">{t("coreTitle")}</h3>
          <motion.div className="flex flex-wrap justify-center gap-6">
            {core.map((c) => (
              <span key={c} className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-phc-coral" />
                {c}
              </span>
            ))}
          </motion.div>
          <p className="mt-6 text-center text-xs text-white/70">{t("coreNote")}</p>
        </motion.div>
      </div>

      <footer className="mt-12 bg-phc-navy px-4 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="font-semibold">Public Health Consulting Services</p>
            <p className="text-sm text-white/60">{t("coreNote")}</p>
          </div>
          <p className="text-sm text-white/50">www.publichealthconsulting.com</p>
        </div>
      </footer>
    </motion.div>
  );
}
