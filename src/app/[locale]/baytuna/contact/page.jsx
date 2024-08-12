"use client";
import { motion } from "framer-motion";
import Draw_B from "@/components/Lottie/Draw_B";
import B_json from "/public/Motion/B.json";
import { useEffect, useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getContact, getJobOffers } from "../../../../../utils/BaytunaApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Contact = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [sectionView, setSectionView] = useState(0);

  const [ContactNames, setContactNames] = useState([]);
  const [jobOffers, setJobOffers] = useState([]);

  const getContact_ = useCallback(() => {
    getContact(lan).then((res) => {
      setContactNames(res.data.data.attributes);
    });
  }, [lan]);
  const getJobOffers_ = useCallback(() => {
    getJobOffers(lan).then((res) => {
      setJobOffers(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getContact_();
    getJobOffers_();
  }, [getContact_, getJobOffers_]);
  const nav = [
    {
      name: ContactNames.INQUIRY,
      index: 0,
    },
    {
      name: ContactNames.SUBSCRIBTION,
      index: 1,
    },
    {
      name: ContactNames.JOB_APPLICATION,
      index: 2,
    },
  ];
  const sectionForm = [
    {
      id: "FULL_NAME",
      name: ContactNames.FULL_NAME,
    },
    {
      id: "EMAIL_ADDRESS",
      name: ContactNames.EMAIL_ADDRESS,
    },
    {
      id: "PHONE_NUMBER",
      name: ContactNames.PHONE_NUMBER,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_B animationData={B_json} delay={500} speed={0.5} />

      <section className="min-h-screen max-w-screen-xl  mx-auto mt-[100px]  z-10 relative flex   flex-col ">
        <ul className="flex flex-col md:flex-row items-center text-lg  text-center w-full px-4 mb-0 md:mb-10 ">
          {nav.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-2 mx-3 mb-3 lg:mb-0 cursor-pointer w-full ${
                sectionView === item.index && "bg-baytuna text-white rounded-lg"
              }`}
              onClick={() => {
                setSectionView(item.index);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
        {sectionView === 0 && (
          <div className="flex flex-col justify-between md:flex-row mx-3 overflow-hidden">
            <div className="w-full md:w-[60%] xl:w-[50%] p-2 m-auto ">
              {sectionForm.map((item, index) => (
                <div key={index} className="mb-4">
                  <Label
                    htmlFor={item.id}
                    className="mb-3 text-lg text-shockersAEC"
                  >
                    {item.name}
                  </Label>
                  <Input
                    type="text"
                    id={item.id}
                    placeholder=""
                    className="py-5 text-base bg-transparent border-shockersAEC border-[1px] my-2 cancelEffect"
                  />
                </div>
              ))}

              <div className="mb-4">
                <Label
                  htmlFor="INQUIRY"
                  className="mb-3 text-lg text-shockersAEC"
                >
                  {ContactNames.INQUIRY_Area}
                </Label>
                <Textarea
                  id={ContactNames.INQUIRY_Area}
                  placeholder={ContactNames.INQUIRY_Placeholder}
                  className="text-base bg-transparent border-shockersAEC border-[1px] my-2 cancelEffect"
                  rows={6}
                />
              </div>
              <Button className="bg-baytuna hover:bg-shockersAEC text-white w-full text-lg rounded-lg">
                {ContactNames.SUBMIT}
              </Button>
            </div>
          </div>
        )}
        {sectionView === 1 && (
          <div className="flex flex-col justify-between md:flex-row mx-3 overflow-hidden">
            <div className="w-full md:w-[60%] xl:w-[50%] p-2 m-auto">
              <h1 className="text-shockersAEC text-xl  border-b-[1px] border-shockersAEC/20 mb-5 pb-5 lg:mb-10 lg:pb-10 font-medium ">
                {ContactNames.SUBSCRIBTION_TEXT}
              </h1>
              {sectionForm.map((item, index) => (
                <div key={index} className="mb-4">
                  <Label
                    htmlFor={item.id}
                    className="mb-3 text-lg text-shockersAEC"
                  >
                    {item.name}
                  </Label>
                  <Input
                    type="text"
                    id={item.id}
                    placeholder=""
                    className="py-5 text-base bg-transparent border-shockersAEC border-[1px] my-2 cancelEffect"
                  />
                </div>
              ))}

              <Button className="bg-baytuna hover:bg-shockersAEC text-white w-full text-lg rounded-lg">
                {ContactNames.SUBMIT}
              </Button>
            </div>
          </div>
        )}
        {sectionView === 2 && (
          <div className="flex flex-col justify-between md:flex-row mx-3 overflow-hidden">
            <div className="w-full md:w-[60%] xl:w-[50%] p-2 ">
              <h1 className="text-shockersAEC text-xl  border-b-[1px] border-shockersAEC/20 mb-5 pb-5 lg:mb-10 lg:pb-10 font-medium ">
                {ContactNames.JOBAPPLICATION_Text}
              </h1>
              {sectionForm.map((item, index) => (
                <div key={index} className="mb-4">
                  <Label
                    htmlFor={item.id}
                    className="mb-3 text-lg text-shockersAEC"
                  >
                    {item.name}
                  </Label>
                  <Input
                    type="text"
                    id={item.id}
                    placeholder=""
                    className="py-5 text-base bg-transparent border-shockersAEC border-[1px] my-2 cancelEffect"
                  />
                </div>
              ))}
              <div className="mb-4">
                <Label
                  htmlFor={ContactNames.ACADEMIC_QUALIFICATION}
                  className="mb-3 text-lg text-shockersAEC"
                >
                  {ContactNames.ACADEMIC_QUALIFICATION}
                </Label>
                <Input
                  type="text"
                  id={ContactNames.ACADEMIC_QUALIFICATION}
                  placeholder=""
                  className=" py-5 text-base bg-transparent border-shockersAEC border-[1px] my-2 cancelEffect"
                />
              </div>
              <div className="mb-4">
                <Label
                  htmlFor={ContactNames.CV_PORTFOLIO}
                  className="mb-3 text-lg text-shockersAEC"
                >
                  {ContactNames.CV_PORTFOLIO}
                </Label>
                {/* <Input
                  id="cv"
                  type="file"
                  className="  text-base bg-transparent border-shockersAEC border-[1px] my-2 cancelEffect"
                /> */}
                <div className="mt-4  mb-6">
                  <input
                    id="cv"
                    type="file"
                    className="hidden "
                    onChange={(e) => {
                      const fileName =
                        e.target.files.length > 0
                          ? e.target.files[0].name
                          : ContactNames.No_file_chosen;
                      document.getElementById("fileLabel").innerText = fileName;
                    }}
                  />

                  <label
                    htmlFor="cv"
                    className=" flex items-center cursor-pointer rounded-lg bg-transparent border-shockersAEC border-[1px] text-base  py-2 cancelEffect"
                  >
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
                      class="lucide lucide-upload mx-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                    {ContactNames.ATTACH_YOUR_FILES}
                  </label>
                  <span id="fileLabel" className="ml-2">
                    {ContactNames.No_file_chosen}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <Textarea
                  id="Notes"
                  placeholder={ContactNames.TextNote}
                  className="text-base bg-transparent border-shockersAEC border-[1px] my-2 cancelEffect"
                  rows={2}
                />
              </div>
              <Button className="bg-baytuna hover:bg-shockersAEC text-white w-full text-lg rounded-lg">
                {ContactNames.SUBMIT}
              </Button>
            </div>
            <div className="w-full  md:w-1/3 p-2  ">
              <h1 className="text-shockersAEC text-xl  text-center font-medium ">
                {ContactNames.AVAILABLE_JOB_OFFERS}
              </h1>
              <div className="mb-8 mt-4 w-full h-[250px] ">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper w-full h-full"
                >
                  {jobOffers.length > 0 ? (
                    jobOffers.map((item, index) => (
                      <SwiperSlide
                        key={index}
                        className="!flex justify-center items-center bg-baytuna text-white text-xl text-center rounded-lg"
                      >
                        {item.attributes?.title}
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide className="!flex justify-center items-center bg-baytuna text-white text-xl text-center rounded-lg">
                      {ContactNames.No_offers_yet}
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default Contact;
