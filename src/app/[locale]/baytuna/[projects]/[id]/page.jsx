"use client";
import ImageTitleProject from "@/components/ImageTitleProject";
import Image from "next/image";
import { motion } from "framer-motion";

const SubProject = ({ params }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <div className="sticky top-0">
        <ImageTitleProject />
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="object-cover"
            src="/img/projects1.jpg"
            fill={true}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="object-cover"
            src="/img/projects2.jpg"
            fill={true}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="object-cover"
            src="/img/projects1.jpg"
            fill={true}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="object-cover"
            src="/img/projects2.jpg"
            fill={true}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
    </motion.div>
  );
};

export default SubProject;
