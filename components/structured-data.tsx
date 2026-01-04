export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Morpheex",
    "description": "Enterprise cloud modernization and serverless solutions. Official AWS Partner helping businesses eliminate technical debt.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://morpheex.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://morpheex.com"}/logo.png`,
    "sameAs": [
      "https://twitter.com/morpheex",
      "https://linkedin.com/company/morpheex"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": ["English"]
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Cloud Migration",
      "AWS Consulting",
      "Legacy System Modernization",
      "Serverless Architecture"
    ],
    "award": "AWS Services Partner"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
