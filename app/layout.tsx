import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Zevi — Master the PM Interview",
  description:
    "The mobile-native PM interview prep app. Framework mastery + pattern recognition + AI feedback. Think Duolingo × PM coaching.",
  keywords: [
    "PM interview prep",
    "product manager interview",
    "framework mastery",
    "AARRR",
    "PM coaching",
    "AI feedback",
  ],
  openGraph: {
    title: "Zevi — Master the PM Interview",
    description:
      "Framework mastery + AI feedback. Crack your PM interview.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zevi — Master the PM Interview",
    description: "Framework mastery + AI feedback. Crack your PM interview.",
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
