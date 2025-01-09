import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getLangDir } from "rtl-detect";

import { Poppins } from "next/font/google";
import "./globals.css";

import { Provider } from "./Providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Dz Artisan",
  description:
    "Dz Artisan , the best place to find the best artisans in Algeria",
};

export default async function RootLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) {
    console.error(`Invalid locale: ${locale}`);
    notFound();
  }

  const direction = getLangDir(locale);

  const messages = await getMessages();
  return (
    <html lang={locale} dir={direction}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
