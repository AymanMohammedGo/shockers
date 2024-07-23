"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingVideo from "@/components/LoadingVideo";
import { useEffect, useState, useCallback } from "react";
import getHeaderLinks from "../../../../utils/BaytunaApi";
export default function RootLayout({ children, params: { locale } }) {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }

  const [links, setLinks] = useState([
    {
      id: 1,

      attributes: {
        createdAt: "2024-07-22T11:51:29.092Z",

        updatedAt: "2024-07-22T12:13:52.214Z",

        publishedAt: "2024-07-22T11:51:33.787Z",

        locale: "en",

        NameLink: "HOME",

        URL: "/baytuna",
      },
    },

    {
      id: 2,

      attributes: {
        createdAt: "2024-07-22T11:51:57.066Z",

        updatedAt: "2024-07-22T12:13:38.061Z",

        publishedAt: "2024-07-22T11:51:57.835Z",

        locale: "en",

        NameLink: "ABOUT US",

        URL: "/baytuna/about",
      },
    },

    {
      id: 3,

      attributes: {
        createdAt: "2024-07-22T11:52:12.964Z",

        updatedAt: "2024-07-22T12:14:14.175Z",

        publishedAt: "2024-07-22T11:52:13.705Z",

        locale: "en",

        NameLink: "SERVICES",

        URL: "/baytuna/services",
      },
    },

    {
      id: 4,

      attributes: {
        createdAt: "2024-07-22T11:52:27.015Z",

        updatedAt: "2024-07-22T12:14:05.305Z",

        publishedAt: "2024-07-22T11:52:27.889Z",

        locale: "en",

        NameLink: "PROJECTS",

        URL: "/baytuna/projects",
      },
    },
  ]);
  // const [links, setLinks] = useState([]);
  // const getHeaderLink_ = useCallback(() => {
  //   getHeaderLinks(lan).then((res) => {
  //     console.log(res.data.data);
  //     setLinks(res.data.data);
  //   });
  // }, [lan]);
  // useEffect(() => {
  //   getHeaderLink_();
  // }, [getHeaderLink_]);
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
        <Header
          logo="/assets/logoBaytuna.svg"
          width="80"
          name="baytuna"
          bg="bg-baytuna"
          hover="hover:bg-baytuna"
          text="text-shockersAEC"
          links={links}
        />

        {children}
        <Footer
          width="140"
          name="baytuna"
          logo="/assets/logoBaytunaWhite.svg"
          nameFooter="BAYTUNA"
          links={links}
          socialMedia={socialMedia}
        />
      </>
      {/* )} */}
    </div>
  );
}
