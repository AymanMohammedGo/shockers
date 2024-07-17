"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingVideo from "@/components/LoadingVideo";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isVideoEnded, setIsVideoEnded] = useState(true);

  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between ">
      {/* {isVideoEnded ? (
        <LoadingVideo URL="/done8_2.mp4" setIsVideoEnded={setIsVideoEnded} />
      ) : ( */}
      <>
        <Header />
        {children}
        <Footer />
      </>
      {/* )} */}
    </div>
  );
}
