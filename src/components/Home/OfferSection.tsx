import { offeredProducts } from "@/contents/products";
import Link from "next/link";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { ProductCard } from "./Products";

const OfferSection = () => {
  const data = offeredProducts;
  return (
    <div className="mt-20 lg:mt-0">
      <div className="bg-[#274C5B] px-6 py-16 md:px-10 lg:px-20 xl:px-[150px] xl:py-[200px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-center lg:text-left">
            <span className="tag mb-2">Offer</span>
            <h1 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl">
              We Offer Organic For You
            </h1>
          </div>
          <div>
            <Link
              href="#"
              className="flex gap-2 items-center justify-center px-6 py-3 bg-[#EFD372] w-max text-sm md:text-base rounded-md font-semibold hover:bg-[#e5c756] transition"
            >
              View All Products
              <FaCircleArrowRight />
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {data.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
