/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/Subscribe";
import React from "react";

const Banner = () => {
  return (
    <div id="aboutBanner">
      <div className="relative text-center">
        <img
          src="/Images/quality/quality-banner.jpg"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-[80px] font-bold ">
          Quality Standard
        </p>
      </div>
    </div>
  );
};

const QualityPage = () => {
  return (
    <div>
      <Banner />
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default QualityPage;
