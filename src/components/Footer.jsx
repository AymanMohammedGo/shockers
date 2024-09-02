"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ width, name, logo, socialMedia, data }) => {
  const currentYear = new Date().getFullYear();
  const facebookIcons = (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 32 32"
    >
      <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
    </svg>
  );
  const instagramIcons = (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 32 32"
    >
      <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
    </svg>
  );
  const likedinIcons = (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 32 32"
    >
      <path
        d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  );

  return (
    <footer
      id="footer"
      className="bg-shockersAEC z-10 !min-h-screen  sm:!min-h-full"
    >
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
        </div>
        <div
          className={`mt-20 text-center lg:text-start grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-2  xl:gap-x-[580px]`}
        >
          <div>
            <Link href={data?.LinkAddress || "#"}>
              <p className=" text-white text-xl font-semibold">
                {data?.TitleAddress}
              </p>
              <ul className="mt-3 text-sm text-white">
                <li className="my-2 flex items-center justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-map-pinned"
                  >
                    <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                    <circle cx="12" cy="8" r="2" />
                    <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                  </svg>
                  <span className="text-base px-2">{data?.CityAddress}</span>
                </li>
                <li className="my-2 flex items-center justify-center lg:justify-start">
                  <span className="text-base px-[28px]">
                    {data?.DetailedAddress?.includes("rd") ? (
                      data?.DetailedAddress.split("rd").map((part, index) => (
                        <>
                          {part}
                          {index <
                            data?.DetailedAddress.split("rd").length - 1 && (
                            <sup className="text-xs">rd</sup>
                          )}
                        </>
                      ))
                    ) : (
                      <span>{data?.DetailedAddress}</span>
                    )}
                  </span>
                </li>
              </ul>
            </Link>
          </div>
          <div>
            <p className=" text-white text-xl font-semibold">
              {data?.TitlePhone}
            </p>

            <ul className="mt-3 text-sm text-white ">
              <li className="my-2 flex items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone "
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-base px-2">{data?.Phone}</span>
              </li>
              {data?.Phone1 && (
                <li className="my-2 flex items-center justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-phone "
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-base px-2">{data?.Phone1}</span>
                </li>
              )}
            </ul>
          </div>
          <div>
            <p className=" text-white text-xl font-semibold">
              {data?.TitleEmail}
            </p>
            <ul className="mt-3 text-sm text-white">
              <li className="my-2 flex items-center justify-center lg:justify-start">
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
                  class="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <Link href={`mailto:${data?.Email}` || "#"}>
                  <span className="text-base px-2">{data?.Email}</span>
                </Link>
              </li>

              {data?.Email1 && (
                <li className="my-2 flex items-center justify-center lg:justify-start">
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
                    class="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <Link href={`mailto:${data?.Email1}` || "#"}>
                    <span className="text-base px-2">{data?.Email1}</span>
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
              {socialMedia?.map((item, index) => (
                <li
                  className="my-2 flex items-center justify-center lg:justify-start"
                  key={index}
                >
                  {item?.attributes?.LinkURL.split("/")
                    .slice(0, 3)
                    .join("/") === "https://www.facebook.com"
                    ? facebookIcons
                    : item?.attributes?.LinkURL.split("/")
                        .slice(0, 3)
                        .join("/") === "https://www.instagram.com"
                    ? instagramIcons
                    : item?.attributes?.LinkURL.split("/")
                        .slice(0, 3)
                        .join("/") === "https://www.linkedin.com" &&
                      likedinIcons}

                  <Link href={item?.attributes?.LinkURL || "#"}>
                    <span className="text-base px-2">
                      {item?.attributes?.Name}
                    </span>
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
