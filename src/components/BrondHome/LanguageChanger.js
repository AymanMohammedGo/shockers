"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../i18nConfig";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    const days = 1;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };
  const { t } = useTranslation();

  return (
    <>
      <select
        className=" bg-slate-950  text-white p-2 cursor-pointer 	  outline-none border-none "
        onChange={handleChange}
        value={currentLocale}
      >
        <option value="en">{t("English")}</option>
        <option value="kr">{t("Kurdish")}</option>
        <option value="ar">{t("Arabic")}</option>
      </select>
    </>
  );
}
