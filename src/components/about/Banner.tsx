/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner = () => {
  return (
    <div
      id="aboutBanner"
      className="mb-16"
    >
      <div className="relative text-center">
        <img
          src="/Images/about/banner_bg.png"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold ">
          About Us
        </p>
      </div>
    </div>
  );
};

export default Banner;
