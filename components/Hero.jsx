import Image from "next/image";
import hero from "../img/hero.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full lg:h-96 h-80 bg-black">
      <Image
        alt="Background Image"
        src={hero}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 bg-cover bg-center bg-no-repeat opacity-60"
        priority
      />
      <div className="flex flex-col z-10 text-white items-center justify-between">
        <h3 className="lg:text-2xl md:text-sm">
          Get Best Discount On All flavor
        </h3>
        <h1 className="font-extrabold lg:text-4xl md:text-xl mt-6">
          Buy Best Quality Coffee
        </h1>
      </div>
    </div>
  );
};

export default Hero;
