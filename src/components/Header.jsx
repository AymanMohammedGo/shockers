"use client";
import { useState } from "react";
import LanguageChanger from "./LanguageChanger";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = ({ logo, name, width, hover, text, linksNames, Dir }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Url = [
    {
      name: linksNames?.NamePageHome,
      link: `/${name}`,
    },
    {
      name: linksNames?.NamePageAbout,
      link: `/${name}/about`,
    },
    {
      name: linksNames?.NamePageServices,
      link: `/${name}/services`,
    },
    {
      name: linksNames?.NamePageProjects,
      link: `/${name}/#projects`,
    },
    {
      name: linksNames?.NamePageContact,
      link: `/${name}/contact`,
    },
  ];

  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 1,
          delay: 0,
        }}
        className="absolute w-full z-20 bg-primary   "
      >
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href={`/`}
            className=" flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              width={width}
              height={width}
              alt={`${name}Logo`}
            />
          </Link>
          <div className="flex md:hidden  ">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="flex items-center p-2 w-10 h-10 justify-center    md:hidden focus:outline-none "
            >
              <svg
                className="w-5 h-5 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul
              className={`font-medium flex flex-col pt-4 md:p-0 md:flex-row `}
            >
              {Url.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.link}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className={`${
                      Dir === "ltr" ? "text-base" : "text-lg"
                    } block font-normal py-2 px-2 lg:px-3 lg:mx-2 xl:mx-3 ${text} ${hover}  hover:text-white rounded-lg transition-all`}
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex md:hidden mt-3 ">
              <LanguageChanger hover={hover} />
            </div>
          </div>
          <div className="hidden md:flex ">
            <LanguageChanger hover={hover} />
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
