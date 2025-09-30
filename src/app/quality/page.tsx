/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/Subscribe";
import React from "react";

const Banner = () => {
  return (
    <div
      id="aboutBanner"
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/quality/quality-banner.jpg')" }}
    >
      <p className="absolute inset-0 flex items-center justify-center lg:text-[80px] text-[60px] font-bold  mt-5">
        Quality Standard
      </p>
    </div>
  );
};

const QualityPage = () => {
  return (
    <div>
      <Banner />

      <div className="px-4 sm:px-8 md:px-16 lg:px-[180px] xl:px-[260px] mt-16 sm:mt-20 md:mt-28 lg:mt-[180px]">
        <div className="w-full">
          <img
            src="/Images/quality/quality_intro.jpg"
            alt=""
            className="w-full rounded-lg"
          />
        </div>

        {/* Intro */}
        <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-[80px] px-2 sm:px-6 md:px-12 lg:px-[100px] xl:px-[230px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left">
            Organic Store Services
          </h1>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-700 text-center lg:text-left">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at a layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. <br />
            <br />
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and uncover many web sites still
            in their infancy. Various versions have evolved over the years.
          </p>

          {/* Two sections */}
          <div className="my-12 md:my-16 lg:my-[70px] space-y-6">
            {/* 1st row */}
            <div className="flex flex-col lg:flex-row gap-5 items-center">
              <div className="rounded-2xl w-full lg:max-w-[380px] overflow-hidden">
                <img
                  src="/Images/quality/Photo.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-10 px-6 sm:px-8 md:px-10 bg-[#f9f8f8] rounded-2xl w-full">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Why Organic
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  Page editors now use Lorem Ipsum as their default model text,
                  and uncover.
                </p>
              </div>
            </div>

            {/* 2nd row */}
            <div className="flex flex-col lg:flex-row gap-5 items-center">
              <div className="py-10 px-6 sm:px-8 md:px-10 bg-[#f9f8f8] rounded-2xl w-full order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Speciality Produce
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  Page editors now use Lorem Ipsum as their default model text,
                  and uncover.
                </p>
              </div>
              <div className="rounded-2xl w-full lg:max-w-[380px] overflow-hidden order-1 lg:order-2">
                <img
                  src="/Images/quality/Photo (1).jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Heading */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left">
              We farm your land
            </h1>
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-700 text-center lg:text-left">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at a layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>

          {/* Two points */}
          <div className="mt-10 md:mt-14 lg:mt-[60px] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-7">
            <div className="bg-[#f9f8f8] p-4 sm:pe-10 rounded-full flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <span className="w-12 h-12 sm:w-[70px] sm:h-[70px] flex justify-center items-center rounded-full bg-[#7eb693] text-white text-lg sm:text-2xl font-semibold">
                01
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Best quality support
              </p>
            </div>
            <div className="bg-[#f9f8f8] p-4 sm:pe-10 rounded-full flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <span className="w-12 h-12 sm:w-[70px] sm:h-[70px] flex justify-center items-center rounded-full bg-[#7eb693] text-white text-lg sm:text-2xl font-semibold">
                02
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Money back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default QualityPage;
