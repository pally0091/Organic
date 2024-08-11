/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/about/Banner";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex gap-5 items-center">
      <div>
        <img
          src="/Images/about/banner2.png"
          alt="About Us Banner"
        />
      </div>
      <div className="max-w-[675px] w-full">
        <span className="tag">About Us</span>
        <h1 className="text-5xl font-extrabold text-[50px] leading-tight">
          We do Creative <br /> Things for Success
        </h1>
        <div className="flex flex-col gap-5 mt-5">
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-2">
          <div className="flex gap-3">
            <img
              className="w-14 h-14"
              src="/Images/about/Tractor.png"
              alt=""
            />
            <h4 className="text-2xl font-semibold">
              Modern Agriculture Equipment
            </h4>
          </div>
          <div className="flex gap-3">
            <img
              className="w-14 h-14"
              src="/Images/about/Chemical Plant.png"
              alt=""
            />
            <h4 className="text-2xl font-semibold">
              No growth hormones are used
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Choose = () => {
  return (
    <div className="py-[190px] px-[260px] bg-[#F9F8F8]">
      <div className="flex justify-between gap-12">
        <div className="w-1/2">
          <span className="tag">Why Choose us?</span>
          <h1 className="text-5xl font-extrabold text-[50px] leading-tight mt-3">
            We do not buy from the open market & traders.
          </h1>
          <p className="mt-2">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>
          <div className="mt-9 flex flex-col gap-6">
            <div>
              <div className="bg-[#ECECEC] flex items-center gap-2 p-8 w-[340px] rounded-full">
                <img
                  src="/Images/Icon.png"
                  alt=""
                  className="w-6 h-6"
                />
                <p className="font-semibold text-xl">100% Natural Product</p>
              </div>
              <p className="text-lg ms-14 mt-3 text-[#525C60]">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>
            <div>
              <div className="bg-[#ECECEC] flex items-center gap-2 p-8 w-[340px] rounded-full">
                <img
                  src="/Images/Icon.png"
                  alt=""
                  className="w-6 h-6"
                />
                <p className="font-semibold text-xl">Increases resistance</p>
              </div>
              <p className="text-lg ms-14 mt-3 text-[#525C60]">
                Filling, and temptingly healthy, our Biona Organic Granola with
                Wild Berries is just the thing
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/Images/about/choose.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-[90px] mx-[140px]">grid things</div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Choose />
    </div>
  );
};

export default AboutPage;
