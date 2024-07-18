import Image from "next/image";

const ImageOverlaysCenter = ({ title }) => {
  return (
    <div className="relative w-screen h-screen">
      <Image
        className="w-full h-full object-cover"
        src="/assets/imageOverlays.jpg"
        width={5000}
        height={2500}
        alt="imageOverlays"
      />
      <div className="bg-black bg-opacity-80 w-full h-full absolute top-0" />
      <div className="absolute flex items-center justify-center  inset-0 m-auto   ">
        <div className=" text-center lg:text-start   text-white p-2">
          <h1 className="text-4xl lg:text-6xl font-bold mb-5 lg:mb-6 ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlaysCenter;
