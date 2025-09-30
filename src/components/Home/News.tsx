/* eslint-disable @next/next/no-img-element */
import { news } from "@/contents/news";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCircleArrowRight, FaUser } from "react-icons/fa6";

interface News {
  title: string;
  author: string;
  summary: string;
  date: string;
  image: string;
}
interface NewsContainerProps {
  data: News[];
  home: boolean;
}

export const NewsContainer: React.FC<NewsContainerProps> = ({
  data,
  home,
}: {
  data: any;
  home: boolean;
}) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-10">
        {data.map((item) => (
          <div key={item.id} className="relative rounded-3xl shadow-lg">
            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-80 rounded-3xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Date
            <div className="absolute top-1 left-4 bg-white rounded-full px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 shadow-md">
              {item.date}
            </div> */}
            {/* Date */}
            <div className="absolute top-1 left-4 bg-white rounded-full px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 shadow-md hidden sm:block">
              {item.date}
            </div>

            {/* Text Card */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-[90%] sm:w-[85%] md:w-[80%] bg-white p-6 sm:p-10 rounded-3xl shadow-md flex flex-col gap-4">
              <div className="flex items-center text-sm sm:text-base text-gray-500 mb-2">
                <FaUser className="text-[#EFD372] mr-2" />
                By {item.author}
              </div>

              <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-700 text-sm sm:text-base">
                {item.summary}
              </p>

              <Link
                href={`/news/${item.id}`}
                className={`flex gap-2 sm:gap-3 items-center justify-center px-4 sm:px-6 py-2 sm:py-3 w-max text-sm sm:text-base rounded-md font-semibold ${
                  home ? "bg-[#EFD372]" : "bg-gray-200"
                }`}
              >
                Read More <FaCircleArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const News = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-24 py-16 sm:py-20">
      {/* Section Tag */}
      <span className="tag">News</span>

      {/* Heading + Button */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0 mt-4">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold w-full lg:w-1/2 leading-snug">
          Discover weekly content about organic food, & more
        </h1>
        <button className="py-3 sm:py-4 px-6 sm:px-10 rounded-xl border-2 border-[#335b6b] font-semibold flex gap-2 items-center text-sm sm:text-base">
          <span>More News</span> <FaArrowAltCircleRight className="text-lg" />
        </button>
      </div>

      {/* News Items */}
      <NewsContainer data={news.slice(0, 2)} home={true} />
    </div>
  );
};

export default News;
