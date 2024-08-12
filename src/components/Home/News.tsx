/* eslint-disable @next/next/no-img-element */
import { news } from "@/contents/news";
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {data.map((item: any, index: React.Key | null | undefined) => (
          <div
            key={index}
            className="relative rounded-3xl shadow-lg mt-10"
          >
            <img
              src={item.image}
              alt={index?.toLocaleString()}
              className="w-full object-cover rounded-3xl"
            />
            <div className="absolute w-20 h-20 top-6 left-6 bg-white rounded-full p-3 text-xl text-center font-semibold text-gray-700">
              {item.date}
            </div>
            <div className="absolute -bottom-16 left-[2.5%] w-[90%] bg-white p-14 rounded-3xl m-4 shadow-md">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2 flex items-center gap-2">
                  <FaUser className="text-[#EFD372]" />
                  By {item.author}
                </span>
              </div>
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.summary}</p>
              <Link
                href="#"
                className={`flex gap-1 items-center justify-center p-[20px] w-40 text-base rounded-md font-semibold ${
                  home ? "bg-[#EFD372]" : ""
                }`}
              >
                Read More
                <FaCircleArrowRight />
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
    <div className="px-[260px] py-[175px]">
      <span className="tag">News</span>
      <div className="flex justify-between items-end">
        <h1 className="text-[50px] font-semibold w-1/2">
          Discover weekly content about organic food, & more
        </h1>
        <button className="py-6 px-12 rounded-xl border-2 border-[#335b6b] font-semibold flex gap-2 items-center">
          <span>More News</span> <FaArrowAltCircleRight className="text-lg" />
        </button>
      </div>
      <NewsContainer
        data={news.slice(0, 2)}
        home={true}
      />
    </div>
  );
};

export default News;
