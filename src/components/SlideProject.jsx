import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation } from "swiper/modules";

export default function SlideProject({ projects, link }) {
  return (
    <Swiper
      className="w-full h-full  !p-2 "
      slidesPerView={2}
      spaceBetween={8}
      freeMode={true}
      navigation={true}
      modules={[FreeMode, Navigation]}
      breakpoints={{
        600: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 8,
        },
        1400: {
          slidesPerView: 5.5,
          spaceBetween: 8,
        },
        1705: {
          slidesPerView: 6.5,
          spaceBetween: 8,
        },
        2000: {
          slidesPerView: 7.5,
          spaceBetween: 8,
        },
      }}
    >
      {projects.map((item, index) => (
        <SwiperSlide key={index} className="relative">
          <Link href={`/${link}/projects/${item.id}`}>
            <Image
              className="rounded-lg"
              src={item.image}
              width={400}
              height={500}
              alt={item.id}
            />
            <div className="absolute rounded-lg inset-0 image-gradient" />
            <span className="absolute  bottom-0 p-4 text-white text-xl">
              {item.name}
            </span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
