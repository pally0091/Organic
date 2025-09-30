/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner = () => {
  return (
    <div
      id="aboutBanner"
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/about/banner.png')" }}
    >
      <p className="absolute inset-0 flex items-center justify-center lg:text-[80px] text-[60px] font-bold  mt-5">
        About Us
      </p>
    </div>
  );
};

export default Banner;
