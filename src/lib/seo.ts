import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://asitsine.com";
export const COMPANY_NAME = "AS-IT SINE";
export const COMPANY_TAGLINE = "Engineering Websites, Mobile Apps, SaaS & Autonomous AI Agents";
export const COMPANY_DESCRIPTION =
  "AS-IT SINE is a next-generation software engineering company crafting high-performance websites, native & cross-platform mobile apps, scalable SaaS platforms, and autonomous AI agents.";

export const CONTACT_EMAIL = "contact@asitsine.com";
export const CONTACT_PHONE = "+916394066626";
export const COMPANY_LOCATION = "Pune, India • Global Remote";

interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const defaultKeywords = [
    "AS-IT SINE",
    "software development company",
    "website development",
    "mobile app development",
    "SaaS engineering",
    "AI agents",
    "autonomous AI workflows",
    "Next.js agency",
    "Hotel Onboarding SaaS",
  ];

  return {
    title,
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${COMPANY_NAME}`,
      description,
      url,
      siteName: COMPANY_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 800,
          height: 600,
          alt: `${COMPANY_NAME} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${COMPANY_NAME}`,
      description,
      images: [`${SITE_URL}/logo.png`],
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: COMPANY_DESCRIPTION,
    email: CONTACT_EMAIL,
    sameAs: [
      "https://github.com/as-it-sine",
      "https://linkedin.com/company/as-it-sine",
      "https://x.com/asitsine",
    ],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "SaaS Platforms",
      "AI Agents",
      "Hospitality Software",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_NAME,
    url: SITE_URL,
    description: COMPANY_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
