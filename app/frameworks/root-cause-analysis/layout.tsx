import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Root Cause Analysis — PM Interview Framework Guide",
      description:
        "Complete guide to Root Cause Analysis (RCA) for PM interviews. The 6-step structured diagnostic process used to answer metric drop questions at Google, Facebook, Amazon, and Uber.",
      url: "https://usezevi.com/frameworks/root-cause-analysis",
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
      datePublished: "2026-02-01",
      dateModified: "2026-02-18",
      image: "https://usezevi.com/opengraph-image",
      about: {
        "@type": "Thing",
        name: "Root Cause Analysis",
        description:
          "Root Cause Analysis (RCA) is the PM diagnostic framework used to identify why a metric dropped. The 6-step process covers metric definition, data validation, segmentation, hypothesis generation, the 5 Whys technique, and remediation.",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://usezevi.com" },
        { "@type": "ListItem", position: 2, name: "Frameworks", item: "https://usezevi.com/frameworks/root-cause-analysis" },
        { "@type": "ListItem", position: 3, name: "Root Cause Analysis", item: "https://usezevi.com/frameworks/root-cause-analysis" },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Root Cause Analysis — PM Interview Framework Guide",
  description:
    "Master Root Cause Analysis for PM interviews. The 6-step diagnostic process for metric drop questions asked at Google, Facebook, Amazon, and Uber. Includes the 5 Whys technique and segmentation strategy.",
  keywords: [
    "root cause analysis PM interview",
    "metric drop diagnosis PM",
    "PM interview metric question",
    "root cause analysis product manager",
    "DAU dropped PM interview",
    "5 whys PM interview",
    "pm execution interview framework",
    "metric analysis PM interview guide",
    "root cause analysis framework explained",
  ],
  alternates: {
    canonical: "/frameworks/root-cause-analysis",
  },
  openGraph: {
    title: "Root Cause Analysis — PM Interview Framework | Zevi",
    description:
      "6-step RCA framework for PM metric drop questions. Used at Google, Facebook, Amazon, Uber interviews.",
    url: "https://usezevi.com/frameworks/root-cause-analysis",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Root Cause Analysis — Zevi" }],
  },
  twitter: {
    title: "Root Cause Analysis — PM Interview Framework | Zevi",
    description:
      "6-step RCA framework for PM metric drop questions. Used at Google, Facebook, Amazon, Uber interviews.",
  },
};

export default function RCALayout({ children }: { children: React.ReactNode }) {
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
