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

const AboutPage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
    </div>
  );
};

export default AboutPage;
