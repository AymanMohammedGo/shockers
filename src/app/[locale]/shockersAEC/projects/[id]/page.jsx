"use client";
import React from "react";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import { useParams } from "next/navigation";
import ImageTitleProject from "@/components/ImageTitleProject";
import Image from "next/image";

const SubProject = ({ params }) => {
  // const params = useParams();
  // const param = params.param;

  //   if (!param) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <ImageOverlaysTop namePage="Sub Project" title={params.id} />
      <ImageTitleProject />
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="w-full h-full object-cover"
            src="/assets/projects1.jpg"
            width={5600}
            height={3200}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="w-full h-full object-cover"
            src="/assets/projects2.jpg"
            width={5600}
            height={3200}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="w-full h-full object-cover"
            src="/assets/projects1.jpg"
            width={5600}
            height={3200}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="w-full h-full object-cover"
            src="/assets/projects2.jpg"
            width={5600}
            height={3200}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
    </div>
  );
};

export default SubProject;
