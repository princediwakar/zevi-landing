import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zevi",
  description:
    "Zevi's Privacy Policy. Learn how we collect, use, and protect your data. We do not sell your personal information. GDPR and CCPA compliant.",
  keywords: ["zevi privacy policy", "zevi data privacy", "pm app privacy"],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Zevi",
    description: "How Zevi collects, uses, and protects your data. We do not sell your personal information.",
    url: "https://usezevi.com/privacy",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
