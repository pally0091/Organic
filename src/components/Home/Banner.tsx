import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      id="banner"
      className="relative"
    >
      <div className="">
        <Image
          src="/Images/banner.jpg"
          alt="Banner"
          width={1920}
          height={900}
        />
      </div>
      <div className="absolute top-0 flex items-center justify-start w-full h-full px-[260px]">
        <div className="max-w-[575px] w-full flex flex-col gap-[20px]">
          <span className="tag">100% Natural Food</span>
          <h1 className="text-5xl font-extrabold text-[70px] leading-tight">
            Choose the best healthier way of life
          </h1>
          <Link
            href="#"
            className="flex gap-1 items-center justify-center p-[26px] bg-[#EFD372] w-[220px] text-base rounded-md"
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
