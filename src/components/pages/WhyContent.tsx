"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function WhyContent() {
  const t = useTranslations("why");

  const cards = [
    { title: t("card1Title"), body: t("card1Body"), bg: "bg-phc-teal" },
    { title: t("card2Title"), body: t("card2Body"), bg: "bg-phc-coral" },
    { title: t("card3Title"), body: t("card3Body"), bg: "bg-phc-teal-light" },
    { title: t("card4Title"), body: t("card4Body"), bg: "bg-purple-600" },
  ];

  const values = [
    { title: t("value1"), body: t("value1Body"), color: "text-phc-teal" },
    { title: t("value2"), body: t("value2Body"), color: "text-phc-coral" },
    { title: t("value3"), body: t("value3Body"), color: "text-pink-500" },
    { title: t("value4"), body: t("value4Body"), color: "text-purple-500" },
    { title: t("value5"), body: t("value5Body"), color: "text-blue-500" },
  ];

  return (
    <div className="bg-phc-bg pb-16">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <SectionHeading subtitle={t("subtitle")} title={t("title")} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 grid gap-6 md:grid-cols-2"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeInUp}
              custom={i * 0.1}
              whileHover={{ y: -6 }}
              className="flex gap-4 rounded-2xl border border-card-border bg-card p-6 shadow-sm"
            >
              <motion.div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${c.bg} text-white`}
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-lg font-bold">{i + 1}</span>
              </motion.div>
              <div>
                <h3 className="mb-2 font-semibold">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="mb-16 flex items-start gap-4 rounded-2xl bg-phc-teal p-6 text-white md:p-8"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">🏷</div>
          <div>
            <h3 className="mb-2 font-semibold">{t("bannerTitle")}</h3>
            <p className="text-sm text-white/85">{t("bannerBody")}</p>
          </div>
        </motion.div>

        <SectionHeading subtitle={t("valuesSubtitle")} title={t("valuesTitle")} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-5"
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeInUp}
              custom={i * 0.08}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-card-border bg-card p-4 text-center shadow-sm"
            >
              <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 ${v.color} text-xl`}>
                ○
              </div>
              <h4 className="mb-2 text-sm font-bold">{v.title}</h4>
              <p className="text-xs leading-relaxed text-muted">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
