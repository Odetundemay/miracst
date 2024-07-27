import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [playTypewriter, setPlayTypewriter] = useState(false);

  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Miracle",
      "Guy-who-loves-Football",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
    onLoopDone: () => setPlayTypewriter(false),
    onType: () => setPlayTypewriter(true),
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://miracle-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCenter%20Image.0ffe40e9.jpg&w=1080&q=75"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Devloper
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="ar-3">{text}</span>
          <Cursor cursorColor="#F7A00A" />
        </h1>

        <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="projects">
          <button className="heroButton">Projects</button>
        </Link>
        </div>
      </div>
    </div>
  );
}
