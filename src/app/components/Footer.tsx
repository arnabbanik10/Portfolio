import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import {BsMessenger} from 'react-icons/bs'

import Bg from "../../../public/Footer-bg.svg";
import Link from "next/link";

export default function Footer() {
  useEffect(() => Aos.init(), []);
  return (
    <div id='contact' className="min-h-screen relative flex flex-col items-center px-20 gap-10">
      <div className="absolute inset-0">
        <Image src={Bg} alt="background" layout="fit" objectFit="cover" />
      </div>

      <div className="mt-72 relative text-[#82C0CC] w-5/6 h-full">
        <p
          className="text-5xl text-center mt-16 font-bold mb-6"
          data-aos="fade-up"
          data-aos-offset={200}
        >
          I'll See You On The Other Side 😉
        </p>
        <p
          className="text-lg text-end mb-10"
          data-aos="fade-up"
          data-aos-offset={100}
        >
          ... Till Then, Let's chat
        </p>
        <div className="flex gap-8 mb-10 items-center justify-center text-xl" data-aos="fade-left">
        <Link href={'www.mail.google.com'}>
          <AiFillMail />
        </Link>
        <Link href={"https://github.com/ArnabBanik-repo"}>
          <AiFillGithub />
        </Link>
        <Link href={"https://www.linkedin.com/in/arnab-banik/"}>
          <AiFillLinkedin />
        </Link>
        <Link href={"https://www.instagram.com/arnabbanik5/"}>
          <AiFillInstagram />
        </Link>
        <Link href={'https://www.messenger.com/'}>
          <BsMessenger />
        </Link>
        </div>
      </div>
    </div>
  );
}
