import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "CIRCLES Method — Product Design Interview Framework Guide",
      description:
        "Complete guide to the CIRCLES method for product design PM interviews. Lewis C. Lin's 7-step framework: Comprehend, Identify, Report, Cut, List, Evaluate, Summarize.",
      url: "https://usezevi.com/frameworks/circles",
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
      datePublished: "2026-01-01",
      dateModified: "2026-02-18",
      image: "https://usezevi.com/opengraph-image",
      about: {
        "@type": "Thing",
        name: "CIRCLES Framework",
        description:
          "CIRCLES is a 7-step product design interview framework by Lewis C. Lin: Comprehend the Situation, Identify the Customer, Report the Needs, Cut through Prioritization, List Solutions, Evaluate Tradeoffs, Summarize your Recommendation.",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://usezevi.com" },
        { "@type": "ListItem", position: 2, name: "Frameworks", item: "https://usezevi.com/frameworks/circles" },
        { "@type": "ListItem", position: 3, name: "CIRCLES Method", item: "https://usezevi.com/frameworks/circles" },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "CIRCLES Method — Product Design Interview Framework Guide",
  description:
    "Master the CIRCLES method for PM product design interviews. Lewis C. Lin's 7-step framework explained with examples, common traps to avoid, and AI-powered practice in Zevi.",
  keywords: [
    "CIRCLES method PM interview",
    "CIRCLES framework product design",
    "lewis c lin circles method",
    "product design interview framework",
    "pm design question framework",
    "CIRCLES pm interview guide",
    "product design PM interview prep",
    "design a product PM question",
  ],
  alternates: {
    canonical: "/frameworks/circles",
  },
  openGraph: {
    title: "CIRCLES Method — Product Design PM Interview Framework | Zevi",
    description:
      "Master the 7-step CIRCLES method for product design PM interviews. Examples, traps, and AI-powered practice.",
    url: "https://usezevi.com/frameworks/circles",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CIRCLES Method — Zevi" }],
  },
  twitter: {
    title: "CIRCLES Method — Product Design PM Interview Framework | Zevi",
    description:
      "Master the 7-step CIRCLES method for product design PM interviews.",
  },
};

export default function CirclesLayout({ children }: { children: React.ReactNode }) {
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
