import Image from "next/image";
import Link from "next/link";

const Footer = ({
  width,
  name,
  logo,
  linksNames,
  nameFooter,
  socialMedia,
  data,
}) => {
  const currentYear = new Date().getFullYear();
  const RTL = document.dir === "ltr";
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
    <footer className="bg-shockersAEC z-10">
      <div className="relative mx-auto max-w-screen-xxl px-4 py-16 sm:px-6 lg:p-8  ">
        <div className="mt-16 lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center  lg:justify-start">
            <Link
              href={`/${name}`}
              className=" flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} width={width} height={width} alt={name} />
            </Link>
          </div>
          <ul className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
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
          </ul>
        </div>
        <div
          className={`mt-20 text-center lg:text-start grid grid-cols-1 gap-8 ${
            RTL ? "lg:gap-x-[330px]" : "lg:gap-x-[580px]"
          }  md:grid-cols-2 lg:grid-cols-2`}
        >
          <div>
            <Link href={data.LinkAddress}>
              <p className=" text-white text-xl font-semibold">
                {data.TitleAddress}
              </p>
              <ul className="mt-3 text-sm text-white">
                <li>
                  <span className="text-base">{data.CityAddress}</span>
                </li>
                <li>
                  <span className="text-base">{data.DetailedAddress}</span>
                </li>
              </ul>
            </Link>
          </div>
          <div>
            <p className=" text-white text-xl font-semibold">
              {data.TitlePhone}
            </p>

            <ul className="mt-3 text-sm text-white">
              <li>
                <span className="text-base">{data.Phone}</span>
              </li>
            </ul>
          </div>
          <div>
            <Link href={`mailto:${data.Email}`}>
              <p className=" text-white text-xl font-semibold">
                {data.TitleEmail}
              </p>
              <ul className="mt-3 text-sm text-white">
                <li>
                  <span className="text-base">{data.Email}</span>
                </li>
              </ul>
            </Link>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">
              {data.TitleSocialMedia}
            </p>

            <ul className="mt-3 text-sm text-white">
              {socialMedia.map((item, index) => (
                <li key={index}>
                  <Link href={item?.attributes?.LinkURL}>
                    <span className="text-base">{item?.attributes?.Name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-white ">
          {data.PrivacyPolicy} {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
