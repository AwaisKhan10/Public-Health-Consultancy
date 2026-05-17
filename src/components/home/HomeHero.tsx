"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { LogoIcon } from "@/components/icons/LogoIcon";
import {
  PeopleIcon,
  HospitalIcon,
  GraduationIcon,
  BriefcaseIcon,
  PhoneIcon,
  EmailIcon,
  LocationIcon,
} from "@/components/icons/ServiceIcons";
import { SITE } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  { key: "service1" as const, Icon: PeopleIcon },
  { key: "service2" as const, Icon: HospitalIcon },
  { key: "service3" as const, Icon: GraduationIcon },
  { key: "service4" as const, Icon: BriefcaseIcon },
];

export function HomeHero() {
  const t = useTranslations("home");
  const tc = useTranslations("common");

  return (
    <section className="relative min-h-screen overflow-hidden bg-phc-teal-hero text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-meeting.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <motion.div
          className="absolute inset-0 bg-phc-teal-hero/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <motion.div className="phc-orb left-[-10%] top-[10%] h-64 w-64 bg-phc-teal-light" />
      <motion.div
        className="phc-orb right-[-5%] top-[40%] h-80 w-80 bg-phc-teal-light"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="phc-orb bottom-[10%] left-[30%] h-48 w-48 bg-phc-coral/30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-6 md:pt-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} custom={0} className="mb-8 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-white p-3 shadow-lg"
          >
            <LogoIcon className="h-16 w-16 md:h-20 md:w-20" />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          custom={0.1}
          className="mb-3 text-center font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          {t("title")}
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          custom={0.15}
          className="mx-auto mb-6 h-1 w-16 rounded-full bg-phc-coral"
        />

        <motion.p
          variants={fadeInUp}
          custom={0.2}
          className="mx-auto mb-12 max-w-3xl text-center font-serif text-lg italic leading-relaxed text-white/95 md:text-xl"
        >
          {t("tagline")}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          custom={0.25}
          className="mb-6 text-center text-xs font-semibold tracking-[0.25em] text-white/80 uppercase"
        >
          {t("expertServices")}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {services.map(({ key, Icon }, i) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              custom={0.3 + i * 0.08}
              whileHover={{ y: -6, scale: 1.02 }}
              className="phc-glass flex flex-col items-center rounded-2xl p-5 text-center"
            >
              <motion.div
                className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border border-white/30 text-white"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                <Icon />
              </motion.div>
              <span className="text-sm font-semibold leading-snug">{t(key)}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={0.6}
          className="mx-auto h-px max-w-4xl bg-white/20"
        />

        <motion.div
          variants={staggerContainer}
          className="mt-8 grid gap-3 md:grid-cols-2"
        >
          <ContactCard
            icon={<PhoneIcon />}
            label={tc("phone")}
            lines={SITE.phone}
            delay={0.65}
          />
          <ContactCard
            icon={<EmailIcon />}
            label={tc("email")}
            lines={SITE.email}
            delay={0.7}
          />
        </motion.div>

        <motion.div variants={fadeInUp} custom={0.75} className="mt-3">
          <ContactCard
            icon={<LocationIcon />}
            label={tc("address")}
            lines={[SITE.address]}
            full
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  lines,
  full,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  lines: readonly string[];
  full?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      whileHover={{ y: -4 }}
      className={`phc-glass flex gap-4 rounded-2xl p-4 md:p-5 ${full ? "" : ""}`}
    >
      <motion.div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-phc-coral text-white">
        {icon}
      </motion.div>
      <motion.div>
        <p className="mb-1 text-xs font-bold tracking-wider text-phc-coral uppercase">
          {label}
        </p>
        {lines.map((line) => (
          <p key={line} className="text-sm leading-relaxed text-white/95">
            {line}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
}
