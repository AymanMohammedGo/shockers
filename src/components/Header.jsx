import React, { useState } from "react";
import LanguageChanger from "./BrondHome/LanguageChanger";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="./shockers"
            className=" flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/logoShocker.png"
              width={120}
              height={120}
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
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul
              className={`font-medium flex flex-col p-4 md:p-0   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 `}
            >
              <li>
                <Link
                  href="#"
                  className="block font-normal py-2 px-3 text-seconds hover:text-shockerYellow transition-all  "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block font-normal py-2 px-3 text-seconds hover:text-shockerYellow transition-all  "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block font-normal py-2 px-3 text-seconds hover:text-shockerYellow transition-all  "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block font-normal py-2 px-3 text-seconds hover:text-shockerYellow transition-all  "
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex ">
            <LanguageChanger />
          </div>
        </div>
      </header>
      {/* <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <Image
                  width={150}
                  height={60}
                  src="/assets/LogoShocker.png"
                  alt="LogoSite"
                />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      History
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <LanguageChanger />

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
