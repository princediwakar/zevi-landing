import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zevi Changelog — App Updates & New Frameworks",
  description:
    "Every Zevi update, version by version. New frameworks, sharper AI feedback, and features built from real user requests — from v1.0 launch to the latest release.",
  keywords: [
    "zevi updates",
    "pm prep app changelog",
    "zevi new features",
    "zevi version history",
    "pm interview app updates",
  ],
  alternates: {
    canonical: "/changelog",
  },
  openGraph: {
    title: "Zevi Changelog — What's New",
    description:
      "Every Zevi update from v1.0 launch to latest. New frameworks, AI improvements, and features from user requests.",
    url: "https://usezevi.com/changelog",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zevi Changelog" }],
  },
  twitter: {
    title: "Zevi Changelog — What's New",
    description:
      "Every Zevi update from v1.0 launch to latest.",
  },
};

export default function ChangelogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
