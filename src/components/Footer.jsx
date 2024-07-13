import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-seconds">
      <div className="relative mx-auto max-w-screen-xxl px-4 py-16 sm:px-6 lg:p-8 ">
        <div className="mt-2 lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center  lg:justify-start">
            <Link
              href="/shockersAEC"
              className=" flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/assets/logoShockers2.png"
                width={240}
                height={240}
                alt="Shocker Logo"
              />
            </Link>
          </div>
          <ul className="mt-16 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li className="  hover:border-b-2  ">
              <Link
                className="text-white transition text-xl"
                href="/shockersAEC"
              >
                Home
              </Link>
            </li>
            <li className="  hover:border-b-2 ">
              <Link
                className="text-white transition text-xl"
                href="/shockersAEC/projects"
              >
                Projects
              </Link>
            </li>
            <li className="  hover:border-b-2 ">
              <Link
                className="text-white transition text-xl"
                href="/shockersAEC/services"
              >
                Services
              </Link>
            </li>
            <li className="  hover:border-b-2 ">
              <Link
                className="text-white transition text-xl  "
                href="/shockersAEC/about"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-20 text-center   lg:text-start grid grid-cols-1 gap-8 lg:gap-x-[480px] md:grid-cols-2 lg:grid-cols-2">
          <div>
            <p className=" text-white text-xl font-semibold">Office</p>

            <ul className="mt-3 text-sm text-white">
              <li>
                <span className="text-base">Iraq, Sulaymaniyah</span>
              </li>
              <li>
                <span className="text-base">
                  Aqary-Behind CityStar-3rd Floor Pashanet Building.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <p className=" text-white text-xl font-semibold">Phone</p>

            <ul className="mt-3 text-sm text-white">
              <li>
                <span className="text-base">07707225959</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">Email</p>

            <ul className="mt-3 text-sm text-white">
              <li>
                <span className="text-base">info@shockersgroup.com</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">Social Media</p>

            <ul className="mt-3 text-sm text-white">
              <li>
                <span className="text-base">Instagram</span>
              </li>
              <li>
                <span className="text-base">Facebook</span>
              </li>
              <li>
                <span className="text-base">Linkedin</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center  text-white ">
          privacy policy &copy; SHOCKERRSAEC 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
