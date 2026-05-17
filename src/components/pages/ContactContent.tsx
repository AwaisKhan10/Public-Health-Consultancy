"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { PhoneIcon, EmailIcon, LocationIcon } from "@/components/icons/ServiceIcons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ContactContent() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");

  const cards = [
    { label: tc("address"), lines: [SITE.address], Icon: LocationIcon },
    { label: tc("phone"), lines: SITE.phone, Icon: PhoneIcon },
    { label: tc("email"), lines: SITE.email, Icon: EmailIcon },
  ];

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-phc-teal-hero pb-16 text-white">
      <motion.div
        className="phc-orb left-[5%] top-[20%] h-72 w-72 bg-phc-teal-light"
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="phc-orb right-[10%] bottom-[20%] h-56 w-56 bg-phc-coral/40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-4 pt-8 text-center md:px-6 md:pt-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeInUp} custom={0} className="mb-2 text-xs font-bold tracking-[0.2em] text-phc-coral uppercase">
          {t("subtitle")}
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          custom={0.1}
          className="mb-4 font-serif text-3xl font-bold md:text-5xl"
        >
          {t("title")}
        </motion.h1>
        <motion.p variants={fadeInUp} custom={0.15} className="mx-auto mb-10 max-w-2xl text-white/90">
          {t("body")}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={0.2}
          className="relative mx-auto mb-12 aspect-[16/7] max-w-4xl overflow-hidden rounded-3xl shadow-2xl"
        >
          <Image
            src="/images/contact-community.jpg"
            alt="Community health consultation"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-3"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              variants={fadeInUp}
              custom={0.3 + i * 0.08}
              whileHover={{ y: -6, scale: 1.02 }}
              className="phc-glass rounded-2xl p-5 text-left"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                <card.Icon />
              </div>
              <p className="mb-2 text-xs font-bold tracking-wider text-phc-coral uppercase">
                {card.label}
              </p>
              {card.lines.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-white/95">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
