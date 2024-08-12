/* eslint-disable @next/next/no-img-element */
import { ProductCard } from "@/components/Home/Products";
import Subscribe from "@/components/Subscribe";
import { shopData } from "@/contents/ShopData";
import Link from "next/link";
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
        <p className="absolute inset-0 flex items-center justify-center text-[80px] font-bold ">
          Shop
        </p>
      </div>
    </div>
  );
};

const ProductsList = () => {
  return (
    <div className="mt-[90px] px-[260px] grid grid-cols-4 gap-[20px]">
      {shopData.map((item) => (
        <Link
          key={item.id}
          href={`/shop/${item.id}`}
        >
          <ProductCard data={item} />
        </Link>
      ))}
    </div>
  );
};

const ShopPage = () => {
  return (
    <div>
      <Banner />
      <ProductsList />
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default ShopPage;
