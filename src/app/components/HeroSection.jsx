"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Hello ,I am
              <br/>
            </span>
            <TypeAnimation
              sequence={[
                
                "Rafi Bettaieb",
                1000,
                "Competetive Programmer",
                1000,
                "FullStack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            As a computer science student at the Higher Institute of Computer
            Science of Ariana (ISI) , I am passionate about a variety of
            technology-related fields including competitive programming,
            Artificial Intelligence and Web Development. My goal is to gain
            professional experience in these areas and to continue to develop my
            skills constantly.
          </p>
          <div>
            <button className="text-black px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-700 text-white border border-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-600 rounded-full px-5 py-2">
                download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[450px] h-[450px] relative">
            <Image
              src="/images/profile-pic.png"
              alt="Hero Image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={270}
              height={270}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
