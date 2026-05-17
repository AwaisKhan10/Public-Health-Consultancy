import { SITE } from "@/lib/constants";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email[0],
    telephone: SITE.phone[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "Peshawar",
      addressCountry: "PK",
    },
    description:
      "Professional public health consultancy providing expert guidance in healthcare management, training, research, and wellness solutions.",
    areaServed: "Pakistan",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
