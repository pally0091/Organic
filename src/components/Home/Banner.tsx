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
            className="flex gap-2 items-center justify-center px-4 py-2 md:p-6 bg-[#EFD372] w-[160px] md:w-[220px] text-sm md:text-base rounded-md"
          >
            Explore Now
            <FaCircleArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
