import TranslationsProvider from "@/components/TranslationsProvider";
import HeaderBrond from "../../components/BrondHome/HeaderBrond";
import MySwiper from "../../components/BrondHome/SlideBrond";
import initTranslations from "../i18n";

const i18nNamespaces = ["Home"];
export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <main className="h-screen overflow-hidden bg-slate-950">
        <HeaderBrond />
        <MySwiper />
      </main>
    </TranslationsProvider>
  );
}
