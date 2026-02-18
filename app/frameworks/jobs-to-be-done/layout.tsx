import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Jobs-to-Be-Done Framework — PM Interview Guide",
      description:
        "Complete guide to the Jobs-to-Be-Done (JTBD) framework for PM interviews. Clayton Christensen's theory explained with functional, emotional, and social job types, plus interview practice questions.",
      url: "https://usezevi.com/frameworks/jobs-to-be-done",
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
      datePublished: "2025-11-01",
      dateModified: "2026-02-18",
      image: "https://usezevi.com/opengraph-image",
      about: {
        "@type": "Thing",
        name: "Jobs-to-Be-Done Framework",
        description:
          "Jobs-to-Be-Done (JTBD) is a framework by Clayton Christensen that helps PMs understand why users 'hire' products — focusing on functional, emotional, and social jobs users need done.",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://usezevi.com" },
        { "@type": "ListItem", position: 2, name: "Frameworks", item: "https://usezevi.com/frameworks/jobs-to-be-done" },
        { "@type": "ListItem", position: 3, name: "Jobs-to-Be-Done", item: "https://usezevi.com/frameworks/jobs-to-be-done" },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Jobs-to-Be-Done Framework — PM Interview Guide",
  description:
    "Master the Jobs-to-Be-Done (JTBD) framework for PM interviews. Clayton Christensen's theory explained with functional, emotional, and social job types, the 4-step process, and practice scenarios.",
  keywords: [
    "jobs to be done framework PM interview",
    "JTBD product manager",
    "jobs to be done theory",
    "clayton christensen jobs to be done",
    "JTBD pm interview guide",
    "jobs to be done explained",
    "product manager user needs framework",
    "JTBD functional emotional social jobs",
  ],
  alternates: {
    canonical: "/frameworks/jobs-to-be-done",
  },
  openGraph: {
    title: "Jobs-to-Be-Done Framework — PM Interview Guide | Zevi",
    description:
      "Clayton Christensen's JTBD theory explained for PM interviews. Functional, emotional, social jobs + 4-step process.",
    url: "https://usezevi.com/frameworks/jobs-to-be-done",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jobs-to-Be-Done Framework — Zevi" }],
  },
  twitter: {
    title: "Jobs-to-Be-Done Framework — PM Interview Guide | Zevi",
    description:
      "Clayton Christensen's JTBD theory explained for PM interviews.",
  },
};

export default function JTBDLayout({ children }: { children: React.ReactNode }) {
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
