export const SITE = {
  name: "Public Health Consulting Services",
  shortName: "PHCS",
  url: "https://www.publichealthconsulting.com",
  email: ["marwat3054@gmail.com", "drdawood190@gmail.com"],
  phone: ["03462899190", "03439486164"],
  address:
    "Office, 54, Khans Heights, Old Bara Road University Town Peshawar",
} as const;

export const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/expertise", key: "expertise" },
  { href: "/capacity-building", key: "capacityBuilding" },
  { href: "/training-modules", key: "trainingModules" },
  { href: "/why-choose-us", key: "whyChooseUs" },
  { href: "/contact", key: "contact" },
] as const;
