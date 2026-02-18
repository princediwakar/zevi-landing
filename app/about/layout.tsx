import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "About Zevi",
      url: "https://usezevi.com/about",
      description:
        "Zevi was built by ex-PMs who failed interviews before cracking them — and set out to give every candidate the honest, structured coaching they wished they had.",
      mainEntity: {
        "@type": "Organization",
        name: "Zevi",
        url: "https://usezevi.com",
        foundingDate: "2025-08",
        description:
          "Zevi is the mobile-native PM interview prep app. Framework mastery + pattern recognition + AI feedback. Think Duolingo × PM coaching.",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 10,
        },
        employee: [
          {
            "@type": "Person",
            name: "Arjun Mehra",
            jobTitle: "Co-founder & CEO",
            description:
              "Former PM at Stripe and Figma. Failed 3 PM interviews before cracking Google. Built Zevi to give everyone the coaching he wished he had.",
            worksFor: { "@type": "Organization", name: "Zevi" },
          },
          {
            "@type": "Person",
            name: "Priya Nair",
            jobTitle: "Co-founder & CTO",
            description:
              "ML Engineer from IIT Bombay. Built the AI feedback engine that powers every Zevi session.",
            worksFor: { "@type": "Organization", name: "Zevi" },
          },
          {
            "@type": "Person",
            name: "James Okafor",
            jobTitle: "Head of Frameworks",
            description:
              "Ex-McKinsey and ex-Amazon PM. Personally designed every framework unit in Zevi.",
            worksFor: { "@type": "Organization", name: "Zevi" },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://usezevi.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://usezevi.com/about" },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "About Zevi — PM Interview Prep App Built by Ex-PMs",
  description:
    "Zevi was built by ex-PMs from Stripe, Google, and McKinsey who know what it takes to pass the PM interview. Learn about our story, values, and the team behind the app.",
  keywords: [
    "about zevi",
    "zevi pm app",
    "pm interview prep team",
    "ex-pm founders",
    "pm coaching app company",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Zevi — Built by Ex-PMs Who Know the Interview",
    description:
      "We make PM prep honest. Built by ex-PMs from Stripe, Google, and McKinsey. 12,000+ candidates. 94% pass rate.",
    url: "https://usezevi.com/about",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "About Zevi" }],
  },
  twitter: {
    title: "About Zevi — Built by Ex-PMs Who Know the Interview",
    description:
      "We make PM prep honest. Built by ex-PMs from Stripe, Google, and McKinsey.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
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
