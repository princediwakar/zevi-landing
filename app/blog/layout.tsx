import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      name: "Zevi Blog — PM Interview Insights",
      url: "https://usezevi.com/blog",
      description:
        "Framework guides, PM interview strategy, and honest analysis from the Zevi team. No fluff. No recycled LinkedIn advice.",
      publisher: {
        "@type": "Organization",
        name: "Zevi",
        url: "https://usezevi.com",
        logo: {
          "@type": "ImageObject",
          url: "https://usezevi.com/opengraph-image",
          width: 1200,
          height: 630,
        },
      },
      blogPost: [
        {
          "@type": "BlogPosting",
          headline: "AARRR vs. CIRCLES: Which Framework When?",
          description:
            "Both are PM interview staples. But reaching for the wrong one in a product design question vs. a metrics question is a fast way to lose the interviewer's confidence.",
          datePublished: "2026-02-12",
          url: "https://usezevi.com/blog",
          author: { "@type": "Organization", name: "Zevi" },
        },
        {
          "@type": "BlogPosting",
          headline: "The 5 Patterns Behind Every PM Interview Question",
          description:
            "After analyzing 2,000+ PM interview questions, we found that 94% fall into just five categories.",
          datePublished: "2026-02-03",
          url: "https://usezevi.com/blog",
          author: { "@type": "Organization", name: "Zevi" },
        },
        {
          "@type": "BlogPosting",
          headline: "How to Nail the Metrics Question Every Time",
          description:
            "Metric questions trip up even experienced PMs. The mistake isn't picking the wrong metric — it's skipping the clarification step.",
          datePublished: "2026-01-28",
          url: "https://usezevi.com/blog",
          author: { "@type": "Organization", name: "Zevi" },
        },
        {
          "@type": "BlogPosting",
          headline: "Voice Practice: The Secret Weapon No One Talks About",
          description:
            "Reading about frameworks and saying frameworks out loud are completely different cognitive tasks.",
          datePublished: "2026-01-20",
          url: "https://usezevi.com/blog",
          author: { "@type": "Organization", name: "Zevi" },
        },
        {
          "@type": "BlogPosting",
          headline: "Why Most PM Candidates Fail the Case Study",
          description:
            "It's rarely a knowledge gap. It's a structure gap. Candidates who fail case studies almost always share one habit in common.",
          datePublished: "2026-01-14",
          url: "https://usezevi.com/blog",
          author: { "@type": "Organization", name: "Zevi" },
        },
        {
          "@type": "BlogPosting",
          headline: "Framework Mastery vs. Memorization: A Critical Difference",
          description:
            "You can memorize the CIRCLES acronym in 10 minutes. Mastering it takes 60 days of deliberate application.",
          datePublished: "2026-01-07",
          url: "https://usezevi.com/blog",
          author: { "@type": "Organization", name: "Zevi" },
        },
        {
          "@type": "BlogPosting",
          headline: "Inside Zevi's AI Feedback Engine",
          description:
            "What does the AI actually evaluate? It's analyzing your structure depth, hypothesis quality, and reasoning coherence.",
          datePublished: "2025-12-30",
          url: "https://usezevi.com/blog",
          author: { "@type": "Organization", name: "Zevi" },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://usezevi.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://usezevi.com/blog" },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "PM Interview Blog — Frameworks, Tips & Strategy",
  description:
    "Framework guides, PM interview strategy, and honest analysis from the Zevi team. AARRR vs CIRCLES, how to nail metrics questions, voice practice tips, and more. No fluff.",
  keywords: [
    "pm interview tips",
    "product manager interview blog",
    "pm framework guides",
    "product manager interview strategy",
    "aarrr vs circles",
    "pm metrics questions",
    "product manager prep blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "PM Interview Blog — Frameworks, Tips & Strategy | Zevi",
    description:
      "Framework guides and PM interview strategy from the Zevi team. No fluff. No recycled LinkedIn advice.",
    url: "https://usezevi.com/blog",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zevi Blog" }],
  },
  twitter: {
    title: "PM Interview Blog — Frameworks, Tips & Strategy | Zevi",
    description:
      "Framework guides and PM interview strategy from the Zevi team. No fluff.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
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
