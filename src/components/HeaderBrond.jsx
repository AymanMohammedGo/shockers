"use client";
import Image from "next/image";
import * as React from "react";

import { useTranslation } from "react-i18next";
import LanguageChanger from "./ui/LanguageChanger";

const HeaderBrond = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between my-8 mx-6">
      <Image
        width={150}
        height={60}
        src="/assets/LogoSite.svg"
        alt="LogoSite"
      />
      <LanguageChanger />
    </div>
  );
};

export default HeaderBrond;
