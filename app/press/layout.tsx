import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zevi in the Press — TechCrunch, Product Hunt & More",
  description:
    "Zevi has been featured in TechCrunch, Lenny's Newsletter, Product Hunt (#1 Product of the Day), and YCombinator Hacker News. Press kit and media contact available.",
  keywords: [
    "zevi press",
    "zevi techcrunch",
    "zevi product hunt",
    "zevi lenny newsletter",
    "pm interview app press",
    "zevi media coverage",
  ],
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    title: "Zevi in the Press — TechCrunch, Product Hunt & More",
    description:
      "Featured in TechCrunch, Lenny's Newsletter, and Product Hunt. Press kit and media inquiries: press@zevi.app",
    url: "https://usezevi.com/press",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zevi Press" }],
  },
  twitter: {
    title: "Zevi in the Press — TechCrunch, Product Hunt & More",
    description:
      "Featured in TechCrunch, Lenny's Newsletter, and Product Hunt.",
  },
};

export default function PressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
