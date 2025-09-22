import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import Header from "../components/header";
import { MobileHeader } from "../components/mobile-header";
import BackToTop from "../components/back-to-drop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Ferhan Aydın – Frontend Developer | Software Developer",
};

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
    <html lang={locale}>
      <body className={`${inter.className} bg-mainColor text-white`}>
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
      </body>
    </html>
  );
}
