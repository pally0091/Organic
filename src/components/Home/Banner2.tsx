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
    <div className="flex flex-col gap-10 w-full max-w-[600px]">
      {/* About Us Section */}
      <div className="flex flex-col gap-4">
        <span className="text-sm md:text-base font-semibold text-[#274C5B]">
          About Us
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
          We Believe in Working Accredited Farmers
        </h1>
        <p className="text-gray-700 text-base md:text-lg">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry&lsquo;s standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex flex-col gap-6">
        {data.map((item) => (
          <div key={item.id} className="flex gap-4 md:gap-6 items-start">
            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
              <p className="text-sm md:text-base text-gray-600">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <Link
        href="#"
        className="flex gap-2 items-center justify-center px-6 py-3 bg-[#274C5B] w-max text-white text-base rounded-md hover:bg-[#1f3b44] transition"
      >
        Shop Now
        <FaCircleArrowRight />
      </Link>
    </div>
  );
};

const Banner2 = () => {
  return (
    <div className="bg-[#F9F8F8] py-16 px-6 md:px-10 lg:px-24">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image Section প্রথমে দিলে বামে থাকবে */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Images/F-1.png"
            alt="Farm Banner"
            width={900}
            height={900}
            className="w-full h-auto rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Text Section */}
        <TextContainer />
      </div>
    </div>
  );
};

export default Banner2;
