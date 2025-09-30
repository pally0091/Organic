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
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/shop/banner.png')" }}
    >
      <p className="absolute inset-0 flex items-center justify-center lg:text-[80px] text-[60px] font-bold  mt-5">
        Shop
      </p>
    </div>
  );
};

const ProductsList = () => {
  return (
    <div className="mt-10 px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {shopData.map((item) => (
        <Link key={item.id} href={`/shop/${item.id}`}>
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
