"use client";
import Image from "next/image";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeaderBrond = () => {
  return (
    <div className="flex items-center justify-between my-8 mx-6">
      <Image
        width={150}
        height={60}
        src="/assets/LogoSite.svg"
        alt="LogoSite"
      />
      <Select>
        <SelectTrigger className="w-[130px] bg-inherit text-white	">
          <SelectValue placeholder="language" />
        </SelectTrigger>
        <SelectContent className="bg-inherit text-white">
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="kurdish">Kurdish</SelectItem>
          <SelectItem value="arabic">Arabic</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HeaderBrond;
