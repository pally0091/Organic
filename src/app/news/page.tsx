/* eslint-disable @next/next/no-img-element */
import { NewsContainer } from "@/components/Home/News";
import Subscribe from "@/components/Subscribe";
import { news } from "@/contents/news";
import React from "react";

const Banner = () => {
  return (
    <div
      id="aboutBanner"
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/news/news_banner.png')" }}
    >
      <p className="absolute inset-0 flex items-center justify-center lg:text-[80px] text-[50px] font-bold  mt-5">
        Recent News
      </p>
    </div>
  );
};

const NewsPage = () => {
  return (
    <div>
      <Banner />
      <div className="px-4 my-5">
        <NewsContainer data={news} home={false} />
      </div>
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default NewsPage;
