import Image from "next/image";

const ImageOverlaysCenter = ({ title }) => {
  return (
    <div className="relative w-screen h-screen">
      <Image
        className="object-cover"
        src="/assets/imageOverlays.jpg"
        fill={true}
        alt="imageOverlays"
        quality={75}
      />
      <div className="bg-black bg-opacity-80 w-full h-full absolute top-0" />
      <div className="absolute flex items-center justify-center  inset-0 m-auto   ">
        <div className=" text-center lg:text-start   text-white p-2">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlaysCenter;
