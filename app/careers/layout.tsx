import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "JobPosting",
      title: "Senior iOS Engineer",
      description:
        "Own the iOS app end-to-end. You'll architect new features, optimize for performance, and work directly with the AI team to integrate real-time speech feedback into the native app. Requirements: 5+ years Swift/SwiftUI, iOS performance optimization, experience shipping consumer apps at scale.",
      datePosted: "2026-02-01",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Zevi",
        sameAs: "https://usezevi.com",
        logo: "https://usezevi.com/opengraph-image",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Remote",
        },
      },
      applicantLocationRequirements: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
      ],
      jobLocationType: "TELECOMMUTE",
      directApply: true,
      applicationContact: {
        "@type": "ContactPoint",
        email: "jobs@zevi.app",
      },
    },
    {
      "@type": "JobPosting",
      title: "Growth Product Manager",
      description:
        "Drive Zevi's acquisition and activation metrics. Run experiments across onboarding, referral loops, and content distribution. Requirements: 3+ years in growth or product roles at B2C apps, strong command of AARRR metrics, experience running A/B experiments at scale.",
      datePosted: "2026-02-01",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Zevi",
        sameAs: "https://usezevi.com",
        logo: "https://usezevi.com/opengraph-image",
      },
      jobLocationType: "TELECOMMUTE",
      directApply: true,
      applicationContact: {
        "@type": "ContactPoint",
        email: "jobs@zevi.app",
      },
    },
    {
      "@type": "JobPosting",
      title: "PM Framework Writer",
      description:
        "Write the scenarios, questions, and answer guides that PM candidates practice with every day. Work with the Head of Frameworks to turn real interview patterns into structured Zevi units. Requirements: passed PM interviews at top-tier tech companies, strong written communication, deep familiarity with CIRCLES, AARRR, and other PM frameworks.",
      datePosted: "2026-02-01",
      employmentType: "CONTRACTOR",
      hiringOrganization: {
        "@type": "Organization",
        name: "Zevi",
        sameAs: "https://usezevi.com",
        logo: "https://usezevi.com/opengraph-image",
      },
      jobLocationType: "TELECOMMUTE",
      directApply: true,
      applicationContact: {
        "@type": "ContactPoint",
        email: "jobs@zevi.app",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Careers at Zevi — Remote Jobs in EdTech & AI",
  description:
    "Join the small, remote-first team building the PM interview prep app trusted by 12,000+ candidates. Open roles in engineering, product, and content. Fully remote.",
  keywords: [
    "zevi careers",
    "edtech jobs remote",
    "ai startup jobs",
    "remote product manager job",
    "ios engineer job remote",
    "pm framework writer job",
    "edtech startup hiring",
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at Zevi — Build the Future of PM Prep",
    description:
      "Remote-first team. Meaningful equity. Open roles in iOS engineering, product, and framework content. Join us.",
    url: "https://usezevi.com/careers",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Careers at Zevi" }],
  },
  twitter: {
    title: "Careers at Zevi — Build the Future of PM Prep",
    description:
      "Remote-first team. Meaningful equity. Open roles in iOS engineering, product, and framework content.",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
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
