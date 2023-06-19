import React, { useRef } from "react";
import Image from "next/image";
import Bg from "../../../public/Animated Shape (2).svg";
import Calc from '../../../public/calculator.jpg';
import Port from '../../../public/port.jpg'
import Word from '../../../public/words.jpg'

import "./about.css";

export default function About() {
  const scrollToRef = useRef(null);

  const handleScroll = (e: any) => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({behaviour: 'smooth'});
    }
    const el = document.querySelectorAll(".reveal");
    for (let i = 0; i < el.length; i++) {
      let ht = e.target.clientHeight;
      let elTop = el[i].getBoundingClientRect().top;
      let elBottom = el[i].getBoundingClientRect().height;
      let r = 300;
      let x = 100;
      if (elTop < ht - r) el[i].classList.add("active");
      else el[i].classList.remove("active");
      if (elTop + elBottom < ht - x) el[i].classList.remove("active");
    }

    const els = document.querySelectorAll(".small-reveal");
    for (let i = 0; i < els.length; i++) {
      let ht = e.target.clientHeight;

      let elTop = els[i].getBoundingClientRect().top;
      let elBottom = els[i].getBoundingClientRect().height;
      let r = 200;
      let x = 500;
      if (elTop < ht - r) els[i].classList.add("active");
      else els[i].classList.remove("active");
      if (elTop + elBottom < ht - x) els[i].classList.remove("active");
    }
  };

  return (
    <div id='projects' className="min-h-screen relative flex flex-col items-center justify-center px-20 gap-10" >
      <div className="absolute inset-0">
        <Image src={Bg} alt="background" layout="fill" objectFit="cover" />
      </div>

      <div
        id="elements"
        ref={scrollToRef}
        className="mt-16 sticky  text-[#031926] w-5/6 h-screen overflow-y-auto no-scrollbar"
        onScroll={(e) => handleScroll(e)}
      >
        <div className="h-full w-full flex flex-col gap-7 justify-center reveal active">
          <p className="text-6xl font-bold">Here are some of my works</p>
          <p className="text-xl font-medium text-end">Hope of you find them interesting 😊</p>
        </div>
        <div className="h-full w-full  flex flex-col gap-7 items-center justify-center reveal">
          <Image src={Word} alt="Calculator" className="overflow-hidden w-1/2 h-1/2 small-reveal delay right"/>
          <div className="w-1/2 h-1/2 absolute small-reveal delay right" style={{backgroundColor: 'rgba(0,0,0,0.35)'}}></div>
          <p className="text-6xl font-bold absolute left-20 drop-shadow-lg text-white left small-reveal">Words Counter</p>
        </div>
        <div className="h-full w-full  flex flex-col gap-7 items-center justify-center reveal">
          <Image src={Calc} alt="Calculator" className="overflow-hidden w-1/2 h-1/2 small-reveal delay left"/>
          <div className="w-1/2 h-1/2 absolute small-reveal delay left" style={{backgroundColor: 'rgba(0,0,0,0.35)'}}></div>
          <p className="text-6xl font-bold absolute left-20 drop-shadow-lg text-white right small-reveal">Calculator</p>
        </div>
        <div className="h-full w-full  flex flex-col gap-7 items-center justify-center reveal">
          <Image src={Port} alt="Calculator" className="overflow-hidden w-1/2 h-1/2 small-reveal delay right"/>
          <div className="w-1/2 h-1/2 absolute small-reveal delay right" style={{backgroundColor: 'rgba(0,0,0,0.35)'}}></div>
          <p className="text-6xl font-bold absolute left-20 drop-shadow-lg text-white left small-reveal">Portfolio</p>
        </div>
      </div>
    </div>
  );
}
