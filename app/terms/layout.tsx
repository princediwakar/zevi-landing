import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Zevi",
  description:
    "Zevi's Terms of Service. Read the terms governing your use of the Zevi PM interview prep app and website.",
  keywords: ["zevi terms of service", "zevi terms", "pm app terms"],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Zevi",
    description: "Terms governing your use of the Zevi PM interview prep app.",
    url: "https://usezevi.com/terms",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
