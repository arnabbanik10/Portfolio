import Aos from "aos";
import Image from "next/image";
import AboutBg from "../../../public/about-bg.svg";
import Shapes from "../../../public/Animated Shape.svg";
import { AiOutlineDown } from "react-icons/ai";
import { useEffect } from "react";
import { Parallax, Background } from "react-parallax";

export default function Buffer() {
  useEffect(() => Aos.init(), []);
  return (
    <Parallax strength={200}>
      <div
        className="min-h-screen relative flex flex-col items-center justify-center px-20 gap-10"
        data-aos="fade-up"
        data-aos-offset={500}
      >
        <Background className="custom-bg">
          <div className="absolute inset-0">
            <Image
              src={AboutBg}
              alt="background"
              layout="fill"
              objectFit="cover"
            />
            <Image src={Shapes} alt="shapes" layout="fill" objectFit="cover" />
          </div>
        </Background>

        <div className="mt-16 relative text-[#031926] w-1/2 min-h-screen flex flex-col justify-center">
          <p
            className="font-bold text-6xl text-center drop-shadow-md"
            data-aos="fade-up"
            data-aos-offset={300}
          >
            Keep Scrolling😄
          </p>
          <p
            className="text-xl font-semibold mt-8 text-end drop-shadow"
            data-aos="fade-up"
            data-aos-offset={300}
          >
            ... Let's know me 😊
          </p>
        </div>

        <p className="relative -top-52 text-[#031926] text-xl animate-bounce">
          <AiOutlineDown />
          <AiOutlineDown className="-mt-3" />
          <AiOutlineDown className="-mt-3" />
        </p>
      </div>
    </Parallax>
  );
}
