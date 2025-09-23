import "./globals.css";
import type { Metadata } from "next";
const siteUrl = "https://ferhanaydin.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Ferhan Aydın — Portfolio",
  title: {
    default: "Ferhan Aydın — Frontend Developer",
    template: "%s | Ferhan Aydın",
  },
  description:
    "Frontend Developer (React, Next.js, TypeScript). Modern UI/UX, performans, ve erişilebilirlik odaklı portfolyo.",
  keywords: [
    "Ferhan Aydın",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Ferhan Aydın" }],
  creator: "Ferhan Aydın",
  publisher: "Ferhan Aydın",
  category: "Portfolio",
  alternates: {
    canonical: "/",
    languages: {
      tr: "/tr",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ferhan Aydın — Frontend Developer",
    description:
      "Modern, hızlı ve erişilebilir arayüzler. React, Next.js, TypeScript.",
    siteName: "Ferhan Aydın",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Ferhan Aydın — Portfolio",
      },
    ],
    locale: "tr_TR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferhan Aydın — Frontend Developer",
    description:
      "Modern, hızlı ve erişilebilir arayüzler. React, Next.js, TypeScript.",
    images: ["/og-default.png"],
    creator: "@ferhanaydin_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
