import "./globals.css";

import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";

const i18nNamespaces = ["Home"];

export const metadata = {
  title: "Shockers Group",
  description: "Architectural, Engineering, & Construction",
  keywords:
    "architecture, engineering, construction, marketing, branding, graphic design, interior design, digital marketing, advertising, web development, social media marketing, UI/UX design, corporate identity, Shockers Group",
  authors: [{ name: "Shockers Group", url: "https://shockersgroup.com" }],
};
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} dir={locale === "kr" ? "rtl" : dir(locale)}>
      <body>
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNamespaces}
        >
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
