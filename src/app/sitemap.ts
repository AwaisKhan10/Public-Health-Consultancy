import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { routing } from "@/i18n/routing";

const paths = [
  "",
  "/about",
  "/services",
  "/expertise",
  "/capacity-building",
  "/training-modules",
  "/why-choose-us",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of paths) {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      entries.push({
        url: `${SITE.url}${prefix}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${SITE.url}${l === routing.defaultLocale ? "" : `/${l}`}${path}`,
            ]),
          ),
        },
      });
    }
  }

  return entries;
}
