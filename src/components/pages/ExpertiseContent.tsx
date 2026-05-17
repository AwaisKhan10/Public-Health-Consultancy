"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useEffect, useRef, useState } from "react";

export function ExpertiseContent() {
  const t = useTranslations("expertise");

  const qualifications = [
    { title: t("qual1Title"), body: t("qual1Body"), accent: "text-phc-teal" },
    { title: t("qual2Title"), body: t("qual2Body"), accent: "text-phc-teal" },
    { title: t("qual3Title"), body: t("qual3Body"), accent: "text-phc-coral" },
  ];

  const areas = Array.from({ length: 9 }, (_, i) => ({
    title: t(`area${i + 1}` as "area1"),
    desc: t(`area${i + 1}Desc` as "area1Desc"),
  }));

  const stats = [
    { value: t("stat1"), label: t("stat1Label") },
    { value: t("stat2"), label: t("stat2Label") },
    { value: t("stat3"), label: t("stat3Label") },
    { value: t("stat4"), label: t("stat4Label") },
  ];

  const commitments = [
    { label: t("commit1"), bg: "bg-phc-teal" },
    { label: t("commit2"), bg: "bg-phc-teal-light" },
    { label: t("commit3"), bg: "bg-phc-coral" },
    { label: t("commit4"), bg: "bg-phc-coral-alt" },
  ];

  return (
    <div className="bg-phc-bg pb-16">
      <motion.div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <SectionHeading subtitle={t("subtitle")} title={t("title")} />
        <AnimateIn>
          <p className="-mt-6 mb-10 max-w-3xl leading-relaxed text-muted">{t("intro")}</p>
        </AnimateIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 grid gap-4 md:grid-cols-3"
        >
          {qualifications.map((q, i) => (
            <motion.div
              key={q.title}
              variants={fadeInUp}
              custom={i * 0.08}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-card-border bg-card p-6 text-center shadow-sm"
            >
              <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-phc-teal/10 ${q.accent}`}>
                <span className="text-xl">●</span>
              </div>
              <h3 className={`mb-1 font-semibold ${q.accent}`}>{q.title}</h3>
              <p className="text-sm text-muted">{q.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col justify-between gap-6 rounded-2xl bg-phc-teal p-8 text-white md:flex-row md:items-center"
        >
          <motion.div>
            <h3 className="mb-2 font-serif text-xl font-bold">{t("bannerTitle")}</h3>
            <p className="text-white/85">{t("bannerBody")}</p>
          </motion.div>
          <div className="flex gap-4 text-white/60">
            <GlobeIcon />
            <PeopleIcon />
            <HandshakeIcon />
          </div>
        </motion.div>

        <h3 className="mb-6 font-serif text-2xl font-bold">{t("gridTitle")}</h3>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              variants={fadeInUp}
              custom={i * 0.05}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-card-border bg-card p-5 shadow-sm"
            >
              <motion.div className="mb-2 text-phc-teal">◆</motion.div>
              <h4 className="mb-1 font-semibold">{a.title}</h4>
              <p className="text-sm text-muted">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <StatsBar stats={stats} />

        <h3 className="mb-6 mt-12 font-serif text-2xl font-bold">{t("commitmentTitle")}</h3>
        <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {commitments.map((c) => (
            <motion.div
              key={c.label}
              whileHover={{ scale: 1.03 }}
              className={`rounded-xl ${c.bg} p-5 text-center text-white`}
            >
              <p className="text-sm font-semibold">{c.label}</p>
            </motion.div>
          ))}
        </div>

        <AnimateIn>
          <blockquote className="mb-10 rounded-r-2xl border-l-4 border-l-phc-teal bg-card p-6 font-serif text-lg italic text-muted shadow-sm">
            {t("quote")}
          </blockquote>
        </AnimateIn>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-around gap-4 rounded-2xl border border-phc-teal/30 bg-teal-50 p-6 dark:bg-teal-950/30"
        >
          {[t("bar1"), t("bar2"), t("bar3"), t("bar4")].map((label) => (
            <span key={label} className="flex items-center gap-2 text-sm font-medium text-phc-teal">
              <span className="text-phc-coral">✦</span> {label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function StatsBar({ stats }: { stats: { value: string; label: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
      threshold: 0.3,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 gap-4 rounded-2xl bg-phc-navy p-8 text-center md:grid-cols-4"
    >
      {stats.map((s) => (
        <div key={s.label}>
          <motion.p
            className="font-serif text-3xl font-bold text-phc-teal-light md:text-4xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {s.value}
          </motion.p>
          <p className="mt-1 text-sm text-white/80">{s.label}</p>
        </div>
      ))}
    </motion.div>
  );
}

function GlobeIcon() {
  return <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-8 0 15.3 15.3 0 014-10z" /></svg>;
}
function PeopleIcon() {
  return <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>;
}
function HandshakeIcon() {
  return <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M11 17l-4 4m0 0l-4-4m4 4V3m6 14l4 4m0 0l4-4m-4 4V3" /></svg>;
}
