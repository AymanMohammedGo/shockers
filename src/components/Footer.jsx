"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = ({
  width,
  name,
  logo,
  linksNames,
  Dir,
  Lan,
  socialMedia,
  data,
}) => {
  const currentYear = new Date().getFullYear();

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
      link: `/${name}/projects`,
    },
  ];
  return (
    <footer className="bg-shockersAEC z-10 min-h-screen  sm:min-h-full">
      <div className="relative mx-auto max-w-screen-xxl px-4 py-8 sm:px-6 lg:p-8  ">
        <div className="mt-16 lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center  lg:justify-start">
            <Link
              href={`/`}
              className=" flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} width={width} height={width} alt={name} />
            </Link>
          </div>
          {/* <ul className="mt-16 hidden md:flex md:flex-row items-center justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            {Url.map((item, index) => (
              <li key={index}>
                <Link
                  href={item?.link}
                  className="text-white transition text-xl"
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
        <div
          className={`mt-20 text-center lg:text-start grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-[580px]`}
        >
          <div>
            <Link href={data?.LinkAddress || "#"}>
              <p className=" text-white text-xl font-semibold">
                {data?.TitleAddress}
              </p>
              <ul className="mt-3 text-sm text-white">
                <li className="my-2">
                  <span className="text-base">{data?.CityAddress}</span>
                </li>
                <li className="my-2">
                  <span className="text-base">{data?.DetailedAddress}</span>
                </li>
              </ul>
            </Link>
          </div>
          <div>
            <p className=" text-white text-xl font-semibold">
              {data?.TitlePhone}
            </p>

            <ul className="mt-3 text-sm text-white ">
              <li className="my-2">
                <span className="text-base">{data?.Phone}</span>
              </li>
              {data?.Phone1 && (
                <li className="my-2">
                  <span className="text-base">{data?.Phone1}</span>
                </li>
              )}
            </ul>
          </div>
          <div>
            <p className=" text-white text-xl font-semibold">
              {data?.TitleEmail}
            </p>
            <ul className="mt-3 text-sm text-white">
              <li className="my-2">
                <Link href={`mailto:${data?.Email}` || "#"}>
                  <span className="text-base">{data?.Email}</span>
                </Link>
              </li>

              {data?.Email1 && (
                <li className="my-2">
                  <Link href={`mailto:${data?.Email1}` || "#"}>
                    <span className="text-base">{data?.Email1}</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">
              {data?.TitleSocialMedia}
            </p>

            <ul className="mt-3 text-sm text-white">
              {socialMedia.map((item, index) => (
                <li className="my-2" key={index}>
                  <Link href={item?.attributes?.LinkURL || "#"}>
                    <span className="text-base ">{item?.attributes?.Name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-white ">
          {data?.PrivacyPolicy} {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
