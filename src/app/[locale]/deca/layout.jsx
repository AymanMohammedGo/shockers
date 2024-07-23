"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingVideo from "@/components/LoadingVideo";
import { useEffect, useState, useCallback } from "react";
import getHeaderLinks from "../../../../utils/ShockersApi";
export default function RootLayout({ children, params: { locale } }) {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [links, setLinks] = useState([
    {
      id: 1,

      attributes: {
        NameLink: "HOME",

        URL: "/shockersAEC",

        createdAt: "2024-07-21T12:19:54.909Z",

        updatedAt: "2024-07-21T12:29:07.629Z",

        publishedAt: "2024-07-21T12:29:07.626Z",

        locale: "en",
      },
    },

    {
      id: 4,

      attributes: {
        NameLink: "ABOUT US",

        URL: "/shockersAEC/about",

        createdAt: "2024-07-21T12:24:40.544Z",

        updatedAt: "2024-07-21T12:29:03.525Z",

        publishedAt: "2024-07-21T12:29:03.522Z",

        locale: "en",
      },
    },

    {
      id: 7,

      attributes: {
        NameLink: "SERVICES",

        URL: "/shockersAEC/services",

        createdAt: "2024-07-21T12:26:16.095Z",

        updatedAt: "2024-07-21T12:29:14.885Z",

        publishedAt: "2024-07-21T12:29:14.882Z",

        locale: "en",
      },
    },

    {
      id: 10,

      attributes: {
        NameLink: "PROJECTS",

        URL: "/shockersAEC/projects",

        createdAt: "2024-07-21T12:27:24.651Z",

        updatedAt: "2024-07-21T12:29:11.388Z",

        publishedAt: "2024-07-21T12:29:11.386Z",

        locale: "en",
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
      link: "https://www.instagram.com/shockersaec/",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/Shockersaec/",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/shockers-advertising/",
    },
  ];

  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between ">
      {/* {isVideoEnded ? (
        <LoadingVideo URL="/done8_2.mp4" setIsVideoEnded={setIsVideoEnded} />
      ) : ( */}
      <>
        <Header
          logo="/assets/logoDeca.svg"
          width="100"
          name="deca"
          bg="bg-deca"
          hover="hover:bg-deca"
          text="text-shockersAEC"
          links={links}
        />
        {children}
        <Footer
          width="200"
          name="deca"
          logo="/assets/logoDecaWhite.svg"
          nameFooter="DECA"
          links={links}
          socialMedia={socialMedia}
        />
      </>
      {/* )} */}
    </div>
  );
}
