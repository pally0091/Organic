/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/Subscribe";
import React from "react";

const Banner = () => {
  return (
    <div id="aboutBanner">
      <div className="relative text-center">
        <img
          src="/Images/quality/quality-banner.jpg"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-[80px] font-bold ">
          Quality Standard
        </p>
      </div>
    </div>
  );
};

const QualityPage = () => {
  return (
    <div>
      <Banner />
      <div className="px-[260px] mt-[180px]">
        <div className="w-full">
          <img
            src="/Images/quality/quality_intro.jpg"
            alt=""
          />
        </div>
        <div className="mt-[80px] px-[230px]">
          <h1 className="text-5xl font-bold">Organic Store Services</h1>

          <p className="mt-7">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. <br />
            <br />
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and auncover many web sites still
            in their infancy. Various versions have evolved over the years
          </p>
          <div className="my-[70px]">
            <div className="flex gap-5">
              <div className="rounded-2xl max-w-[380px] w-full overflow-hidden">
                <img
                  src="/Images/quality/Photo.jpg"
                  alt=""
                />
              </div>
              <div className="py-16 px-11 bg-[#f9f8f8] rounded-2xl">
                <h3 className="text-2xl font-semibold">Why Organic</h3>
                <p className="mt-2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="py-16 px-11 bg-[#f9f8f8] rounded-2xl">
                <h3 className="text-2xl font-semibold">Speciality Produce</h3>
                <p className="mt-2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </p>
              </div>
              <div className="rounded-2xl max-w-[380px] w-full overflow-hidden">
                <img
                  src="/Images/quality/Photo (1).jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">We farm your land</h1>
            <p className="mt-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="mt-[60px] flex items-center gap-7">
            <div className="bg-[#f9f8f8] p-4 pe-14 rounded-full flex items-center gap-6">
              <span className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-[#7eb693] text-white text-2xl font-semibold">
                01
              </span>
              <p className="text-2xl font-semibold">Best quality support</p>
            </div>
            <div className="bg-[#f9f8f8] p-4 pe-14 rounded-full flex items-center gap-6">
              <span className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-[#7eb693] text-white text-2xl font-semibold">
                02
              </span>
              <p className="text-2xl font-semibold">Money back guarantee</p>
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
