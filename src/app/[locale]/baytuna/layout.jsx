"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingVideo from "@/components/LoadingVideo";
import { useEffect, useState, useCallback } from "react";
import Transition from "@/components/Motion/Transition";

import getName_HeaderLinks from "../../../../utils/GlobleApi";
export default function RootLayout({ children, params: { locale } }) {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }

  // const [linksNames, setLinksNames] = useState({
  //   NamePageHome: "HOME",
  //   NamePageAbout: "ABOUT US",
  //   NamePageServices: "SERVICES",
  //   NamePageProjects: "PROJECTS",
  //   NameMainPage: "Main Page",
  // });
  const [linksNames, setLinksNames] = useState([]);
  const getName_HeaderLinks_ = useCallback(() => {
    getName_HeaderLinks(lan).then((res) => {
      console.log(res.data.data.attributes);
      setLinksNames(res.data.data.attributes);
    });
  }, [lan]);
  useEffect(() => {
    getName_HeaderLinks_();
  }, [getName_HeaderLinks_]);
  const [isVideoEnded, setIsVideoEnded] = useState(true);

  const socialMedia = [
    {
      name: "Instagram",
      link: "",
    },
    {
      name: "Facebook",
      link: "",
    },
    {
      name: "Linkedin",
      link: "",
    },
  ];
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between ">
      {/* {isVideoEnded ? (
        <LoadingVideo URL="/done8_2.mp4" setIsVideoEnded={setIsVideoEnded} />
      ) : ( */}
      <>
        <Transition bg="bg-baytuna" />
        <Header
          logo="/img/LogosHeader/logoBaytuna.svg"
          width="80"
          name="baytuna"
          bg="bg-baytuna"
          hover="hover:bg-baytuna"
          text="text-shockersAEC"
          linksNames={linksNames}
        />

        {children}
        <Footer
          width="140"
          name="baytuna"
          logo="/img/LogosFooter/logoBaytunaWhite.svg"
          nameFooter="BAYTUNA"
          linksNames={linksNames}
          socialMedia={socialMedia}
        />
      </>
      {/* )} */}
    </div>
  );
}
