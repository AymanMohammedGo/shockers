"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../i18nConfig";

export default function LanguageChanger({ hover }) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    // const newLocale = e.target.value;
    const newLocale = e;
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
  const language = [
    { lim: "en", name: "English" },
    { lim: "kr", name: "Kurdish" },
    { lim: "ar", name: "Arabic" },
  ];
  return (
    <>
      <Select onValueChange={handleChange} defaultValue={currentLocale}>
        <SelectTrigger
          style={{ boxShadow: "none" }}
          className={`border-borderColor ${hover} hover:text-white  w-[115px]`}
        >
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="bg-primary">
          {language.map((item, index) => (
            <SelectItem
              key={index}
              value={item.lim}
              className={`cursor-pointer hover:text-white hover:rounded-md ${hover}`}
            >
              <div class="flex items-center">
                <span className="mx-2 text-center">{t(item.name)}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
