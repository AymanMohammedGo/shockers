"use client";
import React from "react";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import { useParams } from "next/navigation";
import ImageTitleProject from "@/components/ImageTitleProject";
import Image from "next/image";

const SubProject = () => {
  const params = useParams();
  const param = params.param;

  //   if (!param) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <ImageOverlaysTop namePage="Sub Project" title={param} />
      <ImageTitleProject />
      <div className="sticky top-0">
        <div className=" h-screen w-screen">
          <Image
            className="w-full h-full object-cover"
            src="/assets/projects1.jpg"
            width={1000}
            height={500}
            alt=""
          />
        </div>
      </div>
      <div className="sticky top-0">
        <div className=" h-screen w-screen">
          <Image
            className="w-full h-full object-cover"
            src="/assets/projects2.jpg"
            width={1000}
            height={500}
            alt=""
          />
        </div>
      </div>
      <div className="sticky top-0">
        <div className=" h-screen w-screen">
          <Image
            className="w-full h-full object-cover"
            src="/assets/projects1.jpg"
            width={1000}
            height={500}
            alt=""
          />
        </div>
      </div>
      <div className="sticky top-0">
        <div className=" h-screen w-screen">
          <Image
            className="w-full h-full object-cover"
            src="/assets/projects2.jpg"
            width={1000}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SubProject;
