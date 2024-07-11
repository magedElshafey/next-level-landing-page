import React from "react";
import logo from "../assets/logo.png";
import { PiDotsNine } from "react-icons/pi";
import company from "../assets/company.jpg";
const Hero = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex  flex-wrap gap-5 md:gap-0 h-full">
        <div className="w-full md:w-1/2 bg-darkColor text-white py-5 relative">
          <div className="container mx-auto px-8">
            <div className="w-full flex items-center justify-between">
              <a href="/#">
                <img src={logo} alt="logo" className="w-24 md:w-32" />
              </a>
              <PiDotsNine size={50} />
            </div>
            <div className="">
              <div className="main flex flex-col  justify-center">
                <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white w-full md:w-1/4 pb-1 border-b-4 border-white">
                  company profile
                </p>
                <div className="w-full md:w-2/3 p-3 bg-mainColor text-white flex items-center mt-8">
                  <p>
                    Next Level Portfolio showcases skill and imagination,
                    demonstrating commitment to changing companies and enhancing
                    brands through diverse services and projects, showcasing
                    exceptional outcomes.
                  </p>
                </div>
              </div>
            </div>
            <PiDotsNine
              size={50}
              className="text-white absolute left-5 bottom-20 md:bottom-18"
            />
            <div className=" hidden md:block">
              <div className="absolute top-[50%] translate-y-[-70%] w-8 h-96 bg-mainColor right-[-16px] "></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            alt="company"
            loading="lazy"
            src={company}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
