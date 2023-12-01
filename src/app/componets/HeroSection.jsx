/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const heroImage = "/images/my-photo.jpg";

const HeroSection = ({ name }) => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-[#ffffff] mb-4 font-extrabold text-4xl   lg:text-6xl ">
            Hello, I'm {name}
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto
            aliquam ab, velit excepturi ipsum dolorum sint fugit.
          </p>
        </div>
        <div className="col-span-5 ">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-png-1.png"
              alt="hero-image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
