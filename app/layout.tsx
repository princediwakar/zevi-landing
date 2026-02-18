import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const BASE_URL = "https://usezevi.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Zevi — Master the PM Interview",
    template: "%s | Zevi",
  },
  description:
    "The mobile-native PM interview prep app. Framework mastery + pattern recognition + AI feedback. Think Duolingo × PM coaching. Trusted by 12,000+ candidates.",
  keywords: [
    "PM interview prep",
    "product manager interview",
    "product manager interview practice",
    "PM interview app",
    "framework mastery",
    "AARRR framework",
    "CIRCLES method",
    "Jobs to be Done framework",
    "root cause analysis PM",
    "PM coaching app",
    "AI product manager coaching",
    "pm frameworks app",
    "product manager interview questions",
    "crack PM interview",
    "product manager prep mobile app",
    "PM interview AI feedback",
    "duolingo for PM interview",
    "product sense interview prep",
  ],
  authors: [{ name: "Zevi", url: BASE_URL }],
  applicationName: "Zevi",
  category: "Education",
  creator: "Zevi Inc.",
  publisher: "Zevi Inc.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zevi — Master the PM Interview",
    description:
      "Framework mastery + AI feedback. Crack your PM interview. 12,000+ candidates. 94% pass rate.",
    type: "website",
    url: BASE_URL,
    siteName: "Zevi",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zevi — Master the PM Interview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zevi — Master the PM Interview",
    description:
      "Framework mastery + AI feedback. Crack your PM interview. 12,000+ candidates. 94% pass rate.",
    site: "@usezevi",
    creator: "@usezevi",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
