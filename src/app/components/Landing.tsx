// @ts-ignore
import Aos from 'aos';
import 'aos/dist/aos.css'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Me from '../../../public/me.png'
import Image from "next/image";
import { useEffect } from 'react';
import Link from 'next/link';

export default function Landing() {
  useEffect(() => Aos.init(), [])
  return (
    <div id='about' className="mt-20 text-center" data-aos="fade" data-aos-duration={600}> 
      <h1 className="text-4xl mb-2 sm:text-6xl">Arnab Banik</h1>
      <p className="text-gray-200 mb-5 sm:text-lg">
        Software and Web Developer.
      </p>
      <p className="text-left text-xs text-gray-300 mb-8 w-56 mx-auto sm:w-96">
        Hello, I am Arnab. Let me take you through a journey that will help you
        better know me. Buckle up, cause this is gonna be fun! 😁
      </p>
      <div className="flex gap-8 mb-10 items-center justify-center text-2xl">
        <Link href={'https://github.com/ArnabBanik-repo'}>
        <AiFillGithub />
        </Link>
        <Link href={'https://www.linkedin.com/in/arnab-banik/'}>
        <AiFillLinkedin /> 
        </Link>
        <Link href={'https://www.instagram.com/arnabbanik5/'}> <AiFillInstagram /></Link>
      </div>
      <div className="relative w-48 h-48 mx-auto overflow-hidden bg-[#82C0CC] rounded-full">
        <Image className="object-cover absolute -top-12 w-96 h-96" src={Me} alt="Myself"/>
      </div>
    </div>
  );
}
