/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner = () => {
  return (
    <div
      id="aboutBanner"
      className="mb-16"
    >
      <div className="relative text-center">
        <img
          src="/Images/service/Banner Image.png"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold ">
          Services
        </p>
      </div>
    </div>
  );
};

const ServicePage = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default ServicePage;
