/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner = () => {
  return (
    <div
      id="shopBanner"
      className="mb-16"
    >
      <div className="relative text-center">
        <img
          src="/Images/shop/banner_bg.png"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold ">
          Shop
        </p>
      </div>
    </div>
  );
};

const ShopPage = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default ShopPage;
