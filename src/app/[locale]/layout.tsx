import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import Header from "../components/header";
import { MobileHeader } from "../components/mobile-header";
import BackToTop from "../components/ui/bac-to-drop";
import { Metadata } from "next";
type LocaleParams = Promise<{ locale: "tr" | "en" }>;

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTR = locale === "tr";
  const base = "https://ferhanaydin.com";

  return {
    title: isTR
      ? "Ferhan Aydın — Frontend Developer"
      : "Ferhan Aydın — Frontend Developer",
    description: isTR
      ? "Modern, hızlı ve erişilebilir arayüzler. React, Next.js, TypeScript."
      : "Modern, fast and accessible UIs. React, Next.js, TypeScript.",
    alternates: {
      canonical: `/${locale}`,
      languages: { tr: "/tr", en: "/en" },
    },
    openGraph: {
      url: `${base}/${locale}`,
      locale: isTR ? "tr_TR" : "en_US",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;

  const locale = (["tr", "en"] as const).includes(raw as any)
    ? (raw as "tr" | "en")
    : "tr";

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="hidden md:block">
        <Header locale={locale} />
      </div>
      <div className="md:hidden block relative">
        <MobileHeader locale={locale} />
      </div>
      {children}
      <BackToTop />
    </NextIntlClientProvider>
  );
}
