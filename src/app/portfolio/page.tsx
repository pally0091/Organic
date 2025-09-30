/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/Subscribe";
import { portfolioLists } from "@/contents/portfolioList";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div
      id="aboutBanner"
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/Images/portfolio/portfolio-banner.png')",
      }}
    >
      <p className="absolute inset-0 flex items-center justify-center lg:text-[80px] text-[50px] font-bold  mt-5">
        Portfolio Standard
      </p>
    </div>
  );
};

const PortfolioList: React.FC = () => {
  return (
    <div className="mt-16 px-4 sm:px-6 md:px-12 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-11">
      {portfolioLists.map((item) => (
        <Link key={item.id} href={`/portfolio/${item.id}`}>
          <div className="group cursor-pointer">
            {/* Image with overlay */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                className="w-full h-auto object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 m-4 sm:m-6 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300">
                <p className="text-xl sm:text-2xl md:text-[24px] font-bold bg-[#7eb693] rounded-full p-3">
                  <MdKeyboardArrowRight className="text-white" />
                </p>
              </div>
            </div>

            {/* Title & Type */}
            <h4 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold">
              {item.title}
            </h4>
            <span className="text-gray-500 text-sm sm:text-base">
              {item.type}
            </span>
          </div>
        </Link>
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
