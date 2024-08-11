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
          src="/Images/shop/singleBanner.png"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold ">
          Shop Single
        </p>
      </div>
    </div>
  );
};

const ProductDetail = ({ params }: { params: any }) => {
  const name = params.id;
  console.log(params.id);
  console.log(name);
  return (
    <div>
      <Banner />
      <p>{name}</p>
    </div>
  );
};

export default ProductDetail;
