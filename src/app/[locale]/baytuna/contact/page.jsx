"use client";
import { motion } from "framer-motion";
import Draw_B from "@/components/Lottie/Draw_B";
import B_json from "/public/Motion/BAYTUNA V3.json";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { getContact, getJobOffers } from "../../../../../utils/BaytunaApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import FormField from "@/components/ui/FormField";
import ScrollToTopButton from "@/components/scrollTop";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const { t } = useTranslation();

  const [sectionView, setSectionView] = useState(0);
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  const [ContactNames, setContactNames] = useState([]);
  const [jobOffers, setJobOffers] = useState([]);
  const [formData, setFormData] = useState({
    dataSectionOne: {
      Title: "INQUIRY_BAYTUNA",
      FULL_NAME: "",
      EMAIL_ADDRESS: "",
      PHONE_NUMBER: "",
      INQUIRY: "",
    },
    dataSectionTwo: {
      Title: "SUBSCRIPTION_BAYTUNA",
      SUBSCRIPTION_FULL_NAME: "",
      SUBSCRIPTION_EMAIL_ADDRESS: "",
      SUBSCRIPTION_PHONE_NUMBER: "",
    },
    dataSectionThree: {
      Title: "JOB_APPLICATION_BAYTUNA",
      Job_FULL_NAME: "",
      Job_EMAIL_ADDRESS: "",
      Job_PHONE_NUMBER: "",
      Job_ACADEMIC_QUALIFICATION: "",
      Job_CV_PORTFOLIO: "",
      Job_Notes: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (section, e) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [e.target.id]: e.target.value,
      },
    }));
  };
  const formatMessage = (data, section) => {
    let message = "";
    if (section === "dataSectionOne") {
      message = `
      My Name: ${data.FULL_NAME}
      My Email: ${data.EMAIL_ADDRESS}
      My Phone: ${data.PHONE_NUMBER}
      My Inquity: ${data.INQUIRY}
      `;
    } else if (section === "dataSectionTwo") {
      message = `
      My Name: ${data.SUBSCRIPTION_FULL_NAME}
      My Email: ${data.SUBSCRIPTION_EMAIL_ADDRESS}
      My Phone: ${data.SUBSCRIPTION_PHONE_NUMBER}
      `;
    } else if (section === "dataSectionThree") {
      message = `
      My Name: ${data.Job_FULL_NAME}
      My Email: ${data.Job_EMAIL_ADDRESS}
      My Phone: ${data.Job_PHONE_NUMBER}
      My Academic Qualification: ${data.Job_ACADEMIC_QUALIFICATION}
      My CV Portfolio: ${data.Job_CV_PORTFOLIO}
      My Notes: ${data.Job_Notes}
      `;
    }

    return message;
  };
  const handleSubmit = (section, e) => {
    e.preventDefault();
    console.log(formData[section]);
    setFormData((prevState) => ({
      ...prevState,
      [section]: Object.fromEntries(
        Object.keys(prevState[section]).map((key) => [key, ""])
      ),
    }));
    setIsSubmitting(true);

    emailjs
      .send(
        "service_0lwq4pf",
        "template_3pz9jsc",
        {
          Title: formData[section].Title,
          message: formatMessage(formData[section], section),
        },
        "3VDT7N1sfotFdWbgp"
      )
      .then(
        (result) => {
          setResponseMessage("Message sent successfully");
          setFormData({
            dataSectionOne: {
              Title: "INQUIRY_BAYTUNA",
              FULL_NAME: "",
              EMAIL_ADDRESS: "",
              PHONE_NUMBER: "",
              INQUIRY: "",
            },
            dataSectionTwo: {
              Title: "SUBSCRIPTION_BAYTUNA",
              SUBSCRIPTION_FULL_NAME: "",
              SUBSCRIPTION_EMAIL_ADDRESS: "",
              SUBSCRIPTION_PHONE_NUMBER: "",
            },
            dataSectionThree: {
              Title: "JOB_APPLICATION_BAYTUNA",
              Job_FULL_NAME: "",
              Job_EMAIL_ADDRESS: "",
              Job_PHONE_NUMBER: "",
              Job_ACADEMIC_QUALIFICATION: "",
              Job_CV_PORTFOLIO: "",
              Job_Notes: "",
            },
          });
          setTimeout(() => {
            setResponseMessage("");
          }, 3000);
        },
        (error) => {
          setResponseMessage("Failed to send message");
        }
      );

    setIsSubmitting(false);
  };
  const getContact_ = useCallback(() => {
    getContact(lan).then((res) => {
      setContactNames(res.data.data);
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-circle-help mx-2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      ),
      index: 0,
    },
    {
      name: ContactNames.SUBSCRIBTION,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-user-round-check mx-2"
        >
          <path d="M2 21a8 8 0 0 1 13.292-6" />
          <circle cx="10" cy="8" r="5" />
          <path d="m16 19 2 2 4-4" />
        </svg>
      ),
      index: 1,
    },
    {
      name: ContactNames.JOB_APPLICATION,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-briefcase-business mx-2"
        >
          <path d="M12 12h.01" />
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      ),
      index: 2,
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
      >
        <Draw_B animationData={B_json} delay={500} speed={0.5} />

        <section className="min-h-screen max-w-screen-xl  mx-auto mt-[100px]  z-10 relative flex   flex-col ">
          <ul className="flex flex-col md:flex-row items-center text-base  text-center w-full px-4 mb-0 md:mb-10 ">
            {nav.map((item, index) => (
              <li
                key={index}
                className={`px-4 py-2 mx-3 mb-3 lg:mb-0 cursor-pointer w-full rounded-lg flex items-center lg:justify-center hover:bg-baytuna hover:text-white ${
                  sectionView === item.index && "bg-baytuna text-white "
                }`}
                onClick={() => {
                  setSectionView(item.index);
                }}
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
          {sectionView === 0 && (
            <motion.div
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="flex flex-col justify-between md:flex-row mx-3 overflow-hidden"
            >
              <form
                className="w-full md:w-[60%] xl:w-[50%] p-2 m-auto "
                onSubmit={(e) => handleSubmit("dataSectionOne", e)}
              >
                <FormField
                  id="FULL_NAME"
                  label={ContactNames.FULL_NAME}
                  type="text"
                  value={formData.dataSectionOne.FULL_NAME}
                  onChange={(e) => handleChange("dataSectionOne", e)}
                  required
                />
                <FormField
                  id="EMAIL_ADDRESS"
                  label={ContactNames.EMAIL_ADDRESS}
                  type="email"
                  value={formData.dataSectionOne.EMAIL_ADDRESS}
                  onChange={(e) => handleChange("dataSectionOne", e)}
                  required
                />
                <FormField
                  id="PHONE_NUMBER"
                  label={ContactNames.PHONE_NUMBER}
                  type="number"
                  value={formData.dataSectionOne.PHONE_NUMBER}
                  onChange={(e) => handleChange("dataSectionOne", e)}
                  required
                />
                <FormField
                  id="INQUIRY"
                  label={ContactNames.INQUIRY_Area}
                  isTextarea={true}
                  value={formData.dataSectionOne.INQUIRY}
                  onChange={(e) => handleChange("dataSectionOne", e)}
                  placeholder={ContactNames.INQUIRY_Placeholder}
                />
                <Button className="bg-baytuna hover:bg-shockersAEC text-white w-full text-base rounded-lg">
                  {isSubmitting ? t("Sending...") : ContactNames.SUBMIT}
                </Button>
                {responseMessage && (
                  <p
                    className={`${
                      responseMessage === "Message sent successfully"
                        ? "text-green-500"
                        : "text-red-500"
                    } mt-4 text-lg text-center`}
                  >
                    {t(`${responseMessage}`)}
                  </p>
                )}
              </form>
            </motion.div>
          )}
          {sectionView === 1 && (
            <motion.div
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="flex flex-col justify-between md:flex-row mx-3 overflow-hidden"
            >
              <form
                className="w-full md:w-[60%] xl:w-[50%] p-2 m-auto"
                onSubmit={(e) => handleSubmit("dataSectionTwo", e)}
              >
                <h1 className="text-shockersAEC text-lg  border-b-[1px] border-shockersAEC/20 mb-3 pb-3 lg:mb-5 lg:pb-5 font-medium ">
                  {ContactNames.SUBSCRIBTION_TEXT}
                </h1>
                <FormField
                  id="SUBSCRIPTION_FULL_NAME"
                  label={ContactNames.FULL_NAME}
                  type="text"
                  value={formData.dataSectionTwo.SUBSCRIPTION_FULL_NAME}
                  onChange={(e) => handleChange("dataSectionTwo", e)}
                  required
                />
                <FormField
                  id="SUBSCRIPTION_EMAIL_ADDRESS"
                  label={ContactNames.EMAIL_ADDRESS}
                  type="email"
                  value={formData.dataSectionTwo.SUBSCRIPTION_EMAIL_ADDRESS}
                  onChange={(e) => handleChange("dataSectionTwo", e)}
                  required
                />
                <FormField
                  id="SUBSCRIPTION_PHONE_NUMBER"
                  label={ContactNames.PHONE_NUMBER}
                  type="number"
                  value={formData.dataSectionTwo.SUBSCRIPTION_PHONE_NUMBER}
                  onChange={(e) => handleChange("dataSectionTwo", e)}
                  required
                />
                <Button className="bg-baytuna hover:bg-shockersAEC text-white w-full text-base rounded-lg">
                  {isSubmitting ? t("Sending...") : ContactNames.SUBMIT}
                </Button>
                {responseMessage && (
                  <p
                    className={`${
                      responseMessage === "Message sent successfully"
                        ? "text-green-500"
                        : "text-red-500"
                    } mt-4 text-lg text-center`}
                  >
                    {t(`${responseMessage}`)}
                  </p>
                )}
              </form>
            </motion.div>
          )}
          {sectionView === 2 && (
            <motion.div
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="flex flex-col justify-between md:flex-row mx-3 overflow-hidden"
            >
              <form
                className="w-full md:w-[60%] xl:w-[50%] p-2 "
                onSubmit={(e) => handleSubmit("dataSectionThree", e)}
              >
                <div className="text-shockersAEC text-lg  border-b-[1px] border-shockersAEC/20 mb-3 pb-3 lg:mb-5 lg:pb-5 font-medium ">
                  {ContactNames.JOBAPPLICATION_Title && (
                    <p className="bg-baytuna text-white px-2 py-1">
                      {ContactNames.JOBAPPLICATION_Title}
                    </p>
                  )}
                  <p className="px-2">{ContactNames.JOBAPPLICATION_Text}</p>
                </div>
                <FormField
                  id="Job_FULL_NAME"
                  label={ContactNames.FULL_NAME}
                  type="text"
                  value={formData.dataSectionThree.Job_FULL_NAME}
                  onChange={(e) => handleChange("dataSectionThree", e)}
                  required
                />
                <FormField
                  id="Job_EMAIL_ADDRESS"
                  label={ContactNames.EMAIL_ADDRESS}
                  type="email"
                  value={formData.dataSectionThree.Job_EMAIL_ADDRESS}
                  onChange={(e) => handleChange("dataSectionThree", e)}
                  required
                />
                <FormField
                  id="Job_PHONE_NUMBER"
                  label={ContactNames.PHONE_NUMBER}
                  type="number"
                  value={formData.dataSectionThree.Job_PHONE_NUMBER}
                  onChange={(e) => handleChange("dataSectionThree", e)}
                  required
                />
                <FormField
                  id="Job_ACADEMIC_QUALIFICATION"
                  label={ContactNames.ACADEMIC_QUALIFICATION}
                  type="text"
                  value={formData.dataSectionThree.Job_ACADEMIC_QUALIFICATION}
                  onChange={(e) => handleChange("dataSectionThree", e)}
                  required
                />
                <FormField
                  id="Job_CV_PORTFOLIO"
                  label={ContactNames.CV_PORTFOLIO}
                  type="text"
                  placeholder={"link"}
                  value={formData.dataSectionThree.Job_CV_PORTFOLIO}
                  onChange={(e) => handleChange("dataSectionThree", e)}
                />
                <FormField
                  id="Job_Notes"
                  label={ContactNames.TextNote}
                  isTextarea={true}
                  placeholder={ContactNames.TextNote}
                  value={formData.dataSectionThree.Job_Notes}
                  onChange={(e) => handleChange("dataSectionThree", e)}
                  rows={3}
                  lable={false}
                />

                <Button className="bg-baytuna hover:bg-shockersAEC text-white w-full text-base rounded-lg">
                  {isSubmitting ? t("Sending...") : ContactNames.SUBMIT}
                </Button>
                {responseMessage && (
                  <p
                    className={`${
                      responseMessage === "Message sent successfully"
                        ? "text-green-500"
                        : "text-red-500"
                    } mt-4 text-lg text-center`}
                  >
                    {t(`${responseMessage}`)}
                  </p>
                )}
              </form>

              <div className="w-full  md:w-1/3 p-2  ">
                <h1 className="text-shockersAEC text-lg  text-center font-medium ">
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
                          className="!flex justify-center items-center bg-baytuna text-white text-lg text-center rounded-lg"
                        >
                          {item.title}
                        </SwiperSlide>
                      ))
                    ) : (
                      <SwiperSlide className="!flex justify-center items-center bg-baytuna text-white text-lg text-center rounded-lg">
                        <div className="flex flex-col items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-frown my-2"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                            <line x1="9" x2="9.01" y1="9" y2="9" />
                            <line x1="15" x2="15.01" y1="9" y2="9" />
                          </svg>
                          {ContactNames.No_offers_yet}
                        </div>
                      </SwiperSlide>
                    )}
                  </Swiper>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      </motion.div>
      <ScrollToTopButton />
    </>
  );
};

export default Contact;
