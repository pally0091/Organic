/* eslint-disable @next/next/no-img-element */
import { NewsContainer } from "@/components/Home/News";
import Subscribe from "@/components/Subscribe";
import React from "react";

interface News {
  title: string;
  author: string;
  summary: string;
  date: string;
  image: string;
}
interface NewsContainerProps {
  data: News[];
}
const news: News[] = [
  {
    title: "The Benefits of Vitamin D & How to Get It",
    author: "Rachi Card",
    summary:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    date: "25 Nov",
    image: "/Images/news/news1.png",
  },
  {
    title: "Our Favourite Summertime Tommeto",
    author: "Rachi Card",
    summary:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    date: "25 Nov",
    image: "/Images/news/news2.png",
  },
  {
    title: "Benefits of Vitamin C & How to Get It",
    author: "Rachi Card",
    summary:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    date: "25 Nov",
    image: "/Images/news/news3.png",
  },
  {
    title: "Research More Organic Foods",
    author: "Rachi Card",
    summary:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    date: "25 Nov",
    image: "/Images/news/news4.png",
  },
  {
    title: "Everyday Fresh Fruites",
    author: "Rachi Card",
    summary:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    date: "25 Nov",
    image: "/Images/news/news5.png",
  },
  {
    title: "Don’t Use Plastic Product! it’s Kill Nature",
    author: "Rachi Card",
    summary:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    date: "25 Nov",
    image: "/Images/news/news6.png",
  },
];

const Banner = () => {
  return (
    <div id="aboutBanner">
      <div className="relative text-center">
        <img
          src="/Images/news/news_banner.png"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-[80px] font-bold ">
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
      <div className="mt-[120px] px-[260px]">
        <NewsContainer
          data={news}
          home={false}
        />
      </div>
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default NewsPage;
