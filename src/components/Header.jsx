"use client";
import React, { useState } from "react";
import LanguageChanger from "./LanguageChanger";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: "-100%" }}
      whileInView={{ y: 0 }}
      transition={{
        duration: 1,
        delay: 0,
      }}
      className="absolute w-full z-10 bg-primary"
    >
      <Link href="/" className=" text-center">
        <div className="bg-seconds p-2 text-white flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-house"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <span className="mx-2 text-base text-white"> Main Page</span>
        </div>
      </Link>
      <div className=" max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/shockersAEC"
          className=" flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/assets/logoShocker.png"
            width={140}
            height={140}
            alt="Shocker Logo"
          />
        </Link>
        <div className="flex md:hidden ">
          <LanguageChanger />
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            type="button"
            className="flex items-center p-2 w-10 h-10 justify-center    md:hidden focus:outline-none "
          >
            <svg
              className="w-5 h-5"
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
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul
            className={`font-medium flex flex-col py-4 md:p-0   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 `}
          >
            <li>
              <Link
                href="/shockersAEC"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="block font-normal py-2 px-3 text-seconds hover:bg-seconds hover:text-white rounded-lg transition-all  "
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/shockersAEC/about"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="block font-normal py-2 px-3 text-seconds  hover:bg-seconds hover:text-white rounded-lg transition-all  "
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="/shockersAEC/services"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="block font-normal py-2 px-3 text-seconds hover:bg-seconds hover:text-white rounded-lg transition-all  "
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="/shockersAEC/projects"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="block font-normal py-2 px-3 text-seconds hover:bg-seconds hover:text-white rounded-lg transition-all  "
              >
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          <LanguageChanger />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
