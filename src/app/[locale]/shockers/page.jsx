"use client";
import { useState } from "react";
import LoadingVideo from "../../../components/LoadingVideo";
import Header from "@/components/Header";
const ShockersHome = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(true);

  return (
    <>
      {/* {isVideoEnded ? (
        <LoadingVideo URL="/video.mp4" setIsVideoEnded={setIsVideoEnded} />
      ) : ( */}
      <Header />
      <h1>sfdf</h1>
      {/* )} */}
    </>
  );
};

export default ShockersHome;
