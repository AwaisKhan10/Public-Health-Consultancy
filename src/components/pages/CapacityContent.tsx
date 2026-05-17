"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const intlOrgs = [
  { name: "UNICEF", items: ["IMNCI (50 trainings, 1,250 participants)", "PCPNK (20 trainings, 500 participants)", "KMC (20 trainings, 500 participants)"] },
  { name: "UNFPA", items: ["MISP (5 TOTs + 35 trickle-down)", "1,000 participants trained", "Areas: Gilgit, Islamabad, Peshawar"] },
  { name: "WHO", items: ["Nutrition (7 trainings)", "175 participants trained", "Areas: Kohat, Peshawar, Shangla"] },
  { name: "IOM", items: ["IMNCI (3 trainings, 75 participants)", "BEmONC (3 trainings, 75 participants)", "Areas: Peshawar, Karachi, Quetta"] },
  { name: "Save the Children", items: ["District Health Planning", "3 trainings, 75 participants"] },
  { name: "IMC", items: ["GBV Training", "3 trainings, 75 participants"] },
  { name: "Pathfinders", items: ["MISP (2 TOTs + 20 trickle-down)", "550 participants trained"] },
];

const nationalOrgs = [
  { name: "PHSA", border: "border-t-orange-400", items: ["RMNCH, HCWM, FP training programs"] },
  { name: "CPSP", border: "border-t-red-400", items: ["Public Health & Research", "110 trainings, 2,750 participants"] },
  { name: "PDMA", border: "border-t-teal-300", items: ["MISP Training", "4 trainings, 100 participants"] },
  { name: "NDMA", border: "border-t-phc-teal", items: ["MISP (2 TOTs + 1 trickle-down)", "75 participants, Peshawar"] },
  { name: "SRSP", border: "border-t-green-400", items: ["MISP (2 trainings, 50 participants)", "Area: Peshawar"] },
];

export function CapacityContent() {
  const t = useTranslations("capacity");

  const stats = [
    { value: t("stat1"), label: t("stat1Label") },
    { value: t("stat2"), label: t("stat2Label") },
    { value: t("stat3"), label: t("stat3Label") },
  ];

  const footerCards = [
    { title: t("totTitle"), sub: t("totSubtitle"), bg: "bg-phc-teal" },
    { title: t("workshopTitle"), sub: t("workshopSubtitle"), bg: "bg-phc-teal-light" },
    { title: t("seminarTitle"), sub: t("seminarSubtitle"), bg: "bg-phc-coral" },
    { title: t("partnershipTitle"), sub: t("partnershipSubtitle"), bg: "bg-phc-navy" },
  ];

  return (
    <div className="bg-phc-bg pb-16">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <SectionHeading subtitle={t("subtitle")} title={t("title")} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-3 divide-x divide-white/20 rounded-2xl bg-phc-teal py-8 text-center text-white"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-2">
              <p className="font-serif text-2xl font-bold md:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/80 md:text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <OrgSection title={t("intlTitle")} orgs={intlOrgs} />
        <OrgSection title={t("nationalTitle")} orgs={nationalOrgs} national />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 rounded-2xl bg-phc-navy p-6 text-white md:col-span-2"
        >
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <span className="text-2xl">🎓</span> {t("programsTitle")}
          </h3>
          <p className="text-sm leading-relaxed text-white/85">{t("programsList")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 flex items-start gap-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-phc-teal text-white">📍</span>
          <div>
            <h3 className="mb-2 font-semibold text-phc-teal">{t("geoTitle")}</h3>
            <p className="text-sm text-muted">{t("geoList")}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {footerCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl ${c.bg} p-5 text-center text-white`}
            >
              <p className="font-serif text-xl font-bold">{c.title}</p>
              <p className="mt-1 text-xs text-white/80">{c.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrgSection({
  title,
  orgs,
  national,
}: {
  title: string;
  orgs: { name: string; items: string[]; border?: string }[];
  national?: boolean;
}) {
  return (
    <section className="mb-10">
      <h3 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-phc-teal">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-phc-teal/10 text-sm">🌐</span>
        {title}
      </h3>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {orgs.map((org, i) => (
          <motion.div
            key={org.name}
            variants={fadeInUp}
            custom={i * 0.05}
            whileHover={{ y: -4 }}
            className={`rounded-xl border border-card-border bg-card p-4 shadow-sm ${
              national && org.border ? `border-t-4 ${org.border}` : ""
            }`}
          >
            <h4 className="mb-2 font-semibold text-phc-teal">{org.name}</h4>
            <ul className="space-y-1">
              {org.items.map((item) => (
                <li key={item} className="text-xs text-muted before:mr-1 before:text-phc-teal before:content-['•']">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
