import Image from "next/image";

const ImageOverlaysTop = ({  title, imgURL }) => {
  return (
    <div className="relative w-screen h-screen z-10">
      <Image
        className=" object-cover"
        src={imgURL}
        fill={true}
        alt="imageOverlays"
        quality={75}
      />
      <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
      <div className="absolute bottom-10 lg:bottom-20 w-full ">
        <div className="m-auto max-w-screen-xxl text-center lg:text-start text-white lg:p-10  xxl:p-2">
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlaysTop;
