"use client";
import { useState } from "react";

const KurdishFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 32 32"
  >
    <path fill="#fff" d="M1 11H31V21H1z"></path>
    <path
      d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
      fill="#bd2a2b"
    ></path>
    <path
      d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
      transform="rotate(180 16 24)"
      fill="#00af4d"
    ></path>
    <circle cx="16" cy="16" r="4" fill="#fff200"></circle>
    <g transform="translate(16, 16)">
      <path
        d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
        fill="#fff200"
      />
      {[...Array(12)].map((_, i) => (
        <path
          key={i}
          d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
          fill="#fff200"
          transform={`rotate(${i * 15})`}
        />
      ))}
    </g>
    <path
      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
      opacity=".15"
    ></path>
    <path
      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
      fill="#fff"
      opacity=".2"
    ></path>
  </svg>
);
const ArabicFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 32 32"
  >
    <path fill="#fff" d="M1 11H31V21H1z"></path>
    <path
      d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
      fill="#bd2a2b"
    ></path>
    <path
      d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
      transform="rotate(180 16 24)"
    ></path>
    <path
      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
      opacity=".15"
    ></path>
    <path
      d="M15.216,17.884h-6.565c-.051,.463-.529,.802-1.066,.757-.058-.005-.116-.014-.172-.028,.919-.451,.862-.909,.282-1.927,.322-.115,.373-.146,.699-.366-.231,.699,.597,.614,1.208,.614,0-.244,.024-.522-.159-.56,.237-.085,.258-.112,.634-.431v.94h4.529v-.645c0-.075-.061-.136-.136-.136s-.136,.061-.136,.136v.373c0,.056-.046,.102-.102,.102h-3.461v-.611l2.599-2.511c-.017,.129,.251,.475,.363,.533-.085,.014-.18-.003-.241,.058l-2.127,2.056h2.358c0-.546,.509-.546,.746-.74,.237,.193,.746,.193,.746,.74v1.645Z"
      fill="#357a42"
    ></path>
    <path
      d="M15.708,17.884v-4.292c.241,.132,.427,.285,.726,.36-.014,.17-.166,.224-.166,.343v2.64c.332,.075,.407-.119,.567-.217,.041,.421,.309,.835,.299,1.167h-1.425Z"
      fill="#357a42"
    ></path>
    <path
      d="M20.193,15.017l.526-.441v2.307h.373v-2.623c.183-.153,.421-.319,.526-.512v4.136h-3.308c-.047-.855-.047-1.734,.95-1.544v-.349c0-.081-.122-.017-.122-.092l.682-.57v1.554h.373v-1.866Z"
      fill="#357a42"
    ></path>
    <path
      d="M22.11,17.884v-4.292c.241,.132,.427,.285,.726,.36-.014,.17-.166,.224-.166,.343v2.64c.332,.075,.407-.119,.567-.217,.041,.421,.309,.835,.299,1.167h-1.425Z"
      fill="#357a42"
    ></path>
    <path
      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
      fill="#fff"
      opacity=".2"
    ></path>
  </svg>
);
const EnglishFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 32 32"
  >
    <rect
      x="1"
      y="4"
      width="30"
      height="24"
      rx="4"
      ry="4"
      fill="#071b65"
    ></rect>
    <path
      d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
      fill="#fff"
    ></path>
    <path
      d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
      fill="#b92932"
    ></path>
    <path
      d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
      fill="#b92932"
    ></path>
    <path
      d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
      fill="#fff"
    ></path>
    <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
    <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
    <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
    <rect
      x="14"
      y="1"
      width="4"
      height="30"
      transform="translate(32) rotate(90)"
      fill="#b92932"
    ></rect>
    <path
      d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
      fill="#b92932"
    ></path>
    <path
      d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
      fill="#b92932"
    ></path>
    <path
      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
      opacity=".15"
    ></path>
    <path
      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
      fill="#fff"
      opacity=".2"
    ></path>
  </svg>
);

const language = [
  {
    name: "Kurdish",
    Flag: EnglishFlag,
  },
  {
    name: "English",
    Flag: EnglishFlag,
  },
  {
    name: "Arabic",
    Flag: ArabicFlag,
  },
];
const SelectLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState({
    name: "Kurdish",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 32 32"
      >
        <path fill="#fff" d="M1 11H31V21H1z"></path>
        <path
          d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
          fill="#bd2a2b"
        ></path>
        <path
          d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
          transform="rotate(180 16 24)"
          fill="#00af4d"
        ></path>

        <circle cx="16" cy="16" r="4" fill="#fff200"></circle>
        <g transform="translate(16, 16)">
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(15)"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(30)"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(45)"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(60)"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(75)"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(90)"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(105)"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(120)"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(135)"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(150)"
          />
          <path
            d="M0-6L1.5-2H4L2.5 0L4 2H1.5L0 6L-1.5 2H-4L-2.5 0L-4-2H-1.5Z"
            fill="#fff200"
            transform="rotate(165)"
          />
        </g>

        <path
          d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
          opacity=".15"
        ></path>
        <path
          d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
          fill="#fff"
          opacity=".2"
        ></path>
      </svg>
    ),
  });
  const selectKurdish = () => {
    setSelectLanguage({
      name: "Kurdish",
      svg: <KurdishFlag />,
    });
    setIsOpen(false);
  };
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav className="menu relative">
      <button onClick={toggleOpen} className="flex items-center space-x-2">
        {selectLanguage.svg}
        <span>{selectLanguage.name}</span>
        <div>
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
            class={`lucide lucide-chevron-down transition-all	 ${
              isOpen && "rotate-180"
            }`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <ul className="cursor-pointer absolute text-white bg-slate-600 left-0 top-full z-10">
          {language.map((item, index) => {
            <li
              key={index}
              onClick={selectKurdish}
              className="flex items-center m-2"
            >
              <KurdishFlag />
              <span className="mx-2 text-center">{item.name}</span>
            </li>;
          })}
        </ul>
      )}
    </nav>
  );
};

export default SelectLanguage;
