import Image from "next/image";
import Link from "next/link";

const Footer = ({ width, name, logo, links, nameFooter, socialMedia }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-seconds z-10">
      <div className="relative mx-auto max-w-screen-xxl px-4 py-16 sm:px-6 lg:p-8 ">
        <div className="mt-2 lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center  lg:justify-start">
            <Link
              href={`/${name}`}
              className=" flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} width={width} height={width} alt={name} />
            </Link>
          </div>
          <ul className="mt-16 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-white transition text-xl"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-20 text-center   lg:text-start grid grid-cols-1 gap-8 lg:gap-x-[330px] md:grid-cols-2 lg:grid-cols-2">
          <div>
            <Link href="https://maps.app.goo.gl/2ByQ52ayynrUF9sA8">
              <p className=" text-white text-xl font-semibold">Address</p>
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
            </Link>
          </div>
          <div>
            <p className=" text-white text-xl font-semibold">Phone Number</p>

            <ul className="mt-3 text-sm text-white">
              <li>
                <span className="text-base">07707225959</span>
              </li>
            </ul>
          </div>
          <div>
            <Link href="mailto:info@shockersgroup.com">
              <p className=" text-white text-xl font-semibold">Email Address</p>
              <ul className="mt-3 text-sm text-white">
                <li>
                  <span className="text-base">info@shockersgroup.com</span>
                </li>
              </ul>
            </Link>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">Social Media</p>

            <ul className="mt-3 text-sm text-white">
              {socialMedia.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>
                    <span className="text-base">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center  text-white ">
          privacy policy &copy; {nameFooter} {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
