import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      id="banner"
      className="relative w-full h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/banner.jpg')" }}
    >
      <div className="absolute top-0 left-0 flex items-center justify-start w-full h-full px-6 md:px-20 lg:px-[260px]">
        <div className="max-w-[575px] w-full flex flex-col gap-[20px] md:gap-6">
          <span className="tag text-sm md:text-base lg:text-2xl">
            100% Natural Food
          </span>

          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-[55px] leading-snug md:leading-tight">
            Choose the best healthier way of life
          </h1>

          <Link
            href="#"
            className="group relative flex items-center justify-center gap-2 
                 px-4 py-2 md:p-6 w-[160px] md:w-[220px] text-sm md:text-base 
                 font-semibold text-gray-800 rounded-md
                 bg-gradient-to-r from-[#EFD372] to-[#f7e49d]
                 transition-all duration-500 ease-out
                 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
          >
            {/* Text */}
            <span className="relative z-10">Explore Now</span>

            {/* Icon */}
            <FaCircleArrowRight
              className="relative z-10 text-lg transition-all duration-500 ease-out
                   group-hover:translate-x-2 group-hover:rotate-12"
            />

            {/* Animated glow background */}
            <span
              className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 
                   bg-gradient-to-r from-[#fff4b8]/30 to-[#ffea8a]/40 
                   blur-md transition-opacity duration-500"
            ></span>

            {/* Shimmer swipe effect */}
            <span className="absolute inset-0 rounded-md overflow-hidden">
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent 
                     translate-x-[-200%] group-hover:translate-x-[200%] 
                     transition-transform duration-1000 ease-in-out"
              ></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
