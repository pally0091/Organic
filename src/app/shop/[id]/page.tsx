"use client";
import { ProductCard } from "@/components/Home/Products";
import Subscribe from "@/components/Subscribe";
import { products } from "@/contents/products";
import { shopData } from "@/contents/ShopData";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    //header

    <div
      id="aboutBanner"
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/shop/singleBanner.png')" }}
    >
      <p className="absolute inset-0 flex items-center justify-center lg:text-[80px] text-[50px] font-bold  mt-5">
        Shop Single
      </p>
    </div>
  );
};

const ProductTab = ({ description }: { description: string }) => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className="">
      {/* --- Tab Buttons --- */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        {/* --- Description Button --- */}
        <button
          onClick={() => setActiveTab("description")}
          className={`relative w-[80%] md:w-auto text-base text-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 overflow-hidden 
      ${
        activeTab === "description"
          ? "bg-[#274c5b] text-white shadow-lg scale-105"
          : "bg-[#e0f4f3] text-[#274c5b] hover:bg-[#c8ebe9] hover:shadow-md"
      }`}
        >
          <span
            className={`absolute inset-0 bg-gradient-to-r from-[#3a8b8f] via-[#4f9a99] to-[#274c5b] opacity-0 transition-opacity duration-500 rounded-xl ${
              activeTab === "description"
                ? "opacity-20"
                : "group-hover:opacity-30"
            }`}
          ></span>
          <span className="relative z-10 block">Product Description</span>
        </button>

        {/* --- Info Button --- */}
        <button
          onClick={() => setActiveTab("info")}
          className={`relative w-[80%] md:w-auto text-center px-10 py-4 text-base font-semibold rounded-xl transition-all duration-300 overflow-hidden 
      ${
        activeTab === "info"
          ? "bg-[#274c5b] text-white shadow-lg scale-105"
          : "bg-[#e0f4f3] text-[#274c5b] hover:bg-[#c8ebe9] hover:shadow-md"
      }`}
        >
          <span
            className={`absolute inset-0 bg-gradient-to-r from-[#4f9a99] via-[#7eb693] to-[#274c5b] opacity-0 transition-opacity duration-500 rounded-xl ${
              activeTab === "info" ? "opacity-20" : "group-hover:opacity-30"
            }`}
          ></span>
          <span className="relative z-10 block">Additional Info</span>
        </button>
      </div>

      {/* --- Tab Content --- */}
      <div className="mt-6 sm:mt-8 md:mt-10 text-center text-[#525C60] px-2 sm:px-4 md:px-6">
        {activeTab === "description" && (
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        )}
        {activeTab === "info" && (
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Here is some additional information.
          </p>
        )}
      </div>
    </div>
  );
};

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const selectedProduct = shopData.find((data) => String(data.id) == id);

  return (
    <div>
      <Banner />

      <div className="mt-[100px] px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[260px] flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
          <Image
            className="w-full rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
            src={selectedProduct?.image ?? "/Images/shop/default.png"}
            alt={selectedProduct?.name ?? "Product image"}
            width={500}
            height={500}
          />
          <p className="bg-[#274C5B] text-white px-2 py-1 rounded-md absolute top-4 left-4 text-sm sm:text-base font-semibold">
            {selectedProduct?.type}
          </p>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 px-2 sm:px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            {selectedProduct?.name}
          </h2>
          <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>

          <p className="mt-3 text-lg sm:text-xl">
            <span className="line-through text-gray-500 mr-2">
              {selectedProduct?.price}
            </span>
            <span className="font-bold text-[#274C5B]">
              {selectedProduct?.discountedPrice}
            </span>
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            {selectedProduct?.description}
          </p>

          {/* Quantity + Button */}

          <div className="flex  md:flex-row items-center gap-4 sm:gap-4 mt-9 flex-wrap ">
            {/* Quantity Section */}
            <div className="flex items-center gap-3">
              <p className="font-semibold text-lg">Quantity:</p>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="text-center  py-[3px] font-semibold rounded-lg border-2 border-[#274c5b] focus:outline-none w-[70px] transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Add to Cart Button */}
            <button
              className="group relative py-2  px-4  rounded-lg bg-[#335b6b] text-white font-semibold flex items-center gap-2
    shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#3a8b8f] via-[#4f9a99] to-[#274c5b] opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl"></span>
              <span className="relative flex items-center gap-2">
                Add to Cart
                <FaArrowAltCircleRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* product detail tab  */}
      <div className="my-[90px]  ">
        <ProductTab description={selectedProduct?.description as string} />
      </div>
      {/* related products  */}

      <div className="mb-[150px] px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold">
            Related Products
          </h1>
        </div>

        {/* Product Grid */}
        <div
          className="
      my-[40px]
      max-w-[1400px] 
      w-full 
      mx-auto 
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      gap-6 
      md:gap-[20px] 
      mb-32
    "
        >
          {products.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>

      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default ProductDetail;
