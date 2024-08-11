/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/Subscribe";
import React from "react";

const Banner = () => {
  return (
    <div id="aboutBanner">
      <div className="relative text-center">
        <img
          src="/Images/news/news_banner.png"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold ">
          Recent News
        </p>
      </div>
    </div>
  );
};

const NewsPage = () => {
  return (
    <div>
      <Banner />
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default NewsPage;
