/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";

const heroImage = "/images/my-photo.jpg";

import { TypeAnimation } from "react-type-animation";

const HeroSection = ({ name }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left px-4">
          <h1 className="text-white max-w-2xl mb-4  lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent text-4xl sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Oleg",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                // "Full Stack Developer",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto
            aliquam ab, velit excepturi ipsum dolorum sint fugit.
          </p>
          <div>
            <button className="w-full sm:w-fit sm:mr-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full lg:mr-4">
              Hire Me
            </button>
            <button className=" w-full sm:w-fit  mt-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-png-1.png"
              alt="hero-image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 rounded-b-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
