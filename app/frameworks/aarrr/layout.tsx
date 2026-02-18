import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "AARRR Pirate Metrics — PM Interview Framework Guide",
      description:
        "Complete guide to the AARRR framework (Acquisition, Activation, Retention, Revenue, Referral) for PM interviews. Includes sample questions, key metrics, and pro tips.",
      url: "https://usezevi.com/frameworks/aarrr",
      author: {
        "@type": "Organization",
        name: "Zevi",
        url: "https://usezevi.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Zevi",
        url: "https://usezevi.com",
        logo: {
          "@type": "ImageObject",
          url: "https://usezevi.com/opengraph-image",
        },
      },
      datePublished: "2025-08-01",
      dateModified: "2026-02-18",
      image: "https://usezevi.com/opengraph-image",
      about: {
        "@type": "Thing",
        name: "AARRR Framework",
        description:
          "The AARRR (Pirate Metrics) framework by Dave McClure breaks down the customer journey into Acquisition, Activation, Retention, Revenue, and Referral.",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://usezevi.com" },
        { "@type": "ListItem", position: 2, name: "Frameworks", item: "https://usezevi.com/frameworks/aarrr" },
        { "@type": "ListItem", position: 3, name: "AARRR Pirate Metrics", item: "https://usezevi.com/frameworks/aarrr" },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "AARRR Pirate Metrics — PM Interview Framework Guide",
  description:
    "Master the AARRR framework (Acquisition, Activation, Retention, Revenue, Referral) for PM interviews. Includes Dave McClure's pirate metrics explained with sample interview questions, key metrics to track, and AI-powered practice in Zevi.",
  keywords: [
    "AARRR framework PM interview",
    "pirate metrics explained",
    "AARRR acquisition activation retention revenue referral",
    "dave mcclure pirate metrics",
    "pm metrics interview",
    "product manager metrics framework",
    "AARRR framework product manager",
    "pm interview metrics question",
  ],
  alternates: {
    canonical: "/frameworks/aarrr",
  },
  openGraph: {
    title: "AARRR Pirate Metrics — PM Interview Framework | Zevi",
    description:
      "Complete guide to AARRR (Acquisition, Activation, Retention, Revenue, Referral) for PM interviews. Sample questions, key metrics, and pro tips.",
    url: "https://usezevi.com/frameworks/aarrr",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AARRR Framework — Zevi" }],
  },
  twitter: {
    title: "AARRR Pirate Metrics — PM Interview Framework | Zevi",
    description:
      "Complete guide to AARRR for PM interviews. Sample questions, key metrics, and pro tips.",
  },
};

export default function AARRRLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
