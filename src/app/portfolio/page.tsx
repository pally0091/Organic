/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/Subscribe";
import { portfolioLists } from "@/contents/portfolioList";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div id="aboutBanner">
      <div className="relative text-center">
        <img
          src="/Images/portfolio/portfolio-banner.png"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-[80px] font-bold ">
          Portfolio Standard
        </p>
      </div>
    </div>
  );
};

const PortfolioList: React.FC = () => {
  return (
    <div className="mt-[150px] px-[260px] grid grid-cols-3 gap-x-6 gap-y-11">
      {portfolioLists.map((item) => (
        <div
          key={item.id}
          className="group"
        >
          <div className="rounded-2xl overflow-hidden relative ">
            <img
              className="w-full"
              src={item.image}
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 m-6 rounded-2xl scale-0 group-hover:scale-100 transition-scale duration-300">
              <p className="text-[24px] font-bold bg-[#7eb693] rounded-full p-3">
                <MdKeyboardArrowRight className="text-white" />
              </p>
            </div>
          </div>
          <h4 className="mt-5 text-2xl font-semibold">{item.title}</h4>
          <span className="tag-two">{item.type}</span>
        </div>
      ))}
    </div>
  );
};

const Portfolio = () => {
  return (
    <div>
      <Banner />
      <PortfolioList />
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default Portfolio;
