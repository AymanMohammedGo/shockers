import { Inter } from "next/font/google";
import "./globals.css";
import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";

const inter = Inter({ subsets: ["latin"] });
const i18nNamespaces = ["Home"];

export const metadata = {
  title: "Shockers Group",
  description: "Architectural, Engineering, & Construction",
};
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
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
