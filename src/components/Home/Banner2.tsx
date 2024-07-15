/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const TextContainer = () => {
  const data = [
    {
      id: 1,
      title: "Organic Foods Only",
      content: "Simply dummy text of the printing and typesetting industry.",
      icon: "/Images/icon1.png",
    },
    {
      id: 2,
      title: "Quality Standards",
      content: "Simply dummy text of the printing and typesetting industry.",
      icon: "/Images/icon2.png",
    },
  ];
  return (
    <div className="max-w-[700px] w-full flex flex-col gap-[45px]">
      <div className="flex flex-col gap-[15px]">
        <span className="tag">About Us</span>
        <h1 className="text-5xl font-extrabold text-[50px] leading-tight">
          We Believe in Working Accredited Farmers
        </h1>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>
      <div className="flex flex-col gap-[30px] max-w-[550px] w-full">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            <div className="w-[100px] h-[100px]">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-between max-w-[440px] w-full">
              <h2 className="text-[25px] font-bold">{item.title}</h2>
              <p className="text-[18px]">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="#"
        className="flex gap-1 items-center justify-center p-[26px] bg-[#274C5B] w-[220px] text-base rounded-md text-white"
      >
        Shop Now
        <FaCircleArrowRight />
      </Link>
    </div>
  );
};

const Banner2 = () => {
  return (
    <div className="bg-[#F9F8F8] flex ps-[100px] pe-[250px] pt-[90px] pb-[110px] items-center mb-[150px]">
      <div className="max-w-[910px] w-full">
        <Image
          src="/Images/F-1.png"
          alt="bf"
          width={900}
          height={900}
        />
      </div>
      <div>
        <TextContainer />
      </div>
    </div>
  );
};

export default Banner2;
