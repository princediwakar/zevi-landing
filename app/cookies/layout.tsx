import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Zevi",
  description:
    "Zevi's Cookie Policy. Learn about what cookies we use, why we use them, and how to control them. No advertising or marketing cookies.",
  keywords: ["zevi cookie policy", "zevi cookies", "pm app cookies"],
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Cookie Policy | Zevi",
    description: "What cookies Zevi uses and how to control them. No advertising cookies.",
    url: "https://usezevi.com/cookies",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
